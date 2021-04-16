module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "32Ux":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/arrow-hero-differentials-ae86d238e80eb8ff730536eb1642649a.png";

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QuLH");


/***/ }),

/***/ "5xq/":
/***/ (function(module, exports) {

module.exports = require("styled-breakpoints");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6o60":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);




const SEO = ({
  title,
  description,
  color,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
}) => {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '| Colégio Particular Álamo Valinhos' : ''}`;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
      children: pageTitle
    }), description && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "description",
      content: description
    }), image && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "image",
      content: image
    }), !shouldIndexPage && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "robots",
      content: "noindex,nofollow"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge, chorme=1"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "MobileOptimized",
      content: "320"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "HandheldFriendly",
      content: "true"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "theme-color",
      content: color
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "msapplication-TitleColor",
      content: color
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "referrer",
      content: "no-referrer-when-downgrade"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "google",
      content: "notranslate"
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (SEO);

/***/ }),

/***/ "9nMZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__("5xq/");

// EXTERNAL MODULE: ./public/assets/title-border.png
var title_border = __webpack_require__("TOlL");
var title_border_default = /*#__PURE__*/__webpack_require__.n(title_border);

// EXTERNAL MODULE: ./public/assets/dot-border.png
var dot_border = __webpack_require__("npB8");
var dot_border_default = /*#__PURE__*/__webpack_require__.n(dot_border);

// CONCATENATED MODULE: ./src/typography/Heading/styles.ts




const H1 = external_styled_components_default.a.h1.withConfig({
  displayName: "styles__H1",
  componentId: "hn3ww8-0"
})(["color:", ";font-size:", ";", ""], props => props.titleColor, props => props.titleSize === 'large' && 'calc(30px + (64 - 30) * ((100vw - 320px) / (1920 - 320)));', props => props.titleBorder && Object(external_styled_components_["css"])(["&:after{content:'tem a borda';}"]));
const H2 = external_styled_components_default.a.h2.withConfig({
  displayName: "styles__H2",
  componentId: "hn3ww8-1"
})(["color:", ";font-size:", ";position:relative;text-align:center;display:flex;flex-direction:column;align-items:center;", " ", " ", " ", "{font-size:calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));}"], props => props.titleColor, props => props.titleSize === 'medium' && '48px', props => props.titleBorder && Object(external_styled_components_["css"])(["&:after{content:'';mask-image:url(", ");mask-size:contain;mask-repeat:no-repeat;margin:10px auto 0 auto;width:calc(150px + (222 - 150) * ((100vw - 320px) / (1920 - 320)));height:7px;display:flex;}"], title_border_default.a), props => props.titleBorderColor === 'blue' && Object(external_styled_components_["css"])(["&:after{content:'';background-color:", ";}"], props => props.theme.colors.blue), props => props.titleBorderColor === 'green' && Object(external_styled_components_["css"])(["&:after{content:'';background-color:", ";}"], props => props.theme.colors.lightGreen), Object(external_styled_breakpoints_["down"])('lg'));
const H3 = external_styled_components_default.a.h3.withConfig({
  displayName: "styles__H3",
  componentId: "hn3ww8-2"
})(["color:", ";font-size:", ";", " ", " ", " ", ""], props => props.titleColor, props => props.titleSize === 'small' && 'min(max(1.7rem, 4vw), 32px)', props => props.dotBorder && Object(external_styled_components_["css"])(["&:before{content:'';background:url(", ") no-repeat;background-size:contain;margin-right:10px;width:34px;height:7px;display:flex;}"], dot_border_default.a), props => props.titleBorder && Object(external_styled_components_["css"])(["&:after{content:'';mask-image:url(", ");mask-size:contain;mask-repeat:no-repeat;margin:10px auto 0 auto;width:calc(150px + (222 - 150) * ((100vw - 320px) / (1920 - 320)));height:7px;display:flex;}"], title_border_default.a), props => props.titleBorderColor === 'blue' && Object(external_styled_components_["css"])(["&:after{content:'';background-color:", ";}"], props => props.theme.colors.blue), props => props.titleBorderColor === 'green' && Object(external_styled_components_["css"])(["&:after{content:'';background-color:", ";}"], props => props.theme.colors.lightGreen));
const H4 = external_styled_components_default.a.h4.withConfig({
  displayName: "styles__H4",
  componentId: "hn3ww8-3"
})(["color:", ";font-size:", ";", ""], props => props.titleColor, props => props.titleSize === 'xsmall' && 'min(max(1.5rem, 4vw), 24px)', props => props.uppercase ? Object(external_styled_components_["css"])(["text-transform:uppercase;"]) : '');
const H5 = external_styled_components_default.a.h5.withConfig({
  displayName: "styles__H5",
  componentId: "hn3ww8-4"
})(["color:", ";font-size:", ";", " ", " display:flex;align-items:center;"], props => props.titleColor, props => props.titleSize === 'xsmall2' && 'calc(22px + (28 - 22) * ((100vw - 320px) / (1920 - 320)));', props => props.uppercase ? Object(external_styled_components_["css"])(["text-transform:uppercase;"]) : '', props => props.dotBorder && Object(external_styled_components_["css"])(["&:before{content:'';background:url(", ") no-repeat;background-size:contain;margin-right:10px;width:34px;height:7px;display:flex;}"], dot_border_default.a));
const HeadingH2 = external_styled_components_default.a.div.withConfig({
  displayName: "styles__HeadingH2",
  componentId: "hn3ww8-5"
})(["h2{color:", ";font-size:", ";position:relative;text-align:center;display:flex;flex-direction:column;align-items:center;}", " ", " ", " ", "{font-size:calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));}"], props => props.titleColor, props => props.titleSize === 'medium' && 'calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));', props => props.titleBorder && Object(external_styled_components_["css"])(["&:after{content:'';mask-image:url(", ");mask-size:contain;mask-repeat:no-repeat;margin:10px auto 0 auto;width:calc(150px + (222 - 150) * ((100vw - 320px) / (1920 - 320)));height:7px;display:flex;}"], title_border_default.a), props => props.titleBorderColor === 'blue' && Object(external_styled_components_["css"])(["&:after{content:'';background-color:", ";}"], props => props.theme.colors.blue), props => props.titleBorderColor === 'green' && Object(external_styled_components_["css"])(["&:after{content:'';background-color:", ";}"], props => props.theme.colors.lightGreen), Object(external_styled_breakpoints_["down"])('lg'));
// CONCATENATED MODULE: ./src/typography/Heading/index.tsx




const Heading = ({
  titleColor,
  titleSize,
  titleBorder = false,
  titleBorderColor,
  dotBorder = false,
  uppercase,
  children,
  dangerouslySetInnerHTML
}) => {
  return titleSize === 'large' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(H1, {
    titleColor: titleColor,
    titleSize: titleSize,
    titleBorder: titleBorder,
    titleBorderColor: titleBorderColor,
    children: children
  }) || titleSize === 'medium' && (!dangerouslySetInnerHTML ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(H2, {
    titleColor: titleColor,
    titleSize: titleSize,
    titleBorder: titleBorder,
    titleBorderColor: titleBorderColor,
    children: children
  }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeadingH2, {
    titleColor: titleColor,
    titleSize: titleSize,
    titleBorder: titleBorder,
    titleBorderColor: titleBorderColor,
    dangerouslySetInnerHTML: dangerouslySetInnerHTML
  })) || titleSize === 'small' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(H3, {
    titleColor: titleColor,
    titleSize: titleSize,
    titleBorder: titleBorder,
    titleBorderColor: titleBorderColor,
    children: children
  }) || titleSize === 'xsmall' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(H4, {
    titleColor: titleColor,
    titleSize: titleSize,
    titleBorder: titleBorder,
    titleBorderColor: titleBorderColor,
    uppercase: uppercase,
    children: children
  }) || titleSize === 'xsmall2' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(H5, {
    titleColor: titleColor,
    titleSize: titleSize,
    titleBorder: titleBorder,
    titleBorderColor: titleBorderColor,
    dotBorder: dotBorder,
    uppercase: uppercase,
    children: children
  });
};

/* harmony default export */ var typography_Heading = __webpack_exports__["a"] = (Heading);

/***/ }),

/***/ "9yvl":
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "K7k0":
/***/ (function(module, exports) {



/***/ }),

/***/ "KzqM":
/***/ (function(module, exports) {

module.exports = require("react-awesome-reveal");

/***/ }),

/***/ "NFsi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__("5xq/");

// CONCATENATED MODULE: ./src/components/Collapse/styles.ts


const Card = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Card",
  componentId: "fm29qv-0"
})(["background:", ";box-shadow:0px 1px 5px rgba(0,0,0,0.15);border-radius:20px;.arrow-down{svg{transition:all 0.4s;transform:rotate(0);}}&.open{.arrow-down{svg{transform:rotate(180deg);}}}", "{margin-bottom:2rem;}"], props => props.cardColor, Object(external_styled_breakpoints_["down"])('xs'));
const CardHeader = external_styled_components_default.a.div.withConfig({
  displayName: "styles__CardHeader",
  componentId: "fm29qv-1"
})(["cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;h3{margin:0.8vw 0;}.arrow-down{height:23px;display:flex;align-items:center;justify-content:center;}"]);
const CardBody = external_styled_components_default.a.div.withConfig({
  displayName: "styles__CardBody",
  componentId: "fm29qv-2"
})(["padding-left:1rem;padding-right:1rem;max-height:0;overflow:hidden;transition:all 0.8s ease-out;visibility:hidden;ul{opacity:0;transition:all 0.3s ease-out;li{font-size:calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)));color:", ";font-weight:325;+ li{padding-top:0.5em;}display:flex;svg{flex:none;margin-right:2px;}}}&.active{max-height:400px;visibility:visible;opacity:1;ul{opacity:1;}}"], props => props.theme.colors.grayThree);
// CONCATENATED MODULE: ./src/components/Collapse/index.tsx





const Collapse = ({
  title,
  cardColor,
  className,
  children
}) => {
  const {
    0: activeCollapse,
    1: setActiveCollapse
  } = Object(external_react_["useState"])(false);
  const handleCollapse = Object(external_react_["useCallback"])(() => {
    setActiveCollapse(!activeCollapse);
  }, [activeCollapse, setActiveCollapse]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card, {
    className: `${className} ${activeCollapse === true ? 'open' : ''}`,
    cardColor: cardColor,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardHeader, {
      onClick: handleCollapse,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody, {
      className: activeCollapse === true ? 'active' : '',
      children: children
    })]
  });
};

/* harmony default export */ var components_Collapse = __webpack_exports__["a"] = (Collapse);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QuLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__("KzqM");

// EXTERNAL MODULE: external "react-icons/go"
var go_ = __webpack_require__("9yvl");

// EXTERNAL MODULE: ./src/lib/prismic.ts
var prismic = __webpack_require__("ZHf5");

// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// EXTERNAL MODULE: external "prismic-dom"
var external_prismic_dom_ = __webpack_require__("Z6lk");
var external_prismic_dom_default = /*#__PURE__*/__webpack_require__.n(external_prismic_dom_);

// EXTERNAL MODULE: ./src/components/Loading/index.tsx + 1 modules
var Loading = __webpack_require__("Y8ry");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__("tyWD");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__("K7k0");

// EXTERNAL MODULE: ./src/layout/Container/index.tsx + 1 modules
var Container = __webpack_require__("dEEQ");

// EXTERNAL MODULE: ./src/typography/Heading/index.tsx + 1 modules
var Heading = __webpack_require__("9nMZ");

// EXTERNAL MODULE: ./src/components/Collapse/index.tsx + 1 modules
var Collapse = __webpack_require__("NFsi");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__("5xq/");

// EXTERNAL MODULE: ./public/assets/arrow-hero-differentials.png
var arrow_hero_differentials = __webpack_require__("32Ux");
var arrow_hero_differentials_default = /*#__PURE__*/__webpack_require__.n(arrow_hero_differentials);

// EXTERNAL MODULE: ./public/assets/arrow-down-select.png
var arrow_down_select = __webpack_require__("TqbH");
var arrow_down_select_default = /*#__PURE__*/__webpack_require__.n(arrow_down_select);

// CONCATENATED MODULE: ./src/styles/pages/differentials/styles.ts




const Hero = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Hero",
  componentId: "jtv8eb-0"
})(["background:linear-gradient(180deg,#f0f0f0 0%,rgba(238,238,238,0) 100%);position:relative;padding-top:2rem;padding-bottom:7rem;overflow:hidden;&:after{content:'';background:url(", ") no-repeat;background-size:contain;position:absolute;bottom:0;left:0;width:100%;height:12em;}svg{position:absolute;bottom:-3em;width:100%;height:100%;}p{font-size:calc(20px + (34 - 20) * ((100vw - 320px) / (1920 - 320)));line-height:calc(28px + (40 - 28) * ((100vw - 320px) / (1920 - 320)));margin-top:0;color:", ";font-weight:500;}.content_hero_differentials,.image_hero_differentials{z-index:1;}.image_hero_differentials{margin-top:2em;width:50%;display:flex;justify-content:flex-end;}", "{padding-top:7rem;padding-bottom:4rem;height:auto;svg{bottom:-10em;}&:after{height:18vw;}.content_hero_differentials{margin-bottom:2rem;}.image_hero_differentials{width:100%;margin-top:0;margin-bottom:2rem;}}", "{svg{bottom:calc(-95px + (-19 - (-95)) * ((100vw - 320px) / (1920 - 320)));}}"], arrow_hero_differentials_default.a, props => props.theme.colors.grayThree, Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["up"])('md'));
const ContentHero = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ContentHero",
  componentId: "jtv8eb-1"
})(["display:flex;flex-direction:column;align-items:flex-start;z-index:12;width:100%;a{margin-top:2rem;}p{margin-top:0.7rem;}", "{width:100%;align-items:center;text-align:center;}.cambridge{display:flex;align-items:center;margin-top:2.5rem;svg{width:36px;height:36px;position:relative;bottom:0;}p{font-size:calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));font-weight:300;margin:0 5px;}}"], Object(external_styled_breakpoints_["down"])('sm'));
const HeroContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__HeroContainer",
  componentId: "jtv8eb-2"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;", "{flex-direction:column;}"], Object(external_styled_breakpoints_["down"])('sm'));
const ArrowHero = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ArrowHero",
  componentId: "jtv8eb-3"
})(["position:absolute;bottom:0;left:0;"]);
const BilingueContainer = external_styled_components_default.a.section.withConfig({
  displayName: "styles__BilingueContainer",
  componentId: "jtv8eb-4"
})(["margin-top:4rem;p{font-size:calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));line-height:calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));color:", ";text-align:center;&:first-child{margin-top:2rem;}&:nth-child(2){margin-top:30px;margin-bottom:4vw;}}img{max-width:100%;}"], props => props.theme.colors.grayThree);
const BilingualBoxes = external_styled_components_default.a.div.withConfig({
  displayName: "styles__BilingualBoxes",
  componentId: "jtv8eb-5"
})(["margin-top:5rem;display:flex;justify-content:space-evenly;> div{margin:0 20px;}", "{flex-direction:column;div + div{margin-top:3rem;}}"], Object(external_styled_breakpoints_["down"])('sm'));
const InvestmentsContainer = external_styled_components_default.a.section.withConfig({
  displayName: "styles__InvestmentsContainer",
  componentId: "jtv8eb-6"
})(["margin:5rem auto;display:flex;flex-direction:column;align-items:center;ul{list-style:none;margin-top:3rem;max-width:680px;width:100%;li{display:flex;font-size:calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));line-height:calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));color:", ";font-weight:300;+ li{margin-top:2rem;}svg{margin-right:10px;flex:none;}}}", "{margin:3rem auto;ul{margin-top:2rem;li + li{margin-top:2rem !important;}}}"], props => props.theme.colors.grayThree, Object(external_styled_breakpoints_["down"])('sm'));
const BilingualBoxe = external_styled_components_default.a.div.withConfig({
  displayName: "styles__BilingualBoxe",
  componentId: "jtv8eb-7"
})(["background:", ";box-shadow:0px 1px 5px rgba(0,0,0,0.15);border-radius:20px;padding-left:35px;padding-right:35px;padding-bottom:25px;text-align:center;height:auto;span{background:", ";box-shadow:0px 1px 5px rgba(0,0,0,0.15);border-radius:20px;color:", ";font-size:calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));font-weight:bold;padding-top:15px;padding-bottom:15px;padding-left:35px;padding-right:35px;}p{font-size:calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));color:", ";font-weight:500;}ul{list-style:none;font-size:calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));color:", ";font-weight:500;margin-top:1.5rem;text-align:left;}", "{display:flex;flex-direction:column;align-items:center;span{margin-top:-1.5rem;}}"], props => props.theme.colors.grayFour, props => props.theme.colors.lightGreen, props => props.theme.colors.white, props => props.theme.colors.grayThree, props => props.theme.colors.lightGreen, Object(external_styled_breakpoints_["down"])('sm'));
const Methodology = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Methodology",
  componentId: "jtv8eb-8"
})(["margin-top:4rem;p{font-size:calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));line-height:calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));color:", ";text-align:center;&:first-child{margin-top:2vw;}&:nth-child(2){margin-top:30px;margin-bottom:4vw;}}img{max-width:100%;}"], props => props.theme.colors.grayThree);
const ItemsMethodology = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ItemsMethodology",
  componentId: "jtv8eb-9"
})(["display:flex;justify-content:space-between;.box{width:100%;max-width:31em;h2{color:", ";font-size:calc(25px + (40 - 25) * ((100vw - 320px) / (1920 - 320)));font-weight:bold;}ul{list-style:none;margin-top:2rem;li{display:flex;font-size:calc(18px + (26 - 18) * ((100vw - 320px) / (1920 - 320)));line-height:calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));color:", ";+ li{margin-top:1em;}svg{flex:none;}}}}", "{flex-direction:column;ul{margin-top:1rem;}.box{width:100%;max-width:100%;&:last-child{margin-top:2rem;}}}"], props => props.theme.colors.green, props => props.theme.colors.grayThree, Object(external_styled_breakpoints_["down"])('sm'));
const Intelligence = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Intelligence",
  componentId: "jtv8eb-10"
})(["margin-top:4rem;p{font-size:calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));line-height:calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));color:", ";text-align:center;margin-top:2vw;}h2{text-align:center;}"], props => props.theme.colors.grayThree);
const Videos = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Videos",
  componentId: "jtv8eb-11"
})(["width:100%;display:flex;justify-content:space-between;.embed-responsive{position:relative;display:block;width:48%;padding:0;margin:calc(15px + (50 - 15) * ((100vw - 576px) / (1920 - 576))) 0;overflow:hidden;&:before{content:'';display:block;padding-top:56.25%;}iframe{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;border-radius:calc(25px + (53 - 25) * ((100vw - 320px) / (1920 - 320)));}}", "{flex-direction:column;.embed-responsive{width:100%;}}", "{margin-bottom:2rem;}"], Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["down"])('sm'));
const Description = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Description",
  componentId: "jtv8eb-12"
})(["width:100%;position:relative;display:flex;flex-direction:column;"]);
const BackgroundColor = external_styled_components_default.a.div.withConfig({
  displayName: "styles__BackgroundColor",
  componentId: "jtv8eb-13"
})(["background-color:", ";p{font-size:calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));line-height:calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));color:", ";text-align:center;width:100%;margin-top:2.4rem;margin-bottom:1.6rem;}"], props => props.theme.colors.blue, props => props.theme.colors.white);
const Benefits = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Benefits",
  componentId: "jtv8eb-14"
})(["margin-top:4rem;.items{display:grid;grid-template-columns:398px 398px;grid-gap:3vw;margin:3rem auto 0;.open .arrow-down{margin-bottom:10px;}h3{text-align:center;}img{height:139px !important;}", "{grid-template-columns:48% 48%;grid-gap:4%;}", "{img{height:calc(89px + (130 - 89) * ((100vw - 320px) / (768 - 320)));}}", "{display:flex;flex-direction:column;.arrow-down{svg{height:33px;}}img{height:90px !important;}}}.card-benefits{padding-top:25px;padding-bottom:25px;}"], Object(external_styled_breakpoints_["down"])('md'), Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["down"])('xs'));
const ResultsContainer = external_styled_components_default.a.section.withConfig({
  displayName: "styles__ResultsContainer",
  componentId: "jtv8eb-15"
})(["margin:5rem 0 5rem 0;", "{margin:2rem 0 3rem 0;}"], Object(external_styled_breakpoints_["down"])('sm'));
const Results = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Results",
  componentId: "jtv8eb-16"
})(["margin-top:3rem;display:grid;grid-template-columns:22% 22% 22% 22%;grid-gap:4%;", "{grid-template-columns:48% 48%;margin-top:2rem;}", "{display:flex;flex-direction:column;}"], Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["down"])('xs'));
const Result = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Result",
  componentId: "jtv8eb-17"
})(["display:flex;flex-direction:column;align-items:center;width:100%;.circle{width:146px;height:146px;border-radius:50%;background-color:", ";display:flex;align-items:center;justify-content:center;margin-bottom:1vw;h1,span{color:", ";}H1{font-size:calc(35px + (60 - 35) * ((100vw - 320px) / (1920 - 320)));}span{font-size:calc(25px + (40 - 25) * ((100vw - 320px) / (1920 - 320)));}}p{font-size:calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));line-height:calc(27px + (29 - 27) * ((100vw - 320px) / (1920 - 320)));color:", ";text-align:center;width:100%;}", "{.circle{width:calc(100px + (146 - 100) * ((100vw - 320px) / (768 - 320)));height:calc(100px + (146 - 100) * ((100vw - 320px) / (768 - 320)));}p{margin-bottom:1.5rem;}p:last-child{margin-bottom:0;}}"], props => props.theme.colors.lightGreen, props => props.theme.colors.white, props => props.theme.colors.grayThree, Object(external_styled_breakpoints_["down"])('sm'));
const MindMakersContainer = external_styled_components_default.a.section.withConfig({
  displayName: "styles__MindMakersContainer",
  componentId: "jtv8eb-18"
})(["margin-top:4rem;.description-mind-makers{width:100%;p{font-size:calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));line-height:calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));color:", ";text-align:center;width:100%;margin-top:2.4rem;margin-bottom:1.6rem;}}ul{margin-top:1rem;list-style:none;display:flex;align-items:center;justify-content:space-between;li{font-size:calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)));color:", ";text-transform:uppercase;font-weight:300;display:flex;flex-direction:column;img{height:calc(60px + (78 - 60) * ((100vw - 320px) / (1920 - 320)));}p{margin-top:1rem;font-size:calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));}}}svg{display:flex;}", "{ul{flex-wrap:wrap;li{width:50% !important;text-align:center;+ li{margin-top:1rem;}}}}", "{ul{li{width:100% !important;}}}"], props => props.theme.colors.white, props => props.theme.colors.white, Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["down"])('xs'));
const BgMindColor = external_styled_components_default.a.div.withConfig({
  displayName: "styles__BgMindColor",
  componentId: "jtv8eb-19"
})(["background-color:", ";padding-bottom:2rem;"], props => props.theme.colors.blue);
const GalleryContainer = external_styled_components_default.a.section.withConfig({
  displayName: "styles__GalleryContainer",
  componentId: "jtv8eb-20"
})(["margin:4rem auto;.embed-responsive{position:relative;display:block;width:80%;padding:0;overflow:hidden;display:none;transition:all 0.3s;margin:auto;&.active{display:block;position:relative;}&:before{content:'';display:block;padding-top:56.25%;}}iframe{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;border-radius:calc(25px + (53 - 25) * ((100vw - 320px) / (1920 - 320)));}.slick-slider{&:first-child{width:80%;margin:auto;.slick-slide{border-radius:calc( 25px + (53 - 25) * ((100vw - 320px) / (1920 - 320)) );}}&:last-child{width:100%;overflow:hidden;padding-top:1.5rem;.slick-list{margin:0 -10px;.slick-track{.slick-slide{padding-top:4.5rem;position:relative;> div{margin:0 10px;img{border-radius:calc( 16px + (53 - 16) * ((100vw - 320px) / (1920 - 320)) );}}img{cursor:pointer;outline:none;object-fit:cover;width:100%;height:15vw !important;}&:before{content:'';position:absolute;width:100%;top:7%;border-top:1px solid ", ";}}.slick-current{&:after{transition:all 0.9s;content:'';background:url(", ") no-repeat center;background-size:cover;width:calc(27px + (40 - 27) * ((100vw - 320px) / (1920 - 320)));height:calc(37px + (57 - 37) * ((100vw - 320px) / (1920 - 320)));position:absolute;top:0;right:0;left:0;margin:auto;}}}}}}", "{margin:3rem auto;.slick-list{.slick-track{.slick-slide{&:before{top:11% !important;}}}}}", "{.embed-responsive{width:100%;}.slick-slider{&:last-child{padding-top:0.5rem;.slick-list{.slick-track{.slick-slide{padding-top:3.5rem !important;}}}}}}"], props => props.theme.colors.lightBlue2, arrow_down_select_default.a, Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["down"])('xs'));
const IconsContainer = external_styled_components_default.a.section.withConfig({
  displayName: "styles__IconsContainer",
  componentId: "jtv8eb-21"
})(["margin:5rem 0 4rem;", "{margin:2rem 0 4rem;}"], Object(external_styled_breakpoints_["down"])('sm'));
const Items = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Items",
  componentId: "jtv8eb-22"
})(["display:flex;justify-content:space-between;flex-wrap:wrap;.methods_effects{width:50%;&:nth-child(n + 3){margin-top:4em;}display:flex;}", "{.methods_effects{width:100%;justify-content:center;+ .methods_effects{margin-top:2em;}}}"], Object(external_styled_breakpoints_["down"])('sm'));
const Item = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Item",
  componentId: "jtv8eb-23"
})(["display:flex;align-items:center;p{font-weight:bold;}", "{flex-direction:column;}"], Object(external_styled_breakpoints_["down"])('sm'));
const Items2 = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Items2",
  componentId: "jtv8eb-24"
})(["display:flex;justify-content:space-between;flex-direction:column;margin-top:3rem;.methods_effects{width:100%;&:nth-child(n + 2){margin-top:2em;}display:flex;}", "{.methods_effects{width:100%;justify-content:center;+ .methods_effects{margin-top:2em;}}}"], Object(external_styled_breakpoints_["down"])('sm'));
const Item2 = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Item2",
  componentId: "jtv8eb-25"
})(["display:flex;align-items:center;p{font-weight:500;}", "{flex-direction:column;}"], Object(external_styled_breakpoints_["down"])('sm'));
const Icon2 = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Icon2",
  componentId: "jtv8eb-26"
})(["width:6.1875em;height:6.1875em;background-color:", ";border-radius:50%;margin-right:1.7vw;display:flex;align-items:center;justify-content:center;flex:none;", "{width:calc(100px + (146 - 100) * ((100vw - 320px) / (768 - 320)));height:calc(100px + (146 - 100) * ((100vw - 320px) / (768 - 320)));img{width:calc(55px + (77 - 55) * ((100vw - 320px) / (768 - 320)));height:calc(55px + (77 - 55) * ((100vw - 320px) / (768 - 320)));}}"], props => props.theme.colors.lightGreen, Object(external_styled_breakpoints_["down"])('sm'));
const Icon = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Icon",
  componentId: "jtv8eb-27"
})(["width:9.125em;height:9.125em;background-color:", ";border-radius:50%;margin-right:1.7vw;display:flex;align-items:center;justify-content:center;flex:none;", "{width:calc(100px + (146 - 100) * ((100vw - 320px) / (768 - 320)));height:calc(100px + (146 - 100) * ((100vw - 320px) / (768 - 320)));img{width:calc(55px + (77 - 55) * ((100vw - 320px) / (768 - 320)));height:calc(55px + (77 - 55) * ((100vw - 320px) / (768 - 320)));}}"], props => props.theme.colors.lightGreen, Object(external_styled_breakpoints_["down"])('sm'));
const Text = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Text",
  componentId: "jtv8eb-28"
})(["display:flex;flex-direction:column;align-items:flex-start;p{font-size:calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));line-height:calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));color:", ";}", "{align-items:center;margin-top:5px;p{text-align:center;}}"], props => props.theme.colors.grayThree, Object(external_styled_breakpoints_["down"])('sm'));
const UniversityContainer = external_styled_components_default.a.section.withConfig({
  displayName: "styles__UniversityContainer",
  componentId: "jtv8eb-29"
})(["margin:7rem 0 7rem;.logos{width:100%;display:flex;justify-content:center;> div{margin:0 30px;display:block;max-width:100%;height:auto;}}", "{margin:4rem 0 5rem;.logos{flex-direction:column;justify-content:center;align-items:center;img{width:100%;max-width:200px;}div + div{margin-top:2.5rem;}}}"], Object(external_styled_breakpoints_["down"])('sm'));
// EXTERNAL MODULE: ./src/components/SEO/index.tsx
var SEO = __webpack_require__("6o60");

// CONCATENATED MODULE: ./src/pages/diferenciais/[slug].tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const SettingsVideosThumbails = {
  dots: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipeToSlide: true,
  focusOnSelect: true,
  autoplay: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 400,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const SettingsFeaturedVideos = {
  autoplay: false,
  dots: false,
  arrows: false,
  responsive: [{
    breakpoint: 400,
    settings: {
      centerMode: false,
      arrows: false
    }
  }]
};

const Differential = ({
  differential
}) => {
  const router = Object(client_router["useRouter"])();
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(0);
  const {
    0: nav1,
    1: setNav1
  } = Object(external_react_["useState"])();
  const {
    0: nav2,
    1: setNav2
  } = Object(external_react_["useState"])();
  const slider1 = Object(external_react_["useRef"])(null);
  const slider2 = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  if (router.isFallback) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Loading["a" /* default */], {});
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SEO["a" /* default */], {
      color: "#BAC529",
      title: router.query.slug === 'educacao-socioemocional' && 'Educação Sócioemocional' || router.query.slug === 'educacao-tecnologica' && 'Educação Tecnológica' || router.query.slug === 'educacao-financeira' && 'Educação Financeira' || router.query.slug === 'programa-bilingue' && 'Programa Bilíngue',
      description: router.query.slug === 'educacao-socioemocional' && 'Fundamentada na Teoria da Inteligência Multifocal, elaborada pelo Dr. Augusto Cury, a metodologia promove, por meio da educação das emoções e da inteligência, a melhoria dos índices de aprendizagem, redução da indisciplina, aprimoramento das relações interpessoais e o aumento da participação da família na formação integral dos alunos.' || router.query.slug === 'educacao-tecnologica' && 'Os alunos, de forma integrada, constroem soluções e mergulham no mundo da robótica e da educação tecnológica através do Pensamento Computacional - material didático da Mind Makers. Essa disciplina une o ensino de linguagens de programação (CODE) a práticas mão na massa (MAKER), que envolvem eletrônica digital, robótica, Internet das Coisas e Inteligência Artificial.' || router.query.slug === 'educacao-financeira' && 'O programa Gênio das Finanças tem como um dos fundamentos a Teoria da Inteligência Multifocal – TIM – de autoria do médico psiquiatra e escritor Dr. Augusto Cury, que, com foco na construção dos pensamentos e na formação de pensadores, estuda e analisa a mente humana e osdesdobramentos que advêm da gestão dos pensamentos.' || router.query.slug === 'programa-bilingue' && 'Imagine uma solução educacional completa para formar alunos bilíngues e deixar seu filho apto a compreender, falar, ler e escrever em inglês: esse é o PES - POSITIVO ENGLISH SOLUTION.'
    }), differential.data.body.map((slice, index) => slice.slice_type === 'hero' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hero, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
        alignIntems: true,
        spaceBetween: true,
        columnMb: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeroContainer, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            delay: 200,
            duration: 500,
            direction: "left",
            className: "content_hero_differentials",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentHero, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
                titleColor: "#305FA4",
                titleSize: "medium",
                children: slice.primary.title.map(item => item.text)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                dangerouslySetInnerHTML: {
                  __html: external_prismic_dom_default.a.RichText.asHtml(slice.primary.description)
                }
              }), router.query.slug === 'programa-bilingue' && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "cambridge",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  children: "Certifica\xE7\xE3o Cambridge"
                })
              }, index)]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            delay: 210,
            direction: "right",
            duration: 500,
            className: "image_hero_differentials",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: slice.primary.image.url,
              alt: slice.primary.description.map(item => item.text),
              width: slice.primary.image.dimensions.width,
              height: slice.primary.image.dimensions.height
            })
          })]
        })
      })
    }, index) || slice.slice_type === 'bilingues' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(BilingueContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
        column: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_awesome_reveal_["Fade"], {
          cascade: true,
          direction: "up",
          duration: 500,
          triggerOnce: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
            titleSize: "medium",
            titleColor: "#001D7E",
            titleBorder: true,
            titleBorderColor: "blue",
            children: "Formando cidad\xE3os bil\xEDngues"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            dangerouslySetInnerHTML: {
              __html: external_prismic_dom_default.a.RichText.asHtml(slice.primary.description)
            }
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BilingualBoxes, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            direction: "up",
            duration: 500,
            triggerOnce: true,
            children: slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(BilingualBoxe, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: item.title.map(i => i.text)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                dangerouslySetInnerHTML: {
                  __html: external_prismic_dom_default.a.RichText.asHtml(item.subtitle)
                }
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
                children: item.list.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: item.text
                }, index))
              })]
            }, index))
          })
        }, index)]
      })
    }, index) || slice.slice_type === 'listas' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(InvestmentsContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
        column: true,
        alignIntems: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_awesome_reveal_["Fade"], {
          cascade: true,
          direction: "up",
          duration: 500,
          triggerOnce: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
            titleSize: "medium",
            titleColor: "#001D7E",
            titleBorder: true,
            titleBorderColor: "blue",
            dangerouslySetInnerHTML: {
              __html: external_prismic_dom_default.a.RichText.asHtml(slice.primary.title)
            }
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            children: slice.primary.list.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(go_["GoCheck"], {
                size: 30,
                color: "#BAC529"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                dangerouslySetInnerHTML: {
                  __html: item.text
                }
              })]
            }, index))
          })]
        })
      })
    }, index) || slice.slice_type === 'icones' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconsContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
        column: true,
        alignIntems: true,
        children: router.query.slug !== 'educacao-financeira' ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Items, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            direction: "up",
            triggerOnce: true,
            duration: 500,
            className: "methods_effects",
            children: slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Item, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: item.image.url,
                  alt: item.image.alt,
                  width: item.image.dimensions.width,
                  height: item.image.dimensions.height
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
                children: item.description.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  dangerouslySetInnerHTML: {
                    __html: item.text
                  }
                }, index))
              })]
            }, index))
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            direction: "up",
            triggerOnce: true,
            duration: 500,
            className: "methods_effects",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
              titleSize: "medium",
              titleColor: "#001D7E",
              titleBorder: true,
              titleBorderColor: "blue",
              children: "Objetivos"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Items2, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
              cascade: true,
              direction: "up",
              triggerOnce: true,
              duration: 500,
              className: "methods_effects",
              children: slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Item2, {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon2, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: item.image.url,
                    alt: item.image.alt,
                    width: item.image.dimensions.width,
                    height: item.image.dimensions.height
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
                  children: item.description.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    dangerouslySetInnerHTML: {
                      __html: item.text
                    }
                  }, index))
                })]
              }, index))
            })
          })]
        })
      })
    }, index) || slice.slice_type === 'metodogia' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Methodology, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
        column: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_awesome_reveal_["Fade"], {
          cascade: true,
          direction: "up",
          duration: 500,
          triggerOnce: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
            titleSize: "medium",
            titleColor: "#001D7E",
            titleBorder: true,
            titleBorderColor: "blue",
            children: "Metodologia"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            dangerouslySetInnerHTML: {
              __html: external_prismic_dom_default.a.RichText.asHtml(slice.primary.content)
            }
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ItemsMethodology, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            direction: "up",
            duration: 500,
            triggerOnce: true,
            children: slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "box",
              children: [item.title.map(i => /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                children: i.text
              }, index)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
                children: item.lists.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(go_["GoCheck"], {
                    size: 30,
                    color: "#BAC529"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    dangerouslySetInnerHTML: {
                      __html: item.text
                    }
                  })]
                }, index))
              })]
            }, index))
          })
        })]
      })
    }, index) || slice.slice_type === 'escola_da_inteligencia' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Intelligence, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
        column: true,
        spaceBetween: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
          cascade: true,
          direction: "up",
          duration: 500,
          delay: 200,
          triggerOnce: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
            titleSize: "medium",
            titleColor: "#001D7E",
            titleBorder: true,
            titleBorderColor: "blue",
            children: "Programa Escola da Intelig\xEAncia"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_awesome_reveal_["Fade"], {
          cascade: true,
          direction: "up",
          duration: 500,
          delay: 200,
          triggerOnce: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            dangerouslySetInnerHTML: {
              __html: slice.primary.subtitle.map(item => item.text)
            }
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Videos, {
            children: slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "embed-responsive",
              dangerouslySetInnerHTML: {
                __html: item.video.html
              }
            }, index))
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Description, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BackgroundColor, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            direction: "up",
            duration: 500,
            delay: 300,
            triggerOnce: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
              alignIntems: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                dangerouslySetInnerHTML: {
                  __html: slice.primary.description.map(item => item.text)
                }
              })
            })
          })
        })
      })]
    }, index) || slice.slice_type === 'mind_makers' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(MindMakersContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BgMindColor, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
          column: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            direction: "up",
            duration: 500,
            triggerOnce: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "description-mind-makers",
              dangerouslySetInnerHTML: {
                __html: external_prismic_dom_default.a.RichText.asHtml(slice.primary.description)
              }
            })
          }, index), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            children: slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
              cascade: true,
              direction: "up",
              duration: 500,
              triggerOnce: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: item.icon.url,
                  width: item.icon.dimensions.width,
                  height: item.icon.dimensions.height,
                  alt: item.icon.alt
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  children: item.title.map(item => item.text)
                })]
              }, index)
            }, index))
          })]
        })
      })
    }, index) || slice.slice_type === 'videos' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(GalleryContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
        column: true,
        children: [slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `embed-responsive ${active === index ? 'active' : ''}`,
          dangerouslySetInnerHTML: {
            __html: item.url.html
          }
        }, index)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_slick_default.a, _objectSpread(_objectSpread({
          asNavFor: nav1,
          ref: slider2
        }, SettingsVideosThumbails), {}, {
          children: slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: item.url.thumbnail_url.replace('hqdefault', 'maxresdefault'),
            alt: item.url.title,
            width: item.url.thumbnail_width,
            height: item.url.thumbnail_height,
            onClick: () => setActive(index)
          }, index))
        }))]
      })
    }, index) || slice.slice_type === 'beneficios' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Benefits, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
        column: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
          cascade: true,
          direction: "up",
          duration: 500,
          triggerOnce: true,
          delay: 200,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
            titleSize: "medium",
            titleColor: "#001D7E",
            titleBorder: true,
            titleBorderColor: "blue",
            children: "Vantagens"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "items",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            direction: "up",
            triggerOnce: true,
            duration: 500,
            children: slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Collapse["a" /* default */], {
              cardColor: "#F9F9F9",
              className: "card-benefits",
              title: item.title.map((i, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: item.image.url,
                  alt: "Alunos",
                  width: item.image.dimensions.width,
                  height: item.image.dimensions.height
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
                  titleSize: "small",
                  titleColor: "#001D7E",
                  children: i.text
                }, index), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "arrow-down",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(go_["GoTriangleDown"], {
                    size: 55,
                    color: "#BAC529"
                  })
                })]
              }, index)),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
                children: item.items.map((i, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(go_["GoCheck"], {
                    size: 20,
                    color: "#BAC529"
                  }), i.text]
                }, index))
              }, index)
            }, index))
          })
        })]
      })
    }, index) || slice.slice_type === 'resultados' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ResultsContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
        column: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
          cascade: true,
          duration: 500,
          direction: "up",
          triggerOnce: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
            titleSize: "medium",
            titleColor: "#001D7E",
            titleBorder: true,
            titleBorderColor: "blue",
            children: "Resultados"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Results, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            direction: "up",
            duration: 500,
            delay: 300,
            triggerOnce: true,
            children: slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Result, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "circle",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
                  dangerouslySetInnerHTML: {
                    __html: item.percent.map(p => p.text)
                  }
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: "%"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                dangerouslySetInnerHTML: {
                  __html: item.description.map(i => i.text)
                }
              })]
            }, index))
          })
        })]
      })
    }, index) || slice.slice_type === 'logotipos' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(UniversityContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "logos",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            duration: 500,
            direction: "up",
            triggerOnce: true,
            children: slice.items.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: item.logo.url,
              alt: item.logo.alt,
              width: item.logo.dimensions.width,
              height: item.logo.dimensions.height
            }, index))
          })
        })
      })
    }, index))]
  });
};

/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Differential);
const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};
const getStaticProps = async context => {
  const {
    slug
  } = context.params;
  const differential = await Object(prismic["a" /* client */])().getByUID('differential', String(slug), {});
  return {
    props: {
      differential
    },
    revalidate: 5
  };
};

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TOlL":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAAHCAYAAABnVvNQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgB7dSxDcIwEAXQf2aJlB7BbMIAJGKDwAhsQDo6IiJq1qC8EaBjCQxXQUWTs3XNvSZKIn3pS98miNRdehC2wDvCufkYOQ88dSMKMNplzQ7fbErteYMQTnCulIwdT+sDFMx3WbODZAf50cO5kgL0m7LeZc0Okh3kkeBcWRF61ruM0PvXIcrBozucK4uhZr7Lmh04gF4DnCuJsn5T1rus2UGyF0++3prl6iFvUT41cG42ueEJex7bI5Tsdlmzwy/7AxC/Vrk4UqhCAAAAAElFTkSuQmCC"

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "TqbH":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAA6CAYAAAAtInDDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPASURBVHgB7ZnNUtNQFMfPTVIcFzAdV84INbwBS2ZATXdueQN4AuvOUQqB4ow78QmsT0DduSMzgIM73oAMdaG7LtE0jeckUpvm3iT33qgs+luE0PuRk5N7/rnnhEFJHNeph9bwEk/roEkUwd5p+9Qt298o29FzvQFO/g50YZFvhdahzJDSRhLx5HgR0CGM9uiGZYYwkGS9s+4wBsegAt7gyauzZZBEypMEriUP/3igQBCETVBA2kiCFj7Iwlj33D33QQElI8mbkkE0CIJA/sZ+o2QkgUHk0sXL9KUbUvUiYYIivudfN5qNuxhETm5HDJbT7bMN0EDZk0QsyEWShJIDmmgZSUQjtiVsY9A72fncBU20jcyTpGEwfA4VoG0kYQ6HWW9qSM40lRjpoTEpScJ1qiM501RiJJGSJAyWqrxYOWsHa61Hr9cu4baz6q7aMGPGjBmlYLC4e4xvCAduK6axbIAl3sX8f1gXfNc3YYDp5cITBkWb13+Pj17cIvuSd7dlULIulQv/fXCzjF6ksyR9GHjXUH/8A937FG4HPvQ742WYLg6IgiiCCzx+hCph0UM8bHLbolETvh54N/9a6dYQ94CGk50QbAh+duHbGx+qYqn9nt+AwTJhIJHeT8aNrMcZWYfaHcGkCtjuitCLJstslg1OJ8pLOEGEy2Bx24EqCEdH3N8ZjINlkqyR1ElUnWDmLuiy1N7Eo81p8cEwuCVBfvqQSJKfbUBvNtotUOX+CxvvVHCjseRwZZBvZNxZkNRHeJF6S63aO3fnGYi82O90RcPEiRgNipjHaanDwoK8N8mLUcQfZxq5JcGCbDEUeBN2k0cnQa0meMzJ+zlnZIGRiV594LbJSFIcLFzJ8XmSM01x3m0a9Ig0JUkQLAwdUOBFothICiKhJBnF3mzsiIPlat+FEpSrYAglCS+eJ0lxsICgvXxJsJyRsTdH/M1xniQlwWJnx0S9PMkBJSMJCiKRJM3PZ9dcItybvKnAMqVKgnIFK4sJJmctePByJfXT3NyRoG+3TLBMImek714Ig8iovR2fk+REsMKboYzkZKYGWSzDhUJJyn0/+yCJ/NeHvFSDMQfqjo1nvDQklRLIIP1tcczSDtUh7fIDRhvQP+iBAuqVXpEkccFgUTSQUDdSLElZFIJlEr2aeZnqhyAlkEH5s11McfXjpgpxDRrof33IrX6IUwIZ9DxJiCVJWXKmqeY7zlXnMBNEBSmBDJV9bEqnGvLv5zyqM/JP9WOgKznT6K/JSe41v2B14jv09z9BhfwC0b5hTBISOxgAAAAASUVORK5CYII="

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "Ws4Q":
/***/ (function(module, exports) {

module.exports = require("react-loading");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "Y8ry":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-loading"
var external_react_loading_ = __webpack_require__("Ws4Q");
var external_react_loading_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Loading/styles.ts

const LoadingContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__LoadingContainer",
  componentId: "kjiz38-0"
})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:center;"]);
// CONCATENATED MODULE: ./src/components/Loading/index.tsx





const Loading = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoadingContainer, {
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_loading_default.a, {
    type: 'spinningBubbles',
    color: "#BAC529"
  })
});

/* harmony default export */ var components_Loading = __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Z6lk":
/***/ (function(module, exports) {

module.exports = require("prismic-dom");

/***/ }),

/***/ "ZHf5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export apiEndpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client; });
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vNl1");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_0__);

const apiEndpoint = 'https://colegioalamovalinhos.cdn.prismic.io/api/v2';
const client = (req = null) => {
  const options = req ? {
    req
  } : null;
  return prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default.a.client(apiEndpoint, options);
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "dEEQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__("5xq/");

// CONCATENATED MODULE: ./src/layout/Container/styles.ts


const Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-18meh2g-0"
})(["width:100%;max-width:1320px;margin:auto;padding-left:15px;padding-right:15px;display:flex;", " ", " ", " ", " ", " ", " ", "{", " ", "}"], props => props.column ? Object(external_styled_components_["css"])(["flex-direction:column;"]) : '', props => props.spaceBetween ? Object(external_styled_components_["css"])(["justify-content:space-between;"]) : '', props => props.flexEnd ? Object(external_styled_components_["css"])(["justify-content:flex-end;"]) : '', props => props.alignIntems ? Object(external_styled_components_["css"])(["align-items:center;"]) : '', props => props.alignIntemsStart ? Object(external_styled_components_["css"])(["align-items:flex-start;"]) : '', props => props.flexWrap ? Object(external_styled_components_["css"])(["flex-wrap:wrap;"]) : '', Object(external_styled_breakpoints_["down"])('sm'), props => props.columnMb ? Object(external_styled_components_["css"])(["flex-direction:column;"]) : '', props => props.centerMB ? Object(external_styled_components_["css"])(["justify-content:center;"]) : '');
// CONCATENATED MODULE: ./src/layout/Container/index.tsx




const Containers = ({
  column,
  centerMB,
  className,
  columnMb,
  spaceBetween,
  alignIntems,
  flexWrap,
  alignIntemsStart,
  flexEnd,
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container, {
  column: column,
  columnMb: columnMb,
  spaceBetween: spaceBetween,
  alignIntems: alignIntems,
  alignIntemsStart: alignIntemsStart,
  flexWrap: flexWrap,
  centerMB: centerMB,
  className: className,
  flexEnd: flexEnd,
  children: children
});

/* harmony default export */ var layout_Container = __webpack_exports__["a"] = (Containers);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "npB8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACFSURBVHgBzYy7DYNAEERnzhU4cwnOTCvO8acD48yZ7ZAI0QEgiGmBEo4uKIGIY0WGkDiCDXjBrnY1bwghuFdfcIgwwczm4Rsb0PQYPMpErmiWdO5vi9tvtUzZMzKfizT5ghddz2AnGDikiy+Ze01l79C1dXO6XI8gzvLqZcc2Cz++Pm1vBA8lSAaydWtqAAAAAElFTkSuQmCC"

/***/ }),

/***/ "tyWD":
/***/ (function(module, exports) {



/***/ }),

/***/ "vNl1":
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });