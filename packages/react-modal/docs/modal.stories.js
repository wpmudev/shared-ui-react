import React from "react";
import { Box, BoxHeader, BoxTitle, BoxBody, BoxFooter, BoxSection } from "../../react-box/lib/box";
import { Modal } from "../lib/modal";
import { Button } from "../../react-button/lib/button";

export default {
	title: "Containers/Modal",
	component: Modal,
};

export const wrapper = args => {
	return (
		<Box>
			<BoxHeader>
				<BoxTitle>Modal</BoxTitle>
			</BoxHeader>
			<BoxBody>
				<p>This is box body component. It can only be used inside{" "}</p>
				<BoxSection
					title="Section Title"
					description="A brief description about this section goes here.">
					<p>Section content goes here.</p>
				</BoxSection>

			</BoxBody>
			<BoxFooter>
				<Modal { ...args }>
					<p>Something</p>
				</Modal>
			</BoxFooter>
		</Box>
	);
};

const headerContent = (
	<React.Fragment>
		<BoxTitle id="sui-modal-one-title" extraClasses="sui-lg">Import</BoxTitle>
		<p id="sui-dialog-one-description" className="sui-description">Choose the configuration file and the settings you want to import.</p>
	</React.Fragment>
);

const bodyContent = (
	<p>
		Modal
		{' '}
		<a id="something" href="#">with</a>
		{' '}
		<a href="#">some</a>
		{' '}
		<a href="#">focusable</a>
		{' '}
		parts.
	</p>
);

const openButton = (
	<Button label="Open" />
);

wrapper.storyName = "Modal Wrapper";

wrapper.args = {
	titleId:"sui-modal-one-title",
	size: "md",
	dialogId: "le-dialog-id",
	bodyContent,
	openButton,
	headerArgs: {
		extraClasses: "sui-flatten sui-content-center sui-spacing-top--60",
	},
	headerContent,
};
