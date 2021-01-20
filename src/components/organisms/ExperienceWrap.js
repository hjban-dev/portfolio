import React from "react";
import data from "../../assets/data/skilldata";
import CssConfig from "../../assets/config";
import styled from "styled-components";
import Heading from "../atoms/Heading";

function ExperienceWrap() {
	return (
		<StyledExpWrap>
			<div className="experience">
				<ul>
					<li>
						<div className="icon">
							<i class="far fa-building"></i>
						</div>
						<span className="time">2018 - PRESENT</span>
						<Heading level="4">
							WEB DEVELOPER<span className="place">ENVATO</span>
						</Heading>
						<p>클래스101에서 백엔드 개발자로 1개월동안 인턴쉽 프로그램을 진행하였습니다. 사내 EX팀의 어드민 대시보드를 개발했습니다.</p>
					</li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<div className="education">
				<ul>
					<li>
						<div className="icon">
							<i class="fas fa-graduation-cap"></i>
						</div>
						<span className="time">2018 - PRESENT</span>
						<Heading level="4">
							WEB DEVELOPER<span className="place">ENVATO</span>
						</Heading>
						<p>클래스101에서 백엔드 개발자로 1개월동안 인턴쉽 프로그램을 진행하였습니다. 사내 EX팀의 어드민 대시보드를 개발했습니다.</p>
					</li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</StyledExpWrap>
	);
}

const StyledExpWrap = styled.div`
	display: flex;
	justify-content: space-between;
	> div {
		width: 50%;
		> ul {
			> li {
				position: relative;
				padding: 0 20px 0 60px;
				margin: 0 0 50px;
				&::after {
					content: "";
					position: absolute;
					top: 0;
					left: 20px;
					bottom: 0;
					border-left: 1px solid #333;
				}
				.icon {
					position: absolute;
					left: 0;
					right: 0;
					z-index: 1;
					width: 40px;
					height: 40px;
					border-radius: 50%;
					text-align: center;
					line-height: 40px;
					background-color: ${CssConfig.mainColor};
				}
				.time {
					display: inline-block;
					padding: 1px 10px;
					margin-bottom: 12px;
					border-radius: 20px;
					background-color: #252525;
					font-size: 12px;
					font-weight: 600;
					opacity: 0.8;
				}
				> h4 {
					margin: 7px 0 10px;
					font-size: 18px;
					font-weight: 500;
					opacity: 0.8;
					span {
						position: relative;
						padding-left: 26px;
						font-size: 15px;
						font-weight: 600;
						opacity: 0.6;
						&::before {
							position: absolute;
							content: "";
							width: 10px;
							height: 2px;
							background-color: #fff;
							left: 7px;
							top: 9px;
							opacity: 0.8;
						}
					}
				}
				> p {
					font-size: 14px;
				}
			}
		}
	}
`;

export default ExperienceWrap;
