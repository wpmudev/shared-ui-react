import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';

export default {
	title: 'Components/Progress bar',
	component: ProgressBar,
};

// const func = () => {
// 	console.log('OnClick Event Managed');
// };

export const unboxed = (args) => <ProgressBar {...args} />;
unboxed.storyName = 'Default';
unboxed.args = {
	now: 30,
	hasLoader: true,
	hasLabel: true,
	hasCancel: true,
	hasFrame: false,
	hasLegend: false,
	sourceLang: {
		cancel: 'Pause',
		legend: 'Plugin is loading...',
	},
};
unboxed.argTypes = {
	now: {
		control: {
			type: 'range',
			min: 0,
			max: 100,
			step: 1,
		},
	},
};

export const boxed = (args) => <ProgressBar {...args} />;
boxed.storyName = 'Boxed';
boxed.args = {
	now: 30,
	hasLoader: true,
	hasLabel: true,
	hasCancel: true,
	hasFrame: true,
	hasLegend: true,
	sourceLang: {
		cancel: 'Pause',
		legend: 'Plugin is loading...',
	},
};
boxed.argTypes = {
	now: {
		control: {
			type: 'range',
			min: 0,
			max: 100,
			step: 1,
		},
	},
};
