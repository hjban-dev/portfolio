import React, { Component } from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";
import PageHeader from "../molecules/PageHeader";
import ExperienceWrap from "../organisms/ExperienceWrap";
import Header from "../organisms/Header";
import SkillsWrap from "../organisms/SkillsWrap";

export class SkillsPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<StyledSkills>
					<PageHeader titleBg="Resume">
						My <span className="point">Skills</span>
					</PageHeader>

					<section>
						<Heading level="2">MY SKILLS</Heading>
						<SkillsWrap></SkillsWrap>
					</section>

					<section>
						<Heading level="2">EXPERIENCE & EDUCATION</Heading>
						<ExperienceWrap></ExperienceWrap>
					</section>
				</StyledSkills>
			</div>
		);
	}
}

const StyledSkills = styled.main`
	max-width: 1140px;
	margin: auto;
	section {
		padding-bottom: 80px;
		&:not(:last-child) {
			position: relative;
			margin-bottom: 60px;
			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				width: 500px;
				height: 1px;
				background-color: #252525;
			}
		}
		> h2 {
			margin-bottom: 40px;
			font-size: 26px;
			font-weight: 600;
			text-align: center;
		}
	}
`;
export default SkillsPage;
