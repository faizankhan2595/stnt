import { Button } from "antd";
import { VirtialCard } from "assets/svg/icon";
import React from "react";
import { Link } from "react-router-dom";
import VirtualcardImage2 from "../../../assets/img/Asset 3@4x hand 2.png";
import VirtualcardImage1 from "../../../assets/img/Asset 3@4x hand 1.png";
const Cards = [
  {
    countryName: "SINGAPORE",
    image: VirtualcardImage2,
    color: "#D33842",
  },
  {
    countryName: "MALAYSIA",
    image: VirtualcardImage1,
    color: "#00a88a",
  },
  {
    countryName: "BRUNEI",
    image: VirtualcardImage1,
    color: "#f8a816",
  },
];
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
          <Button className="bg-info"> <Link className="text-white" to={'virtual_card_management/view_card_history'}> View History</Link></Button>
        </div>
      </div>
      <div
        style={{ gap: "30px" }}
        className="d-flex flex-wrap my-3 justify-content-start"
      >
        {Cards.map((elem, i) => {
          return (
            <div
              key={i}
              style={{ width: "350px", overflow: "hidden" }}
              className="bg-white rounded"
            >
              <div
                style={{
                  backgroundImage: `linear-gradient(to right, ${elem.color} , ${elem.color}96)`,
                }}
                className="d-flex justify-content-between p-3"
              >
                <div>
                  <p className="m-0 text-white opacity-0-5">
                    Virtual Card Design
                  </p>
                  <h3 className="m-0 text-white font-weight-bold">
                    {elem.countryName}
                  </h3>
                </div>
                <div>
                  <Link className="text-white">Edit Design &gt;&gt;</Link>
                </div>
              </div>
              <div className="p-5">
                <img className="w-100" src={elem.image} alt="img" />
              </div>
            </div>
          );
        })}
        <Link to={"virtual_card_management/add_new"}>
          <div
            style={{ width: "350px", overflow: "hidden", height: "350px" }}
            className="custBorder d-flex flex-column justify-content-center align-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="54"
              viewBox="0 0 64 54"
              fill="none"
            >
              <path
                d="M18.6667 47.2064C15.0242 46.9704 11.5632 45.7694 8.77782 43.7748C5.99247 41.7802 4.02524 39.0941 3.15702 36.1C2.2888 33.1059 2.56399 29.9569 3.94328 27.1026C5.32258 24.2483 7.73547 21.8347 10.8374 20.2064C11.4974 15.8641 14.0102 11.8735 17.9055 8.98146C21.8007 6.08943 26.8115 4.49414 32.0001 4.49414C37.1887 4.49414 42.1994 6.08943 46.0947 8.98146C49.9899 11.8735 52.5027 15.8641 53.1627 20.2064C56.2647 21.8347 58.6776 24.2483 60.0569 27.1026C61.4362 29.9569 61.7113 33.1059 60.8431 36.1C59.9749 39.0941 58.0077 41.7802 55.2223 43.7748C52.437 45.7694 48.9759 46.9704 45.3334 47.2064V47.2491H18.6667V47.2064ZM34.6667 29.2491H42.6667L32.0001 17.9991L21.3334 29.2491H29.3334V38.2491H34.6667V29.2491Z"
                fill="#1E77CC"
              />
            </svg>
            <h5 className="text-center">
              Add New Country <br />
              Virtual Card
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VirtualCardManagement;
