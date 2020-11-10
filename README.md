# WPMU DEV Shared UI React Components

## Collaborate

### Initialize
Run `yarn install` command.

### Adding new package
1. Run `npx lerna create {component-folder-name}`
2. Follow lerna steps to configure your new package, but make sure to name it correctly: `@wpmudev/react-{component-name}`

## Publishing
Run `npx lerna publish` or `npx lerna publish --conventional-commits`

If you have a private package that you don't publish, you have to specify `"private": true` in `package.json`.