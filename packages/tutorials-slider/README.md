# Tutorials: Slider
[Tutorials Slider](https://wpmudev.github.io/shared-ui-react/?path=/story/tutorials-slider--primary) allows you to list [WPMU DEV](https://premium.wpmudev.org/blog/) posts categorized by plugin name and tagged as tutorials. These posts will appear as a slideshow and the block can be dismissed.

## Installation
```
npm i @wpmudev/react-tutorials-slider --save-dev
```

## Usage

### Javascript Instantiation
```js
import React from 'react';
import {
  TutorialsSlider
} from '@wpmudev/react-tutorials-slider';

const MyApp = () => {
  return (
    <TutorialsSlider
      title="Tutorials"
	  category={ category_id }
	  viewAll="https://premium.wpmudev.org/blog/"
    />
  );
}
```

#### Props
Prop Name | Type | Required | Description
--- | --- | --- | ---
title | string | No | Includes a title in the slideshow box.
category | string | Yes | Retrieve posts tagged as "tutorial" from plugin category ID.
viewAll | string | No | When has content shows a "View All" text with link in it.
