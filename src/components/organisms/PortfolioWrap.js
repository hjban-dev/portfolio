import React from "react";
import styled from "styled-components";
import CssConfig from "../../assets/config";
import data from "../../assets/data/portfoilodata";
import { Link } from "react-router-dom";

function PortfolioWrap() {
	const portfolioList = data.portfolioList.map((list, idx) => (
		<li key={idx}>
			<Link to={`/projects/${list.name}`}>
				<div className="txt-wrap">
					{/* <div className="logo">
						<img src={`/images/${list.logo}.png`} alt="" />
					</div> */}
					<div className="name">{list.name}</div>
					<span className="time">{list.period}</span>
					<p>
						<span className="label">Description</span>
						{list.description}
					</p>
					<div className="tech">
						<span className="label">Tech Stack</span>
						<ul>
							{list.tech.map((list, idx) => (
								<li key={idx}>{list}</li>
							))}
						</ul>
					</div>
				</div>
			</Link>
		</li>
	));

	return (
		<StyledPortWrap>
			<ul>{portfolioList}</ul>
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
			position: relative;
			overflow: hidden;
			transition: color 0.25s;
			&::before,
			&::after {
				content: "";
				box-sizing: inherit;
				position: absolute;
				width: 100%;
				height: 100%;
				border: 2px solid transparent;
				width: 0;
				height: 0;
			}

			&::before {
				top: 0;
				left: 0;
			}

			&::after {
				bottom: 0;
				right: 0;
			}

			&:hover {
				&::before,
				&::after {
					width: 100%;
					height: 100%;
				}
				&::before {
					border-top-color: ${CssConfig.mainColor};
					border-right-color: ${CssConfig.mainColor};
					transition: width 0.15s ease-out, height 0.15s ease-out 0.15s;
				}
				&::after {
					border-bottom-color: ${CssConfig.mainColor};
					border-left-color: ${CssConfig.mainColor};
					transition: border-color 0s ease-out 0.3s, width 0.15s ease-out 0.3s, height 0.15s ease-out 0.45s;
				}
			}
			.logo {
				img {
					background: #fff;
					border-radius: 2px;
					padding: 5px;
				}
			}
			.txt-wrap {
				position: relative;
				z-index: 1;
				.name {
					font-weight: 500;
					font-size: 22px;
					line-height: 1.3;
					color: ${CssConfig.mainColor};
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
						margin-left: -2px;
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
					padding-bottom: 3px;
					font-size: 12px;
					font-weight: 500;
				}
			}
		}
	}

	.draw {
	}
`;

export default PortfolioWrap;
