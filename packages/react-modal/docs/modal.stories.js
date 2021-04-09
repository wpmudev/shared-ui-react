import React from "react";
import { Box, BoxHeader, BoxTitle, BoxBody, BoxFooter, BoxSection } from "../../react-box/lib/box";
import { ButtonIcon } from "../../react-button-icon/lib/react-button-icon";
import { Button } from "../../react-button/lib/button";
import { Modal } from "../lib/modal";

export default {
	title: "Containers/Modal",
	component: Modal,
};
const Template = args => <Modal {...args}></Modal>;

export const wrapper = Template.bind({});

const headerContent = ( { closeModal } ) =>{
	return (
		<BoxHeader extraClasses="sui-flatten sui-content-center sui-spacing-top--60">
			<div className="sui-actions-right">
				<ButtonIcon
					id="le-dialog-id-header-close-button"
					label="Close this dialog window"
					icon="close"
					iconSize="md"
					extraClasses="sui-button-float--right sui-md"
					onClick={ closeModal }
				/>
			</div>
			<BoxTitle id="sui-modal-one-title" extraClasses="sui-lg">Import</BoxTitle>
			<p id="sui-dialog-one-description" className="sui-description">Choose the configuration file and the settings you want to import.</p>
		</BoxHeader>
	)
};

const bodyContent = ( { closeModal } ) => {
	return (
		<BoxBody>
			<div>
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
				<div>
					<Button onClick={closeModal} label="Close Modal" />
				</div>
			</div>
		</BoxBody>
	)
};

const renderContent = ( { closeModal } ) => {
	return (
		<Box>
			{ headerContent( { closeModal } ) }
			{ bodyContent( { closeModal } ) }
		</Box>
	);
}

const triggerContent = ( { openModal } ) => {
	return <Button onClick={ openModal } label="Open" />
};

wrapper.storyName = "Modal Wrapper";

wrapper.args = {
	titleId:"sui-modal-one-title",
	size: "md",
	dialogId: "le-dialog-id",
	renderContent,
	triggerContent,
};
