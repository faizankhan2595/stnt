import React, { useState } from "react";
import { Button, Checkbox, Divider, Tabs, Modal, Timeline } from "antd";
import {
  ClaimReqDet,
  ClaimdetHead,
  CrossFileSvg,
  DownloadSvg,
  GreenExportFile,
  InsuranceClaimTimeline,
  PersDetHead,
  SummaryOfClaim,
  UploadFileIcon,
} from "assets/svg/icon";
import TextArea from "antd/lib/input/TextArea";
const arr = ["Medical & Other Expenses", "Emergency Medical Evacuation"];
let styles = {
  files: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "13px",
    border: "1px solid lightblue",
    padding: "10px",
    borderRadius: "9px",
    background: "#0093ff0a",
  },
  uploadFile: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
  },

  // Add the new styles here:

  ".uploadFile::-webkit-file-upload-button": {
    visibility: "hidden",
  },

  ".uploadFile::before": {
    content: "'Drag & Drop'",
    display: "inline-block",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  },

  ".uploadFile:hover::before": {
    backgroundColor: "#ccc",
  },
};
const operations = (
  <div className="ml-3 d-flex flex-column align-items-end">
    <Button style={{ width: "125px" }} className="bg-warning text-white">
      Pending
    </Button>
    <p className="m-0">Since 16 Jan 2022, 10:02:36 AM</p>
  </div>
);
const ViewDet = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const viewDocument = () => {
    setIsDocModalOpen(true);
  };
  const delUplFile = (i) => {
    let AfterDeleteFile = selectedFiles.filter((elem, index) => {
      return index !== i;
    });
    setSelectedFiles(AfterDeleteFile);
  };
  function handleFileSelect(event) {
    const fileList = event.target.files;
    const newSelectedFiles = [];

    for (let i = 0; i < fileList.length; i++) {
      newSelectedFiles.push(fileList[i]);
    }
    //   console.log(selectedFiles)

    setSelectedFiles([...selectedFiles, newSelectedFiles[0]]);
  }
  const items = [
    {
      label: (
        <div className="d-flex align-items-center">
          <span className="ml-2">Personnel Details</span>
        </div>
      ),
      key: 1,
      children: (
        <div className="d-flex">
          <div
            style={{ width: "68%" }}
            className="p-3 bg-white border rounded mr-1"
          >
            <h4 className="d-flex m-0">
              {" "}
              <div dangerouslySetInnerHTML={{ __html: PersDetHead }}></div>{" "}
              <span className="ml-2">Personal Details</span>
            </h4>
            <p className="m-0">See the details of insured traveler below.</p>
            <div className="d-flex mt-4">
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Insured Name
                </p>
                <h5>MR. Abdul Azeem</h5>
              </div>
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Passport No
                </p>
                <h5>KXXXX956R</h5>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  NRIC/FIN
                </p>
                <h5>S508699S</h5>
              </div>
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Email ID
                </p>
                <h5>+65 133569966</h5>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Phone Number
                </p>
                <h5>+65 133569966</h5>
              </div>
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Gender
                </p>
                <h5>
                  <img src="/img/male.png" alt="img" />
                </h5>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Date of Birth
                </p>
                <h5>1 Jan 1997</h5>
              </div>
            </div>

            <h4 className="mt-5">Address</h4>

            <div className="d-flex mt-4">
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Postal Code
                </p>
                <h5>123456</h5>
              </div>
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Block Number
                </p>
                <h5>012</h5>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Street Number
                </p>
                <h5>123</h5>
              </div>
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Unit Number
                </p>
                <h5>1324</h5>
              </div>
            </div>

            <div className="d-flex mt-4 mb-4">
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Level Number
                </p>
                <h5>456</h5>
              </div>
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Country
                </p>
                <h5>Singapore</h5>
              </div>
            </div>
          </div>
          <div
            style={{ width: "32%" }}
            className="p-3 bg-white border rounded ml-1"
          >
            <CustTimeline />
          </div>
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex align-items-center">
          <span className="ml-2">Travel Details</span>
        </div>
      ),
      key: 2,
      children: (
        <div className="d-flex">
          <div
            style={{ width: "68%" }}
            className="p-3 bg-white border rounded mr-1"
          >
            <h4 className="d-flex m-0">
              <img src="/img/male.png" alt="img" />
              <span className="ml-2">Travel Details</span>
            </h4>
            <p className="m-0">
              See the different claim category details requested by customer
              below
            </p>
            <div className="d-flex mt-4">
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Insurance Policy Package
                </p>
                <h5>Hajj 1443H</h5>
              </div>
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  UID
                </p>
                <h5>S-STT-S1004-5921</h5>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Traveler Agent
                </p>
                <h5>Mr. Rashid M</h5>
              </div>
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Country where Loss Occurred
                </p>
                <h5>Saudi Arabia</h5>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Departure date from Singapore
                </p>
                <h5>15 Apr 2023</h5>
              </div>
              <div className="w-50">
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Return date to Singapore
                </p>
                <h5>22 Apr 2023</h5>
              </div>
            </div>
          </div>
          <div
            style={{ width: "32%" }}
            className="p-3 bg-white border rounded ml-1"
          >
            <CustTimeline />
          </div>
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex align-items-center">
          <span className="ml-2">Claim Details</span>
        </div>
      ),
      key: 3,
      children: (
        <div className="d-flex">
          <div
            style={{ width: "68%" }}
            className="p-3 bg-white border rounded mr-1"
          >
            <h4 className="d-flex m-0">
              <ClaimdetHead />
              <span className="ml-2">Claim Details</span>
            </h4>
            <p className="m-0">See the details of insured traveler below.</p>
            <div
              style={{ flexWrap: "wrap", gap: "2rem" }}
              className="mt-3 d-flex justify-content-start"
            >
              {arr.map((elem) => {
                return (
                  <div style={{ width: "300px" }} className="my-2">
                    <div className="shadow rounded p-2">
                      <img
                        style={{ width: "100%", borderRadius: "5px" }}
                        src="https://images.unsplash.com/photo-1592805144716-feeccccef5ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="test"
                      />
                      <div className="my-2 d-flex justify-content-between">
                        <p className="m-0">Claim Request #1</p>
                        <p className="m-0" style={{ color: "black" }}>
                          22 Apr 2023
                        </p>
                      </div>
                      <h5>{elem}</h5>

                      <div className="d-flex justify-content-center my-3">
                        {" "}
                        <Button
                          style={{ border: "1.5px solid rgb(62, 121, 247)" }}
                          className="text-info m-auto"
                          onClick={() => viewDocument()}
                        >
                          View Documents
                        </Button>{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{ width: "32%" }}
            className="p-3 bg-white border rounded ml-1"
          >
             <CustTimeline />
          </div>
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex align-items-center">
          <span className="ml-2">Payment Details</span>
        </div>
      ),
      key: 4,
      children: (
        <div className="d-flex">
          <div
            style={{ width: "68%" }}
            className="p-3 bg-white border rounded mr-1"
          >
            <h4 className="d-flex m-0">
              <ClaimdetHead />
              <span className="ml-2">Payment Details</span>
            </h4>
            <p className="m-0">
              See the payment details below for money transfer upon successful
              insurance claim.{" "}
            </p>
            <div className="my-4 p-4 custshadow rounded">
              <h5 className="my-3">Payment Method</h5>
              <div className="d-flex justify-content-between">
                <p className="w-50">
                  Payment Option:{" "}
                  <span style={{ color: "black" }} className="font-weight-bold">
                    DBS/POSB Account
                  </span>
                </p>
                <p className="w-50">
                  Payee Name (as per bank account):{" "}
                  <span style={{ color: "black" }} className="font-weight-bold">
                    Mr. Abdul Azeem
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="w-50">
                  Payee NRIC/FIN:{" "}
                  <span style={{ color: "black" }} className="font-weight-bold">
                    FRB1235476
                  </span>
                </p>
                <p className="w-50">
                  Bank Name (DBS/POSB Only):{" "}
                  <span style={{ color: "black" }} className="font-weight-bold">
                    DBS
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="w-50">
                  Bank Account Number:{" "}
                  <span style={{ color: "black" }} className="font-weight-bold">
                    1254 56985 696
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ width: "32%" }}
            className="p-3 bg-white border rounded ml-1"
          >
             <CustTimeline />
          </div>
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex align-items-center">
          <span className="ml-2">Summary of Claims</span>
        </div>
      ),
      key: 5,
      children: (
        <div className="d-flex">
          <div
            style={{ width: "68%" }}
            className="p-3 bg-white border rounded mr-1"
          >
            <h4 className="d-flex m-0">
              <SummaryOfClaim />
              <span className="ml-2">Summary of Claims</span>
            </h4>
            <p className="m-0">Download claim settlement details form below.</p>
            <div className="mt-5">
              <h4 style={{ background: "#FCFAFA" }} className="d-flex m-0 p-1">
                <img src="/img/male.png" alt="img" />
                <span className="ml-2">Travel Details</span>
              </h4>
              <div className="d-flex mt-4">
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    Insurance Policy Package
                  </p>
                  <h5>Hajj 1443H</h5>
                </div>
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    UID
                  </p>
                  <h5>S-STT-S1004-5921</h5>
                </div>
              </div>

              <div className="d-flex mt-4">
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    Traveler Agent
                  </p>
                  <h5>Mr. Rashid M</h5>
                </div>
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    Country where Loss Occurred
                  </p>
                  <h5>Saudi Arabia</h5>
                </div>
              </div>

              <div className="d-flex mt-4">
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    Departure date from Singapore
                  </p>
                  <h5>15 Apr 2023</h5>
                </div>
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    Return date to Singapore
                  </p>
                  <h5>22 Apr 2023</h5>
                </div>
              </div>
            </div>
            <Divider />
            <div className="mt-5">
              <h4 style={{ background: "#FCFAFA" }} className="d-flex m-0 p-1">
                <img src="/img/male.png" alt="img" />
                <span className="ml-2">Claim Details</span>
              </h4>
              <h4 className="d-flex align-items-center my-3">
                <ClaimReqDet />
                <span className="ml-2">Claim Details</span>
              </h4>

              <h5>Claim Category</h5>
              <h5 className="font-weight-bold">I had a medical situation</h5>

              <h5 className="mt-4">Documents Uploaded</h5>
              <ul className="p-0" style={{ width: "40%" }}>
                <li className="my-3" style={styles.files}>
                  {" "}
                  <div className="d-flex align-items-center">
                    <UploadFileIcon color={"#0E7CEB"} />{" "}
                    <span className="ml-2">
                      {" "}
                      File_name.pdf <br />{" "}
                      <p className="m-0"> Uploaded 1min ago</p>{" "}
                    </span>
                  </div>
                </li>
                <li className="my-3" style={styles.files}>
                  {" "}
                  <div className="d-flex align-items-center">
                    <UploadFileIcon color={"#0E7CEB"} />{" "}
                    <span className="ml-2">
                      {" "}
                      File_name.pdf <br />{" "}
                      <p className="m-0"> Uploaded 1min ago</p>{" "}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <Divider />
            <div className="mt-5">
              <h4 style={{ background: "#FCFAFA" }} className="d-flex m-0 p-1">
                <img src="/img/male.png" alt="img" />
                <span className="ml-2">Payment Details</span>
              </h4>
              <div className="d-flex mt-4">
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    Payment Option
                  </p>
                  <h5>DBS/POSB Account</h5>
                </div>
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    Payee Name (as per bank acccount)
                  </p>
                  <h5>100256500266</h5>
                </div>
              </div>

              <div className="d-flex mt-4">
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    Payee NRIC
                  </p>
                  <h5>S800256S</h5>
                </div>
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    Bank Name
                  </p>
                  <h5>DBS</h5>
                </div>
              </div>

              <div className="d-flex mt-4">
                <div className="w-50">
                  <p style={{ color: "black" }} className="m-0 mb-1">
                    Bank Account No
                  </p>
                  <h5>1256645 6954669 66456</h5>
                </div>
              </div>
            </div>
            <Divider />
            <div className="mt-5">
              <h4 style={{ background: "#FCFAFA" }} className="d-flex m-0 p-1">
                <img src="/img/male.png" alt="img" />
                <span className="ml-2">Declaration</span>
              </h4>
              <h5>Declaration</h5>
              <Checkbox>
                Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum
                ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is
                dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy
                text.Loreum ipsum is dummy text.Loreum ipsum is dummy
                text.Loreum ipsum is dummy text.Loreum ipsum is dummy
                text.Loreum ipsum is dummy text.
              </Checkbox>
              <div className="mt-5 d-flex justify-content-between">
                <div>
                  <h5>Date :</h5>
                  <h5 className="font-weight-bold">24 Apr 2023</h5>
                </div>
                <div style={{ minWidth: "100px" }}>
                  <h5>Signature :</h5>
                  <h5 className="font-weight-bold">xyz</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ width: "32%" }}
            className="p-3 bg-white border rounded ml-1"
          >
            <CustTimeline />
          </div>
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex align-items-center">
          <span className="ml-2">Claim Settlement</span>
        </div>
      ),
      key: 6,
      children: (
        <div className="d-flex">
          <div
            style={{ width: "68%" }}
            className="p-3 bg-white border rounded mr-1"
          >
            <h4 className="d-flex m-0">
              <ClaimdetHead />
              <span className="ml-2">Claim Settlement</span>
            </h4>
            <p className="m-0">
              Download/Upload claim settlement details form below.
            </p>
            <div className="border dashed bg-white rounded p-3 mt-4 p-5">
              <div className="d-flex flex-column justify-content-center align-items-center position-relative uploaddoc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#41C1B2"
                    d="M18.57 15.51l7.86 7a2 2 0 001.33.51H56v34.9A2.93 2.93 0 0153.26 61H5.74A2.93 2.93 0 013 57.92V18a2.85 2.85 0 012.68-3h11.56a2 2 0 011.33.51z"
                  ></path>
                  <path fill="#D7E6EF" d="M49 57H7V3h42v54z"></path>
                  <path
                    fill="#41C1B2"
                    d="M45 23h16v-6a2 2 0 00-2-2h-6l-8 8z"
                  ></path>
                  <path fill="#F7FCFF" d="M14 9h42v14H14V9z"></path>
                  <path
                    fill="#41C1B2"
                    d="M25.69 15.51l7.42 7a1.8 1.8 0 001.25.51H61v34.9A2.87 2.87 0 0158.41 61H13.59A2.87 2.87 0 0111 57.92V18a2.79 2.79 0 012.53-3h10.9c.47 0 .922.184 1.26.51z"
                  ></path>
                  <path
                    fill="#F7FCFF"
                    d="M36 55c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"
                  ></path>
                  <path
                    fill="#D7E6EF"
                    d="M52 13H32a1 1 0 000 2h20a1 1 0 000-2zm0 4H37a1 1 0 000 2h15a1 1 0 000-2z"
                  ></path>
                  <path
                    fill="#44394A"
                    d="M36.5 49.28l6.72-6.72a5.501 5.501 0 00-7.78-7.78l-8.84 8.84a1.002 1.002 0 000 1.42A1 1 0 0028 45l8.84-8.84a3.5 3.5 0 114.95 4.95l-6.71 6.71a1.998 1.998 0 01-3.38-.571A2 2 0 0132.26 45L39 38.32a.5.5 0 01.71 0 .48.48 0 010 .71l-6 6a1 1 0 101.42 1.41l6-6a2.503 2.503 0 00-3.54-3.54l-6.72 6.72a4 4 0 000 5.66 4.003 4.003 0 005.66 0h-.03z"
                  ></path>
                </svg>
                <h5 className="mb-0 mt-2">
                  Drag & Drop Files Or{" "}
                  <span className="mb-0" style={{ color: "#4096ff" }}>
                    Choosen File
                  </span>
                </h5>
                <h5 className="mb-0" style={{ color: "#4096ff" }}>
                  Upload jpg, pdf, png, etc up to 25 mb
                </h5>
                <input
                  style={styles.uploadFile}
                  className="uploadFile"
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                />
              </div>
            </div>
            <div className="mt-4">
              {selectedFiles.length > 0 && (
                <ul className="p-0" style={{ width: "60%" }}>
                  {selectedFiles.map((file, i) => (
                    <li key={file.name} className="my-3" style={styles.files}>
                      <div className="d-flex align-items-center">
                        <UploadFileIcon color={"#0E7CEB"} />{" "}
                        <span className="ml-2">
                          {file.name} <br />{" "}
                          <p className="m-0"> Uploaded 1min ago</p>{" "}
                        </span>
                      </div>
                      <span>
                        <span style={{ cursor: "pointer" }} className="mr-2">
                          <DownloadSvg />
                        </span>
                        <span
                          style={{ cursor: "pointer" }}
                          className="mr-2"
                          onClick={() => delUplFile(i)}
                        >
                          <CrossFileSvg />
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div
            style={{ width: "32%" }}
            className="p-3 bg-white border rounded ml-1"
          >
             <CustTimeline />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="p-3 bg-white">
        <div className="d-flex justify-content-between">
          <h4 className="d-flex align-items-center">
            {" "}
            <ClaimReqDet /> <span className="ml-2">Claim Request Details</span>
          </h4>
          <Button
            style={{ width: "125px" }}
            onClick={() => setIsModalOpen(true)}
            className="bg-info text-white"
          >
            Add Remarks
          </Button>
        </div>
      </div>
      <div className="claimreqdetTab">
        <Tabs tabBarExtraContent={operations}>
          {items.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
      <Modal
        width={600}
        footer={null}
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <h4>Claim Status Update</h4>
        <Divider className="m-0 mb-4" />
        <h5>Add Remarks</h5>
        <TextArea placeholder="Type here..." />
        <div className="d-flex justify-content-end mt-3">
          <Button className="px-4 font-weight-semibold text-white bg-info">
            Save
          </Button>
        </div>
        <Divider />
        <div>
          <h5 className="d-flex align-items-center">
            <img src="/img/avatars/thumb-1.jpg" alt="." />
            Sara M <p className="m-0">1 May 2023, 10:00:23 Am</p>
          </h5>
          <p style={{ color: "black" }}>
            Loreum ipsum is dummy text,Loreum ipsum is dummy textLoreum ipsum is
            dummy textLoreum ipsum is dumipsum is dummy textLoreum ipsum is
            dummy textLoreum ipsum is dummy{" "}
          </p>
        </div>
        <Divider />
        <div>
          <h5 className="d-flex align-items-center">
            <img src="/img/avatars/thumb-1.jpg" alt="." />
            Sara M <p className="m-0">1 May 2023, 10:00:23 Am</p>
          </h5>
          <p style={{ color: "black" }}>
            Loreum ipsum is dummy text,Loreum ipsum is dummy textLoreum ipsum is
            dummy textLoreum ipsum is dumipsum is dummy textLoreum ipsum is
            dummy textLoreum ipsum is dummy{" "}
          </p>
        </div>
      </Modal>
      <Modal
        width={600}
        footer={null}
        visible={isDocModalOpen}
        onCancel={() => setIsDocModalOpen(false)}
      >
        <h4 className="my-3">
          {" "}
          <GreenExportFile /> <span> View documents and pictures of claim</span>
        </h4>
        <ul className="p-0" style={{ width: "100%" }}>
          <li className="my-3" style={styles.files}>
            {" "}
            <div className="d-flex align-items-center">
              <UploadFileIcon color={"#0E7CEB"} />{" "}
              <span className="ml-2">
                {" "}
                File_name.pdf <br /> <p className="m-0">
                  {" "}
                  Uploaded 1min ago
                </p>{" "}
              </span>
            </div>
            <span>
              <span style={{ cursor: "pointer" }} className="mr-2">
                <DownloadSvg />
              </span>
            </span>
          </li>
          <li className="my-3" style={styles.files}>
            {" "}
            <div className="d-flex align-items-center">
              <UploadFileIcon color={"#0E7CEB"} />{" "}
              <span className="ml-2">
                {" "}
                File_name.pdf <br /> <p className="m-0">
                  {" "}
                  Uploaded 1min ago
                </p>{" "}
              </span>
            </div>
            <span>
              <span style={{ cursor: "pointer" }} className="mr-2">
                <DownloadSvg />
              </span>
            </span>
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default ViewDet;

function CustTimeline() {
  const items = [
    {
      color: "#0078FF",
      children: (
        <>
          <h5 className="m-0">Insurance Claim Initiated</h5>
          <p className="m-0">16 Jan 2022, 10:02:36 AM</p>
        </>
      ),
    },
    {
      color: "#C05DEF",
      children: (
        <>
          <h5 className="m-0">Insurance Claim Submitted</h5>
          <p className="m-0">16 Jan 2022, 10:02:36 AM</p>
        </>
      ),
    },
    {
      color: "#05ADA3",
      children: (
        <>
          <h5 className="m-0">Admin reviewed claim </h5>
          <p className="m-0">16 Jan 2022, 10:02:36 AM</p>
        </>
      ),
    },
    {
      color: "#EDD500",
      children: (
        <>
          <h5 className="m-0">Claims document sent to UOI underwriter</h5>
          <p className="m-0">16 Jan 2022, 10:02:36 AM</p>
        </>
      ),
    },
  ];

  return (
    <>
      <h4 className="d-flex m-0">
        {" "}
        <InsuranceClaimTimeline />
        <span className="ml-2">Insurance Claim Timeline</span>
      </h4>
      <div className="my-4">
        <Timeline>
          {items.map((item, index) => (
            <Timeline.Item key={index} color={item.color} dot={item.dot}>
              {item.children}
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </>
  );
}