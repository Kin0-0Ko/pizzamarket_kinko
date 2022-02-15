import {
	makeObservable,
	action,
	observable,
	computed
} from 'mobx';

let info = 'Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Erat mo rbi viverra bibendum in sit. Ac semper arcu facilisis ornare'


const productFromServer = [{
		id: 100,
		title:'miza',
		info:info,
		src: './src/img/pizza3.png',
		cnt: 4

	},
	{
		id: 101,
		title:'miza',
		info:info,
		src: './src/img/pizza3.png',
		cnt: 4

	},
	{
		id: 102,
		title:'miza',
		info:info,
		src: './src/img/pizza3.png',
		cnt: 4

	},
	{
		id: 103,
		title:'miza',
		info:info,
		src: './src/img/pizza3.png',
		cnt: 4

	}
];


class Catalog {
	products = productFromServer;


	constructor() {
		makeObservable(this, {
			products: observable,
		});
	}
}

export default new Catalog();