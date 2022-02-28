import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { routes, routesMap } from './router';
import { observer } from 'mobx-react-lite';
import storesContext from './contexts/storesContexts'


function App(){
	let routesComponents = routes.map(route => (
		<Route path={route.path} component={route.component} exact={route.exact ?? true} key={route.path} />
	));

	// confirm('That`s a pet project')

	return <Router>
			<header>
				<div className='navbar'>
					<div className='navbar-bg'></div>
					<NavLink to={routesMap.cart} activeClassName="navbar-link_active" className='navbar-link' exact>Cart</NavLink>
					<NavLink to={routesMap.cart} activeClassName="navbar-link_active" className='navbar-link' exact>Cart</NavLink>
					<NavLink to={routesMap.services} activeClassName="navbar-link_active" className='navbar-link' exact>Services</NavLink>
					<span className='navbar-logo'>PIZZA GUSTO</span>
					<NavLink to={routesMap.catalog} activeClassName="navbar-link_active" className='navbar-link' exact>Menu</NavLink>
					<NavLink to={routesMap.catalog} activeClassName="navbar-link_active" className='navbar-link' exact>Menu</NavLink>
					<NavLink to={routesMap.catalog} activeClassName="navbar-link_active" className='navbar-link' exact>Menu</NavLink>
				</div>
			</header>
			<main>
			<Switch >
				{routesComponents}
			</Switch>
			</main>
			<footer>

			</footer>
	</Router>
}

export default observer(App);