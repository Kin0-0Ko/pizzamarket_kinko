import {
	makeObservable,
	action,
	observable,
	computed
} from 'mobx';

let info = 'Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Erat mo rbi viverra bibendum in sit. Ac semper arcu facilisis ornare'


const productFromServer = [{
		id: 100,
		title:'Miza',
		rest: 8,
		price: 1500,
		info: info,
		src: '/img/pizza.png',
		cnt: 4

	},
	{
		id: 101,
		title:'Miza',
		rest: 11,
		price: 1500,
		info: info,
		src: '/img/pizza.png',
		cnt: 4

	},
	{
		id: 104,
		title:'Miza',
		rest: 11,
		price: 1500,
		info: info,
		src: '/img/pizza.png',
		cnt: 4

	},
	{
		id: 102,
		title:'Miza',
		rest: 5,
		price: 1500,
		info: info,
		src: '/img/pizza.png',
		cnt: 4

	},
	{
		id: 103,
		title:'Miza',
		rest: 2,
		price: 1500,
		info: info,
		src: '/img/pizza.png',
		cnt: 1

	}
];


class Catalog {
	products = productFromServer;

	getById = id => this.products.find(pr => pr.id === id);


	constructor() {
		makeObservable(this, {
			products: observable,
		});
	}
}

export default Catalog;