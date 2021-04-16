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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("MCgV");


/***/ }),

/***/ "5xq/":
/***/ (function(module, exports) {

module.exports = require("styled-breakpoints");

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

/***/ "MCgV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/lib/prismic.ts
var prismic = __webpack_require__("ZHf5");

// EXTERNAL MODULE: external "prismic-javascript"
var external_prismic_javascript_ = __webpack_require__("vNl1");
var external_prismic_javascript_default = /*#__PURE__*/__webpack_require__.n(external_prismic_javascript_);

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

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__("5xq/");

// CONCATENATED MODULE: ./src/styles/pages/college/gallery/styles.ts


const GalleryContainer = external_styled_components_default.a.section.withConfig({
  displayName: "styles__GalleryContainer",
  componentId: "sc-1czu8bd-0"
})(["padding-top:7rem;padding-bottom:4rem;background:linear-gradient(180deg,#f0f0f0 0%,rgba(238,238,238,0) 100%);"]);
const Tabs = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Tabs",
  componentId: "sc-1czu8bd-1"
})(["width:100%;padding-top:4rem;", "{padding-top:2rem;}"], Object(external_styled_breakpoints_["down"])('sm'));
const TabMenu = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__TabMenu",
  componentId: "sc-1czu8bd-2"
})(["display:flex;align-items:center;justify-content:center;list-style:none;border-bottom:1px solid ", ";width:100%;margin-bottom:4rem;li{font-size:calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)));color:", ";font-weight:bold;cursor:pointer;position:relative;width:20%;padding:10px;text-align:center;display:flex;justify-content:center;position:relative;&.active{&:after{background-color:", ";}}&:after{content:'';width:50%;height:calc(5px + (7 - 5) * ((100vw - 320px) / (1920 - 320)));background-color:transparent;position:absolute;bottom:0;margin:auto;display:flex;align-items:center;justify-content:center;transition:all 0.3s;}}", "{margin-bottom:2.5rem;}", "{li{width:100%;}}"], props => props.theme.colors.grayEleven, props => props.theme.colors.grayThree, props => props.theme.colors.lightGreen, Object(external_styled_breakpoints_["down"])('sm'), Object(external_styled_breakpoints_["down"])('xs'));
const TabContent = external_styled_components_default.a.div.withConfig({
  displayName: "styles__TabContent",
  componentId: "sc-1czu8bd-3"
})(["width:100%;max-width:930px;margin:auto;display:none;&.show{display:block;}"]);
const Thumbnails = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__Thumbnails",
  componentId: "sc-1czu8bd-4"
})(["display:flex;width:100%;.slick-slider{width:100%;.slick-list{margin:0 -10px;}.slick-track{.slick-slide{position:relative;> div{margin:0 calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));}}}.slick-next,.slick-prev{&:before{border-width:0 5.5px 5.5px 0;padding:calc(5px + (8 - 5) * ((100vw - 320px) / (1920 - 320)));}}.slick-prev{left:-5vw;}.slick-next{right:-5vw;}.slick-prev,.slick-next{z-index:12;&:before{content:'';display:inline-block;border-right:calc(4px + (5 - 4) * ((100vw - 320px) / (1920 - 320))) solid ", ";border-bottom:calc(4px + (5 - 4) * ((100vw - 320px) / (1920 - 320))) solid ", ";width:10px;height:10px;transition:all 0.3s;}&:hover{&:before{border-color:", ";}}}.slick-prev{&:before{transform:rotate(135deg);-webkit-transform:rotate(135deg);}}.slick-next{&:before{transform:rotate(-45deg);-webkit-transform:rotate(-45deg);}}}li{position:relative;cursor:pointer;display:flex !important;&:focus,&:active{outline:none;}.overlay{background-color:rgba(48,95,164,0.7);color:", ";font-weight:500;position:absolute;border-radius:calc(12px + (20 - 12) * ((100vw - 320px) / (1920 - 320)));top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transition:all 0.3s;}img{max-width:100%;height:auto;border-radius:calc(12px + (20 - 12) * ((100vw - 320px) / (1920 - 320)));}}.active{.overlay{opacity:1;visibility:visible;}}", "{.slick-prev,.slick-next{top:120%;margin:auto;left:0;right:0;}}"], props => props.theme.colors.lightGreen, props => props.theme.colors.lightGreen, props => props.theme.colors.lightGreen, props => props.theme.colors.white, Object(external_styled_breakpoints_["down"])('lg'));
const FeaturedImages = external_styled_components_default.a.div.withConfig({
  displayName: "styles__FeaturedImages",
  componentId: "sc-1czu8bd-5"
})(["display:none;margin-bottom:2rem;img{outline:none;}&.open{display:flex;}.slick-slider{width:100%;img{border-radius:calc(26px + (32 - 26) * ((100vw - 320px) / (1920 - 320)));height:auto;}.slick-next,.slick-prev{&:before{display:inline-block;border-right:5px solid ", ";border-bottom:5px solid ", ";width:10px;height:10px;}&:hover{&:before{border-width:0 5.5px 5.5px 0;}}}.slick-prev{left:5vw;}.slick-next{right:5vw;}.slick-prev,.slick-next{z-index:12;&:before{content:'';display:inline-block;border-right:calc(4px + (5 - 4) * ((100vw - 320px) / (1920 - 320))) solid ", ";border-bottom:calc(4px + (5 - 4) * ((100vw - 320px) / (1920 - 320))) solid ", ";width:calc(15px + (22 - 15) * ((100vw - 320px) / (1920 - 320)));height:calc(15px + (22 - 15) * ((100vw - 320px) / (1920 - 320)));transition:all 0.3s;}&:hover{&:before{border-color:", ";}}}.slick-prev{&:before{transform:rotate(135deg);-webkit-transform:rotate(135deg);}}.slick-next{&:before{transform:rotate(-45deg);-webkit-transform:rotate(-45deg);}}}", "{margin-bottom:1rem;}"], props => props.theme.colors.white, props => props.theme.colors.white, props => props.theme.colors.white, props => props.theme.colors.white, props => props.theme.colors.lightGreen, Object(external_styled_breakpoints_["down"])('md'));
const FeaturedVideo = external_styled_components_default.a.div.withConfig({
  displayName: "styles__FeaturedVideo",
  componentId: "sc-1czu8bd-6"
})(["display:none;margin-bottom:2rem;&.open{display:flex;}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden;&:before{content:'';display:block;padding-top:56.25%;}iframe{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;border-radius:calc(25px + (53 - 25) * ((100vw - 320px) / (1920 - 320)));}}"]);
// EXTERNAL MODULE: ./src/components/SEO/index.tsx
var SEO = __webpack_require__("6o60");

// CONCATENATED MODULE: ./src/pages/o-colegio/galeria.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const tabsMenu = [{
  id: 0,
  title: 'Fotos'
}, {
  id: 1,
  title: 'Vídeos'
}];
const galleryFeaturedImage = {
  dots: false,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  focusOnSelect: true,
  autoplay: true
};
const galleryThumbails = {
  dots: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  swipeToSlide: true,
  focusOnSelect: true,
  autoplay: false,
  responsive: [{
    breakpoint: 1024,
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

const Gallery = ({
  photos,
  videos
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
    0: active3,
    1: setActive3
  } = Object(external_react_["useState"])(0);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SEO["a" /* default */], {
      color: "#305FA4",
      title: "Galeria"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GalleryContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
        column: true,
        alignIntems: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading["a" /* default */], {
          titleSize: "medium",
          titleColor: "#001D7E",
          titleBorder: true,
          titleBorderColor: "blue",
          children: "Galeria"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Tabs, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TabMenu, {
            children: tabsMenu.map((tab, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: () => setActive(index),
              className: active === index ? 'active' : '',
              children: tab.title
            }, index))
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TabContent, {
            className: active === 0 ? 'show' : '',
            children: [photos.map((photo, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(FeaturedImages, {
              className: active2 === index ? 'open' : '',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_slick_default.a, _objectSpread(_objectSpread({}, galleryFeaturedImage), {}, {
                children: photo.data.images.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: item.image.url,
                  alt: item.image.alt,
                  width: item.image.dimensions.width,
                  height: item.image.dimensions.height
                }, index))
              }))
            }, index)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Thumbnails, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_slick_default.a, _objectSpread(_objectSpread({}, galleryThumbails), {}, {
                children: photos.map((photo, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  onClick: () => setActive2(index),
                  className: active2 === index ? 'active' : '',
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: photo.data.cover_image.url,
                    alt: photo.data.cover_image.alt,
                    width: photo.data.cover_image.dimensions.width,
                    height: photo.data.cover_image.dimensions.height
                  }, index), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "overlay",
                    dangerouslySetInnerHTML: {
                      __html: photo.data.title.map(item => item.text)
                    }
                  })]
                }, photo.id))
              }))
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TabContent, {
            className: active === 1 ? 'show' : '',
            children: [videos.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(FeaturedVideo, {
              className: active3 === index ? 'open' : '',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "embed-responsive",
                dangerouslySetInnerHTML: {
                  __html: item.data.video.html
                }
              }, index)
            }, index)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Thumbnails, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_slick_default.a, _objectSpread(_objectSpread({}, galleryThumbails), {}, {
                children: videos.map((video, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  onClick: () => setActive3(index),
                  className: active3 === index ? 'active' : '',
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: video.data.video.thumbnail_url.replace('hqdefault', 'maxresdefault'),
                    alt: video.data.video.title,
                    width: "215",
                    height: "118"
                  }, index), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "overlay"
                  })]
                }, video.id))
              }))
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var galeria = __webpack_exports__["default"] = (Gallery);
const getStaticProps = async () => {
  const photos = await Object(prismic["a" /* client */])().query(external_prismic_javascript_default.a.Predicates.at('document.type', 'photos'));
  const videos = await Object(prismic["a" /* client */])().query(external_prismic_javascript_default.a.Predicates.at('document.type', 'videos'));
  return {
    props: {
      photos: photos.results,
      videos: videos.results
    }
  };
};

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "TOlL":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAAHCAYAAABnVvNQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgB7dSxDcIwEAXQf2aJlB7BbMIAJGKDwAhsQDo6IiJq1qC8EaBjCQxXQUWTs3XNvSZKIn3pS98miNRdehC2wDvCufkYOQ88dSMKMNplzQ7fbErteYMQTnCulIwdT+sDFMx3WbODZAf50cO5kgL0m7LeZc0Okh3kkeBcWRF61ruM0PvXIcrBozucK4uhZr7Lmh04gF4DnCuJsn5T1rus2UGyF0++3prl6iFvUT41cG42ueEJex7bI5Tsdlmzwy/7AxC/Vrk4UqhCAAAAAElFTkSuQmCC"

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });