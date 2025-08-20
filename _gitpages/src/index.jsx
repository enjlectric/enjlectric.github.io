import { render } from 'preact';
import { LocationProvider, Router, Route, useLocation } from 'preact-iso';

import img_logo from "./assets/logoo.png"
import { Header } from './components/Header.jsx';
import { Nyxel } from './components/Nyxel.jsx';
import { Home } from './pages/Home/index.jsx';
import Blog from './pages/blog/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './style.css';
import { useContext } from 'preact/hooks';
import { createHashHistory } from "history";

export function App() {
	const {path} = useLocation();
	return (
		<LocationProvider>
			{/* <Header /> */}
			<main className="gluten-light">
				<br></br>
				<img className="center" src = {img_logo}></img>
				<TransitionGroup component = {null}>
					<CSSTransition key={path} classNames="fade" timeout={300}>
						<Router history={(createHashHistory())}>
							<Route path="/" component={Home} />
							<Route path="/blog" component={Blog} />
							<Route default component={NotFound} />
						</Router>
					</CSSTransition>
				</TransitionGroup>
				{/* <Nyxel></Nyxel> */}
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
