import React, { useEffect, useState } from 'react'
import st from '@/style/services.module.css'
import Card from '../components/card';

export function Services() {
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
	}
	let toLeft = () => {
		let arr = slides
		arr.unshift(arr[arr.length-1])
		arr.pop()
		setSlides(slides => [...arr])
	}

	let slider = slides.map(el =>
		<Card img={el.img} title={el.title} info={el.info} stc={{width: '100px'}} key={el.img}/>
		)


	return<>
		<h2 className={st.head}>Our Services</h2>
		<div className={st.services}>
			{/* <Card img='./src/img/Vector.svg' title='lol' info='info' stc={{width: '100px'}}/>
			<Card img='./src/img/Vector2.svg' title='lol' info='info' stc={{width: '100px'}}/>
			<Card img='./src/img/Vector3.svg' title='lol' info='info' stc={{width: '100px'}}/> */}
			<button onClick={toLeft}>left</button>
			<div className={st.slider}>
			{slider}
			</div>
			<button onClick={toRight}>right</button>
		</div>
		
	</>
}

export default Services;