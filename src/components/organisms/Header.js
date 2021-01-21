import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CssConfig from "../../assets/config";

function Header() {
	return (
		<StyledHeader>
			<ul>
				<li className="active">
					<Link to="/">
						<span>About</span>
						<i className="fas fa-user"></i>
					</Link>
				</li>
				<li>
					<Link to="/skills">
						<span>Skills</span>
						<i className="fas fa-laptop-code"></i>
					</Link>
				</li>
				<li>
					<Link to="/projects">
						<span>Projects</span>
						<i className="fas fa-tasks"></i>
					</Link>
				</li>
				<li>
					<Link to="/blog">
						<span>Blog</span>
						<i className="fas fa-book"></i>
					</Link>
				</li>
				<li>
					<Link to="/github">
						<span>Github</span>
						<i className="fab fa-github"></i>
					</Link>
				</li>
			</ul>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	position: fixed;
	right: 20px;
	top: 0;
	bottom: 0;
	z-index: 100;
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
					background-color: ${CssConfig.mainColor};
				}
			}
			&:hover {
				a {
					padding: 13px 14px 13px 18px;
					background-color: ${CssConfig.mainColor};
					span {
						position: relative;
						opacity: 1;
						padding-right: 7px;
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
					font-size: 18px;
					font-weight: 600;
					letter-spacing: 0.5px;
					line-height: 1;
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
