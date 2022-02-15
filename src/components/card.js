import React, { useContext } from 'react';
import st from '@/style/card.module.css'


export function Card({img, title, info}){


	return <>
			<div className={st.menuCard}>
			<div className='menu-card_top'>
				<h2 className={st.menuCard_h}>
					{title}
				</h2>
				<span className={st.menuCard_info}>
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