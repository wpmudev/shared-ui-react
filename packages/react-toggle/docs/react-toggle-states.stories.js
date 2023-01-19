import React from "react";
import { Toggle } from "../lib/react-toggle";

export default {
	title: 'Components/Toggle/States',
	component: Toggle,
};

export const Primary = args => {
	return <Toggle { ...args } />;
}
Primary.storyName = 'Default';
Primary.args = {
	id: 'sample-toggle',
	label: 'Toggle Label',
	hideLabel: false,
	disabled: false,
}

export const Secondary = args => {
	return <Toggle checked={ true } { ...args } />;
}
Secondary.storyName = 'Checked';
Secondary.args = {
	...Primary.args
}

export const Tertiary = args => {
	return <Toggle { ...args } />;
}
Tertiary.storyName = 'Disabled';
Tertiary.args = {
	...Primary.args,
	disabled: true
}
