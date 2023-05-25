import React from "react";
import "./claimSubmission.css";
import "../fonts.css";
import { UploadOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { Col, Row, Table, Select, Button, message, Upload, Input, Checkbox, Modal } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getClaimCategories, getClaimCategoryAndDocs, getCountryDropdown, paymentSave } from "services/apiService";
import axios from "axios";

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
        render: (record) => {
            return (
                <>
                    <div className="secondary-btn" style={{ maxWidth: "fit-content" }}>Resume editing</div>

                </>
            );
        },
    },

];

const claimHistory = [
    {
        key: '1',
        sno: '1',
        name: 'Draft1',
        date: '24 Apr 2023, 10:00:00 Am',
        claim_id: 'S-STT-S-1004-5921-01',
        status: 'WIP'
    },
    {
        key: '2',
        sno: '2',
        name: 'Draft2',
        date: '24 Apr 2023, 10:00:00 Am',
        claim_id: 'S-STT-S-1004-5921-02',
        status: 'Pending'
    },
];

const claimHistoryColumns = [
    {
        title: 'Sr. No',
        dataIndex: 'sno',
        key: 'sno',
    },
    {
        title: 'Claim ID',
        dataIndex: 'claim_id',
        key: 'claim_id',
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
        render: (record) => {
            return (
                <>
                    <div className="secondary-btn" style={{ maxWidth: "fit-content" }}>View Summary Claim</div>

                </>
            );
        },
    },

];

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

    //flip image logic starts here

    const [imageSrc, setImageSrc] = useState("/img/sgp-card.jpg");
    const [isAlternateImage, setIsAlternateImage] = useState(false);

    const handleImageToggle = () => {
        if (isAlternateImage) {
            setImageSrc("/img/sgp-card.jpg");
        } else {
            setImageSrc("/img/sgp-card-rear.jpg");
        }
        setIsAlternateImage(!isAlternateImage);
    };


    const handleImageChange = () => {
        setImageSrc("/img/sgp-card-rear.jpg");
    };

    //flip image logic ends here 

    const onChange = () => {

    }

    const [countries, setCountries] = useState([]);

    //get countries list from api
    useEffect(() => {
          getCountryDropdown().then((data) => {
                const countries2 = data.data.countries.map((country) => {
                    return {
                        key: country,
                        value: country,
                        label: country,
                    };
                });
                setCountries(countries2);
            });
    }, []);

    const [country, setCountry] = useState();

    const onCountrySelect = (value) => {
        console.log(`selected ${value}`);
        setCountry(value);
    };

    const [claims, setClaims] = useState([{
        claimCategoryId: null,
        isDraft: true,
        claimDocs: [],
    }]);

    const [claimCategories, setClaimCategories] = useState([]);

    useEffect(() => {
        getClaimCategories().then((data) => {
            const claimCategoriesNew = data.data.claimCategories.map((claimCategory) => {
                return {
                    value: claimCategory.id,
                    label: claimCategory.title,
                };
            });
            setClaimCategories(claimCategoriesNew);
        });
    }, []);

    //claim category dropdown logic ends here

    //dropdown logic starts here
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    const onSearch = (val) => {
    };

    const handleDocumentUpload = (file) => {
        if (selectedOption === 'medical_other_Expenses') {
            // Handle document upload logic for the "Medical & Other Expenses" option
        } else if (selectedOption === 'hospital_confinement_allowance') {
            // Handle document upload logic for the "Hospital Confinement Allowance" option
        }
        // Add more conditional blocks for other options
    };

    //dropdown logic ends here

    //add claim logic starts here

    const addAllClaims = async () => {

        for(const claim of claims) {
            const FormData = require('form-data');
            let data = new FormData();
            data.append('claimCategoryId', claim.claimCategoryId);
            data.append('lossCountry', country);

            for (const claimDoc of claim.claimDocs) {
                data.append(claimDoc.title, claimDoc.file);
            }
        
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://54.255.28.58:8000/api/website/claim-request',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                data: data
            };
        
            await axios.request(config)
        }      
    }

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


    //payment logic starts here

    const [paymentDetails, setPaymentDetails] = useState({});
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);

    const [bankAccountNumber, setBankAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [payeeName, setPayeeName] = useState('');
    const [payNowMobileNumber, setPayNowMobileNumber] = useState('');
    const [PayeeNRIC, setPayeeNRIC] = useState('');


    const handlePaymentOptionChange = (value) => {
        setSelectedPaymentOption(value);
    };

    // const submit = async () => {
    //     const res = await verifyDetailsHome({ 
    //          name: lastName,
    //          passportNo: passportNumber, 
    //          uidNo: uid
    //      }).catch(err => {
    //          message.error('Verification failed. User not exists')
    //          setTimeout(() => {
    //              window.location.href = '/web/web_claimSubmission'
    //          }, 1000);
    //      })
 
    //      message.success('Details verified successfully');
    //      localStorage.setItem('token', res.data.token);
    //      setTimeout(() => {
    //          window.location.href = '/web/web_claimSubmission'
    //      }, 1000);
    //  }

    const paymentSave = async () => {
        if (selectedPaymentOption === 'dbs_posb') {
            setPaymentDetails({
                payeeName: payeeName,
                PayeeNRIC: PayeeNRIC,
                bankName: bankName,
                bankAccountNumber: bankAccountNumber,
            });
        }

        else if (selectedPaymentOption === 'cheque') {
            setPaymentDetails({
                payeeName: payeeName,
            });
        } else if (selectedPaymentOption === 'paynow_linked_account') {
            setPaymentDetails({
                payNowMobileNumber: payNowMobileNumber,

            });
        }
    };

    //payment logic ends here

    //submot clainm logic starts here

    const [isSubmitClaimModalOpen, setIsSubmitClaimModalOpen] = useState(false);

    const openSubmitClaimModal = () => {
        setIsSubmitClaimModalOpen(true);
    };

    return (
        <div>
            <div className="banner-container">
                <img src="/img/banner-img.png" alt="banner" style={{ width: '100%', height: '375px', objectFit: 'cover' }} />
            </div>

            <div className="logout-btn-container">
                <Link to={`/`}><div className="logout-btn">Logout</div></Link>
                <div className="update-details-container" onClick={() => setIsModalOpen(true)}>
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


                    <div className="virtual-card-container-traveler">
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
                                <Col lg={{ span: 12 }} xs={{ span: 24 }} className="virtual-card-desc">
                                    A virtual claim payment card is unique digit computer generated number that is created solely for a use between a payer and payee.
                                    We will provide a Claim Assistance Card for your to ensure that you have handy policy details as well as direct claims assistance number always with you.
                                </Col>
                                <Col lg={{ span: 12 }} xs={{ span: 24 }} className="virtual-card-img">
                                    <div className="virtual-card-img-container">

                                        <img src={imageSrc} alt="virtual-card-img" style={{ width: '100%', height: 'auto' }} />
                                        {/* <img src="/img/sgp-card.jpg" alt="virtual-card-img" style={{ width: '100%', height: 'auto' }} /> */}

                                        <button className="secondary-btn mt-2" onClick={handleImageToggle}>Flip Card</button>
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

                    <div className="virtual-card-container-mobile">
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

                            </div>
                            <Row>
                                <Col lg={{ span: 12 }} xs={{ span: 24 }} className="virtual-card-img">
                                    <div className="virtual-card-img-container">
                                        <img src="/img/policy-img.png" alt="virtual-card-img" style={{ width: '150px', height: 'auto' }} />
                                    </div>
                                </Col>
                                <Col lg={{ span: 6 }} xs={{ span: 12 }} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

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
                                <Col lg={{ span: 6 }} xs={{ span: 12 }} className="virtual-card-desc" style={{ paddingRight: '20px' }}>

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

                    <Col lg={{ span: 8 }} xs={{ span: 24 }}>
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
                                        placeholder="Select a country"
                                        optionFilterProp="children"
                                        onChange={onCountrySelect}
                                        name="country"
                                        value={country}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={countries}
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

                    {claims.map((claim, index) => (<>


                        <div className="heading-icon-container-2" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="virtual-card-icon-container">
                                <img src="/img/policy-details-icon.svg" alt="policy-details-icon" style={{ width: '32px', height: 'auto', marginRight: '10px' }} />
                            </div>
                            <div className="virtual-card-heading-text" style={{ backgroundColor: '#FCFAFA', padding: '15px' }}>
                                Claim request {index + 1}
                            </div>
                        </div>

                        <div className="claim-category-select mb-3">
                            <div className="label" style={{ marginBottom: '10px' }}>Claim Category</div>
                            <Select
                                showSearch
                                onChange={async (value) => {
                                    const claimNew = [...claims];
                                    const data = await getClaimCategoryAndDocs({id: value});
                                    const claimCategoryData = data.data?.claimCategoryData;
                                    claimNew[index].claimCategoryId = value;
                                    claimNew[index].claimDocs = claimCategoryData?.claimDocuments;
                                    setClaims(claimNew);
                                }}
                                placeholder="Select a category"
                                optionFilterProp="children"
                                name="categories"
                                value={claim.claimCategoryId}
                                options={claimCategories}
                            />
                        </div>

                        <div className="documents-upload-heading" style={{ margrinBottom: '10px', margrinTop: '20px' }}>Documents Upload</div>
                        <div className="mandatory-items-note">* are mandatory items</div>

                        <div className="documents-upload-container">

                            <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                                {claim.claimDocs.map((claim_doc, claim_doc_index) => (<>
                                        <Col lg={{ span: 24 }} xs={{ span: 24 }} className="document-upload-label mb-2 mt-2">
                                            {claim_doc.title}
                                            {claim_doc.isMandatory && <span className="mandatory-item">*</span>}
                                        </Col>
                                        <Col lg={{ span: 24 }} xs={{ span: 24 }} className="pl-4 mb-2">
                                            <Upload 
                                                name="file"
                                                action={(file) => {
                                                    const claimNew = [...claims];
                                                    claimNew[index].claimDocs[claim_doc_index].file = file;
                                                    setClaims(claimNew);
                                                }}
                                                customRequest={({ file, onSuccess }) => {
                                                    setTimeout(() => {
                                                        onSuccess("ok");
                                                    }, 0);
                                                }}
                                            >
                                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                            </Upload>
                                        </Col>
                                </>))}
                             </Row>

                        </div>

                    </>))}


                    <Modal title="Confirm" visible={isModalOpen} onCancel={handleCancel}>
                        <div className="claim-modal-text-container">
                            <span>Would you like to add another claim?</span>
                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <div className="secondary-btn mr-2"
                                onClick={() => {
                                    setIsModalOpen(false);
                                }}
                            >No</div>
                            <div className="web-btn"
                                onClick={() => {
                                    setIsModalOpen(false);
                                    const claimNew = [...claims];
                                    claimNew.push({
                                        claimCategoryId: '',
                                        claimDocs: []
                                    });
                                    setClaims(claimNew);
                                }}
                            >Yes</div>
                        </div>

                    </Modal>

                    <div className="btns-container">
                        <div className="web-btn" onClick={() => setIsModalOpen(true)}>Add more claims</div>
                        <div className="save-draft-next-btn-container d-flex align-items-center">
                            <div className="secondary-btn mr-2" onClick={addAllClaims}>
                                Save as draft
                            </div>
                            <div className="web-btn" onClick={() => {
                                addAllClaims();
                                handleStepChange(3);
                            }}>Next</div>
                        </div>
                    </div>

                </div>

            )}

            {/* Claim Details tab end */}


            {/* Payment Details tab start */}

            {activeStep === 3 && (

                <div className="payemnt-details-container pb-5 px-3">

                    <div className="payment-details-container">

                        <Row className="w-100">
                            <Col span={8}></Col>
                            <Col lg={{ span: 8 }} xs={{ span: 24 }}>

                                <div className="travel-details-container">
                                    <div className="back-icon-container" onClick={handleStepBack}>
                                        <div className="back-icon">
                                            <img src="/img/back-icon.svg" alt="back-icon" style={{ width: '7px', height: 'auto', marginRight: '10px' }} />
                                        </div>
                                        <div className="back-text">Back</div>
                                    </div>
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
                                                placeholder="Select Payment Option"
                                                optionFilterProp="children"
                                                onChange={handlePaymentOptionChange}
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

                                {selectedPaymentOption === "dbs_posb" && (
                                    <div>
                                        <div className="single-detail-entry-container">
                                            <div className="label-field-container">
                                                <div className="label">Payee Name (as per bank account)*</div>
                                                <div style={{ marginTop: '15px' }}>
                                                    <Input placeholder="Payee Name" 
                                                        value={payeeName}
                                                        onChange={(e) => {
                                                            setPayeeName(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-detail-entry-container">
                                            <div className="label-field-container">
                                                <div className="label">Payee NRIC*</div>
                                                <div style={{ marginTop: '15px' }}>
                                                    <Input placeholder="Payee NRIC" 
                                                        value={PayeeNRIC}
                                                        onChange={(e) => {
                                                            setPayeeNRIC(e.target.value);
                                                        }}
                                                    />
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
                                                        value={bankName}
                                                        onChange={(value) => {
                                                            setBankName(value);
                                                        }}
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
                                                    <Input placeholder="Enter Bank Account Number" 
                                                        value={bankAccountNumber}
                                                        onChange={(e) => {
                                                            setBankAccountNumber(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {selectedPaymentOption === "paynow_linked_account" && (
                                    <div>
                                        <div className="single-detail-entry-container">
                                            <div className="label-field-container">
                                                <div className="label">PayNow registered mobile number or NRIC/FIN*</div>
                                                <div style={{ marginTop: '15px' }}>
                                                    <Input placeholder="Enter Mobile Number or NRIC/FIN"
                                                    value={payNowMobileNumber} 
                                                        onChange={(e) => { 
                                                            setPayNowMobileNumber(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {selectedPaymentOption === "cheque" && (
                                    <div>
                                        <div className="single-detail-entry-container">
                                            <div className="label-field-container">
                                                <div className="label">Payee name*</div>
                                                <div style={{ marginTop: '15px' }}>
                                                    <Input placeholder="Enter Payee Name"
                                                        value={payeeName}
                                                        onChange={(e) => {
                                                            setPayeeName(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* In case of paynow slelect, show this field */}


                                {/* In case of cheque slelect, show this field */}


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
                            <div className="d-flex justify-content-between">
                                <div className="icon-container">
                                    <img src="/img/travel-icon.svg" alt="claim-details-icon" style={{ width: '30px', height: 'auto', marginRight: '10px' }} />
                                </div>

                                <div className="virtual-card-heading-text">
                                    Travel Details
                                </div>
                            </div>
                            <div className="review-edit-icon-container d-flex">
                                <div className="review-edit-icon">
                                    <img src="/img/icon-edit.svg" alt="edit-icon" style={{ width: '15px', height: 'auto', marginRight: '10px' }} />
                                </div>
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
                                    <div className="edit-icon-container" onClick={() => handleStepChange(1)}>
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

                        <div className="review-details-container-mobile">
                            <Row className="w-100">
                                <Col span={24} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Insurance Policy Package</div>
                                        <div className="policy-detail">Hajj 1443H</div>
                                    </div>

                                </Col>
                                <Col span={24} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Traveler Agent</div>
                                        <div className="policy-detail">Mr. Rashid M</div>
                                    </div>

                                </Col>
                                <Col span={24} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Departure date from Singapore:</div>
                                        <div className="policy-detail">15 Apr 2023</div>
                                    </div>
                                </Col>


                                <Col span={24} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Policy Number</div>
                                        <div className="policy-detail">100256500266</div>
                                    </div>
                                </Col>
                                <Col span={24} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Country where Loss Occurred</div>
                                        <div className="policy-detail">Saudi Arabia</div>
                                    </div>
                                </Col>
                                <Col span={24} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Return date to Singapore</div>
                                        <div className="policy-detail">22 Apr 2023</div>
                                    </div>

                                </Col>

                                <Col span={8} className="d-flex justify-content-end align-items-start">
                                    <div className="edit-icon-container" onClick={() => handleStepChange(1)}>
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
                            <div className="d-flex justify-content-between">
                                <div className="icon-container">
                                    <img src="/img/claim-icon.svg" alt="claim-details-icon" style={{ width: '30px', height: 'auto', marginRight: '10px' }} />
                                </div>

                                <div className="virtual-card-heading-text">
                                    Claim Details
                                </div>
                            </div>
                            <div className="review-edit-icon-container d-flex">
                                <div className="review-edit-icon">
                                    <img src="/img/icon-edit.svg" alt="edit-icon" style={{ width: '15px', height: 'auto', marginRight: '10px' }} />
                                </div>
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
                                    <div className="edit-icon-container" onClick={() => handleStepChange(2)}>
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

                        <div className="review-details-container-mobile">

                            <Row className="w-100">
                                <Col span={24} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                    <div className="policy-details-container">
                                        <div className="policy-details-label">Claim Category</div>
                                        <div className="policy-detail">Medical and other expenses</div>
                                    </div>

                                </Col>
                                <Col span={24} className="virtual-card-desc-policy" style={{ paddingRight: '20px' }}>

                                <div className="policy-details-container">
                                        <div className="policy-details-label">Documents Uploaded</div>
                                        <div className="policy-detail">Copy of Certificate of Insurance*</div>
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
                                    <div className="edit-icon-container" onClick={() => handleStepChange(3)}>
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
                            <div className="web-btn mb-3" onClick={() => {
                                setIsSubmitClaimModalOpen(true);
                            }}>Submit</div>
                        </div>
                    </div>
                    <Modal title="Confirm" visible={isSubmitClaimModalOpen} footer={null}>
                        <div className="claim-modal-text-container">
                            <span>Your claim has been submitted</span>
                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <div className="web-btn" onClick={() => {
                                handleStepChange(0);
                                setIsSubmitClaimModalOpen(false);
                            }}>OK</div>
                        </div>
                    </Modal>
                </div>
            )}

            {/* Review tab end */}



        </div>
    );
};




export default ClaimSubmission;