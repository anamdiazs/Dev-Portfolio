import React from 'react';

export default function Card(props) {
	const {image} = props
  return (
		<div className='w-36 bg-blue-200 shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-2xl'>
				<img src={image}></img>
		</div>
  );
}
