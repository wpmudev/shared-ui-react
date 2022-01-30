# Slider Modal

## Sample 1

This modal sample simulates the Hustle plugin when the user triggers a modal to create a new opt-in.

The idea is to move users between steps and move forward or backward. Each step is a modal and can configure to have independent properties, like different sizes.

In this example, notice we move from a large modal to a small modal and vice versa. It also includes an animation to give users the perception of moving from left to right or right to left, depending on the case.

> The code below will not contain the entire markup used on the sample listed in this story, but it will include the base actions and structure.

#### **Step One**

The first step is a simple modal with two actionable elements and a title.

1. One button to close the modal completely.
2. One button to move into the next step.
3. A title to give context.

```jsx
const stepOne = ({ closeModal, slideTo }) => {
	const nextStep = "two";
	const animateTo = "left";

	return (
		<React.Fragment>
			<div className="sui-box">
				<div className="sui-box-header sui-content-center sui-spacing-top--60 sui-flatten">
					<ButtonIcon
						icon="close"
						iconSize="md"
						label="Skip"
						className="sui-button-float--right"
						onClick={closeModal}
					/>

					<h3 id="sui-modal__title" className="sui-box-title sui-lg">
						Modal Title
					</h3>
				</div>

				<div className="sui-box-footer sui-content-right sui-flatten">
					<Button label="Next" onClick={() => slideTo(nextStep, animateTo)} />
				</div>
			</div>
		</React.Fragment>
	);
};
```

#### **Step Two**

The second step contains three actionable elements that are important for the modal.

1. One button to go back to the previous step.
2. One button to close the modal, canceling all the processes.
3. One button to complete and confirm the operation.

There is also some text to give context and input. However, the actionable elements that interact directly with the modal are more important for this example.

```jsx
const stepTwo = ({ closeModal, slideTo }) => {
	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
				<ButtonIcon
					icon="chevron-left"
					iconSize="md"
					label="Go to previous step"
					className="sui-button-float--left"
					onClick={() => slideTo("one", "right")}
				/>

				<ButtonIcon
					icon="close"
					iconSize="md"
					label="Close this modal"
					className="sui-button-float--right"
					onClick={closeModal}
				/>

				<h3 className="sui-box-title sui-lg">
					Modal Title
				</h3>
			</div>

			<div className="sui-box-body">
				<div className="sui-form-field">
					<label
						htmlFor="sample-input"
						id="sample-input__label"
						className="sui-screen-reader-text">
						Enter form name
					</label>

					<div className="sui-with-button sui-with-button-icon">
						<input
							type="text"
							id="sample-input"
							className="sui-form-control"
							aria-labelledby="sample-input__label"
						/>

						<ButtonIcon
							icon="arrow-right"
							iconSize="md"
							label={"Build New Popup"}
							color="blue"
							onClick={closeModal}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
```

#### **Load Steps**

We use the `loadSteps` constant to list all slides (steps) that we will use in our modal. In the case of step "two," we also use the `focus` property to make sure the modal focuses on the input element when loads instead of the first focusable element. We also use the `size` property to let modal know the size of each slide (step) in case they are different.

```jsx
const loadSteps = {
	one: {
		render: stepOne,
		size: "lg"
	},
	two: {
		render: stepTwo,
		size: "sm",
		focus: ".sui-form-control"
	}
};
```

#### **Load Modal**

We will use a button to trigger our modal. Then we have some basic properties we need for the slides modal to work.

1. The `firstSlide` property will determine the first slide to open.
2. The `modalContent` property is where we will add the `loadSteps` constant created previously to list all the steps on our modal.
3. The `triggerContent` function will contain the element that will open our modal. In this case, a button.

```jsx
const triggerContent = ({ openModal }) => {
	return <Button onClick={openModal} label="Open Modal" />;
};

<Modal
	dialogId: "sample-modal",
	titleId: "sample-modal__title",
	size: "lg",
	modalContent: loadSteps,
	firstSlide: "one",
	triggerContent
/>
```
