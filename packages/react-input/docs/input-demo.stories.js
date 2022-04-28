import React from 'react';
import { Input } from '../lib/react-input';

export default {
	title: 'Components/Input',
	component: Input,
	parameters: {
		actions: {
			disabled: true,
		},
		notes: {
			disabled: true,
		},
	},
};

export const demo = (args) => <Input {...args} />;
demo.storyName = 'Demo';
demo.args = {
	label: 'Company Name',
	placeholder: 'Eg. Acme Industries',
	description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
	errorDescription: 'Here is a description of the error',
};
demo.argTypes = {
	// Elements
	label: {
		description: 'Use this property to add a label for the input.',
		table: {
			category: 'Elements',
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	placeholder: {
		description: 'This property allows you to include a placeholder for the input.',
		table: {
			category: 'Elements',
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	description: {
		description: 'When you need to include a description below the input field, use this property.',
		table: {
			category: 'Elements',
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	errorDescription: {
		description: 'This property will help you to include an error message below the input field.',
		table: {
			category: 'Elements',
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	// Field Modifiers
	fieldSize: {
		description: 'Modify the size of the entire container. Allowed options:',
		table: {
			category: 'Field Modifiers',
			type: {
				summary: 'small | medium'
			},
		},
		control: {
			type: 'select',
			options: {
				none: '',
				small: 'small',
				medium: 'medium',
			},
		},
	},
	// Input Modifiers
	type: {
		description: 'This property will determine the type of field for the input. Below are the allowed values for this field:',
		table: {
			category: 'Input Modifiers',
			type: {
				summary: 'text | number | email | password | tel | time | url | hidden',
			},
			defaultValue: {
				summary: 'text',
			},
		},
		control: {
			type: 'text',
		},
	},
	size: {
		description: 'Modify the size of the input field only. Allowed options:',
		table: {
			category: 'Input Modifiers',
			type: {
				summary: 'small | medium'
			},
		},
		control: {
			type: 'select',
			options: {
				none: '',
				small: 'small',
				medium: 'medium',
			},
		},
	},
	prefix: {
		description: 'This property allows you to add some text before the input.',
		table: {
			category: 'Field Modifiers',
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	// States
	disabled: {
		description: 'This property allows you to enable or disable the input field.',
		table: {
			category: 'States',
			type: {
				summary: 'boolean',
			},
		},
		control: {
			type: 'boolean',
		},
	},
	errorStatus: {
		description: 'Set this property to **true** whether the input has an error to show the error message, if added one, and paint the input field in red.',
		table: {
			category: 'States',
			type: {
				summary: 'boolean',
			},
		},
		control: {
			type: 'boolean',
		},
	},
};
