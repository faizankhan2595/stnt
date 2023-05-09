import React from "react";
import { Button ,Input} from "antd";
import { Menu } from "antd";
import Icon from "@ant-design/icons";
import { CsvIcon, FilterIcon } from "assets/svg/icon";
import { Link } from "react-router-dom";
import Filter from "components/shared-components/Filter";
import Helper from "../Helper";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
const dataArray = [
    {
      Sr_No: 1,
      Travel_Agency: 'ABC Travels',
      Country: 'USA',
      Contact_No: '123-456-7890',
      Email_ID: 'abc@abc.com',
      Active_Since: '01/01/2021',
      Status:"Active"
    },
    {
      Sr_No: 2,
      Travel_Agency: 'XYZ Travels',
      Country: 'Canada',
      Contact_No: '987-654-3210',
      Email_ID: 'xyz@xyz.com',
      Active_Since: '02/01/2021',
      Status:"Active"
    },
    {
      Sr_No: 3,
      Travel_Agency: 'PQR Travels',
      Country: 'UK',
      Contact_No: '111-222-3333',
      Email_ID: 'pqr@pqr.com',
      Active_Since: '03/01/2021',
      Status:"Active"
    }
  ];
  
  
const TravelAgency = () => {
    const onSearch = (value) => console.log(value);
    const { Search } = Input;
    const onDeleteData = (record) => {
        console.log(record);
      };
    const columns = [
        {
          title: "Sr No",
          dataIndex: "Sr_No",
        },
        {
          title: "Travel Agency",
          dataIndex: "Travel_Agency",
        },
        {
          title: "Country",
          dataIndex: "Country",
        },
        {
          title: "Contact No",
          dataIndex: "Contact_No",
        },
        {
          title: "Email ID",
          dataIndex: "Email_ID",
        },
        {
          title: "Active Since",
          dataIndex: "Active_Since",
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
                        <Link to={`members/membersdetails/${record.id}`}>
                          {" "}
                          Edit
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <span onClick={() => onDeleteData(record)}>
                          {" "}
                          Update Status
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
      <Helper clients={dataArray} attribiue={columns} />
    </div>
  );
};

export default TravelAgency;
