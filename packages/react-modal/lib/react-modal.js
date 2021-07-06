import React, { createElement } from "react";
import AriaModal from "@justfixnyc/react-aria-modal";
import useEscape from "./useEscape";
import { createPortal } from "react-dom";

export const Modal = ({ modalContent, triggerContent, ...props }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);

	// States for sliders.
	const [currentSlide, setCurrentSlide] = React.useState(props.firstSlide);
	const [slideDirection, setSlideDirection] = React.useState(null);

	useEscape(() => closeModal());

	React.useEffect(() => {
		if (!props.dialogId) {
			throw new Error("SUI Modal instances should have a `dialogId`");
		}
		window.addEventListener("keydown", handleFocusTrap);
		isOpen && document?.getElementById("modal_parent").querySelectorAll('textarea, button, [href], input, select, [tabindex]:not([tabindex="-1"])')[0].focus()
	}, [isOpen]);

	const isSlider = "object" === typeof modalContent && null !== modalContent;

	const openModal = () => setIsOpen(true),
		closeModal = () => {
			// Close the modal with the exit animation and reset the slider.
			setIsClosing(true);
			setTimeout(() => {
				setIsOpen(false);
				setIsClosing(false);

				if (isSlider) {
					setSlideDirection(null);
					setCurrentSlide(props.firstSlide);
				}
			}, 300);
		},
		slideTo = (slide, direction = "left") => {
			setCurrentSlide(slide);
			setSlideDirection(direction);
		};

	const { getApplicationNode = () => document.getElementsByClassName("sui-wrap")[0] } = props;

	let dialogClass = `sui-modal-content sui-content-${isClosing ? "fade-out" : "fade-in"} ${props.dialogClass || ""}`;

	let renderContent, modalSize, initialFocus;
	if (!isSlider) {
		// Not a slider, we can just render the content.
		renderContent = modalContent;
		modalSize = props.size;
		initialFocus = props.initialFocus || false;
	} else {
		// Render the content from the given slides.
		renderContent = modalContent[currentSlide].render;
		initialFocus = modalContent[currentSlide].focus || false;
		modalSize = modalContent[currentSlide].size;

		// Add the slide direction class when provided and we're not closing the modal.
		if (slideDirection && !isClosing) {
			dialogClass += `sui-modal-slide sui-active sui-fadein-${slideDirection}`;
		}
	}

	// Use 'isOpen' as an alias of 'mounted' if not defined.
	if ("undefined" === typeof props.mounted) {
		props.mounted = isOpen;
	}

	const handleFocusTrap = e => {
		const focusableElements = ' textarea, button, [href], input, select, [tabindex]:not([tabindex="-1"])';
		const modal = document?.getElementById("modal_parent"); // select the modal by it's id

		const firstFocusableElement = modal?.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
		const focusableContent = modal?.querySelectorAll(focusableElements);
		const lastFocusableElement = focusableContent[focusableContent?.length - 1]; // get last element to be focused inside modal
		let isTabPressed = e?.key === "Tab" || e?.keyCode === 9;

		if (!isTabPressed) {
			return;
		}

		if (e?.shiftKey) {
			// if shift key pressed for shift + tab combination
			if (document?.activeElement === firstFocusableElement) {
				lastFocusableElement?.focus();
				e?.preventDefault();
			}
		} else {
			// if tab key is pressed
			if (document?.activeElement === lastFocusableElement) {
				// if focused has reached to last focusable element then focus first focusable element after pressing tab
				firstFocusableElement?.focus();
				e?.preventDefault();
			}
		}
	};

	const SUIModal = () => {
		return (
			<div id="modal_parent" className={`sui-modal sui-active sui-modal-${modalSize || "md"} sui-wrap ${props.underlayClass || ""}`}>
				<div role="dialog" id={props.dialogId} className={dialogClass} aria-labelledby={props.titleId}>
					{renderContent({ closeModal, slideTo })}
				</div>
			</div>
		);
	};

	const AltModal = props.renderToNode ? AriaModal.renderTo(props.renderToNode) : AriaModal;
	return (
		<React.Fragment>
			{/* <AltModal
				getApplicationNode={ getApplicationNode }
				dialogClass={ dialogClass }
				underlayClass={ `sui-modal sui-active sui-modal-${ modalSize || 'md' } sui-wrap ${ props.underlayClass || '' }` }
				includeDefaultStyles={ false }
				initialFocus={ initialFocus }
				{ ...props }
				>
				{ renderContent( { closeModal, slideTo } ) }
			</AltModal> */}
			{props?.mounted && <SUIModal />}
			{triggerContent && triggerContent({ openModal })}
		</React.Fragment>
	);
};
