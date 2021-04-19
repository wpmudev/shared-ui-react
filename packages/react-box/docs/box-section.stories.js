import React from "react";
import { Box, BoxBody, BoxSection } from '../lib/box';

// Import documentation.
import DocsSection from "./notes/docs-section.md";

export default {
	title: "Containers/Box/Elements/Section",
	component: BoxSection
};

const Template = args => {
	return (
		<Box>
			<BoxBody>
                <BoxSection {...args}>
                    <p>Content</p>
                </BoxSection>
                <BoxSection {...args}>
                    <p>Content</p>
                </BoxSection>
            </BoxBody>
		</Box>
	);
};

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {
    title: 'Title',
    description: 'Quick description'
};
primary.argTypes = {
    title: {
        name: 'title',
        type: {
            name: 'string',
            required: false
        },
        description: '...',
        control: {
            type: 'text'
        }
    },
    description: {
        type: {
            name: 'string',
            required: false
        },
        description: '...',
        control: {
            type: 'text'
        }
    },
};
primary.parameters = {
    notes: DocsSection
};