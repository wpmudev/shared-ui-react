[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/react-box)](https://www.npmjs.com/package/@wpmudev/react-box)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-button/peer/react)

# React Box
[React Box](https://wpmudev.github.io/shared-ui-react/?path=/story/components-box--primary) provides you with a white box main wrapper and all its basic inner containers.

## Installation

```
npm i @wpmudev/react-box --save-dev
```

## Usage

### Javascript Instantiation

```js
import React from 'react';
import {
  Box,
  BoxHeader,
  BoxTitle,
  BoxBody,
  BoxSection,
  BoxFooter
} from '@wpmudev/react-box';

const MyApp = () => {
  return (
    <Box>

      <BoxHeader title="Box Title" />

      <BoxBody>
        <p>Regular content goes here, from a simple paragrah to a notification, form or any other content.</p>
      </BoxBody>

      <BoxSection></BoxSection>

      <BoxFooter>
        <p>You can place any content here, but buttons are most commonly used here to perform some actions like "save", "cancel" or "next".</p>
      </BoxFooter>

    </Box>
  );
}
```

## Components

### Box Wrapper

This component will wrap content inside a white box. It is commonly accompanied by `BoxHeader` and `BoxBody`.

```js
import React from 'react';
import { Box } from '@wpmudev/react-box';

const MyApp = () => {
  return (
    <Box>
      <p>Place content here.</p>
    </Box>
  );
}
```

### Box Header

This component will allow you to wrap content inside a flexbox div that is commonly used to split content in two parts: title at left and actions at right.

```js
import React from 'react';
import { Box, BoxHeader } from '@wpmudev/react-box';

const MyApp = () => {
  return (
    <Box>

      <BoxHeader title="Title (at left)">
        <p>Right content or actions.</p>
      </BoxHeader>

    </Box>
  );
}
```

Prop Name | Type | Description
--- | --- | ---
title | String | Add some title to your box.
titleIcon | String | Place an icon at left of the title.

### Box Body

`BoxBody` must be accompanied by `Box` component, that way the end result will be a white box with inner spacing.

```js
import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';

const MyApp = () => {
  return (
    <Box>

      <BoxBody>
        <p>Place content here.</p>
      </BoxBody>

    </Box>
  );
}
```

### Box Section

This component will allow you split content in two sections: at left, with section title and description; at right, with regular content.

```js
import React from 'react';
import { Box, BoxSection } from '@wpmudev/react-box';

const MyApp = () => {
  return (
    <Box>

      <BoxSection
	  	title="Section Title"
		description="Section description goes here."
	  >
        <p>Place content here.</p>
      </BoxSection>

    </Box>
  );
}
```

Prop Name | Type | Description
--- | --- | ---
title | String | Add some title to your section box.
description | String | Add some brief description for your section box.

### Box Footer

This component is commonly used to display action buttons like "save", "cancel", "next" or "previous".

```js
import React from 'react';
import { Box, BoxFooter } from '@wpmudev/react-box';

const MyApp = () => {
  return (
    <Box>

      <BoxFooter>
        <p>Place action buttons here.</p>
      </BoxFooter>

    </Box>
  );
}
```