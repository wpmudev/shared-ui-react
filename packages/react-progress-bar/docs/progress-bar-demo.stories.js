import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';

export default {
	title: 'Components/Progress bar',
	component: ProgressBar,
};

const func = () => {
	console.log('You cancelled this progress...');
};

export const demo = (args) => <ProgressBar {...args} />;
demo.storyName = 'Demo';
demo.args = {
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
	cbFunction: () => func(),
};
demo.argTypes = {
	now: {
		description: 'The current progress value',
		table: {
			type: { summary: 'number' },
			defaultValue: { summary: '30' },
		},
		control: {
			type: 'range',
			min: 0,
			max: 100,
			step: 1,
		},
	},
	hasLoader: {
		description: 'Whether to show the loader',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasLabel: {
		description: 'Whether to show the label',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasBar: {
		description: 'Whether to show the bar',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasCancel: {
		description: 'Whether to show the cancel button',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasFrame: {
		description: 'Whether to show the frame',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasLegend: {
		description: 'Whether to show the legend',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
	sourceLang: {
		description: 'The source language',
		table: {
			type: { summary: 'object' },
			defaultValue: { summary: '{ cancel: \'Pause\', legend: \'Plugin is loading...\' }' },
		},
		control: {
			type: 'object',
		},
	},
	cbFunction: {
		description: 'The callback function',
		table: {
			type: { summary: 'function' },
			defaultValue: { summary: '() => { console.log(\'You cancelled this progress...\'); }' },
		},
		control: {
			type: 'function',
		},
	},
};
