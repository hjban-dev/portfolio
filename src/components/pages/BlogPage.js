import React, { Component } from "react";
import PageHeader from "../molecules/PageHeader";
import BlogWrap from "../organisms/BlogWrap";
import PageWrap from "../templates/PageWrap";

export class BlogPage extends Component {
	render() {
		return (
			<PageWrap page="blog">
				<main>
					<PageHeader titleBg="Study">
						My <span className="point">Blog</span>
					</PageHeader>
					<section>
						<BlogWrap />
					</section>
				</main>
			</PageWrap>
		);
	}
}

export default BlogPage;
