import React from "react";
import styled from "styled-components";
import PageHeader from "../molecules/PageHeader";
import Header from "../organisms/Header";
import PortfolioWrap from "../organisms/PortfolioWrap";

function ProjectsPage() {
	return (
		<div>
			<Header />
			<StyledProjects>
				<PageHeader titleBg="Works">
					My <span className="point">Projects</span>
				</PageHeader>
				<section>
					<PortfolioWrap />
				</section>
			</StyledProjects>
		</div>
	);
}

const StyledProjects = styled.main`
	max-width: 1140px;
	margin: auto;
`;

export default ProjectsPage;
