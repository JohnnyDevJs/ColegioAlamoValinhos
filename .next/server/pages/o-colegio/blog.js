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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zgoI");


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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KzqM":
/***/ (function(module, exports) {

module.exports = require("react-awesome-reveal");

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

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

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

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

/***/ "zgoI":
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

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/lib/prismic.ts
var prismic = __webpack_require__("ZHf5");

// EXTERNAL MODULE: external "prismic-javascript"
var external_prismic_javascript_ = __webpack_require__("vNl1");
var external_prismic_javascript_default = /*#__PURE__*/__webpack_require__.n(external_prismic_javascript_);

// EXTERNAL MODULE: ./src/layout/Container/index.tsx + 1 modules
var Container = __webpack_require__("dEEQ");

// EXTERNAL MODULE: ./src/typography/Heading/index.tsx + 1 modules
var Heading = __webpack_require__("9nMZ");

// EXTERNAL MODULE: ./src/components/SearchForm/index.tsx + 1 modules
var SearchForm = __webpack_require__("BNhF");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__("5xq/");

// CONCATENATED MODULE: ./src/styles/pages/college/blog/styles.ts


const BlogContainer = external_styled_components_default.a.section.withConfig({
  displayName: "styles__BlogContainer",
  componentId: "sc-1me8nbd-0"
})(["padding-top:7rem;padding-bottom:4rem;background:linear-gradient(180deg,#f0f0f0 0%,rgba(238,238,238,0) 50%);"]);
const Tabs = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Tabs",
  componentId: "sc-1me8nbd-1"
})(["width:100%;padding-top:4rem;.search-blog{margin:auto;}", "{padding-top:2rem;}"], Object(external_styled_breakpoints_["down"])('sm'));
const TabMenu = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__TabMenu",
  componentId: "sc-1me8nbd-2"
})(["display:flex;align-items:center;justify-content:center;list-style:none;border-bottom:1px solid ", ";width:100%;margin-bottom:4rem;li{font-size:calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)));color:", ";font-weight:bold;cursor:pointer;position:relative;width:20%;padding:10px;text-align:center;display:flex;justify-content:center;position:relative;&.active{&:after{background-color:", ";}}&:after{content:'';width:50%;height:calc(5px + (7 - 5) * ((100vw - 320px) / (1920 - 320)));background-color:transparent;position:absolute;bottom:0;margin:auto;display:flex;align-items:center;justify-content:center;transition:all 0.3s;}}", "{margin-bottom:2.5rem;}", "{li{width:100%;}}"], props => props.theme.colors.grayEleven, props => props.theme.colors.grayThree, props => props.theme.colors.lightGreen, Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["down"])('xs'));
const TabContent = external_styled_components_default.a.div.withConfig({
  displayName: "styles__TabContent",
  componentId: "sc-1me8nbd-3"
})(["width:100%;margin:auto;display:none;&.show{display:block;}"]);
const TabCards = external_styled_components_default.a.div.withConfig({
  displayName: "styles__TabCards",
  componentId: "sc-1me8nbd-4"
})(["background:", ";box-shadow:0px 1px 5px rgba(0,0,0,0.15);border-radius:20px;border:3px solid transparent;cursor:pointer;margin-bottom:4rem;padding:20px 35px;transition:all 0.3s;p{text-align:center;line-height:29px;font-size:calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));font-weight:500;color:", ";}&.active,&:hover{background:", ";border:3px solid ", ";}"], props => props.theme.colors.grayFour, props => props.theme.colors.blue, props => props.theme.colors.grayTwelve, props => props.theme.colors.blue);
const TabsCardsContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__TabsCardsContainer",
  componentId: "sc-1me8nbd-5"
})(["display:flex;grid-gap:30px;justify-content:center;"]);
const Cards = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Cards",
  componentId: "sc-1me8nbd-6"
})(["grid-gap:80px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;margin-top:4rem;"]);
const Card = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Card",
  componentId: "sc-1me8nbd-7"
})(["background:", ";box-shadow:0px 1px 20px rgba(0,0,0,0.1);border-radius:40px;padding:35px;text-align:center;height:100%;max-width:370px;width:100%;display:flex;flex-direction:column;align-items:center;"], props => props.theme.colors.grayOne);
const CardHeader = external_styled_components_default.a.header.withConfig({
  displayName: "styles__CardHeader",
  componentId: "sc-1me8nbd-8"
})(["img{width:100%;height:auto;border-radius:calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)));}"]);
const CardBody = external_styled_components_default.a.main.withConfig({
  displayName: "styles__CardBody",
  componentId: "sc-1me8nbd-9"
})(["p{margin:1.5rem auto;}"]);
const CardFooter = external_styled_components_default.a.footer.withConfig({
  displayName: "styles__CardFooter",
  componentId: "sc-1me8nbd-10"
})(["a{background-color:", ";border:0;color:", ";font-size:calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));padding:9px calc(30px + (45 - 30) * ((100vw - 320px) / (1920 - 320)));border-radius:61px;font-weight:500;cursor:pointer;display:block;text-decoration:none;transition:background-color 0.3s;&:hover{background-color:", ";}&:focus,&:active{outline:none;}}"], props => props.theme.colors.lightGreen, props => props.theme.colors.white, props => props.theme.colors.green);
const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-1me8nbd-11"
})(["width:100%;margin:5rem auto 0;display:flex;align-items:center;justify-content:center;.load-more{background-color:", ";border:0;color:", ";font-size:calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));padding:calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320))) calc(30px + (45 - 30) * ((100vw - 320px) / (1920 - 320)));border-radius:61px;font-weight:500;cursor:pointer;display:block;text-decoration:none;transition:background-color 0.3s;&:hover{background-color:", ";}&:focus,&:active{outline:none;}}"], props => props.theme.colors.lightBlue2, props => props.theme.colors.white, props => props.theme.colors.green);
// EXTERNAL MODULE: ./src/components/SEO/index.tsx
var SEO = __webpack_require__("6o60");

// EXTERNAL MODULE: ./src/typography/Paragraph/index.tsx + 1 modules
var Paragraph = __webpack_require__("xwVD");

// CONCATENATED MODULE: ./src/pages/o-colegio/blog.tsx















const Blog = ({
  categories,
  blogByTagKnow,
  blogByTagEvents,
  blogByTagChildEducation,
  blogByTagFundamentalOneEducation,
  blogByTagFundamentalTwoEducation,
  blogByTagCourses
}) => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(0);
  const {
    0: active2,
    1: setActive2
  } = Object(external_react_["useState"])(0);
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(6);
  const handleMoreItems = Object(external_react_["useCallback"])(() => {
    setVisible(prevValue => prevValue + 6);
  }, []);
  const tabs = [{
    id: 0,
    title: 'Educação <br/>Infantil'
  }, {
    id: 1,
    title: 'Educação <br/>Fundamental 1'
  }, {
    id: 2,
    title: 'Educação <br/>Fundamental 2'
  }, {
    id: 3,
    title: 'Cursos <br/>Extracurriculares'
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SEO["a" /* default */], {
      color: "#305FA4",
      title: "Galeria"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
        column: true,
        alignIntems: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
          titleSize: "medium",
          titleColor: "#001D7E",
          titleBorder: true,
          titleBorderColor: "blue",
          children: "Blog"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Tabs, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TabMenu, {
            children: categories.map((category, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: () => setActive(index),
              className: active === index ? 'active' : '',
              children: category.data.title.map(item => item.text)
            }, index))
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TabContent, {
            className: active === 0 ? 'show' : '',
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchForm["a" /* default */], {
              className: "search-blog"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
                duration: 500,
                direction: "up",
                cascade: true,
                triggerOnce: true,
                children: blogByTagKnow.slice(0, visible).map((know, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card, {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardHeader, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: know.data.cover_image.url,
                      alt: "teste",
                      width: "600",
                      height: "400"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph["a" /* default */], {
                      lineHeight: "29px",
                      size: "calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))",
                      paragraphColor: "#555555",
                      children: know.data.title.map(item => item.text)
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardFooter, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      href: "/",
                      passHref: true,
                      replace: true,
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        children: "Veja mais"
                      })
                    })
                  })]
                }, index))
              })
            }), visible < blogByTagKnow.length && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonWrapper, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                onClick: handleMoreItems,
                className: "load-more",
                children: "Carregar mais"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TabContent, {
            className: active === 1 ? 'show' : '',
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TabsCardsContainer, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
                duration: 500,
                direction: "up",
                cascade: true,
                triggerOnce: true,
                children: tabs.map((tab, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabCards, {
                  onClick: () => setActive2(index),
                  className: active2 === index ? 'active' : '',
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    dangerouslySetInnerHTML: {
                      __html: tab.title
                    }
                  })
                }, tab.id))
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchForm["a" /* default */], {
              className: "search-blog"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabContent, {
              className: active2 === 0 ? 'show' : '',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
                  duration: 500,
                  direction: "up",
                  cascade: true,
                  triggerOnce: true,
                  children: blogByTagChildEducation.slice(0, visible).map((know, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card, {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardHeader, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        src: know.data.cover_image.url,
                        alt: "teste",
                        width: "600",
                        height: "400"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph["a" /* default */], {
                        lineHeight: "29px",
                        size: "calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))",
                        paragraphColor: "#555555",
                        children: know.data.title.map(item => item.text)
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardFooter, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                        href: "/",
                        passHref: true,
                        replace: true,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          children: "Veja mais"
                        })
                      })
                    })]
                  }, index))
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabContent, {
              className: active2 === 1 ? 'show' : '',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
                  duration: 500,
                  direction: "up",
                  cascade: true,
                  triggerOnce: true,
                  children: blogByTagFundamentalOneEducation.slice(0, visible).map((know, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card, {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardHeader, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        src: know.data.cover_image.url,
                        alt: "teste",
                        width: "600",
                        height: "400"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph["a" /* default */], {
                        lineHeight: "29px",
                        size: "calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))",
                        paragraphColor: "#555555",
                        children: know.data.title.map(item => item.text)
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardFooter, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                        href: "/",
                        passHref: true,
                        replace: true,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          children: "Veja mais"
                        })
                      })
                    })]
                  }, index))
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabContent, {
              className: active2 === 2 ? 'show' : '',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
                  duration: 500,
                  direction: "up",
                  cascade: true,
                  triggerOnce: true,
                  children: blogByTagFundamentalTwoEducation.slice(0, visible).map((know, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card, {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardHeader, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        src: know.data.cover_image.url,
                        alt: "teste",
                        width: "600",
                        height: "400"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph["a" /* default */], {
                        lineHeight: "29px",
                        size: "calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))",
                        paragraphColor: "#555555",
                        children: know.data.title.map(item => item.text)
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardFooter, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                        href: "/",
                        passHref: true,
                        replace: true,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          children: "Veja mais"
                        })
                      })
                    })]
                  }, index))
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabContent, {
              className: active2 === 3 ? 'show' : '',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
                  duration: 500,
                  direction: "up",
                  cascade: true,
                  triggerOnce: true,
                  children: blogByTagCourses.slice(0, visible).map((know, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card, {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardHeader, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        src: know.data.cover_image.url,
                        alt: "teste",
                        width: "600",
                        height: "400"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph["a" /* default */], {
                        lineHeight: "29px",
                        size: "calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))",
                        paragraphColor: "#555555",
                        children: know.data.title.map(item => item.text)
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardFooter, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                        href: "/",
                        passHref: true,
                        replace: true,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          children: "Veja mais"
                        })
                      })
                    })]
                  }, index))
                })
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TabContent, {
            className: active === 2 ? 'show' : '',
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchForm["a" /* default */], {
              className: "search-blog"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Fade"], {
                duration: 500,
                direction: "up",
                cascade: true,
                triggerOnce: true,
                children: blogByTagEvents.slice(0, visible).map((know, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card, {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardHeader, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: know.data.cover_image.url,
                      alt: "teste",
                      width: "600",
                      height: "400"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph["a" /* default */], {
                      lineHeight: "29px",
                      size: "calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))",
                      paragraphColor: "#555555",
                      children: know.data.title.map(item => item.text)
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardFooter, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      href: "/",
                      passHref: true,
                      replace: true,
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        children: "Veja mais"
                      })
                    })
                  })]
                }, index))
              })
            }), visible < blogByTagKnow.length && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonWrapper, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                onClick: handleMoreItems,
                className: "load-more",
                children: "Carregar mais"
              })
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var blog = __webpack_exports__["default"] = (Blog);
const getServerSideProps = async context => {
  const {
    q
  } = context.query;

  if (!q) {
    const categories = await Object(prismic["a" /* client */])().query(external_prismic_javascript_default.a.Predicates.at('document.type', 'blog_category'), {
      orderings: '[my.blog.title]'
    });
    const blogByTagKnow = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Você Sabia'])]);
    const blogByTagEvents = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Eventos'])]);
    const blogByTagChildEducation = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Educação Infantil'])]);
    const blogByTagFundamentalOneEducation = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Ensino Fundamental I'])]);
    const blogByTagFundamentalTwoEducation = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Ensino Fundamental II'])]);
    const blogByTagCourses = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Cursos Extracurriculares'])]);
    return {
      props: {
        categories: categories.results,
        blogByTagKnow: blogByTagKnow.results,
        blogByTagEvents: blogByTagEvents.results,
        blogByTagChildEducation: blogByTagChildEducation.results,
        blogByTagFundamentalOneEducation: blogByTagFundamentalOneEducation.results,
        blogByTagFundamentalTwoEducation: blogByTagFundamentalTwoEducation.results,
        blogByTagCourses: blogByTagCourses.results
      }
    };
  }

  const categories = await Object(prismic["a" /* client */])().query(external_prismic_javascript_default.a.Predicates.at('document.type', 'blog_category'), {
    orderings: '[my.blog.title]'
  });
  const blogByTagKnow = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Você Sabia']), external_prismic_javascript_default.a.Predicates.fulltext('document', String(q))]);
  const blogByTagEvents = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Eventos']), external_prismic_javascript_default.a.Predicates.fulltext('document', String(q))]);
  const blogByTagChildEducation = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Educação Infantil']), external_prismic_javascript_default.a.Predicates.fulltext('document', String(q))]);
  const blogByTagFundamentalOneEducation = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Ensino Fundamental I']), external_prismic_javascript_default.a.Predicates.fulltext('document', String(q))]);
  const blogByTagFundamentalTwoEducation = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Ensino Fundamental II']), external_prismic_javascript_default.a.Predicates.fulltext('document', String(q))]);
  const blogByTagCourses = await Object(prismic["a" /* client */])().query([external_prismic_javascript_default.a.Predicates.at('document.tags', ['Cursos Extracurriculares']), external_prismic_javascript_default.a.Predicates.fulltext('document', String(q))]);
  return {
    props: {
      categories: categories.results,
      blogByTagKnow: blogByTagKnow.results,
      blogByTagEvents: blogByTagEvents.results,
      blogByTagChildEducation: blogByTagChildEducation.results,
      blogByTagFundamentalOneEducation: blogByTagFundamentalOneEducation.results,
      blogByTagFundamentalTwoEducation: blogByTagFundamentalTwoEducation.results,
      blogByTagCourses: blogByTagCourses.results
    }
  };
};

/***/ })

/******/ });