import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { clients } from "../data";
import Helper from "../Helper";
import "./Members.css";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import CustomIcon from "components/util-components/CustomIcon";
import { Export, History } from "assets/svg/icon";
import axios from "axios";


export default function Members() {
  const [membersData, setMembersData] = useState([]);

  axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');

  const onDeleteData = (record) => {
    console.log(record);
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteMember(record);
      },
    });
  };

  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
    },
    {
      title: "File Name",
      dataIndex: "fileName",
      render: (text, record) => (
        <a href={record.manifestUrl} target="_blank" rel="noopener noreferrer">
          {record.fileName}
        </a>
      )
      //manifestUrl
    },
    {
      title: "Travel Agency",
      dataIndex: "importedBy",
    },
    {
      title: "Manifest Type",
      dataIndex: "manifestType",
    },
    {
      title: "Date of Import",
      dataIndex: "dateOfImport",
    },
    {
      title: "No Travelers Imported",
      dataIndex: "noOfImportedTravellers",
    },
    {
      title: "Imported By",
      dataIndex: "importedBy",
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
  ];

  const getMembers = () => {
    axios.get("https://api.stntinternational.com/api/manifests").then((response) => {
      setMembersData(response.data.data);
    });
  };

  const deleteMember = (record) => {
    axios
      .delete("https://api.stntinternational.com/api/manifests/delete", {
        data: { id: record.id },
      })
      .then((response) => {
        console.log(response);
        if (response.data) {
          setMembersData((pre) => {
            return pre.filter((member) => member.id !== record.id);
          });
        }
        alert(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div>
        <div className="d-flex justify-content-between">
      <div className="memberDetailTableSearchFilter">
          <form className="memberDetailSearch">
            <CustomIcon svg={History} />{" "}
            <input
              className="memberDetailSerachInput"
              placeholder="Search"
              type="text"
              name="search"
              id=""
            />
          </form>
          <div className="memberDetailFilter">
            <CustomIcon svg={History} />{" "}
            <span className="memberDetailFilterText"> Filters</span>
          </div>
          <div className="memberDetailFilter">
            <CustomIcon svg={Export} />{" "}
            <span className="memberDetailFilterText"> Export</span>
          </div>
        </div>
        <Button className="bg-info text-white">
          <Link to={"manifest_import/add_new"}> Import CSV</Link>
        </Button>
      </div>
      <div>
        <Helper clients={membersData} attribiue={columns} />
      </div>
    </div>
  );
}
