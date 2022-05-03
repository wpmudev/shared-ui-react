import React from "react";
import { ButtonIcon } from "../lib/react-button-icon";

export default {
	title: "Components/Button Icon",
	component: ButtonIcon,
	parameters: {
		notes: {
			disabled: true,
		},
	},
};

export const demo = args => <ButtonIcon {...args} />;
demo.storyName = "Demo";
demo.args = {
	label: "Close this content",
	icon: "close",
};
demo.argTypes = {
	label: {
		type: {
			required: true,
		},
		description: 'The text that describes the button.',
		control: {
			type: 'text',
		},
	},
	icon: {
		type: {
			required: true,
		},
		description:
			'Name of the icon to include in the button. Check out the available icons <a href="https://wpmudev.github.io/shared-ui/icons/" target="_blank">here</a>.',
		control: {
			type: 'text',
		},
	},
	iconSize: {
		description: 'By default, the icon has a 12px size but you can change it with this property. You could use either:',
		table: {
			type: { summary: 'sm | md | lg' },
		},
		control: {
			type: 'select',
			options: ['', 'sm', 'md', 'lg'],
		},
	},
	design: {
		description: 'The button styles. It could be either solid (default) or outlined.',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'select',
			options: ['', 'outlined'],
		},
	},
	color: {
		description: 'The button comes in gray color by default but you can change that with this property.',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'select',
			options: ['', 'blue', 'green', 'red', 'orange', 'purple', 'yellow', 'white'],
		},
	},
	className: {
		description: 'Extra classes to add to the button.',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'text',
		},
	},
	onClick: {
		description: 'Callback for the onClick event.',
		table: {
			type: { summary: 'function' },
		},
		control: {
			type: null,
		},
	},
};