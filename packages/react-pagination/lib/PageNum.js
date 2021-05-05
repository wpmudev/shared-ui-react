import React, { useEffect } from "react";

export default function PageNum({
  num,
  setOne,
  setTwo,
  pagesLimit,
  currentPage,
  setCurrentPage,
  setDotsClick,
  setLastPageVisible,
  pagesFound,
  buttonNums,
}) {
  function handleClick() {
    if (num != "...") {
      let n = num * pagesLimit;
      setTwo(n);
      setOne(n - pagesLimit);
      setCurrentPage(num);
    } else {
      setDotsClick(true);
    }
  }

  useEffect(() => {
    if (num === pagesFound) {
      setLastPageVisible(true);
    } else {
      setLastPageVisible(false);
    }
  }, [num]);

  return (
    <li>
      <a
        href="#"
        role="button"
        className={currentPage === num ? "sui-active" : null}
        onClick={handleClick}
      >
        {num}
      </a>
    </li>
  );
}
