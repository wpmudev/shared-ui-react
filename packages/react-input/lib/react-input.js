import React, { useState } from "react";

const Input = ({
  id,
  size,
  label,
  description,
  type = "text",
  errorToggle,
  errorText,
  ...props
}) => {
  const uniqueId = id && "" !== id ? id : props.property;

  let clazz = "sui-form-control";

  let classNm = !errorToggle
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
      {errorToggle ? (
        <span id="error-unique-id" className="sui-error-message" role="alert">
          {errorText}
        </span>
      ) : null}
      {description && <p className="sui-description">{description}</p>}
    </div>
  );
};

export { Input };
