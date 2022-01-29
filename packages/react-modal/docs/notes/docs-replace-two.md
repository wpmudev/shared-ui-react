# Replace Modal

## Sample 2

This example will involve a modal that gets replaced without any actions, like clicking on a button.

#### **Modal One**

For this example, the first modal will contain only text to simulate a warning to the users letting them know something is happening in the background and waiting for the process to end.

When the modal contains only text, there are no elements to focus on, like a button or an input. The lack of a focusable element causes console errors because all modals must focus on a component when open.

To fix the problem mentioned previously is necessary to include the `initialFocus` property calling the element we want to focus on. For example, a text containing the class `.sui-description`.

```jsx
const sampleModalOne = ({ isOpen }) => {
	const getModalContent = () => {
		return (
			<div className="sui-box">
				<div className="sui-box-body">
					<p id="sui-modal-one__title">This modal will be replaced in 3 seconds...</p>
				</div>
			</div>
		);
	};

	return (
		<Modal
			mounted={isOpen}
			dialogId="sui-modal-one"
			titleId="sui-modal-one__title"
			size="sm"
			initialFocus=".sui-box-body"
			modalContent={getModalContent}
		/>
	);
};
```

#### **Modal Two**

We will include a message and simple action, close button.

The message will let users know that the background has already finished what was happening. On the other hand, the action will allow the users to close the modal.

Notice we don't use the `initialFocus` property here. That's because the modal has a focusable element to rely on for auto-focus.

```jsx
const SampleTwoModalTwo = ({ isOpen, setIsOpen }) => {
	const replaceModalContent = ({ closeModal }) => {
		const closeThisModal = () => {
			closeModal();
			setIsOpen(false);
		};

		return (
			<div className="sui-box">
				<div className="sui-box-body">
					<p>Click below to close modal:</p>

					<Button
						label="Close Modal"
						className="sui-button-float--right"
						onClick={closeThisModal}
					/>
				</div>
			</div>
		);
	};

	return (
		<Modal
			mounted={isOpen}
			dialogId="sui-modal-one"
			titleId="sui-modal-one__title"
			size="sm"
			modalContent={replaceModalContent}
		/>
	);
};
```

#### **Load Modals**

Finally, we need to call both of the modals previously created. First, the "Modal One" will be opened once the user clicks on the "Open Modal" button, and after 10 seconds, the modal will close and get replaced by the "Modal Two."

Below you can find an example of how to call the modals in the correct order. `useState` will help set modals open or false, depending on the case. In contrast, `useEffect` will call the second modal, replacing the first one, after some time. There's also the "trigger component," which in this case will be the `<Button />` component.

```jsx
const SampleContent = () => {
	const [isFirstOpen, setIsFirstOpen] = React.useState(false);
	const [isSecondOpen, setIsSecondOpen] = React.useState(false);

	useEffect(() => {
		const success = setTimeout(() => {
			if (isFirstOpen) {
				setIsFirstOpen(false);
				setIsSecondOpen(true);
			}
		}, 1000);
		return success;
	}, [isFirstOpen]);

	return (
		<React.Fragment>
			<Button onClick={() => setIsFirstOpen(true)} label="Open Modal" />

			<SampleTwoModalOne isOpen={isFirstOpen} />

			<SampleTwoModalTwo isOpen={isSecondOpen} setIsOpen={setIsSecondOpen} />
		</React.Fragment>
	);
};

<SampleContent />
```
