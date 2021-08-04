import React, { useState } from "react";

export const ReactBulkActions = ({ bulkActions,...args }) => {
	const [selectedIds, setSelectedIds] = useState([]);

	const selectAll = (selectedIds, allIds) => {
		if (selectedIds.length === 0) {
			return allIds;
		}
		return selectedIds;
	};
	const updateSelectId = id => {
		setSelectedIds([...selectedIds, id]);
	};

	return <>{bulkActionsDropdown(bulkActions)}</>;
};

export const bulkActionsDropdown = actionsObj => {
	console.log(actionsObj,Object.keys(actionsObj).map((key,func)=><option value={key} onClick={func}>asdf{key}</option>),Object.values(actionsObj))
	return (
		<select name="cars">{Object.keys(actionsObj).map((key,func)=><option value={key} onClick={()=>func}>asdf{key}</option>)}</select>
	);
};
