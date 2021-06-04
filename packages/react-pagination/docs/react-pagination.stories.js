import React from 'react';
import { Pagination } from '../lib/react-pagination';

export default {
	title: 'Components/Pagination',
	component: Pagination,
}

/* export function childElements(){
	return <><h1>Blahhhhhhhhhhh</h1>
	{childrenArray.map((data,index)=><h5 key={index}>This is the sample data that I am working with. Id number is {data}</h5>)}
	<h2>Footer</h2></>
} */
let childrenArray=new Array()
for (let i = 1; i <= 24; ++i)
childrenArray.push(i)
console.log(childrenArray)
export const primary = ( args ) => <Pagination { ...args } >{/* <h1>Blahhhhhhhhhhh</h1> */}
{childrenArray?.map((data,index)=><h5 key={index}>This is the sample data that I am working with. Id number is {data}</h5>)}
{/* <h2>Footer</h2> */}</Pagination>;
primary.storyName = 'Pagination';
primary.args = {
	limit:5,
	results:true,
	skip:true,
	showResults:true
};
primary.argTypes = {};