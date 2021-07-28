## Installation

```
npm i @wpmudev/react-button-label-icon --save-dev
```

## Usage

### Javascript Instantiation

```js
import React from 'react';
import {
  ButtonLabelIcon
} from '@wpmudev/react-button-label-icon';

const MyApp = () => {
  return (
    <ButtonLabelIcon label="Click Me" />
  );
}
```

### Props

Prop Name | Type | Description
--- | --- | ---
label | String | Add some text to your button.
icon | String | Icon to render within root element.
placeIconRight | Boolean | Will make the icon display to the right of the label if `true`.
design | String | When using `ghost` enables outlined variant.
color | String | Type color name to change button default color.
href | String | Sets a hyperlink & uses anchor tag instead of a button.
loading | Boolean | Sets button in loading state if `true`.
disabled | Boolean | Disables button if `true`.