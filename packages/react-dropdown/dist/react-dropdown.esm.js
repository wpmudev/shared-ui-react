import React, { Children, Fragment, Component } from 'react';
import styled from 'styled-components';

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
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

var _excluded = ["label", "icon", "iconSize", "design", "color", "className", "loading"];

var ButtonIcon = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties(_ref, _excluded);

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

var _templateObject, _templateObject2;
var Link = styled.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t.sui-wrap && {\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\n\t\t[class*=\"sui-icon-\"]:before {\n\t\t\tcolor: inherit !important;\n\t\t}\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t}\n\t}\n"])), function (props) {
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
var Button = styled.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t.sui-wrap && {\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\n\t\t[class*=\"sui-icon-\"]:before {\n\t\t\tcolor: inherit !important;\n\t\t}\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t\t", "\n\t\t}\n\n\t\t&[disabled] {\n\t\t\topacity: 0.5;\n\t\t\tpointer-events: none;\n\t\t}\n\t}\n"])), function (props) {
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
  _inherits(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.wrapperRef = /*#__PURE__*/React.createRef();
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
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
          return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, _extends({
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
      }, /*#__PURE__*/React.createElement(ButtonIcon, _extends({
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

export { Dropdown };
