import React from "react";
import { Box, BoxHeader, BoxTitle, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { ButtonIcon } from "../../react-button-icon/lib/react-button-icon";
import { Button } from "../../react-button/lib/button";
import { Input } from "../../react-input/lib/react-input";
import { Modal } from "../lib/modal";

export default {
	title: "Containers/Modal",
	component: Modal,
};

const Template = args => <Modal {...args}></Modal>;

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

export const simple = Template.bind({});

simple.storyName = "Simple";

simple.args = {
	titleId:"sui-modal-one-title",
	size: "md",
	dialogId: "le-dialog-id",
	modalContent: simpleModalContent,
	triggerContent,
	renderToNode: '.sui-2-10-0' // TODO: get this dynamically.
};

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

export const slider = Template.bind({});

slider.storyName = "Slider";

slider.args = {
	titleId:"sui-modal-one-title",
	size: "lg",
	dialogId: "le-dialog-id",
	modalContent: slideModalContent,
	triggerContent,
	firstSlide: 'one',
	renderToNode: '.sui-2-10-0' // TODO: get this dynamically.
};

const FirstModal = ( { isOpen, setIsOpen, switchModals } ) => {
	const [inputValue, setInputValue ] = React.useState( '' );

	const replaceModalContent = ( { closeModal } ) => {
		const closeFirstModal = function() {
			closeModal();
			setTimeout( () => {
				setIsOpen( false );
			}, 300 );
		};

		return (
			<Box>
				<BoxHeader title="Something to be confirmed">
					<div className="sui-actions-right">
						<ButtonIcon
							label="Close this dialog window"
							icon="close"
							iconSize="md"
							extraClasses="le-dialog-id-header-close-button sui-button-float--right sui-md"
							onClick={ closeFirstModal }
						/>
					</div>
				</BoxHeader>
				<BoxBody>
					<Input onChange={ ( e ) => setInputValue( e.target.value ) } value={ inputValue } type="text"/>
					<Button onClick={ closeFirstModal } label="Close modal" />
					<Button id="something" onClick={ switchModals } label="open confirmation" />
				</BoxBody>
			</Box>
		);
	};

	return (
		<Modal
			mounted={ isOpen }
			titleId="sui-modal-one-title"
			size="md"
			dialogId="first"
			initialFocus="#something"
			modalContent={ replaceModalContent }
			renderToNode=".sui-2-10-0" // TODO: get this dynamically.
		></Modal>
	);
};

const SecondModal = ( { isOpen, switchModals } ) => {

	const confirmationModalContent = () => (
		<Box>
			<BoxHeader title="Are you sure?">
				<div className="sui-actions-right">
					<ButtonIcon
						label="Close this dialog window"
						icon="close"
						iconSize="md"
						extraClasses="le-dialog-id-header-close-button sui-button-float--right sui-md"
						onClick={ switchModals }
					/>
				</div>
			</BoxHeader>
			<BoxBody>
				<Button onClick={ switchModals } label="I'm not sure, go back" />
				<Button id="focused-button" label="Just a focused button" />
			</BoxBody>
		</Box>
	);

	return (
		<Modal
			mounted={ isOpen }
			titleId="sui-modal-one-title"
			size="md"
			dialogId="confirmation"
			initialFocus="#focused-button"
			modalContent={ confirmationModalContent }
			renderToNode=".sui-2-10-0" // TODO: get this dynamically.
		></Modal>
	);
};

const Replace = () => {
	const [ isFirstOpen, setIsFirstOpen ] = React.useState( false );
	const [ isSecondOpen, setIsSecondOpen ] = React.useState( false );

	const switchModals = () => {
		setIsFirstOpen( ! isFirstOpen );
		setIsSecondOpen( ! isSecondOpen );
	};

	return (
		<React.Fragment>
			<Button onClick={ () => setIsFirstOpen( true ) } label="Open"/>
			<FirstModal
				isOpen={ isFirstOpen }
				setIsOpen={ setIsFirstOpen }
				switchModals={ switchModals }
			/>
			<SecondModal
				isOpen={ isSecondOpen }
				switchModals={ switchModals }
			/>
		</React.Fragment>
	);
};

const replaceTemplate = () => <Replace />;

export const replace = replaceTemplate.bind({});

replace.storyName = "Replace";
