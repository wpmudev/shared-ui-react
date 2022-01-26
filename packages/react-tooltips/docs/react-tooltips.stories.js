import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import ToolTips from '../lib/react-tooltips';

export default {
	title: 'Components/Tooltips/Default',
	component: ToolTips,
	args: {
		buttonText: 'Element content',
		tooltipText: 'Example tooltip content goes here',
		position: 'top',
		id: 'tooltip-id',
		customWidth: '171',
		customMobileWidth: '200',
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

export const primary = Template.bind({});
primary.storyName = 'Default';

// top left position
export const topLeft = Template.bind({});
topLeft.storyName = 'Top Left';
topLeft.args = {
	position: 'top-left',
};

// top right position
export const topRight = Template.bind({});
topRight.storyName = 'Top Right';
topRight.args = {
	position: 'top-right',
};

// bottom position
export const bottom = Template.bind({});
bottom.storyName = 'Bottom';
bottom.args = {
	position: 'bottom',
};

// bottom left position
export const bottomLeft = Template.bind({});
bottomLeft.storyName = 'Bottom Left';
bottomLeft.args = {
	position: 'bottom-left',
};

// bottom right position
export const bottomRight = Template.bind({});
bottomRight.storyName = 'Bottom Right';
bottomRight.args = {
	position: 'bottom-right',
};

// left position
export const left = Template.bind({});
left.storyName = 'Left';
left.args = {
	position: 'left',
};

// right position
export const right = Template.bind({});
right.storyName = 'Right';
right.args = {
	position: 'right',
};

// icon button
export const icon = Template.bind({});
icon.storyName = 'Icon Buttton';
icon.args = {
	icon: true,
};
