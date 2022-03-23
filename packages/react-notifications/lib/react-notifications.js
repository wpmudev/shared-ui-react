import React, { useState } from 'react';
import { ButtonIcon } from '@wpmudev/react-button-icon';

export const Notifications = ({ children, type, dismiss, float }) => {
	let classMain = "sui-notice";
	let classIcon = "sui-notice-icon sui-md";

	const [hide, setHide] = useState(false);

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
				onClick={() => setHide(true)}
			/>
		</div>
	);

	return !hide ? (
		float ? (
				<div className="sui-floating-notices" style={{ width: '100%' }}>
					<div role="alert" className={classMain} style={{ display: !hide ? 'block' : null }}  aria-live="assertive">
						<div className="sui-notice-content">
							{ message }
							{ dismiss && actions }
						</div>
					</div>
				</div>
			) : (
				<div role="alert" className={classMain} style={{ display: !hide ? 'block' : null }}  aria-live="assertive">
					<div className="sui-notice-content">
						{ message }
						{ dismiss && actions }
					</div>
				</div>
			)
	) : null;	
}