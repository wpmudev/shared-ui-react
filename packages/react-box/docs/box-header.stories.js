import React from 'react';
import { Box, BoxHeader } from '../lib/box';
import { Button } from '@wpmudev/react-button';

export default {
	title: 'Containers/Box/Elements/Header',
	component: BoxHeader,
};

const Template = (args) => {
	return (
		<Box>
			<BoxHeader {...args} />
		</Box>
	);
};

export const SimpleHeader = Template.bind({});
SimpleHeader.storyName = 'Title Only';
SimpleHeader.args = {
	title: 'Box Title',
};
SimpleHeader.argTypes = {
	title: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Assign a title to your box.',
		control: {
			type: 'text',
		},
	},
	titleIcon: {
		type: {
			name: 'string',
			required: false,
		},
		description:
			'Enter the icon name you can find listed [here](https://wpmudev.github.io/shared-ui/icons/).',
		control: {
			type: 'text',
		},
	},
	tagLabel: {
		type: {
			name: 'string',
			required: false,
		},
		description:
			'Some boxes might contain title followed by a tag to highlight some content as "beta" feature or items count.',
		control: {
			type: 'text',
		},
	},
	tagColor: {
		options: ['default', 'red', 'yellow', 'green', 'blue', 'purple'],
		type: {
			name: 'string',
			required: false,
		},
		description:
			'By default **tags background** color is a subtle `light gray` but you can change this for any of the options suggested in the control selector: red, yellow, green, blue, purple. You can also leave this option empty, or simply not include it, to get default color.',
		control: {
			type: 'select',
		},
	},
	tagSize: {
		options: ['default', 'small'],
		type: {
			name: 'string',
			required: false,
		},
		description: 'By default ',
		control: {
			type: 'select',
		},
	},
	display: {
		options: ['block', 'inline'],
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'select',
		},
	},
	alignment: {
		options: ['left', 'center', 'right'],
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'select',
		},
	},
	paddingTop: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
	paddingRight: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
	paddingBottom: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
	paddingLeft: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
	border: {
		type: {
			name: 'string',
			required: false,
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0,
		},
	},
};

export const IconHeader = Template.bind({});
IconHeader.storyName = 'Title with Icon';
IconHeader.args = {
	...SimpleHeader.args,
	titleIcon: 'hummingbird',
};
IconHeader.argTypes = {
	...SimpleHeader.argTypes,
};

export const TagHeader = Template.bind({});
TagHeader.storyName = 'Title with Tag';
TagHeader.args = {
	...SimpleHeader.args,
	titleIcon: '',
	tagLabel: 'Pro',
	tagColor: 'purple',
	tagSize: 'sm',
};
TagHeader.argTypes = {
	...SimpleHeader.argTypes,
};

export const ActionHeader = Template.bind({});
ActionHeader.storyName = 'Title with Content';
ActionHeader.args = {
	...SimpleHeader.args,
	children: <Button label="Right Action" color="blue" />,
};
ActionHeader.argTypes = {
	...SimpleHeader.argTypes,
};

export const UntitledHeader = Template.bind({});
UntitledHeader.storyName = 'Content Only';
UntitledHeader.args = {
	alignment: 'right',
	children: <Button label="Right Action" color="blue" />
};
UntitledHeader.argTypes = {
	...SimpleHeader.argTypes,
};
