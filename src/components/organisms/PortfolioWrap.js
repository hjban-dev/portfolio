import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CssConfig from "../../assets/config";
import data from "../../assets/data/portfoilodata";
import { Link } from "react-router-dom";

function PortfolioWrap() {
	var portList = document.querySelectorAll(".port-list");
	const [Mount, setMount] = useState(false);

	useEffect(() => {
		for (var i = 0; i < portList.length; i++) {
			portList[i].addEventListener("mouseenter", (e) => {
				mouseEnter(e.offsetX, e.offsetY);
			});
			// portList[i].addEventListener("mouseleave", (e) => console.log(e));
		}
		setMount(true);
	}, [Mount]);

	function mouseEnter(x, y) {
		console.log(x, y);
		// for (var i = 0; i < portList.length; i++) {
		// 	portList[i].mouseEnter = function (e) {
		// 		console.log(e);
		// 	};
		// }
	}

	const portfolioList = data.portfolioList.map((list, idx) => (
		<li
			key={idx}
			className="port-list"
			// onMouseEnter={(e) => {
			// 	mouseEnter(e.screenX);
			// }}
		>
			<Link to={`/projects/${list.name}`}>
				{/* <div className="logo">
					{list.project === "Toy" && (
						<div className="toy">
							<i className="fas fa-cubes"></i>
						</div>
					)}
					<img src={`/images/logo/${list.logo}.png`} alt="" />
				</div> */}
				<div className="txt-wrap">
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
				<div className="test">test</div>
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
	max-width: 1000px;
	margin: auto;
	> ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		> li {
			position: relative;
			width: 32%;
			margin-bottom: 20px;
			padding: 20px;
			background-color: #191919;
			border-radius: 2px;
			position: relative;
			overflow: hidden;
			transition: color 0.25s;
			.test {
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0px;
				top: 0px;
				background-color: #ffb400;
				transition: all 300ms ease 0s;
			}
			.toy {
				position: absolute;
				top: 5px;
				right: 15px;
				font-size: 30px;
				color: ${CssConfig.mainColor};
			}
			.logo {
				img {
					background: #fff;
					border-radius: 1px;
					padding: 3px;
					height: 18px;
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
