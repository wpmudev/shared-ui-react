[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/react-button)](https://www.npmjs.com/package/@wpmudev/react-button)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-button/peer/react)

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
iconRight | Boolean | Will make the icon display to the right of the label if `true`.
design | String | When using `ghost` enables outlined variant.
color | String | Type color name to change button default color.
href | String | Sets a hyperlink & uses anchor tag instead of a button.
loading | Boolean | Sets button in loading state if `true`.
disabled | Boolean | Disables button if `true`.