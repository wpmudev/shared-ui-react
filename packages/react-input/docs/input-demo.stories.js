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
	// Modifiers
	type: {
		description: 'This property will determine the type of field for the input. Below are the allowed values for this field:',
		table: {
			category: 'Modifiers',
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
	// Modifiers | Field Affix
	prefix: {
		description: 'This property adds a prefix, some text before the input.',
		table: {
			category: 'Modifiers',
			subcategory: 'Field Affix',
			type: { summary: 'string' },
		},
		control: {
			type: 'text',
		},
	},
	suffix: {
		description: 'This property adds a suffix, some text after the input.',
		table: {
			category: 'Modifiers',
			subcategory: 'Field Affix',
			type: { summary: 'string' },
		},
		control: {
			type: 'text',
		},
	},
	// Modifiers | Field Size
	size: {
		description: 'Modify the size of the input field or the entire container. Allowed options:',
		table: {
			category: 'Modifiers',
			subcategory: 'Field Size',
			type: {
				summary: 'small | medium'
			},
		},
		control: {
			type: 'select',
			options: {
				default: '',
				small: 'small',
				medium: 'medium',
			},
		},
	},
	constrainedField: {
		description: 'When this property is enabled, it allows the whole container to be resized based on the `size` property option.',
		table: {
			category: 'Modifiers',
			subcategory: 'Field Size',
			type: {
				summary: 'boolean',
			},
			defaultValue: {
				summary: 'false',
			},
		},
		control: {
			type: 'boolean',
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
