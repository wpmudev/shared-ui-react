# Release

Have in mind this guide is for developers member of [WPMU DEV Organization](https://www.npmjs.com/package/@wpmudev/shared-ui/) on NPM Registry.

> **Important:** Make sure packages you don't want to release have `"private": true` declared in its `package.json` file.

## Prepare builder.

Make sure builder file is executable by running the following command:

```
chmod +x packages/compiler/lib/builder.js
```

## Prepare package.

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
"src": "lib/react-foo.js"
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
  "directory": "packages/react-foo"
}
```

### 6. Builder

Don't forget to include builder script:

```json
"scripts": {
  "build": "sui-builder"
}
```

## Publish Packages

Once all pull requests are merged into `development` branch, continue the process below.

### 1. Build packages.

Build all packages by running the following command:

```
yarn build
```

>**Note:** Each package built changes needs its own commit and must be pushed directly to `development` branch.


### 2. Update global changelog.

1. Grant access to your Github account.

```
export GITHUB_AUTH="token_goes_here"
```

2. Generate list of changes based on PRs after latest release.

```
yarn changelog
```

3. Copy and paste generated list into `CHANGELOG.md` file.

### 3. Publish packages to NPM.

```
npx lerna publish --no-private
```

>**Note:** Before releasing make sure you are logged in NPM Registry and that you are member of [WPMU DEV Organization](https://www.npmjs.com/package/@wpmudev/shared-ui/).

## Publish Showcase

```
yarn deploy
```