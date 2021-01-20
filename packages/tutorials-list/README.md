# Tutorials: List
[Tutorials List](https://wpmudev.github.io/shared-ui-react/?path=/story/tutorials-list--primary) allows you to list [WPMU DEV](https://premium.wpmudev.org/blog/) posts categorized by plugin name and tagged as tutorials.

## Installation
```
npm i @wpmudev/react-tutorials-list --save-dev
```

## Usage

### Javascript Instantiation
```js
import React from 'react';
import {
  TutorialsList
} from '@wpmudev/react-tutorials-list';

const MyApp = () => {
  return (
    <TutorialsList
      title="Tutorials"
      category={ category_id }
    />
  );
}
```

#### Props
Prop Name | Type | Required | Description
--- | --- | --- | ---
title | string | No | Includes a title in the box that contains the list of posts.
category | string | Yes | Retrieve posts tagged as "tutorial" from plugin category ID.
