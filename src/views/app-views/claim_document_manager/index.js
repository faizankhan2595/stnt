import React, { useState } from "react";
import { useEffect } from "react";
import { Button, DatePicker, Image, Input, message } from "antd";
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
import {
  BASE_URL,
  deleteClaimCategory,
  getClaimCategories,
} from "services/apiService";
import moment from "moment";
import axios from "axios";

const UserManage = () => {
  const [claims, setClaims] = useState([]);
  const [updateStatusVal, setUpdateStatusVal] = useState(null);
  const [value, setValue] = useState(1);
  const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);

  const [claimCategories, setClaimCategories] = useState([]);

  useEffect(() => {
    getClaimCategories().then((data) => {
      console.log("data", data);
      const claimCategories = data.data.data.map((claimCategory) => {
        return {
          id: claimCategory.id,
          claim_category: claimCategory.title,
          status: claimCategory.status,
          updated_by: claimCategory.updatedBY,
          last_updated: claimCategory.updatedAt,
        };
      });
      setClaimCategories(claimCategories);
    });
  }, []);

  const deleteClaimCateg = async (id) => {
    await deleteClaimCategory(id)
      .then((res) => {
        message.success("Claim category deleted successfully");
        console.log(res);
        // setTimeout(() => {
        //   window.location.href = "/app/claim_document_manager";
        // }, 1000);
      })
      .catch((err) => {
        message.error("Claim category deletion failed");
        console.log(err);
        // setTimeout(() => {
        //     window.location.href = '/web/web_claimSubmission'
        // }, 1000);
      });
  };

  const onSearch = async (value) => {
    if (value==='' && claimCategories.length===0) {
      getClaimCategories().then((data) => {
        console.log("data", data);
        const claimCategory = data.data.data.map((claimCategory) => {
          return {
            id: claimCategory.id,
            claim_category: claimCategory.title,
            status: claimCategory.status,
            updated_by: claimCategory.updatedBY,
            last_updated: claimCategory.updatedAt,
          };
        });
        setClaimCategories(claimCategory);
      });
    }
    console.log(value);
    let res1 = await axios.get(
      `https://api.stntinternational.com/api/claim-category?searchByTitle=${value}&size=100`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    console.log(res1.data.data);
    const claimCategory = res1.data.data.map((claimCategory) => {
      return {
        id: claimCategory.id,
        claim_category: claimCategory.title,
        status: claimCategory.status,
        updated_by: claimCategory.updatedBY,
        last_updated: claimCategory.updatedAt,
      };
    });
    setClaimCategories(claimCategory);
  };
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
      dataIndex: "id",
    },
    {
      title: "Claim Category",
      dataIndex: "claim_category",
    },
    {
      title: "Updated By",
      dataIndex: "updated_by",
    },
    {
      title: "Last Updated On",
      dataIndex: "last_updated",
      render: (date) => {
        return <>{moment(date).format("DD MMM YYYY, hh:mm:ss A")}</>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
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
                    <Link
                      onClick={() => {
                        setUpdateStatusVal(record.id);
                        setIsChangeStudModalOpen(true);
                        setValue(record.status === "active" ? 1 : 2);
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
                      to={`event_list/update/${record.id}`}
                      className="d-flex align-items-center"
                    >
                      <CustomIcon className="mr-2" svg={Edit} />
                      Edit
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to={`/app/claim_document_manager/view_document/${record.id}`}
                      className="d-flex align-items-center"
                    >
                      <span className="mr-2">
                        <EyeOutlined />
                      </span>
                      View/Edit Documents
                    </Link>
                  </Menu.Item>
                  <Menu.Item onClick={()=>deleteClaimCateg(record.id)}>
                    <span>
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
  const updateStatus = async () => {
    let data = {
      id: updateStatusVal,
      status: value === 1 ? "active" : "inactive",
    };
    let config = {
      method: "put",
      url: BASE_URL + "/api/claim-category/change-status",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: data,
    };

    const res1 = await axios.request(config);
    console.log(res1);
    if (res1.data.status) {
      setIsChangeStudModalOpen(false);
    }
    let cloneClaim = claimCategories;
    let claimData = cloneClaim.map((elem, index) => {
      if (elem.id === updateStatusVal) {
        if (value === 1) {
          return { ...elem, status: "active" };
        } else {
          return { ...elem, status: "inactive" };
        }
      } else {
        return elem;
      }
    });
    setClaimCategories(claimData);
    console.log(claimData);
    setIsChangeStudModalOpen(false);
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
          <Link to={"claim_document_manager/add_new_category"}>
            Add New Category
          </Link>
        </Button>
      </div>
      <Helper clients={claimCategories} attribiue={columns} />
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
