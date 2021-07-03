[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/react-pagination)](https://www.npmjs.com/package/@wpmudev/react-pagination)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-pagination/peer/react)

# React Pagination

[React Pagination](https://wpmudev.github.io/shared-ui-react/?path=/story/components-pagination--primary) allows you include to paginate your long-list items on your project.

```
npm i @wpmudev/react-pagination --save-dev
```

## Usage

### Javascript Instantiation

```js
import React from "react";

import { Pagination } from "@wpmudev/react-pagination";

const MyApp = () => {

	//This is a prop that has to be passed to Pagination if we want a custom pagination.
	const paginationContent = ({ ...properties }) => { 
	/*You might wonder why *properties* instead of props. It is to make sure that the props which you might already be using in your component or file does not effect the ones that we want to use for the pagination.
	For that reason, it is highly recommended to use properties and append any other props that you might want to use inside the paginationContent.
	properties have all the required values for pagination.*/
		return (
			<>
				{PaginationNav({ ...properties })}
				{PaginationResults({ ...properties })}
				<div>Belllaaaa</div>
			</>
		);
	};

	return (
		<Pagination
			limit={5}
			results={true}
			skip={true}
			pagesToBottom={false} //This does not make any difference when using *paginationContent*.
			skipToFirstLabel=""
			previousLabel=""
			nextLabel=""
			skipToLastLabel=""
			child={childrenArray}
			paginationContent
		>
			<div>Element 1 could be here</div>
			<div>Element 2 could be here</div>
			<div>Element 3 could be here</div>
		</Pagination>
	);
};


```

### Props

| Prop Name | Type    | Description                               |
| --------- | ------- | ----------------------------------------- |
| limit     | Integer | Enter the elements limit per page.        |
| results   | Boolean | Shows results section if `true`.          |
| skip      | Boolean | Shows skip arrow buttons if `true`.       |
| pagesToBottom | Boolean | Pages will be rendered at bottom if true |
| skipToFirstLabel | String | String to be passed which will act as a label for skip to first button |
| previousLabel | String | String to be passed which will act as a label for next page button |
| nextLabel | String | String to be passed which will act as a label for previous page button |
| skipToLastLabel | String | String to be passed which will act as a label for skip to last button |
| child     | Array   | Pass an array here to render as elements. |
| paginationContent | component | Pass a component here to be rendered custom. |
