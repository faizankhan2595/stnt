import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { clients } from '../data'
import Helper from '../Helper'
import './Members.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import CustomIcon from 'components/util-components/CustomIcon'
import { Export, History } from 'assets/svg/icon'
import axios from 'axios'
const dataArray = [
  {
    Sr_No: 1,
    Member_Name: "John Doe",
    File_Name: "file1.pdf",
    Travel_Agency: "ABC Travel",
    Date_of_Import: "2022-05-07",
    No_Travelers_Imported: 10,
    Imported_By: "Jane Smith",
    Status: "Active"
  },
  {
    Sr_No: 2,
    Member_Name: "Alice Johnson",
    File_Name: "file2.pdf",
    Travel_Agency: "XYZ Travel",
    Date_of_Import: "2022-05-06",
    No_Travelers_Imported: 5,
    Imported_By: "Bob Williams",
    Status: "Active"
  },
  {
    Sr_No: 3,
    Member_Name: "Michael Lee",
    File_Name: "file3.pdf",
    Travel_Agency: "PQR Travel",
    Date_of_Import: "2022-05-05",
    No_Travelers_Imported: 8,
    Imported_By: "Mary Chen",
    Status: "Active"
  }
];


export default function Members() {

  const [membersData, setMembersData] = useState([])

  const onDeleteData = (record) => {
    console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteMember(record)
      }
    })
  }

  const columns = [
    {
      title: 'Sr No',
      dataIndex: 'Sr_No',
    },
    {
      title: "File Name",
      dataIndex: 'File_Name',
    },
    {
      title: "Travel Agency",
      dataIndex: 'Travel_Agency',
    },
    {
      title: "Date of Import",
      dataIndex: 'Date_of_Import',
    },
    {
      title: "No Travelers Imported",
      dataIndex: 'No_Travelers_Imported',
    },
    {
      title: "Imported By",
      dataIndex: 'Imported_By',
    },
    {
      title: "Status",
      dataIndex: 'Status',
      render: text => {
        return <p className={`${text !== "Active" ? 'text-danger' : "text-success"} font-weight-semibold`}>{text}</p>
      }
    },
    {
      title: "Action",
      // dataIndex: 'action',
      render: (record) => {
        return (
          <>
            <EllipsisDropdown menu={
              <Menu>
                <Menu.Item>
                  <Link to={`members/memberdetails/${record.id}`} > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record)}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  const getMembers = () => {
    axios.get("http://127.0.0.1:3333/members").then((response) => {
      // console.log(response)  
      if (response.data.status) {
        setMembersData(response.data.result);
      } else {
        console.log(response)
      }
    });
  }

  const deleteMember = (record) => {
    axios.delete("http://127.0.0.1:3333/members/delete", { data: { id: record.id } }).then((response) => {
      console.log(response)
      if (response.data) {
        setMembersData((pre) => {
          return pre.filter((member) => member.id !== record.id)
        })
      }
      alert(response.data)
    }).catch((err) => {
      console.log(err)
    });
  }

  useEffect(() => {
    getMembers();
  }, [])


  return (
    <div>
      <div className='memberDetailTableSearchFilter'>
        <form className='memberDetailSearch'>
          <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
        </form>
        <div className='memberDetailFilter'>
          <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
        </div>
        <div className='memberDetailFilter'>
          <CustomIcon svg={Export} /> <span className='memberDetailFilterText'> Export</span>
        </div>

      </div>
      <div>
        <Helper clients={dataArray} attribiue={columns} />
      </div>
    </div>
  )
}
