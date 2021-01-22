import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SkillsPage from "./pages/SkillsPage";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/skills" component={SkillsPage} />
				<Route exact path="/projects" component={ProjectsPage} />
				<Route exact path="/projects/:name" component={ProjectDetail} />
				<Route exact path="/blog" component={BlogPage} />
			</Switch>
		</Router>
	);
}

export default App;
