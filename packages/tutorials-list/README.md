[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/react-tutorials-list)](https://www.npmjs.com/package/@wpmudev/react-tutorials-list)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-tutorials-list/peer/react)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-tutorials-list/styled-components)

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
