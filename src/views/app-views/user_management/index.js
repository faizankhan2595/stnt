import React,{useState} from "react";
import { Button, DatePicker, Input } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Helper from "../Helper";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import dayjs from "dayjs";
import CustomIcon from 'components/util-components/CustomIcon'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { Edit, History, ResetPass, UpdateStatus } from "assets/svg/icon";
import { ChangeAgStatus } from "assets/svg/icon";
import { Radio,Modal } from 'antd';
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
    const [value, setValue] = useState(1);
    const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  const changeStudHandleOk = () => {
    setIsChangeStudModalOpen(false);
  };
  const onRadChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const columns = [
    {
      title: "Sr No",
      dataIndex: "Sr_No",
    },
    {
      title: "User Name",
      dataIndex: "User_Name",
    },
    {
      title: "Emai ID",
      dataIndex: "Emai_ID",
    },
    {
      title: "Phone Number",
      dataIndex: "Phone_Number",
    },
    {
      title: "Account Created On",
      dataIndex: "Account_Created_On",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => {
        return (
          <p
            className={`${
              text !== "Active" ? "text-danger" : "text-success"
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
                  <span onClick={() => console.log('del')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
                <Menu.Item>
                  <Link to={`event_list/update/${record.id}`} className='d-flex align-items-center' ><CustomIcon className='mr-2' svg={Edit} />Edit</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link onClick={()=>setIsChangeStudModalOpen(true)} className="d-flex align-items-center" ><span className='mr-2'><UpdateStatus /></span>Update Status</Link >
                </Menu.Item>
                <Menu.Item>
                  <Link to='/app/events/sport-event-funds/details' className="d-flex align-items-center" ><span className='mr-2'><ResetPass /></span>Reset Password</Link >
                </Menu.Item>
              </Menu>
              }
            />
          </>
        );
      },
    },
  ];
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
          <Link to={"travel_agency/add_new"}>Register New User</Link>
        </Button>
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
              setIsChangeStudModalOpen(false);
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
