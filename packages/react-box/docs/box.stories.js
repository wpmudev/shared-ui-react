import React from "react";
import { Box, BoxHeader, BoxBody, BoxFooter, BoxSection } from "../lib/box";

// Import documentation.
import DocsWrapper from "./notes/docs-wrapper.md";
import DocsHeader from "./notes/docs-header.md";
import DocsBody from "./notes/docs-body.md";
import DocsSection from "./notes/docs-section.md";
import DocsFooter from "./notes/docs-footer.md";

export default {
	title: "Containers/Box",
	component: Box,
	subcomponents: {
		BoxHeader,
		BoxBody,
		BoxFooter,
		BoxSection
	}
};

export const wrapper = args => {
	return (
		<Box>
			<BoxHeader {...args}>
				<button className="sui-button">Action</button>
			</BoxHeader>
			<BoxBody>
				<p>
					This is box body component. It can only be used inside{" "}
					<code>{`<Box>`}</code> component.
				</p>
				<BoxSection
					title="Section Title"
					description="A brief description about this section goes here.">
					<p>Section content goes here.</p>
				</BoxSection>
			</BoxBody>
			<BoxFooter>
				<button className="sui-button">Action</button>
			</BoxFooter>
		</Box>
	);
};
wrapper.storyName = "Box Wrapper";
wrapper.args = {
	title: "Box Title",
	titleIcon: "hummingbird",
	titleTagLabel: 'Beta Service',
	titleTagColor: 'blue',
	className: 'custom-class'
};
wrapper.argTypes = {};
wrapper.parameters = {
	notes: DocsWrapper
};

export const header = args => {
	return (
		<Box>
			<BoxHeader {...args}>
				<span>Right actions</span>
			</BoxHeader>
		</Box>
	);
};
header.storyName = "Box Header";
header.args = {
	...wrapper.args
};
header.argTypes = {
	...wrapper.argTypes
};
header.parameters = {
	notes: DocsHeader
};

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
