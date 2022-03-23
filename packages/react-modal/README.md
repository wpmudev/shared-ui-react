[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/react-button)](https://www.npmjs.com/package/@wpmudev/react-button)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-button/peer/react)

# SUI React Modal

>**THIS IS A FORK.**

**SUI React Modal** is based on a forked version of the [react-aria-modal](https://github.com/davidtheclark/react-aria-modal) package and built according to [WAI-ARIA Authoring Practices](http://www.w3.org/TR/wai-aria-practices/#dialog_modal) but ran out of maintenance.

The original package was hard to adapt for this project because of the number of dependencies dispersed across multiple Github repositories (some of which contained bugs that need immediate solutions).

However, being ours a modified version, it does things slightly different:

- It drops support for React 15 (and older versions).
- It bundles up all the `react-aria-modal` dependencies into a single package.
- It removes the `includeDefaultStyles` and `verticalCenterStyle` built-in properties.

## Overview

The main idea of this module is to provide a **container** that will wrap its inner content to present it on a dialog modal. It has the following features while giving the developers complete control of the content:

- **Trapped Focus:** `TAB` and `SHIFT + TAB` cycle through the modal's focusable nodes without returning to the main document beneath.
- **Keyboard Shortcuts:** `ESC` will close the modal.
- **Background Scroll:** Scrolling is disabled on the main document beneath the modal.
- **ARIA Roles:** The roles `dialog` or `alertDialog` are assigned depending on the case.
- **Underlay Mask:** Clicking on it will close the modal, although it is possible to disable this through props.

> **Remember:** This modal relies on the styling provided by WPMU DEV's [Shared UI](https://github.com/wpmudev/shared-ui).

## Installation

```
npm i @wpmudev/react-modal --save-dev
```

#### React Dependency
This requires React 16+

## Usage

Just provide the right props (see below) and pass the modal's content as this component's child. However, if the modal needs to be more complex, like a "slider (steps)" or "replace" modal, you can review the demos showcase for a live example and more notes about it.

```js
import React from 'react';
import { Modal } from '@wpmudev/react-modal';

const modalContent = () => <p>No, I am your father</p>;

const MyApp = () => (
    <Modal
        dialogId="uniqueId"
		titleText="Accessible title"
		modalContent={ modalContent }
	/>
);
```

## Properties (Props)

Properties like `data-*` or `aria-*` pass directly to the modal's container (`sui-modal`).

### dialogID
Type: `string`

Choose a unique ID for the dialog element.

### initialFocus
Type: `string`

When the modal activates, its first focusable child will receive focus by default. If another specific element should receive initial focus, pass the `string` selector to this prop.

That selector is passed to `document.querySelector()` to find the DOM node.

### titleId
Type: `string`

Use the ID of a text element as the modal's accessible title. The value passes to the modal's `aria-labelledby` attribute.

**Important:** You must use either `titleId` or `titleText` but not both.

### titleText
Type: `string`

A string to use as the modal's accessible title. The value passes to the modal's `aria-labelledby` attribute.

**Important:** You must use either `titleId` or `titleText` but not both.

### size
Type: `string`

A string to set modal size. You can choose between: `sm` | `md` | `lg` | `xl`

### modalContent
Type: `object` or `function`

Renders the content of the modal. To use `Object` is a requirement for slider modals, while simple modals use `function` as a must.

### triggerContent
Type: `function`

Optional function to render the element that triggers the opening of the modal.

### firstSlider
Type: `string`

**For sliders modals only.** This prop contains the `key` of the `modalContent` object that holds the first slide you want to show.
