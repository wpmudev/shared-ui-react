import React from 'react'
import { MultiString } from '../lib/multistrings'

export default {
	title: 'Components/Multi Strings/Demo',
	component: MultiString,
	parameters: {
		actions: {
			disabled: true,
		},
		notes: {
			disabled: true,
		},
	},
};

export const demo = (args) => <MultiString {...args} />;
demo.storyName = 'Demo';
demo.args = {
	uniqueId: 'exclusion-list',
	label: 'Global file exclusions',
	placeholder: 'Enter a new value',
	description: 'Use relative paths to the file or folder. For example <strong style="color: #333;">/wp-content/custom-folder/</strong> or <strong style="color: #333;">/file.php</strong>. Press enter to add each exclusion.',
};
demo.argTypes = {
	// Elements
	uniqueId: {
		description: 'Use this to generate the unique id to field, label and description.',
		table: {
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	label: {
		description: 'Use this property to add a label for the input.',
		table: {
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
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	description: {
		description: 'When you need to include a description below the textarea field, use this property you can add html as well.',
		table: {
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	values: {
		description: 'Set the default values of multistring field.',
		table: {
			type: {
				summary: 'array',
			},
		},
		control: {
			type: 'array',
		},
	},
	disallowedChars: {
		description: 'Add the chars, word or ascii code seperated by commas to exclude it from field.',
		table: {
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	}
};