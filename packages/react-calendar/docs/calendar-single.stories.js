import React from 'react';
import { Calendar } from '../lib/react-calendar';

export default {
	title: 'Components/Calendar',
	args: {
		type: 'single',
	},
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

export const secondary = Template.bind({});
secondary.storyName = 'Range';
secondary.args = {
	type: 'range',
};
