import React from 'react';
import { Button } from '../lib/button';

export default {
	title: 'Components/Button/Icon',
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const primary = Template.bind({});
primary.storyName = 'Trailing Icon';
primary.args = {
	label: 'Button',
	design: 'solid',
	color: 'gray',
	width: 'default',
	height: '30',
	icon: 'wpmudev-logo',
	iconRight: true,
	loading: null,
	disabled: null,
	className: null,
	htmlFor: null,
	href: null,
	onClick: null,
};
primary.argTypes = {
	label: {
		description: 'The text that shows up in the button',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
		control: {
			type: 'text',
		},
	},
	design: {
		description: 'The button style',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'text' },
		},
		control: {
			type: 'select',
			options: {
				'Text (Default)': 'text',
				Solid: 'solid',
				Light: 'light',
				Ghost: 'ghost',
				'Ghost Dashed': 'ghost-dashed',
			},
		},
	},
	color: {
		description: 'The button color',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'gray' },
		},
		control: {
			type: 'select',
			options: {
				'Gray (Default)': 'gray',
				Blue: 'blue',
				Green: 'green',
				Red: 'red',
				Purple: 'purple',
			},
		},
	},
	width: {
		description: 'The button width',
		control: {
			type: 'select',
			options: {
				Default: 'default',
				'Full Width': 'full',
			},
		},
	},
	height: {
		description: 'The button height',
		control: {
			type: 'select',
			options: {
				'30px (Default)': '30',
				'50px': '50',
				'60px': '60',
				'70px': '70',
			},
		},
	},
	icon: {
		description:
			'Name of the icon to include in the button. Check out the <a href="https://wpmudev.github.io/shared-ui/icons/" target="_blank">available icons</a>',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'null' },
		},
		control: {
			type: 'text',
		},
	},
	loading: {
		description: 'Whether the button should show up as "loading"',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
	disabled: {
		description: 'Whether the button should be disabled',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
	className: {
		description: 'Extra classes to add to the button',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'null' },
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
			defaultValue: { summary: 'null' },
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
			defaultValue: { summary: 'null' },
		},
		control: {
			type: 'text',
		},
	},
	onClick: {
		description: 'Callback for the onClick event',
		table: {
			type: { summary: 'function' },
			defaultValue: { summary: 'null' },
		},
		control: {
			type: null,
		},
	},
	iconRight: {
		description: 'Whether the button should have the icon on the right or on the left',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
};

// left icon button
export const leftIcon = Template.bind({});
leftIcon.storyName = 'Leading Icon';
leftIcon.args = {
	...primary.args,
	iconRight: false,
};
leftIcon.argTypes = primary.argTypes;

// loading button
export const loading = Template.bind({});
loading.storyName = 'Loading';
loading.args = {
	...primary.args,
	loading: true,
	disabled: true,
};
loading.argTypes = primary.argTypes;

// disabled button
export const disabled = Template.bind({});
disabled.storyName = 'Disabled';
disabled.args = {
	...primary.args,
	loading: false,
	disabled: true,
};
disabled.argTypes = primary.argTypes;
