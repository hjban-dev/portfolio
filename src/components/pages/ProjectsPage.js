import React, { Component } from "react";
import PageHeader from "../molecules/PageHeader";
import PortfolioWrap from "../organisms/PortfolioWrap";
import PageWrap from "../templates/PageWrap";

export class ProjectsPage extends Component {
	render() {
		return (
			<PageWrap page="projects">
				<main>
					<PageHeader titleBg="Works">
						My <span className="point">Projects</span>
					</PageHeader>
					<section>
						<PortfolioWrap />
					</section>
				</main>
			</PageWrap>
		);
	}
}

export default ProjectsPage;
