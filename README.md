[![npm version](https://img.shields.io/npm/v/@wpmudev/shared-ui-react?label=SUI%20React)](https://www.npmjs.com/package/@wpmudev/shared-ui-react)
[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![GitHub issues](https://img.shields.io/github/issues/wpmudev/shared-ui-react)](https://github.com/wpmudev/shared-ui-react/issues)
![GitHub pull requests](https://img.shields.io/github/issues-pr/wpmudev/shared-ui-react)

# Shared UI Components for React

This is the official implementation of [WPMU DEV Shared UI](https://github.com/wpmudev/shared-ui/) components for React.

## Components

The following is a list of the components that are ready to be used with corresponding links to NPM package and the showcase design spec.

Container | Version
--- | ---
[Accordion](https://wpmudev.github.io/shared-ui-react/?path=/story/containers-accordion--primary) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-accordion.svg)](https://www.npmjs.com/package/@wpmudev/react-accordion)
[Box](https://wpmudev.github.io/shared-ui-react/?path=/story/containers-box--wrapper) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-box.svg)](https://www.npmjs.com/package/@wpmudev/react-box)
[Modal](https://wpmudev.github.io/shared-ui-react/?path=/story/containers-modal--simple) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-modal.svg)](https://www.npmjs.com/package/@wpmudev/react-modal)

Component | Version
--- | ---
[Button](https://wpmudev.github.io/shared-ui-react/?path=/story/components-button--primary) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-button.svg)](https://www.npmjs.com/package/@wpmudev/react-button)
[Button Icon](https://wpmudev.github.io/shared-ui-react/?path=/story/components-button-icon--primary) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-button-icon.svg)](https://www.npmjs.com/package/@wpmudev/react-button-icon)
[Dropdown](https://wpmudev.github.io/shared-ui-react/?path=/story/components-dropdown--primary) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-dropdown.svg)](https://www.npmjs.com/package/@wpmudev/react-dropdown)
[Input](https://wpmudev.github.io/shared-ui-react/?path=/story/components-input--primary) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-input.svg)](https://www.npmjs.com/package/@wpmudev/react-input)
[Notifications](https://wpmudev.github.io/shared-ui-react/?path=/story/components-notifications-single-line--primary) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-notifications.svg)](https://www.npmjs.com/package/@wpmudev/react-notifications)
[Pagination](https://wpmudev.github.io/shared-ui-react/?path=/story/components-pagination--simple) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-pagination.svg)](https://www.npmjs.com/package/@wpmudev/react-pagination)
[Post](https://wpmudev.github.io/shared-ui-react/?path=/story/components-post--primary) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-post.svg)](https://www.npmjs.com/package/@wpmudev/react-post)
[Progress Bar](https://wpmudev.github.io/shared-ui-react/?path=/story/components-progress-bar--unboxed) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-progress-bar.svg)](https://www.npmjs.com/package/@wpmudev/react-progress-bar)

## Getting Started

### React Plugins

Go to the component you need, install it using node and start using it on your project.

### Non-React Plugins

#### 1. Install Packages.

Install dependencies for your project:

```
npm i react react-dom @babel/core @babel/preset-react --save-dev
```

#### 2. Babel settings.

Create or edit `.babelrc` file and include the following:

```js
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

#### 3. Webpack settings.

Create or edit `webpack.config.js` file:

```js
var path = require( 'path' );

var config = {
  source: {},
  output: {}
};

config.source.js          = './assets/js/index.js';
config.output.jsDirectory = 'assets/js/';
config.output.jsFileName  = 'index.min.js';

var jsConfig = Object.assign( {}, {
  entry: config.source.js,
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|dist)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    filename: config.output.jsFileName,
    path: path.resolve( __dirname, config.output.jsDirectory )
  },
  devServer: {
    contentBase: path.resolve( __dirname, '.' )
  },
});

module.exports = [ jsConfig ];
```

#### 4. Import your component(s).

Create a new file, preferrably inside `/assets/js/` folder, and its name should match the file we are calling from webpack:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import {
  ComponentName
} from '@wpmudev/react-component-name';

ReactDOM.render(
  <ComponentName />,
  document.getElementById( 'app' )
);
```

#### 5. HTML Content.

Go to the file where you going to include your component(s), for example: `dashboard.php` file, and add:

```html
<div id="app"></div>
<script src="./assets/js/index.min.js"></script><!-- Your react file must be called here -->
```