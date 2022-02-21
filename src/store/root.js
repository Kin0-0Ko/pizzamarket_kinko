import CartStore from './cartStore'
import CatalogStore from './catalogStore'

class RootStore{
	constructor(){
		this.catalog = new CatalogStore(this),
		this.cart = new CartStore(this)
	}
}

export default new RootStore()