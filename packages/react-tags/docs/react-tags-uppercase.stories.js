import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Uppercase',
	component: Tags,
	args: {
		type: 'text',
		text: 'Blue',
		color: 'blue',
		size: 'default',
		truncated: false,
		uppercase: true,
		ghost: false,
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
primary.storyName = 'Default';

export const ghost = Template.bind({});
ghost.storyName = 'Ghost';
ghost.args = {
	ghost: true,
};

export const small = Template.bind({});
small.storyName = 'Small';
small.args = {
	size: 'sm',
};

export const smallGhost = Template.bind({});
smallGhost.storyName = 'Small Ghost';
smallGhost.args = {
	size: 'sm',
	ghost: true,
};
