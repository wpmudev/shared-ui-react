import React from 'react';
import { Box, BoxBody } from '../lib/box';

export default {
	title: 'Containers/Box/Elements/Body',
	component: BoxBody,
};

const Template = (args) => {
	return (
		<Box>
			<BoxBody {...args}>
				<p>Hello content</p>
			</BoxBody>
		</Box>
	);
};

export const DefaultBody = Template.bind({});
DefaultBody.storyName = 'Body';
DefaultBody.args = {};
DefaultBody.argTypes = {
	alignment: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		options: ['left', 'center','right'],
		control: {
			type: 'select',
		},
	},
	paddingTop: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
	paddingRight: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
	paddingBottom: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
	paddingLeft: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
	borderTop: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
	borderBottom: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
};
