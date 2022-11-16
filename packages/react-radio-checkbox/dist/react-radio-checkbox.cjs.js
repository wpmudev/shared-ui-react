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

var _excluded = ["type", "label", "labelId", "id", "name", "image", "defaultChecked", "disabled"],
    _excluded2 = ["type", "options"];

var RadioCheckboxInput = function RadioCheckboxInput(_ref) {
  var type = _ref.type,
      label = _ref.label,
      labelId = _ref.labelId,
      id = _ref.id,
      name = _ref.name,
      image = _ref.image,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  var mainClasses = ["sui-".concat(type)];

  if (props.size === 'small') {
    mainClasses.push("sui-".concat(type, "-sm"));
  }

  if (props.stacked) {
    mainClasses.push("sui-".concat(type, "-stacked"));
  }

  return image ? /*#__PURE__*/React__default["default"].createElement("label", {
    className: "sui-".concat(type, "-image"),
    htmlFor: id
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: image.src,
    srcSet: image.srcset,
    alt: image.alt
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: mainClasses.join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("input", _extends({
    id: id,
    type: type,
    name: name,
    "aria-labelledby": labelId,
    disabled: disabled,
    defaultChecked: defaultChecked
  }, props)), /*#__PURE__*/React__default["default"].createElement("span", {
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React__default["default"].createElement("span", {
    id: labelId
  }, label))) : /*#__PURE__*/React__default["default"].createElement("label", {
    className: mainClasses.join(' '),
    htmlFor: id
  }, /*#__PURE__*/React__default["default"].createElement("input", _extends({
    id: id,
    type: type,
    name: name,
    "aria-labelledby": labelId,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, props)), /*#__PURE__*/React__default["default"].createElement("span", {
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React__default["default"].createElement("span", {
    id: labelId
  }, label));
};

var RadioCheckboxGroup = function RadioCheckboxGroup(_ref2) {
  var type = _ref2.type,
      options = _ref2.options,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-form-field",
    role: 'radio' === type ? 'radiogroup' : 'group'
  }, options === null || options === void 0 ? void 0 : options.map(function (option, index) {
    return option.image ? /*#__PURE__*/React__default["default"].createElement(RadioCheckboxInput, _extends({
      key: index,
      type: type,
      label: option.label,
      labelId: option.labelId,
      id: option.id,
      name: option.name,
      image: option.image,
      defaultChecked: option.defaultChecked,
      disabled: option.disabled
    }, props)) : /*#__PURE__*/React__default["default"].createElement(RadioCheckboxInput, _extends({
      key: index,
      type: type,
      label: option.label,
      labelId: option.labelId,
      id: option.id,
      name: option.name,
      defaultChecked: option.defaultChecked,
      disabled: option.disabled
    }, props));
  }));
};

exports.RadioCheckboxGroup = RadioCheckboxGroup;
exports.RadioCheckboxInput = RadioCheckboxInput;
