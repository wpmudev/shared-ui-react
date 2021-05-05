import React from "react";

export default function PreviousPage({
  one,
  two,
  setOne,
  setTwo,
  pagesLimit,
  setCurrentPage,
  setButtonNums,
  disabled,
}) {
  function prevHandle() {
    setTwo(two - pagesLimit);
    setOne(one - pagesLimit);
    setCurrentPage((prev) => prev - 1);
    setButtonNums((prev) => prev.map((num) => num - 1));
  }
  if (one != 0 && !one - pagesLimit < 0) {
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
