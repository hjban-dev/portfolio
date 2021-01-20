import React from "react";
import data from "../../assets/data/skilldata";
import styled from "styled-components";
import CssConfig from "../../assets/config";
import Heading from "../atoms/Heading";

function SkillsWrap() {
	const skilltList = data.skillList.map((list, idx) => (
		<div className="skill-list" key={idx}>
			<Heading level="3" className="skill-label">
				<i className={list.icon}></i>: {list.label}
			</Heading>

			<ul className="skill-detail">
				{list.detail.map((detail, idx) => (
					<li key={idx}>{detail}</li>
				))}
			</ul>
		</div>
	));
	return <StyledSkillsWrap>{skilltList}</StyledSkillsWrap>;
}

const StyledSkillsWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	.skill-list {
		width: calc(33% - 30px);
		margin: 20px 15px;
		padding: 20px 30px 20px 30px;
		border: 1px solid #252525;
		border-radius: 5px;
		.skill-label {
			margin-bottom: 10px;
			i {
				color: ${CssConfig.mainColor};
				padding-right: 10px;
				font-size: 50px;
				vertical-align: text-top;
			}
		}
		.skill-detail {
			li {
				position: relative;
				padding: 0 0 10px 30px;
				font-size: 14px;
				line-height: 1.5;
				color: rgb(255 255 255 / 80%);
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 13px;
					width: 20px;
					height: 1px;
					background: ${CssConfig.mainColor};
				}
			}
		}
	}
`;

export default SkillsWrap;
