[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/react-post)](https://www.npmjs.com/package/@wpmudev/react-post)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-post/peer/react)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-post/styled-components)

# Post
Post is a component that quick shows [WPMU DEV](https://premium.wpmudev.org/blog/) blog posts.

> This component must be used with [Tutorials](https://www.npmjs.com/package/@wpmudev/react-tutorials) component only. It is not optimized to work without it.

## Installation
```
npm i @wpmudev/react-post --save-dev
```

## Usage

### Javascript Instantiation
```js
import React from 'react';
import {
  Post
} from '@wpmudev/react-post';

const MyApp = () => {
  return (
    <Post
        title="Post Title"
        excerpt="The big brown fox jumps over the lazy dog."
    />
  );
}
```