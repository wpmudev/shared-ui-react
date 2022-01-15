import React from 'react';
import { Calendar } from '../lib/react-calendar';

export default {
	title: 'Components/Calendar',
	argTypes: {
		type: {
			description: 'Select the type of calendar',
			control: {
				type: 'select',
				options: {
					Single: 'single',
					Range: 'range',
				},
			},
		},
		errorStatus: {
			description: 'Error message',
			control: {
				type: 'boolean',
			},
		},
	},
};

const Template = ({ ...args }) => {
	return <Calendar {...args} />;
};

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {
	type: 'single',
};

export const secondary = Template.bind({});
secondary.storyName = 'Range';
secondary.args = {
	type: 'range',
};

export const error = Template.bind({});
error.storyName = 'Error';
error.args = {
	type: 'range',
	errorStatus: true,
};
