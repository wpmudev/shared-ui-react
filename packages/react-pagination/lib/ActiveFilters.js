import React from "react";
import OneFilter from "./OneFilter";

export default function ActiveFilters({ filtersActive, setFiltersActive }) {
  let filters = filtersActive.map((fltr) => {
    return (
      <OneFilter
        name={fltr.filterName}
        id={fltr.id}
        setFiltersActive={setFiltersActive}
      />
    );
  });
  return (
    <div>
      <label className="sui-label">Active Filter(s)</label>
      <div className="sui-pagination-active-filters"> {filters}</div>
    </div>
  );
}
