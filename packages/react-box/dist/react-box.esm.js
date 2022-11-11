import React from 'react';
import styled from 'styled-components';

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

var _templateObject, _templateObject2, _templateObject3;

var _excluded = ["children", "className"],
    _excluded2 = ["icon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"],
    _excluded3 = ["title", "titleIcon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"],
    _excluded4 = ["className", "children"],
    _excluded5 = ["className", "children"],
    _excluded6 = ["title", "description", "className", "children"];

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
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
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
      props = _objectWithoutProperties(_ref2, _excluded2);

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

  return /*#__PURE__*/React.createElement("h3", _extends({
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t.sui-wrap && {\n\t\tdisplay: ", ";\n\t\t", "\n\t\t", "\n\tmargin: 0;\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t\tborder: 0 solid #e6e6e6;\n\t\tborder-bottom-width: ", "px;\n\t\t", "\n\n\t\t", "\n\t", "\n\n\t@media ", " {\n\t\t\tpadding-top: ", "px;\n\t\t\tpadding-right: ", "px;\n\t\t\tpadding-bottom: ", "px;\n\t\t\tpadding-left: ", "px;\n\t\t}\n\t}\n"])), function (props) {
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
      props = _objectWithoutProperties(_ref3, _excluded3);

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
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t.sui-wrap && {\n\t\tmargin: 0;\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t\tborder: 0 solid #e6e6e6;\n\t\tborder-top-width: ", "px;\n\t\tborder-bottom-width: ", "px;\n\t\ttext-align: ", ";\n\n\t\t@media ", " {\n\t\t\tpadding-top: ", "px;\n\t\t\tpadding-right: ", "px;\n\t\t\tpadding-bottom: ", "px;\n\t\t\tpadding-left: ", "px;\n\t\t}\n\t}\n"])), function (props) {
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
      props = _objectWithoutProperties(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement(Body, _extends({
    className: className
  }, props), children);
};
var Footer = styled.div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t.sui-wrap && {\n\t\tdisplay: ", ";\n\t\t", "\n\t\t", "\n\tmargin: 0;\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t\tborder: 0 solid #e6e6e6;\n\t\tborder-top-width: ", "px;\n\t\t", "\n\n\t\t", "\n\t", "\n\n\t@media ", " {\n\t\t\tpadding-top: ", "px;\n\t\t\tpadding-right: ", "px;\n\t\t\tpadding-bottom: ", "px;\n\t\t\tpadding-left: ", "px;\n\t\t}\n\t}\n"])), function (props) {
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
      props = _objectWithoutProperties(_ref5, _excluded5);

  return /*#__PURE__*/React.createElement(Footer, _extends({
    className: className
  }, props), children);
};
var BoxSection = function BoxSection(_ref6) {
  var title = _ref6.title,
      description = _ref6.description,
      className = _ref6.className,
      children = _ref6.children,
      props = _objectWithoutProperties(_ref6, _excluded6);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box-settings-row ".concat(className) : 'sui-box-settings-row'
  }, props), (title && '' !== title || description && '' !== description) && /*#__PURE__*/React.createElement("div", {
    className: "sui-box-settings-col-1"
  }, '' !== title && /*#__PURE__*/React.createElement("h4", {
    className: "sui-settings-label"
  }, title), '' !== description && /*#__PURE__*/React.createElement("p", {
    className: "sui-description"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "sui-box-settings-col-2"
  }, children));
};

export { Box, BoxBody, BoxFooter, BoxHeader, BoxSection, BoxTitle };
