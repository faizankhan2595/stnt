import {
  ChangeAgStatus,
  ClosedReq,
  PendingReq,
  RejectedReq,
  TotatReq,
} from "assets/svg/icon";
import React, { useState } from "react";
import { Input, Menu, Button,Radio,Modal } from "antd";
import Icon from "@ant-design/icons";
import { CsvIcon, FilterIcon } from "assets/svg/icon";
import { Link } from "react-router-dom";
import Filter from "components/shared-components/Filter";
import Helper from "../../Helper";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import TextArea from "antd/lib/input/TextArea";
const dataArray = [
  {
    Sr_No: 1,
    UID_NO: "ABC123",
    Claim_ID: "C001",
    Insured_Name: "John Doe",
    Gender: "Male",
    Travel_Agency: "ABC Travels",
    Passport_No: "A1234567",
    Claimed_Date: "2023-04-15",
    Status: "Pending",
  },
  {
    Sr_No: 2,
    UID_NO: "DEF456",
    Claim_ID: "C002",
    Insured_Name: "Jane Smith",
    Gender: "Female",
    Travel_Agency: "XYZ Holidays",
    Passport_No: "B9876543",
    Claimed_Date: "2023-04-22",
    Status: "Active",
  },
  {
    Sr_No: 3,
    UID_NO: "GHI789",
    Claim_ID: "C003",
    Insured_Name: "Bobs Johnson",
    Gender: "Male",
    Travel_Agency: "PQR Tours",
    Passport_No: "C2468101",
    Claimed_Date: "2023-05-01",
    Status: "Rejected",
  },
];

const ClaimReq = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(1);
  const showModal = () => {
    setIsModalOpen(true);
    // handleOk()
  };
  const onRadChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  
  const columns = [
    {
      title: "Sr No",
      dataIndex: "Sr_No",
    },
    {
      title: "UID NO",
      dataIndex: "UID_NO",
    },
    {
      title: "Claim ID",
      dataIndex: "Claim_ID",
    },
    {
      title: "Insured Name",
      dataIndex: "Insured_Name",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
    },
    {
      title: "Travel Agency",
      dataIndex: "Travel_Agency",
    },
    {
      title: "Passport No",
      dataIndex: "Passport_No",
    },
    {
      title: "Claimed Date",
      dataIndex: "Claimed_Date",
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
                    <Link to={`claim_request/view_detail`}>
                    {/* <Link to={`claim_request/view_detail/${record.id}`}> */}
                      {" "}
                      View Details
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span onClick={() => showModal()}> Update Status</span>
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
      <div className="mb-4 bg-white d-flex justify-content-between">
        <div className="w-25 p-3 d-flex align-items-center justify-content-center">
          <div
            style={{ background: "#fafafb", width: "100%" }}
            className="rounded d-flex align-items-start p-3 justify-content-between"
          >
            <div>
              <h5 className="m-0">Total Requests</h5>
              <h4 className="m-0">0</h4>
            </div>
            <div>
              <TotatReq />
            </div>
          </div>
        </div>
        <div className="w-25 p-3 d-flex align-items-start justify-content-center">
          <div
            style={{ background: "#fafafb", width: "100%" }}
            className="rounded d-flex align-items-start p-3 justify-content-between"
          >
            <div>
              <h5 className="m-0">Pending</h5>
              <h4 className="m-0">0</h4>
            </div>
            <div>
              <PendingReq />
            </div>
          </div>
        </div>
        <div className="w-25 p-3 d-flex align-items-start justify-content-center">
          <div
            style={{ background: "#fafafb", width: "100%" }}
            className="rounded d-flex align-items-start p-3 justify-content-between"
          >
            <div>
              <h5 className="m-0">Rejected</h5>
              <h4 className="m-0">0</h4>
            </div>
            <div>
              <RejectedReq />
            </div>
          </div>
        </div>
        <div className="w-25 p-3 d-flex align-items-start justify-content-center">
          <div
            style={{ background: "#fafafb", width: "100%" }}
            className="rounded d-flex align-items-start p-3 justify-content-between"
          >
            <div>
              <h5 className="m-0">Closed</h5>
              <h4 className="m-0">$0</h4>
            </div>
            <div>
              <ClosedReq />
            </div>
          </div>
        </div>
      </div>
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
            <Filter type={"claim-request"}>
              <Button
                icon={<Icon component={FilterIcon} />}
                className="d-flex align-items-center ml-2"
              >
                Filters
              </Button>
            </Filter>
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          {/* <Button className="bg-info text-white">
          <Link to={"travel_agency/add_new"}> + Add New</Link>
        </Button> */}
        </div>
        <Helper clients={dataArray} attribiue={columns} />
      </div>
      <Modal
        width={600}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className="d-flex my-3 flex-column">
          <h3 className="mb-4 d-flex align-items-center">
            
            <ChangeAgStatus />
            <span className="ml-2"> Change Agency Status</span>
          </h3>
          <Radio.Group className="ml-5" onChange={onRadChange} value={value}>
            <Radio value={1}>WIP</Radio>
            <Radio className="ml-3" value={2}>Completed</Radio>
            <Radio className="ml-3" value={3}>Rejected</Radio>
            <Radio className="ml-3" value={4}>New</Radio>
          </Radio.Group>
          <h5 className="ml-5 w-75 mt-3">Add Comment</h5>
          <TextArea className="ml-5 w-75"/>
        </div>
        <div
          style={{ gap: "10px" }}
          className="mt-5 d-flex justify-content-end"
        >
          <Button
            className="px-4 font-weight-semibold"
            // onClick={() => setIsChangeStudModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="px-4 font-weight-semibold text-white bg-info"
            // onClick={() => {
            //   setIsChangeStudModalOpen(false);
            // }}
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ClaimReq;
