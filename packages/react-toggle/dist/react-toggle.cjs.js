'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var _excluded = ["id", "label", "hideLabel", "description", "hideDescription", "checked", "disabled", "children", "cbFunction"];
var Toggle = function Toggle(_ref) {
  var id = _ref.id,
      label = _ref.label,
      hideLabel = _ref.hideLabel,
      description = _ref.description,
      hideDescription = _ref.hideDescription,
      checked = _ref.checked,
      disabled = _ref.disabled,
      children = _ref.children,
      _ref$cbFunction = _ref.cbFunction,
      cbFunction = _ref$cbFunction === void 0 ? function (e) {} : _ref$cbFunction,
      args = _objectWithoutProperties(_ref, _excluded);

  var _useState = React.useState(checked),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var initialState = function initialState() {
    if (!isUndefined(checked, 'boolean')) {
      setState(checked);
    }
  };

  var changeState = function changeState(e) {
    setState(e.target.checked);
    cbFunction(e);
  }; // Set initial state.


  React.useEffect(function () {
    return initialState;
  }, []);
  var hasLabel = !isUndefined(label) ? true : false;
  var hasDescription = !isUndefined(description) ? true : false;
  var hasContent = !isUndefined(children) ? true : false;
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: id,
    className: "sui-toggle"
  }, /*#__PURE__*/React__default["default"].createElement("input", _extends({
    type: "checkbox",
    id: id
  }, hasLabel && {
    'aria-labelledby': id + '--label'
  }, hasDescription && {
    'aria-describedby': id + '--description'
  }, hasContent && {
    'aria-controls': id + '--content'
  }, true === disabled && {
    disabled: true
  }, {
    defaultChecked: state,
    onClick: function onClick(e) {
      return changeState(e);
    }
  }, args)), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-toggle-slider",
    "aria-hidden": "true"
  }), hasLabel && /*#__PURE__*/React__default["default"].createElement("span", {
    id: "".concat(id, "--label"),
    className: "sui-toggle-label".concat(!isUndefined(hideLabel) ? ' sui-screen-reader-text' : '')
  }, label), hasDescription && /*#__PURE__*/React__default["default"].createElement("span", {
    id: "".concat(id, "--description"),
    className: "sui-description".concat(true === hideDescription ? ' sui-screen-reader-text' : '')
  }, description)), hasContent && state && /*#__PURE__*/React__default["default"].createElement("div", {
    tabIndex: 0,
    id: "".concat(id, "--content"),
    className: "sui-toggle-content"
  }, children));
}; // Check if element is undefined.

var isUndefined = function isUndefined(element, type) {
  var isValid = 'undefined' !== typeof element;
  var isNotEmpty = '' !== element;

  if (element && isValid && isNotEmpty) {
    if (type === 'number') {
      if (!Number.isNaN(element)) {
        return false;
      }
    } else if (type === 'boolean') {
      if ('boolean' === typeof element) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};

exports.Toggle = Toggle;
