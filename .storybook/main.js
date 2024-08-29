import { dirname, join } from 'path';
const path = require('path');

module.exports = {
	stories: ['../packages/**/*.stories.jsx'],

	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-actions'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-a11y'),
		getAbsolutePath('@storybook/addon-webpack5-compiler-babel'),
		getAbsolutePath('@chromatic-com/storybook'),
	],

	webpackFinal: async (config) => {
		// Change the order of resolution of main fields.
		config.resolve.mainFields = ['src', 'module', 'main'];

		// Resolve `styled-components` to a single version for Storybook, as recommended by the docs.
		// https://www.styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page
		config.resolve.alias['styled-components'] = path.resolve('node_modules', 'styled-components');

		// Return the altered config
		return config;
	},

	framework: {
		name: getAbsolutePath('@storybook/react-webpack5'),
		options: {},
	},

	docs: {
		autodocs: true,
	},
};

function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, 'package.json')));
}
