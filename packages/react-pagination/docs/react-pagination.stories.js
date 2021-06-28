import React from "react";
import { Pagination, PaginationResults, PaginationNav } from "../lib/react-pagination";
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Accordion, AccordionItem } from '@wpmudev/react-accordion';
import { Button } from '@wpmudev/react-button';

export default {
	title: "Components/Pagination",
	component: Pagination,
};

let childrenArray = new Array();
for (let i = 1; i <= 34 /* from here you can change the number of elements that can be inputed */; ++i)
	childrenArray.push(<h5 key={i}>This is the sample data that I am working with. Id number is {i}</h5>);

let childrenItems = new Array();
for (let i = 1; i <= 34 /* from here you can change the number of elements that can be inputed */; ++i)
	childrenItems.push(<AccordionItem key={i} title={ `Item ${i}` } />);

const paginationContent = ({ ...properties }) => {
	const styles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	};

	return (
		<Box>
			<BoxHeader title="Presets Config" />
			<BoxBody>
				<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
				<div style={ styles }>
					<Button label="Bulk Delete" icon="trash" disabled />
					{ PaginationNav({ ...properties }) }
				</div>
				<Accordion>
					{ PaginationResults({ ...properties }) }
				</Accordion>
				{ PaginationNav({ ...properties }) }
			</BoxBody>
			<BoxFooter
				paddingTop="0"
				border="0"
				alignment="center"
			>
				<p className="sui-description">Created or updated configs via the Hub? <a href="#">Check again</a></p>
			</BoxFooter>
		</Box>
	);
};

export const supreme = args => (
	<Pagination {...args}>
		<AccordionItem title="Design Test" />
		<AccordionItem title="Basic Config" />
		<AccordionItem title="Simple Config" />
		<AccordionItem title="Test Config" />
		<AccordionItem title="Advanced Config" />
	</Pagination>
);
supreme.storyName = "Wrapper";
supreme.args = {
	limit: 5, //elements per page
	results: true, //number of results
	skip: true, //skip to last and first page buttons status
	skipToFirstLabel: "",
	previousLabel: "",
	nextLabel: "",
	skipToLastLabel: "",
	child: childrenItems, //Array with child elements
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

export const thirtiary = args => <Pagination {...args} />;

thirtiary.storyName = "Child Property";
thirtiary.args = {
	...primary.args,
};
thirtiary.argTypes = {
	...primary.argsTypes,
};
