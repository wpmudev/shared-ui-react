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
import React from 'react';

import {
  Pagination
} from '@wpmudev/react-pagination';

const MyApp = () => {
  return (
    <Pagination
	  limit={5}
	  results={true}
	  skip={true}
	  child={childrenArray}
	>
      <div>Element 1 could be here</div>
      <div>Element 2 could be here</div>
      <div>Element 3 could be here</div>
    </Pagination>
  );
}
```

### Props

Prop Name | Type | Description
--- | --- | ---
limit | Integer | Enter the elements limit per page.
results | Boolean | Shows results section if `true`.
skip | Boolean | Shows skip arrow buttons if `true`.
child | Array | Pass an array here to render as elements.

