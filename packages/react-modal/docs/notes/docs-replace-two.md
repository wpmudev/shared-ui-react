# Replace Modal

## Sample Two

This example will involve a modal that gets replaced after some time without any actions, like clicking on a button.

#### **Modal One**

For this example, the first modal will contain only text to simulate a warning to the users letting them know something is happening in the background and need to wait for the process to end.

When the modal contains only text, means there are no focusable elements, like a button or an input, for it to rely upon causing console errors because all modals need to focus on an element when open. To fix that problem, it is necessary to include the `initialFocus` property calling the element we want to focus on. For example, `.sui-description`.

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

On the second modal, which will replace the first one, we will include a message and simple action, close button.

The message will let users know that what was happening in the background is already finished. The action, on the other hand, will allow the users to close the modal but also will help us to avoid using the `initialFocus` property since the modal will have an element to rely on for auto-focus when open.

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

Finally, we need to call both of the modals previously created. First, the **Modal One** will be opened once the user clicks on the "Open Modal" button and after 10 seconds it will be replaced with the **Modal Two**.

Below you can find an example of how to call the modals in the right order. `useState` will help to set modals open or false, depending on the case while `useEffect` will call the second modal, replacing the first one, after some time. There's also the **trigger component** which in this case will be the `<Button />` component.

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
