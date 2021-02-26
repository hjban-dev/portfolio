import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header(props) {
	const [Load, setLoad] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
		}, 700);
		return () => setLoad(false);
	}, []);

	return (
		<StyledHeader className={`${Load ? "on" : ""}`}>
			<ul>
				<li className={props.page === "home" ? "active" : ""}>
					<Link to="/">
						<span>Home</span>
						<i className="fas fa-home"></i>
					</Link>
				</li>
				<li className={props.page === "about" ? "active" : ""}>
					<Link to="/about">
						<span>About</span>
						<i className="fas fa-user"></i>
					</Link>
				</li>
				<li className={props.page === "projects" ? "active" : ""}>
					<Link to="/projects">
						<span>Projects</span>
						<i className="fas fa-tasks"></i>
					</Link>
				</li>
				<li className={props.page === "blog" ? "active" : ""}>
					<Link to="/blog">
						<span>Blog</span>
						<i className="fas fa-book"></i>
					</Link>
				</li>
				<li>
					{/* eslint-disable-next-line react/jsx-no-target-blank */}
					<a href="https://github.com/hjban-dev" target="_blank">
						<span>Github</span>
						<i className="fab fa-github"></i>
					</a>
				</li>
			</ul>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	position: fixed;
	right: 20px;
	top: 60px;
	bottom: 0;
	z-index: 100;
	opacity: 0;
	&.on {
		top: 0;
		opacity: 1;
		transition: all 0.85s;
	}
	ul {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
		height: 100%;
		li {
			position: relative;
			&:not(:last-child) {
				margin: 0 0 20px 0;
			}
			&.active {
				a {
					background-color: ${(props) => props.theme.mainColor};
				}
			}
			&:hover {
				a {
					padding: 13px 14px 13px 25px;
					background-color: ${(props) => props.theme.mainColor};
					span {
						position: relative;
						opacity: 1;
						padding-right: 10px;
						color: #fff;
					}
				}
			}
			a {
				display: inline-block;
				padding: 13px 14px;
				border-radius: 30px;
				background: #2b2a2a;
				transition: all 0.2s;
				span {
					position: absolute;
					right: 0px;
					display: inline-block;
					opacity: 0;
					font-size: 16px;
					font-weight: 600;
					letter-spacing: 0.5px;
					line-height: 1.2;
					text-transform: uppercase;
					vertical-align: text-top;
					transition: opacity 0.3s ease, padding 0.3s ease;
					color: transparent;
				}
				i {
					width: 25px;
					height: 25px;
					font-size: 20px;
					text-align: center;
					line-height: 25px;
				}
			}
		}
	}
`;

export default Header;
