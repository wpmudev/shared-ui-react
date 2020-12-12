import React from 'react';
import { TutorialsList } from '../lib/tutorials-list';

const plugins = {
	smush: '11228',
	hustle: '11235',
	defender: '11231',
	forminator: '11232',
	smartcrawl: '11238',
	hummingbird: '11234'
};

export default {
	title: 'Tutorials/List',
	component: TutorialsList,
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

export const primary = ( args ) => <TutorialsList { ...args } />;
primary.storyName = 'List';
primary.args = {
	title: 'Tutorials',
	category: defender,
};
