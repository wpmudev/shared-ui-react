import React, { Component } from 'react';
import styled from 'styled-components';

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

var Notifications = /*#__PURE__*/function (_Component) {
  _inherits$1(Notifications, _Component);

  var _super = _createSuper$1(Notifications);

  function Notifications(props) {
    _classCallCheck$1(this, Notifications);

    return _super.call(this, props);
  }

  _createClass$1(Notifications, [{
    key: "render",
    value: function render() {
      var classMain = 'sui-notice';
      var classIcon = 'sui-notice-icon sui-md';

      switch (this.props.type) {
        case 'info':
        case 'success':
        case 'warning':
        case 'error':
        case 'upsell':
          classMain += ' sui-notice-' + this.props.type;
          break;

        case 'loading':
          classIcon += ' sui-icon-loader sui-loading';
          break;

        default:
          classIcon += ' sui-icon-info';
          break;
      }

      return /*#__PURE__*/React.createElement("div", {
        className: classMain
      }, /*#__PURE__*/React.createElement("div", {
        className: "sui-notice-content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sui-notice-message"
      }, /*#__PURE__*/React.createElement("span", {
        className: classIcon,
        "aria-hidden": "true"
      }), /*#__PURE__*/React.createElement("p", null, this.props.message))));
    }
  }]);

  return Notifications;
}(Component);

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

function _templateObject3() {
  var data = _taggedTemplateLiteral$1(["\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\tflex-flow: row wrap;\n\talign-items: center;\n\tmargin-top: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral$1(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\n\t+ div {\n\t\tmargin-top: 20px;\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral$1(["\n\t", "\n\tcursor: pointer;\n\t", "\n\t", "\n\tpadding: ", ";\n\tborder-radius: 4px;\n\tbackground-color: #FFF;\n\t", "\n\ttransition: 0.2s ease all;\n\n\t* {\n\t\tpointer-events: none;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\t", "\n\n\t\t", "\n\t}\n\n\t", "\n\n\t&:focus {\n\t\toutline: none;\n\t\t", "\n\t}\n\n\t@media ", " {\n\t\t", "\n\t}\n"]);

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
var PostWrapper = styled.div.attrs(function (props) {
  return {
    tabIndex: 0
  };
})(_templateObject(), function (props) {
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
  return props.banner ? "@media ".concat(device.tablet, " {\n\t\t\t\ttransform: scale(1.05);\n\t\t\t}") : '';
}, function (props) {
  return props.banner ? "@media ".concat(device.tablet, " {\n\t\t\tbox-shadow: 0 2px 7px 0 rgba(0,0,0,0.05);\n\t\t}") : '';
}, function (props) {
  return props.banner ? 'box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05), 0 0 2px 0 #17A8E3;' : '';
}, device.tablet, function (props) {
  return props.banner ? 'min-height: 100%;' : 'padding: 15px;';
});
var PostHeader = styled.div(_templateObject2());
var PostFooter = styled.div(_templateObject3());
var FeaturedImage = styled.div.attrs(function () {
  return {
    tabIndex: '-1',
    'aria-hidden': true
  };
})(_templateObject4(), function (props) {
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
  return props.src || 'none';
});
var PostTitle = styled.h3(_templateObject5(), function (props) {
  return props.banner ? 'flex: 1 1 auto;' : '';
}, function (props) {
  return props.banner ? '0 0 10px' : '0';
}, function (props) {
  return props.banner ? '' : '-webkit-line-clamp: 2;';
}, function (props) {
  return props.banner ? "@media ".concat(device.tablet, " {\n\t\t\t-webkit-line-clamp: 2;\n\t\t}") : '';
});
var PostTime = styled.p(_templateObject6(), function (props) {
  return props.banner ? 'flex: 0 0 auto;' : '';
}, function (props) {
  return props.banner ? "* + & {\n\t\t\tmargin-left: 5px !important;\n\t\t}" : '';
});
var Excerpt = styled.div(_templateObject7(), function (props) {
  return props.banner ? 'flex: 1 1 auto;' : '';
}, function (props) {
  return props.banner ? '3' : '2';
});
var ReadMore = styled.p(_templateObject8(), function (props) {
  return props.banner ? '' : 'margin: 4px 0 0;';
});

var Post = /*#__PURE__*/function (_Component) {
  _inherits$2(Post, _Component);

  var _super = _createSuper$2(Post);

  function Post(props) {
    var _this;

    _classCallCheck$2(this, Post);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$2(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;

      if (ref) {
        window.open(ref.getAttribute('data-href'), '_blank');
      }
    });

    _defineProperty$1(_assertThisInitialized$2(_this), "handleKeydown", function (e) {
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
    _this.openLink = _this.openLink.bind(_assertThisInitialized$2(_this));
    _this.handleKeydown = _this.handleKeydown.bind(_assertThisInitialized$2(_this));
    return _this;
  }

  _createClass$2(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var API_URL = 'https://premium.wpmudev.org/blog/wp-json/wp/v2/media/';
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
      var read_article = translate && translate[0].read_article ? translate[0].read_article : 'Read article';
      var min_read = translate && translate[0].min_read ? translate[0].min_read : 'min read';
      var PostImage = ''; // Empty.

      if (error) {
        PostImage = '';
      } else if (!isLoaded) {
        PostImage = '';
      } else {
        PostImage = /*#__PURE__*/React.createElement(FeaturedImage, _extends({
          src: media
        }, this.props));
      }

      if (this.props.banner) {
        return /*#__PURE__*/React.createElement(PostWrapper, this.props, PostImage, this.props.title && '' !== this.props.title && /*#__PURE__*/React.createElement(PostTitle, {
          banner: true
        }, this.props.title), this.props.excerpt && '' !== this.props.excerpt && /*#__PURE__*/React.createElement(Excerpt, {
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

      return /*#__PURE__*/React.createElement(PostWrapper, this.props, /*#__PURE__*/React.createElement(PostHeader, null, PostImage, /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: '1px',
          flex: 1
        }
      }, this.props.title && '' !== this.props.title && /*#__PURE__*/React.createElement(PostTitle, null, this.props.title), this.props.time && '' !== this.props.time && /*#__PURE__*/React.createElement(PostTime, null, "*", this.props.time, " ", min_read))), this.props.excerpt && '' !== this.props.excerpt && /*#__PURE__*/React.createElement(Excerpt, {
        dangerouslySetInnerHTML: {
          __html: this.props.excerpt
        }
      }), /*#__PURE__*/React.createElement(ReadMore, null, read_article));
    }
  }]);

  return Post;
}(Component);

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tmargin: 0 0 20px;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\t@media ", " {\n\t\twidth: 50%;\n\t\tmargin: 0;\n\t\tflex: 0 0 auto;\n\t\tpadding: 15px;\n\t}\n\n\t@media ", " {\n\t\twidth: 33.33%;\n\t}\n\n\t@media ", " {\n\t\twidth: 25%;\n\t}\n\n\t@media (min-width: 1800px) {\n\n\t\t.sui-tutorials--page li {\n\t\t\twidth: 20%;\n\t\t}\n\t}\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\tmargin: -15px;\n\t}\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var aria$1 = aria$1 || {};
aria$1.KeyCode = {
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
var ListWrapper = styled.ul(_templateObject$1(), device$1.tablet);
var ListItem = styled.li(_templateObject2$1(), device$1.tablet, device$1.laptop, device$1.desktop);
var TutorialsList = /*#__PURE__*/function (_Component) {
  _inherits(TutorialsList, _Component);

  var _super = _createSuper(TutorialsList);

  function TutorialsList(props) {
    var _this;

    _classCallCheck(this, TutorialsList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);

    _defineProperty(_assertThisInitialized(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;

      if (ref) {
        window.open(ref.getAttribute('data-href'), '_blank');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "keyNavigate", function (direction) {
      var focusedPost = document.activeElement.closest('.sui-tutorial'); // Abort if the focused element doesn't have a .sui-tutorial parent.

      if (!focusedPost) {
        return;
      }

      var newFocusedPost;

      if ('prev' === direction) {
        newFocusedPost = focusedPost.previousElementSibling; // We reached the start of the list.

        if (!newFocusedPost) {
          newFocusedPost = focusedPost.closest('ul').lastElementChild;
        }
      } else {
        newFocusedPost = focusedPost.nextElementSibling; // We reached the end of the list.

        if (!newFocusedPost) {
          newFocusedPost = focusedPost.closest('ul').firstElementChild;
        }
      }

      newFocusedPost.firstElementChild.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeydown", function (e) {
      var key = e.which || e.keyCode;

      switch (key) {
        case aria$1.KeyCode.RETURN:
          _this.openLink(e);

          break;

        case aria$1.KeyCode.LEFT:
          _this.keyNavigate('prev');

          break;

        case aria$1.KeyCode.RIGHT:
          _this.keyNavigate('next');

          break;
      }
    });

    _this.state = {
      posts: [],
      error: null,
      isLoaded: false
    };
    _this.openLink = _this.openLink.bind(_assertThisInitialized(_this));
    _this.handleKeydown = _this.handleKeydown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TutorialsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._isMounted = true;
      var API_URL = 'https://premium.wpmudev.org/blog/wp-json/wp/v2/posts?tutorials_categories=';
      var QUERY_ID = this.props.category; // GET posts using fetch.

      fetch(API_URL + QUERY_ID).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          isLoaded: true,
          posts: data
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          posts = _this$state.posts,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded;
      var translate = this.props.translate;
      var loading = translate && translate[0].loading ? translate[0].loading : 'Loading tutorials...';
      var read_article = translate && translate[0].read_article ? translate[0].read_article : '';
      var min_read = translate && translate[0].min_read ? translate[0].min_read : '';
      var listPosts = posts.map(function (post) {
        return /*#__PURE__*/React.createElement(ListItem, {
          key: post.id,
          className: "sui-tutorial"
        }, /*#__PURE__*/React.createElement(Post, {
          banner: true,
          role: "link",
          "data-href": post.link,
          title: post.title.rendered,
          time: post.meta.blog_reading_time,
          excerpt: post.excerpt.rendered,
          media: post.featured_media,
          translate: [{
            read_article: read_article,
            min_read: min_read
          }],
          onClick: function onClick(e) {
            return _this3.openLink(e);
          },
          onKeyDown: function onKeyDown(e) {
            return _this3.handleKeydown(e);
          }
        }));
      });

      if (error) {
        return /*#__PURE__*/React.createElement(Notifications, {
          type: "error",
          message: error.message
        });
      } else if (!isLoaded) {
        return /*#__PURE__*/React.createElement(Notifications, {
          type: "loading",
          message: loading
        });
      } else {
        return /*#__PURE__*/React.createElement("div", {
          className: "sui-box"
        }, this.props.title && /*#__PURE__*/React.createElement("div", {
          className: "sui-box-header"
        }, /*#__PURE__*/React.createElement("h3", {
          className: "sui-box-title"
        }, this.props.title)), /*#__PURE__*/React.createElement("div", {
          className: "sui-box-body",
          style: {
            backgroundColor: '#FAFAFA',
            borderBottomRightRadius: '4px',
            borderBottomLeftRadius: '4px'
          }
        }, /*#__PURE__*/React.createElement(ListWrapper, null, listPosts)));
      }
    }
  }]);

  return TutorialsList;
}(Component);

export { TutorialsList };
