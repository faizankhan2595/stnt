import React, { useState } from "react";
import CustomIcon from "components/util-components/CustomIcon";
import "../../Members/Members.css";
import { Button, Form, Input, Menu, Select, Switch, Radio } from 'antd'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import '.././MembershipRequest.css'
import { DeleteOutlined, CloseOutlined, EyeOutlined, CreditCardOutlined, HistoryOutlined } from '@ant-design/icons'
import { membershipRequest } from '../../data'
import { Account, Edit, Export, History, Verified } from 'assets/svg/icon'
import Helper from '../../Helper'
import { Modal, Drawer } from 'antd';
import { Link } from 'react-router-dom'
// import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import { Checkbox, Divider, Tabs, Timeline, Col, Row } from "antd";
import {
  ChangeAgStatus,
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

export default function MembershipRequest() {

  const [membershipRequestData, setmembershipRequestData] = useState(membershipRequest)
  const [insuranceClaimData, setInsuranceClaimData] = useState(membershipRequest)
  const [claimSettlementTransactionsData, setclaimSettlementTransactionsData] = useState(membershipRequest)
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true);
  };

  const [value, setValue] = useState(1);

  const onClose = () => {
    setVisible(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    handleOk()
  };

  const onRadChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 5000)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDeleteData = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setmembershipRequestData((pre) => {
          return pre.filter((member) => member.id !== record.id)
        })
      }
    })
  }

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


  const policyHistoryData = [
    {
      sr_no: 1,
      policy_no: "126534",
      policy_type: "Deluxe",
      travel_agency: "Abu Bakar Travel Services Pte Ltd",
      start_date: "2022-05-07",
      end_date: "2022-10-07",
      status: "Active",
    },
  ];


  const policyHistoryColumns = [
    {
      title: 'Sr No',
      dataIndex: 'sr_no',
    },
    {
      title: "Policy No",
      dataIndex: 'policy_no',
    },
    {
      title: "Policy Type",
      dataIndex: 'policy_type',
    },
    {
      title: "Travel Agency",
      dataIndex: 'travel_agency',
    },
    {
      title: "Start Date",
      dataIndex: 'start_date',
    },
    {
      title: "End Date",
      dataIndex: 'end_date',
    },

    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <p className={`${text !== "Active" ? 'text-danger' : "text-success"} font-weight-semibold`}>{text}</p>
      }
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
                  {/* <span onClick={showDrawer} > <EyeOutlined className='mr-2 ' />View Details</span > */}
                  <Link onClick={() => showModal()}><HistoryOutlined className='mr-2 ' />Update Status</Link>
                  <Drawer
                    title={`Membership Request Details `}
                    placement='right'
                    width={400}
                    onClose={onClose}
                    visible={visible}
                    className='membershipRequestDrawer'
                  >
                    <div className='membershipRequestProfile'>
                      <div>
                        <p className='membershipRequestTitle'>Membership Request Details</p>
                        <p className='membershipRequestDesc'>Find Membership request details below.</p>
                      </div>
                      <CloseOutlined onClick={onClose} />
                    </div>
                    <div className='membershipRequestProfileLogo'>
                      <CustomIcon svg={Account} />
                      <span className='membershipRequestProfileName'>John Smith</span>
                    </div>
                    <div className='membershipRequestProfileDetail'>
                      <div className='membershipRequestProfileDetailLeft'>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Email Address</span>
                          <p className='membershipRequestProfileDetailTitleAns'>johnsmith@gmail.com</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Address</span>
                          <p className='membershipRequestProfileDetailTitleAns'>
                            15 Changi Business Park Cres Singapore
                          </p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Membership Type</span>
                          <p className='membershipRequestProfileDetailTitleAns'>New Member</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Date of Application</span>
                          <p className='membershipRequestProfileDetailTitleAns'>12/09/2022</p>
                        </div>
                      </div>
                      <div className='membershipRequestProfileDetailRight'>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Phone Number</span>
                          <p className='membershipRequestProfileDetailTitleAns num'>+65 123456789</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Gender</span>
                          <p className='membershipRequestProfileDetailTitleAns'>Male</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Membership Plan</span>
                          <p className='membershipRequestProfileDetailTitleAns'>Plan1</p>
                        </div>
                      </div>
                    </div>
                    <div className='membershipRequestProfileDetailForm'>
                      <Form layout="vertical">
                        <Form.Item name='membership_status' label="Membership Status" rules={[{ required: true, message: 'Please select membership status!' }]}>
                          <Select placeholder="Active">
                            <Select.Option value="active">Active</Select.Option>
                            <Select.Option value="inactive">Inactive</Select.Option>
                            <Select.Option value="pending">Pending</Select.Option>
                            <Select.Option value="rejected">Rejected</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item name='remarks' label="Remarks" >
                          <Input placeholder='Type Here' />
                        </Form.Item>
                        <Form.Item className='d-flex flex-row-reverse align-items-center' name="sendMail" label="Do you want to send an email to applicant ?" valuePropName="checked">
                          <Switch />
                        </Form.Item>
                        <div style={{ gap: "30px" }} className='d-flex justify-content-center'>
                          <Form.Item>
                            <Button onClick={onClose} htmlType="button">Cancel</Button>
                          </Form.Item>
                          <Form.Item>
                            <Button onClick={showModal} type="primary" htmlType="submit">
                              Submit
                            </Button>
                          </Form.Item>
                        </div>
                      </Form>
                    </div>
                    <Modal width={400} footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <div className='d-flex my-3 align-items-center flex-column justify-content-center'>
                        <CustomIcon svg={Verified} />
                        <h3 className='font-weight-bold mt-4'>Membership Request Approved</h3>
                        <span className='text-center font-size-sm w-75 font-weight-semibold'>Request Id #123 for membership plan 1 is
                          approved successfully. </span>
                      </div>
                    </Modal>
                  </Drawer>
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record)}> <CreditCardOutlined className='mr-2 ' />View Virtual Card</span>
                </Menu.Item>
                {/* <Menu.Item>
                  <span className='d-flex align-items-center' ><CustomIcon className='mr-2' svg={Edit} />Edit</span>
                </Menu.Item> */}
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  const insuranceClaimsData = [
    {
      sr_no: 1,
      uid: "12",
      claim_id: "23",
      travel_agency: "Abu Bakar Travel Services Pte Ltd",
      submitted_date: "2022-05-07",
      last_updated_on: "2022-10-07",
      claim_categories: "Category",
      status: "Active",
    }
  ]
  const insuranceClaimColumns = [
    {
      title: 'Sr No',
      dataIndex: 'sr_no',
    },
    {
      title: "UID",
      dataIndex: 'uid',
    },
    {
      title: "Claim ID",
      dataIndex: 'claim_id',
    },
    {
      title: "Travel Agency",
      dataIndex: 'travel_agency',
    },
    {
      title: "Submitted Date",
      dataIndex: 'submitted_date',
    },
    {
      title: "Last Updated On",
      dataIndex: 'last_updated_on',
    },
    {
      title: "Claim Categories",
      dataIndex: 'claim_categories',
    },

    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <p className={`${text !== "Active" ? 'text-danger' : "text-success"} font-weight-semibold`}>{text}</p>
      }
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
                  {/* <span onClick={showDrawer} > <EyeOutlined className='mr-2 ' />View Details</span > */}
                  <Link to={`/app/traveler/travelers_list/travel_list_details`}><EyeOutlined className='mr-2 ' />View Details</Link>
                  <Drawer
                    title={`Membership Request Details `}
                    placement='right'
                    width={400}
                    onClose={onClose}
                    visible={visible}
                    className='membershipRequestDrawer'
                  >
                    <div className='membershipRequestProfile'>
                      <div>
                        <p className='membershipRequestTitle'>Membership Request Details</p>
                        <p className='membershipRequestDesc'>Find Membership request details below.</p>
                      </div>
                      <CloseOutlined onClick={onClose} />
                    </div>
                    <div className='membershipRequestProfileLogo'>
                      <CustomIcon svg={Account} />
                      <span className='membershipRequestProfileName'>John Smith</span>
                    </div>
                    <div className='membershipRequestProfileDetail'>
                      <div className='membershipRequestProfileDetailLeft'>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Email Address</span>
                          <p className='membershipRequestProfileDetailTitleAns'>johnsmith@gmail.com</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Address</span>
                          <p className='membershipRequestProfileDetailTitleAns'>
                            15 Changi Business Park Cres Singapore
                          </p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Membership Type</span>
                          <p className='membershipRequestProfileDetailTitleAns'>New Member</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Date of Application</span>
                          <p className='membershipRequestProfileDetailTitleAns'>12/09/2022</p>
                        </div>
                      </div>
                      <div className='membershipRequestProfileDetailRight'>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Phone Number</span>
                          <p className='membershipRequestProfileDetailTitleAns num'>+65 123456789</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Gender</span>
                          <p className='membershipRequestProfileDetailTitleAns'>Male</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Membership Plan</span>
                          <p className='membershipRequestProfileDetailTitleAns'>Plan1</p>
                        </div>
                      </div>
                    </div>
                    <div className='membershipRequestProfileDetailForm'>
                      <Form layout="vertical">
                        <Form.Item name='membership_status' label="Membership Status" rules={[{ required: true, message: 'Please select membership status!' }]}>
                          <Select placeholder="Active">
                            <Select.Option value="active">Active</Select.Option>
                            <Select.Option value="inactive">Inactive</Select.Option>
                            <Select.Option value="pending">Pending</Select.Option>
                            <Select.Option value="rejected">Rejected</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item name='remarks' label="Remarks" >
                          <Input placeholder='Type Here' />
                        </Form.Item>
                        <Form.Item className='d-flex flex-row-reverse align-items-center' name="sendMail" label="Do you want to send an email to applicant ?" valuePropName="checked">
                          <Switch />
                        </Form.Item>
                        <div style={{ gap: "30px" }} className='d-flex justify-content-center'>
                          <Form.Item>
                            <Button onClick={onClose} htmlType="button">Cancel</Button>
                          </Form.Item>
                          <Form.Item>
                            <Button onClick={showModal} type="primary" htmlType="submit">
                              Submit
                            </Button>
                          </Form.Item>
                        </div>
                      </Form>
                    </div>
                    <Modal width={400} footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <div className='d-flex my-3 align-items-center flex-column justify-content-center'>
                        <CustomIcon svg={Verified} />
                        <h3 className='font-weight-bold mt-4'>Membership Request Approved</h3>
                        <span className='text-center font-size-sm w-75 font-weight-semibold'>Request Id #123 for membership plan 1 is
                          approved successfully. </span>
                      </div>
                    </Modal>
                  </Drawer>
                </Menu.Item>
                <Menu.Item>
                    <span><HistoryOutlined className='mr-2'/> Update Status</span>
                  </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  const claimSettlementTransactionData = [
    {
      sr_no: 1,
      uid: "12",
      policy_type: "23",
      approved_on: "Abu Bakar Travel Services Pte Ltd",
      approved_category: "2022-05-07",
      settlement_amount: "2022-10-07",
      status: "Active",
    }
  ]

  const claimSettlementTransactionsColumns = [

    {
      title: 'Sr No',
      dataIndex: 'sr_no',
    },
    {
      title: "UID",
      dataIndex: 'uid',
    },
    {
      title: "Policy Type",
      dataIndex: 'policy_type',
    },
    {
      title: "Approved On",
      dataIndex: 'approved_on',
    },
    {
      title: "Approved Category",
      dataIndex: 'approved_category',
    },
    {
      title: "Settlement Amount",
      dataIndex: 'settlement_amount',
    },
    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <p className={`${text !== "Active" ? 'text-danger' : "text-success"} font-weight-semibold`}>{text}</p>
      }
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
                  {/* <span onClick={showDrawer} > <EyeOutlined className='mr-2 ' />View Details</span > */}
                  <Link to={`/app/traveler/travelers_list/travel_list_details`}><EyeOutlined className='mr-2 ' />View Invoice</Link>
                  <Drawer
                    title={`Membership Request Details `}
                    placement='right'
                    width={400}
                    onClose={onClose}
                    visible={visible}
                    className='membershipRequestDrawer'
                  >
                    <div className='membershipRequestProfile'>
                      <div>
                        <p className='membershipRequestTitle'>Membership Request Details</p>
                        <p className='membershipRequestDesc'>Find Membership request details below.</p>
                      </div>
                      <CloseOutlined onClick={onClose} />
                    </div>
                    <div className='membershipRequestProfileLogo'>
                      <CustomIcon svg={Account} />
                      <span className='membershipRequestProfileName'>John Smith</span>
                    </div>
                    <div className='membershipRequestProfileDetail'>
                      <div className='membershipRequestProfileDetailLeft'>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Email Address</span>
                          <p className='membershipRequestProfileDetailTitleAns'>johnsmith@gmail.com</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Address</span>
                          <p className='membershipRequestProfileDetailTitleAns'>
                            15 Changi Business Park Cres Singapore
                          </p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Membership Type</span>
                          <p className='membershipRequestProfileDetailTitleAns'>New Member</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Date of Application</span>
                          <p className='membershipRequestProfileDetailTitleAns'>12/09/2022</p>
                        </div>
                      </div>
                      <div className='membershipRequestProfileDetailRight'>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Phone Number</span>
                          <p className='membershipRequestProfileDetailTitleAns num'>+65 123456789</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Gender</span>
                          <p className='membershipRequestProfileDetailTitleAns'>Male</p>
                        </div>
                        <div>
                          <span className='membershipRequestProfileDetailTitle'>Membership Plan</span>
                          <p className='membershipRequestProfileDetailTitleAns'>Plan1</p>
                        </div>
                      </div>
                    </div>
                    <div className='membershipRequestProfileDetailForm'>
                      <Form layout="vertical">
                        <Form.Item name='membership_status' label="Membership Status" rules={[{ required: true, message: 'Please select membership status!' }]}>
                          <Select placeholder="Active">
                            <Select.Option value="active">Active</Select.Option>
                            <Select.Option value="inactive">Inactive</Select.Option>
                            <Select.Option value="pending">Pending</Select.Option>
                            <Select.Option value="rejected">Rejected</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item name='remarks' label="Remarks" >
                          <Input placeholder='Type Here' />
                        </Form.Item>
                        <Form.Item className='d-flex flex-row-reverse align-items-center' name="sendMail" label="Do you want to send an email to applicant ?" valuePropName="checked">
                          <Switch />
                        </Form.Item>
                        <div style={{ gap: "30px" }} className='d-flex justify-content-center'>
                          <Form.Item>
                            <Button onClick={onClose} htmlType="button">Cancel</Button>
                          </Form.Item>
                          <Form.Item>
                            <Button onClick={showModal} type="primary" htmlType="submit">
                              Submit
                            </Button>
                          </Form.Item>
                        </div>
                      </Form>
                    </div>
                    <Modal width={400} footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <div className='d-flex my-3 align-items-center flex-column justify-content-center'>
                        <CustomIcon svg={Verified} />
                        <h3 className='font-weight-bold mt-4'>Membership Request Approved</h3>
                        <span className='text-center font-size-sm w-75 font-weight-semibold'>Request Id #123 for membership plan 1 is
                          approved successfully. </span>
                      </div>
                    </Modal>
                  </Drawer>
                </Menu.Item>
                {/* <Menu.Item>
                  <span onClick={() => onDeleteData(record)}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
                <Menu.Item>
                  <span className='d-flex align-items-center' ><CustomIcon className='mr-2' svg={Edit} />Edit</span>
                </Menu.Item> */}
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  const items = [
    {
      label: (
        <div className="d-flex align-items-center">
          <span className="ml-2">Policy History</span>
        </div>
      ),
      key: 1,
      children: (
        <div className="p-3 bg-white border rounded ml-1">

          <div className='memberDetailTableSearchFilter'>
            <form className='memberDetailSearch'>
              <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
            </form>
            <div className='memberDetailFilter'>
              <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
            </div>
            <div className='memberDetailFilter'>
              <CustomIcon svg={Export} /> <span className='memberDetailFilterText'> Export</span>
            </div>

          </div>

          <div>
            <Helper clients={policyHistoryData} attribiue={policyHistoryColumns} />
          </div>

        </div>
      ),
    },
    {
      label: (
        <div className="d-flex align-items-center">
          <span className="ml-2">Insurance Claims</span>
        </div>
      ),
      key: 2,
      children: (
        <div className="p-3 bg-white border rounded ml-1">

          <div className='memberDetailTableSearchFilter'>
            <form className='memberDetailSearch'>
              <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
            </form>
            <div className='memberDetailFilter'>
              <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
            </div>
            <div className='memberDetailFilter'>
              <CustomIcon svg={Export} /> <span className='memberDetailFilterText'> Export</span>
            </div>

          </div>

          <div>
            <Helper clients={insuranceClaimsData} attribiue={insuranceClaimColumns} />
          </div>

        </div>
      ),
    },

    {
      label: (
        <div className="d-flex align-items-center">
          <span className="ml-2">Claim Settlement Transactions</span>
        </div>
      ),
      key: 3,
      children: (
        <div className="p-3 bg-white border rounded ml-1">

          <div className='memberDetailTableSearchFilter'>
            <form className='memberDetailSearch'>
              <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
            </form>
            <div className='memberDetailFilter'>
              <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
            </div>
            <div className='memberDetailFilter'>
              <CustomIcon svg={Export} /> <span className='memberDetailFilterText'> Export</span>
            </div>

          </div>

          <div>
            <Helper clients={claimSettlementTransactionData} attribiue={claimSettlementTransactionsColumns} />
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
            <ClaimReqDet /> <span className="ml-2">Traveler Details</span>
          </h4>
        </div>

        <div className="p-3">
          <Row>
            <Col span={4} style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
              <div>
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Insured Name
                </p>
                <h5>MR. Abdul Azeem</h5>
              </div>
            </Col>
            <Col span={4} style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
              <div>
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Passport No.
                </p>
                <h5>KXXXX956R</h5>
              </div>
            </Col>
            <Col span={4} style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
              <div>
                <p style={{ color: "black" }} className="m-0 mb-1">
                  NRIC/FIN
                </p>
                <h5>S805675S</h5>
              </div>
            </Col>
            <Col span={4} style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
              <div>
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Phone No
                </p>
                <h5>+65 1425 5698</h5>
              </div>
            </Col>
            <Col span={4} style={{ padding: '10px' }}>
              <div>
                <p style={{ color: "black" }} className="m-0 mb-1">
                  Email ID
                </p>
                <h5>abdulazeem@gmail.com</h5>
              </div>
            </Col>
            <Col span={4}></Col>
          </Row>
        </div>

        <div className="claimreqdetTab">
          <Tabs>
            {items.map((item) => (
              <Tabs.TabPane tab={item.label} key={item.key}>
                {item.children}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>

      </div>

      <Modal
        width={600}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk} 
        onCancel={() => showModal(false)}
      >
        <div className="d-flex my-3 flex-column">
          <h3 className="mb-4 d-flex align-items-center">
            
            <ChangeAgStatus />
            <span className="ml-2"> Change Policy Status</span>
          </h3>
          <Radio.Group className="ml-5" onChange={onRadChange} value={value}>
            <Radio className="ml-3" value={1}>Active</Radio>
            <Radio className="ml-3" value={2}>Inactive</Radio>

          </Radio.Group>
          <h5 className="ml-5 w-75 mt-3">Add Comment</h5>
          <TextArea className="ml-5 w-75"/>
        </div>
        <div
          style={{ gap: "10px" }}
          className="mt-5 d-flex justify-content-end"
        >
          <Button
            className="px-4 font-weight-semibold"
            onClick={() => showModal(false)}
          >
            Cancel
          </Button>
          <Button
            className="px-4 font-weight-semibold text-white bg-info"
            // onClick={() => {
            //   setIsChangeStudModalOpen(false);
            // }}
          >
            Save
          </Button>
        </div>
      </Modal>

    </div>
  )
}
