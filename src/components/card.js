import React from 'react';
import PropTypes from 'prop-types';
import st from '@/style/card.module.css'

Card.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired,
	elem: PropTypes.object,
	btn: PropTypes.object
}

export function Card({img, title, info, btn, elem}){


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
			<div className={st.card_bottom}>
				{elem}
			</div>
			{btn}


		</div>
	</>


}

export default Card