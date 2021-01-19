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

var Box = function Box(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-box"
  }, props), children);
};
var BoxTitle = function BoxTitle(_ref2) {
  var icon = _ref2.icon,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["icon", "children"]);

  return /*#__PURE__*/React.createElement("h3", _extends({
    className: "sui-box-title"
  }, props), icon && '' !== icon && /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-".concat(icon, " sui-md"),
    "aria-hidden": "true"
  }), children);
};
var BoxHeader = function BoxHeader(_ref3) {
  var title = _ref3.title,
      titleIcon = _ref3.titleIcon,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["title", "titleIcon", "children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-box-header"
  }, props), title && '' !== title && /*#__PURE__*/React.createElement(BoxTitle, {
    icon: titleIcon
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "sui-actions-right"
  }, children));
};
var BoxBody = function BoxBody(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-box-body"
  }, props), children);
};
var BoxFooter = function BoxFooter(_ref5) {
  var children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-box-footer"
  }, props), children);
};
var BoxSection = function BoxSection(_ref6) {
  var title = _ref6.title,
      description = _ref6.description,
      children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["title", "description", "children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-box-settings-row"
  }, props), (title && '' !== title || description && '' !== description) && /*#__PURE__*/React.createElement("div", {
    className: "sui-box-settings-col-1"
  }, '' !== title && /*#__PURE__*/React.createElement("h4", {
    className: "sui-settings-label"
  }, title), '' !== description && /*#__PURE__*/React.createElement("p", {
    className: "sui-description"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "sui-box-settings-col-2"
  }, children));
};

export { Box, BoxBody, BoxFooter, BoxHeader, BoxSection, BoxTitle };
