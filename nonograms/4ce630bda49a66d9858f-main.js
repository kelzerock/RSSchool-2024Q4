"use strict";
(self["webpackChunknonograms"] = self["webpackChunknonograms"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/cell.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/cell.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cell {
  width: 20px;
  height: 20px;
  border: 1px solid var(--main-gray);
  margin: 0px;
  background-color: white;
  transition: background-color 0.3s ease-in-out;
}
.cell:nth-child(5n+1) {
  border-left: solid 2px var(--main-gray);
}
.cell:nth-child(5n) {
  border-right: solid 2px var(--main-gray);
}
.cell:first-child {
  border-left: solid 3px var(--main-gray);
}
.cell:last-child {
  border-right: solid 3px var(--main-gray);
}
.cell:hover {
  cursor: pointer;
}
.cell.cell-black {
  background-color: black;
}
.cell.cell-cross {
  background: linear-gradient(to top left, rgba(0, 0, 0, 0) -10%, rgba(0, 0, 0, 0) calc(50% - 0.8px), rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 110%), linear-gradient(to top right, rgba(0, 0, 0, 0) -10%, rgba(0, 0, 0, 0) calc(50% - 0.8px), rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 110%);
  background-repeat: no-repeat;
}`, "",{"version":3,"sources":["webpack://./src/assets/style/cell.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,kCAAA;EACA,WAAA;EACA,uBAAA;EACA,6CAAA;AACF;AAEE;EACE,uCAAA;AAAJ;AAGE;EACE,wCAAA;AADJ;AAIE;EACE,uCAAA;AAFJ;AAKE;EACE,wCAAA;AAHJ;AAOE;EACE,eAAA;AALJ;AAQE;EACE,uBAAA;AANJ;AASE;EACE,uVACE;EAYF,4BAAA;AAnBJ","sourcesContent":[".cell {\n  width: 20px;\n  height: 20px;\n  border: 1px solid var(--main-gray);\n  margin: 0px;\n  background-color: white;\n  transition: background-color 0.3s ease-in-out;\n\n\n  &:nth-child(5n + 1) {\n    border-left: solid 2px var(--main-gray);\n  }\n\n  &:nth-child(5n) {\n    border-right: solid 2px var(--main-gray);\n  }\n\n  &:first-child {\n    border-left: solid 3px var(--main-gray);\n  }\n\n  &:last-child {\n    border-right: solid 3px var(--main-gray);\n  }\n\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &.cell-black {\n    background-color: black;\n  }\n\n  &.cell-cross {\n    background:\n      linear-gradient(to top left,\n        rgba(0, 0, 0, 0) -10%,\n        rgba(0, 0, 0, 0) calc(50% - 0.8px),\n        rgb(0, 0, 0, 1) 50%,\n        rgba(0, 0, 0, 0) calc(50% + 0.8px),\n        rgba(0, 0, 0, 0) 110%),\n      linear-gradient(to top right,\n        rgba(0, 0, 0, 0) -10%,\n        rgba(0, 0, 0, 0) calc(50% - 0.8px),\n        rgba(0, 0, 0, 1) 50%,\n        rgba(0, 0, 0, 0) calc(50% + 0.8px),\n        rgba(0, 0, 0, 0) 110%);\n    background-repeat: no-repeat;\n  }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/game-place-info.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/game-place-info.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.game-place-info {
  display: flex;
  border: solid 3px var(--main-gray);
}
.game-place-info .column {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.game-place-info .column.active .sell-info {
  background-color: #dddddd;
}
.game-place-info .column.active .sell-info.empty {
  background-color: #e6e6e6;
}
.game-place-info .sell-info {
  width: var(--cell-size);
  aspect-ratio: 1;
  text-align: center;
}
.game-place-info.up {
  flex-direction: row;
  border-bottom: none;
}
.game-place-info.up .column {
  flex-direction: column;
  width: var(--cell-size);
  border-right: solid 1px var(--main-gray);
  border-left: solid 1px var(--main-gray);
}
.game-place-info.up .column:nth-child(5n) {
  border-right: solid 2px var(--main-gray);
}
.game-place-info.up .column:nth-child(5n+1) {
  border-left: solid 2px var(--main-gray);
}
.game-place-info.up .column:first-child {
  border-left: none;
}
.game-place-info.up .column:last-child {
  border-right: none;
}
.game-place-info.up .column .sell-info {
  border-top: solid 2px var(--main-gray);
}
.game-place-info.up .column .sell-info:first-child {
  border-top: none;
}
.game-place-info.left {
  flex-direction: column;
  border-right: none;
}
.game-place-info.left .column {
  flex-direction: row;
  height: var(--cell-size);
  border-bottom: solid 1px var(--main-gray);
  border-top: solid 1px var(--main-gray);
}
.game-place-info.left .column:nth-child(5n) {
  border-bottom: solid 2px var(--main-gray);
}
.game-place-info.left .column:nth-child(5n+1) {
  border-top: solid 2px var(--main-gray);
}
.game-place-info.left .column:first-child {
  border-top: none;
}
.game-place-info.left .column:last-child {
  border-bottom: none;
}
.game-place-info.left .column .sell-info {
  border-left: solid 2px var(--main-gray);
}
.game-place-info.left .column .sell-info:first-child {
  border-left: none;
}

.sell-info {
  background-color: #c4c4c4;
}
.sell-info.empty {
  background-color: #dadada;
}`, "",{"version":3,"sources":["webpack://./src/assets/style/game-place-info.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,kCAAA;AACF;AACE;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;AACJ;AAIM;EACE,yBAAA;AAFR;AAIQ;EACE,yBAAA;AAFV;AAQE;EACE,uBAAA;EACA,eAAA;EACA,kBAAA;AANJ;AASE;EACE,mBAAA;EACA,mBAAA;AAPJ;AASI;EACE,sBAAA;EACA,uBAAA;EACA,wCAAA;EACA,uCAAA;AAPN;AASM;EACE,wCAAA;AAPR;AAUM;EACE,uCAAA;AARR;AAWM;EACE,iBAAA;AATR;AAYM;EACE,kBAAA;AAVR;AAaM;EACE,sCAAA;AAXR;AAaQ;EACE,gBAAA;AAXV;AAiBE;EACE,sBAAA;EACA,kBAAA;AAfJ;AAiBI;EACE,mBAAA;EACA,wBAAA;EACA,yCAAA;EACA,sCAAA;AAfN;AAiBM;EACE,yCAAA;AAfR;AAkBM;EACE,sCAAA;AAhBR;AAmBM;EACE,gBAAA;AAjBR;AAoBM;EACE,mBAAA;AAlBR;AAqBM;EACE,uCAAA;AAnBR;AAqBQ;EACE,iBAAA;AAnBV;;AA0BA;EACE,yBAAA;AAvBF;AAyBE;EACE,yBAAA;AAvBJ","sourcesContent":[".game-place-info {\n  display: flex;\n  border: solid 3px var(--main-gray);\n\n  .column {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n\n\n    &.active {\n\n      .sell-info {\n        background-color: #dddddd;\n\n        &.empty {\n          background-color: #e6e6e6;\n        }\n      }\n    }\n  }\n\n  .sell-info {\n    width: var(--cell-size);\n    aspect-ratio: 1;\n    text-align: center;\n  }\n\n  &.up {\n    flex-direction: row;\n    border-bottom: none;\n\n    & .column {\n      flex-direction: column;\n      width: var(--cell-size);\n      border-right: solid 1px var(--main-gray);\n      border-left: solid 1px var(--main-gray);\n\n      &:nth-child(5n) {\n        border-right: solid 2px var(--main-gray);\n      }\n\n      &:nth-child(5n+1) {\n        border-left: solid 2px var(--main-gray);\n      }\n\n      &:first-child {\n        border-left: none;\n      }\n\n      &:last-child {\n        border-right: none;\n      }\n\n      .sell-info {\n        border-top: solid 2px var(--main-gray);\n\n        &:first-child {\n          border-top: none;\n        }\n      }\n    }\n  }\n\n  &.left {\n    flex-direction: column;\n    border-right: none;\n\n    & .column {\n      flex-direction: row;\n      height: var(--cell-size);\n      border-bottom: solid 1px var(--main-gray);\n      border-top: solid 1px var(--main-gray);\n\n      &:nth-child(5n) {\n        border-bottom: solid 2px var(--main-gray);\n      }\n\n      &:nth-child(5n+1) {\n        border-top: solid 2px var(--main-gray);\n      }\n\n      &:first-child {\n        border-top: none;\n      }\n\n      &:last-child {\n        border-bottom: none;\n      }\n\n      .sell-info {\n        border-left: solid 2px var(--main-gray);\n\n        &:first-child {\n          border-left: none;\n        }\n      }\n    }\n  }\n}\n\n.sell-info {\n  background-color: #c4c4c4;\n\n  &.empty {\n    background-color: #dadada;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/game-place.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/game-place.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.game-place {
  margin: 20px auto;
  display: grid;
  grid-auto-rows: minmax(20px, auto);
  grid-template-columns: minmax(20px, auto) minmax(20px, auto);
}
.row {
  display: flex;
  flex-direction: row;
}
.row:nth-child(5n+1) .cell {
  border-top: solid 2px var(--main-gray);
}
.row:nth-child(5n) .cell {
  border-bottom: solid 2px var(--main-gray);
}
.row:first-child .cell {
  border-top: solid 3px var(--main-gray);
}
.row:last-child .cell {
  border-bottom: solid 3px var(--main-gray);
}`, "",{"version":3,"sources":["webpack://./src/assets/style/game-place.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,aAAA;EACA,kCAAA;EACA,4DAAA;AACF;AAMA;EACE,aAAA;EACA,mBAAA;AAJF;AAME;EACE,sCAAA;AAJJ;AAOE;EACE,yCAAA;AALJ;AAQE;EACE,sCAAA;AANJ;AASE;EACE,yCAAA;AAPJ","sourcesContent":[".game-place {\n  margin: 20px auto;\n  display: grid;\n  grid-auto-rows: minmax(20px, auto);\n  grid-template-columns: minmax(20px, auto) minmax(20px, auto);\n  ;\n\n\n  .game-place-main {}\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n\n  &:nth-child(5n + 1) .cell {\n    border-top: solid 2px var(--main-gray);\n  }\n\n  &:nth-child(5n) .cell {\n    border-bottom: solid 2px var(--main-gray);\n  }\n\n  &:first-child .cell {\n    border-top: solid 3px var(--main-gray);\n  }\n\n  &:last-child .cell {\n    border-bottom: solid 3px var(--main-gray);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/main.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/main.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-gray: darkgray;
  --dark-gray: rgb(88, 88, 88);
  --cell-size: 20px;
}

* {
  box-sizing: content-box;
}

body {
  margin: 0;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}`, "",{"version":3,"sources":["webpack://./src/assets/style/main.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,4BAAA;EACA,iBAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,SAAA;AACF;;AAEA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;AACF","sourcesContent":[":root {\n  --main-gray: darkgray;\n  --dark-gray: rgb(88, 88, 88);\n  --cell-size: 20px;\n}\n\n* {\n  box-sizing: content-box;\n}\n\nbody {\n  margin: 0;\n}\n\n.wrapper {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}"],"sourceRoot":""}]);
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

/***/ "./src/constants/constant.js":
/*!***********************************!*\
  !*** ./src/constants/constant.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DIRECTION: () => (/* binding */ DIRECTION)
/* harmony export */ });
const DIRECTION = {
  up: "up",
  left: "left",
};


/***/ }),

/***/ "./src/constants/map/map.js":
/*!**********************************!*\
  !*** ./src/constants/map/map.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map1: () => (/* binding */ map1)
/* harmony export */ });
const map1 = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 1],
];
// const map1 = [
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
// ];
// const map1 = [
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
// ];




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style/main.scss */ "./src/assets/style/main.scss");
/* harmony import */ var _assets_style_game_place_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/style/game-place.scss */ "./src/assets/style/game-place.scss");
/* harmony import */ var _js_gamePlace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/gamePlace */ "./src/js/gamePlace.js");
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/header */ "./src/js/header.js");
/* harmony import */ var _js_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/footer */ "./src/js/footer.js");
/* harmony import */ var _js_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/timer */ "./src/js/timer.js");
const { map1 } = __webpack_require__(/*! ./constants/map/map */ "./src/constants/map/map.js");
const { Component } = __webpack_require__(/*! ./js/node */ "./src/js/node.js");







console.log("hello world");
const state = {};

const gamePlace = new _js_gamePlace__WEBPACK_IMPORTED_MODULE_2__.GamePlace({ state, map: map1 });
const wrapper = new Component(
  { tag: "div", className: "wrapper" },
  _js_header__WEBPACK_IMPORTED_MODULE_3__.header,
  _js_timer__WEBPACK_IMPORTED_MODULE_5__.timer,
  gamePlace,
  _js_footer__WEBPACK_IMPORTED_MODULE_4__.footer
);
document.body.append(wrapper.getNode());


/***/ }),

/***/ "./src/js/cell.js":
/*!************************!*\
  !*** ./src/js/cell.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* binding */ Cell)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/js/node.js");
/* harmony import */ var _assets_style_cell_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style/cell.scss */ "./src/assets/style/cell.scss");



class Cell extends _node__WEBPACK_IMPORTED_MODULE_0__.Component {
  checkedClass = "cell-black";
  crossClass = "cell-cross";
  constructor(state, dataBlack) {
    super({ tag: "span", className: "cell" });
    this.dataBlack = dataBlack;
    this.state = state;

    this.addListener("click", () => {
      this.toggleCheckedClass();
      this.setDataBlack();
    });

    this.addListener("contextmenu", (e) => {
      e.preventDefault();
      this.toggleCrossClass();
      this.setDataBlack();
    });
  }

  toggleCheckedClass() {
    if (this.getNode().classList.contains(this.checkedClass)) {
      this.getNode().classList.remove(this.checkedClass);
      this.dataBlack = false;
    } else {
      this.getNode().classList.add(this.checkedClass);
      this.getNode().classList.remove(this.crossClass);
      this.dataBlack = true;
    }
  }

  getCoordinates() {
    const rowAttribute = this.getNode().getAttribute("data-row");
    const colAttribute = this.getNode().getAttribute("data-col");
    return [rowAttribute, colAttribute];
  }

  setDataBlack() {
    const [rowAttribute, colAttribute] = this.getCoordinates();
    this.state.mapData[rowAttribute][colAttribute] = this.dataBlack ? 1 : 0;
  }

  toggleCrossClass() {
    if (this.getNode().classList.contains(this.crossClass)) {
      this.getNode().classList.remove(this.crossClass);
    } else {
      this.getNode().classList.add(this.crossClass);
      this.getNode().classList.remove(this.checkedClass);
      this.dataBlack = false;
    }
  }
}


/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/js/node.js");


const footer = new _node__WEBPACK_IMPORTED_MODULE_0__.Component({
  tag: "footer",
  className: "footer",
  text: "Footer",
});




/***/ }),

/***/ "./src/js/gamePlace.js":
/*!*****************************!*\
  !*** ./src/js/gamePlace.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamePlace: () => (/* binding */ GamePlace)
/* harmony export */ });
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constant */ "./src/constants/constant.js");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/function */ "./src/utils/function.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ "./src/js/cell.js");
/* harmony import */ var _gamePlaceInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamePlaceInfo */ "./src/js/gamePlaceInfo.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node */ "./src/js/node.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer */ "./src/js/timer.js");







class GamePlace extends _node__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor({ state, map }, ...children) {
    super({ tag: "div", className: "game-place" }, ...children);
    this.state = state;
    this.map = map;
    this.createMap();
    this.state.mapData = Array.from({ length: this.map.length }, () =>
      Array(this.map[0].length).fill(0)
    );

    this.addListener("mousemove", (e) => {
      const target = e.target;
      if (target.classList.contains("cell")) {
        const row = target.getAttribute("data-row");
        const col = target.getAttribute("data-col");
        document.querySelectorAll(".column.active").forEach((item) => {
          item.classList.remove("active");
        });
        document.querySelector(`[data-row="${row}"]`)?.classList.add("active");
        document.querySelector(`[data-col="${col}"]`)?.classList.add("active");
      }
    });

    this.addListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("cell")) {
        if (!_timer__WEBPACK_IMPORTED_MODULE_5__.timer.getStatus()) _timer__WEBPACK_IMPORTED_MODULE_5__.timer.startTimer();

        console.log({ map: this.map, state: this.state });
        let check = (0,_utils_function__WEBPACK_IMPORTED_MODULE_1__.compare2DArrays)(this.map, this.state.mapData);
        if (check) {
          const durationInSeconds = _timer__WEBPACK_IMPORTED_MODULE_5__.timer.stopTimer();
          console.log("You win! Time: " + durationInSeconds + " seconds");
        }
      }
    });
  }

  createMap() {
    const gamePlaceMain = new _node__WEBPACK_IMPORTED_MODULE_4__.Component({
      tag: "div",
      className: "game-place-main",
    });
    const gamePlaceBlock = new _node__WEBPACK_IMPORTED_MODULE_4__.Component({
      tag: "div",
      className: "game-place-block",
    });
    const gamePlaceHeaderInfo = new _gamePlaceInfo__WEBPACK_IMPORTED_MODULE_3__.GamePlaceInfo({
      state: this.state,
      map: this.map,
      direction: _constants_constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.up,
    });
    const gamePlaceLeftInfo = new _gamePlaceInfo__WEBPACK_IMPORTED_MODULE_3__.GamePlaceInfo({
      state: this.state,
      map: this.map,
      direction: _constants_constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.left,
    });

    this.map.forEach((row, index) => {
      const elementInRow = [];
      row.forEach((cell, jIndex) => {
        const data = cell ? true : false;
        const cellNode = new _cell__WEBPACK_IMPORTED_MODULE_2__.Cell(this.state, data);
        cellNode.getNode().setAttribute("data-row", index);
        cellNode.getNode().setAttribute("data-col", jIndex);
        elementInRow.push(cellNode);
      });

      gamePlaceMain.append(
        new _node__WEBPACK_IMPORTED_MODULE_4__.Component({ tag: "div", className: "row" }, ...elementInRow)
      );
    });
    this.appendChildren([
      gamePlaceBlock,
      gamePlaceHeaderInfo,
      gamePlaceLeftInfo,
      gamePlaceMain,
    ]);
  }
}


/***/ }),

/***/ "./src/js/gamePlaceInfo.js":
/*!*********************************!*\
  !*** ./src/js/gamePlaceInfo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamePlaceInfo: () => (/* binding */ GamePlaceInfo)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/js/node.js");
/* harmony import */ var _assets_style_game_place_info_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style/game-place-info.scss */ "./src/assets/style/game-place-info.scss");
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constant */ "./src/constants/constant.js");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/function */ "./src/utils/function.js");





class GamePlaceInfo extends _node__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor({ state, map, direction }) {
    super({
      tag: "div",
      className: "game-place-info " + direction,
    });
    this.state = state;
    this.map = map;
    this.direction = direction;
    this.maxLengthMap = (0,_utils_function__WEBPACK_IMPORTED_MODULE_3__.maxLength)(map);

    if (this.direction === _constants_constant__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.up) {
      this.createInfo();
    } else {
      this.createInfoLeft();
    }
  }

  createInfo() {
    console.log(this.map);
    for (let i = 0; i < this.map[0].length; i++) {
      const column = new _node__WEBPACK_IMPORTED_MODULE_0__.Component({ tag: "div", className: "column" });
      column.setAttribute("data-col", i);
      let countColumn = 0;
      let count = 0;
      for (let j = 0; j < this.map.length; j++) {
        if (this.map[j][i] === 1) {
          count++;
        } else if (this.map[j][i] === 0 && count > 0) {
          column.append(
            new _node__WEBPACK_IMPORTED_MODULE_0__.Component({ tag: "span", className: "sell-info", text: count })
          );
          countColumn += 1;
          count = 0;
        }
      }
      if (count > 0) {
        column.append(
          new _node__WEBPACK_IMPORTED_MODULE_0__.Component({ tag: "span", className: "sell-info", text: count })
        );
        countColumn += 1;
      }
      this.append(column);
      if (countColumn < this.maxLengthMap.vertical) {
        while (countColumn < this.maxLengthMap.vertical) {
          column.prepend(
            new _node__WEBPACK_IMPORTED_MODULE_0__.Component({
              tag: "span",
              className: "sell-info empty",
              text: "",
            })
          );
          countColumn += 1;
        }
      }
    }
  }

  createInfoLeft() {
    for (let i = 0; i < this.map.length; i++) {
      const column = new _node__WEBPACK_IMPORTED_MODULE_0__.Component({
        tag: "div",
        className: `column`,
      });
      column.setAttribute("data-row", i);
      let count = 0;
      let countColumn = 0;
      for (let j = 0; j < this.map[i].length; j++) {
        if (this.map[i][j] === 1) {
          count++;
        } else if (this.map[i][j] === 0 && count > 0) {
          column.append(
            new _node__WEBPACK_IMPORTED_MODULE_0__.Component({ tag: "span", className: "sell-info", text: count })
          );
          countColumn += 1;
          count = 0;
        }
      }
      if (count > 0) {
        column.append(
          new _node__WEBPACK_IMPORTED_MODULE_0__.Component({ tag: "span", className: "sell-info", text: count })
        );
        countColumn += 1;
      }
      this.append(column);
      if (countColumn < this.maxLengthMap.horizontal) {
        while (countColumn < this.maxLengthMap.horizontal) {
          column.prepend(
            new _node__WEBPACK_IMPORTED_MODULE_0__.Component({
              tag: "span",
              className: "sell-info empty",
              text: "",
            })
          );
          countColumn += 1;
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/js/node.js");


const header = new _node__WEBPACK_IMPORTED_MODULE_0__.Component({
  tag: "header",
  className: "header",
  text: "Nonograms",
});




/***/ }),

/***/ "./src/js/node.js":
/*!************************!*\
  !*** ./src/js/node.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
class Component {
  /**
   * @type {Array<Component>} - An array to store child components.
   */
  #children = [];

  /**
   * @type {HTMLElement} - The HTML node associated with the component.
   */
  #node = null;

  /**
   * Creates a new Component.
   * @constructor
   * @param {Object} options - The options for creating the component.
   * @param {string=} options.tag - HTML element tag (default is 'div').
   * @param {string=} options.className - CSS class name for the element.
   * @param {string=} options.text - Text content of the element.
   * @param {...Component} children - Child components to be appended.
   */
  constructor({ tag = "div", className = "", text = "" }, ...children) {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    this.#node = node;

    if (children) {
      this.appendChildren(children);
    }
  }

  /**
   * Appends a child component to the current component.
   * @param {Component} child - The child component to be appended.
   */
  append(child) {
    this.#children.push(child);
    this.#node.append(child.getNode());
  }
  /**
   * Prepend a child component to the current component.
   * @param {Component} child - The child component to be prepended.
   */
  prepend(child) {
    this.#children.unshift(child);
    this.#node.prepend(child.getNode());
  }

  /**
   * Appends an array of child components to the current component.
   * @param {Array<Component>} children - Array of child components to be appended.
   */
  appendChildren(children) {
    children.forEach((el) => {
      this.append(el);
    });
  }

  /**
   * Returns the HTML node associated with the component.
   * @returns {HTMLElement} - The HTML node.
   */
  getNode() {
    return this.#node;
  }

  /**
   * Returns an array of child components.
   * @returns {Array<Component>} - Array of child components.
   */
  getChildren() {
    return this.#children;
  }

  /**
   * Sets the text content of the component.
   * @param {string} content - The text content to be set.
   */
  setTextContent(content) {
    this.#node.textContent = content;
  }

  /**
   * Sets an attribute on the component's HTML node.
   * @param {string} attribute - The attribute to set.
   * @param {string} value - The value to set for the attribute.
   */
  setAttribute(attribute, value) {
    this.#node.setAttribute(attribute, value);
  }

  /**
   * Removes an attribute from the component's HTML node.
   * @param {string} attribute - The attribute to remove.
   */
  removeAttribute(attribute) {
    this.#node.removeAttribute(attribute);
  }

  /**
   * Toggles the presence of a CSS class on the component's HTML node.
   * @param {string} className - The class name to toggle.
   */
  toggleClass(className) {
    this.#node.classList.toggle(className);
  }

  /**
   * Adds an event listener to the component's HTML node.
   * @param {string} event - The event type to listen for.
   * @param {EventListener} listener - The callback function to be executed when the event occurs.
   * @param {boolean|AddEventListenerOptions} [options=false] - An options object specifying characteristics of the event listener.
   */
  addListener(event, listener, options = false) {
    this.#node.addEventListener(event, listener, options);
  }

  /**
   * Removes an event listener from the component's HTML node.
   * @param {string} event - The event type for which to remove the listener.
   * @param {EventListener} listener - The listener function to be removed.
   * @param {boolean|EventListenerOptions} [options=false] - Options that were used when adding the listener.
   */
  removeListener(event, listener, options = false) {
    this.#node.removeEventListener(event, listener, options);
  }

  /**
   * Destroys all child components associated with the current component.
   */
  destroyChildren() {
    this.#children.forEach((child) => {
      child.destroy();
    });
    this.#children.length = 0;
  }

  /**
   * Destroys the current component and removes its HTML node from the DOM.
   */
  destroy() {
    this.destroyChildren();
    this.#node.remove();
  }
}


/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/js/node.js");


class Timer extends _node__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super({ tag: "div", className: "timer", text: "00:00" });
    this.interval = "";
    this.status = false;
  }

  startTimer() {
    this.status = true;
    let seconds = 0;
    let minutes = 0;
    const interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      this.getNode().textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;
    }, 1000);
    this.interval = interval;
  }

  stopTimer() {
    this.status = false;
    const [minutes, seconds] = this.getNode()
      .textContent.split(":")
      .map(Number);
    const durationInSeconds = minutes * 60 + seconds;
    clearInterval(this.interval);
    return durationInSeconds;
  }

  resetTimer() {
    if (this.status) {
      this.stopTimer();
      this.startTimer();
    } else {
      this.startTimer();
    }
  }

  getStatus() {
    return this.status;
  }
}

const timer = new Timer();



/***/ }),

/***/ "./src/utils/function.js":
/*!*******************************!*\
  !*** ./src/utils/function.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compare2DArrays: () => (/* binding */ compare2DArrays),
/* harmony export */   maxLength: () => (/* binding */ maxLength)
/* harmony export */ });
function maxLength(arrNum) {
  const objLength = {
    horizontal: 0,
    vertical: 0,
  };
  const horizontalLenght = (arrNum) => {
    let maxLength = 0;
    for (let i = 0; i < arrNum.length; i += 1) {
      let result = [];
      let count = 0;
      for (let j = 0; j < arrNum[i].length; j += 1) {
        if (arrNum[i][j] === 1) {
          count += 1;
        } else {
          if (count > 0) {
            result.push(count);
          }
          count = 0;
        }
      }
      if (count > 0) {
        result.push(count);
      }
      if (result.length > maxLength) {
        maxLength = result.length;
      }
    }
    return maxLength;
  };
  const verticalLenght = (arrNum) => {
    let maxLength = 0;
    for (let i = 0; i < arrNum[0].length; i += 1) {
      let result = [];
      let count = 0;
      for (let j = 0; j < arrNum.length; j += 1) {
        if (arrNum[j][i] === 1) {
          count += 1;
        } else {
          if (count > 0) {
            result.push(count);
          }
          count = 0;
        }
      }
      if (count > 0) {
        result.push(count);
      }
      if (result.length > maxLength) {
        maxLength = result.length;
      }
    }
    return maxLength;
  };
  objLength.horizontal = horizontalLenght(arrNum);
  objLength.vertical = verticalLenght(arrNum);
  return objLength;
}

function compare2DArrays(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i].length !== array2[i].length) return false;

    for (let j = 0; j < array1[i].length; j++) {
      if (array1[i][j] !== array2[i][j]) return false;
    }
  }

  return true;
}




/***/ }),

/***/ "./src/assets/style/cell.scss":
/*!************************************!*\
  !*** ./src/assets/style/cell.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cell_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./cell.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/cell.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cell_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cell_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cell_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cell_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/style/game-place-info.scss":
/*!***********************************************!*\
  !*** ./src/assets/style/game-place-info.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_place_info_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./game-place-info.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/game-place-info.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_place_info_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_place_info_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_place_info_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_place_info_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/style/game-place.scss":
/*!******************************************!*\
  !*** ./src/assets/style/game-place.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_place_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./game-place.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/game-place.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_place_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_place_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_place_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_place_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/style/main.scss":
/*!************************************!*\
  !*** ./src/assets/style/main.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUE2SjtBQUM3SjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGlJQUFPOzs7O0FBSXVHO0FBQy9ILE9BQU8saUVBQWUsaUlBQU8sSUFBSSxpSUFBTyxVQUFVLGlJQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBdUo7QUFDdko7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywySEFBTzs7OztBQUlpRztBQUN6SCxPQUFPLGlFQUFlLDJIQUFPLElBQUksMkhBQU8sVUFBVSwySEFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvY2VsbC5zY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvZ2FtZS1wbGFjZS1pbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9nYW1lLXBsYWNlLnNjc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbnN0YW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvY2VsbC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvZm9vdGVyLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9qcy9nYW1lUGxhY2UuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2pzL2dhbWVQbGFjZUluZm8uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvbm9kZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvY2VsbC5zY3NzPzU5MzgiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9nYW1lLXBsYWNlLWluZm8uc2Nzcz8wMWJhIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvZ2FtZS1wbGFjZS5zY3NzPzk3NTkiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9tYWluLnNjc3M/MGU3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNlbGwge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXkpO1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jZWxsOm50aC1jaGlsZCg1bisxKSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5jZWxsOm50aC1jaGlsZCg1bikge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xufVxuLmNlbGw6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogc29saWQgM3B4IHZhcigtLW1haW4tZ3JheSk7XG59XG4uY2VsbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5jZWxsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNlbGwuY2VsbC1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmNlbGwuY2VsbC1jcm9zcyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgcmdiYSgwLCAwLCAwLCAwKSAtMTAlLCByZ2JhKDAsIDAsIDAsIDApIGNhbGMoNTAlIC0gMC44cHgpLCByZ2IoMCwgMCwgMCkgNTAlLCByZ2JhKDAsIDAsIDAsIDApIGNhbGMoNTAlICsgMC44cHgpLCByZ2JhKDAsIDAsIDAsIDApIDExMCUpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDApIC0xMCUsIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAwLjhweCksIHJnYigwLCAwLCAwKSA1MCUsIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgKyAwLjhweCksIHJnYmEoMCwgMCwgMCwgMCkgMTEwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlL2NlbGwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtBQUNGO0FBRUU7RUFDRSx1Q0FBQTtBQUFKO0FBR0U7RUFDRSx3Q0FBQTtBQURKO0FBSUU7RUFDRSx1Q0FBQTtBQUZKO0FBS0U7RUFDRSx3Q0FBQTtBQUhKO0FBT0U7RUFDRSxlQUFBO0FBTEo7QUFRRTtFQUNFLHVCQUFBO0FBTko7QUFTRTtFQUNFLHVWQUNFO0VBWUYsNEJBQUE7QUFuQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNlbGwge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXkpO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG5cXG5cXG4gICY6bnRoLWNoaWxkKDVuICsgMSkge1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLW1haW4tZ3JheSk7XFxuICB9XFxuXFxuICAmOm50aC1jaGlsZCg1bikge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xcbiAgfVxcblxcbiAgJjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ncmF5KTtcXG4gIH1cXG5cXG4gICY6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgM3B4IHZhcigtLW1haW4tZ3JheSk7XFxuICB9XFxuXFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgJi5jZWxsLWJsYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICAmLmNlbGwtY3Jvc3Mge1xcbiAgICBiYWNrZ3JvdW5kOlxcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgLTEwJSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAwLjhweCksXFxuICAgICAgICByZ2IoMCwgMCwgMCwgMSkgNTAlLFxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSArIDAuOHB4KSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgMTEwJSksXFxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgLTEwJSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAwLjhweCksXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDEpIDUwJSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgKyAwLjhweCksXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDExMCUpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5nYW1lLXBsYWNlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1tYWluLWdyYXkpO1xufVxuLmdhbWUtcGxhY2UtaW5mbyAuY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5nYW1lLXBsYWNlLWluZm8gLmNvbHVtbi5hY3RpdmUgLnNlbGwtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG4uZ2FtZS1wbGFjZS1pbmZvIC5jb2x1bW4uYWN0aXZlIC5zZWxsLWluZm8uZW1wdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuLmdhbWUtcGxhY2UtaW5mbyAuc2VsbC1pbmZvIHtcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLnVwIC5jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggdmFyKC0tbWFpbi1ncmF5KTtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCB2YXIoLS1tYWluLWdyYXkpO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCAuY29sdW1uOm50aC1jaGlsZCg1bikge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCAuY29sdW1uOm50aC1jaGlsZCg1bisxKSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5nYW1lLXBsYWNlLWluZm8udXAgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCAuY29sdW1uOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLnVwIC5jb2x1bW4gLnNlbGwtaW5mbyB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCAuY29sdW1uIC5zZWxsLWluZm86Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby5sZWZ0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby5sZWZ0IC5jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1tYWluLWdyYXkpO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5nYW1lLXBsYWNlLWluZm8ubGVmdCAuY29sdW1uOm50aC1jaGlsZCg1bikge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5nYW1lLXBsYWNlLWluZm8ubGVmdCAuY29sdW1uOm50aC1jaGlsZCg1bisxKSB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xufVxuLmdhbWUtcGxhY2UtaW5mby5sZWZ0IC5jb2x1bW46Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby5sZWZ0IC5jb2x1bW46bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLmxlZnQgLmNvbHVtbiAuc2VsbC1pbmZvIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xufVxuLmdhbWUtcGxhY2UtaW5mby5sZWZ0IC5jb2x1bW4gLnNlbGwtaW5mbzpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2VsbC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcbn1cbi5zZWxsLWluZm8uZW1wdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9nYW1lLXBsYWNlLWluZm8uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKO0FBSU07RUFDRSx5QkFBQTtBQUZSO0FBSVE7RUFDRSx5QkFBQTtBQUZWO0FBUUU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU5KO0FBU0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFTSTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHVDQUFBO0FBUE47QUFTTTtFQUNFLHdDQUFBO0FBUFI7QUFVTTtFQUNFLHVDQUFBO0FBUlI7QUFXTTtFQUNFLGlCQUFBO0FBVFI7QUFZTTtFQUNFLGtCQUFBO0FBVlI7QUFhTTtFQUNFLHNDQUFBO0FBWFI7QUFhUTtFQUNFLGdCQUFBO0FBWFY7QUFpQkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBZko7QUFpQkk7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSxzQ0FBQTtBQWZOO0FBaUJNO0VBQ0UseUNBQUE7QUFmUjtBQWtCTTtFQUNFLHNDQUFBO0FBaEJSO0FBbUJNO0VBQ0UsZ0JBQUE7QUFqQlI7QUFvQk07RUFDRSxtQkFBQTtBQWxCUjtBQXFCTTtFQUNFLHVDQUFBO0FBbkJSO0FBcUJRO0VBQ0UsaUJBQUE7QUFuQlY7O0FBMEJBO0VBQ0UseUJBQUE7QUF2QkY7QUF5QkU7RUFDRSx5QkFBQTtBQXZCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZS1wbGFjZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1tYWluLWdyYXkpO1xcblxcbiAgLmNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFxuXFxuICAgICYuYWN0aXZlIHtcXG5cXG4gICAgICAuc2VsbC1pbmZvIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuXFxuICAgICAgICAmLmVtcHR5IHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5zZWxsLWluZm8ge1xcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAmLnVwIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG5cXG4gICAgJiAuY29sdW1uIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHZhcigtLW1haW4tZ3JheSk7XFxuICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCB2YXIoLS1tYWluLWdyYXkpO1xcblxcbiAgICAgICY6bnRoLWNoaWxkKDVuKSB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOm50aC1jaGlsZCg1bisxKSB7XFxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLW1haW4tZ3JheSk7XFxuICAgICAgfVxcblxcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5zZWxsLWluZm8ge1xcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMnB4IHZhcigtLW1haW4tZ3JheSk7XFxuXFxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICYubGVmdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG5cXG4gICAgJiAuY29sdW1uIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tbWFpbi1ncmF5KTtcXG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tbWFpbi1ncmF5KTtcXG5cXG4gICAgICAmOm50aC1jaGlsZCg1bikge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLW1haW4tZ3JheSk7XFxuICAgICAgfVxcblxcbiAgICAgICY6bnRoLWNoaWxkKDVuKzEpIHtcXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc2VsbC1pbmZvIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ncmF5KTtcXG5cXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNlbGwtaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xcblxcbiAgJi5lbXB0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdhbWUtcGxhY2Uge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyMHB4LCBhdXRvKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjBweCwgYXV0bykgbWlubWF4KDIwcHgsIGF1dG8pO1xufVxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ucm93Om50aC1jaGlsZCg1bisxKSAuY2VsbCB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xufVxuLnJvdzpudGgtY2hpbGQoNW4pIC5jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLW1haW4tZ3JheSk7XG59XG4ucm93OmZpcnN0LWNoaWxkIC5jZWxsIHtcbiAgYm9yZGVyLXRvcDogc29saWQgM3B4IHZhcigtLW1haW4tZ3JheSk7XG59XG4ucm93Omxhc3QtY2hpbGQgLmNlbGwge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ncmF5KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUvZ2FtZS1wbGFjZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSw0REFBQTtBQUNGO0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1FO0VBQ0Usc0NBQUE7QUFKSjtBQU9FO0VBQ0UseUNBQUE7QUFMSjtBQVFFO0VBQ0Usc0NBQUE7QUFOSjtBQVNFO0VBQ0UseUNBQUE7QUFQSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZS1wbGFjZSB7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDIwcHgsIGF1dG8pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjBweCwgYXV0bykgbWlubWF4KDIwcHgsIGF1dG8pO1xcbiAgO1xcblxcblxcbiAgLmdhbWUtcGxhY2UtbWFpbiB7fVxcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgJjpudGgtY2hpbGQoNW4gKyAxKSAuY2VsbCB7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xcbiAgfVxcblxcbiAgJjpudGgtY2hpbGQoNW4pIC5jZWxsIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLW1haW4tZ3JheSk7XFxuICB9XFxuXFxuICAmOmZpcnN0LWNoaWxkIC5jZWxsIHtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgM3B4IHZhcigtLW1haW4tZ3JheSk7XFxuICB9XFxuXFxuICAmOmxhc3QtY2hpbGQgLmNlbGwge1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ncmF5KTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tbWFpbi1ncmF5OiBkYXJrZ3JheTtcbiAgLS1kYXJrLWdyYXk6IHJnYig4OCwgODgsIDg4KTtcbiAgLS1jZWxsLXNpemU6IDIwcHg7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW1haW4tZ3JheTogZGFya2dyYXk7XFxuICAtLWRhcmstZ3JheTogcmdiKDg4LCA4OCwgODgpO1xcbiAgLS1jZWxsLXNpemU6IDIwcHg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IERJUkVDVElPTiA9IHtcbiAgdXA6IFwidXBcIixcbiAgbGVmdDogXCJsZWZ0XCIsXG59O1xuIiwiY29uc3QgbWFwMSA9IFtcbiAgWzAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMCwgMCwgMF0sXG4gIFswLCAwLCAxLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDEsIDBdLFxuICBbMCwgMCwgMCwgMSwgMV0sXG5dO1xuLy8gY29uc3QgbWFwMSA9IFtcbi8vICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDBdLFxuLy8gICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMF0sXG4vLyAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwXSxcbi8vICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDBdLFxuLy8gICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMF0sXG4vLyAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwXSxcbi8vICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDBdLFxuLy8gICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMF0sXG4vLyAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwXSxcbi8vICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDBdLFxuLy8gXTtcbi8vIGNvbnN0IG1hcDEgPSBbXG4vLyAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwXSxcbi8vICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDBdLFxuLy8gICBbMCwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMF0sXG4vLyAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwXSxcbi8vICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDBdLFxuLy8gICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMF0sXG4vLyAgIFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwXSxcbi8vICAgWzAsIDAsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDBdLFxuLy8gICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4vLyAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwXSxcbi8vICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDBdLFxuLy8gICBbMCwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMF0sXG4vLyAgIFswLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwXSxcbi8vICAgWzAsIDAsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDBdLFxuLy8gICBbMCwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMF0sXG4vLyBdO1xuXG5leHBvcnQgeyBtYXAxIH07XG4iLCJjb25zdCB7IG1hcDEgfSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9tYXAvbWFwXCIpO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHJlcXVpcmUoXCIuL2pzL25vZGVcIik7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZS9tYWluLnNjc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlL2dhbWUtcGxhY2Uuc2Nzc1wiO1xuaW1wb3J0IHsgR2FtZVBsYWNlIH0gZnJvbSBcIi4vanMvZ2FtZVBsYWNlXCI7XG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9qcy9oZWFkZXJcIjtcbmltcG9ydCB7IGZvb3RlciB9IGZyb20gXCIuL2pzL2Zvb3RlclwiO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tIFwiLi9qcy90aW1lclwiO1xuXG5jb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xuY29uc3Qgc3RhdGUgPSB7fTtcblxuY29uc3QgZ2FtZVBsYWNlID0gbmV3IEdhbWVQbGFjZSh7IHN0YXRlLCBtYXA6IG1hcDEgfSk7XG5jb25zdCB3cmFwcGVyID0gbmV3IENvbXBvbmVudChcbiAgeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJ3cmFwcGVyXCIgfSxcbiAgaGVhZGVyLFxuICB0aW1lcixcbiAgZ2FtZVBsYWNlLFxuICBmb290ZXJcbik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZCh3cmFwcGVyLmdldE5vZGUoKSk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUvY2VsbC5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBDZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY2hlY2tlZENsYXNzID0gXCJjZWxsLWJsYWNrXCI7XG4gIGNyb3NzQ2xhc3MgPSBcImNlbGwtY3Jvc3NcIjtcbiAgY29uc3RydWN0b3Ioc3RhdGUsIGRhdGFCbGFjaykge1xuICAgIHN1cGVyKHsgdGFnOiBcInNwYW5cIiwgY2xhc3NOYW1lOiBcImNlbGxcIiB9KTtcbiAgICB0aGlzLmRhdGFCbGFjayA9IGRhdGFCbGFjaztcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVDaGVja2VkQ2xhc3MoKTtcbiAgICAgIHRoaXMuc2V0RGF0YUJsYWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudG9nZ2xlQ3Jvc3NDbGFzcygpO1xuICAgICAgdGhpcy5zZXREYXRhQmxhY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZUNoZWNrZWRDbGFzcygpIHtcbiAgICBpZiAodGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2hlY2tlZENsYXNzKSkge1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgICB0aGlzLmRhdGFCbGFjayA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jcm9zc0NsYXNzKTtcbiAgICAgIHRoaXMuZGF0YUJsYWNrID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCByb3dBdHRyaWJ1dGUgPSB0aGlzLmdldE5vZGUoKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgICBjb25zdCBjb2xBdHRyaWJ1dGUgPSB0aGlzLmdldE5vZGUoKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiKTtcbiAgICByZXR1cm4gW3Jvd0F0dHJpYnV0ZSwgY29sQXR0cmlidXRlXTtcbiAgfVxuXG4gIHNldERhdGFCbGFjaygpIHtcbiAgICBjb25zdCBbcm93QXR0cmlidXRlLCBjb2xBdHRyaWJ1dGVdID0gdGhpcy5nZXRDb29yZGluYXRlcygpO1xuICAgIHRoaXMuc3RhdGUubWFwRGF0YVtyb3dBdHRyaWJ1dGVdW2NvbEF0dHJpYnV0ZV0gPSB0aGlzLmRhdGFCbGFjayA/IDEgOiAwO1xuICB9XG5cbiAgdG9nZ2xlQ3Jvc3NDbGFzcygpIHtcbiAgICBpZiAodGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY3Jvc3NDbGFzcykpIHtcbiAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jcm9zc0NsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmFkZCh0aGlzLmNyb3NzQ2xhc3MpO1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgICB0aGlzLmRhdGFCbGFjayA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vbm9kZVwiO1xuXG5jb25zdCBmb290ZXIgPSBuZXcgQ29tcG9uZW50KHtcbiAgdGFnOiBcImZvb3RlclwiLFxuICBjbGFzc05hbWU6IFwiZm9vdGVyXCIsXG4gIHRleHQ6IFwiRm9vdGVyXCIsXG59KTtcblxuZXhwb3J0IHsgZm9vdGVyIH07XG4iLCJpbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnN0YW50XCI7XG5pbXBvcnQgeyBjb21wYXJlMkRBcnJheXMgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25cIjtcbmltcG9ydCB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgeyBHYW1lUGxhY2VJbmZvIH0gZnJvbSBcIi4vZ2FtZVBsYWNlSW5mb1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tIFwiLi90aW1lclwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZVBsYWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBzdGF0ZSwgbWFwIH0sIC4uLmNoaWxkcmVuKSB7XG4gICAgc3VwZXIoeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJnYW1lLXBsYWNlXCIgfSwgLi4uY2hpbGRyZW4pO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICB0aGlzLmNyZWF0ZU1hcCgpO1xuICAgIHRoaXMuc3RhdGUubWFwRGF0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMubWFwLmxlbmd0aCB9LCAoKSA9PlxuICAgICAgQXJyYXkodGhpcy5tYXBbMF0ubGVuZ3RoKS5maWxsKDApXG4gICAgKTtcblxuICAgIHRoaXMuYWRkTGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgICAgICAgY29uc3QgY29sID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbi5hY3RpdmVcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXWApPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2w9XCIke2NvbH1cIl1gKT8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgaWYgKCF0aW1lci5nZXRTdGF0dXMoKSkgdGltZXIuc3RhcnRUaW1lcigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHsgbWFwOiB0aGlzLm1hcCwgc3RhdGU6IHRoaXMuc3RhdGUgfSk7XG4gICAgICAgIGxldCBjaGVjayA9IGNvbXBhcmUyREFycmF5cyh0aGlzLm1hcCwgdGhpcy5zdGF0ZS5tYXBEYXRhKTtcbiAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgY29uc3QgZHVyYXRpb25JblNlY29uZHMgPSB0aW1lci5zdG9wVGltZXIoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdSB3aW4hIFRpbWU6IFwiICsgZHVyYXRpb25JblNlY29uZHMgKyBcIiBzZWNvbmRzXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVNYXAoKSB7XG4gICAgY29uc3QgZ2FtZVBsYWNlTWFpbiA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgY2xhc3NOYW1lOiBcImdhbWUtcGxhY2UtbWFpblwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGdhbWVQbGFjZUJsb2NrID0gbmV3IENvbXBvbmVudCh7XG4gICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFwiZ2FtZS1wbGFjZS1ibG9ja1wiLFxuICAgIH0pO1xuICAgIGNvbnN0IGdhbWVQbGFjZUhlYWRlckluZm8gPSBuZXcgR2FtZVBsYWNlSW5mbyh7XG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICBkaXJlY3Rpb246IERJUkVDVElPTi51cCxcbiAgICB9KTtcbiAgICBjb25zdCBnYW1lUGxhY2VMZWZ0SW5mbyA9IG5ldyBHYW1lUGxhY2VJbmZvKHtcbiAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIGRpcmVjdGlvbjogRElSRUNUSU9OLmxlZnQsXG4gICAgfSk7XG5cbiAgICB0aGlzLm1hcC5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50SW5Sb3cgPSBbXTtcbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBqSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGNlbGwgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IGNlbGxOb2RlID0gbmV3IENlbGwodGhpcy5zdGF0ZSwgZGF0YSk7XG4gICAgICAgIGNlbGxOb2RlLmdldE5vZGUoKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBpbmRleCk7XG4gICAgICAgIGNlbGxOb2RlLmdldE5vZGUoKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBqSW5kZXgpO1xuICAgICAgICBlbGVtZW50SW5Sb3cucHVzaChjZWxsTm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgZ2FtZVBsYWNlTWFpbi5hcHBlbmQoXG4gICAgICAgIG5ldyBDb21wb25lbnQoeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJyb3dcIiB9LCAuLi5lbGVtZW50SW5Sb3cpXG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGRyZW4oW1xuICAgICAgZ2FtZVBsYWNlQmxvY2ssXG4gICAgICBnYW1lUGxhY2VIZWFkZXJJbmZvLFxuICAgICAgZ2FtZVBsYWNlTGVmdEluZm8sXG4gICAgICBnYW1lUGxhY2VNYWluLFxuICAgIF0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUvZ2FtZS1wbGFjZS1pbmZvLnNjc3NcIjtcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gXCIuLi9jb25zdGFudHMvY29uc3RhbnRcIjtcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZVBsYWNlSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgc3RhdGUsIG1hcCwgZGlyZWN0aW9uIH0pIHtcbiAgICBzdXBlcih7XG4gICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFwiZ2FtZS1wbGFjZS1pbmZvIFwiICsgZGlyZWN0aW9uLFxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLm1heExlbmd0aE1hcCA9IG1heExlbmd0aChtYXApO1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBESVJFQ1RJT04udXApIHtcbiAgICAgIHRoaXMuY3JlYXRlSW5mbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyZWF0ZUluZm9MZWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSW5mbygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1hcCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcFswXS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gbmV3IENvbXBvbmVudCh7IHRhZzogXCJkaXZcIiwgY2xhc3NOYW1lOiBcImNvbHVtblwiIH0pO1xuICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGkpO1xuICAgICAgbGV0IGNvdW50Q29sdW1uID0gMDtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWFwLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcFtqXVtpXSA9PT0gMSkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXBbal1baV0gPT09IDAgJiYgY291bnQgPiAwKSB7XG4gICAgICAgICAgY29sdW1uLmFwcGVuZChcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoeyB0YWc6IFwic3BhblwiLCBjbGFzc05hbWU6IFwic2VsbC1pbmZvXCIsIHRleHQ6IGNvdW50IH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb3VudENvbHVtbiArPSAxO1xuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICBjb2x1bW4uYXBwZW5kKFxuICAgICAgICAgIG5ldyBDb21wb25lbnQoeyB0YWc6IFwic3BhblwiLCBjbGFzc05hbWU6IFwic2VsbC1pbmZvXCIsIHRleHQ6IGNvdW50IH0pXG4gICAgICAgICk7XG4gICAgICAgIGNvdW50Q29sdW1uICs9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLmFwcGVuZChjb2x1bW4pO1xuICAgICAgaWYgKGNvdW50Q29sdW1uIDwgdGhpcy5tYXhMZW5ndGhNYXAudmVydGljYWwpIHtcbiAgICAgICAgd2hpbGUgKGNvdW50Q29sdW1uIDwgdGhpcy5tYXhMZW5ndGhNYXAudmVydGljYWwpIHtcbiAgICAgICAgICBjb2x1bW4ucHJlcGVuZChcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgICB0YWc6IFwic3BhblwiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic2VsbC1pbmZvIGVtcHR5XCIsXG4gICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgY291bnRDb2x1bW4gKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUluZm9MZWZ0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzTmFtZTogYGNvbHVtbmAsXG4gICAgICB9KTtcbiAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBpKTtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBsZXQgY291bnRDb2x1bW4gPSAwO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1hcFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5tYXBbaV1bal0gPT09IDEpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFwW2ldW2pdID09PSAwICYmIGNvdW50ID4gMCkge1xuICAgICAgICAgIGNvbHVtbi5hcHBlbmQoXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KHsgdGFnOiBcInNwYW5cIiwgY2xhc3NOYW1lOiBcInNlbGwtaW5mb1wiLCB0ZXh0OiBjb3VudCB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgY291bnRDb2x1bW4gKz0gMTtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgY29sdW1uLmFwcGVuZChcbiAgICAgICAgICBuZXcgQ29tcG9uZW50KHsgdGFnOiBcInNwYW5cIiwgY2xhc3NOYW1lOiBcInNlbGwtaW5mb1wiLCB0ZXh0OiBjb3VudCB9KVxuICAgICAgICApO1xuICAgICAgICBjb3VudENvbHVtbiArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5hcHBlbmQoY29sdW1uKTtcbiAgICAgIGlmIChjb3VudENvbHVtbiA8IHRoaXMubWF4TGVuZ3RoTWFwLmhvcml6b250YWwpIHtcbiAgICAgICAgd2hpbGUgKGNvdW50Q29sdW1uIDwgdGhpcy5tYXhMZW5ndGhNYXAuaG9yaXpvbnRhbCkge1xuICAgICAgICAgIGNvbHVtbi5wcmVwZW5kKFxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCh7XG4gICAgICAgICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzZWxsLWluZm8gZW1wdHlcIixcbiAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb3VudENvbHVtbiArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5cbmNvbnN0IGhlYWRlciA9IG5ldyBDb21wb25lbnQoe1xuICB0YWc6IFwiaGVhZGVyXCIsXG4gIGNsYXNzTmFtZTogXCJoZWFkZXJcIixcbiAgdGV4dDogXCJOb25vZ3JhbXNcIixcbn0pO1xuXG5leHBvcnQgeyBoZWFkZXIgfTtcbiIsImV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAvKipcbiAgICogQHR5cGUge0FycmF5PENvbXBvbmVudD59IC0gQW4gYXJyYXkgdG8gc3RvcmUgY2hpbGQgY29tcG9uZW50cy5cbiAgICovXG4gICNjaGlsZHJlbiA9IFtdO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9IC0gVGhlIEhUTUwgbm9kZSBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbXBvbmVudC5cbiAgICovXG4gICNub2RlID0gbnVsbDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBDb21wb25lbnQuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciBjcmVhdGluZyB0aGUgY29tcG9uZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdGlvbnMudGFnIC0gSFRNTCBlbGVtZW50IHRhZyAoZGVmYXVsdCBpcyAnZGl2JykuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0aW9ucy5jbGFzc05hbWUgLSBDU1MgY2xhc3MgbmFtZSBmb3IgdGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0aW9ucy50ZXh0IC0gVGV4dCBjb250ZW50IG9mIHRoZSBlbGVtZW50LlxuICAgKiBAcGFyYW0gey4uLkNvbXBvbmVudH0gY2hpbGRyZW4gLSBDaGlsZCBjb21wb25lbnRzIHRvIGJlIGFwcGVuZGVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IoeyB0YWcgPSBcImRpdlwiLCBjbGFzc05hbWUgPSBcIlwiLCB0ZXh0ID0gXCJcIiB9LCAuLi5jaGlsZHJlbikge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgdGhpcy4jbm9kZSA9IG5vZGU7XG5cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgY2hpbGQgY29tcG9uZW50IHRvIHRoZSBjdXJyZW50IGNvbXBvbmVudC5cbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNoaWxkIC0gVGhlIGNoaWxkIGNvbXBvbmVudCB0byBiZSBhcHBlbmRlZC5cbiAgICovXG4gIGFwcGVuZChjaGlsZCkge1xuICAgIHRoaXMuI2NoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIHRoaXMuI25vZGUuYXBwZW5kKGNoaWxkLmdldE5vZGUoKSk7XG4gIH1cbiAgLyoqXG4gICAqIFByZXBlbmQgYSBjaGlsZCBjb21wb25lbnQgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY2hpbGQgLSBUaGUgY2hpbGQgY29tcG9uZW50IHRvIGJlIHByZXBlbmRlZC5cbiAgICovXG4gIHByZXBlbmQoY2hpbGQpIHtcbiAgICB0aGlzLiNjaGlsZHJlbi51bnNoaWZ0KGNoaWxkKTtcbiAgICB0aGlzLiNub2RlLnByZXBlbmQoY2hpbGQuZ2V0Tm9kZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGFuIGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICAgKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNoaWxkcmVuIC0gQXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyB0byBiZSBhcHBlbmRlZC5cbiAgICovXG4gIGFwcGVuZENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHRoaXMuYXBwZW5kKGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBIVE1MIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb21wb25lbnQuXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBUaGUgSFRNTCBub2RlLlxuICAgKi9cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMuXG4gICAqIEByZXR1cm5zIHtBcnJheTxDb21wb25lbnQ+fSAtIEFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMuXG4gICAqL1xuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy4jY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gVGhlIHRleHQgY29udGVudCB0byBiZSBzZXQuXG4gICAqL1xuICBzZXRUZXh0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy4jbm9kZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbiBhdHRyaWJ1dGUgb24gdGhlIGNvbXBvbmVudCdzIEhUTUwgbm9kZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBhdHRyaWJ1dGUgdG8gc2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0IGZvciB0aGUgYXR0cmlidXRlLlxuICAgKi9cbiAgc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICB0aGlzLiNub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGF0dHJpYnV0ZSBmcm9tIHRoZSBjb21wb25lbnQncyBIVE1MIG5vZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGUgLSBUaGUgYXR0cmlidXRlIHRvIHJlbW92ZS5cbiAgICovXG4gIHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpIHtcbiAgICB0aGlzLiNub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIHByZXNlbmNlIG9mIGEgQ1NTIGNsYXNzIG9uIHRoZSBjb21wb25lbnQncyBIVE1MIG5vZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZSB0byB0b2dnbGUuXG4gICAqL1xuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLiNub2RlLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyBIVE1MIG5vZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIFRoZSBldmVudCB0eXBlIHRvIGxpc3RlbiBmb3IuXG4gICAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXIgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgZXZlbnQgb2NjdXJzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnN9IFtvcHRpb25zPWZhbHNlXSAtIEFuIG9wdGlvbnMgb2JqZWN0IHNwZWNpZnlpbmcgY2hhcmFjdGVyaXN0aWNzIG9mIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICovXG4gIGFkZExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyA9IGZhbHNlKSB7XG4gICAgdGhpcy4jbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIHRoZSBjb21wb25lbnQncyBIVE1MIG5vZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIFRoZSBldmVudCB0eXBlIGZvciB3aGljaCB0byByZW1vdmUgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge0V2ZW50TGlzdGVuZXJ9IGxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGJlIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbnxFdmVudExpc3RlbmVyT3B0aW9uc30gW29wdGlvbnM9ZmFsc2VdIC0gT3B0aW9ucyB0aGF0IHdlcmUgdXNlZCB3aGVuIGFkZGluZyB0aGUgbGlzdGVuZXIuXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIG9wdGlvbnMgPSBmYWxzZSkge1xuICAgIHRoaXMuI25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGFsbCBjaGlsZCBjb21wb25lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gICAqL1xuICBkZXN0cm95Q2hpbGRyZW4oKSB7XG4gICAgdGhpcy4jY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICB0aGlzLiNjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBhbmQgcmVtb3ZlcyBpdHMgSFRNTCBub2RlIGZyb20gdGhlIERPTS5cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95Q2hpbGRyZW4oKTtcbiAgICB0aGlzLiNub2RlLnJlbW92ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5cbmNsYXNzIFRpbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJ0aW1lclwiLCB0ZXh0OiBcIjAwOjAwXCIgfSk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IFwiXCI7XG4gICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSB0cnVlO1xuICAgIGxldCBzZWNvbmRzID0gMDtcbiAgICBsZXQgbWludXRlcyA9IDA7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZWNvbmRzKys7XG4gICAgICBpZiAoc2Vjb25kcyA9PT0gNjApIHtcbiAgICAgICAgc2Vjb25kcyA9IDA7XG4gICAgICAgIG1pbnV0ZXMrKztcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0Tm9kZSgpLnRleHRDb250ZW50ID0gYCR7bWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlc306JHtcbiAgICAgICAgc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kc1xuICAgICAgfWA7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICB9XG5cbiAgc3RvcFRpbWVyKCkge1xuICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gICAgY29uc3QgW21pbnV0ZXMsIHNlY29uZHNdID0gdGhpcy5nZXROb2RlKClcbiAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIjpcIilcbiAgICAgIC5tYXAoTnVtYmVyKTtcbiAgICBjb25zdCBkdXJhdGlvbkluU2Vjb25kcyA9IG1pbnV0ZXMgKiA2MCArIHNlY29uZHM7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICByZXR1cm4gZHVyYXRpb25JblNlY29uZHM7XG4gIH1cblxuICByZXNldFRpbWVyKCkge1xuICAgIGlmICh0aGlzLnN0YXR1cykge1xuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICB9XG59XG5cbmNvbnN0IHRpbWVyID0gbmV3IFRpbWVyKCk7XG5leHBvcnQgeyB0aW1lciB9O1xuIiwiZnVuY3Rpb24gbWF4TGVuZ3RoKGFyck51bSkge1xuICBjb25zdCBvYmpMZW5ndGggPSB7XG4gICAgaG9yaXpvbnRhbDogMCxcbiAgICB2ZXJ0aWNhbDogMCxcbiAgfTtcbiAgY29uc3QgaG9yaXpvbnRhbExlbmdodCA9IChhcnJOdW0pID0+IHtcbiAgICBsZXQgbWF4TGVuZ3RoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyck51bS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyTnVtW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChhcnJOdW1baV1bal0gPT09IDEpIHtcbiAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGNvdW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgIG1heExlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXhMZW5ndGg7XG4gIH07XG4gIGNvbnN0IHZlcnRpY2FsTGVuZ2h0ID0gKGFyck51bSkgPT4ge1xuICAgIGxldCBtYXhMZW5ndGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTnVtWzBdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJOdW0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGFyck51bVtqXVtpXSA9PT0gMSkge1xuICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY291bnQpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgbWF4TGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1heExlbmd0aDtcbiAgfTtcbiAgb2JqTGVuZ3RoLmhvcml6b250YWwgPSBob3Jpem9udGFsTGVuZ2h0KGFyck51bSk7XG4gIG9iakxlbmd0aC52ZXJ0aWNhbCA9IHZlcnRpY2FsTGVuZ2h0KGFyck51bSk7XG4gIHJldHVybiBvYmpMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUyREFycmF5cyhhcnJheTEsIGFycmF5Mikge1xuICBpZiAoYXJyYXkxLmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkxLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5MVtpXS5sZW5ndGggIT09IGFycmF5MltpXS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyYXkxW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoYXJyYXkxW2ldW2pdICE9PSBhcnJheTJbaV1bal0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgbWF4TGVuZ3RoLCBjb21wYXJlMkRBcnJheXMgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2VsbC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NlbGwuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1wbGFjZS1pbmZvLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1wbGFjZS1pbmZvLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtcGxhY2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXBsYWNlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=