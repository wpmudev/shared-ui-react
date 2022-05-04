import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { FieldList } from '../lib/react-field-list';

export default {
	title: 'Components/Field list',
	component: FieldList,
	args: {
		title: 'Link To',
		description: 'Choose content you want to convert to links.',
		options: {
			'toggle-1': 'Posts',
			'toggle-2': 'Pages',
			'toggle-3': 'Categories',
			'toggle-4': 'Tags',
		},
	},
	argTypes: {
		title: {
			description: 'Title of the field list.',
			control: {
				type: 'text',
			},
		},
		description: {
			description: 'Description of the field list.',
			control: {
				type: 'text',
			},
		},
		options: {
			description:
				'Options of the field list (key: value). Key will be the id of the checkbox and value will be the name of the option. For eg: toggle-1 will be the id of the checkbox and Posts will be the name of the option.',
			control: {
				type: 'object',
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
