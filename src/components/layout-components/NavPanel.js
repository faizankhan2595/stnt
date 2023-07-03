import React, { Component } from "react";
import {
  SettingOutlined,
  UserOutlined,
  BellOutlined,
  LogoutOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Drawer, Menu } from "antd";
import ThemeConfigurator from "./ThemeConfigurator";
import { connect } from "react-redux";
import { DIR_RTL } from "constants/ThemeConstant";
import { Link } from "react-router-dom";

export class NavPanel extends Component {
  state = { visible: false };

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
            >
              <Link className="d-flex align-items-center text-black-50">
                <div className="mt-1">
                  <LogoutOutlined />
                </div>
                <div className="ml-2">
                  <h4 className="m-0">Sign Out</h4>
                </div>
              </Link>
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
      </>
    );
  }
}

const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale };
};

export default connect(mapStateToProps)(NavPanel);
