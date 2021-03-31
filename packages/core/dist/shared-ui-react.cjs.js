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

var Box = function Box(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: "sui-box"
  }, props), children);
};

var BoxTitle = function BoxTitle(_ref2) {
  var icon = _ref2.icon,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["icon", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("h3", _extends({
    className: "sui-box-title"
  }, props), icon && "" !== icon && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon, " sui-md"),
    "aria-hidden": "true"
  }), children);
};

var BoxHeader = function BoxHeader(_ref3) {
  var title = _ref3.title,
      titleIcon = _ref3.titleIcon,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["title", "titleIcon", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: "sui-box-header"
  }, props), title && "" !== title && /*#__PURE__*/React__default['default'].createElement(BoxTitle, {
    icon: titleIcon
  }, title), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-actions-right"
  }, children));
};

var BoxBody = function BoxBody(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: "sui-box-body"
  }, props), children);
};

var BoxFooter = function BoxFooter(_ref5) {
  var children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: "sui-box-footer"
  }, props), children);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
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

var Input = /*#__PURE__*/function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input(props) {
    _classCallCheck(this, Input);

    return _super.call(this, props);
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var uniqueId = this.props.id && '' !== this.props.id ? this.props.id : this.props.property;
      var type = this.props.type && '' !== this.props.type ? this.props.type : 'text';
      var clazz = 'sui-form-control';

      switch (this.props.size) {
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
      }, /*#__PURE__*/React__default['default'].createElement("label", {
        "for": uniqueId,
        className: "sui-label"
      }, this.props.label), /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
        id: uniqueId,
        type: type
      }, this.props.min && 'number' === type && {
        min: this.props.min
      }, this.props.max && 'number' === type && {
        max: this.props.max
      }, this.props.maxLength && 'text' === type && {
        maxlength: this.props.maxLength
      }, this.props.placeholder && '' !== this.props.placeholder && {
        placeholder: this.props.placeholder
      }, {
        className: clazz
      }, this.props.disabled && {
        disabled: true
      })), this.props.description && /*#__PURE__*/React__default['default'].createElement("p", {
        className: "sui-description"
      }, this.props.description));
    }
  }]);

  return Input;
}(React.Component);

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

var Button = /*#__PURE__*/React__default['default'].forwardRef(function (_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties$1(_ref, ["label", "icon", "design", "color", "className"]);

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
  className = '' !== className ? 'sui-button ' + className : 'sui-button'; // Set button color.

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


  if (props.loading) {
    className += " sui-button-onload";
  }

  if (props.href) {
    return /*#__PURE__*/React__default['default'].createElement("a", _extends$2({
      className: className,
      disabled: props.disabled || props.loading
    }, props), props.loading ? loader : content);
  }

  return /*#__PURE__*/React__default['default'].createElement("button", _extends$2({
    className: className,
    disabled: props.disabled || props.loading
  }, props), props.loading ? loader : content);
});

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
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
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

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmin-width: 1px;\n\tflex: 1;\n\t", "\n\tcolor: #17A8E3 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px !important;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\t", "\n\n\tp {\n\t\toverflow: hidden;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\tmargin: 0 !important;\n\t\tpadding: 0 !important;\n\t\tborder: 0;\n\t\tcolor: #888 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\t\tletter-spacing: -0.2px;\n\t\t-webkit-line-clamp: ", ";\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tcolor: #888 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tletter-spacing: -0.2px;\n\n\t", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\toverflow: hidden;\n\tdisplay: -webkit-box !important;\n\t-webkit-box-orient: vertical;\n\t", "\n\tmargin: ", " !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px;\n\t", "\n\n\t", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\theight: ", ";\n\tmargin: ", ";\n\t", "\n\tdisplay: block;\n\t", "\n\tbackground-color: #FFF;\n\tbackground-image: url(", ");\n\tbackground-size: cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\tflex-flow: row wrap;\n\talign-items: center;\n\tmargin-top: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\n\t+ div {\n\t\tmargin-top: 20px;\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\tcursor: pointer;\n\t", "\n\t", "\n\tpadding: ", ";\n\tborder-radius: 4px;\n\tbackground-color: #fff;\n\t", "\n\ttransition: 0.2s ease all;\n\n\t* {\n\t\tpointer-events: none;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\t", "\n\n\t\t", "\n\t}\n\n\t", "\n\n\t&:focus {\n\t\toutline: none;\n\t\t", "\n\t}\n\n\t@media ", " {\n\t\t", "\n\t}\n"]);

  _templateObject = function _templateObject() {
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
var PostWrapper = styled__default['default'].div.attrs(function (props) {
  return {
    tabIndex: 0,
    props: props
  };
})(_templateObject(), function (props) {
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
  return props.banner ? "@media ".concat(device.tablet, " {\n\t\t\t\ttransform: scale(1.05);\n\t\t\t}") : "";
}, function (props) {
  return props.banner ? "@media ".concat(device.tablet, " {\n\t\t\tbox-shadow: 0 2px 7px 0 rgba(0,0,0,0.05);\n\t\t}") : "";
}, function (props) {
  return props.banner ? "box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05), 0 0 2px 0 #17A8E3;" : "";
}, device.tablet, function (props) {
  return props.banner ? "min-height: 100%;" : "padding: 15px;";
});
var PostHeader = styled__default['default'].div(_templateObject2());
var PostFooter = styled__default['default'].div(_templateObject3());
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
  return props.banner ? "@media ".concat(device.tablet, " {\n\t\t\t-webkit-line-clamp: 2;\n\t\t}") : "";
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
  _inherits$1(Post, _Component);

  var _super = _createSuper$1(Post);

  function Post(props) {
    var _this;

    _classCallCheck$1(this, Post);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized$1(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;

      if (ref) {
        window.open(ref.getAttribute("data-href"), "_blank");
      }
    });

    _defineProperty(_assertThisInitialized$1(_this), "handleKeydown", function (e) {
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
          banner: true
        }, this.props.title), this.props.excerpt && "" !== this.props.excerpt && /*#__PURE__*/React__default['default'].createElement(Excerpt, {
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
      }, this.props.title && "" !== this.props.title && /*#__PURE__*/React__default['default'].createElement(PostTitle, null, this.props.title), this.props.time && "" !== this.props.time && /*#__PURE__*/React__default['default'].createElement(PostTime, null, "*", this.props.time, " ", min_read))), this.props.excerpt && "" !== this.props.excerpt && /*#__PURE__*/React__default['default'].createElement(Excerpt, {
        dangerouslySetInnerHTML: {
          __html: this.props.excerpt
        }
      }), /*#__PURE__*/React__default['default'].createElement(ReadMore, null, read_article));
    }
  }]);

  return Post;
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
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
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

var Notifications = /*#__PURE__*/function (_Component) {
  _inherits$2(Notifications, _Component);

  var _super = _createSuper$2(Notifications);

  function Notifications(props) {
    _classCallCheck$2(this, Notifications);

    return _super.call(this, props);
  }

  _createClass$2(Notifications, [{
    key: "render",
    value: function render() {
      var classMain = "sui-notice";
      var classIcon = "sui-notice-icon sui-md";

      switch (this.props.type) {
        case "info":
        case "success":
        case "warning":
        case "error":
        case "upsell":
          classMain += " sui-notice-" + this.props.type;
          break;

        case "loading":
          classIcon += " sui-icon-loader sui-loading";
          break;

        default:
          classIcon += " sui-icon-info";
          break;
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: classMain
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-notice-content"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-notice-message"
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        className: classIcon,
        "aria-hidden": "true"
      }), /*#__PURE__*/React__default['default'].createElement("p", null, this.props.message))));
    }
  }]);

  return Notifications;
}(React.Component);

exports.Box = Box;
exports.BoxBody = BoxBody;
exports.BoxFooter = BoxFooter;
exports.BoxHeader = BoxHeader;
exports.BoxTitle = BoxTitle;
exports.Button = Button;
exports.Input = Input;
exports.Notifications = Notifications;
exports.Post = Post;
