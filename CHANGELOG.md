# Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org/) for commit guidelines.

## [1.8.1](https://github.com/wpmudev/shared-ui/compare/v1.8.0...v1.8.1) (Unreleased)

#### 🐛 Bug Fixes
* `compiler`
  * Rollup was trying to import and compile `react-dom` causing an error during build. [#166](https://github.com/wpmudev/shared-ui-react/pull/166) ([SUI-329](https://incsub.atlassian.net/browse/SUI-329)) ([@creador-dev](https://github.com/creador-dev))
* `react-post`
  * Post title HTML chars are rendered encoded on hovering. [#163](https://github.com/wpmudev/shared-ui-react/pull/163) ([SUI-264](https://incsub.atlassian.net/browse/SUI-264)) ([@creador-dev](https://github.com/creador-dev))

#### 🏠 Internal
* `react-accordion`, `react-box`, `react-button-icon`, `react-button`, `react-dropdown`, `react-input`, `react-modal`, `react-notifications`, `react-pagination`, `react-post`, `react-progress-bar`
  * Set `react` dependency to latest version for all packages. [#171](https://github.com/wpmudev/shared-ui-react/pull/171) ([SUI-203](https://incsub.atlassian.net/browse/SUI-203)) ([@iamleigh](https://github.com/iamleigh))
* Other
  * Upgrade `SUI` dependency to its latest version. [#160](https://github.com/wpmudev/shared-ui-react/pull/160) ([SUI-314](https://incsub.atlassian.net/browse/SUI-314)) ([@iamleigh](https://github.com/iamleigh))

#### Committers: 2
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))
- Pawan Kumar ([@creador-dev](https://github.com/creador-dev))

## [1.8.0](https://github.com/wpmudev/shared-ui/compare/v1.7.0...v1.8.0) (2022-01-30)

#### ✨ New Features
* `react-progress-bar`
  * Create new component. [#139](https://github.com/wpmudev/shared-ui-react/pull/139) ([SUI-233](https://incsub.atlassian.net/browse/SUI-233)) ([@iamleigh](https://github.com/iamleigh))
* `react-button`
  * Allow icon to be placed at left or right of label. [#131](https://github.com/wpmudev/shared-ui-react/pull/131) ([SUI-219](https://incsub.atlassian.net/browse/SUI-219)) ([@Gowtham369](https://github.com/Gowtham369))
* `react-input`
  * Allow error class/state. [#132](https://github.com/wpmudev/shared-ui-react/pull/132) ([SUI-218](https://incsub.atlassian.net/browse/SUI-218)) ([@Gowtham369](https://github.com/Gowtham369))

#### 🚀 Improvements
* `react-modal`
  * Trap focus without external library. [#129](https://github.com/wpmudev/shared-ui-react/pull/129) ([SUI-197](https://incsub.atlassian.net/browse/SUI-197)) ([@iamleigh](https://github.com/iamleigh))

#### 🐛 Bug Fixes
* `react-post`
  * Misaligned description when `reading time` is missing. [#147](https://github.com/wpmudev/shared-ui-react/pull/147) ([SUI-257](https://incsub.atlassian.net/browse/SUI-257)) ([@iamleigh](https://github.com/iamleigh))

#### 🏠 Internal
* Update change log file to new structure. [#157](https://github.com/wpmudev/shared-ui-react/pull/157) ([SUI-271](https://incsub.atlassian.net/browse/SUI-271)) ([@iamleigh](https://github.com/iamleigh))
* Styled components can't be loaded multiple times. [#141](https://github.com/wpmudev/shared-ui-react/pull/141) ([SUI-272](https://incsub.atlassian.net/browse/SUI-272)) ([@iamleigh](https://github.com/iamleigh))
* Update change log labels. [#140](https://github.com/wpmudev/shared-ui-react/pull/140) ([SUI-270](https://incsub.atlassian.net/browse/SUI-270)) ([@iamleigh](https://github.com/iamleigh))

#### Committers: 2
- Gowtham Ravipati ([@Gowtham369](https://github.com/Gowtham369))
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))