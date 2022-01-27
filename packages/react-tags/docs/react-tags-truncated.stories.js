import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Truncated',
	component: Tags,
	args: {
		type: 'text',
		text: 'Multiple line tag',
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

export const truncated = Template.bind({});
truncated.storyName = 'Truncated';
truncated.args = {
	truncated: true,
};
