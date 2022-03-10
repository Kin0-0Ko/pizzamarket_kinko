import React, { useContext, useEffect } from 'react';
import st from '@/style/about.module.css'


export function About() {

	useEffect(() =>{
		console.log(document.getElementsByTagName('main'))
		document.getElementsByTagName('main')[0].style.padding  = '0'
		document.getElementsByTagName('main')[0].style.height  = '82.5%'

	})

	return<>
		<h1 className={st.head}>About</h1>

		<div className={st.About}>
			<div className={st.bgOne}></div>
			<div className={st.bgTwo}></div>
			<div className={st.top}>
				<img/>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Condimentum odio aliquet sapien neque, porttitor tellus pellentesque 
					interdum sit. Vitae cras porta viverra ut pulvinar lorem. Aliquet faucibus 
					semper pretium vitae morbi elit fermentum. Egestas tempus nec arcu, adipiscing 
					fermentum maecenas nunc diam at. Justo, 
					justo, turpis suspendisse gravida a ultrices nunc ultrices nisi. Rutrum phasellus 
					vitae est.
				</span>
			</div>
			<div>
				<img/>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Condimentum odio aliquet sapien neque, porttitor tellus pellentesque 
					interdum sit. Vitae cras porta viverra ut pulvinar lorem. Aliquet faucibus 
					semper pretium vitae morbi elit fermentum. Egestas tempus nec arcu, adipiscing 
					fermentum maecenas nunc diam at. Justo, 
					justo, turpis suspendisse gravida a ultrices nunc ultrices nisi. Rutrum phasellus 
					vitae est.
				</span>
			</div>

		</div>


	</>
}

export default About;