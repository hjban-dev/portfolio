import React from "react";
import styled from "styled-components";

function PortfolioMini() {
	return (
		<StyledList>
			<ul>
				<li>기아 배너 </li>
				<li>기아 sp2 Maincampaign</li>
				<li>기아 sp2 Unveiling</li>
				<li>삼성 노트북</li>
				<li>삼성 빌트인</li>
				<li>삼성 세탁기</li>
				<li>놀숲</li>
				<li>대신 엔터프라이즈</li>
				<li>안국이앤씨</li>
				<li>동아 도덕</li>
				<li>천재 통합사회</li>
				<li>지학사 영어 중등</li>
				<li>지학사 영어 고등</li>
				<li>지학사 영어 공통</li>
			</ul>
		</StyledList>
	);
}

export default PortfolioMini;

const StyledList = styled.div`
	max-width: 1140px;
	margin: auto;
	padding-bottom: 80px;
	ul {
		display: flex;
		flex-wrap: wrap;
		li {
			width: 20%;
		}
	}
`;
