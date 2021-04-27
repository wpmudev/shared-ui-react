import React from "react";

export default function NextPage() {
  return (
    <li>
      <a href="#" role="button" disabled>
        <span className="sui-icon-chevron-right" aria-hidden="true"></span>
        <span className="sui-screen-reader-text">Go to next page</span>
      </a>
    </li>
  );
}
