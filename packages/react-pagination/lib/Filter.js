import React from "react";

export default function Filter({ setOpenFilter, openFilter }) {
  return (
    <button
      className="sui-button-icon sui-button-outlined sui-pagination-open-filter sui-tooltip"
      data-tooltip="Filter"
      onClick={() => setOpenFilter(!openFilter)}
    >
      <span className="sui-icon-filter" aria-hidden="true"></span>
      <span className="sui-screen-reader-text">
        Click to open filtering settings
      </span>
    </button>
  );
}
