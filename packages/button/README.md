# React Button
[React Button](https://wpmudev.github.io/shared-ui-react/?path=/story/components-button--primary) allows you include a button on your project.

## Installation

```
npm i @wpmudev/react-button --save-dev
```

## Usage

### Javascript Instantiation

```js
import React from 'react';
import {
  Button
} from '@wpmudev/react-button';

const MyApp = () => {
  return (
    <Button label="Click Me" />
  );
}
```

### Props

Prop Name | Type | Description
--- | --- | ---
design | String | When using `ghost` enables outlined variant.
icon | String | Icon to render within root element.
loading | Boolean | Sets button in loading state if `true`.
disabled | Boolean | Disables button if `true`.