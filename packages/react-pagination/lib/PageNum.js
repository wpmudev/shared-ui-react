import React, { useEffect } from "react";

export default function PageNum({
  num,
  setSliceStart,
  setSliceEnd,
  pagesLimit,
  currentPage,
  setCurrentPage,
  setThreeDotsClicked,
  setLastPageVisible,
  pagesFound,
  setButtonNums
}) {
  function handleClick(e) {
    e.preventDefault();
    if (num === 1){
      setButtonNums([1,2,3,4,5,6])
      const n = num * pagesLimit;
      setSliceEnd(n);
      setSliceStart(n - pagesLimit);
      setCurrentPage(num);
    } else if (num != "...") {
      const n = num * pagesLimit;
      setSliceEnd(n);
      setSliceStart(n - pagesLimit);
      setCurrentPage(num);
    } else {
      setThreeDotsClicked(true);
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
