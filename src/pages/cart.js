import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import st from '@/style/cart.module.css'
import Counter from '@/components/counter';
import storesContexts from '../contexts/storesContexts';
import Card from '../components/card';
import { NavLink} from 'react-router-dom';

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


		useEffect(() =>{
			products.length > 4 ?
			document.getElementsByTagName('main')[0].style.height  = '100%':
			document.getElementsByTagName('main')[0].style.height  = '777px'
		})


	return<>
		<h1 className={st.head}>Cart</h1>
		<div className={st.catalog}>
			<div className={st.menu}>
				{productsRows}
			</div>
			{[] - products != [] ? <NavLink to='/order'  className={st.order}>Order</NavLink>:
				<span className={st.enptyCart}>There is nothing yet</span>
			}
		</div>
		
	</>
}

export default observer(Cart);