import React from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from '../lib/box';

export default {
	title: 'Containers/Box',
	component: Box,
};

const Wrapper = (args) => {
	return (
		<Box>
			<BoxHeader {...args.header} />
			<BoxBody {...args.body} />
			<BoxFooter {...args.footer} />
		</Box>
	);
};
Wrapper.storyName = 'Box';
Wrapper.args = {
	header: {
		title: 'Box Header',
	},
	body: {
		children: 'Box Body, allows regular content.',
	},
	footer: {
		children: 'Box Footer, allows actions like "save" or "cancel".',
	},
};

export { Wrapper };
