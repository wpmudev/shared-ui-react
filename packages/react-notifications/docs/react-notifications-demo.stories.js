import React from 'react';
import { Notifications } from '../lib/react-notifications';

export default {
	title: 'Components/Notifications',
	component: Notifications,
	parameters: {
		actions: {
			disabled: true,
		},
		notes: {
			disabled: true,
		},
	},
};

export const demo = args => {
	return (
		<Notifications { ...args }>
			<p>Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
			<p>
				<button className="sui-button sui-button-ghost">
					Click Here
				</button>
			</p>
		</Notifications>
	);
};
demo.storyName = 'Demo';
demo.argTypes = {
	children: {
		type: {
			required: true,
		},
		description: 'This component supports children content, just make sure it is split in paragraphs to maintain the correct spacing.',
		table: {
			type: { summary: null },
		},
		control: {
			type: null,
		},
	},
	type: {
		description: 'Use this argument to change notifications color based on the type of notice you want to show.',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'select',
			options: [
				'',
				'info',
				'success',
				'error',
				'warning',
				'upsell',
			],
		},
	},
	dismiss: {
		description: 'This argument will show a dismiss button that will hide the notification after clicking on it.',
		table: {
			type: { summary: 'boolean' },
		},
		control: {
			type: 'boolean',
		},
	},
	loading: {
		description: 'Put the notification in loading mode enabling the spinner/loader icon.',
		table: {
			type: { summary: 'boolean' },
		},
		control: {
			type: 'boolean',
		},
	},
	sourceLang: {
		description: 'This argument allows you to edit the text of some static elements, like the dismiss button label.',
		table: {
			type: {
				summary: 'object',
				detail: `"dismiss": "Hide Notification"`
			}
		},
	},
};