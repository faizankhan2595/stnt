import {
  ChangeAgStatus,
  ClosedReq,
  PendingReq,
  RejectedReq,
  TotatReq,
} from "assets/svg/icon";
import React, { useState, useEffect, useParams } from "react";
import { Input, Menu, Button, Radio, Modal, Table } from "antd";
import Icon from "@ant-design/icons";
import { CsvIcon, FilterIcon } from "assets/svg/icon";
import { Link } from "react-router-dom";
import Filter from "components/shared-components/Filter";
import Helper from "../../Helper";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import TextArea from "antd/lib/input/TextArea";
import { claimRequestStatus, getClaimRequests } from "services/apiService";
import moment from "moment";

const ClaimReq = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [value, setValue] = useState("wip");
  const [comment, setComment] = useState("");
  const [claimId, setClaimId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState();
  const handleTableChange = (pagination, filters, sorter) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };
  const showModal = (claimId) => {
    setIsModalOpen(true);
    setClaimId(claimId);
  };

  const onRadChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleOk = () => {
    claimRequestStatus(claimId, value, comment).then((response) => {
      console.log(response);
      if (response.data.status) {
        setIsModalOpen(false);
        window.location.reload();
      }
    });

    // setTimeout(() => {
    //   setIsModalOpen(false);
    // }, 10000);
  };

  const [claimRequests, setClaimRequests] = useState([]);
  const [consolidateClaimsData, setConsolidateClaimsData] = useState({});
  const getClaimsReq = async (page, pageSize) => {
    // const size = 100000;
    // const page = 1;

    getClaimRequests(pageSize, page).then((response) => {
      let pageNumber = response.data.claimData.currentPage; 
      let generateSr = [];
      for (let i = 1 + (pageNumber - 1) * 10; i <= pageNumber * 10; i++) {
        generateSr.push(i);
      }

      const claimRequests = response.data.claimData?.data?.map(
        (claimData, i) => {
          return {
            sr_no: generateSr[i],
            uidNo: claimData.userUidNo,
            claimId: claimData.claimUidNo,
            originalClaimId: claimData.claimId,
            userId: claimData.userId,
            insuredName: claimData.name,
            gender: claimData.gender,
            travelAgency: claimData.travelAgencyName,
            passport: claimData.passport,
            claimedDate: claimData.claimedDate,
            status: claimData.status,
          };
        }
      );

      setClaimRequests(claimRequests);
      setTotal(response.data.claimData.count);
      setConsolidateClaimsData(response.data.claimData?.consolidateClaimsData);
    });
  };
  useEffect(() => {
    getClaimsReq(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  const claimRequestsColumns = [
    {
      title: "Sr No",
      dataIndex: "sr_no",
    },
    {
      title: "UID NO",
      dataIndex: "uidNo",
    },
    {
      title: "Claim ID",
      dataIndex: "claimId",
    },
    {
      title: "Insured Name",
      dataIndex: "insuredName",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Travel Agency",
      dataIndex: "travelAgency",
    },
    {
      title: "Passport No",
      dataIndex: "passport",
    },
    {
      title: "Claimed Date",
      dataIndex: "claimedDate",
      width: 120,
      render: (date) => {
        return <>{moment(date).format("DD MMM YYYY, hh:mm:ss A")}</>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <p
            className={`${
              text !== "completed" ? "text-danger" : "text-success"
            } font-weight-semibold`}
          >
            {text}
          </p>
        );
      },
    },
    {
      title: "Action",
      // dataIndex: 'action',
      render: (record) => {
        return (
          <>
            <EllipsisDropdown
              menu={
                <Menu>
                  <Menu.Item>
                    <Link
                      to={`/app/claim_management/claim_request/view_detail/${record.originalClaimId}/${record.userId}`}
                    >
                      View Details
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span onClick={() => showModal(record?.originalClaimId)}>
                      {" "}
                      Update Status
                    </span>
                  </Menu.Item>
                </Menu>
              }
            />
          </>
        );
      },
    },
  ];

  return (
    <div>
      <h3>Claim Management / Claim Request</h3>
      <div className="mb-4 bg-white d-flex justify-content-between">
        <div className="w-25 p-3 d-flex align-items-center justify-content-center">
          <div
            style={{ background: "#fafafb", width: "75%" }}
            className="rounded d-flex align-items-start p-3 justify-content-between"
          >
            <div>
              <h5 className="m-0">Total Requests</h5>
              <h4 className="m-0">{consolidateClaimsData?.totalRequests}</h4>
            </div>
            <div>
              <TotatReq />
            </div>
          </div>
        </div>
        <div className="w-25 p-3 d-flex align-items-start justify-content-center">
          <div
            style={{ background: "#fafafb", width: "75%" }}
            className="rounded d-flex align-items-start p-3 justify-content-between"
          >
            <div>
              <h5 className="m-0">Pending</h5>
              <h4 className="m-0">{consolidateClaimsData?.totalPendings}</h4>
            </div>
            <div>
              <PendingReq />
            </div>
          </div>
        </div>
        <div className="w-25 p-3 d-flex align-items-start justify-content-center">
          <div
            style={{ background: "#fafafb", width: "75%" }}
            className="rounded d-flex align-items-start p-3 justify-content-between"
          >
            <div>
              <h5 className="m-0">Rejected</h5>
              <h4 className="m-0">{consolidateClaimsData?.totalRejected}</h4>
            </div>
            <div>
              <RejectedReq />
            </div>
          </div>
        </div>
        <div className="w-25 p-3 d-flex align-items-start justify-content-center">
          <div
            style={{ background: "#fafafb", width: "75%" }}
            className="rounded d-flex align-items-start p-3 justify-content-between"
          >
            <div>
              <h5 className="m-0">Closed</h5>
              <h4 className="m-0">0</h4>
              {/* {consolidateClaimsData?.closed} */}
            </div>
            <div>
              <ClosedReq />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <div className="membershipPlanTableSearchFilter d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
            <Filter type={"claim-request"}>
              <Button
                icon={<Icon component={FilterIcon} />}
                className="d-flex align-items-center ml-2"
              >
                Filters
              </Button>
            </Filter>
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          {/* <Button className="bg-info text-white">
          <Link to={"travel_agency/add_new"}> + Add New</Link>
        </Button> */}
        </div>
        <Table
          dataSource={claimRequests}
          columns={claimRequestsColumns}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: total,
            showSizeChanger: true,
            pageSizeOptions: ["10"],
          }}
          onChange={handleTableChange}
        />
      </div>
      <Modal
        width={600}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className="d-flex my-3 flex-column">
          <h3 className="mb-4 d-flex align-items-center">
            <ChangeAgStatus />
            <span className="ml-2"> Change Claim Status</span>
          </h3>
          <Radio.Group className="ml-5" onChange={onRadChange} value={value}>
            <Radio value={"wip"}>WIP</Radio>
            <Radio className="ml-3" value={"completed"}>
              Completed
            </Radio>
            <Radio className="ml-3" value={"rejected"}>
              Rejected
            </Radio>
            <Radio className="ml-3" value={"new"}>
              New
            </Radio>
          </Radio.Group>
          <h5 className="ml-5 w-75 mt-3">Add Comment</h5>
          <TextArea
            className="ml-5 w-75"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <div
          style={{ gap: "10px" }}
          className="mt-5 d-flex justify-content-end"
        >
          <Button
            className="px-4 font-weight-semibold"
            // onClick={() => setIsChangeStudModalOpen(false)}
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleOk}
            className="px-4 font-weight-semibold text-white bg-info"
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ClaimReq;
