import React, { useState } from "react";
import { Button, DatePicker, Image, Input } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Helper from "../Helper";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import dayjs from "dayjs";
import CustomIcon from "components/util-components/CustomIcon";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Edit, History, ResetPass, UpdateStatus } from "assets/svg/icon";
import { ChangeAgStatus } from "assets/svg/icon";
import { Radio, Modal } from "antd";
const data = [
  {
    Sr_No: 1,
    Claim_Category: "Medical",
    Updated_By: "JohnDoe",
    Last_Updated_On: "2021-01-05",
    Status: "Active",
  },
  {
    Sr_No: 2,
    Claim_Category: "Travel",
    Updated_By: "JaneSmith",
    Last_Updated_On: "2021-01-06",
    Status: "Active",
  },
  {
    Sr_No: 3,
    Claim_Category: "Entertainment",
    Updated_By: "BobJohnson",
    Last_Updated_On: "2021-01-07",
    Status: "Pending",
  },
];

const UserManage = () => {
  const [claims, setClaims] = useState(data);
  const [updateStatusVal, setUpdateStatusVal] = useState(null);
  const [value, setValue] = useState(1);
  const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
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
      title: "Claim Category",
      dataIndex: "Claim_Category",
    },
    {
      title: "Updated By",
      dataIndex: "Updated_By",
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
                    <Link
                      onClick={() => {
                        setUpdateStatusVal(record.Sr_No);
                        setIsChangeStudModalOpen(true);
                        setValue(record.Status==='Active'?1:2)
                      }}
                      className="d-flex align-items-center"
                    >
                      <span className="mr-2">
                        <UpdateStatus />
                      </span>
                      Update Status
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to={`event_list/update/${record.Sr_No}`}
                      className="d-flex align-items-center"
                    >
                      <CustomIcon className="mr-2" svg={Edit} />
                      Edit
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="claim_document_manager/view_document"
                      className="d-flex align-items-center"
                    >
                      <span className="mr-2">
                        <EyeOutlined />
                      </span>
                      View/Edit Documents
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span onClick={() => console.log("del")}>
                      {" "}
                      <DeleteOutlined className="mr-2 " />
                      Delete
                    </span>
                  </Menu.Item>
                </Menu>
              }
            />
          </>
        );
      },
    },
  ];
  const updateStatus = () => {
    let cloneClaim = claims;
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
    setClaims(claimData);
    console.log(claimData);
  };
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
        </div>
        <Button className="bg-info text-white">
          <Link to={"claim_document_manager/add_new_category"}>Add New Category</Link>
        </Button>
      </div>
      <Helper clients={claims} attribiue={columns} />
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
            <span className="ml-2">Change Claim Category Status</span>
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
  );
};

export default UserManage;
