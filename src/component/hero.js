import React from "react";
import sectionImage from "../images/1.png";

export default function Hero() {
	return (
		<section className="hero">
			<img src={sectionImage} className="img-hero" alt="hero" />
			<h3 className="hero-title">Online Experiences</h3>
			<p className="hero-description">
				Join unique interactive activities led by one-of-a-kind hosts—all
				without leaving home.
			</p>
		</section>
	);
}
