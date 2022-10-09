import React from "react";
import logo from "../images/logo192.png";
import style from "../style.css";

export default function Nav() {
	return (
		<nav className="nav-items">
			<img src={logo} alt="React logo" width="40px" />
			<h3>ReactFacts</h3>
			<h4>ReactCourse-Project 1</h4>
		</nav>
	);
}
