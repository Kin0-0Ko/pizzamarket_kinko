import React from 'react';
import st from '@/style/card.module.css'
import { NavLink, Redirect } from 'react-router-dom';

export function Card({img, title, info, callback}){


	return <>
			<div className={st.Card}>
			<div className={st.card_top}>
				<img className={st.card_img} alt='pizza' src={img} />
				<h2 className={st.Card_h}>
					{title}
				</h2>
				<span className={st.Card_info}>
				{info} 
				</span>
			</div>
			<div className='menu-card_bottom'>
			</div>
			<button onClick={callback} className={st.buy_btn}>
				Buy Now
			</button>


		</div>
	</>


}

export default Card