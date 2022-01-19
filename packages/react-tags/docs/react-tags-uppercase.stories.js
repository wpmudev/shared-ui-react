import React from 'react';
import { Tags } from '../lib/react-tags';

export default {
	title: 'Components/Tags/Uppercase',
	component: Tags,
	args: {
		text: 'Blue',
		color: 'blue',
		size: 'default',
		truncated: false,
		uppercase: true,
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
