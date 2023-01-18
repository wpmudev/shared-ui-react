import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Simple',
	component: Tags,
	args: {
		label: 'Primary',
		childrenContent: false,
		color: 'default',
		size: 'default',
		icon: '',
		href: '',
		onClick: '',
		ghost: false,
		uppercase: false,
		truncated: false,
		multiline: false,
	},
	argTypes: {
		label: {
			description: 'The label of the tag.',
			control: {
				type: 'text',
			},
		},
		childrenContent: {
			description: 'If true, the content of the tag will be rendered as children.',
			control: {
				type: 'boolean',
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
		icon: {
			description: 'Add icon inside the tag.',
			control: {
				type: 'text',
			},
		},
		href: {
			description: 'The link or href of the tag.',
			control: { type: 'text' },
		},
		onClick: {
			description: 'The button with onClick function for the tag.',
			control: { type: 'function' },
		},
		ghost: {
			description: 'Some designs will require outlined tags.',
			control: { type: 'boolean' },
		},
		truncated: {
			description:
				'By default tags are multi-line, this mean height of the tag will adjust depending on the amount of text and its width. But there are times when you will need to truncate text inside tag instead using multi-line text.',
			control: { type: 'boolean' },
		},
		uppercase: {
			description: 'Some tags require to have uppercase text.',
			control: { type: 'boolean' },
		},
		multiline: {
			description: 'Some tags require to have multi-line text.',
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
primary.storyName = 'Solid';

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

export const mini = Template.bind({});
mini.storyName = 'Mini';
mini.args = {
	size: 'pro',
};

export const uppercase = Template.bind({});
uppercase.storyName = 'Uppercase';
uppercase.args = {
	color: 'blue',
	uppercase: true,
};

export const multiline = Template.bind({});
multiline.storyName = 'Multiline';
multiline.args = {
	label: 'Multiple line tag',
	multiline: true,
};

export const truncated = Template.bind({});
truncated.storyName = 'Truncated';
truncated.args = {
	label: 'Multiple line tag',
	childrenContent: true,
	truncated: true,
};

export const disabled = Template.bind({});
disabled.storyName = 'Disabled';
disabled.args = {
	color: 'disabled',
};
