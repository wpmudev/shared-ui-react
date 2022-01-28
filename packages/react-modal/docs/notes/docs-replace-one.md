# Replace Modal

## Sample One

This is a typical example of a "replace modal" where after performing an action, like clicking on a button, the currently open modal will be replaced by another.

#### **Modal One**

This modal will contain a simple form that's conformed by an input and a button. The button will simulate an authorization and then proceed to replace the currently open modal with the second.

```jsx
const ModalOne = ({ isOpen, setIsOpen, switchModals }) => {
	const getModalContent = ({ closeModal }) => {
		const closeThisModal = () => {
			closeModal();
			setTimeout(() => {
				setIsOpen(false);
			}, 300);
		};

		return (
			<div className="sui-box">
				<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
					<ButtonIcon
						icon="close"
						iconSize="md"
						label="Close this modal"
						className="sui-button-float--right"
						onClick={closeThisModal}
					/>

					<h3 id="sample-modal-one__title" className="sui-box-title sui-lg">Welcome Title</h3>
				</div>

				<div className="sui-box-body">
					<Input
						label="Your Email"
						type="text"
					/>

					<Button
						color="blue"
						label="Authorize"
						onClick={switchModals}
					/>
				</div>
			</div>
		);
	};

	return (
		<Modal
			mounted={isOpen}
			dialogId="sample-modal-one"
			titleId="sample-modal-one__title"
			size="lg"
			initialFocus=".sui-form-control"
			modalContent={getModalContent}
		/>
	);
};
```

#### **Modal Two**

This modal will show users that the action performed previously was done successfully but will also give the user two options to choose from:

1. To close the modal with the "close" icon button or the "finish" button at the bottom.
2. To go back to the previous modal (and be able to repeat the process).

```jsx
const ModalTwo = ({ isOpen, setIsOpen, switchModals }) => {
	const getModalContent = ({ closeModal }) => {
		const closeThisModal = function () {
			closeModal();
			setTimeout(() => {
				setIsOpen(false);
			}, 300);
		};

		return (
			<div className="sui-box">
				<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
					<ButtonIcon
						icon="chevron-left"
						iconSize="md"
						label="Cancel and return to previous step"
						className="sui-button-float--left"
						onClick={switchModals}
					/>

					<ButtonIcon
						icon="close"
						iconSize="md"
						label="Cancel and close this modal"
						className="sui-button-float--right"
						onClick={closeThisModal}
					/>

					<h3 id="sample-modal-two__title" className="sui-box-title sui-lg">Modal Title</h3>

					<p className="sui-description">A brief description goes here...</p>
				</div>

				<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-top--30">
					<Button onClick={switchModals} label="Finish" design="ghost" />
				</div>
			</div>
		);
	};

	return (
		<Modal
			mounted={isOpen}
			dialogId="sample-modal-two"
			titleId="sample-modal-two__title"
			dialogId="confirmation"
			modalContent={getModalContent}
		/>
	);
};
```

#### **Load Modals**

Finally, we need to load both modals accordingly to what we want. First, the "Open Modal" trigger button will show the **Modal One**. Once it is loaded the user can interact with it by clicking on the "authorize" button to close it and replace it with the **Modal Two**. `useState()` will also help us to show and hide the modals.

```jsx
const SampleContent = () => {
	const [isFirstOpen, setIsFirstOpen] = React.useState(false);
	const [isSecondOpen, setIsSecondOpen] = React.useState(false);
	const switchModals = () => {
		setIsFirstOpen(!isFirstOpen);
		setIsSecondOpen(!isSecondOpen);
	};

	return (
		<React.Fragment>
			<Button onClick={() => setIsFirstOpen(true)} label="Open Modal" />

			<ModalOne
				isOpen={isFirstOpen}
				setIsOpen={setIsFirstOpen}
				switchModals={switchModals}
			/>

			<ModalTwo
				isOpen={isSecondOpen}
				setIsOpen={setIsSecondOpen}
				switchModals={switchModals}
			/>
		</React.Fragment>
	);
};

<SampleContent />
```
