import { render } from 'preact';
import { Router, Route } from 'preact-router';

import img_logo from "./assets/logoo.png"
import { Nyxel } from './components/Nyxel.jsx';
import { Home } from './pages/Home/index.jsx';
import Blog from './pages/blog/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './style.css';
import { useContext } from 'preact/hooks';
import { createHashHistory } from "history";

export function App() {
	return (
			<main className="gluten-light">
				<br></br>
				<img className="center" src = {img_logo}></img>
				<TransitionGroup component = {null}>
					<Router history={(createHashHistory())}>
						<Route path="" component={Home} />
						<Route path="blog" component={Blog} />
						<Route default component={NotFound} />
					</Router>
				</TransitionGroup>
				{/* <Nyxel></Nyxel> */}
			</main>
	);
}

render(<App />, document.getElementById('app'));
