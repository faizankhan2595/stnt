import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Row, Col } from "antd";
import { useSelector } from 'react-redux';
import './login2.css';

const backgroundURL = '/img/others/login-page-bg.svg'
const backgroundStyle = {
	backgroundImage: `url(${backgroundURL})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'contain'
}

const LoginTwo = props => {
	const theme = useSelector(state => state.theme.currentTheme)

	return (
		<div className={`h-100 ${theme === 'light' ? 'bg-white' : ''}`}>
			<Row justify="center" className="align-items-stretch h-100">
				<Col xs={0} sm={0} md={0} lg={10}>
					<div className="bg-holder">
						<div className="vector-holder">
							<img src="/img/others/login-vector.png" alt="vector" className="img-fluid" />
						</div>
						<div className="welcome-note">Welcome to<br></br>STNT CRM</div>
						<div className="design-element-1"></div>
						<div className="design-element-2"></div>
					</div>
				</Col>
				<Col xs={20} sm={20} md={24} lg={14}>
					<div className="container d-flex flex-column justify-content-center h-100">
						<div className="d-flex justify-content-center mb-3">
							<img src="/img/stntlogo.svg" alt="logo" className="logo" />
						</div>
						<Row justify="center">
							<Col xs={24} sm={24} md={20} lg={12} xl={8}>
								<div style={{textAlign:'center'}}>
								<h1>Login</h1>
								</div>
								{/* <p>Don't have an account yet? <a href="/auth/register-2">Sign Up</a></p> */}
								<p style={{textAlign:'center'}}>Please enter username & password below to get started.</p>
								<div className="mt-4">
									<LoginForm {...props} />
								</div>
							</Col>
						</Row>
					</div>
				</Col>

			</Row>
		</div>
	)
}

export default LoginTwo
