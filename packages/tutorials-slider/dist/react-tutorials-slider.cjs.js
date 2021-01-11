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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\n\tbutton[class*=\"sui-button-\"] {\n\t\tdisplay: none !important;\n\n\t\t@media ", " {\n\t\t\tdisplay: block !important;\n\t\t\tpointer-events: initial;\n\t\t}\n\t}\n\n\tbutton:not([class*=\"sui-button-\"]) {\n\t\twidth: 100%;\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tmargin: 20px 0 10px !important;\n\t\tpadding: 10px !important;\n\t\tborder: 0;\n\t\tborder-radius: 4px;\n\t\tbackground-color: #FFF;\n\t\tcolor: #17A8E3 !important;\n\t\ttransition: 0.2s ease all;\n\n\t\t* {\n\t\t\tpointer-events: none;\n\t\t}\n\n\t\tstrong {\n\t\t\tmin-width: 1px;\n\t\t\tflex: 0 1 auto;\n\t\t\tcolor: inherit;\n\t\t\tfont-size: 13px;\n\t\t\tline-height: 22px;\n\t\t\tfont-weight: 500;\n\t\t}\n\n\t\t[class*=\"sui-icon-\"] {\n\t\t\tflex: 0 0 auto;\n\t\t\tmargin-left: 5px;\n\t\t\ttransition: 0.2s ease all;\n\n\t\t\t&:before {\n\t\t\t\tcolor: inherit;\n\t\t\t}\n\t\t}\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t\tbox-shadow: none;\n\t\t}\n\n\t\t&:hover {\n\t\t\tbackground-color: #FAFAFA;\n\t\t}\n\n\t\t&:focus {\n\t\t\tbackground-color: #E1F6FF;\n\t\t}\n\n\t\t@media ", " {\n\t\t\tdisplay: none !important;\n\t\t}\n\t}\n\n\t.open & {\n\n\t\tbutton:not([class*=\"sui-button-\"]) {\n\n\t\t\t[class*=\"sui-icon-\"] {\n\t\t\t\ttransform: rotate(180deg);\n\t\t\t}\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tpointer-events: none;\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tright: 6px;\n\t\tleft: 6px;\n\t\ttransform: translateY(-50%);\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tmargin: 0 0 20px;\n\tpadding: 0;\n\tborder: 0;\n\tlist-style: none;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\t@media ", " {\n\t\twidth: 33.33%;\n\t\tflex: 0 0 auto;\n\t\tmargin: 0 1px 0 0;\n\t}\n\n\t@media ", " {\n\t\twidth: 25%;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\n\t@media ", " {\n\t\toverflow: hidden;\n\t\tdisplay: flex;\n\t\tflex-flow: row nowrap;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tmargin-top: 1px;\n\tmargin-right: 23px;\n\tfont-size: 13px;\n\tline-height: 22px;\n\tletter-spacing: -0.2px;\n\n\t[class*=\"sui-icon-\"] {\n\t\tmargin-right: 5px;\n\n\t\t&:before {\n\t\t\tcolor: inherit;\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tpadding: 10px;\n\n\t@media ", " {\n\t\tpadding: 15px 25px;\n\t}\n"]);

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
var Box = styled__default['default'].div(_templateObject(), device.tablet);
var Link = styled__default['default'].a.attrs(function (props) {
  return {
    href: props.viewAll,
    target: '_blank'
  };
})(_templateObject2());
var ListWrapper = styled__default['default'].ul(_templateObject3(), device.tablet);
var ListItem = styled__default['default'].li(_templateObject4(), device.tablet, device.desktop);
var Navigation = styled__default['default'].div(_templateObject5(), device.tablet, device.tablet, device.tablet);
var TutorialsSlider = /*#__PURE__*/function (_Component) {
  _inherits(TutorialsSlider, _Component);

  var _super = _createSuper(TutorialsSlider);

  function TutorialsSlider(props) {
    var _this;

    _classCallCheck(this, TutorialsSlider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "closeButtonClicked", function (e) {
      var sliderBox = e.currentTarget.closest('.sui-tutorials-slider-box');
      sliderBox.remove();
      var event = new Event('sliderTutorialClosed');
      sliderBox.dispatchEvent(event);
    });

    _defineProperty(_assertThisInitialized(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;

      if (ref) {
        window.open(ref.getAttribute('data-href'), '_blank');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "keyNavigate", function (direction) {
      var focusedPost = document.activeElement.closest('li'); // Abort if the focused element doesn't have a li parent.

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

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (e) {
      var tutorialsContainer = e.currentTarget;
      var isFirstSlide = false,
          isLastSlide = false; // We're at the first slide.

      if (0 === tutorialsContainer.scrollLeft) {
        isFirstSlide = true;
      } // We're at the last slide.


      if (tutorialsContainer.scrollWidth === tutorialsContainer.scrollLeft + tutorialsContainer.offsetWidth) {
        isLastSlide = true;
      }

      _this.setState({
        isFirstSlide: isFirstSlide,
        isLastSlide: isLastSlide
      });
    });

    _defineProperty(_assertThisInitialized(_this), "navigationButtonClicked", function (e) {
      var tutorialsContainer = e.currentTarget.parentNode.previousElementSibling; // Scroll to the next or previous "slide".

      if (e.currentTarget.classList.contains('next')) {
        tutorialsContainer.scrollLeft += tutorialsContainer.offsetWidth;
      } else {
        tutorialsContainer.scrollLeft -= tutorialsContainer.offsetWidth;
      }
    });

    _this.secondTutorial = /*#__PURE__*/React__default['default'].createRef();
    _this.state = {
      posts: [],
      error: null,
      isLoaded: false,
      isFirstSlide: true,
      isLastSlide: false,
      isShowingAll: window.innerWidth > screen.tablet
    };
    _this.closeButtonClicked = _this.closeButtonClicked.bind(_assertThisInitialized(_this));
    _this.openLink = _this.openLink.bind(_assertThisInitialized(_this));
    _this.handleKeydown = _this.handleKeydown.bind(_assertThisInitialized(_this));
    _this.navigationButtonClicked = _this.navigationButtonClicked.bind(_assertThisInitialized(_this));
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TutorialsSlider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Handle the focused element when clicking on "show more"/"show lesss" on mobile.
      if (this.state.isShowingAll !== prevState.isShowingAll && window.innerWidth < screen.tablet) {
        if (this.secondTutorial.current) {
          var tutorialToFocus;

          if (this.state.isShowingAll) {
            tutorialToFocus = this.secondTutorial.current.nextElementSibling;
          } else {
            tutorialToFocus = this.secondTutorial.current;
          }

          tutorialToFocus.firstElementChild.focus();
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

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
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          posts = _this$state.posts,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded,
          isShowingAll = _this$state.isShowingAll;
      var translate = this.props.translate;
      var loading = translate && translate[0].loading ? translate[0].loading : 'Loading tutorials...';
      var read_article = translate && translate[0].read_article ? translate[0].read_article : '';
      var min_read = translate && translate[0].min_read ? translate[0].min_read : '';
      var prev_post = translate && translate[0].prev_post ? translate[0].prev_post : 'Previous post';
      var next_post = translate && translate[0].next_post ? translate[0].next_post : 'Next post';
      var view_all = translate && translate[0].view_all ? translate[0].view_all : 'View all';
      var close_tutorials = translate && translate[0].close_tutorials ? translate[0].close_tutorials : 'Close tutorials';
      var show_more = translate && translate[0].show_more ? translate[0].show_more : 'Show more';
      var show_less = translate && translate[0].show_less ? translate[0].show_less : 'Show less';
      var listPosts = posts.map(function (post, i) {
        var _React$createElement;

        return /*#__PURE__*/React__default['default'].createElement(ListItem, (_React$createElement = {
          key: post.id,
          className: "sui-tutorial"
        }, _defineProperty(_React$createElement, "className", 1 < i && !_this3.state.isShowingAll && 'sui-hidden'), _defineProperty(_React$createElement, "ref", 1 === i && _this3.secondTutorial), _React$createElement), /*#__PURE__*/React__default['default'].createElement(reactPost.Post, {
          role: "link",
          "data-href": post.link,
          title: post.title.rendered,
          time: post.meta.blog_reading_time,
          excerpt: post.excerpt.rendered,
          media: post.featured_media,
          translate: [{
            min_read: min_read,
            read_article: read_article
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
        var navigation = /*#__PURE__*/React__default['default'].createElement(Navigation, null, (3 < posts.length && window.innerWidth < screen.desktop || 4 < posts.length) && [/*#__PURE__*/React__default['default'].createElement("button", {
          key: "1",
          className: "sui-button-icon prev",
          onClick: function onClick(e) {
            return _this3.navigationButtonClicked(e);
          },
          style: {
            visibility: this.state.isFirstSlide ? 'hidden' : 'visible'
          }
        }, /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-icon-chevron-left sui-sm",
          "aria-hidden": "true"
        }), /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-screen-reader-text"
        }, prev_post)), /*#__PURE__*/React__default['default'].createElement("button", {
          key: "2",
          className: "sui-button-icon next",
          onClick: function onClick(e) {
            return _this3.navigationButtonClicked(e);
          },
          style: {
            visibility: this.state.isLastSlide ? 'hidden' : 'visible'
          }
        }, /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-icon-chevron-right sui-sm",
          "aria-hidden": "true"
        }), /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-screen-reader-text"
        }, next_post))], /*#__PURE__*/React__default['default'].createElement("button", {
          className: "sui-label",
          onClick: function onClick() {
            return _this3.setState({
              isShowingAll: !isShowingAll
            });
          }
        }, /*#__PURE__*/React__default['default'].createElement("strong", null, isShowingAll ? show_less : show_more), /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-icon-chevron-down sui-sm",
          "aria-hidden": "true"
        })));
        return /*#__PURE__*/React__default['default'].createElement("div", {
          className: "sui-box sui-tutorials-slider-box"
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "sui-box-header"
        }, this.props.title && /*#__PURE__*/React__default['default'].createElement("h3", {
          className: "sui-box-title"
        }, this.props.title), /*#__PURE__*/React__default['default'].createElement("div", {
          className: "sui-actions-right"
        }, this.props.viewAll && /*#__PURE__*/React__default['default'].createElement(Link, this.props, /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-icon-open-new-window sui-sm",
          "aria-hidden": "true"
        }), view_all), /*#__PURE__*/React__default['default'].createElement("button", {
          onClick: function onClick(e) {
            return _this3.closeButtonClicked(e);
          },
          className: "sui-button-icon",
          style: {
            marginRight: '-9px'
          }
        }, /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-icon-close sui-md",
          "aria-hidden": "true"
        }), /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-screen-reader-text"
        }, close_tutorials)))), /*#__PURE__*/React__default['default'].createElement(Box, {
          className: isShowingAll && 'open'
        }, /*#__PURE__*/React__default['default'].createElement(ListWrapper, {
          onScroll: this.handleScroll
        }, listPosts), 2 < posts.length && navigation));
      }
    }
  }]);

  return TutorialsSlider;
}(React.Component);

exports.TutorialsSlider = TutorialsSlider;
