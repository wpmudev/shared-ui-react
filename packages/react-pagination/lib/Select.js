import React from "react";

export default function Select({ options, label }) {
  let selectOptions = options.map((option) => {
    return <option>{option}</option>;
  });
  return (
    <div className="sui-form-field sui-col">
      <label className="sui-label">{label}</label>

      <select id="select-single-default">{selectOptions}</select>
    </div>
  );
}
