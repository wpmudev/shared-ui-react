import React from "react";

export default function OneFilter({ name, setFiltersActive, id }) {
  function handleRemove(e) {
    setFiltersActive((prev) =>
      prev.filter((item) => {
        if (e.target.id != item.id) {
          return true;
        }
      })
    );
  }
  return (
    <span class="sui-active-filter">
      {name}
      <span
        role="button"
        class="sui-active-filter-remove"
        id={id}
        onClick={handleRemove}
      ></span>
    </span>
  );
}
