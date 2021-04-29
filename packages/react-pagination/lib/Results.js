import React, { useState, useEffect } from "react";

export default function Results({ num }) {
  let [result, setResult] = useState(num);
  useEffect(() => {
    if (num === "1") {
      setResult("1 result");
    } else {
      setResult(num + " results");
    }
  }, []);
  return <span className="sui-pagination-results">{result}</span>;
}
