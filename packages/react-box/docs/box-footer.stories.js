import React from "react";
import { Box, BoxFooter } from '../lib/box';
import { Button } from '@wpmudev/react-button';

// Import documentation.
import DocsFooter from "./notes/docs-footer.md";

export default {
	title: "Containers/Box/Elements/Footer",
	component: BoxFooter
};

const Template = args => {
	return (
		<Box>
			<BoxFooter {...args} />
		</Box>
	);
};

export const SimpleFooter = Template.bind({});
SimpleFooter.storyName = 'Single Action';
SimpleFooter.args = {};
SimpleFooter.argTypes = {
    children: {
        defaultValue: <Button label="Save Changes" color="blue" />
    }
};
SimpleFooter.parameters = {
    notes: DocsFooter,
    controls: {
        hideNoControlsWarning: true
    }
};