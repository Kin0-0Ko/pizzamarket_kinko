import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import st from '@/style/cart.module.css'
import Card from '../components/card';
import storesContexts from '../contexts/storesContexts';

export function Cart() {
	let { cart } = useContext(storesContexts)
	console.log(cart.prInCart)
	let carttb = cart.prInCart.map( el =>
		<Card key={el.id} title={el.title} info={el.info} img={el.src} to='/cart'/>
	)


	return<>
		<h1 className={st.head}>Cart</h1>
		<div className={st.catalog}>
			<div className={st.menu}>
		</div>
		</div>
		
	</>
}

export default observer(Cart);