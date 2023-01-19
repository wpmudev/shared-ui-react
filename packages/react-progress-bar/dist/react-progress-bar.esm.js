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

var _excluded = ["classes", "now", "hasLoader", "hasLabel", "hasCancel", "hasFrame", "hasLegend", "sourceLang", "cbFunction"];
var ProgressBar = function ProgressBar(_ref) {
  var classes = _ref.classes,
      now = _ref.now,
      _ref$hasLoader = _ref.hasLoader,
      hasLoader = _ref$hasLoader === void 0 ? true : _ref$hasLoader,
      _ref$hasLabel = _ref.hasLabel,
      hasLabel = _ref$hasLabel === void 0 ? true : _ref$hasLabel,
      _ref$hasCancel = _ref.hasCancel,
      hasCancel = _ref$hasCancel === void 0 ? true : _ref$hasCancel,
      _ref$hasFrame = _ref.hasFrame,
      hasFrame = _ref$hasFrame === void 0 ? false : _ref$hasFrame,
      _ref$hasLegend = _ref.hasLegend,
      hasLegend = _ref$hasLegend === void 0 ? true : _ref$hasLegend,
      sourceLang = _ref.sourceLang,
      _ref$cbFunction = _ref.cbFunction,
      cbFunction = _ref$cbFunction === void 0 ? function () {} : _ref$cbFunction,
      props = _objectWithoutProperties$1(_ref, _excluded);

  var extraClasses = 'undefined' !== typeof classes && '' !== classes ? ' ' + classes : '';
  var currValue = Number(now);
  var value = currValue && currValue > 0 ? currValue > 100 ? 100 : currValue : 0;
  var lang = Object.assign({
    cancel: 'Cancel',
    legend: 'Status...'
  }, sourceLang);
  var loaderMarkup = hasLoader && /*#__PURE__*/React.createElement("span", {
    className: "sui-progress-icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading"
  }));
  var loaderText = hasLabel && /*#__PURE__*/React.createElement("span", {
    className: "sui-progress-text"
  }, value, "%");
  var loaderBar = /*#__PURE__*/React.createElement("div", {
    className: "sui-progress-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "".concat(value, "%")
    }
  }));
  var innerMarkup = /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-progress".concat(extraClasses)
  }, props), loaderMarkup, loaderText, loaderBar, hasCancel && /*#__PURE__*/React.createElement(ButtonIcon, {
    icon: "close",
    iconSize: "sm",
    label: lang.cancel,
    onClick: function onClick() {
      return cbFunction();
    }
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasFrame && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sui-progress-block"
  }, innerMarkup), hasLegend && /*#__PURE__*/React.createElement("div", {
    className: "sui-progress-state"
  }, /*#__PURE__*/React.createElement("span", null, lang.legend))), !hasFrame && innerMarkup);
};

export { ProgressBar };
