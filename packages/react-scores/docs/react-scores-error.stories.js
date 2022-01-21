import React from 'react';
import { Scores } from '../lib/react-scores';

export default {
	title: 'Components/Scores/Error',
	component: Scores,
	args: {
		score: 15,
		type: 'error',
		size: 'default',
	},
	argTypes: {
		score: {
			description: 'The score value',
			control: {
				type: 'range',
				min: 0,
				max: 100,
				step: 1,
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
