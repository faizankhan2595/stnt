import React, { useState } from "react";
import { Button, Form, Input, Checkbox, Modal, Result } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useHistory } from "react-router-dom";
const AddNew = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [SuccessModal, setSuccessModal] = useState(false);
  const plainOptions = ["Regular", "Silver", "Deluxe"];
  const onFinish = (values) => {
    console.log("Success:", values);
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
      setTimeout(() => {
          history.push('/app/claim_document_manager')
      }, 400);
    }, 900);
  };
  const onClaimCategoryChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        form={form}
        name="control-hooks"
      >
        <div className="p-3 bg-white rounded border">
          <h5 className="text-info m-0">Add New Claim Category</h5>
          <div style={{ width: "60%" }} className="mt-4">
            <Form.Item
              name="Title"
              label="Claim Category Title"
              rules={[
                {
                  required: true,
                  message: "Please enter Claim Category Title*",
                },
              ]}
            >
              <Input placeholder="Title" />
            </Form.Item>
          </div>
          <div style={{ width: "60%" }}>
            <Form.Item name="Description" label="Description (if any)">
              <TextArea placeholder="Type here..." />
            </Form.Item>
          </div>
          <div style={{ width: "60%" }}>
            <Form.Item
              name="Claim_Category"
              label="Associate Claim Category With"
            >
              <Checkbox.Group
                options={plainOptions}
                onChange={onClaimCategoryChange}
              />
            </Form.Item>
          </div>
        </div>
          <Form.Item>
            <div
              style={{ gap: "10px" }}
              className="mt-5 d-flex justify-content-end"
            >
              <Button className="px-4 font-weight-semibold" htmlType="button">
                Cancel
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
        visible={SuccessModal}
        onCancel={() => setSuccessModal(false)}
      >
        <Result
          status="success"
          title="New Claim Category Added Successfully!"
        />
      </Modal>
    </div>
  );
};

export default AddNew;
