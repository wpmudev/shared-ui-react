import React from 'react';
import { Input } from '../lib/react-input';

export default {
	title: 'Form/Input',
	component: Input,
}

export const primary = ( args ) => <Input { ...args } />;
primary.storyName = 'Text Input';
primary.args = {
    label: 'Company Name',
    maxLength: '',
    placeholder: 'Eg. Acme Industries',
    description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
};
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
    label: 'Year',
    placeholder: 'Eg. 10',
    description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
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