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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmQ4ZmYwOGE4NzMzYWVkZTkyMmUtbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNGQUFzRixXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtB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b0I7SUFDcEQsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0FBQ0gsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNKSyxJQUFNLHlCQUF5QixHQUFHLFVBQUMsT0FBb0I7SUFDNUQsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQzs7Ozs7OztVQ0xGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWlEO0FBQzVCO0FBRXJCLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsMERBQWMsQ0FBQyxDQUFDO0FBRXhELDhEQUFjLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2VudW1zL2RvbS1lbGVtZW50cy50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9wYWdlcy80MDQtcGFnZS80MDQtcGFnZS50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9wYWdlcy9kZWNpc2lvbi1wYWdlL2RlY2lzaW9uLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcGFnZXMvbWFpbi1wYWdlL2FkZC1vcHRpb24udHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcGFnZXMvbWFpbi1wYWdlL2hhbmRsZS1hZGQtb3B0aW9uLWlucHV0LnRzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL3BhZ2VzL21haW4tcGFnZS9oYW5kbGUtY2xpY2sudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9wYWdlcy9tYWluLXBhZ2UvbW9kYWwtcGFzdC1vcHRpb25zL2hhbmRsZS1jbGljay1wYXN0LW9wdGlvbi50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9wYWdlcy9tYWluLXBhZ2UvbW9kYWwtcGFzdC1vcHRpb25zL3RlbXBsYXRlLWZvci1tb2RhbC50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9wYWdlcy9tYWluLXBhZ2UvbW9kYWwtd2l0aC1tZXNzYWdlL21vZGFsLXdpdGgubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9wYWdlcy9tb2RhbC9oYW5kbGUtY2xvc2UtbW9kYWwudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcGFnZXMvbW9kYWwvb3Blbi1tb2RhbC13aW5kb3cudHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9zdGF0ZS9hcHBsaWNhdGlvbi1zdGF0ZS50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9zdHlsZXMvc3R5bGVzLnRzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL3V0aWxzL2lzLXJlYWR5LXRvLW1ha2UtZGVjaXNpb24udHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvdXRpbHMvbm9kZS50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy91dGlscy9yZW1vdmUtYWxsLWNoaWxkcmVuLnRzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL3V0aWxzL3JlbW92ZS1lbGVtZW50LXdpdGgtY2hpbGRyZW4udHMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qISB0YWlsd2luZGNzcyB2NC4wLjEyIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqL1xuQGxheWVyIHRoZW1lLCBiYXNlLCBjb21wb25lbnRzLCB1dGlsaXRpZXM7XG5AbGF5ZXIgdGhlbWUge1xuICA6cm9vdCwgOmhvc3Qge1xuICAgIC0tZm9udC1zYW5zOiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcbiAgICAgIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gICAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLFxuICAgICAgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gICAgLS1jb2xvci1hbWJlci05MDA6IG9rbGNoKDAuNDE0IDAuMTEyIDQ1LjkwNCk7XG4gICAgLS1jb2xvci1lbWVyYWxkLTMwMDogb2tsY2goMC44NDUgMC4xNDMgMTY0Ljk3OCk7XG4gICAgLS1jb2xvci1lbWVyYWxkLTQwMDogb2tsY2goMC43NjUgMC4xNzcgMTYzLjIyMyk7XG4gICAgLS1jb2xvci1lbWVyYWxkLTYwMDogb2tsY2goMC41OTYgMC4xNDUgMTYzLjIyNSk7XG4gICAgLS1jb2xvci1lbWVyYWxkLTcwMDogb2tsY2goMC41MDggMC4xMTggMTY1LjYxMik7XG4gICAgLS1jb2xvci1lbWVyYWxkLTgwMDogb2tsY2goMC40MzIgMC4wOTUgMTY2LjkxMyk7XG4gICAgLS1jb2xvci1lbWVyYWxkLTkwMDogb2tsY2goMC4zNzggMC4wNzcgMTY4Ljk0KTtcbiAgICAtLWNvbG9yLXRlYWwtMjAwOiBva2xjaCgwLjkxIDAuMDk2IDE4MC40MjYpO1xuICAgIC0tY29sb3ItdGVhbC02MDA6IG9rbGNoKDAuNiAwLjExOCAxODQuNzA0KTtcbiAgICAtLWNvbG9yLXRlYWwtNzAwOiBva2xjaCgwLjUxMSAwLjA5NiAxODYuMzkxKTtcbiAgICAtLWNvbG9yLXRlYWwtODAwOiBva2xjaCgwLjQzNyAwLjA3OCAxODguMjE2KTtcbiAgICAtLWNvbG9yLWluZGlnby0zMDA6IG9rbGNoKDAuNzg1IDAuMTE1IDI3NC43MTMpO1xuICAgIC0tY29sb3ItaW5kaWdvLTUwMDogb2tsY2goMC41ODUgMC4yMzMgMjc3LjExNyk7XG4gICAgLS1jb2xvci1ibGFjazogIzAwMDtcbiAgICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xuICAgIC0tc3BhY2luZzogMC4yNXJlbTtcbiAgICAtLWNvbnRhaW5lci0yeGw6IDQycmVtO1xuICAgIC0tdGV4dC14bDogMS4yNXJlbTtcbiAgICAtLXRleHQteGwtLWxpbmUtaGVpZ2h0OiBjYWxjKDEuNzUgLyAxLjI1KTtcbiAgICAtLXRleHQtM3hsOiAxLjg3NXJlbTtcbiAgICAtLXRleHQtM3hsLS1saW5lLWhlaWdodDogY2FsYygyLjI1IC8gMS44NzUpO1xuICAgIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xuICAgIC0tcmFkaXVzLXNtOiAwLjI1cmVtO1xuICAgIC0tcmFkaXVzLW1kOiAwLjM3NXJlbTtcbiAgICAtLXJhZGl1cy1sZzogMC41cmVtO1xuICAgIC0tZGVmYXVsdC1mb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcbiAgICAtLWRlZmF1bHQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiB2YXIoLS1mb250LXNhbnMtLWZvbnQtZmVhdHVyZS1zZXR0aW5ncyk7XG4gICAgLS1kZWZhdWx0LWZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiB2YXIoXG4gICAgICAtLWZvbnQtc2Fucy0tZm9udC12YXJpYXRpb24tc2V0dGluZ3NcbiAgICApO1xuICAgIC0tZGVmYXVsdC1tb25vLWZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICAgIC0tZGVmYXVsdC1tb25vLWZvbnQtZmVhdHVyZS1zZXR0aW5nczogdmFyKFxuICAgICAgLS1mb250LW1vbm8tLWZvbnQtZmVhdHVyZS1zZXR0aW5nc1xuICAgICk7XG4gICAgLS1kZWZhdWx0LW1vbm8tZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IHZhcihcbiAgICAgIC0tZm9udC1tb25vLS1mb250LXZhcmlhdGlvbi1zZXR0aW5nc1xuICAgICk7XG4gIH1cbn1cbkBsYXllciBiYXNlIHtcbiAgKiwgOjphZnRlciwgOjpiZWZvcmUsIDo6YmFja2Ryb3AsIDo6ZmlsZS1zZWxlY3Rvci1idXR0b24ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwIHNvbGlkO1xuICB9XG4gIGh0bWwsIDpob3N0IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICB0YWItc2l6ZTogNDtcbiAgICBmb250LWZhbWlseTogdmFyKCAtLWRlZmF1bHQtZm9udC1mYW1pbHksIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICk7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiB2YXIoLS1kZWZhdWx0LWZvbnQtZmVhdHVyZS1zZXR0aW5ncywgbm9ybWFsKTtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogdmFyKCAtLWRlZmF1bHQtZm9udC12YXJpYXRpb24tc2V0dGluZ3MsIG5vcm1hbCApO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgaHIge1xuICAgIGhlaWdodDogMDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gIH1cbiAgYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICB9XG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIH1cbiAgYiwgc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG4gIGNvZGUsIGtiZCwgc2FtcCwgcHJlIHtcbiAgICBmb250LWZhbWlseTogdmFyKCAtLWRlZmF1bHQtbW9uby1mb250LWZhbWlseSwgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICk7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiB2YXIoIC0tZGVmYXVsdC1tb25vLWZvbnQtZmVhdHVyZS1zZXR0aW5ncywgbm9ybWFsICk7XG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IHZhciggLS1kZWZhdWx0LW1vbm8tZm9udC12YXJpYXRpb24tc2V0dGluZ3MsIG5vcm1hbCApO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIHNtYWxsIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgfVxuICBzdWIsIHN1cCB7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuICBzdWIge1xuICAgIGJvdHRvbTogLTAuMjVlbTtcbiAgfVxuICBzdXAge1xuICAgIHRvcDogLTAuNWVtO1xuICB9XG4gIHRhYmxlIHtcbiAgICB0ZXh0LWluZGVudDogMDtcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuICA6LW1vei1mb2N1c3Jpbmcge1xuICAgIG91dGxpbmU6IGF1dG87XG4gIH1cbiAgcHJvZ3Jlc3Mge1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuICBzdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIH1cbiAgb2wsIHVsLCBtZW51IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIGltZywgc3ZnLCB2aWRlbywgY2FudmFzLCBhdWRpbywgaWZyYW1lLCBlbWJlZCwgb2JqZWN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIGltZywgdmlkZW8ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCBvcHRncm91cCwgdGV4dGFyZWEsIDo6ZmlsZS1zZWxlY3Rvci1idXR0b24ge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA6d2hlcmUoc2VsZWN0OmlzKFttdWx0aXBsZV0sIFtzaXplXSkpIG9wdGdyb3VwIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG4gIDp3aGVyZShzZWxlY3Q6aXMoW211bHRpcGxlXSwgW3NpemVdKSkgb3B0Z3JvdXAgb3B0aW9uIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMjBweDtcbiAgfVxuICA6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNHB4O1xuICB9XG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY29sb3I6IGNvbG9yLW1peChpbiBva2xhYiwgY3VycmVudENvbG9yIDUwJSwgdHJhbnNwYXJlbnQpO1xuICB9XG4gIHRleHRhcmVhIHtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICB9XG4gIDo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG4gIDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcbiAgICBtaW4taGVpZ2h0OiAxbGg7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgfVxuICA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cbiAgOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZmllbGRzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgOjotd2Via2l0LWRhdGV0aW1lLWVkaXQsIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQsIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxkLCA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1kYXktZmllbGQsIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWhvdXItZmllbGQsIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1pbnV0ZS1maWVsZCwgOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtc2Vjb25kLWZpZWxkLCA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1taWxsaXNlY29uZC1maWVsZCwgOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbWVyaWRpZW0tZmllbGQge1xuICAgIHBhZGRpbmctYmxvY2s6IDA7XG4gIH1cbiAgOi1tb3otdWktaW52YWxpZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBidXR0b24sIGlucHV0OndoZXJlKFt0eXBlPVwiYnV0dG9uXCJdLCBbdHlwZT1cInJlc2V0XCJdLCBbdHlwZT1cInN1Ym1pdFwiXSksIDo6ZmlsZS1zZWxlY3Rvci1idXR0b24ge1xuICAgIGFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgfVxuICA6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFtoaWRkZW5dOndoZXJlKDpub3QoW2hpZGRlbj1cInVudGlsLWZvdW5kXCJdKSkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQGxheWVyIHV0aWxpdGllcyB7XG4gIC5hYnNvbHV0ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5zdGF0aWMge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLnRvcC0wIHtcbiAgICB0b3A6IGNhbGModmFyKC0tc3BhY2luZykgKiAwKTtcbiAgfVxuICAucmlnaHQtMCB7XG4gICAgcmlnaHQ6IGNhbGModmFyKC0tc3BhY2luZykgKiAwKTtcbiAgfVxuICAuYm90dG9tLTAge1xuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDApO1xuICB9XG4gIC5sZWZ0LTAge1xuICAgIGxlZnQ6IGNhbGModmFyKC0tc3BhY2luZykgKiAwKTtcbiAgfVxuICAuLW0tcHgge1xuICAgIG1hcmdpbjogLTFweDtcbiAgfVxuICAubXgtYXV0byB7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgfVxuICAubXQtNCB7XG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDQpO1xuICB9XG4gIC5tci0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tc3BhY2luZykgKiAyKTtcbiAgfVxuICAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxuICAuaC1cXFxcWzE1MHB4XFxcXF0ge1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbiAgLmgtZnVsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5oLW1pbiB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgfVxuICAuaC1weCB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gIH1cbiAgLmgtc2NyZWVuIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC53LTVcXFxcLzYge1xuICAgIHdpZHRoOiBjYWxjKDUvNiAqIDEwMCUpO1xuICB9XG4gIC53LVxcXFxbOTBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC53LWZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC53LXB4IHtcbiAgICB3aWR0aDogMXB4O1xuICB9XG4gIC53LXNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG4gIC5tYXgtdy0yeGwge1xuICAgIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLTJ4bCk7XG4gIH1cbiAgLmdyb3cge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAucmVzaXplLW5vbmUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuICAuZ3JpZC1jb2xzLVxcXFxbNDBweF8xZnJfMTAwcHhfMTUwcHhcXFxcXSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmciAxMDBweCAxNTBweDtcbiAgfVxuICAuZmxleC1jb2wge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLml0ZW1zLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuanVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5qdXN0aWZ5LXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLmdhcC14LTEge1xuICAgIGNvbHVtbi1nYXA6IGNhbGModmFyKC0tc3BhY2luZykgKiAxKTtcbiAgfVxuICAuZ2FwLXktMiB7XG4gICAgcm93LWdhcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDIpO1xuICB9XG4gIC5vdmVyZmxvdy1oaWRkZW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnJvdW5kZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIH1cbiAgLnJvdW5kZWQtbGcge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIH1cbiAgLnJvdW5kZWQtbWQge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIH1cbiAgLnJvdW5kZWQtc20ge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIH1cbiAgLmJvcmRlciB7XG4gICAgYm9yZGVyLXN0eWxlOiB2YXIoLS10dy1ib3JkZXItc3R5bGUpO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICB9XG4gIC5ib3JkZXItMiB7XG4gICAgYm9yZGVyLXN0eWxlOiB2YXIoLS10dy1ib3JkZXItc3R5bGUpO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICB9XG4gIC5ib3JkZXItMyB7XG4gICAgYm9yZGVyLXN0eWxlOiB2YXIoLS10dy1ib3JkZXItc3R5bGUpO1xuICAgIGJvcmRlci13aWR0aDogM3B4O1xuICB9XG4gIC5ib3JkZXItYmxhY2sge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICB9XG4gIC5ib3JkZXItZW1lcmFsZC02MDAge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZW1lcmFsZC02MDApO1xuICB9XG4gIC5ib3JkZXItdGVhbC04MDAge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItdGVhbC04MDApO1xuICB9XG4gIC5iZy1hbWJlci05MDBcXFxcLzcwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLWNvbG9yLWFtYmVyLTkwMCkgNzAlLCB0cmFuc3BhcmVudCk7XG4gIH1cbiAgLmJnLWVtZXJhbGQtMzAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbWVyYWxkLTMwMCk7XG4gIH1cbiAgLmJnLWVtZXJhbGQtNDAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbWVyYWxkLTQwMCk7XG4gIH1cbiAgLmJnLWVtZXJhbGQtNjAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbWVyYWxkLTYwMCk7XG4gIH1cbiAgLmJnLWVtZXJhbGQtODAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbWVyYWxkLTgwMCk7XG4gIH1cbiAgLmJnLWluZGlnby0zMDAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWluZGlnby0zMDApO1xuICB9XG4gIC5iZy10ZWFsLTYwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVhbC02MDApO1xuICB9XG4gIC5iZy10ZWFsLTcwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVhbC03MDApO1xuICB9XG4gIC5wLTIge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2luZykgKiAyKTtcbiAgfVxuICAucC0zIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMyk7XG4gIH1cbiAgLnB4LTEge1xuICAgIHBhZGRpbmctaW5saW5lOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMSk7XG4gIH1cbiAgLnB4LTIge1xuICAgIHBhZGRpbmctaW5saW5lOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMik7XG4gIH1cbiAgLnB4LTMge1xuICAgIHBhZGRpbmctaW5saW5lOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMyk7XG4gIH1cbiAgLnB4LTQge1xuICAgIHBhZGRpbmctaW5saW5lOiBjYWxjKHZhcigtLXNwYWNpbmcpICogNCk7XG4gIH1cbiAgLnB4LTUge1xuICAgIHBhZGRpbmctaW5saW5lOiBjYWxjKHZhcigtLXNwYWNpbmcpICogNSk7XG4gIH1cbiAgLnB4LVxcXFxbMFxcXFxdIHtcbiAgICBwYWRkaW5nLWlubGluZTogMDtcbiAgfVxuICAucHktMSB7XG4gICAgcGFkZGluZy1ibG9jazogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDEpO1xuICB9XG4gIC5weS0yIHtcbiAgICBwYWRkaW5nLWJsb2NrOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMik7XG4gIH1cbiAgLnB5LTYge1xuICAgIHBhZGRpbmctYmxvY2s6IGNhbGModmFyKC0tc3BhY2luZykgKiA2KTtcbiAgfVxuICAucHktXFxcXFswXFxcXF0ge1xuICAgIHBhZGRpbmctYmxvY2s6IDA7XG4gIH1cbiAgLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC50ZXh0LTN4bCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LTN4bCk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLXR3LWxlYWRpbmcsIHZhcigtLXRleHQtM3hsLS1saW5lLWhlaWdodCkpO1xuICB9XG4gIC50ZXh0LXhsIHtcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQteGwpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS10dy1sZWFkaW5nLCB2YXIoLS10ZXh0LXhsLS1saW5lLWhlaWdodCkpO1xuICB9XG4gIC5mb250LWJvbGQge1xuICAgIC0tdHctZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgfVxuICAud2hpdGVzcGFjZS1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLnRleHQtZW1lcmFsZC05MDAge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1lbWVyYWxkLTkwMCk7XG4gIH1cbiAgLnRleHQtdGVhbC0yMDAge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZWFsLTIwMCk7XG4gIH1cbiAgLnRleHQtd2hpdGUge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIH1cbiAgLnVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAudW5kZXJsaW5lIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICB9XG4gIC5vdXRsaW5lLW5vbmUge1xuICAgIC0tdHctb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICB9XG4gIC5ob3ZlclxcXFw6Y3Vyc29yLXBvaW50ZXIge1xuICAgICY6aG92ZXIge1xuICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaG92ZXJcXFxcOmJvcmRlci10ZWFsLTcwMCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXRlYWwtNzAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhvdmVyXFxcXDpiZy1lbWVyYWxkLTcwMCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lbWVyYWxkLTcwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5ob3ZlclxcXFw6YmctaW5kaWdvLTUwMCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pbmRpZ28tNTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhvdmVyXFxcXDpiZy10ZWFsLTgwMCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZWFsLTgwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk0IDIzMyAxODEpO1xufVxuQHByb3BlcnR5IC0tdHctYm9yZGVyLXN0eWxlIHtcbiAgc3ludGF4OiBcIipcIjtcbiAgaW5oZXJpdHM6IGZhbHNlO1xuICBpbml0aWFsLXZhbHVlOiBzb2xpZDtcbn1cbkBwcm9wZXJ0eSAtLXR3LWZvbnQtd2VpZ2h0IHtcbiAgc3ludGF4OiBcIipcIjtcbiAgaW5oZXJpdHM6IGZhbHNlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlFQWNBO0FBZEEseUNBY0E7QUFkQTtFQUFBO0lBQUE7NkRBY0E7SUFkQTs4QkFjQTtJQWRBLDRDQWNBO0lBZEEsK0NBY0E7SUFkQSwrQ0FjQTtJQWRBLCtDQWNBO0lBZEEsK0NBY0E7SUFkQSwrQ0FjQTtJQWRBLDhDQWNBO0lBZEEsMkNBY0E7SUFkQSwwQ0FjQTtJQWRBLDRDQWNBO0lBZEEsNENBY0E7SUFkQSw4Q0FjQTtJQWRBLDhDQWNBO0lBZEEsbUJBY0E7SUFkQSxtQkFjQTtJQWRBLGtCQWNBO0lBZEEsc0JBY0E7SUFkQSxrQkFjQTtJQWRBLHlDQWNBO0lBZEEsb0JBY0E7SUFkQSwyQ0FjQTtJQWRBLHVCQWNBO0lBZEEsb0JBY0E7SUFkQSxxQkFjQTtJQWRBLG1CQWNBO0lBZEEsdUNBY0E7SUFkQSx3RUFjQTtJQWRBOztLQWNBO0lBZEEsNENBY0E7SUFkQTs7S0FjQTtJQWRBOztLQWNBO0VBQUE7QUFBQTtBQWRBO0VBQUE7SUFBQSxzQkFjQTtJQWRBLFNBY0E7SUFkQSxVQWNBO0lBZEEsZUFjQTtFQUFBO0VBZEE7SUFBQSxnQkFjQTtJQWRBLDhCQWNBO0lBZEEsV0FjQTtJQWRBLDZKQWNBO0lBZEEsbUVBY0E7SUFkQSx5RUFjQTtJQWRBLHdDQWNBO0VBQUE7RUFkQTtJQUFBLG9CQWNBO0VBQUE7RUFkQTtJQUFBLFNBY0E7SUFkQSxjQWNBO0lBZEEscUJBY0E7RUFBQTtFQWRBO0lBQUEseUNBY0E7SUFkQSxpQ0FjQTtFQUFBO0VBZEE7SUFBQSxrQkFjQTtJQWRBLG9CQWNBO0VBQUE7RUFkQTtJQUFBLGNBY0E7SUFkQSxnQ0FjQTtJQWRBLHdCQWNBO0VBQUE7RUFkQTtJQUFBLG1CQWNBO0VBQUE7RUFkQTtJQUFBLGtKQWNBO0lBZEEsMEVBY0E7SUFkQSw4RUFjQTtJQWRBLGNBY0E7RUFBQTtFQWRBO0lBQUEsY0FjQTtFQUFBO0VBZEE7SUFBQSxjQWNBO0lBZEEsY0FjQTtJQWRBLGtCQWNBO0lBZEEsd0JBY0E7RUFBQTtFQWRBO0lBQUEsZUFjQTtFQUFBO0VBZEE7SUFBQSxXQWNBO0VBQUE7RUFkQTtJQUFBLGNBY0E7SUFkQSxxQkFjQTtJQWRBLHlCQWNBO0VBQUE7RUFkQTtJQUFBLGFBY0E7RUFBQTtFQWRBO0lBQUEsd0JBY0E7RUFBQTtFQWRBO0lBQUEsa0JBY0E7RUFBQTtFQWRBO0lBQUEsZ0JBY0E7RUFBQTtFQWRBO0lBQUEsY0FjQTtJQWRBLHNCQWNBO0VBQUE7RUFkQTtJQUFBLGVBY0E7SUFkQSxZQWNBO0VBQUE7RUFkQTtJQUFBLGFBY0E7SUFkQSw4QkFjQTtJQWRBLGdDQWNBO0lBZEEsdUJBY0E7SUFkQSxjQWNBO0lBZEEsZ0JBY0E7SUFkQSw2QkFjQTtJQWRBLFVBY0E7RUFBQTtFQWRBO0lBQUEsbUJBY0E7RUFBQTtFQWRBO0lBQUEsMEJBY0E7RUFBQTtFQWRBO0lBQUEsc0JBY0E7RUFBQTtFQWRBO0lBQUEsVUFjQTtJQWRBLHlEQWNBO0VBQUE7RUFkQTtJQUFBLGdCQWNBO0VBQUE7RUFkQTtJQUFBLHdCQWNBO0VBQUE7RUFkQTtJQUFBLGVBY0E7SUFkQSxtQkFjQTtFQUFBO0VBZEE7SUFBQSxvQkFjQTtFQUFBO0VBZEE7SUFBQSxVQWNBO0VBQUE7RUFkQTtJQUFBLGdCQWNBO0VBQUE7RUFkQTtJQUFBLGdCQWNBO0VBQUE7RUFkQTtJQUFBLGtCQWNBO0VBQUE7RUFkQTtJQUFBLFlBY0E7RUFBQTtFQWRBO0lBQUEsd0JBY0E7RUFBQTtBQUFBO0FBZEE7RUFBQTtJQUFBLGtCQWNBO0VBQUE7RUFkQTtJQUFBLGdCQWNBO0VBQUE7RUFkQTtJQUFBLDZCQWNBO0VBQUE7RUFkQTtJQUFBLCtCQWNBO0VBQUE7RUFkQTtJQUFBLGdDQWNBO0VBQUE7RUFkQTtJQUFBLDhCQWNBO0VBQUE7RUFkQTtJQUFBLFlBY0E7RUFBQTtFQWRBO0lBQUEsbUJBY0E7RUFBQTtFQWRBO0lBQUEsb0NBY0E7RUFBQTtFQWRBO0lBQUEsc0NBY0E7RUFBQTtFQWRBO0lBQUEsYUFjQTtFQUFBO0VBZEE7SUFBQSxhQWNBO0VBQUE7RUFkQTtJQUFBLGFBY0E7RUFBQTtFQWRBO0lBQUEsWUFjQTtFQUFBO0VBZEE7SUFBQSxtQkFjQTtFQUFBO0VBZEE7SUFBQSxXQWNBO0VBQUE7RUFkQTtJQUFBLGFBY0E7RUFBQTtFQWRBO0lBQUEsdUJBY0E7RUFBQTtFQWRBO0lBQUEsVUFjQTtFQUFBO0VBZEE7SUFBQSxXQWNBO0VBQUE7RUFkQTtJQUFBLFVBY0E7RUFBQTtFQWRBO0lBQUEsWUFjQTtFQUFBO0VBZEE7SUFBQSwrQkFjQTtFQUFBO0VBZEE7SUFBQSxZQWNBO0VBQUE7RUFkQTtJQUFBLFlBY0E7RUFBQTtFQWRBO0lBQUEsMkNBY0E7RUFBQTtFQWRBO0lBQUEsc0JBY0E7RUFBQTtFQWRBO0lBQUEsbUJBY0E7RUFBQTtFQWRBO0lBQUEsdUJBY0E7RUFBQTtFQWRBO0lBQUEsMkJBY0E7RUFBQTtFQWRBO0lBQUEsb0NBY0E7RUFBQTtFQWRBO0lBQUEsaUNBY0E7RUFBQTtFQWRBO0lBQUEsZ0JBY0E7RUFBQTtFQWRBO0lBQUEsc0JBY0E7RUFBQTtFQWRBO0lBQUEsK0JBY0E7RUFBQTtFQWRBO0lBQUEsK0JBY0E7RUFBQTtFQWRBO0lBQUEsK0JBY0E7RUFBQTtFQWRBO0lBQUEsb0NBY0E7SUFkQSxpQkFjQTtFQUFBO0VBZEE7SUFBQSxvQ0FjQTtJQWRBLGlCQWNBO0VBQUE7RUFkQTtJQUFBLG9DQWNBO0lBZEEsaUJBY0E7RUFBQTtFQWRBO0lBQUEsZ0NBY0E7RUFBQTtFQWRBO0lBQUEsc0NBY0E7RUFBQTtFQWRBO0lBQUEsbUNBY0E7RUFBQTtFQWRBO0lBQUEsOEVBY0E7RUFBQTtFQWRBO0lBQUEsMENBY0E7RUFBQTtFQWRBO0lBQUEsMENBY0E7RUFBQTtFQWRBO0lBQUEsMENBY0E7RUFBQTtFQWRBO0lBQUEsMENBY0E7RUFBQTtFQWRBO0lBQUEseUNBY0E7RUFBQTtFQWRBO0lBQUEsdUNBY0E7RUFBQTtFQWRBO0lBQUEsdUNBY0E7RUFBQTtFQWRBO0lBQUEsaUNBY0E7RUFBQTtFQWRBO0lBQUEsaUNBY0E7RUFBQTtFQWRBO0lBQUEsd0NBY0E7RUFBQTtFQWRBO0lBQUEsd0NBY0E7RUFBQTtFQWRBO0lBQUEsd0NBY0E7RUFBQTtFQWRBO0lBQUEsd0NBY0E7RUFBQTtFQWRBO0lBQUEsd0NBY0E7RUFBQTtFQWRBO0lBQUEsaUJBY0E7RUFBQTtFQWRBO0lBQUEsdUNBY0E7RUFBQTtFQWRBO0lBQUEsdUNBY0E7RUFBQTtFQWRBO0lBQUEsdUNBY0E7RUFBQTtFQWRBO0lBQUEsZ0JBY0E7RUFBQTtFQWRBO0lBQUEsa0JBY0E7RUFBQTtFQWRBO0lBQUEsaUJBY0E7RUFBQTtFQWRBO0lBQUEsMEJBY0E7SUFkQSw0REFjQTtFQUFBO0VBZEE7SUFBQSx5QkFjQTtJQWRBLDJEQWNBO0VBQUE7RUFkQTtJQUFBLHlDQWNBO0lBZEEsb0NBY0E7RUFBQTtFQWRBO0lBQUEsbUJBY0E7RUFBQTtFQWRBO0lBQUEsK0JBY0E7RUFBQTtFQWRBO0lBQUEsNEJBY0E7RUFBQTtFQWRBO0lBQUEseUJBY0E7RUFBQTtFQWRBO0lBQUEseUJBY0E7RUFBQTtFQWRBO0lBQUEsK0JBY0E7RUFBQTtFQWRBO0lBQUEsd0JBY0E7SUFkQSxtQkFjQTtFQUFBO0VBZEE7SUFBQTtNQUFBO1FBQUEsZUFjQTtNQUFBO0lBQUE7RUFBQTtFQWRBO0lBQUE7TUFBQTtRQUFBLG1DQWNBO01BQUE7SUFBQTtFQUFBO0VBZEE7SUFBQTtNQUFBO1FBQUEsMENBY0E7TUFBQTtJQUFBO0VBQUE7RUFkQTtJQUFBO01BQUE7UUFBQSx5Q0FjQTtNQUFBO0lBQUE7RUFBQTtFQWRBO0lBQUE7TUFBQTtRQUFBLHVDQWNBO01BQUE7SUFBQTtFQUFBO0FBQUE7QUFkQTtFQUFBLGFBY0E7RUFkQSxzQkFjQTtFQWRBLFdBY0E7RUFkQSxhQWNBO0VBZEEsU0FjQTtFQWRBLFVBY0E7RUFkQSxpQ0FjQTtBQUFBO0FBZEE7RUFBQSxXQWNBO0VBZEEsZUFjQTtFQWRBLG9CQWNBO0FBQUE7QUFkQTtFQUFBLFdBY0E7RUFkQSxlQWNBO0FBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC1ub3RhdGlvbiAqL1xcbkBpbXBvcnQgXFxcInRhaWx3aW5kY3NzXFxcIjtcXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NCAyMzMgMTgxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBlbnVtIERPTUVsZW1lbnRzIHtcbiAgbGlzdE9mT3B0aW9uID0gXCJsaXN0T2ZPcHRpb25cIixcbn1cbiIsImltcG9ydCB7IGhhbmRsZUxvY2F0aW9uIH0gZnJvbSBcIi4uLy4uL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB7IHZpc3VhbGx5SGlkZGVuIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9zdHlsZXNcIjtcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbm9kZVwiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvcmVtb3ZlLWFsbC1jaGlsZHJlblwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlNDA0cGFnZSA9ICgpOiB2b2lkID0+IHtcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSk7XG4gIGNvbnN0IHRlbXBsYXRlID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImRpdlwiLFxuICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcbiAgICBjbGFzc05hbWU6IFwidy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxuICB9KTtcbiAgY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImgxXCIsXG4gICAgcGFyZW50OiB0ZW1wbGF0ZSxcbiAgICBjbGFzc05hbWU6IHZpc3VhbGx5SGlkZGVuLFxuICAgIHRleHQ6IFwiZGVjaXNpb24gbWFraW5nIHRvb2xcIixcbiAgfSk7XG4gIGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJoMlwiLFxuICAgIHBhcmVudDogdGVtcGxhdGUsXG4gICAgdGV4dDogXCJTb3JyeSwgdGhpcyBwYWdlIGRvZXNuJ3QgZXhpc3QuIFlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gdGhlIG1haW4gcGFnZS5cIixcbiAgICBjbGFzc05hbWU6IFwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIixcbiAgfSk7XG4gIGNvbnN0IGxpbmsgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiYVwiLFxuICAgIHBhcmVudDogdGVtcGxhdGUsXG4gICAgdGV4dDogXCJtYWluIHBhZ2VcIixcbiAgICBjbGFzc05hbWU6IFwiZm9udC1ib2xkIG10LTQgIHRleHQteGwgdW5kZXJsaW5lIHVwcGVyY2FzZSB0ZXh0LWVtZXJhbGQtOTAwXCIsXG4gICAgYXR0cmlidXRlczogW3sgbmFtZTogXCJocmVmXCIsIHZhbHVlOiBcIi9cIiB9XSxcbiAgfSk7XG5cbiAgY29uc3QgdGltZW91dElEID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZ2xvYmFsVGhpcy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgXCIvXCIpO1xuICAgIGhhbmRsZUxvY2F0aW9uKCk7XG4gIH0sIDUwMDApO1xuXG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgZ2xvYmFsVGhpcy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgXCIvXCIpO1xuICAgIGhhbmRsZUxvY2F0aW9uKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHNpbXBsZUJ1dHRvbiwgd3JhcHBlclN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL25vZGVcIjtcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JlbW92ZS1hbGwtY2hpbGRyZW5cIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlY2lzaW9uUGFnZSA9ICgpOiB2b2lkID0+IHtcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSk7XG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiZGl2XCIsXG4gICAgY2xhc3NOYW1lOiB3cmFwcGVyU3R5bGVzLFxuICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcbiAgfSk7XG5cbiAgY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImgxXCIsXG4gICAgY2xhc3NOYW1lOiBcInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtOTAwXCIsXG4gICAgcGFyZW50OiB3cmFwcGVyLFxuICAgIHRleHQ6IFwiRGVjaXNpb24gbWFraW5nIHRvb2xcIixcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uc0Jsb2NrID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gIH0pO1xuICBjb25zdCBidXR0b25QbGF5ID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogc2ltcGxlQnV0dG9uLFxuICAgIHBhcmVudDogd3JhcHBlcixcbiAgICB0ZXh0OiBcInN0YXJ0XCIsXG4gIH0pO1xuICBjb25zdCBpbmZvcm1hdGlvbkRpc3BsYXkgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiZGl2XCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgIHBhcmVudDogd3JhcHBlcixcbiAgICB0ZXh0OiBcImZvciBzdGFydCAtIHB1c2ggdGhlIHBsYXkgYnV0dG9uXCIsXG4gIH0pO1xuICBjb25zdCBjYW52YXNCbG9jayA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJkaXZcIixcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICB9KTtcbiAgY29uc29sZS5sb2coYnV0dG9uc0Jsb2NrLCBidXR0b25QbGF5LCBpbmZvcm1hdGlvbkRpc3BsYXksIGNhbnZhc0Jsb2NrKTtcbn07XG4iLCJpbXBvcnQgeyBhcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS9hcHBsaWNhdGlvbi1zdGF0ZVwiO1xuaW1wb3J0IHR5cGUgeyBvcHRpb25UeXBlIH0gZnJvbSBcIi4uLy4uL3N0YXRlL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL25vZGVcIjtcbmltcG9ydCB7XG4gIGhhbmRsZUFkZE9wdGlvbklucHV0LFxuICBoYW5kbGVBZGRPcHRpb25JbnB1dE9ubHlOdW1iZXIsXG59IGZyb20gXCIuL2hhbmRsZS1hZGQtb3B0aW9uLWlucHV0XCI7XG5pbXBvcnQgeyBoYW5kbGVEZWxldGVPcHRpb24gfSBmcm9tIFwiLi9oYW5kbGUtY2xpY2tcIjtcblxuY29uc3QgYWRkT3B0aW9uID0gKG9wdGlvbjogb3B0aW9uVHlwZSwgcGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuICBjb25zdCBzdHlsZUxpRWxlbWVudCA9XG4gICAgICBcImJnLWVtZXJhbGQtNDAwIGdyaWQgZ3JpZC1jb2xzLVs0MHB4XzFmcl8xMDBweF8xNTBweF0gZ2FwLXgtMSBweC0xIHB5LTEgcm91bmRlZC1zbVwiLFxuICAgIHN0eWxlU3BhbkVsZW1lbnQgPVxuICAgICAgXCJiZy1lbWVyYWxkLTYwMCByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICBzdHlsZUlucHV0ID1cbiAgICAgIFwiYmctZW1lcmFsZC04MDAgdGV4dC13aGl0ZSB0ZXh0LXJpZ2h0IHB4LTIgcHktMSByb3VuZGVkLXNtIG91dGxpbmUtbm9uZVwiLFxuICAgIHN0eWxlQnV0dG9uID1cbiAgICAgIFwiYmctZW1lcmFsZC02MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIGhvdmVyOmJnLWVtZXJhbGQtNzAwIGhvdmVyOmN1cnNvci1wb2ludGVyXCI7XG5cbiAgY29uc3QgaXRlbUxpID0gY3JlYXRlTm9kZSh7IHRhZzogXCJsaVwiLCBjbGFzc05hbWU6IHN0eWxlTGlFbGVtZW50LCBwYXJlbnQgfSk7XG4gIGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJzcGFuXCIsXG4gICAgY2xhc3NOYW1lOiBzdHlsZVNwYW5FbGVtZW50LFxuICAgIHBhcmVudDogaXRlbUxpLFxuICAgIHRleHQ6IGAjJHtvcHRpb24uaW5kZXh9YCxcbiAgfSk7XG4gIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiaW5wdXRcIixcbiAgICBjbGFzc05hbWU6IHN0eWxlSW5wdXQsXG4gICAgcGFyZW50OiBpdGVtTGksXG4gICAgYXR0cmlidXRlczogW3sgbmFtZTogXCJ2YWx1ZVwiLCB2YWx1ZTogb3B0aW9uLmRlc2NyaXB0aW9uIH1dLFxuICB9KTtcbiAgaWYgKGlucHV0RGVzY3JpcHRpb24gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgaGFuZGxlQWRkT3B0aW9uSW5wdXQoaW5wdXREZXNjcmlwdGlvbiwgb3B0aW9uLmluZGV4LCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaW5wdXRXZWlnaHQgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiaW5wdXRcIixcbiAgICBjbGFzc05hbWU6IHN0eWxlSW5wdXQsXG4gICAgcGFyZW50OiBpdGVtTGksXG4gICAgYXR0cmlidXRlczogW3sgbmFtZTogXCJ2YWx1ZVwiLCB2YWx1ZTogb3B0aW9uLndlaWdodCB9XSxcbiAgfSk7XG4gIGlmIChpbnB1dFdlaWdodCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICBpbnB1dFdlaWdodC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgaGFuZGxlQWRkT3B0aW9uSW5wdXRPbmx5TnVtYmVyKGlucHV0V2VpZ2h0LCBvcHRpb24uaW5kZXgsIFwid2VpZ2h0XCIpO1xuICAgIH0pO1xuICB9XG4gIGlucHV0V2VpZ2h0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9wdGlvbi53ZWlnaHQpO1xuICBjb25zdCBidXR0b25EZWxldGVPcHRpb24gPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3NOYW1lOiBzdHlsZUJ1dHRvbixcbiAgICBwYXJlbnQ6IGl0ZW1MaSxcbiAgICB0ZXh0OiBcImRlbGV0ZVwiLFxuICB9KTtcbiAgYnV0dG9uRGVsZXRlT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGFuZGxlRGVsZXRlT3B0aW9uKGFwcFN0YXRlLCBpdGVtTGksIG9wdGlvbi5pbmRleCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYWRkT3B0aW9uIH07XG4iLCJpbXBvcnQgeyBhcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS9hcHBsaWNhdGlvbi1zdGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQWRkT3B0aW9uSW5wdXQgPSAoXG4gIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LFxuICBpbmRleDogbnVtYmVyLFxuICBpbmZvOiBcImRlc2NyaXB0aW9uXCIgfCBcIndlaWdodFwiLFxuKTogdm9pZCA9PiB7XG4gIGFwcFN0YXRlLm9wdGlvbnMgPSBhcHBTdGF0ZS5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgaWYgKG9wdGlvbi5pbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmZvID09PSBcImRlc2NyaXB0aW9uXCJcbiAgICAgICAgPyB7IC4uLm9wdGlvbiwgZGVzY3JpcHRpb246IGlucHV0LnZhbHVlIH1cbiAgICAgICAgOiB7IC4uLm9wdGlvbiwgd2VpZ2h0OiBpbnB1dC52YWx1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBZGRPcHRpb25JbnB1dE9ubHlOdW1iZXIgPSAoXG4gIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LFxuICBpbmRleDogbnVtYmVyLFxuICBpbmZvOiBcImRlc2NyaXB0aW9uXCIgfCBcIndlaWdodFwiLFxuKTogdm9pZCA9PiB7XG4gIGxldCBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL1teMC05Ll0vZywgXCJcIik7XG4gIGNvbnN0IHBhcnRzID0gbmV3VmFsdWUuc3BsaXQoXCIuXCIpO1xuICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgIG5ld1ZhbHVlID0gcGFydHMuc2hpZnQoKSArIFwiLlwiICsgcGFydHMuam9pbihcIlwiKTtcbiAgfVxuICBpbnB1dC52YWx1ZSA9IG5ld1ZhbHVlO1xuXG4gIGhhbmRsZUFkZE9wdGlvbklucHV0KGlucHV0LCBpbmRleCwgaW5mbyk7XG59O1xuIiwiaW1wb3J0IHsgaGFuZGxlTG9jYXRpb24gfSBmcm9tIFwiLi4vLi4vcm91dGVyL3JvdXRlclwiO1xuaW1wb3J0IHR5cGUgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlL3R5cGVzXCI7XG5pbXBvcnQgeyBpc1JlYWR5VG9NYWtlRGVjaXNpb24gfSBmcm9tIFwiLi4vLi4vdXRpbHMvaXMtcmVhZHktdG8tbWFrZS1kZWNpc2lvblwiO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlscy9ub2RlXCI7XG5pbXBvcnQgeyBhZGRPcHRpb24gfSBmcm9tIFwiLi9hZGQtb3B0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluUGFnZSB9IGZyb20gXCIuL21haW4tcGFnZVwiO1xuaW1wb3J0IHsgbW9kYWxXaXRoTWVzc2FnZSB9IGZyb20gXCIuL21vZGFsLXdpdGgtbWVzc2FnZS9tb2RhbC13aXRoLm1lc3NhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFkZE9wdGlvbiA9IChcbiAgc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4pOiB2b2lkID0+IHtcbiAgY29uc3QgaW5kZXggPSArK3N0YXRlLmxhc3RJbmRleDtcbiAgY29uc3QgbmV3T3B0aW9uID0geyBpbmRleCwgZGVzY3JpcHRpb246IFwiXCIsIHdlaWdodDogXCJcIiB9O1xuICBzdGF0ZS5vcHRpb25zID0gWy4uLnN0YXRlLm9wdGlvbnMsIG5ld09wdGlvbl07XG4gIGFkZE9wdGlvbihuZXdPcHRpb24sIHBhcmVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGVsZXRlT3B0aW9uID0gKFxuICBzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcbiAgaW5kZXg6IG51bWJlcixcbik6IHZvaWQgPT4ge1xuICB3aGlsZSAodGFyZ2V0Lmxhc3RDaGlsZCkge1xuICAgIHRhcmdldC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgdGFyZ2V0LnJlbW92ZSgpO1xuICBzdGF0ZS5vcHRpb25zID0gc3RhdGUub3B0aW9ucy5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5kZXggIT09IGluZGV4KTtcbiAgaWYgKHN0YXRlLm9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgc3RhdGUubGFzdEluZGV4ID0gMDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNsZWFyTGlzdCA9IChcbiAgc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4pOiB2b2lkID0+IHtcbiAgc3RhdGUub3B0aW9ucyA9IFtdO1xuICBzdGF0ZS5sYXN0SW5kZXggPSAwO1xuICB3aGlsZSAocGFyZW50Lmxhc3RDaGlsZCkge1xuICAgIHBhcmVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVTYWZlT3B0aW9uID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZCA9PiB7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGluay5kb3dubG9hZCA9IFwic3RhdGUuanNvblwiO1xuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KHN0YXRlKV0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XG4gIGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gIGxpbmsuY2xpY2soKTtcbiAgVVJMLnJldm9rZU9iamVjdFVSTChsaW5rLmhyZWYpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvYWRGaWxlV2l0aE9wdGlvbnMgPSBhc3luYyAoXG4gIHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImlucHV0XCIsXG4gICAgYXR0cmlidXRlczogW1xuICAgICAgeyBuYW1lOiBcInR5cGVcIiwgdmFsdWU6IFwiZmlsZVwiIH0sXG4gICAgICB7IG5hbWU6IFwiYWNjZXB0XCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIF0sXG4gIH0pO1xuICBpbnB1dC5jbGljaygpO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZXZlbnQudGFyZ2V0LmZpbGVzKSB7XG4gICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgICBpZiAoZmlsZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmaWxlLnRleHQoKTtcbiAgICAgICAgICBsZXQgcGFyc2VkRGF0YTogdW5rbm93bjtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UoY29udGVudCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIG1vZGFsV2l0aE1lc3NhZ2UoXCJQYXJzaW5nIGNvbXBsZXRlZCB3aXRoIG1pc3Rha2UhXCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcItCe0YjQuNCx0LrQsCDQv9Cw0YDRgdC40L3Qs9CwIEpTT046XCIsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNBcHBTdGF0ZURhdGFDb3JyZWN0KHBhcnNlZERhdGEpKSB7XG4gICAgICAgICAgICBzdGF0ZS5sYXN0SW5kZXggPSBwYXJzZWREYXRhLmxhc3RJbmRleDtcbiAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMgPSBwYXJzZWREYXRhLm9wdGlvbnM7XG4gICAgICAgICAgICBjcmVhdGVNYWluUGFnZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RhbFdpdGhNZXNzYWdlKFwiQmUgY2FyZWZ1bCEgTG9hZGVkIGRhdGEgd2FzIGluY29ycmVjdCFcIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi0JTQsNC90L3Ri9C1INC90LXQutC+0YDRgNC10LrRgtC90YtcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIG1vZGFsV2l0aE1lc3NhZ2UoXCJNaXN0YWtlIGluIHByb2Nlc3MgdG8gcmVhZCBmaWxlIVwiKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDRh9GC0LXQvdC40Lgg0YTQsNC50LvQsDpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGlzQXBwU3RhdGVEYXRhQ29ycmVjdCA9IChcbiAgZGF0YTogdW5rbm93bixcbik6IGRhdGEgaXMgT21pdDxBcHBsaWNhdGlvblN0YXRlLCBcImVsZW1lbnRzXCI+ID0+IHtcbiAgaWYgKFxuICAgIHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmXG4gICAgZGF0YSAhPT0gbnVsbCAmJlxuICAgIFwibGFzdEluZGV4XCIgaW4gZGF0YSAmJlxuICAgIHR5cGVvZiBkYXRhLmxhc3RJbmRleCA9PT0gXCJudW1iZXJcIiAmJlxuICAgIFwib3B0aW9uc1wiIGluIGRhdGEgJiZcbiAgICBBcnJheS5pc0FycmF5KGRhdGEub3B0aW9ucykgJiZcbiAgICBkYXRhLm9wdGlvbnMuZXZlcnkoXG4gICAgICAob3B0aW9uKSA9PlxuICAgICAgICBvcHRpb24gJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbi5pbmRleCA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9uLmRlc2NyaXB0aW9uID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgIHR5cGVvZiBvcHRpb24ud2VpZ2h0ID09PSBcInN0cmluZ1wiLFxuICAgIClcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0YXJ0ID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZCA9PiB7XG4gIGlmIChpc1JlYWR5VG9NYWtlRGVjaXNpb24oc3RhdGUpKSB7XG4gICAgZ2xvYmFsVGhpcy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgXCIvZGVjaXNpb25cIik7XG4gICAgaGFuZGxlTG9jYXRpb24oKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFBsZWFzZSBhZGQgYXQgbGVhc3QgMiB2YWxpZCBvcHRpb25zLlxuICAgIEFuIG9wdGlvbiBpcyBjb25zaWRlcmVkIHZhbGlkIGlmIGl0cyB0aXRsZSBpcyBub3QgZW1wdHkgYW5kIGl0cyB3ZWlnaHQgaXMgZ3JlYXRlciB0aGFuIDBgO1xuICAgIG1vZGFsV2l0aE1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi9lbnVtcy9kb20tZWxlbWVudHNcIjtcbmltcG9ydCB7IGFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlL2FwcGxpY2F0aW9uLXN0YXRlXCI7XG5pbXBvcnQgeyB3cmFwcGVyU3R5bGVzIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9zdHlsZXNcIjtcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbm9kZVwiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvcmVtb3ZlLWFsbC1jaGlsZHJlblwiO1xuaW1wb3J0IHsgb3Blbk1vZGFsV2luZG93IH0gZnJvbSBcIi4uL21vZGFsL29wZW4tbW9kYWwtd2luZG93XCI7XG5pbXBvcnQgeyBhZGRPcHRpb24gfSBmcm9tIFwiLi9hZGQtb3B0aW9uXCI7XG5pbXBvcnQge1xuICBoYW5kbGVBZGRPcHRpb24sXG4gIGhhbmRsZUNsZWFyTGlzdCxcbiAgaGFuZGxlTG9hZEZpbGVXaXRoT3B0aW9ucyxcbiAgaGFuZGxlU2FmZU9wdGlvbixcbiAgaGFuZGxlU3RhcnQsXG59IGZyb20gXCIuL2hhbmRsZS1jbGlja1wiO1xuaW1wb3J0IHsgdGVtcGxhdGVGb3JNb2RhbCB9IGZyb20gXCIuL21vZGFsLXBhc3Qtb3B0aW9ucy90ZW1wbGF0ZS1mb3ItbW9kYWxcIjtcblxuY29uc3QgYnV0dG9uU3R5bGUgPVxuICBcImJnLWluZGlnby0zMDAgYm9yZGVyIHJvdW5kZWQtbWQgYm9yZGVyLWJsYWNrIHB4LTUgcHktMSBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1pbmRpZ28tNTAwIHctNS82XCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYWluUGFnZSA9ICgpOiB2b2lkID0+IHtcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSk7XG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiZGl2XCIsXG4gICAgY2xhc3NOYW1lOiB3cmFwcGVyU3R5bGVzLFxuICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcbiAgfSk7XG4gIGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJoMVwiLFxuICAgIGNsYXNzTmFtZTogXCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1lbWVyYWxkLTkwMFwiLFxuICAgIHBhcmVudDogd3JhcHBlcixcbiAgICB0ZXh0OiBcIkRlY2lzaW9uIG1ha2luZyB0b29sXCIsXG4gIH0pO1xuICBjb25zdCBsaXN0T2ZPcHRpb24gPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwidWxcIixcbiAgICBjbGFzc05hbWU6IFwiZmxleCBmbGV4LWNvbCBnYXAteS0yIHB5LTEgcHgtM1wiLFxuICAgIHBhcmVudDogd3JhcHBlcixcbiAgfSk7XG5cbiAgYXBwU3RhdGUub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBhZGRPcHRpb24ob3B0aW9uLCBsaXN0T2ZPcHRpb24pO1xuICB9KTtcblxuICBjb25zdCBidXR0b25BZGRPcHRpb24gPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3NOYW1lOiBidXR0b25TdHlsZSxcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gICAgdGV4dDogXCJhZGQgb3B0aW9uXCIsXG4gIH0pO1xuICBidXR0b25BZGRPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgaGFuZGxlQWRkT3B0aW9uKGFwcFN0YXRlLCBsaXN0T2ZPcHRpb24pLFxuICApO1xuXG4gIGNvbnN0IGJ1dHRvblBhc3RMaXN0ID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogYnV0dG9uU3R5bGUsXG4gICAgcGFyZW50OiB3cmFwcGVyLFxuICAgIHRleHQ6IFwicGFzdCBsaXN0XCIsXG4gIH0pO1xuICBidXR0b25QYXN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbFdpbmRvdyh0ZW1wbGF0ZUZvck1vZGFsKCkpO1xuICB9KTtcbiAgY29uc3QgYnV0dG9uQ2xlYXJMaXN0ID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogYnV0dG9uU3R5bGUsXG4gICAgcGFyZW50OiB3cmFwcGVyLFxuICAgIHRleHQ6IFwiY2xlYXIgbGlzdFwiLFxuICB9KTtcbiAgYnV0dG9uQ2xlYXJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGFuZGxlQ2xlYXJMaXN0KGFwcFN0YXRlLCBsaXN0T2ZPcHRpb24pO1xuICB9KTtcbiAgY29uc3QgYnV0dG9uU2FmZUxpc3RUb0ZpbGUgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3NOYW1lOiBidXR0b25TdHlsZSxcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gICAgdGV4dDogXCJzYWZlIGxpc3QgdG8gZmlsZVwiLFxuICB9KTtcblxuICBidXR0b25TYWZlTGlzdFRvRmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhhbmRsZVNhZmVPcHRpb24oYXBwU3RhdGUpO1xuICB9KTtcbiAgY29uc3QgYnV0dG9uTG9hZExpc3RGcm9tRmlsZSA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IGJ1dHRvblN0eWxlLFxuICAgIHBhcmVudDogd3JhcHBlcixcbiAgICB0ZXh0OiBcImxvYWQgbGlzdCBmcm9tIGZpbGVcIixcbiAgfSk7XG5cbiAgYnV0dG9uTG9hZExpc3RGcm9tRmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICBoYW5kbGVMb2FkRmlsZVdpdGhPcHRpb25zKGFwcFN0YXRlKSxcbiAgKTtcblxuICBjb25zdCBidXR0b25TdGFydCA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IGJ1dHRvblN0eWxlLFxuICAgIHBhcmVudDogd3JhcHBlcixcbiAgICB0ZXh0OiBcInN0YXJ0XCIsXG4gIH0pO1xuICBidXR0b25TdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlU3RhcnQoYXBwU3RhdGUpKTtcblxuICBhcHBTdGF0ZS5lbGVtZW50c1tET01FbGVtZW50cy5saXN0T2ZPcHRpb25dID0gbGlzdE9mT3B0aW9uO1xufTtcbiIsImltcG9ydCB7IERPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL2VudW1zL2RvbS1lbGVtZW50c1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBsaWNhdGlvblN0YXRlLCBvcHRpb25UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXRlL3R5cGVzXCI7XG5pbXBvcnQgeyBhZGRPcHRpb24gfSBmcm9tIFwiLi4vYWRkLW9wdGlvblwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2xpY2tQYXN0T3B0aW9uID0gKFxuICB2YWx1ZTogc3RyaW5nLFxuICBzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcbik6IHZvaWQgPT4ge1xuICBjb25zdCBhcnJheVdpdGhWYWx1ZXMgPSB2YWx1ZS5zcGxpdChcIlxcblwiKTtcbiAgY29uc3QgYXJyYXlXaXRoQ29ycmVjdFZhbHVlOiBvcHRpb25UeXBlW10gPSBbXTtcbiAgYXJyYXlXaXRoVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgaW5kZXhPZkxhc3RDb21tYSA9IHZhbHVlLmxhc3RJbmRleE9mKFwiLFwiKTtcbiAgICBpZiAoaW5kZXhPZkxhc3RDb21tYSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHBhcnRXaXRoTnVtYmVyID0gdmFsdWUuc2xpY2UoaW5kZXhPZkxhc3RDb21tYSArIDEpLnRyaW0oKTtcbiAgICAgIGlmIChcbiAgICAgICAgIU51bWJlci5pc05hTihOdW1iZXIucGFyc2VGbG9hdChwYXJ0V2l0aE51bWJlcikpICYmXG4gICAgICAgIHBhcnRXaXRoTnVtYmVyLnNwbGl0KFwiLlwiKS5sZW5ndGggPD0gMlxuICAgICAgKSB7XG4gICAgICAgIGFycmF5V2l0aENvcnJlY3RWYWx1ZS5wdXNoKHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdmFsdWUuc2xpY2UoMCwgaW5kZXhPZkxhc3RDb21tYSksXG4gICAgICAgICAgd2VpZ2h0OiBwYXJ0V2l0aE51bWJlcixcbiAgICAgICAgICBpbmRleDogKytzdGF0ZS5sYXN0SW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgYXJyYXlXaXRoQ29ycmVjdFZhbHVlLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIHN0YXRlLm9wdGlvbnMgPSBbLi4uc3RhdGUub3B0aW9ucywgb3B0aW9uXTtcbiAgICBhZGRPcHRpb24ob3B0aW9uLCBzdGF0ZS5lbGVtZW50c1tET01FbGVtZW50cy5saXN0T2ZPcHRpb25dKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgYXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vc3RhdGUvYXBwbGljYXRpb24tc3RhdGVcIjtcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBtb2RhbFR5cGVzIH0gZnJvbSBcIi4uLy4uL21vZGFsL29wZW4tbW9kYWwtd2luZG93XCI7XG5pbXBvcnQgeyBoYW5kbGVDbGlja1Bhc3RPcHRpb24gfSBmcm9tIFwiLi9oYW5kbGUtY2xpY2stcGFzdC1vcHRpb25cIjtcblxuY29uc3Qgc3R5bGVzRm9yTW9kYWxCdXR0b24gPSBgYmctdGVhbC03MDAgcm91bmRlZCBib3JkZXItMiBib3JkZXItdGVhbC04MDAgcHktMSBweC00IHRleHQtdGVhbC0yMDAgaG92ZXI6YmctdGVhbC04MDAgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXRlYWwtNzAwIG1yLTJgO1xuXG5jb25zdCBzdHlsZXNGb3JUZXh0YXJlYSA9XG4gIFwidy1mdWxsIGJnLXRlYWwtNjAwIHB5LTIgcHgtMiBvdXRsaW5lLW5vbmUgcmVzaXplLW5vbmUgaC1bMTUwcHhdXCI7XG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUZvck1vZGFsID0gKCk6IG1vZGFsVHlwZXMgPT4ge1xuICBjb25zdCBmcmFnbWVudEZvck1vZGFsID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgdGV4dEFyZWEgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwidGV4dGFyZWFcIixcbiAgICBjbGFzc05hbWU6IHN0eWxlc0ZvclRleHRhcmVhLFxuICAgIHBhcmVudDogZnJhZ21lbnRGb3JNb2RhbCxcbiAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgdmFsdWU6IGBQYXN0ZSBhIGxpc3Qgb2YgbmV3IG9wdGlvbnMgaW4gYSBDU1YtbGlrZSBmb3JtYXQ6XG50aXRsZSwxIC0+IHRpdGxlPVwidGl0bGVcIiwgd2lnaHQ9MVxudGl0bGUgd2l0aCB3aGl0ZXNwYWNlLDIgLT4gdGl0bGU9XCJ0aXRsZSB3aXRoIHdoaXRlc3BhY2VcIiwgd2lnaHQ9MlxudGl0bGUgLCB3aXRoICwgY29tbWFzLDMgLT4gdGl0bGU9XCJ0aXRsZSAsIHdpdGggLCBjb21tYXNcIiwgd2lnaHQ9M1xudGl0bGUgd2l0aCBcInF1b3Rlc1wiLDQgICAtPiB0aXRsZT1cInRpdGxlIHdpdGggXCJxdW90ZXNcIlwiLCB3aWdodD00YCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG4gIGNvbnN0IGJ1dHRvbnNXcmFwcGVyID0gY3JlYXRlTm9kZSh7IHRhZzogXCJkaXZcIiwgcGFyZW50OiBmcmFnbWVudEZvck1vZGFsIH0pO1xuICBjb25zdCBidXR0b25DYW5jZWwgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXNGb3JNb2RhbEJ1dHRvbixcbiAgICBwYXJlbnQ6IGJ1dHRvbnNXcmFwcGVyLFxuICAgIHRleHQ6IFwiY2FuY2VsXCIsXG4gIH0pO1xuICBjb25zdCBidXR0b25Db25maXJtID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogc3R5bGVzRm9yTW9kYWxCdXR0b24sXG4gICAgcGFyZW50OiBidXR0b25zV3JhcHBlcixcbiAgICB0ZXh0OiBcImNvbmZpcm1cIixcbiAgfSk7XG4gIGJ1dHRvbkNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIGlmICh0ZXh0QXJlYSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGV4dEFyZWEudmFsdWU7XG4gICAgICBoYW5kbGVDbGlja1Bhc3RPcHRpb24odmFsdWUsIGFwcFN0YXRlKTtcbiAgICB9XG4gICAgYnV0dG9uQ29uZmlybS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZTogZnJhZ21lbnRGb3JNb2RhbCxcbiAgICBjbG9zZUVsZW1lbnRzOiBbYnV0dG9uQ2FuY2VsLCBidXR0b25Db25maXJtXSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBzaW1wbGVCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3N0eWxlc1wiO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9ub2RlXCI7XG5pbXBvcnQgdHlwZSB7IG1vZGFsVHlwZXMgfSBmcm9tIFwiLi4vLi4vbW9kYWwvb3Blbi1tb2RhbC13aW5kb3dcIjtcbmltcG9ydCB7IG9wZW5Nb2RhbFdpbmRvdyB9IGZyb20gXCIuLi8uLi9tb2RhbC9vcGVuLW1vZGFsLXdpbmRvd1wiO1xuXG5leHBvcnQgY29uc3QgbW9kYWxXaXRoTWVzc2FnZVRlbXBsYXRlID0gKHRleHQ6IHN0cmluZyk6IG1vZGFsVHlwZXMgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZU5vZGUoeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJwLTNcIiB9KTtcbiAgY3JlYXRlTm9kZSh7IHRhZzogXCJwXCIsIGNsYXNzTmFtZTogXCJwLTJcIiwgdGV4dCwgcGFyZW50OiB0ZW1wbGF0ZSB9KTtcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlTm9kZSh7XG4gICAgdGFnOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogc2ltcGxlQnV0dG9uLFxuICAgIHRleHQ6IFwiT0tcIixcbiAgICBwYXJlbnQ6IHRlbXBsYXRlLFxuICB9KTtcblxuICByZXR1cm4geyB0ZW1wbGF0ZSwgY2xvc2VFbGVtZW50czogW2J1dHRvbl0gfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb2RhbFdpdGhNZXNzYWdlID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBvcGVuTW9kYWxXaW5kb3cobW9kYWxXaXRoTWVzc2FnZVRlbXBsYXRlKHRleHQpKTtcbn07XG4iLCJpbXBvcnQgeyByZW1vdmVFbGVtZW50V2l0aENoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JlbW92ZS1lbGVtZW50LXdpdGgtY2hpbGRyZW5cIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoXG4gIGV2ZW50OiBNb3VzZUV2ZW50LFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgbW9kYWxXaW5kb3c6IEhUTUxFbGVtZW50LFxuKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgaWYgKHRhcmdldCA9PT0gZWxlbWVudCkge1xuICAgIHJlbW92ZUVsZW1lbnRXaXRoQ2hpbGRyZW4obW9kYWxXaW5kb3cpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlscy9ub2RlXCI7XG5pbXBvcnQgeyBoYW5kbGVDbG9zZU1vZGFsIH0gZnJvbSBcIi4vaGFuZGxlLWNsb3NlLW1vZGFsXCI7XG5cbmV4cG9ydCB0eXBlIG1vZGFsVHlwZXMgPSB7XG4gIHRlbXBsYXRlOiBIVE1MRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnQ7XG4gIGNsb3NlRWxlbWVudHM6IEhUTUxFbGVtZW50W107XG59O1xuXG5leHBvcnQgY29uc3Qgb3Blbk1vZGFsV2luZG93ID0gKHtcbiAgdGVtcGxhdGUsXG4gIGNsb3NlRWxlbWVudHMgPSBbXSxcbn06IG1vZGFsVHlwZXMpOiB2b2lkID0+IHtcbiAgY29uc3Qgc3R5bGVNb2RhbFdpbmRvdyA9XG4gICAgXCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMCB3LXNjcmVlbiBoLXNjcmVlbiBiZy1hbWJlci05MDAvNzAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIjtcbiAgY29uc3Qgc3R5bGVGb3JtTW9kYWwgPVxuICAgIFwidy1bOTAlXSBoLW1pbiBweS0yIHB4LTIgYm9yZGVyLTMgYm9yZGVyLWVtZXJhbGQtNjAwIGJnLWVtZXJhbGQtMzAwIHJvdW5kZWQtbGdcIjtcblxuICBjb25zdCBkaWFsb2cgPSBjcmVhdGVOb2RlKHtcbiAgICB0YWc6IFwiZGlhbG9nXCIsXG4gICAgY2xhc3NOYW1lOiBzdHlsZU1vZGFsV2luZG93LFxuICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcbiAgfSk7XG4gIGRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIFwidHJ1ZVwiKTtcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZU5vZGUoe1xuICAgIHRhZzogXCJmb3JtXCIsXG4gICAgY2xhc3NOYW1lOiBzdHlsZUZvcm1Nb2RhbCxcbiAgICBwYXJlbnQ6IGRpYWxvZyxcbiAgfSk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuICBmb3JtLmFwcGVuZCh0ZW1wbGF0ZSk7XG5cbiAgW2RpYWxvZywgLi4uY2xvc2VFbGVtZW50c10uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGV2ZW50KTogdm9pZCB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRMaXN0ZW5lcik7XG4gICAgICAgIGhhbmRsZUNsb3NlTW9kYWwoZXZlbnQsIGVsZW1lbnQsIGRpYWxvZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZTQwNHBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvNDA0LXBhZ2UvNDA0LXBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZURlY2lzaW9uUGFnZSB9IGZyb20gXCIuLi9wYWdlcy9kZWNpc2lvbi1wYWdlL2RlY2lzaW9uLXBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5QYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL21haW4tcGFnZS9tYWluLXBhZ2VcIjtcblxuZXhwb3J0IHR5cGUgUm91dGVGdW5jdGlvbiA9IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG50eXBlIE1hcCA9IFJlY29yZDxzdHJpbmcsICgpID0+IHZvaWQ+O1xuXG5jb25zdCByb3V0ZSA9IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgZ2xvYmFsVGhpcy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgdGFyZ2V0LmhyZWYpO1xuICB9XG4gIGhhbmRsZUxvY2F0aW9uKCk7XG59O1xuXG5jb25zdCByb3V0ZXM6IE1hcCA9IHtcbiAgNDA0OiBjcmVhdGU0MDRwYWdlLFxuICBcIi9cIjogY3JlYXRlTWFpblBhZ2UsXG4gIFwiL2RlY2lzaW9uXCI6IGNyZWF0ZURlY2lzaW9uUGFnZSxcbn07XG5cbmNvbnN0IGhhbmRsZUxvY2F0aW9uID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBwYXRoID0gZ2xvYmFsVGhpcy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3Qgcm91dGUgPSByb3V0ZXNbcGF0aF0gfHwgcm91dGVzWzQwNF07XG4gIGlmICh0eXBlb2Ygcm91dGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJvdXRlKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSByb3V0ZTtcbiAgfVxufTtcblxuZXhwb3J0IHsgcm91dGUsIGhhbmRsZUxvY2F0aW9uIH07XG4iLCJpbXBvcnQgdHlwZSB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSA9IHtcbiAgb3B0aW9uczogW10sXG4gIGVsZW1lbnRzOiB7fSxcbiAgbGFzdEluZGV4OiAwLFxufTtcblxuZXhwb3J0IHsgYXBwU3RhdGUgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBjb25zdCB2aXN1YWxseUhpZGRlbiA9XG4gIFwiYWJzb2x1dGUgdy1weCBoLXB4IC1tLXB4IHB5LVswXSBweC1bMF0gd2hpdGVzcGFjZS1ub3dyYXAgb3ZlcmZsb3ctaGlkZGVuXCI7XG5cbmV4cG9ydCBjb25zdCBzaW1wbGVCdXR0b24gPVxuICBcImJnLXRlYWwtNzAwIHJvdW5kZWQgYm9yZGVyLTIgYm9yZGVyLXRlYWwtODAwIHB5LTEgcHgtNCB0ZXh0LXRlYWwtMjAwIGhvdmVyOmJnLXRlYWwtODAwIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci10ZWFsLTcwMCBtci0yXCI7XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyU3R5bGVzID1cbiAgXCJmbGV4IGp1c3RpZnktc3RhcnQgZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWVtZXJhbGQtMzAwIGdyb3cgcHktNiBtYXgtdy0yeGwgdy01LzYgbXgtYXV0byBnYXAteS0yXCI7XG4iLCJpbXBvcnQgdHlwZSB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGlzUmVhZHlUb01ha2VEZWNpc2lvbiA9IChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCByZXN1bHRSaWdodEFycmF5ID0gc3RhdGUub3B0aW9ucy5maWx0ZXIoXG4gICAgKG9wdGlvbikgPT5cbiAgICAgIG9wdGlvbi5kZXNjcmlwdGlvbi5sZW5ndGggPiAwICYmIE51bWJlci5wYXJzZUZsb2F0KG9wdGlvbi53ZWlnaHQpID4gMCxcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdFJpZ2h0QXJyYXkubGVuZ3RoID4gMTtcbn07XG4iLCJ0eXBlIHR5cGVDcmVhdGVOb2RlID0ge1xuICB0YWc6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcDtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBwYXJlbnQ/OiBIVE1MRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnQ7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGF0dHJpYnV0ZXM/OiBhdHRyaWJ1dGVzW107XG59O1xuXG50eXBlIGF0dHJpYnV0ZXMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOb2RlID0gKHtcbiAgdGFnLFxuICBjbGFzc05hbWUsXG4gIHBhcmVudCxcbiAgdGV4dCxcbiAgYXR0cmlidXRlcyxcbn06IHR5cGVDcmVhdGVOb2RlKTogSFRNTEVsZW1lbnQgPT4ge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCBcIlwiO1xuICBub2RlLnRleHRDb250ZW50ID0gdGV4dCB8fCBcIlwiO1xuICBpZiAoYXR0cmlidXRlcykge1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kKG5vZGUpO1xuICByZXR1cm4gbm9kZTtcbn07XG4iLCJleHBvcnQgY29uc3QgcmVtb3ZlQWxsQ2hpbGRyZW4gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQubGFzdENoaWxkKSB7XG4gICAgZWxlbWVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3QgcmVtb3ZlRWxlbWVudFdpdGhDaGlsZHJlbiA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuICB3aGlsZSAoZWxlbWVudC5sYXN0Q2hpbGQpIHtcbiAgICBlbGVtZW50Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuICBlbGVtZW50LnJlbW92ZSgpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGhhbmRsZUxvY2F0aW9uIH0gZnJvbSBcIi4vcm91dGVyL3JvdXRlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgaGFuZGxlTG9jYXRpb24pO1xuXG5oYW5kbGVMb2NhdGlvbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9