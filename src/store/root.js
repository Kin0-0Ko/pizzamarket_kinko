import CatalogStore from './catalogStore'

class RootStore{
	constructor(){
		this.catalog = CatalogStore
	}
}

export default new RootStore()