import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Default',
	component: Tags,
	args: {
		type: 'text',
		text: 'Primary',
		color: 'default',
		size: 'default',
		truncated: false,
		uppercase: false,
		ghost: false,
	},
	argTypes: {
		type: {
			description: 'The type of the tag.',
			control: {
				type: 'select',
				options: { Button: 'button', Link: 'a', Text: 'span' },
			},
		},
		text: {
			description: 'The text of the tag.',
			control: {
				type: 'text',
			},
		},
		color: {
			description: 'The color of the tag.',
			control: {
				type: 'select',
				options: ['default', 'red', 'yellow', 'green', 'blue', 'purple', 'disabled'],
			},
		},
		size: {
			description: 'The size of the tag.',
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
