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

var Input = function Input(_ref) {
  var id = _ref.id,
      size = _ref.size,
      label = _ref.label,
      description = _ref.description,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      props = _objectWithoutProperties(_ref, ["id", "size", "label", "description", "type"]);

  var uniqueId = id && '' !== id ? id : props.property;
  var clazz = 'sui-form-control';

  switch (size) {
    case 'sm':
    case 'small':
      clazz += ' sui-input-sm';
      break;

    case 'md':
    case 'medium':
      clazz += ' sui-input-md';
      break;
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-form-field"
  }, label && /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: uniqueId,
    className: "sui-label"
  }, label), /*#__PURE__*/React__default['default'].createElement("input", _extends({
    id: uniqueId,
    type: type,
    className: clazz
  }, props)), description && /*#__PURE__*/React__default['default'].createElement("p", {
    className: "sui-description"
  }, description));
};

exports.Input = Input;
