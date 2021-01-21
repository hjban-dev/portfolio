import React from "react";
import styled from "styled-components";

function PortfolioWrap() {
	return (
		<StyledPortWrap>
			<ul>
				<li>
					<div className="name">Instagram</div>
					<span className="time">19.10.14 ~ 19.10.24</span>
					<p>
						<span className="label">Description</span>온라인 음식 배달 서비스 요기요 클론 프로젝트입니다. 백엔드 개발자 2명, 프론트엔드 개발자 3명과 협업하여 2주동안 개발했습니다.
					</p>
					<div className="tech">
						<span className="label">Tech Stack</span>
						<ul>
							<li>Html & CSS</li>
							<li>Javascript</li>
							<li>React</li>
						</ul>
					</div>
				</li>
				<li>
					<div className="name">Instagram</div>
					<span className="time">19.10.14 ~ 19.10.24</span>
					<p>
						<span className="label">Description</span>온라인 음식 배달 서비스 요기요 클론 프로젝트입니다. 백엔드 개발자 2명, 프론트엔드 개발자 3명과 협업하여 2주동안 개발했습니다.
					</p>
					<div className="tech">
						<span className="label">Tech Stack</span>
						<ul>
							<li>Html & CSS</li>
							<li>Javascript</li>
							<li>React</li>
						</ul>
					</div>
				</li>
				<li>
					<div className="name">Instagram</div>
					<span className="time">19.10.14 ~ 19.10.24</span>
					<p>
						<span className="label">Description</span>온라인 음식 배달 서비스 요기요 클론 프로젝트입니다. 백엔드 개발자 2명, 프론트엔드 개발자 3명과 협업하여 2주동안 개발했습니다.
					</p>
					<div className="tech">
						<span className="label">Tech Stack</span>
						<ul>
							<li>Html & CSS</li>
							<li>Javascript</li>
							<li>React</li>
						</ul>
					</div>
				</li>
				<li>
					<div className="name">Instagram</div>
					<span className="time">19.10.14 ~ 19.10.24</span>
					<p>
						<span className="label">Description</span>온라인 음식 배달 서비스 요기요 클론 프로젝트입니다. 백엔드 개발자 2명, 프론트엔드 개발자 3명과 협업하여 2주동안 개발했습니다.
					</p>
					<div className="tech">
						<span className="label">Tech Stack</span>
						<ul>
							<li>Html & CSS</li>
							<li>Javascript</li>
							<li>React</li>
						</ul>
					</div>
				</li>
			</ul>
		</StyledPortWrap>
	);
}

const StyledPortWrap = styled.div`
	width: 1000px;
	margin: auto;
	> ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		> li {
			width: 32%;
			margin-bottom: 20px;
			padding: 20px;
			background-color: #191919;
			border-radius: 2px;
			text-align: center;
			.name {
				font-weight: 500;
				font-size: 22px;
				line-height: 1.3;
			}
			.time {
				font-size: 14px;
			}
			p {
				padding: 10px 0;
				font-size: 14px;
			}
			.tech {
				padding: 10px 0 0;
				ul {
					display: flex;
					flex-wrap: wrap;
					padding-top: 3px;

					li {
						padding: 4px;
						margin: 0 2px 5px;
						border: 1px solid #fff;
						border-radius: 2px;
						font-size: 13px;
						line-height: 1;
					}
				}
			}
			span.label {
				display: block;
				font-size: 12px;
				font-weight: 500;
			}
		}
	}
`;

export default PortfolioWrap;
