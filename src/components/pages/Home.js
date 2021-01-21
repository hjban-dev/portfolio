import React, { Component } from "react";
import Header from "../organisms/Header";

import AboutTxtWrap from "../organisms/AboutTxtWrap";

export class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<AboutTxtWrap />
			</div>
		);
	}
}

export default Home;
