import React, { Children, Fragment, Component, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

function ownKeys$8(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) {
      _defineProperty$9(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty$9(obj, key, value) {
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

function _objectWithoutPropertiesLoose$d(source, excluded) {
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

function _objectWithoutProperties$d(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$d(source, excluded);

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

var _excluded$d = ["label", "icon", "iconRight", "design", "color", "className", "loading"];

var Button$1 = function Button(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconRight = _ref.iconRight,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$d(_ref, _excluded$d);

  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: 'relative'
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && !iconRight && '' !== icon && /*#__PURE__*/React.createElement("span", {
    className: 'sui-icon-' + icon,
    "aria-hidden": "true"
  }), label, icon && iconRight && '' !== icon && /*#__PURE__*/React.createElement("span", {
    className: 'sui-icon-' + icon,
    "aria-hidden": "true"
  }));
  className = "sui-button".concat(iconRight ? ' sui-button-icon-right' : '').concat(className ? ' ' + className : ''); // Set button color.

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

  var htmlTag = 'button';

  if (props.href) {
    htmlTag = 'a';
  } else if (props.htmlFor) {
    htmlTag = 'label';
  }

  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2$8({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function ownKeys$7(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) {
      _defineProperty$8(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty$8(obj, key, value) {
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

function _objectWithoutPropertiesLoose$c(source, excluded) {
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

function _objectWithoutProperties$c(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$c(source, excluded);

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

var _excluded$c = ["label", "icon", "iconSize", "design", "color", "className", "loading"];

var ButtonIcon$5 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$c(_ref, _excluded$c);

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
  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2$7({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _extends$a() {
  _extends$a = Object.assign || function (target) {
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

  return _extends$a.apply(this, arguments);
}

function _inherits$3(subClass, superClass) {
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf$3(subClass, superClass);
}

function _getPrototypeOf$3(o) {
  _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$3(o);
}

function _setPrototypeOf$3(o, p) {
  _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$3(o, p);
}

function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$3(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$3(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized$3(self);
}

function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$3(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$3(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$3(this, result);
  };
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

function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) {
      _defineProperty$7(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty$7(obj, key, value) {
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

function _objectWithoutPropertiesLoose$b(source, excluded) {
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

function _objectWithoutProperties$b(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$b(source, excluded);

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

var _excluded$b = ["label", "icon", "iconSize", "design", "color", "className", "loading"];

var ButtonIcon$4 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$b(_ref, _excluded$b);

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
  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2$6({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var _templateObject$3, _templateObject2$2;

var Link = styled.a(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral$3(["\n\t.sui-wrap && {\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\n\t\t[class*=\"sui-icon-\"]:before {\n\t\t\tcolor: inherit !important;\n\t\t}\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t}\n\t}\n"])), function (props) {
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
var Button = styled.button(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral$3(["\n\t.sui-wrap && {\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\n\t\t[class*=\"sui-icon-\"]:before {\n\t\t\tcolor: inherit !important;\n\t\t}\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t}\n\n\t\t&[disabled] {\n\t\t\topacity: 0.5;\n\t\t\tpointer-events: none;\n\t\t}\n\t}\n"])), function (props) {
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
  _inherits$3(Dropdown, _Component);

  var _super = _createSuper$3(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck$3(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized$3(_this));
    _this.wrapperRef = /*#__PURE__*/React.createRef();
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized$3(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized$3(_this));
    return _this;
  }

  _createClass$3(Dropdown, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (state) {
        return {
          open: !state.open
        };
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
      var options = Children.map(this.props.children, function (option) {
        var icon = option.props.icon && '' !== option.props.icon && /*#__PURE__*/React.createElement("span", {
          className: "sui-icon-".concat(option.props.icon),
          "aria-hidden": "true"
        });
        var tag = option.props.tag && '' !== option.props.tag && /*#__PURE__*/React.createElement("span", {
          className: "sui-tag sui-tag-beta",
          style: {
            pointerEvents: 'none',
            display: 'inline',
            marginLeft: 5,
            lineHeight: 1
          }
        }, option.props.tag);
        var label = /*#__PURE__*/React.createElement(Fragment, null, icon, option.props.name, tag);

        if (option.props.href) {
          return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, _extends$a({
            href: option.props.href
          }, option.props), label));
        }

        return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Button, option.props, label));
      });
      var clazz = !open ? 'sui-dropdown' : 'sui-dropdown open';

      switch (this.props.position) {
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

      return /*#__PURE__*/React.createElement("div", {
        className: clazz,
        ref: this.setWrapperRef,
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/React.createElement(ButtonIcon$4, _extends$a({
        icon: "widget-settings-config",
        label: open ? 'Open menu' : 'Close menu',
        onClick: this.toggle
      }, this.props)), open && /*#__PURE__*/React.createElement("ul", {
        onClick: function onClick() {
          return _this2.setState({
            open: false
          });
        }
      }, options));
    }
  }]);

  return Dropdown;
}(Component);

function _extends$9() {
  _extends$9 = Object.assign || function (target) {
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

  return _extends$9.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$1$2(source, excluded) {
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

function _objectWithoutProperties$1$2(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1$2(source, excluded);

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

function _slicedToArray$4(arr, i) {
  return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest$4();
}

function _arrayWithHoles$4(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$4(arr, i) {
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

function _unsupportedIterableToArray$4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
}

function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableRest$4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) {
      _defineProperty$6(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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

function _objectWithoutPropertiesLoose$a(source, excluded) {
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

function _objectWithoutProperties$a(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$a(source, excluded);

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

var _excluded$1$2 = ["label", "icon", "iconSize", "design", "color", "className", "loading"];

var ButtonIcon$3 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$a(_ref, _excluded$1$2);

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
  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2$5({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var _excluded$a = ["id", "label", "description", "type", "errorStatus", "errorDescription", "size", "fieldSize", "suffix", "prefix"];

var Input = function Input(_ref) {
  var id = _ref.id,
      label = _ref.label,
      description = _ref.description,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      errorStatus = _ref.errorStatus,
      errorDescription = _ref.errorDescription,
      size = _ref.size,
      fieldSize = _ref.fieldSize,
      suffix = _ref.suffix,
      prefix = _ref.prefix,
      props = _objectWithoutProperties$1$2(_ref, _excluded$a);

  var uniqueId = id && '' !== id ? id : props.property;

  var _useState = useState(true),
      _useState2 = _slicedToArray$4(_useState, 2),
      showIcon = _useState2[0],
      setShowIcon = _useState2[1];

  var fieldClasses = 'sui-form-field';

  switch (fieldSize) {
    case 'sm':
    case 'small':
      fieldClasses += ' sui-input-sm';
      break;

    case 'md':
    case 'medium':
      fieldClasses += ' sui-input-md';
      break;
  }

  if (errorStatus) {
    fieldClasses += ' sui-form-field-error';
  }

  var inputClasses = 'sui-form-control';
  suffix && (inputClasses += ' sui-field-has-suffix');
  prefix && (inputClasses += ' sui-field-has-prefix');

  switch (size) {
    case 'sm':
    case 'small':
      inputClasses += ' sui-input-sm';
      break;

    case 'md':
    case 'medium':
      inputClasses += ' sui-input-md';
      break;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: fieldClasses
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uniqueId,
    className: "sui-label"
  }, label), prefix && /*#__PURE__*/React.createElement("span", {
    className: "sui-field-prefix"
  }, prefix), type === 'password' ? /*#__PURE__*/React.createElement("div", {
    className: "sui-with-button sui-with-button-icon"
  }, /*#__PURE__*/React.createElement("input", _extends$9({
    id: uniqueId,
    type: showIcon ? type : 'text',
    className: inputClasses
  }, props)), /*#__PURE__*/React.createElement(ButtonIcon$3, {
    icon: showIcon ? "eye" : "eye-hide",
    label: showIcon ? "Show password" : "Hide password",
    onClick: function onClick() {
      setShowIcon(!showIcon);
    }
  })) : /*#__PURE__*/React.createElement("input", _extends$9({
    id: uniqueId,
    type: type,
    className: inputClasses
  }, props)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "sui-field-suffix"
  }, suffix), errorStatus && errorDescription && /*#__PURE__*/React.createElement("div", {
    className: "sui-error-message"
  }, errorDescription), description && /*#__PURE__*/React.createElement("p", {
    className: "sui-description"
  }, description));
};

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
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
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
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

function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) {
      _defineProperty$5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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

function _objectWithoutPropertiesLoose$9(source, excluded) {
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

function _objectWithoutProperties$9(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$9(source, excluded);

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

var _excluded$9 = ["label", "icon", "iconSize", "design", "color", "className", "loading"];

var ButtonIcon$2 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$9(_ref, _excluded$9);

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
  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2$4({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var Notifications = /*#__PURE__*/function (_Component) {
  _inherits$2(Notifications, _Component);

  var _super = _createSuper$2(Notifications);

  function Notifications(props) {
    var _this;

    _classCallCheck$2(this, Notifications);

    _this = _super.call(this, props);

    _defineProperty$1$1(_assertThisInitialized$2(_this), "close", function () {
      _this.setState({
        hide: true
      });

      _this.props.cbFunction ? _this.props.cbFunction() : '';
    });

    _this.state = {
      hide: false
    };
    _this.close = _this.close.bind(_assertThisInitialized$2(_this));
    return _this;
  }

  _createClass$2(Notifications, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hide = this.state.hide;
      var classMain = 'sui-notice';
      var classIcon = 'sui-notice-icon sui-md';

      switch (this.props.type) {
        case 'info':
        case 'success':
        case 'warning':
        case 'error':
        case 'upsell':
          classMain += ' sui-notice-' + this.props.type;

          if (this.props.loading) {
            classIcon += ' sui-icon-loader sui-loading';
          } else {
            classIcon += ' sui-icon-info';
          }

          break;

        default:
          if (this.props.loading) {
            classIcon += ' sui-icon-loader sui-loading';
          } else {
            classIcon += ' sui-icon-info';
          }

          break;
      }

      var lang = Object.assign({
        dismiss: 'Hide Notification'
      }, this.props.sourceLang);
      var message = /*#__PURE__*/React.createElement("div", {
        className: "sui-notice-message"
      }, /*#__PURE__*/React.createElement("span", {
        className: classIcon,
        "aria-hidden": "true"
      }), this.props.children);
      var actions = /*#__PURE__*/React.createElement("div", {
        className: "sui-notice-actions"
      }, /*#__PURE__*/React.createElement(ButtonIcon$2, {
        icon: "check",
        label: lang.dismiss,
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }));

      if (!hide) {
        return /*#__PURE__*/React.createElement("div", {
          className: classMain
        }, /*#__PURE__*/React.createElement("div", {
          className: "sui-notice-content"
        }, message, this.props.dismiss && actions));
      }

      return null;
    }
  }]);

  return Notifications;
}(Component);

function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) {
      _defineProperty$4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

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

function _extends$8() {
  _extends$8 = Object.assign || function (target) {
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

  return _extends$8.apply(this, arguments);
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

function _slicedToArray$3(arr, i) {
  return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$3(arr);
}

function _arrayWithHoles$3(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit$3(arr, i) {
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

function _unsupportedIterableToArray$3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}

function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded$8 = ["limit", "skip", "results", "skipToFirstLabel", "previousLabel", "nextLabel", "skipToLastLabel", "pagesToBottom"];

var Pagination = function Pagination(_ref) {
  var _componentWrapper$pro, _componentWrapper$pro2, _componentWrapper$pro3;

  var limit = _ref.limit,
      skip = _ref.skip,
      results = _ref.results,
      skipToFirstLabel = _ref.skipToFirstLabel,
      previousLabel = _ref.previousLabel,
      nextLabel = _ref.nextLabel,
      skipToLastLabel = _ref.skipToLastLabel,
      pagesToBottom = _ref.pagesToBottom,
      args = _objectWithoutProperties$8(_ref, _excluded$8);

  var componentWrapper = args.children,
      componentChildren = componentWrapper !== null && componentWrapper !== void 0 && (_componentWrapper$pro = componentWrapper.props) !== null && _componentWrapper$pro !== void 0 && _componentWrapper$pro.children ? (componentWrapper === null || componentWrapper === void 0 ? void 0 : (_componentWrapper$pro2 = componentWrapper.props) === null || _componentWrapper$pro2 === void 0 ? void 0 : (_componentWrapper$pro3 = _componentWrapper$pro2.children) === null || _componentWrapper$pro3 === void 0 ? void 0 : _componentWrapper$pro3.length) > 1 ? _toConsumableArray(componentWrapper.props.children) : [componentWrapper.props.children] : [],
      childElements = [].concat(componentChildren),
      elements = childElements.length,
      pages = elements / limit > parseInt(elements / limit) ? parseInt(elements / limit) + 1 : elements / limit,
      _useState = useState([]),
      _useState2 = _slicedToArray$3(_useState, 2),
      pagesArray = _useState2[0],
      setPagesArray = _useState2[1],
      _useState3 = useState('1'),
      _useState4 = _slicedToArray$3(_useState3, 2),
      selectedPage = _useState4[0],
      setSelectedPage = _useState4[1],
      _useState5 = useState(0),
      _useState6 = _slicedToArray$3(_useState5, 2),
      startIndex = _useState6[0],
      setStartIndex = _useState6[1],
      _useState7 = useState(pages >= 5 ? 5 : pages),
      _useState8 = _slicedToArray$3(_useState7, 2),
      endIndex = _useState8[0],
      setEndIndex = _useState8[1],
      _useState9 = useState(0),
      _useState10 = _slicedToArray$3(_useState9, 2),
      pageClickCounter = _useState10[0],
      setPageClickCounter = _useState10[1],
      _useState11 = useState(0),
      _useState12 = _slicedToArray$3(_useState11, 2),
      elementsStartIndex = _useState12[0],
      setElementsStartIndex = _useState12[1],
      _useState13 = useState(limit),
      _useState14 = _slicedToArray$3(_useState13, 2),
      elementsEndIndex = _useState14[0],
      setElementsEndIndex = _useState14[1];

  useEffect(function () {
    var pagesArray = [];

    for (var i = 1; i <= pages; ++i) {
      pagesArray.push(i);
    }

    setPagesArray(pagesArray);
  }, []);
  useEffect(function () {
    selectedPage >= endIndex && incrementIndexes();
    selectedPage <= startIndex + 1 && decrementIndexes();
  }, [pageClickCounter]);
  useEffect(function () {
    if (selectedPage !== '1') {
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

  var properties = {
    componentWrapper: componentWrapper,
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
    skipToFirstLabel: skipToFirstLabel,
    previousLabel: previousLabel,
    nextLabel: nextLabel,
    skipToLastLabel: skipToLastLabel,
    skip: skip,
    results: results,
    elements: elements
  };
  if (args !== null && args !== void 0 && args.paginationContent) return /*#__PURE__*/React.createElement(React.Fragment, null, args === null || args === void 0 ? void 0 : args.paginationContent(_objectSpread2$3({}, properties)));else return /*#__PURE__*/React.createElement(React.Fragment, null, pagesToBottom && PaginationResults(_objectSpread2$3({}, properties)), PaginationNav(_objectSpread2$3({}, properties)), !pagesToBottom && PaginationResults(_objectSpread2$3({}, properties)));
};

var PaginationResults = function PaginationResults(_ref3) {
  var _React$Children$map;

  var properties = _extends$8({}, _ref3);

  var items = (_React$Children$map = React.Children.map(properties.childElements, function (data) {
    return /*#__PURE__*/React.cloneElement(data);
  })) === null || _React$Children$map === void 0 ? void 0 : _React$Children$map.slice(properties.elementsStartIndex, properties.elementsEndIndex);
  return React.Children.map(properties.componentWrapper, function (data) {
    return /*#__PURE__*/React.cloneElement(data, '', items);
  });
};

var PaginationNav = function PaginationNav(_ref4) {
  var _properties$pagesArra, _properties$pagesArra2;

  var properties = _extends$8({}, _ref4);

  return properties.pagesArray.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "sui-pagination-wrap"
  }, properties.results && /*#__PURE__*/React.createElement("span", {
    className: "sui-pagination-results"
  }, properties.elements, " results"), /*#__PURE__*/React.createElement("ul", {
    className: "sui-pagination"
  }, properties.skip && /*#__PURE__*/React.createElement("li", {
    onClick: properties.handleSkipToFirstPage
  }, /*#__PURE__*/React.createElement("a", {
    disabled: properties.selectedPage <= 1
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, properties.skipToFirstLabel || 'Go to first page'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    title: properties.skipToFirstLabel || 'Go to first page',
    className: "sui-icon-arrow-skip-back"
  }))), /*#__PURE__*/React.createElement("li", {
    onClick: properties.handlePreviousPage
  }, /*#__PURE__*/React.createElement("a", {
    disabled: properties.selectedPage <= 1
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, properties.previousLabel || 'Go to previous page'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    title: properties.previousLabel || 'Go to previous page',
    className: "sui-icon-chevron-left"
  }))), properties.startIndex > 0 && /*#__PURE__*/React.createElement("li", {
    onClick: properties.handlePreviousEllipsis
  }, /*#__PURE__*/React.createElement("a", null, "\u2026")), (_properties$pagesArra = properties.pagesArray) === null || _properties$pagesArra === void 0 ? void 0 : (_properties$pagesArra2 = _properties$pagesArra.slice(properties.startIndex, properties.endIndex)) === null || _properties$pagesArra2 === void 0 ? void 0 : _properties$pagesArra2.map(function (data, index) {
    return /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return properties.handlePageClick(parseInt(data));
      },
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      "aria-selected": properties.selectedPage === data,
      className: properties.selectedPage == data ? 'sui-active' : ''
    }, data));
  }), properties.endIndex < properties.pages && /*#__PURE__*/React.createElement("li", {
    onClick: properties.handleNextEllipsis
  }, /*#__PURE__*/React.createElement("a", null, "\u2026")), /*#__PURE__*/React.createElement("li", {
    onClick: properties.handleNextPage
  }, /*#__PURE__*/React.createElement("a", {
    disabled: properties.selectedPage >= properties.pages
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, properties.nextLabel || 'Go to next page.'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    title: properties.nextLabel || 'Go to next page.',
    className: "sui-icon-chevron-right"
  }))), properties.skip && /*#__PURE__*/React.createElement("li", {
    onClick: properties.handleSkipToLastPage
  }, /*#__PURE__*/React.createElement("a", {
    disabled: properties.selectedPage >= properties.pages
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, properties.skipToLastLabel || 'Go to last page.'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    title: properties.skipToLastLabel || 'Go to last page',
    className: "sui-icon-arrow-skip-forward"
  })))));
};

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
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

function _extends$7() {
  _extends$7 = Object.assign || function (target) {
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

  return _extends$7.apply(this, arguments);
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
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
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
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

var _templateObject$2, _templateObject2$1, _templateObject3$1, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

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
var PostWrapper = styled.div.attrs(function (props) {
  return {
    tabIndex: 0,
    props: props
  };
})(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral$2(["\n\t", "\n\tcursor: pointer;\n\t", "\n\t", "\n\tpadding: ", ";\n\tborder-radius: 4px;\n\tbackground-color: #fff;\n\t", "\n\ttransition: 0.2s ease all;\n\n\t* {\n\t\tpointer-events: none;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\t", "\n\n\t\t", "\n\t}\n\n\t&[disabled] {\n\t\tpointer-events: none;\n\t\topacity: 0.5;\n\t}\n\n\t", "\n\n\t&:focus {\n\t\toutline: none;\n\t\t", "\n\t}\n\n\t@media ", " {\n\t\t", "\n\t}\n"])), function (props) {
  return props.banner ? 'overflow: hidden;' : '';
}, function (props) {
  return props.banner ? 'display: flex;' : '';
}, function (props) {
  return props.banner ? 'flex-flow: column nowrap;' : '';
}, function (props) {
  return props.banner ? '20px 20px 30px' : '10px';
}, function (props) {
  return props.banner ? 'box-shadow: 0 0 0 1px #E6E6E6;' : '';
}, function (props) {
  return props.banner ? 'transform: scale(1.02);' : 'background-color: #FAFAFA;';
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\t\ttransform: scale(1.05);\n\t\t\t}") : '';
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\tbox-shadow: 0 2px 7px 0 rgba(0,0,0,0.05);\n\t\t}") : '';
}, function (props) {
  return props.banner ? 'box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05), 0 0 2px 0 #17A8E3;' : '';
}, device$1.tablet, function (props) {
  return props.banner ? 'min-height: 100%;' : 'padding: 15px;';
});
var PostHeader = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral$2(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\n\t+ div {\n\t\tmargin-top: 20px;\n\t}\n"])));
var PostFooter = styled.div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral$2(["\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\tflex-flow: row wrap;\n\talign-items: center;\n\tmargin-top: 15px;\n"])));
var FeaturedImage = styled.div.attrs(function () {
  return {
    tabIndex: '-1',
    'aria-hidden': true
  };
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral$2(["\n\t", "\n\theight: ", ";\n\tmargin: ", ";\n\t", "\n\tdisplay: block;\n\t", "\n\tbackground-color: #FFF;\n\tbackground-image: ", ";\n\tbackground-size: cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n"])), function (props) {
  return props.banner ? '' : 'width: 66px;';
}, function (props) {
  return props.banner ? '140px' : '54px';
}, function (props) {
  return props.banner ? '-20px -20px 20px' : '0 10px 0 0';
}, function (props) {
  return props.banner ? '' : 'border-radius: 4px;';
}, function (props) {
  return props.banner ? 'flex: 0 0 auto;' : '';
}, function (props) {
  return props.src ? "url(".concat(props.src, ")") : 'none';
});
var PostTitle = styled.h3(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral$2(["\n\toverflow: hidden;\n\tdisplay: -webkit-box !important;\n\t-webkit-box-orient: vertical;\n\t", "\n\tmargin: ", " !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px;\n\t", "\n\n\t", "\n"])), function (props) {
  return props.banner ? 'flex: 1 1 auto;' : '';
}, function (props) {
  return props.banner ? '0 0 10px' : '0';
}, function (props) {
  return props.banner ? '' : '-webkit-line-clamp: 2;';
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\t-webkit-line-clamp: 2;\n\t\t}") : '';
});
var PostTime = styled.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral$2(["\n\t", "\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tcolor: #888 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tletter-spacing: -0.2px;\n\n\t", "\n"])), function (props) {
  return props.banner ? 'flex: 0 0 auto;' : '';
}, function (props) {
  return props.banner ? "* + & {\n\t\t\tmargin-left: 5px !important;\n\t\t}" : '';
});
var Excerpt = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral$2(["\n\tdisplay: block;\n\t", "\n\n\tp {\n\t\toverflow: hidden;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\tmargin: 0 !important;\n\t\tpadding: 0 !important;\n\t\tborder: 0;\n\t\tcolor: #888 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\t\tletter-spacing: -0.2px;\n\t\t-webkit-line-clamp: ", ";\n\t}\n"])), function (props) {
  return props.banner ? 'flex: 1 1 auto;' : '';
}, function (props) {
  return props.banner ? '3' : '2';
});
var ReadMore = styled.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral$2(["\n\tmin-width: 1px;\n\tflex: 1;\n\t", "\n\tcolor: #17A8E3 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px !important;\n"])), function (props) {
  return props.banner ? 'margin-bottom: 0 !important;' : 'margin: 4px 0 0;';
});

var Post = /*#__PURE__*/function (_Component) {
  _inherits$1(Post, _Component);

  var _super = _createSuper$1(Post);

  function Post(props) {
    var _this;

    _classCallCheck$1(this, Post);

    _this = _super.call(this, props);

    _defineProperty$3(_assertThisInitialized$1(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;

      if (ref) {
        window.open(ref.getAttribute('data-href'), '_blank');
      }
    });

    _defineProperty$3(_assertThisInitialized$1(_this), "handleKeydown", function (e) {
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
    _this.openLink = _this.openLink.bind(_assertThisInitialized$1(_this));
    _this.handleKeydown = _this.handleKeydown.bind(_assertThisInitialized$1(_this));
    return _this;
  }

  _createClass$1(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var API_URL = 'https://wpmudev.com/blog/wp-json/wp/v2/media/';
      var QUERY_ID = this.props.media; // GET media using fetch.

      if (QUERY_ID) {
        fetch(API_URL + QUERY_ID).then(function (response) {
          return response.json();
        }).then(function (data) {
          var _data$data;

          if (((_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.status) === 404) {
            _this2.setState({
              isLoaded: true,
              error: data.data.message
            });
          } else {
            _this2.setState({
              isLoaded: true,
              media: data.guid.rendered
            });
          }
        }, function (error) {
          _this2.setState({
            isLoaded: true,
            error: error
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          media = _this$state.media,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded;
      var translate = this.props.translate;
      var read_article = translate && translate[0].read_article ? translate[0].read_article : 'Read article';
      var min_read = translate && translate[0].min_read ? translate[0].min_read : 'min read'; // replace html entities from the title with character.

      var postTitle = this.props.title.replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec);
      });
      var PostImage = ''; // Empty.

      var image = this.props.image;

      if (image) {
        PostImage = /*#__PURE__*/React.createElement(FeaturedImage, _extends$7({
          src: image,
          alt: ""
        }, this.props, {
          title: postTitle
        }));
      } else {
        if (error) {
          PostImage = error.message;
        } else if ((typeof image === 'undefined' || image === null || image === '') && !this.props.media || error) {
          PostImage = /*#__PURE__*/React.createElement("span", {
            style: {
              marginTop: '10px'
            }
          });
        } else if (!isLoaded) {
          PostImage = /*#__PURE__*/React.createElement("p", {
            style: {
              textAlign: 'center'
            }
          }, /*#__PURE__*/React.createElement("span", {
            className: "sui-icon-loader sui-loading",
            "aria-hidden": "true"
          }), /*#__PURE__*/React.createElement("span", {
            className: "sui-screen-reader-text"
          }, "Image is loading"));
        } else {
          PostImage = /*#__PURE__*/React.createElement(FeaturedImage, _extends$7({
            src: media
          }, this.props, {
            title: postTitle
          }));
        }
      }

      if (this.props.banner) {
        return /*#__PURE__*/React.createElement(PostWrapper, _extends$7({}, this.props, {
          title: postTitle
        }), PostImage, this.props.title && '' !== this.props.title && /*#__PURE__*/React.createElement(PostTitle, {
          banner: true,
          dangerouslySetInnerHTML: {
            __html: this.props.title
          }
        }), this.props.excerpt && '' !== this.props.excerpt && /*#__PURE__*/React.createElement(Excerpt, {
          banner: true,
          dangerouslySetInnerHTML: {
            __html: this.props.excerpt
          }
        }), /*#__PURE__*/React.createElement(PostFooter, {
          banner: true
        }, /*#__PURE__*/React.createElement(ReadMore, {
          banner: true
        }, read_article), this.props.time && '' !== this.props.time && /*#__PURE__*/React.createElement(PostTime, {
          banner: true
        }, /*#__PURE__*/React.createElement("span", {
          className: "sui-icon-clock sui-sm",
          style: {
            verticalAlign: 'middle',
            marginRight: 5
          },
          "aria-hidden": "true"
        }), this.props.time, " ", min_read)));
      }

      return /*#__PURE__*/React.createElement(PostWrapper, _extends$7({}, this.props, {
        title: postTitle
      }), /*#__PURE__*/React.createElement(PostHeader, null, PostImage, /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: '1px',
          flex: 1
        }
      }, this.props.title && '' !== this.props.title && /*#__PURE__*/React.createElement(PostTitle, {
        dangerouslySetInnerHTML: {
          __html: this.props.title
        }
      }), this.props.time && '' !== this.props.time && /*#__PURE__*/React.createElement(PostTime, null, "*", this.props.time, " ", min_read))), this.props.excerpt && '' !== this.props.excerpt && /*#__PURE__*/React.createElement(Excerpt, {
        dangerouslySetInnerHTML: {
          __html: this.props.excerpt
        }
      }), /*#__PURE__*/React.createElement(ReadMore, null, read_article));
    }
  }]);

  return Post;
}(Component);

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

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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

var _excluded$1$1 = ["label", "icon", "iconSize", "design", "color", "className", "loading"];

var ButtonIcon$1 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$7(_ref, _excluded$1$1);

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
  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2$2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var _excluded$7 = ["classes", "now", "hasLoader", "hasLabel", "hasCancel", "hasFrame", "hasLegend", "sourceLang", "cbFunction"];

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
      props = _objectWithoutProperties$1$1(_ref, _excluded$7);

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
  var innerMarkup = /*#__PURE__*/React.createElement("div", _extends$6({
    className: "sui-progress".concat(extraClasses)
  }, props), loaderMarkup, loaderText, loaderBar, hasCancel && /*#__PURE__*/React.createElement(ButtonIcon$1, {
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

function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}

function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$2(arr, i) {
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

function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded$6 = ["id", "label", "hideLabel", "description", "hideDescription", "checked", "disabled", "children", "cbFunction"];

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
      args = _objectWithoutProperties$6(_ref, _excluded$6);

  var _useState = useState(checked),
      _useState2 = _slicedToArray$2(_useState, 2),
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


  useEffect(function () {
    return initialState;
  }, []);
  var hasLabel = !isUndefined(label) ? true : false;
  var hasDescription = !isUndefined(description) ? true : false;
  var hasContent = !isUndefined(children) ? true : false;
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "sui-toggle"
  }, /*#__PURE__*/React.createElement("input", _extends$5({
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
  }, args)), /*#__PURE__*/React.createElement("span", {
    className: "sui-toggle-slider",
    "aria-hidden": "true"
  }), hasLabel && /*#__PURE__*/React.createElement("span", {
    id: "".concat(id, "--label"),
    className: "sui-toggle-label".concat(!isUndefined(hideLabel) ? ' sui-screen-reader-text' : '')
  }, label), hasDescription && /*#__PURE__*/React.createElement("span", {
    id: "".concat(id, "--description"),
    className: "sui-description".concat(true === hideDescription ? ' sui-screen-reader-text' : '')
  }, description)), hasContent && state && /*#__PURE__*/React.createElement("div", {
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

var _excluded$5 = ["type", "label", "labelId", "id", "name", "image", "defaultChecked", "disabled"],
    _excluded2$2 = ["type", "options"];

var RadioCheckboxInput$1 = function RadioCheckboxInput(_ref) {
  var type = _ref.type,
      label = _ref.label,
      labelId = _ref.labelId,
      id = _ref.id,
      name = _ref.name,
      image = _ref.image,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      props = _objectWithoutProperties$5(_ref, _excluded$5);

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
  }, /*#__PURE__*/React.createElement("input", _extends$4({
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
  }, /*#__PURE__*/React.createElement("input", _extends$4({
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

var RadioCheckboxGroup = function RadioCheckboxGroup(_ref2) {
  var type = _ref2.type,
      options = _ref2.options,
      props = _objectWithoutProperties$5(_ref2, _excluded2$2);

  return /*#__PURE__*/React.createElement("div", {
    className: "sui-form-field",
    role: 'radio' === type ? 'radiogroup' : 'group'
  }, options === null || options === void 0 ? void 0 : options.map(function (option, index) {
    return option.image ? /*#__PURE__*/React.createElement(RadioCheckboxInput$1, _extends$4({
      key: index,
      type: type,
      label: option.label,
      labelId: option.labelId,
      id: option.id,
      name: option.name,
      image: option.image,
      checked: option.defaultChecked,
      disabled: option.disabled
    }, props)) : /*#__PURE__*/React.createElement(RadioCheckboxInput$1, _extends$4({
      key: index,
      type: type,
      label: option.label,
      labelId: option.labelId,
      id: option.id,
      name: option.name,
      checked: option.defaultChecked,
      disabled: option.disabled
    }, props));
  }));
};

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

var _templateObject$1, _templateObject2, _templateObject3;

var _excluded$4 = ["children", "className"],
    _excluded2$1 = ["icon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"],
    _excluded3$1 = ["title", "titleIcon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"],
    _excluded4$1 = ["className", "children"],
    _excluded5 = ["className", "children"];
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
      props = _objectWithoutProperties$4(_ref, _excluded$4);

  return /*#__PURE__*/React.createElement("div", _extends$3({
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
      props = _objectWithoutProperties$4(_ref2, _excluded2$1);

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

  return /*#__PURE__*/React.createElement("h3", _extends$3({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box-title ".concat(className) : 'sui-box-title'
  }, props), icon && '' !== icon && /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-".concat(icon, " sui-md"),
    "aria-hidden": "true"
  }), children, tagLabel && '' !== tagLabel && /*#__PURE__*/React.createElement("span", {
    className: tagClass,
    style: {
      marginLeft: 10
    }
  }, tagLabel));
};

var Header = styled.div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral$1(["\n\t.sui-wrap && {\n\t\tdisplay: ", ";\n\t\t", "\n\t\t", "\n\tmargin: 0;\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t\tborder: 0 solid #e6e6e6;\n\t\tborder-bottom-width: ", "px;\n\t\t", "\n\n\t\t", "\n\t", "\n\n\t@media ", " {\n\t\t\tpadding-top: ", "px;\n\t\t\tpadding-right: ", "px;\n\t\t\tpadding-bottom: ", "px;\n\t\t\tpadding-left: ", "px;\n\t\t}\n\t}\n"])), function (props) {
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
      tagDesign = _ref3.tagDesign;
  _ref3.className;

  var children = _ref3.children,
      props = _objectWithoutProperties$4(_ref3, _excluded3$1);

  return /*#__PURE__*/React.createElement(Header, props, title && '' !== title && /*#__PURE__*/React.createElement(BoxTitle, {
    icon: titleIcon,
    tagLabel: tagLabel,
    tagColor: tagColor,
    tagSize: tagSize,
    tagDesign: tagDesign
  }, title), children);
};

var Body = styled.div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral$1(["\n\t.sui-wrap && {\n\t\tmargin: 0;\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t\tborder: 0 solid #e6e6e6;\n\t\tborder-top-width: ", "px;\n\t\tborder-bottom-width: ", "px;\n\t\ttext-align: ", ";\n\n\t\t@media ", " {\n\t\t\tpadding-top: ", "px;\n\t\t\tpadding-right: ", "px;\n\t\t\tpadding-bottom: ", "px;\n\t\t\tpadding-left: ", "px;\n\t\t}\n\t}\n"])), function (props) {
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
      props = _objectWithoutProperties$4(_ref4, _excluded4$1);

  return /*#__PURE__*/React.createElement(Body, _extends$3({
    className: className
  }, props), children);
};

var Footer = styled.div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral$1(["\n\t.sui-wrap && {\n\t\tdisplay: ", ";\n\t\t", "\n\t\t", "\n\tmargin: 0;\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t\tborder: 0 solid #e6e6e6;\n\t\tborder-top-width: ", "px;\n\t\t", "\n\n\t\t", "\n\t", "\n\n\t@media ", " {\n\t\t\tpadding-top: ", "px;\n\t\t\tpadding-right: ", "px;\n\t\t\tpadding-bottom: ", "px;\n\t\t\tpadding-left: ", "px;\n\t\t}\n\t}\n"])), function (props) {
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
      props = _objectWithoutProperties$4(_ref5, _excluded5);

  return /*#__PURE__*/React.createElement(Footer, _extends$3({
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

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
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

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

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
  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2$1({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

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
      props = _objectWithoutProperties$3(_ref, _excluded$1);

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
  }, /*#__PURE__*/React.createElement("input", _extends$2({
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
  }, /*#__PURE__*/React.createElement("input", _extends$2({
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

var _excluded$3 = ["children"],
    _excluded2 = ["title", "titleSize", "icon", "image", "children", "checkboxInput", "checkboxId", "checkboxName", "checkboxLabel", "checkboxSelected", "checkboxClickHandler"],
    _excluded3 = ["title", "titleSize", "icon", "image", "children", "checkboxInput", "checkboxId", "checkboxName", "checkboxLabel", "checkboxSelected", "checkboxClickHandler"],
    _excluded4 = ["children"];

var _templateObject;

var ItemImage = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\twidth: 30px;\n\theight: 30px;\n\tmargin-right: 10px;\n\tborder-radius: 10px;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: center;\n"])));

var useToggle = function useToggle() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray$1(_useState, 2),
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
      props = _objectWithoutProperties$2(_ref, _excluded$3);

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
      _useToggle2 = _slicedToArray$1(_useToggle, 2),
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
      _useState4 = _slicedToArray$1(_useState3, 1),
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

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
} // https://github.com/davidtheclark/no-scroll/blob/master/index.js


var isOn = false;
var scrollbarSize;
var scrollTop;

function getScrollbarSize() {
  if (typeof scrollbarSize !== 'undefined') return scrollbarSize;
  var doc = document.documentElement;
  var dummyScroller = document.createElement('div');
  dummyScroller.setAttribute('style', 'width:99px;height:99px;' + 'position:absolute;top:-9999px;overflow:scroll;');
  doc.appendChild(dummyScroller);
  scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
  doc.removeChild(dummyScroller);
  return scrollbarSize;
}

function hasScrollbar() {
  return document.documentElement.scrollHeight > window.innerHeight;
}

function on() {
  if (typeof document === 'undefined' || isOn) return;
  var doc = document.documentElement;
  scrollTop = window.pageYOffset;

  if (hasScrollbar()) {
    doc.style.width = 'calc(100% - ' + getScrollbarSize() + 'px)';
  } else {
    doc.style.width = '100%';
  }

  doc.style.position = 'fixed';
  doc.style.top = -scrollTop + 'px';
  doc.style.overflow = 'hidden';
  isOn = true;
}

function off() {
  if (typeof document === 'undefined' || !isOn) return;
  var doc = document.documentElement;
  doc.style.width = '';
  doc.style.position = '';
  doc.style.top = '';
  doc.style.overflow = '';

  if (typeof scrollTop === 'number') {
    window.scroll(0, scrollTop);
  }

  isOn = false;
} // https://github.com/davidtheclark/tabbable/blob/master/src/index.js


var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
var candidateSelector = candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {
  return false;
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function getHTMLElements(root, selector) {
  var result = [];

  var _iterator = _createForOfIteratorHelper(root.querySelectorAll(selector)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var el = _step.value;

      if (el instanceof HTMLElement) {
        result.push(el);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}

function tabbable(el, optionalOptions) {
  var options = optionalOptions || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getHTMLElements(el, candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var candidate;
  var candidateTabindex;

  for (var i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate)) {
      continue;
    }

    candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node) {
  if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
}

function isTabbable(node) {
  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, candidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorTabbable(node);
}

function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node)) {
    return false;
  }

  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');

function isFocusable(node) {
  if (!node) {
    throw new Error('No node provided');
  } // Added this to make TypeScript work.


  if (!(node instanceof HTMLElement)) return false;

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(node);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);

  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.


  if (isContentEditable(node)) {
    return 0;
  }

  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }

  return undefined;
}

function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  if (!node.ownerDocument) {
    // Need this for TypeScript to be OK with the rest of this code.
    // I guess we'll just assume that anything without an owner
    // document isn't tabbable...
    return false;
  } // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.


  var radioSet = Array.from(node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]'));
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

function isHidden(node) {
  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

var activeFocusDelay;

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

function getHTMLElement(doc, selector) {
  var el = doc.querySelector(selector);

  if (!(el && el instanceof HTMLElement)) {
    throw new Error("No HTML element matches \"".concat(selector, "\"!"));
  }

  return el;
}

function createFocusTrap(element, userOptions) {
  var doc = document;
  var container = typeof element === 'string' ? getHTMLElement(doc, element) : element;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true
  }, userOptions);

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };
  return trap;

  function activate(activateOptions) {
    if (state.active) return;
    updateTabbableNodes();
    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;
    var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;
    clearTimeout(activeFocusDelay);
    removeListeners();
    state.active = false;
    state.paused = false;
    activeFocusTraps.deactivateTrap(trap);
    var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

    if (returnFocus) {
      delay(function () {
        tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
      });
    }

    return trap;
  }

  function containerContains(el) {
    if (el && el instanceof Node) return container.contains(el);
    return false;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    updateTabbableNodes();
    addListeners();
  }

  function addListeners() {
    if (!state.active) return; // There can be only one listening focus trap at a time

    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    activeFocusDelay = delay(function () {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  }

  function removeListeners() {
    if (!state.active) return;
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;

    if (!optionValue) {
      return null;
    }

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }

    return node;
  }

  function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  }

  function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  } // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  function checkPointerDown(e) {
    if (containerContains(e.target)) return;

    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }

    e.preventDefault();
  } // In case focus escapes the trap for some strange reason, pull it back in.


  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (containerContains(e.target) || e.target instanceof Document) {
      return;
    }

    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  } // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  function checkTab(e) {
    updateTabbableNodes();

    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }

    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (containerContains(e.target)) return;

    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: userOptions.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return window.setTimeout(fn, 0);
}

function isFocusableElement(el) {
  // This isn't actually a great way of testing this, but we want to
  // preserve the original behavior while also satisfying TypeScript.
  return el.focus;
}

var ReactFocusTrap = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactFocusTrap, _React$Component);

  var _super = _createSuper(ReactFocusTrap);

  function ReactFocusTrap(props) {
    var _this;

    _classCallCheck(this, ReactFocusTrap);

    _this = _super.call(this, props);

    _this.setFocusTrapElement = function (element) {
      _this.focusTrapElement = element;
    };

    if (typeof document !== 'undefined') {
      _this.previouslyFocusedElement = document.activeElement;
    }

    return _this;
  }

  _createClass(ReactFocusTrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // We need to hijack the returnFocusOnDeactivate option,
      // because React can move focus into the element before we arrived at
      // this lifecycle hook (e.g. with autoFocus inputs). So the component
      // captures the previouslyFocusedElement in componentWillMount,
      // then (optionally) returns focus to it in componentWillUnmount.
      var specifiedFocusTrapOptions = this.props.focusTrapOptions;
      var tailoredFocusTrapOptions = {
        returnFocusOnDeactivate: false
      };

      for (var optionName in specifiedFocusTrapOptions) {
        if (!Object.prototype.hasOwnProperty.call(specifiedFocusTrapOptions, optionName)) continue;
        if (optionName === 'returnFocusOnDeactivate') continue;
        tailoredFocusTrapOptions[optionName] = specifiedFocusTrapOptions[optionName];
      } // eslint-disable-next-line react/no-find-dom-node


      var focusTrapElementDOMNode = ReactDOM.findDOMNode(this.focusTrapElement);

      if (!(focusTrapElementDOMNode instanceof HTMLElement)) {
        throw new Error('Focus trap element DOM node is not an HTML element!');
      }

      this.focusTrap = this.props._createFocusTrap(focusTrapElementDOMNode, tailoredFocusTrapOptions);

      if (this.props.active) {
        this.focusTrap.activate();
      }

      if (this.props.paused) {
        this.focusTrap.pause();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.focusTrap) {
        throw new Error('Assertion failure!');
      }

      if (prevProps.active && !this.props.active) {
        var returnFocusOnDeactivate = this.props.focusTrapOptions.returnFocusOnDeactivate;
        var returnFocus = returnFocusOnDeactivate || false;
        var config = {
          returnFocus: returnFocus
        };
        this.focusTrap.deactivate(config);
      } else if (!prevProps.active && this.props.active) {
        this.focusTrap.activate();
      }

      if (prevProps.paused && !this.props.paused) {
        this.focusTrap.unpause();
      } else if (!prevProps.paused && this.props.paused) {
        this.focusTrap.pause();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.focusTrap) {
        throw new Error('Assertion failure!');
      }

      this.focusTrap.deactivate();

      if (this.props.focusTrapOptions.returnFocusOnDeactivate !== false && this.previouslyFocusedElement && isFocusableElement(this.previouslyFocusedElement)) {
        this.previouslyFocusedElement.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var child = React.Children.only(this.props.children);

      var composedRefCallback = function composedRefCallback(element) {
        _this2.setFocusTrapElement(element);

        if (typeof child.ref === 'function') {
          child.ref(element);
        }
      };

      var childWithRef = /*#__PURE__*/React.cloneElement(child, {
        ref: composedRefCallback
      });
      return childWithRef;
    }
  }]);

  return ReactFocusTrap;
}(React.Component);

ReactFocusTrap.defaultProps = {
  active: true,
  paused: false,
  focusTrapOptions: {},
  _createFocusTrap: createFocusTrap
};

function displace(WrappedComponent, optionalOptions) {
  var options = optionalOptions || {};

  var Displaced = /*#__PURE__*/function (_React$Component) {
    _inherits(Displaced, _React$Component);

    var _super = _createSuper(Displaced);

    function Displaced() {
      _classCallCheck(this, Displaced);

      return _super.apply(this, arguments);
    }

    _createClass(Displaced, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.container = function () {
          var renderTo = options.renderTo;

          if (!renderTo) {
            var result = document.createElement('div');
            document.body.appendChild(result);
            return result;
          } else if (typeof renderTo === 'string') {
            var el = document.querySelector(renderTo);

            if (!el) {
              throw new Error("No element matches \"".concat(renderTo, "\"!"));
            }

            return el;
          } else {
            return renderTo;
          }
        }();

        this.forceUpdate();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (!options.renderTo && this.container && this.container.parentNode) {
          this.container.parentNode.removeChild(this.container);
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.mounted === false) return null;

        if (this.container) {
          return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(WrappedComponent, this.props, this.props.children), this.container);
        }

        return false;
      }
    }]);

    return Displaced;
  }(React.Component);

  return Displaced;
}

var Modal$1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "clearTimer", function () {
      var _this$timeout;

      (_this$timeout = _this.timeout) === null || _this$timeout === void 0 ? void 0 : _this$timeout.forEach(function (timer) {
        clearTimeout(timer);
      });
    });

    _this.getApplicationNode = function () {
      if (_this.props.getApplicationNode) return _this.props.getApplicationNode();
      return _this.props.applicationNode;
    };

    _this.checkUnderlayClick = function (event) {
      if (_this.dialogNode && event.target instanceof Node && _this.dialogNode.contains(event.target) || // If the click is on the scrollbar we don't want to close the modal.
      event.target instanceof Element && event.target.ownerDocument && (event.pageX > event.target.ownerDocument.documentElement.offsetWidth || event.pageY > event.target.ownerDocument.documentElement.offsetHeight)) return;

      _this.exit(event);
    };

    _this.checkDocumentKeyDown = function (event) {
      if (_this.props.escapeExits && (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27)) {
        _this.exit(event);
      }
    };

    _this.exit = function (event) {
      if (_this.props.onExit) {
        _this.props.onExit(event);
      }
    };

    if (!_this.props.titleText && !_this.props.titleId) {
      throw new Error('react-aria-modal instances should have a `titleText` or `titleId`');
    }

    _this.timeout = [];
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onEnter) {
        this.props.onEnter();
      } // Timeout to ensure this happens *after* focus has moved


      var applicationNode = this.getApplicationNode();
      this.timeout.push(setTimeout(function () {
        if (applicationNode && applicationNode instanceof Element) {
          applicationNode.setAttribute("aria-hidden", "true");
        }
      }, 0));

      if (this.props.escapeExits) {
        this.timeout.push(this.addKeyDownListener());
      }

      if (this.props.scrollDisabled) {
        on();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollDisabled && !this.props.scrollDisabled) {
        off();
      } else if (!prevProps.scrollDisabled && this.props.scrollDisabled) {
        on();
      }

      if (this.props.escapeExits && !prevProps.escapeExits) {
        this.timeout.push(this.addKeyDownListener());
      } else if (!this.props.escapeExits && prevProps.escapeExits) {
        this.timeout.push(this.removeKeyDownListener());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.scrollDisabled) {
        off();
      }

      var applicationNode = this.getApplicationNode();

      if (applicationNode && applicationNode instanceof Element) {
        applicationNode.setAttribute('aria-hidden', 'false');
      }

      this.timeout.push(this.removeKeyDownListener());
      this.clearTimer();
    }
  }, {
    key: "addKeyDownListener",
    value: function addKeyDownListener() {
      var _this2 = this;

      return setTimeout(function () {
        document.addEventListener("keydown", _this2.checkDocumentKeyDown);
      });
    }
  }, {
    key: "removeKeyDownListener",
    value: function removeKeyDownListener() {
      var _this3 = this;

      return setTimeout(function () {
        document.removeEventListener("keydown", _this3.checkDocumentKeyDown);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var props = this.props;
      var style = {}; // @edited
      // if (props.includeDefaultStyles) {
      // 	style = {
      // 		position: "fixed",
      // 		top: 0,
      // 		left: 0,
      // 		width: "100%",
      // 		height: "100%",
      // 		zIndex: 1050,
      // 		overflowX: "hidden",
      // 		overflowY: "auto",
      // 		WebkitOverflowScrolling: "touch",
      // 		textAlign: "center"
      // 	};
      // 	if (props.underlayColor) {
      // 		style.background = props.underlayColor;
      // 	}
      // 	if (props.underlayClickExits) {
      // 		style.cursor = "pointer";
      // 	}
      // }

      if (props.underlayStyle) {
        for (var key in props.underlayStyle) {
          if (!Object.prototype.hasOwnProperty.call(props.underlayStyle, key)) continue;
          style[key] = props.underlayStyle[key];
        }
      }

      var underlayProps = {
        className: props.underlayClass,
        style: style
      };

      if (props.underlayClickExits) {
        underlayProps.onMouseDown = this.checkUnderlayClick;
      }

      for (var prop in this.props.underlayProps) {
        underlayProps[prop] = this.props.underlayProps[prop];
      }

      var verticalCenterStyle = {}; // @edited
      // if (props.includeDefaultStyles) {
      // 	verticalCenterStyle = {
      // 		display: "inline-block",
      // 		height: "100%",
      // 		verticalAlign: "middle"
      // 	};
      // }

      var dialogStyle = {}; // @edited
      // if (props.includeDefaultStyles) {
      // 	dialogStyle = {
      // 		display: "inline-block",
      // 		textAlign: "left",
      // 		top: 0,
      // 		maxWidth: "100%",
      // 		cursor: "default",
      // 		outline: props.focusDialog ? 0 : undefined
      // 	};
      // 	if (props.verticallyCenter) {
      // 		dialogStyle.verticalAlign = "middle";
      // 		dialogStyle.top = 0;
      // 	}
      // }

      if (props.dialogStyle) {
        for (var _key in props.dialogStyle) {
          if (!Object.prototype.hasOwnProperty.call(props.dialogStyle, _key)) continue;
          dialogStyle[_key] = props.dialogStyle[_key];
        }
      }

      var dialogProps = {
        key: 'b',
        ref: function ref(el) {
          _this4.dialogNode = el;
        },
        role: props.alert ? 'alertdialog' : 'dialog',
        id: props.dialogId,
        className: props.dialogClass,
        style: dialogStyle
      };

      if (props.titleId) {
        dialogProps['aria-labelledby'] = props.titleId;
      } else if (props.titleText) {
        dialogProps['aria-label'] = props.titleText;
      }

      if (props.focusDialog) {
        dialogProps.tabIndex = -1;
      } // Apply data- and aria- attributes passed as props


      for (var _key2 in props) {
        if (/^(data-|aria-)/.test(_key2)) {
          dialogProps[_key2] = props[_key2];
        }
      }

      var childrenArray = [/*#__PURE__*/React.createElement('div', _objectSpread2({}, dialogProps), props.children)];

      if (props.verticallyCenter) {
        childrenArray.unshift( /*#__PURE__*/React.createElement('div', {
          key: 'a',
          style: verticalCenterStyle
        }));
      }

      var focusTrapOptions = props.focusTrapOptions || {};

      if (props.focusDialog || props.initialFocus) {
        focusTrapOptions.initialFocus = props.focusDialog ? "#".concat(this.props.dialogId) : props.initialFocus;
      }

      focusTrapOptions.escapeDeactivates = props.escapeExits;
      return /*#__PURE__*/React.createElement(ReactFocusTrap, {
        focusTrapOptions: focusTrapOptions,
        paused: props.focusTrapPaused
      }, /*#__PURE__*/React.createElement('div', _objectSpread2({}, underlayProps), childrenArray));
    }
  }]);

  return Modal;
}(React.Component);

Modal$1.defaultProps = {
  underlayProps: {},
  dialogId: 'react-aria-modal-dialog',
  // @edited
  // underlayClickExits: true,
  escapeExits: true,
  // @edited
  // underlayColor: "rgba(0,0,0,0.5)",
  // includeDefaultStyles: true,
  focusTrapPaused: false,
  scrollDisabled: true
};
var AriaModal = displace(Modal$1);

AriaModal.renderTo = function (input) {
  return displace(Modal$1, {
    renderTo: input
  });
};

var _excluded = ["modalContent", "triggerContent"];

var Modal = function Modal(_ref) {
  var modalContent = _ref.modalContent,
      triggerContent = _ref.triggerContent,
      props = _objectWithoutProperties(_ref, _excluded);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isClosing = _React$useState4[0],
      setIsClosing = _React$useState4[1]; // States for sliders.


  var _React$useState5 = React.useState(props.firstSlide),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentSlide = _React$useState6[0],
      setCurrentSlide = _React$useState6[1];

  var _React$useState7 = React.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      slideDirection = _React$useState8[0],
      setSlideDirection = _React$useState8[1];

  React.useEffect(function () {
    if (!props.dialogId) {
      throw new Error('SUI Modal instances should have a `dialogId`');
    }
  }, [props.dialogId]);
  var isSlider = 'object' === _typeof(modalContent) && null !== modalContent;

  var openModal = function openModal() {
    return setIsOpen(true);
  };

  var closeModal = function closeModal() {
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
  };

  var slideTo = function slideTo(slide) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left';
    setCurrentSlide(slide);
    setSlideDirection(direction);
  };

  var _props$getApplication = props.getApplicationNode,
      getApplicationNode = _props$getApplication === void 0 ? function () {
    return document.getElementsByClassName('sui-wrap')[0];
  } : _props$getApplication;
  var dialogClass = "sui-modal-content sui-content-".concat(isClosing ? 'fade-out' : 'fade-in', " ").concat(props.dialogClass || '');
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

  var wrapper = !props.renderToNode ? '.sui-wrap' : props.renderToNode;
  var AltModal = wrapper ? AriaModal.renderTo(wrapper) : AriaModal;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AltModal, _extends({
    getApplicationNode: getApplicationNode,
    dialogClass: dialogClass,
    underlayClass: "sui-modal sui-modal-".concat(modalSize || 'md', " sui-active ").concat(props.underlayClass || ''),
    includeDefaultStyle: false,
    initialFocus: initialFocus
  }, props), renderContent({
    closeModal: closeModal,
    slideTo: slideTo
  })), triggerContent && triggerContent({
    openModal: openModal
  }));
};

export { Accordion, AccordionItem, AccordionItemBody, AccordionItemHeader, Box, BoxBody, BoxFooter, BoxHeader, BoxTitle, Button$1 as Button, ButtonIcon$5 as ButtonIcon, Dropdown, Input, Modal, Notifications, Pagination, Post, ProgressBar, RadioCheckboxGroup, RadioCheckboxInput$1 as RadioCheckboxInput, Toggle };
