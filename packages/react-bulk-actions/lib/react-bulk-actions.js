import React, { useState } from "react";
import { Pagination, PaginationResults, PaginationNav } from "@wpmudev/react-pagination";
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Accordion, AccordionItem } from '@wpmudev/react-accordion';

export const ReactBulkActions = ({...args}) => {

	const [selectedIds, setSelectedIds]=useState([])

	const selectAll = (selectedIds, allIds) => {
		if (selectedIds.length === 0) {
			return allIds;
		}
		return selectedIds;
	}
	const updateSelectId = id => {
		setSelectedIds([...selectedIds,id])
	}

	let accordionItems = new Array();
	for (let i = 1; i <= 15; ++i)
	accordionItems.push(
		<AccordionItem key={i} title={ `Child Item #${i}` }>
			<Box>
				<BoxBody>
					<h4>Child Item #{i}</h4>
					<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</BoxBody>
			</Box>
		</AccordionItem>
	);
	const paginationContent = ({ ...properties }) => {
		const styles = {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between'
		};
	console.log(properties.childElements,selectedIds)
		return (
			<Box>
				<BoxHeader title="Lorem Justo" />
				<BoxBody>
					<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
					<div >
						{/* <Button label="Bulk Delete" icon="trash" disabled /> */}
						{ PaginationNav({ ...properties }) }
					</div>
					<Accordion>
						{properties.childElements.map((data,key)=> <div style={{display:'grid',gridTemplateColumns:'1fr 14fr', alignItems:'center'}}><input id={key} onClick={()=>updateSelectId(key)} type='checkbox'/>{data}</div>)?.slice(properties.elementsStartIndex, properties.elementsEndIndex)}
					</Accordion>
					{ PaginationNav({ ...properties }) }
				</BoxBody>
				<BoxFooter
					paddingTop="0"
					border="0"
					alignment="center"
				>
					<p className="sui-description">Donec id elit non mi porta gravida at eget metus? <a href="#">Check again</a></p>
				</BoxFooter>
			</Box>
		);
	};

	return <Pagination limit={5} paginationContent={paginationContent} results={true} skip={true} child= {accordionItems}/>;
};
