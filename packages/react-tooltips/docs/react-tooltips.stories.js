import React from 'react';
import ToolTips from '../lib/react-tooltips';

export default {
	title: 'Components/Tooltips',
	component: ToolTips,
	args: {
		text: 'Element content',
		tooltipText: 'Example tooltip content goes here',
		position: 'top',
	},
	argTypes: {
		text: {
			type: {
				name: 'text',
				required: true,
			},
			description: '',
			control: {
				type: 'text',
			},
		},
		tooltipText: {
			type: {
				name: 'text',
				required: true,
			},
			description: '',
			control: {
				type: 'text',
			},
		},
		position: {
			control: {
				type: 'select',
				options: {
					Default: 'top',
					Top: 'top',
					'Top Left': 'top-start',
					'Top Right': 'top-end',
					Bottom: 'bottom',
					'Bottom Left': 'bottom-start',
					'Bottom Right': 'bottom-end',
					Left: 'left',
					Right: 'right',
				},
			},
		},
	},
};

const Template = (args) => {
	return <ToolTips {...args} />;
};

export const primary = Template.bind({});
primary.storyName = 'Default';

export const topLeft = Template.bind({});
topLeft.storyName = 'Top Left';
topLeft.args = {
	position: 'top-start',
};
