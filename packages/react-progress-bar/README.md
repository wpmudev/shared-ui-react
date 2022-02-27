# `@wpmudev/react-progress-bar`

# React Progress bar

```
npm i @wpmudev/react-progress-bar --save-dev
```

## Usage

### JavaScript Instantiation

```js
import React from "react";

import { ProgressBar } from "@wpmudev/react-pagination";

const MyApp = () => {
	//This is a prop that has to be passed to Progress bar to include all the functions below and will be able to choose the placement of it along with other components as well.
	const content = progress => {
		return (
			<>
				/* Bar which will indicate */
				{bar(progress)}
				/* Percentage (text) */
				{pecentage(progress)}
				/* Loading Icon */
				{progressIcon()}
				/* Close Button */
				{closeBtn(func)}
			</>
		);
	};

	return <ProgressBar content outlined={false} progress={50} />;
};
```

### Props

| Prop Name | Type      | Description                                                                                                                             |
| --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| progress  | Integer   | Progress percentage.                                                                                                                    |
| outlined  | Boolean   | A think block style line would be added to the progressbar component if `true`.                                                         |
| content   | component | Pass the component here which will include all the components of the progress bar which can be placed with some custom content as well. |
