// import React from 'react';
// import { Button } from '../lib/button';

// export default {
// 	title: 'Button',
// 	component: Button,
// 	argTypes: {
// 		label: {
// 			type: {
// 				name: 'string',
// 				required: true,
// 			},
// 			defaultValue: 'Hello button',
// 			description: 'This is a required argument. It allows you to add some text to your button.',
// 		},
// 		outlined: {
// 			type: 'boolean',
// 			description: 'Make button outlinedd.',
// 		},
// 		color: {
// 			type: {
// 				name: 'string',
// 				required: false,
// 			},
// 			control: {
// 				type: 'select',
// 				options: [
// 					'',
// 					'blue',
// 					'green',
// 					'red',
// 					'orange',
// 					'yellow',
// 					'purple',
// 					'white'
// 				],
// 			},
// 		},
// 		large: {
// 			type: 'boolean',
// 			defaultValue: false,
// 			description: 'Make button larger.',
// 		},
// 		icon: {
// 			type: {
// 				name: 'string',
// 				required: false,
// 			},
// 			description: 'Type down the icon name you need, without the usual (sui-icon-) prefix.',
// 			control: {
// 				type: 'text'
// 			},
// 		},
// 		iconRight: {
// 			type: 'boolean',
// 			description: 'Place icon to the right of the label.'
// 		},
// 		disabled: {
// 			type: 'boolean'
// 		}
// 	}
// }

// const Template = ( args ) => <Button { ...args } />

// export const primary = Template.bind({});
// primary.storyName = 'Regular';
// primary.args = {};

// // export const secondary = Template.bind({});
// // secondary.storyName = 'Text + Icon';
// // secondary.args = {
// // 	...primary.args
// // };