import React from 'react';
import { Scores } from '../lib/react-scores';

export default {
	title: 'Components/Scores/Success',
	component: Scores,
	args: {
		score: 95,
		type: 'success',
		size: 'default',
	},
	argTypes: {
		score: {
			description: 'The score value',
			control: {
				type: 'number',
			},
		},
		type: {
			description: 'The scroes color variation.',
			control: {
				type: 'select',
				options: ['error', 'warning', 'success'],
			},
		},
		size: {
			description: 'The scores component size.',
			control: {
				type: 'select',
				options: ['default', 'large'],
			},
		},
	},
};

const Template = (args) => <Scores {...args} />;

export const primary = Template.bind({});
primary.storyName = 'Default';

export const large = Template.bind({});
large.storyName = 'Large';
large.args = {
	size: 'large',
};
