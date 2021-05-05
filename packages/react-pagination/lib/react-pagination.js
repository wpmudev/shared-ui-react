import React, { useState } from "react";
import { ListOfPages } from "./ListOfPages";
import Filter from "./Filter";
import FilterForm from "./FilterForm";
import Results from "./Results";
import ActiveFilters from "./ActiveFilters";
<<<<<<< Updated upstream
export const ReactPagination = ({ ...props }) => {
  let [results, setResults] = useState(31); ///////////////////TOTAL NUMBER OF RESULTS FOUND
  let [num, setNum] = useState(458); //////////////////////////TOTAL NUMBER OF PAGES
  let [currentPage, setCurrentPage] = useState(375); //////////CURRENT PAGE THAT THE USER IS CURRENTLY ON
  let [resultsShow,setResultsShow] = useState(true) ///////////CONTROLS IF THE NUMBER OF FOUND RESULTS APPEARS 
  let [filterButton, setFilterButton] = useState(true); ///////CONTROLS IF THE FILTER BUTTON APPEARS ON SCREEN OR NOT
  let [openFilter, setOpenFilter] = useState(false); //////////CONTROLS IF THE FILTER OPTIONS APPEAR
  let [filtersActive, setFiltersActive] = useState([ //////////LIST OF ACTIVE FILTERS
=======
export const ReactPagination = ({
  pagesLimit = 20,
  resultsShow,
  skipButtons,
  ...props
}) => {
  let pagesFound = parseInt(props.children.length / pagesLimit);
  let [one, setOne] = useState(0);
  let [two, setTwo] = useState(pagesLimit);
  let [currentPage, setCurrentPage] = useState(1);
  let [filterButton, setFilterButton] = useState(false);
  let [openFilter, setOpenFilter] = useState(false); //////////CONTROLS IF THE FILTER OPTIONS APPEAR
  let [filtersActive, setFiltersActive] = useState([
    //////////LIST OF ACTIVE FILTERS
>>>>>>> Stashed changes
    { filterName: "Filter One", id: 1 },
    { filterName: "Filter Two", id: 2 },
    { filterName: "Filter Three", id: 3 },
    { filterName: "Filter Four", id: 4 },
  ]);
<<<<<<< Updated upstream
  return (
    <>
      <div className="sui-pagination-wrap">
        {resultsShow ? <Results num={results} /> : null}
        <ListOfPages num={num} currentPage={currentPage} />
=======

  return (
    <>
      <div>{props.children.slice(one, two)}</div>
      <div className="sui-pagination-wrap">
        {resultsShow ? <Results num={pagesFound} /> : null}
        <ListOfPages
          pagesFound={pagesFound}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          one={one}
          two={two}
          setOne={setOne}
          skipButtons={skipButtons}
          setTwo={setTwo}
          pagesLimit={pagesLimit}
        />
>>>>>>> Stashed changes
        {filterButton ? (
          <Filter setOpenFilter={setOpenFilter} openFilter={openFilter} />
        ) : null}
      </div>
      <FilterForm openFilter={openFilter} />
<<<<<<< Updated upstream
      <ActiveFilters
        filtersActive={filtersActive}
        setFiltersActive={setFiltersActive}
      />
=======
      {/* <ActiveFilters                /////////////WORK IN PROGRESS FOR ACTIVE FILTERS
        filtersActive={filtersActive}
        setFiltersActive={setFiltersActive}
      /> */}
>>>>>>> Stashed changes
    </>
  );
};
