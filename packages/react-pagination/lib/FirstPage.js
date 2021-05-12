import React from "react";

export default function LastPage({
  setSliceStart,
  setSliceEnd,
  pagesLimit,
  setCurrentPage,
  setButtonNums,
  disabled,
}) {
  function clickHandle(e) {
    e.preventDefault();
    setSliceEnd(pagesLimit);
    setSliceStart(0);
    setCurrentPage(1);
    setButtonNums([1, 2, 3, 4, 5, 6]);
  }
  return (
    <li>
      <a href="#" role="button" disabled={disabled} onClick={clickHandle}>
        <span className="sui-icon-arrow-skip-back" aria-hidden="true"></span>
        <span className="sui-screen-reader-text">Go to first page</span>
      </a>
    </li>
  );
}
