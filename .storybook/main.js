module.exports = {
	stories: [
		'../packages/**/*.stories.js'
	],
	addons: [
		"@storybook/addon-actions",
		"@storybook/addon-links"
	],
	webpackFinal: async ( config ) => {
		// Remove default css rule from storybook.
		config.module.rules = config.module.rules.filter(
			( f ) => f.test.toString() !== '/\\.css$/'
		);

		// Push our custom easy one.
		config.module.rules.push({
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: true,
					},
				},
			],
		});

		// Change the order of resolution of main fields.
		config.resolve.mainFields = [
			'src',
			'module',
			'main'
		];

		// Return the altered config
		return config;
	},
}