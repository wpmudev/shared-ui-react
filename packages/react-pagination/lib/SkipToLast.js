import React from "react";

export default function SkipToLast({
  one,
  two,
  setOne,
  setTwo,
  pagesLimit,
  setCurrentPage,
  setButtonNums,
  pagesFound,
  disabled,
}) {
  function clickHandle() {
    setTwo(pagesFound * 2);
    setOne(pagesFound * 2 - pagesLimit);
    setCurrentPage(pagesFound);
    setButtonNums([
      pagesFound - 5,
      pagesFound - 4,
      pagesFound - 3,
      pagesFound - 2,
      pagesFound - 1,
      pagesFound,
    ]);
  }

  return (
    <li>
      <a href="#" role="button" disabled={disabled} onClick={clickHandle}>
        <span className="sui-icon-arrow-skip-forward" aria-hidden="true"></span>
        <span className="sui-screen-reader-text">Go to last page</span>
      </a>
    </li>
  );
}
