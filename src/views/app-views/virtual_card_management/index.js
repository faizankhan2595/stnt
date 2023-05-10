import { Button } from "antd";
import { ClaimReqDet, VirtialCard } from "assets/svg/icon";
import React from "react";
import { Link } from "react-router-dom";

const VirtualCardManagement = () => {
  return (
    <div>
      <div className="p-3 bg-white">
        <p>
          Virtual Card Management /{" "}
          <span style={{ color: "black" }}> Virtual Cards</span>{" "}
        </p>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="claimDocManSvg">
              <VirtialCard />
            </div>
            <div className="ml-2">
              <h5 className="m-0 mt-2">Virtual Cards </h5>
            </div>
          </div>
          <Button className="bg-info text-white">View History</Button>
        </div>
      </div>
      <div>
        <div>
          <div className="d-flex">
            <div>
              <p className="m-0">Virtual Card Design</p>
              <h3>SINGAPORE</h3>
            </div>
            <div>
              <Link className="">Edit Design &gt;&gt;</Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default VirtualCardManagement;
