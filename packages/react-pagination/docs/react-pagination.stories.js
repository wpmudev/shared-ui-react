import React from "react";
import { ReactPagination } from "../lib/react-pagination";

function articles(key) {
  return (
    <div key={key} style={{display:"flex",justifyContent:"space-between",height:"4em",borderBottom:"1px solid lightgray"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <span className="sui-icon-check-tick" aria-hidden="true"></span>
      <h4>Article {key}</h4>
      </div>
      <p>Some placeholder text</p>
    </div>
  );
}

let items = [];
for (let i = 1; i <= 381; i++) {
  items.push(articles(i));
}
export default {
  title: "Components/Pagination",
  component: ReactPagination,
};
const primary = (args) => {
  return <ReactPagination {...args}>{items}</ReactPagination>;
};
primary.storyName = "Default";

primary.argTypes = {
  pagesLimit: {
    type: "number",
    min: 1,
  },
  skipButtons: {
    type: "boolean",
  },
  resultsShow: {
    type: "boolean",
  },
};

export { primary };
