import React from "react";
import Nav from "./component/nav";
import Hero from "./component/hero";
import Card from "./component/card";

export default function App() {
	return (
		<div className="container">
			<Nav />
			<Hero />
			<Card />
		</div>
	);
}
