import React from "react";
import "./web_homepage.css";
import "../fonts.css";
import { Col, Row, Table, Select, Button, message, Upload, Input, Checkbox } from 'antd';
import { Link } from 'react-router-dom'


const Homepage = () => {
    return (
    <div>
        <div className="banner-container">
                <img src="/img/banner-img.png" alt="banner" style={{ width: '100%', height: 'auto' }} />
            </div>

        <Row>
            <Col span={8}></Col>
            <Col span={8}>
            <div className="verify-details-container">
            <div className="verify-details-heading">Verify your details</div>
            <div className="verify-details-sub-text">For verification, please enter following details</div>

            <div className="label-field-container">
                <div className="label">Last Name</div>
                <div className="input-field">
                    <input type="text" className="input-field-main" placeholder="Enter last name" />
                </div>
            </div>

            <div className="label-field-container">
                <div className="label">Passport Number</div>
                <div className="input-field">
                    <input type="text" className="input-field-main" placeholder="Passport number"  />
                </div>
            </div>

            <div className="label-field-container">
                <div className="label">UID</div>
                <div className="input-field">
                    <input type="text" className="input-field-main" placeholder="UID"  />
                </div>
            </div>

            <div className="btn-container">
                
               <Link to={`/web/web_claimSubmission`}><button className="web-btn">Verify</button></Link> 
            </div>
       </div>
            </Col>
            <Col span={8}></Col>
        </Row>

     

    </div>
    );
};

                


export default Homepage;