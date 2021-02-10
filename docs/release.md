# Release

Have in mind this guide is for developers member of [WPMU DEV Organization](https://www.npmjs.com/package/@wpmudev/shared-ui/) on NPM Registry.

> **Important:** Make sure packages you don't want to release have `"private": true` declared in its `package.json` file.

## Prepare builder.

Make sure builder file is executable by running the following command:

```
chmod +x packages/builder/lib/builder.js
```

## Prepare component.

Prepare new component(s) `package.json` file before publishing to [NPM Registry](https://www.npmjs.com/) for the first time.

### 1. Author and Contributors

The author of all the packages is [WPMU DEV](https://premium.wpmudev.org/) while all the persons involved in the creation or improvement of the component must be added as contributors.

```json
"author": "WPMU DEV",
"contributors": [
  {
    "name": "John Doe",
    "email": "public@email.com",
    "url": "https://yourwebsite.com/"
  }
]
```

### 2. License

Make sure to include `LICENSE`from another component and declare it on the package as:

```json
"license": "GPL-3.0"
```

### 3. Declare Files

To make sure the component works correctly when installed through NPM, it is necessary to call the correct file type:

```json
// Set main file.
"main": "dist/react-foo.cjs.js"

// Set module file.
"module": "dist/react-foo.esm.js"

// Set source file.
"src": "lib/foo.js"
```

### 4. Include Files

Include `dist` folder into declared files.

```json
"files": [
  "dist",
  "lib"
]
```

### 5. Repository Dir

Make sure to include repository directory:

```json
"repository": {
  "directory": "packages/foo"
}
```

### 6. Builder

Don't forget to include builder script:

```json
"scripts": {
  "build": "sui-builder"
}
```

### 7. Publish Configurations

Published package must have public access that way anyone can install it and point to NPM Registry.

```json
"publishConfig": {
  "access": "public",
  "registry": "https://registry.npmjs.org/"
},
```

### 8. Required Dependencies

```
# Add React as dev dependency for local testing.
npx lerna add react --dev --scope=@wpmudev/react-foo

# Add React 16+ as peer dependency for consuming apps.
npx lerna add react@16.x --peer --scope=@wpmudev/react-foo
```

## Build library and showcase files.

Once all pull requests are merged into master, continue the process below.

#### Build packages.

```
yarn run build
```

> Don't forget to push compiled files.

#### Update logs.

To update `CHANGELOG.md` file, you will need to generate a personal access token for `public_repo`, then run the command below in the same order. Don't forget to save your token for future use.

```
# Allow access to the repo.
export GITHUB_AUTH="token_goes_here"

# Generate changelog based on pull requests.
yarn run logs
```

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