import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Toggles } from '../lib/react-toggles';

export default {
	title: 'Components/Toggles/Sub Content',
	component: Toggles,
	args: {
		toggleState: true,
		disabled: false,
		htmlFor: 'unique-id',
		arialabelldby: 'unique-id-label',
		ariadescribedby: 'unique-id-description',
		label: 'Toggle Label',
		description: 'Toggle description goes here.',
		id: 'unique-id',
		subContent: true,
		labelHidden: false,
	},
	argTypes: {
		toggleState: {
			description: 'Toggle state',
			control: {
				type: 'boolean',
			},
		},
		disabled: {
			description: 'Toggle disabled',
			control: {
				type: 'boolean',
			},
		},
		htmlFor: {
			description: 'HTML for',
			control: {
				type: 'text',
			},
		},
		arialabelldby: {
			description: 'ARIA label by',
			control: {
				type: 'text',
			},
		},
		ariadescribedby: {
			description: 'ARIA described by',
			control: {
				type: 'text',
			},
		},
		label: {
			description: 'Label',
			control: {
				type: 'text',
			},
		},
		description: {
			description: 'Description',
			control: {
				type: 'text',
			},
		},
		id: {
			description: 'ID',
			control: {
				type: 'text',
			},
		},
		subContent: {
			description: 'Sub content',
			control: {
				type: 'boolean',
			},
		},
		labelHidden: {
			description: 'The label is visually hidden but available for screen readers.',
			control: {
				type: 'boolean',
			},
		},
	},
};

const Template = (args) => (
	<Box>
		<BoxBody>
			<Toggles {...args} />
		</BoxBody>
	</Box>
);

export const primary = Template.bind({});
primary.storyName = 'On - Default';

export const label = Template.bind({});
label.storyName = 'Off - Active';
label.args = {
	toggleState: false,
};
