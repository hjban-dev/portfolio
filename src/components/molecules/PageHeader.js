import React from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";

function PageHeader(props) {
	const { children } = props;
	return (
		<StyledPageHeader>
			<Heading>{children}</Heading>
			<span className="title-bg">{props.titleBg}</span>
		</StyledPageHeader>
	);
}

const StyledPageHeader = styled.div`
	position: relative;
	padding: 80px 0px 80px 0px;
	text-align: center;
	h1 {
		font-size: 56px;
		font-weight: 900;
		text-transform: uppercase;
		margin: 10px auto;
	}
	.title-bg {
		font-size: 110px;
		left: 0;
		letter-spacing: 10px;
		position: absolute;
		right: 0;
		top: 50%;
		text-transform: uppercase;
		font-weight: 800;
		transform: translateY(-53%);
		opacity: 0.07;
	}
`;

export default PageHeader;
