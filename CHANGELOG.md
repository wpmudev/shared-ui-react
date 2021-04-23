# Changelog

## Unreleased (2021-04-23)

#### New Features
* `react-dropdown`
  * [#99](https://github.com/wpmudev/shared-ui-react/pull/99) ✨ new(react-dropdown): Allow options to change font color. ([@iamleigh](https://github.com/iamleigh))
* `core`, `react-modal`
  * [#92](https://github.com/wpmudev/shared-ui-react/pull/92) ✨ new(react-modal): Create new component. ([@a-danae](https://github.com/a-danae))
* `react-button-icon`
  * [#95](https://github.com/wpmudev/shared-ui-react/pull/95) ✨ new/react-button-icon: Icon size property. ([@a-danae](https://github.com/a-danae))
* `react-modal`
  * [#91](https://github.com/wpmudev/shared-ui-react/pull/91) New/modal replace ([@a-danae](https://github.com/a-danae))

#### Improvements
* `react-modal`
  * [#98](https://github.com/wpmudev/shared-ui-react/pull/98) 🐛 fix/react-modal: Remove conditional rendering when using the inner modal's state. ([@a-danae](https://github.com/a-danae))
* `react-button-icon`
  * [#96](https://github.com/wpmudev/shared-ui-react/pull/96) 🐛 fix/react-button-icon: Adjust the `render` return. ([@a-danae](https://github.com/a-danae))

#### Bug Fixes
* `react-button`
  * [#97](https://github.com/wpmudev/shared-ui-react/pull/97)  🐛 fix/react-button: Console error when the button is `loading`. ([@a-danae](https://github.com/a-danae))
* `react-dropdown`
  * [#90](https://github.com/wpmudev/shared-ui-react/pull/90) 🐛 fix(react-dropdown): Stop click propagation from the dropdown component. ([@a-danae](https://github.com/a-danae))
* `react-button-icon`
  * [#93](https://github.com/wpmudev/shared-ui-react/pull/93) 🐛 fix/react-button-icon: Prevent `undefined` class from being added. ([@a-danae](https://github.com/a-danae))
  * [#94](https://github.com/wpmudev/shared-ui-react/pull/94) 🐛 fix/react-button-icon: Remove `forwardRef`. ([@a-danae](https://github.com/a-danae))

#### Committers: 2
- Danae Millan ([@a-danae](https://github.com/a-danae))
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))

## Released (2021-04-15)

#### Improvements
* `react-dropdown`
  * [#87](https://github.com/wpmudev/shared-ui-react/pull/87) 🐛 fix(react-dropdown): Prevent clicks from propagating. ([@a-danae](https://github.com/a-danae))
* `compiler`, `react-accordion`, `react-box`, `react-button-icon`, `react-input`, `react-notifications`, `react-post`
  * [#85](https://github.com/wpmudev/shared-ui-react/pull/85) ⬆️ Upgrade dependencies. ([@iamleigh](https://github.com/iamleigh))

#### Bug Fixes
* `react-input`
  * [#86](https://github.com/wpmudev/shared-ui-react/pull/86) 🐛 fix(react-input): Remove extra space when passing the 'Input' props. ([@a-danae](https://github.com/a-danae))
* `react-dropdown`
  * [#89](https://github.com/wpmudev/shared-ui-react/pull/89) 🐛 fix(react-dropdown): Menu not closing after clicking on an option. ([@a-danae](https://github.com/a-danae))
  * [#88](https://github.com/wpmudev/shared-ui-react/pull/88) 🐛 fix(react-dropdown): Clicking on its options closes the menu. ([@a-danae](https://github.com/a-danae))

#### Committers: 2
- Danae Millan ([@a-danae](https://github.com/a-danae))
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))

## Released (2021-04-09)

#### New Features
* `react-box`
  * [#83](https://github.com/wpmudev/shared-ui-react/pull/83) ✨ new(react-box): Make `body` more flexible with props. ([@iamleigh](https://github.com/iamleigh))
  * [#80](https://github.com/wpmudev/shared-ui-react/pull/80) ✨ new(react-box): Make footer more flexible. ([@iamleigh](https://github.com/iamleigh))

#### Bug Fixes
* `react-box`
  * [#84](https://github.com/wpmudev/shared-ui-react/pull/84) 🐛 fix(react-box): Reestructure `header` props. ([@iamleigh](https://github.com/iamleigh))

#### Documentation
* `react-button`
  * [#79](https://github.com/wpmudev/shared-ui-react/pull/79) 📝 docs(react-button): Fix not working controls and add more properties. ([@a-danae](https://github.com/a-danae))

#### Committers: 2
- Danae Millan ([@a-danae](https://github.com/a-danae))
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))

## Released (2021-04-08)

#### New Features
* `react-box`
  * [#70](https://github.com/wpmudev/shared-ui-react/pull/70) ✨ new(react-box): Allow custom classes. ([@iamleigh](https://github.com/iamleigh))
  * [#78](https://github.com/wpmudev/shared-ui-react/pull/78) ✨ new(react-box): Add `border` and `stacked` props to header. ([@iamleigh](https://github.com/iamleigh))
  * [#76](https://github.com/wpmudev/shared-ui-react/pull/76) ✨ new(react-box): Tag props for title. ([@iamleigh](https://github.com/iamleigh))

#### Improvements
* `react-input`
  * [#74](https://github.com/wpmudev/shared-ui-react/pull/74) 🐛 fix(react-input): Give more flexibility to the 'input' component. ([@a-danae](https://github.com/a-danae))
* `react-button`
  * [#73](https://github.com/wpmudev/shared-ui-react/pull/73) 🐛 fix(react-button): Remove forwardRef and fix `undefined` in classes. ([@a-danae](https://github.com/a-danae))
* `react-notifications`
  * [#69](https://github.com/wpmudev/shared-ui-react/pull/69) 🐛 fix(react-notifications): Add multi-line capability. ([@iamleigh](https://github.com/iamleigh))
  * [#67](https://github.com/wpmudev/shared-ui-react/pull/67) 🐛 fix(react-notifications): Make component dismissible. ([@iamleigh](https://github.com/iamleigh))

#### Bug Fixes
* `react-button`
  * [#73](https://github.com/wpmudev/shared-ui-react/pull/73) 🐛 fix(react-button): Remove forwardRef and fix `undefined` in classes. ([@a-danae](https://github.com/a-danae))
* `react-notifications`
  * [#66](https://github.com/wpmudev/shared-ui-react/pull/66) 🐛 fix(react-notifications): Icon not showing up for non-default variation. ([@iamleigh](https://github.com/iamleigh))

#### Committers: 2
- Danae Millan ([@a-danae](https://github.com/a-danae))
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))

## Released (2021-03-31)

#### New Features
* `react-accordion`
  * [#56](https://github.com/wpmudev/shared-ui-react/pull/56) ✨ new(react-accordion): Create new component. ([@iamleigh](https://github.com/iamleigh))
* `react-dropdown`
  * [#54](https://github.com/wpmudev/shared-ui-react/pull/54) ✨ new(react-dropdown): Create new component. ([@iamleigh](https://github.com/iamleigh))

#### Improvements
* `core`
  * [#52](https://github.com/wpmudev/shared-ui-react/pull/52) 🐛 fix(react-core): Remove peer dependencies. ([@iamleigh](https://github.com/iamleigh))
* `react-box`
  * [#51](https://github.com/wpmudev/shared-ui-react/pull/51) 🐛 fix(react-box): Remove peer dependencies. ([@iamleigh](https://github.com/iamleigh))

#### Bug Fixes
* `react-button`
  * [#60](https://github.com/wpmudev/shared-ui-react/pull/60) 🐛 fix(react-button): Allow custom classes. ([@iamleigh](https://github.com/iamleigh))
  * [#63](https://github.com/wpmudev/shared-ui-react/pull/63) 🐛 fix(react-button): Console error for refs. ([@iamleigh](https://github.com/iamleigh))
* `react-button-icon`
  * [#61](https://github.com/wpmudev/shared-ui-react/pull/61) 🐛 fix(react-button-icon): Allow custom classes. ([@iamleigh](https://github.com/iamleigh))
  * [#55](https://github.com/wpmudev/shared-ui-react/pull/55) 🐛 fix(react-button-icon): Console error for refs. ([@iamleigh](https://github.com/iamleigh))

#### Committers: 1
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))

## Released (2021-03-19)

#### New Features
* `react-input`
  * [#47](https://github.com/wpmudev/shared-ui-react/pull/47) ✨ new(react-input): Create component. ([@iamleigh](https://github.com/iamleigh))
* `react-button-icon`
  * [#46](https://github.com/wpmudev/shared-ui-react/pull/46) ✨ new/button-icon: Create component. ([@iamleigh](https://github.com/iamleigh))

#### Improvements
* `core`
  * [#50](https://github.com/wpmudev/shared-ui-react/pull/50) 🐛 fix(core): Import input component. ([@iamleigh](https://github.com/iamleigh))
* `react-post`
  * [#49](https://github.com/wpmudev/shared-ui-react/pull/49) 🐛 fix(react-post): Add component to Storybook. ([@iamleigh](https://github.com/iamleigh))

#### Committers: 1
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))

## Released (2021-03-12)

#### Improvements
* `tutorials-list`, `tutorials-slider`, `tutorials`
  * [#43](https://github.com/wpmudev/shared-ui-react/pull/43) 🚚 fix/tutorials: Move tutorials related packages to `Shared Modules` repo. ([@iamleigh](https://github.com/iamleigh))
* `react-box`, `react-button`, `react-compiler`, `react-notifications`, `react-post`
  * [#42](https://github.com/wpmudev/shared-ui-react/pull/42) 🚚 Rename packages to include "react-" prefix. ([@iamleigh](https://github.com/iamleigh))

#### Bug Fixes
* `react-post`
  * [#44](https://github.com/wpmudev/shared-ui-react/pull/44) 🐛 fix/post: API url request failed. ([@iamleigh](https://github.com/iamleigh))

#### Committers: 1
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))

## [Tutorials v1.0.11](https://www.npmjs.com/package/@wpmudev/react-tutorials) (2021-02-10)

#### Bug Fixes
* `tutorials-slider`, `tutorials`
  * [#32](https://github.com/wpmudev/shared-ui-react/pull/32) 🐛 fix/tutorials-slider: `Posts` not appearing after load. ([@iamleigh](https://github.com/iamleigh))
* `tutorials-slider`
  * [#35](https://github.com/wpmudev/shared-ui-react/pull/35) 🐛 fix/tutorials-slider: SUI library missing as peer dependency. ([@iamleigh](https://github.com/iamleigh))
* `tutorials`
  * [#36](https://github.com/wpmudev/shared-ui-react/pull/36) 🐛 fix/tutorials: SUI library missing as peer dependency. ([@iamleigh](https://github.com/iamleigh))

#### Committers: 1
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))

## [Core v1.0.4](https://www.npmjs.com/package/@wpmudev/shared-ui-react) (2021-02-09)

#### New Features or Improvements
* `button`
  * [#15](https://github.com/wpmudev/shared-ui-react/pull/15) Enhance/button ([@iamleigh](https://github.com/iamleigh))
* Other
  * [#14](https://github.com/wpmudev/shared-ui-react/pull/14) ⬆️ Upgrade Storybook ([@iamleigh](https://github.com/iamleigh))
  * [#11](https://github.com/wpmudev/shared-ui-react/pull/11) New/lint action ([@iamleigh](https://github.com/iamleigh))

#### Bug Fixes
* `box`, `button`, `core`, `notifications`, `post`, `tutorials-list`, `tutorials-slider`, `tutorials`
  * [#13](https://github.com/wpmudev/shared-ui-react/pull/13) 🐛 fix/eslint: Work on files errors and warnings. ([@iamleigh](https://github.com/iamleigh))
* `builder`
  * [#12](https://github.com/wpmudev/shared-ui-react/pull/12) 🐛 fix/builder: Remove `react-` prefix from built file. ([@iamleigh](https://github.com/iamleigh))

#### Documentation
* `post`, `tutorials-list`, `tutorials-slider`
  * [#30](https://github.com/wpmudev/shared-ui-react/pull/30) 📝 docs/post: Improve component documentation. ([@iamleigh](https://github.com/iamleigh))
* `box`, `notifications`, `post`, `tutorials-list`, `tutorials-slider`
  * [#20](https://github.com/wpmudev/shared-ui-react/pull/20) 📝 docs: Automatic global changelogs based on PRs. ([@iamleigh](https://github.com/iamleigh))
* `button`
  * [#15](https://github.com/wpmudev/shared-ui-react/pull/15) Enhance/button ([@iamleigh](https://github.com/iamleigh))
* Other
  * [#10](https://github.com/wpmudev/shared-ui-react/pull/10) Enhance/documentation ([@iamleigh](https://github.com/iamleigh))

#### Committers: 1
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))