import React, { useEffect, useRef, useState } from 'react'
import st from '@/style/services.module.css'
import Card from '../components/card';

export function Services() {
	let ref = useRef()
	const [slides, setSlides] = useState([
		{
			img: './src/img/Vector.svg',
			title: 'lol' ,
			info: 'info'
		},
		{
			img: './src/img/Vector2.svg',
			title: 'lol' ,
			info: 'info'
		},
		{
			img: './src/img/Vector3.svg',
			title: 'lol' ,
			info: 'info'
		}
	])


	let toRight = () => {
		let arr = slides
		arr.push(arr[0])
		arr.shift()
		setSlides(slides => [...arr])
		addClass('right')

	}
	let toLeft = () => {
		let arr = slides
		arr.unshift(arr[arr.length-1])
		arr.pop()
		setSlides(slides => [...arr])
		addClass('left')
	}

	let addClass = (cl) => {
		for (let i = 0; i < ref.current?.children.length; i++) {
		const el = ref.current?.children[i];
		el.classList.toggle(cl)
	}}



	let slider = slides.map(el =>
		<Card  img={el.img} title={el.title} info={el.info} stc={{width: '100px'}} key={el.img}/>
		)


	return<>
		<h2 className={st.head}>Our Services</h2>
		<div className={st.services}>
			<button  onClick={toLeft}>left</button>
			<div ref={ref}  className={st.slider}>
			{slider}
			</div>
			<button onClick={toRight}>right</button>
		</div>
		
	</>
}

export default Services;