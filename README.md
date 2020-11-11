# WPMU DEV Shared UI React Components

## Collaborate

### Initialize
Run `yarn install` command.

### Creating new workspace
1. Run `npx lerna create {component-folder-name}`
2. Follow lerna steps to configure your new package, but make sure to name it correctly: `@wpmudev/react-{component-name}`

### Installing npm packages

1. **When required for an specific workspace** simply run `yarn workspace {component-name} add {package-name}`
2. **When shared between multiple packages** simply run `yarn add -W --dev {package-name}`

## Publishing

1. Build packages `npx lerna run build`.
2. Review packages `README.md` files and make sure all changes are listed.
3. Publish packages `npx lerna publish`.

If you have a private package that you don't publish, you have to specify `"private": true` in `package.json`.
