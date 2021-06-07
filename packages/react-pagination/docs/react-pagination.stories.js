import React from "react";
import { Pagination } from "../lib/react-pagination";

export default {
	title: "Components/Pagination",
	component: Pagination,
};

let childrenArray = new Array();
for (let i = 1; i <= 34 /* from here you can change the number of elements that can be inputed */; ++i)
	childrenArray.push(<h5 key={i}>This is the sample data that I am working with. Id number is {i}</h5>);

export const primary = args => (
	<Pagination {...args}>
		<div>Page</div>
	</Pagination>
);

primary.storyName = "Pagination";
primary.args = {
	limit: 5, //elements per page
	results: true, //number of results
	skip: true, //skip to last and first page buttons status
	child: childrenArray, //Array with child elements
};
primary.argTypes = {
	limit: { type: "number" },
	results: { type: "boolean" },
	skip: { type: "boolean" },
};
