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
				options: { Button: 'button', Link: 'a', Text: 'span' },
			},
		},
		text: {
			description: 'The content of the tag.',
			control: {
				type: 'text',
			},
		},
		color: {
			description: 'The color of the tag that will be filled background.',
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
			description: 'By default tags are multi-line, this mean height of the tag will adjust depending on the amount of text and its width. But there are times when you will need to truncate text inside tag instead using multi-line text.',
			control: { type: 'boolean' },
		},
		uppercase: {
			description: 'Some tags require to have uppercase text.',
			control: { type: 'boolean' },
		},
		ghost: {
			description: 'Some designs will require outlined tags.',
			control: { type: 'boolean' },
		},
		href: {
			description: 'The href of the tag.',
			control: { type: 'text' },
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
