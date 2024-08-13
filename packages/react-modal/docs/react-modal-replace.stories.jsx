import React, { useEffect } from 'react';
import { Modal } from '../lib/react-modal';
import { Button } from '@wpmudev/react-button';
import { ButtonIcon } from '@wpmudev/react-button-icon';
import { InputWithRef } from '@wpmudev/react-input';
import banner from './images/beehive-welcome.png';
import image1x from './images/hustle-footer.png';
import image2x from './images/hustle-footer@2x.png';

export default {
	title: 'Containers/Modal/Replace',
	component: Modal,
};

const SampleOneModalOne = ({ isOpen, setIsOpen, switchModals }) => {
	const inputValue = React.useRef(null);

	const replaceModalContent = ({ closeModal }) => {
		const closeThisModal = () => {
			closeModal();
			setTimeout(() => {
				setIsOpen(false);
			}, 300);
		};
		
		const onChangeHandler = (event) => {
			inputValue.current.value = event.target.value;
		};

		return (
			<div className="sui-box">
				<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
					<figure className="sui-box-banner" aria-hidden="true">
						<img src={banner} aria-hidden="true" alt="" />
					</figure>

					<ButtonIcon
						icon="close"
						iconSize="md"
						label="Close this modal"
						className="sui-button-float--right"
						onClick={closeThisModal}
					/>

					<h3 id="sui-modal-one__title" className="sui-box-title sui-lg">
						{'Welcome to Beehive Pro'}
					</h3>

					<p className="sui-description">
						{
							"Hello and welcome to the hottest Google Analytics plugin for WordPress. Let's get started by connecting your Google Analytics account so that we can feed your analytics data. If you only want to enable tracking without reports, you can paste your analytics code via the link below."
						}
					</p>
				</div>

				<div className="sui-box-body">
					<div className="sui-border-frame">
						<p className="sui-description">
							{
								'Easily connect with Google and paste the access code below. Please note, we only retrieve analytics information and no personally identifiable data.'
							}
						</p>

						<InputWithRef
							label="Access Code"
							placeholder="Place access code here"
							ref={inputValue}
							onChange={onChangeHandler}
							type="text"
						/>

						<Button id="auth-button" onClick={switchModals} label="Authorize" color="blue" />
					</div>
				</div>
			</div>
		);
	};

	return (
		<Modal
			mounted={isOpen}
			titleId="sui-modal-one__title"
			size="lg"
			dialogId="first"
			initialFocus=".sui-form-control"
			modalContent={replaceModalContent}
		/>
	);
};

const SampleOneModalTwo = ({ isOpen, setIsOpen, switchModals }) => {
	const confirmationModalContent = ({ closeModal }) => {
		const closeThisModal = function () {
			closeModal();
			setTimeout(() => {
				setIsOpen(false);
			}, 300);
		};

		return (
			<div className="sui-box">
				<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
					<figure className="sui-box-banner" aria-hidden="true">
						<img src={banner} aria-hidden="true" alt="" />
					</figure>

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

					<span className="sui-icon-loader sui-loading" aria-hidden="true" />

					<h3 id="sui-modal-two__title" className="sui-box-title sui-lg">
						{'Finishing Up...'}
					</h3>

					<p className="sui-description">
						Please wait a few moments while we set up your account. Note that data can take up to 24
						hours to display.
					</p>
				</div>

				<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-top--30">
					<Button onClick={switchModals} label="Cancel" design="ghost" />
				</div>
			</div>
		);
	};

	return (
		<Modal
			mounted={isOpen}
			titleId="sui-modal-two__title"
			dialogId="confirmation"
			modalContent={confirmationModalContent}
		/>
	);
};

const SampleOneContent = () => {
	const [isFirstOpen, setIsFirstOpen] = React.useState(false);
	const [isSecondOpen, setIsSecondOpen] = React.useState(false);
	const switchModals = () => {
		setIsFirstOpen(!isFirstOpen);
		setIsSecondOpen(!isSecondOpen);
	};

	return (
		<React.Fragment>
			<Button onClick={() => setIsFirstOpen(true)} label="Open Modal" />

			<SampleOneModalOne
				isOpen={isFirstOpen}
				setIsOpen={setIsFirstOpen}
				switchModals={switchModals}
			/>

			<SampleOneModalTwo
				isOpen={isSecondOpen}
				setIsOpen={setIsSecondOpen}
				switchModals={switchModals}
			/>
		</React.Fragment>
	);
};

const sampleOneTemplate = () => <SampleOneContent />;

export const SampleOne = sampleOneTemplate.bind({});
SampleOne.storyName = 'Sample 1';

const SampleTwoModalOne = ({ isOpen }) => {
	const replaceModalContent = () => {
		return (
			<div className="sui-box">
				<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60 sui-spacing-bottom--30">
					<span className="sui-icon-loader sui-loading sui-lg" aria-hidden="true" />

					<h3 id="sample-modal-one__title" className="sui-box-title sui-lg">
						{'Publishing...'}
					</h3>

					<p className="sui-description">
						{'Great work! Please hold tight a few moments while we publish your form to the world.'}
					</p>
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

	return (
		<Modal
			mounted={isOpen}
			dialogId="sui-modal-one"
			titleId="sui-modal-one__title"
			size="sm"
			initialFocus=".sui-box-title"
			modalContent={replaceModalContent}
		/>
	);
};

const SampleTwoModalTwo = ({ isOpen, setIsOpen }) => {
	const replaceModalContent = ({ closeModal }) => {
		const closeThisModal = () => {
			closeModal();
			setIsOpen(false);
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

					<span className="sui-icon-check sui-lg" style={{ marginBottom: 10 }} aria-hidden="true" />

					<h3 id="sample-modal-one__title" className="sui-box-title sui-lg">
						{'Ready to go!'}
					</h3>

					<p className="sui-description">
						{
							'Your form is now ready to be embedded into a page or template of your choice. Simply copy and paste the shortcode below to display it!'
						}
					</p>
				</div>

				<div className="sui-box-body">
					<div className="sui-form-control">{'[forminator_form id="277"]'}</div>
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

const SampleTwoContent = () => {
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

const sampleTwoTemplate = () => <SampleTwoContent />;

export const SampleTwo = sampleTwoTemplate.bind({});
SampleTwo.storyName = 'Sample 2';
