import React from "react";
import { ReactBulkActions } from "../lib/react-bulk-actions";
import { Pagination, PaginationResults, PaginationNav } from "@wpmudev/react-pagination";

export default {
	title: 'Components/Bulk Actions',
	component: ReactBulkActions,
}

let childItems = new Array();
	for (let i = 1; i <= 15; ++i)
	childItems.push(
		<div key={i} title={ `Child Item #${i}` }>

					<h4>Child Item #{i}</h4>
					<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</div>
	);

  const archiveAll=()=>{
    console.log("Archived ALL")
  }
  const deleteAll=()=>{
    console.log("Deleted ALL")
  }
  /* const paginationContent = ({ ...properties }) => {
		const styles = {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between'
		};
	console.log(properties.childElements,selectedIds)
		return (<>
					<div style={styles}>
						<Button label="Bulk Delete" icon="trash" disabled />
						{ PaginationNav({ ...properties }) }
					</div>
					
						{properties.childElements.map((data,key)=> <div style={{display:'grid',gridTemplateColumns:'1fr 14fr', alignItems:'center'}}><input id={key} onClick={()=>updateSelectId(key)} type='checkbox'/>{data}</div>)?.slice(properties.elementsStartIndex, properties.elementsEndIndex)}
					{ PaginationNav({ ...properties }) }
					</>
		);
	}; */

export const primary = ( args ) => <ReactBulkActions { ...args }/>
primary.storyName = 'Bulk Actions';
primary.args = {
  description:"Bulk Actions",
  bulkActions:{"delete":deleteAll,"archive":archiveAll}
  
};
primary.argTypes = {
  description:'string'
};