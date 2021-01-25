# General Guidelines

## New Component

```
npx lerna create foo
```

Follow lerna steps to configure your new package, but make sure to name it correctly by addinf `@wpmudev/react-` prefix.

```
$ package name: @wpmudev/react-foo
$ version (default value):
$ description: WPMU DEV Shared UI React Foo Component
$ keywords:
$ homepage:
$ license: GPL-3.0
$ entry point (default value):
$ git repository (default value):
```

## Install Packages

Since SUI React is a mono-repo managed by Lerna there are two ways to install packages:

### Global Package

When package is going to be shared between multiple components or going to be used on root.

```
yarn add -W --dev package-name
```

### Component Package

When package is required for an specific component.

```
# Regular dependency
npx lerna add package-name --scope=@wpmudev/react-foo

# Development dependency
npx lerna add package-name --dev --scope=@wpmudev/react-foo

# Peer dependency
npx lerna add package-name --peer --scope=@wpmudev/react-foo
```

## Showcase

Globally install [Yarn](https://yarnpkg.com/getting-started/install) and [Lerna](https://lerna.js.org/). Since showcase is managed by Storybook run this in the root directory to install Storybook CLI:

```
npx sb init
```

Now you can initialize your local environment:

```
yarn run storybook
```