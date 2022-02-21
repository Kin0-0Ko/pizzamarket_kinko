import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import st from '@/style/cart.module.css'
import Counter from '@/components/counter';
import storesContexts from '../contexts/storesContexts';

export function Cart() {
	let { cart } = useContext(storesContexts)
	let { productsDetailed: products, total, change, remove } = cart;

	console.log(remove)
	let productsRows = products.map(pr => (
		<tr key={pr.id}>
			<td>{ pr.title }</td>
			<td>{ pr.price }</td>
			<td>
				<Counter 
					max={pr.rest} 
					current={pr.cnt} 
					onChange={val => change(pr.id, val)} 
					key={pr.rest}
				/>
			</td>
			<td>{ pr.price * pr.cnt }</td>
			<td>
				<button type="button" onClick={() => remove(pr.id)}>X</button>
			</td> 
		</tr>
	));

	return<>
		<h1 className={st.head}>Cart</h1>
		<div className={st.catalog}>
			<div className={st.menu}>
				{productsRows}
		</div>
		</div>
		
	</>
}

export default observer(Cart);