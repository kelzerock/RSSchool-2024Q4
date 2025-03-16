/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! tailwindcss v4.0.12 | MIT License | https://tailwindcss.com */
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-amber-900: oklch(0.414 0.112 45.904);
    --color-emerald-300: oklch(0.845 0.143 164.978);
    --color-emerald-400: oklch(0.765 0.177 163.223);
    --color-emerald-600: oklch(0.596 0.145 163.225);
    --color-emerald-700: oklch(0.508 0.118 165.612);
    --color-emerald-800: oklch(0.432 0.095 166.913);
    --color-emerald-900: oklch(0.378 0.077 168.94);
    --color-teal-200: oklch(0.91 0.096 180.426);
    --color-teal-600: oklch(0.6 0.118 184.704);
    --color-teal-700: oklch(0.511 0.096 186.391);
    --color-teal-800: oklch(0.437 0.078 188.216);
    --color-indigo-300: oklch(0.785 0.115 274.713);
    --color-indigo-500: oklch(0.585 0.233 277.117);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-2xl: 42rem;
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --font-weight-bold: 700;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --default-font-family: var(--font-sans);
    --default-font-feature-settings: var(--font-sans--font-feature-settings);
    --default-font-variation-settings: var(
      --font-sans--font-variation-settings
    );
    --default-mono-font-family: var(--font-mono);
    --default-mono-font-feature-settings: var(
      --font-mono--font-feature-settings
    );
    --default-mono-font-variation-settings: var(
      --font-mono--font-variation-settings
    );
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var( --default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var( --default-font-variation-settings, normal );
    -webkit-tap-highlight-color: transparent;
  }
  body {
    line-height: inherit;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var( --default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace );
    font-feature-settings: var( --default-mono-font-feature-settings, normal );
    font-variation-settings: var( --default-mono-font-variation-settings, normal );
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
    color: color-mix(in oklab, currentColor 50%, transparent);
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .absolute {
    position: absolute;
  }
  .static {
    position: static;
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .-m-px {
    margin: -1px;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .h-\\[150px\\] {
    height: 150px;
  }
  .h-full {
    height: 100%;
  }
  .h-min {
    height: min-content;
  }
  .h-px {
    height: 1px;
  }
  .h-screen {
    height: 100vh;
  }
  .w-5\\/6 {
    width: calc(5/6 * 100%);
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-2xl {
    max-width: var(--container-2xl);
  }
  .grow {
    flex-grow: 1;
  }
  .resize-none {
    resize: none;
  }
  .grid-cols-\\[40px_1fr_100px_150px\\] {
    grid-template-columns: 40px 1fr 100px 150px;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-x-1 {
    column-gap: calc(var(--spacing) * 1);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-3 {
    border-style: var(--tw-border-style);
    border-width: 3px;
  }
  .border-black {
    border-color: var(--color-black);
  }
  .border-emerald-600 {
    border-color: var(--color-emerald-600);
  }
  .border-teal-800 {
    border-color: var(--color-teal-800);
  }
  .bg-amber-900\\/70 {
    background-color: color-mix(in oklab, var(--color-amber-900) 70%, transparent);
  }
  .bg-emerald-300 {
    background-color: var(--color-emerald-300);
  }
  .bg-emerald-400 {
    background-color: var(--color-emerald-400);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-emerald-800 {
    background-color: var(--color-emerald-800);
  }
  .bg-indigo-300 {
    background-color: var(--color-indigo-300);
  }
  .bg-teal-600 {
    background-color: var(--color-teal-600);
  }
  .bg-teal-700 {
    background-color: var(--color-teal-700);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-\\[0\\] {
    padding-inline: 0;
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .py-\\[0\\] {
    padding-block: 0;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-emerald-900 {
    color: var(--color-emerald-900);
  }
  .text-teal-200 {
    color: var(--color-teal-200);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .underline {
    text-decoration-line: underline;
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .hover\\:cursor-pointer {
    &:hover {
      @media (hover: hover) {
        cursor: pointer;
      }
    }
  }
  .hover\\:border-teal-700 {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-teal-700);
      }
    }
  }
  .hover\\:bg-emerald-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-emerald-700);
      }
    }
  }
  .hover\\:bg-indigo-500 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-indigo-500);
      }
    }
  }
  .hover\\:bg-teal-800 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-teal-800);
      }
    }
  }
}
body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: rgb(94 233 181);
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable-next-line import-notation */\n@import \"tailwindcss\";\n\nbody {\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n\n  background-color: rgb(94 233 181);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/enums/dom-elements.ts":
/*!***********************************!*\
  !*** ./src/enums/dom-elements.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMElements: () => (/* binding */ DOMElements)
/* harmony export */ });
var DOMElements;
(function (DOMElements) {
    DOMElements["listOfOption"] = "listOfOption";
})(DOMElements || (DOMElements = {}));


/***/ }),

/***/ "./src/pages/404-page/404-page.ts":
/*!****************************************!*\
  !*** ./src/pages/404-page/404-page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create404page: () => (/* binding */ create404page)
/* harmony export */ });
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router/router */ "./src/router/router.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/styles */ "./src/styles/styles.ts");
/* harmony import */ var _utils_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/node */ "./src/utils/node.ts");
/* harmony import */ var _utils_remove_all_children__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/remove-all-children */ "./src/utils/remove-all-children.ts");




var create404page = function () {
    (0,_utils_remove_all_children__WEBPACK_IMPORTED_MODULE_3__.removeAllChildren)(document.body);
    var template = (0,_utils_node__WEBPACK_IMPORTED_MODULE_2__.createNode)({
        tag: "div",
        parent: document.body,
        className: "w-full h-full flex flex-col justify-center items-center",
    });
    (0,_utils_node__WEBPACK_IMPORTED_MODULE_2__.createNode)({
        tag: "h1",
        parent: template,
        className: _styles_styles__WEBPACK_IMPORTED_MODULE_1__.visuallyHidden,
        text: "decision making tool",
    });
    (0,_utils_node__WEBPACK_IMPORTED_MODULE_2__.createNode)({
        tag: "h2",
        parent: template,
        text: "Sorry, this page doesn't exist. You will be redirected to the main page.",
        className: "text-3xl text-center",
    });
    var link = (0,_utils_node__WEBPACK_IMPORTED_MODULE_2__.createNode)({
        tag: "a",
        parent: template,
        text: "main page",
        className: "font-bold mt-4  text-xl underline uppercase text-emerald-900",
        attributes: [{ name: "href", value: "/" }],
    });
    var timeoutID = setTimeout(function () {
        globalThis.history.pushState({}, "", "/");
        (0,_router_router__WEBPACK_IMPORTED_MODULE_0__.handleLocation)();
    }, 5000);
    link.addEventListener("click", function (event) {
        event.preventDefault();
        clearTimeout(timeoutID);
        globalThis.history.pushState({}, "", "/");
        (0,_router_router__WEBPACK_IMPORTED_MODULE_0__.handleLocation)();
    });
};


/***/ }),

/***/ "./src/pages/decision-page/decision-page.ts":
/*!**************************************************!*\
  !*** ./src/pages/decision-page/decision-page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDecisionPage: () => (/* binding */ createDecisionPage)
/* harmony export */ });
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/styles */ "./src/styles/styles.ts");
/* harmony import */ var _utils_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/node */ "./src/utils/node.ts");
/* harmony import */ var _utils_remove_all_children__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/remove-all-children */ "./src/utils/remove-all-children.ts");



var createDecisionPage = function () {
    (0,_utils_remove_all_children__WEBPACK_IMPORTED_MODULE_2__.removeAllChildren)(document.body);
    var wrapper = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "div",
        className: _styles_styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyles,
        parent: document.body,
    });
    (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "h1",
        className: "text-3xl font-bold text-emerald-900",
        parent: wrapper,
        text: "Decision making tool",
    });
    var buttonsBlock = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "div",
        className: "",
        parent: wrapper,
    });
    var buttonPlay = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "button",
        className: _styles_styles__WEBPACK_IMPORTED_MODULE_0__.simpleButton,
        parent: wrapper,
        text: "start",
    });
    var informationDisplay = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "div",
        className: "",
        parent: wrapper,
        text: "for start - push the play button",
    });
    var canvasBlock = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "div",
        parent: wrapper,
        className: "",
    });
    console.log(buttonsBlock, buttonPlay, informationDisplay, canvasBlock);
};


/***/ }),

/***/ "./src/pages/main-page/add-option.ts":
/*!*******************************************!*\
  !*** ./src/pages/main-page/add-option.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOption: () => (/* binding */ addOption)
/* harmony export */ });
/* harmony import */ var _state_application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/application-state */ "./src/state/application-state.ts");
/* harmony import */ var _utils_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/node */ "./src/utils/node.ts");
/* harmony import */ var _handle_add_option_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-add-option-input */ "./src/pages/main-page/handle-add-option-input.ts");
/* harmony import */ var _handle_click__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handle-click */ "./src/pages/main-page/handle-click.ts");




var addOption = function (option, parent) {
    var styleLiElement = "bg-emerald-400 grid grid-cols-[40px_1fr_100px_150px] gap-x-1 px-1 py-1 rounded-sm", styleSpanElement = "bg-emerald-600 rounded-md flex items-center justify-center text-white", styleInput = "bg-emerald-800 text-white text-right px-2 py-1 rounded-sm outline-none", styleButton = "bg-emerald-600 text-white rounded-md hover:bg-emerald-700 hover:cursor-pointer";
    var itemLi = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({ tag: "li", className: styleLiElement, parent: parent });
    (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "span",
        className: styleSpanElement,
        parent: itemLi,
        text: "#".concat(option.index),
    });
    var inputDescription = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "input",
        className: styleInput,
        parent: itemLi,
        attributes: [{ name: "value", value: option.description }],
    });
    if (inputDescription instanceof HTMLInputElement) {
        inputDescription.addEventListener("input", function () {
            (0,_handle_add_option_input__WEBPACK_IMPORTED_MODULE_2__.handleAddOptionInput)(inputDescription, option.index, "description");
        });
    }
    var inputWeight = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "input",
        className: styleInput,
        parent: itemLi,
        attributes: [{ name: "value", value: option.weight }],
    });
    if (inputWeight instanceof HTMLInputElement) {
        inputWeight.addEventListener("input", function () {
            (0,_handle_add_option_input__WEBPACK_IMPORTED_MODULE_2__.handleAddOptionInputOnlyNumber)(inputWeight, option.index, "weight");
        });
    }
    inputWeight.setAttribute("value", option.weight);
    var buttonDeleteOption = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "button",
        className: styleButton,
        parent: itemLi,
        text: "delete",
    });
    buttonDeleteOption.addEventListener("click", function () {
        (0,_handle_click__WEBPACK_IMPORTED_MODULE_3__.handleDeleteOption)(_state_application_state__WEBPACK_IMPORTED_MODULE_0__.appState, itemLi, option.index);
    });
};



/***/ }),

/***/ "./src/pages/main-page/handle-add-option-input.ts":
/*!********************************************************!*\
  !*** ./src/pages/main-page/handle-add-option-input.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAddOptionInput: () => (/* binding */ handleAddOptionInput),
/* harmony export */   handleAddOptionInputOnlyNumber: () => (/* binding */ handleAddOptionInputOnlyNumber)
/* harmony export */ });
/* harmony import */ var _state_application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/application-state */ "./src/state/application-state.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var handleAddOptionInput = function (input, index, info) {
    _state_application_state__WEBPACK_IMPORTED_MODULE_0__.appState.options = _state_application_state__WEBPACK_IMPORTED_MODULE_0__.appState.options.map(function (option) {
        if (option.index === index) {
            return info === "description"
                ? __assign(__assign({}, option), { description: input.value }) : __assign(__assign({}, option), { weight: input.value });
        }
        return option;
    });
};
var handleAddOptionInputOnlyNumber = function (input, index, info) {
    var newValue = input.value.replace(/[^0-9.]/g, "");
    var parts = newValue.split(".");
    if (parts.length > 1) {
        newValue = parts.shift() + "." + parts.join("");
    }
    input.value = newValue;
    handleAddOptionInput(input, index, info);
};


/***/ }),

/***/ "./src/pages/main-page/handle-click.ts":
/*!*********************************************!*\
  !*** ./src/pages/main-page/handle-click.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAddOption: () => (/* binding */ handleAddOption),
/* harmony export */   handleClearList: () => (/* binding */ handleClearList),
/* harmony export */   handleDeleteOption: () => (/* binding */ handleDeleteOption),
/* harmony export */   handleLoadFileWithOptions: () => (/* binding */ handleLoadFileWithOptions),
/* harmony export */   handleSafeOption: () => (/* binding */ handleSafeOption),
/* harmony export */   handleStart: () => (/* binding */ handleStart)
/* harmony export */ });
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router/router */ "./src/router/router.ts");
/* harmony import */ var _utils_is_ready_to_make_decision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is-ready-to-make-decision */ "./src/utils/is-ready-to-make-decision.ts");
/* harmony import */ var _utils_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/node */ "./src/utils/node.ts");
/* harmony import */ var _add_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-option */ "./src/pages/main-page/add-option.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page */ "./src/pages/main-page/main-page.ts");
/* harmony import */ var _modal_with_message_modal_with_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-with-message/modal-with.message */ "./src/pages/main-page/modal-with-message/modal-with.message.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};






var handleAddOption = function (state, parent) {
    var index = ++state.lastIndex;
    var newOption = { index: index, description: "", weight: "" };
    state.options = __spreadArray(__spreadArray([], state.options, true), [newOption], false);
    (0,_add_option__WEBPACK_IMPORTED_MODULE_3__.addOption)(newOption, parent);
};
var handleDeleteOption = function (state, target, index) {
    while (target.lastChild) {
        target.lastChild.remove();
    }
    target.remove();
    state.options = state.options.filter(function (element) { return element.index !== index; });
    if (state.options.length === 0) {
        state.lastIndex = 0;
    }
};
var handleClearList = function (state, parent) {
    state.options = [];
    state.lastIndex = 0;
    while (parent.lastChild) {
        parent.lastChild.remove();
    }
};
var handleSafeOption = function (state) {
    var link = document.createElement("a");
    link.download = "state.json";
    var blob = new Blob([JSON.stringify(state)], { type: "application/json" });
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
};
var handleLoadFileWithOptions = function (state) { return __awaiter(void 0, void 0, void 0, function () {
    var input;
    return __generator(this, function (_a) {
        input = (0,_utils_node__WEBPACK_IMPORTED_MODULE_2__.createNode)({
            tag: "input",
            attributes: [
                { name: "type", value: "file" },
                { name: "accept", value: "application/json" },
            ],
        });
        input.click();
        input.addEventListener("change", function (event) { return __awaiter(void 0, void 0, void 0, function () {
            var file, content, parsedData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.target instanceof HTMLInputElement && event.target.files)) return [3 /*break*/, 4];
                        file = event.target.files[0];
                        if (!file) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, file.text()];
                    case 2:
                        content = _a.sent();
                        parsedData = void 0;
                        try {
                            parsedData = JSON.parse(content);
                        }
                        catch (error) {
                            (0,_modal_with_message_modal_with_message__WEBPACK_IMPORTED_MODULE_5__.modalWithMessage)("Parsing completed with mistake!");
                            console.error("Ошибка парсинга JSON:", error);
                            return [2 /*return*/];
                        }
                        if (isAppStateDataCorrect(parsedData)) {
                            state.lastIndex = parsedData.lastIndex;
                            state.options = parsedData.options;
                            (0,_main_page__WEBPACK_IMPORTED_MODULE_4__.createMainPage)();
                        }
                        else {
                            (0,_modal_with_message_modal_with_message__WEBPACK_IMPORTED_MODULE_5__.modalWithMessage)("Be careful! Loaded data was incorrect!");
                            console.error("Данные некорректны");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        (0,_modal_with_message_modal_with_message__WEBPACK_IMPORTED_MODULE_5__.modalWithMessage)("Mistake in process to read file!");
                        console.error("Ошибка при чтении файла:", error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
var isAppStateDataCorrect = function (data) {
    if (typeof data === "object" &&
        data !== null &&
        "lastIndex" in data &&
        typeof data.lastIndex === "number" &&
        "options" in data &&
        Array.isArray(data.options) &&
        data.options.every(function (option) {
            return option &&
                typeof option.index === "number" &&
                typeof option.description === "string" &&
                typeof option.weight === "string";
        })) {
        return true;
    }
    return false;
};
var handleStart = function (state) {
    if ((0,_utils_is_ready_to_make_decision__WEBPACK_IMPORTED_MODULE_1__.isReadyToMakeDecision)(state)) {
        globalThis.history.pushState({}, "", "/decision");
        (0,_router_router__WEBPACK_IMPORTED_MODULE_0__.handleLocation)();
    }
    else {
        var message = "Please add at least 2 valid options.\n    An option is considered valid if its title is not empty and its weight is greater than 0";
        (0,_modal_with_message_modal_with_message__WEBPACK_IMPORTED_MODULE_5__.modalWithMessage)(message);
    }
};


/***/ }),

/***/ "./src/pages/main-page/main-page.ts":
/*!******************************************!*\
  !*** ./src/pages/main-page/main-page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMainPage: () => (/* binding */ createMainPage)
/* harmony export */ });
/* harmony import */ var _enums_dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/dom-elements */ "./src/enums/dom-elements.ts");
/* harmony import */ var _state_application_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/application-state */ "./src/state/application-state.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/styles */ "./src/styles/styles.ts");
/* harmony import */ var _utils_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/node */ "./src/utils/node.ts");
/* harmony import */ var _utils_remove_all_children__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/remove-all-children */ "./src/utils/remove-all-children.ts");
/* harmony import */ var _modal_open_modal_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/open-modal-window */ "./src/pages/modal/open-modal-window.ts");
/* harmony import */ var _add_option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-option */ "./src/pages/main-page/add-option.ts");
/* harmony import */ var _handle_click__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handle-click */ "./src/pages/main-page/handle-click.ts");
/* harmony import */ var _modal_past_options_template_for_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-past-options/template-for-modal */ "./src/pages/main-page/modal-past-options/template-for-modal.ts");









var buttonStyle = "bg-indigo-300 border rounded-md border-black px-5 py-1 hover:cursor-pointer hover:bg-indigo-500 w-5/6";
var createMainPage = function () {
    (0,_utils_remove_all_children__WEBPACK_IMPORTED_MODULE_4__.removeAllChildren)(document.body);
    var wrapper = (0,_utils_node__WEBPACK_IMPORTED_MODULE_3__.createNode)({
        tag: "div",
        className: _styles_styles__WEBPACK_IMPORTED_MODULE_2__.wrapperStyles,
        parent: document.body,
    });
    (0,_utils_node__WEBPACK_IMPORTED_MODULE_3__.createNode)({
        tag: "h1",
        className: "text-3xl font-bold text-emerald-900",
        parent: wrapper,
        text: "Decision making tool",
    });
    var listOfOption = (0,_utils_node__WEBPACK_IMPORTED_MODULE_3__.createNode)({
        tag: "ul",
        className: "flex flex-col gap-y-2 py-1 px-3",
        parent: wrapper,
    });
    _state_application_state__WEBPACK_IMPORTED_MODULE_1__.appState.options.forEach(function (option) {
        (0,_add_option__WEBPACK_IMPORTED_MODULE_6__.addOption)(option, listOfOption);
    });
    var buttonAddOption = (0,_utils_node__WEBPACK_IMPORTED_MODULE_3__.createNode)({
        tag: "button",
        className: buttonStyle,
        parent: wrapper,
        text: "add option",
    });
    buttonAddOption.addEventListener("click", function () {
        return (0,_handle_click__WEBPACK_IMPORTED_MODULE_7__.handleAddOption)(_state_application_state__WEBPACK_IMPORTED_MODULE_1__.appState, listOfOption);
    });
    var buttonPastList = (0,_utils_node__WEBPACK_IMPORTED_MODULE_3__.createNode)({
        tag: "button",
        className: buttonStyle,
        parent: wrapper,
        text: "past list",
    });
    buttonPastList.addEventListener("click", function () {
        (0,_modal_open_modal_window__WEBPACK_IMPORTED_MODULE_5__.openModalWindow)((0,_modal_past_options_template_for_modal__WEBPACK_IMPORTED_MODULE_8__.templateForModal)());
    });
    var buttonClearList = (0,_utils_node__WEBPACK_IMPORTED_MODULE_3__.createNode)({
        tag: "button",
        className: buttonStyle,
        parent: wrapper,
        text: "clear list",
    });
    buttonClearList.addEventListener("click", function () {
        (0,_handle_click__WEBPACK_IMPORTED_MODULE_7__.handleClearList)(_state_application_state__WEBPACK_IMPORTED_MODULE_1__.appState, listOfOption);
    });
    var buttonSafeListToFile = (0,_utils_node__WEBPACK_IMPORTED_MODULE_3__.createNode)({
        tag: "button",
        className: buttonStyle,
        parent: wrapper,
        text: "safe list to file",
    });
    buttonSafeListToFile.addEventListener("click", function () {
        (0,_handle_click__WEBPACK_IMPORTED_MODULE_7__.handleSafeOption)(_state_application_state__WEBPACK_IMPORTED_MODULE_1__.appState);
    });
    var buttonLoadListFromFile = (0,_utils_node__WEBPACK_IMPORTED_MODULE_3__.createNode)({
        tag: "button",
        className: buttonStyle,
        parent: wrapper,
        text: "load list from file",
    });
    buttonLoadListFromFile.addEventListener("click", function () {
        return (0,_handle_click__WEBPACK_IMPORTED_MODULE_7__.handleLoadFileWithOptions)(_state_application_state__WEBPACK_IMPORTED_MODULE_1__.appState);
    });
    var buttonStart = (0,_utils_node__WEBPACK_IMPORTED_MODULE_3__.createNode)({
        tag: "button",
        className: buttonStyle,
        parent: wrapper,
        text: "start",
    });
    buttonStart.addEventListener("click", function () { return (0,_handle_click__WEBPACK_IMPORTED_MODULE_7__.handleStart)(_state_application_state__WEBPACK_IMPORTED_MODULE_1__.appState); });
    _state_application_state__WEBPACK_IMPORTED_MODULE_1__.appState.elements[_enums_dom_elements__WEBPACK_IMPORTED_MODULE_0__.DOMElements.listOfOption] = listOfOption;
};


/***/ }),

/***/ "./src/pages/main-page/modal-past-options/handle-click-past-option.ts":
/*!****************************************************************************!*\
  !*** ./src/pages/main-page/modal-past-options/handle-click-past-option.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleClickPastOption: () => (/* binding */ handleClickPastOption)
/* harmony export */ });
/* harmony import */ var _enums_dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enums/dom-elements */ "./src/enums/dom-elements.ts");
/* harmony import */ var _add_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-option */ "./src/pages/main-page/add-option.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


var handleClickPastOption = function (value, state) {
    var arrayWithValues = value.split("\n");
    var arrayWithCorrectValue = [];
    arrayWithValues.forEach(function (value) {
        var indexOfLastComma = value.lastIndexOf(",");
        if (indexOfLastComma !== -1) {
            var partWithNumber = value.slice(indexOfLastComma + 1).trim();
            if (!Number.isNaN(Number.parseFloat(partWithNumber)) &&
                partWithNumber.split(".").length <= 2) {
                arrayWithCorrectValue.push({
                    description: value.slice(0, indexOfLastComma),
                    weight: partWithNumber,
                    index: ++state.lastIndex,
                });
            }
        }
    });
    arrayWithCorrectValue.forEach(function (option) {
        state.options = __spreadArray(__spreadArray([], state.options, true), [option], false);
        (0,_add_option__WEBPACK_IMPORTED_MODULE_1__.addOption)(option, state.elements[_enums_dom_elements__WEBPACK_IMPORTED_MODULE_0__.DOMElements.listOfOption]);
    });
};


/***/ }),

/***/ "./src/pages/main-page/modal-past-options/template-for-modal.ts":
/*!**********************************************************************!*\
  !*** ./src/pages/main-page/modal-past-options/template-for-modal.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   templateForModal: () => (/* binding */ templateForModal)
/* harmony export */ });
/* harmony import */ var _state_application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/application-state */ "./src/state/application-state.ts");
/* harmony import */ var _utils_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/node */ "./src/utils/node.ts");
/* harmony import */ var _handle_click_past_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-click-past-option */ "./src/pages/main-page/modal-past-options/handle-click-past-option.ts");



var stylesForModalButton = "bg-teal-700 rounded border-2 border-teal-800 py-1 px-4 text-teal-200 hover:bg-teal-800 hover:cursor-pointer hover:border-teal-700 mr-2";
var stylesForTextarea = "w-full bg-teal-600 py-2 px-2 outline-none resize-none h-[150px]";
var templateForModal = function () {
    var fragmentForModal = new DocumentFragment();
    var textArea = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "textarea",
        className: stylesForTextarea,
        parent: fragmentForModal,
        attributes: [
            {
                name: "placeholder",
                value: "Paste a list of new options in a CSV-like format:\ntitle,1 -> title=\"title\", wight=1\ntitle with whitespace,2 -> title=\"title with whitespace\", wight=2\ntitle , with , commas,3 -> title=\"title , with , commas\", wight=3\ntitle with \"quotes\",4   -> title=\"title with \"quotes\"\", wight=4",
            },
        ],
    });
    var buttonsWrapper = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({ tag: "div", parent: fragmentForModal });
    var buttonCancel = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "button",
        className: stylesForModalButton,
        parent: buttonsWrapper,
        text: "cancel",
    });
    var buttonConfirm = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "button",
        className: stylesForModalButton,
        parent: buttonsWrapper,
        text: "confirm",
    });
    buttonConfirm.addEventListener("click", function handleClick() {
        if (textArea instanceof HTMLTextAreaElement) {
            var value = textArea.value;
            (0,_handle_click_past_option__WEBPACK_IMPORTED_MODULE_2__.handleClickPastOption)(value, _state_application_state__WEBPACK_IMPORTED_MODULE_0__.appState);
        }
        buttonConfirm.removeEventListener("click", handleClick);
    });
    return {
        template: fragmentForModal,
        closeElements: [buttonCancel, buttonConfirm],
    };
};


/***/ }),

/***/ "./src/pages/main-page/modal-with-message/modal-with.message.ts":
/*!**********************************************************************!*\
  !*** ./src/pages/main-page/modal-with-message/modal-with.message.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modalWithMessage: () => (/* binding */ modalWithMessage),
/* harmony export */   modalWithMessageTemplate: () => (/* binding */ modalWithMessageTemplate)
/* harmony export */ });
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/styles */ "./src/styles/styles.ts");
/* harmony import */ var _utils_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/node */ "./src/utils/node.ts");
/* harmony import */ var _modal_open_modal_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/open-modal-window */ "./src/pages/modal/open-modal-window.ts");



var modalWithMessageTemplate = function (text) {
    var template = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({ tag: "div", className: "p-3" });
    (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({ tag: "p", className: "p-2", text: text, parent: template });
    var button = (0,_utils_node__WEBPACK_IMPORTED_MODULE_1__.createNode)({
        tag: "button",
        className: _styles_styles__WEBPACK_IMPORTED_MODULE_0__.simpleButton,
        text: "OK",
        parent: template,
    });
    return { template: template, closeElements: [button] };
};
var modalWithMessage = function (text) {
    (0,_modal_open_modal_window__WEBPACK_IMPORTED_MODULE_2__.openModalWindow)(modalWithMessageTemplate(text));
};


/***/ }),

/***/ "./src/pages/modal/handle-close-modal.ts":
/*!***********************************************!*\
  !*** ./src/pages/modal/handle-close-modal.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCloseModal: () => (/* binding */ handleCloseModal)
/* harmony export */ });
/* harmony import */ var _utils_remove_element_with_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/remove-element-with-children */ "./src/utils/remove-element-with-children.ts");

var handleCloseModal = function (event, element, modalWindow) {
    var target = event.target;
    if (target === element) {
        (0,_utils_remove_element_with_children__WEBPACK_IMPORTED_MODULE_0__.removeElementWithChildren)(modalWindow);
    }
};


/***/ }),

/***/ "./src/pages/modal/open-modal-window.ts":
/*!**********************************************!*\
  !*** ./src/pages/modal/open-modal-window.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openModalWindow: () => (/* binding */ openModalWindow)
/* harmony export */ });
/* harmony import */ var _utils_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/node */ "./src/utils/node.ts");
/* harmony import */ var _handle_close_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-close-modal */ "./src/pages/modal/handle-close-modal.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


var openModalWindow = function (_a) {
    var template = _a.template, _b = _a.closeElements, closeElements = _b === void 0 ? [] : _b;
    var styleModalWindow = "absolute top-0 left-0 right-0 bottom-0 w-screen h-screen bg-amber-900/70 flex justify-center items-center";
    var styleFormModal = "w-[90%] h-min py-2 px-2 border-3 border-emerald-600 bg-emerald-300 rounded-lg";
    var dialog = (0,_utils_node__WEBPACK_IMPORTED_MODULE_0__.createNode)({
        tag: "dialog",
        className: styleModalWindow,
        parent: document.body,
    });
    dialog.setAttribute("open", "true");
    var form = (0,_utils_node__WEBPACK_IMPORTED_MODULE_0__.createNode)({
        tag: "form",
        className: styleFormModal,
        parent: dialog,
    });
    form.setAttribute("method", "dialog");
    form.append(template);
    __spreadArray([dialog], closeElements, true).forEach(function (element) {
        element.addEventListener("click", function addListener(event) {
            event.preventDefault();
            if (event.target === element) {
                element.removeEventListener("click", addListener);
                (0,_handle_close_modal__WEBPACK_IMPORTED_MODULE_1__.handleCloseModal)(event, element, dialog);
            }
        });
    });
};


/***/ }),

/***/ "./src/router/router.ts":
/*!******************************!*\
  !*** ./src/router/router.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleLocation: () => (/* binding */ handleLocation),
/* harmony export */   route: () => (/* binding */ route)
/* harmony export */ });
/* harmony import */ var _pages_404_page_404_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/404-page/404-page */ "./src/pages/404-page/404-page.ts");
/* harmony import */ var _pages_decision_page_decision_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/decision-page/decision-page */ "./src/pages/decision-page/decision-page.ts");
/* harmony import */ var _pages_main_page_main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/main-page/main-page */ "./src/pages/main-page/main-page.ts");



var route = function (event) {
    event = event || window.event;
    event.preventDefault();
    var target = event.target;
    if (target instanceof HTMLAnchorElement) {
        globalThis.history.pushState({}, "", target.href);
    }
    handleLocation();
};
var routes = {
    404: _pages_404_page_404_page__WEBPACK_IMPORTED_MODULE_0__.create404page,
    "/": _pages_main_page_main_page__WEBPACK_IMPORTED_MODULE_2__.createMainPage,
    "/decision": _pages_decision_page_decision_page__WEBPACK_IMPORTED_MODULE_1__.createDecisionPage,
};
var handleLocation = function () {
    var path = globalThis.location.pathname;
    var githubLink = "rolling-scopes-school.github.io/kelzerock-JSFE2024Q4/decision-making-tool";
    if (path.includes(githubLink)) {
        path = path.split(githubLink)[1];
    }
    var route = routes[path] || routes[404];
    if (typeof route === "function") {
        route();
    }
    else {
        document.body.innerHTML = route;
    }
};



/***/ }),

/***/ "./src/state/application-state.ts":
/*!****************************************!*\
  !*** ./src/state/application-state.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appState: () => (/* binding */ appState)
/* harmony export */ });
var appState = {
    options: [],
    elements: {},
    lastIndex: 0,
};



/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/styles.ts":
/*!******************************!*\
  !*** ./src/styles/styles.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simpleButton: () => (/* binding */ simpleButton),
/* harmony export */   visuallyHidden: () => (/* binding */ visuallyHidden),
/* harmony export */   wrapperStyles: () => (/* binding */ wrapperStyles)
/* harmony export */ });
var visuallyHidden = "absolute w-px h-px -m-px py-[0] px-[0] whitespace-nowrap overflow-hidden";
var simpleButton = "bg-teal-700 rounded border-2 border-teal-800 py-1 px-4 text-teal-200 hover:bg-teal-800 hover:cursor-pointer hover:border-teal-700 mr-2";
var wrapperStyles = "flex justify-start flex-col items-center bg-emerald-300 grow py-6 max-w-2xl w-5/6 mx-auto gap-y-2";


/***/ }),

/***/ "./src/utils/is-ready-to-make-decision.ts":
/*!************************************************!*\
  !*** ./src/utils/is-ready-to-make-decision.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadyToMakeDecision: () => (/* binding */ isReadyToMakeDecision)
/* harmony export */ });
var isReadyToMakeDecision = function (state) {
    var resultRightArray = state.options.filter(function (option) {
        return option.description.length > 0 && Number.parseFloat(option.weight) > 0;
    });
    return resultRightArray.length > 1;
};


/***/ }),

/***/ "./src/utils/node.ts":
/*!***************************!*\
  !*** ./src/utils/node.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNode: () => (/* binding */ createNode)
/* harmony export */ });
var createNode = function (_a) {
    var tag = _a.tag, className = _a.className, parent = _a.parent, text = _a.text, attributes = _a.attributes;
    var node = document.createElement(tag);
    node.className = className || "";
    node.textContent = text || "";
    if (attributes) {
        attributes.forEach(function (attribute) {
            node.setAttribute(attribute.name, attribute.value);
        });
    }
    if (parent)
        parent.append(node);
    return node;
};


/***/ }),

/***/ "./src/utils/remove-all-children.ts":
/*!******************************************!*\
  !*** ./src/utils/remove-all-children.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAllChildren: () => (/* binding */ removeAllChildren)
/* harmony export */ });
var removeAllChildren = function (element) {
    while (element.lastChild) {
        element.lastChild.remove();
    }
};


/***/ }),

/***/ "./src/utils/remove-element-with-children.ts":
/*!***************************************************!*\
  !*** ./src/utils/remove-element-with-children.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeElementWithChildren: () => (/* binding */ removeElementWithChildren)
/* harmony export */ });
var removeElementWithChildren = function (element) {
    while (element.lastChild) {
        element.lastChild.remove();
    }
    element.remove();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/router */ "./src/router/router.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


globalThis.addEventListener("popstate", _router_router__WEBPACK_IMPORTED_MODULE_0__.handleLocation);
(0,_router_router__WEBPACK_IMPORTED_MODULE_0__.handleLocation)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMmY4MjMyMzAzMTQ3MWU0YjZlN2QtbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNGQUFzRixXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtB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bC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9lbnVtcy9kb20tZWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcGFnZXMvNDA0LXBhZ2UvNDA0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcGFnZXMvZGVjaXNpb24tcGFnZS9kZWNpc2lvbi1wYWdlLnRzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL3BhZ2VzL21haW4tcGFnZS9hZGQtb3B0aW9uLnRzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL3BhZ2VzL21haW4tcGFnZS9oYW5kbGUtYWRkLW9wdGlvbi1pbnB1dC50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9wYWdlcy9tYWluLXBhZ2UvaGFuZGxlLWNsaWNrLnRzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL3BhZ2VzL21haW4tcGFnZS9tYWluLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcGFnZXMvbWFpbi1wYWdlL21vZGFsLXBhc3Qtb3B0aW9ucy9oYW5kbGUtY2xpY2stcGFzdC1vcHRpb24udHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcGFnZXMvbWFpbi1wYWdlL21vZGFsLXBhc3Qtb3B0aW9ucy90ZW1wbGF0ZS1mb3ItbW9kYWwudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcGFnZXMvbWFpbi1wYWdlL21vZGFsLXdpdGgtbWVzc2FnZS9tb2RhbC13aXRoLm1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcGFnZXMvbW9kYWwvaGFuZGxlLWNsb3NlLW1vZGFsLnRzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL3BhZ2VzL21vZGFsL29wZW4tbW9kYWwtd2luZG93LnRzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvc3RhdGUvYXBwbGljYXRpb24tc3RhdGUudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvc3R5bGVzL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy91dGlscy9pcy1yZWFkeS10by1tYWtlLWRlY2lzaW9uLnRzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL3V0aWxzL25vZGUudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvdXRpbHMvcmVtb3ZlLWFsbC1jaGlsZHJlbi50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy91dGlscy9yZW1vdmUtZWxlbWVudC13aXRoLWNoaWxkcmVuLnRzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgdGFpbHdpbmRjc3MgdjQuMC4xMiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi9cbkBsYXllciB0aGVtZSwgYmFzZSwgY29tcG9uZW50cywgdXRpbGl0aWVzO1xuQGxheWVyIHRoZW1lIHtcbiAgOnJvb3QsIDpob3N0IHtcbiAgICAtLWZvbnQtc2FuczogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsXG4gICAgICBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICAgIC0tZm9udC1tb25vOiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIixcbiAgICAgIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICAgIC0tY29sb3ItYW1iZXItOTAwOiBva2xjaCgwLjQxNCAwLjExMiA0NS45MDQpO1xuICAgIC0tY29sb3ItZW1lcmFsZC0zMDA6IG9rbGNoKDAuODQ1IDAuMTQzIDE2NC45NzgpO1xuICAgIC0tY29sb3ItZW1lcmFsZC00MDA6IG9rbGNoKDAuNzY1IDAuMTc3IDE2My4yMjMpO1xuICAgIC0tY29sb3ItZW1lcmFsZC02MDA6IG9rbGNoKDAuNTk2IDAuMTQ1IDE2My4yMjUpO1xuICAgIC0tY29sb3ItZW1lcmFsZC03MDA6IG9rbGNoKDAuNTA4IDAuMTE4IDE2NS42MTIpO1xuICAgIC0tY29sb3ItZW1lcmFsZC04MDA6IG9rbGNoKDAuNDMyIDAuMDk1IDE2Ni45MTMpO1xuICAgIC0tY29sb3ItZW1lcmFsZC05MDA6IG9rbGNoKDAuMzc4IDAuMDc3IDE2OC45NCk7XG4gICAgLS1jb2xvci10ZWFsLTIwMDogb2tsY2goMC45MSAwLjA5NiAxODAuNDI2KTtcbiAgICAtLWNvbG9yLXRlYWwtNjAwOiBva2xjaCgwLjYgMC4xMTggMTg0LjcwNCk7XG4gICAgLS1jb2xvci10ZWFsLTcwMDogb2tsY2goMC41MTEgMC4wOTYgMTg2LjM5MSk7XG4gICAgLS1jb2xvci10ZWFsLTgwMDogb2tsY2goMC40MzcgMC4wNzggMTg4LjIxNik7XG4gICAgLS1jb2xvci1pbmRpZ28tMzAwOiBva2xjaCgwLjc4NSAwLjExNSAyNzQuNzEzKTtcbiAgICAtLWNvbG9yLWluZGlnby01MDA6IG9rbGNoKDAuNTg1IDAuMjMzIDI3Ny4xMTcpO1xuICAgIC0tY29sb3ItYmxhY2s6ICMwMDA7XG4gICAgLS1jb2xvci13aGl0ZTogI2ZmZjtcbiAgICAtLXNwYWNpbmc6IDAuMjVyZW07XG4gICAgLS1jb250YWluZXItMnhsOiA0MnJlbTtcbiAgICAtLXRleHQteGw6IDEuMjVyZW07XG4gICAgLS10ZXh0LXhsLS1saW5lLWhlaWdodDogY2FsYygxLjc1IC8gMS4yNSk7XG4gICAgLS10ZXh0LTN4bDogMS44NzVyZW07XG4gICAgLS10ZXh0LTN4bC0tbGluZS1oZWlnaHQ6IGNhbGMoMi4yNSAvIDEuODc1KTtcbiAgICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcbiAgICAtLXJhZGl1cy1zbTogMC4yNXJlbTtcbiAgICAtLXJhZGl1cy1tZDogMC4zNzVyZW07XG4gICAgLS1yYWRpdXMtbGc6IDAuNXJlbTtcbiAgICAtLWRlZmF1bHQtZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucyk7XG4gICAgLS1kZWZhdWx0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogdmFyKC0tZm9udC1zYW5zLS1mb250LWZlYXR1cmUtc2V0dGluZ3MpO1xuICAgIC0tZGVmYXVsdC1mb250LXZhcmlhdGlvbi1zZXR0aW5nczogdmFyKFxuICAgICAgLS1mb250LXNhbnMtLWZvbnQtdmFyaWF0aW9uLXNldHRpbmdzXG4gICAgKTtcbiAgICAtLWRlZmF1bHQtbW9uby1mb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgICAtLWRlZmF1bHQtbW9uby1mb250LWZlYXR1cmUtc2V0dGluZ3M6IHZhcihcbiAgICAgIC0tZm9udC1tb25vLS1mb250LWZlYXR1cmUtc2V0dGluZ3NcbiAgICApO1xuICAgIC0tZGVmYXVsdC1tb25vLWZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiB2YXIoXG4gICAgICAtLWZvbnQtbW9uby0tZm9udC12YXJpYXRpb24tc2V0dGluZ3NcbiAgICApO1xuICB9XG59XG5AbGF5ZXIgYmFzZSB7XG4gICosIDo6YWZ0ZXIsIDo6YmVmb3JlLCA6OmJhY2tkcm9wLCA6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMCBzb2xpZDtcbiAgfVxuICBodG1sLCA6aG9zdCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgdGFiLXNpemU6IDQ7XG4gICAgZm9udC1mYW1pbHk6IHZhciggLS1kZWZhdWx0LWZvbnQtZmFtaWx5LCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiApO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogdmFyKC0tZGVmYXVsdC1mb250LWZlYXR1cmUtc2V0dGluZ3MsIG5vcm1hbCk7XG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IHZhciggLS1kZWZhdWx0LWZvbnQtdmFyaWF0aW9uLXNldHRpbmdzLCBub3JtYWwgKTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIGJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB9XG4gIGhyIHtcbiAgICBoZWlnaHQ6IDA7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICB9XG4gIGFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgfVxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB9XG4gIGIsIHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuICBjb2RlLCBrYmQsIHNhbXAsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IHZhciggLS1kZWZhdWx0LW1vbm8tZm9udC1mYW1pbHksIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSApO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogdmFyKCAtLWRlZmF1bHQtbW9uby1mb250LWZlYXR1cmUtc2V0dGluZ3MsIG5vcm1hbCApO1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiB2YXIoIC0tZGVmYXVsdC1tb25vLWZvbnQtdmFyaWF0aW9uLXNldHRpbmdzLCBub3JtYWwgKTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gIH1cbiAgc3ViLCBzdXAge1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cbiAgc3ViIHtcbiAgICBib3R0b206IC0wLjI1ZW07XG4gIH1cbiAgc3VwIHtcbiAgICB0b3A6IC0wLjVlbTtcbiAgfVxuICB0YWJsZSB7XG4gICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cbiAgOi1tb3otZm9jdXNyaW5nIHtcbiAgICBvdXRsaW5lOiBhdXRvO1xuICB9XG4gIHByb2dyZXNzIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cbiAgc3VtbWFyeSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICB9XG4gIG9sLCB1bCwgbWVudSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBpbWcsIHN2ZywgdmlkZW8sIGNhbnZhcywgYXVkaW8sIGlmcmFtZSwgZW1iZWQsIG9iamVjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBpbWcsIHZpZGVvIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgb3B0Z3JvdXAsIHRleHRhcmVhLCA6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgOndoZXJlKHNlbGVjdDppcyhbbXVsdGlwbGVdLCBbc2l6ZV0pKSBvcHRncm91cCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuICA6d2hlcmUoc2VsZWN0OmlzKFttdWx0aXBsZV0sIFtzaXplXSkpIG9wdGdyb3VwIG9wdGlvbiB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDIwcHg7XG4gIH1cbiAgOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDRweDtcbiAgfVxuICA6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiBjb2xvci1taXgoaW4gb2tsYWIsIGN1cnJlbnRDb2xvciA1MCUsIHRyYW5zcGFyZW50KTtcbiAgfVxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgfVxuICA6Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuICA6Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZSB7XG4gICAgbWluLWhlaWdodDogMWxoO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIH1cbiAgOjotd2Via2l0LWRhdGV0aW1lLWVkaXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG4gIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWZpZWxkcy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LCA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkLCA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZCwgOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkLCA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1ob3VyLWZpZWxkLCA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1taW51dGUtZmllbGQsIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXNlY29uZC1maWVsZCwgOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbWlsbGlzZWNvbmQtZmllbGQsIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1lcmlkaWVtLWZpZWxkIHtcbiAgICBwYWRkaW5nLWJsb2NrOiAwO1xuICB9XG4gIDotbW96LXVpLWludmFsaWQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgYnV0dG9uLCBpbnB1dDp3aGVyZShbdHlwZT1cImJ1dHRvblwiXSwgW3R5cGU9XCJyZXNldFwiXSwgW3R5cGU9XCJzdWJtaXRcIl0pLCA6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBhcHBlYXJhbmNlOiBidXR0b247XG4gIH1cbiAgOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCA6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBbaGlkZGVuXTp3aGVyZSg6bm90KFtoaWRkZW49XCJ1bnRpbC1mb3VuZFwiXSkpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBsYXllciB1dGlsaXRpZXMge1xuICAuYWJzb2x1dGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuc3RhdGljIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIC50b3AtMCB7XG4gICAgdG9wOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMCk7XG4gIH1cbiAgLnJpZ2h0LTAge1xuICAgIHJpZ2h0OiBjYWxjKHZhcigtLXNwYWNpbmcpICogMCk7XG4gIH1cbiAgLmJvdHRvbS0wIHtcbiAgICBib3R0b206IGNhbGModmFyKC0tc3BhY2luZykgKiAwKTtcbiAgfVxuICAubGVmdC0wIHtcbiAgICBsZWZ0OiBjYWxjKHZhcigtLXNwYWNpbmcpICogMCk7XG4gIH1cbiAgLi1tLXB4IHtcbiAgICBtYXJnaW46IC0xcHg7XG4gIH1cbiAgLm14LWF1dG8ge1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIH1cbiAgLm10LTQge1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc3BhY2luZykgKiA0KTtcbiAgfVxuICAubXItMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXNwYWNpbmcpICogMik7XG4gIH1cbiAgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cbiAgLmgtXFxcXFsxNTBweFxcXFxdIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gIC5oLWZ1bGwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaC1taW4ge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gIH1cbiAgLmgtcHgge1xuICAgIGhlaWdodDogMXB4O1xuICB9XG4gIC5oLXNjcmVlbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAudy01XFxcXC82IHtcbiAgICB3aWR0aDogY2FsYyg1LzYgKiAxMDAlKTtcbiAgfVxuICAudy1cXFxcWzkwXFxcXCVcXFxcXSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAudy1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudy1weCB7XG4gICAgd2lkdGg6IDFweDtcbiAgfVxuICAudy1zY3JlZW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuICAubWF4LXctMnhsIHtcbiAgICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci0yeGwpO1xuICB9XG4gIC5ncm93IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnJlc2l6ZS1ub25lIHtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cbiAgLmdyaWQtY29scy1cXFxcWzQwcHhfMWZyXzEwMHB4XzE1MHB4XFxcXF0ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnIgMTAwcHggMTUwcHg7XG4gIH1cbiAgLmZsZXgtY29sIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5pdGVtcy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmp1c3RpZnktY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuanVzdGlmeS1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5nYXAteC0xIHtcbiAgICBjb2x1bW4tZ2FwOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMSk7XG4gIH1cbiAgLmdhcC15LTIge1xuICAgIHJvdy1nYXA6IGNhbGModmFyKC0tc3BhY2luZykgKiAyKTtcbiAgfVxuICAub3ZlcmZsb3ctaGlkZGVuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5yb3VuZGVkIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB9XG4gIC5yb3VuZGVkLWxnIHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICB9XG4gIC5yb3VuZGVkLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICB9XG4gIC5yb3VuZGVkLXNtIHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICB9XG4gIC5ib3JkZXIge1xuICAgIGJvcmRlci1zdHlsZTogdmFyKC0tdHctYm9yZGVyLXN0eWxlKTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgfVxuICAuYm9yZGVyLTIge1xuICAgIGJvcmRlci1zdHlsZTogdmFyKC0tdHctYm9yZGVyLXN0eWxlKTtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgfVxuICAuYm9yZGVyLTMge1xuICAgIGJvcmRlci1zdHlsZTogdmFyKC0tdHctYm9yZGVyLXN0eWxlKTtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgfVxuICAuYm9yZGVyLWJsYWNrIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgfVxuICAuYm9yZGVyLWVtZXJhbGQtNjAwIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWVtZXJhbGQtNjAwKTtcbiAgfVxuICAuYm9yZGVyLXRlYWwtODAwIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXRlYWwtODAwKTtcbiAgfVxuICAuYmctYW1iZXItOTAwXFxcXC83MCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1hbWJlci05MDApIDcwJSwgdHJhbnNwYXJlbnQpO1xuICB9XG4gIC5iZy1lbWVyYWxkLTMwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZW1lcmFsZC0zMDApO1xuICB9XG4gIC5iZy1lbWVyYWxkLTQwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZW1lcmFsZC00MDApO1xuICB9XG4gIC5iZy1lbWVyYWxkLTYwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZW1lcmFsZC02MDApO1xuICB9XG4gIC5iZy1lbWVyYWxkLTgwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZW1lcmFsZC04MDApO1xuICB9XG4gIC5iZy1pbmRpZ28tMzAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pbmRpZ28tMzAwKTtcbiAgfVxuICAuYmctdGVhbC02MDAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlYWwtNjAwKTtcbiAgfVxuICAuYmctdGVhbC03MDAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlYWwtNzAwKTtcbiAgfVxuICAucC0yIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMik7XG4gIH1cbiAgLnAtMyB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDMpO1xuICB9XG4gIC5weC0xIHtcbiAgICBwYWRkaW5nLWlubGluZTogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDEpO1xuICB9XG4gIC5weC0yIHtcbiAgICBwYWRkaW5nLWlubGluZTogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDIpO1xuICB9XG4gIC5weC0zIHtcbiAgICBwYWRkaW5nLWlubGluZTogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDMpO1xuICB9XG4gIC5weC00IHtcbiAgICBwYWRkaW5nLWlubGluZTogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDQpO1xuICB9XG4gIC5weC01IHtcbiAgICBwYWRkaW5nLWlubGluZTogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDUpO1xuICB9XG4gIC5weC1cXFxcWzBcXFxcXSB7XG4gICAgcGFkZGluZy1pbmxpbmU6IDA7XG4gIH1cbiAgLnB5LTEge1xuICAgIHBhZGRpbmctYmxvY2s6IGNhbGModmFyKC0tc3BhY2luZykgKiAxKTtcbiAgfVxuICAucHktMiB7XG4gICAgcGFkZGluZy1ibG9jazogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDIpO1xuICB9XG4gIC5weS02IHtcbiAgICBwYWRkaW5nLWJsb2NrOiBjYWxjKHZhcigtLXNwYWNpbmcpICogNik7XG4gIH1cbiAgLnB5LVxcXFxbMFxcXFxdIHtcbiAgICBwYWRkaW5nLWJsb2NrOiAwO1xuICB9XG4gIC50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAudGV4dC0zeGwge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC0zeGwpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS10dy1sZWFkaW5nLCB2YXIoLS10ZXh0LTN4bC0tbGluZS1oZWlnaHQpKTtcbiAgfVxuICAudGV4dC14bCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhsKTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tdHctbGVhZGluZywgdmFyKC0tdGV4dC14bC0tbGluZS1oZWlnaHQpKTtcbiAgfVxuICAuZm9udC1ib2xkIHtcbiAgICAtLXR3LWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gIH1cbiAgLndoaXRlc3BhY2Utbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC50ZXh0LWVtZXJhbGQtOTAwIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZW1lcmFsZC05MDApO1xuICB9XG4gIC50ZXh0LXRlYWwtMjAwIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGVhbC0yMDApO1xuICB9XG4gIC50ZXh0LXdoaXRlIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICB9XG4gIC51cHBlcmNhc2Uge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLnVuZGVybGluZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgfVxuICAub3V0bGluZS1ub25lIHtcbiAgICAtLXR3LW91dGxpbmUtc3R5bGU6IG5vbmU7XG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgfVxuICAuaG92ZXJcXFxcOmN1cnNvci1wb2ludGVyIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhvdmVyXFxcXDpib3JkZXItdGVhbC03MDAge1xuICAgICY6aG92ZXIge1xuICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci10ZWFsLTcwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5ob3ZlclxcXFw6YmctZW1lcmFsZC03MDAge1xuICAgICY6aG92ZXIge1xuICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZW1lcmFsZC03MDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaG92ZXJcXFxcOmJnLWluZGlnby01MDAge1xuICAgICY6aG92ZXIge1xuICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaW5kaWdvLTUwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5ob3ZlclxcXFw6YmctdGVhbC04MDAge1xuICAgICY6aG92ZXIge1xuICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVhbC04MDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NCAyMzMgMTgxKTtcbn1cbkBwcm9wZXJ0eSAtLXR3LWJvcmRlci1zdHlsZSB7XG4gIHN5bnRheDogXCIqXCI7XG4gIGluaGVyaXRzOiBmYWxzZTtcbiAgaW5pdGlhbC12YWx1ZTogc29saWQ7XG59XG5AcHJvcGVydHkgLS10dy1mb250LXdlaWdodCB7XG4gIHN5bnRheDogXCIqXCI7XG4gIGluaGVyaXRzOiBmYWxzZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpRUFjQTtBQWRBLHlDQWNBO0FBZEE7RUFBQTtJQUFBOzZEQWNBO0lBZEE7OEJBY0E7SUFkQSw0Q0FjQTtJQWRBLCtDQWNBO0lBZEEsK0NBY0E7SUFkQSwrQ0FjQTtJQWRBLCtDQWNBO0lBZEEsK0NBY0E7SUFkQSw4Q0FjQTtJQWRBLDJDQWNBO0lBZEEsMENBY0E7SUFkQSw0Q0FjQTtJQWRBLDRDQWNBO0lBZEEsOENBY0E7SUFkQSw4Q0FjQTtJQWRBLG1CQWNBO0lBZEEsbUJBY0E7SUFkQSxrQkFjQTtJQWRBLHNCQWNBO0lBZEEsa0JBY0E7SUFkQSx5Q0FjQTtJQWRBLG9CQWNBO0lBZEEsMkNBY0E7SUFkQSx1QkFjQTtJQWRBLG9CQWNBO0lBZEEscUJBY0E7SUFkQSxtQkFjQTtJQWRBLHVDQWNBO0lBZEEsd0VBY0E7SUFkQTs7S0FjQTtJQWRBLDRDQWNBO0lBZEE7O0tBY0E7SUFkQTs7S0FjQTtFQUFBO0FBQUE7QUFkQTtFQUFBO0lBQUEsc0JBY0E7SUFkQSxTQWNBO0lBZEEsVUFjQTtJQWRBLGVBY0E7RUFBQTtFQWRBO0lBQUEsZ0JBY0E7SUFkQSw4QkFjQTtJQWRBLFdBY0E7SUFkQSw2SkFjQTtJQWRBLG1FQWNBO0lBZEEseUVBY0E7SUFkQSx3Q0FjQTtFQUFBO0VBZEE7SUFBQSxvQkFjQTtFQUFBO0VBZEE7SUFBQSxTQWNBO0lBZEEsY0FjQTtJQWRBLHFCQWNBO0VBQUE7RUFkQTtJQUFBLHlDQWNBO0lBZEEsaUNBY0E7RUFBQTtFQWRBO0lBQUEsa0JBY0E7SUFkQSxvQkFjQTtFQUFBO0VBZEE7SUFBQSxjQWNBO0lBZEEsZ0NBY0E7SUFkQSx3QkFjQTtFQUFBO0VBZEE7SUFBQSxtQkFjQTtFQUFBO0VBZEE7SUFBQSxrSkFjQTtJQWRBLDBFQWNBO0lBZEEsOEVBY0E7SUFkQSxjQWNBO0VBQUE7RUFkQTtJQUFBLGNBY0E7RUFBQTtFQWRBO0lBQUEsY0FjQTtJQWRBLGNBY0E7SUFkQSxrQkFjQTtJQWRBLHdCQWNBO0VBQUE7RUFkQTtJQUFBLGVBY0E7RUFBQTtFQWRBO0lBQUEsV0FjQTtFQUFBO0VBZEE7SUFBQSxjQWNBO0lBZEEscUJBY0E7SUFkQSx5QkFjQTtFQUFBO0VBZEE7SUFBQSxhQWNBO0VBQUE7RUFkQTtJQUFBLHdCQWNBO0VBQUE7RUFkQTtJQUFBLGtCQWNBO0VBQUE7RUFkQTtJQUFBLGdCQWNBO0VBQUE7RUFkQTtJQUFBLGNBY0E7SUFkQSxzQkFjQTtFQUFBO0VBZEE7SUFBQSxlQWNBO0lBZEEsWUFjQTtFQUFBO0VBZEE7SUFBQSxhQWNBO0lBZEEsOEJBY0E7SUFkQSxnQ0FjQTtJQWRBLHVCQWNBO0lBZEEsY0FjQTtJQWRBLGdCQWNBO0lBZEEsNkJBY0E7SUFkQSxVQWNBO0VBQUE7RUFkQTtJQUFBLG1CQWNBO0VBQUE7RUFkQTtJQUFBLDBCQWNBO0VBQUE7RUFkQTtJQUFBLHNCQWNBO0VBQUE7RUFkQTtJQUFBLFVBY0E7SUFkQSx5REFjQTtFQUFBO0VBZEE7SUFBQSxnQkFjQTtFQUFBO0VBZEE7SUFBQSx3QkFjQTtFQUFBO0VBZEE7SUFBQSxlQWNBO0lBZEEsbUJBY0E7RUFBQTtFQWRBO0lBQUEsb0JBY0E7RUFBQTtFQWRBO0lBQUEsVUFjQTtFQUFBO0VBZEE7SUFBQSxnQkFjQTtFQUFBO0VBZEE7SUFBQSxnQkFjQTtFQUFBO0VBZEE7SUFBQSxrQkFjQTtFQUFBO0VBZEE7SUFBQSxZQWNBO0VBQUE7RUFkQTtJQUFBLHdCQWNBO0VBQUE7QUFBQTtBQWRBO0VBQUE7SUFBQSxrQkFjQTtFQUFBO0VBZEE7SUFBQSxnQkFjQTtFQUFBO0VBZEE7SUFBQSw2QkFjQTtFQUFBO0VBZEE7SUFBQSwrQkFjQTtFQUFBO0VBZEE7SUFBQSxnQ0FjQTtFQUFBO0VBZEE7SUFBQSw4QkFjQTtFQUFBO0VBZEE7SUFBQSxZQWNBO0VBQUE7RUFkQTtJQUFBLG1CQWNBO0VBQUE7RUFkQTtJQUFBLG9DQWNBO0VBQUE7RUFkQTtJQUFBLHNDQWNBO0VBQUE7RUFkQTtJQUFBLGFBY0E7RUFBQTtFQWRBO0lBQUEsYUFjQTtFQUFBO0VBZEE7SUFBQSxhQWNBO0VBQUE7RUFkQTtJQUFBLFlBY0E7RUFBQTtFQWRBO0lBQUEsbUJBY0E7RUFBQTtFQWRBO0lBQUEsV0FjQTtFQUFBO0VBZEE7SUFBQSxhQWNBO0VBQUE7RUFkQTtJQUFBLHVCQWNBO0VBQUE7RUFkQTtJQUFBLFVBY0E7RUFBQTtFQWRBO0lBQUEsV0FjQTtFQUFBO0VBZEE7SUFBQSxVQWNBO0VBQUE7RUFkQTtJQUFBLFlBY0E7RUFBQTtFQWRBO0lBQUEsK0JBY0E7RUFBQTtFQWRBO0lBQUEsWUFjQTtFQUFBO0VBZEE7SUFBQSxZQWNBO0VBQUE7RUFkQTtJQUFBLDJDQWNBO0VBQUE7RUFkQTtJQUFBLHNCQWNBO0VBQUE7RUFkQTtJQUFBLG1CQWNBO0VBQUE7RUFkQTtJQUFBLHVCQWNBO0VBQUE7RUFkQTtJQUFBLDJCQWNBO0VBQUE7RUFkQTtJQUFBLG9DQWNBO0VBQUE7RUFkQTtJQUFBLGlDQWNBO0VBQUE7RUFkQTtJQUFBLGdCQWNBO0VBQUE7RUFkQTtJQUFBLHNCQWNBO0VBQUE7RUFkQTtJQUFBLCtCQWNBO0VBQUE7RUFkQTtJQUFBLCtCQWNBO0VBQUE7RUFkQTtJQUFBLCtCQWNBO0VBQUE7RUFkQTtJQUFBLG9DQWNBO0lBZEEsaUJBY0E7RUFBQTtFQWRBO0lBQUEsb0NBY0E7SUFkQSxpQkFjQTtFQUFBO0VBZEE7SUFBQSxvQ0FjQTtJQWRBLGlCQWNBO0VBQUE7RUFkQTtJQUFBLGdDQWNBO0VBQUE7RUFkQTtJQUFBLHNDQWNBO0VBQUE7RUFkQTtJQUFBLG1DQWNBO0VBQUE7RUFkQTtJQUFBLDhFQWNBO0VBQUE7RUFkQTtJQUFBLDBDQWNBO0VBQUE7RUFkQTtJQUFBLDBDQWNBO0VBQUE7RUFkQTtJQUFBLDBDQWNBO0VBQUE7RUFkQTtJQUFBLDBDQWNBO0VBQUE7RUFkQTtJQUFBLHlDQWNBO0VBQUE7RUFkQTtJQUFBLHVDQWNBO0VBQUE7RUFkQTtJQUFBLHVDQWNBO0VBQUE7RUFkQTtJQUFBLGlDQWNBO0VBQUE7RUFkQTtJQUFBLGlDQWNBO0VBQUE7RUFkQTtJQUFBLHdDQWNBO0VBQUE7RUFkQTtJQUFBLHdDQWNBO0VBQUE7RUFkQTtJQUFBLHdDQWNBO0VBQUE7RUFkQTtJQUFBLHdDQWNBO0VBQUE7RUFkQTtJQUFBLHdDQWNBO0VBQUE7RUFkQTtJQUFBLGlCQWNBO0VBQUE7RUFkQTtJQUFBLHVDQWNBO0VBQUE7RUFkQTtJQUFBLHVDQWNBO0VBQUE7RUFkQTtJQUFBLHVDQWNBO0VBQUE7RUFkQTtJQUFBLGdCQWNBO0VBQUE7RUFkQTtJQUFBLGtCQWNBO0VBQUE7RUFkQTtJQUFBLGlCQWNBO0VBQUE7RUFkQTtJQUFBLDBCQWNBO0lBZEEsNERBY0E7RUFBQTtFQWRBO0lBQUEseUJBY0E7SUFkQSwyREFjQTtFQUFBO0VBZEE7SUFBQSx5Q0FjQTtJQWRBLG9DQWNBO0VBQUE7RUFkQTtJQUFBLG1CQWNBO0VBQUE7RUFkQTtJQUFBLCtCQWNBO0VBQUE7RUFkQTtJQUFBLDRCQWNBO0VBQUE7RUFkQTtJQUFBLHlCQWNBO0VBQUE7RUFkQTtJQUFBLHlCQWNBO0VBQUE7RUFkQTtJQUFBLCtCQWNBO0VBQUE7RUFkQTtJQUFBLHdCQWNBO0lBZEEsbUJBY0E7RUFBQTtFQWRBO0lBQUE7TUFBQTtRQUFBLGVBY0E7TUFBQTtJQUFBO0VBQUE7RUFkQTtJQUFBO01BQUE7UUFBQSxtQ0FjQTtNQUFBO0lBQUE7RUFBQTtFQWRBO0lBQUE7TUFBQTtRQUFBLDBDQWNBO01BQUE7SUFBQTtFQUFBO0VBZEE7SUFBQTtNQUFBO1FBQUEseUNBY0E7TUFBQTtJQUFBO0VBQUE7RUFkQTtJQUFBO01BQUE7UUFBQSx1Q0FjQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBZEE7RUFBQSxhQWNBO0VBZEEsc0JBY0E7RUFkQSxXQWNBO0VBZEEsYUFjQTtFQWRBLFNBY0E7RUFkQSxVQWNBO0VBZEEsaUNBY0E7QUFBQTtBQWRBO0VBQUEsV0FjQTtFQWRBLGVBY0E7RUFkQSxvQkFjQTtBQUFBO0FBZEE7RUFBQSxXQWNBO0VBZEEsZUFjQTtBQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQtbm90YXRpb24gKi9cXG5AaW1wb3J0IFxcXCJ0YWlsd2luZGNzc1xcXCI7XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTQgMjMzIDE4MSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZW51bSBET01FbGVtZW50cyB7XG4gIGxpc3RPZk9wdGlvbiA9IFwibGlzdE9mT3B0aW9uXCIsXG59XG4iLCJpbXBvcnQgeyBoYW5kbGVMb2NhdGlvbiB9IGZyb20gXCIuLi8uLi9yb3V0ZXIvcm91dGVyXCI7XG5pbXBvcnQgeyB2aXN1YWxseUhpZGRlbiB9IGZyb20gXCIuLi8uLi9zdHlsZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL25vZGVcIjtcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JlbW92ZS1hbGwtY2hpbGRyZW5cIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZTQwNHBhZ2UgPSAoKTogdm9pZCA9PiB7XG4gIHJlbW92ZUFsbENoaWxkcmVuKGRvY3VtZW50LmJvZHkpO1xuICBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJkaXZcIixcbiAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXG4gICAgY2xhc3NOYW1lOiBcInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIixcbiAgfSk7XG4gIGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJoMVwiLFxuICAgIHBhcmVudDogdGVtcGxhdGUsXG4gICAgY2xhc3NOYW1lOiB2aXN1YWxseUhpZGRlbixcbiAgICB0ZXh0OiBcImRlY2lzaW9uIG1ha2luZyB0b29sXCIsXG4gIH0pO1xuICBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiaDJcIixcbiAgICBwYXJlbnQ6IHRlbXBsYXRlLFxuICAgIHRleHQ6IFwiU29ycnksIHRoaXMgcGFnZSBkb2Vzbid0IGV4aXN0LiBZb3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSBtYWluIHBhZ2UuXCIsXG4gICAgY2xhc3NOYW1lOiBcInRleHQtM3hsIHRleHQtY2VudGVyXCIsXG4gIH0pO1xuICBjb25zdCBsaW5rID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImFcIixcbiAgICBwYXJlbnQ6IHRlbXBsYXRlLFxuICAgIHRleHQ6IFwibWFpbiBwYWdlXCIsXG4gICAgY2xhc3NOYW1lOiBcImZvbnQtYm9sZCBtdC00ICB0ZXh0LXhsIHVuZGVybGluZSB1cHBlcmNhc2UgdGV4dC1lbWVyYWxkLTkwMFwiLFxuICAgIGF0dHJpYnV0ZXM6IFt7IG5hbWU6IFwiaHJlZlwiLCB2YWx1ZTogXCIvXCIgfV0sXG4gIH0pO1xuXG4gIGNvbnN0IHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGdsb2JhbFRoaXMuaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIFwiL1wiKTtcbiAgICBoYW5kbGVMb2NhdGlvbigpO1xuICB9LCA1MDAwKTtcblxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuICAgIGdsb2JhbFRoaXMuaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIFwiL1wiKTtcbiAgICBoYW5kbGVMb2NhdGlvbigpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBzaW1wbGVCdXR0b24sIHdyYXBwZXJTdHlsZXMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3N0eWxlc1wiO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlscy9ub2RlXCI7XG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi91dGlscy9yZW1vdmUtYWxsLWNoaWxkcmVuXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWNpc2lvblBhZ2UgPSAoKTogdm9pZCA9PiB7XG4gIHJlbW92ZUFsbENoaWxkcmVuKGRvY3VtZW50LmJvZHkpO1xuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZTogd3JhcHBlclN0eWxlcyxcbiAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXG4gIH0pO1xuXG4gIGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJoMVwiLFxuICAgIGNsYXNzTmFtZTogXCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1lbWVyYWxkLTkwMFwiLFxuICAgIHBhcmVudDogd3JhcHBlcixcbiAgICB0ZXh0OiBcIkRlY2lzaW9uIG1ha2luZyB0b29sXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGJ1dHRvbnNCbG9jayA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJkaXZcIixcbiAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgcGFyZW50OiB3cmFwcGVyLFxuICB9KTtcbiAgY29uc3QgYnV0dG9uUGxheSA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IHNpbXBsZUJ1dHRvbixcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gICAgdGV4dDogXCJzdGFydFwiLFxuICB9KTtcbiAgY29uc3QgaW5mb3JtYXRpb25EaXNwbGF5ID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gICAgdGV4dDogXCJmb3Igc3RhcnQgLSBwdXNoIHRoZSBwbGF5IGJ1dHRvblwiLFxuICB9KTtcbiAgY29uc3QgY2FudmFzQmxvY2sgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiZGl2XCIsXG4gICAgcGFyZW50OiB3cmFwcGVyLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGJ1dHRvbnNCbG9jaywgYnV0dG9uUGxheSwgaW5mb3JtYXRpb25EaXNwbGF5LCBjYW52YXNCbG9jayk7XG59O1xuIiwiaW1wb3J0IHsgYXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGUvYXBwbGljYXRpb24tc3RhdGVcIjtcbmltcG9ydCB0eXBlIHsgb3B0aW9uVHlwZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlscy9ub2RlXCI7XG5pbXBvcnQge1xuICBoYW5kbGVBZGRPcHRpb25JbnB1dCxcbiAgaGFuZGxlQWRkT3B0aW9uSW5wdXRPbmx5TnVtYmVyLFxufSBmcm9tIFwiLi9oYW5kbGUtYWRkLW9wdGlvbi1pbnB1dFwiO1xuaW1wb3J0IHsgaGFuZGxlRGVsZXRlT3B0aW9uIH0gZnJvbSBcIi4vaGFuZGxlLWNsaWNrXCI7XG5cbmNvbnN0IGFkZE9wdGlvbiA9IChvcHRpb246IG9wdGlvblR5cGUsIHBhcmVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgY29uc3Qgc3R5bGVMaUVsZW1lbnQgPVxuICAgICAgXCJiZy1lbWVyYWxkLTQwMCBncmlkIGdyaWQtY29scy1bNDBweF8xZnJfMTAwcHhfMTUwcHhdIGdhcC14LTEgcHgtMSBweS0xIHJvdW5kZWQtc21cIixcbiAgICBzdHlsZVNwYW5FbGVtZW50ID1cbiAgICAgIFwiYmctZW1lcmFsZC02MDAgcm91bmRlZC1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlXCIsXG4gICAgc3R5bGVJbnB1dCA9XG4gICAgICBcImJnLWVtZXJhbGQtODAwIHRleHQtd2hpdGUgdGV4dC1yaWdodCBweC0yIHB5LTEgcm91bmRlZC1zbSBvdXRsaW5lLW5vbmVcIixcbiAgICBzdHlsZUJ1dHRvbiA9XG4gICAgICBcImJnLWVtZXJhbGQtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBob3ZlcjpiZy1lbWVyYWxkLTcwMCBob3ZlcjpjdXJzb3ItcG9pbnRlclwiO1xuXG4gIGNvbnN0IGl0ZW1MaSA9IGNyZWF0ZU5vZGUoeyB0YWc6IFwibGlcIiwgY2xhc3NOYW1lOiBzdHlsZUxpRWxlbWVudCwgcGFyZW50IH0pO1xuICBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwic3BhblwiLFxuICAgIGNsYXNzTmFtZTogc3R5bGVTcGFuRWxlbWVudCxcbiAgICBwYXJlbnQ6IGl0ZW1MaSxcbiAgICB0ZXh0OiBgIyR7b3B0aW9uLmluZGV4fWAsXG4gIH0pO1xuICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImlucHV0XCIsXG4gICAgY2xhc3NOYW1lOiBzdHlsZUlucHV0LFxuICAgIHBhcmVudDogaXRlbUxpLFxuICAgIGF0dHJpYnV0ZXM6IFt7IG5hbWU6IFwidmFsdWVcIiwgdmFsdWU6IG9wdGlvbi5kZXNjcmlwdGlvbiB9XSxcbiAgfSk7XG4gIGlmIChpbnB1dERlc2NyaXB0aW9uIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgIGlucHV0RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGhhbmRsZUFkZE9wdGlvbklucHV0KGlucHV0RGVzY3JpcHRpb24sIG9wdGlvbi5pbmRleCwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlucHV0V2VpZ2h0ID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImlucHV0XCIsXG4gICAgY2xhc3NOYW1lOiBzdHlsZUlucHV0LFxuICAgIHBhcmVudDogaXRlbUxpLFxuICAgIGF0dHJpYnV0ZXM6IFt7IG5hbWU6IFwidmFsdWVcIiwgdmFsdWU6IG9wdGlvbi53ZWlnaHQgfV0sXG4gIH0pO1xuICBpZiAoaW5wdXRXZWlnaHQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgaW5wdXRXZWlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGhhbmRsZUFkZE9wdGlvbklucHV0T25seU51bWJlcihpbnB1dFdlaWdodCwgb3B0aW9uLmluZGV4LCBcIndlaWdodFwiKTtcbiAgICB9KTtcbiAgfVxuICBpbnB1dFdlaWdodC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvcHRpb24ud2VpZ2h0KTtcbiAgY29uc3QgYnV0dG9uRGVsZXRlT3B0aW9uID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogc3R5bGVCdXR0b24sXG4gICAgcGFyZW50OiBpdGVtTGksXG4gICAgdGV4dDogXCJkZWxldGVcIixcbiAgfSk7XG4gIGJ1dHRvbkRlbGV0ZU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhhbmRsZURlbGV0ZU9wdGlvbihhcHBTdGF0ZSwgaXRlbUxpLCBvcHRpb24uaW5kZXgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFkZE9wdGlvbiB9O1xuIiwiaW1wb3J0IHsgYXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGUvYXBwbGljYXRpb24tc3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFkZE9wdGlvbklucHV0ID0gKFxuICBpbnB1dDogSFRNTElucHV0RWxlbWVudCxcbiAgaW5kZXg6IG51bWJlcixcbiAgaW5mbzogXCJkZXNjcmlwdGlvblwiIHwgXCJ3ZWlnaHRcIixcbik6IHZvaWQgPT4ge1xuICBhcHBTdGF0ZS5vcHRpb25zID0gYXBwU3RhdGUub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgIGlmIChvcHRpb24uaW5kZXggPT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5mbyA9PT0gXCJkZXNjcmlwdGlvblwiXG4gICAgICAgID8geyAuLi5vcHRpb24sIGRlc2NyaXB0aW9uOiBpbnB1dC52YWx1ZSB9XG4gICAgICAgIDogeyAuLi5vcHRpb24sIHdlaWdodDogaW5wdXQudmFsdWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQWRkT3B0aW9uSW5wdXRPbmx5TnVtYmVyID0gKFxuICBpbnB1dDogSFRNTElucHV0RWxlbWVudCxcbiAgaW5kZXg6IG51bWJlcixcbiAgaW5mbzogXCJkZXNjcmlwdGlvblwiIHwgXCJ3ZWlnaHRcIixcbik6IHZvaWQgPT4ge1xuICBsZXQgbmV3VmFsdWUgPSBpbnB1dC52YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2csIFwiXCIpO1xuICBjb25zdCBwYXJ0cyA9IG5ld1ZhbHVlLnNwbGl0KFwiLlwiKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICBuZXdWYWx1ZSA9IHBhcnRzLnNoaWZ0KCkgKyBcIi5cIiArIHBhcnRzLmpvaW4oXCJcIik7XG4gIH1cbiAgaW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcblxuICBoYW5kbGVBZGRPcHRpb25JbnB1dChpbnB1dCwgaW5kZXgsIGluZm8pO1xufTtcbiIsImltcG9ydCB7IGhhbmRsZUxvY2F0aW9uIH0gZnJvbSBcIi4uLy4uL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB0eXBlIHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS90eXBlc1wiO1xuaW1wb3J0IHsgaXNSZWFkeVRvTWFrZURlY2lzaW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2lzLXJlYWR5LXRvLW1ha2UtZGVjaXNpb25cIjtcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbm9kZVwiO1xuaW1wb3J0IHsgYWRkT3B0aW9uIH0gZnJvbSBcIi4vYWRkLW9wdGlvblwiO1xuaW1wb3J0IHsgY3JlYXRlTWFpblBhZ2UgfSBmcm9tIFwiLi9tYWluLXBhZ2VcIjtcbmltcG9ydCB7IG1vZGFsV2l0aE1lc3NhZ2UgfSBmcm9tIFwiLi9tb2RhbC13aXRoLW1lc3NhZ2UvbW9kYWwtd2l0aC5tZXNzYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBZGRPcHRpb24gPSAoXG4gIHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuKTogdm9pZCA9PiB7XG4gIGNvbnN0IGluZGV4ID0gKytzdGF0ZS5sYXN0SW5kZXg7XG4gIGNvbnN0IG5ld09wdGlvbiA9IHsgaW5kZXgsIGRlc2NyaXB0aW9uOiBcIlwiLCB3ZWlnaHQ6IFwiXCIgfTtcbiAgc3RhdGUub3B0aW9ucyA9IFsuLi5zdGF0ZS5vcHRpb25zLCBuZXdPcHRpb25dO1xuICBhZGRPcHRpb24obmV3T3B0aW9uLCBwYXJlbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZURlbGV0ZU9wdGlvbiA9IChcbiAgc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXG4gIHRhcmdldDogSFRNTEVsZW1lbnQsXG4gIGluZGV4OiBudW1iZXIsXG4pOiB2b2lkID0+IHtcbiAgd2hpbGUgKHRhcmdldC5sYXN0Q2hpbGQpIHtcbiAgICB0YXJnZXQubGFzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIHRhcmdldC5yZW1vdmUoKTtcbiAgc3RhdGUub3B0aW9ucyA9IHN0YXRlLm9wdGlvbnMuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmluZGV4ICE9PSBpbmRleCk7XG4gIGlmIChzdGF0ZS5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHN0YXRlLmxhc3RJbmRleCA9IDA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDbGVhckxpc3QgPSAoXG4gIHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuKTogdm9pZCA9PiB7XG4gIHN0YXRlLm9wdGlvbnMgPSBbXTtcbiAgc3RhdGUubGFzdEluZGV4ID0gMDtcbiAgd2hpbGUgKHBhcmVudC5sYXN0Q2hpbGQpIHtcbiAgICBwYXJlbnQubGFzdENoaWxkLnJlbW92ZSgpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlU2FmZU9wdGlvbiA9IChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQgPT4ge1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpbmsuZG93bmxvYWQgPSBcInN0YXRlLmpzb25cIjtcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShzdGF0ZSldLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xuICBsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICBsaW5rLmNsaWNrKCk7XG4gIFVSTC5yZXZva2VPYmplY3RVUkwobGluay5ocmVmKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVMb2FkRmlsZVdpdGhPcHRpb25zID0gYXN5bmMgKFxuICBzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBpbnB1dCA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJpbnB1dFwiLFxuICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgIHsgbmFtZTogXCJ0eXBlXCIsIHZhbHVlOiBcImZpbGVcIiB9LFxuICAgICAgeyBuYW1lOiBcImFjY2VwdFwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBdLFxuICB9KTtcbiAgaW5wdXQuY2xpY2soKTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGV2ZW50LnRhcmdldC5maWxlcykge1xuICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcblxuICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG4gICAgICAgICAgbGV0IHBhcnNlZERhdGE6IHVua25vd247XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKGNvbnRlbnQpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBtb2RhbFdpdGhNZXNzYWdlKFwiUGFyc2luZyBjb21wbGV0ZWQgd2l0aCBtaXN0YWtlIVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLQntGI0LjQsdC60LAg0L/QsNGA0YHQuNC90LPQsCBKU09OOlwiLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzQXBwU3RhdGVEYXRhQ29ycmVjdChwYXJzZWREYXRhKSkge1xuICAgICAgICAgICAgc3RhdGUubGFzdEluZGV4ID0gcGFyc2VkRGF0YS5sYXN0SW5kZXg7XG4gICAgICAgICAgICBzdGF0ZS5vcHRpb25zID0gcGFyc2VkRGF0YS5vcHRpb25zO1xuICAgICAgICAgICAgY3JlYXRlTWFpblBhZ2UoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kYWxXaXRoTWVzc2FnZShcIkJlIGNhcmVmdWwhIExvYWRlZCBkYXRhIHdhcyBpbmNvcnJlY3QhXCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcItCU0LDQvdC90YvQtSDQvdC10LrQvtGA0YDQtdC60YLQvdGLXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBtb2RhbFdpdGhNZXNzYWdlKFwiTWlzdGFrZSBpbiBwcm9jZXNzIHRvIHJlYWQgZmlsZSFcIik7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcItCe0YjQuNCx0LrQsCDQv9GA0Lgg0YfRgtC10L3QuNC4INGE0LDQudC70LA6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBpc0FwcFN0YXRlRGF0YUNvcnJlY3QgPSAoXG4gIGRhdGE6IHVua25vd24sXG4pOiBkYXRhIGlzIE9taXQ8QXBwbGljYXRpb25TdGF0ZSwgXCJlbGVtZW50c1wiPiA9PiB7XG4gIGlmIChcbiAgICB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJlxuICAgIGRhdGEgIT09IG51bGwgJiZcbiAgICBcImxhc3RJbmRleFwiIGluIGRhdGEgJiZcbiAgICB0eXBlb2YgZGF0YS5sYXN0SW5kZXggPT09IFwibnVtYmVyXCIgJiZcbiAgICBcIm9wdGlvbnNcIiBpbiBkYXRhICYmXG4gICAgQXJyYXkuaXNBcnJheShkYXRhLm9wdGlvbnMpICYmXG4gICAgZGF0YS5vcHRpb25zLmV2ZXJ5KFxuICAgICAgKG9wdGlvbikgPT5cbiAgICAgICAgb3B0aW9uICYmXG4gICAgICAgIHR5cGVvZiBvcHRpb24uaW5kZXggPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbi5kZXNjcmlwdGlvbiA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9uLndlaWdodCA9PT0gXCJzdHJpbmdcIixcbiAgICApXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVTdGFydCA9IChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQgPT4ge1xuICBpZiAoaXNSZWFkeVRvTWFrZURlY2lzaW9uKHN0YXRlKSkge1xuICAgIGdsb2JhbFRoaXMuaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIFwiL2RlY2lzaW9uXCIpO1xuICAgIGhhbmRsZUxvY2F0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBQbGVhc2UgYWRkIGF0IGxlYXN0IDIgdmFsaWQgb3B0aW9ucy5cbiAgICBBbiBvcHRpb24gaXMgY29uc2lkZXJlZCB2YWxpZCBpZiBpdHMgdGl0bGUgaXMgbm90IGVtcHR5IGFuZCBpdHMgd2VpZ2h0IGlzIGdyZWF0ZXIgdGhhbiAwYDtcbiAgICBtb2RhbFdpdGhNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgRE9NRWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vZW51bXMvZG9tLWVsZW1lbnRzXCI7XG5pbXBvcnQgeyBhcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS9hcHBsaWNhdGlvbi1zdGF0ZVwiO1xuaW1wb3J0IHsgd3JhcHBlclN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL25vZGVcIjtcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JlbW92ZS1hbGwtY2hpbGRyZW5cIjtcbmltcG9ydCB7IG9wZW5Nb2RhbFdpbmRvdyB9IGZyb20gXCIuLi9tb2RhbC9vcGVuLW1vZGFsLXdpbmRvd1wiO1xuaW1wb3J0IHsgYWRkT3B0aW9uIH0gZnJvbSBcIi4vYWRkLW9wdGlvblwiO1xuaW1wb3J0IHtcbiAgaGFuZGxlQWRkT3B0aW9uLFxuICBoYW5kbGVDbGVhckxpc3QsXG4gIGhhbmRsZUxvYWRGaWxlV2l0aE9wdGlvbnMsXG4gIGhhbmRsZVNhZmVPcHRpb24sXG4gIGhhbmRsZVN0YXJ0LFxufSBmcm9tIFwiLi9oYW5kbGUtY2xpY2tcIjtcbmltcG9ydCB7IHRlbXBsYXRlRm9yTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC1wYXN0LW9wdGlvbnMvdGVtcGxhdGUtZm9yLW1vZGFsXCI7XG5cbmNvbnN0IGJ1dHRvblN0eWxlID1cbiAgXCJiZy1pbmRpZ28tMzAwIGJvcmRlciByb3VuZGVkLW1kIGJvcmRlci1ibGFjayBweC01IHB5LTEgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctaW5kaWdvLTUwMCB3LTUvNlwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFpblBhZ2UgPSAoKTogdm9pZCA9PiB7XG4gIHJlbW92ZUFsbENoaWxkcmVuKGRvY3VtZW50LmJvZHkpO1xuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZTogd3JhcHBlclN0eWxlcyxcbiAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXG4gIH0pO1xuICBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiaDFcIixcbiAgICBjbGFzc05hbWU6IFwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZW1lcmFsZC05MDBcIixcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gICAgdGV4dDogXCJEZWNpc2lvbiBtYWtpbmcgdG9vbFwiLFxuICB9KTtcbiAgY29uc3QgbGlzdE9mT3B0aW9uID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcInVsXCIsXG4gICAgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLXktMiBweS0xIHB4LTNcIixcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gIH0pO1xuXG4gIGFwcFN0YXRlLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgYWRkT3B0aW9uKG9wdGlvbiwgbGlzdE9mT3B0aW9uKTtcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uQWRkT3B0aW9uID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogYnV0dG9uU3R5bGUsXG4gICAgcGFyZW50OiB3cmFwcGVyLFxuICAgIHRleHQ6IFwiYWRkIG9wdGlvblwiLFxuICB9KTtcbiAgYnV0dG9uQWRkT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIGhhbmRsZUFkZE9wdGlvbihhcHBTdGF0ZSwgbGlzdE9mT3B0aW9uKSxcbiAgKTtcblxuICBjb25zdCBidXR0b25QYXN0TGlzdCA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IGJ1dHRvblN0eWxlLFxuICAgIHBhcmVudDogd3JhcHBlcixcbiAgICB0ZXh0OiBcInBhc3QgbGlzdFwiLFxuICB9KTtcbiAgYnV0dG9uUGFzdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuTW9kYWxXaW5kb3codGVtcGxhdGVGb3JNb2RhbCgpKTtcbiAgfSk7XG4gIGNvbnN0IGJ1dHRvbkNsZWFyTGlzdCA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IGJ1dHRvblN0eWxlLFxuICAgIHBhcmVudDogd3JhcHBlcixcbiAgICB0ZXh0OiBcImNsZWFyIGxpc3RcIixcbiAgfSk7XG4gIGJ1dHRvbkNsZWFyTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhhbmRsZUNsZWFyTGlzdChhcHBTdGF0ZSwgbGlzdE9mT3B0aW9uKTtcbiAgfSk7XG4gIGNvbnN0IGJ1dHRvblNhZmVMaXN0VG9GaWxlID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogYnV0dG9uU3R5bGUsXG4gICAgcGFyZW50OiB3cmFwcGVyLFxuICAgIHRleHQ6IFwic2FmZSBsaXN0IHRvIGZpbGVcIixcbiAgfSk7XG5cbiAgYnV0dG9uU2FmZUxpc3RUb0ZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBoYW5kbGVTYWZlT3B0aW9uKGFwcFN0YXRlKTtcbiAgfSk7XG4gIGNvbnN0IGJ1dHRvbkxvYWRMaXN0RnJvbUZpbGUgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3NOYW1lOiBidXR0b25TdHlsZSxcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gICAgdGV4dDogXCJsb2FkIGxpc3QgZnJvbSBmaWxlXCIsXG4gIH0pO1xuXG4gIGJ1dHRvbkxvYWRMaXN0RnJvbUZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgaGFuZGxlTG9hZEZpbGVXaXRoT3B0aW9ucyhhcHBTdGF0ZSksXG4gICk7XG5cbiAgY29uc3QgYnV0dG9uU3RhcnQgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3NOYW1lOiBidXR0b25TdHlsZSxcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gICAgdGV4dDogXCJzdGFydFwiLFxuICB9KTtcbiAgYnV0dG9uU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhhbmRsZVN0YXJ0KGFwcFN0YXRlKSk7XG5cbiAgYXBwU3RhdGUuZWxlbWVudHNbRE9NRWxlbWVudHMubGlzdE9mT3B0aW9uXSA9IGxpc3RPZk9wdGlvbjtcbn07XG4iLCJpbXBvcnQgeyBET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi8uLi9lbnVtcy9kb20tZWxlbWVudHNcIjtcbmltcG9ydCB0eXBlIHsgQXBwbGljYXRpb25TdGF0ZSwgb3B0aW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9zdGF0ZS90eXBlc1wiO1xuaW1wb3J0IHsgYWRkT3B0aW9uIH0gZnJvbSBcIi4uL2FkZC1vcHRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNsaWNrUGFzdE9wdGlvbiA9IChcbiAgdmFsdWU6IHN0cmluZyxcbiAgc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXG4pOiB2b2lkID0+IHtcbiAgY29uc3QgYXJyYXlXaXRoVmFsdWVzID0gdmFsdWUuc3BsaXQoXCJcXG5cIik7XG4gIGNvbnN0IGFycmF5V2l0aENvcnJlY3RWYWx1ZTogb3B0aW9uVHlwZVtdID0gW107XG4gIGFycmF5V2l0aFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4T2ZMYXN0Q29tbWEgPSB2YWx1ZS5sYXN0SW5kZXhPZihcIixcIik7XG4gICAgaWYgKGluZGV4T2ZMYXN0Q29tbWEgIT09IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0V2l0aE51bWJlciA9IHZhbHVlLnNsaWNlKGluZGV4T2ZMYXN0Q29tbWEgKyAxKS50cmltKCk7XG4gICAgICBpZiAoXG4gICAgICAgICFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQocGFydFdpdGhOdW1iZXIpKSAmJlxuICAgICAgICBwYXJ0V2l0aE51bWJlci5zcGxpdChcIi5cIikubGVuZ3RoIDw9IDJcbiAgICAgICkge1xuICAgICAgICBhcnJheVdpdGhDb3JyZWN0VmFsdWUucHVzaCh7XG4gICAgICAgICAgZGVzY3JpcHRpb246IHZhbHVlLnNsaWNlKDAsIGluZGV4T2ZMYXN0Q29tbWEpLFxuICAgICAgICAgIHdlaWdodDogcGFydFdpdGhOdW1iZXIsXG4gICAgICAgICAgaW5kZXg6ICsrc3RhdGUubGFzdEluZGV4LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGFycmF5V2l0aENvcnJlY3RWYWx1ZS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBzdGF0ZS5vcHRpb25zID0gWy4uLnN0YXRlLm9wdGlvbnMsIG9wdGlvbl07XG4gICAgYWRkT3B0aW9uKG9wdGlvbiwgc3RhdGUuZWxlbWVudHNbRE9NRWxlbWVudHMubGlzdE9mT3B0aW9uXSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXRlL2FwcGxpY2F0aW9uLXN0YXRlXCI7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL25vZGVcIjtcbmltcG9ydCB0eXBlIHsgbW9kYWxUeXBlcyB9IGZyb20gXCIuLi8uLi9tb2RhbC9vcGVuLW1vZGFsLXdpbmRvd1wiO1xuaW1wb3J0IHsgaGFuZGxlQ2xpY2tQYXN0T3B0aW9uIH0gZnJvbSBcIi4vaGFuZGxlLWNsaWNrLXBhc3Qtb3B0aW9uXCI7XG5cbmNvbnN0IHN0eWxlc0Zvck1vZGFsQnV0dG9uID0gYGJnLXRlYWwtNzAwIHJvdW5kZWQgYm9yZGVyLTIgYm9yZGVyLXRlYWwtODAwIHB5LTEgcHgtNCB0ZXh0LXRlYWwtMjAwIGhvdmVyOmJnLXRlYWwtODAwIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci10ZWFsLTcwMCBtci0yYDtcblxuY29uc3Qgc3R5bGVzRm9yVGV4dGFyZWEgPVxuICBcInctZnVsbCBiZy10ZWFsLTYwMCBweS0yIHB4LTIgb3V0bGluZS1ub25lIHJlc2l6ZS1ub25lIGgtWzE1MHB4XVwiO1xuXG5leHBvcnQgY29uc3QgdGVtcGxhdGVGb3JNb2RhbCA9ICgpOiBtb2RhbFR5cGVzID0+IHtcbiAgY29uc3QgZnJhZ21lbnRGb3JNb2RhbCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGNvbnN0IHRleHRBcmVhID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcInRleHRhcmVhXCIsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXNGb3JUZXh0YXJlYSxcbiAgICBwYXJlbnQ6IGZyYWdtZW50Rm9yTW9kYWwsXG4gICAgYXR0cmlidXRlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgIHZhbHVlOiBgUGFzdGUgYSBsaXN0IG9mIG5ldyBvcHRpb25zIGluIGEgQ1NWLWxpa2UgZm9ybWF0OlxudGl0bGUsMSAtPiB0aXRsZT1cInRpdGxlXCIsIHdpZ2h0PTFcbnRpdGxlIHdpdGggd2hpdGVzcGFjZSwyIC0+IHRpdGxlPVwidGl0bGUgd2l0aCB3aGl0ZXNwYWNlXCIsIHdpZ2h0PTJcbnRpdGxlICwgd2l0aCAsIGNvbW1hcywzIC0+IHRpdGxlPVwidGl0bGUgLCB3aXRoICwgY29tbWFzXCIsIHdpZ2h0PTNcbnRpdGxlIHdpdGggXCJxdW90ZXNcIiw0ICAgLT4gdGl0bGU9XCJ0aXRsZSB3aXRoIFwicXVvdGVzXCJcIiwgd2lnaHQ9NGAsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xuICBjb25zdCBidXR0b25zV3JhcHBlciA9IGNyZWF0ZU5vZGUoeyB0YWc6IFwiZGl2XCIsIHBhcmVudDogZnJhZ21lbnRGb3JNb2RhbCB9KTtcbiAgY29uc3QgYnV0dG9uQ2FuY2VsID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogc3R5bGVzRm9yTW9kYWxCdXR0b24sXG4gICAgcGFyZW50OiBidXR0b25zV3JhcHBlcixcbiAgICB0ZXh0OiBcImNhbmNlbFwiLFxuICB9KTtcbiAgY29uc3QgYnV0dG9uQ29uZmlybSA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IHN0eWxlc0Zvck1vZGFsQnV0dG9uLFxuICAgIHBhcmVudDogYnV0dG9uc1dyYXBwZXIsXG4gICAgdGV4dDogXCJjb25maXJtXCIsXG4gIH0pO1xuICBidXR0b25Db25maXJtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGV4dEFyZWEgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRleHRBcmVhLnZhbHVlO1xuICAgICAgaGFuZGxlQ2xpY2tQYXN0T3B0aW9uKHZhbHVlLCBhcHBTdGF0ZSk7XG4gICAgfVxuICAgIGJ1dHRvbkNvbmZpcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGU6IGZyYWdtZW50Rm9yTW9kYWwsXG4gICAgY2xvc2VFbGVtZW50czogW2J1dHRvbkNhbmNlbCwgYnV0dG9uQ29uZmlybV0sXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgc2ltcGxlQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9zdHlsZXNcIjtcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBtb2RhbFR5cGVzIH0gZnJvbSBcIi4uLy4uL21vZGFsL29wZW4tbW9kYWwtd2luZG93XCI7XG5pbXBvcnQgeyBvcGVuTW9kYWxXaW5kb3cgfSBmcm9tIFwiLi4vLi4vbW9kYWwvb3Blbi1tb2RhbC13aW5kb3dcIjtcblxuZXhwb3J0IGNvbnN0IG1vZGFsV2l0aE1lc3NhZ2VUZW1wbGF0ZSA9ICh0ZXh0OiBzdHJpbmcpOiBtb2RhbFR5cGVzID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBjcmVhdGVOb2RlKHsgdGFnOiBcImRpdlwiLCBjbGFzc05hbWU6IFwicC0zXCIgfSk7XG4gIGNyZWF0ZU5vZGUoeyB0YWc6IFwicFwiLCBjbGFzc05hbWU6IFwicC0yXCIsIHRleHQsIHBhcmVudDogdGVtcGxhdGUgfSk7XG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IHNpbXBsZUJ1dHRvbixcbiAgICB0ZXh0OiBcIk9LXCIsXG4gICAgcGFyZW50OiB0ZW1wbGF0ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgdGVtcGxhdGUsIGNsb3NlRWxlbWVudHM6IFtidXR0b25dIH07XG59O1xuXG5leHBvcnQgY29uc3QgbW9kYWxXaXRoTWVzc2FnZSA9ICh0ZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgb3Blbk1vZGFsV2luZG93KG1vZGFsV2l0aE1lc3NhZ2VUZW1wbGF0ZSh0ZXh0KSk7XG59O1xuIiwiaW1wb3J0IHsgcmVtb3ZlRWxlbWVudFdpdGhDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi91dGlscy9yZW1vdmUtZWxlbWVudC13aXRoLWNoaWxkcmVuXCI7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKFxuICBldmVudDogTW91c2VFdmVudCxcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIG1vZGFsV2luZG93OiBIVE1MRWxlbWVudCxcbik6IHZvaWQgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGlmICh0YXJnZXQgPT09IGVsZW1lbnQpIHtcbiAgICByZW1vdmVFbGVtZW50V2l0aENoaWxkcmVuKG1vZGFsV2luZG93KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbm9kZVwiO1xuaW1wb3J0IHsgaGFuZGxlQ2xvc2VNb2RhbCB9IGZyb20gXCIuL2hhbmRsZS1jbG9zZS1tb2RhbFwiO1xuXG5leHBvcnQgdHlwZSBtb2RhbFR5cGVzID0ge1xuICB0ZW1wbGF0ZTogSFRNTEVsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50O1xuICBjbG9zZUVsZW1lbnRzOiBIVE1MRWxlbWVudFtdO1xufTtcblxuZXhwb3J0IGNvbnN0IG9wZW5Nb2RhbFdpbmRvdyA9ICh7XG4gIHRlbXBsYXRlLFxuICBjbG9zZUVsZW1lbnRzID0gW10sXG59OiBtb2RhbFR5cGVzKTogdm9pZCA9PiB7XG4gIGNvbnN0IHN0eWxlTW9kYWxXaW5kb3cgPVxuICAgIFwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgdy1zY3JlZW4gaC1zY3JlZW4gYmctYW1iZXItOTAwLzcwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI7XG4gIGNvbnN0IHN0eWxlRm9ybU1vZGFsID1cbiAgICBcInctWzkwJV0gaC1taW4gcHktMiBweC0yIGJvcmRlci0zIGJvcmRlci1lbWVyYWxkLTYwMCBiZy1lbWVyYWxkLTMwMCByb3VuZGVkLWxnXCI7XG5cbiAgY29uc3QgZGlhbG9nID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImRpYWxvZ1wiLFxuICAgIGNsYXNzTmFtZTogc3R5bGVNb2RhbFdpbmRvdyxcbiAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXG4gIH0pO1xuICBkaWFsb2cuc2V0QXR0cmlidXRlKFwib3BlblwiLCBcInRydWVcIik7XG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiZm9ybVwiLFxuICAgIGNsYXNzTmFtZTogc3R5bGVGb3JtTW9kYWwsXG4gICAgcGFyZW50OiBkaWFsb2csXG4gIH0pO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbiAgZm9ybS5hcHBlbmQodGVtcGxhdGUpO1xuXG4gIFtkaWFsb2csIC4uLmNsb3NlRWxlbWVudHNdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBhZGRMaXN0ZW5lcihldmVudCk6IHZvaWQge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTGlzdGVuZXIpO1xuICAgICAgICBoYW5kbGVDbG9zZU1vZGFsKGV2ZW50LCBlbGVtZW50LCBkaWFsb2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGU0MDRwYWdlIH0gZnJvbSBcIi4uL3BhZ2VzLzQwNC1wYWdlLzQwNC1wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVEZWNpc2lvblBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvZGVjaXNpb24tcGFnZS9kZWNpc2lvbi1wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluUGFnZSB9IGZyb20gXCIuLi9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlXCI7XG5cbmV4cG9ydCB0eXBlIFJvdXRlRnVuY3Rpb24gPSAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xudHlwZSBNYXAgPSBSZWNvcmQ8c3RyaW5nLCAoKSA9PiB2b2lkPjtcblxuY29uc3Qgcm91dGUgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGdsb2JhbFRoaXMuaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIHRhcmdldC5ocmVmKTtcbiAgfVxuICBoYW5kbGVMb2NhdGlvbigpO1xufTtcblxuY29uc3Qgcm91dGVzOiBNYXAgPSB7XG4gIDQwNDogY3JlYXRlNDA0cGFnZSxcbiAgXCIvXCI6IGNyZWF0ZU1haW5QYWdlLFxuICBcIi9kZWNpc2lvblwiOiBjcmVhdGVEZWNpc2lvblBhZ2UsXG59O1xuXG5jb25zdCBoYW5kbGVMb2NhdGlvbiA9ICgpOiB2b2lkID0+IHtcbiAgbGV0IHBhdGggPSBnbG9iYWxUaGlzLmxvY2F0aW9uLnBhdGhuYW1lO1xuICBjb25zdCBnaXRodWJMaW5rID1cbiAgICBcInJvbGxpbmctc2NvcGVzLXNjaG9vbC5naXRodWIuaW8va2VsemVyb2NrLUpTRkUyMDI0UTQvZGVjaXNpb24tbWFraW5nLXRvb2xcIjtcbiAgaWYgKHBhdGguaW5jbHVkZXMoZ2l0aHViTGluaykpIHtcbiAgICBwYXRoID0gcGF0aC5zcGxpdChnaXRodWJMaW5rKVsxXTtcbiAgfVxuICBjb25zdCByb3V0ZSA9IHJvdXRlc1twYXRoXSB8fCByb3V0ZXNbNDA0XTtcbiAgaWYgKHR5cGVvZiByb3V0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcm91dGUoKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHJvdXRlO1xuICB9XG59O1xuXG5leHBvcnQgeyByb3V0ZSwgaGFuZGxlTG9jYXRpb24gfTtcbiIsImltcG9ydCB0eXBlIHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlID0ge1xuICBvcHRpb25zOiBbXSxcbiAgZWxlbWVudHM6IHt9LFxuICBsYXN0SW5kZXg6IDAsXG59O1xuXG5leHBvcnQgeyBhcHBTdGF0ZSB9O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGNvbnN0IHZpc3VhbGx5SGlkZGVuID1cbiAgXCJhYnNvbHV0ZSB3LXB4IGgtcHggLW0tcHggcHktWzBdIHB4LVswXSB3aGl0ZXNwYWNlLW5vd3JhcCBvdmVyZmxvdy1oaWRkZW5cIjtcblxuZXhwb3J0IGNvbnN0IHNpbXBsZUJ1dHRvbiA9XG4gIFwiYmctdGVhbC03MDAgcm91bmRlZCBib3JkZXItMiBib3JkZXItdGVhbC04MDAgcHktMSBweC00IHRleHQtdGVhbC0yMDAgaG92ZXI6YmctdGVhbC04MDAgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXRlYWwtNzAwIG1yLTJcIjtcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXJTdHlsZXMgPVxuICBcImZsZXgganVzdGlmeS1zdGFydCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctZW1lcmFsZC0zMDAgZ3JvdyBweS02IG1heC13LTJ4bCB3LTUvNiBteC1hdXRvIGdhcC15LTJcIjtcbiIsImltcG9ydCB0eXBlIHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgaXNSZWFkeVRvTWFrZURlY2lzaW9uID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHJlc3VsdFJpZ2h0QXJyYXkgPSBzdGF0ZS5vcHRpb25zLmZpbHRlcihcbiAgICAob3B0aW9uKSA9PlxuICAgICAgb3B0aW9uLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDAgJiYgTnVtYmVyLnBhcnNlRmxvYXQob3B0aW9uLndlaWdodCkgPiAwLFxuICApO1xuICByZXR1cm4gcmVzdWx0UmlnaHRBcnJheS5sZW5ndGggPiAxO1xufTtcbiIsInR5cGUgdHlwZUNyZWF0ZU5vZGUgPSB7XG4gIHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHBhcmVudD86IEhUTUxFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudDtcbiAgdGV4dD86IHN0cmluZztcbiAgYXR0cmlidXRlcz86IGF0dHJpYnV0ZXNbXTtcbn07XG5cbnR5cGUgYXR0cmlidXRlcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vZGUgPSAoe1xuICB0YWcsXG4gIGNsYXNzTmFtZSxcbiAgcGFyZW50LFxuICB0ZXh0LFxuICBhdHRyaWJ1dGVzLFxufTogdHlwZUNyZWF0ZU5vZGUpOiBIVE1MRWxlbWVudCA9PiB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XG4gIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0IHx8IFwiXCI7XG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIGlmIChwYXJlbnQpIHBhcmVudC5hcHBlbmQobm9kZSk7XG4gIHJldHVybiBub2RlO1xufTtcbiIsImV4cG9ydCBjb25zdCByZW1vdmVBbGxDaGlsZHJlbiA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuICB3aGlsZSAoZWxlbWVudC5sYXN0Q2hpbGQpIHtcbiAgICBlbGVtZW50Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCByZW1vdmVFbGVtZW50V2l0aENoaWxkcmVuID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG4gIHdoaWxlIChlbGVtZW50Lmxhc3RDaGlsZCkge1xuICAgIGVsZW1lbnQubGFzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIGVsZW1lbnQucmVtb3ZlKCk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaGFuZGxlTG9jYXRpb24gfSBmcm9tIFwiLi9yb3V0ZXIvcm91dGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5nbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBoYW5kbGVMb2NhdGlvbik7XG5cbmhhbmRsZUxvY2F0aW9uKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=