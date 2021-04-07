import React from "react";
import { Box, BoxHeader, BoxBody, BoxFooter, BoxSection } from "../lib/box";

// Import documentation.
import DocsWrapper from "./notes/docs-wrapper.md";
import DocsBody from "./notes/docs-body.md";
import DocsSection from "./notes/docs-section.md";
import DocsFooter from "./notes/docs-footer.md";

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

const Body = args => {
	return (
		<Box>
			<BoxBody {...args} />
		</Box>
	);
};
Body.storyName = 'Box Body';
Body.args = {};
Body.argTypes = {};
Body.parameters = {
	notes: DocsBody
};

export { Wrapper, Body };

export const body = () => {
	return (
		<Box>
			<BoxBody>
				<p>Box Body</p>
			</BoxBody>
		</Box>
	);
};
body.storyName = "Box Body";
body.parameters = {
	controls: {
		hideNoControlsWarning: true
	},
	notes: DocsBody
};

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

export const footer = () => {
	return (
		<Box>
			<BoxFooter>
				<p>Box Footer</p>
			</BoxFooter>
		</Box>
	);
};
footer.storyName = "Box Footer";
footer.parameters = {
	controls: {
		hideNoControlsWarning: true
	},
	notes: DocsFooter
};
