import React from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from '../lib/box';

export default {
	title: 'Box',
	component: Box,
	subcomponents: {
		'Box.BoxHeader': BoxHeader,
		'Box.BoxBody': BoxBody,
		'Box.BoxFooter': BoxFooter
	},
	argTypes: {
		title: {
			type: 'string',
			defaultValue: 'Box Title',
		},
		titleIcon: {
			type: 'string',
			defaultValue: 'hummingbird',
		},
		titleTag: {
			type: 'string',
			defaultValue: 'Tag',
		},
		titleTagColor: {
			type: 'string',
			defaultValue: '',
			control: {
				type: 'select',
				options: [
					'',
					'red',
					'yellow',
					'green',
					'blue',
					'purple'
				],
			},
		},
	},
};

export const wrapper = ( args ) => {
	return (
		<Box>
			<BoxHeader
				{ ...args }
			>
				<button className="sui-button">
					Action
				</button>
			</BoxHeader>
			<BoxBody>
				<p>This is box body component. It can only be used inside <code>{ `<Box>` }</code> component.</p>
			</BoxBody>
			<BoxFooter>
				<button className="sui-button">Action</button>
			</BoxFooter>
		</Box>
	);
};
wrapper.storyName = 'Box';
wrapper.args = {};

export const header = ( args ) => {
	return (
		<Box>
			<BoxHeader { ...args }>
				<span>Right actions</span>
			</BoxHeader>
		</Box>
	);
};
header.storyName = 'Box Header';
header.args = {};

export const body = () => {
	return (
		<Box>
			<BoxBody>
				<p>Box Body</p>
			</BoxBody>
		</Box>
	);
};
body.storyName = 'Box Body';
body.args = {};

export const footer = () => {
	return (
		<Box>
			<BoxFooter>
				<p>Box Footer</p>
			</BoxFooter>
		</Box>
	);
};
footer.storyName = 'Box Footer';
footer.args = {};