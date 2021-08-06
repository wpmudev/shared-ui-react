import React, { useState } from "react";
import { Button } from '@wpmudev/react-button';

export const ReactBulkActions = ({ bulkActions, ...args }) => {
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
	const consoleClick = () => {
		console.log("Consoling asdasdadsfadsfasdf");
	};
	return <>{bulkActionsDropdown(bulkActions, consoleClick)}</>;
};

export const bulkActionsDropdown = actionsObj => {
	let functionTobeExecuted = Object.values(actionsObj)[0];
	const handleSelectOnChange = e => {
		functionTobeExecuted = actionsObj[e.target.value];
	};
	const handleApply = () => {
		functionTobeExecuted();
	};
	return (
		<>
			<select name="cars" onChange={e => handleSelectOnChange(e)}>
				{Object.keys(actionsObj).map((data, index) => (
					<option onClick={Object.values(actionsObj)[index]} value={data}>
						{data}
					</option>
				))}
			</select>
			<Button onClick={handleApply} label="Apply" />
		</>
	);
};
