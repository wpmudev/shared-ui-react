import React from "react";

export default function NextPage({
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
  function nextHandle() {
    setTwo(two + pagesLimit);
    setOne(one + pagesLimit);
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
