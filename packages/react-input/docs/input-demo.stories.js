import React from 'react';
import { Input } from '../lib/react-input';

export default {
	title: 'Components/Input',
	component: Input,
	parameters: {
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
	errorStatus: false,
	errorDescription: 'Here is a description of the error',
	size: 'large',
};
demo.argTypes = {
	label: {
		description: 'The label of the input',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
		control: {
			type: 'text',
		},
	},
	maxLength: {
		description: 'The maximum length of the input',
		table: {
			type: { summary: 'number' },
			defaultValue: { summary: '' },
		},
		control: {
			type: 'number',
		},
	},
	placeholder: {
		description: 'The placeholder of the input',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
		control: {
			type: 'text',
		},
	},
	description: {
		description: 'The description of the input',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
		control: {
			type: 'text',
		},
	},
	errorStatus: {
		description: 'Whether the input has an error',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: false },
		},
		control: {
			type: 'boolean',
		},
	},
	errorDescription: {
		description: 'The error description of the input',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
		control: {
			type: 'text',
		},
	},
	constrainedField: {
		description: 'The whole field will be constrainedField.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
	size: {
		description: 'The size of the input',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'large' },
		},
		control: {
			type: 'select',
			options: ['large', 'small', 'medium'],
		},
	},
	type: {
		description: 'The type of the input',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'text' },
		},
		control: {
			type: 'text',
		},
	},
	suffix: {
		description: 'The suffix of the input',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
		control: {
			type: 'text',
		},
	},
	prefix: {
		description: 'The prefix of the input',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
		control: {
			type: 'text',
		},
	},
};
