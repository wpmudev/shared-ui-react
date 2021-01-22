[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

# Shared UI Components for React

## Components

The following is a list of the components that are ready to be used with corresponding links to NPM package and the showcase design spec.

Component | Version
--- | ---
[Tutorials List](https://wpmudev.github.io/shared-ui-react/?path=/story/tutorials-list--primary) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-tutorials-list.svg)](https://badge.fury.io/js/%40wpmudev%2Freact-tutorials-list)
[Tutorials Slider](https://wpmudev.github.io/shared-ui-react/?path=/story/tutorials-slider--primary) | [![npm version](https://badge.fury.io/js/%40wpmudev%2Freact-tutorials-slider.svg)](https://badge.fury.io/js/%40wpmudev%2Freact-tutorials-slider)

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