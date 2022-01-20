import React from 'react';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Truncated',
	component: Tags,
	parameters: {
		backgrounds: {
			default: 'White',
		},
	},
	args: {
		text: 'Multiple line tag',
		color: 'default',
		size: 'default',
		truncated: false,
		uppercase: false,
		ghost: false,
	},
	argTypes: {
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
	return <Tags {...props} />;
};

export const primary = Template.bind({});
primary.storyName = 'Default';

export const truncated = Template.bind({});
truncated.storyName = 'Truncated';
truncated.args = {
	truncated: true,
};
