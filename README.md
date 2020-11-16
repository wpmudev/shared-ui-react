# WPMU DEV Shared UI React Components

## Collaborate

### Initialize
1. To begin with the project make sure you have **Yarn** and **Lerna** installed on your system.
2. Run `yarn install` to install all dependencies on the project.
3. Run `yarn run storybook` to initialize Storybook (project showcase).

### Creating new package/component
1. Run `npx lerna create {component-name}`.
2. Follow lerna steps to configure your new package, but make sure to name it correctly: `@wpmudev/react-{component-name}`
	- **Package name:** `@wpmudev/react-{component-name}`. Notice `@wpmudev/react-` prefix followed by folder name to name your package.
	- **Version:** `0.0.0`
	- **Description:** `WPMU DEV Shared UI React {Component Name} Component`
	- **Keywords:** Leave empty.
	- **Homepage:** https://github.com/wpmudev/shared-ui-react#readme
	- **License:** GPL-2.0
	- **Entry Point:** Use default value.
	- **Git Repository:** Use default value (https://github.com/wpmudev/shared-ui-react.git)
	- Review and accept changes.
3. Add React as dev dependency for local testing by running `npx lerna add react --dev --scope=@wpmudev/react-{component-name}`
4. Add React 16+ as peer dependency for consuming apps by running `npx lerna add react@16.x --peer --scope=@wpmudev/react-{component-name}`
5. Add **clsx** utility to toggle classes as needed on the components by running `npx lerna add clsx --scope=@wpmudev/react-{component-name}`
6. Prepare your package for building. Edit your component `package.json` file with the following:
	- Set `"main": "dist/{component-name}.cjs.js",`
	- Set `"module": "dist/{component-name}.esm.js",`
	- Set `"src": "lib/{component-name}.js",`
	- Add `dist` folder to `files` we are going to pubslih. Ex. `"files": [ "dist", "lib" ]`.
	- Add builder script `"build": "sui-builder"`.

### Installing npm packages

1. **When required for an specific workspace** simply run `npx lerna add {package-name} --scope=@wpmudev/react-{component-name}`
2. **When shared between multiple packages** simply run `yarn add -W --dev {package-name}`

## Publishing

**Important:** If you don't want to publish a package/component just include `"private": true` in its `package.json` file.

1. Build packages `yarn run build`.
2. Review packages `CHANGELOG.md` files and make sure all changes are listed.
3. Publish packages `npx lerna publish --no-private`.

If you have a private package that you don't want to publish, you have to specify `"private": true` in `package.json`.

***

### Content to improve

```
# SAMPLE: Add button dependency into shared-ui-react
npx lerna add @wpmudev/react-button --scope=@wpmudev/shared-ui-react

# We are going to use React for the UI components, let's add it as dev dependency first for local testing
npx lerna add react --dev --scope={component-name}

# And as a peer dependency using major 16 version for consuming applications
npx lerna add react --peer --scope={component-name}

# We are also going to use an utility to toggle classes as needed on the components called "clsx"
npx lerna add clsx --scope={component-name}

- - -

npx lerna run build
```