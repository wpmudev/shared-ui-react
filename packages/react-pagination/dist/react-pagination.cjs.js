'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Pagination = function Pagination(_ref) {
  var _pagesArray$slice;

  var limit = _ref.limit,
      skip = _ref.skip,
      results = _ref.results,
      skipToFirstLabel = _ref.skipToFirstLabel,
      previousLabel = _ref.previousLabel,
      nextLabel = _ref.nextLabel,
      skipToLastLabel = _ref.skipToLastLabel,
      args = _objectWithoutProperties(_ref, ["limit", "skip", "results", "skipToFirstLabel", "previousLabel", "nextLabel", "skipToLastLabel"]);

  var childElements = args.children ? [].concat(_toConsumableArray(args.children), _toConsumableArray(args.child)) : _toConsumableArray(args.child),
      elements = childElements.length,
      pages = elements / limit > parseInt(elements / limit) ? parseInt(elements / limit) + 1 : elements / limit,
      _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      pagesArray = _useState2[0],
      setPagesArray = _useState2[1],
      _useState3 = React.useState("1"),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedPage = _useState4[0],
      setSelectedPage = _useState4[1],
      _useState5 = React.useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      startIndex = _useState6[0],
      setStartIndex = _useState6[1],
      _useState7 = React.useState(pages >= 5 ? 5 : pages),
      _useState8 = _slicedToArray(_useState7, 2),
      endIndex = _useState8[0],
      setEndIndex = _useState8[1],
      _useState9 = React.useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      pageClickCounter = _useState10[0],
      setPageClickCounter = _useState10[1],
      _useState11 = React.useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      elementsStartIndex = _useState12[0],
      setElementsStartIndex = _useState12[1],
      _useState13 = React.useState(limit),
      _useState14 = _slicedToArray(_useState13, 2),
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

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-pagination-wrap"
  }, results && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-pagination-results"
  }, elements, " results"), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "sui-pagination"
  }, skip && /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: handleSkipToFirstPage
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    disabled: selectedPage <= 1
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, skipToFirstLabel || "Go to first page"), /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "true",
    title: skipToFirstLabel || "Go to first page",
    className: "sui-icon-arrow-skip-back"
  }))), /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: handlePreviousPage
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    disabled: selectedPage <= 1
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, previousLabel || "Go to previous page"), /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "true",
    title: previousLabel || "Go to previous page",
    className: "sui-icon-chevron-left"
  }))), startIndex > 0 && /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: handlePreviousEllipsis
  }, /*#__PURE__*/React__default['default'].createElement("a", null, "...")), pagesArray === null || pagesArray === void 0 ? void 0 : (_pagesArray$slice = pagesArray.slice(startIndex, endIndex)) === null || _pagesArray$slice === void 0 ? void 0 : _pagesArray$slice.map(function (data, index) {
    return /*#__PURE__*/React__default['default'].createElement("li", {
      onClick: function onClick() {
        return handlePageClick(parseInt(data));
      },
      key: index
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      "aria-selected": selectedPage === data,
      className: selectedPage === data ? "sui-active" : ""
    }, data));
  }), endIndex < pages && /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: handleNextEllipsis
  }, /*#__PURE__*/React__default['default'].createElement("a", null, "...")), /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: handleNextPage
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    disabled: selectedPage >= pages
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, nextLabel || "Go to next page."), /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "true",
    title: nextLabel || "Go to next page.",
    className: "sui-icon-chevron-right"
  }))), skip && /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: handleSkipToLastPage
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    disabled: selectedPage >= pages
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "false",
    className: "sui-screen-reader-text"
  }, skipToLastLabel || "Go to last page."), /*#__PURE__*/React__default['default'].createElement("span", {
    "aria-hidden": "true",
    title: skipToLastLabel || "Go to last page",
    className: "sui-icon-arrow-skip-forward"
  }))))), React__default['default'].Children.map(childElements, function (child) {
    return /*#__PURE__*/React__default['default'].cloneElement(child);
  }).slice(elementsStartIndex, elementsEndIndex));
};

exports.Pagination = Pagination;
