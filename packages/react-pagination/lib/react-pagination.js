import React, { useState } from "react";
import { ListOfPages } from "./ListOfPages";
import Results from "./Results";

export const ReactPagination = ({
  pagesLimit = 20,
  resultsShow,
  skipButtons,
  ...props
}) => {
  const pagesFound = parseInt(props.children.length / pagesLimit);
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(pagesLimit);
  const [currentPage, setCurrentPage] = useState(1);


  return (
    <>
      <div className="sui-pagination-wrap">
        {resultsShow ? <Results num={pagesFound} /> : null}
        <ListOfPages
          pagesFound={pagesFound}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          sliceStart={sliceStart}
          sliceEnd={sliceEnd}
          setSliceStart={setSliceStart}
          skipButtons={skipButtons}
          setSliceEnd={setSliceEnd}
          pagesLimit={pagesLimit}
        />
      </div>
      <div>{props.children.slice(sliceStart, sliceEnd)}</div>
    </>
  );
};
