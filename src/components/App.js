import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SkillsPage from "./pages/SkillsPage";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/skills" component={SkillsPage} />
				<Route exact path="/projects" component={ProjectsPage} />
			</Switch>
		</Router>
	);
}

export default App;
