'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var AriaModal = require('@justfixnyc/react-aria-modal');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var AriaModal__default = /*#__PURE__*/_interopDefaultLegacy(AriaModal);

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n.sui-wrap && {\n\tdisplay: ", ";\n\t", "\n\t", "\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-top-width: ", "px;\n\t", "\n\n\t", "\n\t", "\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n.sui-wrap && {\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-top-width: ", "px;\n\tborder-bottom-width: ", "px;\n\ttext-align: ", ";\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n.sui-wrap && {\n\tdisplay: ", ";\n\t", "\n\t", "\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-bottom-width: ", "px;\n\t", "\n\n\t", "\n\t", "\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

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
})(_templateObject(), function (props) {
  return 'block' !== props.display ? 'flex' : 'block';
}, function (props) {
  return 'block' !== props.display && 'flex-flow: row wrap;';
}, function (props) {
  return 'block' !== props.display && ('left' === props.alignment || 'right' === props.alignment || 'center' === props.alignment) ? 'left' === props.alignment ? 'justify-content: flex-start;' : 'right' === props.alignment ? 'justify-content: flex-end;' : 'justify-content: center;' : 'justify-content: space-between;';
}, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop > 29 ? props.paddingTop - 10 : props.paddingTop : utils.gutter_md / 2;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight > 29 ? props.paddingRight - 10 : props.paddingRight : utils.gutter_md;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom > 29 ? props.paddingBottom - 10 : props.paddingBottom : utils.gutter_md / 2;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft > 29 ? props.paddingLeft - 10 : props.paddingLeft : utils.gutter_md;
}, function (props) {
  return props.border || 0 === props.border ? props.border : 1;
}, function (props) {
  return 'block' === props.display && ('right' === props.alignment || 'center' === props.alignment) && 'text-align: ' + props.alignment + ';';
}, function (props) {
  return 'block' !== props.display && '> * { max-width: 100%; flex: 0 0 auto; }';
}, function (props) {
  return 'block' !== props.display && '> * + * { margin-left: 10px; }';
}, device.tablet, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop : utils.gutter / 2;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight : utils.gutter;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom : utils.gutter / 2;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft : utils.gutter;
});

var BoxHeader = function BoxHeader(_ref3) {
  var title = _ref3.title,
      titleIcon = _ref3.titleIcon,
      tagLabel = _ref3.tagLabel,
      tagColor = _ref3.tagColor,
      tagSize = _ref3.tagSize,
      tagDesign = _ref3.tagDesign,
      className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["title", "titleIcon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Header, props, title && '' !== title && /*#__PURE__*/React__default['default'].createElement(BoxTitle, {
    icon: titleIcon,
    tagLabel: tagLabel,
    tagColor: tagColor,
    tagSize: tagSize,
    tagDesign: tagDesign
  }, title), children);
};

var Body = styled__default['default'].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject2(), function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop > 29 ? props.paddingTop - 10 : props.paddingTop : utils.gutter_md;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight > 29 ? props.paddingRight - 10 : props.paddingRight : utils.gutter_md;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom > 29 ? props.paddingBottom - 10 : props.paddingBottom : utils.gutter_md;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft > 29 ? props.paddingLeft - 10 : props.paddingLeft : utils.gutter_md;
}, function (props) {
  return props.borderTop || 0 === props.borderTop ? props.borderTop : 0;
}, function (props) {
  return props.borderBottom || 0 === props.borderBottom ? props.borderBottom : 0;
}, function (props) {
  return props.alignment || 'left';
}, device.tablet, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop : utils.gutter;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight : utils.gutter;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom : utils.gutter;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft : utils.gutter;
});

var BoxBody = function BoxBody(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Body, _extends({
    className: className
  }, props), children);
};

var Footer = styled__default['default'].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject3(), function (props) {
  return 'block' !== props.display ? 'flex' : 'block';
}, function (props) {
  return 'block' !== props.display && 'flex-flow: row wrap;';
}, function (props) {
  return 'block' !== props.display && ('left' === props.alignment || 'right' === props.alignment || 'center' === props.alignment) ? 'left' === props.alignment ? 'justify-content: flex-start;' : 'right' === props.alignment ? 'justify-content: flex-end;' : 'justify-content: center;' : 'justify-content: space-between;';
}, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop > 29 ? props.paddingTop - 10 : props.paddingTop : utils.gutter_md;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight > 29 ? props.paddingRight - 10 : props.paddingRight : utils.gutter_md;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom > 29 ? props.paddingBottom - 10 : props.paddingBottom : utils.gutter_md;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft > 29 ? props.paddingLeft - 10 : props.paddingLeft : utils.gutter_md;
}, function (props) {
  return props.border || 0 === props.border || '' === props.border ? props.border : 1;
}, function (props) {
  return 'block' === props.display && ('right' === props.alignment || 'center' === props.alignment) && 'text-align: ' + props.alignment + ';';
}, function (props) {
  return 'block' !== props.display && '> * { max-width: 100%; flex: 0 0 auto; }';
}, function (props) {
  return 'block' !== props.display && '> * + * { margin-left: 10px; }';
}, device.tablet, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop : utils.gutter;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight : utils.gutter;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom : utils.gutter;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft : utils.gutter;
});

var BoxFooter = function BoxFooter(_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Footer, _extends({
    className: className
  }, props), children);
};

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

var Input = function Input(_ref) {
  var id = _ref.id,
      size = _ref.size,
      label = _ref.label,
      description = _ref.description,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      props = _objectWithoutProperties$1(_ref, ["id", "size", "label", "description", "type"]);

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
  }, label), /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
    id: uniqueId,
    type: type,
    className: clazz
  }, props)), description && /*#__PURE__*/React__default['default'].createElement("p", {
    className: "sui-description"
  }, description));
};

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

var Button = function Button(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$2(_ref, ["label", "icon", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, icon && "" !== icon && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-" + icon,
    "aria-hidden": "true"
  }), label);
  className = "sui-button".concat(className ? ' ' + className : ''); // Set button color.

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

  var htmlTag = 'button';

  if (props.href) {
    htmlTag = 'a';
  } else if (props.htmlFor) {
    htmlTag = 'label';
  }

  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
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

  return _extends$2.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$3(source, excluded) {
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

function _objectWithoutProperties$3(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$3(source, excluded);

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

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Modal = function Modal(_ref) {
  var modalContent = _ref.modalContent,
      triggerContent = _ref.triggerContent,
      props = _objectWithoutProperties$3(_ref, ["modalContent", "triggerContent"]);

  var _React$useState = React__default['default'].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _React$useState3 = React__default['default'].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isClosing = _React$useState4[0],
      setIsClosing = _React$useState4[1]; // States for sliders.


  var _React$useState5 = React__default['default'].useState(props.firstSlide),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentSlide = _React$useState6[0],
      setCurrentSlide = _React$useState6[1];

  var _React$useState7 = React__default['default'].useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      slideDirection = _React$useState8[0],
      setSlideDirection = _React$useState8[1];

  React__default['default'].useEffect(function () {
    if (!props.dialogId) {
      throw new Error('SUI Modal instances should have a `dialogId`');
    }
  }, []);
  var isSlider = 'object' === _typeof(modalContent) && null !== modalContent;

  var openModal = function openModal() {
    return setIsOpen(true);
  },
      closeModal = function closeModal() {
    // Close the modal with the exit animation and reset the slider.
    setIsClosing(true);
    setTimeout(function () {
      setIsOpen(false);
      setIsClosing(false);

      if (isSlider) {
        setSlideDirection(null);
        setCurrentSlide(props.firstSlide);
      }
    }, 300);
  },
      slideTo = function slideTo(slide) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left';
    setCurrentSlide(slide);
    setSlideDirection(direction);
  };

  var _props$getApplication = props.getApplicationNode,
      getApplicationNode = _props$getApplication === void 0 ? function () {
    return document.getElementsByClassName('sui-wrap')[0];
  } : _props$getApplication;
  var dialogClass = "sui-modal-content sui-content-".concat(isClosing ? 'fade-out' : 'fade-in', " ").concat(props.dialogClass || "");
  var renderContent, modalSize, initialFocus;

  if (!isSlider) {
    // Not a slider, we can just render the content.
    renderContent = modalContent;
    modalSize = props.size;
    initialFocus = props.initialFocus || false;
  } else {
    // Render the content from the given slides.
    renderContent = modalContent[currentSlide].render;
    initialFocus = modalContent[currentSlide].focus || false;
    modalSize = modalContent[currentSlide].size; // Add the slide direction class when provided and we're not closing the modal.

    if (slideDirection && !isClosing) {
      dialogClass += "sui-modal-slide sui-active sui-fadein-".concat(slideDirection);
    }
  } // Use 'isOpen' as an alias of 'mounted' if not defined.


  if ('undefined' === typeof props.mounted) {
    props.mounted = isOpen;
  }

  var AltModal = props.renderToNode ? AriaModal__default['default'].renderTo(props.renderToNode) : AriaModal__default['default'];
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(AltModal, _extends$2({
    getApplicationNode: getApplicationNode,
    dialogClass: dialogClass,
    underlayClass: "sui-modal sui-active sui-modal-".concat(modalSize || 'md', " sui-wrap ").concat(props.underlayClass || ''),
    includeDefaultStyles: false,
    initialFocus: initialFocus
  }, props), renderContent({
    closeModal: closeModal,
    slideTo: slideTo
  })), triggerContent && triggerContent({
    openModal: openModal
  }));
};

function _defineProperty$1(obj, key, value) {
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

function ownKeys$1(object, enumerableOnly) {
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

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$4(source, excluded) {
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

function _objectWithoutProperties$4(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$4(source, excluded);

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
      props = _objectWithoutProperties$4(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
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
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$1({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$2(obj, key, value) {
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

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
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

  return _extends$3.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral$1(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject8() {
  var data = _taggedTemplateLiteral$1(["\n\tmin-width: 1px;\n\tflex: 1;\n\t", "\n\tcolor: #17A8E3 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px !important;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral$1(["\n\tdisplay: block;\n\t", "\n\n\tp {\n\t\toverflow: hidden;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\tmargin: 0 !important;\n\t\tpadding: 0 !important;\n\t\tborder: 0;\n\t\tcolor: #888 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\t\tletter-spacing: -0.2px;\n\t\t-webkit-line-clamp: ", ";\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral$1(["\n\t", "\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tcolor: #888 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tletter-spacing: -0.2px;\n\n\t", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral$1(["\n\toverflow: hidden;\n\tdisplay: -webkit-box !important;\n\t-webkit-box-orient: vertical;\n\t", "\n\tmargin: ", " !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px;\n\t", "\n\n\t", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral$1(["\n\t", "\n\theight: ", ";\n\tmargin: ", ";\n\t", "\n\tdisplay: block;\n\t", "\n\tbackground-color: #FFF;\n\tbackground-image: url(", ");\n\tbackground-size: cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral$1(["\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\tflex-flow: row wrap;\n\talign-items: center;\n\tmargin-top: 15px;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral$1(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\n\t+ div {\n\t\tmargin-top: 20px;\n\t}\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral$1(["\n\t", "\n\tcursor: pointer;\n\t", "\n\t", "\n\tpadding: ", ";\n\tborder-radius: 4px;\n\tbackground-color: #fff;\n\t", "\n\ttransition: 0.2s ease all;\n\n\t* {\n\t\tpointer-events: none;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\t", "\n\n\t\t", "\n\t}\n\n\t", "\n\n\t&:focus {\n\t\toutline: none;\n\t\t", "\n\t}\n\n\t@media ", " {\n\t\t", "\n\t}\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var aria = aria || {};
aria.KeyCode = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};
var screen$1 = {
  mobile: 480,
  tablet: 783,
  laptop: 1200,
  desktop: 1500
};
var device$1 = {
  mobile: "(min-width: ".concat(screen$1.mobile, "px)"),
  tablet: "(min-width: ".concat(screen$1.tablet, "px)"),
  laptop: "(min-width: ".concat(screen$1.laptop, "px)"),
  desktop: "(min-width: ".concat(screen$1.desktop, "px)")
};
var PostWrapper = styled__default['default'].div.attrs(function (props) {
  return {
    tabIndex: 0,
    props: props
  };
})(_templateObject$1(), function (props) {
  return props.banner ? "overflow: hidden;" : "";
}, function (props) {
  return props.banner ? "display: flex;" : "";
}, function (props) {
  return props.banner ? "flex-flow: column nowrap;" : "";
}, function (props) {
  return props.banner ? "20px 20px 30px" : "10px";
}, function (props) {
  return props.banner ? "box-shadow: 0 0 0 1px #E6E6E6;" : "";
}, function (props) {
  return props.banner ? "transform: scale(1.02);" : "background-color: #FAFAFA;";
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\t\ttransform: scale(1.05);\n\t\t\t}") : "";
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\tbox-shadow: 0 2px 7px 0 rgba(0,0,0,0.05);\n\t\t}") : "";
}, function (props) {
  return props.banner ? "box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05), 0 0 2px 0 #17A8E3;" : "";
}, device$1.tablet, function (props) {
  return props.banner ? "min-height: 100%;" : "padding: 15px;";
});
var PostHeader = styled__default['default'].div(_templateObject2$1());
var PostFooter = styled__default['default'].div(_templateObject3$1());
var FeaturedImage = styled__default['default'].div.attrs(function () {
  return {
    tabIndex: "-1",
    "aria-hidden": true
  };
})(_templateObject4(), function (props) {
  return props.banner ? "" : "width: 66px;";
}, function (props) {
  return props.banner ? "140px" : "54px";
}, function (props) {
  return props.banner ? "-20px -20px 20px" : "0 10px 0 0";
}, function (props) {
  return props.banner ? "" : "border-radius: 4px;";
}, function (props) {
  return props.banner ? "flex: 0 0 auto;" : "";
}, function (props) {
  return props.src || "none";
});
var PostTitle = styled__default['default'].h3(_templateObject5(), function (props) {
  return props.banner ? "flex: 1 1 auto;" : "";
}, function (props) {
  return props.banner ? "0 0 10px" : "0";
}, function (props) {
  return props.banner ? "" : "-webkit-line-clamp: 2;";
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\t-webkit-line-clamp: 2;\n\t\t}") : "";
});
var PostTime = styled__default['default'].p(_templateObject6(), function (props) {
  return props.banner ? "flex: 0 0 auto;" : "";
}, function (props) {
  return props.banner ? "* + & {\n\t\t\tmargin-left: 5px !important;\n\t\t}" : "";
});
var Excerpt = styled__default['default'].div(_templateObject7(), function (props) {
  return props.banner ? "flex: 1 1 auto;" : "";
}, function (props) {
  return props.banner ? "3" : "2";
});
var ReadMore = styled__default['default'].p(_templateObject8(), function (props) {
  return props.banner ? "" : "margin: 4px 0 0;";
});

var Post = /*#__PURE__*/function (_Component) {
  _inherits(Post, _Component);

  var _super = _createSuper(Post);

  function Post(props) {
    var _this;

    _classCallCheck(this, Post);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;

      if (ref) {
        window.open(ref.getAttribute("data-href"), "_blank");
      }
    });

    _defineProperty$2(_assertThisInitialized(_this), "handleKeydown", function (e) {
      var key = e.which || e.keyCode;

      switch (key) {
        case aria.KeyCode.RETURN:
          _this.openLink(e);

          break;
      }
    });

    _this.state = {
      media: [],
      error: null,
      isLoaded: false
    };
    _this.openLink = _this.openLink.bind(_assertThisInitialized(_this));
    _this.handleKeydown = _this.handleKeydown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var API_URL = "https://wpmudev.com/blog/wp-json/wp/v2/media/";
      var QUERY_ID = this.props.media; // GET media using fetch.

      fetch(API_URL + QUERY_ID).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          isLoaded: true,
          media: data.guid.rendered
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          media = _this$state.media,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded;
      var translate = this.props.translate;
      var read_article = translate && translate[0].read_article ? translate[0].read_article : "Read article";
      var min_read = translate && translate[0].min_read ? translate[0].min_read : "min read";
      var PostImage = ""; // Empty.

      if (this.props.image) {
        PostImage = /*#__PURE__*/React__default['default'].createElement(FeaturedImage, _extends$3({
          src: this.props.image,
          alt: ""
        }, this.props));
      } else {
        if (error) {
          PostImage = error.message;
        } else if (!isLoaded) {
          PostImage = /*#__PURE__*/React__default['default'].createElement("p", {
            style: {
              textAlign: 'center'
            }
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            className: "sui-icon-loader sui-loading",
            "aria-hidden": "true"
          }), /*#__PURE__*/React__default['default'].createElement("span", {
            className: "sui-screen-reader-text"
          }, "Image is loading"));
        } else {
          PostImage = /*#__PURE__*/React__default['default'].createElement(FeaturedImage, _extends$3({
            src: media
          }, this.props));
        }
      }

      if (this.props.banner) {
        return /*#__PURE__*/React__default['default'].createElement(PostWrapper, this.props, PostImage, this.props.title && "" !== this.props.title && /*#__PURE__*/React__default['default'].createElement(PostTitle, {
          banner: true,
          dangerouslySetInnerHTML: {
            __html: this.props.title
          }
        }), this.props.excerpt && "" !== this.props.excerpt && /*#__PURE__*/React__default['default'].createElement(Excerpt, {
          banner: true,
          dangerouslySetInnerHTML: {
            __html: this.props.excerpt
          }
        }), /*#__PURE__*/React__default['default'].createElement(PostFooter, {
          banner: true
        }, /*#__PURE__*/React__default['default'].createElement(ReadMore, {
          banner: true
        }, read_article), this.props.time && "" !== this.props.time && /*#__PURE__*/React__default['default'].createElement(PostTime, {
          banner: true
        }, /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-icon-clock sui-sm",
          style: {
            verticalAlign: "middle",
            marginRight: 5
          },
          "aria-hidden": "true"
        }), this.props.time, " ", min_read)));
      }

      return /*#__PURE__*/React__default['default'].createElement(PostWrapper, this.props, /*#__PURE__*/React__default['default'].createElement(PostHeader, null, PostImage, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          minWidth: "1px",
          flex: 1
        }
      }, this.props.title && "" !== this.props.title && /*#__PURE__*/React__default['default'].createElement(PostTitle, {
        dangerouslySetInnerHTML: {
          __html: this.props.title
        }
      }), this.props.time && "" !== this.props.time && /*#__PURE__*/React__default['default'].createElement(PostTime, null, "*", this.props.time, " ", min_read))), this.props.excerpt && "" !== this.props.excerpt && /*#__PURE__*/React__default['default'].createElement(Excerpt, {
        dangerouslySetInnerHTML: {
          __html: this.props.excerpt
        }
      }), /*#__PURE__*/React__default['default'].createElement(ReadMore, null, read_article));
    }
  }]);

  return Post;
}(React.Component);

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$3(obj, key, value) {
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

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

function _defineProperty$1$1(obj, key, value) {
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

function ownKeys$2(object, enumerableOnly) {
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

function _objectSpread2$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _defineProperty$1$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$5(source, excluded) {
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

function _objectWithoutProperties$5(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$5(source, excluded);

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

var ButtonIcon$1 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$5(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
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
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var Notifications = /*#__PURE__*/function (_Component) {
  _inherits$1(Notifications, _Component);

  var _super = _createSuper$1(Notifications);

  function Notifications(props) {
    var _this;

    _classCallCheck$1(this, Notifications);

    _this = _super.call(this, props);

    _defineProperty$3(_assertThisInitialized$1(_this), "close", function () {
      _this.setState({
        hide: true
      });
    });

    _this.state = {
      hide: false
    };
    _this.close = _this.close.bind(_assertThisInitialized$1(_this));
    return _this;
  }

  _createClass$1(Notifications, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hide = this.state.hide;
      var classMain = "sui-notice";
      var classIcon = "sui-notice-icon sui-md";

      switch (this.props.type) {
        case "info":
        case "success":
        case "warning":
        case "error":
        case "upsell":
          classMain += " sui-notice-" + this.props.type;
          classIcon += " sui-icon-info";
          break;

        case "loading":
          classIcon += " sui-icon-loader sui-loading";
          break;

        default:
          classIcon += " sui-icon-info";
          break;
      }

      var message = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-notice-message"
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        className: classIcon,
        "aria-hidden": "true"
      }), this.props.children);
      var actions = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-notice-actions"
      }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon$1, {
        icon: "check",
        label: "Hide",
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }));

      if (!hide) {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          className: classMain
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "sui-notice-content"
        }, message, this.props.dismiss && actions));
      }

      return null;
    }
  }]);

  return Notifications;
}(React.Component);

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}

function _extends$4() {
  _extends$4 = Object.assign || function (target) {
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

  return _extends$4.apply(this, arguments);
}

function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}

function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$2(o);
}

function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$2(o, p);
}

function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$2(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$2(self);
}

function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$2(this, result);
  };
}

function _taggedTemplateLiteral$2(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _defineProperty$4(obj, key, value) {
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

function ownKeys$3(object, enumerableOnly) {
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

function _objectSpread2$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function (key) {
        _defineProperty$4(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$6(source, excluded) {
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

function _objectWithoutProperties$6(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$6(source, excluded);

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

var ButtonIcon$2 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$6(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
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
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$3({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _templateObject2$2() {
  var data = _taggedTemplateLiteral$2(["\n.sui-wrap && {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    [class*=\"sui-icon-\"]:before {\n        color: inherit !important;\n    }\n\n    &:hover,\n    &:focus {\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n}\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral$2(["\n.sui-wrap && {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    [class*=\"sui-icon-\"]:before {\n        color: inherit !important;\n    }\n\n    &:hover,\n    &:focus {\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n}\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var Link = styled__default['default'].a(_templateObject$2(), function (props) {
  return 'blue' === props.color ? 'color: #17A8E3 !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'color: #1ABC9C !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'color: #FECF2F !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'color: #FF6D6D !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'color: #8D00B1 !important;' : '';
}, function (props) {
  return 'blue' === props.color ? 'background-color: #E1F6FF !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'background-color: #D1F1EA !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'background-color: #FFF5D5 !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'background-color: #FFE5E9 !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'background-color: #F9E1FF !important;' : '';
});
var Button$1 = styled__default['default'].button(_templateObject2$2(), function (props) {
  return 'blue' === props.color ? 'color: #17A8E3 !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'color: #1ABC9C !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'color: #FECF2F !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'color: #FF6D6D !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'color: #8D00B1 !important;' : '';
}, function (props) {
  return 'blue' === props.color ? 'background-color: #E1F6FF !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'background-color: #D1F1EA !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'background-color: #FFF5D5 !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'background-color: #FFE5E9 !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'background-color: #F9E1FF !important;' : '';
});

var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits$2(Dropdown, _Component);

  var _super = _createSuper$2(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck$2(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized$2(_this));
    _this.wrapperRef = /*#__PURE__*/React__default['default'].createRef();
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized$2(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized$2(_this));
    return _this;
  }

  _createClass$2(Dropdown, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(e) {
      if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var options = React.Children.map(this.props.children, function (option) {
        var icon = option.props.icon && '' !== option.props.icon && /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-icon-".concat(option.props.icon),
          "aria-hidden": "true"
        });
        var tag = option.props.tag && '' !== option.props.tag && /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-tag sui-tag-beta",
          style: {
            pointerEvents: 'none',
            display: 'inline',
            marginLeft: 5,
            lineHeight: 1
          }
        }, option.props.tag);
        var label = /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, icon, option.props.name, tag);

        if (option.props.href) {
          return /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(Link, _extends$4({
            href: option.props.href
          }, option.props), label));
        }

        return /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(Button$1, option.props, label));
      });
      var clazz = !open ? 'sui-dropdown' : 'sui-dropdown open';

      switch (this.props.position) {
        case 'left':
          clazz += ' sui-dropdown-right';
          break;

        case 'center':
          clazz += ' sui-dropdown-center';
          break;

        case 'right':
          clazz += ' sui-dropdown-left';
          break;

        default:
          clazz += ' sui-dropdown-right';
          break;
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: clazz,
        ref: this.setWrapperRef,
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon$2, {
        icon: "widget-settings-config",
        label: open ? 'Open menu' : 'Close menu',
        onClick: this.toggle
      }), open && /*#__PURE__*/React__default['default'].createElement("ul", {
        onClick: function onClick() {
          return _this2.setState({
            open: false
          });
        }
      }, options));
    }
  }]);

  return Dropdown;
}(React.Component);

function _extends$5() {
  _extends$5 = Object.assign || function (target) {
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

  return _extends$5.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$7(source, excluded) {
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

function _objectWithoutProperties$7(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$7(source, excluded);

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

function _taggedTemplateLiteral$3(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
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

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _defineProperty$5(obj, key, value) {
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

function ownKeys$4(object, enumerableOnly) {
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

function _objectSpread2$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$4(Object(source), true).forEach(function (key) {
        _defineProperty$5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$1$1(source, excluded) {
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

function _objectWithoutProperties$1$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1$1(source, excluded);

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

var ButtonIcon$3 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$1$1(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
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
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$4({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral$3(["\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    border-radius: 10px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var ItemImage = styled__default['default'].span(_templateObject$3());

var useToggle = function useToggle() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useState = React.useState(initialValue),
      _useState2 = _slicedToArray$1(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var toggle = React.useCallback(function () {
    setValue(function (v) {
      return !v;
    });
  }, []);
  return [value, toggle];
};

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties$7(_ref, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$5({
    className: "sui-accordion"
  }, props), children);
};

var AccordionItem = function AccordionItem(_ref2) {
  var title = _ref2.title,
      titleSize = _ref2.titleSize,
      icon = _ref2.icon,
      image = _ref2.image,
      children = _ref2.children,
      props = _objectWithoutProperties$7(_ref2, ["title", "titleSize", "icon", "image", "children"]);

  var _useToggle = useToggle(),
      _useToggle2 = _slicedToArray$1(_useToggle, 2),
      isOpen = _useToggle2[0],
      setIsOpen = _useToggle2[1];

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$5({
    className: "sui-accordion-item".concat(isOpen ? ' sui-accordion-item--open' : '')
  }, props), /*#__PURE__*/React__default['default'].createElement(AccordionItemHeader, {
    state: isOpen ? 'true' : 'false',
    title: title,
    titleSize: titleSize,
    icon: icon,
    image: image,
    onClick: setIsOpen
  }), /*#__PURE__*/React__default['default'].createElement(AccordionItemBody, null, children));
};

var AccordionItemHeader = function AccordionItemHeader(_ref3) {
  var title = _ref3.title,
      titleSize = _ref3.titleSize,
      icon = _ref3.icon,
      image = _ref3.image,
      children = _ref3.children,
      props = _objectWithoutProperties$7(_ref3, ["title", "titleSize", "icon", "image", "children"]);

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray$1(_useState3, 1),
      isOpen = _useState4[0];

  var countChildren = React__default['default'].Children.toArray(children).length;
  var titleColumnIcon = 'undefined' !== typeof icon && '' !== icon ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon),
    "aria-hidden": "true"
  }) : '';
  var titleColumnImage = 'undefined' !== typeof image && '' !== icon ? /*#__PURE__*/React__default['default'].createElement(ItemImage, {
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }) : '';
  var titleColumnSize = 'undefined' !== typeof titleSize && '' !== titleSize ? ' sui-accordion-col-' + titleSize : '';
  var titleColumn = /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-accordion-item-title".concat(titleColumnSize)
  }, titleColumnIcon, titleColumnImage, title);
  var indicator = /*#__PURE__*/React__default['default'].createElement(ButtonIcon$3, {
    icon: "chevron-down",
    label: isOpen ? 'Close section' : 'Open section',
    className: "sui-button-icon sui-accordion-open-indicator"
  });
  var columns = React__default['default'].Children.map(children, function (column, index) {
    index++;
    var columnSize = column.props.size;
    var columnClass = 'undefined' !== typeof columnSize && '' !== columnSize ? 'sui-accordion-col-' + columnSize : 'sui-accordion-col-auto';
    var columnContent = column.props.children;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: columnClass
    }, columnContent, countChildren === index && indicator);
  });
  var actions = /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-accordion-col-auto"
  }, indicator);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$5({
    className: "sui-accordion-item-header"
  }, props), titleColumn, countChildren > 0 ? columns : actions);
};

var AccordionItemBody = function AccordionItemBody(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties$7(_ref4, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$5({
    className: "sui-accordion-item-body"
  }, props), children);
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty$6(obj, key, value) {
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

function _extends$6() {
  _extends$6 = Object.assign || function (target) {
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

  return _extends$6.apply(this, arguments);
}

function ownKeys$5(object, enumerableOnly) {
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

function _objectSpread2$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$5(Object(source), true).forEach(function (key) {
        _defineProperty$6(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$8(source, excluded) {
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

function _objectWithoutProperties$8(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$8(source, excluded);

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

function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
}

function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit$2(arr, i) {
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

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Pagination = function Pagination(_ref) {
  var _args$children, _properties;

  var limit = _ref.limit,
      skip = _ref.skip,
      results = _ref.results,
      skipToFirstLabel = _ref.skipToFirstLabel,
      previousLabel = _ref.previousLabel,
      nextLabel = _ref.nextLabel,
      skipToLastLabel = _ref.skipToLastLabel,
      pagesToBottom = _ref.pagesToBottom,
      args = _objectWithoutProperties$8(_ref, ["limit", "skip", "results", "skipToFirstLabel", "previousLabel", "nextLabel", "skipToLastLabel", "pagesToBottom"]);

  var componentChildren = args.children ? ((_args$children = args.children) === null || _args$children === void 0 ? void 0 : _args$children.length) > 1 ? _toConsumableArray(args.children) : [args.children] : [],
      childElements = [].concat(componentChildren, _toConsumableArray(args.child)),
      elements = childElements.length,
      pages = elements / limit > parseInt(elements / limit) ? parseInt(elements / limit) + 1 : elements / limit,
      _useState = React.useState([]),
      _useState2 = _slicedToArray$2(_useState, 2),
      pagesArray = _useState2[0],
      setPagesArray = _useState2[1],
      _useState3 = React.useState("1"),
      _useState4 = _slicedToArray$2(_useState3, 2),
      selectedPage = _useState4[0],
      setSelectedPage = _useState4[1],
      _useState5 = React.useState(0),
      _useState6 = _slicedToArray$2(_useState5, 2),
      startIndex = _useState6[0],
      setStartIndex = _useState6[1],
      _useState7 = React.useState(pages >= 5 ? 5 : pages),
      _useState8 = _slicedToArray$2(_useState7, 2),
      endIndex = _useState8[0],
      setEndIndex = _useState8[1],
      _useState9 = React.useState(0),
      _useState10 = _slicedToArray$2(_useState9, 2),
      pageClickCounter = _useState10[0],
      setPageClickCounter = _useState10[1],
      _useState11 = React.useState(0),
      _useState12 = _slicedToArray$2(_useState11, 2),
      elementsStartIndex = _useState12[0],
      setElementsStartIndex = _useState12[1],
      _useState13 = React.useState(limit),
      _useState14 = _slicedToArray$2(_useState13, 2),
      elementsEndIndex = _useState14[0],
      setElementsEndIndex = _useState14[1];

  React.useEffect(function () {
    var pagesArray = [];

    for (var i = 1; i <= pages; ++i) {
      pagesArray.push(i);
    }

    setPagesArray(pagesArray);
  }, []);
  React.useEffect(function () {
    selectedPage >= endIndex && incrementIndexes();
    selectedPage <= startIndex + 1 && decrementIndexes();
  }, [pageClickCounter]);
  React.useEffect(function () {
    if (selectedPage !== "1") {
      setElementsStartIndex(selectedPage * limit - limit);
      setElementsEndIndex(selectedPage * limit);
    }
  }, [selectedPage]);

  var handleSkipToFirstPage = function handleSkipToFirstPage() {
    setSelectedPage(1);
    setStartIndex(0);
    setEndIndex(pages >= 5 ? 5 : pages);
  };

  var handleSkipToLastPage = function handleSkipToLastPage() {
    setSelectedPage(pages);
    setStartIndex(pages >= 5 ? pages - 5 : 0);
    setEndIndex(pages);
  };

  var handlePreviousPage = function handlePreviousPage() {
    selectedPage > 1 && setSelectedPage(selectedPage - 1);
    decrementIndexes();
  };

  var handleNextPage = function handleNextPage() {
    selectedPage < pages && setSelectedPage(parseInt(selectedPage) + 1);
    incrementIndexes();
  };

  var decrementIndexes = function decrementIndexes() {
    if (selectedPage - 1 <= startIndex + 1 && startIndex !== 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  var incrementIndexes = function incrementIndexes() {
    if (selectedPage + 1 >= endIndex && endIndex !== pages) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  var handlePreviousEllipsis = function handlePreviousEllipsis() {
    setSelectedPage(startIndex >= 5 ? endIndex - 6 : endIndex - startIndex - 1);
    setStartIndex(startIndex >= 5 ? startIndex - 5 : 0);
    setEndIndex(startIndex >= 5 ? endIndex - 5 : endIndex - startIndex);
  };

  var handleNextEllipsis = function handleNextEllipsis() {
    setSelectedPage(pages - endIndex >= 5 ? startIndex + 7 : pages - endIndex + startIndex + 2);
    setStartIndex(pages - endIndex >= 5 ? startIndex + 5 : pages - endIndex + startIndex);
    setEndIndex(pages - endIndex >= 5 ? endIndex + 5 : pages);
  };

  var handlePageClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSelectedPage(page);
              setPageClickCounter(pageClickCounter + 1);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handlePageClick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var properties = (_properties = {
    childElements: childElements,
    elementsStartIndex: elementsStartIndex,
    elementsEndIndex: elementsEndIndex,
    handlePageClick: handlePageClick,
    handleNextEllipsis: handleNextEllipsis,
    handlePreviousEllipsis: handlePreviousEllipsis,
    handleNextPage: handleNextPage,
    handlePreviousPage: handlePreviousPage,
    handleSkipToLastPage: handleSkipToLastPage,
    handleSkipToFirstPage: handleSkipToFirstPage,
    pagesArray: pagesArray,
    selectedPage: selectedPage,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages,
    results: results,
    skipToFirstLabel: skipToFirstLabel,
    previousLabel: previousLabel,
    nextLabel: nextLabel,
    skipToLastLabel: skipToLastLabel,
    skip: skip
  }, _defineProperty$6(_properties, "results", results), _defineProperty$6(_properties, "elements", elements), _properties);
  if (args === null || args === void 0 ? void 0 : args.paginationContent) return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, args === null || args === void 0 ? void 0 : args.paginationContent(_objectSpread2$5({}, properties)));else return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, pagesToBottom && PaginationResults(_objectSpread2$5({}, properties)), PaginationNav(_objectSpread2$5({}, properties)), !pagesToBottom && PaginationResults(_objectSpread2$5({}, properties)));
};

var PaginationResults = function PaginationResults(_ref3) {
  var _React$Children$map;

  var properties = _extends$6({}, _ref3);

  return (_React$Children$map = React__default['default'].Children.map(properties.childElements, function (data) {
    return /*#__PURE__*/React__default['default'].cloneElement(data);
  })) === null || _React$Children$map === void 0 ? void 0 : _React$Children$map.slice(properties.elementsStartIndex, properties.elementsEndIndex);
};

var PaginationNav = function PaginationNav(_ref4) {
  var _properties$pagesArra, _properties$pagesArra2;

  var properties = _extends$6({}, _ref4);

  return properties.pagesArray.length > 1 && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-pagination-wrap"
  }, properties.results && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-pagination-results"
  }, properties.elements, " results"), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "sui-pagination"
  }, properties.skip && /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: properties.handleSkipToFirstPage
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    disabled: properties.selectedPage <= 1
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, properties.skipToFirstLabel || "Go to first page"), /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "true",
    title: properties.skipToFirstLabel || "Go to first page",
    className: "sui-icon-arrow-skip-back"
  }))), /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: properties.handlePreviousPage
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    disabled: properties.selectedPage <= 1
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, properties.previousLabel || "Go to previous page"), /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "true",
    title: properties.previousLabel || "Go to previous page",
    className: "sui-icon-chevron-left"
  }))), properties.startIndex > 0 && /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: properties.handlePreviousEllipsis
  }, /*#__PURE__*/React__default['default'].createElement("a", null, "\u2026")), (_properties$pagesArra = properties.pagesArray) === null || _properties$pagesArra === void 0 ? void 0 : (_properties$pagesArra2 = _properties$pagesArra.slice(properties.startIndex, properties.endIndex)) === null || _properties$pagesArra2 === void 0 ? void 0 : _properties$pagesArra2.map(function (data, index) {
    return /*#__PURE__*/React__default['default'].createElement("li", {
      onClick: function onClick() {
        return properties.handlePageClick(parseInt(data));
      },
      key: index
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      "aria-selected": properties.selectedPage === data,
      className: properties.selectedPage == data ? "sui-active" : ""
    }, data));
  }), properties.endIndex < properties.pages && /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: properties.handleNextEllipsis
  }, /*#__PURE__*/React__default['default'].createElement("a", null, "\u2026")), /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: properties.handleNextPage
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    disabled: properties.selectedPage >= properties.pages
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, properties.nextLabel || "Go to next page."), /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "true",
    title: properties.nextLabel || "Go to next page.",
    className: "sui-icon-chevron-right"
  }))), properties.skip && /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: properties.handleSkipToLastPage
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    disabled: properties.selectedPage >= properties.pages
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, properties.skipToLastLabel || "Go to last page."), /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "true",
    title: properties.skipToLastLabel || "Go to last page",
    className: "sui-icon-arrow-skip-forward"
  })))));
};

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.AccordionItemBody = AccordionItemBody;
exports.AccordionItemHeader = AccordionItemHeader;
exports.Box = Box;
exports.BoxBody = BoxBody;
exports.BoxFooter = BoxFooter;
exports.BoxHeader = BoxHeader;
exports.BoxTitle = BoxTitle;
exports.Button = Button;
exports.ButtonIcon = ButtonIcon;
exports.Dropdown = Dropdown;
exports.Input = Input;
exports.Modal = Modal;
exports.Notifications = Notifications;
exports.Pagination = Pagination;
exports.Post = Post;
