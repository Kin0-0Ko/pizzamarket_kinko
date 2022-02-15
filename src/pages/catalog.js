import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import st from '@/style/catalog.module.css'
import Card from '../components/card';
export function catalog(){
	let info = 'Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Erat mo rbi viverra bibendum in sit. Ac semper arcu facilisis ornare'

	return<>
		<h1 className={st.head}>OUR MENU</h1>
		<div className={st.catalog}>
			<div className={st.menu}>
			<Card title='DETROIT PIZZA' info={info}/>
			<Card title='DETROIT PIZZA' info={info}/>
			<Card title='DETROIT PIZZA' info={info}/>
			<Card title='DETROIT PIZZA' info={info}/>
			<Card title='DETROIT PIZZA' info={info}/>
			<Card title='DETROIT PIZZA' info={info}/>
			<Card title='DETROIT PIZZA' info={info}/>
		</div>
		</div>
		
	</>
}

export default observer(catalog);