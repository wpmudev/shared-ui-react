import React, { useState } from "react";
import { Button } from "@wpmudev/react-button";
import { Accordion } from "@wpmudev/react-accordion";

export const ReactBulkActions = ({ bulkActions, items, ...args }) => {
	const [selectedIds, setSelectedIds] = useState([]);

	const selectAll = () => {
		console.log("selectAll",items);
		for (const item of items) {
			setSelectedIds([...selectedIds, item.id]);
		}
	};
	const updateSelectId = (e,id )=> {
		!e.target.checked ? setSelectedIds(selectedIds.filter(item => item.id !== id)):setSelectedIds([...selectedIds, id]);
	};
	console.log("SelectIds",selectedIds);

	var functionTobeExecuted = ()=>{}
	
	return (
		<div id="react-bulk-actions">
			{bulkActionsDropdown(bulkActions,"Apply",functionTobeExecuted)} {bulkActionsItems(items, selectedIds, updateSelectId)}{bulkActionsSelectAll(selectAll)}
		</div>
	);
};

export const bulkActionsSelectAll = (selectAll) => {
return <input type="checkbox" value="Select All" onClick={selectAll} />;
}

export const bulkActionsDropdown = (actionsObj,buttonLabel,functionTobeExecuted) => {
	const handleSelectOnChange = e => {
		/* e.target.value!=="Null" &&  */(functionTobeExecuted = actionsObj[e.target.value]);
	};
	const handleApply = () => {
		functionTobeExecuted();
	};
	return (
		<>
			<select name="cars" onChange={e => handleSelectOnChange(e)}>
				<option value="Null" selected>Select Action</option>
				{Object.keys(actionsObj).map((data, index) => (
					<option key={index} onClick={Object.values(actionsObj)[index]} value={data}>
						{data}
					</option>
				))}
			</select>
			<Button disabled={false} onClick={handleApply} label={buttonLabel} />
		</>
	);
};

export const bulkActionsItems = (items, selectedIds,updateSelectId) => {
	// document.getElementById('react-bulk-actions').getElementsByClassName('sui-accordion-item')

	const styles = { position: "absolute", marginTop:"22px",marginLeft:"10px"  };
	return (
		<Accordion style={{ position: "relative" }}>
			{items.map((item, index) => (
				<>
					<input type="checkbox" /* checked={selectedIds.includes(index)} */ style={styles} onChange={(e) => updateSelectId(e,index)} id={index} />
					{item}
				</>
			))}
		</Accordion>
	);
};
