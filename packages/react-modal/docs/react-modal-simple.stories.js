import React from "react";
import { Modal } from "../lib/react-modal";
import { Box, BoxHeader, BoxBody, BoxFooter } from "@wpmudev/react-box";
import { Button } from "@wpmudev/react-button";
import { ButtonIcon } from "@wpmudev/react-button-icon";

export default {
	title: "Containers/Modal/Simple",
	component: Modal
};

const Template = args => <Modal {...args} />;

const sampleOneContent = ({ closeModal }) => {
	return (
		<React.Fragment>
			<Box>
				<BoxHeader>
					<Button label="Skip" design="ghost" onClick={closeModal} />
				</BoxHeader>
				<BoxBody>
					<p>
						{
							"Welcome to Hummingbird, the hottest Performance plugin for WordPress! We recommend running a quick performance test before you start tweaking things. Alternatively you can skip this step if you'd prefer start customizing."
						}
					</p>
				</BoxBody>
			</Box>
		</React.Fragment>
	);
};

const sampleTwoContent = ({ closeModal }) => {
	return (
		<React.Fragment>
			<Box>
				<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
					<ButtonIcon
						icon="close"
						iconSize="md"
						label="Close this modal"
						className="sui-button-float--right"
						onClick={closeModal}
					/>

					<h3 id="sample-modal__title" className="sui-box-title">
						Import Pop-up
					</h3>

					<p className="sui-description">
						{
							"Choose the popup configuration file and hit import to import your popup."
						}
					</p>
				</div>

				<BoxBody>
					<div className="sui-form-field">
						<label htmlFor="demo-upload-field" className="sui-label">
							Configuration file
						</label>

						<div className="sui-upload">
							<button className="sui-upload-button">
								<span className="sui-icon-upload-cloud" aria-hidden="true" />{" "}
								Upload file
							</button>

							<div className="sui-upload-file">
								<span>filename.pdf</span>

								<button aria-label="Remove file">
									<span className="sui-icon-close" aria-hidden="true"></span>
								</button>
							</div>
						</div>

						<span className="sui-description">
							Choose a JSON (.json) file to import the popup from.
						</span>
					</div>
				</BoxBody>

				<BoxFooter>
					<Button icon="upload-cloud" label="Import" disabled />

					<Button label="Cancel" onClick={closeModal} />
				</BoxFooter>
			</Box>
		</React.Fragment>
	);
};

const triggerContent = ({ openModal }) => {
	return <Button onClick={openModal} label="Open Modal" />;
};

export const sampleOne = Template.bind({});
sampleOne.storyName = "Sample 1";
sampleOne.args = {
	dialogId: "sample-modal",
	titleId: "sample-modal__title",
	size: "md",
	modalContent: sampleOneContent,
	triggerContent
};

export const sampleTwo = Template.bind({});
sampleTwo.storyName = "Sample 2";
sampleTwo.args = {
	dialogId: "sample-modal",
	titleId: "sample-modal__title",
	size: "sm",
	modalContent: sampleTwoContent,
	triggerContent
};
