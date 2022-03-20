import Catalog from '@/pages/catalog'
import Cart from '@/pages/cart'
import Services from '@/pages/services'
import About from '@/pages/about'
import Reviews from '@/pages/reviews'
import Contacts from '@/pages/contacts'

let routes = [{
		name: 'catalog',
		path: '/menu',
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
	{
		name: 'reviews',
		path: '/',
		component: Reviews
	},
	{
		name: 'contacts',
		path: '/contacts',
		component: Contacts
	}
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