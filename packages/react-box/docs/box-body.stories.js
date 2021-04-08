import React from "react";
import { Box, BoxBody } from '../lib/box';

// Import documentation.
import DocsBody from "./notes/docs-body.md";

export default {
	title: "Containers/Box/Body",
	component: BoxBody
};

const Template = args => {
	return (
		<Box>
			<BoxBody {...args}>
                <p>Hello content</p>
            </BoxBody>
		</Box>
	);
};

export const SimpleBody = Template.bind({});
SimpleBody.storyName = 'Basic Content';
SimpleBody.args = {};
SimpleBody.argTypes = {};
SimpleBody.parameters = {
    notes: DocsBody,
    controls: {
        hideNoControlsWarning: true
    }
};