import React from 'react';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Truncated',
	component: Tags,
	args: {
		text: 'Multiple line tag',
		color: 'default',
		size: 'default',
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
primary.storyName = 'Default';

export const truncated = Template.bind({});
truncated.storyName = 'Truncated';
truncated.args = {
	truncated: true,
};
