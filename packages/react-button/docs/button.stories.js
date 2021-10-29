import React from "react";
import { Box, BoxHeader, BoxBody, BoxFooter, BoxSection } from "../../react-box/lib/box";
import { Button } from "../lib/button";

export default {
	title: "Components/Button",
	component: Button
};

const Template = args => <Button {...args} />;

export const primary = Template.bind({});
primary.storyName = "Default";
primary.args = {
	label: 'Button',
	design: null,
	color: null,
	icon: null,
	loading: null,
	disabled: null,
	className: null,
	htmlFor: null,
	href: null,
	onClick: null,
	placeIconRight: false,
};
primary.argTypes = {
	label: {
		description: 'The text that shows up in the button',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
		control: {
			type: 'text'
		}
	},
	design: {
		description: 'The button style',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'solid' },
		},
		control: {
			type: "select",
			options: ["solid", "ghost"]
		}
	},
	color: {
		description: 'The button color',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'gray' },
		},
		control: {
			type: "select",
			options: [
				"gray",
				"blue",
				"green",
				"red",
				"orange",
				"purple",
				"yellow",
				"white"
			]
		}
	},
	icon: {
		description: 'Name of the icon to include in the button. Check out the <a href="https://wpmudev.github.io/shared-ui/icons/" target="_blank">available icons</a>',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'null' },
		},
		control: {
			type: 'text'
		}
	},
	loading: {
		description: 'Whether the button should show up as "loading"',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: "boolean"
		}
	},
	disabled: {
		description: 'Whether the button should be disabled',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: "boolean"
		}
	},
	className: {
		description: 'Extra classes to add to the button',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'null' },
		},
		control: {
			type: 'text'
		}
	},
	htmlFor: {
		description: 'When you want the button to be a label, provide the ID of the input it is a label for. Passing a value that is not `null` makes the button be a `<label>`',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'null' },
		},
		control: {
			type: 'text'
		}
	},
	href: {
		description: 'When you want the button to be an hyperlink, provide value of the `href` attribute. Passing a value that is not `null` makes the button be an `<a>`',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'null' },
		},
		control: {
			type: 'text'
		}
	},
	onClick: {
		description: 'Callback for the onClick event',
		table: {
			type: { summary: 'function' },
			defaultValue: { summary: 'null' },
		},
		control: {
			type: null
		}
	},
	placeIconRight: {
		description: 'Whether the button should have the icon on the right or on the left',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: "boolean"
		}
	},
};

export const loading = Template.bind({});
loading.storyName = "Loading";
loading.args = {
	...primary.args,
	loading: true
};
loading.argTypes = primary.argTypes;

export const disabled = Template.bind({});
disabled.storyName = "Disabled";
disabled.args = {
	...primary.args,
	disabled: true
};
