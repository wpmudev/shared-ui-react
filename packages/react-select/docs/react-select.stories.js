import React from "react";
import { Select } from "../lib/react-select";

export default {
  title: "Components/Select",
  component: Select,
};

let array = [
  "Red",
  "Green",
  "Blue",
  "White",
  "Gray",
  "Black",
  "Pink",
  "Violet",
  "Cyan",
  "Yellow",
];
const primary = (args) => {
  return <Select {...args}>{array}</Select>;
};
primary.storyName = "Default";
primary.args = {
  label: "Title",
  desc: "List of colors",
};

export { primary };
