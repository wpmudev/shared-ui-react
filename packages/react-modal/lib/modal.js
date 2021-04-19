import React, { useEffect } from "react";
import AriaModal from "@justfixnyc/react-aria-modal";

export const Modal = ( { modalContent, triggerContent, ...props } ) => {
	// const [ isOpen, setIsOpen ] = React.useState( props.mounted || false );
	const [ mounted, setIsOpen ] = React.useState( props.mounted );
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
				// setIsOpen( false );
				setIsClosing( false );
				setSlideDirection( null );
				setCurrentSlide( props.firstSlide );
			}, 300 );
		},
		slideTo = ( slide, direction = 'left' ) => {
			setCurrentSlide( slide );
			setSlideDirection( direction );
		};

	const handleOnExit = () => {
		if ( props.onExit ) {
			props.onExit();
		}
		closeModal();
	};

	const {
		getApplicationNode = () => document.getElementsByClassName('sui-wrap')[0],
		renderToNode = document.getElementsByClassName('sui-2-10-0')[0] // TODO: get this dynamically.
	} = props;

	let dialogClass = `sui-modal-content sui-content-${ isClosing ? 'fade-out' : 'fade-inz' } ${ props.dialogClass || "" }`;
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

    return (
		<AltLocationModal
			mounted={ mounted }
			getApplicationNode={ getApplicationNode }
			dialogClass={ dialogClass }
			underlayClass={ `sui-modal sui-active sui-modal-${ props.size || 'md' } sui-wrap ${ props.underlayClass || '' }` }
			onExit={ handleOnExit }
			includeDefaultStyles={ false }
			initialFocus={ initialFocus }
			{ ...props }
			>
			{ renderContent( { closeModal, slideTo } ) }
		</AltLocationModal>
	);
}
