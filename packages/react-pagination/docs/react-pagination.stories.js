import React from 'react';
import { Pagination, childrenArray } from '../lib/react-pagination';

export default {
	title: 'Components/Pagination',
	component: Pagination,
}

/* export function childElements(){
	return <><h1>Blahhhhhhhhhhh</h1>
	{childrenArray.map((data,index)=><h5 key={index}>This is the sample data that I am working with. Id number is {data}</h5>)}
	<h2>Footer</h2></>
} */
console.log("childrenArray",childrenArray)
export const primary = ( args ) => <Pagination { ...args } >{/* <h1>Blahhhhhhhhhhh</h1> */}
{childrenArray?.map((data,index)=><h5 key={index}>This is the sample data that I am working with. Id number is {data}</h5>)}
{/* <h2>Footer</h2> */}</Pagination>;
primary.storyName = 'Pagination';
primary.args = {
	elements:80,
	limit:5,
	results:true,
	skip:true,
	showResults:true
};
primary.argTypes = {};