import React from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";

function DetailWrap(props) {
	// console.log(props.project);

	const imgList = props.project.image.map((img, idx) => (
		<li key={idx}>
			<Heading level="3">{img.tit !== "" && "🔷 " + img.tit + " 🔷"}</Heading>
			<p>{img.desc !== "" && "▶ " + img.desc} </p>
			<img src={`../images/project/${img.name}`} alt="" />
		</li>
	));

	return (
		<StyledDetail>
			<article>
				<div className="tit-wrap">
					<ul className="meta-data">
						<li>
							<i className="fas fa-user"></i>
							{props.project.percent}
						</li>
						<li>
							<i className="far fa-calendar-alt"></i>
							{props.project.period}
						</li>
						<li>
							<i className="far fa-building"></i>
							{props.project.project}
						</li>
					</ul>
					<Heading level="2">{props.project.name} PROJECT</Heading>
					<ul className="tech">
						{props.project.tech.map((list, idx) => (
							<li key={idx}>{list}</li>
						))}
					</ul>
				</div>
				<div className="body-wrap">
					{/* <img src="../images/project/post.jpg" alt="" /> */}
					<div>
						<p>{props.project.description}</p>
						<div className="link">
							{props.project.link && (
								<a href={props.project.link} target="_blank" rel="noopener noreferrer">
									<i className="far fa-file-alt"></i>
									Project : <span>Link</span>
								</a>
							)}
							{props.project.github && (
								<a href={props.project.github} target="_blank" rel="noopener noreferrer">
									<i className="fab fa-github"></i>
									Github : <span>Link</span>
								</a>
							)}
						</div>
					</div>
					<ul>{props.project.image && imgList}</ul>
				</div>
			</article>
		</StyledDetail>
	);
}

const StyledDetail = styled.div`
	max-width: 800px;
	margin: 0 auto;
	.tit-wrap {
		.meta-data {
			display: flex;
			font-size: 13px;
			li {
				margin-right: 20px;
				line-height: 16px;
				i {
					margin-right: 8px;
					font-size: 16px;
					color: ${(props) => props.theme.mainColor};
					vertical-align: top;
				}
			}
		}
		h2 {
			margin: 6px 0 0;
			font-weight: 600;
			font-size: 32px;
		}
		.tech {
			display: flex;
			flex-wrap: wrap;
			margin-left: -2px;
			margin-bottom: 10px;
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
	.body-wrap {
		p {
			white-space: pre-line;
		}
		.link {
			margin-top: 16px;
			a {
				margin-bottom: 2px;
				i {
					margin-right: 8px;
					min-width: 14px;
					text-align: center;
					color: ${(props) => props.theme.mainColor};
					vertical-align: middle;
				}
				span {
					color: ${(props) => props.theme.mainColor};
				}
			}
			a:nth-child(2) {
				margin-left: 20px;
			}
		}

		ul {
			li {
				margin: 20px 0 10px;
				padding-bottom: 20px;
				/* border-bottom: 1px solid #424242; */
				h3 {
					margin-bottom: 5px;
					font-size: 20px;
					font-weight: 600;
				}
				p {
					margin-bottom: 20px;
				}
				img {
					width: 100%;
				}
			}
		}
	}
`;

export default DetailWrap;
