import React from 'react';
import Instagram from '../assets/img/Instagram.png'
import Twitter from '../assets/img/Twitter.png'
import Linkedin from '../assets/img/Linkedin.png'
import Platzi from '../assets/img/Platzi.png'
import Tiktok from '../assets/img/Tiktok.png'
import Tailwind from '../assets/img/Tailwind.png'
import IconLink from '../assets/svg/link-light.svg'
import Card from '../components/Card'
export default function Links() {
	const ImageArr = [Twitter, Instagram, Platzi, Tailwind, Linkedin, Tiktok]
  return (
  		<div className='w-full h-auto'>
			  <div className='flex pl-8 space-x-1 pt-4 lg:pl-12 lg:pt-6'>
				<img src={IconLink}></img>
			  	<h1 className='text-2xl font-semibold text-gray-800 lg:text-3xl'>Links</h1>
			  </div>
			  <div className='w-full h-auto flex flex-wrap space-x-8 space-y-8 lg:pl-6'>
				  <h1></h1>
			  	{ImageArr.map( el => <Card image= {el} />)}
			  </div>
		</div>
  )
}
