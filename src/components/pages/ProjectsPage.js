import React from "react";
import PageHeader from "../molecules/PageHeader";
import Header from "../organisms/Header";

function ProjectsPage() {
	return (
		<div>
			<Header />
			<PageHeader titleBg="Works">
				My <span className="point">Projects</span>
			</PageHeader>
		</div>
	);
}

export default ProjectsPage;
