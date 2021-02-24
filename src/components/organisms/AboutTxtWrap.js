import React from "react";
import styled, { keyframes } from "styled-components";
import imgSrc from "../../assets/images/home1.jpg";
import Heading from "../atoms/Heading";

function AboutTxtWrap() {
	return (
		<StyledHome>
			<div className="left">
				<div className="color-block"></div>
				<div className="img-box"></div>
			</div>
			<div className="right">
				<div className="tit-wrap">
					<Heading level="2">HI THERE!</Heading>
					<Heading>
						I'M{" "}
						<span className="message">
							<strong>HYEJU BAN</strong>
							<strong>WEB DEVELOPER</strong>
							<strong>UX/UI PUBLISHER</strong>
						</span>
					</Heading>
					<p>I’m a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
				</div>
				<section>
					<Heading level="2">PERSONAL INFOS</Heading>
					<ul>
						<li>
							<span>Name : </span>반혜주
						</li>
						<li>
							<span>Age : </span>26, 1996.02
						</li>
						<li>
							<span>Phone : </span>010.5103.2212
						</li>
						<li>
							<span>Address : </span>서울시 은평구
						</li>
						<li>
							<span>Email : </span>baneju212@naver.com
						</li>
						{/* <li>
							<span>Name : </span>Steve
						</li>
						<li>
							<span>Name : </span>Steve
						</li> */}
					</ul>
				</section>
				<button>MORE ABOUT ME</button>
			</div>
		</StyledHome>
	);
}

const openclose = keyframes`
	0% {
		top: 0;
		width: 0;
	}
	1% {
		width: 0;
	}
	11% {
		width: 100%;
	}
	22% {
		width: 100%;
	}
	32% {
		top: 0;
		width: 0;
	}
	33% {
		top: -4.5rem;
	}
	34% {
		width: 0;
	}
	44% {
		width: 100%;
	}
	55% {
		width: 100%;
	}
	65% {
		top: -4.5rem;
		width: 0;
	}
	66%{
		top: -9rem;
	}
	67% {
		width: 0;
	}
	77% {
		width: 100%;
	}
	89% {
		width: 100%;
	}
	99% {
		top: -9rem;
		width: 0;
	}
	100% {
		top: 0;
		width: 0;
	}
`;

const StyledHome = styled.main`
	display: flex;
	height: 100%;
	.left {
		flex: 0 0 35%;
		position: relative;
		overflow: hidden;
		.color-block {
			position: absolute;
			top: -60%;
			left: -100%;
			z-index: -1;
			width: 150%;
			height: 200%;
			transform: rotate(-13deg);
			background-color: ${(props) => props.theme.mainColor};
		}
		.img-box {
			height: 90vh;
			margin: 5vh 0 0 30px;
			background-image: url(${imgSrc});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: top;
			border-radius: 15px;
			box-shadow: 0 0 7px rgba(0, 0, 0, 0.9);
		}
	}
	.right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 0 10% 0 7%;
		.tit-wrap {
			max-width: 570px;
			margin-bottom: 40px;
			h2 {
				font-size: 22px;
			}
			h1 {
				margin-bottom: 20px;
				font-size: 45px;
				font-weight: bold;
				white-space: nowrap;
				overflow: hidden;
				position: relative;
				.message {
					display: block;
					overflow: hidden;
					position: absolute;
					top: 0;
					left: 80px;
					animation: ${openclose} 8s ease-in-out infinite;
					strong {
						display: block;
						color: ${(props) => props.theme.mainColor};
					}
				}
			}
			p {
				font-size: 16px;
				line-height: 1.6;
			}
		}
		section {
			margin-bottom: 40px;
			h2 {
				margin-bottom: 20px;
				font-size: 26px;
				font-weight: 600;
			}
			ul {
				display: flex;
				flex-wrap: wrap;
				li {
					width: 50%;
					padding-bottom: 10px;
					font-size: 16px;
					font-weight: 500;
					color: ${(props) => props.theme.mainColor};
					span {
						font-weight: 400;
						opacity: 0.8;
						color: #fff;
					}
				}
			}
		}
		button {
			padding: 0px 40px;
			border-radius: 26px;
			background-color: ${(props) => props.theme.mainColor};
			font-size: 15px;
			font-weight: 500;
			color: #fff;
			line-height: 46px;
			letter-spacing: 0.5px;
		}
	}
`;

export default AboutTxtWrap;
