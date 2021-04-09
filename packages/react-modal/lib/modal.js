import React, { useEffect } from "react";
import AriaModal from "@justfixnyc/react-aria-modal";

export const Modal = ({ renderContent, triggerContent, ...props }) => {

	const [ isOpen, setIsOpen ] = React.useState( false );
	const [ isClosing, setIsClosing ] = React.useState( false );

	useEffect( () => {
		if ( ! props.dialogId ) {
			throw new Error(
			'SUI Modal instances should have a `dialogId`'
			);
		}
	}, [] );

	const {
		initialFocus = `#${ props.dialogId }-header-close-button`,
		getApplicationNode = () => document.getElementsByClassName('sui-wrap')[0],
		renderToNode = document.getElementsByClassName('sui-2-10-0')[0] // TODO: get this dynamically.
	} = props;

	const openModal = () => setIsOpen( true ),
		closeModal = () => {
			setIsClosing( true );
			setTimeout( () => {
				setIsOpen( false );
				setIsClosing( false );
			}, 300 );
		};

	const AltLocationModal = AriaModal.renderTo( renderToNode );

    const Modal = isOpen ?
		<AltLocationModal
			getApplicationNode={ getApplicationNode }
			dialogClass={ `sui-modal-content sui-content-${ isClosing ? 'fade-out' : 'fade-in' } ${ props.dialogClass || "" }` }
			underlayClass={ `sui-modal${ isOpen ? ' sui-active' : '' } sui-modal-${ props.modalSize || "md" } sui-wrap ${ props.underlayClass || "" }` }
			onExit={ closeModal }
			includeDefaultStyles={ false }
			initialFocus={ initialFocus }
			{ ...props }
			>
			{ renderContent( { closeModal } )}
		</AltLocationModal>
		: false;

	return (
		<React.Fragment>
			{ triggerContent( { openModal } ) }
			{ Modal }
		</React.Fragment>
	);
}
