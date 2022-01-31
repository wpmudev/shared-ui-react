import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Toggles } from '../lib/react-toggles';

export default {
	title: 'Components/Toggles/Hidden Content',
	component: Toggles,
	args: {
		toggleState: false,
		disabled: false,
		labelId: 'unique-id-label',
		descriptionId: 'unique-id-description',
		label: 'Toggle Label',
		description: '',
		id: 'unique-id',
		additionalSettingsId: 'unique-id-additional-settings',
		additionalSettings: false,
		labelHidden: true,
	},
	argTypes: {
		id: {
			description: 'This will be unique id of the toggle.',
			control: {
				type: 'text',
			},
		},
		toggleState: {
			description: 'The toggle will be on/off.',
			control: {
				type: 'boolean',
			},
		},
		disabled: {
			description: 'The toggle will be disabled.',
			control: {
				type: 'boolean',
			},
		},
		labelId: {
			description: 'This will be unique label id of toggle.',
			control: {
				type: 'text',
			},
		},
		label: {
			description: 'This will be label of the toggle.',
			control: {
				type: 'text',
			},
		},
		labelHidden: {
			description: 'The label will be visually hidden but available for screen readers.',
			control: {
				type: 'boolean',
			},
		},
		descriptionId: {
			description: 'This will be the unique id of the toggle description.',
			control: {
				type: 'text',
			},
		},
		description: {
			description: 'This will be description of the toggle.',
			control: {
				type: 'text',
			},
		},
		additionalSettingsId: {
			description: 'This will be the id of the additional settings.',
			control: {
				type: 'text',
			},
		},
		additionalSettings: {
			description: 'This will show additional settings when turned on.',
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
primary.storyName = 'Default';

export const active = Template.bind({});
active.storyName = 'Active';
active.args = {
	toggleState: true,
};

export const disabled = Template.bind({});
disabled.storyName = 'Disabled';
disabled.args = {
	disabled: true,
};
