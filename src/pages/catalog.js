import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import st from '@/style/catalog.module.css'
import Card from '../components/card';
import storesContexts from '../contexts/storesContexts';

export function catalog(){
	let {catalog, cart} = useContext(storesContexts)

	let pizzas = catalog.products.map( el =>
		<Card key={el.id} title={el.title} info={el.info} callback={() => cart.addInCart(el.id)} img={el.src} to='/cart'/>
	)


	return<>

		<h1 className={st.head}>OUR MENU</h1>
		<div className={st.catalog}>
			<div className={st.menu}>
				{pizzas}
		</div>
		</div>
		
	</>
}

export default observer(catalog);