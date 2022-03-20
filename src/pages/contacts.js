import React from 'react';
import st from '@/style/contacts.module.css';


export function Contacts(){



	return <div className={st.contacts}>
		<div className={st.top}>
			<input placeholder=' | Leave a message  . . .'/>
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
				<img/>
				<input placeholder='+250 780102030'/>
			</div>
			<div className={st.right}>
				<h2>Address</h2>
				<h3>KK  134 ST ,   KGL Rwanda</h3>
				<span>
					commodo, lacus, ornare. Facilisis habitant vel dignissim amet, bibendum. Sit leo lectus.
				</span>
				<img/>
				<input placeholder='1300'/>
			</div>
		</div>
	
	</div>
}

export default Contacts;