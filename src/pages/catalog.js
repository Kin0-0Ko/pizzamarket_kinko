import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import st from '@/style/catalog.module.css'
import Card from '../components/card';
import storesContexts from '../contexts/storesContexts';

export function catalog(){
	let {catalog, cart} = useContext(storesContexts)
	
	let elem = <>

	</>


	let pizzas = catalog.products.map( el =>{
		let btn = cart.inCart(el.id) ? 
			<button onClick={() => cart.remove(el.id)} className={st.buy_btn}>Delete</button>:
			<button onClick={() => cart.addInCart(el.id)} className={st.buy_btn}>Buy Now</button>	
		return <Card 
				stc={{width: '200px', style: 'one' }} 
				key={el.id} 
				title={el.title} 
				info={el.info} 
				btn={btn} 
				img={el.src} 
				to='/cart'
				/>
	})




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