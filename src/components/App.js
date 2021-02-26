import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={AboutPage} />
			<Route exact path="/projects" component={ProjectsPage} />
			<Route exact path="/projects/:name" component={ProjectDetail} />
			<Route exact path="/blog" component={BlogPage} />
		</BrowserRouter>
	);
}

export default App;
