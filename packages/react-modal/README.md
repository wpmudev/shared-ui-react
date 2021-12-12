[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/react-button)](https://www.npmjs.com/package/@wpmudev/react-button)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-button/peer/react)

# SUI React Modal

>**THIS IS A FORK.**

This is based on a forked version of [react-aria-modal](https://github.com/davidtheclark/react-aria-modal) package that's built according to [WAI-ARIA Authoring Practices](http://www.w3.org/TR/wai-aria-practices/#dialog_modal) but ran out of maintenance and was hard to adapt for this project purpose because of the amount of dependencies dispersed across multiple Github repositories (some of which contained bugs that need to be addressed immediately).

However, being ours a modified version, it does things slightly different:

- It drops support for React 15 (and older versions).
- It bundle's up all `react-aria-modal` dependencies into a single package.
- It removes `includeDefaultStyles` and `verticalCenterStyle` properties.

## Overview

The main idea of this module is to provide a **container** that will wrap its inner content to present it on a dialog modal. It has the following features, while giving you complete control of the content:
- **Trapped Focus:** `TAB` and `SHIFT + TAB` cycles through the modal's focusable nodes without returning to the main document beneath.
- **Keyboard Shortcuts:** `ESC` will close the modal.
- **Background Scroll:** Scrolling is frozen on the main document beneath the modal.
- **ARIA Roles:** It can be assigned with `dialog` or `alertdialog` role.
- **Underlay Mask:** Clicking on it will close the modal, although this can be disabled through props.

This modal relies on the styling provided by WPMU DEV's [Shared UI](https://github.com/wpmudev/shared-ui). The relevant styles must be included and the modal must be rendered within a `<div>` with the class `.sui-wrap` for the styles to take effect.

## Installation

```
npm i @wpmudev/react-modal --save-dev
```

#### React Dependency
This requires React 16+

## Usage

Just provide the right props (see below) and pass the content of the modal as this component's child.

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

## Props

Any `data-*` or `aria-*` props will be passed directly to the modal's container `sui-modal`.

### dialogID
Type: `string`

Choose your own ID attribute for the dialog element but remember it must be unique.

### initialFocus
Type: `string`

By default, when the modal activates its first focusable child will receive focus. If, instead, you want to identify a specific element that should receive initial focus, pass a selector `string` to this prop.

That selector is passed to `document.querySelector()` to find the DOM node.

### titleId
Type: `string`

The ID of the element that should be used as the modal's accessible title. This value is passed to the modal's `aria-labelledby` attribute.

**Note:** You must use either `titleId` or `titleText` but not both.

### titleText
Type: `string`

A string to use as the modal's accessible title. This value is passed to the modal's `aria-label` attribute.

**Note:** You must use either `titleId` or `titleText` but not both.

### size
Type: `string`

A string to set modal size. You can choose between: `sm` | `md` | `lg` | `xl`

### modalContent
Type: `object` or `function`

Renders the content of the modal. You must use `Object` for slider modals while `function` for simple modals.

### triggerContent
Type: `function`

Optional function to render the element that triggers the opening of the modal.

### firstSlider
Type: `string`

**For sliders modals only.** This prop contains the `key` of the `modalContent` object that holds the first slide you want to show.

## renderToNode (HTMLElement | String)
This module, with the help of `react-aria-modal`, uses **React Portals** to insert the modal into a new element at the end of any element containing `.sui-wrap` class, making it easier to style content inside modal.

The static `renderToNode` function returns a new component that renders modals into a specific element, rather than a newly created element at the bottom of `.sui-wrap`.