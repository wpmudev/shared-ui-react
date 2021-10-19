import React from "react";
import { Box, BoxHeader, BoxBody, BoxFooter } from "@wpmudev/react-box";
import { Accordion, AccordionItem } from "@wpmudev/react-accordion";
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

primary.storyName = "Bulk Actions";
primary.args = {
	description: "Bulk Actions",
	bulkActions: [
    {
      title: "Delete",
      value: "delete",
      actionName: "deleteAction",
      action: "deleteAction",
    },
    {
      title: "Edit",
      value: "edit",
      actionName: "editAction",
      action: "editAction",
    },
  ],
	buttonLabel: 'Apply',
  tableItems: [
    {
      id: 1,
      title: "Title 1",
      content: "Content"
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content"
    },
    {
      id: 3,
      title: "Title 3",
      content: "Content"
    }
  ]
};
primary.argTypes = {
	description: "string",
  buttonLabel: "string"
};