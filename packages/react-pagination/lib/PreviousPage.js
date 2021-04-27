import React from "react";

export default function PreviousPage() {
  return (
    <li>
      <a href="#" role="button" disabled>
        <span className="sui-icon-chevron-left" aria-hidden="true"></span>
        <span className="sui-screen-reader-text">Go to previous page</span>
      </a>
    </li>
  );
}
