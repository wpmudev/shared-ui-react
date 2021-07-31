import React from "react";
import { ReactBulkActions } from "../lib/react-bulk-actions";

export default {
	title: 'Components/Bulk Actions',
	component: ReactBulkActions,
}

export const primary = ( args ) => ReactBulkActions ({ ...args });
primary.storyName = 'Bulk Actions';
primary.args = {
  description:"Bulk Actions"
};
primary.argTypes = {
  description:'string'
};