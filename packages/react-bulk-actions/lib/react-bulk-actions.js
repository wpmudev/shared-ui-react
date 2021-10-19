/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable prettier/prettier */
import React, { useState, useRef } from "react";
import { Button } from "@wpmudev/react-button";
import { Accordion, AccordionItem } from "@wpmudev/react-accordion";
import { Box, BoxHeader, BoxBody, BoxFooter } from "@wpmudev/react-box";

export const ReactBulkActions = ({ buttonLabel, bulkActions, tableItems }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [buttonState, setButtonState] = useState(true);
  const [applyState, setApplyState] = useState(null);
  const optionElem = useRef(null);

  // bulk action options
  const bulkOptions = bulkActions;

  // if option is selected change button status
  const selectedOption = (e) => {
    e.preventDefault();
    if (optionElem.current.value !== "null") {
      setButtonState(false);
      setApplyState(
        e.target[e.target.selectedIndex].getAttribute("data-action")
      );
    } else {
      setButtonState(true);
      setApplyState(null);
    }
  };

  // delete action
  const deleteAction = () => {
    if(selectedIds.length){
      console.log(selectedIds);
    } else {
      alert("empty array please select some items first.");
    }
  };

  // edit action
  const editAction = () => {
    if(selectedIds.length){
      console.log(selectedIds);
    } else {
      alert("empty array please select some items first.");
    }
  };

  // edit action
  const applyAction = (e) => {
    e.preventDefault();
    switch (e.target.getAttribute("data-action")) {
      case "editAction":
        editAction();
        break;
      case "deleteAction":
        deleteAction();
        break;
    }
  };

  // add/remove ids from array
  const updateSelectedId = (e, id) => {
    !e.target.checked ? setSelectedIds(selectedIds.filter(item => item.id !== id)) : setSelectedIds([...selectedIds, {id: id}]);
  }
    
  return (
    <>
      {BulkActions(bulkOptions, selectedOption, optionElem, buttonLabel, applyState, applyAction, buttonState)}
      <div>{ItemsTable(tableItems, updateSelectedId, setSelectedIds)}</div>
    </>
  );
};

// bulk actions
export const BulkActions = (bulkOptions, selectedOption, optionElem, buttonLabel, applyState, applyAction, buttonState) => {
  return(
    <div className="sui-bulk-actions" id="bulk-actions" style={{ display: "flex", paddingBottom: "20px" }}>
      {bulkOptions.length > 1 ? (
        <select
          name="Bulk Actions"
          id="bulkActions"
          defaultValue="Select Action"
          style={{
            marginBottom: "0",
            marginRight: "15px",
            maxWidth: "250px",
          }}
          onChange={selectedOption}
          ref={optionElem}
          aria-label="Bulk Actions"
          aria-labelledby="bulk-actions"
        >
          <option value="null">Select Action</option>
          {bulkOptions.map((data, index) => (
            <option key={index} data-action={data.action} value={data.value}>
              {data.title}
            </option>
          ))}
        </select>
      ) : (
        ""
      )}

      <Button
        label={buttonLabel}
        data-action={applyState}
        onClick={applyAction}
        disabled={bulkOptions.length > 1 ? buttonState : false}
      />
    </div>
  );
}

// select all elements
export const SelectAll = (elemName, setSelectedIds, tableItems) => {
  const arrItems = tableItems.map(function(data) {return {id: data.id};});
  // select all ids
  const selectAllIds = (e) => {
    const checkboxes = document.getElementsByName(elemName);
    var i = 0;
    if(e.target.checked){
      for (i = 0; i < checkboxes.length; i++) { 
        checkboxes[i].checked = true;
      }
      setSelectedIds(arrItems)      
    } else {
      for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
      }
      setSelectedIds([]);
    }
  }
  return <input type="checkbox" className="sui-checkbox" style={{ cursor: "pointer" }} name="Select all" aria-label="Select all" onClick={selectAllIds}/>;
};

// table items
export const ItemsTable = (tableItems, updateSelectedId, setSelectedIds) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>
            {SelectAll("sui checkbox", setSelectedIds, tableItems)}
          </th>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {tableItems.map(( data, index ) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  className="sui-checkbox"
                  style={{ cursor: "pointer" }}
                  onChange={(e) => updateSelectedId(e, data.id)}
                  value={data.id}
                  name="sui checkbox"
                  aria-label="Item"
                />
              </td>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.content}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};
