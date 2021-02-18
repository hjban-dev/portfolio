import React, { Component } from "react";
import Header from "../organisms/Header";
import Preloader from "../molecules/Preloader";
import AboutTxtWrap from "../organisms/AboutTxtWrap";

export class Home extends Component {
	render() {
		return (
			<div>
				<Header page="home" />
				<AboutTxtWrap />
				<Preloader />
			</div>
		);
	}
}

export default Home;
