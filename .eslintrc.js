module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'prettier/react',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	parser: '@babel/eslint-parser',
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': [
			2,
			{
				skipUndeclared: true,
			},
		],
		'prettier/prettier': [
			'error',
			{
				printWidth: 100,
				trailingComma: 'all',
				useTabs: true,
				tabWidth: 2,
				semi: true,
				singleQuote: true,
			},
		],
		'react/jsx-uses-react': 'error',
	},
};
