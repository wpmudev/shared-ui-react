import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Components/Progress Bar',
	component: ProgressBar,
	parameters: {
		notes: {
			disable: true,
		},
	},
};

export const demo = args => <ProgressBar { ...args } />;
demo.storyName = 'Demo';
demo.args = {
	now: 0,
	hasLoader: true,
	hasLabel: true,
	hasCancel: true,
	hasFrame: false,
	hasLegend: true,
	sourceLang: {
		cancel: 'Cancel',
		legend: 'Status...',
	},
	cbFunction: () => {
		action( 'click' )( 'Loading process interrupted.' );
	},
};
demo.argTypes = {
	now: {
		description: 'The value will be the percentage of the progress bar loaded.',
		table: {
			type: {
				summary: 'number',
			},
			defaultValue: {
				summary: '0',
			},
		},
		control: {
			type: 'range',
			min: 0,
			max: 100,
			step: 1,
		},
	},
	hasLoader: {
		description: 'Disable with **false** value to hide the loader icon.',
		table: {
			type: {
				summary: 'boolean',
			},
			defaultValue: {
				summary: 'true',
			},
		},
		control: {
			type: 'boolean',
		},
	},
	hasLabel: {
		description: 'Disable with **false** value to hide the percentage label.',
		table: {
			type: {
				summary: 'boolean',
			},
			defaultValue: {
				summary: 'true',
			},
		},
		control: {
			type: 'boolean',
		},
	},
	hasCancel: {
		description: 'Use **false** to hide the cancel button.',
		table: {
			type: {
				summary: 'boolean',
			},
			defaultValue: {
				summary: 'true',
			},
		},
		control: {
			type: 'boolean',
		},
	},
	hasFrame: {
		description:
			'Enable to wrap the progress bar in a white box with a border. It also allows you to display a legend text at the bottom.',
		table: {
			type: {
				summary: 'boolean',
			},
			defaultValue: {
				summary: 'false',
			},
		},
		control: {
			type: 'boolean',
		},
	},
	hasLegend: {
		description:
			'Enable this property to show a legend text below the box. You can edit this text with the **sourceLang** prop.',
		table: {
			type: {
				summary: 'boolean',
			},
			defaultValue: {
				summary: 'false',
			},
		},
		control: {
			type: 'boolean',
		},
	},
	sourceLang: {
		description: 'Edit some elements\' source language, like the "cancel" button or "legend" text.',
		table: {
			type: {
				summary: 'object',
				detail: "{\n    cancel: 'Cancel',\n    legend: 'Status...',\n}",
			},
		},
		control: {
			type: 'object',
		},
	},
	cbFunction: {
		description: 'Use this property to pass a function when clicking on cancel button.',
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
