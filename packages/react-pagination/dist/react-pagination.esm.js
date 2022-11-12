import React, { useState, useEffect } from 'react';

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
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded = ["limit", "skip", "results", "skipToFirstLabel", "previousLabel", "nextLabel", "skipToLastLabel", "pagesToBottom"];
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
      args = _objectWithoutProperties(_ref, _excluded);

  var componentWrapper = args.children,
      componentChildren = componentWrapper !== null && componentWrapper !== void 0 && (_componentWrapper$pro = componentWrapper.props) !== null && _componentWrapper$pro !== void 0 && _componentWrapper$pro.children ? (componentWrapper === null || componentWrapper === void 0 ? void 0 : (_componentWrapper$pro2 = componentWrapper.props) === null || _componentWrapper$pro2 === void 0 ? void 0 : (_componentWrapper$pro3 = _componentWrapper$pro2.children) === null || _componentWrapper$pro3 === void 0 ? void 0 : _componentWrapper$pro3.length) > 1 ? _toConsumableArray(componentWrapper.props.children) : [componentWrapper.props.children] : [],
      childElements = [].concat(componentChildren),
      elements = childElements.length,
      pages = elements / limit > parseInt(elements / limit) ? parseInt(elements / limit) + 1 : elements / limit,
      _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      pagesArray = _useState2[0],
      setPagesArray = _useState2[1],
      _useState3 = useState('1'),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedPage = _useState4[0],
      setSelectedPage = _useState4[1],
      _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      startIndex = _useState6[0],
      setStartIndex = _useState6[1],
      _useState7 = useState(pages >= 5 ? 5 : pages),
      _useState8 = _slicedToArray(_useState7, 2),
      endIndex = _useState8[0],
      setEndIndex = _useState8[1],
      _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      pageClickCounter = _useState10[0],
      setPageClickCounter = _useState10[1],
      _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      elementsStartIndex = _useState12[0],
      setElementsStartIndex = _useState12[1],
      _useState13 = useState(limit),
      _useState14 = _slicedToArray(_useState13, 2),
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
  if (args !== null && args !== void 0 && args.paginationContent) return /*#__PURE__*/React.createElement(React.Fragment, null, args === null || args === void 0 ? void 0 : args.paginationContent(_objectSpread2({}, properties)));else return /*#__PURE__*/React.createElement(React.Fragment, null, pagesToBottom && PaginationResults(_objectSpread2({}, properties)), PaginationNav(_objectSpread2({}, properties)), !pagesToBottom && PaginationResults(_objectSpread2({}, properties)));
};
var PaginationResults = function PaginationResults(_ref3) {
  var _React$Children$map;

  var properties = _extends({}, _ref3);

  var items = (_React$Children$map = React.Children.map(properties.childElements, function (data) {
    return /*#__PURE__*/React.cloneElement(data);
  })) === null || _React$Children$map === void 0 ? void 0 : _React$Children$map.slice(properties.elementsStartIndex, properties.elementsEndIndex);
  return React.Children.map(properties.componentWrapper, function (data) {
    return /*#__PURE__*/React.cloneElement(data, '', items);
  });
};
var PaginationNav = function PaginationNav(_ref4) {
  var _properties$pagesArra, _properties$pagesArra2;

  var properties = _extends({}, _ref4);

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

export { Pagination, PaginationNav, PaginationResults };
