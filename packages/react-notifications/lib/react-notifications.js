import React from "react";
import { ButtonIcon } from "@wpmudev/react-button-icon";
import { Button } from "@wpmudev/react-button";

export const Notifications = ({
	children,
	type,
	dismiss,
	floating,
	notificationId
}) => {
	// close notification box
	const close = e => {
		e.preventDefault();
		closeNotice(notificationId);
	};

	let classMain = "sui-notice sui-active";
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
			<ButtonIcon icon="check" label="Hide" onClick={e => close(e)} />
		</div>
	);

	return (
		<div
			className={floating ? "sui-floating-notices" : ""}
			style={{ left: "0" }}>
			<div className={classMain} id={notificationId}>
				<div className="sui-notice-content">
					{message}
					{dismiss && actions}
				</div>
			</div>
		</div>
	);
};

// function to show notice
const showNotice = (notificationId, noticeMessage, noticeOptions) => {
	// Get notification node by ID.
	const noticeNode = document.getElementById(notificationId);
	const nodeWrapper = noticeNode.parentNode;

	// Add active class.
	noticeNode.classList.add("sui-active");

	var options = [];

	/**
	 * @desc Declare default styling options for notifications.
	 */
	const setProperties = (incomingOptions = {}) => {
		options[0] = incomingOptions;
	};

	setProperties(noticeOptions);

	/**
	 * @desc Build notice dismiss.
	 */
	const buildDismiss = () => {
		let html = "";
		const dismiss = options[0].dismiss;
		if (true === dismiss.show) {
			html = document.createElement("div");
			html.className = "sui-notice-actions";
			let innerHTML = "";
			if ("" !== dismiss.tooltip) {
				if (nodeWrapper.classList.contains("sui-floating-notices")) {
					innerHTML +=
						'<div class="sui-tooltip sui-tooltip-bottom" data-tooltip="' +
						dismiss.tooltip +
						'">';
				} else {
					innerHTML +=
						'<div class="sui-tooltip" data-tooltip="' + dismiss.tooltip + '">';
				}
			}
			innerHTML += '<button class="sui-button-icon">';
			innerHTML += '<i class="sui-icon-check" aria-hidden="true"></i>';
			if ("" !== dismiss.label) {
				innerHTML +=
					'<span class="sui-screen-reader-text">' + dismiss.label + "</span>";
			}
			innerHTML += "</button>";
			if ("" !== dismiss.tooltip) {
				innerHTML += "</div>";
			}
			html.innerHTML = innerHTML;
		}
		return html;
	};

	/**
	 * @desc Build notice icon.
	 */
	const buildIcon = () => {
		let html = "";
		const icon = options[0].icon;
		if ("" !== icon || "undefined" !== typeof icon || null !== typeof icon) {
			html = document.createElement("span");
			html.className += "sui-notice-icon sui-icon-" + icon + " sui-md";
			html.setAttribute("aria-hidden", true);

			if ("loader" === icon) {
				html.classList.add("sui-loading");
			}
		}
		return html;
	};

	/**
	 * @desc Build notice message.
	 */
	const buildMessage = () => {
		const html = document.createElement("div");
		html.className = "sui-notice-message";
		html.innerHTML = noticeMessage;
		html.prepend(buildIcon());
		return html;
	};

	/**
	 * @desc Build notice markup.
	 */
	const buildNotice = () => {
		const html = document.createElement("div");
		html.className = "sui-notice-content";
		html.append(buildMessage(), buildDismiss());
		return html;
	};
	const notificationHTML = buildNotice();
	noticeNode.innerHTML = "";
	noticeNode.appendChild(notificationHTML);
	noticeNode.removeAttribute("tabindex");
	return;
};

// function to hide notice
const closeNotice = notificationId => {
	const noticeNode = document.getElementById(notificationId);

	// Remove active class.
	noticeNode.classList.remove("sui-active");

	// Prevent TAB key from accessing the element.
	noticeNode.setAttribute("tabindex", "-1");

	// Remove all content from notification.
	noticeNode.innerHTML = "";
};

// function to animate the notification
const animateShowNotice = (
	notificationId,
	animation,
	dismiss,
	autoclose,
	timeout = 300
) => {
	// Get notification node by ID.
	const noticeNode = document.getElementById(notificationId);
	// animation of notification
	if ("slide" === animation) {
		noticeNode.slideDown(timeout, () => {
			if (true === dismiss) {
				// Focus dismiss button.
				noticeNode.closest(".sui-notice-actions button").focus();

				// Dismiss button.
				noticeNode
					.closest(".sui-notice-actions button")
					.addEventListener("click", function () {
						closeNotice(notificationId);
					});
			} else {
				// check if notice auto-closes
				if (true === autoclose) {
					setTimeout(() => closeNotice(notificationId), parseInt(timeout));
				}
			}
		});
	} else if ("fade" === animation) {
		noticeNode.fadeIn(timeout, () => {
			if (true === dismiss) {
				// Focus dismiss button.
				noticeNode.closest(".sui-notice-actions button").focus();

				// Dismiss button.
				noticeNode
					.closest(".sui-notice-actions button")
					.addEventListener("click", function () {
						closeNotice(notificationId);
					});
			} else {
				// Check if notification auto-closes.
				if (true === autoclose) {
					setTimeout(() => closeNotice(notificationId), parseInt(timeout));
				}
			}
		});
	} else {
		noticeNode.show(timeout, () => {
			// Check if dismiss button enabled.
			if (true === dismiss) {
				// Focus dismiss button.
				noticeNode.closest(".sui-notice-actions button").focus();

				// Dismiss button.
				noticeNode
					.closest(".sui-notice-actions button")
					.addEventListener("click", function () {
						closeNotice(notificationId);
					});
			} else {
				// Check if notice auto-closes.
				if (true === autoclose) {
					setTimeout(() => closeNotice(notificationId), parseInt(autoclose));
				}
			}
		});
	}
};

const animateHideNotice = (notificationId, animation, timeout = 300) => {
	// Get notification node by ID.
	const noticeNode = document.getElementById(notificationId);
	// Close animation.
	if ("slide" === animation) {
		noticeNode.slideUp(timeout, () => closeNotice(notificationId));
	} else if ("fade" === animation) {
		noticeNode.fadeOut(timeout, () => closeNotice(notificationId));
	} else {
		noticeNode.hide(timeout, () => closeNotice(notificationId));
	}
};

// button to show and hide notifications on click
export const NotificationButton = ({
	buttonLabel,
	type,
	message,
	icon,
	dismiss,
	dismissLabel,
	dismissTooltip,
	notificationId,
	autoClose,
	autoCloseTimeout
}) => {
	const showHideClick = e => {
		e.preventDefault();
		let noticeMessage = message;
		let noticeOptions = {};

		// Check if `type` exists.
		type ? (noticeOptions.type = type) : (noticeOptions.type = "");

		// Check if `icon` exists.
		icon ? (noticeOptions.icon = icon) : (noticeOptions.icon = "");

		// Check if `dismiss` exists.
		noticeOptions.dismiss = {};
		dismiss
			? (noticeOptions.dismiss.show = dismiss)
			: (noticeOptions.dismiss.show = "");

		// Check if `dismiss-label` exists.
		dismiss && dismissLabel
			? (noticeOptions.dismiss.label = dismissLabel)
			: (noticeOptions.dismiss.label = "");

		// Check if `notice-dismiss-tooltip` exists.
		dismissTooltip
			? (noticeOptions.dismiss.tooltip = dismissTooltip)
			: (noticeOptions.dismiss.tooltip = "");

		// Check if `autoclose` exists.
		noticeOptions.autoclose = {};
		autoClose
			? (noticeOptions.autoclose.show = autoClose)
			: (noticeOptions.autoclose.show = "");

		// Check if `autoclose-timeout` exists.
		autoClose && autoCloseTimeout
			? (noticeOptions.autoclose.timeout = autoCloseTimeout)
			: (noticeOptions.autoclose.timeout = "");

		showNotice(notificationId, noticeMessage, noticeOptions);
	};

	return <Button label={buttonLabel} onClick={e => showHideClick(e)}></Button>;
};
