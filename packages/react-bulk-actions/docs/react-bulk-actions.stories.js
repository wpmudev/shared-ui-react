import React from "react";
import { reactBulkActions } from "../lib/react-bulk-actions";

export default {
	title: 'Components/Bulk Actions',
	component: reactBulkActions,
}

export const primary = ( args ) => reactBulkActions ({ ...args });
primary.storyName = 'Bulk Actions';
primary.args = {
  description:"Bulk Actions"
};
primary.argTypes = {
  description:'string'
};