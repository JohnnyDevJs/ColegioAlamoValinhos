module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wZM":
/***/ (function(module, exports) {

module.exports = require("react-icons/si");

/***/ }),

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


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

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

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

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

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

/***/ "NRvx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/background-footer-9b971d7f82be12b80f4ecbddfaabb721.png";

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

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/styles/global.ts

/* harmony default export */ var global = (external_styled_components_["createGlobalStyle"]`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-smooth: antialiased;
  scroll-behavior: smooth;
}

*, ::after, ::before {
    box-sizing: border-box;
}

body {
  background: ${props => props.theme.colors.white};
  font-family: 'Gotham Rounded';
  position: relative;
}

input, textarea {
  font-family: 'Gotham Rounded';
}

@font-face {
  font-family: 'Gotham Rounded';
  src: url('../../GothamRounded-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
    font-family: 'Gotham Rounded';
    src: url('../../GothamRounded-Book.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Gotham Rounded';
    src: url('../../GothamRounded-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Gotham Rounded';
    src: url('../../GothamRounded-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}`);
// CONCATENATED MODULE: ./src/styles/theme.ts
const theme = {
  colors: {
    white: '#FFFFFF',
    gray: '#777777',
    grayOne: '#FAFAFA',
    grayTwo: '#C0C0C0',
    grayThree: '#696969',
    grayFour: '#F9F9F9',
    grayFive: '#CCCCCC',
    graySix: '#F4F4F4',
    graySeven: '#F9FAFD',
    grayEight: '#e4e4e5',
    grayNine: '#868686',
    grayTen: '#B9B9B9',
    grayEleven: '#999999',
    grayTwelve: '#E0E0E0',
    lightGreen: '#BAC529',
    green: '#3D843C',
    lightBlue: '#EAF1FF',
    lightBlue2: '#73ABC9',
    lightBlue3: '#5DB7E3',
    darkBlue: '#001D7E',
    darkBlueTwo: '#13192F',
    darkBlueThree: '#162659',
    darkBlueFour: '#2145bd',
    blue: '#305FA4',
    red: '#d84a4a'
  }
};
/* harmony default export */ var styles_theme = (theme);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__("KzqM");

// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__("5xq/");

// CONCATENATED MODULE: ./src/components/Header/styles.ts


const HeaderContainer = external_styled_components_default.a.header.withConfig({
  displayName: "styles__HeaderContainer",
  componentId: "sc-1m2khfk-0"
})(["z-index:12;position:relative;"]);
const Logo = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-1m2khfk-1"
})(["position:absolute;padding-top:60px;padding-bottom:60px;padding-left:70px;padding-right:70px;background:", ";border-radius:0 40% 50% 50%;top:-25px;left:-30px;z-index:1;svg{width:185px !important;}", "{padding-top:38px;padding-bottom:38px;padding-left:50px;padding-right:50px;}", "{top:calc(-60px + (-25 - (-73)) * ((100vw - 320px) / (768 - 320)));left:calc(-30px + (-30 - (-50)) * ((100vw - 320px) / (768 - 320)));padding-top:calc(45px + (20 - 45) * ((100vw - 320px) / (768 - 320)));padding-bottom:calc(0px + (10 - 0) * ((100vw - 320px) / (768 - 320)));padding-left:calc(45px + (50 - 55) * ((100vw - 320px) / (768 - 320)));padding-right:calc(48px + (55 - 55) * ((100vw - 320px) / (768 - 320)));svg{width:calc( 127px + (130 - 127) * ((100vw - 320px) / (768 - 320)) ) !important;}}"], props => props.theme.colors.white, Object(external_styled_breakpoints_["between"])('sm', 'md'), Object(external_styled_breakpoints_["down"])('sm'));
// CONCATENATED MODULE: ./src/components/Header/TopBar/styles.ts


const TopBar = external_styled_components_default.a.div.withConfig({
  displayName: "styles__TopBar",
  componentId: "sc-15668f1-0"
})(["width:100%;height:42px;background-color:", ";border-bottom:7px solid ", ";display:flex;align-items:center;", "{display:none;}"], props => props.theme.colors.darkBlue, props => props.theme.colors.blue, Object(external_styled_breakpoints_["down"])('md'));
const Items = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__Items",
  componentId: "sc-15668f1-1"
})(["width:100%;list-style:none;display:flex;justify-content:flex-end;align-items:center;li + li{a{margin-left:calc(30px + (66 - 30) * ((100vw - 992px) / (1920 - 992)));}}a{color:", ";font-size:18px;text-decoration:none;font-weight:300;transition:color 0.3s;&:hover{color:", ";}}"], props => props.theme.colors.white, props => props.theme.colors.lightGreen);
const Item = external_styled_components_default.a.li.withConfig({
  displayName: "styles__Item",
  componentId: "sc-15668f1-2"
})(["a{color:", ";font-size:18px;text-decoration:none;font-weight:300;transition:color 0.3s;&:hover{color:", ";}}", "{+ li{margin-left:calc(30px + (66 - 30) * ((100vw - 992px) / (1920 - 992)));}}"], props => props.theme.colors.white, props => props.theme.colors.lightGreen, Object(external_styled_breakpoints_["up"])('lg'));
// EXTERNAL MODULE: ./src/layout/Container/index.tsx + 1 modules
var Container = __webpack_require__("dEEQ");

// CONCATENATED MODULE: ./src/components/Header/TopBar/index.tsx





const Topbar = () => {
  const informations = [{
    id: 1,
    title: 'Telefone: (19) 3514-7373',
    url: 'tel:19351487373'
  }, {
    id: 2,
    title: 'WhatsApp: (19) 9 8902-8282',
    url: 'https://api.whatsapp.com/send?phone=5519989028282'
  }, {
    id: 3,
    title: 'Indicar Amigo',
    url: 'https://api.whatsapp.com/send?phone=5519989028282&text=Quero%20Indicar%20um%20Novo%20Aluno%20'
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(TopBar, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Items, {
        children: informations.map(information => information.id !== 3 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: information.url,
            children: information.title
          })
        }, information.id) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Item, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: information.url,
            children: information.title
          })
        }, information.url))
      })
    })
  });
};

/* harmony default export */ var Header_TopBar = (Topbar);
// CONCATENATED MODULE: ./src/components/Header/NavBar/styles.ts


const NavBar = external_styled_components_default.a.div.withConfig({
  displayName: "styles__NavBar",
  componentId: "uu5kee-0"
})(["background:", ";box-shadow:0px 4px 20px rgba(0,0,0,0.15);position:relative;"], props => props.theme.colors.white);
const Nav = external_styled_components_default.a.nav.withConfig({
  displayName: "styles__Nav",
  componentId: "uu5kee-1"
})(["width:auto;height:106px;display:flex;justify-content:flex-end;align-items:center;z-index:12;a{color:", ";font-weight:500;text-decoration:none;font-size:20px;transition:color 0.3s;&.active{color:", ";}&:hover{color:", ";}}", "{a + a{margin-left:calc(16px + (48 - 16) * ((100vw - 768px) / (1920 - 768)));}}", "{height:calc(80px + (106 - 80) * ((100vw - 320px) / (768 - 320)));a{display:none;}}"], props => props.theme.colors.blue, props => props.theme.colors.lightGreen, props => props.theme.colors.darkBlue, Object(external_styled_breakpoints_["up"])('lg'), Object(external_styled_breakpoints_["down"])('md'));
// CONCATENATED MODULE: ./src/components/Dropdown/styles.ts


const DropdownContainer = external_styled_components_default.a.li.withConfig({
  displayName: "styles__DropdownContainer",
  componentId: "sc-11sepnc-0"
})(["position:relative;list-style:none;color:", ";font-weight:500;font-size:20px;&:hover{ul{transform:translateY(-40px);opacity:1;visibility:visible;}}", "{margin-right:calc(16px + (48 - 16) * ((100vw - 768px) / (1920 - 768)));}", "{display:none;}"], props => props.theme.colors.blue, Object(external_styled_breakpoints_["up"])('lg'), Object(external_styled_breakpoints_["down"])('md'));
const DropdownItems = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__DropdownItems",
  componentId: "sc-11sepnc-1"
})(["background-color:", ";box-shadow:0px 1px 5px rgba(0,0,0,0.15);position:absolute;opacity:0;visibility:hidden;border-radius:25px;list-style:none;padding:1rem 1.5rem;left:-25px;z-index:2;transition:all 0.4s;transform:translateY(0);li{a{color:", ";margin-top:1rem;display:flex;transition:color 0.3s;&:hover{color:", ";}}}", ""], props => props.theme.colors.white, props => props.theme.colors.grayThree, props => props.theme.colors.lightGreen, props => props.dropdownWidth ? Object(external_styled_components_["css"])(["width:", ";"], props.dropdownWidth) : Object(external_styled_components_["css"])(["width:100%;"]));
const DropdownTitle = external_styled_components_default.a.span.withConfig({
  displayName: "styles__DropdownTitle",
  componentId: "sc-11sepnc-2"
})(["color:", ";border-bottom:1px solid ", ";padding-bottom:12px;font-weight:bold;width:100%;display:flex;"], props => props.theme.colors.darkBlue, props => props.theme.colors.grayTwo);
// CONCATENATED MODULE: ./src/components/Dropdown/index.tsx





const Dropdown = ({
  dropdownWidth,
  title,
  className,
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DropdownContainer, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
    className: className,
    children: title
  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DropdownItems, {
    dropdownWidth: dropdownWidth,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownTitle, {
      children: title
    }), children]
  })]
});

/* harmony default export */ var components_Dropdown = (Dropdown);
// EXTERNAL MODULE: external "react-icons/gi"
var gi_ = __webpack_require__("kS/G");

// CONCATENATED MODULE: ./src/components/Header/Mobile/Hamburger/styles.ts


const MenuHamburger = external_styled_components_default.a.div.withConfig({
  displayName: "styles__MenuHamburger",
  componentId: "sc-1h8xe9c-0"
})(["cursor:pointer;display:flex;justify-content:center;align-items:center;span{color:", ";font-weight:600;text-transform:uppercase;font-size:14px;margin-right:5px;margin-top:4px;transition:color 0.3s;}svg{transition:color 0.3s;}&:hover{span{color:", ";}svg{color:", " !important;}}", "{display:none;}"], props => props.theme.colors.lightGreen, props => props.theme.colors.blue, props => props.theme.colors.lightGreen, Object(external_styled_breakpoints_["up"])('lg'));
// CONCATENATED MODULE: ./src/components/Header/Mobile/Hamburger/index.tsx







const Hamburger = () => {
  const handleOpenToggle = Object(external_react_["useCallback"])(() => {
    document.querySelector('.toggle-menu').classList.add('open');
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuHamburger, {
      onClick: handleOpenToggle,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: "Menu"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(gi_["GiHamburgerMenu"], {
        size: 22,
        color: "#305FA4"
      })]
    })
  });
};

/* harmony default export */ var Mobile_Hamburger = (Hamburger);
// CONCATENATED MODULE: ./src/components/Header/NavBar/index.tsx










const Navbar = () => {
  const router = Object(client_router["useRouter"])();
  const navItems = [{
    id: 1,
    title: 'O Colégio',
    slug: '',
    width: '225px',
    items: [{
      id: 1,
      title: 'Galeria',
      slug: '/o-colegio/galeria'
    }, {
      id: 2,
      title: 'Blog',
      slug: '/o-colegio/blog'
    }, {
      id: 3,
      title: 'Rede do Bem',
      slug: '/o-colegio/rede-do-bem'
    }, {
      id: 4,
      title: 'Cantina',
      slug: '/o-colegio/cantina'
    }]
  }, {
    id: 2,
    title: 'Cursos',
    slug: '',
    width: '297px',
    items: [{
      id: 1,
      title: 'Educação Infantil',
      slug: '/cursos/educacao-infantil',
      enrollment: '/matriculas/educacao-infantil'
    }, {
      id: 2,
      title: 'Ensino Fundamental I',
      slug: '/cursos/ensino-fundamental-1'
    }, {
      id: 3,
      title: 'Ensino Fundamental II',
      slug: '/cursos/ensino-fundamental-2'
    }, {
      id: 4,
      title: 'Cursos Extracurriculares',
      slug: '/cursos/cursos-extracurriculares'
    }]
  }, {
    id: 3,
    title: 'Diferenciais',
    slug: '',
    width: '314px',
    items: [{
      id: 1,
      title: 'Educação Sócioemocional',
      slug: '/diferenciais/educacao-socioemocional'
    }, {
      id: 2,
      title: 'Educação Tecnológica',
      slug: '/diferenciais/educacao-tecnologica'
    }, {
      id: 3,
      title: 'Educação Financeira',
      slug: '/diferenciais/educacao-financeira'
    }, {
      id: 4,
      title: 'Programa Bilíngue',
      slug: '/diferenciais/programa-bilingue'
    }]
  }, {
    id: 4,
    title: 'Matrículas',
    slug: '/matriculas'
  }, {
    id: 5,
    title: 'Contato',
    slug: '/contato',
    width: ''
  }, {
    id: 6,
    title: 'Trabalhe Conosco',
    slug: '/trabalhe-conosco',
    width: ''
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavBar, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
      flexEnd: true,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Nav, {
        children: navItems.map(navItem => navItem.items ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Dropdown, {
          title: navItem.title,
          dropdownWidth: navItem.width,
          children: navItem.items.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: item.slug,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: router.asPath === item.slug ? 'active' : '',
                children: item.title
              })
            })
          }, item.id))
        }, navItem.id) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: navItem.slug,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: router.pathname === navItem.slug ? 'active' : '',
            children: navItem.title
          })
        }, navItem.id))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Mobile_Hamburger, {})]
    })
  });
};

/* harmony default export */ var Header_NavBar = (Navbar);
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// CONCATENATED MODULE: ./src/components/Header/Mobile/Toggle/styles.ts

const MobileContent = external_styled_components_default.a.div.withConfig({
  displayName: "styles__MobileContent",
  componentId: "sc-17q2sth-0"
})(["width:100%;height:100%;background-color:", ";position:absolute;right:0;left:0;top:0;z-index:9999;opacity:0;visibility:hidden;transition:all 0.3s;transform:translateX(-20%);&.open{opacity:1;visibility:visible;transform:translateX(0);}svg.close{cursor:pointer;margin-top:15px;margin-right:15px;right:0;position:absolute;transition:color 0.3s;&:hover{color:", " !important;}}"], props => props.theme.colors.graySeven, props => props.theme.colors.lightGreen);
const styles_Logo = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-17q2sth-1"
})(["width:100%;margin-bottom:1rem;margin-top:1rem;display:flex;align-items:center;justify-content:center;svg{width:127px;height:127px;margin:0;}"]);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// CONCATENATED MODULE: ./src/styles/components/Accordion/styles.ts

const AccordionContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__AccordionContainer",
  componentId: "sc-1fn3sgg-0"
})(["border-bottom:1px solid ", ";padding:10px 15px;&.active{svg{transform:rotate(90deg);}}"], props => props.theme.colors.grayEight);
const AccordionTitle = external_styled_components_default.a.div.withConfig({
  displayName: "styles__AccordionTitle",
  componentId: "sc-1fn3sgg-1"
})(["color:", ";font-weight:500;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:color 0.3s;&:hover{color:", ";}svg{margin-top:0 !important;transition:all 0.3s;transform:rotate(0);}"], props => props.theme.colors.blue, props => props.theme.colors.darkBlue);
const AccordionContainerItems = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__AccordionContainerItems",
  componentId: "sc-1fn3sgg-2"
})(["list-style:none;height:0;display:none;position:relative;margin-top:5px;transition:height 0.3s ease;&.open{height:100%;display:block;transform:translateY(0);}li{a{color:", ";font-weight:500;text-decoration:none;transition:color 0.3s;padding:5px 0;font-size:14px;&:hover{color:", ";}}}"], props => props.theme.colors.grayThree, props => props.theme.colors.lightGreen);
// CONCATENATED MODULE: ./src/components/Accordion/index.tsx






const Accordion = ({
  title,
  children
}) => {
  const {
    0: openAccordion,
    1: setOpenAccordion
  } = Object(external_react_["useState"])(false);
  const handleOpenAccordion = Object(external_react_["useCallback"])(() => {
    setOpenAccordion(!openAccordion);
  }, [openAccordion, setOpenAccordion]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AccordionContainer, {
    onClick: handleOpenAccordion,
    className: openAccordion === true ? 'active' : '',
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(AccordionTitle, {
      children: [title, /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiChevronRight"], {
        size: 18,
        color: "#BAC529"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AccordionContainerItems, {
      className: openAccordion === true ? 'open' : '',
      children: children
    })]
  });
};

/* harmony default export */ var components_Accordion = (Accordion);
// CONCATENATED MODULE: ./src/components/Header/Mobile/Nav/styles.ts

const NavContainer = external_styled_components_default.a.nav.withConfig({
  displayName: "styles__NavContainer",
  componentId: "sc-1961zly-0"
})(["a{color:", ";font-weight:500;text-decoration:none;display:block;padding:10px 15px;font-size:14px;transition:color 0.3s;&.active{color:", ";}+ a{border-top:1px solid ", ";padding:10px 15px;}&:hover{color:", ";}}"], props => props.theme.colors.blue, props => props.theme.colors.lightGreen, props => props.theme.colors.grayEight, props => props.theme.colors.darkBlue);
// CONCATENATED MODULE: ./src/components/Header/Mobile/Nav/index.tsx







const Nav_Nav = () => {
  const router = Object(client_router["useRouter"])();
  const accordions = [{
    id: 1,
    title: 'O Colégio',
    url: '',
    items: [{
      id: 1,
      title: 'Blog',
      url: '/o-colegio/blog'
    }, {
      id: 2,
      title: 'Rede do Bem',
      url: '/o-colegio/rede-do-bem'
    }, {
      id: 3,
      title: 'Cantina',
      url: '/o-colegio/cantina'
    }, {
      id: 4,
      title: 'Galeria',
      url: '/o-colegio/galeria'
    }]
  }, {
    id: 2,
    title: 'Cursos',
    url: '',
    items: [{
      id: 1,
      title: 'Educação Infantil',
      url: '/cursos/educacao-infantil'
    }, {
      id: 2,
      title: 'Ensino Fundamental I',
      url: '/cursos/ensino-fundamental-1'
    }, {
      id: 3,
      title: 'Ensino Fundamental II',
      url: '/cursos/ensino-fundamental-2'
    }, {
      id: 4,
      title: 'Cursos Extracurriculares',
      url: '/cursos/cursos-extracurriculares'
    }]
  }, {
    id: 3,
    title: 'Diferenciais',
    url: '',
    items: [{
      id: 1,
      title: 'Educação Sócioemocional',
      url: '/diferenciais/educacao-socioemocional'
    }, {
      id: 2,
      title: 'Educação Tecnológica',
      url: '/diferenciais/educacao-tecnologica'
    }, {
      id: 3,
      title: 'Educação Financeira',
      url: '/diferenciais/educacao-financeira'
    }, {
      id: 4,
      title: 'Programa Bilíngue',
      url: '/diferenciais/programa-bilingue'
    }]
  }, {
    id: 4,
    title: 'Matrículas',
    url: '/matriculas',
    items: []
  }, {
    id: 5,
    title: 'Contato',
    url: '/contato',
    items: []
  }, {
    id: 6,
    title: 'Trabalhe conosco',
    url: '/trabalhe-conosco',
    items: []
  }];
  const handleCloseToggle = Object(external_react_["useCallback"])(() => {
    document.querySelector('.toggle-menu').classList.remove('open');
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavContainer, {
    children: accordions.map(accordion => accordion.items.length !== 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Accordion, {
      title: accordion.title,
      children: accordion.items.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: item.url,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            onClick: handleCloseToggle,
            className: router.asPath === item.url ? 'active' : '',
            children: item.title
          })
        })
      }, item.id))
    }, accordion.id) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: accordion.url,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: handleCloseToggle,
        className: router.pathname === accordion.url ? 'active' : '',
        children: accordion.title
      })
    }, accordion.id))
  });
};

/* harmony default export */ var Mobile_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./src/components/Header/Mobile/Info/styles.ts

const InfoContainer = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__InfoContainer",
  componentId: "rs6c5s-0"
})(["list-style:none;background-color:", ";"], props => props.theme.colors.darkBlue);
const InfoContainerItem = external_styled_components_default.a.li.withConfig({
  displayName: "styles__InfoContainerItem",
  componentId: "rs6c5s-1"
})(["a{color:", ";border-bottom:1px solid ", ";display:block;padding:0.5rem 15px;text-decoration:none;font-size:14px;transition:color 0.3s;&:hover{color:", ";}}"], props => props.theme.colors.white, props => props.theme.colors.darkBlueFour, props => props.theme.colors.lightGreen);
// CONCATENATED MODULE: ./src/components/Header/Mobile/Info/index.tsx






const Info = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InfoContainer, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(InfoContainerItem, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      rel: "noreferrer",
      target: "_blank",
      href: "tel:1935147373",
      children: "Telefone: (19) 3514-7373"
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(InfoContainerItem, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      rel: "noreferrer",
      target: "_blank",
      href: "https://api.whatsapp.com/send?phone=5519989028282",
      children: "WhatsApp: (19) 9 8902-8282"
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(InfoContainerItem, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/indicar-amigo",
      replace: true,
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        rel: "noreferrer",
        target: "_blank",
        href: "https://api.whatsapp.com/send?phone=5519989028282&text=Quero%20Indicar%20um%20Novo%20Aluno%20",
        children: "Indicar Amigo"
      })
    })
  })]
});

/* harmony default export */ var Mobile_Info = (Info);
// CONCATENATED MODULE: ./src/components/Header/Mobile/Toggle/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Toggle_AlamoValinhosLogo = function AlamoValinhosLogo(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      clipPath: "url(#a)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M134.657 135.835c23.864-23.829 23.864-62.465 0-86.294-23.865-23.83-62.557-23.83-86.422 0-23.865 23.83-23.865 62.465 0 86.294 23.865 23.83 62.557 23.83 86.422 0z",
        fill: "#4A6EAE"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M90.22 156.569c35.894 0 64.949-29.012 64.949-64.811 0-11.888-3.205-23.026-8.799-32.604-22.892 19.011-61.381 46.731-111.168 66.945 11.467 18.301 31.825 30.47 55.017 30.47z",
        fill: "#003D78"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M91.983 33.447c.557.159.914.635 1.312 1.072 1.034 1.232 1.989 2.621 2.704 4.09.676 1.35 1.154 2.82 1.034 4.329-.08 1.747-.715 3.574-2.227 4.566-1.153.794-2.704.875-4.056.596-1.272-.357-2.346-1.191-2.942-2.383-.877-1.787-.915-3.93-.198-5.757.953-2.462 2.623-4.567 4.373-6.513zM111.946 44.09c2.028-1.828 4.533-2.94 7.079-3.853.278.556.477 1.192.596 1.867.398 1.826.597 3.732.398 5.678-.16 2.422-1.551 4.884-3.858 5.916-2.704 1.231-6.243-.874-6.561-3.772-.239-2.184.716-4.407 2.346-5.837zM61.402 42.024c.358 0 .756.04 1.114.08 2.345.675 4.612 1.588 6.561 3.057 1.352 1.032 2.267 2.54 2.665 4.21.278 1.31.079 2.779-.796 3.85-1.034 1.311-2.704 2.105-4.374 1.986-1.034-.079-2.028-.595-2.864-1.27-1.271-1.112-2.187-2.66-2.465-4.368-.438-2.502-.278-5.083.159-7.545zM105.226 57.749c1.392-.715 2.823-1.43 4.334-1.827.836 2.304 1.114 4.765.955 7.227-.08 1.708-.676 3.336-1.79 4.646-.755.834-1.71 1.549-2.823 1.787-.994.278-2.068.12-2.983-.278-1.193-.596-2.227-1.588-2.664-2.859-.517-1.509-.159-3.217.557-4.646.914-1.827 2.743-3.018 4.414-4.05zM71.383 56.835c2.466.318 4.852 1.39 6.96 2.7 2.187 1.43 3.817 4.13 3.34 6.791-.278 1.628-1.63 2.82-3.062 3.494-.874.198-1.75.358-2.624.16-1.551-.279-2.784-1.43-3.659-2.661-.954-1.35-1.233-2.978-1.392-4.567-.08-1.986 0-4.01.438-5.917zM134.535 60.29c1.79-.159 3.579-.119 5.329.16a12.389 12.389 0 0 1-.238 1.746c-.557 2.184-1.353 4.328-2.665 6.155-.954 1.31-2.346 2.263-3.897 2.74-1.153.318-2.426.238-3.499-.278-1.432-.755-2.346-2.224-2.665-3.772-.119-1.192.278-2.343.835-3.376.796-.913 1.631-1.826 2.744-2.342 1.271-.636 2.663-.874 4.056-1.033zM40.721 63.577c1.607-.802 3.481-1.032 5.241-1.222 1.607-.039 3.25-.039 4.744.649 1.454.725 2.831 1.91 3.29 3.476.383 1.185.115 2.483-.459 3.552-.727 1.223-1.99 2.178-3.443 2.33-2.104.192-4.285-.763-5.662-2.368-1.683-1.833-2.908-4.087-3.71-6.417zM69.873 83.56c2.345-.914 4.93-1.152 7.436-1.033 2.306.198 4.613 1.39 5.806 3.415.636 1.032.716 2.303.438 3.494-.517 1.43-1.512 2.74-2.983 3.296-1.79.635-3.738.12-5.29-.794-1.71-1.033-2.743-2.78-3.817-4.448-.596-1.271-1.272-2.541-1.59-3.93zM118.269 84.473c1.909-1.032 4.255-1.032 6.204-.198 2.386.993 4.494 2.582 6.323 4.368-.597.954-1.551 1.589-2.466 2.264-1.67 1.191-3.499 2.224-5.527 2.62-1.87.279-3.937-.158-5.409-1.35-1.233-1.151-1.71-2.938-1.391-4.566.278-1.311 1.073-2.503 2.266-3.138zM39.343 84.243c1.53-.84 3.328-1.413 5.126-1.146 1.416.192 2.87.803 3.711 1.987.957 1.298.995 3.056.498 4.507-.46 1.07-1.3 1.987-2.41 2.445a6.878 6.878 0 0 1-5.012.191c-2.028-.688-3.864-1.947-5.509-3.324-.383-.305-.727-.687-1.11-1.03 1.302-1.529 2.985-2.675 4.706-3.63zM135.567 84.79c1.83-1.111 4.176-1.19 6.165-.436 2.465.993 4.573 2.66 6.521 4.447-.517.953-1.471 1.549-2.306 2.184-1.75 1.27-3.699 2.422-5.886 2.78-1.869.159-3.937-.198-5.328-1.51-.955-.912-1.392-2.263-1.353-3.533.04-1.549.836-3.137 2.187-3.931zM55.238 86.021c1.551-.875 3.26-1.588 5.05-1.548 1.591 0 3.261.476 4.375 1.667.875.914 1.233 2.224 1.193 3.495-.08 1.23-.557 2.462-1.511 3.335-.756.715-1.75 1.033-2.744 1.39-1.034 0-2.148.12-3.181-.159-2.506-.714-4.653-2.263-6.642-3.851-.279-.318-.557-.596-.836-.874 1.194-1.43 2.745-2.501 4.296-3.455zM128.927 108.219c.835-.834 1.988-1.429 3.181-1.429 1.472-.08 2.863.516 4.096 1.27 1.71 1.35 2.863 3.295 3.778 5.241.477 1.073.915 2.184 1.153 3.296-1.749.596-3.579.794-5.408.794-1.829.04-3.738-.197-5.289-1.191-.955-.596-1.79-1.39-2.346-2.382a4.484 4.484 0 0 1-.557-2.582c.079-1.111.636-2.143 1.392-3.017zM45.733 107.086c1.454-1.031 3.29-1.642 5.087-1.185 1.263.306 2.296 1.298 2.87 2.484.497 1.107.65 2.445.191 3.629-.537 1.337-1.683 2.368-2.946 3.056-1.148.611-2.487.802-3.787.878-2.028.039-4.093-.191-6.045-.764.115-1.107.574-2.139 1.033-3.17.881-1.833 1.952-3.667 3.597-4.928zM101.964 111.316c.597-2.145 2.784-3.812 5.051-3.653 1.113.079 2.148.596 3.022 1.231 1.67 1.31 2.544 3.375 2.943 5.4.397 1.867.517 3.773.437 5.639-1.392.357-2.744-.197-4.096-.397-2.148-.675-4.454-1.43-5.885-3.256-1.154-1.35-1.869-3.177-1.472-4.964zM76.394 109.212c1.034-.239 2.148-.239 3.141.079.915.437 1.75 1.032 2.346 1.827.677.913.955 2.064.877 3.176-.279 2.184-1.63 4.13-3.46 5.282-2.148 1.27-4.494 2.223-6.96 2.621-.477-.715-.357-1.668-.477-2.463-.119-1.826-.04-3.612.358-5.36.516-2.264 2.107-4.209 4.175-5.162zM113.337 125.651c.954-.993 2.227-1.708 3.618-1.708 1.511-.039 2.903.755 3.977 1.748 1.869 1.747 2.386 4.407 2.704 6.869.119 1.231.159 2.502.08 3.733-1.551.079-3.102-.278-4.614-.715-1.869-.556-3.777-1.31-5.169-2.779-.954-1.152-1.75-2.542-1.75-4.091-.038-1.111.399-2.223 1.154-3.057zM64.106 125.652c.994-.755 2.267-1.27 3.579-1.152.915.079 1.75.556 2.505 1.032.835.755 1.59 1.708 1.79 2.899.278 1.549-.279 3.097-1.074 4.368-1.392 2.065-3.738 3.137-5.964 3.971-1.153.397-2.267.754-3.42.913-.437-1.827-.437-3.732-.397-5.56.159-1.151.318-2.342.755-3.414.436-1.191 1.233-2.224 2.226-3.057z",
        fill: "#3D843C"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M105.862 35.591c.198-.119.398-.238.636-.318.955 1.39 1.631 2.979 2.148 4.607.557 1.866.955 3.97.358 5.877-.477 1.588-1.511 3.097-3.062 3.772-2.346.953-5.408-.198-6.363-2.581-.755-2.105-.318-4.566.955-6.354 1.391-2.025 3.3-3.651 5.328-5.003zM75.678 35.512c.279.08.517.159.796.238 2.107 1.112 4.136 2.54 5.726 4.408 1.233 1.43 1.91 3.415 1.75 5.32-.12 1.27-.756 2.502-1.79 3.257-1.312.992-3.062 1.27-4.652.794-2.545-1.032-3.897-3.931-3.778-6.592.159-2.58.875-5.082 1.948-7.425zM122.365 52.309c2.585-1.748 5.726-2.582 8.788-2.86.318 2.661.04 5.401-.795 7.903-.676 2.025-2.267 3.653-4.215 4.487-.875.198-1.83.318-2.704.08-2.108-.596-3.778-2.7-3.659-4.924.119-1.827 1.233-3.455 2.585-4.686zM49.989 50.84c1.511-.198 3.022-.08 4.533.118 1.63.278 3.3.636 4.733 1.51a7.206 7.206 0 0 1 2.505 2.62c.517.834.795 1.827.676 2.82-.04 1.23-.756 2.342-1.63 3.176-1.114.993-2.665 1.47-4.136 1.152-2.068-.477-3.858-1.946-4.772-3.852-1.154-2.343-1.79-4.963-1.91-7.545zM90.83 50.88c.159-.08.318-.16.477-.198a18.811 18.811 0 0 1 2.148 2.54c1.153 1.707 2.227 3.534 2.544 5.56.238 1.985-.198 4.248-1.75 5.638-.994.875-2.386 1.192-3.698 1.112-1.272-.238-2.585-.834-3.34-1.906-1.273-1.866-1.393-4.408-.597-6.472.915-2.384 2.506-4.409 4.215-6.275zM116.439 68.153c1.949-.794 4.017-1.31 6.125-1.43.079.198.159.397.239.636 0 3.017-.239 6.234-1.75 8.934-.438.556-.955 1.073-1.432 1.588-.716.517-1.471.953-2.306 1.27-1.114.239-2.267.12-3.341-.317-1.352-.834-2.545-2.184-2.704-3.812-.198-1.827.756-3.534 1.909-4.885.954-.833 2.067-1.547 3.26-1.984zM58.141 71.448c1.193-.397 2.386-.635 3.58-.834 1.55-.159 3.18-.278 4.732.08.994.197 1.908.715 2.783 1.27.955.794 1.87 1.866 2.108 3.177.318 1.509-.238 3.057-1.233 4.209-.835.913-2.068 1.549-3.3 1.549a7.217 7.217 0 0 1-5.13-2.026c-1.154-1.112-1.989-2.462-2.864-3.772l-1.431-3.097c.198-.238.477-.476.755-.556zM135.807 72.243c1.829-.556 3.738-.358 5.568 0 1.551.357 3.062.714 4.414 1.469a12.634 12.634 0 0 1-.915 1.986c-1.193 2.025-2.624 3.93-4.533 5.28-1.432.876-3.142 1.35-4.812 1.113-1.034-.12-2.028-.675-2.744-1.43-1.232-1.549-1.63-3.852-.676-5.639.834-1.35 2.226-2.263 3.698-2.78zM97.033 74.268c1.432-.516 2.904-1.073 4.454-1.231.358 1.707.438 3.455.318 5.162-.119 2.303-.715 4.725-2.465 6.353-.994.953-2.267 1.668-3.698 1.668-2.028 0-3.898-1.509-4.574-3.375-.596-1.906.16-3.97 1.313-5.48 1.193-1.47 2.942-2.343 4.652-3.097zM41.065 73.165c1.913-.458 3.979-.688 5.815.115 1.607.611 3.023 1.91 3.367 3.667a5.58 5.58 0 0 1-.306 2.636c-.421.955-1.148 1.872-2.142 2.368-1.57.802-3.482.611-5.127 0-1.798-.84-3.25-2.33-4.476-3.858a27.298 27.298 0 0 1-1.95-2.903c1.453-1.032 3.136-1.566 4.82-2.025zM98.982 93.685c1.153-.754 2.625-.873 3.897-.476 1.671.516 3.182 1.667 4.096 3.176 1.194 1.946 1.909 4.17 2.387 6.433.039.358.079.715.158 1.112-1.63.357-3.26.278-4.891.159-2.028-.198-4.175-.635-5.727-2.025a8.532 8.532 0 0 1-1.192-1.191c-.677-.914-1.114-1.986-1.114-3.137 0-1.668 1.034-3.177 2.386-4.05zM41.372 95.97c1.415-.916 3.213-1.26 4.896-.993 1.3.23 2.488 1.032 3.138 2.14.382.802.611 1.642.611 2.52 0 1.338-.65 2.637-1.683 3.477-1.454 1.185-3.481 1.719-5.356 1.413-2.448-.343-4.858-1.26-7-2.483.344-.879.918-1.643 1.453-2.407 1.15-1.374 2.41-2.711 3.94-3.666zM135.409 96.465c.636-.04 1.271-.08 1.869-.08 1.113.16 2.266.437 3.222 1.073 1.869 1.23 3.301 2.978 4.573 4.805.398.595.796 1.27 1.074 1.945-1.511.914-3.181 1.47-4.891 1.906-2.028.477-4.216.715-6.164-.197-1.631-.675-3.062-2.025-3.38-3.852-.36-2.424 1.231-5.044 3.697-5.6zM111.668 102.937c-.279-2.422 1.551-4.684 3.857-5.201 1.312-.278 2.665.04 3.778.714 1.472.875 2.545 2.264 3.181 3.852.756 1.827 1.154 3.772 1.353 5.757.039.437.039.874.039 1.35-2.148.159-4.334-.238-6.442-.754-1.114-.397-2.227-.794-3.181-1.549-1.273-1.071-2.307-2.501-2.585-4.169zM65.22 99.086c1.153-.159 2.346 0 3.34.675 1.392.953 2.227 2.661 2.267 4.328l-.12.715c-.397 1.867-1.948 3.296-3.617 4.169-2.029.834-4.297.875-6.483.755a22.453 22.453 0 0 1-3.222-.477c.08-1.151.517-2.303.954-3.375.518-1.27 1.154-2.502 1.95-3.612 1.153-1.669 2.982-2.86 4.93-3.178zM121.092 119.694c.836-1.667 2.585-2.978 4.534-2.938 1.909.08 3.618 1.231 4.812 2.661 1.233 1.747 1.829 3.851 2.187 5.916.198 1.073.358 2.105.318 3.177-1.829.159-3.658-.079-5.408-.437-1.869-.476-3.778-1.151-5.091-2.621-1.391-1.469-2.267-3.772-1.352-5.758zM52.007 117.515c1.262-1.337 2.984-2.406 4.897-2.292 1.491.115 2.792 1.108 3.557 2.369.421.764.727 1.643.65 2.521-.076 1.108-.574 2.101-1.187 2.941-1.187 1.643-3.099 2.521-4.974 2.942-1.798.42-3.673.726-5.547.611-.038-1.185.113-2.368.344-3.515.385-1.948.997-3.972 2.26-5.577zM101.726 133.116c.477-2.739 3.698-4.447 6.283-3.573 1.511.516 2.665 1.826 3.341 3.217 1.113 2.303.795 4.964.397 7.386a18.68 18.68 0 0 1-.835 3.018c-2.266-.557-4.335-1.827-6.204-3.257-2.028-1.59-3.34-4.17-2.982-6.791zM76.712 130.178c2.346-.794 5.25.556 6.124 2.938.677 2.343-.04 4.964-1.71 6.751-1.71 1.866-3.738 3.455-6.044 4.487-.835-1.43-1.352-3.057-1.79-4.646-.477-2.263-.676-4.765.478-6.829.636-1.192 1.63-2.264 2.942-2.701z",
        fill: "#BAC529"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M86.216 68.629c.398-.238.915.04.955.477.12.913 0 1.866 0 2.819.08 4.13 1.113 8.18 2.465 12.032a97.863 97.863 0 0 0 1.91 5.122c3.617.397 7.317-.635 10.538-2.303 2.823-1.47 5.209-3.653 7.158-6.195-.279 1.629-.915 3.177-1.71 4.606-.163.28-.349.547-.557.795-.164.242-.35.468-.557.675-2.306 2.74-5.686 4.29-9.067 5.281-.676.159-1.312.318-1.988.477-.716.158-1.432.317-2.108.595.08.198.16.358.239.596 1.034 2.104 1.71 4.368 2.346 6.632.755 3.613 1.392 7.267 1.75 10.96.278 2.859.477 5.678.596 8.497 0 .675.04 1.311.04 1.948 0 3.772.12 7.505-.12 11.277-.119 2.303-.238 4.646-.516 6.949-.358 3.335-1.84 10.711-3.153 13.768-2.991.073-5.261.057-8.124-.141.716-3.018 1.931-9.775 2.17-12.872.278-2.54.517-5.123.716-7.705.159-2.779.397-5.599.477-8.378.12-1.549.199-3.098.239-4.646.04-1.787.079-3.613.04-5.401 0-2.224.079-4.487-.16-6.75-.08-1.073-.278-2.105-.556-3.177-.478-.913-1.313-1.588-2.148-2.224-1.71-1.231-3.54-2.145-5.449-2.938-2.982-1.231-6.044-2.105-9.185-2.78-3.897-.913-7.874-1.39-11.851-1.826.398-.12.795-.239 1.193-.318.994 0 1.989-.12 2.983-.198 4.056-.238 8.111-.08 12.129.278 2.624.198 5.21.715 7.716 1.39 1.113.318 2.187.675 3.3.875-.08-1.152-.397-2.264-.636-3.336-.278-1.31-.517-2.62-.795-3.93a188.598 188.598 0 0 1-1.551-9.491c-.279-2.304-.557-4.567-.716-6.87-.04-.596 0-1.191.08-1.787.356-1.076.834-2.268 1.907-2.783z",
        fill: "#2A190A"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M91.446 7.81C44.5 7.81 6.444 45.813 6.444 92.689c0 46.877 38.056 84.878 85.002 84.878 46.945 0 85.002-38.001 85.002-84.878S138.391 7.811 91.446 7.811zm58.612 109.603a63.29 63.29 0 0 1-13.632 20.189 63.422 63.422 0 0 1-20.219 13.613c-7.843 3.312-16.174 4.992-24.761 4.992s-16.918-1.68-24.761-4.992a63.419 63.419 0 0 1-20.22-13.612 63.283 63.283 0 0 1-13.632-20.19c-3.317-7.832-4.999-16.152-4.999-24.725s1.682-16.893 5-24.724a63.304 63.304 0 0 1 13.631-20.19 63.38 63.38 0 0 1 20.22-13.612c7.843-3.312 16.174-4.992 24.76-4.992 8.588 0 16.919 1.68 24.762 4.992a63.418 63.418 0 0 1 20.219 13.612 63.294 63.294 0 0 1 13.632 20.19c3.317 7.831 4.999 16.15 4.999 24.724 0 8.575-1.682 16.893-4.999 24.725z",
        fill: "#4A6EAE"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M91.446 184c-12.345 0-24.32-2.414-35.595-7.176-10.89-4.6-20.67-11.183-29.067-19.568-8.398-8.386-14.991-18.151-19.597-29.025C2.418 116.973 0 105.015 0 92.688c0-12.326 2.418-24.285 7.187-35.543 4.607-10.873 11.2-20.638 19.597-29.024 8.398-8.385 18.177-14.97 29.067-19.568C67.126 3.79 79.1 1.376 91.446 1.376c12.345 0 24.322 2.415 35.595 7.177 10.89 4.6 20.669 11.183 29.067 19.568 8.398 8.386 14.991 18.15 19.597 29.024 4.769 11.258 7.187 23.217 7.187 35.543 0 12.327-2.418 24.285-7.187 35.543-4.607 10.874-11.199 20.639-19.597 29.025-8.398 8.385-18.177 14.969-29.067 19.568C115.768 181.586 103.79 184 91.446 184zm0-180.125c-49.044 0-88.944 39.841-88.944 88.813s39.9 88.814 88.944 88.814c49.044 0 88.944-39.842 88.944-88.814 0-48.971-39.9-88.813-88.944-88.813z",
        fill: "#001D7E"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M165.182 41.546s-7.806 8.274-22.196 20.225c5.238 8.966 8.238 19.394 8.238 30.523 0 33.514-27.201 60.675-60.804 60.675-21.712 0-40.771-11.393-51.507-28.526a349.632 349.632 0 0 1-27.75 9.942s24.02 46.897 79.296 47.651c49.494.677 124.656-56.024 74.723-140.49z",
        fill: "#305FA4"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M29.946 54.754l2.544-2.383c.676.635 1.193 1.35 1.51 2.065.28.754.399 1.509.319 2.263-.08.794-.398 1.628-.955 2.581-.636 1.191-1.351 2.025-2.107 2.581-.796.517-1.75.795-2.903.875-1.114.04-2.386-.318-3.698-1.072-1.75-1.033-2.864-2.264-3.261-3.733-.398-1.509-.12-3.097.876-4.805.795-1.35 1.67-2.223 2.624-2.7.995-.437 2.188-.556 3.5-.278l-1.034 3.296c-.358-.12-.676-.12-.876-.12a1.993 1.993 0 0 0-.954.358c-.318.198-.557.437-.716.794-.438.715-.477 1.47-.12 2.224.28.556.877 1.112 1.87 1.668 1.153.675 2.067.953 2.704.834.636-.12 1.153-.477 1.511-1.152.398-.596.477-1.191.318-1.707-.198-.518-.555-1.073-1.152-1.59zm1.83-5.242c1.113.953 2.186 1.509 3.26 1.707 1.114.198 2.108.12 3.023-.277.954-.437 1.869-1.152 2.783-2.185.876-1.032 1.432-2.065 1.63-3.057a4.912 4.912 0 0 0-.238-3.018c-.358-.953-1.114-1.906-2.187-2.86-1.511-1.27-3.022-1.866-4.573-1.746-1.552.119-2.983.953-4.335 2.502-1.312 1.508-1.909 3.017-1.79 4.606.12 1.588.915 3.018 2.426 4.328zm2.505-2.86c-.955-.793-1.472-1.587-1.591-2.263-.12-.714.12-1.35.596-1.945.517-.596 1.154-.914 1.87-.914.715 0 1.47.358 2.345 1.152 1.074.875 1.63 1.668 1.75 2.343.08.675-.12 1.35-.636 1.945-.557.635-1.154.914-1.87.914-.715 0-1.55-.397-2.464-1.231zm3.976-13.42l2.983-2.343 5.726 7.306 4.692-3.693 1.87 2.383-7.676 5.996-7.595-9.65zm10.3-7.545l6.084 10.641 8.988-5.122-1.352-2.422-5.687 3.256-1.233-2.104 5.13-2.939-1.232-2.145-5.13 2.9-.994-1.668 5.527-3.177-1.311-2.263-8.79 5.043zm2.585-5.202l2.544-1.47-1.112 3.534-1.392.795-.04-2.86zm18.371 3.891l-.795-2.422 5.568-1.866 1.67 4.924c-.835 1.111-1.59 1.905-2.306 2.461a10.679 10.679 0 0 1-2.784 1.35c-1.392.477-2.585.636-3.618.437-1.034-.159-1.95-.635-2.744-1.39-.796-.794-1.392-1.787-1.79-2.978-.437-1.27-.557-2.462-.358-3.574.198-1.112.756-2.105 1.59-2.899.637-.635 1.632-1.191 2.984-1.668 1.271-.397 2.266-.635 3.022-.595.676 0 1.352.197 1.95.516.62.401 1.15.929 1.55 1.549l-3.221 1.787c-.319-.398-.676-.636-1.074-.755-.438-.119-.915-.08-1.432.08-.795.277-1.312.754-1.63 1.469-.279.715-.198 1.668.198 2.82.397 1.27.954 2.064 1.63 2.461.636.397 1.392.437 2.227.12.398-.12.795-.279 1.113-.517a8.433 8.433 0 0 0 1.034-1.032l-.358-1.073-2.426.795zm6.721-9.848l3.738-.675 2.187 12.072-3.777.675-2.148-12.072zm7.556 4.964c-.08-1.986.438-3.574 1.551-4.725 1.074-1.112 2.625-1.708 4.613-1.787 2.068-.04 3.658.476 4.772 1.548 1.153 1.073 1.75 2.581 1.79 4.567.04 1.43-.198 2.62-.637 3.534-.477.913-1.153 1.668-2.028 2.184-.915.556-2.068.834-3.42.875-1.392 0-2.544-.16-3.46-.596-.914-.397-1.67-1.072-2.266-2.025-.596-.954-.875-2.145-.914-3.575h-.001zm3.778-.08c.04 1.232.278 2.146.755 2.661.478.516 1.114.755 1.91.755.794 0 1.43-.279 1.868-.834.438-.556.637-1.51.597-2.86 0-1.19-.279-2.025-.756-2.54-.477-.514-1.113-.754-1.909-.754-.795.04-1.392.318-1.829.874-.476.554-.675 1.468-.635 2.699h-.001zm24.137 7.028l-4.175-1.152-1.112 1.749-3.738-1.033 7.795-10.562 4.016 1.153 1.074 13.064-3.857-1.112-.003-2.107zm-.079-2.78l-.08-4.606-2.505 3.891 2.585.715zm1.63-10.8l2.824.793-3.301 1.668-1.59-.435 2.067-2.027zm7.914 5.876l3.46 1.589-3.816 8.42 5.409 2.461-1.233 2.74-8.868-4.01 5.048-11.2zm12.049 18.783l-.676 1.985 3.264 2.304 3.38-12.667-3.42-2.422-10.897 7.345 3.182 2.224 1.67-1.27 3.497 2.5zm.915-2.66l-2.227-1.55 3.659-2.819-1.432 4.368zm11.057-1.032l3.459 3.612-4.096 6.552 6.761-3.772 3.42 3.612-8.908 8.458-2.106-2.221 6.76-6.473-8.43 4.726-1.949-2.025 5.13-8.18-6.76 6.432-2.148-2.224 8.867-8.497zm6.681 16.68c-1.233.754-2.149 1.587-2.665 2.54-.557.952-.795 1.945-.755 2.937.079 1.033.477 2.145 1.153 3.336.676 1.151 1.471 2.025 2.386 2.581.875.516 1.869.755 2.903.755 1.034-.08 2.148-.437 3.42-1.152 1.71-.993 2.783-2.224 3.181-3.733.398-1.509.08-3.137-.954-4.924-.994-1.707-2.227-2.78-3.778-3.217-1.511-.396-3.141-.078-4.891.875v.001zm1.869 3.295c1.113-.596 1.988-.875 2.704-.715.676.12 1.232.516 1.63 1.191.398.675.478 1.35.239 2.026-.239.675-.835 1.31-1.83 1.906-1.193.675-2.148.953-2.823.833-.676-.12-1.233-.556-1.63-1.27-.398-.675-.478-1.35-.239-2.025.238-.677.876-1.312 1.949-1.947zM48.836 145.205l3.222 2.303-2.903 8.776 7.356-5.599 3.141 2.223-10.856 7.346-3.34-2.383 3.38-12.666zM61.8 164.622l-.278 2.065 3.658 1.63.795-13.064-3.777-1.708-9.266 9.331 3.54 1.588 1.39-1.588 3.938 1.746zm.358-2.78l-2.466-1.072 3.023-3.495-.557 4.567zm8.111-4.804l3.659.833-2.108 9.054 5.806 1.35-.716 2.939-9.464-2.224 2.823-11.952zm11.055 2.382l3.818.437-1.471 12.192-3.778-.437 1.431-12.192zm5.886.914l3.54-.12 4.811 6.633-.197-6.791 3.579-.119.397 12.27-3.579.119-4.812-6.591.239 6.75-3.58.119-.398-12.27zm13.044-.437l3.7-.873.954 4.169 4.057-.913-.955-4.169 3.699-.875 2.783 11.952-3.738.875-1.113-4.844-4.057.913 1.153 4.844-3.698.875-2.785-11.954zm14.833 2.898c.557 1.311 1.312 2.264 2.227 2.899.915.636 1.869.993 2.903.993.994.04 2.108-.238 3.38-.794 1.233-.556 2.187-1.27 2.784-2.105.636-.834.994-1.787 1.034-2.819.079-1.033-.198-2.224-.795-3.534-.796-1.787-1.949-2.939-3.381-3.495-1.471-.556-3.141-.397-5.01.437-1.83.834-2.983 1.986-3.579 3.455-.556 1.47-.397 3.138.438 4.964l-.001-.001zm3.46-1.548c-.517-1.152-.676-2.065-.477-2.74.197-.715.636-1.192 1.352-1.509.716-.318 1.392-.358 2.068-.04.636.278 1.193.953 1.67 2.025.557 1.231.755 2.185.557 2.859-.199.675-.637 1.152-1.392 1.509-.716.318-1.432.318-2.068.04-.636-.317-1.232-1.032-1.71-2.143v-.001zm10.538-2.383l2.784-2.263c.398.397.795.675 1.193.794.596.159 1.193.04 1.789-.397.438-.318.676-.635.796-1.032.079-.358 0-.715-.159-.953a1.135 1.135 0 0 0-.836-.477c-.397-.04-1.033.159-2.028.556-1.551.675-2.783.993-3.738.875-.954-.08-1.71-.516-2.266-1.27a3.426 3.426 0 0 1-.597-1.787c-.007-.719.2-1.424.597-2.025.397-.675 1.113-1.43 2.148-2.145 1.271-.953 2.425-1.39 3.42-1.39 1.033 0 1.948.437 2.823 1.39l-2.744 2.263c-.437-.397-.835-.635-1.193-.635-.437-.04-.835.119-1.272.437-.358.238-.557.516-.636.794a.847.847 0 0 0 .119.754c.119.159.279.239.517.278.239 0 .676-.119 1.312-.397 1.551-.675 2.744-1.072 3.5-1.191.795-.119 1.511-.08 2.108.198.556.238 1.034.635 1.431 1.191.477.635.716 1.35.756 2.145.039.795-.159 1.549-.597 2.263-.437.755-1.153 1.469-2.107 2.184-1.671 1.192-3.102 1.708-4.216 1.549-1.113-.199-2.108-.755-2.903-1.708l-.001-.001zM17.976 89.293c1.869 0 3.38 1.509 3.38 3.415 0 1.827-1.511 3.375-3.38 3.375-1.87 0-3.38-1.548-3.38-3.375 0-1.906 1.511-3.415 3.38-3.415zM164.876 89.293c1.87 0 3.42 1.509 3.42 3.415 0 1.827-1.55 3.375-3.42 3.375-1.869 0-3.38-1.548-3.38-3.375 0-1.906 1.511-3.415 3.38-3.415z",
        fill: "#fff"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
        id: "a",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#fff",
          d: "M0 0h185v184H0z"
        })
      })
    })]
  }));
};

Toggle_AlamoValinhosLogo.defaultProps = {
  width: "185",
  height: "184",
  viewBox: "0 0 185 184",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

const Toggle = () => {
  const handleCloseToggle = Object(external_react_["useCallback"])(() => {
    document.querySelector('.toggle-menu').classList.remove('open');
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MobileContent, {
    className: "toggle-menu",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(io_["IoMdClose"], {
      size: 28,
      color: "#3D843C",
      className: "close",
      onClick: handleCloseToggle
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Logo, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Bounce"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle_AlamoValinhosLogo, {})
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Mobile_Info, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Mobile_Nav, {})]
  });
};

/* harmony default export */ var Mobile_Toggle = (Toggle);
// CONCATENATED MODULE: ./src/components/Header/index.tsx




function Header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Header_ownKeys(Object(source), true).forEach(function (key) { Header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Header_AlamoValinhosLogo = function AlamoValinhosLogo(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", Header_objectSpread(Header_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      clipPath: "url(#a)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M134.657 135.835c23.864-23.829 23.864-62.465 0-86.294-23.865-23.83-62.557-23.83-86.422 0-23.865 23.83-23.865 62.465 0 86.294 23.865 23.83 62.557 23.83 86.422 0z",
        fill: "#4A6EAE"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M90.22 156.569c35.894 0 64.949-29.012 64.949-64.811 0-11.888-3.205-23.026-8.799-32.604-22.892 19.011-61.381 46.731-111.168 66.945 11.467 18.301 31.825 30.47 55.017 30.47z",
        fill: "#003D78"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M91.983 33.447c.557.159.914.635 1.312 1.072 1.034 1.232 1.989 2.621 2.704 4.09.676 1.35 1.154 2.82 1.034 4.329-.08 1.747-.715 3.574-2.227 4.566-1.153.794-2.704.875-4.056.596-1.272-.357-2.346-1.191-2.942-2.383-.877-1.787-.915-3.93-.198-5.757.953-2.462 2.623-4.567 4.373-6.513zM111.946 44.09c2.028-1.828 4.533-2.94 7.079-3.853.278.556.477 1.192.596 1.867.398 1.826.597 3.732.398 5.678-.16 2.422-1.551 4.884-3.858 5.916-2.704 1.231-6.243-.874-6.561-3.772-.239-2.184.716-4.407 2.346-5.837zM61.402 42.024c.358 0 .756.04 1.114.08 2.345.675 4.612 1.588 6.561 3.057 1.352 1.032 2.267 2.54 2.665 4.21.278 1.31.079 2.779-.796 3.85-1.034 1.311-2.704 2.105-4.374 1.986-1.034-.079-2.028-.595-2.864-1.27-1.271-1.112-2.187-2.66-2.465-4.368-.438-2.502-.278-5.083.159-7.545zM105.226 57.749c1.392-.715 2.823-1.43 4.334-1.827.836 2.304 1.114 4.765.955 7.227-.08 1.708-.676 3.336-1.79 4.646-.755.834-1.71 1.549-2.823 1.787-.994.278-2.068.12-2.983-.278-1.193-.596-2.227-1.588-2.664-2.859-.517-1.509-.159-3.217.557-4.646.914-1.827 2.743-3.018 4.414-4.05zM71.383 56.835c2.466.318 4.852 1.39 6.96 2.7 2.187 1.43 3.817 4.13 3.34 6.791-.278 1.628-1.63 2.82-3.062 3.494-.874.198-1.75.358-2.624.16-1.551-.279-2.784-1.43-3.659-2.661-.954-1.35-1.233-2.978-1.392-4.567-.08-1.986 0-4.01.438-5.917zM134.535 60.29c1.79-.159 3.579-.119 5.329.16a12.389 12.389 0 0 1-.238 1.746c-.557 2.184-1.353 4.328-2.665 6.155-.954 1.31-2.346 2.263-3.897 2.74-1.153.318-2.426.238-3.499-.278-1.432-.755-2.346-2.224-2.665-3.772-.119-1.192.278-2.343.835-3.376.796-.913 1.631-1.826 2.744-2.342 1.271-.636 2.663-.874 4.056-1.033zM40.721 63.577c1.607-.802 3.481-1.032 5.241-1.222 1.607-.039 3.25-.039 4.744.649 1.454.725 2.831 1.91 3.29 3.476.383 1.185.115 2.483-.459 3.552-.727 1.223-1.99 2.178-3.443 2.33-2.104.192-4.285-.763-5.662-2.368-1.683-1.833-2.908-4.087-3.71-6.417zM69.873 83.56c2.345-.914 4.93-1.152 7.436-1.033 2.306.198 4.613 1.39 5.806 3.415.636 1.032.716 2.303.438 3.494-.517 1.43-1.512 2.74-2.983 3.296-1.79.635-3.738.12-5.29-.794-1.71-1.033-2.743-2.78-3.817-4.448-.596-1.271-1.272-2.541-1.59-3.93zM118.269 84.473c1.909-1.032 4.255-1.032 6.204-.198 2.386.993 4.494 2.582 6.323 4.368-.597.954-1.551 1.589-2.466 2.264-1.67 1.191-3.499 2.224-5.527 2.62-1.87.279-3.937-.158-5.409-1.35-1.233-1.151-1.71-2.938-1.391-4.566.278-1.311 1.073-2.503 2.266-3.138zM39.343 84.243c1.53-.84 3.328-1.413 5.126-1.146 1.416.192 2.87.803 3.711 1.987.957 1.298.995 3.056.498 4.507-.46 1.07-1.3 1.987-2.41 2.445a6.878 6.878 0 0 1-5.012.191c-2.028-.688-3.864-1.947-5.509-3.324-.383-.305-.727-.687-1.11-1.03 1.302-1.529 2.985-2.675 4.706-3.63zM135.567 84.79c1.83-1.111 4.176-1.19 6.165-.436 2.465.993 4.573 2.66 6.521 4.447-.517.953-1.471 1.549-2.306 2.184-1.75 1.27-3.699 2.422-5.886 2.78-1.869.159-3.937-.198-5.328-1.51-.955-.912-1.392-2.263-1.353-3.533.04-1.549.836-3.137 2.187-3.931zM55.238 86.021c1.551-.875 3.26-1.588 5.05-1.548 1.591 0 3.261.476 4.375 1.667.875.914 1.233 2.224 1.193 3.495-.08 1.23-.557 2.462-1.511 3.335-.756.715-1.75 1.033-2.744 1.39-1.034 0-2.148.12-3.181-.159-2.506-.714-4.653-2.263-6.642-3.851-.279-.318-.557-.596-.836-.874 1.194-1.43 2.745-2.501 4.296-3.455zM128.927 108.219c.835-.834 1.988-1.429 3.181-1.429 1.472-.08 2.863.516 4.096 1.27 1.71 1.35 2.863 3.295 3.778 5.241.477 1.073.915 2.184 1.153 3.296-1.749.596-3.579.794-5.408.794-1.829.04-3.738-.197-5.289-1.191-.955-.596-1.79-1.39-2.346-2.382a4.484 4.484 0 0 1-.557-2.582c.079-1.111.636-2.143 1.392-3.017zM45.733 107.086c1.454-1.031 3.29-1.642 5.087-1.185 1.263.306 2.296 1.298 2.87 2.484.497 1.107.65 2.445.191 3.629-.537 1.337-1.683 2.368-2.946 3.056-1.148.611-2.487.802-3.787.878-2.028.039-4.093-.191-6.045-.764.115-1.107.574-2.139 1.033-3.17.881-1.833 1.952-3.667 3.597-4.928zM101.964 111.316c.597-2.145 2.784-3.812 5.051-3.653 1.113.079 2.148.596 3.022 1.231 1.67 1.31 2.544 3.375 2.943 5.4.397 1.867.517 3.773.437 5.639-1.392.357-2.744-.197-4.096-.397-2.148-.675-4.454-1.43-5.885-3.256-1.154-1.35-1.869-3.177-1.472-4.964zM76.394 109.212c1.034-.239 2.148-.239 3.141.079.915.437 1.75 1.032 2.346 1.827.677.913.955 2.064.877 3.176-.279 2.184-1.63 4.13-3.46 5.282-2.148 1.27-4.494 2.223-6.96 2.621-.477-.715-.357-1.668-.477-2.463-.119-1.826-.04-3.612.358-5.36.516-2.264 2.107-4.209 4.175-5.162zM113.337 125.651c.954-.993 2.227-1.708 3.618-1.708 1.511-.039 2.903.755 3.977 1.748 1.869 1.747 2.386 4.407 2.704 6.869.119 1.231.159 2.502.08 3.733-1.551.079-3.102-.278-4.614-.715-1.869-.556-3.777-1.31-5.169-2.779-.954-1.152-1.75-2.542-1.75-4.091-.038-1.111.399-2.223 1.154-3.057zM64.106 125.652c.994-.755 2.267-1.27 3.579-1.152.915.079 1.75.556 2.505 1.032.835.755 1.59 1.708 1.79 2.899.278 1.549-.279 3.097-1.074 4.368-1.392 2.065-3.738 3.137-5.964 3.971-1.153.397-2.267.754-3.42.913-.437-1.827-.437-3.732-.397-5.56.159-1.151.318-2.342.755-3.414.436-1.191 1.233-2.224 2.226-3.057z",
        fill: "#3D843C"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M105.862 35.591c.198-.119.398-.238.636-.318.955 1.39 1.631 2.979 2.148 4.607.557 1.866.955 3.97.358 5.877-.477 1.588-1.511 3.097-3.062 3.772-2.346.953-5.408-.198-6.363-2.581-.755-2.105-.318-4.566.955-6.354 1.391-2.025 3.3-3.651 5.328-5.003zM75.678 35.512c.279.08.517.159.796.238 2.107 1.112 4.136 2.54 5.726 4.408 1.233 1.43 1.91 3.415 1.75 5.32-.12 1.27-.756 2.502-1.79 3.257-1.312.992-3.062 1.27-4.652.794-2.545-1.032-3.897-3.931-3.778-6.592.159-2.58.875-5.082 1.948-7.425zM122.365 52.309c2.585-1.748 5.726-2.582 8.788-2.86.318 2.661.04 5.401-.795 7.903-.676 2.025-2.267 3.653-4.215 4.487-.875.198-1.83.318-2.704.08-2.108-.596-3.778-2.7-3.659-4.924.119-1.827 1.233-3.455 2.585-4.686zM49.989 50.84c1.511-.198 3.022-.08 4.533.118 1.63.278 3.3.636 4.733 1.51a7.206 7.206 0 0 1 2.505 2.62c.517.834.795 1.827.676 2.82-.04 1.23-.756 2.342-1.63 3.176-1.114.993-2.665 1.47-4.136 1.152-2.068-.477-3.858-1.946-4.772-3.852-1.154-2.343-1.79-4.963-1.91-7.545zM90.83 50.88c.159-.08.318-.16.477-.198a18.811 18.811 0 0 1 2.148 2.54c1.153 1.707 2.227 3.534 2.544 5.56.238 1.985-.198 4.248-1.75 5.638-.994.875-2.386 1.192-3.698 1.112-1.272-.238-2.585-.834-3.34-1.906-1.273-1.866-1.393-4.408-.597-6.472.915-2.384 2.506-4.409 4.215-6.275zM116.439 68.153c1.949-.794 4.017-1.31 6.125-1.43.079.198.159.397.239.636 0 3.017-.239 6.234-1.75 8.934-.438.556-.955 1.073-1.432 1.588-.716.517-1.471.953-2.306 1.27-1.114.239-2.267.12-3.341-.317-1.352-.834-2.545-2.184-2.704-3.812-.198-1.827.756-3.534 1.909-4.885.954-.833 2.067-1.547 3.26-1.984zM58.141 71.448c1.193-.397 2.386-.635 3.58-.834 1.55-.159 3.18-.278 4.732.08.994.197 1.908.715 2.783 1.27.955.794 1.87 1.866 2.108 3.177.318 1.509-.238 3.057-1.233 4.209-.835.913-2.068 1.549-3.3 1.549a7.217 7.217 0 0 1-5.13-2.026c-1.154-1.112-1.989-2.462-2.864-3.772l-1.431-3.097c.198-.238.477-.476.755-.556zM135.807 72.243c1.829-.556 3.738-.358 5.568 0 1.551.357 3.062.714 4.414 1.469a12.634 12.634 0 0 1-.915 1.986c-1.193 2.025-2.624 3.93-4.533 5.28-1.432.876-3.142 1.35-4.812 1.113-1.034-.12-2.028-.675-2.744-1.43-1.232-1.549-1.63-3.852-.676-5.639.834-1.35 2.226-2.263 3.698-2.78zM97.033 74.268c1.432-.516 2.904-1.073 4.454-1.231.358 1.707.438 3.455.318 5.162-.119 2.303-.715 4.725-2.465 6.353-.994.953-2.267 1.668-3.698 1.668-2.028 0-3.898-1.509-4.574-3.375-.596-1.906.16-3.97 1.313-5.48 1.193-1.47 2.942-2.343 4.652-3.097zM41.065 73.165c1.913-.458 3.979-.688 5.815.115 1.607.611 3.023 1.91 3.367 3.667a5.58 5.58 0 0 1-.306 2.636c-.421.955-1.148 1.872-2.142 2.368-1.57.802-3.482.611-5.127 0-1.798-.84-3.25-2.33-4.476-3.858a27.298 27.298 0 0 1-1.95-2.903c1.453-1.032 3.136-1.566 4.82-2.025zM98.982 93.685c1.153-.754 2.625-.873 3.897-.476 1.671.516 3.182 1.667 4.096 3.176 1.194 1.946 1.909 4.17 2.387 6.433.039.358.079.715.158 1.112-1.63.357-3.26.278-4.891.159-2.028-.198-4.175-.635-5.727-2.025a8.532 8.532 0 0 1-1.192-1.191c-.677-.914-1.114-1.986-1.114-3.137 0-1.668 1.034-3.177 2.386-4.05zM41.372 95.97c1.415-.916 3.213-1.26 4.896-.993 1.3.23 2.488 1.032 3.138 2.14.382.802.611 1.642.611 2.52 0 1.338-.65 2.637-1.683 3.477-1.454 1.185-3.481 1.719-5.356 1.413-2.448-.343-4.858-1.26-7-2.483.344-.879.918-1.643 1.453-2.407 1.15-1.374 2.41-2.711 3.94-3.666zM135.409 96.465c.636-.04 1.271-.08 1.869-.08 1.113.16 2.266.437 3.222 1.073 1.869 1.23 3.301 2.978 4.573 4.805.398.595.796 1.27 1.074 1.945-1.511.914-3.181 1.47-4.891 1.906-2.028.477-4.216.715-6.164-.197-1.631-.675-3.062-2.025-3.38-3.852-.36-2.424 1.231-5.044 3.697-5.6zM111.668 102.937c-.279-2.422 1.551-4.684 3.857-5.201 1.312-.278 2.665.04 3.778.714 1.472.875 2.545 2.264 3.181 3.852.756 1.827 1.154 3.772 1.353 5.757.039.437.039.874.039 1.35-2.148.159-4.334-.238-6.442-.754-1.114-.397-2.227-.794-3.181-1.549-1.273-1.071-2.307-2.501-2.585-4.169zM65.22 99.086c1.153-.159 2.346 0 3.34.675 1.392.953 2.227 2.661 2.267 4.328l-.12.715c-.397 1.867-1.948 3.296-3.617 4.169-2.029.834-4.297.875-6.483.755a22.453 22.453 0 0 1-3.222-.477c.08-1.151.517-2.303.954-3.375.518-1.27 1.154-2.502 1.95-3.612 1.153-1.669 2.982-2.86 4.93-3.178zM121.092 119.694c.836-1.667 2.585-2.978 4.534-2.938 1.909.08 3.618 1.231 4.812 2.661 1.233 1.747 1.829 3.851 2.187 5.916.198 1.073.358 2.105.318 3.177-1.829.159-3.658-.079-5.408-.437-1.869-.476-3.778-1.151-5.091-2.621-1.391-1.469-2.267-3.772-1.352-5.758zM52.007 117.515c1.262-1.337 2.984-2.406 4.897-2.292 1.491.115 2.792 1.108 3.557 2.369.421.764.727 1.643.65 2.521-.076 1.108-.574 2.101-1.187 2.941-1.187 1.643-3.099 2.521-4.974 2.942-1.798.42-3.673.726-5.547.611-.038-1.185.113-2.368.344-3.515.385-1.948.997-3.972 2.26-5.577zM101.726 133.116c.477-2.739 3.698-4.447 6.283-3.573 1.511.516 2.665 1.826 3.341 3.217 1.113 2.303.795 4.964.397 7.386a18.68 18.68 0 0 1-.835 3.018c-2.266-.557-4.335-1.827-6.204-3.257-2.028-1.59-3.34-4.17-2.982-6.791zM76.712 130.178c2.346-.794 5.25.556 6.124 2.938.677 2.343-.04 4.964-1.71 6.751-1.71 1.866-3.738 3.455-6.044 4.487-.835-1.43-1.352-3.057-1.79-4.646-.477-2.263-.676-4.765.478-6.829.636-1.192 1.63-2.264 2.942-2.701z",
        fill: "#BAC529"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M86.216 68.629c.398-.238.915.04.955.477.12.913 0 1.866 0 2.819.08 4.13 1.113 8.18 2.465 12.032a97.863 97.863 0 0 0 1.91 5.122c3.617.397 7.317-.635 10.538-2.303 2.823-1.47 5.209-3.653 7.158-6.195-.279 1.629-.915 3.177-1.71 4.606-.163.28-.349.547-.557.795-.164.242-.35.468-.557.675-2.306 2.74-5.686 4.29-9.067 5.281-.676.159-1.312.318-1.988.477-.716.158-1.432.317-2.108.595.08.198.16.358.239.596 1.034 2.104 1.71 4.368 2.346 6.632.755 3.613 1.392 7.267 1.75 10.96.278 2.859.477 5.678.596 8.497 0 .675.04 1.311.04 1.948 0 3.772.12 7.505-.12 11.277-.119 2.303-.238 4.646-.516 6.949-.358 3.335-1.84 10.711-3.153 13.768-2.991.073-5.261.057-8.124-.141.716-3.018 1.931-9.775 2.17-12.872.278-2.54.517-5.123.716-7.705.159-2.779.397-5.599.477-8.378.12-1.549.199-3.098.239-4.646.04-1.787.079-3.613.04-5.401 0-2.224.079-4.487-.16-6.75-.08-1.073-.278-2.105-.556-3.177-.478-.913-1.313-1.588-2.148-2.224-1.71-1.231-3.54-2.145-5.449-2.938-2.982-1.231-6.044-2.105-9.185-2.78-3.897-.913-7.874-1.39-11.851-1.826.398-.12.795-.239 1.193-.318.994 0 1.989-.12 2.983-.198 4.056-.238 8.111-.08 12.129.278 2.624.198 5.21.715 7.716 1.39 1.113.318 2.187.675 3.3.875-.08-1.152-.397-2.264-.636-3.336-.278-1.31-.517-2.62-.795-3.93a188.598 188.598 0 0 1-1.551-9.491c-.279-2.304-.557-4.567-.716-6.87-.04-.596 0-1.191.08-1.787.356-1.076.834-2.268 1.907-2.783z",
        fill: "#2A190A"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M91.446 7.81C44.5 7.81 6.444 45.813 6.444 92.689c0 46.877 38.056 84.878 85.002 84.878 46.945 0 85.002-38.001 85.002-84.878S138.391 7.811 91.446 7.811zm58.612 109.603a63.29 63.29 0 0 1-13.632 20.189 63.422 63.422 0 0 1-20.219 13.613c-7.843 3.312-16.174 4.992-24.761 4.992s-16.918-1.68-24.761-4.992a63.419 63.419 0 0 1-20.22-13.612 63.283 63.283 0 0 1-13.632-20.19c-3.317-7.832-4.999-16.152-4.999-24.725s1.682-16.893 5-24.724a63.304 63.304 0 0 1 13.631-20.19 63.38 63.38 0 0 1 20.22-13.612c7.843-3.312 16.174-4.992 24.76-4.992 8.588 0 16.919 1.68 24.762 4.992a63.418 63.418 0 0 1 20.219 13.612 63.294 63.294 0 0 1 13.632 20.19c3.317 7.831 4.999 16.15 4.999 24.724 0 8.575-1.682 16.893-4.999 24.725z",
        fill: "#4A6EAE"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M91.446 184c-12.345 0-24.32-2.414-35.595-7.176-10.89-4.6-20.67-11.183-29.067-19.568-8.398-8.386-14.991-18.151-19.597-29.025C2.418 116.973 0 105.015 0 92.688c0-12.326 2.418-24.285 7.187-35.543 4.607-10.873 11.2-20.638 19.597-29.024 8.398-8.385 18.177-14.97 29.067-19.568C67.126 3.79 79.1 1.376 91.446 1.376c12.345 0 24.322 2.415 35.595 7.177 10.89 4.6 20.669 11.183 29.067 19.568 8.398 8.386 14.991 18.15 19.597 29.024 4.769 11.258 7.187 23.217 7.187 35.543 0 12.327-2.418 24.285-7.187 35.543-4.607 10.874-11.199 20.639-19.597 29.025-8.398 8.385-18.177 14.969-29.067 19.568C115.768 181.586 103.79 184 91.446 184zm0-180.125c-49.044 0-88.944 39.841-88.944 88.813s39.9 88.814 88.944 88.814c49.044 0 88.944-39.842 88.944-88.814 0-48.971-39.9-88.813-88.944-88.813z",
        fill: "#001D7E"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M165.182 41.546s-7.806 8.274-22.196 20.225c5.238 8.966 8.238 19.394 8.238 30.523 0 33.514-27.201 60.675-60.804 60.675-21.712 0-40.771-11.393-51.507-28.526a349.632 349.632 0 0 1-27.75 9.942s24.02 46.897 79.296 47.651c49.494.677 124.656-56.024 74.723-140.49z",
        fill: "#305FA4"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M29.946 54.754l2.544-2.383c.676.635 1.193 1.35 1.51 2.065.28.754.399 1.509.319 2.263-.08.794-.398 1.628-.955 2.581-.636 1.191-1.351 2.025-2.107 2.581-.796.517-1.75.795-2.903.875-1.114.04-2.386-.318-3.698-1.072-1.75-1.033-2.864-2.264-3.261-3.733-.398-1.509-.12-3.097.876-4.805.795-1.35 1.67-2.223 2.624-2.7.995-.437 2.188-.556 3.5-.278l-1.034 3.296c-.358-.12-.676-.12-.876-.12a1.993 1.993 0 0 0-.954.358c-.318.198-.557.437-.716.794-.438.715-.477 1.47-.12 2.224.28.556.877 1.112 1.87 1.668 1.153.675 2.067.953 2.704.834.636-.12 1.153-.477 1.511-1.152.398-.596.477-1.191.318-1.707-.198-.518-.555-1.073-1.152-1.59zm1.83-5.242c1.113.953 2.186 1.509 3.26 1.707 1.114.198 2.108.12 3.023-.277.954-.437 1.869-1.152 2.783-2.185.876-1.032 1.432-2.065 1.63-3.057a4.912 4.912 0 0 0-.238-3.018c-.358-.953-1.114-1.906-2.187-2.86-1.511-1.27-3.022-1.866-4.573-1.746-1.552.119-2.983.953-4.335 2.502-1.312 1.508-1.909 3.017-1.79 4.606.12 1.588.915 3.018 2.426 4.328zm2.505-2.86c-.955-.793-1.472-1.587-1.591-2.263-.12-.714.12-1.35.596-1.945.517-.596 1.154-.914 1.87-.914.715 0 1.47.358 2.345 1.152 1.074.875 1.63 1.668 1.75 2.343.08.675-.12 1.35-.636 1.945-.557.635-1.154.914-1.87.914-.715 0-1.55-.397-2.464-1.231zm3.976-13.42l2.983-2.343 5.726 7.306 4.692-3.693 1.87 2.383-7.676 5.996-7.595-9.65zm10.3-7.545l6.084 10.641 8.988-5.122-1.352-2.422-5.687 3.256-1.233-2.104 5.13-2.939-1.232-2.145-5.13 2.9-.994-1.668 5.527-3.177-1.311-2.263-8.79 5.043zm2.585-5.202l2.544-1.47-1.112 3.534-1.392.795-.04-2.86zm18.371 3.891l-.795-2.422 5.568-1.866 1.67 4.924c-.835 1.111-1.59 1.905-2.306 2.461a10.679 10.679 0 0 1-2.784 1.35c-1.392.477-2.585.636-3.618.437-1.034-.159-1.95-.635-2.744-1.39-.796-.794-1.392-1.787-1.79-2.978-.437-1.27-.557-2.462-.358-3.574.198-1.112.756-2.105 1.59-2.899.637-.635 1.632-1.191 2.984-1.668 1.271-.397 2.266-.635 3.022-.595.676 0 1.352.197 1.95.516.62.401 1.15.929 1.55 1.549l-3.221 1.787c-.319-.398-.676-.636-1.074-.755-.438-.119-.915-.08-1.432.08-.795.277-1.312.754-1.63 1.469-.279.715-.198 1.668.198 2.82.397 1.27.954 2.064 1.63 2.461.636.397 1.392.437 2.227.12.398-.12.795-.279 1.113-.517a8.433 8.433 0 0 0 1.034-1.032l-.358-1.073-2.426.795zm6.721-9.848l3.738-.675 2.187 12.072-3.777.675-2.148-12.072zm7.556 4.964c-.08-1.986.438-3.574 1.551-4.725 1.074-1.112 2.625-1.708 4.613-1.787 2.068-.04 3.658.476 4.772 1.548 1.153 1.073 1.75 2.581 1.79 4.567.04 1.43-.198 2.62-.637 3.534-.477.913-1.153 1.668-2.028 2.184-.915.556-2.068.834-3.42.875-1.392 0-2.544-.16-3.46-.596-.914-.397-1.67-1.072-2.266-2.025-.596-.954-.875-2.145-.914-3.575h-.001zm3.778-.08c.04 1.232.278 2.146.755 2.661.478.516 1.114.755 1.91.755.794 0 1.43-.279 1.868-.834.438-.556.637-1.51.597-2.86 0-1.19-.279-2.025-.756-2.54-.477-.514-1.113-.754-1.909-.754-.795.04-1.392.318-1.829.874-.476.554-.675 1.468-.635 2.699h-.001zm24.137 7.028l-4.175-1.152-1.112 1.749-3.738-1.033 7.795-10.562 4.016 1.153 1.074 13.064-3.857-1.112-.003-2.107zm-.079-2.78l-.08-4.606-2.505 3.891 2.585.715zm1.63-10.8l2.824.793-3.301 1.668-1.59-.435 2.067-2.027zm7.914 5.876l3.46 1.589-3.816 8.42 5.409 2.461-1.233 2.74-8.868-4.01 5.048-11.2zm12.049 18.783l-.676 1.985 3.264 2.304 3.38-12.667-3.42-2.422-10.897 7.345 3.182 2.224 1.67-1.27 3.497 2.5zm.915-2.66l-2.227-1.55 3.659-2.819-1.432 4.368zm11.057-1.032l3.459 3.612-4.096 6.552 6.761-3.772 3.42 3.612-8.908 8.458-2.106-2.221 6.76-6.473-8.43 4.726-1.949-2.025 5.13-8.18-6.76 6.432-2.148-2.224 8.867-8.497zm6.681 16.68c-1.233.754-2.149 1.587-2.665 2.54-.557.952-.795 1.945-.755 2.937.079 1.033.477 2.145 1.153 3.336.676 1.151 1.471 2.025 2.386 2.581.875.516 1.869.755 2.903.755 1.034-.08 2.148-.437 3.42-1.152 1.71-.993 2.783-2.224 3.181-3.733.398-1.509.08-3.137-.954-4.924-.994-1.707-2.227-2.78-3.778-3.217-1.511-.396-3.141-.078-4.891.875v.001zm1.869 3.295c1.113-.596 1.988-.875 2.704-.715.676.12 1.232.516 1.63 1.191.398.675.478 1.35.239 2.026-.239.675-.835 1.31-1.83 1.906-1.193.675-2.148.953-2.823.833-.676-.12-1.233-.556-1.63-1.27-.398-.675-.478-1.35-.239-2.025.238-.677.876-1.312 1.949-1.947zM48.836 145.205l3.222 2.303-2.903 8.776 7.356-5.599 3.141 2.223-10.856 7.346-3.34-2.383 3.38-12.666zM61.8 164.622l-.278 2.065 3.658 1.63.795-13.064-3.777-1.708-9.266 9.331 3.54 1.588 1.39-1.588 3.938 1.746zm.358-2.78l-2.466-1.072 3.023-3.495-.557 4.567zm8.111-4.804l3.659.833-2.108 9.054 5.806 1.35-.716 2.939-9.464-2.224 2.823-11.952zm11.055 2.382l3.818.437-1.471 12.192-3.778-.437 1.431-12.192zm5.886.914l3.54-.12 4.811 6.633-.197-6.791 3.579-.119.397 12.27-3.579.119-4.812-6.591.239 6.75-3.58.119-.398-12.27zm13.044-.437l3.7-.873.954 4.169 4.057-.913-.955-4.169 3.699-.875 2.783 11.952-3.738.875-1.113-4.844-4.057.913 1.153 4.844-3.698.875-2.785-11.954zm14.833 2.898c.557 1.311 1.312 2.264 2.227 2.899.915.636 1.869.993 2.903.993.994.04 2.108-.238 3.38-.794 1.233-.556 2.187-1.27 2.784-2.105.636-.834.994-1.787 1.034-2.819.079-1.033-.198-2.224-.795-3.534-.796-1.787-1.949-2.939-3.381-3.495-1.471-.556-3.141-.397-5.01.437-1.83.834-2.983 1.986-3.579 3.455-.556 1.47-.397 3.138.438 4.964l-.001-.001zm3.46-1.548c-.517-1.152-.676-2.065-.477-2.74.197-.715.636-1.192 1.352-1.509.716-.318 1.392-.358 2.068-.04.636.278 1.193.953 1.67 2.025.557 1.231.755 2.185.557 2.859-.199.675-.637 1.152-1.392 1.509-.716.318-1.432.318-2.068.04-.636-.317-1.232-1.032-1.71-2.143v-.001zm10.538-2.383l2.784-2.263c.398.397.795.675 1.193.794.596.159 1.193.04 1.789-.397.438-.318.676-.635.796-1.032.079-.358 0-.715-.159-.953a1.135 1.135 0 0 0-.836-.477c-.397-.04-1.033.159-2.028.556-1.551.675-2.783.993-3.738.875-.954-.08-1.71-.516-2.266-1.27a3.426 3.426 0 0 1-.597-1.787c-.007-.719.2-1.424.597-2.025.397-.675 1.113-1.43 2.148-2.145 1.271-.953 2.425-1.39 3.42-1.39 1.033 0 1.948.437 2.823 1.39l-2.744 2.263c-.437-.397-.835-.635-1.193-.635-.437-.04-.835.119-1.272.437-.358.238-.557.516-.636.794a.847.847 0 0 0 .119.754c.119.159.279.239.517.278.239 0 .676-.119 1.312-.397 1.551-.675 2.744-1.072 3.5-1.191.795-.119 1.511-.08 2.108.198.556.238 1.034.635 1.431 1.191.477.635.716 1.35.756 2.145.039.795-.159 1.549-.597 2.263-.437.755-1.153 1.469-2.107 2.184-1.671 1.192-3.102 1.708-4.216 1.549-1.113-.199-2.108-.755-2.903-1.708l-.001-.001zM17.976 89.293c1.869 0 3.38 1.509 3.38 3.415 0 1.827-1.511 3.375-3.38 3.375-1.87 0-3.38-1.548-3.38-3.375 0-1.906 1.511-3.415 3.38-3.415zM164.876 89.293c1.87 0 3.42 1.509 3.42 3.415 0 1.827-1.55 3.375-3.42 3.375-1.869 0-3.38-1.548-3.38-3.375 0-1.906 1.511-3.415 3.38-3.415z",
        fill: "#fff"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
        id: "a",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#fff",
          d: "M0 0h185v184H0z"
        })
      })
    })]
  }));
};

Header_AlamoValinhosLogo.defaultProps = {
  width: "185",
  height: "184",
  viewBox: "0 0 185 184",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

const Header = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderContainer, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_awesome_reveal_["Bounce"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_AlamoValinhosLogo, {})
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_TopBar, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_NavBar, {})]
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Mobile_Toggle, {})]
});

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__("+wZM");

// EXTERNAL MODULE: ./src/typography/Heading/index.tsx + 1 modules
var Heading = __webpack_require__("9nMZ");

// EXTERNAL MODULE: ./src/typography/Paragraph/index.tsx + 1 modules
var Paragraph = __webpack_require__("xwVD");

// EXTERNAL MODULE: ./public/assets/background-footer.png
var background_footer = __webpack_require__("NRvx");
var background_footer_default = /*#__PURE__*/__webpack_require__.n(background_footer);

// CONCATENATED MODULE: ./src/components/Footer/styles.ts



const FooterContainer = external_styled_components_default.a.footer.withConfig({
  displayName: "styles__FooterContainer",
  componentId: "sc-78s9li-0"
})(["background-color:", ";position:relative;height:600px;overflow:hidden;display:flex;h4 + h4{margin-top:4rem;}a{text-transform:uppercase;margin-top:2rem;font-weight:500;font-size:min(max(1.5rem,4vw),24px);&.linkVinhedo{color:", ";display:inline-block;position:relative;z-index:1;font-weight:700;transition:color 0.3s;&:hover{color:", ";}}}&:after{content:'';width:100%;height:100%;background:url(", ") no-repeat;background-size:contain;background-position:bottom right;position:absolute;bottom:-30px;right:0;}", "{&:after{width:calc(538px + (1000 - 538) * ((100vw - 768px) / (1920 - 768)));}}", "{a{font-size:calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));}}", "{.main-footer{margin:2rem 0;}}", "{ul,a{width:100%;text-align:center;}height:calc(585px + (840 - 585) * ((100vw - 320px) / (768 - 320)));}"], props => props.theme.colors.darkBlueTwo, props => props.theme.colors.lightBlue2, props => props.theme.colors.green, background_footer_default.a, Object(external_styled_breakpoints_["up"])('md'), Object(external_styled_breakpoints_["up"])('xs'), Object(external_styled_breakpoints_["down"])('md'), Object(external_styled_breakpoints_["down"])('sm'));
const styles_Items = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__Items",
  componentId: "sc-78s9li-1"
})(["list-style:none;position:relative;z-index:1;+ ul{margin-top:2rem;}"]);
const styles_Item = external_styled_components_default.a.li.withConfig({
  displayName: "styles__Item",
  componentId: "sc-78s9li-2"
})(["width:100%;", "{p{font-size:calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));}}"], Object(external_styled_breakpoints_["up"])('xs'));
const Social = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Social",
  componentId: "sc-78s9li-3"
})(["position:absolute;bottom:3vw;right:0;z-index:1;background-color:", ";border-radius:83px 0 0 83px;padding-top:29px;padding-left:64px;padding-bottom:29px;padding-right:32px;display:flex;align-items:center;span{font-size:calc(13px + (28 - 13) * ((100vw - 320px) / (1920 - 320)));color:", ";font-weight:400;margin:0 1rem 0 0.5rem;}a{background-color:", ";font-size:calc(15px + (24 - 15) * ((100vw - 320px) / (1920 - 320)));text-transform:none;color:", ";text-decoration:none;padding-top:calc(5px + (8 - 5) * ((100vw - 320px) / (1920 - 320)));padding-bottom:calc(5px + (8 - 5) * ((100vw - 320px) / (1920 - 320)));padding-left:calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));padding-right:calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));border-radius:61px;margin-top:0;transition:background-color 0.3s;&:hover{background-color:", ";}}.social{display:flex;}", "{padding-top:calc(10px + (28 - 10) * ((100vw - 320px) / (768 - 320)));padding-bottom:calc(10px + (28 - 10) * ((100vw - 320px) / (768 - 320)));padding-left:calc(10px + (28 - 10) * ((100vw - 320px) / (768 - 320)));padding-right:calc(10px + (28 - 10) * ((100vw - 320px) / (768 - 320)));svg{width:calc(17px + (33 - 17) * ((100vw - 320px) / (768 - 320)));}span{margin:0 0.5rem 0 0.5rem;}}"], props => props.theme.colors.darkBlueThree, props => props.theme.colors.white, props => props.theme.colors.lightGreen, props => props.theme.colors.white, props => props.theme.colors.green, Object(external_styled_breakpoints_["down"])('sm'));
// CONCATENATED MODULE: ./src/components/Footer/index.tsx











const Footer = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterContainer, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
    column: true,
    alignIntemsStart: true,
    className: "main-footer",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Items, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Item, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
          titleColor: "#BAC529",
          titleSize: "xsmall",
          uppercase: true,
          children: "Unidade Valinhos"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Paragraph["a" /* default */], {
          paragraphColor: "#FFFFFF",
          size: "24px",
          children: ["Alameda Maria Tereza 3.700", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Dois C\xF3rregos \u2013 Valinhos SP", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "CEP 13278-181"]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Items, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Item, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
          titleColor: "#BAC529",
          titleSize: "xsmall",
          children: "Telefone:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph["a" /* default */], {
          paragraphColor: "#FFFFFF",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "tel:1935147373",
            children: "(19) 3514-7373"
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Items, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Item, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
          titleColor: "#BAC529",
          titleSize: "xsmall",
          children: "WhatsApp:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paragraph["a" /* default */], {
          paragraphColor: "#FFFFFF",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            rel: "noreferrer",
            target: "_blank",
            href: "https://api.whatsapp.com/send?phone=5519989028282",
            children: "(19) 9 8202-8282"
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/vinhedo",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: "linkVinhedo",
        children: "Unidade Vinhedo"
      })
    })]
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Social, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_awesome_reveal_["Fade"], {
      direction: "right",
      triggerOnce: true,
      className: "social",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(si_["SiInstagram"], {
        size: 33,
        color: "#FFFFFF"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: "@colegioalamovalinhos"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        rel: "noreferrer",
        target: "_blank",
        href: "https://www.instagram.com/colegioalamovalinhos/",
        children: "Seguir"
      })]
    })
  })]
});

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./src/pages/_app.tsx



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MyApp = ({
  Component,
  pageProps
}) => {
  const router = Object(client_router["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_styled_components_["ThemeProvider"], {
    theme: styles_theme,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(global, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps)), router.pathname !== '/404' && router.pathname !== '/contato' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Footer, {})]
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "kS/G":
/***/ (function(module, exports) {

module.exports = require("react-icons/gi");

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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

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

/***/ })

/******/ });