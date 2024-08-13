# Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org/) for commit guidelines.

## [1.9.1](https://github.com/wpmudev/shared-ui/compare/v1.9.0...v1.9.1) (2023-01-18)

#### 🐛 Bug Fixes
* `react-radio-checkbox`
  * [#293](https://github.com/wpmudev/shared-ui-react/pull/293) Default checked causing issues in bulk edit. ([SUI-166](https://incsub.atlassian.net/browse/SUI-166)) ([@creador-dev](https://github.com/creador-dev))

#### Committers: 1
- Pawan Kumar ([@creador-dev](https://github.com/creador-dev))

## [1.9.0](https://github.com/wpmudev/shared-ui/compare/v1.8.3...v1.9.0) (2022-11-16)

#### ✨ New Features
* `react-accordion`, `react-bulk-actions`
  * [#146](https://github.com/wpmudev/shared-ui-react/pull/146) Bulk actions. ([SUI-222](https://incsub.atlassian.net/browse/SUI-222)) ([@creador-dev](https://github.com/creador-dev))
* `react-accordion`
  * [#168](https://github.com/wpmudev/shared-ui-react/pull/168) Include `checkbox` element for row/item selection. ([SUI-331](https://incsub.atlassian.net/browse/SUI-331)) ([@creador-dev](https://github.com/creador-dev))
* `react-toggles`
  * [#153](https://github.com/wpmudev/shared-ui-react/pull/153) Create component. ([SUI-291](https://incsub.atlassian.net/browse/SUI-291)) ([@iamleigh](https://github.com/iamleigh))
* `react-radio-checkbox`
  * [#169](https://github.com/wpmudev/shared-ui-react/pull/169) Create components. ([SUI-332](https://incsub.atlassian.net/browse/SUI-332)) ([@creador-dev](https://github.com/creador-dev))

#### 🚀 Improvements
* `react-input`
  * [#267](https://github.com/wpmudev/shared-ui-react/pull/267) Add "forwardref" in input component to access it's actions in other components. ([SUI-425](https://incsub.atlassian.net/browse/SUI-425)) ([@creador-dev](https://github.com/creador-dev))
  * [#271](https://github.com/wpmudev/shared-ui-react/pull/271) Add show/hide button for password type. ([SUI-448](https://incsub.atlassian.net/browse/SUI-448)) ([@creador-dev](https://github.com/creador-dev))

#### 📝 Documentation
* `react-modal`
  * [#275](https://github.com/wpmudev/shared-ui-react/pull/275) Re-rendering when input value changes. ([SUI-459](https://incsub.atlassian.net/browse/SUI-459)) ([@creador-dev](https://github.com/creador-dev))

#### Committers: 2
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))
- Pawan Kumar ([@creador-dev](https://github.com/creador-dev))

## [1.8.3](https://github.com/wpmudev/shared-ui/compare/v1.8.2...v1.8.3) (2022-06-17)

#### 🐛 Bug Fixes
* `react-accordion`
  * When `icon` is empty, the image disappears. [#269](https://github.com/wpmudev/shared-ui-react/pull/269) ([SUI-360](https://incsub.atlassian.net/browse/SUI-360)) ([@creador-dev](https://github.com/creador-dev))
  * Blank space between icon and title when image is empty. [#269](https://github.com/wpmudev/shared-ui-react/pull/269) ([SUI-361](https://incsub.atlassian.net/browse/SUI-361)) ([@creador-dev](https://github.com/creador-dev))

#### Committers: 1
- Pawan Kumar ([@creador-dev](https://github.com/creador-dev))

## [1.8.2](https://github.com/wpmudev/shared-ui/compare/v1.8.1...v1.8.2) (2022-05-30)

#### 🚀 Improvements

- `react-progress-bar`
  - Comparing a string and a number with strict operator is pointless. [#232](https://github.com/wpmudev/shared-ui-react/pull/232) ([SUI-398](https://incsub.atlassian.net/browse/SUI-398)) ([@creador-dev](https://github.com/creador-dev))
  - Using isNaN may lead to unexpected results. [#231](https://github.com/wpmudev/shared-ui-react/pull/231) ([SUI-399](https://incsub.atlassian.net/browse/SUI-399)) ([@creador-dev](https://github.com/creador-dev))
- `react-modal`
  - Missing cleanup of timer in componentDidMount. [#230](https://github.com/wpmudev/shared-ui-react/pull/230) ([SUI-400](https://incsub.atlassian.net/browse/SUI-400)) ([@creador-dev](https://github.com/creador-dev))
- `react-dropdown`
  - Using component state to compute could lead to undesired behavior. [#255](https://github.com/wpmudev/shared-ui-react/pull/255) ([SUI-402](https://incsub.atlassian.net/browse/SUI-402)) ([@creador-dev](https://github.com/creador-dev))
  - Case clause is duplicated. [#229](https://github.com/wpmudev/shared-ui-react/pull/229) ([SUI-401](https://incsub.atlassian.net/browse/SUI-401)) ([@creador-dev](https://github.com/creador-dev))

#### 🐛 Bug Fixes

- `react-pagination`
  - Repeated property. [#228](https://github.com/wpmudev/shared-ui-react/pull/228) ([SUI-403](https://incsub.atlassian.net/browse/SUI-403)) ([@creador-dev](https://github.com/creador-dev))
- `react-input`
  - Class identifier is wrong. [#227](https://github.com/wpmudev/shared-ui-react/pull/227) ([SUI-404](https://incsub.atlassian.net/browse/SUI-404)) ([@creador-dev](https://github.com/creador-dev))

#### 🏠 Internal

- Regular Expression Denial of Service in postcss. [#264](https://github.com/wpmudev/shared-ui-react/pull/264) ([SUI-380](https://incsub.atlassian.net/browse/SUI-380)) ([@creador-dev](https://github.com/creador-dev))
- Regular Expression Denial of Service in trim. [#263](https://github.com/wpmudev/shared-ui-react/pull/263) ([SUI-416](https://incsub.atlassian.net/browse/SUI-416)) ([@iamleigh](https://github.com/iamleigh))
- Regular expression denial of service in glob-parent. [#262](https://github.com/wpmudev/shared-ui-react/pull/262) ([SUI-420](https://incsub.atlassian.net/browse/SUI-420)) ([@iamleigh](https://github.com/iamleigh))
- Inefficient Regular Expression Complexity in nth-check. [#261](https://github.com/wpmudev/shared-ui-react/pull/261) ([SUI-387](https://incsub.atlassian.net/browse/SUI-387)) ([@iamleigh](https://github.com/iamleigh))
- Cross-site Scripting in Prism. [#234](https://github.com/wpmudev/shared-ui-react/pull/234) ([SUI-381](https://incsub.atlassian.net/browse/SUI-381)) ([@creador-dev](https://github.com/creador-dev))
- Bump ws from 7.4.0 to 7.5.7 [#254](https://github.com/wpmudev/shared-ui-react/pull/254) ([SUI-419](https://incsub.atlassian.net/browse/SUI-419)) ([@iamleigh](https://github.com/iamleigh))
- Bump hosted-git-info from 2.8.8 to 2.8.9 [#253](https://github.com/wpmudev/shared-ui-react/pull/253) ([SUI-417](https://incsub.atlassian.net/browse/SUI-417)) ([@iamleigh](https://github.com/iamleigh))
- Bump ssri from 6.0.1 to 6.0.2 [#252](https://github.com/wpmudev/shared-ui-react/pull/252) ([SUI-415](https://incsub.atlassian.net/browse/SUI-415)) ([@iamleigh](https://github.com/iamleigh))
- Bump y18n from 4.0.0 to 4.0.3 [#251](https://github.com/wpmudev/shared-ui-react/pull/251) ([SUI-414](https://incsub.atlassian.net/browse/SUI-414)) ([@iamleigh](https://github.com/iamleigh))
- Bump elliptic from 6.5.3 to 6.5.4 [#250](https://github.com/wpmudev/shared-ui-react/pull/250) ([SUI-413](https://incsub.atlassian.net/browse/SUI-413)) ([@iamleigh](https://github.com/iamleigh))
- Bump node-notifier from 8.0.0 to 8.0.2 [#249](https://github.com/wpmudev/shared-ui-react/pull/249) ([SUI-412](https://incsub.atlassian.net/browse/SUI-412)) ([@iamleigh](https://github.com/iamleigh))
- Bump ini from 1.3.5 to 1.3.8 [#248](https://github.com/wpmudev/shared-ui-react/pull/248) ([SUI-411](https://incsub.atlassian.net/browse/SUI-411)) ([@iamleigh](https://github.com/iamleigh))
- Bump tmpl from 1.0.4 to 1.0.5 [#247](https://github.com/wpmudev/shared-ui-react/pull/247) ([SUI-410](https://incsub.atlassian.net/browse/SUI-410)) ([@iamleigh](https://github.com/iamleigh))
- Bump async from 2.6.3 to 2.6.4 [#244](https://github.com/wpmudev/shared-ui-react/pull/244) ([SUI-373](https://incsub.atlassian.net/browse/SUI-373)) ([@iamleigh](https://github.com/iamleigh))
- Regular Expression Denial of Service in trim-newlines. [#246](https://github.com/wpmudev/shared-ui-react/pull/246) ([SUI-394](https://incsub.atlassian.net/browse/SUI-394)) ([@iamleigh](https://github.com/iamleigh))
- Incorrect comparison in axios. [#241](https://github.com/wpmudev/shared-ui-react/pull/241) ([SUI-375](https://incsub.atlassian.net/browse/SUI-375)) ([@iamleigh](https://github.com/iamleigh))
- Bump color-string from 1.5.4 to 1.9.1 [#225](https://github.com/wpmudev/shared-ui-react/pull/225) ([SUI-393](https://incsub.atlassian.net/browse/SUI-393)) ([@iamleigh](https://github.com/iamleigh))
- Run Chromatic when pushing to any release branch. [#226](https://github.com/wpmudev/shared-ui-react/pull/226) ([SUI-395](https://incsub.atlassian.net/browse/SUI-395)) ([@iamleigh](https://github.com/iamleigh))
- Configure CodeQL alerts. [#217](https://github.com/wpmudev/shared-ui-react/pull/217) ([SUI-376](https://incsub.atlassian.net/browse/SUI-376)) ([@iamleigh](https://github.com/iamleigh))
- Bump path-parse from 1.0.6 to 1.0.7 [#223](https://github.com/wpmudev/shared-ui-react/pull/223) ([SUI-391](https://incsub.atlassian.net/browse/SUI-391)) ([@iamleigh](https://github.com/iamleigh))
- Bump nanoid from 3.1.16 to 3.3.4 [#218](https://github.com/wpmudev/shared-ui-react/pull/218) ([SUI-377](https://incsub.atlassian.net/browse/SUI-377)) ([@iamleigh](https://github.com/iamleigh))
- Bump tar from 4.4.13 to 4.4.19 [#222](https://github.com/wpmudev/shared-ui-react/pull/222) ([SUI-390](https://incsub.atlassian.net/browse/SUI-390)) ([@iamleigh](https://github.com/iamleigh))
- Bump shelljs from 0.8.4 to 0.8.5 [#221](https://github.com/wpmudev/shared-ui-react/pull/221) ([SUI-383](https://incsub.atlassian.net/browse/SUI-383)) ([@iamleigh](https://github.com/iamleigh))
- Bump node-fetch from 2.6.1 to 2.6.7 [#220](https://github.com/wpmudev/shared-ui-react/pull/220) ([SUI-382](https://incsub.atlassian.net/browse/SUI-382)) ([@iamleigh](https://github.com/iamleigh))
- Bump lodash-es from 4.17.15 to 4.17.21 [#219](https://github.com/wpmudev/shared-ui-react/pull/219) ([SUI-378](https://incsub.atlassian.net/browse/SUI-378)) ([@iamleigh](https://github.com/iamleigh))
- Bump moment from 2.29.1 to 2.29.3 [#216](https://github.com/wpmudev/shared-ui-react/pull/216) ([SUI-374](https://incsub.atlassian.net/browse/SUI-374)) ([@iamleigh](https://github.com/iamleigh))
- Bump ejs from 3.1.5 to 3.1.7 [#214](https://github.com/wpmudev/shared-ui-react/pull/214) ([SUI-370](https://incsub.atlassian.net/browse/SUI-370)) ([@iamleigh](https://github.com/iamleigh))
- Bump handlebars from 4.7.6 to 4.7.7 [#224](https://github.com/wpmudev/shared-ui-react/pull/224) ([SUI-392](https://incsub.atlassian.net/browse/SUI-392)) ([@iamleigh](https://github.com/iamleigh))
- Bump minimist from 1.2.5 to 1.2.6 [#215](https://github.com/wpmudev/shared-ui-react/pull/215) ([SUI-371](https://incsub.atlassian.net/browse/SUI-371)) ([@iamleigh](https://github.com/iamleigh))
- ESLint and Prettier configurations not detected. [#265](https://github.com/wpmudev/shared-ui-react/pull/265) ([SUI-396](https://incsub.atlassian.net/browse/SUI-396)) ([@iamleigh](https://github.com/iamleigh))
- Remove `notes` support on add-ons panel. [#260](https://github.com/wpmudev/shared-ui-react/pull/260) ([SUI-421](https://incsub.atlassian.net/browse/SUI-421)) ([@iamleigh](https://github.com/iamleigh))
- Upgrade to Storybook 6.4.22. [#259](https://github.com/wpmudev/shared-ui-react/pull/259) ([SUI-315](https://incsub.atlassian.net/browse/SUI-315)) ([@iamleigh](https://github.com/iamleigh))

#### Committers: 2

- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))
- Pawan Kumar ([@creador-dev](https://github.com/creador-dev))

## [1.8.1](https://github.com/wpmudev/shared-ui/compare/v1.8.0...v1.8.1) (2022-05-03)

#### ✨ New Features

- `react-input`
  - Add `prefix` prop. [#207](https://github.com/wpmudev/shared-ui-react/pull/207) ([SUI-356](https://incsub.atlassian.net/browse/SUI-356)) ([@creador-dev](https://github.com/creador-dev))
  - Add `suffix` prop. [#206](https://github.com/wpmudev/shared-ui-react/pull/206) ([SUI-357](https://incsub.atlassian.net/browse/SUI-357)) ([@creador-dev](https://github.com/creador-dev))
  - Allow constrained field. [#205](https://github.com/wpmudev/shared-ui-react/pull/205) ([SUI-358](https://incsub.atlassian.net/browse/SUI-358)) ([@iamleigh](https://github.com/iamleigh))
- `react-notifications`
  - Support callback function for dismiss button. [#187](https://github.com/wpmudev/shared-ui-react/pull/187) ([SUI-349](https://incsub.atlassian.net/browse/SUI-349)) ([@creador-dev](https://github.com/creador-dev))

#### 🚀 Improvements

- `react-dropdown`
  - Add `disabled` property for trigger menu button. [#184](https://github.com/wpmudev/shared-ui-react/pull/184) ([SUI-341](https://incsub.atlassian.net/browse/SUI-341)) ([@creador-dev](https://github.com/creador-dev))
- `react-notifications`
  - Ability to edit dismiss button label. [#181](https://github.com/wpmudev/shared-ui-react/pull/181) ([SUI-350](https://incsub.atlassian.net/browse/SUI-350)) ([@iamleigh](https://github.com/iamleigh))
  - Loading must be a state of the component. [#180](https://github.com/wpmudev/shared-ui-react/pull/180) ([SUI-347](https://incsub.atlassian.net/browse/SUI-347)) ([@iamleigh](https://github.com/iamleigh))

#### 🐛 Bug Fixes

- `react-pagination`
  - Parent wrapper breaks the component. [#209](https://github.com/wpmudev/shared-ui-react/pull/209) ([SUI-362](https://incsub.atlassian.net/browse/SUI-362)) ([@creador-dev](https://github.com/creador-dev))
  - Wrong package version for `builder`. [#198](https://github.com/wpmudev/shared-ui-react/pull/198) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
- `react-post`
  - Image keeps on loading when is empty or null. [#183](https://github.com/wpmudev/shared-ui-react/pull/183) ([SUI-343](https://incsub.atlassian.net/browse/SUI-343)) ([@creador-dev](https://github.com/creador-dev))
  - Wrong package version for `builder`. [#199](https://github.com/wpmudev/shared-ui-react/pull/199) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
  - Disabled state is missing. [#185](https://github.com/wpmudev/shared-ui-react/pull/185) ([SUI-345](https://incsub.atlassian.net/browse/SUI-345)) ([@creador-dev](https://github.com/creador-dev))
  - Post title HTML chars are rendered encoded on hovering. [#163](https://github.com/wpmudev/shared-ui-react/pull/163) ([SUI-264](https://incsub.atlassian.net/browse/SUI-264)) ([@creador-dev](https://github.com/creador-dev))
- `react-progress-bar`
  - Wrong package version for `builder`. [#200](https://github.com/wpmudev/shared-ui-react/pull/200) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
- `react-notifications`
  - Wrong package version for `builder`. [#197](https://github.com/wpmudev/shared-ui-react/pull/197) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
- `react-modal`
  - Wrong package version for `builder`. [#196](https://github.com/wpmudev/shared-ui-react/pull/196) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
- `react-input`
  - Wrong package version for `builder`. [#195](https://github.com/wpmudev/shared-ui-react/pull/195) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
- `react-dropdown`
  - Wrong package version for `builder`. [#194](https://github.com/wpmudev/shared-ui-react/pull/194) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
  - Missing `disabled` styles for options. [#186](https://github.com/wpmudev/shared-ui-react/pull/186) ([SUI-342](https://incsub.atlassian.net/browse/SUI-342)) ([@creador-dev](https://github.com/creador-dev))
- `react-button`
  - Wrong package version for `builder`. [#193](https://github.com/wpmudev/shared-ui-react/pull/193) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
- `react-box`
  - Wrong package version for `builder`. [#192](https://github.com/wpmudev/shared-ui-react/pull/192) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
- `core`
  - Wrong package version for `builder`. [#190](https://github.com/wpmudev/shared-ui-react/pull/190) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
  - Missing `ProgressBar` component. [#182](https://github.com/wpmudev/shared-ui-react/pull/182) ([SUI-351](https://incsub.atlassian.net/browse/SUI-351)) ([@iamleigh](https://github.com/iamleigh))
- `react-accordion`
  - Wrong package version for `builder`. [#191](https://github.com/wpmudev/shared-ui-react/pull/191) ([SUI-353](https://incsub.atlassian.net/browse/SUI-353)) ([@creador-dev](https://github.com/creador-dev))
  - Demo image is missing in the stories. [#174](https://github.com/wpmudev/shared-ui-react/pull/174) ([SUI-335](https://incsub.atlassian.net/browse/SUI-335)) ([@creador-dev](https://github.com/creador-dev))

#### 📝 Documentation

- `react-pagination`
  - Improve stories. [#213](https://github.com/wpmudev/shared-ui-react/pull/213) ([SUI-339](https://incsub.atlassian.net/browse/SUI-339)) ([@iamleigh](https://github.com/iamleigh))
- `react-accordion`
  - Improve stories. [#208](https://github.com/wpmudev/shared-ui-react/pull/208) ([SUI-352](https://incsub.atlassian.net/browse/SUI-352)) ([@iamleigh](https://github.com/iamleigh))
- `react-progress-bar`
  - Improve stories. [#176](https://github.com/wpmudev/shared-ui-react/pull/176) ([SUI-337](https://incsub.atlassian.net/browse/SUI-337)) ([@creador-dev](https://github.com/creador-dev))
- `react-input`
  - Improve stories. [#175](https://github.com/wpmudev/shared-ui-react/pull/175) ([SUI-336](https://incsub.atlassian.net/browse/SUI-336)) ([@iamleigh](https://github.com/iamleigh))
- `react-notifications`
  - Improve stories. [#179](https://github.com/wpmudev/shared-ui-react/pull/179) ([SUI-346](https://incsub.atlassian.net/browse/SUI-346)) ([@iamleigh](https://github.com/iamleigh))
- `react-post`
  - Improve stories. [#178](https://github.com/wpmudev/shared-ui-react/pull/178) ([SUI-340](https://incsub.atlassian.net/browse/SUI-340)) ([@iamleigh](https://github.com/iamleigh))
- `react-dropdown`
  - Improve stories. [#177](https://github.com/wpmudev/shared-ui-react/pull/177) ([SUI-338](https://incsub.atlassian.net/browse/SUI-338)) ([@iamleigh](https://github.com/iamleigh))
- `react-button-icon`
  - Improve stories. [#173](https://github.com/wpmudev/shared-ui-react/pull/173) ([SUI-334](https://incsub.atlassian.net/browse/SUI-334)) ([@iamleigh](https://github.com/iamleigh))
- `react-button`
  - Improve stories. [#172](https://github.com/wpmudev/shared-ui-react/pull/172) ([SUI-333](https://incsub.atlassian.net/browse/SUI-333)) ([@iamleigh](https://github.com/iamleigh))

#### 🏠 Internal

- Invalid hook call. [#204](https://github.com/wpmudev/shared-ui-react/pull/204) ([SUI-355](https://incsub.atlassian.net/browse/SUI-355)) ([@creador-dev](https://github.com/creador-dev))
- Set `react` dependency to latest version for all packages. [#171](https://github.com/wpmudev/shared-ui-react/pull/171) ([SUI-203](https://incsub.atlassian.net/browse/SUI-203)) ([@iamleigh](https://github.com/iamleigh))
- Rollup was trying to import and compile `react-dom` causing an error during build. [#166](https://github.com/wpmudev/shared-ui-react/pull/166) ([SUI-329](https://incsub.atlassian.net/browse/SUI-329)) ([@creador-dev](https://github.com/creador-dev))
- Upgrade `SUI` dependency to its latest version. [#160](https://github.com/wpmudev/shared-ui-react/pull/160) ([SUI-314](https://incsub.atlassian.net/browse/SUI-314)) ([@iamleigh](https://github.com/iamleigh))

#### Committers: 2

- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))
- Pawan Kumar ([@creador-dev](https://github.com/creador-dev))

## [1.8.0](https://github.com/wpmudev/shared-ui/compare/v1.7.0...v1.8.0) (2022-01-30)

#### ✨ New Features

- `react-progress-bar`
  - Create new component. [#139](https://github.com/wpmudev/shared-ui-react/pull/139) ([SUI-233](https://incsub.atlassian.net/browse/SUI-233)) ([@iamleigh](https://github.com/iamleigh))
- `react-button`
  - Allow icon to be placed at left or right of label. [#131](https://github.com/wpmudev/shared-ui-react/pull/131) ([SUI-219](https://incsub.atlassian.net/browse/SUI-219)) ([@Gowtham369](https://github.com/Gowtham369))
- `react-input`
  - Allow error class/state. [#132](https://github.com/wpmudev/shared-ui-react/pull/132) ([SUI-218](https://incsub.atlassian.net/browse/SUI-218)) ([@Gowtham369](https://github.com/Gowtham369))

#### 🚀 Improvements

- `react-modal`
  - Trap focus without external library. [#129](https://github.com/wpmudev/shared-ui-react/pull/129) ([SUI-197](https://incsub.atlassian.net/browse/SUI-197)) ([@iamleigh](https://github.com/iamleigh))

#### 🐛 Bug Fixes

- `react-post`
  - Misaligned description when `reading time` is missing. [#147](https://github.com/wpmudev/shared-ui-react/pull/147) ([SUI-257](https://incsub.atlassian.net/browse/SUI-257)) ([@iamleigh](https://github.com/iamleigh))

#### 🏠 Internal

- Update change log file to new structure. [#157](https://github.com/wpmudev/shared-ui-react/pull/157) ([SUI-271](https://incsub.atlassian.net/browse/SUI-271)) ([@iamleigh](https://github.com/iamleigh))
- Styled components can't be loaded multiple times. [#141](https://github.com/wpmudev/shared-ui-react/pull/141) ([SUI-272](https://incsub.atlassian.net/browse/SUI-272)) ([@iamleigh](https://github.com/iamleigh))
- Update change log labels. [#140](https://github.com/wpmudev/shared-ui-react/pull/140) ([SUI-270](https://incsub.atlassian.net/browse/SUI-270)) ([@iamleigh](https://github.com/iamleigh))

#### Committers: 2

- Gowtham Ravipati ([@Gowtham369](https://github.com/Gowtham369))
- Leighton Sapir ([@iamleigh](https://github.com/iamleigh))
