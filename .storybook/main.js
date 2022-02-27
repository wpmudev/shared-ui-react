const path = require('path');

module.exports = {
	stories: [
		'../packages/**/*.stories.js'
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-actions",
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
		"@storybook/addon-notes/register-panel"
	],
	webpackFinal: async config => {
		// Change the order of resolution of main fields.
		config.resolve.mainFields = [
			'src',
			'module',
			'main'
		];

		// Resolve `styled-components` to a single version for Storybook, as recommended by the docs.
		// https://www.styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page
		config.resolve.alias['styled-components'] = path.resolve(
			'node_modules',
			'styled-components'
		);

		console.log(config.resolve);

		// Return the altered config
		return config;
	},
	core: {
		builder: "webpack5"
	}
};