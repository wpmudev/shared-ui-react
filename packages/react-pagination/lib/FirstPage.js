import React from "react";

<<<<<<< Updated upstream
export default function FirstPage() {
  return (
    <li>
      <a href="#" role="button" disabled>
=======
export default function LastPage({
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
    setTwo(pagesLimit);
    setOne(0);
    setCurrentPage(1);
    setButtonNums([1, 2, 3, 4, 5, 6]);
  }
  return (
    <li>
      <a href="#" role="button" disabled={disabled} onClick={clickHandle}>
>>>>>>> Stashed changes
        <span className="sui-icon-arrow-skip-back" aria-hidden="true"></span>
        <span className="sui-screen-reader-text">Go to first page</span>
      </a>
    </li>
  );
}
