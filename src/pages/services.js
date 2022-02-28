import React from 'react'
import st from '@/style/services.module.css'
import Card from '../components/card';

export function Services() {



	return<>
		<h2 className={st.head}>Our Services</h2>
		<div className={st.services}>
			<Card img='./src/img/Vector.svg' title='lol' info='info' stc={{width: '100px'}}/>
			<Card img='./src/img/Vector2.svg' title='lol' info='info' stc={{width: '100px'}}/>
			<Card img='./src/img/Vector3.svg' title='lol' info='info' stc={{width: '100px'}}/>
		</div>
		
	</>
}

export default Services;