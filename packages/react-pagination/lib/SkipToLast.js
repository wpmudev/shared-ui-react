import React from "react";

export default function SkipToLast() {
  return (
    <li>
      <a href="#" role="button" disabled>
        <span className="sui-icon-arrow-skip-forward" aria-hidden="true"></span>
        <span className="sui-screen-reader-text">Go to last page</span>
      </a>
    </li>
  );
}
