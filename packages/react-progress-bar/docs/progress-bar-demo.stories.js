import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Components/Progress Bar',
	component: ProgressBar,
};

export const demo = (args) => <ProgressBar {...args} />;
demo.storyName = 'Demo';
demo.args = {
	cbFunction: () => {
		action( 'click' )(
			'Loading process interrupted.'
		);
	},
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
		description: 'This will show the percentage of the progress bar loaded as label.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasBar: {
		description: 'If true, this will show the bar.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasCancel: {
		description: 'The cancel button to run the callback function.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'true' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasFrame: {
		description: 'This will show the frame with white background.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
	hasLegend: {
		description: 'This will show the legend text which is defined in "sourceLang".',
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
		description: 'Use this property to call a function when clicking on the cancel button.',
		table: {
			type: {
				summary: 'function',
			},
		},
		control: {
			type: 'function',
		},
	},
};
