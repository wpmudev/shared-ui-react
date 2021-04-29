import React from "react";
import { ReactPagination } from "../lib/react-pagination";
export default {
  title: "Components/Pagination",
  component: ReactPagination,
};
const primary = (args) => {
  return <ReactPagination />;
};
primary.storyName = "Default";
export { primary };
