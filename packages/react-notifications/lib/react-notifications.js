import React from "react";
import { ButtonIcon } from "@wpmudev/react-button-icon";
import { Button } from "@wpmudev/react-button";

export const Notifications = ({
	children,
	type,
	icon,
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
			classIcon += " sui-icon-" + icon;
			break;

		case "loading":
			classIcon += " sui-icon-loader sui-loading";
			break;

		default:
			classIcon += " sui-icon-" + icon;
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

// function to disable buttons
const disableButtons = buttonClass => {
	const buttonsArray = document.querySelectorAll(buttonClass);
	buttonsArray.forEach(button => {
		button.setAttribute("disabled", "disabled");
	});
};

// function to enable buttons
const enableButtons = buttonClass => {
	const buttonsArray = document.querySelectorAll(buttonClass);
	buttonsArray.forEach(button => {
		button.removeAttribute("disabled");
	});
};

// function to show notice
const openNotice = (notificationId, noticeMessage, noticeOptions) => {
	// Get notification node by ID.
	const noticeNode = document.getElementById(notificationId);
	const nodeWrapper = noticeNode.parentNode;

	disableButtons(".sui-action-button");

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

	enableButtons(".sui-action-button");
};

// slide up
const slideUp = (target, duration = 500) => {
	/* Sliding-up logic */
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + "ms";
	target.style.boxSizing = "border-box";
	target.style.height = target.offsetHeight + "px";
	target.offsetHeight;
	target.style.overflow = "hidden";
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = "none";
		target.style.removeProperty("height");
		target.style.removeProperty("padding-top");
		target.style.removeProperty("padding-bottom");
		target.style.removeProperty("margin-top");
		target.style.removeProperty("margin-bottom");
		target.style.removeProperty("overflow");
		target.style.removeProperty("transition-duration");
		target.style.removeProperty("transition-property");
	}, duration);
};

// slide down
const slideDown = (target, duration = 500) => {
	/* Sliding-down logic */
	target.style.removeProperty("display");
	let display = window.getComputedStyle(target).display;

	if (display === "none") display = "block";

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = "hidden";
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = "border-box";
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + "ms";
	target.style.height = height + "px";
	target.style.removeProperty("padding-top");
	target.style.removeProperty("padding-bottom");
	target.style.removeProperty("margin-top");
	target.style.removeProperty("margin-bottom");
	window.setTimeout(() => {
		target.style.removeProperty("height");
		target.style.removeProperty("overflow");
		target.style.removeProperty("transition-duration");
		target.style.removeProperty("transition-property");
	}, duration);
};

// fade out animation
const fadeOut = el => {
	el.style.opacity = 1;
	(function fade() {
		if ((el.style.opacity -= 0.1) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
};

// fade in function
const fadeIn = (el, display) => {
	el.removeAttribute("style");
	el.style.opacity = 0;
	el.style.display = display || "block";
	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += 0.1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
};

// function to animate the notification
const animateOpenNotice = (
	notificationId,
	noticeMessage,
	noticeOptions,
	animation
) => {
	// Get notification node by ID.
	const noticeNode = document.getElementById(notificationId);
	const dismiss = noticeOptions.dismiss.show;
	const autoclose = noticeOptions.autoclose.show;
	noticeNode.removeAttribute("style");
	// animation of notification
	if (animation === "slide") {
		openNotice(notificationId, noticeMessage, noticeOptions);
		slideDown(noticeNode, 500);
		if (dismiss === true) {
			// Focus dismiss button.
			noticeNode.querySelector(".sui-notice-actions button").focus();

			// Dismiss button.
			noticeNode
				.querySelector(".sui-notice-actions button")
				.addEventListener("click", function () {
					animateCloseNotice(notificationId, animation);
				});
		} else {
			if (autoclose === true) {
				setTimeout(
					() => animateCloseNotice(notificationId, animation),
					parseInt(noticeOptions.autoclose.timeout)
				);
			}
		}
	} else if (animation === "fade") {
		openNotice(notificationId, noticeMessage, noticeOptions);
		fadeIn(noticeNode);
		if (dismiss === true) {
			// Focus dismiss button.
			noticeNode.querySelector(".sui-notice-actions button").focus();

			// Dismiss button.
			noticeNode
				.querySelector(".sui-notice-actions button")
				.addEventListener("click", function () {
					animateCloseNotice(notificationId, animation);
				});
		} else {
			if (autoclose === true) {
				setTimeout(
					() => animateCloseNotice(notificationId, animation),
					parseInt(noticeOptions.autoclose.timeout)
				);
			}
		}
	} else {
		openNotice(notificationId, noticeMessage, noticeOptions);
		if (dismiss === true) {
			// Focus dismiss button.
			noticeNode.querySelector(".sui-notice-actions button").focus();

			// Dismiss button.
			noticeNode
				.querySelector(".sui-notice-actions button")
				.addEventListener("click", function () {
					animateCloseNotice(notificationId, animation);
				});
		} else {
			if (autoclose === true) {
				setTimeout(
					() => animateCloseNotice(notificationId, animation),
					parseInt(noticeOptions.autoclose.timeout)
				);
			}
		}
	}
};

const animateCloseNotice = (notificationId, animation, timeout = 500) => {
	// Get notification node by ID.
	const noticeNode = document.getElementById(notificationId);
	// Close animation.
	if (animation === "slide") {
		slideUp(noticeNode);
		window.setTimeout(() => {
			closeNotice(notificationId);
		}, timeout);
	} else if (animation === "fade") {
		fadeOut(noticeNode);
		window.setTimeout(() => {
			closeNotice(notificationId);
		}, timeout);
	} else {
		closeNotice(notificationId);
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
	autoCloseTimeout,
	animation
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
		noticeOptions.dismiss.show = dismiss;

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
		noticeOptions.autoclose.show = autoClose;

		// Check if `autoclose-timeout` exists.
		autoClose && autoCloseTimeout
			? (noticeOptions.autoclose.timeout = autoCloseTimeout)
			: (noticeOptions.autoclose.timeout = 5000);

		animateOpenNotice(notificationId, noticeMessage, noticeOptions, animation);
	};

	return (
		<Button
			label={buttonLabel}
			className="sui-action-button"
			onClick={e => showHideClick(e)}></Button>
	);
};
