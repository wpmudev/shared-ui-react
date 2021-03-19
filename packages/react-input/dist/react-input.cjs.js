'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
      }, this.props.label), /*#__PURE__*/React__default['default'].createElement("input", _extends({
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

exports.Input = Input;
