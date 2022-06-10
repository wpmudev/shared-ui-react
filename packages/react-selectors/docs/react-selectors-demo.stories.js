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
	columns: 'one',
	content: [
		{
			id: "unique-id-1",
			label: "Element text",
			labelId: "label-id-1",
			description: "Element description",
			descriptionId: "description-id-1",
			icon: "info",
			vertical: true,
		},
		{
			id: "unique-id-2",
			label: "Element text",
			labelId: "label-id-2",
			description: "Element description",
			descriptionId: "description-id-2",
			icon: "info",
			vertical: true,
		},
		{
			id: "unique-id-3",
			label: "Element text",
			labelId: "label-id-3",
			description: "Element description",
			descriptionId: "description-id-3",
			icon: "info",
			vertical: true,
			disabled: true,
			isPro: true,
		},
		{
			id: "unique-id-4",
			label: "Element text",
			labelId: "label-id-4",
			description: "Element description",
			descriptionId: "description-id-4",
			icon: "info",
			vertical: true,
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