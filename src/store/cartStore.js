import {
	makeObservable,
	action,
	observable,
	computed
} from 'mobx';

let info = 'Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Erat mo rbi viverra bibendum in sit. Ac semper arcu facilisis ornare'



class CartStore {
	prInCart = [];

	get productsDetailed(){
		return this.prInCart.map(pr => {
			let info = productsStore.getById(pr.id);
			return { ...info, ...pr };
		})
	}
	get total(){
		return this.productsDetailed.reduce((acc, pr) => acc + pr.price * pr.cnt, 0);
	}
	addInCart(id){
		this.prInCart.push({ id, cnt: 1 })
	}
	remove(id){
		if(this.inCart(id)){
			this.prInCart = this.prInCart.filter(pr => pr.id !== id);
		}
	}

	change(id, cnt){
		if(this.inCart(id)){
			let index = this.prInCart.findIndex(pr => pr.id === id);
			this.prInCart[index].cnt = cnt;
		}
	}

	constructor() {
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

export default new CartStore();