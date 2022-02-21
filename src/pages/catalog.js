import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import st from '@/style/catalog.module.css'
import Card from '../components/card';
import storesContexts from '../contexts/storesContexts';

export function catalog(){
	let {catalog, cart} = useContext(storesContexts)
	

	let pizzas = catalog.products.map( el =>{
		let btn = cart.inCart(el.id) ? 
			<button onClick={() => cart.remove(el.id)} className={st.buy_btn}>Delete</button>:
			<button onClick={() => cart.addInCart(el.id)} className={st.buy_btn}>Buy Now</button>	
		return <Card key={el.id} title={el.title} info={el.info} btn={btn} img={el.src} to='/cart'/>
	})

	// let btn = cart.inCart(pr.id) ? 
	// <button type="button" className="btn btn-danger" onClick={() => cart.remove(pr.id)}>Remove</button> :
	// <button type="button" className="btn btn-success" onClick={() => cart.add(pr.id)}>Add</button>;


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