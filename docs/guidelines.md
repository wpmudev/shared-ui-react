# General Guidelines

## Showcase

Globally install [Yarn](https://yarnpkg.com/getting-started/install) and [Lerna](https://lerna.js.org/). Since showcase is managed by Storybook run this in the root directory to install Storybook CLI:

```
npx sb init
```

Now you can initialize your local environment:

```
yarn storybook
```

## New Package

```
lerna create @wpmudev/react-foo --yes
```

## Install NPM Packages

Since SUI React is a mono-repo managed by Lerna there are two ways to install packages:

### Global Package

When package is going to be affect project root only.

```
yarn add -W --dev package-name
```

### Component Package

When package is required for an specific component you could run:

```
# Regular dependency
lerna add package-name --scope=@wpmudev/react-foo

# Development dependency
lerna add package-name --dev --scope=@wpmudev/react-foo

# Peer dependency
lerna add package-name --peer --scope=@wpmudev/react-foo
```

>**Note:** Packages can only be manually upgraded and removed, after doing that it is necessary to run `lerna bootstrap` for all packages to upgrade.