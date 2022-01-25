import React from 'react';
import ToolTips from '../lib/react-tooltips';

export default {
	title: 'Components/Tooltips',
	component: ToolTips,
	args: {
		buttonText: 'Element content',
		tooltipText: 'Example tooltip content goes here',
		position: 'top',
		id: 'tooltip-id',
	},
	argTypes: {
		buttonText: {
			description: 'This will be the text of the button.',
			control: {
				type: 'text',
			},
		},
		tooltipText: {
			description: 'This will be the content of the tooltip',
			control: {
				type: 'text',
			},
		},
		position: {
			description: 'This will be the position of the tooltip',
			control: {
				type: 'select',
				options: {
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
		id: {
			description: 'This will be id and aria describedby for tooltip',
			control: {
				type: 'text',
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
	position: 'top-left',
};
