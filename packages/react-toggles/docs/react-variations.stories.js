import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Toggles } from '../lib/react-toggles';

export default {
	title: 'Components/Toggles/Variations',
	component: Toggles,
	args: {
		toggleState: true,
		disabled: false,
		htmlFor: 'unique-id',
		arialabelldby: 'unique-id-label',
		ariadescribedby: 'unique-id-description',
		label: 'Toggle Label',
		description: '',
		id: 'unique-id',
		subContent: false,
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
primary.storyName = 'Label - Default';

export const label = Template.bind({});
label.storyName = 'Label - Hidden';
label.args = {
	toggleState: false,
	labelHidden: true,
	description: '',
};

export const description = Template.bind({});
description.storyName = 'Description - Default';
description.args = {
	toggleState: false,
	labelHidden: false,
	description: 'Toggle description goes here.',
};
