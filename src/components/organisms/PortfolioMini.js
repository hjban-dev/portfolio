import React from "react";
import styled from "styled-components";

function PortfolioMini() {
	return (
		<StyledList>
			<h2>ETC</h2>
			<ul>
				<li>
					<a href="http://coner.co.kr/project/samsung_galaxy/friday/" target="_blank">
						<i className="far fa-file-alt"></i>
						<p>Samsung Galaxy-Watch, Buds</p>
					</a>
				</li>
				<li>
					<a href="http://coner.co.kr/project/kia_sp2/unveiling/pc/index.html" target="_blank">
						<i className="far fa-file-alt"></i>
						<p>Kia Seltos Unveiling</p>
					</a>
				</li>
				<li>
					<a href="http://coner.co.kr/project/samsungpd/pd/nt930xbe-k38l/" target="_blank">
						<i className="far fa-file-alt"></i>
						<p>Samsung Notebook</p>
					</a>
				</li>
				<li>
					<a href="http://coner.co.kr/project/samsung_builtin/partners/" target="_blank">
						<i className="far fa-file-alt"></i>
						<p>Samsung Built-in Renewal</p>
					</a>
				</li>
				<li>
					<a href="http://coner.co.kr/project/samsungpd/pd/dv14n8520kv/" target="_blank">
						<i className="far fa-file-alt"></i>
						<p>Samsung 건조기 그랑데</p>
					</a>
				</li>
				<li>
					<a href="http://nolsoop.com/" target="_blank">
						<i className="far fa-file-alt"></i>
						<p>놀숲</p>
					</a>
				</li>
				<li>
					<a href="http://www.dselaser.com/ko/" target="_blank">
						<i className="far fa-file-alt"></i>
						<p>대신 엔터프라이즈</p>
					</a>
				</li>
				<li>
					<a href="http://www.ankugenc.com/" target="_blank">
						<i className="far fa-file-alt"></i>
						<p>안국이앤씨</p>
					</a>
				</li>
				<li>
					<i className="far fa-file-alt"></i>
					<p>동아 도덕</p>
				</li>
				<li>
					<i className="far fa-file-alt"></i>
					<p>천재 통합사회</p>
				</li>
				<li>
					<i className="far fa-file-alt"></i>
					<p>지학사 영어 중등, 고등</p>
				</li>
				<li>
					<i className="far fa-file-alt"></i>
					<p>지학사 영어 공통</p>
				</li>
			</ul>
		</StyledList>
	);
}

export default PortfolioMini;

const StyledList = styled.div`
	max-width: 1140px;
	margin: auto;
	padding-bottom: 80px;
	h2 {
		padding-top: 20px;
		margin-bottom: 40px;
		font-size: 26px;
		font-weight: 600;
		text-align: center;
		position: relative;
		&::after {
			content: "";
			position: absolute;
			top: 0px;
			left: 0px;
			right: 0px;
			margin: auto;
			width: 500px;
			height: 1px;
			background-color: rgb(37, 37, 37);
		}
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		width: 80%;
		margin: auto;
		li {
			width: 30%;
			margin-bottom: 4px;

			i {
				margin-right: 8px;
				vertical-align: top;
				line-height: 26px;
				color: ${(props) => props.theme.mainColor};
			}
			p {
				display: inline-block;
			}
		}
	}
	@media ${(props) => props.theme.laptop} {
		width: 80%;
		> ul {
			> li {
			}
		}
	}
	@media ${(props) => props.theme.tablet} {
		width: 80%;
		> ul {
			li {
			}
		}
	}
`;
