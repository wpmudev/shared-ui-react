import React, { useEffect } from "react";
import AriaModal from "@justfixnyc/react-aria-modal";

export const Modal = ( { modalContent, triggerContent, ...props } ) => {

	const [ isOpen, setIsOpen ] = React.useState( false );
	const [ isClosing, setIsClosing ] = React.useState( false );

	// States for sliders.
	const [ currentSlide, setCurrentSlide ] = React.useState( props.firstSlide );
	const [ slideDirection, setSlideDirection ] = React.useState();

	useEffect( () => {
		if ( ! props.dialogId ) {
			throw new Error(
			'SUI Modal instances should have a `dialogId`'
			);
		}
	}, [] );

	const openModal = () => setIsOpen( true ),
		closeModal = () => {
			// Close the modal with the exit animation and reset the slider.
			setIsClosing( true );
			setTimeout( () => {
				setIsOpen( false );
				setIsClosing( false );
				setSlideDirection( null );
				setCurrentSlide( props.firstSlide );
			}, 300 );
		},
		slideTo = ( slide, direction = 'left' ) => {
			setCurrentSlide( slide );
			setSlideDirection( direction );
		};

	const {
		getApplicationNode = () => document.getElementsByClassName('sui-wrap')[0],
		renderToNode = document.getElementsByClassName('sui-2-10-0')[0] // TODO: get this dynamically.
	} = props;

	let dialogClass = `sui-modal-content sui-content-${ isClosing ? 'fade-out' : 'fade-in' } ${ props.dialogClass || "" }`;
	let { initialFocus = `.${ props.dialogId }-header-close-button` } = props;

	let renderContent;
	if ( 'function' === typeof modalContent ) {
		// Not a slider, we can just render the content.
		renderContent = modalContent;
	} else if ( 'object' === typeof modalContent && null !== modalContent ) {
		// Render the content from the given slides.
		renderContent = modalContent[ currentSlide ].render;
		initialFocus = modalContent[ currentSlide ].focus ? modalContent[ currentSlide ].focus : initialFocus;

		// Add the slide direction class when provided and we're not closing the modal.
		if ( slideDirection && ! isClosing ) {
			dialogClass +=  `sui-modal-slide sui-active sui-fadein-${ slideDirection }`;
		}
	}

	// Render the modal outside the main content for accessibility.
	const AltLocationModal = AriaModal.renderTo( renderToNode );

    const Modal = isOpen ?
		<AltLocationModal
			getApplicationNode={ getApplicationNode }
			dialogClass={ dialogClass }
			underlayClass={ `sui-modal${ isOpen ? ' sui-active' : '' } sui-modal-${ props.modalSize || 'md' } sui-wrap ${ props.underlayClass || '' }` }
			onExit={ closeModal }
			includeDefaultStyles={ false }
			initialFocus={ initialFocus }
			{ ...props }
			>
			{ renderContent( { closeModal, slideTo } ) }
		</AltLocationModal>
		: false;

	return (
		<React.Fragment>
			{ triggerContent( { openModal } ) }
			{ Modal }
		</React.Fragment>
	);
}
