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
