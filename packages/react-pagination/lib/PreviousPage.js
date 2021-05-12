import React from "react";

export default function PreviousPage({
  sliceStart,
  sliceEnd,
  setSliceStart,
  setSliceEnd,
  pagesLimit,
  setCurrentPage,
  setButtonNums,
  disabled,
}) {
  function prevHandle(e) {
    e.preventDefault();
    setSliceEnd(sliceEnd - pagesLimit);
    setSliceStart(sliceStart - pagesLimit);
    setCurrentPage((prev) => prev - 1);
    setButtonNums((prev) => prev.map((num) => num - 1));
  }
  if (sliceStart != 0 && !sliceStart - pagesLimit < 0) {
    return (
      <li>
        <a href="#" role="button" onClick={prevHandle}>
          <span className="sui-icon-chevron-left" aria-hidden="true"></span>
          <span className="sui-screen-reader-text">Go to previous page</span>
        </a>
      </li>
    );
  } else {
    return (
      <li>
        <a href="#" role="button" disabled={disabled} onClick={prevHandle}>
          <span className="sui-icon-chevron-left" aria-hidden="true"></span>
          <span className="sui-screen-reader-text">Go to previous page</span>
        </a>
      </li>
    );
  }
}
