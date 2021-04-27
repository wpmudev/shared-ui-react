import React, { useState } from "react";
import FirstPage from "./FirstPage";
import PreviousPage from "./PreviousPage";
import SuiActive from "./SuiActive";
import PageNum from "./PageNum";
import NextPage from "./NextPage";
import SkipToLast from "./SkipToLast";

let numberOfPages = [];
for (let i = 0; i <= num; i++) {
  numberOfPages.push(i);
}
console.log(numberOfPages);

const ListOfPages = ({ num }) => {
  if (num <= 5) {
    return (
      <ul className="sui-pagination">
        <FirstPage />

        <NextPage />
      </ul>
    );
  }

  return (
    <ul className="sui-pagination">
      <FirstPage />
      <PreviousPage />
      <SuiActive num="1" />
      <PageNum num="2" />
      <PageNum num="3" />
      <PageNum num="..." />
      <PageNum num="10" />
      <PageNum num="20" />
      <NextPage />
      <SkipToLast />
    </ul>
  );
};

export { ListOfPages };
