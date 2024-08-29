import React from 'react';
import { Modal } from '../lib/react-modal';
import { Button } from '@wpmudev/react-button';
import { ButtonIcon } from '@wpmudev/react-button-icon';
import image1x from './images/hustle-footer.png';
import image2x from './images/hustle-footer@2x.png';

import SampleOneDocs from './notes/docs-slider-one.md';
import SampleTwoDocs from './notes/docs-slider-two.md';

export default {
	title: 'Containers/Modal/Slider',
	component: Modal,
};

const Template = (args) => <Modal {...args} />;

const sampleOneSlideOne = ({ closeModal, slideTo }) => {
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
						{'Choose Content Type'}
					</h3>
					<p className="sui-description">
						{"Let's start by choosing an appropriate content type based on your goal."}
					</p>
				</div>

				<div className="sui-box-selectors sui-box-selectors-col-2">
					<ul>
						<li>
							<label
								htmlFor="demo-dialog--sample-hustle-create-option-1"
								className="sui-box-selector"
							>
								<input
									type="radio"
									name="demo-dialog--sample-hustle-create-options"
									id="demo-dialog--sample-hustle-create-option-1"
								/>
								<span>
									<span className="sui-icon-mail" aria-hidden="true" tabIndex="-1"></span> Email
									Opt-in
								</span>
								<span>Perfect for Newsletter signups, or collecting user data in general.</span>
							</label>
						</li>

						<li>
							<label
								htmlFor="demo-dialog--sample-hustle-create-option-2"
								className="sui-box-selector"
							>
								<input
									type="radio"
									name="demo-dialog--sample-hustle-create-options"
									id="demo-dialog--sample-hustle-create-option-2"
								/>
								<span>
									<span className="sui-icon-info" aria-hidden="true" tabIndex="-1"></span>{' '}
									Informational
								</span>
								<span>Perfect for promotional offers with Call to Action.</span>
							</label>
						</li>
					</ul>
				</div>

				<div className="sui-box-footer sui-content-right sui-flatten">
					<Button label={'Next'} onClick={() => slideTo('two', 'left')} />
				</div>

				<img
					src={image1x}
					srcSet={`${image1x} 1x, ${image2x} 2x`}
					className="sui-image sui-image-center"
					aria-hidden="true"
					alt=""
				/>
			</div>

			<button className="sui-modal-skip" onClick={closeModal}>
				Skip this, I know my way around
			</button>
		</React.Fragment>
	);
};

const sampleOneSlideTwo = ({ closeModal, slideTo }) => {
	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
				<ButtonIcon
					icon="chevron-left"
					iconSize="md"
					label={'Go to previous step'}
					className="sui-button-float--left"
					onClick={() => slideTo('one', 'right')}
				/>

				<ButtonIcon
					icon="close"
					iconSize="md"
					label={'Close this modal'}
					className="sui-button-float--right"
					onClick={closeModal}
				/>

				<h3 className="sui-box-title sui-lg">{'Create Popup'}</h3>

				<p className="sui-description">
					{"Let's give your new popup a name. What would you like to name it?"}
				</p>
			</div>

			<div className="sui-box-body">
				<div className="sui-form-field">
					<label
						htmlFor="demo-dialog--sample-hustle-create-slide-2-input"
						id="demo-dialog--sample-hustle-create-slide-2-input-label"
						className="sui-screen-reader-text"
					>
						Enter form name
					</label>

					<div className="sui-with-button sui-with-button-icon">
						<input
							type="text"
							id="demo-dialog--sample-hustle-create-slide-2-input"
							className="sui-form-control"
							aria-labelledby="demo-dialog--sample-hustle-create-slide-2-input-label"
							aria-describedby="demo-dialog--sample-hustle-create-slide-2-input-desc"
						/>

						<ButtonIcon
							icon="arrow-right"
							iconSize="md"
							label={'Build New Popup'}
							color="blue"
							onClick={closeModal}
						/>
					</div>

					<span
						id="demo-dialog--sample-hustle-create-slide-2-input-desc"
						className="sui-description"
						style={{ marginTop: 10 }}
					>
						This will not be visible anywhere on your website
					</span>
				</div>
			</div>

			<img
				src={image1x}
				srcSet={`${image1x} 1x, ${image2x} 2x`}
				className="sui-image sui-image-center"
				aria-hidden="true"
				alt=""
			/>
		</div>
	);
};

const sampleOneContent = {
	one: {
		render: sampleOneSlideOne,
		size: 'lg',
	},
	two: {
		render: sampleOneSlideTwo,
		size: 'sm',
		focus: '.sui-form-control',
	},
};

const sampleTwoSlideOne = ({ closeModal, slideTo }) => {
	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
				<ButtonIcon
					icon="close"
					iconSize="md"
					label={'Close this modal'}
					className="sui-button-float--right"
					onClick={closeModal}
				/>

				<h2 id="sample-modal__title" className="sui-box-title sui-lg">
					{'Create Contact'}
				</h2>

				<p className="sui-description">
					{
						"Let's start with choosing the HubSpot list and matching up your form fields with the default HubSpot contact fields to make sure we’re sending data to the right place."
					}
				</p>
			</div>

			<div className="sui-box-body">
				<div className="sui-form-field">
					<label
						htmlFor="demo-dialog--sample-hubspot-list"
						id="demo-dialog--sample-hubspot-list-label"
						className="sui-label"
					>
						HubSpot List (optional) <span className="sui-label-note">Static list only</span>
					</label>

					<select
						id="demo-dialog--sample-hubspot-list"
						aria-labelledby="demo-dialog--sample-hubspot-list-label"
						aria-required="true"
					>
						<option value="">Select a list</option>
						<option value="list-1">List #1</option>
						<option value="list-2">List #2</option>
						<option value="list-3">List #3</option>
					</select>

					<span className="sui-description">
						You can optionally add the contact to a static HubSpot list. Leave it empty to create a
						contact without adding it to a list.
					</span>
				</div>
			</div>

			<div className="sui-box-footer sui-flatten sui-content-right">
				<Button label={'Continue'} onClick={() => slideTo('two', 'left')} />
			</div>
		</div>
	);
};

const sampleTwoSlideTwo = ({ slideTo }) => {
	const toggleContainer = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '19px 20px',
		backgroundColor: '#f8f8f8',
	};

	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60 sui-spacing-bottom--30 sui-spacing-sides--50">
				<h3 className="sui-box-title sui-lg">Create Ticket</h3>

				<p className="sui-description">
					In addition to adding a new contact to your HubSpot account, you can also create a HubSpot
					ticket for each form submission.
				</p>
			</div>

			<div style={toggleContainer}>
				<label htmlFor="demo-dialog--sample-hubspot-ticket-toggle" className="sui-toggle">
					<input
						type="checkbox"
						id="demo-dialog--sample-hubspot-ticket-toggle"
						aria-labelledby="demo-dialog--sample-hubspot-ticket-toggle-label"
					/>
					<span className="sui-toggle-slider" aria-hidden="true"></span>
				</label>
				<label
					htmlFor="demo-dialog--sample-hubspot-ticket-toggle"
					id="demo-dialog--sample-hubspot-ticket-toggle-label"
					className="sui-toggle-label"
				>
					Create a HubSpot ticket for each submission
				</label>
			</div>

			<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-top--30">
				<Button color="blue" label="Activate" onClick={() => slideTo('three', 'left')} />
			</div>
		</div>
	);
};

const sampleTwoSlideThree = ({ closeModal, slideTo }) => {
	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60 sui-spacing-sides--50">
				<ButtonIcon
					icon="chevron-left"
					iconSize="md"
					label="Cancel and repeat process"
					className="sui-button-float--left"
					onClick={() => slideTo('one', 'right')}
				/>

				<ButtonIcon
					icon="close"
					iconSize="md"
					label="Cancel process and close modal"
					className="sui-button-float--right"
					onClick={closeModal}
				/>

				<h3 className="sui-box-title sui-lg">Confirm Integration</h3>

				<p className="sui-description">
					Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus
					mollis interdum.
				</p>
			</div>

			<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-top--30">
				<Button color="blue" label="Confirm Changes" onClick={closeModal} />
				<Button design="ghost" label="Cancel" onClick={closeModal} />
			</div>

			<img
				src={image1x}
				srcSet={`${image1x} 1x, ${image2x} 2x`}
				className="sui-image sui-image-center"
				aria-hidden="true"
				alt=""
			/>
		</div>
	);
};

const sampleTwoContent = {
	one: {
		render: sampleTwoSlideOne,
		focus: 'select',
	},
	two: {
		render: sampleTwoSlideTwo,
	},
	three: {
		render: sampleTwoSlideThree,
		focus: '.sui-button-blue',
	},
};

const triggerContent = ({ openModal }) => {
	return <Button onClick={openModal} label="Open Modal" />;
};

export const sampleOne = Template.bind({});
sampleOne.storyName = 'Sample 1';
sampleOne.args = {
	dialogId: 'sample-modal',
	titleId: 'sample-modal__title',
	size: 'lg',
	modalContent: sampleOneContent,
	firstSlide: 'one',
	triggerContent,
};

export const sampleTwo = Template.bind({});
sampleTwo.storyName = 'Sample 2';
sampleTwo.args = {
	dialogId: 'sample-modal',
	titleId: 'sample-modal__title',
	size: 'md',
	modalContent: sampleTwoContent,
	firstSlide: 'one',
	triggerContent,
};
