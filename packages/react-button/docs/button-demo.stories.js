import React from 'react';
import { Button } from '../lib/button';

export default {
	title: 'Components/Button',
	component: Button,
};

export const demo = (args) => <Button {...args} />;
demo.storyName = 'Demo';
demo.args = {
	label: 'Button Label',
	design: 'solid',
	color: 'gray',
	icon: null,
	loading: false,
	disabled: false,
	className: null,
	htmlFor: null,
	href: null,
	onClick: null,
	iconRight: false,
};
demo.argTypes = {
	label: {
		description: 'The text that shows up in the button',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'text',
		},
	},
	design: {
		options: ['solid', 'ghost'],
		description: 'The button style',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'select',
		},
	},
	color: {
		options: ['gray', 'blue', 'green', 'red', 'orange', 'purple', 'yellow', 'white'],
		description: 'The button color',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'select',
		},
	},
	icon: {
		description:
			'Name of the icon to include in the button. Check out the <a href="https://wpmudev.github.io/shared-ui/icons/" target="_blank">available icons</a>',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'text',
		},
	},
	loading: {
		description: 'Whether the button should show up as "loading"',
		table: {
			type: { summary: 'boolean' },
		},
		control: {
			type: 'boolean',
		},
	},
	disabled: {
		description: 'Whether the button should be disabled',
		table: {
			type: { summary: 'boolean' },
		},
		control: {
			type: 'boolean',
		},
	},
	className: {
		description: 'Extra classes to add to the button',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'text',
		},
	},
	htmlFor: {
		description:
			'When you want the button to be a label, provide the ID of the input it is a label for. Passing a value that is not `null` makes the button be a `<label>`',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'text',
		},
	},
	href: {
		description:
			'When you want the button to be an hyperlink, provide value of the `href` attribute. Passing a value that is not `null` makes the button be an `<a>`',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'text',
		},
	},
	onClick: {
		description: 'Callback for the onClick event',
		table: {
			type: { summary: 'function' },
		},
		control: {
			type: null,
		},
	},
	iconRight: {
		description: 'Whether the button should have the icon on the right or on the left',
		table: {
			type: { summary: 'boolean' },
		},
		control: {
			type: 'boolean',
		},
	},
};
