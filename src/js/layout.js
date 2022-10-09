import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { CharactersViews } from "./views/characters";
import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetsViews } from "./views/planets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/characters/:theid">
							<CharactersViews />
						</Route>
						<Route exact path="/planets/:theid">
							<PlanetsViews />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);