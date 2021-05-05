import React, { useState } from "react";

export default function LastNums({
  num,
  pagesFound,
  currentPage,
  setCurrentPage,
  setButtonNums,
  setNumClick,
  numClick,
  setOne,
  setTwo,
  id,
  setLastPageVisible,
  pagesLimit,
}) {
  function handleClick() {
    setCurrentPage(num);
    let n = num * pagesLimit;
    setTwo(n);
    setOne(n - pagesLimit);

    setButtonNums([num, num + 1, num + 2, num + 3, num + 4, num + 5]);
    if (id === 1) {
      setNumClick({ ...numClick, first: false });
    } else if (id === 2) {
      setNumClick({ ...numClick, second: false });
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
