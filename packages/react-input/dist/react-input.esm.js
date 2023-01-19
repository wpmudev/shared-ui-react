import React, { useState } from 'react';

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

function _objectWithoutPropertiesLoose$1(source, excluded) {
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

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

var _excluded$1 = ["label", "icon", "iconSize", "design", "color", "className", "loading"];

var ButtonIcon = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties(_ref, _excluded$1);

  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: 'relative'
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = "sui-button-icon ".concat(className || ''); // Set button color.

  switch (color) {
    case 'blue':
    case 'green':
    case 'red':
    case 'orange':
    case 'purple':
    case 'yellow':
    case 'white':
      className += ' sui-button-' + color;
      break;

    case 'gray':
    default:
      className += '';
      break;
  } // Set button style.


  switch (design) {
    case 'ghost':
    case 'outlined':
      className += ' sui-button-' + design;
      break;

    case 'solid':
    default:
      className += '';
      break;
  } // Set loading class.


  if (loading) {
    className += ' sui-button-onload';
  }

  var htmlTag = props.href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var _excluded = ["id", "label", "description", "type", "errorStatus", "errorDescription", "size", "fieldSize", "suffix", "prefix"],
    _excluded2 = ["id", "label", "description", "type", "errorStatus", "errorDescription", "size", "fieldSize", "suffix", "prefix"];

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
      props = _objectWithoutProperties$1(_ref, _excluded);

  var uniqueId = id && '' !== id ? id : props.property;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      showIcon = _useState2[0],
      setShowIcon = _useState2[1];

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
  }, prefix), type === 'password' ? /*#__PURE__*/React.createElement("div", {
    className: "sui-with-button sui-with-button-icon"
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uniqueId,
    type: showIcon ? type : 'text',
    className: inputClasses
  }, props)), /*#__PURE__*/React.createElement(ButtonIcon, {
    icon: showIcon ? "eye" : "eye-hide",
    label: showIcon ? "Show password" : "Hide password",
    onClick: function onClick() {
      setShowIcon(!showIcon);
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({
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

var InputWithRef = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var id = _ref2.id,
      label = _ref2.label,
      description = _ref2.description,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'text' : _ref2$type,
      errorStatus = _ref2.errorStatus,
      errorDescription = _ref2.errorDescription,
      size = _ref2.size,
      fieldSize = _ref2.fieldSize,
      suffix = _ref2.suffix,
      prefix = _ref2.prefix,
      props = _objectWithoutProperties$1(_ref2, _excluded2);

  var uniqueId = id && '' !== id ? id : props.property;

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showIcon = _useState4[0],
      setShowIcon = _useState4[1];

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
    "class": "sui-field-prefix"
  }, prefix), type === 'password' ? /*#__PURE__*/React.createElement("div", {
    className: "sui-with-button sui-with-button-icon"
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uniqueId,
    type: showIcon ? type : 'text',
    className: inputClasses,
    ref: ref
  }, props)), /*#__PURE__*/React.createElement(ButtonIcon, {
    icon: showIcon ? "eye" : "eye-hide",
    label: showIcon ? "Show password" : "Hide password",
    onClick: function onClick() {
      setShowIcon(!showIcon);
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({
    id: uniqueId,
    type: type,
    className: inputClasses,
    ref: ref
  }, props)), suffix && /*#__PURE__*/React.createElement("span", {
    "class": "sui-field-suffix"
  }, suffix), errorStatus && errorDescription && /*#__PURE__*/React.createElement("div", {
    className: "sui-error-message"
  }, errorDescription), description && /*#__PURE__*/React.createElement("p", {
    className: "sui-description"
  }, description));
});

export { Input, InputWithRef };
