import Catalog from '@/pages/catalog'
import Cart from '@/pages/cart'
import Services from '@/pages/services'
import About from '@/pages/about'

let routes = [{
		name: 'catalog',
		path: '/',
		component: Catalog
	},
	{
		name: 'cart',
		path: '/cart',
		component: Cart
	},
	{
		name: 'about',
		path: '/about',
		component: About
	},
	{
		name: 'services',
		path: '/services',
		component: Services
	},
];

let routesMap = {};

routes.forEach(route => {
	if (route.hasOwnProperty('name')) {
		routesMap[route.name] = route.path;
	}
})

export {
	routes,
	routesMap
}