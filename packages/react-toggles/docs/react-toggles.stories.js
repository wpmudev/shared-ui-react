import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Toggles } from '../lib/react-toggles';

export default {
	title: 'Components/Toggles',
	component: Toggles,
	args: {},
	argTypes: {},
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
