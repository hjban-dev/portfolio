import React from "react";
import styled from "styled-components";
import data from "../../assets/data/blogdata";

function BlogWrap() {
	const blogList = data.blogList.map((list, idx) => (
		<li key={idx}>
			{/* eslint-disable-next-line react/jsx-no-target-blank */}
			<a href={list.link} target="_blank">
				<div className="post-thumb" style={{ backgroundColor: list.bgColor }}>
					<span>{list.title}</span>
				</div>
				<div className="post-cont">
					<div className="blog-group">[ {list.group} ]</div>
					<div className="blog-desc">{list.description}...</div>
				</div>
			</a>
		</li>
	));

	return (
		<StyledBlogWrap>
			<ul>{blogList}</ul>
			<div className="more">
				{/* eslint-disable-next-line react/jsx-no-target-blank */}
				<a href="https://hjban-dev.github.io/" target="_blank">
					MORE POST
				</a>
			</div>
		</StyledBlogWrap>
	);
}

const StyledBlogWrap = styled.div`
	width: 1000px;
	margin: auto;
	padding-bottom: 80px;
	> ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-bottom: 40px;
		> li {
			width: 23.5%;
			margin-bottom: 60px;
			overflow: hidden;
			&:hover {
				.post-thumb {
					span {
						transform: scale(1.1);
					}
				}
			}
			.post-thumb {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 150px;
				padding: 0 10%;
				border-radius: 5px 5px 0 0;
				font-size: 22px;
				font-family: "Do Hyeon", sans-serif;
				text-align: center;
				line-height: 1.3;
				word-break: keep-all;
				span {
					transition: all 0.2s;
				}
			}
			.post-cont {
				padding: 20px 25px 25px 25px;
				border-radius: 0 0 5px 5px;
				background-color: #252525;
				.blog-group {
					margin-bottom: 10px;
					font-size: 20px;
					font-weight: 600;
				}
				.blog-desc {
					font-size: 15px;
				}
			}
		}
	}
	> .more {
		text-align: center;
		a {
			display: inline-block;
			padding: 0px 40px;
			border-radius: 26px;
			background-color: #ffb400;
			font-size: 15px;
			font-weight: 500;
			color: #fff;
			line-height: 46px;
			letter-spacing: 0.5px;
		}
	}
`;

export default BlogWrap;
