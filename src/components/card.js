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

export function Card({img, title, info, btn, elem, stc}){


	return <>
			<div className={st.Card}
			style={stc.style == 'one' ? {border: '#FFBE41 solid 2px', boxShadow: '0 3px #FFBE41'}: 
			{border: '#550312 solid 2px'}}>
			<div className={st.card_top}>
				<img alt='pizza' src={img} width={stc.width} />
				<h2 className={st.Card_h}>
					{title}
				</h2>
				<span className={st.Card_info}>
				{info} 
				</span>
			</div>
			{elem && <div className={st.card_bottom}>
				{elem}
			</div>}
			{btn}


		</div>
	</>


}

export default Card