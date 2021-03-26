import React, { useEffect } from "react";
import AriaModal from "@justfixnyc/react-aria-modal";
import { Box, BoxHeader, BoxBody, BoxFooter } from "../../react-box/lib/box";
import { Button } from "../../react-button/lib/button";
import { ButtonIcon } from "../../react-button-icon/lib/react-button-icon";

export const Modal = ({ headerContent, bodyContent, footerContent, ...props }) => {

	const [isOpen, setIsOpen] = React.useState();

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
		renderToNode = document.getElementsByClassName('sui-2-10-0')[0]
	} = props;

	const openModal = () => setIsOpen( true ),
		closeModal = () => setIsOpen( false );

	const AltLocationModal = AriaModal.renderTo( renderToNode );

    const Modal = isOpen ?
		<AltLocationModal
			getApplicationNode={ getApplicationNode }
			dialogClass={ `sui-modal-content sui-content-fade-in ${ props.dialogClass || "" }` }
			underlayClass={ `sui-modal sui-active sui-modal-${ props.modalSize || "md" } sui-wrap ${ props.underlayClass || "" }` }
			onExit={ closeModal }
			includeDefaultStyles={ false }
			initialFocus={ initialFocus }
			{ ...props }
			>
			<Box>
				<BoxHeader { ...props.headerArgs }>
					{ headerContent }
					<div className="sui-actions-right">
						<ButtonIcon
							id={ `${ props.dialogId }-header-close-button` }
							label="Close this dialog window"
							icon="close"
							iconSize="md"
							extraClasses="sui-button-float--right sui-md"
							onClick={ closeModal }
						/>
					</div>
				</BoxHeader>
				<BoxBody { ...props.bodyArgs }>
					{ bodyContent }
				</BoxBody>
				{ footerContent && (
					<BoxFooter { ...props.footerArgs }>
						{ footerContent }
					</BoxFooter>
				) }
			</Box>
		</AltLocationModal>
		: false;

	return (
		<React.Fragment>
			<Button { ...props.openButton.props } onClick={ openModal } />
			{ Modal }
		</React.Fragment>
	);
}
