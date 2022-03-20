import React, { useEffect, useRef, useState } from 'react'
import st from '@/style/services.module.css'
import Card from '../components/card';

export function Services() {
	const [slides, setSlides] = useState([
		{
			img: './src/img/Vector.svg',
			title: 'Our servings' ,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat morbi viverra bibendum in sit. Ac semper arcu facilisis ornare '
		},
		{
			img: './src/img/Vector2.svg',
			title: 'Fast food' ,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat morbi viverra bibendum in sit. Ac semper arcu facilisis ornare suspendisse. Eget at tincidunt neque sapien enim tristique eu.'
		},
		{
			img: './src/img/Vector3.svg',
			title: 'Deliveries' ,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat morbi viverra bibendum in sit. Ac semper arcu facilisis ornare '
		}
	])


	// let toRight = () => {
	// 	let arr = slides,
	// 		first = arr[0]
	// 	arr.push(arr[0])
	// 	arr.shift()
	// 	setSlides(slides => [...arr])
	// }

	// let toLeft = () => {
	// 	let arr = slides
	// 	arr.unshift(arr[arr.length-1])
	// 	arr.pop()
	// 	setSlides(slides => [...arr])
		
	// }



	useEffect(() =>{
		document.getElementsByTagName('main')[0].style.removeProperty('height')
	})
	

	let slider = slides.map(el =>
		<Card  img={el.img} title={el.title} info={el.info} stc={{width: '100px'}} key={el.img}/>
		)

		

	return<>
		<h1 className={st.head}>Our Services</h1>
		<div className={st.services}>
			<div  className={st.slider}>
			{slider}
			</div>
		</div>
		
	</>
}

export default Services;