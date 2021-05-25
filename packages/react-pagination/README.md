# @wpmudev/react-pagination

## Usage

### Main component of this package is `react-pagination.js` . Inide of it is a component `ReactPagination` that wraps around content that need to be paginated. Component accepts three arguments:

1. `pagesLimit` which contorls how many items per page are shown. The default value of this variable is 20.
2. `resultsShow` which controls whether the results are shown on the display or not
3. `skipButtons` which controls whether the skip to first and last page buttons appear or not.

## Example

```
<ReactPagination pagesLimit=2 resultsShow=true skipButton=false>
    <Article />
    <Article />
    <Article />
    <Article />
</ReactPaginaton>
```
