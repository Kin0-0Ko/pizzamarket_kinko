import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { routes, routesMap } from './router';
import { observer } from 'mobx-react-lite';
import { createBrowserHistory } from "history"


function App(){
	let routesComponents = routes.map(route => (
		<Route path={route.path} component={route.component} exact={route.exact ?? true} key={route.path} />
	));

	confirm('That`s a pet project')
	let history = createBrowserHistory();




	return <Router history={history}>
			<header>
				<div className='navbar'>
					<div className='navbar-bg'></div>
					<NavLink to={routesMap.cart} activeClassName="navbar-link_active" className='navbar-link' exact>Cart</NavLink>
					<NavLink to={routesMap.about} activeClassName="navbar-link_active" className='navbar-link' exact>About Us</NavLink>
					<NavLink to={routesMap.services} activeClassName="navbar-link_active" className='navbar-link' exact>Services</NavLink>
					<span className='navbar-logo'>PIZZA GUSTO</span>
					<NavLink to={routesMap.catalog} activeClassName="navbar-link_active" className='navbar-link' exact>Menu</NavLink>
					<NavLink to={routesMap.reviews} activeClassName="navbar-link_active" className='navbar-link' exact>Reviews</NavLink>
					<NavLink to={routesMap.contacts} activeClassName="navbar-link_active" className='navbar-link' exact>Contacts</NavLink>
				</div>
			</header>
			<main>
			<Switch >
				{routesComponents}
			</Switch>
			</main>
			<footer>
				<img src='./src/img/ft+lft.svg'/>
				<img onClick={() => history.goBack()} src='/img/back_ft_rht.svg'/>
			</footer>
	</Router>
}

export default observer(App);