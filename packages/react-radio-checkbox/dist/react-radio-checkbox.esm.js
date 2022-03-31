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

var RadioCheckboxInput = function RadioCheckboxInput(_ref) {
  var type = _ref.type,
      label = _ref.label,
      labelId = _ref.labelId,
      mainClasses = _ref.mainClasses,
      id = _ref.id,
      name = _ref.name,
      image = _ref.image,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["type", "label", "labelId", "mainClasses", "id", "name", "image", "defaultChecked", "disabled"]);

  return image ? /*#__PURE__*/React.createElement("label", {
    className: "sui-".concat(type, "-image"),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("img", {
    src: image.src,
    srcSet: image.srcset,
    alt: image.alt
  }), /*#__PURE__*/React.createElement("span", {
    className: mainClasses
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    name: name,
    "aria-labelledby": labelId,
    disabled: disabled,
    defaultChecked: defaultChecked
  }, props)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", {
    id: labelId
  }, label))) : /*#__PURE__*/React.createElement("label", {
    className: mainClasses,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    name: name,
    "aria-labelledby": labelId,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, props)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", {
    id: labelId
  }, label));
};

var RadioCheckboxGroup = function RadioCheckboxGroup(_ref2) {
  var size = _ref2.size,
      stacked = _ref2.stacked,
      type = _ref2.type,
      options = _ref2.options;
  var mainClasses = ["sui-".concat(type)];

  if (size === 'small') {
    mainClasses.push("sui-".concat(type, "-sm"));
  }

  if (stacked) {
    mainClasses.push("sui-".concat(type, "-stacked"));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "sui-form-field",
    role: type == 'radio' ? 'radiogroup' : 'group'
  }, options === null || options === void 0 ? void 0 : options.map(function (option, index) {
    return option.image ? /*#__PURE__*/React.createElement(RadioCheckboxInput, {
      index: index,
      type: type,
      label: option.label,
      labelId: option.labelId,
      mainClasses: mainClasses.join(' '),
      id: option.id,
      name: option.name,
      image: option.image,
      defaultChecked: option.defaultChecked,
      disabled: option.disabled
    }) : /*#__PURE__*/React.createElement(RadioCheckboxInput, {
      index: index,
      type: type,
      label: option.label,
      labelId: option.labelId,
      mainClasses: mainClasses.join(' '),
      id: option.id,
      name: option.name,
      defaultChecked: option.defaultChecked,
      disabled: option.disabled
    });
  }));
};

export { RadioCheckboxGroup, RadioCheckboxInput };
