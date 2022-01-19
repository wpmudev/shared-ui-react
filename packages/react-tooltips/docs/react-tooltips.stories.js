import React from 'react';
import ToolTips from '../lib/react-tooltips';

export default {
	title: 'Components/Tooltips',
	component: ToolTips,
	args: {
		text: 'Element content',
		tooltipText: 'Tooltip content goes here',
		position: 'default',
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
					Default: 'default',
					Top: 'top',
					'Top Left': 'top-left',
					'Top Right': 'top-right',
					Bottom: 'bottom',
					'Bottom Left': 'bottom-left',
					'Bottom Right': 'bottom-right',
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
