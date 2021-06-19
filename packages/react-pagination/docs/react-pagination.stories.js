import React from "react";
import { Pagination, PaginationResults, PaginationNav } from "../lib/react-pagination";

export default {
	title: "Components/Pagination",
	component: Pagination,
};

let childrenArray = new Array();
for (let i = 1; i <= 34 /* from here you can change the number of elements that can be inputed */; ++i)
	childrenArray.push(<h5 key={i}>This is the sample data that I am working with. Id number is {i}</h5>);

const paginationContent = ({ ...properties }) => {
	return (
		<>
			{PaginationNav({ ...properties })}
			{PaginationResults({ ...properties })}
			<div>Belllaaaa</div>
		</>
	);
};

export const supreme = args => (
	<Pagination {...args}>
		<div>This is sample child component 1</div>
		<div>This is sample child component 2</div>
		<div>This is sample child component 3</div>
		<div>This is sample child component 4</div>
		<div>This is sample child component 5</div>
		<div>This is sample child component 6</div>
		<div>This is sample child component 7</div>
		<div>This is sample child component 8</div>
		<div>This is sample child component 10</div>
		<div>This is sample child component 11</div>
		<div>This is sample child component 12</div>
		<div>This is sample child component 13</div>
		<div>This is sample child component 14</div>
		<div>This is sample child component 15</div>
	</Pagination>
);
supreme.storyName = "Wrapper";
supreme.args = {
	limit: 5, //elements per page
	results: true, //number of results
	skip: true, //skip to last and first page buttons status
	pagesToBottom: false,
	marginTop: "0px",
	marginRight: "0px",
	marginBottom: "0px",
	marginLeft: "0px",
	skipToFirstLabel: "",
	previousLabel: "",
	nextLabel: "",
	skipToLastLabel: "",
	child: childrenArray, //Array with child elements
	paginationContent,
};
supreme.argTypes = {
	limit: { type: "number" },
	results: { type: "boolean" },
	skip: { type: "boolean" },
	pagesToTop: { type: "boolean" },
	pagesToBottom: { type: "boolean" },
};

export const primary = args => (
	<Pagination {...args}>
		<div>This is sample child component 1</div>
		<div>This is sample child component 2</div>
		<div>This is sample child component 3</div>
		<div>This is sample child component 4</div>
		<div>This is sample child component 5</div>
		<div>This is sample child component 6</div>
		<div>This is sample child component 7</div>
		<div>This is sample child component 8</div>
		<div>This is sample child component 10</div>
		<div>This is sample child component 11</div>
		<div>This is sample child component 12</div>
		<div>This is sample child component 13</div>
		<div>This is sample child component 14</div>
		<div>This is sample child component 15</div>
	</Pagination>
);

primary.storyName = "Mixed";
primary.args = {
	limit: 5, //elements per page
	results: true, //number of results
	skip: true, //skip to last and first page buttons status
	pagesToBottom: false,
	marginTop: "0px",
	marginRight: "0px",
	marginBottom: "0px",
	marginLeft: "0px",
	skipToFirstLabel: "",
	previousLabel: "",
	nextLabel: "",
	skipToLastLabel: "",
	child: childrenArray, //Array with child elements
};
primary.argTypes = {
	limit: { type: "number" },
	results: { type: "boolean" },
	skip: { type: "boolean" },
	pagesToTop: { type: "boolean" },
	pagesToBottom: { type: "boolean" },
};

export const secondary = args => (
	<Pagination {...args}>
		<div>This is sample child component 1</div>
		<div>This is sample child component 2</div>
		<div>This is sample child component 3</div>
		<div>This is sample child component 4</div>
		<div>This is sample child component 5</div>
		<div>This is sample child component 6</div>
		<div>This is sample child component 7</div>
		<div>This is sample child component 8</div>
		<div>This is sample child component 10</div>
		<div>This is sample child component 11</div>
		<div>This is sample child component 12</div>
		<div>This is sample child component 13</div>
		<div>This is sample child component 14</div>
		<div>This is sample child component 15</div>
	</Pagination>
);

secondary.storyName = "Children Components";
secondary.args = {
	...primary.args,
	child: [],
};
secondary.argTypes = {
	...primary.argsTypes,
};

export const thirtiary = args => <Pagination {...args}>{/* {PaginationResults({childrenArray,elementsStartIndex=0,elementsEndIndex=5})}  */}</Pagination>;

thirtiary.storyName = "Child Property";
thirtiary.args = {
	...primary.args,
	child: childrenArray,
};
thirtiary.argTypes = {
	...primary.argsTypes,
};
