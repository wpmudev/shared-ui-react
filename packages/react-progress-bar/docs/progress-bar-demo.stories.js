import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';

export default {
	title: 'Components/Progress Bar',
	component: ProgressBar,
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const func = () => {
	console.log('You cancelled this progress...');
};

export const demo = (args) => <ProgressBar {...args} />;
demo.storyName = 'Demo';
demo.args = {
	now: 30,
	sourceLang: {
		cancel: 'Pause',
		legend: 'Plugin is loading...',
	},
	cbFunction: () => func(),
};
demo.argTypes = {
	now: {
		description: 'The value will be the percentage of the progress bar loaded.',
		table: {
			type: { summary: 'number' },
			defaultValue: { summary: '0' },
		},
		control: {
			type: 'range',
			min: 0,
			max: 100,
			step: 1,
		},
	},
	hasLoader: {
		description: 'If true, the progress bar will show a loader icon.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasLabel: {
		description: 'This will show the percentage of the progress bar in number.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasBar: {
		description: 'If true, this will show a bar.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasCancel: {
		description: 'This will show the progress bar cancel button.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasFrame: {
		description: 'The progress bar will have a frame with white background.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasLegend: {
		description: 'The progress bar will show the legend text which is defined in "sourceLang".',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
	sourceLang: {
		description: 'The source language object with "cancel" and "legend" text.',
		table: {
			type: { summary: 'object' },
			defaultValue: { summary: '{ cancel: \'Pause\', legend: \'Plugin is loading...\' }' },
		},
		control: {
			type: 'object',
		},
	},
	cbFunction: {
		description: 'This is a callback function which will be executed when the progress bar cancel button is clicked.',
		table: {
			type: { summary: 'function' },
		},
		control: {
			type: 'function',
		},
	},
};
