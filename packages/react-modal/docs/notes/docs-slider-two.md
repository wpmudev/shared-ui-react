# Slider Modal

## Sample 2

In this example, the backward move action is disabled; the user can only move forward until reaching the last step.

In the last step, the user can decide between three actions:

1. To go back to the first step (first slide).
2. To close and cancel everything.
3. To close and save changes.

#### **Step One**

It is a basic modal with two main actions: a "close" button and a "continue" button to move to the next step.

```jsx
const stepOne = ({ closeModal, slideTo }) => {
	const nextStep = "two";
	const animateTo = "left";

	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
				<ButtonIcon
					icon="close"
					iconSize="md"
					label={"Close this modal"}
					className="sui-button-float--right"
					onClick={closeModal}
				/>

				<h2 id="sample-modal__title" className="sui-box-title sui-lg">Title</h2>
			</div>

			<div className="sui-box-body">
				<p>Some content may come here...</p>
			</div>

			<div className="sui-box-footer sui-flatten sui-content-right">
				<Button label="Next Slide" onClick={() => slideTo(nextStep, animateTo)} />
			</div>
		</div>
	);
};
```

#### **Step Two**

This step will only allow the user to enable or disable some settings and accept the changes to move to the next step.

```jsx
const stepTwo = ({ slideTo }) => {
	const nextStep = "three";
	const animateTo = "left";

	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60 sui-spacing-bottom--30 sui-spacing-sides--50">
				<h3 className="sui-box-title sui-lg">Slide Title</h3>
			</div>

			<div className="sui-box-body">
				<p>Some content might come here...</p>
			</div>

			<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-top--30">
				<Button
					color="blue"
					label="Activate"
					onClick={() => slideTo(nextStep, animateTo)}
				/>
			</div>
		</div>
	);
};
```

#### **Step Three**

As mentioned before, once the user reaches this step can decide, in this simulation, between three actions:

1. To go back to the first step (first slide).
2. To close and cancel everything.
3. To close and save changes.

```jsx
const stepThree = ({ closeModal, slideTo }) => {
	const nextStep = "one";
	const animateTo = "right";

	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60 sui-spacing-sides--50">
				<ButtonIcon
					icon="chevron-left"
					iconSize="md"
					label="Cancel and repeat process"
					className="sui-button-float--left"
					onClick={() => slideTo(nextStep, animateTo)}
				/>

				<ButtonIcon
					icon="close"
					iconSize="md"
					label="Cancel process and close modal"
					className="sui-button-float--right"
					onClick={closeModal}
				/>

				<h3 className="sui-box-title sui-lg">Step Title</h3>
			</div>

			<div className="sui-box-body">
				<p className="sui-description">
					Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
					Maecenas faucibus mollis interdum.
				</p>
			</div>

			<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-top--30">
				<Button color="blue" label="Confirm Changes" onClick={closeModal} />
				<Button design="ghost" label="Cancel" onClick={closeModal} />
			</div>
		</div>
	);
};
```

#### **Load Steps**

We use the `loadSteps` constant to list all slides (steps) that we will use in the modal.

For steps "one" and "three," include the `focus` property since we want to focus on a specific element when the slide opens.

Since we will not be playing with different modal sizes, we do not need to include the `size` property per slide.

```jsx
const loadSteps = {
	one: {
		render: sampleTwoSlideOne,
		focus: "select"
	},
	two: {
		render: sampleTwoSlideTwo
	},
	three: {
		render: sampleTwoSlideThree,
		focus: ".sui-button-blue"
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
	size: "md", // Global size.
	modalContent: loadSteps,
	firstSlide: "one",
	triggerContent
/>
```
