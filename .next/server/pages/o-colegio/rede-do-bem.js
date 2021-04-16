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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gbbs");


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

/***/ "2TBW":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJVSURBVHgBrZW/b9NAFMe/75yGpY4imFAr4RRRQEKiDIgJAVKZQErKAhO0G0qEWkYm1I2tRZBMSE37D6TMSAWJCQbIEAkEEvFABQuoxFmaxn7cOXGxncSNUz6L7/zO33v3fpwJERjPrKsYoyw5Tg5MaRDSXVOViKpOm9fNB/qbQd/TIFHSaA1gAwdCJrOzbBZS5QPFp0rWCgNLiAmBVr/lxx8G3/nIlJofpbczGJ1qPa9f8CbCGyiPDymsmJkqNVe8ieu5UWzMywSteS+3bicxoXcOtW0xspU9WC3GsLCNayrRrudE4rHfmDryb6w28c+HoVMMMixuuYWqorEbXHzmKCEebChdgQTdC5ve/XQC80vHBWIjnJwgRk8SP/8KxnduWkNciLSs6FchlS/2fgI//WYUXu0hPpzue95GCyjXOqGZGCe3YkZAijN2+lk2am1sNxmpJFC8PgY9GTepgJa++ei+bN102LBrA+9/OLhxUrjleHlS4O13B2ePCWzdSWKy2wfJhFpLaNk92lUyin9WZZ0vDtp97pSGJ1cS7tgLj9dgHiqMFzeC9SubsizgiE1EUPlqI1dpuSFSomFhhQpdGHUduyszpUZd7mUgAiVw91wCt6aFm+Qwp1/4PWeznk9l3POyTQuk4XWUuDr68w9trNcIsycEZo3OJpN6x+aHGcvque+CUbRk7LGIQyKFn5oFfSkgrsiULHmf4//f5wplUDtjBNR3fuEecYU6EjMvqKRgOFnTvb+7ofAT2XbudazxvFx2nrxwMe8wya4meok2NqP+/n8BUqTWCQpASK8AAAAASUVORK5CYII="

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

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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

/***/ "B5RB":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKBSURBVHgBrVZNTxNBGH5muzRQG1wSojV6WA8kXIz6C2wlMX4c5CwHIPFoQr35EdNyUY5o4pn+ADXlgnoDTzYcqDcTQDdKY0OQLpimm0J3fGfaLe12d/nqk0zm693nmXnnnXeWIQDxJNciEUxxhjg4dAboYpwxmDaQh415zpH9NMMMPw7mNXj7CddZCHOME/HRkLFtTHsJKe6Bu8/4VCiElWOQC0woClbuPOVJ9wRzkaeoSvuxXLkMDF0ooy/MZT+3amOt0O82Sy+8ZNMdAmLlVM36kY+NAA9uAuu/tppjH5ZLeL1Qw9XYcJstncvjj6+Y5JIukj5n/is/P1An90Jhp4hvxe9tY8SVEpyirUoVBSlS1Xz4MXK9vf/m8yZya2VslKpNEYGWnWgkMkd1Qm0oTSAAYgcO3i+bUsBrJ60iJBAXYa5QYxTHQGG76j/nchfdoaRKp3AfvNP4TC8Q7TtoO+jvDeHSQI9s71Rq+GfZHSLOTsjtN9i957zk5X8RkjMPO4Vbo2js7U/k1svwwsWzMSFiqEGHexh2rZrvXGMnuupnULYAY9OSbS2qQovUTXcrNpU68cb2HoIgRMRXBhpJrBU//gC3XhSx+tdA5tEwxuMxOZ75suUZRT4whYsMiiTda3ZoUMcpkRdhuhRkIUTORQdxInB7XgmH/fOPgx5FxYlgK1klm2YmuWkR3UcG2YQhkx0JTIpXCt2DiRpkypYC4iUSLxK6BUZctPqmgEAjf3uKmOV9eSdEce5AIPm7xOxB1wXx7LnTd2XPwtffeVkHwHSTewoIOA8QlfEjiiySzycdtxwq4BIaFRmXfgKuEbkmRaqWQV+KsoR9CvNswjdA/gNwXwsBIs/ubQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "BNhF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/SearchForm/styles.ts

const Search = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Search",
  componentId: "sc-1uai8qe-0"
})(["max-width:414px;width:100%;height:calc(45px + (53 - 45) * ((100vw - 320px) / (1920 - 320)));background:", ";border:1px solid #5db7e3;box-sizing:border-box;border-radius:148px;overflow:hidden;display:{display:flex;align-items:center;}form{display:flex;align-items:center;height:100%;input{display:flex;align-items:center;flex:1;padding:7px calc(12px + (25 - 12) * ((100vw - 320px) / (1920 - 320)));border:0;background-color:transparent;font-size:calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));color:", ";&:-webkit-autofill{-webkit-text-fill-color:", ";-webkit-box-shadow:0 0 0 30px ", " inset;}&:focus,&:active{outline:none;}&::placeholder{font-size:calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));color:", ";}}button{margin-right:calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)));outline:none;cursor:pointer;background-color:transparent;border:none;svg{transition:fill 0.3s;width:calc(25px + (30 - 25) * ((100vw - 320px) / (1920 - 320)));height:calc(25 + (30 - 25) * ((100vw - 320px) / (1920 - 320)));}&:hover{svg{fill:", ";}}}}"], props => props.theme.colors.white, props => props.theme.colors.grayTen, props => props.theme.colors.grayTen, props => props.theme.colors.white, props => props.theme.colors.grayTen, props => props.theme.colors.lightBlue2);
// CONCATENATED MODULE: ./src/components/SearchForm/index.tsx




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SearchForm = (_ref) => {
  let {
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className"]);

  const router = Object(client_router["useRouter"])();
  const {
    0: search,
    1: setSearch
  } = Object(external_react_["useState"])('');

  function handleSearch(e) {
    e.preventDefault();
    const x = window.scrollX;
    const y = window.scrollY;

    window.onscroll = function () {
      window.scrollTo(x, y);
    };

    setTimeout(() => {
      window.onscroll = function () {
        window.scrollTo();
      };
    }, 1000);
    router.push(`
    ?q=${encodeURIComponent(search)}
    `);
    setSearch('');
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Search, {
      className: className,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: handleSearch,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          value: search,
          onChange: e => setSearch(e.target.value),
          name: "search",
          placeholder: "Pesquisar"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "submit",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaSearch"], {
            size: 30,
            color: "#5DB7E3"
          })
        })]
      })
    })
  });
};

/* harmony default export */ var components_SearchForm = __webpack_exports__["a"] = (SearchForm);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EH8U":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgBrVbPaxNBFP52kiKmoaSUBAShySUNjdB4Eym48SRJxA1o7M0Eb4Jg8eAx1IMoXvwLanKsVbNotd6agBdrwQpNLj24ggdNqUahCdL88M3a3e5ukuaHfpAw783L982befMmAnog8kQKCTaIjGGmBXg1vwBs1hso1GzI5+NypdvvhW4TsWVJhB1pGoo4GhUSlhvAwpu4rPQUEHOSywnk+iC2EimU0fzqZVm2+A9xISd5R4A141YMCsaE5ItLuWybwP8g7yTCNKcNSBvJwydFpKavwTvmxaBoNluP+IJ1gcgzKUmpJI3kN2du4KIviuskMgRcduCxLkAlaGKJEbGG4EQQpyamMQREXjDsIBXROOMbmzRFRr0RDANnE7eYvYGQdWKvXjXZVYvdNxjOMaqjNgHl5yd9XK6WsVjMYEiEWEtoL8ul7eVDQxDwD3CxTt6t3RJWlNfq2HPcjYT/CoaFbSoRCNE2idaJDzubavV4HB5MjftVX/F7yRTjsDswfszVdmYaePuw+RMBFx3GXKeA9W8bmD1xFqMjoyQWhNvhhvJLUQndlNmD2Xu4Stlxf7m2g8pvc1NttVAQJKrVOvADXcC36O6ZtJoJByfa2i1SKXvVjxH3Nx7Sot7rdhNIMflvL893E+CEt9/ewdqXvC54nm66r0MLqdb3TDYJ5G184J8LfIahVVix39xXV1auleGk7dKyMYJntbT9VLepr2VW43JWr8HocylDFdlX4+FZxHwRNQt+Hu++rlOGBSO5Qg9QmD9Ads1J5JPoE3zbFkvZrvO06pT2uqkZ9DroQcDJX8bljGarF42eOtEYxFPEgDj4TdhIrgvQt0jKGQqapz3zvYrLPh6MI6rLAF6FC1Q/p1ficlt8z0bD2zmtQmQt8BvPz8nFbyiV4Ef+16UTqRF/AMIb5gjWKhahAAAAAElFTkSuQmCC"

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Gbbs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__("KzqM");

// EXTERNAL MODULE: ./src/lib/prismic.ts
var prismic = __webpack_require__("ZHf5");

// EXTERNAL MODULE: external "prismic-javascript"
var external_prismic_javascript_ = __webpack_require__("vNl1");
var external_prismic_javascript_default = /*#__PURE__*/__webpack_require__.n(external_prismic_javascript_);

// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// EXTERNAL MODULE: ./src/components/Loading/index.tsx + 1 modules
var Loading = __webpack_require__("Y8ry");

// EXTERNAL MODULE: ./src/layout/Container/index.tsx + 1 modules
var Container = __webpack_require__("dEEQ");

// EXTERNAL MODULE: ./src/typography/Heading/index.tsx + 1 modules
var Heading = __webpack_require__("9nMZ");

// EXTERNAL MODULE: ./src/typography/Paragraph/index.tsx + 1 modules
var Paragraph = __webpack_require__("xwVD");

// EXTERNAL MODULE: ./src/components/SearchForm/index.tsx + 1 modules
var SearchForm = __webpack_require__("BNhF");

// EXTERNAL MODULE: ./src/components/Collapse/index.tsx + 1 modules
var Collapse = __webpack_require__("NFsi");

// EXTERNAL MODULE: ./public/assets/whatsapp.png
var whatsapp = __webpack_require__("EH8U");
var whatsapp_default = /*#__PURE__*/__webpack_require__.n(whatsapp);

// EXTERNAL MODULE: ./public/assets/phone.png
var phone = __webpack_require__("2TBW");
var phone_default = /*#__PURE__*/__webpack_require__.n(phone);

// EXTERNAL MODULE: ./public/assets/email.png
var email = __webpack_require__("s1O2");
var email_default = /*#__PURE__*/__webpack_require__.n(email);

// EXTERNAL MODULE: ./public/assets/web.png
var web = __webpack_require__("oU7r");
var web_default = /*#__PURE__*/__webpack_require__.n(web);

// EXTERNAL MODULE: ./public/assets/facebook.png
var facebook = __webpack_require__("B5RB");
var facebook_default = /*#__PURE__*/__webpack_require__.n(facebook);

// EXTERNAL MODULE: ./public/assets/instagram.png
var instagram = __webpack_require__("ymum");
var instagram_default = /*#__PURE__*/__webpack_require__.n(instagram);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__("5xq/");

// CONCATENATED MODULE: ./src/styles/pages/college/network/styles.ts


const HeroNetwork = external_styled_components_default.a.section.withConfig({
  displayName: "styles__HeroNetwork",
  componentId: "sc-1ursc1e-0"
})(["background:linear-gradient(180deg,#f0f0f0 0%,rgba(238,238,238,0) 100%);position:relative;overflow:hidden;z-index:-1;display:flex;.image_hero_network{width:100%;position:absolute;right:0;display:flex;justify-content:flex-end;}", "{padding-top:7rem;height:auto;flex-direction:column;.image_hero_network{position:relative;margin-top:2rem;}.desktop{display:none;}.mb{display:flex;}}", "{height:calc(588px + (675 - 588) * ((100vw - 768px) / (1920 - 768)));.image_hero_network{width:calc(600px + (807 - 600) * ((100vw - 768px) / (1920 - 768)));}.mb{display:none;}svg{bottom:calc(-95px + (-19 - (-95)) * ((100vw - 320px) / (1920 - 320)));}}"], Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["up"])('sm'));
const ContentHero = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ContentHero",
  componentId: "sc-1ursc1e-1"
})(["display:flex;flex-direction:column;align-items:flex-start;z-index:12;a{margin-top:2rem;}p{margin-top:0.7rem;}", "{width:100%;align-items:center;text-align:center;}", "{width:calc(260px + (500 - 260) * ((100vw - 768px) / (1920 - 768)));}"], Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["up"])('md'));
const HeroContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__HeroContainer",
  componentId: "sc-1ursc1e-2"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;", "{flex-direction:column;}"], Object(external_styled_breakpoints_["down"])('sm'));
const ServicesContainer = external_styled_components_default.a.section.withConfig({
  displayName: "styles__ServicesContainer",
  componentId: "sc-1ursc1e-3"
})(["padding-top:4rem;padding-bottom:4rem;background-color:", ";.search-services{margin:4rem auto;}", "{padding-top:3rem;padding-bottom:2rem;.search-services{margin:2rem auto;}}"], props => props.theme.colors.grayFour, Object(external_styled_breakpoints_["down"])('sm'));
const Services = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Services",
  componentId: "sc-1ursc1e-4"
})(["width:100%;display:grid;grid-template-columns:31% 31% 31%;grid-gap:3.3%;> div{width:100%;&:nth-child(n + 4){margin-top:2rem;}}.card-services{transition:all 0.3s;.title-service{padding-top:12px;padding-bottom:12px;}p{font-weight:300;transition:all 0.3s;}&:hover{background-color:", ";p{color:", ";font-weight:500;}}}.card-services.open{transition:all 0.3s;background-color:", ";p{color:", ";font-weight:500;}}.card-services .active{overflow-y:scroll;max-height:500px;padding-right:0;&::-webkit-scrollbar{background-color:rgba(255,255,255,0);}&::-webkit-scrollbar-track,&::-webkit-scrollbar-thumb{border:11px solid rgba(255,255,255,0);background-clip:padding-box;}&::-webkit-scrollbar-track{background-color:", ";}&::-webkit-scrollbar-thumb{background-color:", ";}}.subtitle{font-size:calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));color:", ";font-weight:500;}.service-lists{width:100%;margin-top:12px;display:flex;flex-direction:column;.service{display:flex;flex-direction:column;align-items:flex-start !important;border-bottom:1px solid ", ";padding-bottom:20px;&:last-child{border-bottom:0;}+ .service{margin-top:20px;}.service-benefits{margin:10px 0;background-color:", ";color:", ";padding:5px 10px;font-size:calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));border-radius:7px;}.service-services{margin-top:10px;h3{font-size:calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)));font-weight:600;color:", ";}p{font-size:calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)));line-height:calc( 22px + (24 - 22) * ((100vw - 320px) / (1920 - 320)) );font-weight:300;color:", ";}}.service-socials{margin-top:20px;h3{font-size:calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)));font-weight:600;color:", ";}ul{margin-top:10px;li{display:flex;align-items:center;+ li{padding-top:0.7rem;}img{padding-right:5px !important;}}}}}.services{width:100%;}}", "{grid-template-columns:48% 48%;grid-gap:3.3%;> div{&:nth-child(n + 4){margin-top:0;}}.card-services{p{font-size:18px;}}.card-services{margin-bottom:1rem;}}", "{display:flex;flex-direction:column;}"], props => props.theme.colors.lightBlue, props => props.theme.colors.blue, props => props.theme.colors.lightBlue, props => props.theme.colors.blue, props => props.theme.colors.lightBlue, props => props.theme.colors.grayThree, props => props.theme.colors.lightBlue3, props => props.theme.colors.lightBlue3, props => props.theme.colors.lightGreen, props => props.theme.colors.white, props => props.theme.colors.grayThree, props => props.theme.colors.grayThree, props => props.theme.colors.grayThree, Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["down"])('xs'));
// EXTERNAL MODULE: ./src/components/SEO/index.tsx
var SEO = __webpack_require__("6o60");

// CONCATENATED MODULE: ./src/pages/o-colegio/rede-do-bem.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var rede_do_bem_NetworkImage = function NetworkImage(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M460.957 678.919s103.615-12.426 113.018-69.531c9.403-57.105-232.904 33.644-421.598 13.458-183.688-19.671-189.882-132.917-79.422-148.035 110.46-15.117 289.256 23.82 236.024-134.577-53.233-158.397 125.675-17.54 316.187 20.434 190.511 37.973 223.658-552.551-190.601-411.537C257.788 9.31 196.678-118 196.678-118h613.456v796.919H460.957z",
      fill: "#BAC529"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M810.133 404.45s-26.93-63.812-96.501-29.674c-69.571 34.137-125.048 64.103-139.59 29.674-14.543-34.429-75.338-10.946-52.874 70.294 22.465 81.24 141.386 79.288 173.388 13.458 32.003-65.831 47.129-77.27 67.326-77.405 20.198-.134 53.301 46.34-6.732 90.391-60.033 44.052-67.327 70.99-50.495 91.737s16.271 57.195-46.006 40.934c-62.277-16.262-79.109 44.859-79.109 44.859h230.593V404.45z",
      fill: "#3D843C"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M460.957 678.919s103.615-12.426 113.018-69.531c9.403-57.105-232.904 33.644-421.598 13.458-183.688-19.671-189.882-132.917-79.422-148.035 110.46-15.117 289.256 23.82 236.024-134.577-53.233-158.397 125.675-17.54 316.187 20.434 190.511 37.973 223.658-552.551-190.601-411.537C257.788 9.31 196.678-118 196.678-118h613.456v796.919H460.957z",
      fill: "#BAC529"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M810.133 404.45s-26.93-63.812-96.501-29.674c-69.571 34.137-125.048 64.103-139.59 29.674-14.543-34.429-75.338-10.946-52.874 70.294 22.465 81.24 141.386 79.288 173.388 13.458 32.003-65.831 47.129-77.27 67.326-77.405 20.198-.134 53.301 46.34-6.732 90.391-60.033 44.052-67.327 70.99-50.495 91.737s16.271 57.195-46.006 40.934c-62.277-16.262-79.109 44.859-79.109 44.859h230.593V404.45z",
      fill: "#3D843C"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M87.92 679.267H245.1l13.036-35.137a49.726 49.726 0 0 1 10.286-16.584 49.67 49.67 0 0 1 15.87-11.343c11.388-5.155 26.705-14.513 41.559-31.2 28.9-32.456 44.237-67.308 44.237-67.308l-97.411-.475s8.766-54.541-39.648-126.964a41.016 41.016 0 0 1-6.732-26.351l4.59-52.857s32.9-36.798 12.715-82.457c0 0-19.3-26.749-26.959-16.958 0 0-58.288 138.973-63.615 159.636-5.327 20.664-12.387 33.654-5.308 98.597 1.872 17.19 2.548 31.528 2.525 43.316a153.857 153.857 0 0 1-14.765 65.43L87.92 679.267z",
      fill: "#F7C29E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M234.536 589.117c-14.591-16.228-34.857-13.651-56.169-21.046-21.312-7.395-28.152-60.716-28.152-60.716.031 2.01.05 3.965.046 5.846a153.857 153.857 0 0 1-14.765 65.43L87.92 679.267H245.1l13.036-35.137a49.716 49.716 0 0 1 26.156-27.928c9.689-4.389 22.231-11.823 34.904-24.226-43.292 18.214-70.089 13.353-84.661-2.859z",
      fill: "#F7C29E",
      style: {
        mixBlendMode: "multiply"
      },
      opacity: ".2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M165.018 49.682c36.134 57.072 125.2 107.931 125.2 107.931s-70.799-5.753-105.934-51.554l12.738-10.56s-10.125.982-18.61 1.963c-7.813-12.978-12.873-28.712-13.394-47.78z",
      fill: "#3D843C"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M259.833 73.286a1688.516 1688.516 0 0 0-13.627 6.298l7.833-11.263c-9.122-7.105-19.158-11.838-29.11-14.937-4.03 5.877-8.77 12.445-8.77 12.445l-.923-14.995c-26.662-5.746-50.201-1.16-50.201-1.16 36.135 57.073 125.2 107.932 125.2 107.932-.421-41.922-13.178-68.107-30.402-84.32z",
      fill: "#7FBF43"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M151.75 130.223a83.772 83.772 0 0 1 31.893-10.997c3.157 3.605 7.029 7.848 7.029 7.848l.216-8.501c40.277-1.931 74.234 23.457 74.234 23.457-23.048 14.038-42.882 17.971-59.226 16.808-1.03-2.967-2.493-7.391-2.493-7.391l-2.733 6.835a74.306 74.306 0 0 1-20.822-6.183c1.451-3.546 2.972-7.6 2.972-7.6l-8.589 4.714c-14.741-8.361-22.481-18.99-22.481-18.99z",
      fill: "#7FBF43"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M205.896 158.835c-1.03-2.968-2.493-7.392-2.493-7.392l-2.733 6.835a74.271 74.271 0 0 1-20.822-6.182c1.451-3.547 2.972-7.6 2.972-7.6l-8.589 4.714c-14.741-8.357-22.481-18.987-22.481-18.987 46.862-5.363 113.372 11.816 113.372 11.816-23.048 14.025-42.882 17.959-59.226 16.796z",
      fill: "#3D843C"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M548.368 124.346l-3.401 25.633 18.189-13.295 55.655-28.484-43.06 3.945s-21.937 5.336-23.122 6.41c-1.185 1.074-4.261 5.791-4.261 5.791z",
      fill: "#0B315E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M529.283 108.868l89.529-.653-70.46 16.131-19.069-15.478zM577.136 150.133l-23.462-18.863 65.14-23.055-41.678 41.918z",
      fill: "#305FA4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M539.122 137.699a27.151 27.151 0 0 1 5.976-1.572l-.17-1.592c-2.18.307-4.318.866-6.369 1.665l.563 1.499zM482.705 280.447a100.169 100.169 0 0 0 10.365-6.02l.887 1.333a102.62 102.62 0 0 1-10.53 6.117l-.722-1.43zm19.799-13.365a65.31 65.31 0 0 0 8.037-8.805l1.273.962a66.705 66.705 0 0 1-8.222 9.022l-1.088-1.179zm14.213-18.99a66.011 66.011 0 0 0 2.146-5.104 64.092 64.092 0 0 0 1.899-6.113l1.544.387a72.18 72.18 0 0 1-1.93 6.267 62.77 62.77 0 0 1-2.2 5.239l-1.459-.676zm6.458-34.998l1.598-.035a103.37 103.37 0 0 1-.386 12.179l-1.591-.151c.364-3.987.494-7.991.39-11.993h-.011zm-2.274-23.987l1.583-.228c.668 4.683 1.158 8.501 1.501 12.044l-1.59.158c-.344-3.508-.818-7.314-1.482-11.974h-.012zm-1.791-12.051a59.102 59.102 0 0 1-.606-12.144l1.598.097a57.14 57.14 0 0 0 .591 11.811v.093l-1.583.216v-.073zm2.011-24.168a29.031 29.031 0 0 1 6.948-10.208l1.101 1.159a27.456 27.456 0 0 0-6.563 9.66l-1.486-.611zM466.263 289.083a158.126 158.126 0 0 0 6.03-2.23l-.587-1.491a135.83 135.83 0 0 1-5.968 2.21l.525 1.511z",
      fill: "#292929"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M457.976 118.987s33.29-22.301 40.894-7.607c7.604 14.694-43.257 66.689-43.257 66.689l2.363-59.082zM457.976 216.165s33.29-22.302 40.894-7.608c7.604 14.694-43.257 66.689-43.257 66.689l2.363-59.081zM457.976 282.375s33.29-22.302 40.894-7.608c7.604 14.694-43.257 66.69-43.257 66.69l2.363-59.082z",
      fill: "#F19C61"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M434.98 93.996H252.206a24.633 24.633 0 0 0-17.426 7.225 24.681 24.681 0 0 0-7.218 17.442V492.55a24.69 24.69 0 0 0 7.219 17.442 24.64 24.64 0 0 0 17.425 7.228H434.98a24.62 24.62 0 0 0 17.426-7.226 24.655 24.655 0 0 0 5.342-8.003 24.7 24.7 0 0 0 1.875-9.441V118.663a24.684 24.684 0 0 0-7.219-17.441 24.636 24.636 0 0 0-17.424-7.226z",
      fill: "#292929"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M244.212 408.366s-33.058 81-29.85 96.316c3.208 15.316 23.269 35.798 72.49 28.979 49.22-6.82 83.24-15.958 83.24-15.958s2.057-109.318 0-114.859c-2.058-5.54-90.555-44.893-94.037-44.893-3.482 0-31.843 50.415-31.843 50.415z",
      fill: "#F7C29E",
      style: {
        mixBlendMode: "multiply"
      },
      opacity: ".2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M447.68 127.615H239.51v355.983h208.17V127.615z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M397.081 335.248H216.295a11.298 11.298 0 0 0-10.45 6.985 11.333 11.333 0 0 0-.861 4.332v74.679a11.336 11.336 0 0 0 3.313 8.004 11.314 11.314 0 0 0 7.998 3.313h142.331c5.763 8.044 16.212 22.452 17.127 22.452.915 0-.799-13.608-1.968-22.452h23.296a11.31 11.31 0 0 0 10.449-6.985 11.34 11.34 0 0 0 .861-4.332v-74.679a11.333 11.333 0 0 0-3.313-8.004 11.294 11.294 0 0 0-7.997-3.313zM461.797 166.056H269.338a11.302 11.302 0 0 0-7.994 3.309 11.325 11.325 0 0 0-3.317 7.996v80.274a11.333 11.333 0 0 0 3.313 8.004 11.298 11.298 0 0 0 7.998 3.313h19.984c-1.158 8.837-2.679 21.51-1.846 21.51.834 0 10.585-13.334 16.449-21.51h157.88a11.3 11.3 0 0 0 7.985-3.32 11.322 11.322 0 0 0 3.306-7.997v-80.274a11.324 11.324 0 0 0-3.313-7.992 11.305 11.305 0 0 0-7.986-3.313z",
      fill: "#3E82D7",
      style: {
        mixBlendMode: "multiply"
      },
      opacity: ".3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M386.51 111.967h-85.494c-.989 0-1.791.802-1.791 1.793v.873c0 .99.802 1.793 1.791 1.793h85.494c.99 0 1.792-.803 1.792-1.793v-.873c0-.991-.802-1.793-1.792-1.793z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M223.418 342.94s1.258 4.676 4.096 6.955l3.377-38.846s24.203-27.047 18.355-63.571a54.587 54.587 0 0 0-17.714-32.364c-5.404-4.767-11.376-7.955-14.885-3.477 0 0-27.407 65.352-46.364 113.089l53.135 18.214z",
      fill: "#F7C29E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M389.617 315.878H208.828a11.302 11.302 0 0 0-7.995 3.315 11.324 11.324 0 0 0-3.312 8.002v74.676c0 3.001 1.192 5.88 3.312 8.002a11.298 11.298 0 0 0 7.995 3.315h142.335c5.759 8.048 16.212 22.456 17.127 22.456.861 0-.799-13.608-1.972-22.456h23.299c2.999 0 5.875-1.192 7.995-3.315a11.32 11.32 0 0 0 3.312-8.002v-74.676a11.32 11.32 0 0 0-3.312-8.002 11.302 11.302 0 0 0-7.995-3.315z",
      fill: "#305FA4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      opacity: ".3",
      d: "M353.695 500.761a10.225 10.225 0 0 1-12.222 10.038 10.238 10.238 0 0 1-7.449-13.958 10.227 10.227 0 0 1 9.45-6.315 10.218 10.218 0 0 1 7.228 2.999 10.242 10.242 0 0 1 2.993 7.236z",
      fill: "#3E82D7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M346.518 505.011h-6.095a1.216 1.216 0 0 1-1.212-1.21v-6.105a1.214 1.214 0 0 1 1.212-1.209h6.095a1.21 1.21 0 0 1 1.212 1.209v6.105a1.214 1.214 0 0 1-1.212 1.21zm-6.095-8.195a.884.884 0 0 0-.884.88v6.105a.887.887 0 0 0 .884.881h6.095a.885.885 0 0 0 .884-.881v-6.105a.883.883 0 0 0-.884-.88h-6.095z",
      fill: "#3E82D7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M447.68 462.54H239.51v21.057h208.17V462.54z",
      fill: "#BECADE"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M221.576 250.031c7.558-3.489 11.53-23.213 12.962-32.1-6.079-6.12-13.707-11.63-17.876-6.298 0 0-6.037 14.393-14.406 34.6 5.705 3.2 13.653 6.407 19.32 3.798z",
      fill: "#F19C61"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M412.47 362.069s-28.118 2.361-29.102 9.838c-.984 7.476 1.181 20.667 27.723 23.225h27.492s-8.222-22.831-7.832-23.616c.39-.784-18.281-9.447-18.281-9.447z",
      fill: "#F3AA78"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M367.355 473.625a7.629 7.629 0 0 0-3.725 4.657 7.646 7.646 0 0 0 .757 5.918c12.935 22.337 64.383 111.095 69.019 118.317 5.308 8.264 18.286 27.75 61.342 37.784 43.056 10.034 60.755 38.966 60.755 38.966h132.712S656.947 629.675 631 500.969c0 0-20.073-106.861-57.802-103.318 0 0-23.003-24.206-45.419-19.481 0 0-42.461-25.389-66.649-25.389l-58.088-68.714c-5.751-6.8-15.884-8.114-22.952-2.704-2.274 1.742-4.007 4.045-4.486 7.082-1.771 11.205 12.974 39.554 36.568 73.798 23.593 34.245 81.989 142.876 56.624 190.698 0 0-25.952-19.485-48.368-50.774-18.768-26.22-40.848-35.022-53.073-28.542z",
      fill: "#F7C29E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M461.344 352.808a241.948 241.948 0 0 1 21.752 21.294c9.214 10.046 20.845 24.917 27.681 36.408 8.612 14.211 14.282 26.66 16.985 42.316l-.174.039c-3.088-14.682-11.195-30.524-18.22-41.47-5.269-8.551-15.028-22.136-27.322-36.378-6.176-7.128-14.012-15.555-20.845-22.081l.143-.128zM527.399 377.984c6.273 3.211 11.863 7.693 16.807 12.751a81.325 81.325 0 0 1 12.739 17.001 83.033 83.033 0 0 1 7.971 19.705c1.544 6.421 2.509 10.776 2.671 20.938h-.177a103.371 103.371 0 0 0-3.826-20.56c-1.991-6.479-4.79-13.442-8.179-19.218a91.054 91.054 0 0 0-12.221-16.931c-4.444-4.865-10.253-10.119-15.87-13.547l.085-.139zM572.708 397.157c5.547 4.196 11.164 11.63 13.897 16.653a75.071 75.071 0 0 1 7.928 20.239c1.313 4.795 1.645 9.45 1.849 14.327l-.173.023c-.819-4.726-1.332-8.249-3.011-13.968-2.579-8.674-4.601-13.137-8.056-19.825-2.065-4.123-7.423-12.287-12.499-17.321l.065-.128zM394.145 501.112c1.158-5.977-5.79-15.455-12.098-22.607a14.66 14.66 0 0 0-15.641-4.27 7.65 7.65 0 0 0-2.019 9.965c3.474 6.001 9.735 16.8 17.116 29.523 5.512-2.816 11.553-7.082 12.642-12.611zM399.722 311.048c3.354-.672 18.579-5.742 17.645-8.5l-15.016-17.774a17.082 17.082 0 0 0-11.446-5.985h-.069c-.124 0-.386-.031-.772-.031-2.011 0-6.972.576-8.06 6.032-1.077 5.39 7.836 18.488 11.765 23.932a5.91 5.91 0 0 0 5.953 2.326z",
      fill: "#F19C61"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M133.211 586.432c16.63 10.228 70.174 40.809 125.54 47.328 3.242.386 5.524 3.361 4.566 5.931l-9.673 25.929c-.641 1.716-2.567 2.705-4.729 2.454-16.317-1.982-83.641-12.125-131.009-48.804-1.61-1.248-2.289-3.141-1.687-4.756l9.87-26.463c.931-2.492 4.412-3.284 7.122-1.619z",
      fill: "#292929"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M128.346 611.226l-.182-.066a1.868 1.868 0 0 1-1.053-.98 1.88 1.88 0 0 1-.051-1.438l2.981-7.983a1.878 1.878 0 0 1 .977-1.052 1.874 1.874 0 0 1 1.435-.049l.185.066a1.88 1.88 0 0 1 1.101 2.418l-2.977 7.983a1.884 1.884 0 0 1-.98 1.052 1.876 1.876 0 0 1-1.436.049zM138.309 617.37l-.182-.066a1.884 1.884 0 0 1-1.222-1.694 1.907 1.907 0 0 1 .118-.725l2.98-7.982a1.876 1.876 0 0 1 2.413-1.101l.181.065a1.878 1.878 0 0 1 1.104 2.419l-2.964 8.002a1.881 1.881 0 0 1-.99 1.046 1.877 1.877 0 0 1-1.438.036zM152.591 611.972l-.185-.069a1.874 1.874 0 0 0-2.413 1.103l-2.975 7.986a1.879 1.879 0 0 0 1.102 2.416l.185.069a1.876 1.876 0 0 0 2.413-1.104l2.975-7.986a1.877 1.877 0 0 0-1.102-2.415zM158.547 628.436l-.182-.07a1.88 1.88 0 0 1-1.104-2.415l2.98-7.982a1.884 1.884 0 0 1 1.69-1.222c.246-.009.492.031.723.117l.185.069a1.881 1.881 0 0 1 1.1 2.415l-2.976 7.987a1.88 1.88 0 0 1-2.416 1.101zM168.65 634.204l-.185-.069a1.878 1.878 0 0 1-1.101-2.415l2.977-7.983a1.865 1.865 0 0 1 .979-1.054 1.872 1.872 0 0 1 1.437-.051l.181.07a1.87 1.87 0 0 1 1.051.979 1.885 1.885 0 0 1 .049 1.436l-2.976 7.986a1.876 1.876 0 0 1-2.412 1.101zM179.192 638.779l-.182-.069a1.87 1.87 0 0 1-1.053-.981 1.873 1.873 0 0 1-.051-1.438l2.98-7.983a1.876 1.876 0 0 1 2.413-1.101l.185.07a1.874 1.874 0 0 1 1.1 2.414l-2.976 7.983a1.878 1.878 0 0 1-2.416 1.105zM189.943 642.797l-.181-.07a1.878 1.878 0 0 1-1.05-.982 1.888 1.888 0 0 1-.051-1.437l2.977-7.982a1.881 1.881 0 0 1 2.416-1.101l.181.065c.231.087.443.218.624.386a1.879 1.879 0 0 1 .477 2.033l-2.977 7.983a1.881 1.881 0 0 1-2.416 1.105zM205.2 634.751l-.184-.069a1.875 1.875 0 0 0-2.413 1.104l-2.974 7.987a1.878 1.878 0 0 0 1.103 2.415l.184.069a1.876 1.876 0 0 0 2.413-1.104l2.974-7.987a1.878 1.878 0 0 0-1.103-2.415zM212.307 648.523l-.182-.066a1.868 1.868 0 0 1-1.053-.98 1.88 1.88 0 0 1-.051-1.438l2.98-7.983a1.88 1.88 0 0 1 2.413-1.101l.181.066a1.876 1.876 0 0 1 1.104 2.418l-2.976 7.983a1.884 1.884 0 0 1-.98 1.052 1.876 1.876 0 0 1-1.436.049zM223.412 651.599l-.186-.07a1.874 1.874 0 0 1-1.1-2.415l2.976-7.986a1.881 1.881 0 0 1 2.417-1.101l.181.069a1.881 1.881 0 0 1 1.104 2.415l-2.98 7.983a1.867 1.867 0 0 1-.978 1.052 1.868 1.868 0 0 1-1.434.053zM234.925 653.531l-.182-.066a1.881 1.881 0 0 1-1.104-2.418l2.98-7.983a1.87 1.87 0 0 1 .978-1.052 1.874 1.874 0 0 1 1.435-.049l.185.066a1.88 1.88 0 0 1 1.1 2.418l-2.976 7.983a1.884 1.884 0 0 1-.98 1.052 1.876 1.876 0 0 1-1.436.049zM246.504 655.424l-.181-.07a1.885 1.885 0 0 1-1.054-.978 1.89 1.89 0 0 1-.05-1.437l2.98-7.983a1.862 1.862 0 0 1 .977-1.054 1.866 1.866 0 0 1 1.435-.051l.185.07c.466.175.844.528 1.05.982.206.453.224.97.051 1.437l-2.977 7.982a1.877 1.877 0 0 1-2.416 1.102z",
      fill: "#141414"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M166.076 646.476l.042-.12a2.524 2.524 0 0 1-.521-.127l-13.101-4.896a2.618 2.618 0 0 1-1.401-3.415l11.815-31.683a2.607 2.607 0 0 1 3.289-1.662l13.105 4.899a2.434 2.434 0 0 1 1.494 1.72c1.031.448 2.066.9 3.112 1.344.351-2.662-1.016-5.25-3.451-6.158l-13.086-4.892c-2.868-1.07-6.149.583-7.307 3.686l-11.813 31.683c-1.158 3.091.236 6.507 3.108 7.577l13.101 4.899a5.505 5.505 0 0 0 5.655-1.221 260.398 260.398 0 0 1-4.041-1.634z",
      fill: "#7FBF43"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M163.199 621.341l-5.702-2.132a2.134 2.134 0 0 0-2.616 1.303 2.14 2.14 0 0 0 1.126 2.699l5.698 2.129 1.494-3.999z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M555.5 679.267h132.712s-20.497-32.517-42.076-113.209c-9.472 59.422-61.712 55.994-82.445 59.29-23.871 3.798-116.537-15.54-129.519-21.637 5.79 8.821 19.463 27.012 60.569 36.594 43.064 10.034 60.759 38.962 60.759 38.962zM419.188 373c26.021 41.853 72.705 137.984 49.606 179.926l15.333 15.146s38.733-42.954-22.906-137.671A631.958 631.958 0 0 0 419.188 373z",
      fill: "#F7C29E",
      style: {
        mixBlendMode: "multiply"
      },
      opacity: ".2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M264.669 364.535a28.408 28.408 0 0 1-4.776 15.766 28.358 28.358 0 0 1-12.723 10.453 28.33 28.33 0 0 1-30.896-6.151 28.384 28.384 0 0 1-7.759-14.529 28.409 28.409 0 0 1 1.614-16.396 28.375 28.375 0 0 1 10.443-12.734 28.327 28.327 0 0 1 35.793 3.53 28.39 28.39 0 0 1 8.304 20.061z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M221.569 365.277s-2.81-11.545 3.888-15.869c6.697-4.323 13.846-5.313 18.729-2.82 6.775 3.454 9.558 12.785 7.392 17.947l-17.98-4.521-12.029 5.263z",
      fill: "#000"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M240.805 378.831h-8.323v8.318h8.323v-8.318z",
      fill: "#F7C29E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M240.809 383.815v-4.984h-8.327v4.25c1.795.954 4.447 1.507 8.327.734z",
      fill: "#F19A5E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M253.933 363.939a3.095 3.095 0 0 0-2.787.112 14.844 14.844 0 0 0-4.425-10.336 14.812 14.812 0 0 0-20.793 0 14.847 14.847 0 0 0-4.424 10.336 3.095 3.095 0 0 0-2.787-.112c-1.668.823-2.185 3.176-1.158 5.259 1.027 2.083 3.211 3.091 4.879 2.28.227-.112.437-.257.622-.429.957 6.785 6.62 11.873 13.267 11.777 6.643.096 12.31-4.992 13.263-11.777.187.172.397.317.626.429 1.663.823 3.86-.201 4.875-2.28 1.015-2.079.51-4.443-1.158-5.259z",
      fill: "#F7C29E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M241.77 373.642c-.386 1.642-2.251 2.937-4.555 3.006-2.305.07-4.266-1.105-4.733-2.705l9.288-.301z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M221.501 364.052s10.894-3.304 15.661-8.817c0 0-1.347 6.642-2.355 7.704.317.213 10.878-4.93 12.314-9.659 1.436-4.73-10.808-6.449-10.808-6.449s-4.192 1.785-4.405 1.893c-.212.109-4.145.564-4.597 1.569-.587 1.306-3.362 1.422-3.362 1.422l-1.753 3.651-1.223 3.837.528 4.849z",
      fill: "#000"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M212.582 349.034c2.405.97 5.184 1.418 8.064.529 6.358-1.955 8.878-1.194 9.72-.715a2.073 2.073 0 0 0 1.667.217c.629-.209 1.212-.773 1.031-2.21 0 0 .251-6.047-4.926-9.49a28.398 28.398 0 0 0-15.556 11.669z",
      fill: "#000"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M226.257 348.635a.546.546 0 0 1-.103-.415.538.538 0 0 1 .235-.358c1.061-.699 3.79-2.272 7.072-2.442a.537.537 0 0 1 .563.541.538.538 0 0 1-.509.537c-3 .159-5.571 1.639-6.536 2.268a.545.545 0 0 1-.722-.131z",
      fill: "#7FBF43"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M470.996 144.72H278.545a11.298 11.298 0 0 0-7.995 3.315 11.32 11.32 0 0 0-3.312 8.002v80.262a11.328 11.328 0 0 0 3.312 8.003 11.306 11.306 0 0 0 7.995 3.315h19.984c-1.158 8.836-2.675 21.509-1.846 21.509.83 0 10.589-13.33 16.452-21.509h157.88a11.298 11.298 0 0 0 7.998-3.314 11.306 11.306 0 0 0 2.451-3.672c.569-1.373.862-2.845.862-4.332v-80.262a11.336 11.336 0 0 0-3.32-8.011 11.313 11.313 0 0 0-8.01-3.306z",
      fill: "#5DB7E3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M329.641 209.54c7.221-13.903 1.816-31.032-12.074-38.26-13.889-7.228-31.003-1.818-38.224 12.085-7.221 13.903-1.816 31.033 12.074 38.261 13.889 7.228 31.003 1.817 38.224-12.086z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M308.977 210.752h-8.323v8.319h8.323v-8.319z",
      fill: "#F7C29E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M308.977 215.736v-4.988h-8.323v4.25c1.791.958 4.443 1.511 8.323.738z",
      fill: "#F19A5E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M322.101 195.861a3.09 3.09 0 0 0-2.791.112 14.84 14.84 0 0 0-4.34-10.488 14.812 14.812 0 0 0-20.958 0 14.84 14.84 0 0 0-4.34 10.488 3.09 3.09 0 0 0-2.791-.112c-1.668.823-2.185 3.176-1.158 5.259 1.027 2.083 3.212 3.091 4.879 2.28a2.82 2.82 0 0 0 .625-.429c.954 6.785 6.617 11.873 13.264 11.777 6.643.096 12.31-4.992 13.263-11.777.188.171.398.316.626.429 1.663.823 3.86-.201 4.875-2.28 1.015-2.079.51-4.44-1.154-5.259z",
      fill: "#F7C29E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M294.372 177.902s4.176-3.539 13.672-2.967c9.496.572 11.303 5.529 11.84 12.611l-.556 8.427s-2.463-2.538-5.675-9.57c0 0-5.315 5.969-7.631 5.262-2.316-.707.876-5.023.876-5.023s-10.832 9.327-17.209 9.316c0 0-3.377-10.919 1.363-14.922 0 0-3.571.17-3.76-.533-.189-.704 1.703-1.755 5.134-1.357 0 0-2.447-4.787-1.081-5.285 1.367-.499 3.027 4.041 3.027 4.041z",
      fill: "#050505"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M309.938 205.567c-.386 1.642-2.251 2.937-4.555 3.006-2.305.07-4.246-1.105-4.729-2.704l9.284-.302zM453.065 167.849H344.927a2.34 2.34 0 0 0-2.339 2.341v.247a2.34 2.34 0 0 0 2.339 2.342h108.138a2.34 2.34 0 0 0 2.34-2.342v-.247a2.34 2.34 0 0 0-2.34-2.341zM366.891 180.858h-21.964a2.34 2.34 0 0 0-2.339 2.342v.247a2.34 2.34 0 0 0 2.339 2.341h21.964a2.34 2.34 0 0 0 2.34-2.341v-.247a2.34 2.34 0 0 0-2.34-2.342zM453.072 180.858h-71.44a2.34 2.34 0 0 0-2.339 2.342v.247a2.34 2.34 0 0 0 2.339 2.341h71.44a2.34 2.34 0 0 0 2.339-2.341v-.247a2.34 2.34 0 0 0-2.339-2.342zM344.939 193.871h53.598a2.34 2.34 0 0 1 2.339 2.342v.243a2.34 2.34 0 0 1-2.339 2.342h-53.598a2.34 2.34 0 0 1-2.343-2.346v-.243a2.342 2.342 0 0 1 2.339-2.342l.004.004zM453.074 193.871H411.74a2.342 2.342 0 0 0-2.34 2.342v.247a2.342 2.342 0 0 0 2.34 2.342h41.334a2.34 2.34 0 0 0 2.339-2.342v-.247a2.34 2.34 0 0 0-2.339-2.342zM453.065 206.88H344.927a2.34 2.34 0 0 0-2.339 2.342v.247a2.34 2.34 0 0 0 2.339 2.342h108.138a2.342 2.342 0 0 0 2.34-2.342v-.247a2.342 2.342 0 0 0-2.34-2.342zM305.83 340.088h-33.293a2.342 2.342 0 0 0-2.34 2.342v.247a2.342 2.342 0 0 0 2.34 2.342h33.293a2.34 2.34 0 0 0 2.339-2.342v-.247a2.34 2.34 0 0 0-2.339-2.342zM293.509 353.098h-20.972a2.34 2.34 0 0 0-2.34 2.341v.248a2.34 2.34 0 0 0 2.34 2.341h20.972a2.34 2.34 0 0 0 2.339-2.341v-.248a2.34 2.34 0 0 0-2.339-2.341zM329.497 353.098h-26.886a2.34 2.34 0 0 0-2.34 2.341v.248a2.34 2.34 0 0 0 2.34 2.341h26.886a2.34 2.34 0 0 0 2.339-2.341v-.248a2.34 2.34 0 0 0-2.339-2.341zM376.471 353.098h-37.872a2.34 2.34 0 0 0-2.339 2.341v.248a2.34 2.34 0 0 0 2.339 2.341h37.872a2.34 2.34 0 0 0 2.339-2.341v-.248a2.34 2.34 0 0 0-2.339-2.341zM376.476 340.088h-59.67a2.34 2.34 0 0 0-2.339 2.342v.247a2.34 2.34 0 0 0 2.339 2.342h59.67a2.342 2.342 0 0 0 2.34-2.342v-.247a2.342 2.342 0 0 0-2.34-2.342zM376.471 378.599H272.537a2.34 2.34 0 0 0-2.34 2.341v.248a2.34 2.34 0 0 0 2.34 2.341h103.934a2.34 2.34 0 0 0 2.339-2.341v-.248a2.34 2.34 0 0 0-2.339-2.341zM323.969 366.108h-51.432a2.34 2.34 0 0 0-2.34 2.341v.247a2.34 2.34 0 0 0 2.34 2.342h51.432a2.34 2.34 0 0 0 2.339-2.342v-.247a2.34 2.34 0 0 0-2.339-2.341zM376.472 366.108h-39.617a2.34 2.34 0 0 0-2.339 2.341v.247a2.34 2.34 0 0 0 2.339 2.342h39.617a2.34 2.34 0 0 0 2.339-2.342v-.247a2.34 2.34 0 0 0-2.339-2.341z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M104.066 350.154a26.972 26.972 0 0 0-5.064-3.539l.706-1.434a28.327 28.327 0 0 1 5.405 3.764l-1.047 1.209zM106.599 504.713a102.64 102.64 0 0 1-7.774-9.362l1.293-.943a100.8 100.8 0 0 0 7.651 9.231l-1.17 1.074zm-14.22-19.74a66.892 66.892 0 0 1-4.633-11.317l1.544-.464a64.759 64.759 0 0 0 4.513 11.043l-1.424.738zm-6.972-23.33a61.421 61.421 0 0 1-.259-5.676c0-2.148.112-4.354.332-6.568l1.59.158a64.16 64.16 0 0 0-.323 6.395c0 1.855.085 3.713.25 5.529l-1.59.162zm3.83-23.832l-1.545-.409a103.29 103.29 0 0 1 3.833-11.568l1.487.587c-1.48 3.72-2.74 7.523-3.776 11.39zm8.65-22.409l-1.44-.7c1.544-3.191 3.324-6.619 5.566-10.78l1.406.773c-2.232 4.146-3.984 7.554-5.528 10.722l-.004-.015zm11.333-21.348l-1.409-.749.043-.085a57.352 57.352 0 0 0 4.632-10.877l1.544.456a59.052 59.052 0 0 1-4.759 11.205l-.051.05zm4.883-23.368a27.49 27.49 0 0 0-2.818-11.34l1.433-.711a29.117 29.117 0 0 1 2.991 11.978l-1.606.073zM120.215 517.409a166.055 166.055 0 0 1-4.887-4.176l1.066-1.194a158.277 158.277 0 0 0 4.836 4.134l-1.015 1.236z",
      fill: "#292929"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M93.535 323.084l-2.115 25.771-14.955-16.857-48.363-39.651 41.241 13.006s20.305 9.876 21.231 11.178c.927 1.302 2.96 6.553 2.96 6.553z",
      fill: "#0B315E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M115.449 312.01l-87.347-19.663 65.433 30.737 21.914-11.074z",
      fill: "#305FA4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M59.94 342.167l26.925-13.446-58.763-36.374 31.838 49.82z",
      fill: "#305FA4"
    })]
  }));
};

rede_do_bem_NetworkImage.defaultProps = {
  width: "807",
  height: "680",
  viewBox: "0 0 807 680",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var rede_do_bem_NetworkMobileImage = function NetworkMobileImage(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M59.8 636.3H217l13-35.1c2.3-6.2 5.8-11.8 10.3-16.6 4.5-4.8 9.9-8.6 15.9-11.3 11.4-5.2 26.7-14.5 41.6-31.2 28.9-32.5 44.2-67.3 44.2-67.3l-97.4-.5s8.8-54.5-39.6-127c-5.2-7.8-7.6-17.1-6.7-26.4l4.6-52.9s32.9-36.8 12.7-82.5c0 0-19.3-26.7-27-17 0 0-58.3 139-63.6 159.6-5.3 20.7-12.4 33.7-5.3 98.6 1.9 17.2 2.5 31.5 2.5 43.3-.1 22.6-5.1 45-14.8 65.4L59.8 636.3z",
      fill: "#f7c29e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M206.4 546.1c-14.6-16.2-34.9-13.7-56.2-21-21.3-7.4-28.2-60.7-28.2-60.7 0 2 .1 4 0 5.8-.1 22.6-5.1 45-14.8 65.4L59.8 636.3H217l13-35.1c2.3-6.2 5.8-11.8 10.3-16.6 4.5-4.8 9.9-8.6 15.9-11.3 9.7-4.4 22.2-11.8 34.9-24.2-43.3 18.1-70.1 13.3-84.7-3z",
      fill: "#f7c29e",
      opacity: ".2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M136.9 6.7C173 63.8 262.1 114.6 262.1 114.6s-70.8-5.8-105.9-51.6l12.7-10.6s-10.1 1-18.6 2c-7.8-12.9-12.9-28.6-13.4-47.7z",
      fill: "#3d843c"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M231.7 30.3c-5.5 2.5-13.6 6.3-13.6 6.3l7.8-11.3c-9.1-7.1-19.2-11.8-29.1-14.9-4 5.9-8.8 12.4-8.8 12.4l-.9-15c-26.7-5.7-50.2-1.2-50.2-1.2C173 63.7 262.1 114.5 262.1 114.5c-.4-41.8-13.1-68-30.4-84.2z",
      fill: "#7fbf43"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M123.6 87.2c9.8-5.8 20.6-9.5 31.9-11 3.2 3.6 7 7.8 7 7.8l.2-8.5C203 73.6 236.9 99 236.9 99c-23 14-42.9 18-59.2 16.8-1-3-2.5-7.4-2.5-7.4l-2.7 6.8c-7.2-1-14.2-3.1-20.8-6.2 1.5-3.5 3-7.6 3-7.6l-8.6 4.7c-14.7-8.2-22.5-18.9-22.5-18.9z",
      fill: "#7fbf43"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M177.8 115.9c-1-3-2.5-7.4-2.5-7.4l-2.7 6.8c-7.2-1-14.2-3.1-20.8-6.2 1.5-3.5 3-7.6 3-7.6l-8.6 4.7c-14.7-8.4-22.5-19-22.5-19C170.5 81.9 237 99.1 237 99.1c-23 14-42.9 17.9-59.2 16.8z",
      fill: "#3d843c"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M520.3 81.4l-3.4 25.6 18.2-13.3 55.7-28.5-43.1 3.9s-21.9 5.3-23.1 6.4c-1.3 1.2-4.3 5.9-4.3 5.9z",
      fill: "#0b315e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M501.2 65.9l89.5-.7-70.5 16.1-19-15.4z",
      fill: "#305fa4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M549 107.2l-23.5-18.9 65.1-23.1-41.6 42z",
      fill: "#305fa4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M511 94.7c1.9-.8 3.9-1.3 6-1.6l-.2-1.6c-2.2.3-4.3.9-6.4 1.7l.6 1.5zM454.6 237.5c3.6-1.8 7-3.8 10.4-6l.9 1.3c-3.4 2.2-6.9 4.3-10.5 6.1l-.8-1.4zm19.8-13.4c2.9-2.7 5.6-5.6 8-8.8l1.3 1c-2.5 3.3-5.2 6.3-8.2 9l-1.1-1.2zm14.2-19c.8-1.6 1.5-3.4 2.1-5.1.7-2 1.4-4 1.9-6.1l1.5.4c-.6 2.1-1.2 4.2-1.9 6.3-.7 1.8-1.4 3.5-2.2 5.2l-1.4-.7zm6.5-35h1.6c.1 4.1 0 8.1-.4 12.2l-1.6-.2c.4-4 .5-8 .4-12zm-2.3-24l1.6-.2c.7 4.7 1.2 8.5 1.5 12l-1.6.2c-.4-3.5-.8-7.3-1.5-12zm-1.8-12c-.6-4-.8-8.1-.6-12.1l1.6.1c-.2 3.9 0 7.9.6 11.8v.1l-1.6.1zm2-24.2c1.6-3.9 3.9-7.3 6.9-10.2l1.1 1.2c-2.9 2.7-5.1 6-6.6 9.7l-1.4-.7zM438.2 246.1c2.1-.7 4.1-1.5 6-2.2l-.6-1.5c-1.9.8-3.9 1.5-6 2.2l.6 1.5z",
      fill: "#292929"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M429.9 76s33.3-22.3 40.9-7.6c7.6 14.7-43.3 66.7-43.3 66.7l2.4-59.1zM429.9 173.2s33.3-22.3 40.9-7.6-43.3 66.7-43.3 66.7l2.4-59.1zM429.9 239.4s33.3-22.3 40.9-7.6-43.3 66.7-43.3 66.7l2.4-59.1z",
      fill: "#f19c61"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M406.9 51H224.1c-6.5 0-12.8 2.6-17.4 7.2-4.6 4.6-7.2 10.9-7.2 17.4v373.9c0 6.5 2.6 12.8 7.2 17.4 4.6 4.6 10.9 7.2 17.4 7.2h182.8c3.2 0 6.4-.6 9.4-1.9 3-1.2 5.7-3.1 8-5.3 2.3-2.3 4.1-5 5.3-8 1.2-3 1.9-6.2 1.9-9.4V75.7c0-6.5-2.6-12.8-7.2-17.4-4.6-4.7-10.9-7.3-17.4-7.3z",
      fill: "#292929"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M216.1 365.4s-33.1 81-29.9 96.3c3.2 15.3 23.3 35.8 72.5 29 49.2-6.8 83.2-16 83.2-16s2.1-109.3 0-114.9c-2.1-5.5-90.6-44.9-94-44.9s-31.8 50.5-31.8 50.5z",
      fill: "#f7c29e",
      opacity: ".2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M419.6 84.6H211.4v356h208.2v-356z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M369 292.3H188.2c-1.5 0-3 .3-4.3.9-1.4.6-2.6 1.4-3.7 2.5s-1.9 2.3-2.5 3.7c-.6 1.4-.9 2.8-.9 4.3v74.7c0 1.5.3 3 .9 4.3.6 1.4 1.4 2.6 2.5 3.7s2.3 1.9 3.7 2.5c1.4.6 2.8.9 4.3.9h142.3c5.8 8 16.2 22.5 17.1 22.5.9 0-.8-13.6-2-22.5H369c1.5 0 3-.3 4.3-.9 1.4-.6 2.6-1.4 3.7-2.5 1-1.1 1.9-2.3 2.5-3.7.6-1.4.9-2.8.9-4.3v-74.7c0-1.5-.3-3-.9-4.3-.6-1.4-1.4-2.6-2.5-3.7s-2.3-1.9-3.7-2.5c-1.4-.6-2.8-.9-4.3-.9zM433.7 123.1H241.2c-3 0-5.9 1.2-8 3.3-2.1 2.1-3.3 5-3.3 8v80.3c0 1.5.3 3 .9 4.3.6 1.4 1.4 2.6 2.5 3.7s2.3 1.9 3.7 2.5c1.4.6 2.8.9 4.3.9h20c-1.2 8.8-2.7 21.5-1.8 21.5.8 0 10.6-13.3 16.4-21.5h157.9c3 0 5.9-1.2 8-3.3 2.1-2.1 3.3-5 3.3-8v-80.3c0-3-1.2-5.9-3.3-8-2.2-2.2-5.1-3.4-8.1-3.4z",
      fill: "#3e82d7",
      opacity: ".3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M358.4 69h-85.5c-1 0-1.8.8-1.8 1.8v.9c0 1 .8 1.8 1.8 1.8h85.5c1 0 1.8-.8 1.8-1.8v-.9c0-1-.8-1.8-1.8-1.8z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M195.3 300s1.3 4.7 4.1 7l3.4-38.8s24.2-27 18.4-63.6c-2-12.5-8.2-24-17.7-32.4-5.4-4.8-11.4-8-14.9-3.5 0 0-27.4 65.4-46.4 113.1l53.1 18.2z",
      fill: "#f7c29e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M361.5 272.9H180.7c-3 0-5.9 1.2-8 3.3-2.1 2.1-3.3 5-3.3 8v74.7c0 3 1.2 5.9 3.3 8 2.1 2.1 5 3.3 8 3.3H323c5.8 8 16.2 22.5 17.1 22.5.9 0-.8-13.6-2-22.5h23.3c3 0 5.9-1.2 8-3.3 2.1-2.1 3.3-5 3.3-8v-74.7c0-3-1.2-5.9-3.3-8-2-2.1-4.9-3.3-7.9-3.3z",
      fill: "#305fa4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M325.6 457.8c0 2-.6 4-1.7 5.7-1.1 1.7-2.7 3-4.6 3.8-1.9.8-3.9 1-5.9.6-2-.4-3.8-1.4-5.2-2.8-1.4-1.4-2.4-3.3-2.8-5.2-.4-2-.2-4 .6-5.9.8-1.9 2.1-3.5 3.8-4.6 1.7-1.1 3.7-1.7 5.7-1.7 2.7 0 5.3 1.1 7.2 3 1.8 1.8 2.9 4.4 2.9 7.1z",
      opacity: ".3",
      fill: "#3e82d7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M318.4 462h-6.1c-.3 0-.6-.1-.9-.4-.2-.2-.4-.5-.4-.9v-6.1c0-.3.1-.6.4-.9.2-.2.5-.4.9-.4h6.1c.3 0 .6.1.9.4.2.2.4.5.4.9v6.1c0 .3-.1.6-.4.9-.3.3-.6.4-.9.4zm-6.1-8.2c-.2 0-.5.1-.6.3-.2.2-.3.4-.3.6v6.1c0 .2.1.5.3.6.2.2.4.3.6.3h6.1c.2 0 .5-.1.6-.3.2-.2.3-.4.3-.6v-6.1c0-.2-.1-.5-.3-.6-.2-.2-.4-.3-.6-.3h-6.1z",
      fill: "#3e82d7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M419.6 419.6H211.4v21.1h208.2v-21.1z",
      fill: "#becade"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M193.5 207.1c7.6-3.5 11.5-23.2 13-32.1-6.1-6.1-13.7-11.6-17.9-6.3 0 0-6 14.4-14.4 34.6 5.7 3.2 13.6 6.4 19.3 3.8z",
      fill: "#f19c61"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M384.4 319.1s-28.1 2.4-29.1 9.8c-1 7.5 1.2 20.7 27.7 23.2h27.5s-8.2-22.8-7.8-23.6c.3-.7-18.3-9.4-18.3-9.4z",
      fill: "#f3aa78"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M339.3 430.6c-.9.5-1.7 1.1-2.3 1.9-.6.8-1.1 1.7-1.4 2.7s-.4 2-.2 3c.1 1 .5 2 1 2.9 12.9 22.3 64.4 111.1 69 118.3 5.3 8.3 18.3 27.8 61.3 37.8s60.8 39 60.8 39h132.7s-31.3-49.6-57.2-178.3c0 0-20.1-106.9-57.8-103.3 0 0-23-24.2-45.4-19.5 0 0-42.5-25.4-66.6-25.4L375.1 241c-5.8-6.8-15.9-8.1-23-2.7-2.3 1.7-4 4-4.5 7.1-1.8 11.2 13 39.6 36.6 73.8 23.6 34.2 82 142.9 56.6 190.7 0 0-26-19.5-48.4-50.8-18.8-26.1-40.9-34.9-53.1-28.5z",
      fill: "#f7c29e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M433.2 309.8c7.7 6.6 15 13.7 21.8 21.3 9.2 10 20.8 24.9 27.7 36.4 8.6 14.2 14.3 26.7 17 42.3h-.2c-3.1-14.7-11.2-30.5-18.2-41.5-5.3-8.6-15-22.1-27.3-36.4-6.2-7.1-14-15.6-20.8-22.1zM499.3 335c6.3 3.2 11.9 7.7 16.8 12.8 5 5.1 9.3 10.8 12.7 17 3.5 6.2 6.2 12.8 8 19.7 1.5 6.4 2.5 10.8 2.7 20.9h-.2c-.6-7-1.9-13.9-3.8-20.6-2-6.5-4.8-13.4-8.2-19.2-3.4-6.1-7.5-11.8-12.2-16.9-4.4-4.9-10.3-10.1-15.9-13.5l.1-.2zM544.6 354.2c5.5 4.2 11.2 11.6 13.9 16.7 3.6 6.3 6.3 13.1 7.9 20.2 1.3 4.8 1.6 9.4 1.8 14.3h-.2c-.8-4.7-1.3-8.2-3-14-2.6-8.7-4.6-13.1-8.1-19.8-2.1-4.1-7.4-12.3-12.5-17.3l.2-.1zM366 458.1c1.2-6-5.8-15.5-12.1-22.6-1.9-2.2-4.4-3.7-7.2-4.5-2.8-.8-5.7-.7-8.5.2-1.5 1.1-2.5 2.8-2.9 4.6-.4 1.8-.1 3.7.9 5.4 3.5 6 9.7 16.8 17.1 29.5 5.6-2.8 11.7-7 12.7-12.6zM371.6 268.1c3.4-.7 18.6-5.7 17.6-8.5l-15-17.8c-2.9-3.4-7-5.6-11.4-6h-.9c-2 0-7 .6-8.1 6-1.1 5.4 7.8 18.5 11.8 23.9.7.9 1.6 1.6 2.6 2 1.2.5 2.3.6 3.4.4z",
      fill: "#f19c61"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M105.1 543.5c16.6 10.2 70.2 40.8 125.5 47.3 3.2.4 5.5 3.4 4.6 5.9l-9.7 25.9c-.6 1.7-2.6 2.7-4.7 2.5-16.3-2-83.6-12.1-131-48.8-1.6-1.2-2.3-3.1-1.7-4.8L98 545c.9-2.4 4.4-3.2 7.1-1.5z",
      fill: "#292929"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M100.2 568.3l-.2-.1c-.2-.1-.4-.2-.6-.4-.2-.2-.3-.4-.4-.6-.1-.2-.2-.5-.2-.7 0-.2 0-.5.1-.7l3-8c.1-.2.2-.4.4-.6.2-.2.4-.3.6-.4.2-.1.5-.2.7-.2.2 0 .5 0 .7.1l.2.1c.5.2.8.5 1.1 1 .2.5.2 1 .1 1.4l-3 8c-.1.2-.2.4-.4.6-.2.2-.4.3-.6.4-.2.1-.5.2-.7.2-.3 0-.5-.1-.8-.1zM110.2 574.4l-.2-.1c-.2-.1-.4-.2-.6-.4-.2-.2-.3-.4-.4-.6-.1-.2-.2-.5-.2-.7 0-.2 0-.5.1-.7l3-8c.2-.5.5-.8 1-1.1.5-.2 1-.2 1.4 0l.2.1c.2.1.4.2.6.4.2.2.3.4.4.6.1.2.2.5.2.7 0 .2 0 .5-.1.7l-3 8c-.1.2-.2.4-.4.6-.2.2-.4.3-.6.4-.2.1-.5.2-.7.2-.2 0-.5 0-.7-.1zM124.5 569l-.2-.1c-1-.4-2.1.1-2.4 1.1l-3 8c-.4 1 .1 2.1 1.1 2.4l.2.1c1 .4 2.1-.1 2.4-1.1l3-8c.4-1-.1-2-1.1-2.4zM130.4 585.5l-.2-.1c-.5-.2-.8-.5-1-1s-.2-1-.1-1.4l3-8c.1-.2.2-.4.4-.6.2-.2.4-.3.6-.4.2-.1.5-.2.7-.2.2 0 .5 0 .7.1l.2.1c.5.2.8.5 1.1 1 .2.5.2 1 0 1.4l-3 8c-.2.5-.5.8-1 1-.4.2-.9.2-1.4.1zM140.5 591.2l-.2-.1c-.5-.2-.8-.5-1.1-1-.2-.5-.2-1-.1-1.4l3-8c.1-.2.2-.4.4-.6.2-.2.4-.3.6-.4.2-.1.5-.2.7-.2.2 0 .5 0 .7.1l.2.1c.2.1.4.2.6.4.2.2.3.4.4.6.1.2.2.5.2.7 0 .2 0 .5-.1.7l-3 8c-.2.5-.5.8-1 1.1-.3.2-.8.2-1.3 0zM151.1 595.8l-.2-.1c-.2-.1-.4-.2-.6-.4-.2-.2-.3-.4-.4-.6-.1-.2-.2-.5-.2-.7 0-.2 0-.5.1-.7l3-8c.2-.5.5-.8 1-1 .5-.2 1-.2 1.4-.1l.2.1c.5.2.8.5 1 1 .2.5.2 1 .1 1.4l-3 8c-.1.2-.2.4-.4.6-.2.2-.4.3-.6.4-.2.1-.5.2-.7.2-.2 0-.5 0-.7-.1zM161.8 599.8l-.2-.1c-.5-.2-.8-.5-1-1-.2-.5-.2-1-.1-1.4l3-8c.2-.5.5-.8 1-1.1.5-.2 1-.2 1.4-.1l.2.1c.2.1.4.2.6.4.2.2.3.4.4.6.1.2.2.5.2.7 0 .2 0 .5-.1.7l-3 8c-.2.5-.5.8-1 1.1-.4.3-.9.3-1.4.1zM177.1 591.8l-.2-.1c-1-.4-2.1.1-2.4 1.1l-3 8c-.4 1 .1 2.1 1.1 2.4l.2.1c1 .4 2.1-.1 2.4-1.1l3-8c.4-1-.1-2.1-1.1-2.4zM184.2 605.5l-.2-.1c-.2-.1-.4-.2-.6-.4-.2-.2-.3-.4-.4-.6-.1-.2-.2-.5-.2-.7 0-.2 0-.5.1-.7l3-8c.2-.5.5-.8 1-1.1.5-.2 1-.2 1.4-.1l.2.1c.2.1.4.2.6.4.2.2.3.4.4.6.1.2.2.5.2.7 0 .2 0 .5-.1.7l-3 8c-.1.2-.2.4-.4.6-.2.2-.4.3-.6.4-.2.1-.5.2-.7.2-.2.2-.5.1-.7 0zM195.3 608.6l-.2-.1c-.5-.2-.8-.5-1-1-.2-.5-.2-1-.1-1.4l3-8c.2-.5.5-.8 1-1.1.5-.2 1-.2 1.4-.1l.2.1c.5.2.8.5 1.1 1 .2.5.2 1 .1 1.4l-3 8c-.1.2-.2.4-.4.6-.2.2-.4.3-.6.4-.2.1-.5.2-.7.2-.3.1-.6.1-.8 0zM206.8 610.6l-.2-.1c-.5-.2-.8-.5-1.1-1-.2-.5-.2-1-.1-1.4l3-8c.1-.2.2-.4.4-.6.2-.2.4-.3.6-.4.2-.1.5-.2.7-.2.2 0 .5 0 .7.1l.2.1c.5.2.8.5 1.1 1 .2.5.2 1 0 1.4l-3 8c-.1.2-.2.4-.4.6-.2.2-.4.3-.6.4-.2.1-.5.2-.7.2-.1 0-.3-.1-.6-.1zM218.4 612.4l-.2-.1c-.2-.1-.4-.2-.6-.4-.2-.2-.3-.4-.4-.6-.1-.2-.2-.5-.2-.7 0-.2 0-.5.1-.7l3-8c.1-.2.2-.4.4-.6.2-.2.4-.3.6-.4.2-.1.5-.2.7-.2.2 0 .5 0 .7.1l.2.1c.5.2.8.5 1 1 .2.5.2 1 .1 1.4l-3 8c-.2.5-.5.8-1 1.1s-.9.2-1.4 0z",
      fill: "#141414"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M138 603.5v-.1c-.2 0-.4-.1-.5-.1l-13.1-4.9c-.6-.3-1.1-.8-1.4-1.4-.3-.6-.3-1.4 0-2l11.8-31.7c.2-.7.7-1.2 1.3-1.5.6-.3 1.3-.4 2-.2l13.1 4.9c.4.1.7.4 1 .7.3.3.4.7.5 1 1 .4 2.1.9 3.1 1.3.4-2.7-1-5.2-3.5-6.2l-13.1-4.9c-2.9-1.1-6.1.6-7.3 3.7l-11.8 31.7c-1.2 3.1.2 6.5 3.1 7.6l13.1 4.9c1 .3 2 .4 3 .2s1.9-.7 2.7-1.4c-1.3-.5-2.7-1-4-1.6z",
      fill: "#7fbf43"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M135.1 578.4l-5.7-2.1c-.5-.2-1.1-.1-1.6.1s-.9.7-1.1 1.2c-.2.5-.2 1.1 0 1.6s.6.9 1.1 1.1l5.7 2.1 1.6-4z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M527.4 636.3h132.7s-20.5-32.5-42.1-113.2c-9.5 59.4-61.7 56-82.4 59.3-23.9 3.8-116.5-15.5-129.5-21.6 5.8 8.8 19.5 27 60.6 36.6 43 10 60.7 38.9 60.7 38.9zM391.1 330c26 41.9 72.7 138 49.6 179.9L456 525s38.7-43-22.9-137.7c-12.9-19.8-26.9-38.9-42-57.3z",
      fill: "#f7c29e",
      opacity: ".2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M236.6 321.6c0 5.6-1.7 11.1-4.8 15.8-3.1 4.7-7.5 8.3-12.7 10.5-5.2 2.1-10.9 2.7-16.4 1.6-5.5-1.1-10.6-3.8-14.5-7.8-4-4-6.7-9-7.8-14.5-1.1-5.5-.5-11.2 1.6-16.4 2.1-5.2 5.8-9.6 10.4-12.7 4.7-3.1 10.1-4.8 15.8-4.8 7.5 0 14.7 3 20 8.3 5.4 5.2 8.4 12.4 8.4 20z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M193.5 322.3s-2.8-11.5 3.9-15.9c6.7-4.3 13.8-5.3 18.7-2.8 6.8 3.5 9.6 12.8 7.4 17.9l-18-4.5-12 5.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M212.7 335.9h-8.3v8.3h8.3v-8.3z",
      fill: "#f7c29e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M212.7 340.8v-5h-8.3v4.2c1.8 1.1 4.4 1.6 8.3.8z",
      fill: "#f19a5e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M225.8 321c-.4-.2-.9-.3-1.4-.3-.5 0-1 .2-1.4.4-.1-3.9-1.7-7.6-4.4-10.3-2.8-2.7-6.5-4.3-10.4-4.3-3.9 0-7.6 1.5-10.4 4.3-2.8 2.7-4.4 6.4-4.4 10.3-.4-.2-.9-.4-1.4-.4-.5 0-1 .1-1.4.3-1.7.8-2.2 3.2-1.2 5.3s3.2 3.1 4.9 2.3c.2-.1.4-.3.6-.4 1 6.8 6.6 11.9 13.3 11.8 6.6.1 12.3-5 13.3-11.8.2.2.4.3.6.4 1.7.8 3.9-.2 4.9-2.3 1-2.2.5-4.5-1.2-5.3z",
      fill: "#f7c29e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M213.7 330.7c-.4 1.6-2.3 2.9-4.6 3-2.3.1-4.3-1.1-4.7-2.7l9.3-.3z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M193.4 321.1s10.9-3.3 15.7-8.8c0 0-1.3 6.6-2.4 7.7.3.2 10.9-4.9 12.3-9.7 1.4-4.7-10.8-6.4-10.8-6.4s-4.2 1.8-4.4 1.9c-.2.1-4.1.6-4.6 1.6-.6 1.3-3.4 1.4-3.4 1.4l-1.8 3.7-1.2 3.8.6 4.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M184.5 306.1c2.4 1 5.2 1.4 8.1.5 6.4-2 8.9-1.2 9.7-.7.2.2.5.2.8.3.3 0 .6 0 .9-.1.6-.2 1.2-.8 1-2.2 0 0 .3-6-4.9-9.5-6.5 1.9-12 6.1-15.6 11.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M198.2 305.7c0-.1-.1-.1-.1-.2v-.2c0-.1 0-.1.1-.2 0-.1.1-.1.2-.2 1.1-.7 3.8-2.3 7.1-2.4h.2c.1 0 .1.1.2.1.1.1.1.1.1.2v.2c0 .1-.1.3-.1.4s-.2.2-.4.2c-3 .2-5.6 1.6-6.5 2.3-.1.1-.3.1-.4.1-.2-.2-.4-.2-.4-.3z",
      fill: "#7fbf43"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M442.9 101.7H250.4c-3 0-5.9 1.2-8 3.3-2.1 2.1-3.3 5-3.3 8v80.3c0 1.5.3 3 .9 4.3s1.4 2.6 2.5 3.7 2.3 1.9 3.7 2.5c1.4.6 2.8.9 4.3.9h20c-1.2 8.8-2.7 21.5-1.8 21.5.8 0 10.6-13.3 16.5-21.5h157.9c1.5 0 3-.3 4.3-.9 1.4-.6 2.6-1.4 3.7-2.5 1-1.1 1.9-2.3 2.5-3.7.6-1.4.9-2.8.9-4.3V113c0-1.5-.3-3-.9-4.3-.6-1.4-1.4-2.6-2.5-3.7s-2.3-1.9-3.7-2.5c-1.5-.5-3-.8-4.5-.8z",
      fill: "#5db7e3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M301.5 166.6c7.2-13.9 1.8-31-12.1-38.3-13.9-7.2-31-1.8-38.2 12.1-7.2 13.9-1.8 31 12.1 38.3 13.9 7.2 31 1.8 38.2-12.1z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M280.9 167.8h-8.3v8.3h8.3v-8.3z",
      fill: "#f7c29e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M280.9 172.8v-5h-8.3v4.2c1.7 1 4.4 1.5 8.3.8z",
      fill: "#f19a5e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M294 152.9c-.4-.2-.9-.3-1.4-.3-.5 0-1 .2-1.4.4 0-3.9-1.6-7.7-4.3-10.5-2.8-2.8-6.5-4.3-10.5-4.3s-7.7 1.6-10.5 4.3-4.3 6.6-4.3 10.5c-.4-.2-.9-.4-1.4-.4-.5 0-1 .1-1.4.3-1.7.8-2.2 3.2-1.2 5.3 1 2.1 3.2 3.1 4.9 2.3.2-.1.4-.3.6-.4 1 6.8 6.6 11.9 13.3 11.8 6.6.1 12.3-5 13.3-11.8.2.2.4.3.6.4 1.7.8 3.9-.2 4.9-2.3 1-2.1.5-4.5-1.2-5.3z",
      fill: "#f7c29e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M266.3 134.9s4.2-3.5 13.7-3c9.5.6 11.3 5.5 11.8 12.6l-.6 8.4s-2.5-2.5-5.7-9.6c0 0-5.3 6-7.6 5.3s.9-5 .9-5-10.8 9.4-17.2 9.4c0 0-3.4-10.9 1.4-14.9 0 0-3.6.2-3.8-.5-.2-.7 1.7-1.8 5.1-1.4 0 0-2.4-4.8-1.1-5.3 1.4-.5 3.1 4 3.1 4z",
      fill: "#050505"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M281.8 162.6c-.4 1.6-2.3 2.9-4.6 3-2.3.1-4.2-1.1-4.7-2.7l9.3-.3zM425 124.9H316.8c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3H425c1.3 0 2.3-1 2.3-2.3v-.2c0-1.3-1-2.3-2.3-2.3zM338.8 137.9h-22c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3h22c1.3 0 2.3-1 2.3-2.3v-.2c0-1.3-1-2.3-2.3-2.3zM425 137.9h-71.4c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3H425c1.3 0 2.3-1 2.3-2.3v-.2c0-1.3-1-2.3-2.3-2.3zM316.8 150.9h53.6c.6 0 1.2.2 1.7.7.4.4.7 1 .7 1.7v.2c0 .6-.2 1.2-.7 1.7-.4.4-1 .7-1.7.7h-53.6c-.6 0-1.2-.2-1.7-.7-.4-.4-.7-1-.7-1.7v-.2c0-.6.2-1.2.7-1.7.5-.5 1.1-.7 1.7-.7zM425 150.9h-41.3c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3H425c1.3 0 2.3-1 2.3-2.3v-.2c0-1.3-1-2.3-2.3-2.3zM425 163.9H316.8c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3H425c1.3 0 2.3-1 2.3-2.3v-.2c0-1.2-1-2.3-2.3-2.3zM277.7 297.1h-33.3c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3h33.3c1.3 0 2.3-1 2.3-2.3v-.2c.1-1.2-1-2.3-2.3-2.3zM265.4 310.1h-21c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3h21c1.3 0 2.3-1 2.3-2.3v-.2c0-1.2-1-2.3-2.3-2.3zM301.4 310.1h-26.9c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3h26.9c1.3 0 2.3-1 2.3-2.3v-.2c0-1.2-1-2.3-2.3-2.3zM348.4 310.1h-37.9c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3h37.9c1.3 0 2.3-1 2.3-2.3v-.2c0-1.2-1-2.3-2.3-2.3zM348.4 297.1h-59.7c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3h59.7c1.3 0 2.3-1 2.3-2.3v-.2c0-1.2-1-2.3-2.3-2.3zM348.4 335.6h-104c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3h103.9c1.3 0 2.3-1 2.3-2.3v-.1c.1-1.3-.9-2.4-2.2-2.4zM295.9 323.1h-51.4c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3h51.4c1.3 0 2.3-1 2.3-2.3v-.2c0-1.2-1-2.3-2.3-2.3zM348.4 323.1h-39.6c-1.3 0-2.3 1-2.3 2.3v.2c0 1.3 1 2.3 2.3 2.3h39.6c1.3 0 2.3-1 2.3-2.3v-.2c0-1.2-1-2.3-2.3-2.3z",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M76 307.2c-1.5-1.4-3.2-2.6-5.1-3.5l.7-1.4c1.9 1 3.8 2.3 5.4 3.8l-1 1.1zM78.5 461.7c-2.8-3-5.4-6.1-7.8-9.4l1.3-.9c2.4 3.2 4.9 6.3 7.7 9.2l-1.2 1.1zM64.3 442c-1.9-3.6-3.4-7.4-4.6-11.3l1.5-.5c1.2 3.8 2.7 7.5 4.5 11l-1.4.8zm-7-23.3c-.2-1.9-.3-3.8-.3-5.7 0-2.1.1-4.4.3-6.6l1.6.2c-.2 2.1-.3 4.3-.3 6.4 0 1.9.1 3.7.3 5.5l-1.6.2zm3.8-23.9l-1.5-.4c1-3.9 2.3-7.8 3.8-11.6l1.5.6c-1.5 3.8-2.7 7.6-3.8 11.4zm8.7-22.4l-1.4-.7c1.5-3.2 3.3-6.6 5.6-10.8l1.4.8c-2.3 4.2-4.1 7.6-5.6 10.7zm11.3-21.3l-1.4-.7v-.1c1.9-3.5 3.5-7.1 4.6-10.9l1.5.5c-1.1 3.8-2.7 7.6-4.7 11.2zm4.9-23.4c-.1-3.9-1.1-7.8-2.8-11.3l1.4-.7c1.8 3.7 2.9 7.8 3 12H86zM92.1 474.4c-1.7-1.4-3.3-2.8-4.9-4.2l1.1-1.2c1.5 1.4 3.2 2.8 4.8 4.1l-1 1.3z",
      fill: "#292929"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M65.4 280.1l-2.1 25.8-15-16.9L0 249.4l41.2 13s20.3 9.9 21.2 11.2c1 1.3 3 6.5 3 6.5z",
      fill: "#0b315e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M87.3 269L0 249.4l65.4 30.7L87.3 269zM31.8 299.2l26.9-13.4L0 249.4l31.8 49.8z",
      fill: "#305fa4"
    })]
  }));
};

rede_do_bem_NetworkMobileImage.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 660.1 637"
};









const Network = ({
  services
}) => {
  const router = Object(client_router["useRouter"])();

  if (router.isFallback) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Loading["a" /* default */], {});
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SEO["a" /* default */], {
      color: "#305FA4",
      title: "Rede do Bem",
      description: "Divulgue seu trabalho aqui e tenha acesso aos servi\xE7os de outros pais e familiares de alunos. Com isso, voc\xEA encontra o que procura de forma mais r\xE1pida e desfruta de alguns benef\xEDcios e descontos."
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeroNetwork, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
        alignIntems: true,
        spaceBetween: true,
        columnMb: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeroContainer, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            delay: 200,
            duration: 500,
            direction: "left",
            className: "content_hero_differentials",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentHero, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
                titleColor: "#305FA4",
                titleSize: "large",
                children: "Rede do Bem"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Paragraph["a" /* default */], {
                paragraphColor: "#606060",
                size: "calc(25px + (34 - 25) * ((100vw - 320px) / (1920 - 320)))",
                children: ["Nos mantemos unidos", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "mesmo \xE0 dist\xE2ncia!"]
              })]
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
        cascade: true,
        delay: 210,
        direction: "right",
        duration: 500,
        className: "image_hero_network desktop",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(rede_do_bem_NetworkImage, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
        cascade: true,
        delay: 210,
        direction: "right",
        duration: 500,
        className: "image_hero_network mb",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(rede_do_bem_NetworkMobileImage, {})
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ServicesContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
        column: true,
        alignIntems: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
          titleSize: "medium",
          titleColor: "#001D7E",
          titleBorder: true,
          titleBorderColor: "blue",
          children: "Servi\xE7os"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchForm["a" /* default */], {
          className: "search-services"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Services, {
          id: "services",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
            cascade: true,
            direction: "up",
            triggerOnce: true,
            duration: 500,
            children: services.map(service => service.data.body.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Collapse["a" /* default */], {
                cardColor: "#FFFFFF",
                title: item.primary.title.map(i => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph["a" /* default */], {
                  paragraphColor: "#696969",
                  size: "calc(14px + (24 - 14) * ((100vw - 768px) / (1920 - 768)))",
                  className: "title-service",
                  children: i.text
                }, index)),
                className: "card-services",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "service-lists",
                  children: item.items.map((i, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "service",
                    children: [i.title.map(title => /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
                      className: "subtitle",
                      children: title.text
                    }, index)), i.benefits.map(benefit => benefit.text !== '' && i.benefits.map((benefit, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "service-benefits",
                      children: benefit.text
                    }, index))), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "service-services",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                        children: "Servi\xE7os:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "service-description",
                        children: i.to_do.map((benefit, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                          className: "service-services",
                          children: benefit.text
                        }, index))
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "service-socials",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                        children: "Contato:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                        children: [i.name.map((n, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                          children: n.text
                        }, index)), i.whatsapp.map(whats => whats.text !== '' && i.whatsapp.map((whats, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                            src: whatsapp_default.a,
                            alt: "WhatsApp",
                            width: "23",
                            height: "23"
                          }), whats.text]
                        }, index))), i.phone.map(ph => ph.text !== '' && i.phone.map((ph, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                            src: phone_default.a,
                            alt: "WhatsApp",
                            width: "23",
                            height: "23"
                          }), ph.text]
                        }, index))), i.email.map(em => em.text !== '' && i.email.map((em, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                            src: email_default.a,
                            alt: "WhatsApp",
                            width: "23",
                            height: "23"
                          }), em.text]
                        }, index))), i.site.map(st => st.text !== '' && i.site.map((st, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                            src: web_default.a,
                            alt: "WhatsApp",
                            width: "23",
                            height: "23"
                          }), st.text]
                        }, index))), i.facebook.map(fb => fb.text !== '' && i.facebook.map((fb, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                            src: facebook_default.a,
                            alt: "WhatsApp",
                            width: "23",
                            height: "23"
                          }), fb.text]
                        }, index))), i.instagram.map(insta => insta.text !== '' && i.instagram.map((insta, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                            src: instagram_default.a,
                            alt: "WhatsApp",
                            width: "23",
                            height: "23"
                          }), insta.text]
                        }, index)))]
                      })]
                    })]
                  }, index))
                })
              })
            }, index)))
          })
        })]
      })
    })]
  });
};

/* harmony default export */ var rede_do_bem = __webpack_exports__["default"] = (Network);
const getServerSideProps = async context => {
  const {
    q
  } = context.query;

  if (!q) {
    const services = await Object(prismic["a" /* client */])().query(external_prismic_javascript_default.a.Predicates.at('document.type', 'services'), {
      orderings: '[my.services.title]'
    });
    return {
      props: {
        services: services.results
      }
    };
  }

  const services = await Object(prismic["a" /* client */])().query(external_prismic_javascript_default.a.Predicates.fulltext('document', String(q)), {
    orderings: '[my.services.title]'
  });
  return {
    props: {
      services: services.results
    }
  };
};

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "oU7r":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKaSURBVEiJtZbPb4xBGMc/z+y7dlvdCs36kTbSpkgTHBy5kyDRalWaIA7uSCRdLqROXQcSzhJJHRx06Q8X/wQXcRBNE9VEy2JL1+6+M4+Dt7U/+ra1+N7mOzOf55mZZzIjrKLscP9O39huVI4D7UBb0DUDTAOTEc8fa7ky9i6MISuZH2/3t9qSuy5wAYislgTggFHr7OCOa0+n1wzwId3XIzACNK0BrtaCoGeTqcx4uWnKG3O3+i4JjNYBB0go8mQu3Xex3FxeQZD5aN4Zky1tqIMPW6JFGoxzgp5cWokAfEr3tlnkNdD06EMrL781rwoqxaNECz5NMctiwRCzjpIY9iVyDGx7D7AglLqSqfFZA2DhJsG2FHXFc6/Q20Md5Jtj9B/8Sue2IkfyOfYX8+VzE4o3BCDZ4f6dvrgpgmoZye7m1Wfvj7cHYO9mn3Nb3iw1bQRt93xxPZSV4vmBw5j2A3UFcNMvcM+XA0SsSrcHchS0YuDCl+9Y3y63Yw0bQKCwWAyFR7wIG6tN4ZgHuqsmE+ew9ncAdYqKVng1LLPi2XUaYHvorL9X67pPs6ExTkM8Hj5AgFyVpzgPmAX2rBUgv/iDH98Lof1e1CNRbRpmDcjUWvC6pUwZ0Gf/ja9MmojnjwHh5VG/fE90wgSPxYN/TVfR+y2pzIwHYKLmhiu500BCbImmTY0Vd0+MQYB4PBZOFJBscBGVnPEZCuxfmhs+dRTRCWKNEWlO1pd1bh4Ki06UnuTV0YmKAADBY3GHqofoD+QQvbx1MHNvyai53/Pp3hOKPITasl5VSk6MnEkOPp4st2syTaYy49aaTuAu4K8na4ERsdpVDYeQX8WSPqV726xKN8JxhA40+LYIMyhTij7zYLwllZkJY/wEYdPuBDdS8J4AAAAASUVORK5CYII="

/***/ }),

/***/ "s1O2":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOGSURBVEiJrZZBTFxFGMd/M+/N7kN20UolRoyaWLyYCGbBpCREOWhsim311NYo3cTSBqP1ZLBNRBOrpnowmijQQ9HEFGqaxjaa6MXWmKJ0t9lysB7aWoqg1EAFWfbtvt0ZD8+FXZdlxfi/vfnm/f7zfW++mSeMMZTTs31jdVLqFoNsFoYIiGY/YmJGEBfomNby3Cd7H7hejiFWMtgzEFcZrQ4YwX5AlV2BL88IDjp4b/Z3RbyKBtHDiSatxaBANFYAF8lgLkhpdh3Z3ZQoHJeFD539Y91Gy9G1wgEEotFoOdrZP9ZdNJ7PIHo40WS0HKVySSrJE1I/lM9Egl9zrcXg/wAHUFqLwT0DcQVgA2S0OiAEjQDKgqD138huFrLaL5eL2g+8Lp756EKdFPySX33DbRbRh+/mjtrQmuDj03O8//l5plLVBB0HwNOGO6WUuoWC0nS23cXxkQmmbyz+a/jUzJ8MfjXGvm0RJscvkXZdACWlbpEG2Vw4WdmSvY/fx2dnrzEzn6oIv34jycAXCXp2tBKwLXLZ7JKJQTZLv0OLpWyLrscaGPpunLlkuix8Zj7Fhyfj9GzfSFAtf7i8iZtMtsvl9i9WQFk892gDn357hYVUpiQ+l0zzwYkYL2/fiBOwS+K5bJapa1faZEmkcJLWzM7O8vE3l1lML58CC6kMfafOU/4U8yWEwAYTA574Z9DNZHn32A+8+GQzyrY4MTJOAA9tDAuux76nWki6HoeGRujZ0bpiFioQ+N02grgwxQZpL8c7w9/z/NYIt4QcAJ5+ZANJ18+i2vE3nROw6d4S4e2jI7yys7XEwLLVRSnQsWK45tDQCF0dD1JbU1X0QrWjluB51a2rpqujibeOniWTzRVnoKwzJY12u5rnhS2N1K8Pr1TWshqfnuO94+cY/WkK8Otfc+v6+4Uxhmjf2GtG0AtALs0fv02gdW413opKuh5uJutnW3Pz6a/f2NpuAwSkd9A19jaBaMQKUlVbz+TVS+RyazcBCASdlKOszfD3adrfFfGkNLsADyDoVFF/zwYsq3RnVJIQglA4HD3Z27G4ZABwZHdTwsBLxSb3rslECEGoZt3wqVc3DS+NVboy026KyauXyeWyq8IDQScVCoejhfAVDaD00l/NRAjBTeGa046yNufLUtEgr8LfFjeZbP914uc28DvUstVFpawzBuvYl72bfizH+AsauH9WJt4LsgAAAABJRU5ErkJggg=="

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

/***/ }),

/***/ "xwVD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/typography/Paragraph/styles.ts

const ParagraphContainer = external_styled_components_default.a.p.withConfig({
  displayName: "styles__ParagraphContainer",
  componentId: "sc-1dwkzd8-0"
})(["color:", ";font-size:", ";font-weight:500;line-height:", ";a{color:", ";text-decoration:none;font-weight:500;transition:color 0.3s;&:hover{color:", ";}}"], props => props.paragraphColor, props => props.size, props => props.lineHeight ? props => props.lineHeight : 'normal', props => props.paragraphColor, props => props.theme.colors.green);
// CONCATENATED MODULE: ./src/typography/Paragraph/index.tsx




const Paragraph = ({
  paragraphColor,
  lineHeight,
  size,
  children,
  className
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ParagraphContainer, {
  paragraphColor: paragraphColor,
  lineHeight: lineHeight,
  size: size,
  className: className,
  children: children
});

/* harmony default export */ var typography_Paragraph = __webpack_exports__["a"] = (Paragraph);

/***/ }),

/***/ "ymum":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaSSURBVHgBhVbrj1VXFf+tffZ53cfM7dBBOhWYSRHTaCyUWNHQlCY+mlTiaKtiYpPBP0CmiX6oX4bGDzb1QyF8MMEPEButmipomig+wtSmtoqFUisFpMLwCMyTO/d1Xnvv5TqXhPQB7T1Z5+Sefc76rbV+v7X2IXzI7+D4/oah+IEu+1tzeI200OgZoMiKmbzLR3549GsvfpgPutXCK+PPjNpgYGfiBRO5CgczpSk1mhOrqJsrpKlFUVh0cnNt2bnfLVn75C9f/db5m/nybnbz319/eqfW4R91JfiMX48jvxaQjgP2Y4+UV0ZG7EByInFAsQI2WMLE2JpH0rcuPP+PD8zk+PhkQ8cr9kNH435cZ1Rr5Go1mDBCoTTSDOgmjE7Lcatl0eoyJYlFlln0nMO8NVjUvPvQ37Y/fstMdt7z+edUEIx79Qh6sIJwqEbhijrC4TqCwQhepKEkAThHbBysdWQkBVcwKwtolqAZm9eOPdo4NfP84fdlcvob35tiHU6peo2oVod3WwOV9atRuWs1/JWDYFKwhYNJDTLhI08dus0Mixd7ePPFK5if6XJeWErgcM3j0h7/7Uvbd98AeWv75KhidY7CiKlWI29gEEMPb8Hglk/BZQXALE8pmFaCvJMh7xYCIqF7HuqrB1EdruCFHx3jowf/JxCgVDGaHjdN0Bs7ML2jqfs1s/kU+VFZPFLCYjgy1AfoHP8viuUeojUfAYnD5MISOueX0Lrc4ebVLi0vFiU39PFHPoEvP3EvnfzLBXTbBpEIogE00rwyKe53qXMT20d1aCaUFFWRROcK1DasR3ZpDu3XTsK22kgvziGZmQUL81EjQhgR+UWGsftX07Z92/DGgWPI2jnufXiNxOn6REdOcWRpZ5mEDqp8j81TtrksO03kDII7VsAuLcN1OrBCtBSbGls3wb99oM/fsNjCy2/jwsETOPuzlL1OD0tnFmhk/QAiGKSshX9VZjT4xKd//YDmKHlQ1ElQHlPhsbOaSg7YGLjlNorc0PBDm0G+wtVn/8ztk5coGB7CyGMPYuRLd+PYD35PsQs5udISt544FqlJI+XkkynFptxG5VfMWh0lrOKEKEpIcVJKVEAKuHYLfqOK8M6VuLLvIDpvnCHXbqN97Ayfe+o3WPWFu1GrKMTIoWHFHGJxX5H/AedQLDBGjWqKi4Y0MHkiPiplivIiZ2ks1+0IuN9XYD5zGaaTo1jqIW/lxFlRSo5uX7+C7WuXSGrQ5+N6JuUh9LL4kQ7TJuamJ3UUsiQDWRTnKKHKTJablJ48fb1r6zGSsxfBToriKdQ3jfbBzdwcxVTI+2UmJFllJAt9FCOmwE1VxG7GVCWo2Mg0KdiLUomvzCeXSwfpqbPovXkad05+W1T3MYR33Ib6xrswMvEQFv7wT2RL8wKaI6wH/UzK0kWcke9SEUEuAZjzuqi41/uaY0W+YPfnTNEWHVh41ayfxdzeAxj65jaMPjV5YwQtHJzGlQOH4SkpSmhJD8goEg4ryPod3nOpTM4qZ8qd0OLrkInd/lJSJMx4QpZrXYU3vA66mpWlhVmepVkBWnzuBfaGhyk5e5mLdiqllXJoJXUBByMNak6fRIVzztgI+Vpu5zPf+df3p9XYjummRDJtKg5FbGFrjrNzLyNc90kMbHuUvGpeGrzAwM7PI/nPKXDSlXAcK+UQDET80e9+hcJVQ1h65QTYE05cFzXhqcr5dL8Zy5M13g6r7bmgUupFum/2OPy/P4v6Fx9D7f5tyC/OgK1Q6IRTLgdtWV4RYSWGv2qIyhF44emfI52d5WVVIJQRpayZMcS73jWFj//qc1OeVbuqTsNPFHRPIfBXIRzbAm/lOqmZghNjI/QKYB9M0JK3L+Han45icbGJdm4QyuFzgMCEk5uP/ngP3rtpvfqLzx7hBFtLoIbsDl7PI92VRxJxnAcw3QC2tF4Im8nosMRtGe9LMtOcSDuiQN7yxfTuzS/tvbFx6XeCJFny1cAP9893svG5nsivUDwIX1Qn40Ia1IUWaV6gjQTdwkOz566veYGYZC7NrJj23PfXve/aGW/6IXHkp/ftcjmmig6zaXHJIyiRQZmJkuRrRRUhdB6xzmLpBymNxOrDbxL0k5sO79v9Xn+3/Fo58pPNo87xFFJMUE8Y6Mp4l91I5TJAjYaXCbmlpXETxt+jOti9cfpA82a+bglyA+yZrQ3PZltFmRui3FvrpSIKKRXnwQzSaNos4PWNhw41P8jH/wE6bE38n/6B9AAAAABJRU5ErkJggg=="

/***/ })

/******/ });