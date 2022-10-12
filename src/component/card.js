import React from "react";
import star from "../images/i.png";

export default function Card(props) {
	return (
		<div className="card">
			<img
				src="
            imagess/r.png"
				className="card--image"
				alt="cr7"
			/>
			<div className="card--stats">
				<img src={star} className="card--star" alt="star" />
				<span>5.0</span>
				<span className="gray">(6) • </span>
				<span className="gray">props.country</span>
			</div>
			<p>Life Lessons with cristino ronaldo</p>
			<p>
				<span className="bold">From $136</span> / person
			</p>
		</div>
	);
}
