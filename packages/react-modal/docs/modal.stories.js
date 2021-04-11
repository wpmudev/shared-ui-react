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

export const simple = Template.bind({});

const headerContent = ( { closeModal } ) =>{
	return (
		<BoxHeader>
			<div className="sui-actions-right">
				<ButtonIcon
					label="Close this dialog window"
					icon="close"
					iconSize="md"
					extraClasses="le-dialog-id-header-close-button sui-button-float--right sui-md"
					onClick={ closeModal }
				/>
			</div>
			<BoxTitle id="sui-modal-one-title">Import</BoxTitle>
			<p id="sui-dialog-one-description" className="sui-description">Choose the configuration file and the settings you want to import.</p>
		</BoxHeader>
	)
};

const bodyContent = () => {
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
			</div>
		</BoxBody>
	)
};

const simpleModalContent = ( { closeModal } ) => {
	return (
		<React.Fragment>
			<Box>
				{ headerContent( { closeModal } ) }
				{ bodyContent( { closeModal } ) }
			</Box>
			<button className="sui-modal-skip" onClick={ closeModal }>Skip this, I know my way around</button>
		</React.Fragment>
	);
};

const triggerContent = ( { openModal } ) => {
	return <Button onClick={ openModal } label="Open Modal" />
};

simple.storyName = "Simple";

simple.args = {
	titleId:"sui-modal-one-title",
	size: "md",
	dialogId: "le-dialog-id",
	modalContent: simpleModalContent,
	triggerContent
};

export const slider = Template.bind({});

const renderOne = ( { closeModal, slideTo } ) => {
	return (
		<React.Fragment>
			<Box>
				{ headerContent( { closeModal } ) }
				{ bodyContent( { closeModal } ) }
				<BoxFooter>
					<Button onClick={ () => slideTo( 'two', 'left' ) } label="Go next" />
				</BoxFooter>
			</Box>
			<button className="sui-modal-skip" onClick={ closeModal }>Skip this, I know my way around</button>
		</React.Fragment>
	);
}
const renderTwo = ( { closeModal, slideTo } ) => {
	return (
		<React.Fragment>
			<Box>
				{ headerContent( { closeModal } ) }
				<BoxBody>
					<p>Dummy</p>
				</BoxBody>
				<BoxFooter>
					<Button onClick={ () => slideTo( 'one', 'right' ) } label="Go back" />
					<Button id="slide-two-focus" onClick={ closeModal } label="Focused" />
				</BoxFooter>
			</Box>
		</React.Fragment>
	);
}

const slideModalContent = {
	'one': {
		render: renderOne,
	},
	'two': {
		render: renderTwo,
		focus: '#slide-two-focus',
	},
}

slider.storyName = "Slider";

slider.args = {
	titleId:"sui-modal-one-title",
	size: "lg",
	dialogId: "le-dialog-id",
	modalContent: slideModalContent,
	triggerContent,
	firstSlide: 'one'
};