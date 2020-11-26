import React, { Component } from 'react';
import { Tutorials } from '../lib/tutorials';

const plugins = {
	smush: '11228',
	hustle: '11235',
	defender: '11231',
	forminator: '11232',
	smartcrawl: '11238',
	hummingbird: '11234'
};

export default {
	title: 'Tutorials',
	component: Tutorials,
	argTypes: {
		category: {
			type: {
				required: true
			},
			control: {
				type: 'select',
				default: '11231',
				options: plugins,
			},
		}
	}
}

const defender = '11231';

const Template = ( args ) => <Tutorials { ...args } />

export const primary = Template.bind({});
primary.storyName = 'List';
primary.args = {
	title: 'Tutorials',
	category: defender,
};

export const secondary = Template.bind({});
secondary.storyName = 'Slider';
secondary.args = {
	slider: true,
	title: 'Tutorials',
	category: defender,
	viewAll: 'https://premium.wpmudev.org/',
};
