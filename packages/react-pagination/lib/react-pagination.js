import React, { useState } from "react";
import { ListOfPages } from "./ListOfPages";
import Filter from "./Filter";
import FilterForm from "./FilterForm";
import Results from "./Results";
import ActiveFilters from "./ActiveFilters";
export const ReactPagination = ({ ...props }) => {
  let [results, setResults] = useState(31); ///////////////////TOTAL NUMBER OF RESULTS FOUND
  let [num, setNum] = useState(458); //////////////////////////TOTAL NUMBER OF PAGES
  let [currentPage, setCurrentPage] = useState(375); //////////CURRENT PAGE THAT THE USER IS CURRENTLY ON
  let [resultsShow,setResultsShow] = useState(true) ///////////CONTROLS IF THE NUMBER OF FOUND RESULTS APPEARS 
  let [filterButton, setFilterButton] = useState(true); ///////CONTROLS IF THE FILTER BUTTON APPEARS ON SCREEN OR NOT
  let [openFilter, setOpenFilter] = useState(false); //////////CONTROLS IF THE FILTER OPTIONS APPEAR
  let [filtersActive, setFiltersActive] = useState([ //////////LIST OF ACTIVE FILTERS
    { filterName: "Filter One", id: 1 },
    { filterName: "Filter Two", id: 2 },
    { filterName: "Filter Three", id: 3 },
    { filterName: "Filter Four", id: 4 },
  ]);
  return (
    <>
      <div className="sui-pagination-wrap">
        {resultsShow ? <Results num={results} /> : null}
        <ListOfPages num={num} currentPage={currentPage} />
        {filterButton ? (
          <Filter setOpenFilter={setOpenFilter} openFilter={openFilter} />
        ) : null}
      </div>
      <FilterForm openFilter={openFilter} />
      <ActiveFilters
        filtersActive={filtersActive}
        setFiltersActive={setFiltersActive}
      />
    </>
  );
};
