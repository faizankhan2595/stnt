import React from 'react'
// import { APP_NAME } from 'configs/AppConfig';

export default function Footer() {
	return (
		<footer className="footer d-flex justify-content-between">
			<span>Copyright  &copy;  {`${new Date().getFullYear()}`} ST&T Intrenational. All Rights Reserved</span>
			<span>Term & Conditions | Privacy & Policy</span>
		</footer>
	)
}

