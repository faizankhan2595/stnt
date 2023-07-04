import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Checkbox,
  Modal,
  Result,
  message,
  Radio,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useHistory } from "react-router-dom";
import { BASE_URL, addClaimCategory } from "services/apiService";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
const AddNew = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [SuccessModal, setSuccessModal] = useState(false);
  const plainOptions = ["regular", "silver", "deluxe"];

  const onFinish = async (values) => {
    if (id) {
      const data = {
        "id":id,
        "title": values.title,
        "description":values.description,
        "associateClaimType": values.Claim_Category
    }
    const res1 = await axios.put(`${BASE_URL}/api/claim-category/`,data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if(res1.data.success){
      setSuccessModal(true);
        setTimeout(() => {
          setSuccessModal(false);
          setTimeout(() => {
            history.push("/app/claim_document_manager");
          }, 400);
        }, 900);
    }
      return
    }
    console.log("Success:", values);
    await addClaimCategory({
      title: values.title,
      description: values.description,
    })
      .then((res) => {
        setSuccessModal(true);
        setTimeout(() => {
          setSuccessModal(false);
          setTimeout(() => {
            history.push("/app/claim_document_manager");
          }, 400);
        }, 900);
      })
      .catch((err) => {
        message.error("Something went wrong. Please try again later");
      });
  };

  const onClaimCategoryChange = (checkedValues) => {
    console.log("checked = ", checkedValues.target.value);
  };

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const getCategory = async (id) => {
    const res1 = await axios.get(`${BASE_URL}/api/claim-category/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const {title,description,associateClaimType} = res1.data.claimCategory
    form.setFieldsValue({
      Claim_Category: associateClaimType,
      description: description,
      title: title,
    });
  };
  const validateTitle = (_, value) => {
    if (value && /\d/.test(value)) {
      return Promise.reject(new Error('Please enter only characters for the Claim Category Title'));
    }
    return Promise.resolve();
  };
  useEffect(() => {
    if (id) {
      getCategory(id);
    }
  }, []);

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
          <h5 className="text-info m-0">
            {id ? "Edit" : "Add New"} Claim Category
          </h5>
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
                {
                  validator: validateTitle,
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
              onChange={handleChange}
            >
              <TextArea placeholder="Type here..." />
            </Form.Item>
          </div>
          <div style={{ width: "60%" }}>
            <Form.Item
              name="Claim_Category"
              label="Associate Claim Category With"
            >
              <Radio.Group
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
