import React from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded = ["id", "label", "description", "type", "errorStatus", "errorDescription", "size", "fieldSize", "suffix", "prefix"];

var Input = function Input(_ref) {
  var id = _ref.id,
      label = _ref.label,
      description = _ref.description,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      errorStatus = _ref.errorStatus,
      errorDescription = _ref.errorDescription,
      size = _ref.size,
      fieldSize = _ref.fieldSize,
      suffix = _ref.suffix,
      prefix = _ref.prefix,
      props = _objectWithoutProperties(_ref, _excluded);

  var uniqueId = id && '' !== id ? id : props.property;
  var fieldClasses = 'sui-form-field';

  switch (fieldSize) {
    case 'sm':
    case 'small':
      fieldClasses += ' sui-input-sm';
      break;

    case 'md':
    case 'medium':
      fieldClasses += ' sui-input-md';
      break;
  }

  if (errorStatus) {
    fieldClasses += ' sui-form-field-error';
  }

  var inputClasses = 'sui-form-control';
  suffix && (inputClasses += ' sui-field-has-suffix');
  prefix && (inputClasses += ' sui-field-has-prefix');

  switch (size) {
    case 'sm':
    case 'small':
      inputClasses += ' sui-input-sm';
      break;

    case 'md':
    case 'medium':
      inputClasses += ' sui-input-md';
      break;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: fieldClasses
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uniqueId,
    className: "sui-label"
  }, label), prefix && /*#__PURE__*/React.createElement("span", {
    className: "sui-field-prefix"
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: uniqueId,
    type: type,
    className: inputClasses
  }, props)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "sui-field-suffix"
  }, suffix), errorStatus && errorDescription && /*#__PURE__*/React.createElement("div", {
    className: "sui-error-message"
  }, errorDescription), description && /*#__PURE__*/React.createElement("p", {
    className: "sui-description"
  }, description));
};

export { Input };
