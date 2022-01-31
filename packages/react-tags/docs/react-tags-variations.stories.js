import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Variations',
	component: Tags,
	args: {
		label: 'Primary',
		childrenContent: false,
		color: 'default',
		size: 'default',
		icon: '',
		href: '',
		onClick: () => {
			alert('button clicked.');
		},
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
primary.storyName = 'Button';

export const link = Template.bind({});
link.storyName = 'Link';
link.args = {
	href: 'https://www.wpmudev.org',
	onClick: '',
};

export const icon = Template.bind({});
icon.storyName = 'Icon';
icon.args = {
	icon: 'info',
	childrenContent: true,
	onClick: '',
};
