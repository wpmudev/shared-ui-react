import React from "react";
import { Box, BoxHeader, BoxBody, BoxFooter, BoxSection } from "../../react-box/lib/box";
import { Button } from "../lib/button";

export default {
	title: "Components/Button",
	component: Button
};

const Template = args => <Button {...args} />;

export const primary = () => {
	return (
		<Box>
			<BoxHeader title="Button Component"></BoxHeader>
			<BoxBody>
				<p>Some description here</p>
				<BoxSection
					title="As a button"
				>
					<Button
						label="I'm a button"
					/>
				</BoxSection>

				<BoxSection
					title="As an anchor"
				>
					<Button
						label="I'm an anchor"
						href="#"
						onClick={ ( e ) => e.preventDefault() }
					/>
				</BoxSection>

				<BoxSection
					title="As a label"
				>
					<Button
						label="I'm a label"
						htmlFor="nothing"
						className="custom-class"
					/>
				</BoxSection>
			</BoxBody>
		</Box>
	);
};
primary.storyName = "Default";
primary.argTypes = {
	design: {
		control: {
			type: "select",
			options: ["", "ghost"]
		}
	},
	color: {
		control: {
			type: "select",
			options: [
				"",
				"blue",
				"green",
				"red",
				"orange",
				"purple",
				"yellow",
				"white"
			]
		}
	}
};

export const loading = Template.bind({});
loading.storyName = "Loading";
loading.args = {
	...primary.args,
	loading: true
};
loading.argTypes = {
	...primary.argTypes,
	loading: {
		control: {
			type: "boolean"
		}
	}
};

export const disabled = Template.bind({});
disabled.storyName = "Disabled";
disabled.args = {
	...primary.args,
	disabled: true
};
disabled.argTypes = {
	...primary.argTypes,
	disabled: {
		control: {
			type: "boolean"
		}
	}
};
