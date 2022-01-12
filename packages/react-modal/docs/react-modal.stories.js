import React from "react";
import { Box, BoxHeader, BoxTitle, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { ButtonIcon } from "@wpmudev/react-button-icon";
import { Button } from "@wpmudev/react-button";
import { Input } from "@wpmudev/react-input";
import { Modal } from "../lib/react-modal";
import banner from "./assets/beehive-welcome.png";
import image1x from "./assets/hustle-footer.png";
import image2x from "./assets/hustle-footer@2x.png";

export default {
	title: "Containers/Modal",
	component: Modal,
};

const Template = args => <Modal {...args} />;

const headerContent = ( { closeModal } ) =>{
	return (
		<BoxHeader
			alignment="right"
			paddingTop="20"
			paddingBottom="10"
			border="0"
		>
			<ButtonIcon
				label="Close this dialog window"
				icon="close"
				iconSize="md"
				onClick={ closeModal }
			/>
		</BoxHeader>
	)
};

const bodyContent = () => {
	return (
		<BoxBody
			alignment="center"
			paddingTop="0"
			paddingBottom="0"
		>
			<h3>Dismiss Migrate Data Notice</h3>
			<p className="sui-description">Are you sure you wish to dismiss this notice? Make sure you've already migrated data of your existing modules, and you don't need to migrate data anymore.</p>
		</BoxBody>
	)
};

const simpleModalContent = ( { closeModal } ) => {
	return (
		<React.Fragment>
			<Box>
				{ headerContent({ closeModal }) }
				{ bodyContent() }
				<BoxFooter
					alignment="center"
					border="0"
				>
					<Button
						label="Cancel"
						design="ghost"
						onClick={ closeModal }
					/>
					<Button
						label="Dismiss Forever"
						color="red"
						design="ghost"
						onClick={ closeModal }
					/>
				</BoxFooter>
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
	renderToNode: '.sui-2-10-8' // TODO: get this dynamically.
};

const renderOne = ( { closeModal, slideTo } ) => {
	return (
		<React.Fragment>
			<Box>
				{ headerContent( { closeModal } ) }
				<BoxBody
					alignment="center"
					paddingTop="0"
				>
					<h2>Choose Content Type</h2>
					<p className="sui-description">Let's start by choosing an appropriate content type based on your goal.</p>
				</BoxBody>
				<BoxBody
					alignment="center"
					style={ { backgroundColor: '#f8f8f8' } }
				>
					<p>Here might go additional content.</p>
				</BoxBody>
				<BoxFooter
					alignment="right"
					border="0"
				>
					<Button
						label="Next"
						onClick={ () => slideTo( 'two', 'left' ) }
					/>
				</BoxFooter>
				<img
					src={image1x}
					srcSet={`${image1x} 1x, ${image2x} 2x`}
					className="sui-image sui-image-center"
					aria-hidden="true"
				/>
			</Box>
			<button className="sui-modal-skip" onClick={ closeModal }>Skip this, I know my way around</button>
		</React.Fragment>
	);
}
const renderTwo = ( { closeModal, slideTo } ) => {
	return (
		<React.Fragment>
			<Box>
				<BoxHeader
					paddingTop="20"
					paddingBottom="10"
					border="0"
				>
					<ButtonIcon
						label="Previous slide"
						icon="chevron-left"
						iconSize="md"
						onClick={ () => slideTo( 'one', 'right' ) }
					/>
					<ButtonIcon
						label="Close this dialog window"
						icon="close"
						iconSize="md"
						onClick={ closeModal }
					/>
				</BoxHeader>
				<BoxBody alignment="center">
					<h2>Create Popup</h2>
					<p className="sui-description">Let's give your new popup a name. What would you like to name it?</p>
					<div className="sui-form-field" style={ { textAlign: "left" } }>
						<div className="sui-with-button sui-with-button-icon">
							<input className="sui-form-control" />
							<ButtonIcon
								icon="arrow-right"
								label="Create"
								color="blue"
							/>
						</div>
						<p className="sui-description">This will not be visible anywhere on your website</p>
					</div>
				</BoxBody>
				<img
					src={image1x}
					srcSet={`${image1x} 1x, ${image2x} 2x`}
					className="sui-image sui-image-center"
					aria-hidden="true"
				/>
			</Box>
		</React.Fragment>
	);
}

const slideModalContent = {
	'one': {
		render: renderOne,
		size: 'lg',
	},
	'two': {
		render: renderTwo,
		size: 'sm',
		focus: '.sui-form-control',
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
	renderToNode: '.sui-2-10-8' // TODO: get this dynamically.
};

const FirstModal = ( { isOpen, setIsOpen, switchModals } ) => {
	const [inputValue, setInputValue ] = React.useState( '' );

	const replaceModalContent = ( { closeModal } ) => {
		const closeThisModal = function() {
			closeModal();
			setTimeout( () => {
				setIsOpen( false );
			}, 300 );
		};

		return (
			<Box>
				<BoxHeader
					display="block"
					alignment="center"
					paddingTop="20"
					paddingRight="20"
					paddingLeft="20"
					paddingBottom="100"
					border="0"
					style={ {
						borderRadius: 4,
						backgroundImage: `url(${banner})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'top center',
						backgroundSize: 'cover',
					} }
				>
					<ButtonIcon
						label="Close this dialog window"
						icon="close"
						iconSize="md"
						style={ { display: 'block', marginRight: 0, marginLeft: 'auto' } }
						onClick={ closeThisModal }
					/>
				</BoxHeader>
				<BoxBody
					alignment="center"
				>
					<h3>Welcome to Beehive Pro</h3>
					<p className="sui-description">Hello and welcome to the hottest Google Analytics plugin for WordPress. Let's get started by connecting your Google Analytics account so that we can feed your analytics data. If you only want to enable tracking without reports, you can paste your analytics code via the link below.</p>
					<Input placeholder="Place access code here" onChange={ ( e ) => setInputValue( e.target.value ) } value={ inputValue } type="text"/>
					<Button id="auth-button" onClick={ switchModals } label="Authorize" color="blue" />
				</BoxBody>
			</Box>
		);
	};

	return (
		<Modal
			mounted={ isOpen }
			titleId="sui-modal-one-title"
			size="lg"
			dialogId="first"
			initialFocus=".sui-form-control"
			modalContent={ replaceModalContent }
			renderToNode=".sui-2-10-8" // TODO: get this dynamically.
		></Modal>
	);
};

const SecondModal = ( { isOpen, setIsOpen, switchModals } ) => {

	const confirmationModalContent = ( { closeModal } ) => {
		const closeThisModal = function() {
			closeModal();
			setTimeout( () => {
				setIsOpen( false );
			}, 300 );
		};

		return (
			<Box>
				<BoxHeader
					paddingTop="20"
					paddingRight="20"
					paddingLeft="20"
					paddingBottom="100"
					border="0"
					style={ {
						borderRadius: 4,
						backgroundImage: `url(${banner})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'top center',
						backgroundSize: 'cover',
					} }
				>
					<ButtonIcon
						label="Go back"
						icon="chevron-left"
						iconSize="md"
						onClick={ switchModals }
					/>
					<ButtonIcon
						label="Close this dialog window"
						icon="close"
						iconSize="md"
						onClick={ closeThisModal }
					/>
				</BoxHeader>
				<BoxBody
					alignment="center"
				>
					<span className="sui-icon-loader sui-loading" aria-hidden="true" />
					<h3>Finishing Up...</h3>
					<p className="sui-description">Please wait a few moments while we set up your account. Note that data can take up to 24 hours to display.</p>
				</BoxBody>
				<BoxFooter
					alignment="center"
					paddingTop="0"
					border="0"
				>
					<Button onClick={ switchModals } label="Cancel" design="ghost" />
				</BoxFooter>
			</Box>
		);
	};

	return (
		<Modal
			mounted={ isOpen }
			titleId="sui-modal-one-title"
			dialogId="confirmation"
			modalContent={ confirmationModalContent }
			renderToNode=".sui-2-10-8" // TODO: get this dynamically.
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
				setIsOpen={ setIsSecondOpen }
				switchModals={ switchModals }
			/>
		</React.Fragment>
	);
};

const replaceTemplate = () => <Replace />;
export const replace = replaceTemplate.bind({});
replace.storyName = "Replace";
