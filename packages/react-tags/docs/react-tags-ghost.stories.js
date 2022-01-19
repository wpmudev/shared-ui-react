import React from 'react';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Ghost',
	component: Tags,
	parameters: {
		backgrounds: {
			default: 'White',
		},
	},
	args: {
		text: 'Primary',
		color: 'red',
		size: 'default',
		truncated: false,
		uppercase: false,
		ghost: true,
	},
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: ['default', 'red', 'yellow', 'green', 'blue', 'purple', 'disabled'],
			},
		},
		size: {
			control: {
				type: 'select',
				options: { default: 'default', small: 'sm', 'mini pro': 'pro', 'mini beta': 'beta' },
			},
		},
		truncated: { control: { type: 'boolean' } },
		uppercase: { control: { type: 'boolean' } },
		ghost: { control: { type: 'boolean' } },
	},
};

const Template = ({ ...props }) => {
	return <Tags {...props} />;
};

export const primary = Template.bind({});
primary.storyName = 'Red';

export const yellow = Template.bind({});
yellow.storyName = 'Yellow';
yellow.args = {
	color: 'yellow',
};

export const green = Template.bind({});
green.storyName = 'Green';
green.args = {
	color: 'green',
};

export const blue = Template.bind({});
blue.storyName = 'Blue';
blue.args = {
	color: 'blue',
};

export const purple = Template.bind({});
purple.storyName = 'Purple';
purple.args = {
	color: 'purple',
};
