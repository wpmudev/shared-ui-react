import React, { useState } from 'react';
import { ButtonIcon } from '@wpmudev/react-button-icon';
import { Button } from '@wpmudev/react-button';

export const Notifications = ({
	children,
	type,
	hide,
	dismiss,
	floating,
	notificationId
}) => {
	// state to hide and show notifications
	const [ hideElem, setHideElem ] = useState(hide);

	// close notification box
	close = () => {
		e.preventDefault();
		setHideElem(true);
	}

	let classMain = "sui-notice";
	let classIcon = "sui-notice-icon sui-md";

	switch (type) {
		case "info":
		case "success":
		case "warning":
		case "error":
		case "upsell":
			classMain += " sui-notice-" + type;
			classIcon += " sui-icon-info";
			break;

		case "loading":
			classIcon += " sui-icon-loader sui-loading";
			break;

		default:
			classIcon += " sui-icon-info";
			break;
	}

	const message = (
		<div className="sui-notice-message">
			<span className={classIcon} aria-hidden="true" />
			{children}
		</div>
	);

	const actions = (
		<div className="sui-notice-actions">
			<ButtonIcon
				icon="check"
				label="Hide"
				onClick={ e => close(e) }
			/>
		</div>
	);
	
	return (
		!hideElem ? 
			<div className={ floating ? "sui-floating-notices" : "" } id={ notificationId } style={{ left: "0" }}>
				<div className={classMain}>
					<div className="sui-notice-content">
						{ message }
						{ dismiss && actions }
					</div>
				</div>
			</div>
		: null
	);
}

// button to show and hide notifications on click
export const NotificationButton = ({
	buttonLabel,
	notificationId
}) => {
	const showHideClick = (e) => {
		e.preventDefault();
		const elemId = document.getElementById(notificationId);
		elemId.style.display = "none";
	}
	return (
		<Button label={buttonLabel} onClick={(e) => { showHideClick(e) }}></Button>
	);
}
