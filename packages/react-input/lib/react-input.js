import React, { useState } from "react";

const Input = ({ id, size, label, description, type = "text", ...props }) => {
  const uniqueId = id && "" !== id ? id : props.property;

  let clazz = "sui-form-control";
  let [error, setError] = useState(false); ////////////////////////////////Contols whether the error state is on or off
  let [errorText, setErrorText] = useState("Enter error message here."); //Error message that displays bellow the input
  let classNm = !error
    ? "sui-form-field"
    : "sui-form-field sui-form-field-error";

  switch (size) {
    case "sm":
    case "small":
      clazz += " sui-input-sm";
      break;

    case "md":
    case "medium":
      clazz += " sui-input-md";
      break;
  }

  return (
    <div className={classNm}>
      {label && (
        <label htmlFor={uniqueId} className="sui-label">
          {label}
        </label>
      )}

      <input id={uniqueId} type={type} className={clazz} {...props} />
      {error ? (
        <span id="error-unique-id" className="sui-error-message" role="alert">
          {errorText}
        </span>
      ) : null}
      {description && <p className="sui-description">{description}</p>}
    </div>
  );
};

export { Input };
