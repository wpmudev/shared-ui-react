import React from "react";
import Search from "./Search";
import Select from "./Select";

export default function FilterForm({ openFilter }) {
  if (openFilter) {
    return (
      <div className="sui-pagination-filter sui-open">
        <Search />
        <div className="sui-row">
          <Select
            options={["Any", "Administrator", "Editor", "Writer"]}
            label="Use role assigned for editing"
          />
          <Select options={["Creation date", "Module type"]} label="Sort by" />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
