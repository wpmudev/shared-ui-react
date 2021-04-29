# `@wpmudev/react-pagination`

    This package consitst of three main parts that are placed inside main component which is react-pagination.js:
        -1. ListOfPages.js
        -2. FilterForm.js
        -3. ActiveFilters.js
    The rest of the components are just elements for displaying.

## Usage

### react-pagination.js

    Inside this main component, there are variables declared that control various functinalities of this package or store data. Variables are declared using useState hook.

#### resultsShow / setResultsShow

    This variable controls whether the number of the results found are displayed on the screen or not.

#### filterButton / setFilterButton

    This variable controls whether the filter button that toggles filter field is displayed on the screen or not.

#### openFilter / setOpenFilter

    This variable controls if the filter field is opened or closed. setOpenFilter is passed to the Filter.js component
     and it's state is changed when the user clicks.

#### filtersActive / setFiltersActive

    This is an array of objects variable containing the name of the filter and it's id and it stores all selected
    filters inside of if.

#### results / setResults

    This variable stores inside the number of results found.

#### num / setNum

    This variable is the number of pages available and that are going to be paginated. It's value is passed to ListOfPages.js component that does the pagination based on the number.

#### currentPage / setCurrentPage

    This variable stores the current page that the user is currently on and is also passed to ListOfPages.js.

### ListOfPages.js

    This is a component that controls pagination of the given number of pages. This component works with thow parameters which are passed as props from the parent rect-pagination.js component. Component has a functionality inside of it to work with different scenarios when it comes to pagination. Inside of it, there is a skip variable that controls whether the skip to the last and skip to the second page buttons appear or not.

### FilterForm.js

    Inside of this component are search bar with two select fields with the hardcoded values options inside.
