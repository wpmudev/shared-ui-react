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