import React from "react";
import styled from "styled-components";
import imgSrc from "../../assets/images/home1.jpg";
import Heading from "../atoms/Heading";
import CssConfig from "../../assets/config";

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
						<span>
							<b>STEVE MILNERA</b>
						</span>
					</Heading>
					<p>I’m a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
				</div>
				<section>
					<Heading level="2">PERSONAL INFOS</Heading>
					<ul>
						<li>
							<span>Name : </span>Steve
						</li>
						<li>
							<span>Age : </span>Steve
						</li>
						<li>
							<span>Address : </span>Steve
						</li>
						<li>
							<span>Phone : </span>Steve
						</li>
						<li>
							<span>Email : </span>Steve
						</li>
						<li>
							<span>Name : </span>Steve
						</li>
						<li>
							<span>Name : </span>Steve
						</li>
					</ul>
				</section>
				<button>MORE ABOUT ME</button>
			</div>
		</StyledHome>
	);
}

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
			background-color: ${CssConfig.mainColor};
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
				span {
					color: ${CssConfig.mainColor};
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
					color: ${CssConfig.mainColor};
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
			background-color: ${CssConfig.mainColor};
			font-size: 15px;
			font-weight: 500;
			color: #fff;
			line-height: 46px;
			letter-spacing: 0.5px;
		}
	}
`;

export default AboutTxtWrap;
