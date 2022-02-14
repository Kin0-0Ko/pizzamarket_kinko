import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import st from '@/style/catalog.module.css'
export function catalog(){


	return<>
		<h1 className={st.head}>OUR MENU</h1>
		<div className={st.catalog}>
			<div className={st.menu}>
		<div className={st.menuCard}>
			<div className='menu-card_top'>
				<h2 className={st.menuCard_h}>
					DETROIT PIZZA
				</h2>
				<span className={st.menuCard_info}>
				Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Erat mo
				rbi viverra bibendum in sit. Ac semper arcu facilisis ornare 
				</span>
			</div>
			<div className='menu-card_bottom'>
			</div>
			<button className={st.buy_btn}>
				Buy Now
			</button>
		</div>
		<div className={st.menuCard}>
			<div className='menu-card_top'>
				<h2 className={st.menuCard_h}>
					DETROIT PIZZA
				</h2>
				<span className={st.menuCard_info}>
				Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Erat mo
				rbi viverra bibendum in sit. Ac semper arcu facilisis ornare 
				</span>
			</div>
			<div className='menu-card_bottom'>
			</div>
			<button className={st.buy_btn}>
				Buy Now
			</button>
			</div>
		<div className={st.menuCard}>
		<div className='menu-card_top'>
			<h2 className={st.menuCard_h}>
				DETROIT PIZZA
			</h2>
			<span className={st.menuCard_info}>
			Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Erat mo
			rbi viverra bibendum in sit. Ac semper arcu facilisis ornare 
			</span>
		</div>
		<div className='menu-card_bottom'>
		</div>
		<button className={st.buy_btn}>
			Buy Now
		</button>
		</div>
		<div className={st.menuCard}>
		<div className='menu-card_top'>
			<h2 className={st.menuCard_h}>
				DETROIT PIZZA
			</h2>
			<span className={st.menuCard_info}>
			Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Erat mo
			rbi viverra bibendum in sit. Ac semper arcu facilisis ornare 
			</span>
		</div>
		<div className='menu-card_bottom'>
		</div>
		<button className={st.buy_btn}>
			Buy Now
		</button>
		</div>
		<div className={st.menuCard}>
		<div className='menu-card_top'>
			<h2 className={st.menuCard_h}>
				DETROIT PIZZA
			</h2>
			<span className={st.menuCard_info}>
			Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Erat mo
			rbi viverra bibendum in sit. Ac semper arcu facilisis ornare 
			</span>
		</div>
		<div className='menu-card_bottom'>
		</div>
		<button className={st.buy_btn}>
			Buy Now
		</button>
		</div>
		</div>
		</div>
		
	</>
}

export default observer(catalog);