import React from "react";
import { Scores } from "../lib/react-scores";

export default {
	title: "Components/Scores"
};

const TypeOptions = {
	error: "error",
	warning: "warning",
	success: "success"
};

const Template = ({ ...props }) => {
	return <Scores {...props} />;
};

export const primary = Template.bind({});
primary.storyName = "Error";
primary.args = {
	type: "error",
	scoreValue: 15,
	large: false
};
primary.argTypes = {
	type: {
		control: {
			type: "select",
			options: TypeOptions
		}
	}
};

export const secondary = Template.bind({});
secondary.storyName = "Warning";
secondary.args = {
	type: "warning",
	scoreValue: 55,
	large: false
};
secondary.argTypes = {
	...primary.argTypes
};

export const tertiary = Template.bind({});
tertiary.storyName = "Success";
tertiary.args = {
	type: "success",
	scoreValue: 95,
	large: false
};
tertiary.argTypes = {
	...primary.argTypes
};
