import React from "react"
import {Textarea} from "../lib/react-textarea"


export default {
	title: "Components/Textarea",
	component: Textarea
};

const primary = (args) => {
    return <Textarea {...args} />;
  };

primary.storyName = 'Default';
primary.argTypes = {
    error: {
		description: 'Whether the textarea has a error state',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: "boolean"
		}
	},
}
primary.args = {
  label: 'Title',
  desc: 'Enter description here',
  placeholder: "Enter placeholder here",
  errorText: "Enter a error message here"
};

export { primary };