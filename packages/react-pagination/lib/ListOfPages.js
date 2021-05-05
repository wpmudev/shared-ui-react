import React, { useState, useEffect } from "react";
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
  one,
  two,
  setOne,
  setTwo,
  pagesLimit,
  skipButtons,
}) => {
  let [buttonNums, setButtonNums] = useState([1, 2, 3, 4, 5, 6]);
  let [numClick, setNumClick] = useState({ first: true, second: true });
  let [dotsClick, setDotsClick] = useState(false);
  let [lastPageVisible, setLastPageVisible] = useState(false);

  let previousPage =
    buttonNums[0] > 1 ? (
      <PreviousPage
        one={one}
        two={two}
        disabled={buttonNums[0] > 1 ? false : true}
        setOne={setOne}
        setTwo={setTwo}
        pagesLimit={pagesLimit}
        setCurrentPage={setCurrentPage}
        setButtonNums={setButtonNums}
      />
    ) : null;

  let nextPage =
    currentPage != pagesFound ? (
      <NextPage
        disabled={buttonNums[3] > pagesFound && lastPageVisible ? true : false}
        pagesFound={pagesFound}
        one={one}
        two={two}
        setOne={setOne}
        buttonNums={buttonNums}
        setTwo={setTwo}
        pagesLimit={pagesLimit}
        setCurrentPage={setCurrentPage}
        two={two}
        setButtonNums={setButtonNums}
      />
    ) : null;

  let firstPage =
    currentPage != 1 && !skipButtons ? (
      <FirstPage
        disabled={buttonNums[3] > pagesFound && lastPageVisible ? true : false}
        pagesFound={pagesFound}
        disabled={buttonNums[0] > 1 ? false : true}
        one={one}
        two={two}
        setOne={setOne}
        buttonNums={buttonNums}
        setTwo={setTwo}
        pagesLimit={pagesLimit}
        setCurrentPage={setCurrentPage}
        two={two}
        setButtonNums={setButtonNums}
      />
    ) : null;

  let lastPage =
    currentPage != pagesFound && skipButtons ? (
      <SkipToLast
        disabled={buttonNums[3] > pagesFound && lastPageVisible ? true : false}
        pagesFound={pagesFound}
        one={one}
        two={two}
        setOne={setOne}
        buttonNums={buttonNums}
        setTwo={setTwo}
        pagesLimit={pagesLimit}
        setCurrentPage={setCurrentPage}
        two={two}
        setButtonNums={setButtonNums}
      />
    ) : null;

  function pageNum(arg) {
    return (
      <PageNum
        currentPage={currentPage}
        setLastPageVisible={setLastPageVisible}
        pagesFound={pagesFound}
        setDotsClick={setDotsClick}
        setCurrentPage={setCurrentPage}
        num={arg}
        setOne={setOne}
        setTwo={setTwo}
        pagesLimit={pagesLimit}
        buttonNums={buttonNums}
        setButtonNums={setButtonNums}
      />
    );
  }

  function lastNum(arg, idd) {
    return (
      <LastNums
        numClick={numClick}
        pagesFound={pagesFound}
        setLastPageVisible={setLastPageVisible}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        num={arg}
        id={idd}
        setButtonNums={setButtonNums}
        setOne={setOne}
        setTwo={setTwo}
        pagesLimit={pagesLimit}
        setNumClick={setNumClick}
      />
    );
  }

  let firstLastNum =
    numClick.first === true &&
    !buttonNums.some((num) => num === parseInt((pagesFound / 3) * 2)) &&
    !buttonNums.some((num) => num > parseInt((pagesFound / 3) * 2))
      ? lastNum(parseInt((pagesFound / 3) * 2), 1)
      : null;
  let secondLastNum =
    numClick.second === true &&
    !buttonNums.some((num) => num === parseInt((pagesFound / 5) * 4)) &&
    !buttonNums.some((num) => num > parseInt((pagesFound / 5) * 4))
      ? lastNum(parseInt((pagesFound / 5) * 4), 2)
      : null;

  let threeDotsButtons = dotsClick ? (
    <>
      {buttonNums[3] > pagesFound ? null : pageNum(buttonNums[3])}
      {buttonNums[4] > pagesFound ? null : pageNum(buttonNums[4])}
      {buttonNums[5] > pagesFound ? null : pageNum(buttonNums[5])}
    </>
  ) : (
    pageNum("...")
  );

  if (currentPage === pagesFound) {
    threeDotsButtons = dotsClick ? (
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
    threeDotsButtons = dotsClick ? (
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
