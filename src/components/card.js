import React from 'react';
import st from '@/style/card.module.css'

export function Card({img, title, info}){


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
			<button className={st.buy_btn}>
				Buy Now
			</button>
		</div>
	</>


}

export default Card