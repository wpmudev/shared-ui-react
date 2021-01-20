# Tutorials: List
[Tutorials List](https://www.npmjs.com/package/@wpmudev/react-tutorials-list) allows you to list posts on a page.

## Installtion
```
npm i @wpmudev/react-tutorials-list --save-dev
```

## Usage

### Javascript Instantiation
```
import React from 'react';
import {
	TutorialsList
} from '@wpmudev/react-tutorials-list';

const MyApp = () => {
	return (
		<TutorialsList
			category={ category_id }
		/>
	);
}
```

#### Props
| Prop Name | Required | Description |
| --------- | -------- | ----------- |
| title     | No       | Includes a title in the box that contains the list of posts. |
| category  | Yes      | Category ID to retrieve posts tagged as "tutorial" from specific plugin category. |
