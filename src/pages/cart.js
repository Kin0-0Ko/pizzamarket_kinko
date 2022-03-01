import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import st from '@/style/cart.module.css'
import Counter from '@/components/counter';
import storesContexts from '../contexts/storesContexts';
import Card from '../components/card';
import { NavLink} from 'react-router-dom';
import { object } from 'prop-types';

export function Cart() {
	let { cart } = useContext(storesContexts)
	let { productsDetailed: products, total, change, remove } = cart;


	let productsRows = products.map( pr => {
		let btn = <button onClick={() => remove(pr.id)} className={st.rbtn}>X</button>
		let counter = <Counter st={st}  max={pr.rest} current={pr.cnt} onChange={val => change(pr.id, val)}/> 
		return 	<Card stc={{width: '200px', style: 'one'}} 
				key={pr.id} 
				title={pr.title} 
				info={pr.info} 
				btn={btn}
				elem={counter}  
				img={pr.src}
				to='/cart'
				/>


		});

	return<>
		<h1 className={st.head}>Cart</h1>
		<div className={st.catalog}>
			<div className={st.menu}>
				{productsRows}
			</div>
			{[] - products != [] && <NavLink to='/order'  className={st.order}>Order</NavLink>}
		</div>
		
	</>
}

export default observer(Cart);