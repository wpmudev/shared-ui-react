import React from "react";
import { Box, BoxHeader, BoxBody } from "@wpmudev/react-box";
import { ReactBulkActions } from "../lib/react-bulk-actions";

export default {
  title: "Components/Actions",
  component: ReactBulkActions,
};

export const primary = args => {
  return (
    <Box>
      <BoxHeader title="Bulk Actions"/>
      <BoxBody>
        <ReactBulkActions {...args}></ReactBulkActions>
      </BoxBody>
    </Box>
  );
};

// delete function
const deleteFunc = (ids) => {
	console.log("Delete bulk action.");
  console.log(ids);
};

// edit section
const editFunc = (ids) => {
	console.log("Edit bulk action.");
  console.log(ids);
};

primary.storyName = "Bulk Actions";
primary.args = {
	description: "Bulk Actions",
	bulkActionsLabel: [
    {
      title: "Delete",
      value: "delete",
      actionName: "deleteAction"
    },
    {
      title: "Edit",
      value: "edit",
      actionName: "editAction"
    }
  ],
  bulkActions: { "deleteAction": deleteFunc, "editAction": editFunc },
	buttonLabel: 'Apply',
  buttonAction: deleteFunc,
  listItems: [
    {
      id: 1,
      title: 'Accordion Item 1',
      children: (
        <Box>
            <BoxBody>
                <p>Accordion Item 1 – Hello world!</p>
            </BoxBody>
        </Box>
      )
    },
    {
      id: 2,
      title: 'Accordion Item 2',
      children: (
        <Box>
            <BoxBody>
                <p>Accordion Item 2 – Hello world!</p>
            </BoxBody>
        </Box>
      )
    },
    {
      id: 3,
      title: 'Accordion Item 3',
      children: (
        <Box>
            <BoxBody>
                <p>Accordion Item 3 – Hello world!</p>
            </BoxBody>
        </Box>
      )
    }
  ]
};
primary.argTypes = {
	description: "string",
  buttonLabel: "string"
};