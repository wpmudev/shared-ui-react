import React from 'react';
import { Button } from '../lib/button';

export default {
	title: 'Button',
	component: Button,
}

const Template = ( args ) => <Button { ...args } />

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {
	label: 'Hello button'
};

export const secondary = Template.bind({});
secondary.storyName = 'Outlined';
secondary.args = {
	...primary.args,
	ghost: true
};