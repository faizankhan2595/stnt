import { Button, Form, Input, Modal, Select } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Tabs } from "antd";
import { useLocation, useParams } from "react-router-dom";
import { ChangeAgStatus } from "assets/svg/icon";
import { Radio } from 'antd';
export default function AddNew() {
  const { TabPane } = Tabs;
  const param = useParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("1");
  const [value, setValue] = useState(1);
  const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);

  function handleTabClick(key) {
    setActiveTab(key);
  }

  const changeStudHandleOk = () => {
    setIsChangeStudModalOpen(false);
  };
  function handleBackClick() {
    console.log("test");
  }

  const showModal = () => {
    handleOk();
  };

  const handleOk = () => {
    setTimeout(() => {}, 10000);
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    if (
      location.pathname ===
      `/app/membership/membership_plans/update/${param.id}`
    ) {
      // let newVal =
      createMembership(
        { ...values, id: param.id },
        `http://127.0.0.1:3333/membership/update`
      );
    } else {
      createMembership(values, "http://127.0.0.1:3333/membership/new");
    }
  };

  const createMembership = (values, url) => {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    axios({
      method: "post",
      url: url,
      data: formData,
      headers: {
        "content-type": `multipart/form-data`,
      },
    })
      .then(function (response) {
        console.log(response);
        if (response.data.status) {
          showModal();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onRadChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const operations = (
    <div style={{ gap: "10px" }} className="mb-2 d-flex justify-content-end">
      <Button
        style={{ border: "1.6px solid #3e79f7" }}
        className="px-4 font-weight-semibold text-info"
        onClick={() => setIsChangeStudModalOpen(true)}
      >
        Change Agency Status
      </Button>
      {/* <Button
          style={{ border: "1.6px solid #3e79f7" }}
          className="px-4 font-weight-semibold text-info"
          onClick={() => setIsDeactiveModalOpen(true)}
        >
          Deactivate Account
        </Button> */}
    </div>
  );

  return (
    <div className="">
      <Form
        layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        form={form}
        name="control-hooks"
      >
        <Tabs
          activeKey={activeTab}
          tabBarExtraContent={operations}
          onTabClick={handleTabClick}
        >
          <TabPane
            tab={
              <div className="d-flex justify-content-center">
                <span className="ml-2">Agency Details</span>
              </div>
            }
            key="1"
          >
            <div className="border rounded p-3 bg-white">
              {" "}
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="id"
                    label="Agency Name"
                    rules={[
                      { required: true, message: "Please enter Agency Name" },
                    ]}
                  >
                    <Input placeholder="Agency Name" />
                  </Form.Item>
                  <Form.Item
                    name="phone_number"
                    label="Phone Number"
                    rules={[{ required: true, message: "Phone Number" }]}
                  >
                    <Input placeholder="Phone number" />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="period"
                    label="Email Id"
                    rules={[
                      { required: true, message: "Please enter email Id" },
                    ]}
                  >
                    <Input placeholder="Email Id" />
                  </Form.Item>
                  <Form.Item
                    name="Office_Contact_No"
                    label="Office Contact No"
                    rules={[
                      {
                        required: true,
                        message: "Please input Office Contact No!",
                      },
                    ]}
                  >
                    <Input placeholder="Office Contact No" />
                  </Form.Item>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="text-info">Address Details</h5>
                <div style={{ gap: "60px" }} className="d-flex ">
                  <div style={{ width: "45%" }}>
                    <Form.Item
                      name="block_number"
                      label="Block Number"
                      rules={[
                        {
                          required: true,
                          message: "Please input Block Number!",
                        },
                      ]}
                    >
                      <Input placeholder="Block Number" />
                    </Form.Item>
                  </div>
                  <div
                    style={{
                      width: "45%",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <Form.Item
                      name="street_number"
                      label="Street Number"
                      rules={[
                        {
                          required: true,
                          message: "Please input street number!",
                        },
                      ]}
                      style={{ width: "100%" }}
                    >
                      <Input placeholder="Street Number" />
                    </Form.Item>
                  </div>
                </div>
                <div style={{ gap: "60px" }} className="d-flex ">
                  <div style={{ width: "45%" }}>
                    <Form.Item
                      name="level_number"
                      label="Level Number"
                      rules={[
                        {
                          required: true,
                          message: "Please input level number!",
                        },
                      ]}
                    >
                      <Input placeholder="Level Number" />
                    </Form.Item>
                  </div>
                  <div
                    style={{
                      width: "45%",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <Form.Item
                      name="unit_number"
                      label="Unit Number"
                      rules={[
                        {
                          required: true,
                          message: "Please input unit number!",
                        },
                      ]}
                      style={{ width: "100%" }}
                    >
                      <Input placeholder="Unit Number" />
                    </Form.Item>
                  </div>
                </div>
                <div style={{ gap: "60px" }} className="d-flex ">
                  <div style={{ width: "45%" }}>
                    <Form.Item
                      name="postal_code"
                      label="Postal Code"
                      rules={[
                        {
                          required: true,
                          message: "Please input postal code!",
                        },
                      ]}
                    >
                      <Input placeholder="Postal Code" />
                    </Form.Item>
                  </div>
                  <div
                    style={{
                      width: "45%",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <Form.Item
                      name="country"
                      label="Country"
                      style={{ width: "100%" }}
                    >
                      <Input placeholder="Country" />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
        <Form.Item>
          <div
            style={{ gap: "10px" }}
            className="mt-5 d-flex justify-content-end"
          >
            <Button
              className="px-4 font-weight-semibold"
              htmlType="button"
              onClick={handleBackClick}
            >
              Back
            </Button>
            <Button className="px-4 font-weight-semibold" htmlType="button">
              Clear All
            </Button>
            <Button
              className="px-4 font-weight-semibold text-white bg-info"
              htmlType="submit"
            >
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
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
}
