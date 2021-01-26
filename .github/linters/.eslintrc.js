module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended", // For catching common problems in JavaScript.
		"plugin:react/recommended", // For fixing a lot of React problems.
		"plugin:react-hooks/recommended", // For fixing problems with React hooks.
		"plugin:jsx-a11y/recommended", // For fixing accessibility problems for HTML.
		"plugin:prettier/recommended", // For formatting our code with common rules.
		"prettier/react" // For telling Prettier that we are using React.
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true // Enable jsx for our parser.
		},
		ecmaVersion: 2021, // Last version of ECMAScript syntax.
		sourceType: "module" // Use import & export.
	},
	parser: "@babel/eslint-parser",
	settings: {
		react: {
			version: "detect" // Auto-detect the React version.
		}
	},
	plugins: [
		"react",
		"react-hooks",
		"jsx-a11y",
		"prettier"
	],
	rules: {
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"prettier/prettier": [
			"error",
			{
				printWidth: 100,
				useTabs: true,
				semi: true,
				singleQuote: true,
				quoteProps: "as-needed",
				jsxSingleQuote: true,
				trailingComma: "none",
				bracketSpacing: true,
				jsxBracketSameLine: true,
				arrowParens: "avoid"
			}
		]
	},
	ignorePatterns: [
		".*.js",
		"*.cjs.js",
		"*.esm.js"
	]
};
