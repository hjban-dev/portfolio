import React, { Component } from "react";
import PageHeader from "../molecules/PageHeader";
import BlogWrap from "../organisms/BlogWrap";
import Header from "../organisms/Header";

export class BlogPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<PageHeader titleBg="Study">
						My <span className="point">Blog</span>
					</PageHeader>
					<section>
						<BlogWrap />
					</section>
				</main>
			</div>
		);
	}
}

export default BlogPage;
