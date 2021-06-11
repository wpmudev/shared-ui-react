[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/react-pagination)](https://www.npmjs.com/package/@wpmudev/react-pagination)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-pagination/peer/react)

# React Pagination
[React Button](https://wpmudev.github.io/shared-ui-react/?path=/story/components-pagination--primary) allows you include a button on your project.

# `@wpmudev/react-pagination`

## Installation

```
npm i @wpmudev/react-pagination --save-dev
```

## Usage

### Javascript Instantiation

```js
import React from 'react';
import {
  Pagination
} from '@wpmudev/react-pagination';

const MyApp = () => {
  return (
    <Pagination>
        <div>Element 1 could be here</div>
        <div>Element 2 could be here</div>
        <div>Element 3 could be here</div>
    </Pagination>
  );
}
```

### Props

Prop Name | Type | Description
--- | --- | ---
limit | Integer | Enter the elements limit per page.
results | Boolean | Shows results section if `true`.
skip | Boolean | Shows Skip(<<,>>) buttons if `true`.
child | Array | Pass an array here to render as elements.
Children | html or jsx | These are direct children wrapped inside Pagination Component

