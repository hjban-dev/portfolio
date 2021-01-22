import React from "react";
import styled from "styled-components";

function DetailWrap(props) {
	console.log(props.project);
	return (
		<StyledDetail>
			<article>
				<p>{props.project.name}</p>
			</article>
		</StyledDetail>
	);
}

const StyledDetail = styled.div`
	max-width: 700px;
	margin: 0 auto;
`;

export default DetailWrap;
