import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Ghost',
	component: Tags,
	args: {
		type: 'text',
		text: 'Primary',
		color: 'red',
		size: 'default',
		truncated: false,
		uppercase: false,
		ghost: true,
	},
	argTypes: {
		type: {
			description: 'The type of the tag.',
			control: {
				type: 'select',
				options: ['button', 'link', 'text'],
			},
		},
		text: {
			description: 'The text of tag.',
			control: {
				type: 'text',
			},
		},
		color: {
			description: 'The color of tag.',
			control: {
				type: 'select',
				options: ['default', 'red', 'yellow', 'green', 'blue', 'purple', 'disabled'],
			},
		},
		size: {
			description: 'The size of tag.',
			control: {
				type: 'select',
				options: { default: 'default', small: 'sm', 'mini pro': 'pro', 'mini beta': 'beta' },
			},
		},
		truncated: {
			description: 'The text of tag will be truncated or not.',
			control: { type: 'boolean' },
		},
		uppercase: {
			description: 'The text of tag will be uppercase or not.',
			control: { type: 'boolean' },
		},
		ghost: {
			description: 'The tag background will be transparent.',
			control: { type: 'boolean' },
		},
	},
};

const Template = ({ ...props }) => {
	return (
		<Box>
			<BoxBody>
				<Tags {...props} />
			</BoxBody>
		</Box>
	);
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
