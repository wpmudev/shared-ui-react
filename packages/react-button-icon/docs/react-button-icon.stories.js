import React from "react";
import { ButtonIcon } from "../lib/react-button-icon";

export default {
	title: "Components/Button Icon",
	component: ButtonIcon
};

const Template = args => <ButtonIcon {...args} />;

export const primary = Template.bind({});
primary.storyName = "Default";
primary.args = {
	label: "Close",
	icon: "close",
	design: "",
	color: "",
	className: "custom-class"
};
primary.argTypes = {
	design: {
		control: {
			type: "select",
			options: ["", "outlined"]
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
