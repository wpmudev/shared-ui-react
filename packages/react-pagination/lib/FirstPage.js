import React from "react";

export default function FirstPage() {
  return (
    <li>
      <a href="#" role="button" disabled>
        <span className="sui-icon-arrow-skip-back" aria-hidden="true"></span>
        <span className="sui-screen-reader-text">Go to first page</span>
      </a>
    </li>
  );
}
