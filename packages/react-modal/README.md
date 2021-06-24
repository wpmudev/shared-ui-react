[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/react-button)](https://www.npmjs.com/package/@wpmudev/react-button)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-button/peer/react)

# React Modal
[React Modal](https://wpmudev.github.io/shared-ui-react/?path=/story/containers-modal--simple) is a wrapper for modals that follows the structure and classes standard of WPMU Dev's Shared UI. It's built on top of the fully accessible [react-aria-modal](https://www.npmjs.com/package/@justfixnyc/react-aria-modal) that follows [WAI-ARIA Authoring Practices](http://www.w3.org/TR/wai-aria-practices/#dialog_modal).

This modal relies on the styling provided by WPMU Dev's [Shared UI](https://github.com/wpmudev/shared-ui). The relevant styles must be included and the modal must be rendered within a `<div>` with the class `.sui-{version}` for the styles to take effect.

## Installation

```
npm i @wpmudev/react-modal --save-dev
```

## Usage

### Javascript Instantiation

```js
import React from 'react';
import {
  Modal
} from '@wpmudev/react-modal';

const modalContent = () => <p>No, I am your father</p>;

const MyApp = () => (
    <Modal
        dialogId="le-dialog-id"
		modalContent={ modalContent }
		titleText="Accessible title"
	/>
);
```

### Props

Prop Name | Type | Description
--- | --- | ---
dialogID* | String | ID attribute of the dialog.
<!-- initialFocus* | String | String for `querySelector` to get the element that should be focused when the modal opens. -->
titleId | String | The id of the element that should be used as the modal's accessible title. This value is passed to the modal's aria-labelledby attribute.
titleText | String | A string to use as the modal's accessible title. This value is passed to the modal's aria-label attribute.
modalContent | Object or Function | Renders the content of the modal. `Object` for slider modals. `Function` for simple modals. More details on the showcase.
triggerContent | Function | Optional function to render the element that triggers the opening of the modal.
size | String | Modal's size. `sm`|`md`|`lg`|`xl`.
<!-- renderToNode | HTMLElement or String | Value to be passed to the AriaModal's `renderTo` function. Controls where the modal is rendered into.-->
firstSlide | String | For slider modals only. The `key` of the `modalContent` object that holds the first slide. 

Plus everything from [aria-modal-react](https://www.npmjs.com/package/@justfixnyc/react-aria-modal), except `includeDefaultStyles` which is set to `false`.

You must use either `titleId` or `titleText`, but not both.