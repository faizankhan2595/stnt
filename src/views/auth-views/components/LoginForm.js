import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Form, Input, Divider, Alert, Checkbox, Modal } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { GoogleSVG, FacebookSVG } from "assets/svg/icon";
import CustomIcon from "components/util-components/CustomIcon";
import {
  showLoading,
  showAuthMessage,
  hideAuthMessage,
  authenticated,
} from "redux/actions/Auth";
import JwtAuthService from "services/JwtAuthService";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export const LoginForm = (props) => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forgetEmail, setForgetEmail] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  function validateEmail(email) {
    const pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
    return pattern.test(email);
  }
  const handleOk = async () => {
    if (validateEmail(forgetEmail)) {
      const res1 = await axios.get(
        `https://api.stntinternational.com/api/email/forgot-password?email=${forgetEmail}`
      );
      console.log(res1);
      setIsModalOpen(false);
    } else {
      alert("Please Enter Valid Email !");
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://api.stntinternational.com/api/auth/login",
        {
          username: username,
          password: password,
        }
      );

      const data = response.data;
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.jobTitle);
      window.location.href = "/app/dashboard";
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  const {
    otherSignIn,
    showForgetPassword,
    hideAuthMessage,
    onForgetPasswordClick,
    showLoading,
    extra,
    loading,
    showMessage,
    message,
    authenticated,
    showAuthMessage,
    token,
    redirect,
    allowRedirect,
  } = props;

  const onLogin = (values) => {
    showLoading();
    const fakeToken = "fakeToken";
    JwtAuthService.login(values)
      .then((resp) => {
        authenticated(fakeToken);
      })
      .then((e) => {
        showAuthMessage(e);
      });
  };

  const onGoogleLogin = () => {
    showLoading();
  };

  const onFacebookLogin = () => {
    showLoading();
  };

  useEffect(() => {
    if (token !== null && allowRedirect) {
      history.push(redirect);
    }
    if (showMessage) {
      setTimeout(() => {
        hideAuthMessage();
      }, 3000);
    }
  });

  const renderOtherSignIn = (
    <div>
      {/* <Divider>
				<span className="text-muted font-size-base font-weight-normal">or connect with</span>
			</Divider>
			<div className="d-flex justify-content-center">
				<Button 
					onClick={() => onGoogleLogin()} 
					className="mr-2" 
					disabled={loading} 
					icon={<CustomIcon svg={GoogleSVG}/>}
				>
					Google
				</Button>
				<Button 
					onClick={() => onFacebookLogin()} 
					icon={<CustomIcon svg={FacebookSVG}/>}
					disabled={loading} 
				>
					Facebook
				</Button>
			</div> */}
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={message}></Alert>
      </motion.div>
      <Form layout="vertical" name="login-form" onFinish={onLogin}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",

              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input
            value="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter email/username"
            prefix={<MailOutlined className="text-primary" />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={
            <div
              className={`${
                showForgetPassword
                  ? "d-flex justify-content-between w-100 align-items-center"
                  : ""
              }`}
            >
              <span>Password</span>
              {showForgetPassword && (
                <span
                  onClick={() => onForgetPasswordClick}
                  className="cursor-pointer font-size-sm font-weight-normal text-muted"
                >
                  Forget Password?
                </span>
              )}
            </div>
          }
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password
            value="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            prefix={<LockOutlined className="text-primary" />}
          />
        </Form.Item>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div
          style={{ marginTop: "-24px" }}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <span>
            <Checkbox
              onChange={(e) => console.log(`checked = ${e.target.checked}`)}
            ></Checkbox>{" "}
            Remember Me
          </span>
          <span className="forget_password_loginTwo" onClick={showModal}>
            Forget Password?
          </span>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            style={{ backgroundColor: "#41C1B2", border: "none" }}
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </Form.Item>
        {otherSignIn ? renderOtherSignIn : null}
        {extra}
      </Form>
      <Modal
        width={400}
        footer={null}
        visible={isModalOpen}
        onCancel={handleCancel}
      >
        <div className="d-flex my-3 align-items-center flex-column justify-content-center">
			<ForgetEmailIcon/>
          <h3 className="text-center">Forgot Password ?</h3>
          <p className="text-center">
            Please enter your email address below. Check your inbox for new
            password to login.
          </p>
          <Input
            placeholder="Email Address"
            value={forgetEmail}
            onChange={(e) => setForgetEmail(e.target.value)}
          />
          <Button
            style={{ backgroundColor: "#41C1B2", border: "none" }}
            className="mt-3"
            type="primary"
            onClick={handleOk}
          >
            Submit
          </Button>
		  <span onClick={handleCancel} className="mt-2 forget_password_loginTwo">Cancel</span>
        </div>
      </Modal>
      <Modal
        width={600}
        footer={null}
        visible={false}
        onCancel={handleCancel}
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
            onClick={handleOk}
          >
            Submit
          </Button>
		  <span onClick={handleCancel} className="mt-2 forget_password_loginTwo">Cancel</span></div>
        </div>
      </Modal>
    </>
  );
};

LoginForm.propTypes = {
  otherSignIn: PropTypes.bool,
  showForgetPassword: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

LoginForm.defaultProps = {
  otherSignIn: true,
  showForgetPassword: false,
};

const mapStateToProps = ({ auth }) => {
  const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect };
};

const mapDispatchToProps = {
  showAuthMessage,
  showLoading,
  hideAuthMessage,
  authenticated,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export const ForgetEmailIcon = (props) => (
	<svg
	  xmlns="http://www.w3.org/2000/svg"
	  xmlnsXlink="http://www.w3.org/1999/xlink"
	  width={50}
	  height={50}
	  viewBox="0 0 510 510"
	  {...props}
	>
	  <linearGradient
		id="e"
		x1={189.169}
		x2={283.169}
		y1={46.9}
		y2={484.9}
		gradientUnits="userSpaceOnUse"
	  >
		<stop offset={0} stopColor="#ff9100" />
		<stop offset={1} stopColor="#e63950" />
	  </linearGradient>
	  <linearGradient
		id="f"
		x1={255}
		x2={255}
		y1={288.049}
		y2={462.357}
		gradientUnits="userSpaceOnUse"
	  >
		<stop offset={0} stopColor="#fdbf00" />
		<stop offset={1} stopColor="#ff9100" />
	  </linearGradient>
	  <linearGradient id="a">
		<stop offset={0} stopColor="#e63950" stopOpacity={0} />
		<stop offset={0.047} stopColor="#e4354b" stopOpacity={0.047} />
		<stop offset={0.467} stopColor="#d31822" stopOpacity={0.467} />
		<stop offset={0.799} stopColor="#c90709" stopOpacity={0.799} />
		<stop offset={1} stopColor="#c50000" />
	  </linearGradient>
	  <linearGradient
		xlinkHref="#a"
		id="g"
		x1={356.352}
		x2={259.261}
		y1={396.45}
		y2={192.293}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		xlinkHref="#a"
		id="h"
		x1={142.182}
		x2={-113.56}
		y1={394.843}
		y2={235.163}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		xlinkHref="#a"
		id="i"
		x1={244.869}
		x2={-10.873}
		y1={390.486}
		y2={230.805}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		xlinkHref="#a"
		id="j"
		x1={357.841}
		x2={101.245}
		y1={392.722}
		y2={232.508}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		xlinkHref="#a"
		id="k"
		x1={441.836}
		x2={278.207}
		y1={376.868}
		y2={274.701}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient id="b">
		<stop offset={0} stopColor="#edf5ff" />
		<stop offset={1} stopColor="#d5e8fe" />
	  </linearGradient>
	  <linearGradient
		xlinkHref="#b"
		id="l"
		x1={64.768}
		x2={113.767}
		y1={327.059}
		y2={376.058}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		xlinkHref="#b"
		id="m"
		x1={174.158}
		x2={223.157}
		y1={327.059}
		y2={376.058}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		xlinkHref="#b"
		id="n"
		x1={283.548}
		x2={332.547}
		y1={327.059}
		y2={376.058}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		xlinkHref="#b"
		id="o"
		x1={392.938}
		x2={441.937}
		y1={327.059}
		y2={376.058}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		id="p"
		x1={200.292}
		x2={269.872}
		y1={71.501}
		y2={141.08}
		gradientUnits="userSpaceOnUse"
	  >
		<stop offset={0} stopColor="#edf5ff" />
		<stop offset={1} stopColor="#b5dbff" />
	  </linearGradient>
	  <linearGradient
		id="q"
		x1={251.322}
		x2={251.322}
		y1={131.627}
		y2={-65.728}
		gradientUnits="userSpaceOnUse"
	  >
		<stop offset={0} stopColor="#b5dbff" stopOpacity={0} />
		<stop offset={0.243} stopColor="#93cef6" stopOpacity={0.243} />
		<stop offset={0.576} stopColor="#6abfec" stopOpacity={0.576} />
		<stop offset={0.84} stopColor="#51b5e5" stopOpacity={0.84} />
		<stop offset={1} stopColor="#48b2e3" />
	  </linearGradient>
	  <linearGradient id="c">
		<stop offset={0} stopColor="#ff637b" />
		<stop offset={1} stopColor="#e63950" />
	  </linearGradient>
	  <linearGradient
		xlinkHref="#c"
		id="r"
		x1={1788.401}
		x2={1796.056}
		y1={7.194}
		y2={7.194}
		gradientTransform="rotate(68.72 1002.779 -977.166)"
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		xlinkHref="#c"
		id="s"
		x1={2265.838}
		x2={2273.494}
		y1={-1012.507}
		y2={-1012.507}
		gradientTransform="scale(-1) rotate(-58.82 1723.226 1762.953)"
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		xlinkHref="#c"
		id="t"
		x1={1297.626}
		x2={1305.281}
		y1={249.208}
		y2={249.208}
		gradientTransform="scale(-1 1) rotate(-16.2 -66.09 5977.025)"
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient id="d">
		<stop offset={0} stopColor="#ffda2d" />
		<stop offset={1} stopColor="#fdbf00" />
	  </linearGradient>
	  <linearGradient
		xlinkHref="#d"
		id="u"
		x1={200.312}
		x2={292}
		y1={170.187}
		y2={261.875}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		xlinkHref="#d"
		id="v"
		x1={295.081}
		x2={203.622}
		y1={260.426}
		y2={168.967}
		gradientUnits="userSpaceOnUse"
	  />
	  <linearGradient
		id="w"
		x1={286.411}
		x2={214.735}
		y1={251.763}
		y2={180.087}
		gradientUnits="userSpaceOnUse"
	  >
		<stop offset={0} stopColor="#0b799d" />
		<stop offset={1} stopColor="#07485e" />
	  </linearGradient>
	  <linearGradient
		id="x"
		x1={255}
		x2={255}
		y1={282.671}
		y2={310.286}
		gradientUnits="userSpaceOnUse"
	  >
		<stop offset={0} stopColor="#ff9100" stopOpacity={0} />
		<stop offset={1} stopColor="#ff9100" />
	  </linearGradient>
	  <linearGradient
		xlinkHref="#a"
		id="y"
		x1={255}
		x2={255}
		y1={426.151}
		y2={469.441}
		gradientUnits="userSpaceOnUse"
	  />
	  <path
		fill="url(#e)"
		d="M487.362 243.662H22.638C10.135 243.662 0 253.798 0 266.3v174.692c0 12.502 10.135 22.638 22.638 22.638h464.724c12.503 0 22.638-10.135 22.638-22.638V266.3c0-12.502-10.135-22.638-22.638-22.638z"
	  />
	  <path
		fill="url(#f)"
		d="M464.723 270.934H45.277c-10.259 0-18.575 8.316-18.575 18.575v128.273c0 10.259 8.316 18.575 18.575 18.575h419.445c10.259 0 18.575-8.316 18.575-18.575V289.509c.001-10.259-8.315-18.575-18.574-18.575z"
	  />
	  <path
		fill="url(#g)"
		d="m160.499 304.81 158.82 158.82h168.044c12.503 0 22.638-10.135 22.638-22.638v-45.771L358.442 243.662H153.56v43.277c0 7.309 1.511 13.798 6.939 17.871z"
	  />
	  <path
		fill="url(#h)"
		d="M242.505 436.36H105.64l-44.671-44.67c-3.151-1.933-4.68-4.953-4.68-8.879 0-2.84 1.086-5.239 2.614-6.994l7.077-9.072-18.103-18.58c-3.855-1.635-4.704-5.609-4.704-10.598 0-5.681 4.024-11.029 11.018-11.029.656 0 1.754 0 3.282.656l23.951 7.435-1.098-23.294c.227-7.22 4.692-9.49 10.802-9.49 4.595 0 8.7.837 10.55 4.812l22.077 21.313s3.451-1.432 4.537-1.432c3.938 0 7.137 1.446 9.118 4.728l35.935 35.935z"
	  />
	  <path
		fill="url(#i)"
		d="M351.896 436.36H215.031l-44.671-44.671c-3.151-1.933-4.68-4.953-4.68-8.879 0-2.84 1.086-5.239 2.614-6.994l7.077-9.072-18.103-18.58c-3.855-1.635-4.704-5.609-4.704-10.598 0-5.681 4.024-11.029 11.017-11.029.656 0 1.754 0 3.282.656l23.951 7.435-1.098-23.294c.227-7.22 4.692-10.49 10.803-10.49 4.595 0 8.688 1.838 10.55 5.812l21.076 20.312 2.256-.776c1.098-.43 2.196-.656 3.282-.656 3.938 0 7.137 2.447 9.118 5.729z"
	  />
	  <path
		fill="url(#j)"
		d="M461.276 436.36H324.423l-44.671-44.671c-3.151-1.933-5.693-4.953-5.693-8.879 0-2.84 1.098-5.239 2.626-6.994l6.051-8.617 1.026-1.456-17.114-17.579c-3.843-1.635-5.705-5.609-5.705-10.598 0-5.681 5.036-12.03 12.03-12.03.656 0 1.742 0 3.282.656l22.95 7.435-1.098-22.294c.227-7.22 5.681-10.49 11.803-10.49 4.595 0 8.688 1.838 10.55 5.812l21.076 20.312 2.255-.776c1.098-.43 2.184-.656 3.282-.656 3.938 0 7.125 2.447 9.118 5.729l35.935 35.935z"
	  />
	  <path
		fill="url(#k)"
		d="M483.295 348.976v68.802c0 10.264-8.318 18.582-18.57 18.582h-30.922l-44.671-44.671c-3.139-1.933-5.681-4.953-5.681-8.879 0-2.84 1.098-5.239 2.626-6.994l6.051-8.617 1.027-1.456-17.114-17.579c-3.843-1.635-5.704-5.609-5.704-10.598 0-5.681 5.036-12.03 12.03-12.03.656 0 1.742 0 3.27.656l22.962 7.435-1.098-22.294c.215-7.22 5.681-10.49 11.803-10.49 4.595 0 8.688 1.838 10.55 5.812l21.064 20.312 2.268-.776c1.098-.43 2.184-.656 3.282-.656 3.938 0 7.125 2.447 9.118 5.729z"
	  />
	  <path
		fill="url(#l)"
		d="M125.235 376.037c1.093 1.311 1.748 3.935 1.748 6.339 0 6.995-6.995 11.804-13.334 11.804-2.404 0-5.901-.437-8.306-4.153l-14.209-21.86-14.427 22.078c-1.967 3.279-4.59 3.935-7.651 3.935-5.247 0-13.771-4.153-13.771-11.367 0-2.841 1.093-5.246 2.623-6.995l14.427-20.548-22.733-6.558c-5.028-1.093-7.433-5.465-7.433-11.148 0-5.684 5.028-12.023 12.023-12.023.656 0 1.749 0 3.279.656l22.953 7.432-1.094-22.296c.219-7.213 5.684-10.492 11.804-10.492 6.121 0 11.367 3.279 11.586 10.492l-.875 22.734 23.171-7.87c1.093-.437 2.186-.656 3.279-.656 6.777 0 11.367 7.214 11.367 13.553 0 4.372-2.186 8.525-7.432 9.618l-22.297 5.246z"
	  />
	  <path
		fill="url(#m)"
		d="M234.625 376.037c1.093 1.311 1.748 3.935 1.748 6.339 0 6.995-6.995 11.804-13.334 11.804-2.404 0-5.901-.437-8.306-4.153l-14.209-21.86-14.427 22.078c-1.967 3.279-4.59 3.935-7.651 3.935-5.247 0-13.771-4.153-13.771-11.367 0-2.841 1.093-5.246 2.623-6.995l14.427-20.548-22.733-6.558c-5.028-1.093-7.433-5.465-7.433-11.148 0-5.684 5.028-12.023 12.023-12.023.656 0 1.749 0 3.279.656l22.953 7.432-1.094-22.296c.219-7.213 5.684-10.492 11.804-10.492 6.121 0 11.367 3.279 11.586 10.492l-.875 22.734 23.171-7.87c1.093-.437 2.186-.656 3.279-.656 6.777 0 11.367 7.214 11.367 13.553 0 4.372-2.186 8.525-7.432 9.618l-22.297 5.246z"
	  />
	  <path
		fill="url(#n)"
		d="M344.015 376.037c1.093 1.311 1.748 3.935 1.748 6.339 0 6.995-6.995 11.804-13.334 11.804-2.404 0-5.901-.437-8.306-4.153l-14.209-21.86-14.427 22.078c-1.967 3.279-4.59 3.935-7.651 3.935-5.247 0-13.771-4.153-13.771-11.367 0-2.841 1.093-5.246 2.623-6.995l14.427-20.548-22.733-6.558c-5.028-1.093-7.433-5.465-7.433-11.148 0-5.684 5.028-12.023 12.023-12.023.656 0 1.749 0 3.279.656l22.953 7.432-1.094-22.296c.219-7.213 5.684-10.492 11.804-10.492 6.121 0 11.367 3.279 11.586 10.492l-.875 22.734 23.171-7.87c1.093-.437 2.186-.656 3.279-.656 6.777 0 11.367 7.214 11.367 13.553 0 4.372-2.186 8.525-7.432 9.618l-22.297 5.246z"
	  />
	  <path
		fill="url(#o)"
		d="M453.405 376.037c1.093 1.311 1.748 3.935 1.748 6.339 0 6.995-6.995 11.804-13.334 11.804-2.404 0-5.901-.437-8.306-4.153l-14.209-21.86-14.427 22.078c-1.967 3.279-4.59 3.935-7.651 3.935-5.247 0-13.771-4.153-13.771-11.367 0-2.841 1.093-5.246 2.623-6.995l14.427-20.548-22.733-6.558c-5.028-1.093-7.433-5.465-7.433-11.148 0-5.684 5.028-12.023 12.023-12.023.656 0 1.749 0 3.279.656l22.953 7.432-1.094-22.296c.219-7.213 5.684-10.492 11.804-10.492 6.121 0 11.367 3.279 11.586 10.492l-.875 22.734 23.171-7.87c1.093-.437 2.186-.656 3.279-.656 6.777 0 11.367 7.214 11.367 13.553 0 4.372-2.186 8.525-7.432 9.618l-22.297 5.246z"
	  />
	  <path
		fill="url(#p)"
		d="M319.72 126.273h-.246c-6.776 0-12.724-4.333-15.001-10.715-7.805-21.88-28.853-37.525-53.445-37.239-30.791.359-55.36 25.898-55.36 56.692v12.83h-31.946v-13.506c0-48.504 39.462-87.965 87.97-87.965 38.31 0 70.98 24.617 83.019 58.863 3.615 10.281-4.094 21.04-14.991 21.04z"
	  />
	  <path
		fill="url(#q)"
		d="M323.925 126.273h-4.451c-6.776 0-12.724-4.333-15.001-10.715-7.805-21.88-28.853-37.525-53.445-37.239-30.791.359-55.36 25.898-55.36 56.692v12.83h-16.95v-11.202c0-40.235 32.734-72.974 72.974-72.974 36.715 0 67.186 27.265 72.233 62.608z"
	  />
	  <path
		fill="url(#r)"
		d="M360.354 117.503a6.898 6.898 0 0 1 3.919-8.933l10.015-3.907a6.898 6.898 0 0 1 5.014 12.852l-10.015 3.907a6.897 6.897 0 0 1-8.933-3.919z"
	  />
	  <path
		fill="url(#s)"
		d="M359.118 131.804a6.899 6.899 0 0 1 9.473-2.329l9.196 5.567a6.899 6.899 0 0 1-7.144 11.802l-9.196-5.567a6.898 6.898 0 0 1-2.329-9.473z"
	  />
	  <path
		fill="url(#t)"
		d="M349.762 107.817a6.897 6.897 0 0 0 8.547-4.7l2.998-10.323a6.897 6.897 0 1 0-13.248-3.846l-2.998 10.323a6.896 6.896 0 0 0 4.701 8.546z"
	  />
	  <path
		fill="url(#u)"
		d="M336.111 309.27H173.889c-12.333 0-22.33-9.998-22.33-22.33V162.81c0-12.333 9.998-22.33 22.33-22.33h162.223c12.333 0 22.33 9.998 22.33 22.33v124.13c0 12.332-9.998 22.33-22.331 22.33z"
	  />
	  <path
		fill="url(#v)"
		d="M294.656 208.965c0-21.901-17.755-39.656-39.656-39.656s-39.656 17.755-39.656 39.656c0 15.505 8.904 28.922 21.872 35.443v18.249c0 9.822 7.962 17.784 17.784 17.784s17.784-7.962 17.784-17.784v-18.249c12.969-6.521 21.872-19.938 21.872-35.443z"
	  />
	  <path
		fill="url(#w)"
		d="M255 270.131c-4.121 0-7.475-3.353-7.475-7.475v-24.605l-5.678-2.855c-9.988-5.022-16.193-15.073-16.193-26.232 0-16.182 13.165-29.346 29.346-29.346s29.346 13.165 29.346 29.346c0 11.158-6.205 21.21-16.193 26.232l-5.678 2.855v24.605c0 4.121-3.354 7.475-7.475 7.475z"
	  />
	  <path
		fill="url(#x)"
		d="M151.558 253.143v33.796c0 12.333 9.998 22.33 22.33 22.33h162.223c12.333 0 22.33-9.998 22.33-22.33v-33.796z"
	  />
	  <path
		fill="url(#y)"
		d="M0 394.18v46.812c0 12.503 10.135 22.638 22.638 22.638h464.724c12.503 0 22.638-10.135 22.638-22.638V394.18z"
	  />
	</svg>
  )
