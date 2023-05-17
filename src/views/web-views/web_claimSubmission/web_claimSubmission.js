import React from "react";
import "./claimSubmission.css";
import "../fonts.css";
import { UploadOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { Col, Row, Table, Select, Button, message, Upload, Input, Checkbox, Modal } from 'antd';
import { useState, useEffect } from 'react';


const description = 'This is a description.';
const { Step } = Steps;

const dataSource = [
    {
        key: '1',
        sno: '1',
        name: 'Draft1',
        date: '24 Apr 2023, 10:00:00 Am',
    },
    {
        key: '2',
        sno: '2',
        name: 'Draft2',
        date: '24 Apr 2023, 10:00:00 Am',
    },
];

const columns = [
    {
        title: 'Sr. No',
        dataIndex: 'sno',
        key: 'sno',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Date of Draft',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Action',
        dataIndex: 'address',
        key: 'address',
    },

];

const claimHistory = [
    {
        key: '1',
        sno: '1',
        name: 'Draft1',
        date: '24 Apr 2023, 10:00:00 Am',
    },
    {
        key: '2',
        sno: '2',
        name: 'Draft2',
        date: '24 Apr 2023, 10:00:00 Am',
    },
];

const claimHistoryColumns = [
    {
        title: 'Sr. No',
        dataIndex: 'sno',
        key: 'sno',
    },
    {
        title: 'UID',
        dataIndex: 'uid',
        key: 'uid',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Action',
        dataIndex: 'address',
        key: 'address',
    },

];


const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};




const ClaimSubmission = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState({});

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setIsModalOpen(true); // Open the modal when the component mounts
    }, []);



    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const handleStepBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };



    return (
        <div>
            <div className="banner-container">
                <img src="/img/banner-img.png" alt="banner" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="logout-btn-container">
                <div className="logout-btn">Logout</div>
                <div className="update-details-container">
                    <div className="update-icon-container">
                        <img src="/img/update-icon.svg" alt="update-icon" style={{ width: '20px', height: 'auto' }} />
                    </div>
                    <div className="update-text-container ml-2">Update Personal Details</div>
                </div>
            </div>


            <div className="claim-title-container">
                <div className="claim-title-text">Claim Submission</div>
                <div className="claim-title-sub-text">With a convenient insurance claim process, you can now register your claim, <br></br>upload the necessary documents and know the status instantly.</div>
            </div>

            <div className="steps-container">
                <div className="step-container">

                    <Steps current={activeStep} labelPlacement="vertical">
                        <Step
                            title="Get started" onClick={() => handleStepChange(0)} />
                        <Step
                            title="Travel Details" onClick={() => handleStepChange(1)} />
                        <Step
                            title="Claim Details" onClick={() => handleStepChange(2)} />
                        <Step
                            title="Payment Details" onClick={() => handleStepChange(3)} />
                        <Step
                            title="Review" onClick={() => handleStepChange(4)} />

                    </Steps>

                </div>
            </div>



            {/* Get Started tab */}

            {activeStep === 0 && (


                <div className="virtual-card-main-container py-3 px-5">

                    {/* <Button type="primary" onClick={showModal}>
                        Open Modal
                    </Button> */}
                    <Modal title="Fill in your personal details" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div className="label-field-container">
                            <div className="label">Address</div>
                            <div className="input-field">
                                <input type="text" className="input-field-main" placeholder="Enter Permanent Address" />
                            </div>
                        </div>

                        <div className="label-field-container">
                            <div className="label">Contact Number</div>
                            <div className="input-field">
                                <input type="text" className="input-field-main" placeholder="Enter contact number" />
                            </div>
                        </div>

                        <div className="label-field-container">
                            <div className="label">Email Address</div>
                            <div className="input-field">
                                <input type="text" className="input-field-main" placeholder="Enter email address" />
                            </div>
                        </div>

                        <div className="modal-btns-container">
                            <div className="secondary-btn mr-2" onClick={handleCancel}>Cancel</div>
                            <div className="web-btn" onClick={handleOk}>OK</div>
                        </div>

                    </Modal>


                    <div className="virtual-card-container">
                        <div className="virtual-card">
                            <div className="virtual-card-heading" style={{ marginBottom: '15px' }}>
                                <div className="heading-cion-container" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="virtual-card-icon-container">
                                        <img src="/img/virtual-card-icon.png" alt="virtual-card-icon" style={{ width: '32px', height: 'auto', marginRight: '10px' }} />
                                    </div>
                                    <div className="virtual-card-heading-text">
                                        Traveler's Virtual Card
                                    </div>
                                </div>
                                <div className="share-download-icon" style={{ display: 'flex' }}>
                                    <div className="share-icon" style={{ marginRight: '10px' }}>
                                        <img src="/img/share.png" alt="share-icon" style={{ width: '28px', height: 'auto', cursor: 'pointer' }} />
                                    </div>
                                    <div className="download-icon">
                                        <img src="/img/download.png" alt="download-icon" style={{ width: '28px', height: 'auto', cursor: 'pointer' }} />
                                    </div>
                                </div>

                            </div>
                            <Row>
                                <Col span={12} className="virtual-card-desc">
                                    A virtual claim payment card is unique digit computer generated number that is created solely for a use between a payer and payee.
                                    We will provide a Claim Assistance Card for your to ensure that you have handy policy details as well as direct claims assistance number always with you.
                                </Col>
                                <Col span={12} className="virtual-card-img">
                                    <div className="virtual-card-img-container">
                                        <img src="/img/virtual-crd.png" alt="virtual-card-img" style={{ width: '100%', height: 'auto' }} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="virtual-card-container">
                        <div className="virtual-card">
                            <div className="virtual-card-heading" style={{ marginBottom: '15px' }}>
                                <div className="heading-icon-container" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="virtual-card-icon-container">
                                        <img src="/img/policy-details-icon.svg" alt="policy-details-icon" style={{ width: '32px', height: 'auto', marginRight: '10px' }} />
                                    </div>
                                    <div className="virtual-card-heading-text">
                                        Policy Details
                                    </div>
                                </div>
                                {/* <div className="share-download-icon" style={{display:'flex'}}>
                <div className="share-icon"  style={{marginRight:'10px'}}>
                    <img src="/img/share.png" alt="share-icon" style={{width:'28px', height:'auto', cursor:'pointer'}}/>
                </div>
                <div className="download-icon">
                    <img src="/img/download.png" alt="download-icon" style={{width:'28px', height:'auto',cursor:'pointer'}}/>
                </div>
            </div> */}

                            </div>
                            <Row>
                                <Col span={6} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Policy Effective Date:</div>
                                        <div className="policy-detail">1 Apr 2023, 10:00:00 Am</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Policy Type::</div>
                                        <div className="policy-detail">UMRAH EMA 1444H</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">UID No:</div>
                                        <div className="policy-detail">S-STT-S1004-5921</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Duration of Package:</div>
                                        <div className="policy-detail">16 Days</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Cost:</div>
                                        <div className="policy-detail">S$175.00</div>
                                    </div>

                                </Col>
                                <Col span={6} className="virtual-card-desc" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Policy Expiration Date::</div>
                                        <div className="policy-detail">20 Apr 2023, 10:00:00 Am</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Policy No:</div>
                                        <div className="policy-detail">100025399969</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Date of Birth:</div>
                                        <div className="policy-detail">10 Jan 1990</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Geographical Limit:</div>
                                        <div className="policy-detail">Saudi Arabia Only</div>
                                    </div>

                                </Col>
                                <Col span={12} className="virtual-card-img">
                                    <div className="virtual-card-img-container">
                                        <img src="/img/policy-img.png" alt="virtual-card-img" style={{ width: '350px', height: 'auto' }} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="drafts-container">
                        <div className="draft-heading-container">
                            <div className="drafts-icon">
                                <img src="/img/drafts.png" alt="draft-icon" style={{ width: '32px', height: 'auto', marginRight: '10px' }} />
                            </div>
                            <div className="draft-heading">
                                <div className="virtual-card-heading-text">Drafts</div>
                            </div>
                        </div>

                        <Table dataSource={dataSource} columns={columns} style={{ marginTop: '15px' }} />

                    </div>

                    <div className="drafts-container">
                        <div className="draft-heading-container">
                            <div className="drafts-icon">
                                <img src="/img/drafts.png" alt="draft-icon" style={{ width: '32px', height: 'auto', marginRight: '10px' }} />
                            </div>
                            <div className="draft-heading">
                                <div className="virtual-card-heading-text">Claim Submission History</div>
                            </div>
                        </div>

                        <Table dataSource={claimHistory} columns={claimHistoryColumns} style={{ marginTop: '15px' }} />

                    </div>

                    <div className="initiate-claim-container">
                        <div className="initiate-claim-heading-container">
                            <div className="inititae-claim-heading">Want to initiate claim?</div>
                            <div className="inititae-claim-sub-heading">Quick claim support for Umrah travel</div>
                        </div>
                        <div className="initiate-claim-btn-container">
                            <div className="web-btn" onClick={() => handleStepChange(1)}>GET STARTED</div>
                        </div>
                    </div>

                </div>
            )}

            {/* ---Get Started tab end---*/}


            {/* Travel Details tab start */}

            {activeStep === 1 && (



                <Row>
                    <Col span={8}></Col>

                    <Col span={8}>
                        <div className="travel-details-main-container">
                            <div className="back-icon-container" onClick={handleStepBack}>
                                <div className="back-icon">
                                    <img src="/img/back-icon.svg" alt="back-icon" style={{ width: '7px', height: 'auto', marginRight: '10px' }} />
                                </div>
                                <div className="back-text">Back</div>
                            </div>

                            <div className="travel-details-container">
                                <div className="verify-details-heading">
                                    Your Travel Details
                                </div>
                                <div className="verify-details-sub-text">Please enter your travel insurance policy details below.</div>
                            </div>

                            <div className="select-country-container">
                                <div className="label" >
                                    Country where Loss Occurred
                                </div>

                                <div style={{ marginTop: '15px' }}>
                                    <Select
                                        style={{ width: '100%' }}
                                        showSearch
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: 'Singapore',
                                                label: 'singapore',
                                            },
                                            {
                                                value: 'Saudi Arabia',
                                                label: 'ksa',
                                            },
                                            {
                                                value: 'Brunei',
                                                label: 'brunei',
                                            },
                                            {
                                                value: 'Malaysia',
                                                label: 'malaysia',
                                            },
                                            {
                                                value: 'Indonesia',
                                                label: 'indonesia',
                                            },
                                            {
                                                value: 'Thailand',
                                                label: 'thailand',
                                            },
                                        ]}
                                    />
                                </div>

                                <div className="initiate-claim-btn-container">
                                    <div className="web-btn-full" onClick={() => handleStepChange(2)}>NEXT</div>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>




            )}

            {/* Travel Details tab end */}

            {/* Claim Details tab start */}

            {activeStep === 2 && (

                <div className="claim-details-main-container py-3 px-5">

                    <div className="back-icon-container" onClick={handleStepBack}>
                        <div className="back-icon">
                            <img src="/img/back-icon.svg" alt="back-icon" style={{ width: '7px', height: 'auto', marginRight: '10px' }} />
                        </div>
                        <div className="back-text">Back</div>
                    </div>

                    <div className="claim-details-title">
                        <div className="claim-details-heading">
                            Claim requests
                        </div>
                        <div className="claim-details-sub-text">claim request can be initiated by selecting category of claim and uploading documents & pictures. User can add multiple claims for different categories from list</div>
                    </div>

                    <div className="heading-icon-container-2" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="virtual-card-icon-container">
                            <img src="/img/policy-details-icon.svg" alt="policy-details-icon" style={{ width: '32px', height: 'auto', marginRight: '10px' }} />
                        </div>
                        <div className="virtual-card-heading-text" style={{ backgroundColor: '#FCFAFA', padding: '15px' }}>
                            Claim request 1
                        </div>
                    </div>

                    <div className="claim-category-select mb-3">
                        <div className="label" >Claim Category</div>
                        <Select
                            showSearch

                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    label: 'Medical & Other Expenses',
                                    value: 'medical_other_Expenses',
                                },
                                {
                                    label: 'Hospital Confinement Allowance',
                                    value: 'hospital_confinement_allowance',
                                },
                                {
                                    label: 'Emergency Medical Evacuation',
                                    value: 'emergency_medical_evacuation',
                                },
                                {
                                    label: 'Personal Accident / Permanent Total Disablement / Child’s Education Fund',
                                    value: 'personal_accident_permanent_total_disablement_child_education_fund',
                                },
                                {
                                    label: 'Compassionate Visit/ Child Caretaker/ Child Help Get Well Benefit',
                                    value: 'compassionate_visit',
                                },
                                {
                                    label: 'Bereavement Benefit due to COVID-19',
                                    value: 'benefit_covid_19',
                                },
                                {
                                    label: 'Cancellation/Postponement (before onset of trip)',
                                    value: 'cancellation',
                                },
                                {
                                    label: 'Trip Curtailment',
                                    value: 'trip_curtailment',
                                },
                                {
                                    label: 'Travel Delay',
                                    value: 'travel_delay',
                                },
                                {
                                    label: 'Travel Misconnection',
                                    value: 'travel_misconnection',
                                },
                                {
                                    label: 'Overbooked Scheduled Public Conveyance',
                                    value: 'overbooked_scheduled',
                                },
                                {
                                    label: 'Flight Deviation',
                                    value: 'flight_deviation',
                                },
                                {
                                    label: 'Hijacking / Kidnapping',
                                    value: 'hijacking_kidnapping',
                                },
                                {
                                    label: 'Baggage Delay',
                                    value: 'baggage_delay',
                                },
                                {
                                    label: 'Loss of Baggage & Personal Effects',
                                    value: 'loss_of_baggage',
                                },
                                {
                                    label: 'Credit Card Indemnity',
                                    value: 'credit_card_indemnity',
                                },
                                {
                                    label: 'Personal Liability',
                                    value: 'personal_liability',
                                },
                                {
                                    label: 'Rental Vehicle Excess',
                                    value: 'rental_vehicle_excess',
                                },
                                {
                                    label: 'Home Protection / Burglary',
                                    value: 'home_protection',
                                },
                                {
                                    label: 'Emergency Phone Charges',
                                    value: 'emergency_phone_charges',
                                },
                                {
                                    label: 'Un-utilized Entertainment Ticket',
                                    value: 'un_utilized_entertainment_ticket',
                                },
                                {
                                    label: 'Credit Card Liability Protector',
                                    value: 'credit_card_liability_protector',
                                },
                                {
                                    label: 'Others',
                                    value: 'others',
                                },


                            ]}
                        />
                    </div>

                    <div className="documents-upload-heading" style={{ margrinBottom: '10px', margrinTop: '20px' }}>Documents Upload</div>
                    <div className="mandatory-items-note">* are mandatory items</div>

                    <div className="documents-upload-container">

                        <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                            <Col span={12} className="document-upload-label">Copy of Certificate of Insurance*</Col>
                            <Col span={12} className="pl-4">
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                        </Row>

                        <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                            <Col span={12} className="document-upload-label">Tour Operators Confirmation of booking invoices, Airline ticket counterfoil(s)/ Booking Pass(es)**</Col>
                            <Col span={12}>
                                <Upload {...props} className="pl-4">
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                        </Row>

                        <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                            <Col span={12} className="document-upload-label">Copies of your other insurance policy and proof of receiving compensation, if any*</Col>
                            <Col span={12} className="pl-4">
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                        </Row>

                        <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                            <Col span={12} className="document-upload-label">Medical Report and/or Hospital Discharge Summary showing nature and/or diagnosis of injury/ sickness</Col>
                            <Col span={12} className="pl-4">
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                        </Row>

                        <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                            <Col span={12} className="document-upload-label">Original Medical Bills/ Receipts for the full amount of the claim</Col>
                            <Col span={12} className="pl-4">
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                        </Row>

                        <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                            <Col span={12} className="document-upload-label">Police Report (for accident-related cases)</Col>
                            <Col span={12} className="pl-4">
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                        </Row>

                        <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                            <Col span={12} className="document-upload-label">Death Certificate, Burial/ Cremation Permit (if death occurred) and bill incurred for burial in the locality</Col>
                            <Col span={12} className="pl-4">
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                        </Row>

                        <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                            <Col span={12} className="document-upload-label">Child’s birth certificate (for Child’s Education Fund)</Col>
                            <Col span={12} className="pl-4">
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                        </Row>

                        <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                            <Col span={12} className="document-upload-label">Bills/Receipts for additional expenses incurred (for compassionate visit and child help claim)</Col>
                            <Col span={12} className="pl-4">
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                        </Row>

                        <div className="btns-container">
                            <div className="web-btn" onClick={()=> setIsModalOpen(true)}>Add more claims</div>
                            <div className="d-flex align-items-center">
                                <div className="secondary-btn mr-2">Save as draft</div>
                                <div className="web-btn" onClick={() => handleStepChange(3)}>Next</div>
                            </div>
                        </div>

                        <Modal title="Confirm" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <div className="claim-modal-text-container">
                            <span>Would you like to add another claim?</span>
                            </div>

                            <div className="d-flex justify-content-center align-items-center">
                                <div className="secondary-btn mr-2">No</div>
                                <div className="web-btn">Yes</div>
                            </div>

                        </Modal>

                    </div>

                </div>

            )}

            {/* Claim Details tab end */}


            {/* Payment Details tab start */}

            {activeStep === 3 && (

                <div className="payemnt-details-container">

                    <div className="payment-details-container">

                        <Row className="w-100">
                            <Col span={8}></Col>
                            <Col span={8}>

                                <div className="back-icon-container" onClick={handleStepBack}>
                                    <div className="back-icon">
                                        <img src="/img/back-icon.svg" alt="back-icon" style={{ width: '7px', height: 'auto', marginRight: '10px' }} />
                                    </div>
                                    <div className="back-text">Back</div>
                                </div>

                                <div className="travel-details-container">
                                    <div className="verify-details-heading">
                                        Payment Details
                                    </div>
                                    <div className="verify-details-sub-text">Please enter your payment details for money transfer upon successful claim settlement</div>
                                </div>

                                <div className="single-detail-entry-container">
                                    <div className="label-field-container">
                                        <div className="label">Payment options*</div>
                                        <div style={{ marginTop: '15px' }}>
                                            <Select className="w-100"
                                                showSearch
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                }
                                                options={[
                                                    {
                                                        value: 'dbs_posb',
                                                        label: 'DBS POSB Account',
                                                    },
                                                    {
                                                        value: 'paynow_linked_account',
                                                        label: 'Paynow Linked Account',
                                                    },
                                                    {
                                                        value: 'cheque',
                                                        label: 'Cheque',
                                                    },


                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* In case of DBS slelect, show this field */}


                                <div className="single-detail-entry-container">
                                    <div className="label-field-container">
                                        <div className="label">Payee Name (as per bank account)*</div>
                                        <div style={{ marginTop: '15px' }}>
                                            <Input placeholder="Payee Name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single-detail-entry-container">
                                    <div className="label-field-container">
                                        <div className="label">Payee NRIC*</div>
                                        <div style={{ marginTop: '15px' }}>
                                            <Input placeholder="Payee NRIC" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single-detail-entry-container">
                                    <div className="label-field-container">
                                        <div className="label">Bank Name (DBS/POSB Only)*</div>
                                        <div style={{ marginTop: '15px' }}>
                                            <Select className="w-100"
                                                showSearch
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                }
                                                options={[
                                                    {
                                                        value: 'dbs',
                                                        label: 'DBS',
                                                    },
                                                    {
                                                        value: 'posb',
                                                        label: 'POSB',
                                                    },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="single-detail-entry-container">
                                    <div className="label-field-container">
                                        <div className="label">Bank Account Number*</div>
                                        <div style={{ marginTop: '15px' }}>
                                            <Input placeholder="Enter Bank Account Number" />
                                        </div>
                                    </div>
                                </div>

                                {/* In case of paynow slelect, show this field */}
                                <div className="single-detail-entry-container">
                                    <div className="label-field-container">
                                        <div className="label">PayNow registered mobile number or NRIC/FIN*</div>
                                        <div style={{ marginTop: '15px' }}>
                                            <Input placeholder="Enter Bank Account Number" />
                                        </div>
                                    </div>
                                </div>

                                {/* In case of cheque slelect, show this field */}
                                <div className="single-detail-entry-container">
                                    <div className="label-field-container">
                                        <div className="label">Payee name*</div>
                                        <div style={{ marginTop: '15px' }}>
                                            <Input placeholder="Enter Bank Account Number" />
                                        </div>
                                    </div>
                                </div>

                                <div className="web-btn-full" onClick={() => handleStepChange(4)}>Next</div>

                            </Col>
                            <Col span={8}></Col>
                        </Row>

                    </div>

                </div>
            )}

            {/* Payment Details tab end */}

            {/* Review tab start */}

            {activeStep === 4 && (

                <div className="review-claim-main-container px-5">

                    <div className="back-icon-container" onClick={handleStepBack}>
                        <div className="back-icon">
                            <img src="/img/back-icon.svg" alt="back-icon" style={{ width: '7px', height: 'auto', marginRight: '10px' }} />
                        </div>
                        <div className="back-text">Back</div>
                    </div>

                    <div className="claim-details-title">
                        <div className="claim-details-heading">
                            Review Claim
                        </div>
                        <div className="claim-details-sub-text">Review claim details below. You can edit the claim details before submitting</div>
                    </div>


                    <div className="review-container">
                        <div className="review-header-container">
                            <div className="icon-container">
                                <img src="/img/travel-icon.svg" alt="claim-details-icon" style={{ width: '30px', height: 'auto', marginRight: '10px' }} />
                            </div>

                            <div className="virtual-card-heading-text">
                                Travel Details
                            </div>
                        </div>

                        <div className="review-details-container">
                            <Row className="w-100">
                                <Col span={8} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Insurance Policy Package</div>
                                        <div className="policy-detail">Hajj 1443H</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Traveler Agent</div>
                                        <div className="policy-detail">Mr. Rashid M</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Departure date from Singapore:</div>
                                        <div className="policy-detail">15 Apr 2023</div>
                                    </div>

                                </Col>
                                <Col span={8} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Policy Number</div>
                                        <div className="policy-detail">100256500266</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Country where Loss Occurred</div>
                                        <div className="policy-detail">Saudi Arabia</div>
                                    </div>
                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Return date to Singapore</div>
                                        <div className="policy-detail">22 Apr 2023</div>
                                    </div>

                                </Col>
                                <Col span={8} className="d-flex justify-content-end align-items-start">
                                    <div className="edit-icon-container">
                                        <div className="edit-icon">
                                            <div className="icon">
                                                <img src="/img/edit-icon.svg" alt="edit-icon" style={{ width: '12px', height: 'auto', marginRight: '5px' }} />
                                            </div>
                                            <span>Edit</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="review-container">
                        <div className="review-header-container">
                            <div className="icon-container">
                                <img src="/img/claim-icon.svg" alt="claim-details-icon" style={{ width: '30px', height: 'auto', marginRight: '10px' }} />
                            </div>

                            <div className="virtual-card-heading-text">
                                Claim Details
                            </div>
                        </div>

                        <div className="claim-header pl-2">
                            <div className="icon">
                                <img src="/img/policy-details-icon.svg" alt="claim-icon" style={{ width: '30px', height: 'auto', marginRight: '10px' }} />
                            </div>
                            <div>Claim 1</div>
                            <div></div>
                        </div>

                        <div className="review-details-container">

                            <Row className="w-100">
                                <Col span={8} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Claim Category</div>
                                        <div className="policy-detail">Medical and other expenses</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Documents Uploaded</div>
                                        <div className="policy-detail">Copy of Certificate of Insurance*</div>
                                    </div>


                                </Col>
                                <Col span={8} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    {/* <div className="policy-details-container">
                                <div className="policy-details-label">Policy Number</div>
                                <div className="policy-detail">100256500266</div>
                            </div> */}


                                </Col>
                                <Col span={8} className="d-flex justify-content-end align-items-start">
                                    <div className="edit-icon-container">
                                        <div className="edit-icon">
                                            <div className="icon">
                                                <img src="/img/edit-icon.svg" alt="edit-icon" style={{ width: '12px', height: 'auto', marginRight: '5px' }} />
                                            </div>
                                            <span>Edit</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="review-container">
                        <div className="review-header-container">
                            <div className="icon-container">
                                <img src="/img/payment-icon.svg" alt="claim-details-icon" style={{ width: '30px', height: 'auto', marginRight: '10px' }} />
                            </div>

                            <div className="virtual-card-heading-text">
                                Payment Details
                            </div>
                        </div>

                        <div className="review-details-container">

                            <Row className="w-100">
                                <Col span={8} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Payment Option</div>
                                        <div className="policy-detail">DBS/POSB Account</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Payee NRIC</div>
                                        <div className="policy-detail">S800256S</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Bank Account No</div>
                                        <div className="policy-detail">1256645 6954669 66456</div>
                                    </div>


                                </Col>
                                <Col span={8} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Payee Name (as per bank acccount)</div>
                                        <div className="policy-detail">100256500266</div>
                                    </div>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Bank Name</div>
                                        <div className="policy-detail">DBS</div>
                                    </div>

                                </Col>
                                <Col span={8} className="d-flex justify-content-end align-items-start">
                                    <div className="edit-icon-container">
                                        <div className="edit-icon">
                                            <div className="icon">
                                                <img src="/img/edit-icon.svg" alt="edit-icon" style={{ width: '12px', height: 'auto', marginRight: '5px' }} />
                                            </div>
                                            <span>Edit</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="review-container">
                        <div className="review-header-container">
                            <div className="icon-container">
                                <img src="/img/declaration-icon.svg" alt="claim-details-icon" style={{ width: '30px', height: 'auto', marginRight: '10px' }} />
                            </div>

                            <div className="virtual-card-heading-text">
                                Declaration
                            </div>
                        </div>

                        <div className="declaration-container pl-2">
                            <div className="checkbox-text">
                                <Checkbox onChange={onChange}>I declare that all information's are true</Checkbox>
                            </div>
                            <div className="notice-container">
                                <div className="notice-text my-3">
                                    <b>Important Notice:</b> In accordance to the provisions of the Personal Data Protection Act 2012 (PDPA),the UOI's privacy notice shall form part of the terms and conditions of the policy. A copy of UOI's Privacy  Notice can be found at www.uoi.com.sg
                                </div>
                            </div>

                            <div className="single-detail-entry-container">
                                <div className="label-field-container">
                                    <div className="label">User Name*</div>
                                    <div style={{ marginTop: '15px' }}>
                                        <Input placeholder="Payee Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="ip-address-holder mt-1">197.184.163.130</div>
                        </div>

                        <div className="checkbox-text my-3">
                            <Checkbox onChange={onChange}>By signing, I hereby acknowledged and agree to the terms & conditions of ST&T International</Checkbox>
                        </div>

                    </div>

                    <div >
                        <div className="btn-container">
                            <div className="web-btn mb-3" >Submit Claim</div>
                        </div>
                    </div>

                </div>

            )}

            {/* Review tab end */}



        </div>
    );
};




export default ClaimSubmission;