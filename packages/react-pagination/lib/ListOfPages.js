import React, { useState } from "react";
import FirstPage from "./FirstPage";
import PreviousPage from "./PreviousPage";
import SuiActive from "./SuiActive";
import PageNum from "./PageNum";
import NextPage from "./NextPage";
import SkipToLast from "./SkipToLast";

const ListOfPages = ({ num, currentPage }) => {
  let [skip, setSkip] = useState(true); //////////////Sets skip to the last/first page buttons visible or invisible

  let firstPage, lastPage;
  if (skip) {
    firstPage = <FirstPage />;
    lastPage = <SkipToLast />;
  } else {
    firstPage = null;
    lastPage = null;
  }

  if (currentPage + 3 === num - 1) {
    return (
      <ul className="sui-pagination">
        {currentPage != 1 ? firstPage : null}
        {currentPage != 1 ? <PreviousPage /> : null}
        <SuiActive num={currentPage} />
        <PageNum num={currentPage + 1} />
        <PageNum num={currentPage + 2} />
        <PageNum num={num - 1} />
        <PageNum num={num} />
        <NextPage />
        {lastPage}
      </ul>
    );
  } else if (currentPage + 2 == num - 1) {
    return (
      <ul className="sui-pagination">
        {firstPage}
        <PreviousPage />
        <SuiActive num={currentPage} />
        <PageNum num={currentPage + 1} />
        <PageNum num={currentPage + 2} />
        <PageNum num={num} />
      </ul>
    );
  } else if (currentPage == num) {
    return (
      <ul className="sui-pagination">
        {firstPage}
        <PreviousPage />
        <PageNum num={1} />
        <PageNum num="..." />
        <PageNum num={currentPage - 1} />
        <SuiActive num={currentPage} />
      </ul>
    );
  } else if (currentPage === num - 1) {
    return (
      <ul className="sui-pagination">
        {firstPage}
        <PreviousPage />
        <PageNum num={1} />
        <PageNum num="..." />
        <PageNum num={currentPage - 1} />
        <SuiActive num={currentPage} />
        <PageNum num={currentPage + 1} />
        <NextPage />
        {lastPage}
      </ul>
    );
  } else if (currentPage === num - 2) {
    return (
      <ul className="sui-pagination">
        {firstPage}
        <PreviousPage />
        <PageNum num={1} />
        <PageNum num="..." />
        <PageNum num={currentPage} />
        <SuiActive num={currentPage + 1} />
        <PageNum num={currentPage + 2} />
        <NextPage />
        {lastPage}
      </ul>
    );
  } else if (num <= 9) {
    return (
      <ul className="sui-pagination">
        {firstPage}
        <PreviousPage />
        <SuiActive num={currentPage} />
        <PageNum num={currentPage + 1} />
        <PageNum num={currentPage + 2} />
        <PageNum num="..." />
        <PageNum num={num - 1} />
        <PageNum num={num} />
        <NextPage />
        {lastPage}
      </ul>
    );
  } else if (num >= 10) {
    let divide1 = parseInt(num / 2);
    let divide2;
    if (num >= 100) {
      divide2 = parseInt(String(num).slice(0, 2)) * 10;
    }
    if (
      divide1 <= currentPage ||
      divide1 <= currentPage + 1 ||
      divide1 <= currentPage + 2
    ) {
      return (
        <ul className="sui-pagination">
          {firstPage}
          <PreviousPage />
          <SuiActive num={currentPage} />
          <PageNum num={currentPage + 1} />
          <PageNum num={currentPage + 2} />
          <PageNum num="..." />
          <PageNum num={parseInt(divide2 - (divide2 - currentPage + 2) / 2)} />
          <PageNum num={divide2} />
          <NextPage />
          {lastPage}
        </ul>
      );
    } else if (divide2 <= currentPage) {
      return (
        <ul className="sui-pagination">
          {firstPage}
          <PreviousPage />
          <SuiActive num={currentPage} />
          <PageNum num={currentPage + 1} />
          <PageNum num={currentPage + 2} />
          <PageNum num="..." />
          <PageNum num={num} />
        </ul>
      );
    }

    return (
      <ul className="sui-pagination">
        {firstPage}
        <PreviousPage />
        <SuiActive num={currentPage} />
        <PageNum num={currentPage + 1} />
        <PageNum num={currentPage + 2} />
        <PageNum num="..." />
        <PageNum num={divide1} />
        <PageNum num={divide2} />
        <NextPage />
        {lastPage}
      </ul>
    );
  }
};

export { ListOfPages };
