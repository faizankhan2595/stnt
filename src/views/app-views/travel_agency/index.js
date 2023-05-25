import React from "react";
import { Menu } from "antd";
import Icon from "@ant-design/icons";
import { CsvIcon, FilterIcon } from "assets/svg/icon";
import { Link } from "react-router-dom";
import Filter from "components/shared-components/Filter";
import Helper from "../Helper";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { useEffect } from "react";
import { GetAllTravelAgency, UpdateTravelAgencyStatus } from "services/apiService";
import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ChangeAgStatus } from "assets/svg/icon";
import { Radio } from 'antd';

// let dataArray = [
//   {
//     Sr_No: 1,
//     Travel_Agency: 'ABC Travels',
//     Country: 'USA',
//     Contact_No: '123-456-7890',
//     Email_ID: 'abc@abc.com',
//     Active_Since: '01/01/2021',
//     Status: "Active"
//   },
//   {
//     Sr_No: 2,
//     Travel_Agency: 'XYZ Travels',
//     Country: 'Canada',
//     Contact_No: '987-654-3210',
//     Email_ID: 'xyz@xyz.com',
//     Active_Since: '02/01/2021',
//     Status: "Active"
//   },
//   {
//     Sr_No: 3,
//     Travel_Agency: 'PQR Travels',
//     Country: 'UK',
//     Contact_No: '111-222-3333',
//     Email_ID: 'pqr@pqr.com',
//     Active_Since: '03/01/2021',
//     Status: "Active"
//   }
// ];

const TravelAgency = () => {
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);
  const [value, setValue] = useState(1);


  const changeStudHandleOk = () => {
    setIsChangeStudModalOpen(false);
  };

  const onRadChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const onUpdateStatus = async (record) => {
    console.log(record);
    let data = {};
    data.id = ""+record.id;
    data.status = value;
    await UpdateTravelAgencyStatus(data);
  };


  const [data, setData] = React.useState([]);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
    },
    {
      title: "Travel Agency",
      dataIndex: "agencyName",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "Contact No",
      dataIndex: "phoneNo",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Active Since",
      dataIndex: "Active_Since",
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
                    <Link to={`travel_agency/edit/${record.id}`}>
                      {" "}
                      Edit
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span onClick={() => setIsChangeStudModalOpen(true)}>
                      {" "}
                      Update Status
                    </span>
                  </Menu.Item>
                </Menu>
              }
            />

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
                  <span className="ml-2"> Change Agency Status</span>
                </h3>
                <Radio.Group className="ml-5" onChange={onRadChange} value={value}>
                  <Radio value={'active'}>Active</Radio>
                  <Radio className="ml-3" value={'terminate'}>Terminated</Radio>
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
                    onUpdateStatus(record);
                    setIsChangeStudModalOpen(false);
                  }}
                >
                  Save
                </Button>
              </div>
            </Modal>

          </>
        );
      },
    },
  ];

  useEffect(async () => {
    const response = await GetAllTravelAgency({ size: 10000, page: 1, search: '' });
    console.log(response.data.data.rows);
    setData(response.data.data.rows);
  }, []);

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
          <Filter type={'country'}>
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
        <Button className="bg-info text-white">
          <Link to={"travel_agency/add_new"}> + Add New</Link>
        </Button>
      </div>
      <Helper clients={data} attribiue={columns} />
    </div>
  );
};

export default TravelAgency;
