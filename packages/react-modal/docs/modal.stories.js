import React from "react";
import { Box, BoxHeader, BoxTitle, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { ButtonIcon } from "../../react-button-icon/lib/react-button-icon";
import { Button } from "../../react-button/lib/button";
import { Input } from "../../react-input/lib/react-input";
import { Modal } from "../lib/modal";
import AriaModal from "@justfixnyc/react-aria-modal";

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

// export const replace = Template.bind({});
export const replace = () => {
	const [ isFirstOpen, setIsFirstOpen ] = React.useState( false );
	const [ isSecondOpen, setIsSecondOpen ] = React.useState( false );

	const [ inputValue, setInputValue ] = React.useState( '' );

	const replaceModalContent = ( { closeModal } ) => {

		const switchModals = () => {
			// TODO: hide - BUT DON'T UNMOUNT - the first modal.
			setIsSecondOpen( true );
		};

		const closeFirstModal = () => {
			closeModal();
			setTimeout( () => {
				setIsFirstOpen( false );
			}, 400 );
		};

		return (
			<Box>
				{/* { headerContent( { closeModal } ) } */}
				<Input onChange={ ( e ) => setInputValue( e.target.value ) } value={ inputValue } type="text"/>
				<button onClick={ closeFirstModal }>Close</button>
				<Button id="something" onClick={ switchModals } label="open confirmation" />
			</Box>
		);
	};

	const confirmationModalContent = ( { closeModal: animateCloseConfirmation } ) => {
		const closeConfirmationModal = () => {
			animateCloseConfirmation();
			setTimeout( () => {
				setIsSecondOpen( false );
			}, 400 );
		};

		return (
			<React.Fragment>
				<button onClick={ closeConfirmationModal }>Something</button>
				<button id="something-two">Something2</button>
			</React.Fragment>
		)
	};

	return (
		<React.Fragment>
			<button onClick={ () => setIsFirstOpen( true ) }>Open</button>
			<Modal
				mounted={ isFirstOpen }
				titleId="sui-modal-one-title"
				size="md"
				dialogId="first"
				initialFocus="#something"
				modalContent={ replaceModalContent }
			>
			</Modal>
			<Modal
				mounted={ isSecondOpen }
				titleId="sui-modal-one-title"
				size="md"
				dialogId="confirmation"
				onExit={ () => setIsSecondOpen( false ) }
				initialFocus="#something-two"
				modalContent={confirmationModalContent}
			>
			</Modal>
		</React.Fragment>
	);
};

replace.storyName = "Replace";
