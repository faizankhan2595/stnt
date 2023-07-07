import React, { Component } from "react";
import {
  SettingOutlined,
  UserOutlined,
  BellOutlined,
  LogoutOutlined,
  SecurityScanOutlined,LockOutlined
} from "@ant-design/icons";
import { Avatar, Badge, Button, Drawer, Input, Menu, Modal } from "antd";
import ThemeConfigurator from "./ThemeConfigurator";
import { connect } from "react-redux";
import { DIR_RTL } from "constants/ThemeConstant";
import { Link } from "react-router-dom";
import { ForgetEmailIcon } from "views/auth-views/components/LoginForm";
import { BlueTick } from "configs/icons";

export class NavPanel extends Component {
  state = { visible: false,isModal:false,isSuccess:false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  handleOk = async () => {
    this.setState({
      isModal: false,
      isSuccess:true
    });
  };
  handleCancel = () => {
    this.setState({
      isModal: false,
    });
  };
  handleOPen = () => {
    this.setState({
      isModal: true,
    });
  }

  render() {
    return (
      <>
        <Menu mode="horizontal">
          {/* <Menu.Item key="search" >
            <span><SearchOutlined className="nav-icon mr-0" /></span>
          </Menu.Item> */}
          {/* <Menu.Item key="noto">
            <span>
              <BellOutlined className="nav-icon mr-0" />
            </span>
          </Menu.Item>
          <Menu.Item key="setting" onClick={this.showDrawer}>
            <span>
              <SettingOutlined className="nav-icon mr-0" />
            </span>
          </Menu.Item> */}
          <Menu.SubMenu
            key="item1"
            title={
              <Badge dot>
                <Avatar
                  size={30}
                  className="nav-icon mr-0"
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Badge>
            }
          >
            {/* <div style={{width:'250px'}} className="d-flex p-3 align-items-start">
                <div className="mt-1">
                    <img src="/img/Avatar.png" alt="img"/>
                </div>
                <div className="ml-3">
                    <h4 className="m-0">John Smith</h4>
                    <p className="m-0">System Admin</p>
                </div>
              </div> */}
            <div
            onClick={this.handleOPen}
              style={{ width: "250px" }}
              className="d-flex px-3 py-1 align-items-center"
            >
              <Link className="d-flex align-items-center text-black-50">
                <div className="mt-1">
                  <SecurityScanOutlined />
                </div>
                <div className="ml-2">
                  <h4 className="m-0">Change Password</h4>
                </div>
              </Link>
            </div>
            <div
              style={{ width: "250px" }}
              className="d-flex px-3 py-1 pb-2 align-items-center"
              onClick={()=>{
                localStorage.removeItem('token')
                window.location.href='/auth/login-2'
              }}
            >
              <span className="d-flex align-items-center text-black-50">
                <div className="mt-1">
                  <LogoutOutlined />
                </div>
                <div className="ml-2">
                  <h4 className="m-0">Log Out</h4>
                </div>
              </span>
            </div>
          </Menu.SubMenu>
        </Menu>
        <Drawer
          title="Theme Config"
          placement={this.props.direction === DIR_RTL ? "left" : "right"}
          width={350}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <ThemeConfigurator />
        </Drawer>
        <Modal
        width={600}
        footer={null}
        visible={this.state.isModal}
        onCancel={this.handleCancel}
      >
        <div style={{width:'400px'}} className="m-auto d-flex my-3 flex-column justify-content-center">
		<div className="d-flex align-items-center flex-column justify-content-center"><ForgetEmailIcon/></div>
          <h3 className="text-center">Reset Password</h3>
		  <h5>New Password </h5>
		  <Input.Password
            // value="New Password"
            placeholder="Enter password"
            onChange={(e) => console.log(e.target.value)}
            prefix={<LockOutlined className="text-primary" />}
          />
		   <h5 className="mt-3">Confirmb New Password </h5>
		   <Input.Password
            // value="Confirm New Password"
            placeholder="Confirm password"
            onChange={(e) => console.log(e.target.value)}
            prefix={<LockOutlined className="text-primary" />}
          />
		  <div className="d-flex my-3 align-items-center flex-column justify-content-center">
          <Button
            style={{ backgroundColor: "#41C1B2", border: "none" }}
            className="mt-3"
            type="primary"
            onClick={this.handleOk}
          >
            Submit
          </Button>
		  <span onClick={this.handleCancel} className="mt-2 forget_password_loginTwo">Cancel</span></div>
        </div>
      </Modal>
        <Modal
        width={600}
        footer={null}
        visible={this.state.isSuccess}
        // onCancel={this.handleCancel}
      >
        <div style={{width:'400px'}} className="m-auto d-flex my-3 flex-column justify-content-center">
		<div className="d-flex align-items-center flex-column justify-content-center"> <BlueTick/> </div>
          <h2 className="text-center">Password reset success!</h2>
          <p className="text-center">Password reset done successfully. Log in now to continue your work.</p>
		   
		  <div className="d-flex mb-3 align-items-center flex-column justify-content-center">
          <Button
            style={{ backgroundColor: "#41C1B2", border: "none" }}
            className="mt-0"
            type="primary"
            // onClick={this.handleOk}
          >
            Log In
          </Button>
		  {/* <span onClick={this.handleCancel} className="mt-2 forget_password_loginTwo">Cancel</span> */}
      </div>
        </div>
      </Modal>
      </>
    );
  }
}

const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale };
};

export default connect(mapStateToProps)(NavPanel);
