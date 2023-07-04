import React,{useState} from 'react'
import { Button, Checkbox, Input } from 'antd';
import { ChangeAgStatus, ClaimReqDet } from 'assets/svg/icon'
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Helper from "../../Helper";
import CustomIcon from 'components/util-components/CustomIcon'
import { DeleteOutlined } from '@ant-design/icons'
import { Edit,   UpdateStatus } from "assets/svg/icon";
import { Radio, Modal } from "antd";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from 'services/apiService';
const data = [
    {
      Sr_No: 1,
      Document_Type: 'Passport',
      Mandatory: true,
      Last_Updated_On: '2022-05-10',
      Status: 'Active'
    },
    {
      Sr_No: 2,
      Document_Type: 'Driver\'s License',
      Mandatory: false,
      Last_Updated_On: '2022-05-09',
      Status: 'Inactive'
    },
    {
      Sr_No: 3,
      Document_Type: 'ID Card',
      Mandatory: true,
      Last_Updated_On: '2022-05-08',
      Status: 'Active'
    }
  ];
  
const ViewDoc = () => {
  const [users, setUsers] = useState(data);
  const [title, setTitle] = useState('')
  const { id } = useParams();
  const [updateStatusVal, setUpdateStatusVal] = useState(null);
  const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);
  const [value, setValue] = useState(1);
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  const updateStatus = () => {
    let cloneClaim = users;
    let claimData = cloneClaim.map((elem, index) => {
      if (elem.Sr_No === updateStatusVal) {
        if (value === 1) {
          return {...elem,Status:"Active"};
        } else {
          return {...elem,Status:"Inactive"};
        }
      } else {
        return elem;
      }
    });
    setUsers(claimData);
    console.log(claimData);
  };
  const changeStudHandleOk = () => {
    setIsChangeStudModalOpen(false);
  };
  const onRadChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const columns = [
    {
      title: "Sr No",
      dataIndex: "Sr_No",
    },
    {
      title: "Document Type",
      dataIndex: "Document_Type",
    },
    {
      title: "Mandatory",
      dataIndex: "Mandatory",
      render:(val)=>{
        return(
            <>
             <Checkbox checked={val} />
            </>
        )
      }
    },
    {
      title: "Last Updated On",
      dataIndex: "Last_Updated_On",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => {
        return (
          <p
            className={`${
              text !== "active" ? "text-danger" : "text-success"
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
                  <Link to={`event_list/update/${record.id}`} className='d-flex align-items-center' ><CustomIcon className='mr-2' svg={Edit} />Edit</Link>
                </Menu.Item>
                <Menu.Item>
                <Link
                      onClick={() => {
                        setUpdateStatusVal(record.Sr_No);
                        setIsChangeStudModalOpen(true);
                        setValue(record.Status==='Active'?1:2)
                      }}
                      className="d-flex align-items-center"
                    ><span className='mr-2'><UpdateStatus /></span>Update Status</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => console.log('del')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
              }
            />
          </>
        );
      },
    },
  ];

  const getCategory = async (id) => {
    const res1 = await axios.get(`${BASE_URL}/api/claim-category/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setTitle(res1.data.claimCategory.title)
    const users = res1.data.claimDocuments.map((elem,i)=>{
      return {
        id:elem.id,
        claimCategoryId:elem.claimCategoryId,
        Sr_No: i+1,
        Document_Type: elem.title,
        Mandatory: elem.isMandatory,
        Last_Updated_On: elem.updatedAt,
        Status: elem.status
      }
    })
    setUsers(users)
  };

  useEffect(() => {
    if (id) {
      getCategory(id);
    }
  }, [])
  
  return (
    <div>
        <div className='p-3 bg-white'>
            <p>Claim Document Management / <span style={{color:'black'}}>View Documents</span> </p>
            <div className='d-flex'>
                <div className='claimDocManSvg'>
                    <ClaimReqDet/>
                </div>
                <div className='ml-2'><h5 className='m-0 mt-2'>{title?title:"Medical & Other Expenses"}</h5><p>View & add different types of document  for claim category to be uploaded by travelers.</p></div>
            </div>
        </div>
        <div className='d-flex justify-content-between my-3'>
        <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
          <Button className='bg-info text-white' > <Link className='text-white' to={"/app/claim_document_manager/view_document/add_new_document"}>New Document Category</Link></Button>
        </div>
        <Helper clients={users} attribiue={columns} />
        <Modal
        width={600}
        footer={null}
        visible={isChangeStudModalOpen}
        onOk={changeStudHandleOk}
        onCancel={() => setIsChangeStudModalOpen(false)}
      >
        <div className="d-flex my-3 flex-column w-75">
          <h3 className="mb-4 d-flex align-items-center">
            {" "}
            <ChangeAgStatus />
            <span className="ml-2">Change Document Type Status</span>
          </h3>
          <Radio.Group className="ml-5" onChange={onRadChange} value={value}>
            <Radio value={1}>Active</Radio>
            <Radio className="ml-3" value={2}>
              In Active
            </Radio>
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
              updateStatus();
              setIsChangeStudModalOpen(false);
            }}
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default ViewDoc