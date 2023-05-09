import { Button, Dropdown, Menu, Checkbox } from "antd";
import React, { useState } from "react";

const test = (
  <Menu mode="horizontal">
    {" "}
    {/* Set the mode to "horizontal" or "vertical" */}
    <Menu.SubMenu key="item1" title="Roles">
      {" "}
      {/* Use SubMenu component with a key and title */}
      <Menu.Item key="subitem1">
        <Checkbox>All</Checkbox>
      </Menu.Item>{" "}
      {/* Use Menu.Item components as submenu items */}
      <Menu.Item key="subitem1">
        <Checkbox>Crew</Checkbox>
      </Menu.Item>{" "}
      {/* Use Menu.Item components as submenu items */}
      <Menu.Item key="subitem2">
        <Checkbox>Ops Manager</Checkbox>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="item2" title="Status">
      {" "}
      {/* Use SubMenu component with a key and title */}
      <Menu.Item key="subitem1">
        <Checkbox>All</Checkbox>
      </Menu.Item>{" "}
      {/* Use Menu.Item components as submenu items */}
      <Menu.Item key="subitem2">
        <Checkbox>Active</Checkbox>
      </Menu.Item>
      <Menu.Item key="subitem2">
        <Checkbox>Terminated</Checkbox>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="item3" title="Gender">
      {" "}
      {/* Use SubMenu component with a key and title */}
      <Menu.Item key="subitem1">
        <Checkbox>All</Checkbox>
      </Menu.Item>{" "}
      {/* Use Menu.Item components as submenu items */}
      <Menu.Item key="subitem1">
        <Checkbox>Male</Checkbox>
      </Menu.Item>{" "}
      {/* Use Menu.Item components as submenu items */}
      <Menu.Item key="subitem2">
        <Checkbox>Female</Checkbox>
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

const Filter = (props) => {
  const [menu, setMenu] = useState(test);
  const country = (
    <Menu mode="horizontal">
      <Menu.Item key="subitem1">
        <>All</>
      </Menu.Item>
      <Menu.SubMenu key="item1" title="Country">
       
        <Menu.Item key="subitem1">
          <Checkbox>All</Checkbox>
        </Menu.Item>{" "}
        {/* Use Menu.Item components as submenu items */}
        <Menu.Item key="subitem1">
          <Checkbox>Singapore</Checkbox>
        </Menu.Item>{" "}
        {/* Use Menu.Item components as submenu items */}
        <Menu.Item key="subitem2">
          <Checkbox>Brunei</Checkbox>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
  const claim_req = (
    <Menu mode="horizontal">
      <Menu.Item key="subitem1">
        <>All</>
      </Menu.Item>
      <Menu.SubMenu key="item1" title="Policy Type">
       
        <Menu.Item key="subitem1">
          <Checkbox>All</Checkbox>
        </Menu.Item>{" "}
        {/* Use Menu.Item components as submenu items */}
        <Menu.Item key="subitem1">
          <Checkbox>UMRAH EMA 1444H-Silver</Checkbox>
        </Menu.Item>{" "}
        {/* Use Menu.Item components as submenu items */}
        <Menu.Item key="subitem2">
          <Checkbox>UMRAH EMA 1444H</Checkbox>
        </Menu.Item>
        <Menu.Item key="subitem3">
          <Checkbox>UMRAH EMA 1444H-Deluxe</Checkbox>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="item2" title="Status">
       
        <Menu.Item key="subitem1">
          <Checkbox>All</Checkbox>
        </Menu.Item>{" "}
        {/* Use Menu.Item components as submenu items */}
        <Menu.Item key="subitem1">
          <Checkbox>Pending</Checkbox>
        </Menu.Item>{" "}
        {/* Use Menu.Item components as submenu items */}
        <Menu.Item key="subitem2">
          <Checkbox>New</Checkbox>
        </Menu.Item>
        <Menu.Item key="subitem2">
          <Checkbox>Rejected</Checkbox>
        </Menu.Item>
        <Menu.Item key="subitem2">
          <Checkbox>Complete</Checkbox>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
  
  
  if (props.type == "claim-request"){
    return (
      <Dropdown overlay={claim_req} placement="bottomLeft">
        {props.children}
      </Dropdown>
    );
  }
  if (props.type == "country") {
    return (
      <Dropdown overlay={country} placement="bottomLeft">
        {props.children}
      </Dropdown>
    );
  }
  
  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      {props.children}
    </Dropdown>
  );

  //   return (
  //     <Dropdown overlay={menu}>
  //       <a>Hover me</a>
  //     </Dropdown>
  //   );
};
export default Filter;
