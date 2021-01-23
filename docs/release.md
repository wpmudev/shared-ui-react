# Release

Have in mind this guide is for developers member of [WPMU DEV Organization](https://www.npmjs.com/package/@wpmudev/shared-ui/) on NPM Registry.

> **Important:** Make sure packages you don't want to release have `"private": true` declared in its `package.json` file.

## Prepare builder.

Make sure builder file is executable by running the following command:

```
chmod +x packages/builder/lib/builder.js
```

## Build library and showcase files.

Once all PRs are merged into master, continue the process below.

#### Build packages.

```
yarn run build
```

> Don't forget to push compiled files.

#### Update logs.

Review packages with changes and make sure `CHANGELOG.md` files list version to be released with corresponding changes.

#### Publish packages.

Make sure you logged in NPM Registry and that you are member of [WPMU DEV Organization](https://www.npmjs.com/package/@wpmudev/shared-ui/).

```
npm login
```

Use lerna to update packages version and publish to NPM.

```
npx lerna publish --no-private
```

#### Publish showcase.

```
yarn run build-storybook.
```