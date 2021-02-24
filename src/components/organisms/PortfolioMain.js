import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../../assets/data/portfoilodata";
import { Link } from "react-router-dom";

function PortfolioMain(props) {
	var portList = document.querySelectorAll(".port-list");
	const [Mount, setMount] = useState(false);

	useEffect(() => {
		for (var i = 0; i < portList.length; i++) {
			portList[i].index = i;

			portList[i].addEventListener("mouseenter", (e) => {
				mouseEnter(e);
			});
			portList[i].addEventListener("mouseleave", (e) => {
				mouseLeave(e);
			});
		}
		setMount(true);
	}, [Mount]);

	function mouseEnter(e) {
		let logo = e.target.children[0].children[1];
		let width = e.target.clientWidth - 20;
		let height = e.target.clientHeight - 20;

		if (e.offsetY < 20) {
			logo.style.top = "-100%";
			logo.style.left = 0;
			logo.style.transition = "";
			setTimeout(function () {
				logo.style.transition = "all 300ms";
				logo.style.left = 0;
				logo.style.top = 0;
			}, 100);
		} else if (e.offsetX > width) {
			logo.style.top = 0;
			logo.style.left = "100%";
			logo.style.transition = "";
			setTimeout(function () {
				logo.style.transition = "all 300ms";
				logo.style.left = 0;
				logo.style.top = 0;
			}, 100);
		} else if (e.offsetY > height) {
			logo.style.top = "100%";
			logo.style.left = 0;
			logo.style.transition = "";
			setTimeout(function () {
				logo.style.transition = "all 300ms";
				logo.style.left = 0;
				logo.style.top = 0;
			}, 100);
		} else if (e.offsetX < 20) {
			logo.style.top = 0;
			logo.style.left = "-100%";
			logo.style.transition = "";
			setTimeout(function () {
				logo.style.transition = "all 300ms";
				logo.style.left = 0;
				logo.style.top = 0;
			}, 100);
		}
	}

	function mouseLeave(e) {
		let logo = e.target.children[0].children[1];
		let width = e.target.clientWidth - 20;
		let height = e.target.clientHeight - 20;

		if (e.offsetY < 20) {
			setTimeout(function () {
				logo.style.top = "-100%";
				logo.style.left = 0;
			}, 150);
		} else if (e.offsetX > width) {
			setTimeout(function () {
				logo.style.top = 0;
				logo.style.left = "100%";
			}, 150);
		} else if (e.offsetY > height) {
			setTimeout(function () {
				logo.style.top = "100%";
				logo.style.left = 0;
			}, 150);
		} else if (e.offsetX < 20) {
			setTimeout(function () {
				logo.style.top = 0;
				logo.style.left = "-100%";
			}, 150);
		}
	}

	const portfolioList = data.portfolioList.map((list, idx) => (
		<li key={idx} className="port-list">
			<Link to={`/projects/${list.name}`}>
				<div>
					{list.project === "Toy" && (
						<div className="toy">
							{/* <i class="fas fa-baby-carriage"></i> */}
							<img src="/images/toy.png" alt="" />
						</div>
					)}

					<div className="info-wrap">
						<div className="txt-wrap">
							<div className="name">{list.name}</div>
							<span className="time">{list.period}</span>
							<p>
								<span className="label">Description</span>
								{list.description}
							</p>
						</div>
						<div className="tech">
							<span className="label">Tech Stack</span>
							<ul>
								{list.tech.map((list, idx) => (
									<li key={idx}>{list}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="logoWrap">
					<div className="logo">
						<img src={`/images/logo/${list.logo}.png`} alt="" />
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
	width: 85%;
	max-width: 1140px;
	margin: auto;
	padding-bottom: 80px;
	> ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		> li {
			position: relative;
			width: 32%;
			min-height: 320px;
			margin-bottom: 2%;
			padding: 20px;
			background-color: #191919;
			border-radius: 2px;
			overflow: hidden;
			a {
				width: 100%;
				height: 100%;
				display: inline-block;
				> div {
					height: 100%;
				}
			}

			.toy {
				position: absolute;
				top: 20px;
				right: 20px;
				font-size: 30px;
				color: ${(props) => props.theme.mainColor};
				img {
					width: 45px;
				}
			}

			.info-wrap {
				position: relative;
				z-index: 1;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.txt-wrap {
					.name {
						font-weight: 500;
						font-size: 22px;
						line-height: 1.3;
						color: ${(props) => props.theme.mainColor};
					}
					.time {
						font-size: 14px;
					}
					p {
						padding: 10px 0;
						font-size: 14px;
					}
				}
				.tech {
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

			.logoWrap {
				position: absolute;
				top: 100%;
				right: 100%;
				z-index: 1;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				text-align: center;
				justify-content: center;
				background-color: #ffb400;
				opacity: 0.92;
				.logo {
					img {
						border-radius: 1px;
						padding: 3px;
					}
				}
			}
		}
	}
	@media ${(props) => props.theme.laptop} {
		width: 80%;
		> ul {
			> li {
				min-height: 220px;
			}
		}
	}
	@media ${(props) => props.theme.tablet} {
		width: 80%;
		> ul {
			li {
				.tech {
					display: none;
				}
			}
		}
	}
`;

export default PortfolioMain;
