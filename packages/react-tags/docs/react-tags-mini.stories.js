import React from 'react';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Mini',
	component: Tags,
	args: {
		text: 'Pro',
		color: 'default',
		size: 'pro',
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
primary.storyName = 'Pro';

export const red = Template.bind({});
red.storyName = 'Beta';
red.args = {
	text: 'Beta',
	size: 'beta',
};
