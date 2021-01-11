'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var reactNotifications = require('@wpmudev/react-notifications');
var reactPost = require('@wpmudev/react-post');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tmargin: 0 0 20px;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\t@media ", " {\n\t\twidth: 50%;\n\t\tmargin: 0;\n\t\tflex: 0 0 auto;\n\t\tpadding: 15px;\n\t}\n\n\t@media ", " {\n\t\twidth: 33.33%;\n\t}\n\n\t@media ", " {\n\t\twidth: 25%;\n\t}\n\n\t@media (min-width: 1800px) {\n\n\t\t.sui-tutorials--page li {\n\t\t\twidth: 20%;\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\tmargin: -15px;\n\t}\n"]);

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
var ListWrapper = styled__default['default'].ul(_templateObject(), device.tablet);
var ListItem = styled__default['default'].li(_templateObject2(), device.tablet, device.laptop, device.desktop);
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
        case aria.KeyCode.RETURN:
          _this.openLink(e);

          break;

        case aria.KeyCode.LEFT:
          _this.keyNavigate('prev');

          break;

        case aria.KeyCode.RIGHT:
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
        return /*#__PURE__*/React__default['default'].createElement(ListItem, {
          key: post.id,
          className: "sui-tutorial"
        }, /*#__PURE__*/React__default['default'].createElement(reactPost.Post, {
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
        return /*#__PURE__*/React__default['default'].createElement(reactNotifications.Notifications, {
          type: "error",
          message: error.message
        });
      } else if (!isLoaded) {
        return /*#__PURE__*/React__default['default'].createElement(reactNotifications.Notifications, {
          type: "loading",
          message: loading
        });
      } else {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          className: "sui-box"
        }, this.props.title && /*#__PURE__*/React__default['default'].createElement("div", {
          className: "sui-box-header"
        }, /*#__PURE__*/React__default['default'].createElement("h3", {
          className: "sui-box-title"
        }, this.props.title)), /*#__PURE__*/React__default['default'].createElement("div", {
          className: "sui-box-body",
          style: {
            backgroundColor: '#FAFAFA',
            borderBottomRightRadius: '4px',
            borderBottomLeftRadius: '4px'
          }
        }, /*#__PURE__*/React__default['default'].createElement(ListWrapper, null, listPosts)));
      }
    }
  }]);

  return TutorialsList;
}(React.Component);

exports.TutorialsList = TutorialsList;
