import React, { useState } from "react";
import FirstPage from "./FirstPage";
import PreviousPage from "./PreviousPage";
import PageNum from "./PageNum";
import NextPage from "./NextPage";
import SkipToLast from "./SkipToLast";
import LastNums from "./LastNums";

const ListOfPages = ({
  pagesFound,
  currentPage,
  setCurrentPage,
  sliceStart,
  sliceEnd,
  setSliceStart,
  setSliceEnd,
  pagesLimit,
  skipButtons,
}) => {
  const [buttonNums, setButtonNums] = useState([1, 2, 3, 4, 5, 6]);
  const [skipNumsClicked, setSkipNumsClicked] = useState({
    first: true,
    second: true,
  });
  const [threeDotsClicked, setThreeDotsClicked] = useState(false);
  const [lastPageVisible, setLastPageVisible] = useState(false);

  const previousPage =
    buttonNums[0] > 1 ? (
      <PreviousPage
        sliceStart={sliceStart}
        sliceEnd={sliceEnd}
        disabled={buttonNums[0] > 1 ? false : true}
        setSliceStart={setSliceStart}
        setSliceEnd={setSliceEnd}
        pagesLimit={pagesLimit}
        setCurrentPage={setCurrentPage}
        setButtonNums={setButtonNums}
      />
    ) : null;

  const nextPage =
    currentPage != pagesFound ? (
      <NextPage
        disabled={buttonNums[3] > pagesFound && lastPageVisible ? true : false}
        pagesFound={pagesFound}
        sliceStart={sliceStart}
        sliceEnd={sliceEnd}
        setSliceStart={setSliceStart}
        buttonNums={buttonNums}
        setSliceEnd={setSliceEnd}
        pagesLimit={pagesLimit}
        setCurrentPage={setCurrentPage}
        sliceEnd={sliceEnd}
        setButtonNums={setButtonNums}
      />
    ) : null;

  const firstPage =
    currentPage != 1 && skipButtons ? (
      <FirstPage
        disabled={buttonNums[3] > pagesFound && lastPageVisible ? true : false}
        pagesFound={pagesFound}
        disabled={buttonNums[0] > 1 ? false : true}
        sliceStart={sliceStart}
        sliceEnd={sliceEnd}
        setSliceStart={setSliceStart}
        buttonNums={buttonNums}
        setSliceEnd={setSliceEnd}
        pagesLimit={pagesLimit}
        setCurrentPage={setCurrentPage}
        sliceEnd={sliceEnd}
        setButtonNums={setButtonNums}
      />
    ) : null;

  const lastPage =
    currentPage != pagesFound && skipButtons ? (
      <SkipToLast
        disabled={buttonNums[3] > pagesFound && lastPageVisible ? true : false}
        pagesFound={pagesFound}
        sliceStart={sliceStart}
        sliceEnd={sliceEnd}
        setSliceStart={setSliceStart}
        buttonNums={buttonNums}
        setSliceEnd={setSliceEnd}
        pagesLimit={pagesLimit}
        setCurrentPage={setCurrentPage}
        sliceEnd={sliceEnd}
        setButtonNums={setButtonNums}
      />
    ) : null;

  function pageNum(arg) {
    return (
      <PageNum
        currentPage={currentPage}
        setLastPageVisible={setLastPageVisible}
        pagesFound={pagesFound}
        setThreeDotsClicked={setThreeDotsClicked}
        setCurrentPage={setCurrentPage}
        num={arg}
        setSliceStart={setSliceStart}
        setSliceEnd={setSliceEnd}
        pagesLimit={pagesLimit}
        buttonNums={buttonNums}
        setButtonNums={setButtonNums}
      />
    );
  }

  function lastNum(arg, idd) {
    return (
      <LastNums
        skipNumsClicked={skipNumsClicked}
        pagesFound={pagesFound}
        setLastPageVisible={setLastPageVisible}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        num={arg}
        id={idd}
        setButtonNums={setButtonNums}
        setSliceStart={setSliceStart}
        setSliceEnd={setSliceEnd}
        pagesLimit={pagesLimit}
        setSkipNumsClicked={setSkipNumsClicked}
      />
    );
  }

  let firstLastNum =
    skipNumsClicked.first === true &&
    !buttonNums.some((num) => num === parseInt((pagesFound / 3) * 2)) &&
    !buttonNums.some((num) => num > parseInt((pagesFound / 3) * 2))
      ? lastNum(parseInt((pagesFound / 3) * 2), 1)
      : null;
  let secondLastNum =
    skipNumsClicked.second === true &&
    !buttonNums.some((num) => num === parseInt((pagesFound / 5) * 4)) &&
    !buttonNums.some((num) => num > parseInt((pagesFound / 5) * 4))
      ? lastNum(parseInt((pagesFound / 5) * 4), 2)
      : null;

  let threeDotsButtons = threeDotsClicked ? (
    <>
      {buttonNums[3] > pagesFound ? null : pageNum(buttonNums[3])}
      {buttonNums[4] > pagesFound ? null : pageNum(buttonNums[4])}
      {buttonNums[5] > pagesFound ? null : pageNum(buttonNums[5])}
    </>
  ) : (
    pageNum("...")
  );

  if (currentPage === pagesFound) {
    threeDotsButtons = threeDotsClicked ? (
      <>
        {pageNum(currentPage - 4)}
        {pageNum(currentPage - 3)}
        {pageNum(currentPage - 2)}
      </>
    ) : (
      pageNum("...")
    );
  }

  if (currentPage === pagesFound - 1) {
    threeDotsButtons = threeDotsClicked ? (
      <>
        {pageNum(currentPage - 5)}
        {pageNum(currentPage - 4)}
        {pageNum(currentPage - 3)}
      </>
    ) : (
      pageNum("...")
    );
  }

  if (pagesFound === 5) {
    return (
      <ul className="sui-pagination">
        {pageNum(1)}
        {pageNum(2)}
        {pageNum(3)}
        {pageNum(4)}
        {pageNum(5)}
      </ul>
    );
  } else if (pagesFound === 4) {
    return (
      <ul className="sui-pagination">
        {pageNum(1)}
        {pageNum(2)}
        {pageNum(3)}
        {pageNum(4)}
      </ul>
    );
  } else if (pagesFound === 3) {
    return (
      <ul className="sui-pagination">
        {pageNum(1)}
        {pageNum(2)}
        {pageNum(3)}
      </ul>
    );
  } else if (pagesFound === 2) {
    return (
      <ul className="sui-pagination">
        {pageNum(1)}
        {pageNum(2)}
      </ul>
    );
  } else if (pagesFound === 1) {
    return <ul className="sui-pagination">{pageNum(1)}</ul>;
  } else if (pagesFound === 0) {
    return <ul className="sui-pagination">{pageNum("NO RESULTS FOUND")}</ul>;
  }

  if (currentPage === pagesFound) {
    return (
      <ul className="sui-pagination">
        {firstPage}
        {previousPage}
        {pageNum(1)}
        {threeDotsButtons}
        {pageNum(currentPage - 1)}
        {pageNum(currentPage)}
      </ul>
    );
  } else if (currentPage === pagesFound - 1) {
    return (
      <ul className="sui-pagination">
        {firstPage}
        {previousPage}
        {pageNum(1)}
        {threeDotsButtons}
        {pageNum(currentPage - 1)}
        {pageNum(currentPage)}
        {pageNum(currentPage + 1)}
        {firstLastNum}
        {secondLastNum}
      </ul>
    );
  }

  return (
    <ul className="sui-pagination">
      {firstPage}
      {previousPage}
      {pageNum(buttonNums[0])}
      {pageNum(buttonNums[1])}
      {pageNum(buttonNums[2])}
      {threeDotsButtons}
      {firstLastNum}
      {secondLastNum}
      {nextPage}
      {lastPage}
    </ul>
  );
};
export { ListOfPages };
