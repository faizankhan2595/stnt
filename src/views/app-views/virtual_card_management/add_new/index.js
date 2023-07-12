import { Button, Select, Form, message } from "antd";
import { VirtialCard } from "assets/svg/icon";
import React, { useState } from "react";
import { countries } from "./country";
import axios from "axios";

let styles = {
  // files: {
  //   listStyle: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   gap: "13px",
  //   border: "1px solid lightblue",
  //   padding: "10px",
  //   borderRadius: "9px",
  //   background: "#0093ff0a",
  // },
  uploadFile: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
  },

  // Add the new styles here:

  // ".uploadFile::-webkit-file-upload-button": {
  //   visibility: "hidden",
  // },

  // ".uploadFile::before": {
  //   content: "'Drag & Drop'",
  //   display: "inline-block",
  //   padding: "10px",
  //   border: "1px solid #ccc",
  //   borderRadius: "4px",
  //   cursor: "pointer",
  // },

  // ".uploadFile:hover::before": {
  //   backgroundColor: "#ccc",
  // },
};
const AddNew = () => {
  const [form] = Form.useForm();
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [selectedFilesone, setSelectedFilesone] = useState(null);
  const [sendingFile, setSendingFile] = useState({
    front:'',
    back:''
  })
  const onFinish = async (values) => {
    console.log("Success:", values.Country, selectedFiles, selectedFilesone);
    if (selectedFiles === null) {
      message.error('Please Upload Front Side of Card!');
      return;
    }
    if (selectedFilesone === null) {
      message.error('Please Upload Back Side of Card!');
      return;
    }
    const data = new FormData();
    data.append('country', values.Country);
    data.append('front', sendingFile.front);
    data.append('back', sendingFile.back);
  
    try {
      const res = await axios.post(`https://api.stntinternational.com/api/virtual-cards`, data, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
  
      if (res.status === 200) {
        const responseData = await res.json();
        console.log(responseData);
      } else {
        throw new Error('Request failed with status ' + res.status);
      }
    } catch (error) {
      console.error(error);
      // Handle error gracefully
    }
  };
  function handleFrontFile(event) {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSendingFile((pre)=>{
      return {
        ...pre,
        front:event.target.files[0]
      }
    })
    setSelectedFiles(imageUrl);
  }
  function handleBackFile(event) {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSendingFile((pre)=>{
      return {
        ...pre,
        back:event.target.files[0]
      }
    })
    setSelectedFilesone(imageUrl);
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
        <div className="bg-white border rounded p-3">
          <div className="d-flex">
            <div className="claimDocManSvg">
              <VirtialCard />
            </div>
            <div className="ml-2">
              <h5 className="m-0 mt-2">Add/Edit Virtual Card</h5>
            </div>
          </div>
          <div className="my-3">
            <Form.Item
              name="Country"
              label="Country"
              rules={[{ required: true, message: "Please Select Country" }]}
            >
              <Select
                showSearch
                placeholder="Select Country"
                style={{
                  width: "450px",
                }}
                options={countries}
              />
            </Form.Item>
          </div>
          <div>
            <h5 className="mb-3">Upload Card Picture</h5>
            <div style={{ gap: "30px" }} className="d-flex">
              {selectedFiles ? (
                <div
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    height: "300px",
                    position:"relative"
                  }}
                  className="p-3 fileImage d-flex justify-content-center align-items-center"
                >
                  <input
                    style={styles.uploadFile}
                    className="uploadFile"
                    type="file"
                    multiple
                    onChange={handleFrontFile}
                  />
                  <img src={selectedFiles} alt="img" />
                </div>
              ) : (
                <div
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    height: "300px",
                  }}
                  className="custBorder d-flex flex-column justify-content-center align-items-center"
                >
                  <UploadCardSvg />
                  <h5 className="text-center">
                    Upload Front Side <br />
                    of card
                  </h5>
                  <input
                    style={styles.uploadFile}
                    className="uploadFile"
                    type="file"
                    multiple
                    onChange={handleFrontFile}
                  />
                </div>
              )}
              {selectedFilesone ? (
                <div
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    height: "300px",
                    position:'relative'
                  }}
                  className="fileImage p-3 d-flex flex-column justify-content-center align-items-center"
                >
                  <input
                    style={styles.uploadFile}
                    className="uploadFile"
                    type="file"
                    multiple
                    onChange={handleBackFile}
                  />
                  <img src={selectedFilesone} alt="img" />
                </div>
              ) : (
                <div
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    height: "300px",
                  }}
                  className="custBorder d-flex flex-column justify-content-center align-items-center"
                >
                  <UploadCardSvg />
                  <h5 className="text-center">
                    Upload Back Side <br />
                    of card
                  </h5>
                  <input
                    style={styles.uploadFile}
                    className="uploadFile"
                    type="file"
                    multiple
                    onChange={handleBackFile}
                  />
                </div>
              )}
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
              //   onClick={handleBackClick}
            >
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
    </div>
  );
};

export default AddNew;
const UploadCardSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="54"
    viewBox="0 0 64 54"
    fill="none"
  >
    <path
      d="M18.6667 47.2064C15.0242 46.9704 11.5632 45.7694 8.77782 43.7748C5.99247 41.7802 4.02524 39.0941 3.15702 36.1C2.2888 33.1059 2.56399 29.9569 3.94328 27.1026C5.32258 24.2483 7.73547 21.8347 10.8374 20.2064C11.4974 15.8641 14.0102 11.8735 17.9055 8.98146C21.8007 6.08943 26.8115 4.49414 32.0001 4.49414C37.1887 4.49414 42.1994 6.08943 46.0947 8.98146C49.9899 11.8735 52.5027 15.8641 53.1627 20.2064C56.2647 21.8347 58.6776 24.2483 60.0569 27.1026C61.4362 29.9569 61.7113 33.1059 60.8431 36.1C59.9749 39.0941 58.0077 41.7802 55.2223 43.7748C52.437 45.7694 48.9759 46.9704 45.3334 47.2064V47.2491H18.6667V47.2064ZM34.6667 29.2491H42.6667L32.0001 17.9991L21.3334 29.2491H29.3334V38.2491H34.6667V29.2491Z"
      fill="#1E77CC"
    />
  </svg>
);
