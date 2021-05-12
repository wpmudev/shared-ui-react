import React, { useState } from "react";

export default function LastNums({
  num,
  pagesFound,
  currentPage,
  setCurrentPage,
  setButtonNums,
  setSkipNumsClicked,
  skipNumsClicked,
  setSliceStart,
  setSliceEnd,
  id,
  setLastPageVisible,
  pagesLimit,
}) {
  function handleClick(e) {
    e.preventDefault();
    setCurrentPage(num);
    const n = num * pagesLimit;
    setSliceEnd(n);
    setSliceStart(n - pagesLimit);

    setButtonNums([num, num + 1, num + 2, num + 3, num + 4, num + 5]);
    if (id === 1) {
      setSkipNumsClicked({ ...skipNumsClicked, first: false });
    } else if (id === 2) {
      setSkipNumsClicked({ ...skipNumsClicked, second: false });
    }

    if (
      num === pagesFound ||
      num + 1 === pagesFound ||
      num + 2 === pagesFound ||
      num + 3 === pagesFound ||
      num + 4 === pagesFound ||
      num + 5 === pagesFound
    ) {
      setLastPageVisible((prev) => !prev);
    }
  }
  return (
    <li className={currentPage === num ? "sui-active" : null}>
      <a href="#" role="button" onClick={handleClick}>
        {num}
      </a>
    </li>
  );
}
