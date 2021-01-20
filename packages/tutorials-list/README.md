# Tutorials: List
[Tutorials List](https://wpmudev.github.io/shared-ui-react/?path=/story/tutorials-list--primary) allows you to list WPMU DEV posts tagged as tutorials and categorized by plugin name on a page.

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
category | string | Yes | Category ID to retrieve posts tagged as "tutorial" from specific plugin category.
