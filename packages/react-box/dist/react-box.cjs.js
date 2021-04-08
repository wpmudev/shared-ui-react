'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\npadding: ", "px ", "px;\nborder: 0 solid #E6E6E6;\nborder-bottom-width: ", "px;\n\n@media ", " {\n\tdisplay: ", ";\n\t", "\n\tpadding: ", "px ", "px;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var utils = {
  gutter: 30,
  gutter_md: 20
};
var screen = {
  mobile: 480,
  tablet: 783,
  laptop: 1200,
  desktop: 1500
};
var device = {
  mobile: "(min-width: ".concat(screen.mobile, "px)"),
  tablet: "(min-width: ".concat(screen.tablet, "px)"),
  laptop: "(min-width: ".concat(screen.laptop, "px)"),
  desktop: "(min-width: ".concat(screen.desktop, "px)")
};
var Box = function Box(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box ".concat(className) : 'sui-box'
  }, props), children);
};
var BoxTitle = function BoxTitle(_ref2) {
  var icon = _ref2.icon,
      tagLabel = _ref2.tagLabel,
      tagColor = _ref2.tagColor,
      tagSize = _ref2.tagSize,
      tagDesign = _ref2.tagDesign,
      className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["icon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"]);

  var tagClass = 'sui-tag';

  switch (tagColor) {
    case 'red':
    case 'yellow':
    case 'green':
    case 'blue':
    case 'purple':
      tagClass += ' sui-tag-' + tagColor;
      break;
  }

  switch (tagSize) {
    case 'sm':
    case 'small':
      tagClass += ' sui-tag-sm';
      break;
  }

  switch (tagDesign) {
    case 'outlined':
      tagClass += ' sui-tag-ghost';
      break;
  }

  return /*#__PURE__*/React__default['default'].createElement("h3", _extends({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box-title ".concat(className) : 'sui-box-title'
  }, props), icon && "" !== icon && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon, " sui-md"),
    "aria-hidden": "true"
  }), children, tagLabel && '' !== tagLabel && /*#__PURE__*/React__default['default'].createElement("span", {
    className: tagClass,
    style: {
      marginLeft: 10
    }
  }, tagLabel));
};
var Header = styled__default['default'].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject(), utils.gutter_md / 2, utils.gutter_md, function (props) {
  return props.border || '1';
}, device.tablet, function (props) {
  return props.stacked ? 'block' : 'flex';
}, function (props) {
  return props.stacked ? '' : 'flex-wrap: row nowrap;';
}, utils.gutter / 2, utils.gutter);
var BoxHeader = function BoxHeader(_ref3) {
  var title = _ref3.title,
      titleIcon = _ref3.titleIcon,
      titleTagLabel = _ref3.titleTagLabel,
      titleTagColor = _ref3.titleTagColor,
      titleTagSize = _ref3.titleTagSize,
      titleTagDesign = _ref3.titleTagDesign,
      className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["title", "titleIcon", "titleTagLabel", "titleTagColor", "titleTagSize", "titleTagDesign", "className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Header, props, title && '' !== title && /*#__PURE__*/React__default['default'].createElement(BoxTitle, {
    icon: titleIcon,
    tagLabel: titleTagLabel,
    tagColor: titleTagColor,
    tagSize: titleTagSize,
    tagDesign: titleTagDesign
  }, title), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-actions-right"
  }, children));
};
var BoxBody = function BoxBody(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box-body ".concat(className) : 'sui-box-body'
  }, props), children);
};
var BoxFooter = function BoxFooter(_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box-footer ".concat(className) : 'sui-box-footer'
  }, props), children);
};
var BoxSection = function BoxSection(_ref6) {
  var title = _ref6.title,
      description = _ref6.description,
      className = _ref6.className,
      children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["title", "description", "className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box-settings-row ".concat(className) : 'sui-box-settings-row'
  }, props), (title && "" !== title || description && "" !== description) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-box-settings-col-1"
  }, "" !== title && /*#__PURE__*/React__default['default'].createElement("h4", {
    className: "sui-settings-label"
  }, title), "" !== description && /*#__PURE__*/React__default['default'].createElement("p", {
    className: "sui-description"
  }, description)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-box-settings-col-2"
  }, children));
};

exports.Box = Box;
exports.BoxBody = BoxBody;
exports.BoxFooter = BoxFooter;
exports.BoxHeader = BoxHeader;
exports.BoxSection = BoxSection;
exports.BoxTitle = BoxTitle;
