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

***

### Content to improve

```
# SAMPLE: Add button dependency into shared-ui-react
npx lerna add @wpmudev/react-button --scope=@wpmudev/shared-ui-react

# We are going to use React for the UI components, let's add it as dev dependency first for local testing
npx lerna add react --dev --scope {component-name}

# And as a peer dependency using major 16 version for consuming applications
npx lerna add react --peer --scope {component-name}

# We are also going to use an utility to toggle classes as needed on the components called "clsx"
npx lerna add clsx --scope {component-name}

- - -

npx lerna run build
```