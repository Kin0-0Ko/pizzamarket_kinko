import {
	makeObservable,
	action,
	observable,
	computed
} from 'mobx';



class CartStore {
	prInCart = [{id: 101, cnt:2}];

	get productsDetailed() {
		return this.prInCart.map(pr => {
			let info = this.catalog.getById(pr.id);
			return {
				...info,
				...pr
			};
		})
	}
	get total() {
		return this.productsDetailed.reduce((acc, pr) => acc + pr.price * pr.cnt, 0);
	}
	addInCart(id) {
		this.prInCart.push({
			id,
			cnt: 1
		})
	}

	inCart = (id) => this.prInCart.some(pr => pr.id === id);

	remove(id) {
		if (this.inCart(id)) {
			this.prInCart = this.prInCart.filter(pr => pr.id !== id);
		}
	}

	change(id, cnt) {
		if (this.inCart(id)) {
			let index = this.prInCart.findIndex(pr => pr.id === id);
			this.prInCart[index].cnt = cnt;
		}
	}

	constructor(RootStore) {
		this.root = RootStore
		this.catalog = this.root.catalog

		makeObservable(this, {
			prInCart: observable,
			productsDetailed: computed,
			total: computed,
			addInCart: action.bound,
			remove: action.bound,
			change: action.bound

		});
	}
}

export default CartStore;