import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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

var ButtonIcon = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$1(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
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
    case "blue":
    case "green":
    case "red":
    case "orange":
    case "purple":
    case "yellow":
    case "white":
      className += " sui-button-" + color;
      break;

    case "gray":
    default:
      className += "";
      break;
  } // Set button style.


  switch (design) {
    case "ghost":
    case "outlined":
      className += " sui-button-" + design;
      break;

    case "solid":
    default:
      className += "";
      break;
  } // Set loading class.


  if (loading) {
    className += " sui-button-onload";
  }

  var htmlTag = props.href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    border-radius: 10px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ItemImage = styled.span(_templateObject());

var useToggle = function useToggle() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var toggle = useCallback(function () {
    setValue(function (v) {
      return !v;
    });
  }, []);
  return [value, toggle];
};

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-accordion"
  }, props), children);
};

var AccordionItem = function AccordionItem(_ref2) {
  var title = _ref2.title,
      titleSize = _ref2.titleSize,
      icon = _ref2.icon,
      image = _ref2.image,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["title", "titleSize", "icon", "image", "children"]);

  var _useToggle = useToggle(),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      isOpen = _useToggle2[0],
      setIsOpen = _useToggle2[1];

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-accordion-item".concat(isOpen ? ' sui-accordion-item--open' : '')
  }, props), /*#__PURE__*/React.createElement(AccordionItemHeader, {
    state: isOpen ? 'true' : 'false',
    title: title,
    titleSize: titleSize,
    icon: icon,
    image: image,
    onClick: setIsOpen
  }), /*#__PURE__*/React.createElement(AccordionItemBody, null, children));
};

var AccordionItemHeader = function AccordionItemHeader(_ref3) {
  var title = _ref3.title,
      titleSize = _ref3.titleSize,
      icon = _ref3.icon,
      image = _ref3.image,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["title", "titleSize", "icon", "image", "children"]);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 1),
      isOpen = _useState4[0];

  var countChildren = React.Children.toArray(children).length;
  var titleColumnIcon = 'undefined' !== typeof icon && '' !== icon ? /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-".concat(icon),
    "aria-hidden": "true"
  }) : '';
  var titleColumnImage = 'undefined' !== typeof image && '' !== icon ? /*#__PURE__*/React.createElement(ItemImage, {
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }) : '';
  var titleColumnSize = 'undefined' !== typeof titleSize && '' !== titleSize ? ' sui-accordion-col-' + titleSize : '';
  var titleColumn = /*#__PURE__*/React.createElement("div", {
    className: "sui-accordion-item-title".concat(titleColumnSize)
  }, titleColumnIcon, titleColumnImage, title);
  var indicator = /*#__PURE__*/React.createElement(ButtonIcon, {
    icon: "chevron-down",
    label: isOpen ? 'Close section' : 'Open section',
    className: "sui-button-icon sui-accordion-open-indicator"
  });
  var columns = React.Children.map(children, function (column, index) {
    index++;
    var columnSize = column.props.size;
    var columnClass = 'undefined' !== typeof columnSize && '' !== columnSize ? 'sui-accordion-col-' + columnSize : 'sui-accordion-col-auto';
    var columnContent = column.props.children;
    return /*#__PURE__*/React.createElement("div", {
      className: columnClass
    }, columnContent, countChildren === index && indicator);
  });
  var actions = /*#__PURE__*/React.createElement("div", {
    className: "sui-accordion-col-auto"
  }, indicator);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-accordion-item-header"
  }, props), titleColumn, countChildren > 0 ? columns : actions);
};

var AccordionItemBody = function AccordionItemBody(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-accordion-item-body"
  }, props), children);
};

export { Accordion, AccordionItem, AccordionItemBody, AccordionItemHeader };
