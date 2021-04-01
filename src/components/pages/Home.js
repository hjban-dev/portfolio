import React, { Component } from "react";
import Header from "../organisms/Header";
import Preloader from "../molecules/Preloader";
import HomeTxtWrap from "../organisms/HomeTxtWrap";
import styled from "styled-components";

export class Home extends Component {
	render() {
		return (
			<StyledDiv>
				<Header page="home" />
				<HomeTxtWrap />
				<Preloader />
			</StyledDiv>
		);
	}
}

export default Home;

const StyledDiv = styled.div`
	overflow: hidden;
	@media ${(props) => props.theme.mobile} {
		overflow: auto;
	}
`;
