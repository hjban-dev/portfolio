import React from "react";
import Header from "../organisms/Header";
import PageHeader from "../molecules/PageHeader";
import DetailWrap from "../organisms/DetailWrap";
import data from "../../assets/data/portfoilodata";

function ProjectDetail({ match }) {
	const portfolioInfo = data.portfolioList.filter((info, idx) => {
		if (info.name === match.params.name) return info;
	});

	return (
		<div>
			<Header />
			<main>
				<PageHeader titleBg="Works">
					It's <span className="point">{match.params.name}</span>
				</PageHeader>
				<section>
					<DetailWrap project={portfolioInfo[0]} />
				</section>
			</main>
		</div>
	);
}

export default ProjectDetail;
