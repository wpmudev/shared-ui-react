import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { FieldList } from '../lib/react-field-list';

export default {
	title: 'Components/Field list',
	component: FieldList,
	args: {
		title: 'Link To',
		description: 'Choose content you want to convert to links.',
	},
	argTypes: {
		title: {
			description: 'Title of the field list',
			control: {
				type: 'text',
			},
		},
		description: {
			description: 'Description of the field list',
			control: {
				type: 'text',
			},
		},
	},
};

const Template = (args) => (
	<Box>
		<BoxBody>
			<FieldList {...args} />
		</BoxBody>
	</Box>
);

export const primary = Template.bind({});
primary.storyName = 'Default';
