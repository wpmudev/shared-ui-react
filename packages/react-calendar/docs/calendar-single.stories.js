import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Calendar } from '../lib/react-calendar';

export default {
	title: 'Components/Calendar',
	args: {
		type: 'single',
		arialabelledby: 'unique-id--label',
		ariadescribedby: 'unique-id--message unique-id--error',
	},
	argTypes: {
		type: {
			description: 'Select the type of calendar',
			control: {
				type: 'select',
				options: {
					Single: 'single',
					Range: 'range',
				},
			},
		},
		errorStatus: {
			description: 'Error message',
			control: {
				type: 'boolean',
			},
		},
		arialabelledby: {
			description: 'Aria label for the calendar',
			control: {
				type: 'text',
			},
		},
		ariadescribedby: {
			description: 'Aria label for the calendar',
			control: {
				type: 'text',
			},
		},
	},
};

const Template = ({ ...args }) => {
	return (
		<Box>
			<BoxBody>
				<Calendar {...args} />
			</BoxBody>
		</Box>
	);
};

export const primary = Template.bind({});
primary.storyName = 'Default';

export const secondary = Template.bind({});
secondary.storyName = 'Range';
secondary.args = {
	type: 'range',
};
