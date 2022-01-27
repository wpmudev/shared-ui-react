import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import ToolTips from '../lib/react-tooltips';

export default {
	title: 'Components/Tooltips/Variations',
	component: ToolTips,
	args: {
		buttonText: 'Element content',
		tooltipText: 'Example tooltip content goes here',
		position: 'top',
		id: 'tooltip-id',
		customWidth: '',
		customMobileWidth: '',
		icon: false,
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
		customWidth: {
			description: 'This will be the width of the tooltip',
			control: {
				type: 'text',
			},
		},
		customMobileWidth: {
			description: 'This will be the width of the tooltip in mobile view.',
			control: {
				type: 'text',
			},
		},
		icon: {
			description: 'This will be the icon of the tooltip',
		},
		iconName: {
			description: 'This will be the icon name of the tooltip',
			control: {
				type: 'text',
			},
		},
		iconLabel: {
			description: 'This will be the icon label of the tooltip',
			control: {
				type: 'text',
			},
		},
	},
};

const Template = (args) => {
	return (
		<Box>
			<BoxBody>
				<ToolTips {...args} />
			</BoxBody>
		</Box>
	);
};

// icon button
export const button = Template.bind({});
button.storyName = 'Button';

// icon button
export const icon = Template.bind({});
icon.storyName = 'Icon Button';
icon.args = {
	icon: true,
	iconLabel: 'Icon Label',
	iconName: 'info',
};

// custom width
export const customWidth = Template.bind({});
customWidth.storyName = 'Custom Width';
customWidth.args = {
	customWidth: '171',
};

// custom mobile width
export const customMobileWidth = Template.bind({});
customMobileWidth.storyName = 'Custom Mobile Width';
customMobileWidth.args = {
	customMobileWidth: '200',
};
