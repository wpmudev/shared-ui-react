import React from "react";

export default function NextPage({
  sliceStart,
  sliceEnd,
  setSliceStart,
  setSliceEnd,
  pagesLimit,
  setCurrentPage,
  setButtonNums,
  disabled,
}) {
  function nextHandle(e) {
    e.preventDefault();
    setSliceEnd(sliceEnd + pagesLimit);
    setSliceStart(sliceStart + pagesLimit);
    setCurrentPage((prev) => prev + 1);
    setButtonNums((prev) => prev.map((num) => num + 1));
  }
  return (
    <li>
      <a href="#" role="button" disabled={disabled} onClick={nextHandle}>
        <span className="sui-icon-chevron-right" aria-hidden="true"></span>
        <span className="sui-screen-reader-text">Go to next page</span>
      </a>
    </li>
  );
}
