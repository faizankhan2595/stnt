import React from "react";
import "./claimSubmission.css";
import "../fonts.css";
import { UploadOutlined, DeleteTwoTone } from "@ant-design/icons";
import { Steps } from "antd";
import {
  Col,
  Row,
  Table,
  Select,
  Button,
  message,
  Upload,
  Input,
  Checkbox,
  Modal,
} from "antd";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  getClaimCategories,
  getClaimCategoryAndDocs,
  getCountryDropdown,
  paymentSaveAPI,
  getCliamMetadata,
  getCompleteCliamData,
  BASE_URL,
  addAddress,
  getAddressDetails,
  updateAddress,
  getClaimByUser,
  deleteClaimCategory,
  deleteDoc,
  paymentUpdateAPI,
} from "services/apiService";
// import * as htmlToImage from 'html-to-image';
import axios from "axios";
import html2canvas from "html2canvas";
import { set } from "lodash";

const description = "This is a description.";
const { Step } = Steps;

const columns = [
  {
    title: "Sr. No",
    dataIndex: "sno",
    key: "sno",
  },
  {
    title: "Name",
    dataIndex: "draftName",
    key: "draftName",
  },
  {
    title: "Date of Draft",
    dataIndex: "dateOfDraft",
    key: "dateOfDraft",
  },
  {
    title: "Action",
    render: (record) => {
      return (
        <>
          <div className="secondary-btn" style={{ maxWidth: "fit-content" }}>
            Resume editing
          </div>
        </>
      );
    },
  },
];

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const ClaimSubmission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isedit, setIsedit] = useState(false);
  const [isContactDetailModalOpen, setIsContactDetailModalOpen] =
    useState(false);
  // const [isChecked, setIsChecked] = useState(false);

  // const onChange = (e) => {
  //     setIsChecked(e.target.checked);
  //   };

  //flip image logic starts here

  const [imageSrc, setImageSrc] = useState("/img/sgp-card.jpg");
  const [isAlternateImage, setIsAlternateImage] = useState(false);
  const [newFileList, setNewFileList] = useState([]);
  const [residentType, setResidentType] = useState();
  const [blockNo, setBlockNo] = useState();
  const [buildingName, setBuildingName] = useState();
  const [streetName, setStreetName] = useState();
  const [unitLevel, setUnitLevel] = useState();
  const [unitNo, setUnitNo] = useState();
  const [postalCode, setPostalCode] = useState();
  const [country2, setCountry2] = useState();
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [addressExists, setAddressExists] = useState(false);
  const [addressId, setAddressId] = useState();

  const [claimCategories, setClaimCategories] = useState([]);
  const [claimMetaData, setClaimMetaData] = useState({});
  const [reviewDataNew, setReviewDataNew] = useState({});
  const [claimByUserDetails, setClaimByUserDetails] = useState({});
  const [claimReqIndex, setClaimReqIndex] = useState(0);
  const [editCategory, setEditCategory] = useState({});
  const [disableOpt, setDisableOpt] = useState([{ index: 0, val: "" }]);
  const [claims, setClaims] = useState([
    {
      claimCategoryId: null,
      isDraft: true,
      claimDocs: [],
    },
  ]);

  const [draftData, setDraftData] = useState([]);
  const [claimHistory, setClaimHistory] = useState([]);

  const [paymentDetails, setPaymentDetails] = useState({});
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);

  const [paymentId, setPaymentId] = useState(null);
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [payeeName, setPayeeName] = useState("");
  const [payNowMobileNumber, setPayNowMobileNumber] = useState("");
  const [PayeeNRIC, setPayeeNRIC] = useState("");
  const [isDeclaration, setIsDeclaration] = useState(false);
  const [isConsent, setIsConsent] = useState(false);
  const [currentDraftID, setCurrentDraftID] = useState(null);

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

  const onChange = () => {};

  //donwload virtual card img
  const domEl = useRef(null);

  const exportAsImage = async (el, imageFileName) => {
    console.log(el);
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/png", 1.0);
    console.log(image);
    // download the image
    downloadImage(image, imageFileName);
  };

  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };

  const [countries, setCountries] = useState([]);
  const [userName, setUserName] = useState("");
  const [updateDocRequestId, setUpdateDocRequestId] = useState("");
  const [ip, setIp] = useState("");
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

  const customOrder = ["USA", "Canada", "Mexico"];

  const sortedOptions = [...countries].sort((a, b) => {
    const aIndex = customOrder.indexOf(a.value);
    const bIndex = customOrder.indexOf(b.value);
    if (aIndex === -1 || bIndex === -1) {
      return 0; // If either country is not in the custom order, maintain the original order
    }
    return aIndex - bIndex; // Sort based on the custom order
  });

  const [country, setCountry] = useState();

  const onCountrySelect = (value) => {
    if (!value) {
      console.log("Please select a country");
      message.error("Please select a country");
    } else {
      console.log(`selected ${value}`);
      setCountry(value);
    }
    console.log(`selected ${value}`);
    setCountry(value);
  };

  const getClaimsByUserFn = async (uid = null, id = null) => {
    const data = await getClaimByUser();
    const claimByUserDetailsNew = data.data.data;

    if (claimByUserDetailsNew.length > 0) {
      let latestClaim = claimByUserDetailsNew[claimByUserDetailsNew.length - 1];

      if (uid) {
        console.log("uid", uid);
        latestClaim = claimByUserDetailsNew.find(
          (claim) => claim.uidNo === uid
        );
        console.log("latestClaim", latestClaim);
      }

      if (id) {
        console.log("id", id);
        latestClaim = claimByUserDetailsNew.find((claim) => claim.id === id);
        console.log("latestClaim", latestClaim);
        setCurrentDraftID(id);
      }

      setCountry(latestClaim.lossCountry);

      let claimsNew = [];

      console.log(latestClaim);
      for (const claimCategory of latestClaim.claimCategory) {
        const claimDocsData = await getClaimCategoryAndDocs({
          id: claimCategory.claimCategory.id,
        });
        const claimCategoryData = claimDocsData.data?.claimCategoryData;
        const files = claimCategory.files;
        if (files !== null) {
          let claimDocuments = claimCategoryData?.claimDocuments.map(
            (claimDocument, index) => {
              const file = files.find(
                (file) => file?.fieldname === claimDocument.title
              );

              if (!file) {
                return {
                  ...claimDocument,
                  url: null,
                  name: null,
                  claimRequestId: claimCategory.claimRequestId,
                  documentId: null,
                };
              }

              return {
                ...claimDocument,
                url: file?.path,
                name: file?.originalname,
                claimRequestId: claimCategory.id,
                documentId: file?.id,
              };
            }
          );
          claimsNew.push({
            claimCategoryId: claimCategory.claimCategory.id,
            isDraft: true,
            claimDocs: claimDocuments,
            files: claimCategory.files,
          });
        }
      }

      if (claimsNew.length === 0) {
        claimsNew.push({
          claimCategoryId: null,
          isDraft: true,
          claimDocs: [],
        });
      }

      setClaims(claimsNew);
      setClaimByUserDetails(latestClaim);

      const paymentDetails = latestClaim.paymentDetails;

      if (paymentDetails) {
        setSelectedPaymentOption(paymentDetails.paymentOptions);
        setBankAccountNumber(paymentDetails.bankAccountNumber);
        setBankName(paymentDetails.bankName);
        setPayeeName(paymentDetails.payeeName);
        setPayNowMobileNumber(paymentDetails.payNowMobileNumber);
        setPayeeNRIC(paymentDetails.payeeNRIC);
        setPaymentId(paymentDetails.id);
      }
    }
  };

  // useEffect(() => {
  //     getClaimsByUserFn();
  // }, []);
  const getClaimCategy = async () => {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: BASE_URL + "/api/website/claim-categories",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: data,
    };

    return await axios.request(config);
  };
  useEffect(() => {
    getClaimCategy()
      .then((data) => {
        console.log(data);
        const claimCategoriesNew = data.data.claimCategories.map(
          (claimCategory) => {
            return {
              value: claimCategory.id,
              label: claimCategory.title,
            };
          }
        );
        setClaimCategories(claimCategoriesNew);
      })
      .catch((err) => {
        console.log(err);
      });

    getCliamMetadata().then((data) => {
      const claimMetaDataNew = data.data.data;

      // let draftDataNew = [];

      const draftClaims = claimMetaDataNew.draftClaims;
      if (draftClaims.length) {
        const lastDraft = draftClaims[draftClaims.length - 1];
        const dateOfDraft = lastDraft.dateOfDraft;
        const draftName = lastDraft.draftName;
      }
      const draftDataNew = draftClaims.map((draftN, index) => ({
        key: draftN.id,
        sno: index + 1,
        draftName: "Draft " + (index + 1),
        dateOfDraft: draftN.dateOfDraft,
      }));

      let draftI = 1;

      // for (const draftN of draftClaims) {
      //   draftDataNew.push({
      //     key: draftN.id,
      //     sno: draftN.id,
      //     draftName: "Draft " + draftI++,
      //     dateOfDraft: draftN.dateOfDraft,
      //   });
      // }

      const claimHistory = claimMetaDataNew.claimHistory;

      let claimHistoryNew = claimHistory.map((claimH, i) => ({
        key: claimH.claimReqId,
        sno: i + 1,
        claim_id: claimH.claimUidNo,
        date: claimH.submittedDate,
        status: claimH.status === "new" ? "Submitted" : claimH.status,
        uidNo: claimH.claimUidNo,
      }));
      // for (const claimH of claimHistory) {
      //   claimHistoryNew.push({
      //     key: claimH.claimReqId,
      //     sno: claimH.claimReqId,
      //     claim_id: claimH.claimUidNo,
      //     date: claimH.submittedDate,
      //     status: claimH.status==="new"?"Submitted":claimH.status,
      //     uidNo: claimH.claimUidNo,
      //   });
      // }

      setDraftData(draftDataNew);
      setClaimHistory(claimHistoryNew);
      setClaimMetaData(claimMetaDataNew);
    });
  }, []);

  const claimHistoryColumns = [
    {
      title: "Sr. No",
      dataIndex: "sno",
      key: "sno",
    },
    {
      title: "Claim ID",
      dataIndex: "claim_id",
      key: "claim_id",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      render: (record) => {
        return (
          <>
            {record.status === "Submitted" && (
              <div
                className="secondary-btn"
                style={{ maxWidth: "fit-content" }}
                onClick={async () => {
                  setEditMode(true);
                  setIsedit(true);
                  getClaimsByUserFn(null, record.key);
                  getReview(record.key);
                  fetch("https://geolocation-db.com/json/")
                    .then((response) => {
                      if (response.ok) {
                        return response.json(); // Parse response data as JSON
                      } else {
                        throw new Error("Error: " + response.status);
                      }
                    })
                    .then((data) => {
                      // Process the data returned by the API
                      console.log(data);
                      setIp(data.IPv4);
                    })
                    .catch((error) => {
                      // Handle any errors that occurred during the API call
                      console.error("Error:", error);
                    });
                  // console.log("record", record);
                  // await getClaimsByUserFn(record.uidNo);
                  // handleStepChange(2);
                }}
              >
                Edit
              </div>
            )}
          </>
        );
      },
    },
    // {
    //     title: 'Action',
    //     render: (record) => {
    //         return (
    //             <>
    //                 <div className="secondary-btn" style={{ maxWidth: "fit-content" }}>View Summary Claim</div>

    //             </>
    //         );
    //     },
    // },
  ];

  //claim category dropdown logic ends here

  //address details logic starts here

  const onChangeAddressType = (value) => {
    setResidentType(value);
  };

  const onSearchAddressType = (value) => {
    console.log("search:", value);
  };

  const addAddressDetails = async () => {
    if (blockNo === "") {
      alert("Please enter a Block No");
      return;
    }

    if (streetName === "") {
      alert("Please enter a street name");
      return;
    }

    if (unitLevel === "") {
      alert("Please enter Unit Level");
      return;
    }

    if (unitNo === "") {
      alert("Please enter a Unit No");
      return;
    }

    if (buildingName === "") {
      alert("Please enter a building name");
      return;
    }

    if (postalCode === "") {
      alert("Please enter a postal code");
      return;
    }

    if (country2 === "") {
      alert("Please enter a country");
      return;
    }

    // if (address === '') {
    //     alert('Please enter an address');
    //     return;
    // }

    if (phoneNumber === "") {
      alert("Please enter a phone number");
      return;
    }

    if (emailAddress === "") {
      alert("Please enter an email address");
      return;
    }

    const data = {
      addressId: addressId,
      residentType: residentType,
      blockNo: blockNo,
      streetName: streetName,
      unitLevel: unitLevel,
      unitNo: unitNo,
      postalCode: postalCode,
      buildingName: null,
      country: country2,
      address: address,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
    };

    if (!addressExists) {
      delete data.addressId;
      await addAddress(data)
        .then((res) => {
          message.success("Address added successfully");
        })
        .catch((err) => {
          message.error("Error while adding address");
        });
    } else {
      await updateAddress(data)
        .then((res) => {
          message.success("Address updated successfully");
        })
        .catch((err) => {
          message.error("Error while updating address");
        });
    }

    setIsContactDetailModalOpen(false);
  };

  useEffect(() => {
    getAddressDetails()
      .then((resp) => {
        const data = resp.data;
        console.log("data", data);

        if (data.data) {
          setResidentType(data.data.residentType);
          setBlockNo(data.data.blockNo);
          setBuildingName(data.data.buildingName);
          setStreetName(data.data.streetName);
          setUnitLevel(data.data.unitLevel);
          setUnitNo(data.data.unitNo);
          setPostalCode(data.data.postalCode);
          setCountry2(data.data.country);
          setAddress(data.data.address);
          setPhoneNumber(data.data.phoneNumber);
          setEmailAddress(data.data.emailAddress);
          setAddressExists(true);
          setAddressId(data.data.id);
          if (!data.data.residentType) {
            setIsContactDetailModalOpen(true);
            // localStorage.removeItem("token");
            // window.location.pathname = "/";
          }
        } else {
          setIsContactDetailModalOpen(true);
          //   localStorage.removeItem("token");
          //   window.location.pathname = "/";
        }
      })
      .catch((err) => {
        setIsContactDetailModalOpen(true);
        // localStorage.removeItem("token");
        // window.location.pathname = "/";
      });

    const getData = async () => {
      // const res = await axios.get("https://api.ipify.org/?format=json");
      // setIp(res.data.ip);
      fetch("https://geolocation-db.com/json/")
        .then((response) => {
          if (response.ok) {
            return response.json(); // Parse response data as JSON
          } else {
            throw new Error("Error: " + response.status);
          }
        })
        .then((data) => {
          // Process the data returned by the API
          console.log(data);
          setIp(data.IPv4);
        })
        .catch((error) => {
          // Handle any errors that occurred during the API call
          console.error("Error:", error);
        });
    };
    getData();
  }, []);
  useEffect(() => {
    if (editMode) {
      console.log("tst");
      reviewDataFn();
    }
  }, []);
  // }, [reviewDataNew])

  //address details logic ends here

  const onSearch = (val) => {};

  const updateAllClaims = async (updateDoc) => {
    console.log(updateDoc);
    const FormData = require("form-data");
    let data = new FormData();
    data.append("claimRequestId", updateDocRequestId);
    data.append("lossCountry", reviewDataNew.lossCountry);
    for (var i = 0; i < newFileList.length; i++) {
      // Append each file to the FormData object
      if (newFileList[i].title !== undefined) {
        console.log(i, newFileList[i].file);
        data.append(newFileList[i].title, newFileList[i].file);
      }
    }
    const res1 = await axios.put(
      `https://api.stntinternational.com/api/website/claim-request`,
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log("update", res1);
    // setUpdateDocRequestId()
    reviewDataFn();
  };

  const addAllClaims = async (changePage = false, update = false) => {
    const ids = [];

    for (const claim of claims) {
      const FormData = require("form-data");
      let data = new FormData();
      data.append("claimCategoryId", claim.claimCategoryId);
      data.append("lossCountry", country);

      for (const claimDoc of claim.claimDocs) {
        console.log(claimDoc);
        for (var i = 0; i < claimDoc.file.length; i++) {
          // Append each file to the FormData object
          console.log(i, claimDoc.file[i]);
          data.append(claimDoc.title, claimDoc.file[i]);
        }
        // data.append(claimDoc.title, claimDoc.file);// [ file1, file2]
      }
      // return
      const oldClaimCategories = claimByUserDetails?.claimCategory || [];

      const claimCategory = oldClaimCategories.find(
        (claimCategory) =>
          claimCategory.claimCategory.id === claim.claimCategoryId
      );

      let url = BASE_URL + "/api/website/claim-request";
      let method = "post";

      if (claimCategory) {
        method = "put";
        data.append("claimRequestId", claimCategory.claimRequestId);
      }

      data.append("mode", changePage ? "next" : "saveAsDraft");

      let config = {
        method: method,
        maxBodyLength: Infinity,
        url: url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: data,
      };

      try {
        const response = await axios.request(config);
        if (claimCategory) {
          ids.push(claimCategory.claimRequestId);
        } else {
          ids.push(response.data.data.id);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert(error.response.data.message);
          console.log(error.response.data.message);
        } else {
          alert("Please Upload .pdf, .png, .jpeg, and .jpg only !.");
        }
        throw error;
      }
    }

    const body = {
      claimReqId: ids,
      lossCountry: country,
      mode: changePage ? "next" : "saveAsDraft",
      mainClaimReqId: currentDraftID,
    };

    await axios.put(BASE_URL + "/api/website/claim-request/save-draft/", body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log("Change Page", changePage);
    if (!changePage) {
      window.location.reload();
      return;
    }
    getClaimsByUserFn();
    handleStepChange(3);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOkContactModal = () => {
    setIsContactDetailModalOpen(false);
  };

  const handleCancelContactModal = () => {
    setIsContactDetailModalOpen(false);
  };

  const [activeStep, setActiveStep] = useState(0);

  const reviewDataFn = () => {
    getCompleteCliamData(claimByUserDetails.id).then((data) => {
      const reviewDataNew2 = data.data;
      console.log("reviewDataNew2", reviewDataNew2);
      if (reviewDataNew2.data.paymentDetails !== null) {
        setPaymentId(reviewDataNew2.data.paymentDetails.id);
      }
      setReviewDataNew(reviewDataNew2.data);
    });
  };

  const handleStepChange = async (step) => {
    if (step == 2) {
      if (!country) {
        message.error("Please select a country");
        return;
      }
    }

    if (step == 4) {
      if (!selectedPaymentOption) {
        console.log("Please select a payment option");
        message.error("Please select a payment option");
        // alert("Please select a payment option");
        return;
      }

      const paymentData = {
        payeeName: null,
        payeeNric: null,
        bankName: null,
        bankAccountNumber: null,
        paymentOption: null,
        payNow: null,
      };
      if (selectedPaymentOption === "dbs_posb") {
        if (!payeeName) {
          message.error("Please enter Payee Name");
          return;
        }
        if (!PayeeNRIC) {
          message.error("Please enter Payee NRIC");
          return;
        }
        if (!bankName) {
          message.error("Please enter Bank Name");
          return;
        }
        if (!bankAccountNumber) {
          message.error("Please enter Bank Account Number");
          return;
        }
        // if (!payeeName) paymentData.payeeName = payeeName;
        paymentData.payeeName = payeeName;
        paymentData.payeeNric = PayeeNRIC;
        paymentData.bankName = bankName;
        paymentData.bankAccountNumber = bankAccountNumber;
        paymentData.paymentOption = "DBS/POSB Account";
      } else if (selectedPaymentOption === "cheque") {
        if (!payeeName) {
          // Show an error message or handle the validation error
          message.error("Please enter Payee Name");
          return;
        }
        paymentData.payeeName = payeeName;
        paymentData.paymentOption = "Cheque";
      } else if (selectedPaymentOption === "paynow_linked_account") {
        if (!payNowMobileNumber) {
          message.error("Please enter PayNow Mobile Number");
          return;
        }
        paymentData.payNow = payNowMobileNumber;
        paymentData.paymentOption = "Paynow Linked Account";
      }

      paymentData.claimRequestId = claimByUserDetails.id;

      console.log("paymentDetails", paymentData);

      try {
        if (reviewDataNew.paymentDetails === null || !paymentId) {
          await paymentSaveAPI({ data: paymentData });
        } else {
          if (paymentId) {
            await paymentUpdateAPI({ data: paymentData, id: paymentId });
          }
        }
        // if (paymentId) {
        //   await paymentUpdateAPI({ data: paymentData, id: paymentId });
        // } else {
        //   await paymentSaveAPI({ data: paymentData });
        // }
      } catch (e) {}
      reviewDataFn();
    }

    setActiveStep(step);
  };

  const deleteClaimDraft = async (id) => {
    const res1 = await axios.delete(
      `https://api.stntinternational.com/api/website/claim-request/delete/draft/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (res1.data.status) {
      message.success(`Draft ${id} Deleted Successfully !`);
      setTimeout(() => {
        window.location.reload();
      }, 400);
    }
  };

  const handleStepBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const getReview = async (id) => {
    let config = {
      method: "get",
      url: BASE_URL + `/api/website/claim-request/review/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const res1 = await axios.request(config);
    setReviewDataNew(res1.data.data);
    if (res1.data.data.declarationUserName) {
      console.log(res1.data.data.declarationUserName);
      setUserName(res1.data.data.declarationUserName);
      setIsDeclaration(res1.data.data.isDeclaration);
      setIsConsent(res1.data.data.isConsent);
    }
    console.log(res1.data);
    if (res1.status) {
      setActiveStep(4);
    }
  };
  // useEffect(() => {
  //     console.log("fetched");
  //    }, [reviewDataNew])

  const columns = [
    {
      title: "Sr. No",
      dataIndex: "sno",
      key: "sno",
    },
    {
      title: "Name",
      dataIndex: "draftName",
      key: "draftName",
    },
    {
      title: "Date of Draft",
      dataIndex: "dateOfDraft",
      key: "dateOfDraft",
    },
    {
      title: "Action",
      render: (record) => {
        // console.log(record);
        return (
          <>
            <div className="d-flex">
              <div
                className="secondary-btn"
                style={{ maxWidth: "fit-content" }}
                onClick={() => {
                  getClaimsByUserFn(null, record.key);
                  getReview(record.key);
                  setEditMode(true);
                  // handleStepChange(1)
                }}
              >
                Resume editing
              </div>
              <Button
                className="secondary-btn ml-2"
                style={{ maxWidth: "fit-content" }}
                onClick={() => {
                  deleteClaimDraft(record.key);
                }}
              >
                <DeleteTwoTone twoToneColor="#eb2f96" />
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  //payment logic starts here

  const handlePaymentOptionChange = (value) => {
    setSelectedPaymentOption(value);
  };

  const submitMain = async () => {
    console.log("selectedPaymentOption", selectedPaymentOption);
    if (selectedPaymentOption === null) {
      message.error("Please Fill Payment Details !");
      return;
    }

    if (!isDeclaration) {
      alert("Please check the Declaration checkbox to proceed");
      return;
    }

    if (!isConsent) {
      alert("Please check the Consent checkbox to proceed");
      return;
    }

    if (!userName) {
      alert("Please enter User Name to proceed");
      return;
    }
    if (isedit) {
      setIsedit(false);
      setActiveStep(0);
      return;
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: BASE_URL + "/api/website/claim-request/submit",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        claimRequestId: claimByUserDetails.id,
        isDeclaration: true,
        isConsent: true,
        declarationUserName: userName,
        declarationIpAddress: ip ? ip : "IP",
      },
    };

    try {
      await axios.request(config);
      setIsSubmitClaimModalOpen(true);
      // window.location.reload(); // Reload the page
    } catch (error) {
      // Handle the error if necessary
    }

    // return await axios.request(config)

    // setIsSubmitClaimModalOpen(true);
  };

  const paymentSave = async () => {
    if (selectedPaymentOption === "dbs_posb") {
      setPaymentDetails({
        payeeName: payeeName,
        PayeeNRIC: PayeeNRIC,
        bankName: bankName,
        bankAccountNumber: bankAccountNumber,
      });
    } else if (selectedPaymentOption === "cheque") {
      setPaymentDetails({
        payeeName: payeeName,
      });
    } else if (selectedPaymentOption === "paynow_linked_account") {
      setPaymentDetails({
        payNowMobileNumber: payNowMobileNumber,
      });
    }
  };

  //payment logic ends here

  //submot claim logic starts here

  const [isSubmitClaimModalOpen, setIsSubmitClaimModalOpen] = useState(false);

  const openSubmitClaimModal = () => {
    setIsSubmitClaimModalOpen(true);
  };

  return (
    <div>
      <div className="banner-container">
        <img
          src="/img/banner-img.png"
          alt="banner"
          style={{ width: "100%", height: "415px", objectFit: "cover" }}
        />
        <div className="stnt-logo-container">
          <img
            src="/img/stnt-logo-white.svg"
            alt="stnt"
            style={{ width: "150px", height: "auto" }}
          />
        </div>

        <div className="stnt-logo-container-mobile">
          <img
            src="/img/stnt-logo-white.svg"
            alt="stnt"
            style={{ width: "150px", height: "auto" }}
          />
        </div>
      </div>

      <div className="logout-btn-container">
        <Link to={`/`}>
          <div className="logout-btn">Log Out</div>
        </Link>
        <div
          className="update-details-container"
          style={{ cursor: "pointer" }}
          onClick={() => setIsContactDetailModalOpen(true)}
        >
          <div className="update-icon-container">
            <img
              src="/img/update-icon.svg"
              alt="update-icon"
              style={{ width: "20px", height: "auto" }}
            />
          </div>
          <div className="update-text-container ml-2">
            Update Contact Details
          </div>
        </div>
      </div>

      <Modal
        title="Update Contact Details"
        visible={isContactDetailModalOpen}
        onOk={handleOkContactModal}
        onCancel={handleCancelContactModal}
        width={800}
        maskClosable={false}
        keyboard={false}
      >
        <div className="modal-label">Fill in the details</div>
        <div className="label-field-container" style={{ padding: "10px" }}>
          <div className="label">Residential Type</div>
          {/* <div className="input-field">
                                <input type="text" className="input-field-main" placeholder="Enter Permanent Address" />
                            </div> */}
          <Select
            showSearch
            placeholder="Select residential type"
            optionFilterProp="children"
            onChange={onChangeAddressType}
            value={residentType}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "hdb_condo",
                label: "HDB/Condo/Apartment",
              },
              {
                value: "landed_private",
                label: "Landed/private",
              },
            ]}
          />
        </div>

        <Row>
          <Col lg={{ span: 12 }} xs={{ span: 24 }} style={{ padding: "10px" }}>
            <div className="label-field-container">
              <div className="label" required name="blockNo">
                Block No
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="input-field-main"
                  placeholder="Block No"
                  value={blockNo}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const filteredValue = inputValue.replace(/[^0-9]/g, "");
                    setBlockNo(filteredValue);
                  }}
                />
              </div>
            </div>
          </Col>

          <Col lg={{ span: 12 }} xs={{ span: 24 }} style={{ padding: "10px" }}>
            <div className="label-field-container">
              <div className="label" name="streetName">
                Street Name
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="input-field-main"
                  placeholder="Street name"
                  value={streetName}
                  onChange={(e) => setStreetName(e.target.value)}
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 12 }} xs={{ span: 24 }} style={{ padding: "10px" }}>
            <Row>
              <Col
                lg={{ span: 12 }}
                xs={{ span: 12 }}
                style={{ paddingRight: "10px" }}
              >
                <div className="label-field-container">
                  <div className="label" required name="unitLevel">
                    Unit Level
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      className="input-field-main"
                      placeholder="Unit Level"
                      value={unitLevel}
                      onChange={(e) => setUnitLevel(e.target.value)}
                    />
                  </div>
                </div>
              </Col>
              <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                <div className="label-field-container">
                  <div className="label" required name="unitNo">
                    Unit No
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      className="input-field-main"
                      placeholder="Unit No"
                      value={unitNo}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const filteredValue = inputValue.replace(/[^0-9]/g, "");
                        setUnitNo(filteredValue);
                      }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }} style={{ padding: "10px" }}>
            <div className="label-field-container">
              <div className="label" name="buildingName">
                Building Name
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="input-field-main"
                  placeholder="Building Name"
                  value={buildingName}
                  onChange={(e) => setBuildingName(e.target.value)}
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 12 }} xs={{ span: 24 }} style={{ padding: "10px" }}>
            <div className="label-field-container">
              <div className="label" required name="postalCode">
                Postal Code
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="input-field-main"
                  placeholder="Postal code"
                  value={postalCode}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const filteredValue = inputValue.replace(/[^0-9]/g, "");
                    setPostalCode(filteredValue);
                  }}
                />
              </div>
            </div>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }} style={{ padding: "10px" }}>
            <div className="label-field-container">
              <div className="label" name="country2">
                Country
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="input-field-main"
                  placeholder="Country"
                  value={country2}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const filteredValue = inputValue.replace(/[0-9]/g, "");
                    setCountry2(filteredValue);
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 12 }} xs={{ span: 24 }} style={{ padding: "10px" }}>
            <div className="label-field-container">
              <div className="label" required name="emailAddress">
                Email Address
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="input-field-main"
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
            </div>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }} style={{ padding: "10px" }}>
            <div className="label-field-container">
              <div className="label" name="phoneNumber">
                Phone Number
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="input-field-main"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const filteredValue = inputValue.replace(/[^0-9]/g, "");
                    setPhoneNumber(filteredValue);
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>

        <div className="notice-text">
          Important Notice: In accordance to the provisions of the Personal Data
          Protection Act 2012 (PDPA),the UOI's privacy notice shall form part of
          the terms and conditions of the policy. A copy of UOI's Privacy Notice
          can be found at
        </div>
        <div className="link-container">
          <a href="https://www.uoi.com.sg/uoi/index.html">www.uoi.com.sg</a>
        </div>

        <div className="modal-btns-container">
          {/* <div className="secondary-btn mr-2" onClick={handleCancelContactModal}>Cancel</div> */}
          <div className="web-btn" onClick={addAddressDetails}>
            Save
          </div>
          <Button className="ml-2" onClick={handleCancelContactModal}>
            Cancel
          </Button>
        </div>
      </Modal>

      <div className="claim-title-container">
        {activeStep === 0 ? (
          <>
            <div className="claim-title-text">Claim Submission</div>
            <div className="claim-title-sub-text">
              With a convenient insurance claim process, you can now register
              your claim, <br></br>upload the necessary documents and know the
              status instantly.
            </div>
          </>
        ) : (
          <>
            <div className="claim-title-text">Travel Details</div>
          </>
        )}
        <div className="logout-btn-container-mob">
          <div
            className="update-address-container-mob"
            onClick={() => setIsContactDetailModalOpen(true)}
          >
            <span>Update Contact Details</span>
          </div>
          <Link to={`/`}>
            <div className="logout-btn-mob">Log Out</div>
          </Link>
        </div>
      </div>

      <div className="claim-title-container-mob">
        <div className="stnt-logo-container">
          <img
            src="/img/stntlogo.svg"
            alt="stnt"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {activeStep === 0 && (
          <>
            <div className="claim-title-text">Claim Submission</div>
            <div className="claim-title-sub-text">
              With a convenient insurance claim process, you can now register
              your claim, upload the necessary documents and know the status
              instantly.
            </div>
          </>
        )}
        {activeStep === 1 && (
          <>
            <div className="claim-title-text">Travel Details</div>
          </>
        )}
        {activeStep === 2 && (
          <>
            <div className="claim-title-text">Claim Details</div>
          </>
        )}
        {activeStep === 3 && (
          <>
            <div className="claim-title-text">Payment Details</div>
          </>
        )}
        {activeStep === 4 && (
          <>
            <div className="claim-title-text">Review</div>
          </>
        )}

        <div className="logout-btn-container-mob">
          <div
            className="update-address-container-mob"
            onClick={() => setIsContactDetailModalOpen(true)}
          >
            <span>Update Contact Details</span>
          </div>
          <Link to={`/`}>
            <div className="logout-btn-mob">Log Out</div>
          </Link>
        </div>
      </div>

      <div className="steps-container" style={{ pointerEvents: "none" }}>
        <div className="step-container">
          <Steps current={activeStep} labelPlacement="vertical">
            <Step title="Get started" onClick={() => handleStepChange(0)} />
            <Step
              title="Travel Details"
              onClick={() => handleStepChange(1)}
              disabled
            />
            <Step
              title="Claim Details"
              onClick={() => handleStepChange(2)}
              disabled
            />
            <Step
              title="Payment Details"
              onClick={() => handleStepChange(3)}
              disabled
            />
            <Step title="Review" onClick={() => handleStepChange(4)} disabled />
          </Steps>
        </div>
      </div>

      <div className="steps-container-mob" style={{ pointerEvents: "none" }}>
        <div className="step-container">
          {/* <div className="step-heading">Get<br></br> Started</div> */}

          <Steps
            direction="horizontal"
            current={activeStep}
            labelPlacement="horizontal"
          >
            <Step title="Get started" onClick={() => handleStepChange(0)} />
            <Step title="Travel Details" onClick={() => handleStepChange(1)} />
            <Step title="Claim Details" onClick={() => handleStepChange(2)} />
            <Step title="Payment Details" onClick={() => handleStepChange(3)} />
            <Step title="Review" onClick={() => handleStepChange(4)} />
          </Steps>
        </div>
      </div>

      {/* Get Started tab */}

      {activeStep === 0 && (
        <div className="virtual-card-main-container py-3 px-5">
          <div className="virtual-card-container-traveler">
            <div className="virtual-card">
              <div
                className="virtual-card-heading"
                style={{ marginBottom: "15px" }}
              >
                <div
                  className="heading-cion-container"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="virtual-card-icon-container">
                    <img
                      src="/img/virtual-card-icon.png"
                      alt="virtual-card-icon"
                      style={{
                        width: "32px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div className="virtual-card-heading-text">
                    Traveler's Virtual Card
                  </div>
                </div>
                <div
                  className="share-download-icon"
                  style={{ display: "flex" }}
                >
                  {/* <div className="share-icon" style={{ marginRight: '10px' }}>
                                        <img src="/img/share.png" alt="share-icon" style={{ width: '28px', height: 'auto', cursor: 'pointer' }} />
                                    </div> */}
                  <div
                    className="download-icon"
                    onClick={() => exportAsImage(domEl.current, "virtual-card")}
                  >
                    <img
                      src="/img/download.png"
                      alt="download-icon"
                      style={{
                        width: "28px",
                        height: "auto",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
              <Row>
                <Col
                  lg={{ span: 12 }}
                  xs={{ span: 24 }}
                  className="virtual-card-desc"
                >
                  A virtual claim payment card is unique digit computer
                  generated number that is created solely for a use between a
                  payer and payee.
                  <br /> We will provide a Claim Assistance Card for your to
                  ensure that you have handy policy details as well as direct
                  claims assistance number always with you.
                </Col>
                <Col
                  lg={{ span: 12 }}
                  xs={{ span: 24 }}
                  className="virtual-card-img"
                >
                  <div
                    className="virtual-card-img-container"
                    id="domEl"
                    ref={domEl}
                  >
                    <div className="w-100 d-flex justify-content-center bg-white">
                      {!isAlternateImage ? "Front" : "Rear"}
                    </div>

                    <img
                      src={imageSrc}
                      alt="virtual-card-img"
                      style={{ width: "100%", height: "auto" }}
                    />

                    {!isAlternateImage ? (
                      <div>
                        <div className="virtual-card-dynamic-details">
                          <div>
                            <b className="mr-1">
                              UID: {claimMetaData?.policyDetails?.uidNo}
                            </b>
                          </div>

                          <div>Name: {claimMetaData?.policyDetails?.name}</div>

                          <div>
                            DOB: XX-XX-
                            {claimMetaData?.policyDetails?.dob?.substring(6)}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* <div className="virtual-card-dynamic-details">
                                            <div><b className="mr-1">UID: {claimMetaData?.policyDetails?.uidNo}</b>
                                            
                                            </div>
                                            <div>DOB: {claimMetaData?.policyDetails?.dob}</div>
                                           
                                        </div> */}
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="secondary-btn mt-2"
                      onClick={handleImageToggle}
                    >
                      Flip Card
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="virtual-card-container">
            <div className="virtual-card">
              <div
                className="virtual-card-heading"
                style={{ marginBottom: "15px" }}
              >
                <div
                  className="heading-icon-container"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="virtual-card-icon-container">
                    <img
                      src="/img/policy-details-icon.svg"
                      alt="policy-details-icon"
                      style={{
                        width: "32px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                    />
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
                <Col
                  span={6}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Policy Effective Date:
                    </div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.policyEffectiveData}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">Policy Type::</div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.policyType}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">UID No:</div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.uidNo}
                    </div>
                  </div>
                  {/* <div className="policy-details-container">
                    <div className="policy-details-label">
                      Geographical Limit:
                    </div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.geographicalUnit}
                    </div>
                  </div> */}
                </Col>
                <Col
                  span={6}
                  className="virtual-card-desc"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Policy Expiration Date::
                    </div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.policyExpirationData}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">Date of Birth:</div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.dob}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Duration of Package:
                    </div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.durationOfPackage}
                    </div>
                  </div>
                  {/* <div className="policy-details-container">
                    <div className="policy-details-label">Cost:</div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.cost}
                    </div>
                  </div> */}
                </Col>
                <Col span={12} className="virtual-card-img">
                  <div className="virtual-card-img-container">
                    <img
                      src="/img/policy-img.png"
                      alt="virtual-card-img"
                      style={{ width: "350px", height: "auto" }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="virtual-card-container-mobile">
            <div className="virtual-card">
              <div
                className="virtual-card-heading"
                style={{ marginBottom: "15px" }}
              >
                <div
                  className="heading-icon-container"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="virtual-card-icon-container">
                    <img
                      src="/img/policy-details-icon.svg"
                      alt="policy-details-icon"
                      style={{
                        width: "32px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div className="virtual-card-heading-text">
                    Policy Details
                  </div>
                </div>
              </div>
              <Row>
                <Col
                  lg={{ span: 12 }}
                  xs={{ span: 24 }}
                  className="virtual-card-img"
                >
                  <div className="virtual-card-img-container">
                    <img
                      src="/img/policy-img.png"
                      alt="virtual-card-img"
                      style={{ width: "150px", height: "auto" }}
                    />
                  </div>
                </Col>
                <Col
                  lg={{ span: 6 }}
                  xs={{ span: 24 }}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Policy Effective Date:
                    </div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.policyEffectiveData}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">Policy Type::</div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.policyType}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">UID No:</div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.uidNo}
                    </div>
                  </div>
                </Col>
                <Col
                  lg={{ span: 6 }}
                  xs={{ span: 24 }}
                  className="virtual-card-desc"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Policy Expiration Date::
                    </div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.policyExpirationData}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">Date of Birth:</div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.dob}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Duration of Package:
                    </div>
                    <div className="policy-detail">
                      {claimMetaData?.policyDetails?.durationOfPackage}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="drafts-container">
            <div className="draft-heading-container">
              <div className="drafts-icon">
                <img
                  src="/img/drafts.png"
                  alt="draft-icon"
                  style={{ width: "32px", height: "auto", marginRight: "10px" }}
                />
              </div>
              <div className="draft-heading">
                <div className="virtual-card-heading-text">Drafts</div>
              </div>
            </div>

            <Table
              dataSource={draftData}
              columns={columns}
              style={{ marginTop: "15px" }}
            />
          </div>

          <div className="drafts-container">
            <div className="draft-heading-container">
              <div className="drafts-icon">
                <img
                  src="/img/drafts.png"
                  alt="draft-icon"
                  style={{ width: "32px", height: "auto", marginRight: "10px" }}
                />
              </div>
              <div className="draft-heading">
                <div className="virtual-card-heading-text">
                  Claim Submission History
                </div>
              </div>
            </div>

            <Table
              dataSource={claimHistory}
              columns={claimHistoryColumns}
              style={{ marginTop: "15px" }}
            />
          </div>

          <div className="initiate-claim-container">
            <div className="initiate-claim-heading-container">
              <div className="inititae-claim-heading">
                Want to initiate claim?
              </div>
              <div className="inititae-claim-sub-heading">
                Quick claim support for Umrah and Hajj travel
              </div>
            </div>
            <div className="initiate-claim-btn-container">
              <div
                className="web-btn"
                onClick={() => {
                  handleStepChange(1);
                  setClaims([
                    {
                      claimCategoryId: null,
                      isDraft: true,
                      claimDocs: [],
                    },
                  ]);
                  setCountry(null);
                }}
              >
                GET STARTED
              </div>
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
                  <img
                    src="/img/back-icon.svg"
                    alt="back-icon"
                    style={{
                      width: "7px",
                      height: "auto",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="back-text">Back</div>
              </div>

              {/* <div className="back-icon-container-mob" onClick={handleStepBack}>
                                <div className="back-icon">
                                    <img src="/img/back-icon.svg" alt="back-icon" style={{ width: '12px', height: 'auto', marginRight: '10px' }} />
                                </div>

                            </div> */}

              <div className="travel-details-container">
                <div className="verify-details-heading">
                  Your Travel Details
                </div>
                {/* <div className="verify-details-sub-text">
                  Please enter your travel insurance policy details below.
                </div> */}
              </div>

              <div className="select-country-container">
                <div className="label">Country where Loss Occurred</div>

                <div style={{ marginTop: "15px" }}>
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Select a country"
                    optionFilterProp="children"
                    onChange={onCountrySelect}
                    name="country"
                    value={country}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    // options={countries}
                    options={sortedOptions}
                  />
                </div>

                <div className="initiate-claim-btn-container">
                  {editMode ? (
                    <div
                      className="web-btn-full"
                      onClick={() => handleStepChange(4)}
                    >
                      Update
                    </div>
                  ) : (
                    <div
                      className="web-btn-full"
                      onClick={() => handleStepChange(2)}
                    >
                      NEXT
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}></Col>
        </Row>
      )}

      {/* Travel Details tab end */}

      {/* Claim Details tab start */}

      {activeStep === 2 && !editMode && (
        <div className="claim-details-main-container py-3 px-5">
          {!editMode && (
            <div className="back-icon-container" onClick={handleStepBack}>
              <div className="back-icon">
                <img
                  src="/img/back-icon.svg"
                  alt="back-icon"
                  style={{ width: "7px", height: "auto", marginRight: "10px" }}
                />
              </div>
              <div className="back-text">Back</div>
            </div>
          )}

          {/* <div className="back-icon-container-mob" onClick={handleStepBack}>
                        <div className="back-icon">
                            <img src="/img/back-icon.svg" alt="back-icon" style={{ width: '12px', height: 'auto', marginRight: '10px' }} />
                        </div>
                    </div> */}

          <div className="claim-details-title">
            <div className="claim-details-heading">Claim Requests</div>
            <div className="claim-details-sub-text">
              claim request can be initiated by selecting category of claim and
              uploading documents & pictures. User can add multiple claims for
              different categories from list
            </div>
          </div>

          {claims.map((claim, index) => (
            <>
              <div
                className="heading-icon-container-2"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="virtual-card-icon-container">
                  <img
                    src="/img/policy-details-icon.svg"
                    alt="policy-details-icon"
                    style={{
                      width: "32px",
                      height: "auto",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div
                  className="virtual-card-heading-text"
                  style={{ backgroundColor: "#FCFAFA", padding: "15px" }}
                >
                  Claim request {index + 1}
                </div>
                {index !== 0 && (
                  <Button
                    danger
                    onClick={() => {
                      setClaims((preval) => {
                        return preval.filter((elem, i) => {
                          return index !== i;
                        });
                      });
                    }}
                  >
                    <DeleteTwoTone twoToneColor="#eb2f96" />
                  </Button>
                )}
              </div>

              <div className="claim-category-select mb-3">
                <div className="label" style={{ marginBottom: "10px" }}>
                  Claim Category
                </div>
                <Select
                  showSearch
                  onChange={async (value) => {
                    console.log("value", value);
                    setClaimCategories((prevVal) => {
                      return prevVal.map((elem) => {
                        if (elem.value === value) {
                          return { ...elem, disabled: true };
                        } else if (claim.claimCategoryId === elem.value) {
                          return { ...elem, disabled: false };
                        } else {
                          return elem;
                        }
                      });
                    });

                    const claimNew = [...claims];
                    const data = await getClaimCategoryAndDocs({ id: value });
                    const claimCategoryData = data.data?.claimCategoryData;
                    claimNew[index].claimCategoryId = value;
                    claimNew[index].claimDocs =
                      claimCategoryData?.claimDocuments;
                    setClaims(claimNew);
                  }}
                  placeholder="Select a category"
                  optionFilterProp="children" // Use "children" property for filtering options
                  filterOption={(input, option) => {
                    console.log(input, option);
                    return (
                      option?.label
                        ?.toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    );
                  }} // Filter options based on the "children" property
                  name="categories"
                  value={claim.claimCategoryId}
                  options={claimCategories}
                  className="claim-category-select-input"
                />
              </div>

              <div
                className="documents-upload-heading"
                style={{ margrinBottom: "10px", margrinTop: "20px" }}
              >
                Documents Upload
              </div>
              <div className="mandatory-items-note">* are mandatory items</div>

              <div className="documents-upload-container">
                <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                  {claim.claimDocs.map((claim_doc, claim_doc_index) => (
                    <>
                      <Col
                        lg={{ span: 24 }}
                        xs={{ span: 24 }}
                        className="document-upload-label mb-2 mt-2"
                      >
                        {claim_doc.title}
                        {claim_doc.isMandatory && (
                          <span className="mandatory-item">*</span>
                        )}
                      </Col>
                      <Col
                        lg={{ span: 24 }}
                        xs={{ span: 24 }}
                        className="pl-4 mb-2"
                      >
                        <Upload
                          name="file"
                          action={(file) => {
                            // console.log(claims);
                            const claimNew = [...claims];
                            let files =
                              claimNew[index].claimDocs[claim_doc_index]
                                .file === undefined
                                ? [file]
                                : [
                                    ...claimNew[index].claimDocs[
                                      claim_doc_index
                                    ].file,
                                    file,
                                  ];
                            // console.log(claimNew[index].claimDocs[claim_doc_index].file,files);
                            claimNew[index].claimDocs[claim_doc_index].file =
                              files;
                            setClaims(claimNew);
                          }}
                          customRequest={({ file, onSuccess }) => {
                            setTimeout(() => {
                              onSuccess("ok");
                            }, 0);
                          }}
                        >
                          <Button icon={<UploadOutlined />}>
                            Click to Upload
                          </Button>
                        </Upload>
                        {claim_doc.url && (
                          <>
                            <div className="mt-2">
                              <a
                                href={claim_doc.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {claim_doc.name}
                              </a>
                              <div
                                className="delete-btn"
                                onClick={async () => {
                                  const data = {
                                    claimRequestId: claim_doc.claimRequestId,
                                    fieldName: claim_doc.title,
                                    documentId: "" + claim_doc.documentId,
                                    // "id": claim.claimCategoryId
                                  };

                                  const response = await deleteDoc(data);
                                  getClaimsByUserFn(null, currentDraftID);
                                }}
                              >
                                Delete
                              </div>
                            </div>
                          </>
                        )}
                      </Col>
                    </>
                  ))}
                </Row>
              </div>
            </>
          ))}

          <Modal title="Confirm" visible={isModalOpen} onCancel={handleCancel}>
            <div className="claim-modal-text-container">
              <span>Would you like to add another claim?</span>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <div
                className="secondary-btn mr-2"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                No
              </div>
              <div
                className="web-btn"
                onClick={() => {
                  setIsModalOpen(false);
                  const claimNew = [...claims];
                  claimNew.push({
                    claimCategoryId: "",
                    claimDocs: [],
                  });
                  setClaims(claimNew);
                }}
              >
                Yes
              </div>
            </div>
          </Modal>

          <div className="btns-container">
            {!editMode && (
              <div
                className="web-btn"
                onClick={() => {
                  setDisableOpt([
                    ...disableOpt,
                    {
                      index: "",
                      val: "",
                    },
                  ]);
                  setIsModalOpen(true);
                }}
              >
                Add more claims
              </div>
            )}
            <div className="save-draft-next-btn-container d-flex align-items-center">
              {!editMode && (
                <div
                  className="secondary-btn mr-2"
                  onClick={() => {
                    if (claims[0].claimCategoryId === null) {
                      message.error(
                        "Please select at least one req and document !"
                      );
                      return;
                    }
                    addAllClaims();
                  }}
                >
                  Save as draft
                </div>
              )}
              {!editMode && (
                <div
                  className="web-btn"
                  onClick={() => {
                    // console.log(!claims[0].claimDocs[0].file);
                    if (claims[0].claimCategoryId === null) {
                      message.error(
                        "Please select at least one req and document !"
                      );
                      return;
                    }
                    if (!claims[0].claimDocs[0].file) {
                      message.error(
                        "Please select at least one req and document !"
                      );
                      return;
                    }
                    addAllClaims(true);
                  }}
                >
                  Next
                </div>
              )}
              {editMode && (
                <div
                  className="web-btn"
                  onClick={() => {
                    updateAllClaims();
                    // addAllClaims(true,true)
                    setActiveStep(4);
                  }}
                >
                  Update
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {activeStep === 2 && editMode && (
        <div className="claim-details-main-container py-3 px-5">
          <div className="claim-details-title">
            <div className="claim-details-heading">Claim Requests</div>
            <div className="claim-details-sub-text">
              claim request can be initiated by selecting category of claim and
              uploading documents & pictures. User can add multiple claims for
              different categories from list
            </div>
          </div>
          {/* {
            reviewDataNew?.claimRequestDocs[claimReqIndex]
          } */}

          {claims.map((claim, index) => {
            if (index !== claimReqIndex) {
              return false;
            }
            return (
              <>
                <div
                  className="heading-icon-container-2"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="virtual-card-icon-container">
                    <img
                      src="/img/policy-details-icon.svg"
                      alt="policy-details-icon"
                      style={{
                        width: "32px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div
                    className="virtual-card-heading-text"
                    style={{ backgroundColor: "#FCFAFA", padding: "15px" }}
                  >
                    Claim request {index + 1}
                  </div>
                </div>

                <div className="claim-category-select mb-3">
                  <div className="label" style={{ marginBottom: "10px" }}>
                    Claim Category
                  </div>
                  <Select
                    showSearch
                    disabled
                    // onChange={async (value) => {
                    //   console.log("value", value);
                    //   setClaimCategories((prevVal) => {
                    //     return prevVal.map((elem) => {
                    //       if (elem.value === value) {
                    //         return { ...elem, disabled: true };
                    //       } else if (claim.claimCategoryId === elem.value) {
                    //         return { ...elem, disabled: false };
                    //       } else {
                    //         return elem;
                    //       }
                    //     });
                    //   });

                    //   const claimNew = [...claims];
                    //   const data = await getClaimCategoryAndDocs({ id: value });
                    //   const claimCategoryData = data.data?.claimCategoryData;
                    //   claimNew[index].claimCategoryId = value;
                    //   claimNew[index].claimDocs = claimCategoryData?.claimDocuments;
                    //   setClaims(claimNew);
                    // }}
                    placeholder="Select a category"
                    optionFilterProp="children" // Use "children" property for filtering options
                    filterOption={(input, option) => {
                      console.log(input, option);
                      return (
                        option?.label
                          ?.toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      );
                    }} // Filter options based on the "children" property
                    name="categories"
                    value={
                      reviewDataNew?.claimRequestDocs[claimReqIndex]
                        .claimCategory.id
                    }
                    options={claimCategories}
                    className="claim-category-select-input"
                  />
                </div>

                <div
                  className="documents-upload-heading"
                  style={{ margrinBottom: "10px", margrinTop: "20px" }}
                >
                  Documents Upload
                </div>
                <div className="mandatory-items-note">
                  * are mandatory items
                </div>

                <div className="documents-upload-container">
                  <Row className="w-100 d-flex align-items-center mt-2 mb-2 pr-2">
                    {console.log(
                      claim.claimDocs,
                      reviewDataNew?.claimRequestDocs[claimReqIndex]
                    )}
                    {editCategory.claimDocuments.map(
                      (claim_doc, claim_doc_index) => (
                        <>
                          <Col
                            lg={{ span: 24 }}
                            xs={{ span: 24 }}
                            className="document-upload-label mb-2 mt-2"
                          >
                            {claim_doc.title}
                            {claim_doc.isMandatory && (
                              <span className="mandatory-item">*</span>
                            )}
                          </Col>
                          <Col
                            lg={{ span: 24 }}
                            xs={{ span: 24 }}
                            className="pl-4 mb-2"
                          >
                            <Upload
                              name="file"
                              onRemove={async (e) => {
                                console.log(newFileList, e);
                                // return
                                const update = newFileList.filter((elem) => {
                                  return elem.uid !== e.uid;
                                });
                                setNewFileList(update);
                                // setNewFileList((preval)=>{
                                //   preval.filter((elem)=>{
                                //     return elem.uid!==e.uid
                                //   })
                                // })
                                // return
                                if (
                                  e.title === undefined &&
                                  reviewDataNew?.claimRequestDocs[claimReqIndex]
                                    .files !== null
                                ) {
                                  console.log("2");
                                  const data = {
                                    claimRequestId:
                                      reviewDataNew?.claimRequestDocs[
                                        claimReqIndex
                                      ].claimRequestId,
                                    fieldName: e.fieldname,
                                    documentId: "" + e.id,
                                    // "id": claim.claimCategoryId
                                  };

                                  const response = await deleteDoc(data);
                                  console.log(response);
                                  if (response.data.status) {
                                    getClaimsByUserFn(null, currentDraftID);
                                    reviewDataFn();
                                  }
                                } else {
                                  console.log(e);
                                }
                              }}
                              fileList={newFileList.filter((elem, i) => {
                                console.log(newFileList, i);
                                if (elem.fieldname === undefined) {
                                  if (claim_doc.title === elem.title) {
                                    console.log(elem);
                                    return elem;
                                  }
                                } else {
                                  return claim_doc.title === elem.fieldname;
                                }
                              })}
                              action={(file) => {
                                console.log(newFileList);
                                const newList = {
                                  title: claim_doc.title,
                                  ind: claim_doc_index,
                                  file: file,
                                  name: file.name,
                                };
                                console.log(newList);
                                const update = [...newFileList, newList];
                                console.log(update);
                                setNewFileList(update);
                                // if(claims[index].claimDocs.length===0){
                                // setNewFileList([...newFileList,file])
                                // return
                                // }
                                // const claimNew = [...claims];
                                // claimNew[index].claimDocs[claim_doc_index].file =
                                //   file;
                                // setClaims(claimNew);
                              }}
                              customRequest={({ file, onSuccess }) => {
                                setTimeout(() => {
                                  onSuccess("ok");
                                }, 0);
                              }}
                            >
                              <Button icon={<UploadOutlined />}>
                                Click to Upload
                              </Button>
                            </Upload>
                            {/* {(reviewDataNew?.claimRequestDocs[claimReqIndex].files!==null && reviewDataNew?.claimRequestDocs[claimReqIndex].files[claim_doc_index]!==null) && (
                          <>
                            <div className="mt-2">
                              <a
                                href={reviewDataNew?.claimRequestDocs[claimReqIndex].files[claim_doc_index].path}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {reviewDataNew?.claimRequestDocs[claimReqIndex].files[claim_doc_index].originalname}
                              </a>
                              <div
                                className="delete-btn"
                                onClick={async () => {
                                  const data = {
                                    claimRequestId: reviewDataNew?.claimRequestDocs[claimReqIndex].claimRequestId,
                                    fieldName: reviewDataNew?.claimRequestDocs[claimReqIndex].files[claim_doc_index].fieldname,
                                    documentId: "" + reviewDataNew?.claimRequestDocs[claimReqIndex].files[claim_doc_index].id,
                                    // "id": claim.claimCategoryId
                                  };

                                  const response = await deleteDoc(data);
                                  if(response.data.status){
                                    getClaimsByUserFn(null, currentDraftID);
                                    reviewDataFn()
                                  }
                                }}
                              >
                                Delete
                              </div>
                            </div>
                          </>
                        )} */}
                          </Col>
                        </>
                      )
                    )}
                    {/* {reviewDataNew?.claimRequestDocs[claimReqIndex].files!==null && reviewDataNew?.claimRequestDocs[claimReqIndex].files.map((claim_doc, claim_doc_index) => (
                    <>
                      <Col
                        lg={{ span: 24 }}
                        xs={{ span: 24 }}
                        className="document-upload-label mb-2 mt-2"
                      >
                        {claim_doc.fieldname}
                        {claim.claimDocs[claim_doc_index].isMandatory && (
                          <span className="mandatory-item">*</span>
                        )}
                      </Col>
                      <Col
                        lg={{ span: 24 }}
                        xs={{ span: 24 }}
                        className="pl-4 mb-2"
                      >
                        <Upload
                          name="file"
                          action={(file) => {
                            const claimNew = [...claims];
                            claimNew[index].claimDocs[claim_doc_index].file =
                              file;
                            setClaims(claimNew);
                          }}
                          customRequest={({ file, onSuccess }) => {
                            setTimeout(() => {
                              onSuccess("ok");
                            }, 0);
                          }}
                        >
                          <Button icon={<UploadOutlined />}>
                            Click to Upload
                          </Button>
                        </Upload>
                        {claim_doc.path && (
                          <>
                            <div className="mt-2">
                              <a
                                href={claim_doc.path}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {claim_doc.originalname}
                              </a>
                              <div
                                className="delete-btn"
                                onClick={async () => {
                                  const data = {
                                    claimRequestId: reviewDataNew?.claimRequestDocs[claimReqIndex].claimRequestId,
                                    fieldName: claim_doc.fieldname,
                                    documentId: "" + claim_doc.id,
                                    // "id": claim.claimCategoryId
                                  };

                                  const response = await deleteDoc(data);
                                  getClaimsByUserFn(null, currentDraftID);
                                  reviewDataFn()
                                  console.log(response);
                                }}
                              >
                                Delete
                              </div>
                            </div>
                          </>
                        )}
                      </Col>
                    </>
                  ))} */}
                  </Row>
                </div>
              </>
            );
          })}

          <div className="btns-container">
            <div className="save-draft-next-btn-container d-flex align-items-center">
              {editMode && (
                <div
                  className="web-btn"
                  onClick={() => {
                    console.log(editCategory.claimDocuments, newFileList);
                    const firstArray = editCategory.claimDocuments;
                    
                    const secondArray = newFileList;
                    
                    // Check if any title from the first array matches any object in the second array
                    let hasMatch = false;
                    for (let i = 0; i < firstArray.length; i++) {
                      const title = firstArray[i].title;
                      if (secondArray.some(obj => obj.fieldname === title || obj.title === title)) {
                        hasMatch = true;
                        break;
                      }
                    }
                    
                    // Check if all titles from the first array match at least one object in the second array
                    const firstArrayTitles = firstArray.map(obj => obj.title);
                    const uniqueTitles = [...new Set(firstArrayTitles)];
                    const allTitlesMatch = uniqueTitles.every(title =>
                      secondArray.some(obj => obj.fieldname === title || obj.title === title)
                    );
                    
                    // Print success or error message based on the matches
                    if (hasMatch && allTitlesMatch) {
                      console.log("Success: All conditions are met.");
                      updateAllClaims(claims[claimReqIndex]);
                      // addAllClaims(true,true)
                      setActiveStep(4);
                    } else {
                      message.error("Please select at least one req and document !");
                    }
                    
                    // return;
                    // if (newFileList.length === 0) {
                    //   message.error(
                    //     "Please select at least one req and document !"
                    //   );
                    //   return;
                    // }

                  }}
                >
                  Update
                </div>
              )}
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
                  {!editMode && (
                    <div
                      className="back-icon-container"
                      onClick={handleStepBack}
                    >
                      <div className="back-icon">
                        <img
                          src="/img/back-icon.svg"
                          alt="back-icon"
                          style={{
                            width: "7px",
                            height: "auto",
                            marginRight: "10px",
                          }}
                        />
                      </div>
                      <div className="back-text">Back</div>
                    </div>
                  )}

                  {/* <div className="back-icon-container-mob" onClick={handleStepBack}>
                                        <div className="back-icon">
                                            <img src="/img/back-icon.svg" alt="back-icon" style={{ width: '12px', height: 'auto', marginRight: '10px' }} />
                                        </div>
                                    </div> */}

                  <div className="verify-details-heading">Payment Details</div>
                  <div className="verify-details-sub-text">
                    Please enter your payment details for money transfer upon
                    successful claim settlement
                  </div>
                </div>

                <div className="single-detail-entry-container">
                  <div className="label-field-container">
                    <div className="label">Payment options*</div>
                    <div style={{ marginTop: "15px" }}>
                      <Select
                        className="w-100"
                        showSearch
                        placeholder="Select Payment Option"
                        optionFilterProp="children"
                        value={selectedPaymentOption}
                        onChange={handlePaymentOptionChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={[
                          {
                            value: "dbs_posb",
                            label: "DBS POSB Account",
                          },
                          {
                            value: "paynow_linked_account",
                            label: "Paynow Linked Account",
                          },
                          {
                            value: "cheque",
                            label: "Cheque",
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
                        <div className="label">
                          Payee Name (as per bank account)*
                        </div>
                        <div style={{ marginTop: "15px" }}>
                          <Input
                            placeholder="Payee Name"
                            value={payeeName}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const filteredValue = inputValue.replace(
                                /[0-9]/g,
                                ""
                              );
                              setPayeeName(filteredValue);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="single-detail-entry-container">
                      <div className="label-field-container">
                        <div className="label">Payee NRIC*</div>
                        <div style={{ marginTop: "15px" }}>
                          <Input
                            placeholder="Payee NRIC"
                            value={PayeeNRIC}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const filteredValue = inputValue.replace(
                                /[^a-zA-Z0-9]/g,
                                ""
                              ); // Only allow alphabets and numbers
                              setPayeeNRIC(filteredValue);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="single-detail-entry-container">
                      <div className="label-field-container">
                        <div className="label">Bank Name (DBS/POSB Only)*</div>
                        <div style={{ marginTop: "15px" }}>
                          <Select
                            className="w-100"
                            showSearch
                            placeholder="Select a person"
                            optionFilterProp="children"
                            value={bankName}
                            onChange={(value) => {
                              setBankName(value);
                            }}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                            options={[
                              {
                                value: "dbs",
                                label: "DBS",
                              },
                              {
                                value: "posb",
                                label: "POSB",
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="single-detail-entry-container">
                      <div className="label-field-container">
                        <div className="label">Bank Account Number*</div>
                        <div style={{ marginTop: "15px" }}>
                          <Input
                            placeholder="Enter Bank Account Number"
                            value={bankAccountNumber}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const filteredValue = inputValue.replace(
                                /[^0-9]/g,
                                ""
                              );
                              setBankAccountNumber(filteredValue);
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
                        <div className="label">
                          PayNow registered mobile number or NRIC/FIN*
                        </div>
                        <div style={{ marginTop: "15px" }}>
                          <Input
                            placeholder="Enter Mobile Number or NRIC/FIN"
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
                        <div style={{ marginTop: "15px" }}>
                          <Input
                            placeholder="Enter Payee Name"
                            value={payeeName}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const filteredValue = inputValue.replace(
                                /[0-9]/g,
                                ""
                              );
                              setPayeeName(filteredValue);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* In case of paynow slelect, show this field */}

                {/* In case of cheque slelect, show this field */}
                {!editMode && (
                  <div
                    className="web-btn-full"
                    onClick={() => handleStepChange(4)}
                  >
                    Next
                  </div>
                )}
                {editMode && (
                  <div
                    className="web-btn-full"
                    onClick={() => handleStepChange(4)}
                  >
                    Update
                  </div>
                )}
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
              <img
                src="/img/back-icon.svg"
                alt="back-icon"
                style={{ width: "7px", height: "auto", marginRight: "10px" }}
              />
            </div>
            <div className="back-text">Back</div>
          </div>

          {/* <div className="back-icon-container-mob" onClick={handleStepBack}>
                        <div className="back-icon">
                            <img src="/img/back-icon.svg" alt="back-icon" style={{ width: '12px', height: 'auto', marginRight: '10px' }} />
                        </div>
                    </div> */}

          <div className="claim-details-title">
            <div className="claim-details-heading">Review Claim</div>
            <div className="claim-details-sub-text">
              Review claim details below. You can edit the claim details before
              submitting
            </div>
          </div>

          <div className="review-container">
            <div className="review-header-container">
              <div className="d-flex justify-content-between">
                <div className="icon-container">
                  <img
                    src="/img/travel-icon.svg"
                    alt="claim-details-icon"
                    style={{
                      width: "30px",
                      height: "auto",
                      marginRight: "10px",
                    }}
                  />
                </div>

                <div className="virtual-card-heading-text">Travel Details</div>
              </div>
              {/* <div className="review-edit-icon-container d-flex">
                                <div className="review-edit-icon">
                                    <img src="/img/icon-edit.svg" alt="edit-icon" style={{ width: '15px', height: 'auto', marginRight: '10px' }} />
                                </div>
                            </div> */}
            </div>

            <div className="review-details-container">
              <Row className="w-100">
                <Col
                  span={8}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Insurance Policy Package
                    </div>
                    <div className="policy-detail">
                      {reviewDataNew?.travelDetails?.insurancePolicyPackage}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">Traveler Agent</div>
                    <div className="policy-detail">
                      {reviewDataNew?.travelDetails?.travelAgency}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Departure date from Singapore:
                    </div>
                    <div className="policy-detail">
                      {reviewDataNew?.travelDetails?.departureDate}
                    </div>
                  </div>
                </Col>
                <Col
                  span={8}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">UID Number</div>
                    <div className="policy-detail">
                      {reviewDataNew?.travelDetails?.uidNo}
                    </div>
                  </div>

                  <div className="d-flex countryEditButton">
                    <div className="policy-details-container">
                      <div className="policy-details-label">
                        Country where Loss Occurred
                      </div>
                      <div className="policy-detail d-flex">
                        {reviewDataNew?.lossCountry}
                      </div>
                    </div>
                    <div
                      className="edit-icon"
                      onClick={() => handleStepChange(1)}
                    >
                      <div className="icon">
                        <img
                          src="/img/edit-icon.svg"
                          alt="edit-icon"
                          style={{
                            width: "12px",
                            height: "auto",
                            marginRight: "5px",
                          }}
                        />
                      </div>
                      <span>Edit</span>
                    </div>
                  </div>
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Return date to Singapore
                    </div>
                    <div className="policy-detail">
                      {reviewDataNew?.travelDetails?.returnDate}
                    </div>
                  </div>
                </Col>
                {/* <Col span={8} className="d-flex justify-content-end align-items-start">
                                    <div className="edit-icon-container" onClick={() => handleStepChange(1)}>
                                        <div className="edit-icon">
                                            <div className="icon">
                                                <img src="/img/edit-icon.svg" alt="edit-icon" style={{ width: '12px', height: 'auto', marginRight: '5px' }} />
                                            </div>
                                            <span>Edit</span>
                                        </div>
                                    </div>
                                </Col> */}
              </Row>
            </div>

            <div className="review-details-container-mobile">
              <Row className="w-100">
                <Col
                  span={24}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Insurance Policy Package
                    </div>
                    <div className="policy-detail">
                      {reviewDataNew?.travelDetails?.insurancePolicyPackage}
                    </div>
                  </div>
                </Col>
                <Col
                  span={24}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">Traveler Agent</div>
                    <div className="policy-detail">
                      {reviewDataNew?.travelDetails?.travelAgency}
                    </div>
                  </div>
                </Col>
                <Col
                  span={24}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Departure date from Singapore:
                    </div>
                    <div className="policy-detail">
                      {reviewDataNew?.travelDetails?.departureDate}
                    </div>
                  </div>
                </Col>

                <Col
                  span={24}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                ></Col>
                <Col
                  span={24}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Country where Loss Occurred
                    </div>
                    <div className="policy-detail">
                      {reviewDataNew?.lossCountry}
                    </div>
                  </div>
                </Col>
                <Col
                  span={24}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Return date to Singapore
                    </div>
                    <div className="policy-detail">
                      {reviewDataNew?.travelDetails?.returnDate}
                    </div>
                  </div>
                </Col>

                <Col
                  span={8}
                  className="d-flex justify-content-end align-items-start"
                >
                  <div
                    className="edit-icon-container"
                    onClick={() => handleStepChange(1)}
                  >
                    <div className="edit-icon">
                      <div className="icon">
                        <img
                          src="/img/edit-icon.svg"
                          alt="edit-icon"
                          style={{
                            width: "12px",
                            height: "auto",
                            marginRight: "5px",
                          }}
                        />
                      </div>
                      <span>Edit</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="review-container">
            <div className="review-header-container d-flex justify-content-between">
              <div className="d-flex justify-content-between">
                <div className="icon-container">
                  <img
                    src="/img/claim-icon.svg"
                    alt="claim-details-icon"
                    style={{
                      width: "30px",
                      height: "auto",
                      marginRight: "10px",
                    }}
                  />
                </div>

                <div className="virtual-card-heading-text">Claim Details</div>
              </div>

              {/* <div
                className="edit-icon-container"
                onClick={() => {
                  handleStepChange(2);
                  setEditMode(true);
                }}
              >
                <div className="edit-icon">
                  <div className="icon">
                    <img
                      src="/img/edit-icon.svg"
                      alt="edit-icon"
                      style={{
                        width: "12px",
                        height: "auto",
                        marginRight: "5px",
                      }}
                    />
                  </div>
                  <span>Edit</span>
                </div>
              </div> */}
              {/* <div className="review-edit-icon-container d-flex">
                                <div className="review-edit-icon">
                                    <img src="/img/icon-edit.svg" alt="edit-icon" style={{ width: '15px', height: 'auto', marginRight: '10px' }} />
                                </div>
                            </div> */}
            </div>

            {reviewDataNew?.claimRequestDocs?.map((claimRequestDoc, index) => (
              <div className="calim-doc-loop-container">
                <div className="claim-header pl-2">
                  <div className="icon">
                    <img
                      src="/img/policy-details-icon.svg"
                      alt="claim-icon"
                      style={{
                        width: "30px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div>Claim {index + 1}</div>
                  <div></div>
                </div>

                <div className="review-details-container">
                  <Row className="w-100">
                    <Col
                      span={8}
                      className="virtual-card-desc-policy"
                      style={{ paddingRight: "20px" }}
                    >
                      <div className="policy-details-container">
                        <div className="policy-details-label">
                          Claim Category
                        </div>
                        <div className="policy-detail">
                          {claimRequestDoc?.claimCategory?.title}
                        </div>
                        {/* {JSON.stringify(claimRequestDoc?.claimCategory)}
                                                {JSON.stringify(claimRequestDoc?.claimCategory?.title)} */}
                      </div>

                      <div className="policy-details-container">
                        <div className="policy-details-label">
                          Documents Uploaded
                        </div>
                        {claimRequestDoc?.files?.map((file, index) => (
                          <div className="policy-detail">{file?.fieldname}</div>
                        ))}
                      </div>
                    </Col>
                    <Col
                      span={8}
                      className="virtual-card-desc-policy"
                      style={{ paddingRight: "20px" }}
                    ></Col>
                    <Col
                      span={8}
                      className="d-flex justify-content-end align-items-start"
                    >
                      <div
                        className="edit-icon-container"
                        onClick={async () => {
                          let res1 = await axios.get(
                            `https://api.stntinternational.com/api/website/claim-categories/documents/${claimRequestDoc.claimCategory.id}`,
                            {
                              headers: {
                                Authorization:
                                  "Bearer " + localStorage.getItem("token"),
                              },
                            }
                          );
                          const listOfFiles = claimRequestDoc.files.map(
                            (elem, i) => {
                              return {
                                uid: elem.id,
                                name: elem.originalname,
                                url: elem.path,
                                id: elem.id,
                                fieldname: elem.fieldname,
                              };
                            }
                          );
                          setUpdateDocRequestId(claimRequestDoc.claimRequestId);
                          setEditCategory(res1.data.claimCategoryData);
                          setNewFileList(listOfFiles);
                          setClaimReqIndex(index);
                          handleStepChange(2);
                        }}
                      >
                        <div className="edit-icon">
                          <div className="icon">
                            <img
                              src="/img/edit-icon.svg"
                              alt="edit-icon"
                              style={{
                                width: "12px",
                                height: "auto",
                                marginRight: "5px",
                              }}
                            />
                          </div>
                          <span>Edit</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            ))}

            <div className="review-details-container-mobile">
              {reviewDataNew?.claimRequestDocs?.map(
                (claimRequestDoc, index) => (
                  <Row className="w-100">
                    <Col
                      span={24}
                      className="virtual-card-desc-policy"
                      style={{ paddingRight: "20px" }}
                    >
                      <div className="policy-details-container">
                        <div className="policy-details-label">
                          Claim Category
                        </div>
                        <div className="policy-detail">
                          {claimRequestDoc?.claimCategory?.title}
                        </div>
                      </div>
                    </Col>
                    <Col
                      span={24}
                      className="virtual-card-desc-policy"
                      style={{ paddingRight: "20px" }}
                    >
                      <div className="policy-details-container">
                        <div className="policy-details-label">
                          Documents Uploaded
                        </div>
                        <div className="policy-detail">
                          {claimRequestDoc?.files?.map((file, index) => (
                            <div className="policy-detail">
                              {file?.fieldname}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Col>
                  </Row>
                )
              )}
            </div>
          </div>

          <div className="review-container">
            <div className="review-header-container">
              <div className="icon-container">
                <img
                  src="/img/payment-icon.svg"
                  alt="claim-details-icon"
                  style={{ width: "30px", height: "auto", marginRight: "10px" }}
                />
              </div>

              <div className="virtual-card-heading-text">Payment Details</div>
            </div>

            <div className="review-details-container">
              <Row className="w-100">
                <Col
                  lg={{ span: 8 }}
                  xs={{ span: 24 }}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  {reviewDataNew?.paymentDetails?.paymentOptions && (
                    <div className="policy-details-container">
                      <div className="policy-details-label">Payment Option</div>
                      <div className="policy-detail">
                        {reviewDataNew?.paymentDetails?.paymentOptions}
                      </div>
                    </div>
                  )}

                  {reviewDataNew?.paymentDetails?.payeeNric && (
                    <div className="policy-details-container">
                      <div className="policy-details-label">Payee NRIC</div>
                      <div className="policy-detail">
                        {reviewDataNew?.paymentDetails?.payeeNric}
                      </div>
                    </div>
                  )}

                  {reviewDataNew?.paymentDetails?.bankAccountNumber && (
                    <div className="policy-details-container">
                      <div className="policy-details-label">
                        Bank Account No
                      </div>
                      <div className="policy-detail">
                        {reviewDataNew?.paymentDetails?.bankAccountNumber}
                      </div>
                    </div>
                  )}
                </Col>
                <Col
                  span={8}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  {reviewDataNew?.paymentDetails?.payeeName && (
                    <div className="policy-details-container">
                      <div className="policy-details-label">
                        Payee Name (as per bank acccount)
                      </div>
                      <div className="policy-detail">
                        {reviewDataNew?.paymentDetails?.payeeName}
                      </div>
                    </div>
                  )}

                  {reviewDataNew?.paymentDetails?.payNow && (
                    <div className="policy-details-container">
                      <div className="policy-details-label">PayNow Number </div>
                      <div className="policy-detail">
                        {reviewDataNew?.paymentDetails?.payNow}
                      </div>
                    </div>
                  )}

                  {reviewDataNew?.paymentDetails?.bankName && (
                    <div className="policy-details-container">
                      <div className="policy-details-label">Bank Name</div>
                      <div className="policy-detail">
                        {reviewDataNew?.paymentDetails?.bankName}
                      </div>
                    </div>
                  )}
                </Col>
                <Col
                  span={8}
                  className="d-flex justify-content-end align-items-start"
                >
                  <div
                    className="edit-icon-container"
                    onClick={() => {
                      handleStepChange(3);
                      setEditMode(true);
                    }}
                  >
                    <div className="edit-icon">
                      <div className="icon">
                        <img
                          src="/img/edit-icon.svg"
                          alt="edit-icon"
                          style={{
                            width: "12px",
                            height: "auto",
                            marginRight: "5px",
                          }}
                        />
                      </div>
                      <span>Edit</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="review-details-container-mob">
              <Row className="w-100">
                <Col
                  lg={{ span: 8 }}
                  xs={{ span: 24 }}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">Payment Option</div>
                    <div className="policy-detail">
                      {reviewDataNew?.paymentDetails?.paymentOptions}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">Payee NRIC</div>
                    <div className="policy-detail">
                      {reviewDataNew?.paymentDetails?.payeeNric}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">Bank Account No</div>
                    <div className="policy-detail">
                      {reviewDataNew?.paymentDetails?.bankAccountNumber}
                    </div>
                  </div>
                </Col>
                <Col
                  span={8}
                  className="virtual-card-desc-policy"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="policy-details-container">
                    <div className="policy-details-label">
                      Payee Name (as per bank acccount)
                    </div>
                    <div className="policy-detail">
                      {reviewDataNew?.paymentDetails?.payeeName}
                    </div>
                  </div>

                  <div className="policy-details-container">
                    <div className="policy-details-label">Bank Name</div>
                    <div className="policy-detail">
                      {reviewDataNew?.paymentDetails?.bankName}
                    </div>
                  </div>
                </Col>
                <Col
                  span={8}
                  className="d-flex justify-content-end align-items-start"
                >
                  <div
                    className="edit-icon-container"
                    onClick={() => handleStepChange(3)}
                  >
                    <div className="edit-icon">
                      <div className="icon">
                        <img
                          src="/img/edit-icon.svg"
                          alt="edit-icon"
                          style={{
                            width: "12px",
                            height: "auto",
                            marginRight: "5px",
                          }}
                        />
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
                <img
                  src="/img/declaration-icon.svg"
                  alt="claim-details-icon"
                  style={{ width: "30px", height: "auto", marginRight: "10px" }}
                />
              </div>

              <div className="virtual-card-heading-text">Declaration</div>
            </div>

            <div className="declaration-container pl-2">
              <div className="checkbox-text">
                <Checkbox
                  defaultChecked={
                    reviewDataNew.isDeclaration
                      ? reviewDataNew.isDeclaration
                      : isDeclaration
                  }
                  value={isDeclaration}
                  onChange={(e) => {
                    setIsDeclaration(e.target.checked);
                  }}
                >
                  I declare that all information's are true
                </Checkbox>
              </div>
              <div className="notice-container">
                <div className="notice-text-decl my-3">
                  <b>Important Notice:</b> In accordance to the provisions of
                  the Personal Data Protection Act 2012 (PDPA),the UOI's privacy
                  notice shall form part of the terms and conditions of the
                  policy. A copy of UOI's Privacy Notice can be found at
                  www.uoi.com.sg
                </div>
              </div>

              <div className="single-detail-entry-container">
                <div className="label-field-container">
                  <div className="label">User Name*</div>
                  <div style={{ marginTop: "15px" }}>
                    <Input
                      placeholder="User Name"
                      value={
                        reviewDataNew.declarationUserName
                          ? reviewDataNew.declarationUserName
                          : userName
                      }
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="ip-address-holder mt-1">{ip}</div>
            </div>

            <div className="checkbox-text my-3">
              <Checkbox
                defaultChecked={
                  reviewDataNew.isConsent ? reviewDataNew.isConsent : isConsent
                }
                value={isConsent}
                onChange={(e) => {
                  setIsConsent(e.target.checked);
                }}
              >
                I/We declare that the information given in this claim form is
                true and correct to the best of my knowledge and belief.I/We
                undertake to render every assistance on my/our power in dealing
                with the matter.I hereby authorize any hospital physician, other
                person who has attended or examined me, to furnish to the
                Company, or its authorized representative, any and all
                information with respect to any illness or injury, medical
                history, consultation, prescriptions or treatment and copies of
                all hospital or medical records. A digital copy of this
                authorization shall be considered as effective and valid as the
                original.
              </Checkbox>
            </div>
          </div>

          <div>
            <div className="btn-container">
              <div
                className="web-btn mb-3"
                onClick={() => {
                  submitMain();
                }}
              >
                Submit
              </div>
            </div>
          </div>
          <Modal title="Confirm" visible={isSubmitClaimModalOpen} footer={null}>
            <div className="claim-modal-text-container">
              <span>Your claim has been submitted</span>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <div
                className="web-btn"
                onClick={() => {
                  handleStepChange(0);
                  setIsSubmitClaimModalOpen(false);
                  window.location.reload();
                }}
              >
                OK
              </div>
            </div>
          </Modal>
        </div>
      )}

      {/* Review tab end */}

      <div className="footer-container">
        <div>Distributed By:</div>
        <div style={{ margin: "0px 20px" }}>
          <img
            src="/img/stntlogo.svg"
            alt="stnt"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>Underwritten By:</div>
        <div style={{ margin: "0px 20px" }}>
          <img
            src="/img/uoilogo.png"
            alt="stnt"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClaimSubmission;
