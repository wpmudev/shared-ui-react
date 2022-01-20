import React from 'react';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Mini',
	component: Tags,
	parameters: {
		backgrounds: {
			default: 'White',
		},
	},
	args: {
		text: 'Pro',
		color: 'default',
		size: 'pro',
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
primary.storyName = 'Pro';

export const red = Template.bind({});
red.storyName = 'Beta';
red.args = {
	text: 'Beta',
	size: 'beta',
};
