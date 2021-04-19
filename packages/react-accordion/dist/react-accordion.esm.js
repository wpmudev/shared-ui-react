import React, { Component } from 'react';
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
  if (call && (typeof call === "object" || typeof call === "function")) {
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

var ButtonIcon = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "icon", "design", "color", "className"]);

  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-" + icon,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = '' !== className ? 'sui-button-icon ' + className : 'sui-button-icon'; // Set button color.

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
    return /*#__PURE__*/React.createElement("a", _extends$1({
      ref: ref,
      className: className,
      disabled: props.disabled || props.loading
    }, props), props.loading ? loader : content);
  }

  return /*#__PURE__*/React.createElement("button", _extends$1({
    ref: ref,
    className: className,
    disabled: props.disabled || props.loading
  }, props), props.loading ? loader : content);
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    border-radius: 10px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ItemImage = styled.span(_templateObject());

var Accordion = /*#__PURE__*/function (_Component) {
  _inherits(Accordion, _Component);

  var _super = _createSuper(Accordion);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    return _super.call(this, props);
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "sui-accordion"
      }, this.props.children);
    }
  }]);

  return Accordion;
}(Component);

var AccordionItem = /*#__PURE__*/function (_Component2) {
  _inherits(AccordionItem, _Component2);

  var _super2 = _createSuper(AccordionItem);

  function AccordionItem(props) {
    var _this;

    _classCallCheck(this, AccordionItem);

    _this = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggle", function (e) {
      if ('sui-dropdown' !== e.target.className) {
        _this.setState({
          open: !_this.state.open
        });
      }
    });

    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AccordionItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var clazz = !open ? 'sui-accordion-item' : 'sui-accordion-item sui-accordion-item--open';
      return /*#__PURE__*/React.createElement("div", _extends({
        className: clazz
      }, this.props), /*#__PURE__*/React.createElement(AccordionItemHeader, {
        state: open ? 'true' : 'false',
        title: this.props.title,
        image: this.props.image,
        icon: this.props.icon,
        onClick: function onClick(e) {
          return _this2.toggle(e);
        }
      }), /*#__PURE__*/React.createElement(AccordionItemBody, null, this.props.children));
    }
  }]);

  return AccordionItem;
}(Component);

var AccordionItemHeader = /*#__PURE__*/function (_Component3) {
  _inherits(AccordionItemHeader, _Component3);

  var _super3 = _createSuper(AccordionItemHeader);

  function AccordionItemHeader(props) {
    var _this3;

    _classCallCheck(this, AccordionItemHeader);

    _this3 = _super3.call(this, props);
    _this3.state = {
      open: false
    };
    return _this3;
  }

  _createClass(AccordionItemHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        open: this.props.state
      });
    }
  }, {
    key: "render",
    value: function render() {
      var open = this.state.open;
      var icon = this.props.icon && '' !== this.props.icon ? /*#__PURE__*/React.createElement("span", {
        className: "sui-icon-".concat(this.props.icon),
        "aria-hidden": "true"
      }) : '';
      var image = this.props.image && '' !== this.props.image ? /*#__PURE__*/React.createElement(ItemImage, {
        style: {
          backgroundImage: "url(".concat(this.props.image, ")")
        }
      }) : '';
      var title = /*#__PURE__*/React.createElement("div", {
        className: "sui-accordion-item-title"
      }, icon, image, this.props.title);
      var indicator = /*#__PURE__*/React.createElement(ButtonIcon, {
        icon: "chevron-down",
        label: open ? 'Close section' : 'Open section',
        className: "sui-button-icon sui-accordion-open-indicator"
      });
      var actions = /*#__PURE__*/React.createElement("div", {
        className: "sui-accordion-col-auto"
      }, this.props.children, indicator);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: "sui-accordion-item-header"
      }, this.props), title, actions);
    }
  }]);

  return AccordionItemHeader;
}(Component);

var AccordionItemBody = /*#__PURE__*/function (_Component4) {
  _inherits(AccordionItemBody, _Component4);

  var _super4 = _createSuper(AccordionItemBody);

  function AccordionItemBody(props) {
    _classCallCheck(this, AccordionItemBody);

    return _super4.call(this, props);
  }

  _createClass(AccordionItemBody, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "sui-accordion-item-body"
      }, this.props.children);
    }
  }]);

  return AccordionItemBody;
}(Component);

export { Accordion, AccordionItem, AccordionItemBody, AccordionItemHeader };
