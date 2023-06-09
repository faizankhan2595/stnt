import { useState, useEffect } from "react";
import { Button, DatePicker, Input, Table } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Helper from "../Helper";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import dayjs from "dayjs";
import CustomIcon from 'components/util-components/CustomIcon'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { Edit, ResetPass, UpdateStatus } from "assets/svg/icon";
// import { ChangeAgStatus } from "assets/svg/icon";
import { Radio, Modal } from 'antd';
import axios from "axios";
import moment from "moment";

const users = [
  {
    Sr_No: 1,
    User_Name: 'JohnDoe',
    Emai_ID: 'john.doe@example.com',
    Phone_Number: '+1-555-555-5555',
    Account_Created_On: '2021-01-01',
    Status: 'Active'
  },
  {
    Sr_No: 2,
    User_Name: 'JaneSmith',
    Emai_ID: 'jane.smith@example.com',
    Phone_Number: '+1-555-555-5556',
    Account_Created_On: '2021-01-02',
    Status: 'Inactive'
  },
  {
    Sr_No: 3,
    User_Name: 'BobJohnson',
    Emai_ID: 'bob.johnson@example.com',
    Phone_Number: '+1-555-555-5557',
    Account_Created_On: '2021-01-03',
    Status: 'Active'
  }
];


const UserManage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState()

  const getAllUsers = async (page, pageSize) => {
    const startIndex = (page - 1) * pageSize;

    try {
      const response = await axios.get(`https://api.stntinternational.com/api/users?size=${pageSize}&page=${page}`, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });

      const users = response.data.data.rows;
      setTotal(response.data.data.count)
      setAllUsers(users);
    } catch (error) {
      // Handle the error appropriately
      console.error('Error retrieving users:', error);
    }
  };

  const handleTableChange = (pagination, filters, sorter) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const [value, setValue] = useState(1);
  const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);
  const [updateId, setUpdateId] = useState(null)
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  const changeStudHandleOk = async () => {
    console.log(updateId,value);
    const data = {
      "status":value===1?"active":"terminate",
      "userId": updateId
    }
    const res1 = await axios.put(`https://api.stntinternational.com/api/users/change-status`,data,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    console.log(res1);
    setIsChangeStudModalOpen(false);
  };
  const onRadChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const deleteUser = async (id) => {
    const res1 = await axios.delete(`https://api.stntinternational.com/api/users/delete/${id}`,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    console.log(res1);
  }
  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
    },
    {
      title: "User Name",
      dataIndex: "firstName",
    },
    {
      title: "Emai ID",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Account Created On",
      dataIndex: "createdAt",
      render:(date)=>{
        return <>{moment(date).format('DD-MM-YYYY HH:MM')}</>
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <p
            className={`${text !== "active" ? "text-danger" : "text-success"
              } font-weight-semibold`}
          >
            {text}
          </p>
        );
      },
    },
    {
      title: "Action",
      // dataIndex: 'action',
      render: (record) => {
        return (
          <>
            <EllipsisDropdown
              menu={
                <Menu>
                  <Menu.Item>
                    <span onClick={() => deleteUser(record.id)}> <DeleteOutlined className='mr-2 ' />Delete</span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`user_management/edit_user/?id=${record.id}`} className='d-flex align-items-center' ><CustomIcon className='mr-2' svg={Edit} />Edit</Link>
                  </Menu.Item>
                  <Menu.Item onClick={() =>{
                    setUpdateId(record.id)
                    setValue(record.status==='active'?1:2)
                    setIsChangeStudModalOpen(true)
                  } 
                  }>
                    <span className="d-flex align-items-center" ><span className='mr-2'><UpdateStatus /></span>Update Status</span >
                  </Menu.Item>
                  {/* <Menu.Item>
                    <Link to='/app/events/sport-event-funds/details' className="d-flex align-items-center" ><span className='mr-2'><ResetPass /></span>Reset Password</Link >
                  </Menu.Item> */}
                </Menu>
              }
            />
          </>
        );
      },
    },
  ];
  
  useEffect(() => {
    getAllUsers(currentPage, pageSize);
  }, [currentPage, pageSize]);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="membershipPlanTableSearchFilter d-flex mb-3">
          <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
          <DatePicker
            style={{
              width: 200,
            }}
            className="ml-2"
            defaultValue={dayjs("01/01/2023", "DD/MM/YYYY")}
            format={"DD/MM/YYYY"}
          />
        </div>
        <Button className="bg-info text-white">
          <Link to={"user_management/register_new_user"}>Register New User</Link>
        </Button>
      </div>
      <Table
        dataSource={allUsers}
        columns={columns}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: total,
          showSizeChanger: true,
          pageSizeOptions: ['10'],
        }}
        onChange={handleTableChange}
      />
      <Modal
        width={600}
        footer={null}
        visible={isChangeStudModalOpen}
        // onOk={changeStudHandleOk}
        onCancel={() => setIsChangeStudModalOpen(false)}
      >
        <div className="d-flex my-3 flex-column w-75">
          <h3 className="mb-4 d-flex align-items-center">
            {" "}
            <ChangeAgStatus />{" "}
            <span className="ml-2">Change User Status</span>
          </h3>
          <Radio.Group className="ml-5" onChange={onRadChange} value={value}>
            <Radio value={1}>Active</Radio>
            <Radio className="ml-3" value={2}>Terminated</Radio>
          </Radio.Group>
        </div>
        <div
          style={{ gap: "10px" }}
          className="mt-5 d-flex justify-content-end"
        >
          <Button
            className="px-4 font-weight-semibold"
            onClick={() => setIsChangeStudModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="px-4 font-weight-semibold text-white bg-info"
            onClick={() => {
              changeStudHandleOk()
            }}
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default UserManage;

const ChangeAgStatus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={48}
    height={48}
    fill="none"
  >
    <path fill="url(#a)" d="M0 0h48v48H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00195)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={512}
        height={512}
      />
    </defs>
  </svg>
);