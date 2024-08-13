import React from "react";
import { Toggle } from "../lib/react-toggle";

export default {
	title: 'Components/Toggle',
	component: Toggle,
};

export const Demo = args => {
	return <Toggle { ...args } />
}
Demo.storyName = 'Demo';
Demo.args = {
	id: 'sample-toggle',
	label: 'Nibh Mollis',
	hideLabel: false,
	description: 'Donec id elit non mi porta gravida at eget metus.',
	hideDescription: false,
	disabled: false,
	children:
		'Display extra content when the toggle is active. You can use a simple text or full markup. To stop showing this, just remove children content.'
}
Demo.argTypes = {
	cbFunction: {
		action: 'Callback Function'
	}
}
