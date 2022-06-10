import React from "react";
import { Selectors } from "../lib/react-selectors";

export default {
	title: "Components/Selectors",
	component: Selectors,
	// parameters: {
	// 	actions: {
	// 		disabled: true,
	// 	},
	// 	notes: {
	// 		disabled: true,
	// 	},
	// },
};

export const demo = args => <Selectors {...args} />;
demo.storyName = 'Demo';
demo.args = {
	name: 'selectors',
	columns: 'three',
	content: [
		{
			id: "unique-id-1",
			label: "Element text",
			labelId: "label-id-1",
			icon: "info",
		},
		{
			id: "unique-id-2",
			label: "Element text",
			labelId: "label-id-2",
			icon: "info",
		},
		{
			id: "unique-id-3",
			label: "Element text",
			labelId: "label-id-3",
			icon: "info",
			disabled: true,
			isPro: true,
		},
		{
			id: "unique-id-4",
			label: "Element text",
			labelId: "label-id-4",
			icon: "info",
		}
	],
};
demo.argTypes = {
	name: {
		description: "Name of the selectors",
		table: {
			type: { summary: "string" },
		},
		control: {
			type: 'text',
		},
	},
	columns: {
		description: "Number of columns",
		table: {
			type: { summary: "string" },
		},
		control: {
			type: 'select',
			options: ['one', 'two', 'three', 'four', 'five'],
		},
	},
	content: {
		description: "Content of the selectors",
		table: {
			type: { summary: "array" },
		},
		control: {
			type: 'array',
		},
	}
};