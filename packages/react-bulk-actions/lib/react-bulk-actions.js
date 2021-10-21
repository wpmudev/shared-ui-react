/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable prettier/prettier */
import React, { useState, useRef } from "react";
import { Button } from "@wpmudev/react-button";
import { Accordion, AccordionItem } from "@wpmudev/react-accordion";
import { Box } from "@wpmudev/react-box";

export const ReactBulkActions = ({ 
    buttonLabel, 
    bulkActionsLabel, 
    bulkActions, 
    listItems,
    buttonAction 
  }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [buttonState, setButtonState] = useState(true);
  const [applyState, setApplyState] = useState(null);
  const optionElem = useRef(null);

  // bulk action options
  const bulkOptions = bulkActionsLabel;

  // if option is selected change button status
  const selectedOption = (e) => {
    e.preventDefault();
    if (optionElem.current.value !== "null") {
      setButtonState(false);
      setApplyState(e.target[e.target.selectedIndex].getAttribute("data-action"));
    } else {
      setButtonState(true);
      setApplyState(null);
    }
  };

  const applyAction = (e) => {
    e.preventDefault();
    if(selectedIds.length){
      bulkActionsLabel.length > 1 ?
        bulkActions[e.target.getAttribute("data-action")](selectedIds) :
        buttonAction(selectedIds);
    } else {
      alert("Please select some items");
    }
  };

  // add/remove ids from array
  const updateSelectedId = (e, id) => {
    !e.target.checked ? 
      setSelectedIds(selectedIds.filter(item => item.id !== id)) : setSelectedIds([...selectedIds, {id: id}]);
  }
    
  return (
    <>
      {
        BulkActions(
          bulkOptions, 
          selectedOption, 
          optionElem, 
          buttonLabel, 
          applyState, 
          buttonState, 
          applyAction
        )
      }
      <div>
        {
          ItemsTable(
            listItems, 
            updateSelectedId, 
            setSelectedIds
          )
        }
      </div>
    </>
  );
};

// bulk actions
export const BulkActions = (
  bulkOptions, 
  selectedOption, 
  optionElem, 
  buttonLabel, 
  applyState, 
  buttonState, 
  applyAction
) => {
  
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
            <option key={index} data-action={data.actionName} value={data.value}>
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
        onClick={e => applyAction(e)}
        disabled={bulkOptions.length > 1 ? buttonState : false}
      />
    </div>
  );
}

// select all elements
export const SelectAll = (
  elemName, 
  setSelectedIds, 
  listItems
) => {
  const arrItems = listItems.map(function(data) {return {id: data.id};});
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
  return (
    <>
      <input type="checkbox" id="selectAll" className="sui-checkbox" style={{ cursor: "pointer" }} name="Select all" aria-label="Select all" onClick={selectAllIds}/>
      <label htmlFor="selectAll">Select all</label>
    </>
  );
};

// table items
export const ItemsTable = (
  listItems, 
  updateSelectedId, 
  setSelectedIds
) => {
  return (
    <Box>
      <Accordion>
        { SelectAll(
          "sui checkbox", 
          setSelectedIds, 
          listItems
        )}
        {listItems.map(( data, index ) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              className="sui-checkbox"
              style={{ cursor: "pointer" }}
              onChange={(e) => updateSelectedId(e, data.id)}
              value={data.id}
              name="sui checkbox"
              aria-label="Item"
            />
            <AccordionItem style={{ width: "100%" }} key={ index } { ...data } />
          </div>
        ))}
      </Accordion>
    </Box>    
  );
};
