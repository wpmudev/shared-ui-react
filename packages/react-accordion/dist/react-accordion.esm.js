import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
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

function _objectWithoutProperties$2(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$2(source, excluded);

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

var _excluded$2 = ["label", "icon", "iconSize", "design", "color", "className", "loading"];

var ButtonIcon = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$1(_ref, _excluded$2);

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

var _excluded$1 = ["type", "label", "labelId", "id", "name", "image", "defaultChecked", "disabled"];

var RadioCheckboxInput = function RadioCheckboxInput(_ref) {
  var type = _ref.type,
      label = _ref.label,
      labelId = _ref.labelId,
      id = _ref.id,
      name = _ref.name,
      image = _ref.image,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded$1);

  var mainClasses = ["sui-".concat(type)];

  if (props.size === 'small') {
    mainClasses.push("sui-".concat(type, "-sm"));
  }

  if (props.stacked) {
    mainClasses.push("sui-".concat(type, "-stacked"));
  }

  return image ? /*#__PURE__*/React.createElement("label", {
    className: "sui-".concat(type, "-image"),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("img", {
    src: image.src,
    srcSet: image.srcset,
    alt: image.alt
  }), /*#__PURE__*/React.createElement("span", {
    className: mainClasses.join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    name: name,
    "aria-labelledby": labelId,
    disabled: disabled,
    checked: defaultChecked
  }, props)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", {
    id: labelId
  }, label))) : /*#__PURE__*/React.createElement("label", {
    className: mainClasses.join(' '),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    name: name,
    "aria-labelledby": labelId,
    checked: defaultChecked,
    disabled: disabled
  }, props)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", {
    id: labelId
  }, label));
};

var _excluded = ["children"],
    _excluded2 = ["title", "titleSize", "icon", "image", "children", "checkboxInput", "checkboxId", "checkboxName", "checkboxLabel", "checkboxSelected", "checkboxClickHandler"],
    _excluded3 = ["title", "titleSize", "icon", "image", "children", "checkboxInput", "checkboxId", "checkboxName", "checkboxLabel", "checkboxSelected", "checkboxClickHandler"],
    _excluded4 = ["children"];

var _templateObject;
var ItemImage = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\twidth: 30px;\n\theight: 30px;\n\tmargin-right: 10px;\n\tborder-radius: 10px;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: center;\n"])));

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
      props = _objectWithoutProperties$2(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends$1({
    className: "sui-accordion"
  }, props), children);
};

var AccordionItem = function AccordionItem(_ref2) {
  var title = _ref2.title,
      titleSize = _ref2.titleSize,
      icon = _ref2.icon,
      image = _ref2.image,
      children = _ref2.children,
      checkboxInput = _ref2.checkboxInput,
      checkboxId = _ref2.checkboxId,
      checkboxName = _ref2.checkboxName,
      checkboxLabel = _ref2.checkboxLabel,
      checkboxSelected = _ref2.checkboxSelected,
      checkboxClickHandler = _ref2.checkboxClickHandler,
      props = _objectWithoutProperties$2(_ref2, _excluded2);

  var _useToggle = useToggle(),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      isOpen = _useToggle2[0],
      setIsOpen = _useToggle2[1];

  return /*#__PURE__*/React.createElement("div", _extends$1({
    className: "sui-accordion-item".concat(isOpen ? ' sui-accordion-item--open' : '')
  }, props), /*#__PURE__*/React.createElement(AccordionItemHeader, {
    state: isOpen ? 'true' : 'false',
    title: title,
    titleSize: titleSize,
    icon: icon,
    image: image,
    onClick: setIsOpen,
    checkboxInput: checkboxInput,
    checkboxId: checkboxId,
    checkboxSelected: checkboxSelected,
    checkboxClickHandler: checkboxClickHandler,
    checkboxName: checkboxName,
    checkboxLabel: checkboxLabel
  }), /*#__PURE__*/React.createElement(AccordionItemBody, null, children));
};

var AccordionItemHeader = function AccordionItemHeader(_ref3) {
  var title = _ref3.title,
      titleSize = _ref3.titleSize,
      icon = _ref3.icon,
      image = _ref3.image,
      children = _ref3.children,
      checkboxInput = _ref3.checkboxInput,
      checkboxId = _ref3.checkboxId,
      checkboxName = _ref3.checkboxName,
      checkboxLabel = _ref3.checkboxLabel,
      checkboxSelected = _ref3.checkboxSelected,
      checkboxClickHandler = _ref3.checkboxClickHandler,
      props = _objectWithoutProperties$2(_ref3, _excluded3);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 1),
      isOpen = _useState4[0];

  var countChildren = React.Children.toArray(children).length;
  var titleColumnIcon = 'undefined' !== typeof icon && '' !== icon ? /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-".concat(icon),
    "aria-hidden": "true"
  }) : '';
  var titleColumnImage = 'undefined' !== typeof image && '' !== image ? /*#__PURE__*/React.createElement(ItemImage, {
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }) : '';
  var titleColumnSize = 'undefined' !== typeof titleSize && '' !== titleSize ? ' sui-accordion-col-' + titleSize : '';
  var checkboxItem = checkboxInput ? /*#__PURE__*/React.createElement(RadioCheckboxInput, {
    type: "checkbox",
    id: checkboxId,
    name: checkboxName,
    defaultChecked: checkboxSelected,
    onChange: checkboxClickHandler,
    label: checkboxLabel
  }) : '';
  var titleColumn = /*#__PURE__*/React.createElement("div", {
    className: "sui-accordion-item-title".concat(titleColumnSize)
  }, checkboxItem, titleColumnIcon, titleColumnImage, title);
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
  return /*#__PURE__*/React.createElement("div", _extends$1({
    className: "sui-accordion-item-header"
  }, props), titleColumn, countChildren > 0 ? columns : actions);
};

var AccordionItemBody = function AccordionItemBody(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties$2(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("div", _extends$1({
    className: "sui-accordion-item-body"
  }, props), children);
};

export { Accordion, AccordionItem, AccordionItemBody, AccordionItemHeader };
