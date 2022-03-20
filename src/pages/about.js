import React, { useContext, useEffect } from 'react';
import st from '@/style/about.module.css'


export function About() {

	useEffect(() =>{
		document.getElementsByTagName('main')[0].style.removeProperty('height')
	})

	return<>

		<div className={st.About}>
		<h1 className={st.head}>About</h1>

			<div className={st.bgOne}></div>
			<div className={st.bgTwo}></div>
			<div className={st.top}>
				<img src='./src/img/image_about.png'/>
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
			<div  className={st.bottom}>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Condimentum odio aliquet sapien neque, porttitor tellus pellentesque 
					interdum sit. Vitae cras porta viverra ut pulvinar lorem. Aliquet faucibus 
					semper pretium vitae morbi elit fermentum. Egestas tempus nec arcu, adipiscing 
					fermentum maecenas nunc diam at. Justo, 
					justo, turpis suspendisse gravida a ultrices nunc ultrices nisi. Rutrum phasellus 
					vitae est.
				</span>
				<img src='./src/img/image_about.png'/>
			</div>

		</div>


	</>
}

export default About;