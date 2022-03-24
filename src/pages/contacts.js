import React, {useEffect}from 'react';
import st from '@/style/contacts.module.css';


export function Contacts(){

		useEffect(() =>{
		document.getElementsByTagName('main')[0].style.removeProperty('height')
	})

	return <div className={st.contacts}>
		<div className={st.top}>
			<input className={st.input} placeholder=' | Leave a message  . . . '/>
		</div>
		<div className={st.bottom}>
			<div className={st.left}>
				<h2>PIZZA GUSTO</h2>
				<span>
					Lorem ipsum dolor sit amet, 
					consectetur adipiscing elit. 
					Mauris mattis facilisi adipiscing
					 scelerisque aliquet morbi commodo, 
					 lacus, ornare. Facilisis habitant vel 
					 dignissim amet, bibendum. Sit leo lectus.
				</span>
				<div className={st.btmWrp}>
				<a><img src="/img/Whts_cn.svg"/></a>
				<input className={st.input} value='+250 780102030' type="text" readOnly/>
				</div>
			</div>
			<div className={st.right}>
				<h2>Address</h2>
				<h3>KK  134 ST ,   KGL Rwanda</h3>
				<span>
					commodo, lacus, ornare. Facilisis habitant vel dignissim amet, bibendum. Sit leo lectus.
				</span>
				<div className={st.btmWrp}>
				<a><img src="/img/Phone_cn.svg"/></a>
				<input className={st.input} value='1300' type="text" readOnly/>
				</div>
			</div>
			<div className={st.linkBar}>
				<a><img src="/img/inst_cn.svg"/></a>
				<a><img src="/img/google_cn.svg"/></a>
				<a><img src="/img/facebook_cn.svg"/></a>
				<a><img src="/img/lnk_cn.svg"/></a>
				<a><img src="/img/pint_cn.svg"/></a>
			</div>
		</div>
	
	</div>
}

export default Contacts;