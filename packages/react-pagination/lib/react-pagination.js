import React, { useState } from "react";
import { ListOfPages } from "./ListOfPages";
import Filter from "./Filter";
import FilterForm from "./FilterForm";
import Results from "./Results";
import ActiveFilters from "./ActiveFilters";
export const ReactPagination = ({ ...props }) => {
  let [num, setNum] = useState(25);
  let [openFilter, setOpenFilter] = useState(false);
  let [filtersActive, setFiltersActive] = useState([
    { filterName: "Filter One", id: 1 },
    { filterName: "Filter Two", id: 2 },
    { filterName: "Filter Three", id: 3 },
    { filterName: "Filter Four", id: 4 },
  ]);
  return (
    <>
      <div className="sui-pagination-wrap">
        <Results num={num} />
        <ListOfPages num={num} />
        <Filter setOpenFilter={setOpenFilter} openFilter={openFilter} />
      </div>
      <FilterForm openFilter={openFilter} />
      <ActiveFilters
        filtersActive={filtersActive}
        setFiltersActive={setFiltersActive}
      />
    </>
  );
};
