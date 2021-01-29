import React from "react";
import { Button } from "../lib/button";

export default {
	title: "Components/Button",
	component: Button
};

const Template = args => <Button {...args} />;

export const primary = Template.bind({});
primary.storyName = "Default";
primary.args = {
	label: "Click Me",
	design: "",
	color: "",
	icon: ""
};
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
