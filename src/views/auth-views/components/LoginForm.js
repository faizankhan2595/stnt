import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Button, Form, Input, Divider, Alert } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { GoogleSVG, FacebookSVG } from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import {
	showLoading,
	showAuthMessage,
	hideAuthMessage,
	authenticated
} from 'redux/actions/Auth';
import JwtAuthService from 'services/JwtAuthService'
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import axios from 'axios';

export const LoginForm = (props) => {
	let history = useHistory();

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post('https://api.stntinternational.com/api/auth/login', {
				username: username,
				password: password
			});

			const data = response.data;
			localStorage.setItem('token', data.token);
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
		allowRedirect
	} = props

	const onLogin = values => {
		showLoading()
		const fakeToken = 'fakeToken'
		JwtAuthService.login(values).then(resp => {
			authenticated(fakeToken)
		}).then(e => {
			showAuthMessage(e)
		})
	};

	const onGoogleLogin = () => {
		showLoading()
	}

	const onFacebookLogin = () => {
		showLoading()
	}

	useEffect(() => {
		if (token !== null && allowRedirect) {
			history.push(redirect)
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
	)

	return (
		<>
			<motion.div
				initial={{ opacity: 0, marginBottom: 0 }}
				animate={{
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0
				}}>
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form
				layout="vertical"
				name="login-form"
				onFinish={onLogin}
			>
				<Form.Item
					name="email"
					label="Email"
					rules={[
						{
							required: true,
							message: 'Please input your email',
						},
						{
							type: 'email',
							message: 'Please enter a valid email!'
						}
					]}>
					<Input
						value="username"
						onChange={e => setUsername(e.target.value)}
						prefix={<MailOutlined className="text-primary" />} />
				</Form.Item>
				<Form.Item
					name="password"
					label={
						<div className={`${showForgetPassword ? 'd-flex justify-content-between w-100 align-items-center' : ''}`}>
							<span>Password</span>
							{
								showForgetPassword &&
								<span
									onClick={() => onForgetPasswordClick}
									className="cursor-pointer font-size-sm font-weight-normal text-muted"
								>
									Forget Password?
								</span>
							}
						</div>
					}
					rules={[
						{
							required: true,
							message: 'Please input your password',
						}
					]}
				>
					<Input.Password
						value="password"
						onChange={e => setPassword(e.target.value)}
						prefix={<LockOutlined className="text-primary" />}
					/>
					
				</Form.Item>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						block loading={loading}
						style={{ backgroundColor: '#41C1B2', border: 'none' }}
						onClick={handleSubmit}
					>
						Log In
					</Button>

				</Form.Item>
				{
					otherSignIn ? renderOtherSignIn : null
				}
				{extra}
			</Form>
		</>
	)
}

LoginForm.propTypes = {
	otherSignIn: PropTypes.bool,
	showForgetPassword: PropTypes.bool,
	extra: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
};

LoginForm.defaultProps = {
	otherSignIn: true,
	showForgetPassword: false
};

const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect } = auth;
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	showAuthMessage,
	showLoading,
	hideAuthMessage,
	authenticated
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
