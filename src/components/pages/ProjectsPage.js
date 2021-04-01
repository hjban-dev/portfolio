import React, { Component } from "react";
import PageWrap from "../templates/PageWrap";
import PageHeader from "../molecules/PageHeader";
import PortfolioMain from "../organisms/PortfolioMain";
import PortfolioMini from "../organisms/PortfolioMini";

export class ProjectsPage extends Component {
	render() {
		return (
			<PageWrap page="projects">
				<main>
					<PageHeader titleBg="Works">
						My <span className="point">Projects</span>
					</PageHeader>
					<section>
						<PortfolioMain />
						<PortfolioMini />
					</section>
				</main>
			</PageWrap>
		);
	}
}

export default ProjectsPage;
