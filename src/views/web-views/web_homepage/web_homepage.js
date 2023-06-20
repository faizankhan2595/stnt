import React from "react";
import "./web_homepage.css";
import "../fonts.css";
import { Col, Row, Table, Select, Button, message, Upload, Input, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import { verifyDetailsHome } from "services/apiService";


const Homepage = () => {
    const [lastName, setLastName] = React.useState('');
    const [passportNumber, setPassportNumber] = React.useState('');
    const [uid, setUid] = React.useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'lastName') {
            setLastName(value);
        }
        else if (name === 'passportNumber') {
            setPassportNumber(value);
        }
        else if (name === 'uid') {
            setUid(value);
        }
    }

    const submit = async () => {
        await verifyDetailsHome({
            name: lastName,
            passportNo: passportNumber,
            uidNo: uid
        }).then(res => {
            message.success('Details verified successfully');
            localStorage.setItem('token', res.data.token);
            setTimeout(() => {
                window.location.href = '/web/web_claimSubmission'
            }, 1000);
        })
            .catch(err => {
                message.error('Verification failed. User not exists')
                // setTimeout(() => {
                //     window.location.href = '/web/web_claimSubmission'
                // }, 1000);
            })
    }

    return (
        <div className="main-container">
            <div className="banner-container">
                <img src="/img/banner-img.png" alt="banner" style={{ width: '100%', height: 'auto', marginTop:'130px'}} />
                <div className="stnt-logo-container">
                    <img src="/img/stnt-logo-white.svg" alt="stnt" style={{ width: '150px', height: 'auto'}} />
                </div>
            </div>

            <div>
                <div className="stnt-logo-container-mobile">
                    <img src="/img/stnt-logo-white.svg" alt="stnt" style={{ width: '100px', height: 'auto' }} />
                </div>
            </div>


            {/* <div className="banner-container-mobile">
                <img src="/img/banner-img.png" alt="banner" style={{ width: '100%', height: 'auto' }} />
            </div> */}

            <Row>
                <Col span={8}></Col>
                <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                    <div className="verify-details-container">
                        <div className="verify-details-heading">Verify your details</div>
                        <div className="verify-details-sub-text">For verification, please enter following details</div>

                        <div className="label-field-container">
                            <div className="label">Last Name</div>
                            <div className="input-field">
                                <input type="text"
                                    className="input-field-main" placeholder="Enter last name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="label-field-container">
                            <div className="label">Passport Number<span  className="mandatory-item">*</span></div>
                            <div className="input-field">
                                <input type="text" className="input-field-main" placeholder="Enter Passport Number"
                                    name="passportNumber"
                                    value={passportNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="label-field-container">
                            <div className="label">UID<span className="mandatory-item">*</span></div>
                            <div className="input-field">
                                <input type="text" className="input-field-main" placeholder="Enter UID"
                                    name="uid"
                                    value={uid}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="btn-container">
                            <button className="web-btn" onClick={submit}>Verify</button>
                        </div>
                    </div>
                </Col>
                <Col span={8}></Col>
            </Row>

            <div className="footer-container">
                <div>Distributed By:</div>
                <div style={{ margin: '0px 20px' }}>
                    <img src="/img/stntlogo.svg" alt="stnt" style={{ width: '100%', height: 'auto', }} />

                </div>
                <div>Underwritten By:</div>
                <div style={{ margin: '0px 20px' }}>
                    <img src="/img/uoilogo.png" alt="stnt" style={{ width: '100%', height: 'auto', }} />
                </div>
            </div>

        </div>
    );
};




export default Homepage;