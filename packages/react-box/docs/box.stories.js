import React from "react";
import { Box, BoxHeader, BoxBody, BoxFooter, BoxSection } from "../lib/box";

// Import documentation.
import DocsWrapper from "./notes/docs-wrapper.md";
import DocsSection from "./notes/docs-section.md";

export default {
	title: "Containers/Box",
	component: Box
};

const Wrapper = args => {
	return (
		<Box>
			<BoxHeader {...args.header} />
			<BoxBody {...args.body} />
			<BoxFooter {...args.footer} />
		</Box>
	)
};
Wrapper.storyName = 'Box Wrapper';
Wrapper.args = {
	header: {
		title: 'Box Header'
	},
	body: {
		children: 'Box Body, allows regular content.'
	},
	footer: {
		children: 'Box Footer, allows actions like "save" or "cancel".'
	}
};
Wrapper.parameters = {
	notes: DocsWrapper
};

export { Wrapper };

export const section = args => {
	return (
		<Box>
			<BoxBody>
				<BoxSection {...args}>
					<p>Section content goes here.</p>
				</BoxSection>
			</BoxBody>
		</Box>
	);
};
section.storyName = "Box Section";
section.args = {
	title: "Section Title",
	description: "A brief description about this section goes here."
};
section.parameters = {
	notes: DocsSection
};
