import React from "react";
import logo from "../images/Airbnb-Logo.png";

export default function Nav() {
	return (
		<nav className="nav-conatiner">
			<img src={logo} alt="Airbnb logo" className="nav-items" />
		</nav>
	);
}
