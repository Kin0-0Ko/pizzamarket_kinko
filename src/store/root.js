import CartStore from './cartStore'
import CatalogStore from './catalogStore'

class RootStore{
	constructor(){
		this.catalog = CatalogStore,
		this.cart = CartStore
	}
}

export default new RootStore()