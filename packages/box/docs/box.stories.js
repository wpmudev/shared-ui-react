import React from 'react';
import {
	Box,
	BoxHeader,
	BoxBody,
	BoxFooter,
	BoxSection
} from '../lib/box';

export default {
	title: 'Containers',
	component: Box,
	subcomponents: {
		BoxHeader,
		BoxBody,
		BoxFooter,
		BoxSection,
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
				<BoxSection>
					<p>Content goes here.</p>
				</BoxSection>
			</BoxBody>
			<BoxFooter>
				<button className="sui-button">Action</button>
			</BoxFooter>
		</Box>
	);
};
wrapper.storyName = 'Box';
wrapper.args = {
	title: 'Box Title',
	titleIcon: 'hummingbird',
	titleTag: 'Tag',
	titleTagColor: '',
};
wrapper.argTypes = {
	titleTagColor: {
		type: 'string',
		control: {
			type: 'select',
			options: [
				'',
				'red',
				'yellow',
				'green',
				'blue',
				'purple'
			]
		},
	}
};

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
header.args = {
	...wrapper.args
};
header.argTypes = {
	...wrapper.argTypes
};

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
body.parameters = {
	controls: {
		hideNoControlsWarning: true
	},
};

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
footer.parameters = {
	controls: {
		hideNoControlsWarning: true
	},
};

export const other = ( args ) => {
	return (
		<Box>
			<BoxBody>
				<BoxSection
					{ ...args }
				>
					<p>Content goes here.</p>
				</BoxSection>
			</BoxBody>
		</Box>
	);
};
other.storyName = 'Box Section';
other.args = {
	title: 'Settings Title',
	description: 'Brief description for settings goes here.'
};