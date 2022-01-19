import React from 'react';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Small',
	component: Tags,
	parameters: {
		backgrounds: {
			default: 'White',
		},
	},
	args: {
		text: 'Primary',
		color: 'default',
		size: 'sm',
		truncated: false,
		uppercase: false,
		ghost: false,
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
primary.storyName = 'Default';

export const red = Template.bind({});
red.storyName = 'Red';
red.args = {
	color: 'red',
};

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

export const disabled = Template.bind({});
disabled.storyName = 'Disabled';
disabled.args = {
	color: 'disabled',
};
