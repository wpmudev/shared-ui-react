import React from 'react';
import { Input } from '../lib/input';

export default {
	title: 'Components/Form/Input',
	component: Input,
}

export const primary = ( args ) => <Input { ...args } />;
primary.storyName = 'Text Input';
primary.args = {};
primary.argTypes = {
	maxLength: {
		type: 'number'
	},
	placeholder: {
		type: 'string',
	},
	size: {
		type: 'string',
		control: {
			type: 'select',
			options: [
				'',
				'small',
				'medium'
			],
		}
	}
};

export const secondary = ( args ) => {
	return (
		<Input type="number" { ...args } />
	);
};
secondary.storyName = 'Number Input';
secondary.args = {
	min: 0
};
secondary.argTypes = {
	min: {
		type: 'number'
	},
	max: {
		type: 'number'
	},
	placeholder: {
		type: 'string',
	},
	small: {
		type: 'boolean'
	}
};