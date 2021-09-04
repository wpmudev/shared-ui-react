import React from 'react';
import { Input } from '../lib/react-input';

export default {
	title: 'Components/Input',
	component: Input,
}

export const primary = ( args ) => <Input { ...args } />;
primary.storyName = 'Text Input';
primary.args = {
    label: 'Company Name',
    placeholder: 'Eg. Acme Industries',
    description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
		errorStatus:false,
		errorDescription: 'Here is a description of the error',
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
		<Input { ...args } />
	);
};
secondary.storyName = 'Number Input';
secondary.args = {
	type: 'number',
    label: 'Yearzz',
    placeholder: 'Eg. 10',
    description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
	min: 0,
	errorStatus:false,
	errorDescription: 'Here is a discription of the error',
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