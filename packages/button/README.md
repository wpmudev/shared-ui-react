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
label | String | Add some text to your button.
icon | String | Icon to render within root element.
design | String | When using `ghost` enables outlined variant.
color | String | When using `ghost` enables outlined variant.
href | String | Sets a hyperlink & uses anchor tag instead of a button.
loading | Boolean | Sets button in loading state if `true`.
disabled | Boolean | Disables button if `true`.