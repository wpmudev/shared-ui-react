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
for (let i = 1; i <= 24/* from here you can change the number of elements that can be inputed */; ++i)
childrenArray.push(i)
console.log(childrenArray)
export const primary = ( args ) => <Pagination { ...args } ><h1>Blahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
{childrenArray?.map((data,index)=><h5 key={index}>This is the sample data that I am working with. Id number is {data}</h5>)}
<h2>Footer</h2></Pagination>;
primary.storyName = 'Pagination';
primary.args = {
	limit:7,	//elements per page
	results:true,	//number of results
	skip:true,	//skip to last and first page buttons status
	/* children:{
	{childrenArray?.map((data,index)=><h5 key={index}>This is the sample data that I am working with. Id number is {data}</h5>)}
	} */
};
primary.argTypes = {};