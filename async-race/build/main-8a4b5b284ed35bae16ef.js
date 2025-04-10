/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles.css ***!
  \************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/*! tailwindcss v4.1.1 | MIT License | https://tailwindcss.com */
@layer theme, base, components, utilities;
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
  @layer base {
    *, ::before, ::after, ::backdrop {
      --tw-border-style: solid;
      --tw-font-weight: initial;
      --tw-duration: initial;
    }
  }
}
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-700: oklch(55.4% 0.135 66.442);
    --color-yellow-800: oklch(47.6% 0.114 61.907);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-teal-900: oklch(38.6% 0.063 188.416);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-400: oklch(70.9% 0.01 56.259);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-stone-950: oklch(14.7% 0.004 49.25);
    --color-white: #fff;
    --spacing: 0.25rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --font-weight-bold: 700;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
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
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
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
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
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
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: color-mix(in oklab, currentColor 50%, transparent);
    }
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
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-\\[0px\\] {
    top: 0px;
  }
  .right-\\[0px\\] {
    right: 0px;
  }
  .right-\\[3px\\] {
    right: 3px;
  }
  .-bottom-\\[5px\\] {
    bottom: calc(5px * -1);
  }
  .bottom-\\[3px\\] {
    bottom: 3px;
  }
  .left-\\[0px\\] {
    left: 0px;
  }
  .left-\\[3px\\] {
    left: 3px;
  }
  .mx-3 {
    margin-inline: calc(var(--spacing) * 3);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .my-0 {
    margin-block: calc(var(--spacing) * 0);
  }
  .my-1 {
    margin-block: calc(var(--spacing) * 1);
  }
  .my-2 {
    margin-block: calc(var(--spacing) * 2);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .flex {
    display: flex;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-3\\/4 {
    height: calc(3/4 * 100%);
  }
  .h-\\[14px\\] {
    height: 14px;
  }
  .h-\\[50px\\] {
    height: 50px;
  }
  .h-full {
    height: 100%;
  }
  .min-h-full {
    min-height: 100%;
  }
  .w-3\\/4 {
    width: calc(3/4 * 100%);
  }
  .w-50 {
    width: calc(var(--spacing) * 50);
  }
  .w-\\[14px\\] {
    width: 14px;
  }
  .w-\\[40px\\] {
    width: 40px;
  }
  .w-\\[46px\\] {
    width: 46px;
  }
  .w-\\[100px\\] {
    width: 100px;
  }
  .w-full {
    width: 100%;
  }
  .max-w-600 {
    max-width: calc(var(--spacing) * 600);
  }
  .grow {
    flex-grow: 1;
  }
  .basis-10 {
    flex-basis: calc(var(--spacing) * 10);
  }
  .basis-20 {
    flex-basis: calc(var(--spacing) * 20);
  }
  .basis-40 {
    flex-basis: calc(var(--spacing) * 40);
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-row {
    flex-direction: row;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-x-1 {
    column-gap: calc(var(--spacing) * 1);
  }
  .gap-x-2 {
    column-gap: calc(var(--spacing) * 2);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .gap-y-5 {
    row-gap: calc(var(--spacing) * 5);
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-3xl {
    border-radius: var(--radius-3xl);
  }
  .rounded-4xl {
    border-radius: var(--radius-4xl);
  }
  .rounded-\\[50\\%\\] {
    border-radius: 50%;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-tl-\\[15px\\] {
    border-top-left-radius: 15px;
  }
  .rounded-tr-\\[40px\\] {
    border-top-right-radius: 40px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-3 {
    border-style: var(--tw-border-style);
    border-width: 3px;
  }
  .border-5 {
    border-style: var(--tw-border-style);
    border-width: 5px;
  }
  .border-b-2 {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 2px;
  }
  .border-l-2 {
    border-left-style: var(--tw-border-style);
    border-left-width: 2px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .border-dotted {
    --tw-border-style: dotted;
    border-style: dotted;
  }
  .border-amber-800 {
    border-color: var(--color-amber-800);
  }
  .border-red-950 {
    border-color: var(--color-red-950);
  }
  .border-white {
    border-color: var(--color-white);
  }
  .bg-amber-800 {
    background-color: var(--color-amber-800);
  }
  .bg-red-50 {
    background-color: var(--color-red-50);
  }
  .bg-red-700 {
    background-color: var(--color-red-700);
  }
  .bg-red-800 {
    background-color: var(--color-red-800);
  }
  .bg-stone-400 {
    background-color: var(--color-stone-400);
  }
  .bg-stone-950 {
    background-color: var(--color-stone-950);
  }
  .bg-teal-900 {
    background-color: var(--color-teal-900);
  }
  .bg-yellow-500\\/40 {
    background-color: color-mix(in srgb, oklch(79.5% 0.184 86.047) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-yellow-500) 40%, transparent);
    }
  }
  .bg-yellow-500\\/90 {
    background-color: color-mix(in srgb, oklch(79.5% 0.184 86.047) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-yellow-500) 90%, transparent);
    }
  }
  .bg-yellow-700 {
    background-color: var(--color-yellow-700);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
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
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .text-center {
    text-align: center;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-4xl {
    font-size: var(--text-4xl);
    line-height: var(--tw-leading, var(--text-4xl--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .text-emerald-500 {
    color: var(--color-emerald-500);
  }
  .text-red-950 {
    color: var(--color-red-950);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
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
  .hover\\:rounded-lg {
    &:hover {
      @media (hover: hover) {
        border-radius: var(--radius-lg);
      }
    }
  }
  .hover\\:bg-red-900 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-900);
      }
    }
  }
  .hover\\:bg-stone-500 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-stone-500);
      }
    }
  }
  .hover\\:bg-yellow-800 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-yellow-800);
      }
    }
  }
  .hover\\:text-red-100 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-red-100);
      }
    }
  }
  .hover\\:text-stone-200 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-stone-200);
      }
    }
  }
  .disabled\\:bg-stone-500 {
    &:disabled {
      background-color: var(--color-stone-500);
    }
  }
  .disabled\\:hover\\:cursor-not-allowed {
    &:disabled {
      &:hover {
        @media (hover: hover) {
          cursor: not-allowed;
        }
      }
    }
  }
  .disabled\\:hover\\:text-stone-900 {
    &:disabled {
      &:hover {
        @media (hover: hover) {
          color: var(--color-stone-900);
        }
      }
    }
  }
  .md\\:basis-20 {
    @media (width >= 48rem) {
      flex-basis: calc(var(--spacing) * 20);
    }
  }
  .md\\:text-base {
    @media (width >= 48rem) {
      font-size: var(--text-base);
      line-height: var(--tw-leading, var(--text-base--line-height));
    }
  }
}
html,
body {
  height: 100%;
  background-color: #022f2e;
  position: relative;
}
body.lock {
  overflow: hidden;
}
@layer components {
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  .colorInput {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
  .colorInput::-webkit-color-swatch {
    border-radius: 50%;
  }
  .colorInput::-moz-color-swatch {
    border-radius: 50%;
  }
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
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import 'tailwindcss';\n\nhtml,\nbody {\n  height: 100%;\n  background-color: #022f2e;\n  position: relative;\n}\n\nbody.lock {\n  overflow: hidden;\n}\n\n@layer components {\n  .visually-hidden {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    border: 0;\n    padding: 0;\n    white-space: nowrap;\n    clip-path: inset(100%);\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n\n  .colorInput {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background-color: transparent;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: none;\n    cursor: pointer;\n  }\n\n  .colorInput::-webkit-color-swatch {\n    border-radius: 50%;\n    /* border: 1px solid #000000; */\n  }\n\n  .colorInput::-moz-color-swatch {\n    border-radius: 50%;\n    /* border: 1px solid #000000; */\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/main-elements/main-elements.ts":
/*!*******************************************************!*\
  !*** ./src/components/main-elements/main-elements.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footerElement: () => (/* binding */ footerElement),
/* harmony export */   headerElement: () => (/* binding */ headerElement),
/* harmony export */   mainElement: () => (/* binding */ mainElement),
/* harmony export */   mainWrapper: () => (/* binding */ mainWrapper)
/* harmony export */ });
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/create-element */ "./src/utils/create-element.ts");
/* harmony import */ var _navigation_menu_navigation_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation-menu/navigation-menu */ "./src/components/navigation-menu/navigation-menu.ts");


var styles = {
    mainWrapper: 'flex flex-col max-w-600 bg-teal-900 mx-auto my-0 px-5 py-8 min-h-full',
    headerElement: 'px-5 py-2',
    mainElement: 'grow px-5 py-2',
    footerElement: 'px-5 py-2',
    headerTitle: 'text-4xl text-center font-bold uppercase text-emerald-500 my-1',
};
var mainWrapper = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tagName: 'div',
    className: styles.mainWrapper,
    parent: document.body,
});
var headerElement = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tagName: 'header',
    className: styles.headerElement,
    parent: mainWrapper,
});
var mainElement = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tagName: 'main',
    className: styles.mainElement,
    parent: mainWrapper,
});
var footerElement = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tagName: 'footer',
    className: styles.footerElement,
    parent: mainWrapper,
});
var headerTitle = function (title) {
    (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tagName: 'h2',
        text: title,
        parent: headerElement,
        className: styles.headerTitle,
    });
};
headerTitle('Async-race');
(0,_navigation_menu_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.createNavigationMenu)(headerElement);


/***/ }),

/***/ "./src/components/modal/modal.ts":
/*!***************************************!*\
  !*** ./src/components/modal/modal.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModal: () => (/* binding */ createModal)
/* harmony export */ });
/* harmony import */ var _utils_cleaner_element_from_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/cleaner-element-from-children */ "./src/utils/cleaner-element-from-children.ts");
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/create-element */ "./src/utils/create-element.ts");


var styles = {
    modal: 'fixed w-full h-full top-0 bg-yellow-500/40 flex items-center justify-center',
    infoBlock: 'w-3/4 h-3/4 border-red-950 border-5 rounded-4xl bg-yellow-500/90 px-4 py-6 flex flex-col items-center',
    winnerInfo: 'grow flex flex-col items-center justify-center gap-y-5 font-bold uppercase',
    title: 'text-2xl',
    button: 'uppercase font-bold border-red-950 border-3 bg-yellow-700 p-4 rounded-3xl hover:cursor-pointer hover:bg-yellow-800 hover:text-stone-200 transition-colors duration-300',
    span: 'w-[100px] h-[50px] rounded-2xl',
};
var createHTML = function (car, duration) {
    var message = "car \"".concat(car.name, "\"");
    var idMessage = "id #".concat(car.id);
    var timeMessage = "time: ".concat(Math.floor(duration), " ms");
    var wrapper = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        className: styles.modal,
        parent: document.body,
    });
    var infoBlock = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        className: styles.infoBlock,
        parent: wrapper,
    });
    var wrapperForWinner = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        className: styles.winnerInfo,
        parent: infoBlock,
    });
    ['winner', message, idMessage, timeMessage].forEach(function (message) {
        (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tagName: 'h3',
            className: styles.title,
            parent: wrapperForWinner,
            text: message,
        });
    });
    return [wrapper, infoBlock, wrapperForWinner];
};
var createModal = function (car, duration) {
    document.body.classList.add('lock');
    var _a = createHTML(car, duration), wrapper = _a[0], infoBlock = _a[1], wrapperForWinner = _a[2];
    var colorCar = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        className: styles.span,
        parent: wrapperForWinner,
    });
    var button = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'button',
        className: styles.button,
        parent: infoBlock,
        text: 'go to the next race!!!',
    });
    colorCar.style.background = car.color;
    [button, wrapper].forEach(function (element) {
        element.addEventListener('click', function (event) {
            if (event.target === button || event.target === wrapper) {
                (0,_utils_cleaner_element_from_children__WEBPACK_IMPORTED_MODULE_0__.cleanerElementFromChildren)(wrapper);
                wrapper.remove();
                document.body.classList.remove('lock');
            }
        });
    });
};


/***/ }),

/***/ "./src/components/navigation-menu/navigation-menu.ts":
/*!***********************************************************!*\
  !*** ./src/components/navigation-menu/navigation-menu.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavigationMenu: () => (/* binding */ createNavigationMenu)
/* harmony export */ });
/* harmony import */ var _enums_path_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/path-routes */ "./src/enums/path-routes.ts");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.ts");
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/create-element */ "./src/utils/create-element.ts");
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



var styles = {
    navigation: 'flex ',
    listOfLinks: 'flex bg-red-700 p-2 rounded-lg',
    linkItem: '',
    linkAnchor: 'flex bg-red-800 rounded-md px-3 py-2 mx-3 text-xl font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 ',
};
var menuItems = [
    { href: _enums_path_routes__WEBPACK_IMPORTED_MODULE_0__.PathRoute.home, text: 'garage' },
    { href: _enums_path_routes__WEBPACK_IMPORTED_MODULE_0__.PathRoute.winners, text: 'winners' },
];
var createNavigationMenu = function (parent) {
    parent.append(navigationMenu(menuItems));
};
var navigationMenu = function (links) {
    var navigation = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'nav',
        className: styles.navigation,
    });
    var listOfLinks = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'ul',
        parent: navigation,
        className: styles.listOfLinks,
    });
    links.forEach(function (link) {
        var linkItem = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_2__.createElement)({
            tagName: 'li',
            parent: listOfLinks,
            className: styles.linkItem,
        });
        var linkAnchor = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_2__.createElement)({
            tagName: 'a',
            parent: linkItem,
            text: link.text,
            className: styles.linkAnchor,
            attributes: [{ attr: 'href', value: link.href }],
        });
        linkAnchor.addEventListener('click', function (event) { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                (_a = _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.buttonsForRace.resetRace) === null || _a === void 0 ? void 0 : _a.click();
                route(event);
                return [2 /*return*/];
            });
        }); });
    });
    return navigation;
};


/***/ }),

/***/ "./src/constants/api.ts":
/*!******************************!*\
  !*** ./src/constants/api.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   URL_API: () => (/* binding */ URL_API)
/* harmony export */ });
var URL_API = 'http://127.0.0.1:3000';


/***/ }),

/***/ "./src/constants/car-names.ts":
/*!************************************!*\
  !*** ./src/constants/car-names.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carNames: () => (/* binding */ carNames)
/* harmony export */ });
var carNames = {
    type: [
        'AeroLux',
        '3000',
        'XR',
        'Pro',
        '7',
        'GTR',
        'One',
        '8',
        'Z5',
        '1000',
        'RS',
        'Lite',
        'Era',
        'X9',
        'X1',
        'X3',
        'Emgrand',
    ],
    model: ['audi', 'BMW', 'WV', 'Geely', 'Opel', 'TAZ', 'GAZ', 'Zeekr', 'BYD'],
};


/***/ }),

/***/ "./src/enums/path-routes.ts":
/*!**********************************!*\
  !*** ./src/enums/path-routes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PathRoute: () => (/* binding */ PathRoute)
/* harmony export */ });
var PathRoute;
(function (PathRoute) {
    PathRoute["home"] = "/";
    PathRoute["winners"] = "/winners";
})(PathRoute || (PathRoute = {}));


/***/ }),

/***/ "./src/global-styles.ts":
/*!******************************!*\
  !*** ./src/global-styles.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssButton: () => (/* binding */ cssButton)
/* harmony export */ });
var disabledStyle = 'disabled:bg-stone-500 disabled:hover:cursor-not-allowed disabled:hover:text-stone-900 disabled:text-900';
var cssButton = 'flex items-center justify-center bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer ' +
    disabledStyle;


/***/ }),

/***/ "./src/pages/main/components/handle-winner.ts":
/*!****************************************************!*\
  !*** ./src/pages/main/components/handle-winner.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleWinner: () => (/* binding */ handleWinner)
/* harmony export */ });
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/modal/modal */ "./src/components/modal/modal.ts");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../state/state */ "./src/state/state.ts");
/* harmony import */ var _utils_is_winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/is-winner */ "./src/utils/is-winner.ts");
/* harmony import */ var _utils_request_create_winner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/request/create-winner */ "./src/utils/request/create-winner.ts");
/* harmony import */ var _utils_request_get_winners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/request/get-winners */ "./src/utils/request/get-winners.ts");
/* harmony import */ var _utils_request_update_winner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/request/update-winner */ "./src/utils/request/update-winner.ts");
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






var INITIAL_WIN_COUNT = 1; // Вместо firstWin
var MILLISECONDS_IN_SECOND = 1000;
var FIXED = 2;
var msToSeconds = function (time) {
    return Number.parseFloat((time / MILLISECONDS_IN_SECOND).toFixed(FIXED));
};
var handleWinner = function (car, duration) { return __awaiter(void 0, void 0, void 0, function () {
    var durationInSeconds, allWinners, winner, bestTime, newWinner, newWinner, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                if (!_state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.buttonsForRace.readyToRace) {
                    return [2 /*return*/];
                }
                durationInSeconds = msToSeconds(duration);
                (0,_components_modal_modal__WEBPACK_IMPORTED_MODULE_0__.createModal)(car, duration);
                return [4 /*yield*/, (0,_utils_request_get_winners__WEBPACK_IMPORTED_MODULE_4__.getWinners)()];
            case 1:
                allWinners = (_a.sent()) || [];
                winner = allWinners.find(function (winner) { return winner.id === car.id; });
                if (!winner) return [3 /*break*/, 3];
                bestTime = Math.min(durationInSeconds, winner.time);
                newWinner = __assign(__assign({}, winner), { time: bestTime, wins: winner.wins + INITIAL_WIN_COUNT });
                return [4 /*yield*/, (0,_utils_request_update_winner__WEBPACK_IMPORTED_MODULE_5__.updateWinner)(newWinner)];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                newWinner = {
                    id: car.id,
                    wins: INITIAL_WIN_COUNT,
                    time: durationInSeconds,
                };
                if (!(0,_utils_is_winner__WEBPACK_IMPORTED_MODULE_2__.isWinner)(newWinner)) return [3 /*break*/, 5];
                return [4 /*yield*/, (0,_utils_request_create_winner__WEBPACK_IMPORTED_MODULE_3__.createWinner)(newWinner)];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.log('Error while handle winner', error_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./src/pages/main/components/race-area.ts":
/*!************************************************!*\
  !*** ./src/pages/main/components/race-area.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   raceArea: () => (/* binding */ raceArea)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/state */ "./src/state/state.ts");
/* harmony import */ var _utils_animation_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/animation/animation */ "./src/utils/animation/animation.ts");
/* harmony import */ var _utils_animation_draw_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/animation/draw-animation */ "./src/utils/animation/draw-animation.ts");
/* harmony import */ var _utils_animation_timing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/animation/timing */ "./src/utils/animation/timing.ts");
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/create-element */ "./src/utils/create-element.ts");
/* harmony import */ var _utils_handle_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/handle-name */ "./src/utils/handle-name.ts");
/* harmony import */ var _utils_request_delete_winner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/request/delete-winner */ "./src/utils/request/delete-winner.ts");
/* harmony import */ var _utils_request_get_winners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/request/get-winners */ "./src/utils/request/get-winners.ts");
/* harmony import */ var _utils_request_stop_start_engine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/request/stop-start-engine */ "./src/utils/request/stop-start-engine.ts");
/* harmony import */ var _utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/set-disabled-elements */ "./src/utils/set-disabled-elements.ts");
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










var disabledStyle = 'disabled:bg-stone-500 disabled:hover:cursor-not-allowed disabled:hover:text-stone-900 disabled:text-900';
var styles = {
    raceArea: 'flex border-2 border-red-950 p-2 my-1 bg-amber-800 flex-col gap-2 rounded-md',
    raceItem: 'flex flex-col gap-2',
    upLevelRace: 'flex gap-x-2',
    middleLevelRace: 'flex gap-x-2',
    button: 'flex bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer ' +
        disabledStyle,
    boxForButtons: 'flex flex-row gap-x-1',
    raceBox: 'flex relative border-dashed border-b-2 w-full',
    carImg: 'absolute top-[0px] left-[0px] w-[40px] bottom-[3px] rounded-tl-[15px] rounded-tr-[40px] relative',
    finishLine: 'absolute w-[46px] h-full right-[0px] border-l-2 border-dotted border-white',
};
var raceArea = function (parent, callback) {
    var raceAreaForCars = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        className: styles.raceArea,
        parent: parent,
    });
    var garageCars = _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.viewCars;
    _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace._activeStopEngineButtons = garageCars.length;
    garageCars.forEach(function (car) {
        raceItem(car, raceAreaForCars, callback);
    });
};
var raceItem = function (car, parent, callback) {
    var mainRaceItem = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        parent: parent,
        className: styles.raceItem,
    });
    var upLevelRace = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        parent: mainRaceItem,
        className: styles.upLevelRace,
    });
    createUpLevelRace({ parent: upLevelRace, car: car, callback: callback });
    var middleLevelRace = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        parent: mainRaceItem,
        className: styles.middleLevelRace,
    });
    createMiddleLevelRace({ parent: middleLevelRace, car: car });
};
var createUpLevelRace = function (_a) {
    var car = _a.car, parent = _a.parent, callback = _a.callback;
    var selectCarButton = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'button',
        text: 'select',
        parent: parent,
        className: styles.button,
    });
    selectCarButton.addEventListener('click', function () {
        if (callback)
            callback(car);
    });
    var removeCarButton = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'button',
        text: 'remove',
        parent: parent,
        className: styles.button,
    });
    (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({ tagName: 'span', text: (0,_utils_handle_name__WEBPACK_IMPORTED_MODULE_5__.handleName)(car.name), parent: parent });
    removeCarButton.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        var allWinners;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.deleteCar(car.id)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_request_get_winners__WEBPACK_IMPORTED_MODULE_7__.getWinners)()];
                case 2:
                    allWinners = (_a.sent()) || [];
                    if (!allWinners.some(function (winner) { return winner.id === car.id; })) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0,_utils_request_delete_winner__WEBPACK_IMPORTED_MODULE_6__.deleteWinner)(car.id)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
var createWheels = function (parent) {
    (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        parent: parent,
        className: 'w-[14px] h-[14px] bg-stone-950 rounded-full -bottom-[5px] left-[3px] absolute border-amber-800 border-2',
    });
    (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        parent: parent,
        className: 'w-[14px] h-[14px] bg-stone-950 rounded-full -bottom-[5px] right-[3px] absolute border-amber-800 border-2',
    });
};
var createElementsForMiddleLevel = function (parent) {
    var boxForButtons = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        parent: parent,
        className: styles.boxForButtons,
    });
    var startCarEngine = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'button',
        text: 'A',
        parent: boxForButtons,
        className: styles.button,
    });
    var stopCarEngine = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'button',
        text: 'B',
        parent: boxForButtons,
        className: styles.button,
        attributes: [{ attr: 'disabled', value: '' }],
    });
    var raceBox = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        parent: parent,
        className: styles.raceBox,
    });
    var carImg = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'span',
        parent: raceBox,
        className: styles.carImg,
    });
    createWheels(carImg);
    (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        parent: raceBox,
        className: styles.finishLine,
    });
    return [startCarEngine, stopCarEngine, raceBox, carImg];
};
var handleClickStartCarEngine = function (startCarEngine, stopCarEngine, car, carImg, raceBox, abort) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_9__.setDisabledElements)([startCarEngine], true);
                (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_9__.setDisabledElements)([stopCarEngine], false);
                abort.flag = false;
                return [4 /*yield*/, (0,_utils_request_stop_start_engine__WEBPACK_IMPORTED_MODULE_8__.stopStartEngine)(car, 'started')];
            case 1:
                data = _a.sent();
                if (data) {
                    (0,_utils_animation_animation__WEBPACK_IMPORTED_MODULE_1__.animate)({
                        timing: _utils_animation_timing__WEBPACK_IMPORTED_MODULE_3__.linear,
                        draw: _utils_animation_draw_animation__WEBPACK_IMPORTED_MODULE_2__.drawAnimate,
                        durationData: data,
                        element: carImg,
                        box: raceBox,
                        cancelFlag: abort,
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
var changeStateButtonsRace = function () {
    var noneButtonActive = 0;
    var step = 1;
    _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace._activeStopEngineButtons =
        _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace._activeStopEngineButtons - step;
    if (_state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace._activeStopEngineButtons === noneButtonActive) {
        var _a = _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.buttonsForRace, startRace = _a.startRace, resetRace = _a.resetRace;
        if (startRace && resetRace) {
            (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_9__.setDisabledElements)([startRace], false);
            (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_9__.setDisabledElements)([resetRace], true);
        }
    }
};
var createMiddleLevelRace = function (_a) {
    var car = _a.car, parent = _a.parent;
    var abort = { flag: false };
    var _b = createElementsForMiddleLevel(parent), startCarEngine = _b[0], stopCarEngine = _b[1], raceBox = _b[2], carImg = _b[3];
    carImg.style.background = car.color;
    _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.viewStateModels.set(car.id, {
        element: carImg,
        box: raceBox,
        cancelFlag: abort,
        info: car,
        startButton: startCarEngine,
        stopButton: stopCarEngine,
    });
    startCarEngine.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleClickStartCarEngine(startCarEngine, stopCarEngine, car, carImg, raceBox, abort)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    stopCarEngine.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    changeStateButtonsRace();
                    (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_9__.setDisabledElements)([startCarEngine], false);
                    (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_9__.setDisabledElements)([stopCarEngine], true);
                    abort.flag = true;
                    carImg.style.left = '0px';
                    return [4 /*yield*/, (0,_utils_request_stop_start_engine__WEBPACK_IMPORTED_MODULE_8__.stopStartEngine)(car, 'stopped')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
};


/***/ }),

/***/ "./src/pages/main/components/set-cars.ts":
/*!***********************************************!*\
  !*** ./src/pages/main/components/set-cars.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSetCars: () => (/* binding */ createSetCars)
/* harmony export */ });
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/create-element */ "./src/utils/create-element.ts");
/* harmony import */ var _set_cars_down_level_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-cars/down-level-set */ "./src/pages/main/components/set-cars/down-level-set.ts");
/* harmony import */ var _set_cars_middle_level_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-cars/middle-level-set */ "./src/pages/main/components/set-cars/middle-level-set.ts");
/* harmony import */ var _set_cars_up_level_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-cars/up-level-set */ "./src/pages/main/components/set-cars/up-level-set.ts");




var styles = {
    wrapper: 'flex flex-col gap-y-2',
};
var createSetCars = function (parent) {
    var wrapperForSetCars = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tagName: 'div',
        className: styles.wrapper,
        parent: parent,
    });
    (0,_set_cars_up_level_set__WEBPACK_IMPORTED_MODULE_3__.createUpLevelSetCars)(wrapperForSetCars);
    var callback = (0,_set_cars_middle_level_set__WEBPACK_IMPORTED_MODULE_2__.createMiddleLevelSetCars)(wrapperForSetCars);
    (0,_set_cars_down_level_set__WEBPACK_IMPORTED_MODULE_1__.downLevelSet)(wrapperForSetCars);
    return callback;
};


/***/ }),

/***/ "./src/pages/main/components/set-cars/down-level-set.ts":
/*!**************************************************************!*\
  !*** ./src/pages/main/components/set-cars/down-level-set.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downLevelSet: () => (/* binding */ downLevelSet)
/* harmony export */ });
/* harmony import */ var _constants_car_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants/car-names */ "./src/constants/car-names.ts");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../state/state */ "./src/state/state.ts");
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/create-element */ "./src/utils/create-element.ts");
/* harmony import */ var _utils_get_random_data_from_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/get-random-data-from-array */ "./src/utils/get-random-data-from-array.ts");
/* harmony import */ var _utils_random_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/random-color */ "./src/utils/random-color.ts");
/* harmony import */ var _utils_request_stop_start_engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/request/stop-start-engine */ "./src/utils/request/stop-start-engine.ts");
/* harmony import */ var _utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/set-disabled-elements */ "./src/utils/set-disabled-elements.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../main-page */ "./src/pages/main/main-page.ts");
/* harmony import */ var _utils_animation_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/animation/animation */ "./src/utils/animation/animation.ts");
/* harmony import */ var _utils_animation_timing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils/animation/timing */ "./src/utils/animation/timing.ts");
/* harmony import */ var _utils_animation_draw_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/animation/draw-animation */ "./src/utils/animation/draw-animation.ts");
/* harmony import */ var _handle_winner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../handle-winner */ "./src/pages/main/components/handle-winner.ts");
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












var disabledStyle = 'disabled:bg-stone-500 disabled:hover:cursor-not-allowed disabled:hover:text-stone-900 disabled:text-900';
var styles = {
    wrapper: 'flex flex-row gap-x-1',
    button: 'flex items-center justify-center bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer ' +
        disabledStyle,
};
var generateCars = function () { return __awaiter(void 0, void 0, void 0, function () {
    var start, maximumCars, count, step, car;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                start = 0;
                maximumCars = 100;
                count = start;
                step = 1;
                _a.label = 1;
            case 1:
                if (!(count < maximumCars)) return [3 /*break*/, 3];
                car = { name: '', color: '' };
                car.name =
                    (0,_utils_get_random_data_from_array__WEBPACK_IMPORTED_MODULE_3__.getRandomDataFromArray)(_constants_car_names__WEBPACK_IMPORTED_MODULE_0__.carNames.model) +
                        ' ' +
                        (0,_utils_get_random_data_from_array__WEBPACK_IMPORTED_MODULE_3__.getRandomDataFromArray)(_constants_car_names__WEBPACK_IMPORTED_MODULE_0__.carNames.type);
                car.color = (0,_utils_random_color__WEBPACK_IMPORTED_MODULE_4__.randomHexColor)();
                return [4 /*yield*/, _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.createCar(car)];
            case 2:
                _a.sent();
                count += step;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}); };
var checkSuccess = function (element) {
    return element &&
        typeof element === 'object' &&
        'success' in element &&
        element.success
        ? true
        : false;
};
function performAnimation(elements, data) {
    return (0,_utils_animation_animation__WEBPACK_IMPORTED_MODULE_8__.animate)({
        timing: _utils_animation_timing__WEBPACK_IMPORTED_MODULE_9__.linear,
        draw: _utils_animation_draw_animation__WEBPACK_IMPORTED_MODULE_10__.drawAnimate,
        durationData: data,
        element: elements.element,
        box: elements.box,
        cancelFlag: elements.cancelFlag,
    });
}
var handleRaceClick = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dataPromises, info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataPromises = [];
                _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.viewCars.forEach(function (car) {
                    dataPromises.push((0,_utils_request_stop_start_engine__WEBPACK_IMPORTED_MODULE_5__.stopStartEngine)(car, 'started'));
                });
                return [4 /*yield*/, Promise.allSettled(dataPromises)];
            case 1:
                info = _a.sent();
                new Promise(function (resolve) {
                    info.forEach(function (element, index) { return __awaiter(void 0, void 0, void 0, function () {
                        var idCar, elements, data, promise, newInfo;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(element.status === 'fulfilled' && typeof element.value === 'object')) return [3 /*break*/, 2];
                                    idCar = _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.viewCars[index].id;
                                    elements = _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.viewStateModels.get(idCar);
                                    data = element.value;
                                    if (!(elements && data)) return [3 /*break*/, 2];
                                    (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__.setDisabledElements)([elements.startButton], true);
                                    (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__.setDisabledElements)([elements.stopButton], false);
                                    elements.cancelFlag.flag = false;
                                    promise = performAnimation(elements, data);
                                    return [4 /*yield*/, data.promise];
                                case 1:
                                    newInfo = _a.sent();
                                    if (checkSuccess(newInfo) && !elements.cancelFlag.flag) {
                                        resolve({ id: idCar, duration: data.duration, promise: promise });
                                    }
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                }).then(function (data) {
                    if (data) {
                        var car_1 = _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.state.garage.find(function (car) { return car.id === data.id; });
                        if (car_1) {
                            data.promise.then(function () {
                                (0,_handle_winner__WEBPACK_IMPORTED_MODULE_11__.handleWinner)(car_1, data.duration);
                            });
                        }
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
var handleResetClick = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.buttonsForRace.readyToRace = false;
        _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.viewStateModels.forEach(function (car) {
            car.stopButton.click();
        });
        return [2 /*return*/];
    });
}); };
var handleClickGenerateButton = function (button) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__.setDisabledElements)([button], true);
                return [4 /*yield*/, generateCars()];
            case 1:
                _a.sent();
                (0,_main_page__WEBPACK_IMPORTED_MODULE_7__.mainPage)();
                (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__.setDisabledElements)([button], false);
                return [2 /*return*/];
        }
    });
}); };
var createButtons = function (parent) {
    var raceButton = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'button',
        parent: parent,
        text: 'race',
        className: styles.button,
    });
    var resetButton = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'button',
        parent: parent,
        text: 'reset',
        className: styles.button,
        attributes: [{ attr: 'disabled', value: '' }],
    });
    var generateButton = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'button',
        parent: parent,
        text: 'generate cars',
        className: styles.button,
    });
    raceButton.addEventListener('click', function () {
        _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.buttonsForRace.readyToRace = true;
        handleRaceClick();
        _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace._activeStopEngineButtons = _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.viewCars.length;
        (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__.setDisabledElements)([raceButton], true);
        (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__.setDisabledElements)([resetButton], false);
    });
    resetButton.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__.setDisabledElements)([resetButton], true);
                    return [4 /*yield*/, handleResetClick()];
                case 1:
                    _a.sent();
                    (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__.setDisabledElements)([raceButton], false);
                    return [2 /*return*/];
            }
        });
    }); });
    generateButton.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleClickGenerateButton(generateButton)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    return [raceButton, resetButton];
};
var downLevelSet = function (parent) {
    var wrapper = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'div',
        className: styles.wrapper,
        parent: parent,
    });
    var _a = createButtons(wrapper), raceButton = _a[0], resetButton = _a[1];
    _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.buttonsForRace.resetRace = resetButton;
    _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.buttonsForRace.startRace = raceButton;
};


/***/ }),

/***/ "./src/pages/main/components/set-cars/handle-event-up-level.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/main/components/set-cars/handle-event-up-level.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleEventUpLevel: () => (/* binding */ handleEventUpLevel)
/* harmony export */ });
var isInputElement = function (target) { return target instanceof HTMLInputElement; };
var handleEventUpLevel = function (event, dataCar, element) {
    var target = event.target;
    if (isInputElement(target)) {
        var value = target.value;
        if (element.getAttribute('type') === 'color') {
            dataCar.color = value;
        }
        else {
            dataCar.name = value;
        }
    }
};


/***/ }),

/***/ "./src/pages/main/components/set-cars/middle-level-set.ts":
/*!****************************************************************!*\
  !*** ./src/pages/main/components/set-cars/middle-level-set.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMiddleLevelSetCars: () => (/* binding */ createMiddleLevelSetCars)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../state/state */ "./src/state/state.ts");
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/create-element */ "./src/utils/create-element.ts");
/* harmony import */ var _utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/set-disabled-elements */ "./src/utils/set-disabled-elements.ts");
/* harmony import */ var _handle_event_up_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handle-event-up-level */ "./src/pages/main/components/set-cars/handle-event-up-level.ts");
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




var disabledStyle = 'disabled:bg-stone-500 disabled:hover:cursor-not-allowed disabled:hover:text-stone-900 disabled:text-900';
var styles = {
    wrapperLevel: 'flex flex-row gap-x-2 items-center ',
    inputText: 'w-50 border-red-950 border-3 rounded-md bg-red-50 text-red-950 py-1 px-2 outline-none ' +
        disabledStyle,
    inputColor: 'colorInput disabled:hover:cursor-not-allowed',
    button: 'flex items-center justify-center bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer ' +
        disabledStyle,
};
var createElements = function (parent) {
    var inputText = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'input',
        className: styles.inputText,
        parent: parent,
        attributes: [
            { attr: 'type', value: 'text' },
            { attr: 'placeholder', value: '...' },
            { attr: 'disabled', value: 'true' },
        ],
    });
    var inputColor = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'input',
        className: styles.inputColor,
        parent: parent,
        attributes: [
            { attr: 'type', value: 'color' },
            { attr: 'value', value: '#79716b' },
            { attr: 'disabled', value: 'true' },
        ],
    });
    var buttonUpdateCar = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'button',
        className: styles.button,
        parent: parent,
        text: 'update',
        attributes: [{ attr: 'disabled', value: 'true' }],
    });
    return [inputText, inputColor, buttonUpdateCar];
};
var createMiddleLevelSetCars = function (parent) {
    var carDataForCreate;
    var wrapper = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        className: styles.wrapperLevel,
        parent: parent,
    });
    var setButtons = createElements(wrapper);
    var inputText = setButtons[0], inputColor = setButtons[1], buttonUpdateCar = setButtons[2];
    buttonUpdateCar.addEventListener('click', function () {
        (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_2__.setDisabledElements)(setButtons, true);
    });
    inputColor.addEventListener('change', function (event) {
        return (0,_handle_event_up_level__WEBPACK_IMPORTED_MODULE_3__.handleEventUpLevel)(event, carDataForCreate, inputColor);
    });
    inputText.addEventListener('input', function (event) {
        return (0,_handle_event_up_level__WEBPACK_IMPORTED_MODULE_3__.handleEventUpLevel)(event, carDataForCreate, inputText);
    });
    var clearInputs = function () {
        inputColor.value = '#79716b';
        inputText.value = '';
    };
    buttonUpdateCar.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.updateCar(__assign({}, carDataForCreate))];
                case 1:
                    _a.sent();
                    clearInputs();
                    return [2 /*return*/];
            }
        });
    }); });
    var callback = function (car) {
        carDataForCreate = __assign({}, car);
        (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_2__.setDisabledElements)(setButtons, false);
        inputColor.value = car.color;
        inputText.value = car.name;
    };
    return callback;
};


/***/ }),

/***/ "./src/pages/main/components/set-cars/up-level-set.ts":
/*!************************************************************!*\
  !*** ./src/pages/main/components/set-cars/up-level-set.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUpLevelSetCars: () => (/* binding */ createUpLevelSetCars)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../state/state */ "./src/state/state.ts");
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/create-element */ "./src/utils/create-element.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main-page */ "./src/pages/main/main-page.ts");
/* harmony import */ var _handle_event_up_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handle-event-up-level */ "./src/pages/main/components/set-cars/handle-event-up-level.ts");
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




var styles = {
    wrapperLevel: 'flex flex-row gap-x-2 items-center ',
    inputText: 'w-50 border-red-950 border-3 rounded-md bg-red-50 text-red-950 py-1 px-2 outline-none',
    inputColor: 'colorInput',
    button: 'flex items-center justify-center bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer',
};
var createElements = function (parent, car) {
    var inputText = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'input',
        className: styles.inputText,
        parent: parent,
        attributes: [
            { attr: 'type', value: 'text' },
            { attr: 'value', value: car.name },
            { attr: 'placeholder', value: 'name car' },
        ],
    });
    var inputColor = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'input',
        className: styles.inputColor,
        parent: parent,
        attributes: [
            { attr: 'type', value: 'color' },
            { attr: 'value', value: car.color },
        ],
    });
    var buttonCreateCar = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'button',
        className: styles.button,
        parent: parent,
        text: 'create',
    });
    return [inputText, inputColor, buttonCreateCar];
};
var createCarStorage = 'createCarStorage';
var saveData = function (data) {
    localStorage.setItem(createCarStorage, JSON.stringify(data));
};
var createUpLevelSetCars = function (parent) {
    var data = localStorage.getItem(createCarStorage);
    var initialData = { name: '', color: '#ffffff' };
    var carDataForCreate = __assign({}, initialData);
    if (data) {
        var _a = JSON.parse(data), name_1 = _a.name, color = _a.color;
        carDataForCreate.color = color;
        carDataForCreate.name = name_1;
    }
    var wrapper = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        className: styles.wrapperLevel,
        parent: parent,
    });
    var _b = createElements(wrapper, carDataForCreate), inputText = _b[0], inputColor = _b[1], buttonCreateCar = _b[2];
    inputColor.addEventListener('change', function (event) {
        (0,_handle_event_up_level__WEBPACK_IMPORTED_MODULE_3__.handleEventUpLevel)(event, carDataForCreate, inputColor);
        saveData(carDataForCreate);
    });
    inputText.addEventListener('input', function (event) {
        (0,_handle_event_up_level__WEBPACK_IMPORTED_MODULE_3__.handleEventUpLevel)(event, carDataForCreate, inputText);
        saveData(carDataForCreate);
    });
    var clearInputs = function () {
        inputColor.value = initialData.color;
        inputText.value = initialData.name;
        carDataForCreate.color = initialData.color;
        carDataForCreate.name = initialData.name;
        saveData(carDataForCreate);
    };
    buttonCreateCar.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.createCar(carDataForCreate)];
                case 1:
                    _a.sent();
                    clearInputs();
                    (0,_main_page__WEBPACK_IMPORTED_MODULE_2__.mainPage)();
                    return [2 /*return*/];
            }
        });
    }); });
};


/***/ }),

/***/ "./src/pages/main/main-page.ts":
/*!*************************************!*\
  !*** ./src/pages/main/main-page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainPage: () => (/* binding */ mainPage)
/* harmony export */ });
/* harmony import */ var _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/main-elements/main-elements */ "./src/components/main-elements/main-elements.ts");
/* harmony import */ var _global_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global-styles */ "./src/global-styles.ts");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.ts");
/* harmony import */ var _utils_cleaner_element_from_children__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cleaner-element-from-children */ "./src/utils/cleaner-element-from-children.ts");
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/create-element */ "./src/utils/create-element.ts");
/* harmony import */ var _utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/set-disabled-elements */ "./src/utils/set-disabled-elements.ts");
/* harmony import */ var _components_race_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/race-area */ "./src/pages/main/components/race-area.ts");
/* harmony import */ var _components_set_cars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/set-cars */ "./src/pages/main/components/set-cars.ts");








var styles = {
    title: 'text-2xl',
    wrapper: 'flex flex-row gap-x-2 my-2',
};
var createButtons = function (parent) {
    var offset = 1;
    var wrapper = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        className: styles.wrapper,
        parent: parent,
    });
    var previousPage = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'button',
        className: _global_styles__WEBPACK_IMPORTED_MODULE_1__.cssButton,
        text: 'prev',
        parent: wrapper,
    });
    var nextPage = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'button',
        className: _global_styles__WEBPACK_IMPORTED_MODULE_1__.cssButton,
        text: 'next',
        parent: wrapper,
    });
    if (_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.state.garage.length <= _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.maxViewCar ||
        (_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace._page + offset) * _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.maxViewCar >
            _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.state.garage.length) {
        (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_5__.setDisabledElements)([nextPage], true);
    }
    var startPage = 0;
    if (_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace._page === startPage)
        (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_5__.setDisabledElements)([previousPage], true);
    var handleClickChangePage = function (direction) {
        _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace._page += direction === '+' ? offset : -offset;
    };
    previousPage.addEventListener('click', function () { return handleClickChangePage('-'); });
    nextPage.addEventListener('click', function () { return handleClickChangePage('+'); });
};
var mainPage = function () {
    var offset = 1;
    var startNumber = 0;
    (0,_utils_cleaner_element_from_children__WEBPACK_IMPORTED_MODULE_3__.cleanerElementFromChildren)(_components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement);
    (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'h1',
        className: 'visually-hidden',
        text: 'main page async-race',
        parent: _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement,
    });
    var carsText = _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.state.garage.length === startNumber ||
        _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.state.garage.length > offset
        ? 'cars'
        : 'car';
    (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'h2',
        text: "Garage: \"".concat(_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.state.garage.length, " ").concat(carsText, "\""),
        className: styles.title,
        parent: _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement,
    });
    (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'h3',
        text: "Page #".concat(_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace._page + offset),
        parent: _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement,
    });
    createButtons(_components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement);
    var callback = (0,_components_set_cars__WEBPACK_IMPORTED_MODULE_7__.createSetCars)(_components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement);
    var wrapperForArea = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({ tagName: 'div', parent: _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement });
    (0,_components_race_area__WEBPACK_IMPORTED_MODULE_6__.raceArea)(wrapperForArea, callback);
};


/***/ }),

/***/ "./src/pages/page404/page404.ts":
/*!**************************************!*\
  !*** ./src/pages/page404/page404.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   page404: () => (/* binding */ page404)
/* harmony export */ });
/* harmony import */ var _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/main-elements/main-elements */ "./src/components/main-elements/main-elements.ts");
/* harmony import */ var _utils_cleaner_element_from_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cleaner-element-from-children */ "./src/utils/cleaner-element-from-children.ts");
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/create-element */ "./src/utils/create-element.ts");



var styles = {
    title: 'text-2xl',
};
var page404 = function () {
    (0,_utils_cleaner_element_from_children__WEBPACK_IMPORTED_MODULE_1__.cleanerElementFromChildren)(_components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement);
    (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'h1',
        className: 'visually-hidden',
        text: '404 page async-race',
        parent: _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement,
    });
    (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_2__.createElement)({
        tagName: 'h2',
        text: "Sorry, this page doesn't find!",
        className: styles.title,
        parent: _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement,
    });
};


/***/ }),

/***/ "./src/pages/winners/winners-page.ts":
/*!*******************************************!*\
  !*** ./src/pages/winners/winners-page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveDataWinners: () => (/* binding */ saveDataWinners),
/* harmony export */   winnersPage: () => (/* binding */ winnersPage)
/* harmony export */ });
/* harmony import */ var _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/main-elements/main-elements */ "./src/components/main-elements/main-elements.ts");
/* harmony import */ var _global_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global-styles */ "./src/global-styles.ts");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.ts");
/* harmony import */ var _utils_cleaner_element_from_children__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cleaner-element-from-children */ "./src/utils/cleaner-element-from-children.ts");
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/create-element */ "./src/utils/create-element.ts");
/* harmony import */ var _utils_request_get_winners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/request/get-winners */ "./src/utils/request/get-winners.ts");
/* harmony import */ var _utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/set-disabled-elements */ "./src/utils/set-disabled-elements.ts");
/* harmony import */ var _winners_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./winners-table */ "./src/pages/winners/winners-table.ts");
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








var styles = {
    title: 'text-2xl',
    wrapper: 'flex flex-col bg-stone-400 rounded-lg p-2',
    wrapperButtons: 'flex-row flex my-1 gap-x-1',
};
var saveDataWinners = function (data) {
    localStorage.setItem('winners', JSON.stringify(data));
};
var isDataWinner = function (data) {
    return data &&
        typeof data === 'object' &&
        'page' in data &&
        typeof data.page === 'number' &&
        'limit' in data &&
        typeof data.limit === 'number' &&
        'sort' in data &&
        'order' in data &&
        typeof data.sort === 'string' &&
        ['id', 'wins', 'time'].includes(data.sort) &&
        typeof data.order === 'string' &&
        ['ASC', 'DESC'].includes(data.order)
        ? true
        : false;
};
var loadDataWinner = function () {
    var data = localStorage.getItem('winners');
    if (data) {
        var parseData = JSON.parse(data);
        if (isDataWinner(parseData)) {
            _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.limit = parseData.limit;
            _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.page = parseData.page;
            _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.order = parseData.order;
            _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.sort = parseData.sort;
        }
    }
};
var createPaginationButtons = function (parent) {
    var PAGE = 1;
    var wrapper = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'div',
        parent: parent,
        className: styles.wrapperButtons,
    });
    var previousButton = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'button',
        parent: wrapper,
        className: _global_styles__WEBPACK_IMPORTED_MODULE_1__.cssButton,
        text: 'prev',
    });
    var nextButton = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
        tagName: 'button',
        parent: wrapper,
        className: _global_styles__WEBPACK_IMPORTED_MODULE_1__.cssButton,
        text: 'next',
    });
    if (_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.page === PAGE) {
        (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__.setDisabledElements)([previousButton], true);
    }
    if (_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.page * _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.limit >=
        _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.countWinner) {
        (0,_utils_set_disabled_elements__WEBPACK_IMPORTED_MODULE_6__.setDisabledElements)([nextButton], true);
    }
    previousButton.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.page = _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.page - PAGE;
                    saveDataWinners(_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData);
                    return [4 /*yield*/, winnersPage()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    nextButton.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.page = _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.page + PAGE;
                    saveDataWinners(_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData);
                    return [4 /*yield*/, winnersPage()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
};
var winnersPage = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, wrapper;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                (0,_utils_cleaner_element_from_children__WEBPACK_IMPORTED_MODULE_3__.cleanerElementFromChildren)(_components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement);
                loadDataWinner();
                _a = _state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.state;
                return [4 /*yield*/, (0,_utils_request_get_winners__WEBPACK_IMPORTED_MODULE_5__.getWinners)(_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData)];
            case 1:
                _a.winners = (_b.sent()) || [];
                (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
                    tagName: 'h1',
                    className: 'visually-hidden',
                    text: 'winner page async-race',
                    parent: _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement,
                });
                (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
                    tagName: 'h2',
                    text: "Winners (".concat(_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.countWinner, " cars)"),
                    className: styles.title,
                    parent: _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement,
                });
                (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
                    tagName: 'h3',
                    text: "Page: ".concat(_state_state__WEBPACK_IMPORTED_MODULE_2__.stateRace.pageWinnersData.page),
                    className: styles.title,
                    parent: _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement,
                });
                createPaginationButtons(_components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement);
                wrapper = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)({
                    tagName: 'div',
                    className: styles.wrapper,
                    parent: _components_main_elements_main_elements__WEBPACK_IMPORTED_MODULE_0__.mainElement,
                });
                (0,_winners_table__WEBPACK_IMPORTED_MODULE_7__.createWinnersTable)(wrapper);
                return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./src/pages/winners/winners-table.ts":
/*!********************************************!*\
  !*** ./src/pages/winners/winners-table.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWinnersTable: () => (/* binding */ createWinnersTable)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.ts");
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/create-element */ "./src/utils/create-element.ts");
/* harmony import */ var _utils_handle_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/handle-name */ "./src/utils/handle-name.ts");
/* harmony import */ var _winners_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winners-page */ "./src/pages/winners/winners-page.ts");
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




var INDEX_NAME = 1;
var styles = {
    title: 'flex flex-row gap-x-2',
    row: 'flex flex-row gap-x-2 mt-1',
    textTitle: 'md:basis-20 md:text-base flex items-center justify-center text-sm basis-10 text-center',
    textTitleWide: 'basis-40 basis-20 text-sm md:text-base flex items-center justify-center truncate text-center',
    colorInfo: 'rounded-[50%] h-full aspect-square',
};
var createRowWinner = function (carData, winner, row) {
    var wins = winner.wins, time = winner.time;
    if (carData) {
        var id = carData.id, color_1 = carData.color, name_1 = carData.name;
        [id, name_1, color_1, wins, time].forEach(function (element, index) {
            if (element === color_1) {
                var colorElementWrapper = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tagName: 'div',
                    className: styles.textTitle,
                    parent: row,
                });
                var colorElement = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tagName: 'div',
                    className: styles.colorInfo,
                    parent: colorElementWrapper,
                });
                colorElement.style.background = color_1;
            }
            else {
                (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tagName: 'div',
                    className: index === INDEX_NAME ? styles.textTitleWide : styles.textTitle,
                    parent: row,
                    text: (0,_utils_handle_name__WEBPACK_IMPORTED_MODULE_2__.handleName)(element.toString()),
                });
            }
        });
    }
};
var dataForWinnersTable = [
    { text: 'id', attr: _state_state__WEBPACK_IMPORTED_MODULE_0__.Sort.id },
    { text: 'car' },
    { text: 'color' },
    { text: 'wins', attr: _state_state__WEBPACK_IMPORTED_MODULE_0__.Sort.wins },
    { text: 'best time', attr: _state_state__WEBPACK_IMPORTED_MODULE_0__.Sort.time },
];
var sortingHandle = function (item) { return __awaiter(void 0, void 0, void 0, function () {
    var nextOrder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (item.attr === _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.pageWinnersData.sort) {
                    nextOrder = _state_state__WEBPACK_IMPORTED_MODULE_0__.Order.ASC === _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.pageWinnersData.order ? _state_state__WEBPACK_IMPORTED_MODULE_0__.Order.DESC : _state_state__WEBPACK_IMPORTED_MODULE_0__.Order.ASC;
                    _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.pageWinnersData.order = nextOrder;
                }
                else {
                    if (item.attr) {
                        _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.pageWinnersData.sort = item.attr;
                    }
                }
                (0,_winners_page__WEBPACK_IMPORTED_MODULE_3__.saveDataWinners)(_state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.pageWinnersData);
                return [4 /*yield*/, (0,_winners_page__WEBPACK_IMPORTED_MODULE_3__.winnersPage)()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var createWinnersTable = function (parent) {
    var title = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tagName: 'div',
        parent: parent,
        className: styles.title,
    });
    dataForWinnersTable.forEach(function (item, index) {
        var element = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tagName: 'div',
            parent: title,
            className: index === INDEX_NAME ? styles.textTitleWide : styles.textTitle,
            text: item.text,
        });
        if (item.attr) {
            element.classList.add('cursor-pointer', 'hover:bg-stone-500', 'hover:rounded-lg');
            element.dataset['type'] = item.attr;
            element.addEventListener('click', function () { return sortingHandle(item); });
        }
    });
    _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.state.winners.forEach(function (winner) {
        var carData = _state_state__WEBPACK_IMPORTED_MODULE_0__.stateRace.state.garage.find(function (car) { return car.id === winner.id; });
        var row = (0,_utils_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tagName: 'div',
            className: styles.row,
            parent: parent,
        });
        createRowWinner(carData, winner, row);
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
/* harmony export */   route: () => (/* binding */ route),
/* harmony export */   routeTo: () => (/* binding */ routeTo)
/* harmony export */ });
/* harmony import */ var _pages_main_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/main/main-page */ "./src/pages/main/main-page.ts");
/* harmony import */ var _pages_page404_page404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/page404/page404 */ "./src/pages/page404/page404.ts");
/* harmony import */ var _pages_winners_winners_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/winners/winners-page */ "./src/pages/winners/winners-page.ts");



var route = function (event) {
    event.preventDefault();
    var target = event.target;
    if (target instanceof HTMLAnchorElement) {
        globalThis.history.pushState({}, '', target.href);
    }
    handleLocation();
};
var routes = {
    404: _pages_page404_page404__WEBPACK_IMPORTED_MODULE_1__.page404,
    '/': _pages_main_main_page__WEBPACK_IMPORTED_MODULE_0__.mainPage,
    '/winners': _pages_winners_winners_page__WEBPACK_IMPORTED_MODULE_2__.winnersPage,
};
var handleLocation = function () {
    var path = globalThis.location.pathname;
    var route = routes[path] || routes[404];
    route();
};
var routeTo = function (path) {
    globalThis.history.pushState({}, '', path);
    handleLocation();
};


/***/ }),

/***/ "./src/state/state.ts":
/*!****************************!*\
  !*** ./src/state/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Order: () => (/* binding */ Order),
/* harmony export */   Sort: () => (/* binding */ Sort),
/* harmony export */   stateRace: () => (/* binding */ stateRace)
/* harmony export */ });
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/api */ "./src/constants/api.ts");
/* harmony import */ var _pages_main_main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/main/main-page */ "./src/pages/main/main-page.ts");
/* harmony import */ var _utils_filtered_data_for_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/filtered-data-for-pagination */ "./src/utils/filtered-data-for-pagination.ts");
/* harmony import */ var _utils_is_car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-car */ "./src/utils/is-car.ts");
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




var Sort;
(function (Sort) {
    Sort["wins"] = "wins";
    Sort["time"] = "time";
    Sort["id"] = "id";
})(Sort || (Sort = {}));
var Order;
(function (Order) {
    Order["ASC"] = "ASC";
    Order["DESC"] = "DESC";
})(Order || (Order = {}));
var maxViewCar = 7;
var startNumber = 0;
var State = /** @class */ (function () {
    function State() {
        var _this = this;
        this.createCar = function (car) { return __awaiter(_this, void 0, void 0, function () {
            var data, carInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/garage"), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(car),
                        })];
                    case 1:
                        data = _a.sent();
                        if (!data.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, data.json()];
                    case 2:
                        carInfo = _a.sent();
                        if ((0,_utils_is_car__WEBPACK_IMPORTED_MODULE_3__.isCar)(carInfo)) {
                            this.state.garage.push(carInfo);
                            this.filteredToView();
                        }
                        else {
                            console.warn("Attention, your data don't equal need format data!");
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.deleteCar = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/garage/").concat(id), {
                            method: 'DELETE',
                        })];
                    case 1:
                        data = _a.sent();
                        if (data.ok) {
                            this.state.garage = this.state.garage.filter(function (car) { return car.id !== id; });
                            this.state.winners = this.state.winners.filter(function (car) { return car.id !== id; });
                            this.filteredToView();
                            (0,_pages_main_main_page__WEBPACK_IMPORTED_MODULE_1__.mainPage)();
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.filteredToView = function () {
            _this.viewCars = (0,_utils_filtered_data_for_pagination__WEBPACK_IMPORTED_MODULE_2__.filteredDataForPagination)(_this.maxViewCar, _this._page, _this.state.garage);
        };
        this.maxViewCar = maxViewCar;
        this.updateCar = function (car) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/garage/").concat(car.id), {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ name: car.name, color: car.color }),
                        })];
                    case 1:
                        data = _a.sent();
                        if (!data.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getCars()];
                    case 2:
                        _a.sent();
                        (0,_pages_main_main_page__WEBPACK_IMPORTED_MODULE_1__.mainPage)();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.activeStopEngineButtons = 0;
        this.buttonsForRace = {
            startRace: null,
            resetRace: null,
            readyToRace: true,
        };
        this.countWinner = 0;
        var pageString = localStorage.getItem('currentPage');
        var page = pageString ? Number.parseInt(pageString) : startNumber;
        this.page = page;
        this.pageWinnersData = {
            page: 1,
            limit: 10,
            sort: Sort.time,
            order: Order.ASC,
        };
        this.state = { garage: [], winners: [] };
        this.viewCars = [];
        this.viewStateModels = new Map();
    }
    Object.defineProperty(State.prototype, "_activeStopEngineButtons", {
        get: function () {
            return this.activeStopEngineButtons;
        },
        set: function (number) {
            this.activeStopEngineButtons = number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State.prototype, "_countWinner", {
        get: function () {
            return this.countWinner;
        },
        set: function (number) {
            this.countWinner = number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State.prototype, "_page", {
        get: function () {
            return this.page;
        },
        set: function (number) {
            this.page = number;
            localStorage.setItem('currentPage', number.toString());
            this.filteredToView();
            (0,_pages_main_main_page__WEBPACK_IMPORTED_MODULE_1__.mainPage)();
        },
        enumerable: false,
        configurable: true
    });
    State.prototype.getCars = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var data, garageCars;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/garage").concat(query ? '?_limit=' + query.limit + '&_page=' + query.page : ''), {
                            method: 'GET',
                        })];
                    case 1:
                        data = _a.sent();
                        if (!data.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, data.json()];
                    case 2:
                        garageCars = _a.sent();
                        this.state.garage = garageCars;
                        this.filteredToView();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return State;
}());
var stateRace = new State();


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/utils/animation/animation.ts":
/*!******************************************!*\
  !*** ./src/utils/animation/animation.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animate: () => (/* binding */ animate)
/* harmony export */ });
var endOfFraction = 1;
var animate = function (animationData) {
    return new Promise(function (resolve) {
        var timing = animationData.timing, draw = animationData.draw, durationData = animationData.durationData, element = animationData.element, box = animationData.box, cancelFlag = animationData.cancelFlag;
        var fullWidth = 100;
        var start = performance.now();
        var width = fullWidth - (element.offsetWidth / box.offsetWidth) * fullWidth;
        var aborted = false;
        durationData.promise.then(function (result) {
            if (result === 'car need stop') {
                aborted = true;
            }
        });
        var step = function (timestamp) {
            if (start === null) {
                start = timestamp;
            }
            if (aborted || cancelFlag.flag) {
                return;
            }
            var elapsed = timestamp - start;
            var timeFraction = elapsed / durationData.duration;
            if (timeFraction > endOfFraction) {
                timeFraction = endOfFraction;
            }
            var progress = timing(timeFraction);
            draw(progress * width, element);
            if (timeFraction < endOfFraction) {
                requestAnimationFrame(step);
            }
            else {
                resolve();
            }
        };
        requestAnimationFrame(step);
    });
};


/***/ }),

/***/ "./src/utils/animation/draw-animation.ts":
/*!***********************************************!*\
  !*** ./src/utils/animation/draw-animation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawAnimate: () => (/* binding */ drawAnimate)
/* harmony export */ });
var drawAnimate = function (progress, element) {
    element.style.left = progress + '%';
};


/***/ }),

/***/ "./src/utils/animation/timing.ts":
/*!***************************************!*\
  !*** ./src/utils/animation/timing.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linear: () => (/* binding */ linear)
/* harmony export */ });
var linear = function (timeFraction) {
    return timeFraction;
};


/***/ }),

/***/ "./src/utils/cleaner-element-from-children.ts":
/*!****************************************************!*\
  !*** ./src/utils/cleaner-element-from-children.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanerElementFromChildren: () => (/* binding */ cleanerElementFromChildren)
/* harmony export */ });
var cleanerElementFromChildren = function (element) {
    while (element.firstChild) {
        element.firstChild.remove();
    }
};


/***/ }),

/***/ "./src/utils/create-element.ts":
/*!*************************************!*\
  !*** ./src/utils/create-element.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
var createElement = function (options) {
    var tagName = options.tagName, className = options.className, parent = options.parent, text = options.text, attributes = options.attributes;
    var element = document.createElement(tagName);
    if (className) {
        element.className = className;
    }
    if (parent) {
        parent.append(element);
    }
    if (text) {
        element.textContent = text;
    }
    if (attributes) {
        attributes.forEach(function (attribute) {
            var attr = attribute.attr, value = attribute.value;
            element.setAttribute(attr, value);
        });
    }
    return element;
};


/***/ }),

/***/ "./src/utils/filtered-data-for-pagination.ts":
/*!***************************************************!*\
  !*** ./src/utils/filtered-data-for-pagination.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filteredDataForPagination: () => (/* binding */ filteredDataForPagination)
/* harmony export */ });
var filteredDataForPagination = function (max, page, array) {
    var startNumber = 0;
    var minIndex = startNumber + max * page;
    var maxIndex = minIndex + max;
    return array.filter(function (_, index) {
        if (index >= minIndex && index < maxIndex)
            return true;
        return false;
    });
};


/***/ }),

/***/ "./src/utils/get-random-data-from-array.ts":
/*!*************************************************!*\
  !*** ./src/utils/get-random-data-from-array.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomDataFromArray: () => (/* binding */ getRandomDataFromArray)
/* harmony export */ });
/* harmony import */ var _get_random_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-random-number */ "./src/utils/get-random-number.ts");

var getRandomDataFromArray = function (array) {
    var offset = 1;
    var randomPosition = (0,_get_random_number__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)(array.length - offset);
    return array[randomPosition];
};


/***/ }),

/***/ "./src/utils/get-random-number.ts":
/*!****************************************!*\
  !*** ./src/utils/get-random-number.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber)
/* harmony export */ });
var getRandomNumber = function (max) {
    var start = 0;
    var offset = 1;
    var min = start;
    var maxNumber = Math.floor(max);
    return Math.floor(Math.random() * (maxNumber - min + offset)) + min;
};


/***/ }),

/***/ "./src/utils/handle-name.ts":
/*!**********************************!*\
  !*** ./src/utils/handle-name.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleName: () => (/* binding */ handleName)
/* harmony export */ });
var handleName = function (name) {
    var MAX_LENGTH = 15;
    var START_NAME = 0;
    var DOTTED = '...';
    return name.length > MAX_LENGTH
        ? name.slice(START_NAME, MAX_LENGTH) + DOTTED
        : name;
};


/***/ }),

/***/ "./src/utils/is-car.ts":
/*!*****************************!*\
  !*** ./src/utils/is-car.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCar: () => (/* binding */ isCar)
/* harmony export */ });
var isCar = function (car) {
    return car &&
        typeof car === 'object' &&
        'name' in car &&
        'id' in car &&
        'color' in car &&
        typeof car.name === 'string' &&
        typeof car.id === 'number' &&
        typeof car.color === 'string'
        ? true
        : false;
};


/***/ }),

/***/ "./src/utils/is-velocity-data.ts":
/*!***************************************!*\
  !*** ./src/utils/is-velocity-data.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVelocityData: () => (/* binding */ isVelocityData)
/* harmony export */ });
var isVelocityData = function (data) {
    return data &&
        typeof data === 'object' &&
        'velocity' in data &&
        typeof data.velocity === 'number' &&
        'distance' in data &&
        typeof data.distance === 'number'
        ? true
        : false;
};


/***/ }),

/***/ "./src/utils/is-winner.ts":
/*!********************************!*\
  !*** ./src/utils/is-winner.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWinner: () => (/* binding */ isWinner)
/* harmony export */ });
var isWinner = function (data) {
    return data &&
        typeof data === 'object' &&
        'id' in data &&
        'wins' in data &&
        'time' in data &&
        typeof data.id === 'number' &&
        typeof data.wins === 'number' &&
        typeof data.time === 'number'
        ? true
        : false;
};


/***/ }),

/***/ "./src/utils/random-color.ts":
/*!***********************************!*\
  !*** ./src/utils/random-color.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomHexColor: () => (/* binding */ randomHexColor)
/* harmony export */ });
var randomHexColor = function () {
    var maximumLength = 6;
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < maximumLength; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
};


/***/ }),

/***/ "./src/utils/request/create-winner.ts":
/*!********************************************!*\
  !*** ./src/utils/request/create-winner.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWinner: () => (/* binding */ createWinner)
/* harmony export */ });
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/api */ "./src/constants/api.ts");
/* harmony import */ var _is_winner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is-winner */ "./src/utils/is-winner.ts");
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


var duplicatedID = 500;
var createWinner = function (winner) { return __awaiter(void 0, void 0, void 0, function () {
    var response, winner_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/winners"), {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(winner),
                })];
            case 1:
                response = _a.sent();
                if (!response.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, response.json()];
            case 2:
                winner_1 = _a.sent();
                console.log('winner created');
                if ((0,_is_winner__WEBPACK_IMPORTED_MODULE_1__.isWinner)(winner_1)) {
                    return [2 /*return*/, winner_1];
                }
                _a.label = 3;
            case 3:
                if (response.status === duplicatedID) {
                    console.log('Duplicated id');
                }
                return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./src/utils/request/delete-winner.ts":
/*!********************************************!*\
  !*** ./src/utils/request/delete-winner.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteWinner: () => (/* binding */ deleteWinner)
/* harmony export */ });
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/api */ "./src/constants/api.ts");
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

var notFound = 404;
var deleteWinner = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/winners/").concat(id), {
                    method: 'DELETE',
                })];
            case 1:
                response = _a.sent();
                if (response.ok) {
                    console.log('winner deleted');
                }
                if (response.status === notFound) {
                    console.log("winner doesn't found");
                }
                return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./src/utils/request/drive-mode-engine.ts":
/*!************************************************!*\
  !*** ./src/utils/request/drive-mode-engine.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   driveModeEngine: () => (/* binding */ driveModeEngine)
/* harmony export */ });
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/api */ "./src/constants/api.ts");
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

var driveModeEngine = function (car, controller) { return __awaiter(void 0, void 0, void 0, function () {
    var stopCarCode, fetchPromise;
    return __generator(this, function (_a) {
        stopCarCode = 500;
        fetchPromise = (function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/engine?id=").concat(car.id, "&status=drive"), {
                                method: 'PATCH',
                                signal: controller.signal,
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        if (response.status === stopCarCode) {
                            return [2 /*return*/, 'car need stop'];
                        }
                        else {
                            console.warn('response get with mistake');
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        handleError(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); })();
        return [2 /*return*/, fetchPromise];
    });
}); };
function handleError(error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
        console.log('Fetch aborted');
        return;
    }
    console.error('Network error or unexpected issue', error);
}


/***/ }),

/***/ "./src/utils/request/get-winners.ts":
/*!******************************************!*\
  !*** ./src/utils/request/get-winners.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWinners: () => (/* binding */ getWinners)
/* harmony export */ });
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/api */ "./src/constants/api.ts");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.ts");
/* harmony import */ var _is_winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is-winner */ "./src/utils/is-winner.ts");
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



var createQueryPath = function (query) {
    if (query === undefined)
        return null;
    var dataForString = [];
    if (query.page) {
        dataForString.push("_page=".concat(query.page));
    }
    if (query.limit) {
        dataForString.push("_limit=".concat(query.limit));
    }
    if (query.sort) {
        dataForString.push("_sort=".concat(query.sort));
    }
    if (query.order) {
        dataForString.push("_order=".concat(query.order));
    }
    return "?" + dataForString.join('&');
};
var getWinners = function (query) { return __awaiter(void 0, void 0, void 0, function () {
    var queryPath, response, count, winners;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                queryPath = createQueryPath(query);
                return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/winners").concat(queryPath || ''), {
                        method: 'GET',
                    })];
            case 1:
                response = _a.sent();
                if (!response.ok) return [3 /*break*/, 3];
                count = response.headers.get('X-Total-Count');
                if (count) {
                    _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.countWinner = Number.parseInt(count);
                }
                return [4 /*yield*/, response.json()];
            case 2:
                winners = _a.sent();
                if (winners.every(_is_winner__WEBPACK_IMPORTED_MODULE_2__.isWinner)) {
                    return [2 /*return*/, winners];
                }
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./src/utils/request/stop-start-engine.ts":
/*!************************************************!*\
  !*** ./src/utils/request/stop-start-engine.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stopStartEngine: () => (/* binding */ stopStartEngine)
/* harmony export */ });
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/api */ "./src/constants/api.ts");
/* harmony import */ var _is_velocity_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is-velocity-data */ "./src/utils/is-velocity-data.ts");
/* harmony import */ var _drive_mode_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drive-mode-engine */ "./src/utils/request/drive-mode-engine.ts");
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



var controllers = new Map();
var startEngine = function (car, direction) { return __awaiter(void 0, void 0, void 0, function () {
    var controller, response, data, duration, promise;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                controller = new AbortController();
                controllers.set(car.id, controller);
                return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/engine?id=").concat(car.id, "&status=").concat(direction), { method: 'PATCH' })];
            case 1:
                response = _a.sent();
                if (!response.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                if ((0,_is_velocity_data__WEBPACK_IMPORTED_MODULE_1__.isVelocityData)(data)) {
                    duration = data.distance / data.velocity;
                    promise = (0,_drive_mode_engine__WEBPACK_IMPORTED_MODULE_2__.driveModeEngine)(car, controller);
                    return [2 /*return*/, { promise: promise, duration: duration }];
                }
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
var stopEngine = function (car, direction) { return __awaiter(void 0, void 0, void 0, function () {
    var controller, response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                controller = controllers.get(car.id);
                if (!controller) return [3 /*break*/, 4];
                controller.abort();
                return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/engine?id=").concat(car.id, "&status=").concat(direction), { method: 'PATCH' })];
            case 1:
                response = _a.sent();
                if (!response.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result];
            case 3:
                controllers.delete(car.id);
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var stopStartEngine = function (car, direction) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(direction === 'started')) return [3 /*break*/, 2];
                return [4 /*yield*/, startEngine(car, direction)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                if (!(direction === 'stopped')) return [3 /*break*/, 4];
                return [4 /*yield*/, stopEngine(car, direction)];
            case 3: return [2 /*return*/, _a.sent()];
            case 4: return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./src/utils/request/update-winner.ts":
/*!********************************************!*\
  !*** ./src/utils/request/update-winner.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateWinner: () => (/* binding */ updateWinner)
/* harmony export */ });
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/api */ "./src/constants/api.ts");
/* harmony import */ var _is_winner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is-winner */ "./src/utils/is-winner.ts");
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


var notFound = 404;
var updateWinner = function (winner) { return __awaiter(void 0, void 0, void 0, function () {
    var response, winner_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_0__.URL_API, "/winners/").concat(winner.id), {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ wins: winner.wins, time: winner.time }),
                })];
            case 1:
                response = _a.sent();
                if (!response.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, response.json()];
            case 2:
                winner_1 = _a.sent();
                console.log('winner updated');
                if ((0,_is_winner__WEBPACK_IMPORTED_MODULE_1__.isWinner)(winner_1)) {
                    return [2 /*return*/, winner_1];
                }
                _a.label = 3;
            case 3:
                if (response.status === notFound) {
                    console.log('Not found winner');
                }
                return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./src/utils/set-disabled-elements.ts":
/*!********************************************!*\
  !*** ./src/utils/set-disabled-elements.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDisabledElements: () => (/* binding */ setDisabledElements)
/* harmony export */ });
var setDisabledElements = function (array, value) {
    if (value) {
        array.forEach(function (item) { return item.setAttribute('disabled', ""); });
    }
    else {
        array.forEach(function (item) { return item.removeAttribute('disabled'); });
    }
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
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/state */ "./src/state/state.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
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



var startApp = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, _state_state__WEBPACK_IMPORTED_MODULE_1__.stateRace.getCars()];
            case 1:
                _a.sent();
                globalThis.addEventListener('popstate', _router_router__WEBPACK_IMPORTED_MODULE_0__.handleLocation);
                globalThis.route = _router_router__WEBPACK_IMPORTED_MODULE_0__.route;
                (0,_router_router__WEBPACK_IMPORTED_MODULE_0__.handleLocation)();
                return [2 /*return*/];
        }
    });
}); };
startApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi04YTRiNWIyODRlZDM1YmFlMTZlZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxZQUFZLFlBQVksWUFBWSxLQUFLLE1BQU0sWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxLQUFLLE1BQU0sV0FBVyxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssTUFBTSxXQUFXLGFBQWEsYUFBYSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsWUFBWSxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxhQUFhLGFBQWEsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFdBQVcsYUFBYSxLQUFLLE1BQU0sV0FBVyxZQUFZLEtBQUssTUFBTSxXQUFXLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLFlBQVksS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxXQUFXLGFBQWEsS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFlBQVksS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLE1BQU0sWUFBWSxLQUFLLEtBQUssTUFBTSxZQUFZLE1BQU0sWUFBWSxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssS0FBSyxNQUFNLEtB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QUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLDBEQUFjLENBQUMsQ0FBQztnQkFDeEQsVUFBVSxDQUFDLEtBQUssR0FBRyxpREFBSyxDQUFDO2dCQUV6Qiw4REFBYyxFQUFFLENBQUM7Ozs7S0FDbEIsQ0FBQztBQUVGLFFBQVEsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9tYWluLWVsZW1lbnRzL21haW4tZWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLW1lbnUvbmF2aWdhdGlvbi1tZW51LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29uc3RhbnRzL2FwaS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbnN0YW50cy9jYXItbmFtZXMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9lbnVtcy9wYXRoLXJvdXRlcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dsb2JhbC1zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9tYWluL2NvbXBvbmVudHMvaGFuZGxlLXdpbm5lci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3BhZ2VzL21haW4vY29tcG9uZW50cy9yYWNlLWFyZWEudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9tYWluL2NvbXBvbmVudHMvc2V0LWNhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9tYWluL2NvbXBvbmVudHMvc2V0LWNhcnMvZG93bi1sZXZlbC1zZXQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9tYWluL2NvbXBvbmVudHMvc2V0LWNhcnMvaGFuZGxlLWV2ZW50LXVwLWxldmVsLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcGFnZXMvbWFpbi9jb21wb25lbnRzL3NldC1jYXJzL21pZGRsZS1sZXZlbC1zZXQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9tYWluL2NvbXBvbmVudHMvc2V0LWNhcnMvdXAtbGV2ZWwtc2V0LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcGFnZXMvbWFpbi9tYWluLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9wYWdlNDA0L3BhZ2U0MDQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy93aW5uZXJzL3dpbm5lcnMtcGFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3BhZ2VzL3dpbm5lcnMvd2lubmVycy10YWJsZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdGF0ZS9zdGF0ZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlcy5jc3M/MGEyNSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3V0aWxzL2FuaW1hdGlvbi9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy91dGlscy9hbmltYXRpb24vZHJhdy1hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy91dGlscy9hbmltYXRpb24vdGltaW5nLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvY2xlYW5lci1lbGVtZW50LWZyb20tY2hpbGRyZW4udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy91dGlscy9jcmVhdGUtZWxlbWVudC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3V0aWxzL2ZpbHRlcmVkLWRhdGEtZm9yLXBhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy91dGlscy9nZXQtcmFuZG9tLWRhdGEtZnJvbS1hcnJheS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3V0aWxzL2dldC1yYW5kb20tbnVtYmVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvaGFuZGxlLW5hbWUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy91dGlscy9pcy1jYXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy91dGlscy9pcy12ZWxvY2l0eS1kYXRhLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvaXMtd2lubmVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvcmFuZG9tLWNvbG9yLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvcmVxdWVzdC9jcmVhdGUtd2lubmVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvcmVxdWVzdC9kZWxldGUtd2lubmVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvcmVxdWVzdC9kcml2ZS1tb2RlLWVuZ2luZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3V0aWxzL3JlcXVlc3QvZ2V0LXdpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy91dGlscy9yZXF1ZXN0L3N0b3Atc3RhcnQtZW5naW5lLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvcmVxdWVzdC91cGRhdGUtd2lubmVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvc2V0LWRpc2FibGVkLWVsZW1lbnRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qISB0YWlsd2luZGNzcyB2NC4xLjEgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovXG5AbGF5ZXIgdGhlbWUsIGJhc2UsIGNvbXBvbmVudHMsIHV0aWxpdGllcztcbkBzdXBwb3J0cyAoKC13ZWJraXQtaHlwaGVuczogbm9uZSkgYW5kIChub3QgKG1hcmdpbi10cmltOiBpbmxpbmUpKSkgb3IgKCgtbW96LW9yaWVudDogaW5saW5lKSBhbmQgKG5vdCAoY29sb3I6cmdiKGZyb20gcmVkIHIgZyBiKSkpKSB7XG4gIEBsYXllciBiYXNlIHtcbiAgICAqLCA6OmJlZm9yZSwgOjphZnRlciwgOjpiYWNrZHJvcCB7XG4gICAgICAtLXR3LWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAtLXR3LWZvbnQtd2VpZ2h0OiBpbml0aWFsO1xuICAgICAgLS10dy1kdXJhdGlvbjogaW5pdGlhbDtcbiAgICB9XG4gIH1cbn1cbkBsYXllciB0aGVtZSB7XG4gIDpyb290LCA6aG9zdCB7XG4gICAgLS1mb250LXNhbnM6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxuICAgICAgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgICAtLWZvbnQtbW9ubzogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsXG4gICAgICBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgICAtLWNvbG9yLXJlZC01MDogb2tsY2goOTcuMSUgMC4wMTMgMTcuMzgpO1xuICAgIC0tY29sb3ItcmVkLTEwMDogb2tsY2goOTMuNiUgMC4wMzIgMTcuNzE3KTtcbiAgICAtLWNvbG9yLXJlZC03MDA6IG9rbGNoKDUwLjUlIDAuMjEzIDI3LjUxOCk7XG4gICAgLS1jb2xvci1yZWQtODAwOiBva2xjaCg0NC40JSAwLjE3NyAyNi44OTkpO1xuICAgIC0tY29sb3ItcmVkLTkwMDogb2tsY2goMzkuNiUgMC4xNDEgMjUuNzIzKTtcbiAgICAtLWNvbG9yLXJlZC05NTA6IG9rbGNoKDI1LjglIDAuMDkyIDI2LjA0Mik7XG4gICAgLS1jb2xvci1hbWJlci04MDA6IG9rbGNoKDQ3LjMlIDAuMTM3IDQ2LjIwMSk7XG4gICAgLS1jb2xvci15ZWxsb3ctNTAwOiBva2xjaCg3OS41JSAwLjE4NCA4Ni4wNDcpO1xuICAgIC0tY29sb3IteWVsbG93LTcwMDogb2tsY2goNTUuNCUgMC4xMzUgNjYuNDQyKTtcbiAgICAtLWNvbG9yLXllbGxvdy04MDA6IG9rbGNoKDQ3LjYlIDAuMTE0IDYxLjkwNyk7XG4gICAgLS1jb2xvci1lbWVyYWxkLTUwMDogb2tsY2goNjkuNiUgMC4xNyAxNjIuNDgpO1xuICAgIC0tY29sb3ItdGVhbC05MDA6IG9rbGNoKDM4LjYlIDAuMDYzIDE4OC40MTYpO1xuICAgIC0tY29sb3Itc3RvbmUtMjAwOiBva2xjaCg5Mi4zJSAwLjAwMyA0OC43MTcpO1xuICAgIC0tY29sb3Itc3RvbmUtNDAwOiBva2xjaCg3MC45JSAwLjAxIDU2LjI1OSk7XG4gICAgLS1jb2xvci1zdG9uZS01MDA6IG9rbGNoKDU1LjMlIDAuMDEzIDU4LjA3MSk7XG4gICAgLS1jb2xvci1zdG9uZS05MDA6IG9rbGNoKDIxLjYlIDAuMDA2IDU2LjA0Myk7XG4gICAgLS1jb2xvci1zdG9uZS05NTA6IG9rbGNoKDE0LjclIDAuMDA0IDQ5LjI1KTtcbiAgICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xuICAgIC0tc3BhY2luZzogMC4yNXJlbTtcbiAgICAtLXRleHQteHM6IDAuNzVyZW07XG4gICAgLS10ZXh0LXhzLS1saW5lLWhlaWdodDogY2FsYygxIC8gMC43NSk7XG4gICAgLS10ZXh0LXNtOiAwLjg3NXJlbTtcbiAgICAtLXRleHQtc20tLWxpbmUtaGVpZ2h0OiBjYWxjKDEuMjUgLyAwLjg3NSk7XG4gICAgLS10ZXh0LWJhc2U6IDFyZW07XG4gICAgLS10ZXh0LWJhc2UtLWxpbmUtaGVpZ2h0OiBjYWxjKDEuNSAvIDEpO1xuICAgIC0tdGV4dC14bDogMS4yNXJlbTtcbiAgICAtLXRleHQteGwtLWxpbmUtaGVpZ2h0OiBjYWxjKDEuNzUgLyAxLjI1KTtcbiAgICAtLXRleHQtMnhsOiAxLjVyZW07XG4gICAgLS10ZXh0LTJ4bC0tbGluZS1oZWlnaHQ6IGNhbGMoMiAvIDEuNSk7XG4gICAgLS10ZXh0LTR4bDogMi4yNXJlbTtcbiAgICAtLXRleHQtNHhsLS1saW5lLWhlaWdodDogY2FsYygyLjUgLyAyLjI1KTtcbiAgICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcbiAgICAtLXJhZGl1cy1tZDogMC4zNzVyZW07XG4gICAgLS1yYWRpdXMtbGc6IDAuNXJlbTtcbiAgICAtLXJhZGl1cy0yeGw6IDFyZW07XG4gICAgLS1yYWRpdXMtM3hsOiAxLjVyZW07XG4gICAgLS1yYWRpdXMtNHhsOiAycmVtO1xuICAgIC0tZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICAtLWRlZmF1bHQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgLS1kZWZhdWx0LWZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgIC0tZGVmYXVsdC1tb25vLWZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICB9XG59XG5AbGF5ZXIgYmFzZSB7XG4gICosIDo6YWZ0ZXIsIDo6YmVmb3JlLCA6OmJhY2tkcm9wLCA6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMCBzb2xpZDtcbiAgfVxuICBodG1sLCA6aG9zdCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgdGFiLXNpemU6IDQ7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udC1mYW1pbHksIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiKTtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IHZhcigtLWRlZmF1bHQtZm9udC1mZWF0dXJlLXNldHRpbmdzLCBub3JtYWwpO1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiB2YXIoLS1kZWZhdWx0LWZvbnQtdmFyaWF0aW9uLXNldHRpbmdzLCBub3JtYWwpO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgaHIge1xuICAgIGhlaWdodDogMDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gIH1cbiAgYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICB9XG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIH1cbiAgYiwgc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG4gIGNvZGUsIGtiZCwgc2FtcCwgcHJlIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1tb25vLWZvbnQtZmFtaWx5LCB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UpO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogdmFyKC0tZGVmYXVsdC1tb25vLWZvbnQtZmVhdHVyZS1zZXR0aW5ncywgbm9ybWFsKTtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogdmFyKC0tZGVmYXVsdC1tb25vLWZvbnQtdmFyaWF0aW9uLXNldHRpbmdzLCBub3JtYWwpO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIHNtYWxsIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgfVxuICBzdWIsIHN1cCB7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuICBzdWIge1xuICAgIGJvdHRvbTogLTAuMjVlbTtcbiAgfVxuICBzdXAge1xuICAgIHRvcDogLTAuNWVtO1xuICB9XG4gIHRhYmxlIHtcbiAgICB0ZXh0LWluZGVudDogMDtcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuICA6LW1vei1mb2N1c3Jpbmcge1xuICAgIG91dGxpbmU6IGF1dG87XG4gIH1cbiAgcHJvZ3Jlc3Mge1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuICBzdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIH1cbiAgb2wsIHVsLCBtZW51IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIGltZywgc3ZnLCB2aWRlbywgY2FudmFzLCBhdWRpbywgaWZyYW1lLCBlbWJlZCwgb2JqZWN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIGltZywgdmlkZW8ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCBvcHRncm91cCwgdGV4dGFyZWEsIDo6ZmlsZS1zZWxlY3Rvci1idXR0b24ge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA6d2hlcmUoc2VsZWN0OmlzKFttdWx0aXBsZV0sIFtzaXplXSkpIG9wdGdyb3VwIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG4gIDp3aGVyZShzZWxlY3Q6aXMoW211bHRpcGxlXSwgW3NpemVdKSkgb3B0Z3JvdXAgb3B0aW9uIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMjBweDtcbiAgfVxuICA6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNHB4O1xuICB9XG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgQHN1cHBvcnRzIChub3QgKC13ZWJraXQtYXBwZWFyYW5jZTogLWFwcGxlLXBheS1idXR0b24pKSAgb3IgKGNvbnRhaW4taW50cmluc2ljLXNpemU6IDFweCkge1xuICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IGNvbG9yLW1peChpbiBva2xhYiwgY3VycmVudENvbG9yIDUwJSwgdHJhbnNwYXJlbnQpO1xuICAgIH1cbiAgfVxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgfVxuICA6Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuICA6Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZSB7XG4gICAgbWluLWhlaWdodDogMWxoO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIH1cbiAgOjotd2Via2l0LWRhdGV0aW1lLWVkaXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG4gIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWZpZWxkcy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LCA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkLCA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZCwgOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkLCA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1ob3VyLWZpZWxkLCA6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1taW51dGUtZmllbGQsIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXNlY29uZC1maWVsZCwgOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbWlsbGlzZWNvbmQtZmllbGQsIDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1lcmlkaWVtLWZpZWxkIHtcbiAgICBwYWRkaW5nLWJsb2NrOiAwO1xuICB9XG4gIDotbW96LXVpLWludmFsaWQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgYnV0dG9uLCBpbnB1dDp3aGVyZShbdHlwZT1cImJ1dHRvblwiXSwgW3R5cGU9XCJyZXNldFwiXSwgW3R5cGU9XCJzdWJtaXRcIl0pLCA6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBhcHBlYXJhbmNlOiBidXR0b247XG4gIH1cbiAgOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCA6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBbaGlkZGVuXTp3aGVyZSg6bm90KFtoaWRkZW49XCJ1bnRpbC1mb3VuZFwiXSkpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBsYXllciB1dGlsaXRpZXMge1xuICAuYWJzb2x1dGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuZml4ZWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICAucmVsYXRpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAudG9wLTAge1xuICAgIHRvcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDApO1xuICB9XG4gIC50b3AtXFxcXFswcHhcXFxcXSB7XG4gICAgdG9wOiAwcHg7XG4gIH1cbiAgLnJpZ2h0LVxcXFxbMHB4XFxcXF0ge1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbiAgLnJpZ2h0LVxcXFxbM3B4XFxcXF0ge1xuICAgIHJpZ2h0OiAzcHg7XG4gIH1cbiAgLi1ib3R0b20tXFxcXFs1cHhcXFxcXSB7XG4gICAgYm90dG9tOiBjYWxjKDVweCAqIC0xKTtcbiAgfVxuICAuYm90dG9tLVxcXFxbM3B4XFxcXF0ge1xuICAgIGJvdHRvbTogM3B4O1xuICB9XG4gIC5sZWZ0LVxcXFxbMHB4XFxcXF0ge1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuICAubGVmdC1cXFxcWzNweFxcXFxdIHtcbiAgICBsZWZ0OiAzcHg7XG4gIH1cbiAgLm14LTMge1xuICAgIG1hcmdpbi1pbmxpbmU6IGNhbGModmFyKC0tc3BhY2luZykgKiAzKTtcbiAgfVxuICAubXgtYXV0byB7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgfVxuICAubXktMCB7XG4gICAgbWFyZ2luLWJsb2NrOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMCk7XG4gIH1cbiAgLm15LTEge1xuICAgIG1hcmdpbi1ibG9jazogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDEpO1xuICB9XG4gIC5teS0yIHtcbiAgICBtYXJnaW4tYmxvY2s6IGNhbGModmFyKC0tc3BhY2luZykgKiAyKTtcbiAgfVxuICAubXQtMSB7XG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDEpO1xuICB9XG4gIC5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5hc3BlY3Qtc3F1YXJlIHtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICB9XG4gIC5oLTNcXFxcLzQge1xuICAgIGhlaWdodDogY2FsYygzLzQgKiAxMDAlKTtcbiAgfVxuICAuaC1cXFxcWzE0cHhcXFxcXSB7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICB9XG4gIC5oLVxcXFxbNTBweFxcXFxdIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgLmgtZnVsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5taW4taC1mdWxsIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG4gIC53LTNcXFxcLzQge1xuICAgIHdpZHRoOiBjYWxjKDMvNCAqIDEwMCUpO1xuICB9XG4gIC53LTUwIHtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDUwKTtcbiAgfVxuICAudy1cXFxcWzE0cHhcXFxcXSB7XG4gICAgd2lkdGg6IDE0cHg7XG4gIH1cbiAgLnctXFxcXFs0MHB4XFxcXF0ge1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG4gIC53LVxcXFxbNDZweFxcXFxdIHtcbiAgICB3aWR0aDogNDZweDtcbiAgfVxuICAudy1cXFxcWzEwMHB4XFxcXF0ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAudy1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWF4LXctNjAwIHtcbiAgICBtYXgtd2lkdGg6IGNhbGModmFyKC0tc3BhY2luZykgKiA2MDApO1xuICB9XG4gIC5ncm93IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmJhc2lzLTEwIHtcbiAgICBmbGV4LWJhc2lzOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMTApO1xuICB9XG4gIC5iYXNpcy0yMCB7XG4gICAgZmxleC1iYXNpczogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDIwKTtcbiAgfVxuICAuYmFzaXMtNDAge1xuICAgIGZsZXgtYmFzaXM6IGNhbGModmFyKC0tc3BhY2luZykgKiA0MCk7XG4gIH1cbiAgLmN1cnNvci1wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmZsZXgtY29sIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5mbGV4LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuaXRlbXMtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5qdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmdhcC0yIHtcbiAgICBnYXA6IGNhbGModmFyKC0tc3BhY2luZykgKiAyKTtcbiAgfVxuICAuZ2FwLXgtMSB7XG4gICAgY29sdW1uLWdhcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDEpO1xuICB9XG4gIC5nYXAteC0yIHtcbiAgICBjb2x1bW4tZ2FwOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMik7XG4gIH1cbiAgLmdhcC15LTIge1xuICAgIHJvdy1nYXA6IGNhbGModmFyKC0tc3BhY2luZykgKiAyKTtcbiAgfVxuICAuZ2FwLXktNSB7XG4gICAgcm93LWdhcDogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDUpO1xuICB9XG4gIC50cnVuY2F0ZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC5yb3VuZGVkLTJ4bCB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTJ4bCk7XG4gIH1cbiAgLnJvdW5kZWQtM3hsIHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtM3hsKTtcbiAgfVxuICAucm91bmRlZC00eGwge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy00eGwpO1xuICB9XG4gIC5yb3VuZGVkLVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLnJvdW5kZWQtZnVsbCB7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyhpbmZpbml0eSAqIDFweCk7XG4gIH1cbiAgLnJvdW5kZWQtbGcge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIH1cbiAgLnJvdW5kZWQtbWQge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIH1cbiAgLnJvdW5kZWQtdGwtXFxcXFsxNXB4XFxcXF0ge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgLnJvdW5kZWQtdHItXFxcXFs0MHB4XFxcXF0ge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xuICB9XG4gIC5ib3JkZXItMiB7XG4gICAgYm9yZGVyLXN0eWxlOiB2YXIoLS10dy1ib3JkZXItc3R5bGUpO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICB9XG4gIC5ib3JkZXItMyB7XG4gICAgYm9yZGVyLXN0eWxlOiB2YXIoLS10dy1ib3JkZXItc3R5bGUpO1xuICAgIGJvcmRlci13aWR0aDogM3B4O1xuICB9XG4gIC5ib3JkZXItNSB7XG4gICAgYm9yZGVyLXN0eWxlOiB2YXIoLS10dy1ib3JkZXItc3R5bGUpO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICB9XG4gIC5ib3JkZXItYi0yIHtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiB2YXIoLS10dy1ib3JkZXItc3R5bGUpO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgfVxuICAuYm9yZGVyLWwtMiB7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHZhcigtLXR3LWJvcmRlci1zdHlsZSk7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgfVxuICAuYm9yZGVyLWRhc2hlZCB7XG4gICAgLS10dy1ib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgfVxuICAuYm9yZGVyLWRvdHRlZCB7XG4gICAgLS10dy1ib3JkZXItc3R5bGU6IGRvdHRlZDtcbiAgICBib3JkZXItc3R5bGU6IGRvdHRlZDtcbiAgfVxuICAuYm9yZGVyLWFtYmVyLTgwMCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1hbWJlci04MDApO1xuICB9XG4gIC5ib3JkZXItcmVkLTk1MCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQtOTUwKTtcbiAgfVxuICAuYm9yZGVyLXdoaXRlIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgfVxuICAuYmctYW1iZXItODAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hbWJlci04MDApO1xuICB9XG4gIC5iZy1yZWQtNTAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZC01MCk7XG4gIH1cbiAgLmJnLXJlZC03MDAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZC03MDApO1xuICB9XG4gIC5iZy1yZWQtODAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQtODAwKTtcbiAgfVxuICAuYmctc3RvbmUtNDAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdG9uZS00MDApO1xuICB9XG4gIC5iZy1zdG9uZS05NTAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN0b25lLTk1MCk7XG4gIH1cbiAgLmJnLXRlYWwtOTAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZWFsLTkwMCk7XG4gIH1cbiAgLmJnLXllbGxvdy01MDBcXFxcLzQwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgb2tsY2goNzkuNSUgMC4xODQgODYuMDQ3KSA0MCUsIHRyYW5zcGFyZW50KTtcbiAgICBAc3VwcG9ydHMgKGNvbG9yOiBjb2xvci1taXgoaW4gbGFiLCByZWQsIHJlZCkpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0tY29sb3IteWVsbG93LTUwMCkgNDAlLCB0cmFuc3BhcmVudCk7XG4gICAgfVxuICB9XG4gIC5iZy15ZWxsb3ctNTAwXFxcXC85MCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIG9rbGNoKDc5LjUlIDAuMTg0IDg2LjA0NykgOTAlLCB0cmFuc3BhcmVudCk7XG4gICAgQHN1cHBvcnRzIChjb2xvcjogY29sb3ItbWl4KGluIGxhYiwgcmVkLCByZWQpKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLWNvbG9yLXllbGxvdy01MDApIDkwJSwgdHJhbnNwYXJlbnQpO1xuICAgIH1cbiAgfVxuICAuYmcteWVsbG93LTcwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93LTcwMCk7XG4gIH1cbiAgLnAtMiB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDIpO1xuICB9XG4gIC5wLTQge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2luZykgKiA0KTtcbiAgfVxuICAucHgtMiB7XG4gICAgcGFkZGluZy1pbmxpbmU6IGNhbGModmFyKC0tc3BhY2luZykgKiAyKTtcbiAgfVxuICAucHgtMyB7XG4gICAgcGFkZGluZy1pbmxpbmU6IGNhbGModmFyKC0tc3BhY2luZykgKiAzKTtcbiAgfVxuICAucHgtNCB7XG4gICAgcGFkZGluZy1pbmxpbmU6IGNhbGModmFyKC0tc3BhY2luZykgKiA0KTtcbiAgfVxuICAucHgtNSB7XG4gICAgcGFkZGluZy1pbmxpbmU6IGNhbGModmFyKC0tc3BhY2luZykgKiA1KTtcbiAgfVxuICAucHktMSB7XG4gICAgcGFkZGluZy1ibG9jazogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDEpO1xuICB9XG4gIC5weS0yIHtcbiAgICBwYWRkaW5nLWJsb2NrOiBjYWxjKHZhcigtLXNwYWNpbmcpICogMik7XG4gIH1cbiAgLnB5LTYge1xuICAgIHBhZGRpbmctYmxvY2s6IGNhbGModmFyKC0tc3BhY2luZykgKiA2KTtcbiAgfVxuICAucHktOCB7XG4gICAgcGFkZGluZy1ibG9jazogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDgpO1xuICB9XG4gIC50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50ZXh0LTJ4bCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LTJ4bCk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLXR3LWxlYWRpbmcsIHZhcigtLXRleHQtMnhsLS1saW5lLWhlaWdodCkpO1xuICB9XG4gIC50ZXh0LTR4bCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LTR4bCk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLXR3LWxlYWRpbmcsIHZhcigtLXRleHQtNHhsLS1saW5lLWhlaWdodCkpO1xuICB9XG4gIC50ZXh0LXNtIHtcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS10dy1sZWFkaW5nLCB2YXIoLS10ZXh0LXNtLS1saW5lLWhlaWdodCkpO1xuICB9XG4gIC50ZXh0LXhsIHtcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQteGwpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS10dy1sZWFkaW5nLCB2YXIoLS10ZXh0LXhsLS1saW5lLWhlaWdodCkpO1xuICB9XG4gIC50ZXh0LXhzIHtcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQteHMpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS10dy1sZWFkaW5nLCB2YXIoLS10ZXh0LXhzLS1saW5lLWhlaWdodCkpO1xuICB9XG4gIC5mb250LWJvbGQge1xuICAgIC0tdHctZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgfVxuICAudGV4dC1lbWVyYWxkLTUwMCB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWVtZXJhbGQtNTAwKTtcbiAgfVxuICAudGV4dC1yZWQtOTUwIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLTk1MCk7XG4gIH1cbiAgLnVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAudHJhbnNpdGlvbi1jb2xvcnMge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIG91dGxpbmUtY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCAtLXR3LWdyYWRpZW50LWZyb20sIC0tdHctZ3JhZGllbnQtdmlhLCAtLXR3LWdyYWRpZW50LXRvO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10dy1lYXNlLCB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHctZHVyYXRpb24sIHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbikpO1xuICB9XG4gIC5kdXJhdGlvbi0zMDAge1xuICAgIC0tdHctZHVyYXRpb246IDMwMG1zO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICB9XG4gIC5vdXRsaW5lLW5vbmUge1xuICAgIC0tdHctb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICB9XG4gIC5ob3ZlclxcXFw6Y3Vyc29yLXBvaW50ZXIge1xuICAgICY6aG92ZXIge1xuICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaG92ZXJcXFxcOnJvdW5kZWQtbGcge1xuICAgICY6aG92ZXIge1xuICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhvdmVyXFxcXDpiZy1yZWQtOTAwIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZC05MDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaG92ZXJcXFxcOmJnLXN0b25lLTUwMCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdG9uZS01MDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaG92ZXJcXFxcOmJnLXllbGxvdy04MDAge1xuICAgICY6aG92ZXIge1xuICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93LTgwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5ob3ZlclxcXFw6dGV4dC1yZWQtMTAwIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQtMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhvdmVyXFxcXDp0ZXh0LXN0b25lLTIwMCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc3RvbmUtMjAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpc2FibGVkXFxcXDpiZy1zdG9uZS01MDAge1xuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3RvbmUtNTAwKTtcbiAgICB9XG4gIH1cbiAgLmRpc2FibGVkXFxcXDpob3ZlclxcXFw6Y3Vyc29yLW5vdC1hbGxvd2VkIHtcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpc2FibGVkXFxcXDpob3ZlclxcXFw6dGV4dC1zdG9uZS05MDAge1xuICAgICY6ZGlzYWJsZWQge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXN0b25lLTkwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm1kXFxcXDpiYXNpcy0yMCB7XG4gICAgQG1lZGlhICh3aWR0aCA+PSA0OHJlbSkge1xuICAgICAgZmxleC1iYXNpczogY2FsYyh2YXIoLS1zcGFjaW5nKSAqIDIwKTtcbiAgICB9XG4gIH1cbiAgLm1kXFxcXDp0ZXh0LWJhc2Uge1xuICAgIEBtZWRpYSAod2lkdGggPj0gNDhyZW0pIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1iYXNlKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS10dy1sZWFkaW5nLCB2YXIoLS10ZXh0LWJhc2UtLWxpbmUtaGVpZ2h0KSk7XG4gICAgfVxuICB9XG59XG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMmYyZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuYm9keS5sb2NrIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBsYXllciBjb21wb25lbnRzIHtcbiAgLnZpc3VhbGx5LWhpZGRlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgxMDAlKTtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmNvbG9ySW5wdXQge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmNvbG9ySW5wdXQ6Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLmNvbG9ySW5wdXQ6Oi1tb3otY29sb3Itc3dhdGNoIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cbkBwcm9wZXJ0eSAtLXR3LWJvcmRlci1zdHlsZSB7XG4gIHN5bnRheDogXCIqXCI7XG4gIGluaGVyaXRzOiBmYWxzZTtcbiAgaW5pdGlhbC12YWx1ZTogc29saWQ7XG59XG5AcHJvcGVydHkgLS10dy1mb250LXdlaWdodCB7XG4gIHN5bnRheDogXCIqXCI7XG4gIGluaGVyaXRzOiBmYWxzZTtcbn1cbkBwcm9wZXJ0eSAtLXR3LWR1cmF0aW9uIHtcbiAgc3ludGF4OiBcIipcIjtcbiAgaW5oZXJpdHM6IGZhbHNlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnRUFpREE7QUFqREEseUNBaURBO0FBakRBO0VBQUE7SUFBQTtNQUFBLHdCQWlEQTtNQWpEQSx5QkFpREE7TUFqREEsc0JBaURBO0lBQUE7RUFBQTtBQUFBO0FBakRBO0VBQUE7SUFBQTs2REFpREE7SUFqREE7OEJBaURBO0lBakRBLHdDQWlEQTtJQWpEQSwwQ0FpREE7SUFqREEsMENBaURBO0lBakRBLDBDQWlEQTtJQWpEQSwwQ0FpREE7SUFqREEsMENBaURBO0lBakRBLDRDQWlEQTtJQWpEQSw2Q0FpREE7SUFqREEsNkNBaURBO0lBakRBLDZDQWlEQTtJQWpEQSw2Q0FpREE7SUFqREEsNENBaURBO0lBakRBLDRDQWlEQTtJQWpEQSwyQ0FpREE7SUFqREEsNENBaURBO0lBakRBLDRDQWlEQTtJQWpEQSwyQ0FpREE7SUFqREEsbUJBaURBO0lBakRBLGtC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QkFpREE7UUFBQTtNQUFBO0lBQUE7RUFBQTtFQWpEQTtJQUFBO01BQUEscUNBaURBO0lBQUE7RUFBQTtFQWpEQTtJQUFBO01BQUEsMkJBaURBO01BakRBLDZEQWlEQTtJQUFBO0VBQUE7QUFBQTtBQWpEQTs7RUFBQSxZQWlEQTtFQWpEQSx5QkFpREE7RUFqREEsa0JBaURBO0FBQUE7QUFqREE7RUFBQSxnQkFpREE7QUFBQTtBQWpEQTtFQUFBO0lBQUEsa0JBaURBO0lBakRBLFVBaURBO0lBakRBLFdBaURBO0lBakRBLFlBaURBO0lBakRBLFNBaURBO0lBakRBLFVBaURBO0lBakRBLG1CQWlEQTtJQWpEQSxzQkFpREE7SUFqREEsbUJBaURBO0lBakRBLGdCQWlEQTtFQUFBO0VBakRBO0lBQUEsd0JBaURBO0lBakRBLHFCQWlEQTtJQWpEQSxnQkFpREE7SUFqREEsNkJBaURBO0lBakRBLFdBaURBO0lBakRBLFlBaURBO0lBakRBLGtCQWlEQTtJQWpEQSxZQWlEQTtJQWpEQSxlQWlEQTtFQUFBO0VBakRBO0lBQUEsa0JBaURBO0VBQUE7RUFqREE7SUFBQSxrQkFpREE7RUFBQTtBQUFBO0FBakRBO0VBQUEsV0FpREE7RUFqREEsZUFpREE7RUFqREEsb0JBaURBO0FBQUE7QUFqREE7RUFBQSxXQWlEQTtFQWpEQSxlQWlEQTtBQUFBO0FBakRBO0VBQUEsV0FpREE7RUFqREEsZUFpREE7QUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd0YWlsd2luZGNzcyc7XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjJmMmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkubG9jayB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5AbGF5ZXIgY29tcG9uZW50cyB7XFxuICAudmlzdWFsbHktaGlkZGVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgbWFyZ2luOiAtMXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGNsaXAtcGF0aDogaW5zZXQoMTAwJSk7XFxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAuY29sb3JJbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5jb2xvcklucHV0Ojotd2Via2l0LWNvbG9yLXN3YXRjaCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDsgKi9cXG4gIH1cXG5cXG4gIC5jb2xvcklucHV0OjotbW96LWNvbG9yLXN3YXRjaCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDsgKi9cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVOYXZpZ2F0aW9uTWVudSB9IGZyb20gJy4uL25hdmlnYXRpb24tbWVudS9uYXZpZ2F0aW9uLW1lbnUnO1xuY29uc3Qgc3R5bGVzID0ge1xuICBtYWluV3JhcHBlcjpcbiAgICAnZmxleCBmbGV4LWNvbCBtYXgtdy02MDAgYmctdGVhbC05MDAgbXgtYXV0byBteS0wIHB4LTUgcHktOCBtaW4taC1mdWxsJyxcbiAgaGVhZGVyRWxlbWVudDogJ3B4LTUgcHktMicsXG4gIG1haW5FbGVtZW50OiAnZ3JvdyBweC01IHB5LTInLFxuICBmb290ZXJFbGVtZW50OiAncHgtNSBweS0yJyxcbiAgaGVhZGVyVGl0bGU6ICd0ZXh0LTR4bCB0ZXh0LWNlbnRlciBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZW1lcmFsZC01MDAgbXktMScsXG59O1xuXG5leHBvcnQgY29uc3QgbWFpbldyYXBwZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGNsYXNzTmFtZTogc3R5bGVzLm1haW5XcmFwcGVyLFxuICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXG59KTtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHtcbiAgdGFnTmFtZTogJ2hlYWRlcicsXG4gIGNsYXNzTmFtZTogc3R5bGVzLmhlYWRlckVsZW1lbnQsXG4gIHBhcmVudDogbWFpbldyYXBwZXIsXG59KTtcblxuZXhwb3J0IGNvbnN0IG1haW5FbGVtZW50ID0gY3JlYXRlRWxlbWVudCh7XG4gIHRhZ05hbWU6ICdtYWluJyxcbiAgY2xhc3NOYW1lOiBzdHlsZXMubWFpbkVsZW1lbnQsXG4gIHBhcmVudDogbWFpbldyYXBwZXIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHtcbiAgdGFnTmFtZTogJ2Zvb3RlcicsXG4gIGNsYXNzTmFtZTogc3R5bGVzLmZvb3RlckVsZW1lbnQsXG4gIHBhcmVudDogbWFpbldyYXBwZXIsXG59KTtcblxuY29uc3QgaGVhZGVyVGl0bGUgPSAodGl0bGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnaDInLFxuICAgIHRleHQ6IHRpdGxlLFxuICAgIHBhcmVudDogaGVhZGVyRWxlbWVudCxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5oZWFkZXJUaXRsZSxcbiAgfSk7XG59O1xuXG5oZWFkZXJUaXRsZSgnQXN5bmMtcmFjZScpO1xuXG5jcmVhdGVOYXZpZ2F0aW9uTWVudShoZWFkZXJFbGVtZW50KTtcbiIsImltcG9ydCB7IHR5cGUgQ2FyIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUnO1xuaW1wb3J0IHsgY2xlYW5lckVsZW1lbnRGcm9tQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi91dGlscy9jbGVhbmVyLWVsZW1lbnQtZnJvbS1jaGlsZHJlbic7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlLWVsZW1lbnQnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIG1vZGFsOlxuICAgICdmaXhlZCB3LWZ1bGwgaC1mdWxsIHRvcC0wIGJnLXllbGxvdy01MDAvNDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInLFxuICBpbmZvQmxvY2s6XG4gICAgJ3ctMy80IGgtMy80IGJvcmRlci1yZWQtOTUwIGJvcmRlci01IHJvdW5kZWQtNHhsIGJnLXllbGxvdy01MDAvOTAgcHgtNCBweS02IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJyxcbiAgd2lubmVySW5mbzpcbiAgICAnZ3JvdyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAteS01IGZvbnQtYm9sZCB1cHBlcmNhc2UnLFxuICB0aXRsZTogJ3RleHQtMnhsJyxcbiAgYnV0dG9uOlxuICAgICd1cHBlcmNhc2UgZm9udC1ib2xkIGJvcmRlci1yZWQtOTUwIGJvcmRlci0zIGJnLXllbGxvdy03MDAgcC00IHJvdW5kZWQtM3hsIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJnLXllbGxvdy04MDAgaG92ZXI6dGV4dC1zdG9uZS0yMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwJyxcbiAgc3BhbjogJ3ctWzEwMHB4XSBoLVs1MHB4XSByb3VuZGVkLTJ4bCcsXG59O1xuXG5jb25zdCBjcmVhdGVIVE1MID0gKGNhcjogQ2FyLCBkdXJhdGlvbjogbnVtYmVyKTogSFRNTEVsZW1lbnRbXSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBgY2FyIFwiJHtjYXIubmFtZX1cImA7XG4gIGNvbnN0IGlkTWVzc2FnZSA9IGBpZCAjJHtjYXIuaWR9YDtcbiAgY29uc3QgdGltZU1lc3NhZ2UgPSBgdGltZTogJHtNYXRoLmZsb29yKGR1cmF0aW9uKX0gbXNgO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5tb2RhbCxcbiAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXG4gIH0pO1xuICBjb25zdCBpbmZvQmxvY2sgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5pbmZvQmxvY2ssXG4gICAgcGFyZW50OiB3cmFwcGVyLFxuICB9KTtcbiAgY29uc3Qgd3JhcHBlckZvcldpbm5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLndpbm5lckluZm8sXG4gICAgcGFyZW50OiBpbmZvQmxvY2ssXG4gIH0pO1xuICBbJ3dpbm5lcicsIG1lc3NhZ2UsIGlkTWVzc2FnZSwgdGltZU1lc3NhZ2VdLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgIHRhZ05hbWU6ICdoMycsXG4gICAgICBjbGFzc05hbWU6IHN0eWxlcy50aXRsZSxcbiAgICAgIHBhcmVudDogd3JhcHBlckZvcldpbm5lcixcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gW3dyYXBwZXIsIGluZm9CbG9jaywgd3JhcHBlckZvcldpbm5lcl07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kYWwgPSAoY2FyOiBDYXIsIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIGNvbnN0IFt3cmFwcGVyLCBpbmZvQmxvY2ssIHdyYXBwZXJGb3JXaW5uZXJdID0gY3JlYXRlSFRNTChjYXIsIGR1cmF0aW9uKTtcblxuICBjb25zdCBjb2xvckNhciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLnNwYW4sXG4gICAgcGFyZW50OiB3cmFwcGVyRm9yV2lubmVyLFxuICB9KTtcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2J1dHRvbicsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMuYnV0dG9uLFxuICAgIHBhcmVudDogaW5mb0Jsb2NrLFxuICAgIHRleHQ6ICdnbyB0byB0aGUgbmV4dCByYWNlISEhJyxcbiAgfSk7XG5cbiAgY29sb3JDYXIuc3R5bGUuYmFja2dyb3VuZCA9IGNhci5jb2xvcjtcblxuICBbYnV0dG9uLCB3cmFwcGVyXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGJ1dHRvbiB8fCBldmVudC50YXJnZXQgPT09IHdyYXBwZXIpIHtcbiAgICAgICAgY2xlYW5lckVsZW1lbnRGcm9tQ2hpbGRyZW4od3JhcHBlcik7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBQYXRoUm91dGUgfSBmcm9tICcuLi8uLi9lbnVtcy9wYXRoLXJvdXRlcyc7XG5pbXBvcnQgeyBzdGF0ZVJhY2UgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlLWVsZW1lbnQnO1xuXG50eXBlIEluZm9ybWF0aW9uQWJvdXRMaW5rcyA9IHtcbiAgaHJlZjogUGF0aFJvdXRlO1xuICB0ZXh0OiBzdHJpbmc7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIG5hdmlnYXRpb246ICdmbGV4ICcsXG4gIGxpc3RPZkxpbmtzOiAnZmxleCBiZy1yZWQtNzAwIHAtMiByb3VuZGVkLWxnJyxcbiAgbGlua0l0ZW06ICcnLFxuICBsaW5rQW5jaG9yOlxuICAgICdmbGV4IGJnLXJlZC04MDAgcm91bmRlZC1tZCBweC0zIHB5LTIgbXgtMyB0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1yZWQtOTkwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC1yZWQtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCAnLFxufTtcblxuY29uc3QgbWVudUl0ZW1zOiBJbmZvcm1hdGlvbkFib3V0TGlua3NbXSA9IFtcbiAgeyBocmVmOiBQYXRoUm91dGUuaG9tZSwgdGV4dDogJ2dhcmFnZScgfSxcbiAgeyBocmVmOiBQYXRoUm91dGUud2lubmVycywgdGV4dDogJ3dpbm5lcnMnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmF2aWdhdGlvbk1lbnUgPSAocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuICBwYXJlbnQuYXBwZW5kKG5hdmlnYXRpb25NZW51KG1lbnVJdGVtcykpO1xufTtcblxuY29uc3QgbmF2aWdhdGlvbk1lbnUgPSAobGlua3M6IEluZm9ybWF0aW9uQWJvdXRMaW5rc1tdKTogSFRNTEVsZW1lbnQgPT4ge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ25hdicsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMubmF2aWdhdGlvbixcbiAgfSk7XG4gIGNvbnN0IGxpc3RPZkxpbmtzID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ3VsJyxcbiAgICBwYXJlbnQ6IG5hdmlnYXRpb24sXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMubGlzdE9mTGlua3MsXG4gIH0pO1xuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgY29uc3QgbGlua0l0ZW0gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgIHRhZ05hbWU6ICdsaScsXG4gICAgICBwYXJlbnQ6IGxpc3RPZkxpbmtzLFxuICAgICAgY2xhc3NOYW1lOiBzdHlsZXMubGlua0l0ZW0sXG4gICAgfSk7XG4gICAgY29uc3QgbGlua0FuY2hvciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgdGFnTmFtZTogJ2EnLFxuICAgICAgcGFyZW50OiBsaW5rSXRlbSxcbiAgICAgIHRleHQ6IGxpbmsudGV4dCxcbiAgICAgIGNsYXNzTmFtZTogc3R5bGVzLmxpbmtBbmNob3IsXG4gICAgICBhdHRyaWJ1dGVzOiBbeyBhdHRyOiAnaHJlZicsIHZhbHVlOiBsaW5rLmhyZWYgfV0sXG4gICAgfSk7XG5cbiAgICBsaW5rQW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBzdGF0ZVJhY2UuYnV0dG9uc0ZvclJhY2UucmVzZXRSYWNlPy5jbGljaygpO1xuICAgICAgcm91dGUoZXZlbnQpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gbmF2aWdhdGlvbjtcbn07XG4iLCJleHBvcnQgY29uc3QgVVJMX0FQSSA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xuIiwiZXhwb3J0IGNvbnN0IGNhck5hbWVzID0ge1xuICB0eXBlOiBbXG4gICAgJ0Flcm9MdXgnLFxuICAgICczMDAwJyxcbiAgICAnWFInLFxuICAgICdQcm8nLFxuICAgICc3JyxcbiAgICAnR1RSJyxcbiAgICAnT25lJyxcbiAgICAnOCcsXG4gICAgJ1o1JyxcbiAgICAnMTAwMCcsXG4gICAgJ1JTJyxcbiAgICAnTGl0ZScsXG4gICAgJ0VyYScsXG4gICAgJ1g5JyxcbiAgICAnWDEnLFxuICAgICdYMycsXG4gICAgJ0VtZ3JhbmQnLFxuICBdLFxuICBtb2RlbDogWydhdWRpJywgJ0JNVycsICdXVicsICdHZWVseScsICdPcGVsJywgJ1RBWicsICdHQVonLCAnWmVla3InLCAnQllEJ10sXG59O1xuIiwiZXhwb3J0IGVudW0gUGF0aFJvdXRlIHtcbiAgaG9tZSA9ICcvJyxcbiAgd2lubmVycyA9ICcvd2lubmVycycsXG59XG4iLCJjb25zdCBkaXNhYmxlZFN0eWxlID1cbiAgJ2Rpc2FibGVkOmJnLXN0b25lLTUwMCBkaXNhYmxlZDpob3ZlcjpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6aG92ZXI6dGV4dC1zdG9uZS05MDAgZGlzYWJsZWQ6dGV4dC05MDAnO1xuZXhwb3J0IGNvbnN0IGNzc0J1dHRvbiA9XG4gICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1yZWQtODAwIHJvdW5kZWQtbWQgcHgtMiBweS0xIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXJlZC05OTAgaG92ZXI6YmctcmVkLTkwMCBob3Zlcjp0ZXh0LXJlZC0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOmN1cnNvci1wb2ludGVyICcgK1xuICBkaXNhYmxlZFN0eWxlO1xuIiwiaW1wb3J0IHsgY3JlYXRlTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vZGFsL21vZGFsJztcbmltcG9ydCB7IHN0YXRlUmFjZSwgdHlwZSBDYXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQgeyBpc1dpbm5lciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2lzLXdpbm5lcic7XG5pbXBvcnQgeyBjcmVhdGVXaW5uZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9yZXF1ZXN0L2NyZWF0ZS13aW5uZXInO1xuaW1wb3J0IHsgZ2V0V2lubmVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlcXVlc3QvZ2V0LXdpbm5lcnMnO1xuaW1wb3J0IHsgdXBkYXRlV2lubmVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcmVxdWVzdC91cGRhdGUtd2lubmVyJztcblxuY29uc3QgSU5JVElBTF9XSU5fQ09VTlQgPSAxOyAvLyDQktC80LXRgdGC0L4gZmlyc3RXaW5cbmNvbnN0IE1JTExJU0VDT05EU19JTl9TRUNPTkQgPSAxMDAwO1xuY29uc3QgRklYRUQgPSAyO1xuY29uc3QgbXNUb1NlY29uZHMgPSAodGltZTogbnVtYmVyKTogbnVtYmVyID0+XG4gIE51bWJlci5wYXJzZUZsb2F0KCh0aW1lIC8gTUlMTElTRUNPTkRTX0lOX1NFQ09ORCkudG9GaXhlZChGSVhFRCkpO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlV2lubmVyID0gYXN5bmMgKFxuICBjYXI6IENhcixcbiAgZHVyYXRpb246IG51bWJlclxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFzdGF0ZVJhY2UuYnV0dG9uc0ZvclJhY2UucmVhZHlUb1JhY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZHVyYXRpb25JblNlY29uZHMgPSBtc1RvU2Vjb25kcyhkdXJhdGlvbik7XG4gICAgY3JlYXRlTW9kYWwoY2FyLCBkdXJhdGlvbik7XG4gICAgY29uc3QgYWxsV2lubmVycyA9IChhd2FpdCBnZXRXaW5uZXJzKCkpIHx8IFtdO1xuICAgIGNvbnN0IHdpbm5lciA9IGFsbFdpbm5lcnMuZmluZCgod2lubmVyKSA9PiB3aW5uZXIuaWQgPT09IGNhci5pZCk7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgY29uc3QgYmVzdFRpbWUgPSBNYXRoLm1pbihkdXJhdGlvbkluU2Vjb25kcywgd2lubmVyLnRpbWUpO1xuICAgICAgY29uc3QgbmV3V2lubmVyID0ge1xuICAgICAgICAuLi53aW5uZXIsXG4gICAgICAgIHRpbWU6IGJlc3RUaW1lLFxuICAgICAgICB3aW5zOiB3aW5uZXIud2lucyArIElOSVRJQUxfV0lOX0NPVU5ULFxuICAgICAgfTtcbiAgICAgIGF3YWl0IHVwZGF0ZVdpbm5lcihuZXdXaW5uZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdXaW5uZXIgPSB7XG4gICAgICAgIGlkOiBjYXIuaWQsXG4gICAgICAgIHdpbnM6IElOSVRJQUxfV0lOX0NPVU5ULFxuICAgICAgICB0aW1lOiBkdXJhdGlvbkluU2Vjb25kcyxcbiAgICAgIH07XG4gICAgICBpZiAoaXNXaW5uZXIobmV3V2lubmVyKSkge1xuICAgICAgICBhd2FpdCBjcmVhdGVXaW5uZXIobmV3V2lubmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIGhhbmRsZSB3aW5uZXInLCBlcnJvcik7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyB0eXBlIENhciwgc3RhdGVSYWNlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvc3RhdGUnO1xuaW1wb3J0IHsgYW5pbWF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2FuaW1hdGlvbi9hbmltYXRpb24nO1xuaW1wb3J0IHsgZHJhd0FuaW1hdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9hbmltYXRpb24vZHJhdy1hbmltYXRpb24nO1xuaW1wb3J0IHsgbGluZWFyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYW5pbWF0aW9uL3RpbWluZyc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgaGFuZGxlTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2hhbmRsZS1uYW1lJztcbmltcG9ydCB7IGRlbGV0ZVdpbm5lciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlcXVlc3QvZGVsZXRlLXdpbm5lcic7XG5pbXBvcnQgeyBnZXRXaW5uZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcmVxdWVzdC9nZXQtd2lubmVycyc7XG5pbXBvcnQgeyBzdG9wU3RhcnRFbmdpbmUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9yZXF1ZXN0L3N0b3Atc3RhcnQtZW5naW5lJztcbmltcG9ydCB7IHNldERpc2FibGVkRWxlbWVudHMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9zZXQtZGlzYWJsZWQtZWxlbWVudHMnO1xuXG5jb25zdCBkaXNhYmxlZFN0eWxlID1cbiAgJ2Rpc2FibGVkOmJnLXN0b25lLTUwMCBkaXNhYmxlZDpob3ZlcjpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6aG92ZXI6dGV4dC1zdG9uZS05MDAgZGlzYWJsZWQ6dGV4dC05MDAnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJhY2VBcmVhOlxuICAgICdmbGV4IGJvcmRlci0yIGJvcmRlci1yZWQtOTUwIHAtMiBteS0xIGJnLWFtYmVyLTgwMCBmbGV4LWNvbCBnYXAtMiByb3VuZGVkLW1kJyxcbiAgcmFjZUl0ZW06ICdmbGV4IGZsZXgtY29sIGdhcC0yJyxcbiAgdXBMZXZlbFJhY2U6ICdmbGV4IGdhcC14LTInLFxuICBtaWRkbGVMZXZlbFJhY2U6ICdmbGV4IGdhcC14LTInLFxuICBidXR0b246XG4gICAgJ2ZsZXggYmctcmVkLTgwMCByb3VuZGVkLW1kIHB4LTIgcHktMSB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1yZWQtOTkwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC1yZWQtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3ZlcjpjdXJzb3ItcG9pbnRlciAnICtcbiAgICBkaXNhYmxlZFN0eWxlLFxuICBib3hGb3JCdXR0b25zOiAnZmxleCBmbGV4LXJvdyBnYXAteC0xJyxcbiAgcmFjZUJveDogJ2ZsZXggcmVsYXRpdmUgYm9yZGVyLWRhc2hlZCBib3JkZXItYi0yIHctZnVsbCcsXG4gIGNhckltZzpcbiAgICAnYWJzb2x1dGUgdG9wLVswcHhdIGxlZnQtWzBweF0gdy1bNDBweF0gYm90dG9tLVszcHhdIHJvdW5kZWQtdGwtWzE1cHhdIHJvdW5kZWQtdHItWzQwcHhdIHJlbGF0aXZlJyxcbiAgZmluaXNoTGluZTpcbiAgICAnYWJzb2x1dGUgdy1bNDZweF0gaC1mdWxsIHJpZ2h0LVswcHhdIGJvcmRlci1sLTIgYm9yZGVyLWRvdHRlZCBib3JkZXItd2hpdGUnLFxufTtcblxudHlwZSBDYXJGb3JSYWNlSXRlbSA9IHtcbiAgY2FyOiBDYXI7XG4gIHBhcmVudDogSFRNTEVsZW1lbnQ7XG4gIGNhbGxiYWNrPzogKGNhcjogQ2FyKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhY2VBcmVhID0gKFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBjYWxsYmFjazogKGNhcjogQ2FyKSA9PiB2b2lkXG4pOiB2b2lkID0+IHtcbiAgY29uc3QgcmFjZUFyZWFGb3JDYXJzID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMucmFjZUFyZWEsXG4gICAgcGFyZW50LFxuICB9KTtcbiAgY29uc3QgZ2FyYWdlQ2FycyA9IHN0YXRlUmFjZS52aWV3Q2FycztcbiAgc3RhdGVSYWNlLl9hY3RpdmVTdG9wRW5naW5lQnV0dG9ucyA9IGdhcmFnZUNhcnMubGVuZ3RoO1xuICBnYXJhZ2VDYXJzLmZvckVhY2goKGNhcikgPT4ge1xuICAgIHJhY2VJdGVtKGNhciwgcmFjZUFyZWFGb3JDYXJzLCBjYWxsYmFjayk7XG4gIH0pO1xufTtcblxuY29uc3QgcmFjZUl0ZW0gPSAoXG4gIGNhcjogQ2FyLFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBjYWxsYmFjazogKGNhcjogQ2FyKSA9PiB2b2lkXG4pOiB2b2lkID0+IHtcbiAgY29uc3QgbWFpblJhY2VJdGVtID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2RpdicsXG4gICAgcGFyZW50LFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLnJhY2VJdGVtLFxuICB9KTtcblxuICBjb25zdCB1cExldmVsUmFjZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgIHBhcmVudDogbWFpblJhY2VJdGVtLFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLnVwTGV2ZWxSYWNlLFxuICB9KTtcbiAgY3JlYXRlVXBMZXZlbFJhY2UoeyBwYXJlbnQ6IHVwTGV2ZWxSYWNlLCBjYXIsIGNhbGxiYWNrIH0pO1xuICBjb25zdCBtaWRkbGVMZXZlbFJhY2UgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICBwYXJlbnQ6IG1haW5SYWNlSXRlbSxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5taWRkbGVMZXZlbFJhY2UsXG4gIH0pO1xuICBjcmVhdGVNaWRkbGVMZXZlbFJhY2UoeyBwYXJlbnQ6IG1pZGRsZUxldmVsUmFjZSwgY2FyIH0pO1xufTtcblxuY29uc3QgY3JlYXRlVXBMZXZlbFJhY2UgPSAoeyBjYXIsIHBhcmVudCwgY2FsbGJhY2sgfTogQ2FyRm9yUmFjZUl0ZW0pOiB2b2lkID0+IHtcbiAgY29uc3Qgc2VsZWN0Q2FyQnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2J1dHRvbicsXG4gICAgdGV4dDogJ3NlbGVjdCcsXG4gICAgcGFyZW50LFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLmJ1dHRvbixcbiAgfSk7XG4gIHNlbGVjdENhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGNhcik7XG4gIH0pO1xuICBjb25zdCByZW1vdmVDYXJCdXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgICB0ZXh0OiAncmVtb3ZlJyxcbiAgICBwYXJlbnQsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMuYnV0dG9uLFxuICB9KTtcbiAgY3JlYXRlRWxlbWVudCh7IHRhZ05hbWU6ICdzcGFuJywgdGV4dDogaGFuZGxlTmFtZShjYXIubmFtZSksIHBhcmVudCB9KTtcbiAgcmVtb3ZlQ2FyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHN0YXRlUmFjZS5kZWxldGVDYXIoY2FyLmlkKTtcbiAgICBjb25zdCBhbGxXaW5uZXJzID0gKGF3YWl0IGdldFdpbm5lcnMoKSkgfHwgW107XG4gICAgaWYgKGFsbFdpbm5lcnMuc29tZSgod2lubmVyKSA9PiB3aW5uZXIuaWQgPT09IGNhci5pZCkpIHtcbiAgICAgIGF3YWl0IGRlbGV0ZVdpbm5lcihjYXIuaWQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVXaGVlbHMgPSAocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuICBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBjbGFzc05hbWU6XG4gICAgICAndy1bMTRweF0gaC1bMTRweF0gYmctc3RvbmUtOTUwIHJvdW5kZWQtZnVsbCAtYm90dG9tLVs1cHhdIGxlZnQtWzNweF0gYWJzb2x1dGUgYm9yZGVyLWFtYmVyLTgwMCBib3JkZXItMicsXG4gIH0pO1xuXG4gIGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIGNsYXNzTmFtZTpcbiAgICAgICd3LVsxNHB4XSBoLVsxNHB4XSBiZy1zdG9uZS05NTAgcm91bmRlZC1mdWxsIC1ib3R0b20tWzVweF0gcmlnaHQtWzNweF0gYWJzb2x1dGUgYm9yZGVyLWFtYmVyLTgwMCBib3JkZXItMicsXG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlRWxlbWVudHNGb3JNaWRkbGVMZXZlbCA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSA9PiB7XG4gIGNvbnN0IGJveEZvckJ1dHRvbnMgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICBwYXJlbnQsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMuYm94Rm9yQnV0dG9ucyxcbiAgfSk7XG4gIGNvbnN0IHN0YXJ0Q2FyRW5naW5lID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2J1dHRvbicsXG4gICAgdGV4dDogJ0EnLFxuICAgIHBhcmVudDogYm94Rm9yQnV0dG9ucyxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5idXR0b24sXG4gIH0pO1xuICBjb25zdCBzdG9wQ2FyRW5naW5lID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2J1dHRvbicsXG4gICAgdGV4dDogJ0InLFxuICAgIHBhcmVudDogYm94Rm9yQnV0dG9ucyxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5idXR0b24sXG4gICAgYXR0cmlidXRlczogW3sgYXR0cjogJ2Rpc2FibGVkJywgdmFsdWU6ICcnIH1dLFxuICB9KTtcbiAgY29uc3QgcmFjZUJveCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgIHBhcmVudCxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5yYWNlQm94LFxuICB9KTtcbiAgY29uc3QgY2FySW1nID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgIHBhcmVudDogcmFjZUJveCxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5jYXJJbWcsXG4gIH0pO1xuICBjcmVhdGVXaGVlbHMoY2FySW1nKTtcbiAgY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2RpdicsXG4gICAgcGFyZW50OiByYWNlQm94LFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLmZpbmlzaExpbmUsXG4gIH0pO1xuXG4gIHJldHVybiBbc3RhcnRDYXJFbmdpbmUsIHN0b3BDYXJFbmdpbmUsIHJhY2VCb3gsIGNhckltZ107XG59O1xuXG5jb25zdCBoYW5kbGVDbGlja1N0YXJ0Q2FyRW5naW5lID0gYXN5bmMgKFxuICBzdGFydENhckVuZ2luZTogSFRNTEVsZW1lbnQsXG4gIHN0b3BDYXJFbmdpbmU6IEhUTUxFbGVtZW50LFxuICBjYXI6IENhcixcbiAgY2FySW1nOiBIVE1MRWxlbWVudCxcbiAgcmFjZUJveDogSFRNTEVsZW1lbnQsXG4gIGFib3J0OiB7IGZsYWc6IGJvb2xlYW4gfVxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIHNldERpc2FibGVkRWxlbWVudHMoW3N0YXJ0Q2FyRW5naW5lXSwgdHJ1ZSk7XG4gIHNldERpc2FibGVkRWxlbWVudHMoW3N0b3BDYXJFbmdpbmVdLCBmYWxzZSk7XG4gIGFib3J0LmZsYWcgPSBmYWxzZTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHN0b3BTdGFydEVuZ2luZShjYXIsICdzdGFydGVkJyk7XG4gIGlmIChkYXRhKSB7XG4gICAgYW5pbWF0ZSh7XG4gICAgICB0aW1pbmc6IGxpbmVhcixcbiAgICAgIGRyYXc6IGRyYXdBbmltYXRlLFxuICAgICAgZHVyYXRpb25EYXRhOiBkYXRhLFxuICAgICAgZWxlbWVudDogY2FySW1nLFxuICAgICAgYm94OiByYWNlQm94LFxuICAgICAgY2FuY2VsRmxhZzogYWJvcnQsXG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGNoYW5nZVN0YXRlQnV0dG9uc1JhY2UgPSAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IG5vbmVCdXR0b25BY3RpdmUgPSAwO1xuICBjb25zdCBzdGVwID0gMTtcbiAgc3RhdGVSYWNlLl9hY3RpdmVTdG9wRW5naW5lQnV0dG9ucyA9XG4gICAgc3RhdGVSYWNlLl9hY3RpdmVTdG9wRW5naW5lQnV0dG9ucyAtIHN0ZXA7XG4gIGlmIChzdGF0ZVJhY2UuX2FjdGl2ZVN0b3BFbmdpbmVCdXR0b25zID09PSBub25lQnV0dG9uQWN0aXZlKSB7XG4gICAgY29uc3QgeyBzdGFydFJhY2UsIHJlc2V0UmFjZSB9ID0gc3RhdGVSYWNlLmJ1dHRvbnNGb3JSYWNlO1xuICAgIGlmIChzdGFydFJhY2UgJiYgcmVzZXRSYWNlKSB7XG4gICAgICBzZXREaXNhYmxlZEVsZW1lbnRzKFtzdGFydFJhY2VdLCBmYWxzZSk7XG4gICAgICBzZXREaXNhYmxlZEVsZW1lbnRzKFtyZXNldFJhY2VdLCB0cnVlKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZU1pZGRsZUxldmVsUmFjZSA9ICh7IGNhciwgcGFyZW50IH06IENhckZvclJhY2VJdGVtKTogdm9pZCA9PiB7XG4gIGNvbnN0IGFib3J0ID0geyBmbGFnOiBmYWxzZSB9O1xuICBjb25zdCBbc3RhcnRDYXJFbmdpbmUsIHN0b3BDYXJFbmdpbmUsIHJhY2VCb3gsIGNhckltZ10gPVxuICAgIGNyZWF0ZUVsZW1lbnRzRm9yTWlkZGxlTGV2ZWwocGFyZW50KTtcblxuICBjYXJJbWcuc3R5bGUuYmFja2dyb3VuZCA9IGNhci5jb2xvcjtcbiAgc3RhdGVSYWNlLnZpZXdTdGF0ZU1vZGVscy5zZXQoY2FyLmlkLCB7XG4gICAgZWxlbWVudDogY2FySW1nLFxuICAgIGJveDogcmFjZUJveCxcbiAgICBjYW5jZWxGbGFnOiBhYm9ydCxcbiAgICBpbmZvOiBjYXIsXG4gICAgc3RhcnRCdXR0b246IHN0YXJ0Q2FyRW5naW5lLFxuICAgIHN0b3BCdXR0b246IHN0b3BDYXJFbmdpbmUsXG4gIH0pO1xuXG4gIHN0YXJ0Q2FyRW5naW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGhhbmRsZUNsaWNrU3RhcnRDYXJFbmdpbmUoXG4gICAgICBzdGFydENhckVuZ2luZSxcbiAgICAgIHN0b3BDYXJFbmdpbmUsXG4gICAgICBjYXIsXG4gICAgICBjYXJJbWcsXG4gICAgICByYWNlQm94LFxuICAgICAgYWJvcnRcbiAgICApO1xuICB9KTtcblxuICBzdG9wQ2FyRW5naW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNoYW5nZVN0YXRlQnV0dG9uc1JhY2UoKTtcbiAgICBzZXREaXNhYmxlZEVsZW1lbnRzKFtzdGFydENhckVuZ2luZV0sIGZhbHNlKTtcbiAgICBzZXREaXNhYmxlZEVsZW1lbnRzKFtzdG9wQ2FyRW5naW5lXSwgdHJ1ZSk7XG4gICAgYWJvcnQuZmxhZyA9IHRydWU7XG4gICAgY2FySW1nLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICBhd2FpdCBzdG9wU3RhcnRFbmdpbmUoY2FyLCAnc3RvcHBlZCcpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyB0eXBlIENhciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3N0YXRlJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBkb3duTGV2ZWxTZXQgfSBmcm9tICcuL3NldC1jYXJzL2Rvd24tbGV2ZWwtc2V0JztcbmltcG9ydCB7IGNyZWF0ZU1pZGRsZUxldmVsU2V0Q2FycyB9IGZyb20gJy4vc2V0LWNhcnMvbWlkZGxlLWxldmVsLXNldCc7XG5pbXBvcnQgeyBjcmVhdGVVcExldmVsU2V0Q2FycyB9IGZyb20gJy4vc2V0LWNhcnMvdXAtbGV2ZWwtc2V0JztcblxuY29uc3Qgc3R5bGVzID0ge1xuICB3cmFwcGVyOiAnZmxleCBmbGV4LWNvbCBnYXAteS0yJyxcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTZXRDYXJzID0gKHBhcmVudDogSFRNTEVsZW1lbnQpOiAoKGNhcjogQ2FyKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IHdyYXBwZXJGb3JTZXRDYXJzID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMud3JhcHBlcixcbiAgICBwYXJlbnQsXG4gIH0pO1xuICBjcmVhdGVVcExldmVsU2V0Q2Fycyh3cmFwcGVyRm9yU2V0Q2Fycyk7XG4gIGNvbnN0IGNhbGxiYWNrID0gY3JlYXRlTWlkZGxlTGV2ZWxTZXRDYXJzKHdyYXBwZXJGb3JTZXRDYXJzKTtcbiAgZG93bkxldmVsU2V0KHdyYXBwZXJGb3JTZXRDYXJzKTtcbiAgcmV0dXJuIGNhbGxiYWNrO1xufTtcbiIsImltcG9ydCB7IGNhck5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnRzL2Nhci1uYW1lcyc7XG5pbXBvcnQgeyBzdGF0ZVJhY2UsIHR5cGUgVHlwZXNGb3JBbmltYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tRGF0YUZyb21BcnJheSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2dldC1yYW5kb20tZGF0YS1mcm9tLWFycmF5JztcbmltcG9ydCB7IHJhbmRvbUhleENvbG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvcmFuZG9tLWNvbG9yJztcbmltcG9ydCB7IHN0b3BTdGFydEVuZ2luZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3JlcXVlc3Qvc3RvcC1zdGFydC1lbmdpbmUnO1xuaW1wb3J0IHsgc2V0RGlzYWJsZWRFbGVtZW50cyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3NldC1kaXNhYmxlZC1lbGVtZW50cyc7XG5pbXBvcnQgeyBtYWluUGFnZSB9IGZyb20gJy4uLy4uL21haW4tcGFnZSc7XG5pbXBvcnQgeyBhbmltYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYW5pbWF0aW9uL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBsaW5lYXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hbmltYXRpb24vdGltaW5nJztcbmltcG9ydCB7IGRyYXdBbmltYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYW5pbWF0aW9uL2RyYXctYW5pbWF0aW9uJztcbmltcG9ydCB7IGhhbmRsZVdpbm5lciB9IGZyb20gJy4uL2hhbmRsZS13aW5uZXInO1xuXG50eXBlIGRhdGFGb3JQcm9taXNlID0ge1xuICBpZDogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBwcm9taXNlOiBQcm9taXNlPHZvaWQ+OyAvLyDQldGB0LvQuCDQv9GA0L7QvNC40YEg0LLQvtC30LLRgNCw0YnQsNC10YIgdm9pZFxufTtcblxudHlwZSBkYXRhRm9yUmFjZSA9IFByb21pc2U8XG4gIHwge1xuICAgICAgZHVyYXRpb246IG51bWJlcjtcbiAgICAgIHByb21pc2U6IFByb21pc2U8c3RyaW5nIHwgeyBzdWNjZXNzOiBib29sZWFuIH0gfCB1bmRlZmluZWQ+O1xuICAgIH1cbiAgfCB1bmRlZmluZWRcbj47XG5cbmNvbnN0IGRpc2FibGVkU3R5bGUgPVxuICAnZGlzYWJsZWQ6Ymctc3RvbmUtNTAwIGRpc2FibGVkOmhvdmVyOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpob3Zlcjp0ZXh0LXN0b25lLTkwMCBkaXNhYmxlZDp0ZXh0LTkwMCc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgd3JhcHBlcjogJ2ZsZXggZmxleC1yb3cgZ2FwLXgtMScsXG4gIGJ1dHRvbjpcbiAgICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcmVkLTgwMCByb3VuZGVkLW1kIHB4LTIgcHktMSB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1yZWQtOTkwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC1yZWQtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3ZlcjpjdXJzb3ItcG9pbnRlciAnICtcbiAgICBkaXNhYmxlZFN0eWxlLFxufTtcblxuY29uc3QgZ2VuZXJhdGVDYXJzID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIGNvbnN0IG1heGltdW1DYXJzID0gMTAwO1xuICBsZXQgY291bnQgPSBzdGFydDtcbiAgY29uc3Qgc3RlcCA9IDE7XG4gIHdoaWxlIChjb3VudCA8IG1heGltdW1DYXJzKSB7XG4gICAgY29uc3QgY2FyID0geyBuYW1lOiAnJywgY29sb3I6ICcnIH07XG4gICAgY2FyLm5hbWUgPVxuICAgICAgZ2V0UmFuZG9tRGF0YUZyb21BcnJheShjYXJOYW1lcy5tb2RlbCkgK1xuICAgICAgJyAnICtcbiAgICAgIGdldFJhbmRvbURhdGFGcm9tQXJyYXkoY2FyTmFtZXMudHlwZSk7XG4gICAgY2FyLmNvbG9yID0gcmFuZG9tSGV4Q29sb3IoKTtcbiAgICBhd2FpdCBzdGF0ZVJhY2UuY3JlYXRlQ2FyKGNhcik7XG4gICAgY291bnQgKz0gc3RlcDtcbiAgfVxufTtcblxuY29uc3QgY2hlY2tTdWNjZXNzID0gKGVsZW1lbnQ6IHVua25vd24pOiBlbGVtZW50IGlzIHsgc3VjY2VzczogYm9vbGVhbiB9ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQgJiZcbiAgICB0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiZcbiAgICAnc3VjY2VzcycgaW4gZWxlbWVudCAmJlxuICAgIGVsZW1lbnQuc3VjY2Vzc1xuICAgID8gdHJ1ZVxuICAgIDogZmFsc2U7XG59O1xuXG5mdW5jdGlvbiBwZXJmb3JtQW5pbWF0aW9uKFxuICBlbGVtZW50czogVHlwZXNGb3JBbmltYXRpb24sXG4gIGRhdGE6IHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHByb21pc2U6IFByb21pc2U8XG4gICAgICB8IHVuZGVmaW5lZFxuICAgICAgfCBzdHJpbmdcbiAgICAgIHwge1xuICAgICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICAgIH1cbiAgICA+O1xuICB9XG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIGFuaW1hdGUoe1xuICAgIHRpbWluZzogbGluZWFyLFxuICAgIGRyYXc6IGRyYXdBbmltYXRlLFxuICAgIGR1cmF0aW9uRGF0YTogZGF0YSxcbiAgICBlbGVtZW50OiBlbGVtZW50cy5lbGVtZW50LFxuICAgIGJveDogZWxlbWVudHMuYm94LFxuICAgIGNhbmNlbEZsYWc6IGVsZW1lbnRzLmNhbmNlbEZsYWcsXG4gIH0pO1xufVxuXG5jb25zdCBoYW5kbGVSYWNlQ2xpY2sgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IGRhdGFQcm9taXNlczogZGF0YUZvclJhY2VbXSA9IFtdO1xuICBzdGF0ZVJhY2Uudmlld0NhcnMuZm9yRWFjaCgoY2FyKSA9PiB7XG4gICAgZGF0YVByb21pc2VzLnB1c2goc3RvcFN0YXJ0RW5naW5lKGNhciwgJ3N0YXJ0ZWQnKSk7XG4gIH0pO1xuICBjb25zdCBpbmZvID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKGRhdGFQcm9taXNlcyk7XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU6IGRhdGFGb3JQcm9taXNlIHwgdW5kZWZpbmVkKSA9PiB2b2lkKSA9PiB7XG4gICAgaW5mby5mb3JFYWNoKGFzeW5jIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSAnZnVsZmlsbGVkJyAmJiB0eXBlb2YgZWxlbWVudC52YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgaWRDYXIgPSBzdGF0ZVJhY2Uudmlld0NhcnNbaW5kZXhdLmlkO1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHN0YXRlUmFjZS52aWV3U3RhdGVNb2RlbHMuZ2V0KGlkQ2FyKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGlmIChlbGVtZW50cyAmJiBkYXRhKSB7XG4gICAgICAgICAgc2V0RGlzYWJsZWRFbGVtZW50cyhbZWxlbWVudHMuc3RhcnRCdXR0b25dLCB0cnVlKTtcbiAgICAgICAgICBzZXREaXNhYmxlZEVsZW1lbnRzKFtlbGVtZW50cy5zdG9wQnV0dG9uXSwgZmFsc2UpO1xuICAgICAgICAgIGVsZW1lbnRzLmNhbmNlbEZsYWcuZmxhZyA9IGZhbHNlO1xuICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBwZXJmb3JtQW5pbWF0aW9uKGVsZW1lbnRzLCBkYXRhKTtcbiAgICAgICAgICBjb25zdCBuZXdJbmZvID0gYXdhaXQgZGF0YS5wcm9taXNlO1xuICAgICAgICAgIGlmIChjaGVja1N1Y2Nlc3MobmV3SW5mbykgJiYgIWVsZW1lbnRzLmNhbmNlbEZsYWcuZmxhZykge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGlkOiBpZENhciwgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sIHByb21pc2UgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pLnRoZW4oKGRhdGE6IGRhdGFGb3JQcm9taXNlIHwgdW5kZWZpbmVkKTogdm9pZCA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnN0IGNhciA9IHN0YXRlUmFjZS5zdGF0ZS5nYXJhZ2UuZmluZCgoY2FyKSA9PiBjYXIuaWQgPT09IGRhdGEuaWQpO1xuICAgICAgaWYgKGNhcikge1xuICAgICAgICBkYXRhLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgaGFuZGxlV2lubmVyKGNhciwgZGF0YS5kdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVSZXNldENsaWNrID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBzdGF0ZVJhY2UuYnV0dG9uc0ZvclJhY2UucmVhZHlUb1JhY2UgPSBmYWxzZTtcbiAgc3RhdGVSYWNlLnZpZXdTdGF0ZU1vZGVscy5mb3JFYWNoKChjYXIpID0+IHtcbiAgICBjYXIuc3RvcEJ1dHRvbi5jbGljaygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZUNsaWNrR2VuZXJhdGVCdXR0b24gPSBhc3luYyAoXG4gIGJ1dHRvbjogSFRNTEVsZW1lbnRcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBzZXREaXNhYmxlZEVsZW1lbnRzKFtidXR0b25dLCB0cnVlKTtcbiAgYXdhaXQgZ2VuZXJhdGVDYXJzKCk7XG4gIG1haW5QYWdlKCk7XG4gIHNldERpc2FibGVkRWxlbWVudHMoW2J1dHRvbl0sIGZhbHNlKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbnMgPSAocGFyZW50OiBIVE1MRWxlbWVudCk6IEhUTUxCdXR0b25FbGVtZW50W10gPT4ge1xuICBjb25zdCByYWNlQnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2J1dHRvbicsXG4gICAgcGFyZW50LFxuICAgIHRleHQ6ICdyYWNlJyxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5idXR0b24sXG4gIH0pO1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdidXR0b24nLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0OiAncmVzZXQnLFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLmJ1dHRvbixcbiAgICBhdHRyaWJ1dGVzOiBbeyBhdHRyOiAnZGlzYWJsZWQnLCB2YWx1ZTogJycgfV0sXG4gIH0pO1xuICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdidXR0b24nLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0OiAnZ2VuZXJhdGUgY2FycycsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMuYnV0dG9uLFxuICB9KTtcbiAgcmFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdGF0ZVJhY2UuYnV0dG9uc0ZvclJhY2UucmVhZHlUb1JhY2UgPSB0cnVlO1xuICAgIGhhbmRsZVJhY2VDbGljaygpO1xuICAgIHN0YXRlUmFjZS5fYWN0aXZlU3RvcEVuZ2luZUJ1dHRvbnMgPSBzdGF0ZVJhY2Uudmlld0NhcnMubGVuZ3RoO1xuICAgIHNldERpc2FibGVkRWxlbWVudHMoW3JhY2VCdXR0b25dLCB0cnVlKTtcbiAgICBzZXREaXNhYmxlZEVsZW1lbnRzKFtyZXNldEJ1dHRvbl0sIGZhbHNlKTtcbiAgfSk7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIHNldERpc2FibGVkRWxlbWVudHMoW3Jlc2V0QnV0dG9uXSwgdHJ1ZSk7XG4gICAgYXdhaXQgaGFuZGxlUmVzZXRDbGljaygpO1xuICAgIHNldERpc2FibGVkRWxlbWVudHMoW3JhY2VCdXR0b25dLCBmYWxzZSk7XG4gIH0pO1xuICBnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBoYW5kbGVDbGlja0dlbmVyYXRlQnV0dG9uKGdlbmVyYXRlQnV0dG9uKTtcbiAgfSk7XG4gIHJldHVybiBbcmFjZUJ1dHRvbiwgcmVzZXRCdXR0b25dO1xufTtcblxuZXhwb3J0IGNvbnN0IGRvd25MZXZlbFNldCA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy53cmFwcGVyLFxuICAgIHBhcmVudCxcbiAgfSk7XG4gIGNvbnN0IFtyYWNlQnV0dG9uLCByZXNldEJ1dHRvbl0gPSBjcmVhdGVCdXR0b25zKHdyYXBwZXIpO1xuICBzdGF0ZVJhY2UuYnV0dG9uc0ZvclJhY2UucmVzZXRSYWNlID0gcmVzZXRCdXR0b247XG4gIHN0YXRlUmFjZS5idXR0b25zRm9yUmFjZS5zdGFydFJhY2UgPSByYWNlQnV0dG9uO1xufTtcbiIsImV4cG9ydCB0eXBlIERhdGFDYXIgPSB7IG5hbWU6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9O1xuXG5jb25zdCBpc0lucHV0RWxlbWVudCA9IChcbiAgdGFyZ2V0OiBFdmVudFRhcmdldCB8IG51bGxcbik6IHRhcmdldCBpcyBIVE1MSW5wdXRFbGVtZW50ID0+IHRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVFdmVudFVwTGV2ZWwgPSAoXG4gIGV2ZW50OiBFdmVudCxcbiAgZGF0YUNhcjogRGF0YUNhcixcbiAgZWxlbWVudDogSFRNTEVsZW1lbnRcbik6IHZvaWQgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGlmIChpc0lucHV0RWxlbWVudCh0YXJnZXQpKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGFyZ2V0O1xuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAnY29sb3InKSB7XG4gICAgICBkYXRhQ2FyLmNvbG9yID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFDYXIubmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCB7IHN0YXRlUmFjZSwgdHlwZSBDYXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgc2V0RGlzYWJsZWRFbGVtZW50cyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3NldC1kaXNhYmxlZC1lbGVtZW50cyc7XG5pbXBvcnQgeyBoYW5kbGVFdmVudFVwTGV2ZWwgfSBmcm9tICcuL2hhbmRsZS1ldmVudC11cC1sZXZlbCc7XG5cbmNvbnN0IGRpc2FibGVkU3R5bGUgPVxuICAnZGlzYWJsZWQ6Ymctc3RvbmUtNTAwIGRpc2FibGVkOmhvdmVyOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpob3Zlcjp0ZXh0LXN0b25lLTkwMCBkaXNhYmxlZDp0ZXh0LTkwMCc7XG5jb25zdCBzdHlsZXMgPSB7XG4gIHdyYXBwZXJMZXZlbDogJ2ZsZXggZmxleC1yb3cgZ2FwLXgtMiBpdGVtcy1jZW50ZXIgJyxcbiAgaW5wdXRUZXh0OlxuICAgICd3LTUwIGJvcmRlci1yZWQtOTUwIGJvcmRlci0zIHJvdW5kZWQtbWQgYmctcmVkLTUwIHRleHQtcmVkLTk1MCBweS0xIHB4LTIgb3V0bGluZS1ub25lICcgK1xuICAgIGRpc2FibGVkU3R5bGUsXG4gIGlucHV0Q29sb3I6ICdjb2xvcklucHV0IGRpc2FibGVkOmhvdmVyOmN1cnNvci1ub3QtYWxsb3dlZCcsXG4gIGJ1dHRvbjpcbiAgICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcmVkLTgwMCByb3VuZGVkLW1kIHB4LTIgcHktMSB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1yZWQtOTkwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC1yZWQtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3ZlcjpjdXJzb3ItcG9pbnRlciAnICtcbiAgICBkaXNhYmxlZFN0eWxlLFxufTtcblxuY29uc3QgY3JlYXRlRWxlbWVudHMgPSAoXG4gIHBhcmVudDogSFRNTEVsZW1lbnRcbik6IFtIVE1MSW5wdXRFbGVtZW50LCBIVE1MSW5wdXRFbGVtZW50LCBIVE1MQnV0dG9uRWxlbWVudF0gPT4ge1xuICBjb25zdCBpbnB1dFRleHQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnaW5wdXQnLFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLmlucHV0VGV4dCxcbiAgICBwYXJlbnQsXG4gICAgYXR0cmlidXRlczogW1xuICAgICAgeyBhdHRyOiAndHlwZScsIHZhbHVlOiAndGV4dCcgfSxcbiAgICAgIHsgYXR0cjogJ3BsYWNlaG9sZGVyJywgdmFsdWU6ICcuLi4nIH0sXG4gICAgICB7IGF0dHI6ICdkaXNhYmxlZCcsIHZhbHVlOiAndHJ1ZScgfSxcbiAgICBdLFxuICB9KTtcblxuICBjb25zdCBpbnB1dENvbG9yID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2lucHV0JyxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5pbnB1dENvbG9yLFxuICAgIHBhcmVudCxcbiAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICB7IGF0dHI6ICd0eXBlJywgdmFsdWU6ICdjb2xvcicgfSxcbiAgICAgIHsgYXR0cjogJ3ZhbHVlJywgdmFsdWU6ICcjNzk3MTZiJyB9LFxuICAgICAgeyBhdHRyOiAnZGlzYWJsZWQnLCB2YWx1ZTogJ3RydWUnIH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uVXBkYXRlQ2FyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2J1dHRvbicsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMuYnV0dG9uLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0OiAndXBkYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBbeyBhdHRyOiAnZGlzYWJsZWQnLCB2YWx1ZTogJ3RydWUnIH1dLFxuICB9KTtcblxuICByZXR1cm4gW2lucHV0VGV4dCwgaW5wdXRDb2xvciwgYnV0dG9uVXBkYXRlQ2FyXTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNaWRkbGVMZXZlbFNldENhcnMgPSAoXG4gIHBhcmVudDogSFRNTEVsZW1lbnRcbik6ICgoY2FyOiBDYXIpID0+IHZvaWQpID0+IHtcbiAgbGV0IGNhckRhdGFGb3JDcmVhdGU6IENhcjtcbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLndyYXBwZXJMZXZlbCxcbiAgICBwYXJlbnQsXG4gIH0pO1xuICBjb25zdCBzZXRCdXR0b25zID0gY3JlYXRlRWxlbWVudHMod3JhcHBlcik7XG4gIGNvbnN0IFtpbnB1dFRleHQsIGlucHV0Q29sb3IsIGJ1dHRvblVwZGF0ZUNhcl0gPSBzZXRCdXR0b25zO1xuICBidXR0b25VcGRhdGVDYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0RGlzYWJsZWRFbGVtZW50cyhzZXRCdXR0b25zLCB0cnVlKTtcbiAgfSk7XG4gIGlucHV0Q29sb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50OiBFdmVudCkgPT5cbiAgICBoYW5kbGVFdmVudFVwTGV2ZWwoZXZlbnQsIGNhckRhdGFGb3JDcmVhdGUsIGlucHV0Q29sb3IpXG4gICk7XG5cbiAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50OiBFdmVudCkgPT5cbiAgICBoYW5kbGVFdmVudFVwTGV2ZWwoZXZlbnQsIGNhckRhdGFGb3JDcmVhdGUsIGlucHV0VGV4dClcbiAgKTtcblxuICBjb25zdCBjbGVhcklucHV0cyA9ICgpOiB2b2lkID0+IHtcbiAgICBpbnB1dENvbG9yLnZhbHVlID0gJyM3OTcxNmInO1xuICAgIGlucHV0VGV4dC52YWx1ZSA9ICcnO1xuICB9O1xuICBidXR0b25VcGRhdGVDYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc3RhdGVSYWNlLnVwZGF0ZUNhcih7IC4uLmNhckRhdGFGb3JDcmVhdGUgfSk7XG4gICAgY2xlYXJJbnB1dHMoKTtcbiAgfSk7XG4gIGNvbnN0IGNhbGxiYWNrID0gKGNhcjogQ2FyKTogdm9pZCA9PiB7XG4gICAgY2FyRGF0YUZvckNyZWF0ZSA9IHsgLi4uY2FyIH07XG4gICAgc2V0RGlzYWJsZWRFbGVtZW50cyhzZXRCdXR0b25zLCBmYWxzZSk7XG4gICAgaW5wdXRDb2xvci52YWx1ZSA9IGNhci5jb2xvcjtcbiAgICBpbnB1dFRleHQudmFsdWUgPSBjYXIubmFtZTtcbiAgfTtcbiAgcmV0dXJuIGNhbGxiYWNrO1xufTtcbiIsImltcG9ydCB7IHN0YXRlUmFjZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0YXRlL3N0YXRlJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBtYWluUGFnZSB9IGZyb20gJy4uLy4uL21haW4tcGFnZSc7XG5pbXBvcnQgeyBoYW5kbGVFdmVudFVwTGV2ZWwsIHR5cGUgRGF0YUNhciB9IGZyb20gJy4vaGFuZGxlLWV2ZW50LXVwLWxldmVsJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICB3cmFwcGVyTGV2ZWw6ICdmbGV4IGZsZXgtcm93IGdhcC14LTIgaXRlbXMtY2VudGVyICcsXG4gIGlucHV0VGV4dDpcbiAgICAndy01MCBib3JkZXItcmVkLTk1MCBib3JkZXItMyByb3VuZGVkLW1kIGJnLXJlZC01MCB0ZXh0LXJlZC05NTAgcHktMSBweC0yIG91dGxpbmUtbm9uZScsXG4gIGlucHV0Q29sb3I6ICdjb2xvcklucHV0JyxcbiAgYnV0dG9uOlxuICAgICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1yZWQtODAwIHJvdW5kZWQtbWQgcHgtMiBweS0xIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXJlZC05OTAgaG92ZXI6YmctcmVkLTkwMCBob3Zlcjp0ZXh0LXJlZC0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOmN1cnNvci1wb2ludGVyJyxcbn07XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnRzID0gKFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBjYXI6IERhdGFDYXJcbik6IFtIVE1MSW5wdXRFbGVtZW50LCBIVE1MSW5wdXRFbGVtZW50LCBIVE1MQnV0dG9uRWxlbWVudF0gPT4ge1xuICBjb25zdCBpbnB1dFRleHQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnaW5wdXQnLFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLmlucHV0VGV4dCxcbiAgICBwYXJlbnQsXG4gICAgYXR0cmlidXRlczogW1xuICAgICAgeyBhdHRyOiAndHlwZScsIHZhbHVlOiAndGV4dCcgfSxcbiAgICAgIHsgYXR0cjogJ3ZhbHVlJywgdmFsdWU6IGNhci5uYW1lIH0sXG4gICAgICB7IGF0dHI6ICdwbGFjZWhvbGRlcicsIHZhbHVlOiAnbmFtZSBjYXInIH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgY29uc3QgaW5wdXRDb2xvciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdpbnB1dCcsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMuaW5wdXRDb2xvcixcbiAgICBwYXJlbnQsXG4gICAgYXR0cmlidXRlczogW1xuICAgICAgeyBhdHRyOiAndHlwZScsIHZhbHVlOiAnY29sb3InIH0sXG4gICAgICB7IGF0dHI6ICd2YWx1ZScsIHZhbHVlOiBjYXIuY29sb3IgfSxcbiAgICBdLFxuICB9KTtcblxuICBjb25zdCBidXR0b25DcmVhdGVDYXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5idXR0b24sXG4gICAgcGFyZW50LFxuICAgIHRleHQ6ICdjcmVhdGUnLFxuICB9KTtcblxuICByZXR1cm4gW2lucHV0VGV4dCwgaW5wdXRDb2xvciwgYnV0dG9uQ3JlYXRlQ2FyXTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhclN0b3JhZ2UgPSAnY3JlYXRlQ2FyU3RvcmFnZSc7XG5jb25zdCBzYXZlRGF0YSA9IChkYXRhOiBEYXRhQ2FyKTogdm9pZCA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNyZWF0ZUNhclN0b3JhZ2UsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVcExldmVsU2V0Q2FycyA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG4gIGNvbnN0IGRhdGE6IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVDYXJTdG9yYWdlKTtcbiAgY29uc3QgaW5pdGlhbERhdGE6IERhdGFDYXIgPSB7IG5hbWU6ICcnLCBjb2xvcjogJyNmZmZmZmYnIH07XG4gIGNvbnN0IGNhckRhdGFGb3JDcmVhdGU6IERhdGFDYXIgPSB7IC4uLmluaXRpYWxEYXRhIH07XG4gIGlmIChkYXRhKSB7XG4gICAgY29uc3QgeyBuYW1lLCBjb2xvciB9ID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICBjYXJEYXRhRm9yQ3JlYXRlLmNvbG9yID0gY29sb3I7XG4gICAgY2FyRGF0YUZvckNyZWF0ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMud3JhcHBlckxldmVsLFxuICAgIHBhcmVudCxcbiAgfSk7XG4gIGNvbnN0IFtpbnB1dFRleHQsIGlucHV0Q29sb3IsIGJ1dHRvbkNyZWF0ZUNhcl0gPSBjcmVhdGVFbGVtZW50cyhcbiAgICB3cmFwcGVyLFxuICAgIGNhckRhdGFGb3JDcmVhdGVcbiAgKTtcbiAgaW5wdXRDb2xvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgaGFuZGxlRXZlbnRVcExldmVsKGV2ZW50LCBjYXJEYXRhRm9yQ3JlYXRlLCBpbnB1dENvbG9yKTtcbiAgICBzYXZlRGF0YShjYXJEYXRhRm9yQ3JlYXRlKTtcbiAgfSk7XG4gIGlucHV0VGV4dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudDogRXZlbnQpID0+IHtcbiAgICBoYW5kbGVFdmVudFVwTGV2ZWwoZXZlbnQsIGNhckRhdGFGb3JDcmVhdGUsIGlucHV0VGV4dCk7XG4gICAgc2F2ZURhdGEoY2FyRGF0YUZvckNyZWF0ZSk7XG4gIH0pO1xuICBjb25zdCBjbGVhcklucHV0cyA9ICgpOiB2b2lkID0+IHtcbiAgICBpbnB1dENvbG9yLnZhbHVlID0gaW5pdGlhbERhdGEuY29sb3I7XG4gICAgaW5wdXRUZXh0LnZhbHVlID0gaW5pdGlhbERhdGEubmFtZTtcbiAgICBjYXJEYXRhRm9yQ3JlYXRlLmNvbG9yID0gaW5pdGlhbERhdGEuY29sb3I7XG4gICAgY2FyRGF0YUZvckNyZWF0ZS5uYW1lID0gaW5pdGlhbERhdGEubmFtZTtcbiAgICBzYXZlRGF0YShjYXJEYXRhRm9yQ3JlYXRlKTtcbiAgfTtcblxuICBidXR0b25DcmVhdGVDYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc3RhdGVSYWNlLmNyZWF0ZUNhcihjYXJEYXRhRm9yQ3JlYXRlKTtcbiAgICBjbGVhcklucHV0cygpO1xuICAgIG1haW5QYWdlKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IG1haW5FbGVtZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tYWluLWVsZW1lbnRzL21haW4tZWxlbWVudHMnO1xuaW1wb3J0IHsgY3NzQnV0dG9uIH0gZnJvbSAnLi4vLi4vZ2xvYmFsLXN0eWxlcyc7XG5pbXBvcnQgeyBzdGF0ZVJhY2UgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQgeyBjbGVhbmVyRWxlbWVudEZyb21DaGlsZHJlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2NsZWFuZXItZWxlbWVudC1mcm9tLWNoaWxkcmVuJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBzZXREaXNhYmxlZEVsZW1lbnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0LWRpc2FibGVkLWVsZW1lbnRzJztcbmltcG9ydCB7IHJhY2VBcmVhIH0gZnJvbSAnLi9jb21wb25lbnRzL3JhY2UtYXJlYSc7XG5pbXBvcnQgeyBjcmVhdGVTZXRDYXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL3NldC1jYXJzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICB0aXRsZTogJ3RleHQtMnhsJyxcbiAgd3JhcHBlcjogJ2ZsZXggZmxleC1yb3cgZ2FwLXgtMiBteS0yJyxcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbnMgPSAocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuICBjb25zdCBvZmZzZXQgPSAxO1xuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMud3JhcHBlcixcbiAgICBwYXJlbnQsXG4gIH0pO1xuICBjb25zdCBwcmV2aW91c1BhZ2UgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgICBjbGFzc05hbWU6IGNzc0J1dHRvbixcbiAgICB0ZXh0OiAncHJldicsXG4gICAgcGFyZW50OiB3cmFwcGVyLFxuICB9KTtcbiAgY29uc3QgbmV4dFBhZ2UgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgICBjbGFzc05hbWU6IGNzc0J1dHRvbixcbiAgICB0ZXh0OiAnbmV4dCcsXG4gICAgcGFyZW50OiB3cmFwcGVyLFxuICB9KTtcbiAgaWYgKFxuICAgIHN0YXRlUmFjZS5zdGF0ZS5nYXJhZ2UubGVuZ3RoIDw9IHN0YXRlUmFjZS5tYXhWaWV3Q2FyIHx8XG4gICAgKHN0YXRlUmFjZS5fcGFnZSArIG9mZnNldCkgKiBzdGF0ZVJhY2UubWF4Vmlld0NhciA+XG4gICAgICBzdGF0ZVJhY2Uuc3RhdGUuZ2FyYWdlLmxlbmd0aFxuICApIHtcbiAgICBzZXREaXNhYmxlZEVsZW1lbnRzKFtuZXh0UGFnZV0sIHRydWUpO1xuICB9XG4gIGNvbnN0IHN0YXJ0UGFnZSA9IDA7XG4gIGlmIChzdGF0ZVJhY2UuX3BhZ2UgPT09IHN0YXJ0UGFnZSkgc2V0RGlzYWJsZWRFbGVtZW50cyhbcHJldmlvdXNQYWdlXSwgdHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tDaGFuZ2VQYWdlID0gKGRpcmVjdGlvbjogJysnIHwgJy0nKTogdm9pZCA9PiB7XG4gICAgc3RhdGVSYWNlLl9wYWdlICs9IGRpcmVjdGlvbiA9PT0gJysnID8gb2Zmc2V0IDogLW9mZnNldDtcbiAgfTtcblxuICBwcmV2aW91c1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVDbGlja0NoYW5nZVBhZ2UoJy0nKSk7XG4gIG5leHRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlQ2xpY2tDaGFuZ2VQYWdlKCcrJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1haW5QYWdlID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBvZmZzZXQgPSAxO1xuICBjb25zdCBzdGFydE51bWJlciA9IDA7XG4gIGNsZWFuZXJFbGVtZW50RnJvbUNoaWxkcmVuKG1haW5FbGVtZW50KTtcblxuICBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnaDEnLFxuICAgIGNsYXNzTmFtZTogJ3Zpc3VhbGx5LWhpZGRlbicsXG4gICAgdGV4dDogJ21haW4gcGFnZSBhc3luYy1yYWNlJyxcbiAgICBwYXJlbnQ6IG1haW5FbGVtZW50LFxuICB9KTtcblxuICBjb25zdCBjYXJzVGV4dCA9XG4gICAgc3RhdGVSYWNlLnN0YXRlLmdhcmFnZS5sZW5ndGggPT09IHN0YXJ0TnVtYmVyIHx8XG4gICAgc3RhdGVSYWNlLnN0YXRlLmdhcmFnZS5sZW5ndGggPiBvZmZzZXRcbiAgICAgID8gJ2NhcnMnXG4gICAgICA6ICdjYXInO1xuICBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnaDInLFxuICAgIHRleHQ6IGBHYXJhZ2U6IFwiJHtzdGF0ZVJhY2Uuc3RhdGUuZ2FyYWdlLmxlbmd0aH0gJHtjYXJzVGV4dH1cImAsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMudGl0bGUsXG4gICAgcGFyZW50OiBtYWluRWxlbWVudCxcbiAgfSk7XG4gIGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdoMycsXG4gICAgdGV4dDogYFBhZ2UgIyR7c3RhdGVSYWNlLl9wYWdlICsgb2Zmc2V0fWAsXG4gICAgcGFyZW50OiBtYWluRWxlbWVudCxcbiAgfSk7XG5cbiAgY3JlYXRlQnV0dG9ucyhtYWluRWxlbWVudCk7XG4gIGNvbnN0IGNhbGxiYWNrID0gY3JlYXRlU2V0Q2FycyhtYWluRWxlbWVudCk7XG4gIGNvbnN0IHdyYXBwZXJGb3JBcmVhID0gY3JlYXRlRWxlbWVudCh7IHRhZ05hbWU6ICdkaXYnLCBwYXJlbnQ6IG1haW5FbGVtZW50IH0pO1xuICByYWNlQXJlYSh3cmFwcGVyRm9yQXJlYSwgY2FsbGJhY2spO1xufTtcbiIsImltcG9ydCB7IG1haW5FbGVtZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tYWluLWVsZW1lbnRzL21haW4tZWxlbWVudHMnO1xuaW1wb3J0IHsgY2xlYW5lckVsZW1lbnRGcm9tQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi91dGlscy9jbGVhbmVyLWVsZW1lbnQtZnJvbS1jaGlsZHJlbic7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlLWVsZW1lbnQnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRpdGxlOiAndGV4dC0yeGwnLFxufTtcblxuZXhwb3J0IGNvbnN0IHBhZ2U0MDQgPSAoKTogdm9pZCA9PiB7XG4gIGNsZWFuZXJFbGVtZW50RnJvbUNoaWxkcmVuKG1haW5FbGVtZW50KTtcbiAgY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2gxJyxcbiAgICBjbGFzc05hbWU6ICd2aXN1YWxseS1oaWRkZW4nLFxuICAgIHRleHQ6ICc0MDQgcGFnZSBhc3luYy1yYWNlJyxcbiAgICBwYXJlbnQ6IG1haW5FbGVtZW50LFxuICB9KTtcbiAgY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2gyJyxcbiAgICB0ZXh0OiBcIlNvcnJ5LCB0aGlzIHBhZ2UgZG9lc24ndCBmaW5kIVwiLFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLnRpdGxlLFxuICAgIHBhcmVudDogbWFpbkVsZW1lbnQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IG1haW5FbGVtZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tYWluLWVsZW1lbnRzL21haW4tZWxlbWVudHMnO1xuaW1wb3J0IHsgY3NzQnV0dG9uIH0gZnJvbSAnLi4vLi4vZ2xvYmFsLXN0eWxlcyc7XG5pbXBvcnQgeyB0eXBlIHBhZ2VEYXRhUGFyYW1ldGVycywgc3RhdGVSYWNlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUnO1xuaW1wb3J0IHsgY2xlYW5lckVsZW1lbnRGcm9tQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi91dGlscy9jbGVhbmVyLWVsZW1lbnQtZnJvbS1jaGlsZHJlbic7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0V2lubmVycyB9IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QvZ2V0LXdpbm5lcnMnO1xuaW1wb3J0IHsgc2V0RGlzYWJsZWRFbGVtZW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL3NldC1kaXNhYmxlZC1lbGVtZW50cyc7XG5pbXBvcnQgeyBjcmVhdGVXaW5uZXJzVGFibGUgfSBmcm9tICcuL3dpbm5lcnMtdGFibGUnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRpdGxlOiAndGV4dC0yeGwnLFxuICB3cmFwcGVyOiAnZmxleCBmbGV4LWNvbCBiZy1zdG9uZS00MDAgcm91bmRlZC1sZyBwLTInLFxuICB3cmFwcGVyQnV0dG9uczogJ2ZsZXgtcm93IGZsZXggbXktMSBnYXAteC0xJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzYXZlRGF0YVdpbm5lcnMgPSAoZGF0YTogcGFnZURhdGFQYXJhbWV0ZXJzKTogdm9pZCA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufTtcblxuY29uc3QgaXNEYXRhV2lubmVyID0gKGRhdGE6IHVua25vd24pOiBkYXRhIGlzIHBhZ2VEYXRhUGFyYW1ldGVycyA9PiB7XG4gIHJldHVybiBkYXRhICYmXG4gICAgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmXG4gICAgJ3BhZ2UnIGluIGRhdGEgJiZcbiAgICB0eXBlb2YgZGF0YS5wYWdlID09PSAnbnVtYmVyJyAmJlxuICAgICdsaW1pdCcgaW4gZGF0YSAmJlxuICAgIHR5cGVvZiBkYXRhLmxpbWl0ID09PSAnbnVtYmVyJyAmJlxuICAgICdzb3J0JyBpbiBkYXRhICYmXG4gICAgJ29yZGVyJyBpbiBkYXRhICYmXG4gICAgdHlwZW9mIGRhdGEuc29ydCA9PT0gJ3N0cmluZycgJiZcbiAgICBbJ2lkJywgJ3dpbnMnLCAndGltZSddLmluY2x1ZGVzKGRhdGEuc29ydCkgJiZcbiAgICB0eXBlb2YgZGF0YS5vcmRlciA9PT0gJ3N0cmluZycgJiZcbiAgICBbJ0FTQycsICdERVNDJ10uaW5jbHVkZXMoZGF0YS5vcmRlcilcbiAgICA/IHRydWVcbiAgICA6IGZhbHNlO1xufTtcblxuY29uc3QgbG9hZERhdGFXaW5uZXIgPSAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVycycpO1xuICBpZiAoZGF0YSkge1xuICAgIGNvbnN0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgaWYgKGlzRGF0YVdpbm5lcihwYXJzZURhdGEpKSB7XG4gICAgICBzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhLmxpbWl0ID0gcGFyc2VEYXRhLmxpbWl0O1xuICAgICAgc3RhdGVSYWNlLnBhZ2VXaW5uZXJzRGF0YS5wYWdlID0gcGFyc2VEYXRhLnBhZ2U7XG4gICAgICBzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhLm9yZGVyID0gcGFyc2VEYXRhLm9yZGVyO1xuICAgICAgc3RhdGVSYWNlLnBhZ2VXaW5uZXJzRGF0YS5zb3J0ID0gcGFyc2VEYXRhLnNvcnQ7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVQYWdpbmF0aW9uQnV0dG9ucyA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG4gIGNvbnN0IFBBR0UgPSAxO1xuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2RpdicsXG4gICAgcGFyZW50LFxuICAgIGNsYXNzTmFtZTogc3R5bGVzLndyYXBwZXJCdXR0b25zLFxuICB9KTtcbiAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgICBwYXJlbnQ6IHdyYXBwZXIsXG4gICAgY2xhc3NOYW1lOiBjc3NCdXR0b24sXG4gICAgdGV4dDogJ3ByZXYnLFxuICB9KTtcbiAgY29uc3QgbmV4dEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdidXR0b24nLFxuICAgIHBhcmVudDogd3JhcHBlcixcbiAgICBjbGFzc05hbWU6IGNzc0J1dHRvbixcbiAgICB0ZXh0OiAnbmV4dCcsXG4gIH0pO1xuICBpZiAoc3RhdGVSYWNlLnBhZ2VXaW5uZXJzRGF0YS5wYWdlID09PSBQQUdFKSB7XG4gICAgc2V0RGlzYWJsZWRFbGVtZW50cyhbcHJldmlvdXNCdXR0b25dLCB0cnVlKTtcbiAgfVxuICBpZiAoXG4gICAgc3RhdGVSYWNlLnBhZ2VXaW5uZXJzRGF0YS5wYWdlICogc3RhdGVSYWNlLnBhZ2VXaW5uZXJzRGF0YS5saW1pdCA+PVxuICAgIHN0YXRlUmFjZS5jb3VudFdpbm5lclxuICApIHtcbiAgICBzZXREaXNhYmxlZEVsZW1lbnRzKFtuZXh0QnV0dG9uXSwgdHJ1ZSk7XG4gIH1cblxuICBwcmV2aW91c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhLnBhZ2UgPSBzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhLnBhZ2UgLSBQQUdFO1xuICAgIHNhdmVEYXRhV2lubmVycyhzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhKTtcbiAgICBhd2FpdCB3aW5uZXJzUGFnZSgpO1xuICB9KTtcbiAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhLnBhZ2UgPSBzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhLnBhZ2UgKyBQQUdFO1xuICAgIHNhdmVEYXRhV2lubmVycyhzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhKTtcbiAgICBhd2FpdCB3aW5uZXJzUGFnZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB3aW5uZXJzUGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY2xlYW5lckVsZW1lbnRGcm9tQ2hpbGRyZW4obWFpbkVsZW1lbnQpO1xuICBsb2FkRGF0YVdpbm5lcigpO1xuICBzdGF0ZVJhY2Uuc3RhdGUud2lubmVycyA9IChhd2FpdCBnZXRXaW5uZXJzKHN0YXRlUmFjZS5wYWdlV2lubmVyc0RhdGEpKSB8fCBbXTtcbiAgY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2gxJyxcbiAgICBjbGFzc05hbWU6ICd2aXN1YWxseS1oaWRkZW4nLFxuICAgIHRleHQ6ICd3aW5uZXIgcGFnZSBhc3luYy1yYWNlJyxcbiAgICBwYXJlbnQ6IG1haW5FbGVtZW50LFxuICB9KTtcbiAgY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2gyJyxcbiAgICB0ZXh0OiBgV2lubmVycyAoJHtzdGF0ZVJhY2UuY291bnRXaW5uZXJ9IGNhcnMpYCxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy50aXRsZSxcbiAgICBwYXJlbnQ6IG1haW5FbGVtZW50LFxuICB9KTtcbiAgY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2gzJyxcbiAgICB0ZXh0OiBgUGFnZTogJHtzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhLnBhZ2V9YCxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy50aXRsZSxcbiAgICBwYXJlbnQ6IG1haW5FbGVtZW50LFxuICB9KTtcbiAgY3JlYXRlUGFnaW5hdGlvbkJ1dHRvbnMobWFpbkVsZW1lbnQpO1xuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnTmFtZTogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMud3JhcHBlcixcbiAgICBwYXJlbnQ6IG1haW5FbGVtZW50LFxuICB9KTtcblxuICBjcmVhdGVXaW5uZXJzVGFibGUod3JhcHBlcik7XG59O1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBDYXIsXG4gIE9yZGVyLFxuICBTb3J0LFxuICBzdGF0ZVJhY2UsXG4gIHR5cGUgV2lubmVyLFxufSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgaGFuZGxlTmFtZSB9IGZyb20gJy4uLy4uL3V0aWxzL2hhbmRsZS1uYW1lJztcbmltcG9ydCB7IHNhdmVEYXRhV2lubmVycywgd2lubmVyc1BhZ2UgfSBmcm9tICcuL3dpbm5lcnMtcGFnZSc7XG5cbmNvbnN0IElOREVYX05BTUUgPSAxO1xuY29uc3Qgc3R5bGVzID0ge1xuICB0aXRsZTogJ2ZsZXggZmxleC1yb3cgZ2FwLXgtMicsXG4gIHJvdzogJ2ZsZXggZmxleC1yb3cgZ2FwLXgtMiBtdC0xJyxcbiAgdGV4dFRpdGxlOlxuICAgICdtZDpiYXNpcy0yMCBtZDp0ZXh0LWJhc2UgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbSBiYXNpcy0xMCB0ZXh0LWNlbnRlcicsXG4gIHRleHRUaXRsZVdpZGU6XG4gICAgJ2Jhc2lzLTQwIGJhc2lzLTIwIHRleHQtc20gbWQ6dGV4dC1iYXNlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRydW5jYXRlIHRleHQtY2VudGVyJyxcbiAgY29sb3JJbmZvOiAncm91bmRlZC1bNTAlXSBoLWZ1bGwgYXNwZWN0LXNxdWFyZScsXG59O1xuXG5jb25zdCBjcmVhdGVSb3dXaW5uZXIgPSAoXG4gIGNhckRhdGE6IENhciB8IHVuZGVmaW5lZCxcbiAgd2lubmVyOiBXaW5uZXIsXG4gIHJvdzogSFRNTEVsZW1lbnRcbik6IHZvaWQgPT4ge1xuICBjb25zdCB7IHdpbnMsIHRpbWUgfSA9IHdpbm5lcjtcbiAgaWYgKGNhckRhdGEpIHtcbiAgICBjb25zdCB7IGlkLCBjb2xvciwgbmFtZSB9ID0gY2FyRGF0YTtcbiAgICBbaWQsIG5hbWUsIGNvbG9yLCB3aW5zLCB0aW1lXS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IGNvbG9yKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yRWxlbWVudFdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy50ZXh0VGl0bGUsXG4gICAgICAgICAgcGFyZW50OiByb3csXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjb2xvckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5jb2xvckluZm8sXG4gICAgICAgICAgcGFyZW50OiBjb2xvckVsZW1lbnRXcmFwcGVyLFxuICAgICAgICB9KTtcbiAgICAgICAgY29sb3JFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgIGNsYXNzTmFtZTpcbiAgICAgICAgICAgIGluZGV4ID09PSBJTkRFWF9OQU1FID8gc3R5bGVzLnRleHRUaXRsZVdpZGUgOiBzdHlsZXMudGV4dFRpdGxlLFxuICAgICAgICAgIHBhcmVudDogcm93LFxuICAgICAgICAgIHRleHQ6IGhhbmRsZU5hbWUoZWxlbWVudC50b1N0cmluZygpKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRhdGFGb3JXaW5uZXJzVGFibGUgPSBbXG4gIHsgdGV4dDogJ2lkJywgYXR0cjogU29ydC5pZCB9LFxuICB7IHRleHQ6ICdjYXInIH0sXG4gIHsgdGV4dDogJ2NvbG9yJyB9LFxuICB7IHRleHQ6ICd3aW5zJywgYXR0cjogU29ydC53aW5zIH0sXG4gIHsgdGV4dDogJ2Jlc3QgdGltZScsIGF0dHI6IFNvcnQudGltZSB9LFxuXTtcblxuY29uc3Qgc29ydGluZ0hhbmRsZSA9IGFzeW5jIChcbiAgaXRlbTpcbiAgICB8IHtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgICBhdHRyOiBTb3J0O1xuICAgICAgfVxuICAgIHwge1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICAgIGF0dHI/OiB1bmRlZmluZWQ7XG4gICAgICB9XG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKGl0ZW0uYXR0ciA9PT0gc3RhdGVSYWNlLnBhZ2VXaW5uZXJzRGF0YS5zb3J0KSB7XG4gICAgY29uc3QgbmV4dE9yZGVyID1cbiAgICAgIE9yZGVyLkFTQyA9PT0gc3RhdGVSYWNlLnBhZ2VXaW5uZXJzRGF0YS5vcmRlciA/IE9yZGVyLkRFU0MgOiBPcmRlci5BU0M7XG4gICAgc3RhdGVSYWNlLnBhZ2VXaW5uZXJzRGF0YS5vcmRlciA9IG5leHRPcmRlcjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaXRlbS5hdHRyKSB7XG4gICAgICBzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhLnNvcnQgPSBpdGVtLmF0dHI7XG4gICAgfVxuICB9XG4gIHNhdmVEYXRhV2lubmVycyhzdGF0ZVJhY2UucGFnZVdpbm5lcnNEYXRhKTtcbiAgYXdhaXQgd2lubmVyc1BhZ2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVXaW5uZXJzVGFibGUgPSAocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgIHBhcmVudCxcbiAgICBjbGFzc05hbWU6IHN0eWxlcy50aXRsZSxcbiAgfSk7XG4gIGRhdGFGb3JXaW5uZXJzVGFibGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgIHBhcmVudDogdGl0bGUsXG4gICAgICBjbGFzc05hbWU6IGluZGV4ID09PSBJTkRFWF9OQU1FID8gc3R5bGVzLnRleHRUaXRsZVdpZGUgOiBzdHlsZXMudGV4dFRpdGxlLFxuICAgICAgdGV4dDogaXRlbS50ZXh0LFxuICAgIH0pO1xuICAgIGlmIChpdGVtLmF0dHIpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgJ2N1cnNvci1wb2ludGVyJyxcbiAgICAgICAgJ2hvdmVyOmJnLXN0b25lLTUwMCcsXG4gICAgICAgICdob3Zlcjpyb3VuZGVkLWxnJ1xuICAgICAgKTtcbiAgICAgIGVsZW1lbnQuZGF0YXNldFsndHlwZSddID0gaXRlbS5hdHRyO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNvcnRpbmdIYW5kbGUoaXRlbSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgc3RhdGVSYWNlLnN0YXRlLndpbm5lcnMuZm9yRWFjaCgod2lubmVyKSA9PiB7XG4gICAgY29uc3QgY2FyRGF0YSA9IHN0YXRlUmFjZS5zdGF0ZS5nYXJhZ2UuZmluZCgoY2FyKSA9PiBjYXIuaWQgPT09IHdpbm5lci5pZCk7XG5cbiAgICBjb25zdCByb3cgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgY2xhc3NOYW1lOiBzdHlsZXMucm93LFxuICAgICAgcGFyZW50LFxuICAgIH0pO1xuICAgIGNyZWF0ZVJvd1dpbm5lcihjYXJEYXRhLCB3aW5uZXIsIHJvdyk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHR5cGUgUGF0aFJvdXRlIH0gZnJvbSAnLi4vZW51bXMvcGF0aC1yb3V0ZXMnO1xuaW1wb3J0IHsgbWFpblBhZ2UgfSBmcm9tICcuLi9wYWdlcy9tYWluL21haW4tcGFnZSc7XG5pbXBvcnQgeyBwYWdlNDA0IH0gZnJvbSAnLi4vcGFnZXMvcGFnZTQwNC9wYWdlNDA0JztcbmltcG9ydCB7IHdpbm5lcnNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvd2lubmVycy93aW5uZXJzLXBhZ2UnO1xuXG4vLyBleHBvcnQgdHlwZSBSb3V0ZUZ1bmN0aW9uID0gKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbnR5cGUgTWFwID0gUmVjb3JkPHN0cmluZywgKCkgPT4gdm9pZD47XG5cbmV4cG9ydCBjb25zdCByb3V0ZSA9IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBnbG9iYWxUaGlzLmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdGFyZ2V0LmhyZWYpO1xuICB9XG4gIGhhbmRsZUxvY2F0aW9uKCk7XG59O1xuXG5jb25zdCByb3V0ZXM6IE1hcCA9IHtcbiAgNDA0OiBwYWdlNDA0LFxuICAnLyc6IG1haW5QYWdlLFxuICAnL3dpbm5lcnMnOiB3aW5uZXJzUGFnZSxcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVMb2NhdGlvbiA9ICgpOiB2b2lkID0+IHtcbiAgY29uc3QgcGF0aCA9IGdsb2JhbFRoaXMubG9jYXRpb24ucGF0aG5hbWU7XG4gIGNvbnN0IHJvdXRlID0gcm91dGVzW3BhdGhdIHx8IHJvdXRlc1s0MDRdO1xuXG4gIHJvdXRlKCk7XG59O1xuXG5leHBvcnQgY29uc3Qgcm91dGVUbyA9IChwYXRoOiBQYXRoUm91dGUpOiB2b2lkID0+IHtcbiAgZ2xvYmFsVGhpcy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHBhdGgpO1xuICBoYW5kbGVMb2NhdGlvbigpO1xufTtcbiIsImltcG9ydCB7IFVSTF9BUEkgfSBmcm9tICcuLi9jb25zdGFudHMvYXBpJztcbmltcG9ydCB7IG1haW5QYWdlIH0gZnJvbSAnLi4vcGFnZXMvbWFpbi9tYWluLXBhZ2UnO1xuaW1wb3J0IHsgZmlsdGVyZWREYXRhRm9yUGFnaW5hdGlvbiB9IGZyb20gJy4uL3V0aWxzL2ZpbHRlcmVkLWRhdGEtZm9yLXBhZ2luYXRpb24nO1xuaW1wb3J0IHsgaXNDYXIgfSBmcm9tICcuLi91dGlscy9pcy1jYXInO1xuXG5leHBvcnQgdHlwZSBDYXIgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29sb3I6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFdpbm5lciA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgd2luczogbnVtYmVyO1xuICB0aW1lOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBUeXBlc0ZvckFuaW1hdGlvbiA9IHtcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGJveDogSFRNTEVsZW1lbnQ7XG4gIGNhbmNlbEZsYWc6IHsgZmxhZzogYm9vbGVhbiB9O1xuICBpbmZvOiBDYXI7XG4gIHN0YXJ0QnV0dG9uOiBIVE1MRWxlbWVudDtcbiAgc3RvcEJ1dHRvbjogSFRNTEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZW51bSBTb3J0IHtcbiAgd2lucyA9ICd3aW5zJyxcbiAgdGltZSA9ICd0aW1lJyxcbiAgaWQgPSAnaWQnLFxufVxuXG5leHBvcnQgZW51bSBPcmRlciB7XG4gIEFTQyA9ICdBU0MnLFxuICBERVNDID0gJ0RFU0MnLFxufVxuXG5leHBvcnQgdHlwZSBwYWdlRGF0YVBhcmFtZXRlcnMgPSB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgbGltaXQ6IG51bWJlcjtcbiAgc29ydDogU29ydDtcbiAgb3JkZXI6IE9yZGVyO1xufTtcblxudHlwZSBDYXJGb3JDcmVhdGUgPSBPbWl0PENhciwgJ2lkJz47XG5jb25zdCBtYXhWaWV3Q2FyID0gNztcbmNvbnN0IHN0YXJ0TnVtYmVyID0gMDtcblxuY2xhc3MgU3RhdGUge1xuICBwdWJsaWMgZ2V0IF9hY3RpdmVTdG9wRW5naW5lQnV0dG9ucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVN0b3BFbmdpbmVCdXR0b25zO1xuICB9XG5cbiAgcHVibGljIHNldCBfYWN0aXZlU3RvcEVuZ2luZUJ1dHRvbnMobnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLmFjdGl2ZVN0b3BFbmdpbmVCdXR0b25zID0gbnVtYmVyO1xuICB9XG5cbiAgcHVibGljIGdldCBfY291bnRXaW5uZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudFdpbm5lcjtcbiAgfVxuICBwdWJsaWMgc2V0IF9jb3VudFdpbm5lcihudW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMuY291bnRXaW5uZXIgPSBudW1iZXI7XG4gIH1cbiAgcHVibGljIGdldCBfcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cbiAgcHVibGljIHNldCBfcGFnZShudW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMucGFnZSA9IG51bWJlcjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFBhZ2UnLCBudW1iZXIudG9TdHJpbmcoKSk7XG4gICAgdGhpcy5maWx0ZXJlZFRvVmlldygpO1xuICAgIG1haW5QYWdlKCk7XG4gIH1cbiAgcHVibGljIGFjdGl2ZVN0b3BFbmdpbmVCdXR0b25zOiBudW1iZXI7XG4gIHB1YmxpYyBidXR0b25zRm9yUmFjZToge1xuICAgIHN0YXJ0UmFjZTogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHJlc2V0UmFjZTogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHJlYWR5VG9SYWNlOiBib29sZWFuO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWN0aXZlU3RvcEVuZ2luZUJ1dHRvbnMgPSAwO1xuICAgIHRoaXMuYnV0dG9uc0ZvclJhY2UgPSB7XG4gICAgICBzdGFydFJhY2U6IG51bGwsXG4gICAgICByZXNldFJhY2U6IG51bGwsXG4gICAgICByZWFkeVRvUmFjZTogdHJ1ZSxcbiAgICB9O1xuICAgIHRoaXMuY291bnRXaW5uZXIgPSAwO1xuICAgIGNvbnN0IHBhZ2VTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gcGFnZVN0cmluZyA/IE51bWJlci5wYXJzZUludChwYWdlU3RyaW5nKSA6IHN0YXJ0TnVtYmVyO1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5wYWdlV2lubmVyc0RhdGEgPSB7XG4gICAgICBwYWdlOiAxLFxuICAgICAgbGltaXQ6IDEwLFxuICAgICAgc29ydDogU29ydC50aW1lLFxuICAgICAgb3JkZXI6IE9yZGVyLkFTQyxcbiAgICB9O1xuICAgIHRoaXMuc3RhdGUgPSB7IGdhcmFnZTogW10sIHdpbm5lcnM6IFtdIH07XG4gICAgdGhpcy52aWV3Q2FycyA9IFtdO1xuICAgIHRoaXMudmlld1N0YXRlTW9kZWxzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgcHVibGljIGNvdW50V2lubmVyOiBudW1iZXI7XG5cbiAgcHVibGljIGNyZWF0ZUNhciA9IGFzeW5jIChjYXI6IENhckZvckNyZWF0ZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke1VSTF9BUEl9L2dhcmFnZWAsXG5cbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKGRhdGEub2spIHtcbiAgICAgIGNvbnN0IGNhckluZm8gPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgIGlmIChpc0NhcihjYXJJbmZvKSkge1xuICAgICAgICB0aGlzLnN0YXRlLmdhcmFnZS5wdXNoKGNhckluZm8pO1xuICAgICAgICB0aGlzLmZpbHRlcmVkVG9WaWV3KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJBdHRlbnRpb24sIHlvdXIgZGF0YSBkb24ndCBlcXVhbCBuZWVkIGZvcm1hdCBkYXRhIVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHVibGljIGRlbGV0ZUNhciA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke1VSTF9BUEl9L2dhcmFnZS8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YS5vaykge1xuICAgICAgdGhpcy5zdGF0ZS5nYXJhZ2UgPSB0aGlzLnN0YXRlLmdhcmFnZS5maWx0ZXIoKGNhcikgPT4gY2FyLmlkICE9PSBpZCk7XG4gICAgICB0aGlzLnN0YXRlLndpbm5lcnMgPSB0aGlzLnN0YXRlLndpbm5lcnMuZmlsdGVyKChjYXIpID0+IGNhci5pZCAhPT0gaWQpO1xuICAgICAgdGhpcy5maWx0ZXJlZFRvVmlldygpO1xuICAgICAgbWFpblBhZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBmaWx0ZXJlZFRvVmlldyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnZpZXdDYXJzID0gZmlsdGVyZWREYXRhRm9yUGFnaW5hdGlvbihcbiAgICAgIHRoaXMubWF4Vmlld0NhcixcbiAgICAgIHRoaXMuX3BhZ2UsXG4gICAgICB0aGlzLnN0YXRlLmdhcmFnZVxuICAgICk7XG4gIH07XG5cbiAgcHVibGljIGFzeW5jIGdldENhcnMocXVlcnk/OiB7IGxpbWl0OiBudW1iZXI7IHBhZ2U6IG51bWJlciB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7VVJMX0FQSX0vZ2FyYWdlJHtxdWVyeSA/ICc/X2xpbWl0PScgKyBxdWVyeS5saW1pdCArICcmX3BhZ2U9JyArIHF1ZXJ5LnBhZ2UgOiAnJ31gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoZGF0YS5vaykge1xuICAgICAgY29uc3QgZ2FyYWdlQ2FycyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgdGhpcy5zdGF0ZS5nYXJhZ2UgPSBnYXJhZ2VDYXJzO1xuICAgICAgdGhpcy5maWx0ZXJlZFRvVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtYXhWaWV3Q2FyID0gbWF4Vmlld0NhcjtcbiAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiAgcHVibGljIHBhZ2VXaW5uZXJzRGF0YTogcGFnZURhdGFQYXJhbWV0ZXJzO1xuICBwdWJsaWMgc3RhdGU6IHsgZ2FyYWdlOiBDYXJbXTsgd2lubmVyczogV2lubmVyW10gfTtcblxuICBwdWJsaWMgdXBkYXRlQ2FyID0gYXN5bmMgKGNhcjogQ2FyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke1VSTF9BUEl9L2dhcmFnZS8ke2Nhci5pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogY2FyLm5hbWUsIGNvbG9yOiBjYXIuY29sb3IgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YS5vaykge1xuICAgICAgYXdhaXQgdGhpcy5nZXRDYXJzKCk7XG4gICAgICBtYWluUGFnZSgpO1xuICAgIH1cbiAgfTtcbiAgcHVibGljIHZpZXdDYXJzOiBDYXJbXTtcblxuICBwdWJsaWMgdmlld1N0YXRlTW9kZWxzOiBNYXA8bnVtYmVyLCBUeXBlc0ZvckFuaW1hdGlvbj47XG59XG5cbmV4cG9ydCBjb25zdCBzdGF0ZVJhY2UgPSBuZXcgU3RhdGUoKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyB0eXBlIERyYXcgfSBmcm9tICcuL2RyYXctYW5pbWF0aW9uJztcbnR5cGUgQW5pbWF0aW9uRGF0YSA9IHtcbiAgdGltaW5nOiAoZnJhY3Rpb246IG51bWJlcikgPT4gbnVtYmVyO1xuICBkcmF3OiBEcmF3O1xuICBkdXJhdGlvbkRhdGE6IHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHByb21pc2U6IFByb21pc2U8dW5kZWZpbmVkIHwgc3RyaW5nIHwgeyBzdWNjZXNzOiBib29sZWFuIH0+O1xuICB9O1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgYm94OiBIVE1MRWxlbWVudDtcbiAgY2FuY2VsRmxhZzogeyBmbGFnOiBib29sZWFuIH07XG59O1xuXG5jb25zdCBlbmRPZkZyYWN0aW9uID0gMTtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGUgPSAoYW5pbWF0aW9uRGF0YTogQW5pbWF0aW9uRGF0YSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCB7IHRpbWluZywgZHJhdywgZHVyYXRpb25EYXRhLCBlbGVtZW50LCBib3gsIGNhbmNlbEZsYWcgfSA9XG4gICAgICBhbmltYXRpb25EYXRhO1xuICAgIGNvbnN0IGZ1bGxXaWR0aCA9IDEwMDtcbiAgICBsZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zdCB3aWR0aCA9XG4gICAgICBmdWxsV2lkdGggLSAoZWxlbWVudC5vZmZzZXRXaWR0aCAvIGJveC5vZmZzZXRXaWR0aCkgKiBmdWxsV2lkdGg7XG4gICAgbGV0IGFib3J0ZWQgPSBmYWxzZTtcbiAgICBkdXJhdGlvbkRhdGEucHJvbWlzZS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQgPT09ICdjYXIgbmVlZCBzdG9wJykge1xuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzdGVwID0gKHRpbWVzdGFtcDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICBpZiAoc3RhcnQgPT09IG51bGwpIHtcbiAgICAgICAgc3RhcnQgPSB0aW1lc3RhbXA7XG4gICAgICB9XG4gICAgICBpZiAoYWJvcnRlZCB8fCBjYW5jZWxGbGFnLmZsYWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZWxhcHNlZCA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xuICAgICAgbGV0IHRpbWVGcmFjdGlvbiA9IGVsYXBzZWQgLyBkdXJhdGlvbkRhdGEuZHVyYXRpb247XG4gICAgICBpZiAodGltZUZyYWN0aW9uID4gZW5kT2ZGcmFjdGlvbikge1xuICAgICAgICB0aW1lRnJhY3Rpb24gPSBlbmRPZkZyYWN0aW9uO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aW1pbmcodGltZUZyYWN0aW9uKTtcbiAgICAgIGRyYXcocHJvZ3Jlc3MgKiB3aWR0aCwgZWxlbWVudCk7XG4gICAgICBpZiAodGltZUZyYWN0aW9uIDwgZW5kT2ZGcmFjdGlvbikge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCB0eXBlIERyYXcgPSAocHJvZ3Jlc3M6IG51bWJlciwgZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XG5cbmV4cG9ydCBjb25zdCBkcmF3QW5pbWF0ZTogRHJhdyA9IChwcm9ncmVzcywgZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnN0eWxlLmxlZnQgPSBwcm9ncmVzcyArICclJztcbn07XG4iLCJleHBvcnQgY29uc3QgbGluZWFyID0gKHRpbWVGcmFjdGlvbjogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHRpbWVGcmFjdGlvbjtcbn07XG4iLCJleHBvcnQgY29uc3QgY2xlYW5lckVsZW1lbnRGcm9tQ2hpbGRyZW4gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxufTtcbiIsImV4cG9ydCB0eXBlIERhdGFUb0NyZWF0ZUVsZW1lbnQ8VCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4gPSB7XG4gIHRhZ05hbWU6IFQ7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcGFyZW50PzogSFRNTEVsZW1lbnQ7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGF0dHJpYnV0ZXM/OiB7IGF0dHI6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9W107XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9IDxUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgb3B0aW9uczogRGF0YVRvQ3JlYXRlRWxlbWVudDxUPlxuKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdID0+IHtcbiAgY29uc3QgeyB0YWdOYW1lLCBjbGFzc05hbWUsIHBhcmVudCwgdGV4dCwgYXR0cmlidXRlcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9XG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmQoZWxlbWVudCk7XG4gIH1cblxuICBpZiAodGV4dCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9XG5cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29uc3QgeyBhdHRyLCB2YWx1ZSB9ID0gYXR0cmlidXRlO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGZpbHRlcmVkRGF0YUZvclBhZ2luYXRpb24gPSA8VD4oXG4gIG1heDogbnVtYmVyLFxuICBwYWdlOiBudW1iZXIsXG4gIGFycmF5OiBUW11cbik6IFRbXSA9PiB7XG4gIGNvbnN0IHN0YXJ0TnVtYmVyID0gMDtcbiAgY29uc3QgbWluSW5kZXggPSBzdGFydE51bWJlciArIG1heCAqIHBhZ2U7XG4gIGNvbnN0IG1heEluZGV4ID0gbWluSW5kZXggKyBtYXg7XG4gIHJldHVybiBhcnJheS5maWx0ZXIoKF8sIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID49IG1pbkluZGV4ICYmIGluZGV4IDwgbWF4SW5kZXgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tTnVtYmVyIH0gZnJvbSAnLi9nZXQtcmFuZG9tLW51bWJlcic7XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21EYXRhRnJvbUFycmF5ID0gPFQ+KGFycmF5OiBUW10pOiBUID0+IHtcbiAgY29uc3Qgb2Zmc2V0ID0gMTtcbiAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBnZXRSYW5kb21OdW1iZXIoYXJyYXkubGVuZ3RoIC0gb2Zmc2V0KTtcbiAgcmV0dXJuIGFycmF5W3JhbmRvbVBvc2l0aW9uXTtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBjb25zdCBvZmZzZXQgPSAxO1xuICBjb25zdCBtaW4gPSBzdGFydDtcbiAgY29uc3QgbWF4TnVtYmVyID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heE51bWJlciAtIG1pbiArIG9mZnNldCkpICsgbWluO1xufTtcbiIsImV4cG9ydCBjb25zdCBoYW5kbGVOYW1lID0gKG5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IE1BWF9MRU5HVEggPSAxNTtcbiAgY29uc3QgU1RBUlRfTkFNRSA9IDA7XG4gIGNvbnN0IERPVFRFRCA9ICcuLi4nO1xuICByZXR1cm4gbmFtZS5sZW5ndGggPiBNQVhfTEVOR1RIXG4gICAgPyBuYW1lLnNsaWNlKFNUQVJUX05BTUUsIE1BWF9MRU5HVEgpICsgRE9UVEVEXG4gICAgOiBuYW1lO1xufTtcbiIsImltcG9ydCB7IHR5cGUgQ2FyIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaXNDYXIgPSAoY2FyOiB1bmtub3duKTogY2FyIGlzIENhciA9PiB7XG4gIHJldHVybiBjYXIgJiZcbiAgICB0eXBlb2YgY2FyID09PSAnb2JqZWN0JyAmJlxuICAgICduYW1lJyBpbiBjYXIgJiZcbiAgICAnaWQnIGluIGNhciAmJlxuICAgICdjb2xvcicgaW4gY2FyICYmXG4gICAgdHlwZW9mIGNhci5uYW1lID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBjYXIuaWQgPT09ICdudW1iZXInICYmXG4gICAgdHlwZW9mIGNhci5jb2xvciA9PT0gJ3N0cmluZydcbiAgICA/IHRydWVcbiAgICA6IGZhbHNlO1xufTtcbiIsImV4cG9ydCB0eXBlIFZlbG9jaXR5SW5mbyA9IHtcbiAgdmVsb2NpdHk6IG51bWJlcjtcbiAgZGlzdGFuY2U6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1ZlbG9jaXR5RGF0YSA9IChkYXRhOiB1bmtub3duKTogZGF0YSBpcyBWZWxvY2l0eUluZm8gPT4ge1xuICByZXR1cm4gZGF0YSAmJlxuICAgIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJlxuICAgICd2ZWxvY2l0eScgaW4gZGF0YSAmJlxuICAgIHR5cGVvZiBkYXRhLnZlbG9jaXR5ID09PSAnbnVtYmVyJyAmJlxuICAgICdkaXN0YW5jZScgaW4gZGF0YSAmJlxuICAgIHR5cGVvZiBkYXRhLmRpc3RhbmNlID09PSAnbnVtYmVyJ1xuICAgID8gdHJ1ZVxuICAgIDogZmFsc2U7XG59O1xuIiwiaW1wb3J0IHsgdHlwZSBXaW5uZXIgfSBmcm9tICcuLi9zdGF0ZS9zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpc1dpbm5lciA9IChkYXRhOiB1bmtub3duKTogZGF0YSBpcyBXaW5uZXIgPT4ge1xuICByZXR1cm4gZGF0YSAmJlxuICAgIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJlxuICAgICdpZCcgaW4gZGF0YSAmJlxuICAgICd3aW5zJyBpbiBkYXRhICYmXG4gICAgJ3RpbWUnIGluIGRhdGEgJiZcbiAgICB0eXBlb2YgZGF0YS5pZCA9PT0gJ251bWJlcicgJiZcbiAgICB0eXBlb2YgZGF0YS53aW5zID09PSAnbnVtYmVyJyAmJlxuICAgIHR5cGVvZiBkYXRhLnRpbWUgPT09ICdudW1iZXInXG4gICAgPyB0cnVlXG4gICAgOiBmYWxzZTtcbn07XG4iLCJleHBvcnQgY29uc3QgcmFuZG9tSGV4Q29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgY29uc3QgbWF4aW11bUxlbmd0aCA9IDY7XG5cbiAgY29uc3QgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcbiAgbGV0IGNvbG9yID0gJyMnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heGltdW1MZW5ndGg7IGkrKykge1xuICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGV0dGVycy5sZW5ndGgpXTtcbiAgfVxuICByZXR1cm4gY29sb3I7XG59O1xuIiwiaW1wb3J0IHsgVVJMX0FQSSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hcGknO1xuaW1wb3J0IHsgdHlwZSBXaW5uZXIgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQgeyBpc1dpbm5lciB9IGZyb20gJy4uL2lzLXdpbm5lcic7XG5cbmNvbnN0IGR1cGxpY2F0ZWRJRCA9IDUwMDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdpbm5lciA9IGFzeW5jIChcbiAgd2lubmVyOiBXaW5uZXJcbik6IFByb21pc2U8V2lubmVyIHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7VVJMX0FQSX0vd2lubmVyc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh3aW5uZXIpLFxuICB9KTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCB3aW5uZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coJ3dpbm5lciBjcmVhdGVkJyk7XG4gICAgaWYgKGlzV2lubmVyKHdpbm5lcikpIHtcbiAgICAgIHJldHVybiB3aW5uZXI7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gZHVwbGljYXRlZElEKSB7XG4gICAgY29uc29sZS5sb2coJ0R1cGxpY2F0ZWQgaWQnKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IFVSTF9BUEkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvYXBpJztcblxuY29uc3Qgbm90Rm91bmQgPSA0MDQ7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVXaW5uZXIgPSBhc3luYyAoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1VSTF9BUEl9L3dpbm5lcnMvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSk7XG5cbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5sb2coJ3dpbm5lciBkZWxldGVkJyk7XG4gIH1cblxuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBub3RGb3VuZCkge1xuICAgIGNvbnNvbGUubG9nKFwid2lubmVyIGRvZXNuJ3QgZm91bmRcIik7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBVUkxfQVBJIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2FwaSc7XG5pbXBvcnQgeyB0eXBlIENhciB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlJztcblxuZXhwb3J0IGNvbnN0IGRyaXZlTW9kZUVuZ2luZSA9IGFzeW5jIChcbiAgY2FyOiBDYXIsXG4gIGNvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlclxuKTogUHJvbWlzZTx1bmRlZmluZWQgfCBzdHJpbmcgfCB7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4gPT4ge1xuICBjb25zdCBzdG9wQ2FyQ29kZSA9IDUwMDtcblxuICBjb25zdCBmZXRjaFByb21pc2UgPSAoYXN5bmMgKCk6IFByb21pc2U8XG4gICAgdW5kZWZpbmVkIHwgc3RyaW5nIHwgeyBzdWNjZXNzOiBib29sZWFuIH1cbiAgPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke1VSTF9BUEl9L2VuZ2luZT9pZD0ke2Nhci5pZH0mc3RhdHVzPWRyaXZlYCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gc3RvcENhckNvZGUpIHtcbiAgICAgICAgcmV0dXJuICdjYXIgbmVlZCBzdG9wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybigncmVzcG9uc2UgZ2V0IHdpdGggbWlzdGFrZScpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBoYW5kbGVFcnJvcihlcnJvcik7XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2U7XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcjogdW5rbm93bik6IHZvaWQge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgY29uc29sZS5sb2coJ0ZldGNoIGFib3J0ZWQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc29sZS5lcnJvcignTmV0d29yayBlcnJvciBvciB1bmV4cGVjdGVkIGlzc3VlJywgZXJyb3IpO1xufVxuIiwiaW1wb3J0IHsgVVJMX0FQSSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hcGknO1xuaW1wb3J0IHtcbiAgdHlwZSBTb3J0LFxuICB0eXBlIE9yZGVyLFxuICBzdGF0ZVJhY2UsXG4gIHR5cGUgV2lubmVyLFxufSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQgeyBpc1dpbm5lciB9IGZyb20gJy4uL2lzLXdpbm5lcic7XG50eXBlIFF1ZXJ5ID0ge1xuICBwYWdlPzogbnVtYmVyO1xuICBsaW1pdD86IG51bWJlcjtcbiAgc29ydD86IFNvcnQ7XG4gIG9yZGVyPzogT3JkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVRdWVyeVBhdGggPSAocXVlcnk6IFF1ZXJ5IHwgdW5kZWZpbmVkKTogbnVsbCB8IHN0cmluZyA9PiB7XG4gIGlmIChxdWVyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgZGF0YUZvclN0cmluZyA9IFtdO1xuICBpZiAocXVlcnkucGFnZSkge1xuICAgIGRhdGFGb3JTdHJpbmcucHVzaChgX3BhZ2U9JHtxdWVyeS5wYWdlfWApO1xuICB9XG4gIGlmIChxdWVyeS5saW1pdCkge1xuICAgIGRhdGFGb3JTdHJpbmcucHVzaChgX2xpbWl0PSR7cXVlcnkubGltaXR9YCk7XG4gIH1cbiAgaWYgKHF1ZXJ5LnNvcnQpIHtcbiAgICBkYXRhRm9yU3RyaW5nLnB1c2goYF9zb3J0PSR7cXVlcnkuc29ydH1gKTtcbiAgfVxuICBpZiAocXVlcnkub3JkZXIpIHtcbiAgICBkYXRhRm9yU3RyaW5nLnB1c2goYF9vcmRlcj0ke3F1ZXJ5Lm9yZGVyfWApO1xuICB9XG4gIHJldHVybiBgP2AgKyBkYXRhRm9yU3RyaW5nLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRXaW5uZXJzID0gYXN5bmMgKFxuICBxdWVyeT86IFF1ZXJ5XG4pOiBQcm9taXNlPFdpbm5lcltdIHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5UGF0aCA9IGNyZWF0ZVF1ZXJ5UGF0aChxdWVyeSk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtVUkxfQVBJfS93aW5uZXJzJHtxdWVyeVBhdGggfHwgJyd9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gIH0pO1xuXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGNvdW50ID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICBpZiAoY291bnQpIHtcbiAgICAgIHN0YXRlUmFjZS5jb3VudFdpbm5lciA9IE51bWJlci5wYXJzZUludChjb3VudCk7XG4gICAgfVxuICAgIGNvbnN0IHdpbm5lcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHdpbm5lcnMuZXZlcnkoaXNXaW5uZXIpKSB7XG4gICAgICByZXR1cm4gd2lubmVycztcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBVUkxfQVBJIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2FwaSc7XG5pbXBvcnQgeyB0eXBlIENhciB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlJztcbmltcG9ydCB7IGlzVmVsb2NpdHlEYXRhIH0gZnJvbSAnLi4vaXMtdmVsb2NpdHktZGF0YSc7XG5pbXBvcnQgeyBkcml2ZU1vZGVFbmdpbmUgfSBmcm9tICcuL2RyaXZlLW1vZGUtZW5naW5lJztcblxuY29uc3QgY29udHJvbGxlcnM6IE1hcDxudW1iZXIsIEFib3J0Q29udHJvbGxlcj4gPSBuZXcgTWFwPFxuICBudW1iZXIsXG4gIEFib3J0Q29udHJvbGxlclxuPigpO1xuXG50eXBlIGRpcmVjdGlvbiA9ICdzdGFydGVkJyB8ICdzdG9wcGVkJztcblxuY29uc3Qgc3RhcnRFbmdpbmUgPSBhc3luYyAoXG4gIGNhcjogQ2FyLFxuICBkaXJlY3Rpb246IGRpcmVjdGlvblxuKTogUHJvbWlzZTxcbiAgfCB7XG4gICAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgICAgcHJvbWlzZTogUHJvbWlzZTx1bmRlZmluZWQgfCBzdHJpbmcgfCB7IHN1Y2Nlc3M6IGJvb2xlYW4gfT47XG4gICAgfVxuICB8IHVuZGVmaW5lZFxuPiA9PiB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnRyb2xsZXJzLnNldChjYXIuaWQsIGNvbnRyb2xsZXIpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke1VSTF9BUEl9L2VuZ2luZT9pZD0ke2Nhci5pZH0mc3RhdHVzPSR7ZGlyZWN0aW9ufWAsXG4gICAgeyBtZXRob2Q6ICdQQVRDSCcgfVxuICApO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChpc1ZlbG9jaXR5RGF0YShkYXRhKSkge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSBkYXRhLmRpc3RhbmNlIC8gZGF0YS52ZWxvY2l0eTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBkcml2ZU1vZGVFbmdpbmUoY2FyLCBjb250cm9sbGVyKTtcbiAgICAgIHJldHVybiB7IHByb21pc2UsIGR1cmF0aW9uIH07XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzdG9wRW5naW5lID0gYXN5bmMgKFxuICBjYXI6IENhcixcbiAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbik6IFByb21pc2U8XG4gIHwge1xuICAgICAgZHVyYXRpb246IG51bWJlcjtcbiAgICAgIHByb21pc2U6IFByb21pc2U8dW5kZWZpbmVkIHwgc3RyaW5nIHwgeyBzdWNjZXNzOiBib29sZWFuIH0+O1xuICAgIH1cbiAgfCB1bmRlZmluZWRcbj4gPT4ge1xuICBjb25zdCBjb250cm9sbGVyID0gY29udHJvbGxlcnMuZ2V0KGNhci5pZCk7XG4gIGlmIChjb250cm9sbGVyKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtVUkxfQVBJfS9lbmdpbmU/aWQ9JHtjYXIuaWR9JnN0YXR1cz0ke2RpcmVjdGlvbn1gLFxuICAgICAgeyBtZXRob2Q6ICdQQVRDSCcgfVxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAvLyBpZiAoZmxhZykgZmxhZy5mbGFnID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGNvbnRyb2xsZXJzLmRlbGV0ZShjYXIuaWQpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcFN0YXJ0RW5naW5lID0gYXN5bmMgKFxuICBjYXI6IENhcixcbiAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbik6IFByb21pc2U8XG4gIHwge1xuICAgICAgZHVyYXRpb246IG51bWJlcjtcbiAgICAgIHByb21pc2U6IFByb21pc2U8dW5kZWZpbmVkIHwgc3RyaW5nIHwgeyBzdWNjZXNzOiBib29sZWFuIH0+O1xuICAgIH1cbiAgfCB1bmRlZmluZWRcbj4gPT4ge1xuICBpZiAoZGlyZWN0aW9uID09PSAnc3RhcnRlZCcpIHtcbiAgICByZXR1cm4gYXdhaXQgc3RhcnRFbmdpbmUoY2FyLCBkaXJlY3Rpb24pO1xuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3N0b3BwZWQnKSB7XG4gICAgcmV0dXJuIGF3YWl0IHN0b3BFbmdpbmUoY2FyLCBkaXJlY3Rpb24pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgVVJMX0FQSSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hcGknO1xuaW1wb3J0IHsgdHlwZSBXaW5uZXIgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQgeyBpc1dpbm5lciB9IGZyb20gJy4uL2lzLXdpbm5lcic7XG5cbmNvbnN0IG5vdEZvdW5kID0gNDA0O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlV2lubmVyID0gYXN5bmMgKFxuICB3aW5uZXI6IFdpbm5lclxuKTogUHJvbWlzZTxXaW5uZXIgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtVUkxfQVBJfS93aW5uZXJzLyR7d2lubmVyLmlkfWAsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgd2luczogd2lubmVyLndpbnMsIHRpbWU6IHdpbm5lci50aW1lIH0pLFxuICB9KTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCB3aW5uZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coJ3dpbm5lciB1cGRhdGVkJyk7XG4gICAgaWYgKGlzV2lubmVyKHdpbm5lcikpIHtcbiAgICAgIHJldHVybiB3aW5uZXI7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gbm90Rm91bmQpIHtcbiAgICBjb25zb2xlLmxvZygnTm90IGZvdW5kIHdpbm5lcicpO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IHNldERpc2FibGVkRWxlbWVudHMgPSAoXG4gIGFycmF5OiBIVE1MRWxlbWVudFtdLFxuICB2YWx1ZTogYm9vbGVhblxuKTogdm9pZCA9PiB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIGBgKSk7XG4gIH0gZWxzZSB7XG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpO1xuICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaGFuZGxlTG9jYXRpb24sIHJvdXRlIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJztcbmltcG9ydCB7IHN0YXRlUmFjZSB9IGZyb20gJy4vc3RhdGUvc3RhdGUnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBzdGFydEFwcCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgYXdhaXQgc3RhdGVSYWNlLmdldENhcnMoKTtcbiAgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGhhbmRsZUxvY2F0aW9uKTtcbiAgZ2xvYmFsVGhpcy5yb3V0ZSA9IHJvdXRlO1xuXG4gIGhhbmRsZUxvY2F0aW9uKCk7XG59O1xuXG5zdGFydEFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9