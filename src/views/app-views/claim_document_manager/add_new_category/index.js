import React, { useState } from "react";
import { Button, Form, Input, Checkbox, Modal, Result, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useHistory } from "react-router-dom";
import { addClaimCategory } from "services/apiService";
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

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    }
    else if (name === 'description') {
      setDescription(value);
    }
  }



  const add = async () => {
    console.log('title', title);
    await addClaimCategory({
      title: title,
      description: description,
    }).then(res => {

    }).catch(err => {

    })
  }

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
              name="title"
              label="Claim Category Title"
              onChange={handleChange}
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
            <Form.Item 
            name="description" 
            label="Description (if any)"
            onChange={handleChange}>
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
              onClick={add}
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
