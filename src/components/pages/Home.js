import React, { Component } from "react";
import Header from "../organisms/Header";
import Preloader from "../molecules/Preloader";
import HomeTxtWrap from "../organisms/HomeTxtWrap";

export class Home extends Component {
	render() {
		return (
			<div>
				<Header page="home" />
				<HomeTxtWrap />
				<Preloader />
			</div>
		);
	}
}

export default Home;
