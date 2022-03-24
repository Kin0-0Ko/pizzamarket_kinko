import React, { useContext, useEffect } from 'react';
import st from '@/style/reviews.module.css'


export function Reviews() {

	useEffect(() =>{
		document.getElementsByTagName('main')[0].style.removeProperty('height')
	})

	return<>
		<div className={st.reviews}>
			<div className={st.reviewsBg}></div>
			<div className={st.reviewsBg2}></div>
			<div className={st.content}>
			<div className={st.descrp}>
				<div className={st.left}> 
					<h2>Pizzalicious</h2>
					<h3>Enjoy your days </h3>
					<span>
						Lorem ipsum dolor sit amet, consectetur 
						adipiscing elit. Condimentum odio aliquet 
						sapien neque, porttitor tellus pellentesque 
						interdum sit. Vitae cras porta viverra ut pulvinar 
						lorem. Aliquet faucibus semper pretium vitae morbi 
						elit fermentum. Egestas tempus nec arcu, 
						adipiscing fermentum maecenas nunc diam at. Justo, 
						justo, turpis suspendisse gravida a ultrices nunc ultrices 
						nisi. Rutrum phasellus vitae est.
					</span>

					<div className={st.timeSheet}>
						<img src='./src/img/Clock_clock.svg'/>
						<span className={st.time}>
							<p>MON-THUR   9AM - 7:30 PM</p>
							<p>FRI-SAT  10AM - 8PM</p>
							<p>SUN  2PM - 8:30 PM</p>
						</span>
					</div>

				</div>
				<div className={st.center}>
					<button className={st.btn} onClick={() => confirm('You can`t order anything. That`s a pet project')}>Order now</button>
				</div>
				<div className={st.right}>
					<img src='./src/img/pizza_about.png'/>

				</div>

			</div>

			</div>
			<div className={st.sNets}>
				<a href='#'><img src='./src/img/Vector_1.svg'/></a>
				<a href='#'><img src='./src/img/Vector-1.svg'/></a>
				<a href='#'><img src='./src/img/Vector-2.svg'/></a>
				<a href='#'><img src='./src/img/Vector-3.svg'/></a>
				<a href='#'><img src='./src/img/Vector-4.svg'/></a>
			</div>
		</div>


	</>
}

export default Reviews;