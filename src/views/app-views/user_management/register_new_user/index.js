import { Button, Form, Input, Modal, Result } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ResetPassColor } from "assets/svg/icon";
import { addUser } from "services/apiService";

export default function AddNew() {
  const param = useParams();
  const location = useLocation();
  const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);
  const [SuccessModal, setSuccessModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneCode, setPhoneCode] = useState("+65");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [password, setPassword] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [allUsers, setAllUsers] = useState([]);


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
    setTimeout(() => { }, 10000);
  };

  const [form] = Form.useForm();

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  //   if (
  //     location.pathname ===
  //     `/app/membership/membership_plans/update/${param.id}`
  //   ) {
  //     // let newVal =
  //     createMembership(
  //       { ...values, id: param.id },
  //       `http://127.0.0.1:3333/membership/update`
  //     );
  //   } else {
  //     createMembership(values, "http://127.0.0.1:3333/membership/new");
  //   }
  // };

  const addUserFn = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      emailId: emailId,
      jobTitle: jobTitle,
      password: password,
      jobRole: jobRole,
    }

    const response = await addUser(data);
  }

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

  return (
    <div className="">
      <Form
        layout="vertical"
        // onFinishFailed={onFinishFailed}
        form={form}
        name="control-hooks"
        onFinish={addUserFn}
      >
        <div className="border rounded p-3 bg-white">
          {" "}
          <div style={{ gap: "60px" }} className="d-flex ">
            <div style={{ width: "45%" }}>
              <Form.Item
                name="first_name"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                rules={[{ required: true, message: "Please enter First Name" }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="phone_code"
                label="Phone code"
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
                rules={[{ required: true, message: "Please enter First Name" }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="mobile_number"
                label="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                rules={[{ required: true, message: "Mobile Number" }]}
              >
                <Input placeholder="Mobile number" />
              </Form.Item>
            </div>
            <div style={{ width: "45%" }}>
              <Form.Item
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="last_name"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please input Last Name!",
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                name="email_id"
                label="Email Id"
                rules={[{ required: true, message: "Please enter email Id" }]}
              >
                <Input placeholder="Email Id" />
              </Form.Item>
            </div>
          </div>
          <div>
            <div style={{ gap: "60px" }} className="d-flex ">
              <div style={{ width: "45%" }}>
                <Form.Item
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  name="job_title"
                  label="Job Title"
                  rules={[
                    {
                      required: true,
                      message: "Please input Job Title!",
                    },
                  ]}
                >
                  <Input placeholder="Job Title" />
                </Form.Item>
              </div>
              <div style={{ width: "45%" }}>
                <Form.Item
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  name="job_role"
                  label="Job Role"
                  rules={[
                    {
                      required: true,
                      message: "Please input Job Role!",
                    },
                  ]}
                >
                  <Input placeholder="Job Role" />
                </Form.Item>
              </div>
            </div>
            <div style={{ gap: "60px" }} className="d-flex ">
              <div style={{ width: "45%" }}>
                <Form.Item
                  name="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: "Please input Password!",
                    },
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
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
            <Button
              className="px-4 font-weight-semibold"
              onClick={() => setIsChangeStudModalOpen(true)}
            >
              Reset Password
            </Button>
            <Button
              className="px-4 font-weight-semibold text-white bg-info"
              htmlType="submit"
              // onClick={addUserFn}
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
          <h4 className="mb-4 d-flex align-items-center">
            <div dangerouslySetInnerHTML={{ __html: ResetPassColor }}></div>
            <span className="ml-2"> Reset Password</span>
          </h4>
          <div className="w-75 m-auto">
            <div className="mt-3">
              <h5>Username</h5>
              <Input placeholder="Enter Username" />
            </div>
            <div className="mt-3">
              <h5>Password</h5>
              <Input.Password placeholder="Enter password" />
            </div>
            <div className="mt-3">
              <h5>Confirm Password</h5>
              <Input.Password placeholder="Enter Confirm password" />
            </div>
          </div>
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
              setSuccessModal(true)
            }}
          >
            Save
          </Button>
        </div>
      </Modal>
      <Modal
        width={600}
        footer={null}
        visible={SuccessModal}
        onCancel={() => setSuccessModal(false)}
      >
        <Result status="success" title="User's password has been reset" />
      </Modal>
    </div>
  );
}
