import React from "react";
import backgroundLogo from "../images/logo512.png";

export default function Main() {
	return (
		<main className="main-container">
			<h2 className="list-title">Fun Facts about React</h2>
			<ul className="list-items">
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100k on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thoussands of enterprise apps, including mobile apps</li>
			</ul>
			<img className="background-logo" />
		</main>
	);
}
