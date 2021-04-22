import React from "react";
import AriaModal from "@justfixnyc/react-aria-modal";

export const Modal = ( { modalContent, triggerContent, ...props } ) => {
	const [ isOpen, setIsOpen ] = React.useState( false );
	const [ isClosing, setIsClosing ] = React.useState( false );

	// States for sliders.
	const [ currentSlide, setCurrentSlide ] = React.useState( props.firstSlide );
	const [ slideDirection, setSlideDirection ] = React.useState( null );

	React.useEffect( () => {
		if ( ! props.dialogId ) {
			throw new Error(
			'SUI Modal instances should have a `dialogId`'
			);
		}
	}, [] );

	const isSlider = 'object' === typeof modalContent && null !== modalContent;

	const openModal = () => setIsOpen( true ),
		closeModal = () => {
			// Close the modal with the exit animation and reset the slider.
			setIsClosing( true );
			setTimeout( () => {
				setIsOpen( false );
				setIsClosing( false );

				if ( isSlider ) {
					setSlideDirection( null );
					setCurrentSlide( props.firstSlide );
				}
			}, 300 );
		},
		slideTo = ( slide, direction = 'left' ) => {
			setCurrentSlide( slide );
			setSlideDirection( direction );
		};

	const {
		getApplicationNode = () => document.getElementsByClassName('sui-wrap')[0]
	} = props;

	let dialogClass = `sui-modal-content sui-content-${ isClosing ? 'fade-out' : 'fade-in' } ${ props.dialogClass || "" }`;

	let renderContent, initialFocus;
	if ( ! isSlider ) {
		// Not a slider, we can just render the content.
		renderContent = modalContent;
		initialFocus = props.initialFocus || false;
	} else {
		// Render the content from the given slides.
		renderContent = modalContent[ currentSlide ].render;
		initialFocus = modalContent[ currentSlide ].focus || false;

		// Add the slide direction class when provided and we're not closing the modal.
		if ( slideDirection && ! isClosing ) {
			dialogClass +=  `sui-modal-slide sui-active sui-fadein-${ slideDirection }`;
		}
	}

	const AltModal = props.renderToNode ? AriaModal.renderTo( props.renderToNode ) : AriaModal;
    return (
		<React.Fragment>
			{ ( isOpen || 'undefined' !== typeof props.mounted ) &&
				<AltModal
					getApplicationNode={ getApplicationNode }
					dialogClass={ dialogClass }
					underlayClass={ `sui-modal sui-active sui-modal-${ props.size || 'md' } sui-wrap ${ props.underlayClass || '' }` }
					includeDefaultStyles={ false }
					initialFocus={ initialFocus }
					{ ...props }
					>
					{ renderContent( { closeModal, slideTo } ) }
				</AltModal>
			}
			{ triggerContent && triggerContent( { openModal } ) }
		</React.Fragment>
	);
}
