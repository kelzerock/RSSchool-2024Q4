"use strict";
(self["webpackChunknonograms"] = self["webpackChunknonograms"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/buttons.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/buttons.scss ***!
  \********************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.button {
  cursor: pointer;
  margin: 5px 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: var(--main-white);
  color: var(--main-black);
  transition: background-color 0.3s ease-in-out;
}
.button:hover {
  background-color: var(--main-gray);
}
.button:active {
  background-color: var(--main-light-black);
  color: var(--main-white);
}`, "",{"version":3,"sources":["webpack://./src/assets/style/buttons.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,mCAAA;EACA,wBAAA;EACA,6CAAA;AACF;AACE;EACE,kCAAA;AACJ;AAEE;EACE,yCAAA;EACA,wBAAA;AAAJ","sourcesContent":[".button {\n  cursor: pointer;\n  margin: 5px 10px;\n  padding: 10px 20px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--main-white);\n  color: var(--main-black);\n  transition: background-color 0.3s ease-in-out;\n\n  &:hover {\n    background-color: var(--main-gray);\n  }\n\n  &:active {\n    background-color: var(--main-light-black);\n    color: var(--main-white);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  background-color: var(--cell-bg-white);
  transition: background-color 0.3s ease-in-out;
}
.cell:nth-child(5n+1) {
  border-left: solid 2px var(--main-black);
}
.cell:nth-child(5n) {
  border-right: solid 2px var(--main-black);
}
.cell:first-child {
  border-left: solid 3px var(--main-black);
}
.cell:last-child {
  border-right: solid 3px var(--main-black);
}
.cell:hover {
  cursor: pointer;
}
.cell.cell-black {
  background-color: var(--cell-bg-black);
}
.cell.cell-cross {
  background: linear-gradient(to top left, rgba(0, 0, 0, 0) -10%, rgba(0, 0, 0, 0) calc(50% - 0.8px), rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 110%), linear-gradient(to top right, rgba(0, 0, 0, 0) -10%, rgba(0, 0, 0, 0) calc(50% - 0.8px), rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 110%);
  background-repeat: no-repeat;
}`, "",{"version":3,"sources":["webpack://./src/assets/style/cell.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,kCAAA;EACA,WAAA;EACA,sCAAA;EACA,6CAAA;AACF;AAEE;EACE,wCAAA;AAAJ;AAGE;EACE,yCAAA;AADJ;AAIE;EACE,wCAAA;AAFJ;AAKE;EACE,yCAAA;AAHJ;AAOE;EACE,eAAA;AALJ;AAQE;EACE,sCAAA;AANJ;AASE;EACE,uVACE;EAYF,4BAAA;AAnBJ","sourcesContent":[".cell {\n  width: 20px;\n  height: 20px;\n  border: 1px solid var(--main-gray);\n  margin: 0px;\n  background-color: var(--cell-bg-white);\n  transition: background-color 0.3s ease-in-out;\n\n\n  &:nth-child(5n + 1) {\n    border-left: solid 2px var(--main-black);\n  }\n\n  &:nth-child(5n) {\n    border-right: solid 2px var(--main-black);\n  }\n\n  &:first-child {\n    border-left: solid 3px var(--main-black);\n  }\n\n  &:last-child {\n    border-right: solid 3px var(--main-black);\n  }\n\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &.cell-black {\n    background-color: var(--cell-bg-black);\n  }\n\n  &.cell-cross {\n    background:\n      linear-gradient(to top left,\n        rgba(0, 0, 0, 0) -10%,\n        rgba(0, 0, 0, 0) calc(50% - 0.8px),\n        rgb(0, 0, 0, 1) 50%,\n        rgba(0, 0, 0, 0) calc(50% + 0.8px),\n        rgba(0, 0, 0, 0) 110%),\n      linear-gradient(to top right,\n        rgba(0, 0, 0, 0) -10%,\n        rgba(0, 0, 0, 0) calc(50% - 0.8px),\n        rgba(0, 0, 0, 1) 50%,\n        rgba(0, 0, 0, 0) calc(50% + 0.8px),\n        rgba(0, 0, 0, 0) 110%);\n    background-repeat: no-repeat;\n  }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/controls-panel.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/controls-panel.scss ***!
  \***************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.controls-panel {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: solid 3px var(--main-light-white);
  background-color: var(--main-light-black);
}`, "",{"version":3,"sources":["webpack://./src/assets/style/controls-panel.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,yCAAA;EACA,yCAAA;AACF","sourcesContent":[".controls-panel {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  border: solid 3px var(--main-light-white);\n  background-color: var(--main-light-black);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/footer.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/footer.scss ***!
  \*******************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.footer {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: var(--main-light-black);
  color: var(--main-white);
  font-size: 24px;
}
.footer .footer-link {
  text-decoration: none;
  color: var(--main-white);
}
.footer .footer-link:hover {
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/assets/style/footer.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,yCAAA;EACA,wBAAA;EACA,eAAA;AACF;AACE;EACE,qBAAA;EACA,wBAAA;AACJ;AACI;EACE,eAAA;AACN","sourcesContent":[".footer {\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  background-color: var(--main-light-black);\n  color: var(--main-white);\n  font-size: 24px;\n\n  .footer-link {\n    text-decoration: none;\n    color: var(--main-white);\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n}"],"sourceRoot":""}]);
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
  border-right: solid 2px var(--main-black);
}
.game-place-info.up .column:nth-child(5n+1) {
  border-left: solid 2px var(--main-black);
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
  border-bottom: solid 2px var(--main-black);
}
.game-place-info.left .column:nth-child(5n+1) {
  border-top: solid 2px var(--main-black);
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
}`, "",{"version":3,"sources":["webpack://./src/assets/style/game-place-info.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,kCAAA;AACF;AACE;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;AACJ;AAIM;EACE,yBAAA;AAFR;AAIQ;EACE,yBAAA;AAFV;AAQE;EACE,uBAAA;EACA,eAAA;EACA,kBAAA;AANJ;AASE;EACE,mBAAA;EACA,mBAAA;AAPJ;AASI;EACE,sBAAA;EACA,uBAAA;EACA,wCAAA;EACA,uCAAA;AAPN;AASM;EACE,yCAAA;AAPR;AAUM;EACE,wCAAA;AARR;AAWM;EACE,iBAAA;AATR;AAYM;EACE,kBAAA;AAVR;AAaM;EACE,sCAAA;AAXR;AAaQ;EACE,gBAAA;AAXV;AAiBE;EACE,sBAAA;EACA,kBAAA;AAfJ;AAiBI;EACE,mBAAA;EACA,wBAAA;EACA,yCAAA;EACA,sCAAA;AAfN;AAiBM;EACE,0CAAA;AAfR;AAkBM;EACE,uCAAA;AAhBR;AAmBM;EACE,gBAAA;AAjBR;AAoBM;EACE,mBAAA;AAlBR;AAqBM;EACE,uCAAA;AAnBR;AAqBQ;EACE,iBAAA;AAnBV;;AA0BA;EACE,yBAAA;AAvBF;AAyBE;EACE,yBAAA;AAvBJ","sourcesContent":[".game-place-info {\n  display: flex;\n  border: solid 3px var(--main-gray);\n\n  .column {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n\n\n    &.active {\n\n      .sell-info {\n        background-color: #dddddd;\n\n        &.empty {\n          background-color: #e6e6e6;\n        }\n      }\n    }\n  }\n\n  .sell-info {\n    width: var(--cell-size);\n    aspect-ratio: 1;\n    text-align: center;\n  }\n\n  &.up {\n    flex-direction: row;\n    border-bottom: none;\n\n    & .column {\n      flex-direction: column;\n      width: var(--cell-size);\n      border-right: solid 1px var(--main-gray);\n      border-left: solid 1px var(--main-gray);\n\n      &:nth-child(5n) {\n        border-right: solid 2px var(--main-black);\n      }\n\n      &:nth-child(5n+1) {\n        border-left: solid 2px var(--main-black);\n      }\n\n      &:first-child {\n        border-left: none;\n      }\n\n      &:last-child {\n        border-right: none;\n      }\n\n      .sell-info {\n        border-top: solid 2px var(--main-gray);\n\n        &:first-child {\n          border-top: none;\n        }\n      }\n    }\n  }\n\n  &.left {\n    flex-direction: column;\n    border-right: none;\n\n    & .column {\n      flex-direction: row;\n      height: var(--cell-size);\n      border-bottom: solid 1px var(--main-gray);\n      border-top: solid 1px var(--main-gray);\n\n      &:nth-child(5n) {\n        border-bottom: solid 2px var(--main-black);\n      }\n\n      &:nth-child(5n+1) {\n        border-top: solid 2px var(--main-black);\n      }\n\n      &:first-child {\n        border-top: none;\n      }\n\n      &:last-child {\n        border-bottom: none;\n      }\n\n      .sell-info {\n        border-left: solid 2px var(--main-gray);\n\n        &:first-child {\n          border-left: none;\n        }\n      }\n    }\n  }\n}\n\n.sell-info {\n  background-color: #c4c4c4;\n\n  &.empty {\n    background-color: #dadada;\n  }\n}"],"sourceRoot":""}]);
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
  background-color: var(--main-white);
}
.row {
  display: flex;
  flex-direction: row;
}
.row:nth-child(5n+1) .cell {
  border-top: solid 2px var(--main-black);
}
.row:nth-child(5n) .cell {
  border-bottom: solid 2px var(--main-black);
}
.row:first-child .cell {
  border-top: solid 3px var(--main-black);
}
.row:last-child .cell {
  border-bottom: solid 3px var(--main-black);
}`, "",{"version":3,"sources":["webpack://./src/assets/style/game-place.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,aAAA;EACA,kCAAA;EACA,4DAAA;EACA,mCAAA;AACF;AAKA;EACE,aAAA;EACA,mBAAA;AAHF;AAKE;EACE,uCAAA;AAHJ;AAME;EACE,0CAAA;AAJJ;AAOE;EACE,uCAAA;AALJ;AAQE;EACE,0CAAA;AANJ","sourcesContent":[".game-place {\n  margin: 20px auto;\n  display: grid;\n  grid-auto-rows: minmax(20px, auto);\n  grid-template-columns: minmax(20px, auto) minmax(20px, auto);\n  background-color: var(--main-white);\n\n\n  .game-place-main {}\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n\n  &:nth-child(5n + 1) .cell {\n    border-top: solid 2px var(--main-black);\n  }\n\n  &:nth-child(5n) .cell {\n    border-bottom: solid 2px var(--main-black);\n  }\n\n  &:first-child .cell {\n    border-top: solid 3px var(--main-black);\n  }\n\n  &:last-child .cell {\n    border-bottom: solid 3px var(--main-black);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/header.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/header.scss ***!
  \*******************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: var(--main-light-black);
  color: var(--main-white);
  font-size: 24px;
}`, "",{"version":3,"sources":["webpack://./src/assets/style/header.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,yCAAA;EACA,wBAAA;EACA,eAAA;AACF","sourcesContent":[".header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  background-color: var(--main-light-black);\n  color: var(--main-white);\n  font-size: 24px;\n}"],"sourceRoot":""}]);
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
  --main-gray: #cfcfcf;
  --dark-gray: #868686;
  --main-black: #414141;
  --main-light-black: #7a7272;
  --main-white: #fff;
  --main-light-white: #f0f0f0;
  --main-olive: #9ba38c;
  --cell-size: 20px;
  --cell-bg-black: #77762f;
  --cell-bg-white: #e4e3a8;
}

* {
  box-sizing: content-box;
}

body {
  margin: 0;
}

.dark-theme {
  --main-gray: darkgray;
  --dark-gray: #585858;
  --main-black: #000000;
  --main-light-black: #333;
  --main-white: #fff;
  --main-light-white: #f0f0f0;
  --main-olive: #636959;
  --cell-bg-black: #666161;
  --cell-bg-white: #e0de53;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--main-olive);
}

.message-place {
  margin-top: -3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 3px var(--main-light-white);
  background-color: var(--main-light-black);
}
.message-place .message-box {
  padding: 10px 20px;
  font-size: 24px;
  color: var(--main-white);
}`, "",{"version":3,"sources":["webpack://./src/assets/style/main.scss"],"names":[],"mappings":"AAAA;EACE,oBAAA;EACA,oBAAA;EACA,qBAAA;EACA,2BAAA;EACA,kBAAA;EACA,2BAAA;EACA,qBAAA;EACA,iBAAA;EACA,wBAAA;EACA,wBAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,SAAA;AACF;;AAEA;EACE,qBAAA;EACA,oBAAA;EACA,qBAAA;EACA,wBAAA;EACA,kBAAA;EACA,2BAAA;EACA,qBAAA;EACA,wBAAA;EACA,wBAAA;AACF;;AAEA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mCAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,yCAAA;EACA,yCAAA;AACF;AACE;EACE,kBAAA;EACA,eAAA;EACA,wBAAA;AACJ","sourcesContent":[":root {\n  --main-gray: #cfcfcf;\n  --dark-gray: #868686;\n  --main-black: #414141;\n  --main-light-black: #7a7272;\n  --main-white: #fff;\n  --main-light-white: #f0f0f0;\n  --main-olive: #9ba38c;\n  --cell-size: 20px;\n  --cell-bg-black: #77762f;\n  --cell-bg-white: #e4e3a8;\n}\n\n* {\n  box-sizing: content-box;\n}\n\nbody {\n  margin: 0;\n}\n\n.dark-theme {\n  --main-gray: darkgray;\n  --dark-gray: #585858;\n  --main-black: #000000;\n  --main-light-black: #333;\n  --main-white: #fff;\n  --main-light-white: #f0f0f0;\n  --main-olive: #636959;\n  --cell-bg-black: #666161;\n  --cell-bg-white: #e0de53;\n}\n\n.wrapper {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--main-olive);\n}\n\n.message-place {\n  margin-top: -3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border: solid 3px var(--main-light-white);\n  background-color: var(--main-light-black);\n\n  .message-box {\n    padding: 10px 20px;\n    font-size: 24px;\n    color: var(--main-white);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/message-down-box.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/message-down-box.scss ***!
  \*****************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.message-down-box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 10px;
  background-color: var(--main-light-black);
  color: var(--main-white);
  font-size: 24px;
}

.info-row {
  display: grid;
  grid-template-columns: 100px repeat(3, 1fr);
  gap: 5px;
  justify-content: space-between;
}
.info-row .info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: solid 1px var(--main-white);
  padding: 5px 10px;
}
.info-row .id {
  order: -1;
}

@media (max-width: 700px) {
  .message-down-box {
    font-size: 14px;
  }
  .message-down-box .info-row {
    grid-template-columns: 70px repeat(3, 1fr);
  }
  .message-down-box .id {
    order: -1;
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/style/message-down-box.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,uBAAA;EACA,aAAA;EACA,yCAAA;EACA,wBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,2CAAA;EACA,QAAA;EACA,8BAAA;AACF;AACE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,mCAAA;EACA,iBAAA;AACJ;AAGE;EACE,SAAA;AADJ;;AAMA;EACE;IACE,eAAA;EAHF;EAKE;IACE,0CAAA;EAHJ;EAME;IACE,SAAA;EAJJ;AACF","sourcesContent":[".message-down-box {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n  padding: 10px;\n  background-color: var(--main-light-black);\n  color: var(--main-white);\n  font-size: 24px;\n}\n\n.info-row {\n  display: grid;\n  grid-template-columns: 100px repeat(3, 1fr);\n  gap: 5px;\n  justify-content: space-between;\n\n  .info {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    border: solid 1px var(--main-white);\n    padding: 5px 10px;\n\n  }\n\n  .id {\n    order: -1;\n  }\n}\n\n\n@media (max-width: 700px) {\n  .message-down-box {\n    font-size: 14px;\n\n    .info-row {\n      grid-template-columns: 70px repeat(3, 1fr);\n    }\n\n    .id {\n      order: -1;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/select.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/select.scss ***!
  \*******************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.select-place {
  position: relative;
  padding: 10px 10px;
}

.fieldset {
  border: solid 2px var(--main-light-white);
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  column-gap: 10px;
  background-color: var(--main-light-black);
  color: var(--main-light-white);
}

.label {
  font-size: 16px;
  font-weight: bold;
}

.select {
  font-size: 16px;
  padding: 5px 10px;
  outline: none;
}`, "",{"version":3,"sources":["webpack://./src/assets/style/select.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,kBAAA;AACF;;AAEA;EACE,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;EACA,gBAAA;EACA,yCAAA;EACA,8BAAA;AACF;;AAEA;EACE,eAAA;EACA,iBAAA;AACF;;AAEA;EACE,eAAA;EACA,iBAAA;EAEA,aAAA;AAAF","sourcesContent":[".select-place {\n  position: relative;\n  padding: 10px 10px;\n}\n\n.fieldset {\n  border: solid 2px var(--main-light-white);\n  position: relative;\n  border-radius: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 10px;\n  column-gap: 10px;\n  background-color: var(--main-light-black);\n  color: var(--main-light-white);\n}\n\n.label {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.select {\n  font-size: 16px;\n  padding: 5px 10px;\n  // font-weight: bold;\n  outline: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/timer.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/timer.scss ***!
  \******************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.timer {
  font-size: 1.5rem;
  padding: 10px 5px;
  color: var(--main-white);
}`, "",{"version":3,"sources":["webpack://./src/assets/style/timer.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,iBAAA;EACA,wBAAA;AACF","sourcesContent":[".timer {\n  font-size: 1.5rem;\n  padding: 10px 5px;\n  color: var(--main-white);\n}"],"sourceRoot":""}]);
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
/* harmony export */   arrowUp: () => (/* binding */ arrowUp),
/* harmony export */   bigCross: () => (/* binding */ bigCross),
/* harmony export */   calculator: () => (/* binding */ calculator),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   figure_1: () => (/* binding */ figure_1),
/* harmony export */   figure_2: () => (/* binding */ figure_2),
/* harmony export */   figure_3: () => (/* binding */ figure_3),
/* harmony export */   fox: () => (/* binding */ fox),
/* harmony export */   giraffe: () => (/* binding */ giraffe),
/* harmony export */   goat: () => (/* binding */ goat),
/* harmony export */   heart: () => (/* binding */ heart),
/* harmony export */   hedgehog: () => (/* binding */ hedgehog),
/* harmony export */   house: () => (/* binding */ house),
/* harmony export */   img_1: () => (/* binding */ img_1),
/* harmony export */   smile: () => (/* binding */ smile),
/* harmony export */   snake: () => (/* binding */ snake),
/* harmony export */   square: () => (/* binding */ square)
/* harmony export */ });
const square = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];
const cross = [
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1],
];
const figure_1 = [
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];
const figure_2 = [
  [0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
];
const figure_3 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];
const giraffe = [
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 0, 1],
];
const heart = [
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const smile = [
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const house = [
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const arrowUp = [
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const bigCross = [
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const img_1 = [
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
];
const fox = [
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const calculator = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const snake = [
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const goat = [
  [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
  [1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
];

const hedgehog = [
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
];


/***/ }),

/***/ "./src/constants/map/playerMap.js":
/*!****************************************!*\
  !*** ./src/constants/map/playerMap.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playerMap: () => (/* binding */ playerMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./src/constants/map/map.js");


const playerMap = {
  easy: {
    name: "easy",
    maps: { square: _map__WEBPACK_IMPORTED_MODULE_0__.square, cross: _map__WEBPACK_IMPORTED_MODULE_0__.cross, figure_1: _map__WEBPACK_IMPORTED_MODULE_0__.figure_1, figure_2: _map__WEBPACK_IMPORTED_MODULE_0__.figure_2, figure_3: _map__WEBPACK_IMPORTED_MODULE_0__.figure_3, giraffe: _map__WEBPACK_IMPORTED_MODULE_0__.giraffe },
  },
  medium: {
    name: "medium",
    maps: { heart: _map__WEBPACK_IMPORTED_MODULE_0__.heart, smile: _map__WEBPACK_IMPORTED_MODULE_0__.smile, house: _map__WEBPACK_IMPORTED_MODULE_0__.house, arrowUp: _map__WEBPACK_IMPORTED_MODULE_0__.arrowUp, bigCross: _map__WEBPACK_IMPORTED_MODULE_0__.bigCross, img_1: _map__WEBPACK_IMPORTED_MODULE_0__.img_1 },
  },
  hard: {
    name: "hard",
    maps: { fox: _map__WEBPACK_IMPORTED_MODULE_0__.fox, calculator: _map__WEBPACK_IMPORTED_MODULE_0__.calculator, snake: _map__WEBPACK_IMPORTED_MODULE_0__.snake, goat: _map__WEBPACK_IMPORTED_MODULE_0__.goat, hedgehog: _map__WEBPACK_IMPORTED_MODULE_0__.hedgehog },
  },
};




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
/* harmony import */ var _js_controlsPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/controlsPanel */ "./src/js/controlsPanel.js");
/* harmony import */ var _js_messageDownBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/messageDownBox */ "./src/js/messageDownBox.js");
const { Component } = __webpack_require__(/*! ./js/node */ "./src/js/node.js");








const wrapper = new Component(
  { tag: "div", className: "wrapper" },
  _js_header__WEBPACK_IMPORTED_MODULE_3__.header,
  _js_controlsPanel__WEBPACK_IMPORTED_MODULE_5__.controlsPanel,
  new Component(
    { tag: "div", className: "message-place" },
    _js_gamePlace__WEBPACK_IMPORTED_MODULE_2__.messageBox,
    _js_gamePlace__WEBPACK_IMPORTED_MODULE_2__.messageInfoGame
  ),
  _js_gamePlace__WEBPACK_IMPORTED_MODULE_2__.gamePlace,
  _js_messageDownBox__WEBPACK_IMPORTED_MODULE_6__.messagePlace,
  _js_footer__WEBPACK_IMPORTED_MODULE_4__.footer
);
document.body.append(wrapper.getNode());

window.addEventListener("load", () => {
  const theme = localStorage.getItem("color-theme");
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  }

  _js_messageDownBox__WEBPACK_IMPORTED_MODULE_6__.messagePlace.load();
  // const winner = localStorage.getItem("winner");
  // if (winner) {
  //   const data = JSON.parse(winner);
  //   messagePlace.addInfo(data);
  // }
});


/***/ }),

/***/ "./src/js/buttons.js":
/*!***************************!*\
  !*** ./src/js/buttons.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeThemeButton: () => (/* binding */ changeThemeButton),
/* harmony export */   loadGameButton: () => (/* binding */ loadGameButton),
/* harmony export */   newGameButton: () => (/* binding */ newGameButton),
/* harmony export */   randomGameButton: () => (/* binding */ randomGameButton),
/* harmony export */   resetGameButton: () => (/* binding */ resetGameButton),
/* harmony export */   saveGameButton: () => (/* binding */ saveGameButton),
/* harmony export */   solutionButton: () => (/* binding */ solutionButton),
/* harmony export */   startNewGame: () => (/* binding */ startNewGame)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/js/node.js");
/* harmony import */ var _assets_style_buttons_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style/buttons.scss */ "./src/assets/style/buttons.scss");
/* harmony import */ var _soundFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./soundFunc */ "./src/js/soundFunc.js");




class Button extends _node__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor({ tag = "button", className = "", text = "" }, ...children) {
    super({ tag, className: `button ${className}`, text }, ...children);
    this.addListener("click", _soundFunc__WEBPACK_IMPORTED_MODULE_2__.soundButtonClick);
  }

  hideButton() {
    this.getNode().style.display = "none";
  }

  showButton() {
    this.getNode().style.display = "block";
  }
}

const resetGameButton = new Button({
  tag: "button",
  className: "reset-game-button",
  text: "Reset Game",
});

const randomGameButton = new Button({
  tag: "button",
  className: "random-game-button",
  text: "Random Game",
});

const newGameButton = new Button({
  tag: "button",
  className: "new-game-button",
  text: "New Game",
});

const startNewGame = new Button({
  tag: "button",
  className: "start-new-game-button",
  text: "Start New Game",
});

const solutionButton = new Button({
  tag: "button",
  className: "solution-button",
  text: "Solution",
});

const changeThemeButton = new Button({
  tag: "button",
  className: "change-theme-button",
  text: "Change Theme to Dark",
});

const saveGameButton = new Button({
  tag: "button",
  className: "save-game-button",
  text: "Save Game",
});

const loadGameButton = new Button({
  tag: "button",
  className: "load-game-button",
  text: "Load Game",
});

window.addEventListener("load", () => {
  const theme = localStorage.getItem("color-theme");
  if (theme === "dark") {
    changeThemeButton.setTextContent("Change Theme to Light");
    document.body.classList.add("dark-theme");
  }
  const saveGame = localStorage.getItem("state");
  if (saveGame) {
    loadGameButton.show();
  } else {
    loadGameButton.hide();
  }
});

solutionButton.hideButton();
newGameButton.hideButton();
resetGameButton.hideButton();
saveGameButton.hideButton();

newGameButton.addListener("click", () => {
  startNewGame.showButton();
  resetGameButton.hideButton();
  newGameButton.hideButton();
  solutionButton.hideButton();
  randomGameButton.showButton();
  saveGameButton.hideButton();
});

startNewGame.addListener("click", () => {
  startNewGame.hideButton();
  resetGameButton.showButton();
  newGameButton.showButton();
  solutionButton.showButton();
  randomGameButton.hideButton();
  saveGameButton.showButton();
  if (localStorage.getItem("state")) {
    loadGameButton.showButton();
  }
});

randomGameButton.addListener("click", () => {
  startNewGame.hideButton();
  resetGameButton.showButton();
  newGameButton.showButton();
  solutionButton.showButton();
  randomGameButton.hideButton();
  saveGameButton.showButton();
  if (localStorage.getItem("state")) {
    loadGameButton.showButton();
  }
});

changeThemeButton.addListener("click", () => {
  if (changeThemeButton.getNode().textContent === "Change Theme to Dark") {
    changeThemeButton.setTextContent("Change Theme to Light");
    document.body.classList.add("dark-theme");
    localStorage.setItem("color-theme", "dark");
  } else {
    changeThemeButton.setTextContent("Change Theme to Dark");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("color-theme", "light");
  }
});

loadGameButton.addListener("click", () => {
  startNewGame.hideButton();
  resetGameButton.showButton();
  newGameButton.showButton();
  solutionButton.showButton();
  randomGameButton.hideButton();
  saveGameButton.showButton();
});

saveGameButton.addListener("click", () => {
  loadGameButton.showButton();
});

solutionButton.addListener("click", () => {
  saveGameButton.hide();
});

resetGameButton.addListener("click", () => {
  saveGameButton.showButton();
  if (localStorage.getItem("state")) {
    loadGameButton.showButton();
  }
});




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
/* harmony import */ var _soundFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./soundFunc */ "./src/js/soundFunc.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ "./src/js/timer.js");





class Cell extends _node__WEBPACK_IMPORTED_MODULE_0__.Component {
  checkedClass = "cell-black";
  crossClass = "cell-cross";
  constructor(state, dataBlack) {
    super({ tag: "span", className: "cell" });
    this.dataBlack = dataBlack;
    this.state = state;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch (e.type) {
      case "click":
        this.toggleCheckedClass();
        this.setDataBlack();
        this.soundPlayGame();
        this.startTimer();
        break;
      case "contextmenu":
        e.preventDefault();
        this.startTimer();
        this.toggleCrossClass();
        this.setDataBlack();
        this.soundPlayGame();
        break;
    }
  }

  startTimer() {
    if (!_timer__WEBPACK_IMPORTED_MODULE_3__.timer.getStatus()) _timer__WEBPACK_IMPORTED_MODULE_3__.timer.startTimer();
  }

  soundPlayGame() {
    (0,_soundFunc__WEBPACK_IMPORTED_MODULE_2__.soundPlayGame)();
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

  resetState() {
    this.getNode().classList.remove(this.checkedClass);
    this.getNode().classList.remove(this.crossClass);
    this.dataBlack = false;
    this.setDataBlack();
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

  viewSolution() {
    const [rowAttribute, colAttribute] = this.getCoordinates();
    const isBlack = this.state.rightMap[rowAttribute][colAttribute];
    this.getNode().classList.remove(this.checkedClass);
    this.getNode().classList.remove(this.crossClass);
    if (isBlack) {
      this.getNode().classList.add(this.checkedClass);
    } else {
      this.getNode().classList.add(this.crossClass);
    }
  }

  viewSavedState() {
    const [rowAttribute, colAttribute] = this.getCoordinates();
    const isBlack = this.state.mapData[rowAttribute][colAttribute];
    if (isBlack) {
      this.getNode().classList.add(this.checkedClass);
    } else {
      this.getNode().classList.remove(this.checkedClass);
      this.getNode().classList.remove(this.crossClass);
    }
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

/***/ "./src/js/controlsPanel.js":
/*!*********************************!*\
  !*** ./src/js/controlsPanel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controlsPanel: () => (/* binding */ controlsPanel)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/js/node.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./src/js/timer.js");
/* harmony import */ var _assets_style_controls_panel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/style/controls-panel.scss */ "./src/assets/style/controls-panel.scss");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons */ "./src/js/buttons.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select */ "./src/js/select.js");






class ControlsPanel extends _node__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super({
      tag: "div",
      className: "controls-panel",
    });
  }
}

const controlsPanel = new ControlsPanel();
controlsPanel.appendChildren([
  _timer__WEBPACK_IMPORTED_MODULE_1__.timer,
  _buttons__WEBPACK_IMPORTED_MODULE_3__.startNewGame,
  _buttons__WEBPACK_IMPORTED_MODULE_3__.newGameButton,
  _buttons__WEBPACK_IMPORTED_MODULE_3__.solutionButton,
  _buttons__WEBPACK_IMPORTED_MODULE_3__.resetGameButton,
  _select__WEBPACK_IMPORTED_MODULE_4__.divSelectLevel,
  _select__WEBPACK_IMPORTED_MODULE_4__.divSelectMapName,
  _buttons__WEBPACK_IMPORTED_MODULE_3__.randomGameButton,
  _buttons__WEBPACK_IMPORTED_MODULE_3__.saveGameButton,
  _buttons__WEBPACK_IMPORTED_MODULE_3__.loadGameButton,
]);




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
/* harmony import */ var _assets_style_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style/footer.scss */ "./src/assets/style/footer.scss");



const link = new _node__WEBPACK_IMPORTED_MODULE_0__.Component({
  tag: "a",
  className: "footer-link",
  text: "Created by Zhuchkov Aleksei, 2025",
  attributes: { href: "https://github.com/zhuchkov" },
});

link.getNode().setAttribute("target", "_blank");
link.getNode().setAttribute("href", "https://github.com/zhuchkov");

const footer = new _node__WEBPACK_IMPORTED_MODULE_0__.Component(
  {
    tag: "footer",
    className: "footer",
    text: "",
  },
  link
);




/***/ }),

/***/ "./src/js/gamePlace.js":
/*!*****************************!*\
  !*** ./src/js/gamePlace.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamePlace: () => (/* binding */ GamePlace),
/* harmony export */   gamePlace: () => (/* binding */ gamePlace),
/* harmony export */   messageBox: () => (/* binding */ messageBox),
/* harmony export */   messageInfoGame: () => (/* binding */ messageInfoGame)
/* harmony export */ });
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constant */ "./src/constants/constant.js");
/* harmony import */ var _constants_map_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/map/map */ "./src/constants/map/map.js");
/* harmony import */ var _constants_map_playerMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/map/playerMap */ "./src/constants/map/playerMap.js");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/function */ "./src/utils/function.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons */ "./src/js/buttons.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cell */ "./src/js/cell.js");
/* harmony import */ var _gamePlaceInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gamePlaceInfo */ "./src/js/gamePlaceInfo.js");
/* harmony import */ var _messageDownBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messageDownBox */ "./src/js/messageDownBox.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node */ "./src/js/node.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select */ "./src/js/select.js");
/* harmony import */ var _soundFunc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./soundFunc */ "./src/js/soundFunc.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timer */ "./src/js/timer.js");













const state = { cells: {}, level: null, mapName: null, rightMap: null };
const messageBox = new _node__WEBPACK_IMPORTED_MODULE_8__.Component({
  tag: "span",
  className: "message-box",
  text: "",
});
messageBox.hide();
const messageInfoGame = new _node__WEBPACK_IMPORTED_MODULE_8__.Component({
  tag: "span",
  className: "message-box",
  text: "",
});
messageInfoGame.hide();
messageBox.hide();

class GamePlace extends _node__WEBPACK_IMPORTED_MODULE_8__.Component {
  constructor({ state, map }, ...children) {
    super({ tag: "div", className: "game-place" }, ...children);
    this.state = state;
    this.map = map;
    this.win = false;
    this.createMap();

    this.addListener("contextmenu", (e) => {
      e.preventDefault();
    });

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
        // if (!timer.getStatus()) timer.startTimer();
        let check = (0,_utils_function__WEBPACK_IMPORTED_MODULE_3__.compare2DArrays)(this.map, this.state.mapData);
        if (check && !this.win) {
          const durationInSeconds = _timer__WEBPACK_IMPORTED_MODULE_11__.timer.stopTimer();
          messageBox.setTextContent(
            "You win! Time: " + durationInSeconds + " seconds"
          );
          const winner = localStorage.getItem("winner");
          const data = {
            time: durationInSeconds + " seconds",
            name: this.state.mapName,
            level: this.state.level,
            id: null,
          };
          if (!winner) {
            data.id = 0;
            localStorage.setItem("winner", JSON.stringify([data]));
          } else {
            const saveWinners = JSON.parse(winner);
            const maxId = saveWinners.reduce(
              (max, item) => (item.id > max ? item.id : max),
              0
            );
            data.id = maxId + 1;
            const minId = saveWinners.reduce(
              (min, item) => (item.id < min ? item.id : min),
              Infinity
            );

            if (saveWinners.length < 5) {
              saveWinners.push(data);
              localStorage.setItem(
                "winner",
                JSON.stringify(
                  saveWinners.sort(
                    (a, b) => parseInt(a.time) - parseInt(b.time)
                  )
                )
              );
            } else {
              // while (saveWinners.length > 4) {
              //   saveWinners.shift();
              // }s
              saveWinners.push(data);
              const filteredWinners = saveWinners.filter(
                (item) => item.id > minId
              );
              localStorage.setItem(
                "winner",
                JSON.stringify(
                  filteredWinners.sort(
                    (a, b) => parseInt(a.time) - parseInt(b.time)
                  )
                )
              );
            }
          }
          _messageDownBox__WEBPACK_IMPORTED_MODULE_7__.messagePlace.load();
          if (!this.win) {
            (0,_soundFunc__WEBPACK_IMPORTED_MODULE_10__.soundPlayWin)();
            _buttons__WEBPACK_IMPORTED_MODULE_4__.loadGameButton.hide();
            _buttons__WEBPACK_IMPORTED_MODULE_4__.saveGameButton.hide();
          }
          this.win = true;
          _buttons__WEBPACK_IMPORTED_MODULE_4__.solutionButton.hide();
          messageBox.show();
          Object.values(this.state.cells).forEach((value) => {
            value.removeListener("click", value.handleClick);
            value.removeListener("contextmenu", value.handleClick);
          });
        }
      }
    });
  }

  createMap() {
    this.win = false;
    messageInfoGame.setTextContent(
      `Name map: "${this.state.mapName}", level: "${this.state.level}", size: ${this.map.length}x${this.map[0].length}`
    );
    messageBox.hide();
    this.state.rightMap = this.map;
    this.state.mapData = Array.from({ length: this.map.length }, () =>
      Array(this.map[0].length).fill(0)
    );
    const gamePlaceMain = new _node__WEBPACK_IMPORTED_MODULE_8__.Component({
      tag: "div",
      className: "game-place-main",
    });
    const gamePlaceBlock = new _node__WEBPACK_IMPORTED_MODULE_8__.Component({
      tag: "div",
      className: "game-place-block",
    });
    const gamePlaceHeaderInfo = new _gamePlaceInfo__WEBPACK_IMPORTED_MODULE_6__.GamePlaceInfo({
      state: this.state,
      map: this.map,
      direction: _constants_constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.up,
    });
    const gamePlaceLeftInfo = new _gamePlaceInfo__WEBPACK_IMPORTED_MODULE_6__.GamePlaceInfo({
      state: this.state,
      map: this.map,
      direction: _constants_constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.left,
    });
    this.state.cells = {};
    this.map.forEach((row, index) => {
      const elementInRow = [];
      row.forEach((cell, jIndex) => {
        const data = cell ? true : false;
        const cellNode = new _cell__WEBPACK_IMPORTED_MODULE_5__.Cell(this.state, data);
        cellNode.getNode().setAttribute("data-row", index);
        cellNode.getNode().setAttribute("data-col", jIndex);
        elementInRow.push(cellNode);
        this.state.cells[`${index}-${jIndex}`] = cellNode;
        cellNode.addListener("click", cellNode.handleClick);
        cellNode.addListener("contextmenu", cellNode.handleClick);
      });
      gamePlaceMain.append(
        new _node__WEBPACK_IMPORTED_MODULE_8__.Component({ tag: "div", className: "row" }, ...elementInRow)
      );
    });
    this.appendChildren([
      gamePlaceBlock,
      gamePlaceHeaderInfo,
      gamePlaceLeftInfo,
      gamePlaceMain,
    ]);
  }

  resetMap() {
    Object.values(this.state.cells).forEach((value) => {
      value.addListener("click", value.handleClick);
      value.addListener("contextmenu", value.handleClick);
      value.resetState();
    });
    _timer__WEBPACK_IMPORTED_MODULE_11__.timer.resetTimer();
    messageBox.hide();
  }

  viewSavedMap(sec) {
    Object.values(this.state.cells).forEach((value) => {
      value.viewSavedState();
    });
  }

  viewSolution() {
    Object.values(this.state.cells).forEach((value) => {
      value.removeListener("click", value.handleClick);
      value.removeListener("contextmenu", value.handleClick);
      value.viewSolution();
    });
    _timer__WEBPACK_IMPORTED_MODULE_11__.timer.resetTimer();
  }

  hideMap() {
    this.getNode().style.display = "none";
  }

  viewMap() {
    this.getNode().style.display = "grid";
  }
}

const gamePlace = new GamePlace({
  state,
  map: Object.values(Object.values(_constants_map_playerMap__WEBPACK_IMPORTED_MODULE_2__.playerMap)[0].maps)[0],
});
gamePlace.hide();

// buttons logic

_buttons__WEBPACK_IMPORTED_MODULE_4__.resetGameButton.addListener("click", () => {
  gamePlace.win = false;
  gamePlace.resetMap();
  _buttons__WEBPACK_IMPORTED_MODULE_4__.solutionButton.show();
  _messageDownBox__WEBPACK_IMPORTED_MODULE_7__.messagePlace.hide();
});

_buttons__WEBPACK_IMPORTED_MODULE_4__.newGameButton.addListener("click", () => {
  messageBox.hide();
  messageInfoGame.hide();
  gamePlace.hideMap();
  _select__WEBPACK_IMPORTED_MODULE_9__.divSelectLevel.show();
  _select__WEBPACK_IMPORTED_MODULE_9__.divSelectMapName.show();
  _timer__WEBPACK_IMPORTED_MODULE_11__.timer.hide();
  _messageDownBox__WEBPACK_IMPORTED_MODULE_7__.messagePlace.show("flex");
  _messageDownBox__WEBPACK_IMPORTED_MODULE_7__.messagePlace.load();
});

const algorithmToStartGame = (map) => {
  gamePlace.viewMap();
  gamePlace.destroyChildren();
  _select__WEBPACK_IMPORTED_MODULE_9__.divSelectLevel.hide();
  _select__WEBPACK_IMPORTED_MODULE_9__.divSelectMapName.hide();
  _timer__WEBPACK_IMPORTED_MODULE_11__.timer.show();
  _timer__WEBPACK_IMPORTED_MODULE_11__.timer.resetTimer();
  gamePlace.map = map;
  gamePlace.createMap();
};

_buttons__WEBPACK_IMPORTED_MODULE_4__.startNewGame.addListener("click", () => {
  const level = _select__WEBPACK_IMPORTED_MODULE_9__.divSelectLevel.getNode().querySelector("select").value;
  const mapName = _select__WEBPACK_IMPORTED_MODULE_9__.divSelectMapName.getNode().querySelector("select").value;
  state.level = level;
  state.mapName = mapName;
  const map = _constants_map_playerMap__WEBPACK_IMPORTED_MODULE_2__.playerMap[level].maps[mapName];
  algorithmToStartGame(map);
  messageInfoGame.show();
  _messageDownBox__WEBPACK_IMPORTED_MODULE_7__.messagePlace.hide();
});

_buttons__WEBPACK_IMPORTED_MODULE_4__.randomGameButton.addListener("click", () => {
  const levelInd = (0,_utils_function__WEBPACK_IMPORTED_MODULE_3__.randomIntFromInterval)(0, Object.keys(_constants_map_playerMap__WEBPACK_IMPORTED_MODULE_2__.playerMap).length - 1);
  const level = Object.keys(_constants_map_playerMap__WEBPACK_IMPORTED_MODULE_2__.playerMap)[levelInd];
  const mapNameInd = (0,_utils_function__WEBPACK_IMPORTED_MODULE_3__.randomIntFromInterval)(
    0,
    Object.keys(_constants_map_playerMap__WEBPACK_IMPORTED_MODULE_2__.playerMap[level].maps).length - 1
  );
  const mapName = Object.keys(_constants_map_playerMap__WEBPACK_IMPORTED_MODULE_2__.playerMap[level].maps)[mapNameInd];
  state.level = level;
  state.mapName = mapName;
  const map = _constants_map_playerMap__WEBPACK_IMPORTED_MODULE_2__.playerMap[level].maps[mapName];
  algorithmToStartGame(map);
  messageInfoGame.show();
  _messageDownBox__WEBPACK_IMPORTED_MODULE_7__.messagePlace.hide();
});

_buttons__WEBPACK_IMPORTED_MODULE_4__.solutionButton.addListener("click", () => {
  _buttons__WEBPACK_IMPORTED_MODULE_4__.solutionButton.hide();
  gamePlace.viewSolution();
  _timer__WEBPACK_IMPORTED_MODULE_11__.timer.hide();
});

_buttons__WEBPACK_IMPORTED_MODULE_4__.saveGameButton.addListener("click", () => {
  localStorage.setItem(
    "state",
    JSON.stringify({
      map: state.mapData,
      name: state.mapName,
      level: state.level,
      time: _timer__WEBPACK_IMPORTED_MODULE_11__.timer.getDuration(),
    })
  );
});

_buttons__WEBPACK_IMPORTED_MODULE_4__.loadGameButton.addListener("click", () => {
  const { map, name, level, time } = JSON.parse(localStorage.getItem("state"));
  state.level = level;
  state.mapName = name;
  const newMap = _constants_map_playerMap__WEBPACK_IMPORTED_MODULE_2__.playerMap[level].maps[name];

  gamePlace.viewMap();
  gamePlace.destroyChildren();
  _select__WEBPACK_IMPORTED_MODULE_9__.divSelectLevel.hide();
  _select__WEBPACK_IMPORTED_MODULE_9__.divSelectMapName.hide();
  gamePlace.map = newMap;
  gamePlace.createMap();
  state.mapData = map;
  _timer__WEBPACK_IMPORTED_MODULE_11__.timer.startTimer(time);
  gamePlace.viewSavedMap(time);
  messageInfoGame.show();
  _messageDownBox__WEBPACK_IMPORTED_MODULE_7__.messagePlace.hide();
});




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
/* harmony import */ var _assets_style_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style/header.scss */ "./src/assets/style/header.scss");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./src/js/buttons.js");




const header = new _node__WEBPACK_IMPORTED_MODULE_0__.Component(
  {
    tag: "header",
    className: "header",
    text: "Nonograms",
  },
  _buttons__WEBPACK_IMPORTED_MODULE_2__.changeThemeButton
);




/***/ }),

/***/ "./src/js/messageDownBox.js":
/*!**********************************!*\
  !*** ./src/js/messageDownBox.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messagePlace: () => (/* binding */ messagePlace)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/js/node.js");
/* harmony import */ var _assets_style_message_down_box_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style/message-down-box.scss */ "./src/assets/style/message-down-box.scss");



class messageDownBox extends _node__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor({ tag = "div", className = "", text = ":" }) {
    super({ tag, className: "message-down-box " + className, text });
  }

  addInfo(data) {
    console.log(data);
    this.append(
      new _node__WEBPACK_IMPORTED_MODULE_0__.Component({
        tag: "span",
        className: "info",
        text: `SCORE: ${data.length === 0 ? "nothing else to show" : ""}`,
      })
    );
    // if (data.length > 0) {}
    const newInfo = data.map((item) => {
      const div = new _node__WEBPACK_IMPORTED_MODULE_0__.Component({ tag: "div", className: "info-row" });
      const info = Object.entries(item).map(([key, value]) => {
        const info = new _node__WEBPACK_IMPORTED_MODULE_0__.Component({
          tag: "span",
          className: `info ${key}`,
          text: `${key} - ${value}`,
        });
        return info;
      });
      div.appendChildren(info);
      return div;
    });
    this.appendChildren(newInfo);
  }

  load() {
    this.destroyChildren();
    const winner = localStorage.getItem("winner");
    if (winner) {
      this.addInfo(JSON.parse(winner));
    } else {
      this.addInfo([]);
    }
    this.show("flex");
  }
}

const messagePlace = new messageDownBox({
  tag: "div",
  className: "message-place",
  text: "",
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

  hide() {
    this.#node.style.display = "none";
  }

  show(position = "block") {
    this.#node.style.display = position;
  }
}


/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   divSelectLevel: () => (/* binding */ divSelectLevel),
/* harmony export */   divSelectMapName: () => (/* binding */ divSelectMapName)
/* harmony export */ });
/* harmony import */ var _constants_map_playerMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/map/playerMap */ "./src/constants/map/playerMap.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./src/js/node.js");
/* harmony import */ var _assets_style_select_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/style/select.scss */ "./src/assets/style/select.scss");
/* harmony import */ var _soundFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./soundFunc */ "./src/js/soundFunc.js");





function createComponent({ tag, className, text, attributes = {} }) {
  const element = new _node__WEBPACK_IMPORTED_MODULE_1__.Component({ tag, className, text });
  Object.entries(attributes).forEach(([key, value]) => {
    element.getNode().setAttribute(key, value);
  });
  return element;
}

class CreateSelectTag {
  constructor(options, attribute, labelText = "Select size") {
    this.options = options;
    this.attribute = attribute;
    this.labelText = labelText;
  }

  create() {
    const divSelect = createComponent({
      tag: "div",
      className: "select-place",
    });
    const fieldset = createComponent({
      tag: "fieldset",
      className: "fieldset",
    });
    const labelForSelect = createComponent({
      tag: "label",
      className: "label label-select",
      text: this.labelText,
      attributes: { for: this.attribute },
    });

    const select = createComponent({
      tag: "select",
      className: "select",
      attributes: { id: this.attribute },
    });

    select.addListener("click", () => {
      (0,_soundFunc__WEBPACK_IMPORTED_MODULE_3__.soundButtonClick)();
    });
    select.addListener("focus", () => {
      (0,_soundFunc__WEBPACK_IMPORTED_MODULE_3__.soundPlayFocus)();
    });

    this.options.forEach((el) => {
      const option = createComponent({
        tag: "option",
        className: "option",
        text: el,
        attributes: { value: el },
      });
      select.getNode().appendChild(option.getNode());
    });

    fieldset.appendChildren([labelForSelect, select]);
    divSelect.appendChildren([fieldset]);
    return divSelect;
  }
}

const divSelectLevel = new CreateSelectTag(
  Object.values(_constants_map_playerMap__WEBPACK_IMPORTED_MODULE_0__.playerMap).map((el) => el.name),
  "level"
).create();
const divSelectMapName = new CreateSelectTag(
  Object.keys(_constants_map_playerMap__WEBPACK_IMPORTED_MODULE_0__.playerMap.easy.maps),
  "mapName"
).create();

const levelSelector = divSelectLevel.getNode().querySelector("select");
const mapsSelector = divSelectMapName.getNode().querySelector("select");
levelSelector.addEventListener("change", (e) => {
  while (mapsSelector.firstChild) {
    mapsSelector.removeChild(mapsSelector.firstChild);
  }
  Object.keys(_constants_map_playerMap__WEBPACK_IMPORTED_MODULE_0__.playerMap[e.target.value].maps)
    .map((el) => {
      const option = createComponent({
        tag: "option",
        className: "option",
        text: el,
        attributes: { value: el },
      });
      return option.getNode();
    })
    .forEach((el) => mapsSelector.appendChild(el));
});




/***/ }),

/***/ "./src/js/soundFunc.js":
/*!*****************************!*\
  !*** ./src/js/soundFunc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   soundButtonClick: () => (/* binding */ soundButtonClick),
/* harmony export */   soundPlayFocus: () => (/* binding */ soundPlayFocus),
/* harmony export */   soundPlayGame: () => (/* binding */ soundPlayGame),
/* harmony export */   soundPlayWin: () => (/* binding */ soundPlayWin)
/* harmony export */ });
/* harmony import */ var _assets_sounds_click_for_game_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sounds/click_for_game.mp3 */ "./src/assets/sounds/click_for_game.mp3");
/* harmony import */ var _assets_sounds_click_for_button_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sounds/click_for_button.mp3 */ "./src/assets/sounds/click_for_button.mp3");
/* harmony import */ var _assets_sounds_win_sound_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sounds/win_sound.mp3 */ "./src/assets/sounds/win_sound.mp3");
/* harmony import */ var _assets_sounds_slide_click_92152_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sounds/slide-click-92152.mp3 */ "./src/assets/sounds/slide-click-92152.mp3");




function soundPlayGame() {
  const audio = new Audio(_assets_sounds_click_for_game_mp3__WEBPACK_IMPORTED_MODULE_0__);
  audio.play();
}

function soundPlayFocus() {
  const audio = new Audio(_assets_sounds_slide_click_92152_mp3__WEBPACK_IMPORTED_MODULE_3__);
  audio.play();
}

function soundPlayWin() {
  const audio = new Audio(_assets_sounds_click_for_button_mp3__WEBPACK_IMPORTED_MODULE_1__);
  audio.play();
}

function soundButtonClick() {
  const audio = new Audio(_assets_sounds_win_sound_mp3__WEBPACK_IMPORTED_MODULE_2__);
  audio.play();
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
/* harmony import */ var _assets_style_timer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style/timer.scss */ "./src/assets/style/timer.scss");



class Timer extends _node__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super({ tag: "div", className: "timer", text: "00:00" });
    this.interval = "";
    this.status = false;
  }

  startTimer(sec = 0) {
    this.show();
    if (this.interval) clearInterval(this.interval);
    this.status = true;
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    this.setTextContent(
      `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`
    );
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

  getDuration() {
    const [minutes, seconds] = this.getNode()
      .textContent.split(":")
      .map(Number);
    return minutes * 60 + seconds;
  }

  stopTimer() {
    this.status = false;
    const durationInSeconds = this.getDuration();
    clearInterval(this.interval);
    return durationInSeconds;
  }

  resetTimer() {
    this.stopTimer();
    this.getNode().textContent = "00:00";
  }

  getStatus() {
    return this.status;
  }
}

const timer = new Timer();
timer.hide();



/***/ }),

/***/ "./src/utils/function.js":
/*!*******************************!*\
  !*** ./src/utils/function.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compare2DArrays: () => (/* binding */ compare2DArrays),
/* harmony export */   maxLength: () => (/* binding */ maxLength),
/* harmony export */   randomIntFromInterval: () => (/* binding */ randomIntFromInterval)
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

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




/***/ }),

/***/ "./src/assets/style/buttons.scss":
/*!***************************************!*\
  !*** ./src/assets/style/buttons.scss ***!
  \***************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_buttons_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./buttons.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/buttons.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_buttons_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_buttons_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_buttons_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_buttons_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/style/controls-panel.scss":
/*!**********************************************!*\
  !*** ./src/assets/style/controls-panel.scss ***!
  \**********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_controls_panel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./controls-panel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/controls-panel.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_controls_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_controls_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_controls_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_controls_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/style/footer.scss":
/*!**************************************!*\
  !*** ./src/assets/style/footer.scss ***!
  \**************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/style/header.scss":
/*!**************************************!*\
  !*** ./src/assets/style/header.scss ***!
  \**************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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


/***/ }),

/***/ "./src/assets/style/message-down-box.scss":
/*!************************************************!*\
  !*** ./src/assets/style/message-down-box.scss ***!
  \************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_message_down_box_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./message-down-box.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/message-down-box.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_message_down_box_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_message_down_box_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_message_down_box_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_message_down_box_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/style/select.scss":
/*!**************************************!*\
  !*** ./src/assets/style/select.scss ***!
  \**************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_select_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./select.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/select.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_select_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_select_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_select_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_select_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/style/timer.scss":
/*!*************************************!*\
  !*** ./src/assets/style/timer.scss ***!
  \*************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_timer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./timer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/timer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_timer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_timer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_timer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_timer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/sounds/click_for_button.mp3":
/*!************************************************!*\
  !*** ./src/assets/sounds/click_for_button.mp3 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/click_for_button.mp3";

/***/ }),

/***/ "./src/assets/sounds/click_for_game.mp3":
/*!**********************************************!*\
  !*** ./src/assets/sounds/click_for_game.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/click_for_game.mp3";

/***/ }),

/***/ "./src/assets/sounds/slide-click-92152.mp3":
/*!*************************************************!*\
  !*** ./src/assets/sounds/slide-click-92152.mp3 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/slide-click-92152.mp3";

/***/ }),

/***/ "./src/assets/sounds/win_sound.mp3":
/*!*****************************************!*\
  !*** ./src/assets/sounds/win_sound.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/win_sound.mp3";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF5SjtBQUN6SjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZIQUFPOzs7O0FBSW1HO0FBQzNILE9BQU8saUVBQWUsNkhBQU8sSUFBSSw2SEFBTyxVQUFVLDZIQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBd0o7QUFDeEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUlrRztBQUMxSCxPQUFPLGlFQUFlLDRIQUFPLElBQUksNEhBQU8sVUFBVSw0SEFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvYnV0dG9ucy5zY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvY2VsbC5zY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvY29udHJvbHMtcGFuZWwuc2NzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL2Zvb3Rlci5zY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvZ2FtZS1wbGFjZS1pbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9nYW1lLXBsYWNlLnNjc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL21haW4uc2NzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL21lc3NhZ2UtZG93bi1ib3guc2NzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL3NlbGVjdC5zY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvdGltZXIuc2NzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29uc3RhbnRzL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbnN0YW50cy9tYXAvcGxheWVyTWFwLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvY2VsbC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvY29udHJvbHNQYW5lbC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvZm9vdGVyLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9qcy9nYW1lUGxhY2UuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2pzL2dhbWVQbGFjZUluZm8uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvbWVzc2FnZURvd25Cb3guanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2pzL25vZGUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2pzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvc291bmRGdW5jLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9qcy90aW1lci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9idXR0b25zLnNjc3M/MmYxOSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL2NlbGwuc2Nzcz81OTM4Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvY29udHJvbHMtcGFuZWwuc2Nzcz8yNGIzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvZm9vdGVyLnNjc3M/NGU1MiIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL2dhbWUtcGxhY2UtaW5mby5zY3NzPzAxYmEiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9nYW1lLXBsYWNlLnNjc3M/OTc1OSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL2hlYWRlci5zY3NzP2ZhMWYiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9tYWluLnNjc3M/MGU3ZCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL21lc3NhZ2UtZG93bi1ib3guc2Nzcz83ODc3Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvc2VsZWN0LnNjc3M/ZDJmMSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL3RpbWVyLnNjc3M/NTZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUvYnV0dG9ucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSx3QkFBQTtFQUNBLDZDQUFBO0FBQ0Y7QUFDRTtFQUNFLGtDQUFBO0FBQ0o7QUFFRTtFQUNFLHlDQUFBO0VBQ0Esd0JBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWdyYXkpO1xcbiAgfVxcblxcbiAgJjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsYWNrKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jZWxsIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1ncmF5KTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtYmctd2hpdGUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uY2VsbDpudGgtY2hpbGQoNW4rMSkge1xuICBib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLW1haW4tYmxhY2spO1xufVxuLmNlbGw6bnRoLWNoaWxkKDVuKSB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IHZhcigtLW1haW4tYmxhY2spO1xufVxuLmNlbGw6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogc29saWQgM3B4IHZhcigtLW1haW4tYmxhY2spO1xufVxuLmNlbGw6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgM3B4IHZhcigtLW1haW4tYmxhY2spO1xufVxuLmNlbGw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2VsbC5jZWxsLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1iZy1ibGFjayk7XG59XG4uY2VsbC5jZWxsLWNyb3NzIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCByZ2JhKDAsIDAsIDAsIDApIC0xMCUsIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAwLjhweCksIHJnYigwLCAwLCAwKSA1MCUsIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgKyAwLjhweCksIHJnYmEoMCwgMCwgMCwgMCkgMTEwJSksIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIHJnYmEoMCwgMCwgMCwgMCkgLTEwJSwgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSAtIDAuOHB4KSwgcmdiKDAsIDAsIDApIDUwJSwgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSArIDAuOHB4KSwgcmdiYSgwLCAwLCAwLCAwKSAxMTAlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUvY2VsbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLDZDQUFBO0FBQ0Y7QUFFRTtFQUNFLHdDQUFBO0FBQUo7QUFHRTtFQUNFLHlDQUFBO0FBREo7QUFJRTtFQUNFLHdDQUFBO0FBRko7QUFLRTtFQUNFLHlDQUFBO0FBSEo7QUFPRTtFQUNFLGVBQUE7QUFMSjtBQVFFO0VBQ0Usc0NBQUE7QUFOSjtBQVNFO0VBQ0UsdVZBQ0U7RUFZRiw0QkFBQTtBQW5CSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2VsbCB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tZ3JheSk7XFxuICBtYXJnaW46IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtYmctd2hpdGUpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcblxcblxcbiAgJjpudGgtY2hpbGQoNW4gKyAxKSB7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XFxuICB9XFxuXFxuICAmOm50aC1jaGlsZCg1bikge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCB2YXIoLS1tYWluLWJsYWNrKTtcXG4gIH1cXG5cXG4gICY6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItbGVmdDogc29saWQgM3B4IHZhcigtLW1haW4tYmxhY2spO1xcbiAgfVxcblxcbiAgJjpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ibGFjayk7XFxuICB9XFxuXFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgJi5jZWxsLWJsYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1iZy1ibGFjayk7XFxuICB9XFxuXFxuICAmLmNlbGwtY3Jvc3Mge1xcbiAgICBiYWNrZ3JvdW5kOlxcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgLTEwJSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAwLjhweCksXFxuICAgICAgICByZ2IoMCwgMCwgMCwgMSkgNTAlLFxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSArIDAuOHB4KSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgMTEwJSksXFxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgLTEwJSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAwLjhweCksXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDEpIDUwJSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgKyAwLjhweCksXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDExMCUpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250cm9scy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1saWdodC13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmxhY2spO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9jb250cm9scy1wYW5lbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250cm9scy1wYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLW1haW4tbGlnaHQtd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibGFjayk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmZvb3RlciAuZm9vdGVyLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcbn1cbi5mb290ZXIgLmZvb3Rlci1saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7QUFDTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG5cXG4gIC5mb290ZXItbGluayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZ2FtZS1wbGFjZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5nYW1lLXBsYWNlLWluZm8gLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZ2FtZS1wbGFjZS1pbmZvIC5jb2x1bW4uYWN0aXZlIC5zZWxsLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuLmdhbWUtcGxhY2UtaW5mbyAuY29sdW1uLmFjdGl2ZSAuc2VsbC1pbmZvLmVtcHR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cbi5nYW1lLXBsYWNlLWluZm8gLnNlbGwtaW5mbyB7XG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5nYW1lLXBsYWNlLWluZm8udXAge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCAuY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHZhcigtLW1haW4tZ3JheSk7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5nYW1lLXBsYWNlLWluZm8udXAgLmNvbHVtbjpudGgtY2hpbGQoNW4pIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLnVwIC5jb2x1bW46bnRoLWNoaWxkKDVuKzEpIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCB2YXIoLS1tYWluLWJsYWNrKTtcbn1cbi5nYW1lLXBsYWNlLWluZm8udXAgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCAuY29sdW1uOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLnVwIC5jb2x1bW4gLnNlbGwtaW5mbyB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCAuY29sdW1uIC5zZWxsLWluZm86Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby5sZWZ0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby5sZWZ0IC5jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1tYWluLWdyYXkpO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5nYW1lLXBsYWNlLWluZm8ubGVmdCAuY29sdW1uOm50aC1jaGlsZCg1bikge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLmxlZnQgLmNvbHVtbjpudGgtY2hpbGQoNW4rMSkge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLmxlZnQgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLmxlZnQgLmNvbHVtbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5nYW1lLXBsYWNlLWluZm8ubGVmdCAuY29sdW1uIC5zZWxsLWluZm8ge1xuICBib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLW1haW4tZ3JheSk7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLmxlZnQgLmNvbHVtbiAuc2VsbC1pbmZvOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5zZWxsLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xufVxuLnNlbGwtaW5mby5lbXB0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlL2dhbWUtcGxhY2UtaW5mby5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFJTTtFQUNFLHlCQUFBO0FBRlI7QUFJUTtFQUNFLHlCQUFBO0FBRlY7QUFRRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTko7QUFTRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUNBQUE7QUFQTjtBQVNNO0VBQ0UseUNBQUE7QUFQUjtBQVVNO0VBQ0Usd0NBQUE7QUFSUjtBQVdNO0VBQ0UsaUJBQUE7QUFUUjtBQVlNO0VBQ0Usa0JBQUE7QUFWUjtBQWFNO0VBQ0Usc0NBQUE7QUFYUjtBQWFRO0VBQ0UsZ0JBQUE7QUFYVjtBQWlCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFmSjtBQWlCSTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHNDQUFBO0FBZk47QUFpQk07RUFDRSwwQ0FBQTtBQWZSO0FBa0JNO0VBQ0UsdUNBQUE7QUFoQlI7QUFtQk07RUFDRSxnQkFBQTtBQWpCUjtBQW9CTTtFQUNFLG1CQUFBO0FBbEJSO0FBcUJNO0VBQ0UsdUNBQUE7QUFuQlI7QUFxQlE7RUFDRSxpQkFBQTtBQW5CVjs7QUEwQkE7RUFDRSx5QkFBQTtBQXZCRjtBQXlCRTtFQUNFLHlCQUFBO0FBdkJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lLXBsYWNlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLW1haW4tZ3JheSk7XFxuXFxuICAuY29sdW1uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXG5cXG4gICAgJi5hY3RpdmUge1xcblxcbiAgICAgIC5zZWxsLWluZm8ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG5cXG4gICAgICAgICYuZW1wdHkge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnNlbGwtaW5mbyB7XFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gICYudXAge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcblxcbiAgICAmIC5jb2x1bW4ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggdmFyKC0tbWFpbi1ncmF5KTtcXG4gICAgICBib3JkZXItbGVmdDogc29saWQgMXB4IHZhcigtLW1haW4tZ3JheSk7XFxuXFxuICAgICAgJjpudGgtY2hpbGQoNW4pIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMnB4IHZhcigtLW1haW4tYmxhY2spO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOm50aC1jaGlsZCg1bisxKSB7XFxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLW1haW4tYmxhY2spO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc2VsbC1pbmZvIHtcXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xcblxcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmLmxlZnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFxuICAgICYgLmNvbHVtbiB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLW1haW4tZ3JheSk7XFxuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLW1haW4tZ3JheSk7XFxuXFxuICAgICAgJjpudGgtY2hpbGQoNW4pIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1tYWluLWJsYWNrKTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpudGgtY2hpbGQoNW4rMSkge1xcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMnB4IHZhcigtLW1haW4tYmxhY2spO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc2VsbC1pbmZvIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ncmF5KTtcXG5cXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNlbGwtaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xcblxcbiAgJi5lbXB0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdhbWUtcGxhY2Uge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyMHB4LCBhdXRvKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjBweCwgYXV0bykgbWlubWF4KDIwcHgsIGF1dG8pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcbn1cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnJvdzpudGgtY2hpbGQoNW4rMSkgLmNlbGwge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4ucm93Om50aC1jaGlsZCg1bikgLmNlbGwge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4ucm93OmZpcnN0LWNoaWxkIC5jZWxsIHtcbiAgYm9yZGVyLXRvcDogc29saWQgM3B4IHZhcigtLW1haW4tYmxhY2spO1xufVxuLnJvdzpsYXN0LWNoaWxkIC5jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLW1haW4tYmxhY2spO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9nYW1lLXBsYWNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDREQUFBO0VBQ0EsbUNBQUE7QUFDRjtBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLRTtFQUNFLHVDQUFBO0FBSEo7QUFNRTtFQUNFLDBDQUFBO0FBSko7QUFPRTtFQUNFLHVDQUFBO0FBTEo7QUFRRTtFQUNFLDBDQUFBO0FBTkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWUtcGxhY2Uge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyMHB4LCBhdXRvKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwcHgsIGF1dG8pIG1pbm1heCgyMHB4LCBhdXRvKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcblxcblxcbiAgLmdhbWUtcGxhY2UtbWFpbiB7fVxcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgJjpudGgtY2hpbGQoNW4gKyAxKSAuY2VsbCB7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWJsYWNrKTtcXG4gIH1cXG5cXG4gICY6bnRoLWNoaWxkKDVuKSAuY2VsbCB7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1tYWluLWJsYWNrKTtcXG4gIH1cXG5cXG4gICY6Zmlyc3QtY2hpbGQgLmNlbGwge1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ibGFjayk7XFxuICB9XFxuXFxuICAmOmxhc3QtY2hpbGQgLmNlbGwge1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ibGFjayk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmxhY2spO1xuICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUvaGVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLWdyYXk6ICNjZmNmY2Y7XG4gIC0tZGFyay1ncmF5OiAjODY4Njg2O1xuICAtLW1haW4tYmxhY2s6ICM0MTQxNDE7XG4gIC0tbWFpbi1saWdodC1ibGFjazogIzdhNzI3MjtcbiAgLS1tYWluLXdoaXRlOiAjZmZmO1xuICAtLW1haW4tbGlnaHQtd2hpdGU6ICNmMGYwZjA7XG4gIC0tbWFpbi1vbGl2ZTogIzliYTM4YztcbiAgLS1jZWxsLXNpemU6IDIwcHg7XG4gIC0tY2VsbC1iZy1ibGFjazogIzc3NzYyZjtcbiAgLS1jZWxsLWJnLXdoaXRlOiAjZTRlM2E4O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi5kYXJrLXRoZW1lIHtcbiAgLS1tYWluLWdyYXk6IGRhcmtncmF5O1xuICAtLWRhcmstZ3JheTogIzU4NTg1ODtcbiAgLS1tYWluLWJsYWNrOiAjMDAwMDAwO1xuICAtLW1haW4tbGlnaHQtYmxhY2s6ICMzMzM7XG4gIC0tbWFpbi13aGl0ZTogI2ZmZjtcbiAgLS1tYWluLWxpZ2h0LXdoaXRlOiAjZjBmMGYwO1xuICAtLW1haW4tb2xpdmU6ICM2MzY5NTk7XG4gIC0tY2VsbC1iZy1ibGFjazogIzY2NjE2MTtcbiAgLS1jZWxsLWJnLXdoaXRlOiAjZTBkZTUzO1xufVxuXG4ud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9saXZlKTtcbn1cblxuLm1lc3NhZ2UtcGxhY2Uge1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLW1haW4tbGlnaHQtd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsYWNrKTtcbn1cbi5tZXNzYWdlLXBsYWNlIC5tZXNzYWdlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1tYWluLWdyYXk6ICNjZmNmY2Y7XFxuICAtLWRhcmstZ3JheTogIzg2ODY4NjtcXG4gIC0tbWFpbi1ibGFjazogIzQxNDE0MTtcXG4gIC0tbWFpbi1saWdodC1ibGFjazogIzdhNzI3MjtcXG4gIC0tbWFpbi13aGl0ZTogI2ZmZjtcXG4gIC0tbWFpbi1saWdodC13aGl0ZTogI2YwZjBmMDtcXG4gIC0tbWFpbi1vbGl2ZTogIzliYTM4YztcXG4gIC0tY2VsbC1zaXplOiAyMHB4O1xcbiAgLS1jZWxsLWJnLWJsYWNrOiAjNzc3NjJmO1xcbiAgLS1jZWxsLWJnLXdoaXRlOiAjZTRlM2E4O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRhcmstdGhlbWUge1xcbiAgLS1tYWluLWdyYXk6IGRhcmtncmF5O1xcbiAgLS1kYXJrLWdyYXk6ICM1ODU4NTg7XFxuICAtLW1haW4tYmxhY2s6ICMwMDAwMDA7XFxuICAtLW1haW4tbGlnaHQtYmxhY2s6ICMzMzM7XFxuICAtLW1haW4td2hpdGU6ICNmZmY7XFxuICAtLW1haW4tbGlnaHQtd2hpdGU6ICNmMGYwZjA7XFxuICAtLW1haW4tb2xpdmU6ICM2MzY5NTk7XFxuICAtLWNlbGwtYmctYmxhY2s6ICM2NjYxNjE7XFxuICAtLWNlbGwtYmctd2hpdGU6ICNlMGRlNTM7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9saXZlKTtcXG59XFxuXFxuLm1lc3NhZ2UtcGxhY2Uge1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLW1haW4tbGlnaHQtd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibGFjayk7XFxuXFxuICAubWVzc2FnZS1ib3gge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tZXNzYWdlLWRvd24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsYWNrKTtcbiAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5pbmZvLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaW5mby1yb3cgLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLW1haW4td2hpdGUpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5pbmZvLXJvdyAuaWQge1xuICBvcmRlcjogLTE7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAubWVzc2FnZS1kb3duLWJveCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5tZXNzYWdlLWRvd24tYm94IC5pbmZvLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MHB4IHJlcGVhdCgzLCAxZnIpO1xuICB9XG4gIC5tZXNzYWdlLWRvd24tYm94IC5pZCB7XG4gICAgb3JkZXI6IC0xO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlL21lc3NhZ2UtZG93bi1ib3guc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtBQUNKO0FBR0U7RUFDRSxTQUFBO0FBREo7O0FBTUE7RUFDRTtJQUNFLGVBQUE7RUFIRjtFQUtFO0lBQ0UsMENBQUE7RUFISjtFQU1FO0lBQ0UsU0FBQTtFQUpKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lc3NhZ2UtZG93bi1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uaW5mby1yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIC5pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1tYWluLXdoaXRlKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuXFxuICB9XFxuXFxuICAuaWQge1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm1lc3NhZ2UtZG93bi1ib3gge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuXFxuICAgIC5pbmZvLXJvdyB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MHB4IHJlcGVhdCgzLCAxZnIpO1xcbiAgICB9XFxuXFxuICAgIC5pZCB7XFxuICAgICAgb3JkZXI6IC0xO1xcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlbGVjdC1wbGFjZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuXG4uZmllbGRzZXQge1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1tYWluLWxpZ2h0LXdoaXRlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBjb2x1bW4tZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsYWNrKTtcbiAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtd2hpdGUpO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUvc2VsZWN0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlbGVjdC1wbGFjZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxufVxcblxcbi5maWVsZHNldCB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1tYWluLWxpZ2h0LXdoaXRlKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1saWdodC13aGl0ZSk7XFxufVxcblxcbi5sYWJlbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlbGVjdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGltZXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUvdGltZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aW1lciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IERJUkVDVElPTiA9IHtcbiAgdXA6IFwidXBcIixcbiAgbGVmdDogXCJsZWZ0XCIsXG59O1xuIiwiZXhwb3J0IGNvbnN0IHNxdWFyZSA9IFtcbiAgWzAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMSwgMSwgMF0sXG4gIFswLCAxLCAxLCAxLCAwXSxcbiAgWzAsIDEsIDEsIDEsIDBdLFxuICBbMCwgMCwgMCwgMCwgMF0sXG5dO1xuZXhwb3J0IGNvbnN0IGNyb3NzID0gW1xuICBbMSwgMCwgMCwgMCwgMV0sXG4gIFswLCAxLCAwLCAxLCAwXSxcbiAgWzAsIDAsIDEsIDAsIDBdLFxuICBbMCwgMSwgMCwgMSwgMF0sXG4gIFsxLCAwLCAwLCAwLCAxXSxcbl07XG5leHBvcnQgY29uc3QgZmlndXJlXzEgPSBbXG4gIFswLCAwLCAwLCAwLCAwXSxcbiAgWzEsIDEsIDEsIDEsIDBdLFxuICBbMSwgMSwgMCwgMSwgMF0sXG4gIFsxLCAxLCAxLCAxLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDBdLFxuXTtcbmV4cG9ydCBjb25zdCBmaWd1cmVfMiA9IFtcbiAgWzAsIDAsIDAsIDAsIDFdLFxuICBbMSwgMSwgMSwgMSwgMV0sXG4gIFsxLCAwLCAwLCAxLCAxXSxcbiAgWzEsIDEsIDEsIDEsIDFdLFxuICBbMCwgMCwgMCwgMCwgMV0sXG5dO1xuZXhwb3J0IGNvbnN0IGZpZ3VyZV8zID0gW1xuICBbMSwgMSwgMSwgMSwgMV0sXG4gIFsxLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMV0sXG4gIFsxLCAxLCAxLCAxLCAxXSxcbl07XG5leHBvcnQgY29uc3QgZ2lyYWZmZSA9IFtcbiAgWzEsIDEsIDAsIDBdLFxuICBbMCwgMSwgMCwgMF0sXG4gIFswLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDAsIDBdLFxuICBbMCwgMSwgMSwgMV0sXG4gIFswLCAxLCAwLCAxXSxcbl07XG5leHBvcnQgY29uc3QgaGVhcnQgPSBbXG4gIFswLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxuICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXG4gIFswLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbl07XG5leHBvcnQgY29uc3Qgc21pbGUgPSBbXG4gIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDBdLFxuICBbMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMV0sXG4gIFsxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXG4gIFsxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxXSxcbiAgWzAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDBdLFxuICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbl07XG5leHBvcnQgY29uc3QgaG91c2UgPSBbXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxuICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbl07XG5leHBvcnQgY29uc3QgYXJyb3dVcCA9IFtcbiAgWzAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMF0sXG4gIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuXTtcbmV4cG9ydCBjb25zdCBiaWdDcm9zcyA9IFtcbiAgWzAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgWzAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuXTtcbmV4cG9ydCBjb25zdCBpbWdfMSA9IFtcbiAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICBbMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMV0sXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAwXSxcbiAgWzAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDFdLFxuICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwXSxcbiAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDBdLFxuXTtcbmV4cG9ydCBjb25zdCBmb3ggPSBbXG4gIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwXSxcbiAgWzEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDBdLFxuICBbMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMF0sXG4gIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwXSxcbiAgWzEsIDEsIDAsIDEsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDEsIDAsIDAsIDFdLFxuICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMV0sXG4gIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgWzAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDAsIDEsIDFdLFxuICBbMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXG4gIFswLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgWzAsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDBdLFxuICBbMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMF0sXG4gIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwXSxcbiAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRvciA9IFtcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxXSxcbiAgWzEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDFdLFxuICBbMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAsIDFdLFxuICBbMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxXSxcbiAgWzEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuXTtcblxuZXhwb3J0IGNvbnN0IHNuYWtlID0gW1xuICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAxLCAxLCAwLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzEsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFsxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDEsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDBdLFxuICBbMCwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMF0sXG4gIFswLCAwLCAxLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDBdLFxuICBbMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMF0sXG4gIFsxLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwXSxcbiAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDBdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMF0sXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdvYXQgPSBbXG4gIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMF0sXG4gIFsxLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAwXSxcbiAgWzEsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDBdLFxuICBbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMF0sXG4gIFsxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAwXSxcbiAgWzEsIDEsIDAsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDBdLFxuICBbMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMSwgMCwgMF0sXG4gIFsxLCAxLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwXSxcbiAgWzEsIDEsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDBdLFxuICBbMCwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMF0sXG5dO1xuXG5leHBvcnQgY29uc3QgaGVkZ2Vob2cgPSBbXG4gIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMF0sXG4gIFswLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxuICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMF0sXG4gIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAwXSxcbiAgWzAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxuICBbMCwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMF0sXG4gIFswLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDEsIDAsIDBdLFxuICBbMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXG5dO1xuIiwiaW1wb3J0IHtcbiAgYXJyb3dVcCxcbiAgYmlnQ3Jvc3MsXG4gIGNhbGN1bGF0b3IsXG4gIGNyb3NzLFxuICBmaWd1cmVfMSxcbiAgZmlndXJlXzIsXG4gIGZpZ3VyZV8zLFxuICBmb3gsXG4gIGdpcmFmZmUsXG4gIGdvYXQsXG4gIGhlYXJ0LFxuICBoZWRnZWhvZyxcbiAgaG91c2UsXG4gIGltZ18xLFxuICBzbWlsZSxcbiAgc25ha2UsXG4gIHNxdWFyZSxcbn0gZnJvbSBcIi4vbWFwXCI7XG5cbmNvbnN0IHBsYXllck1hcCA9IHtcbiAgZWFzeToge1xuICAgIG5hbWU6IFwiZWFzeVwiLFxuICAgIG1hcHM6IHsgc3F1YXJlLCBjcm9zcywgZmlndXJlXzEsIGZpZ3VyZV8yLCBmaWd1cmVfMywgZ2lyYWZmZSB9LFxuICB9LFxuICBtZWRpdW06IHtcbiAgICBuYW1lOiBcIm1lZGl1bVwiLFxuICAgIG1hcHM6IHsgaGVhcnQsIHNtaWxlLCBob3VzZSwgYXJyb3dVcCwgYmlnQ3Jvc3MsIGltZ18xIH0sXG4gIH0sXG4gIGhhcmQ6IHtcbiAgICBuYW1lOiBcImhhcmRcIixcbiAgICBtYXBzOiB7IGZveCwgY2FsY3VsYXRvciwgc25ha2UsIGdvYXQsIGhlZGdlaG9nIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgeyBwbGF5ZXJNYXAgfTtcbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSByZXF1aXJlKFwiLi9qcy9ub2RlXCIpO1xuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUvbWFpbi5zY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZS9nYW1lLXBsYWNlLnNjc3NcIjtcbmltcG9ydCB7IGdhbWVQbGFjZSwgbWVzc2FnZUJveCwgbWVzc2FnZUluZm9HYW1lIH0gZnJvbSBcIi4vanMvZ2FtZVBsYWNlXCI7XG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9qcy9oZWFkZXJcIjtcbmltcG9ydCB7IGZvb3RlciB9IGZyb20gXCIuL2pzL2Zvb3RlclwiO1xuaW1wb3J0IHsgY29udHJvbHNQYW5lbCB9IGZyb20gXCIuL2pzL2NvbnRyb2xzUGFuZWxcIjtcbmltcG9ydCB7IG1lc3NhZ2VQbGFjZSB9IGZyb20gXCIuL2pzL21lc3NhZ2VEb3duQm94XCI7XG5cbmNvbnN0IHdyYXBwZXIgPSBuZXcgQ29tcG9uZW50KFxuICB7IHRhZzogXCJkaXZcIiwgY2xhc3NOYW1lOiBcIndyYXBwZXJcIiB9LFxuICBoZWFkZXIsXG4gIGNvbnRyb2xzUGFuZWwsXG4gIG5ldyBDb21wb25lbnQoXG4gICAgeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJtZXNzYWdlLXBsYWNlXCIgfSxcbiAgICBtZXNzYWdlQm94LFxuICAgIG1lc3NhZ2VJbmZvR2FtZVxuICApLFxuICBnYW1lUGxhY2UsXG4gIG1lc3NhZ2VQbGFjZSxcbiAgZm9vdGVyXG4pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQod3JhcHBlci5nZXROb2RlKCkpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3ItdGhlbWVcIik7XG4gIGlmICh0aGVtZSA9PT0gXCJkYXJrXCIpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJkYXJrLXRoZW1lXCIpO1xuICB9XG5cbiAgbWVzc2FnZVBsYWNlLmxvYWQoKTtcbiAgLy8gY29uc3Qgd2lubmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5uZXJcIik7XG4gIC8vIGlmICh3aW5uZXIpIHtcbiAgLy8gICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh3aW5uZXIpO1xuICAvLyAgIG1lc3NhZ2VQbGFjZS5hZGRJbmZvKGRhdGEpO1xuICAvLyB9XG59KTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZS9idXR0b25zLnNjc3NcIjtcbmltcG9ydCB7IHNvdW5kQnV0dG9uQ2xpY2sgfSBmcm9tIFwiLi9zb3VuZEZ1bmNcIjtcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyB0YWcgPSBcImJ1dHRvblwiLCBjbGFzc05hbWUgPSBcIlwiLCB0ZXh0ID0gXCJcIiB9LCAuLi5jaGlsZHJlbikge1xuICAgIHN1cGVyKHsgdGFnLCBjbGFzc05hbWU6IGBidXR0b24gJHtjbGFzc05hbWV9YCwgdGV4dCB9LCAuLi5jaGlsZHJlbik7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIHNvdW5kQnV0dG9uQ2xpY2spO1xuICB9XG5cbiAgaGlkZUJ1dHRvbigpIHtcbiAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBzaG93QnV0dG9uKCkge1xuICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cbn1cblxuY29uc3QgcmVzZXRHYW1lQnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gIHRhZzogXCJidXR0b25cIixcbiAgY2xhc3NOYW1lOiBcInJlc2V0LWdhbWUtYnV0dG9uXCIsXG4gIHRleHQ6IFwiUmVzZXQgR2FtZVwiLFxufSk7XG5cbmNvbnN0IHJhbmRvbUdhbWVCdXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgdGFnOiBcImJ1dHRvblwiLFxuICBjbGFzc05hbWU6IFwicmFuZG9tLWdhbWUtYnV0dG9uXCIsXG4gIHRleHQ6IFwiUmFuZG9tIEdhbWVcIixcbn0pO1xuXG5jb25zdCBuZXdHYW1lQnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gIHRhZzogXCJidXR0b25cIixcbiAgY2xhc3NOYW1lOiBcIm5ldy1nYW1lLWJ1dHRvblwiLFxuICB0ZXh0OiBcIk5ldyBHYW1lXCIsXG59KTtcblxuY29uc3Qgc3RhcnROZXdHYW1lID0gbmV3IEJ1dHRvbih7XG4gIHRhZzogXCJidXR0b25cIixcbiAgY2xhc3NOYW1lOiBcInN0YXJ0LW5ldy1nYW1lLWJ1dHRvblwiLFxuICB0ZXh0OiBcIlN0YXJ0IE5ldyBHYW1lXCIsXG59KTtcblxuY29uc3Qgc29sdXRpb25CdXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgdGFnOiBcImJ1dHRvblwiLFxuICBjbGFzc05hbWU6IFwic29sdXRpb24tYnV0dG9uXCIsXG4gIHRleHQ6IFwiU29sdXRpb25cIixcbn0pO1xuXG5jb25zdCBjaGFuZ2VUaGVtZUJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICB0YWc6IFwiYnV0dG9uXCIsXG4gIGNsYXNzTmFtZTogXCJjaGFuZ2UtdGhlbWUtYnV0dG9uXCIsXG4gIHRleHQ6IFwiQ2hhbmdlIFRoZW1lIHRvIERhcmtcIixcbn0pO1xuXG5jb25zdCBzYXZlR2FtZUJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICB0YWc6IFwiYnV0dG9uXCIsXG4gIGNsYXNzTmFtZTogXCJzYXZlLWdhbWUtYnV0dG9uXCIsXG4gIHRleHQ6IFwiU2F2ZSBHYW1lXCIsXG59KTtcblxuY29uc3QgbG9hZEdhbWVCdXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgdGFnOiBcImJ1dHRvblwiLFxuICBjbGFzc05hbWU6IFwibG9hZC1nYW1lLWJ1dHRvblwiLFxuICB0ZXh0OiBcIkxvYWQgR2FtZVwiLFxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvci10aGVtZVwiKTtcbiAgaWYgKHRoZW1lID09PSBcImRhcmtcIikge1xuICAgIGNoYW5nZVRoZW1lQnV0dG9uLnNldFRleHRDb250ZW50KFwiQ2hhbmdlIFRoZW1lIHRvIExpZ2h0XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImRhcmstdGhlbWVcIik7XG4gIH1cbiAgY29uc3Qgc2F2ZUdhbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlXCIpO1xuICBpZiAoc2F2ZUdhbWUpIHtcbiAgICBsb2FkR2FtZUJ1dHRvbi5zaG93KCk7XG4gIH0gZWxzZSB7XG4gICAgbG9hZEdhbWVCdXR0b24uaGlkZSgpO1xuICB9XG59KTtcblxuc29sdXRpb25CdXR0b24uaGlkZUJ1dHRvbigpO1xubmV3R2FtZUJ1dHRvbi5oaWRlQnV0dG9uKCk7XG5yZXNldEdhbWVCdXR0b24uaGlkZUJ1dHRvbigpO1xuc2F2ZUdhbWVCdXR0b24uaGlkZUJ1dHRvbigpO1xuXG5uZXdHYW1lQnV0dG9uLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydE5ld0dhbWUuc2hvd0J1dHRvbigpO1xuICByZXNldEdhbWVCdXR0b24uaGlkZUJ1dHRvbigpO1xuICBuZXdHYW1lQnV0dG9uLmhpZGVCdXR0b24oKTtcbiAgc29sdXRpb25CdXR0b24uaGlkZUJ1dHRvbigpO1xuICByYW5kb21HYW1lQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgc2F2ZUdhbWVCdXR0b24uaGlkZUJ1dHRvbigpO1xufSk7XG5cbnN0YXJ0TmV3R2FtZS5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnROZXdHYW1lLmhpZGVCdXR0b24oKTtcbiAgcmVzZXRHYW1lQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgbmV3R2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIHNvbHV0aW9uQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgcmFuZG9tR2FtZUJ1dHRvbi5oaWRlQnV0dG9uKCk7XG4gIHNhdmVHYW1lQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdGVcIikpIHtcbiAgICBsb2FkR2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIH1cbn0pO1xuXG5yYW5kb21HYW1lQnV0dG9uLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydE5ld0dhbWUuaGlkZUJ1dHRvbigpO1xuICByZXNldEdhbWVCdXR0b24uc2hvd0J1dHRvbigpO1xuICBuZXdHYW1lQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgc29sdXRpb25CdXR0b24uc2hvd0J1dHRvbigpO1xuICByYW5kb21HYW1lQnV0dG9uLmhpZGVCdXR0b24oKTtcbiAgc2F2ZUdhbWVCdXR0b24uc2hvd0J1dHRvbigpO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdGF0ZVwiKSkge1xuICAgIGxvYWRHYW1lQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgfVxufSk7XG5cbmNoYW5nZVRoZW1lQnV0dG9uLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoY2hhbmdlVGhlbWVCdXR0b24uZ2V0Tm9kZSgpLnRleHRDb250ZW50ID09PSBcIkNoYW5nZSBUaGVtZSB0byBEYXJrXCIpIHtcbiAgICBjaGFuZ2VUaGVtZUJ1dHRvbi5zZXRUZXh0Q29udGVudChcIkNoYW5nZSBUaGVtZSB0byBMaWdodFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJkYXJrLXRoZW1lXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3ItdGhlbWVcIiwgXCJkYXJrXCIpO1xuICB9IGVsc2Uge1xuICAgIGNoYW5nZVRoZW1lQnV0dG9uLnNldFRleHRDb250ZW50KFwiQ2hhbmdlIFRoZW1lIHRvIERhcmtcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay10aGVtZVwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbG9yLXRoZW1lXCIsIFwibGlnaHRcIik7XG4gIH1cbn0pO1xuXG5sb2FkR2FtZUJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnROZXdHYW1lLmhpZGVCdXR0b24oKTtcbiAgcmVzZXRHYW1lQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgbmV3R2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIHNvbHV0aW9uQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgcmFuZG9tR2FtZUJ1dHRvbi5oaWRlQnV0dG9uKCk7XG4gIHNhdmVHYW1lQnV0dG9uLnNob3dCdXR0b24oKTtcbn0pO1xuXG5zYXZlR2FtZUJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZEdhbWVCdXR0b24uc2hvd0J1dHRvbigpO1xufSk7XG5cbnNvbHV0aW9uQnV0dG9uLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzYXZlR2FtZUJ1dHRvbi5oaWRlKCk7XG59KTtcblxucmVzZXRHYW1lQnV0dG9uLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzYXZlR2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlXCIpKSB7XG4gICAgbG9hZEdhbWVCdXR0b24uc2hvd0J1dHRvbigpO1xuICB9XG59KTtcblxuZXhwb3J0IHtcbiAgcmVzZXRHYW1lQnV0dG9uLFxuICBzdGFydE5ld0dhbWUsXG4gIG5ld0dhbWVCdXR0b24sXG4gIHNvbHV0aW9uQnV0dG9uLFxuICBjaGFuZ2VUaGVtZUJ1dHRvbixcbiAgcmFuZG9tR2FtZUJ1dHRvbixcbiAgbG9hZEdhbWVCdXR0b24sXG4gIHNhdmVHYW1lQnV0dG9uLFxufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZS9jZWxsLnNjc3NcIjtcbmltcG9ydCB7IHNvdW5kUGxheUdhbWUgfSBmcm9tIFwiLi9zb3VuZEZ1bmNcIjtcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSBcIi4vdGltZXJcIjtcblxuZXhwb3J0IGNsYXNzIENlbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjaGVja2VkQ2xhc3MgPSBcImNlbGwtYmxhY2tcIjtcbiAgY3Jvc3NDbGFzcyA9IFwiY2VsbC1jcm9zc1wiO1xuICBjb25zdHJ1Y3RvcihzdGF0ZSwgZGF0YUJsYWNrKSB7XG4gICAgc3VwZXIoeyB0YWc6IFwic3BhblwiLCBjbGFzc05hbWU6IFwiY2VsbFwiIH0pO1xuICAgIHRoaXMuZGF0YUJsYWNrID0gZGF0YUJsYWNrO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICBjYXNlIFwiY2xpY2tcIjpcbiAgICAgICAgdGhpcy50b2dnbGVDaGVja2VkQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXREYXRhQmxhY2soKTtcbiAgICAgICAgdGhpcy5zb3VuZFBsYXlHYW1lKCk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjb250ZXh0bWVudVwiOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNyb3NzQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5zZXREYXRhQmxhY2soKTtcbiAgICAgICAgdGhpcy5zb3VuZFBsYXlHYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgaWYgKCF0aW1lci5nZXRTdGF0dXMoKSkgdGltZXIuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgc291bmRQbGF5R2FtZSgpIHtcbiAgICBzb3VuZFBsYXlHYW1lKCk7XG4gIH1cbiAgdG9nZ2xlQ2hlY2tlZENsYXNzKCkge1xuICAgIGlmICh0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jaGVja2VkQ2xhc3MpKSB7XG4gICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICAgIHRoaXMuZGF0YUJsYWNrID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5hZGQodGhpcy5jaGVja2VkQ2xhc3MpO1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNyb3NzQ2xhc3MpO1xuICAgICAgdGhpcy5kYXRhQmxhY2sgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0U3RhdGUoKSB7XG4gICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNyb3NzQ2xhc3MpO1xuICAgIHRoaXMuZGF0YUJsYWNrID0gZmFsc2U7XG4gICAgdGhpcy5zZXREYXRhQmxhY2soKTtcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IHJvd0F0dHJpYnV0ZSA9IHRoaXMuZ2V0Tm9kZSgpLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpO1xuICAgIGNvbnN0IGNvbEF0dHJpYnV0ZSA9IHRoaXMuZ2V0Tm9kZSgpLmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpO1xuICAgIHJldHVybiBbcm93QXR0cmlidXRlLCBjb2xBdHRyaWJ1dGVdO1xuICB9XG5cbiAgc2V0RGF0YUJsYWNrKCkge1xuICAgIGNvbnN0IFtyb3dBdHRyaWJ1dGUsIGNvbEF0dHJpYnV0ZV0gPSB0aGlzLmdldENvb3JkaW5hdGVzKCk7XG4gICAgdGhpcy5zdGF0ZS5tYXBEYXRhW3Jvd0F0dHJpYnV0ZV1bY29sQXR0cmlidXRlXSA9IHRoaXMuZGF0YUJsYWNrID8gMSA6IDA7XG4gIH1cblxuICB2aWV3U29sdXRpb24oKSB7XG4gICAgY29uc3QgW3Jvd0F0dHJpYnV0ZSwgY29sQXR0cmlidXRlXSA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBjb25zdCBpc0JsYWNrID0gdGhpcy5zdGF0ZS5yaWdodE1hcFtyb3dBdHRyaWJ1dGVdW2NvbEF0dHJpYnV0ZV07XG4gICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNyb3NzQ2xhc3MpO1xuICAgIGlmIChpc0JsYWNrKSB7XG4gICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmFkZCh0aGlzLmNyb3NzQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHZpZXdTYXZlZFN0YXRlKCkge1xuICAgIGNvbnN0IFtyb3dBdHRyaWJ1dGUsIGNvbEF0dHJpYnV0ZV0gPSB0aGlzLmdldENvb3JkaW5hdGVzKCk7XG4gICAgY29uc3QgaXNCbGFjayA9IHRoaXMuc3RhdGUubWFwRGF0YVtyb3dBdHRyaWJ1dGVdW2NvbEF0dHJpYnV0ZV07XG4gICAgaWYgKGlzQmxhY2spIHtcbiAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5hZGQodGhpcy5jaGVja2VkQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jcm9zc0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDcm9zc0NsYXNzKCkge1xuICAgIGlmICh0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jcm9zc0NsYXNzKSkge1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNyb3NzQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuYWRkKHRoaXMuY3Jvc3NDbGFzcyk7XG4gICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICAgIHRoaXMuZGF0YUJsYWNrID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gXCIuL3RpbWVyXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUvY29udHJvbHMtcGFuZWwuc2Nzc1wiO1xuaW1wb3J0IHtcbiAgbG9hZEdhbWVCdXR0b24sXG4gIG5ld0dhbWVCdXR0b24sXG4gIHJhbmRvbUdhbWVCdXR0b24sXG4gIHJlc2V0R2FtZUJ1dHRvbixcbiAgc2F2ZUdhbWVCdXR0b24sXG4gIHNvbHV0aW9uQnV0dG9uLFxuICBzdGFydE5ld0dhbWUsXG59IGZyb20gXCIuL2J1dHRvbnNcIjtcbmltcG9ydCB7IGRpdlNlbGVjdExldmVsLCBkaXZTZWxlY3RNYXBOYW1lIH0gZnJvbSBcIi4vc2VsZWN0XCI7XG5cbmNsYXNzIENvbnRyb2xzUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFwiY29udHJvbHMtcGFuZWxcIixcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBjb250cm9sc1BhbmVsID0gbmV3IENvbnRyb2xzUGFuZWwoKTtcbmNvbnRyb2xzUGFuZWwuYXBwZW5kQ2hpbGRyZW4oW1xuICB0aW1lcixcbiAgc3RhcnROZXdHYW1lLFxuICBuZXdHYW1lQnV0dG9uLFxuICBzb2x1dGlvbkJ1dHRvbixcbiAgcmVzZXRHYW1lQnV0dG9uLFxuICBkaXZTZWxlY3RMZXZlbCxcbiAgZGl2U2VsZWN0TWFwTmFtZSxcbiAgcmFuZG9tR2FtZUJ1dHRvbixcbiAgc2F2ZUdhbWVCdXR0b24sXG4gIGxvYWRHYW1lQnV0dG9uLFxuXSk7XG5cbmV4cG9ydCB7IGNvbnRyb2xzUGFuZWwgfTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZS9mb290ZXIuc2Nzc1wiO1xuXG5jb25zdCBsaW5rID0gbmV3IENvbXBvbmVudCh7XG4gIHRhZzogXCJhXCIsXG4gIGNsYXNzTmFtZTogXCJmb290ZXItbGlua1wiLFxuICB0ZXh0OiBcIkNyZWF0ZWQgYnkgWmh1Y2hrb3YgQWxla3NlaSwgMjAyNVwiLFxuICBhdHRyaWJ1dGVzOiB7IGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3podWNoa292XCIgfSxcbn0pO1xuXG5saW5rLmdldE5vZGUoKS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5saW5rLmdldE5vZGUoKS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL3podWNoa292XCIpO1xuXG5jb25zdCBmb290ZXIgPSBuZXcgQ29tcG9uZW50KFxuICB7XG4gICAgdGFnOiBcImZvb3RlclwiLFxuICAgIGNsYXNzTmFtZTogXCJmb290ZXJcIixcbiAgICB0ZXh0OiBcIlwiLFxuICB9LFxuICBsaW5rXG4pO1xuXG5leHBvcnQgeyBmb290ZXIgfTtcbiIsImltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gXCIuLi9jb25zdGFudHMvY29uc3RhbnRcIjtcbmltcG9ydCB7IGNyb3NzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9tYXAvbWFwXCI7XG5pbXBvcnQgeyBwbGF5ZXJNYXAgfSBmcm9tIFwiLi4vY29uc3RhbnRzL21hcC9wbGF5ZXJNYXBcIjtcbmltcG9ydCB7IGNvbXBhcmUyREFycmF5cywgcmFuZG9tSW50RnJvbUludGVydmFsIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uXCI7XG5pbXBvcnQge1xuICBsb2FkR2FtZUJ1dHRvbixcbiAgbmV3R2FtZUJ1dHRvbixcbiAgcmFuZG9tR2FtZUJ1dHRvbixcbiAgcmVzZXRHYW1lQnV0dG9uLFxuICBzYXZlR2FtZUJ1dHRvbixcbiAgc29sdXRpb25CdXR0b24sXG4gIHN0YXJ0TmV3R2FtZSxcbn0gZnJvbSBcIi4vYnV0dG9uc1wiO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB7IEdhbWVQbGFjZUluZm8gfSBmcm9tIFwiLi9nYW1lUGxhY2VJbmZvXCI7XG5pbXBvcnQgeyBtZXNzYWdlUGxhY2UgfSBmcm9tIFwiLi9tZXNzYWdlRG93bkJveFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgZGl2U2VsZWN0TGV2ZWwsIGRpdlNlbGVjdE1hcE5hbWUgfSBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCB7IHNvdW5kUGxheVdpbiB9IGZyb20gXCIuL3NvdW5kRnVuY1wiO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tIFwiLi90aW1lclwiO1xuXG5jb25zdCBzdGF0ZSA9IHsgY2VsbHM6IHt9LCBsZXZlbDogbnVsbCwgbWFwTmFtZTogbnVsbCwgcmlnaHRNYXA6IG51bGwgfTtcbmNvbnN0IG1lc3NhZ2VCb3ggPSBuZXcgQ29tcG9uZW50KHtcbiAgdGFnOiBcInNwYW5cIixcbiAgY2xhc3NOYW1lOiBcIm1lc3NhZ2UtYm94XCIsXG4gIHRleHQ6IFwiXCIsXG59KTtcbm1lc3NhZ2VCb3guaGlkZSgpO1xuY29uc3QgbWVzc2FnZUluZm9HYW1lID0gbmV3IENvbXBvbmVudCh7XG4gIHRhZzogXCJzcGFuXCIsXG4gIGNsYXNzTmFtZTogXCJtZXNzYWdlLWJveFwiLFxuICB0ZXh0OiBcIlwiLFxufSk7XG5tZXNzYWdlSW5mb0dhbWUuaGlkZSgpO1xubWVzc2FnZUJveC5oaWRlKCk7XG5cbmV4cG9ydCBjbGFzcyBHYW1lUGxhY2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IHN0YXRlLCBtYXAgfSwgLi4uY2hpbGRyZW4pIHtcbiAgICBzdXBlcih7IHRhZzogXCJkaXZcIiwgY2xhc3NOYW1lOiBcImdhbWUtcGxhY2VcIiB9LCAuLi5jaGlsZHJlbik7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMubWFwID0gbWFwO1xuICAgIHRoaXMud2luID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVNYXAoKTtcblxuICAgIHRoaXMuYWRkTGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpO1xuICAgICAgICBjb25zdCBjb2wgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sdW1uLmFjdGl2ZVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdYCk/LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbD1cIiR7Y29sfVwiXWApPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAvLyBpZiAoIXRpbWVyLmdldFN0YXR1cygpKSB0aW1lci5zdGFydFRpbWVyKCk7XG4gICAgICAgIGxldCBjaGVjayA9IGNvbXBhcmUyREFycmF5cyh0aGlzLm1hcCwgdGhpcy5zdGF0ZS5tYXBEYXRhKTtcbiAgICAgICAgaWYgKGNoZWNrICYmICF0aGlzLndpbikge1xuICAgICAgICAgIGNvbnN0IGR1cmF0aW9uSW5TZWNvbmRzID0gdGltZXIuc3RvcFRpbWVyKCk7XG4gICAgICAgICAgbWVzc2FnZUJveC5zZXRUZXh0Q29udGVudChcbiAgICAgICAgICAgIFwiWW91IHdpbiEgVGltZTogXCIgKyBkdXJhdGlvbkluU2Vjb25kcyArIFwiIHNlY29uZHNcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3Qgd2lubmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5uZXJcIik7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHRpbWU6IGR1cmF0aW9uSW5TZWNvbmRzICsgXCIgc2Vjb25kc1wiLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5tYXBOYW1lLFxuICAgICAgICAgICAgbGV2ZWw6IHRoaXMuc3RhdGUubGV2ZWwsXG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICghd2lubmVyKSB7XG4gICAgICAgICAgICBkYXRhLmlkID0gMDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2lubmVyXCIsIEpTT04uc3RyaW5naWZ5KFtkYXRhXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzYXZlV2lubmVycyA9IEpTT04ucGFyc2Uod2lubmVyKTtcbiAgICAgICAgICAgIGNvbnN0IG1heElkID0gc2F2ZVdpbm5lcnMucmVkdWNlKFxuICAgICAgICAgICAgICAobWF4LCBpdGVtKSA9PiAoaXRlbS5pZCA+IG1heCA/IGl0ZW0uaWQgOiBtYXgpLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGF0YS5pZCA9IG1heElkICsgMTtcbiAgICAgICAgICAgIGNvbnN0IG1pbklkID0gc2F2ZVdpbm5lcnMucmVkdWNlKFxuICAgICAgICAgICAgICAobWluLCBpdGVtKSA9PiAoaXRlbS5pZCA8IG1pbiA/IGl0ZW0uaWQgOiBtaW4pLFxuICAgICAgICAgICAgICBJbmZpbml0eVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKHNhdmVXaW5uZXJzLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgc2F2ZVdpbm5lcnMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgXCJ3aW5uZXJcIixcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgIHNhdmVXaW5uZXJzLnNvcnQoXG4gICAgICAgICAgICAgICAgICAgIChhLCBiKSA9PiBwYXJzZUludChhLnRpbWUpIC0gcGFyc2VJbnQoYi50aW1lKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHdoaWxlIChzYXZlV2lubmVycy5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICAgIC8vICAgc2F2ZVdpbm5lcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgLy8gfXNcbiAgICAgICAgICAgICAgc2F2ZVdpbm5lcnMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRXaW5uZXJzID0gc2F2ZVdpbm5lcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID4gbWluSWRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgXCJ3aW5uZXJcIixcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgIGZpbHRlcmVkV2lubmVycy5zb3J0KFxuICAgICAgICAgICAgICAgICAgICAoYSwgYikgPT4gcGFyc2VJbnQoYS50aW1lKSAtIHBhcnNlSW50KGIudGltZSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIG1lc3NhZ2VQbGFjZS5sb2FkKCk7XG4gICAgICAgICAgaWYgKCF0aGlzLndpbikge1xuICAgICAgICAgICAgc291bmRQbGF5V2luKCk7XG4gICAgICAgICAgICBsb2FkR2FtZUJ1dHRvbi5oaWRlKCk7XG4gICAgICAgICAgICBzYXZlR2FtZUJ1dHRvbi5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMud2luID0gdHJ1ZTtcbiAgICAgICAgICBzb2x1dGlvbkJ1dHRvbi5oaWRlKCk7XG4gICAgICAgICAgbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLmNlbGxzKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWUucmVtb3ZlTGlzdGVuZXIoXCJjbGlja1wiLCB2YWx1ZS5oYW5kbGVDbGljayk7XG4gICAgICAgICAgICB2YWx1ZS5yZW1vdmVMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHZhbHVlLmhhbmRsZUNsaWNrKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTWFwKCkge1xuICAgIHRoaXMud2luID0gZmFsc2U7XG4gICAgbWVzc2FnZUluZm9HYW1lLnNldFRleHRDb250ZW50KFxuICAgICAgYE5hbWUgbWFwOiBcIiR7dGhpcy5zdGF0ZS5tYXBOYW1lfVwiLCBsZXZlbDogXCIke3RoaXMuc3RhdGUubGV2ZWx9XCIsIHNpemU6ICR7dGhpcy5tYXAubGVuZ3RofXgke3RoaXMubWFwWzBdLmxlbmd0aH1gXG4gICAgKTtcbiAgICBtZXNzYWdlQm94LmhpZGUoKTtcbiAgICB0aGlzLnN0YXRlLnJpZ2h0TWFwID0gdGhpcy5tYXA7XG4gICAgdGhpcy5zdGF0ZS5tYXBEYXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5tYXAubGVuZ3RoIH0sICgpID0+XG4gICAgICBBcnJheSh0aGlzLm1hcFswXS5sZW5ndGgpLmZpbGwoMClcbiAgICApO1xuICAgIGNvbnN0IGdhbWVQbGFjZU1haW4gPSBuZXcgQ29tcG9uZW50KHtcbiAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgIGNsYXNzTmFtZTogXCJnYW1lLXBsYWNlLW1haW5cIixcbiAgICB9KTtcbiAgICBjb25zdCBnYW1lUGxhY2VCbG9jayA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgY2xhc3NOYW1lOiBcImdhbWUtcGxhY2UtYmxvY2tcIixcbiAgICB9KTtcbiAgICBjb25zdCBnYW1lUGxhY2VIZWFkZXJJbmZvID0gbmV3IEdhbWVQbGFjZUluZm8oe1xuICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04udXAsXG4gICAgfSk7XG4gICAgY29uc3QgZ2FtZVBsYWNlTGVmdEluZm8gPSBuZXcgR2FtZVBsYWNlSW5mbyh7XG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICBkaXJlY3Rpb246IERJUkVDVElPTi5sZWZ0LFxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUuY2VsbHMgPSB7fTtcbiAgICB0aGlzLm1hcC5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50SW5Sb3cgPSBbXTtcbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBqSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGNlbGwgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IGNlbGxOb2RlID0gbmV3IENlbGwodGhpcy5zdGF0ZSwgZGF0YSk7XG4gICAgICAgIGNlbGxOb2RlLmdldE5vZGUoKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBpbmRleCk7XG4gICAgICAgIGNlbGxOb2RlLmdldE5vZGUoKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBqSW5kZXgpO1xuICAgICAgICBlbGVtZW50SW5Sb3cucHVzaChjZWxsTm9kZSk7XG4gICAgICAgIHRoaXMuc3RhdGUuY2VsbHNbYCR7aW5kZXh9LSR7akluZGV4fWBdID0gY2VsbE5vZGU7XG4gICAgICAgIGNlbGxOb2RlLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgY2VsbE5vZGUuaGFuZGxlQ2xpY2spO1xuICAgICAgICBjZWxsTm9kZS5hZGRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGNlbGxOb2RlLmhhbmRsZUNsaWNrKTtcbiAgICAgIH0pO1xuICAgICAgZ2FtZVBsYWNlTWFpbi5hcHBlbmQoXG4gICAgICAgIG5ldyBDb21wb25lbnQoeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJyb3dcIiB9LCAuLi5lbGVtZW50SW5Sb3cpXG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGRyZW4oW1xuICAgICAgZ2FtZVBsYWNlQmxvY2ssXG4gICAgICBnYW1lUGxhY2VIZWFkZXJJbmZvLFxuICAgICAgZ2FtZVBsYWNlTGVmdEluZm8sXG4gICAgICBnYW1lUGxhY2VNYWluLFxuICAgIF0pO1xuICB9XG5cbiAgcmVzZXRNYXAoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLmNlbGxzKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgdmFsdWUuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCB2YWx1ZS5oYW5kbGVDbGljayk7XG4gICAgICB2YWx1ZS5hZGRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHZhbHVlLmhhbmRsZUNsaWNrKTtcbiAgICAgIHZhbHVlLnJlc2V0U3RhdGUoKTtcbiAgICB9KTtcbiAgICB0aW1lci5yZXNldFRpbWVyKCk7XG4gICAgbWVzc2FnZUJveC5oaWRlKCk7XG4gIH1cblxuICB2aWV3U2F2ZWRNYXAoc2VjKSB7XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLmNlbGxzKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgdmFsdWUudmlld1NhdmVkU3RhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZpZXdTb2x1dGlvbigpIHtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUuY2VsbHMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICB2YWx1ZS5yZW1vdmVMaXN0ZW5lcihcImNsaWNrXCIsIHZhbHVlLmhhbmRsZUNsaWNrKTtcbiAgICAgIHZhbHVlLnJlbW92ZUxpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgdmFsdWUuaGFuZGxlQ2xpY2spO1xuICAgICAgdmFsdWUudmlld1NvbHV0aW9uKCk7XG4gICAgfSk7XG4gICAgdGltZXIucmVzZXRUaW1lcigpO1xuICB9XG5cbiAgaGlkZU1hcCgpIHtcbiAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICB2aWV3TWFwKCkge1xuICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgfVxufVxuXG5jb25zdCBnYW1lUGxhY2UgPSBuZXcgR2FtZVBsYWNlKHtcbiAgc3RhdGUsXG4gIG1hcDogT2JqZWN0LnZhbHVlcyhPYmplY3QudmFsdWVzKHBsYXllck1hcClbMF0ubWFwcylbMF0sXG59KTtcbmdhbWVQbGFjZS5oaWRlKCk7XG5cbi8vIGJ1dHRvbnMgbG9naWNcblxucmVzZXRHYW1lQnV0dG9uLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBnYW1lUGxhY2Uud2luID0gZmFsc2U7XG4gIGdhbWVQbGFjZS5yZXNldE1hcCgpO1xuICBzb2x1dGlvbkJ1dHRvbi5zaG93KCk7XG4gIG1lc3NhZ2VQbGFjZS5oaWRlKCk7XG59KTtcblxubmV3R2FtZUJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbWVzc2FnZUJveC5oaWRlKCk7XG4gIG1lc3NhZ2VJbmZvR2FtZS5oaWRlKCk7XG4gIGdhbWVQbGFjZS5oaWRlTWFwKCk7XG4gIGRpdlNlbGVjdExldmVsLnNob3coKTtcbiAgZGl2U2VsZWN0TWFwTmFtZS5zaG93KCk7XG4gIHRpbWVyLmhpZGUoKTtcbiAgbWVzc2FnZVBsYWNlLnNob3coXCJmbGV4XCIpO1xuICBtZXNzYWdlUGxhY2UubG9hZCgpO1xufSk7XG5cbmNvbnN0IGFsZ29yaXRobVRvU3RhcnRHYW1lID0gKG1hcCkgPT4ge1xuICBnYW1lUGxhY2Uudmlld01hcCgpO1xuICBnYW1lUGxhY2UuZGVzdHJveUNoaWxkcmVuKCk7XG4gIGRpdlNlbGVjdExldmVsLmhpZGUoKTtcbiAgZGl2U2VsZWN0TWFwTmFtZS5oaWRlKCk7XG4gIHRpbWVyLnNob3coKTtcbiAgdGltZXIucmVzZXRUaW1lcigpO1xuICBnYW1lUGxhY2UubWFwID0gbWFwO1xuICBnYW1lUGxhY2UuY3JlYXRlTWFwKCk7XG59O1xuXG5zdGFydE5ld0dhbWUuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGxldmVsID0gZGl2U2VsZWN0TGV2ZWwuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWU7XG4gIGNvbnN0IG1hcE5hbWUgPSBkaXZTZWxlY3RNYXBOYW1lLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLnZhbHVlO1xuICBzdGF0ZS5sZXZlbCA9IGxldmVsO1xuICBzdGF0ZS5tYXBOYW1lID0gbWFwTmFtZTtcbiAgY29uc3QgbWFwID0gcGxheWVyTWFwW2xldmVsXS5tYXBzW21hcE5hbWVdO1xuICBhbGdvcml0aG1Ub1N0YXJ0R2FtZShtYXApO1xuICBtZXNzYWdlSW5mb0dhbWUuc2hvdygpO1xuICBtZXNzYWdlUGxhY2UuaGlkZSgpO1xufSk7XG5cbnJhbmRvbUdhbWVCdXR0b24uYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGxldmVsSW5kID0gcmFuZG9tSW50RnJvbUludGVydmFsKDAsIE9iamVjdC5rZXlzKHBsYXllck1hcCkubGVuZ3RoIC0gMSk7XG4gIGNvbnN0IGxldmVsID0gT2JqZWN0LmtleXMocGxheWVyTWFwKVtsZXZlbEluZF07XG4gIGNvbnN0IG1hcE5hbWVJbmQgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoXG4gICAgMCxcbiAgICBPYmplY3Qua2V5cyhwbGF5ZXJNYXBbbGV2ZWxdLm1hcHMpLmxlbmd0aCAtIDFcbiAgKTtcbiAgY29uc3QgbWFwTmFtZSA9IE9iamVjdC5rZXlzKHBsYXllck1hcFtsZXZlbF0ubWFwcylbbWFwTmFtZUluZF07XG4gIHN0YXRlLmxldmVsID0gbGV2ZWw7XG4gIHN0YXRlLm1hcE5hbWUgPSBtYXBOYW1lO1xuICBjb25zdCBtYXAgPSBwbGF5ZXJNYXBbbGV2ZWxdLm1hcHNbbWFwTmFtZV07XG4gIGFsZ29yaXRobVRvU3RhcnRHYW1lKG1hcCk7XG4gIG1lc3NhZ2VJbmZvR2FtZS5zaG93KCk7XG4gIG1lc3NhZ2VQbGFjZS5oaWRlKCk7XG59KTtcblxuc29sdXRpb25CdXR0b24uYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNvbHV0aW9uQnV0dG9uLmhpZGUoKTtcbiAgZ2FtZVBsYWNlLnZpZXdTb2x1dGlvbigpO1xuICB0aW1lci5oaWRlKCk7XG59KTtcblxuc2F2ZUdhbWVCdXR0b24uYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIFwic3RhdGVcIixcbiAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBtYXA6IHN0YXRlLm1hcERhdGEsXG4gICAgICBuYW1lOiBzdGF0ZS5tYXBOYW1lLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsLFxuICAgICAgdGltZTogdGltZXIuZ2V0RHVyYXRpb24oKSxcbiAgICB9KVxuICApO1xufSk7XG5cbmxvYWRHYW1lQnV0dG9uLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB7IG1hcCwgbmFtZSwgbGV2ZWwsIHRpbWUgfSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdGF0ZVwiKSk7XG4gIHN0YXRlLmxldmVsID0gbGV2ZWw7XG4gIHN0YXRlLm1hcE5hbWUgPSBuYW1lO1xuICBjb25zdCBuZXdNYXAgPSBwbGF5ZXJNYXBbbGV2ZWxdLm1hcHNbbmFtZV07XG5cbiAgZ2FtZVBsYWNlLnZpZXdNYXAoKTtcbiAgZ2FtZVBsYWNlLmRlc3Ryb3lDaGlsZHJlbigpO1xuICBkaXZTZWxlY3RMZXZlbC5oaWRlKCk7XG4gIGRpdlNlbGVjdE1hcE5hbWUuaGlkZSgpO1xuICBnYW1lUGxhY2UubWFwID0gbmV3TWFwO1xuICBnYW1lUGxhY2UuY3JlYXRlTWFwKCk7XG4gIHN0YXRlLm1hcERhdGEgPSBtYXA7XG4gIHRpbWVyLnN0YXJ0VGltZXIodGltZSk7XG4gIGdhbWVQbGFjZS52aWV3U2F2ZWRNYXAodGltZSk7XG4gIG1lc3NhZ2VJbmZvR2FtZS5zaG93KCk7XG4gIG1lc3NhZ2VQbGFjZS5oaWRlKCk7XG59KTtcblxuZXhwb3J0IHsgZ2FtZVBsYWNlLCBtZXNzYWdlQm94LCBtZXNzYWdlSW5mb0dhbWUgfTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZS9nYW1lLXBsYWNlLWluZm8uc2Nzc1wiO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudFwiO1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lUGxhY2VJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBzdGF0ZSwgbWFwLCBkaXJlY3Rpb24gfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgIGNsYXNzTmFtZTogXCJnYW1lLXBsYWNlLWluZm8gXCIgKyBkaXJlY3Rpb24sXG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMubWFwID0gbWFwO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMubWF4TGVuZ3RoTWFwID0gbWF4TGVuZ3RoKG1hcCk7XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IERJUkVDVElPTi51cCkge1xuICAgICAgdGhpcy5jcmVhdGVJbmZvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JlYXRlSW5mb0xlZnQoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJbmZvKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXBbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG5ldyBDb21wb25lbnQoeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJjb2x1bW5cIiB9KTtcbiAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBpKTtcbiAgICAgIGxldCBjb3VudENvbHVtbiA9IDA7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1hcC5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5tYXBbal1baV0gPT09IDEpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFwW2pdW2ldID09PSAwICYmIGNvdW50ID4gMCkge1xuICAgICAgICAgIGNvbHVtbi5hcHBlbmQoXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KHsgdGFnOiBcInNwYW5cIiwgY2xhc3NOYW1lOiBcInNlbGwtaW5mb1wiLCB0ZXh0OiBjb3VudCB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgY291bnRDb2x1bW4gKz0gMTtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgY29sdW1uLmFwcGVuZChcbiAgICAgICAgICBuZXcgQ29tcG9uZW50KHsgdGFnOiBcInNwYW5cIiwgY2xhc3NOYW1lOiBcInNlbGwtaW5mb1wiLCB0ZXh0OiBjb3VudCB9KVxuICAgICAgICApO1xuICAgICAgICBjb3VudENvbHVtbiArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5hcHBlbmQoY29sdW1uKTtcbiAgICAgIGlmIChjb3VudENvbHVtbiA8IHRoaXMubWF4TGVuZ3RoTWFwLnZlcnRpY2FsKSB7XG4gICAgICAgIHdoaWxlIChjb3VudENvbHVtbiA8IHRoaXMubWF4TGVuZ3RoTWFwLnZlcnRpY2FsKSB7XG4gICAgICAgICAgY29sdW1uLnByZXBlbmQoXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KHtcbiAgICAgICAgICAgICAgdGFnOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInNlbGwtaW5mbyBlbXB0eVwiLFxuICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvdW50Q29sdW1uICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVJbmZvTGVmdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSBuZXcgQ29tcG9uZW50KHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBjbGFzc05hbWU6IGBjb2x1bW5gLFxuICAgICAgfSk7XG4gICAgICBjb2x1bW4uc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgaSk7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgbGV0IGNvdW50Q29sdW1uID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXBbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMubWFwW2ldW2pdID09PSAxKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hcFtpXVtqXSA9PT0gMCAmJiBjb3VudCA+IDApIHtcbiAgICAgICAgICBjb2x1bW4uYXBwZW5kKFxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCh7IHRhZzogXCJzcGFuXCIsIGNsYXNzTmFtZTogXCJzZWxsLWluZm9cIiwgdGV4dDogY291bnQgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvdW50Q29sdW1uICs9IDE7XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIGNvbHVtbi5hcHBlbmQoXG4gICAgICAgICAgbmV3IENvbXBvbmVudCh7IHRhZzogXCJzcGFuXCIsIGNsYXNzTmFtZTogXCJzZWxsLWluZm9cIiwgdGV4dDogY291bnQgfSlcbiAgICAgICAgKTtcbiAgICAgICAgY291bnRDb2x1bW4gKz0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYXBwZW5kKGNvbHVtbik7XG4gICAgICBpZiAoY291bnRDb2x1bW4gPCB0aGlzLm1heExlbmd0aE1hcC5ob3Jpem9udGFsKSB7XG4gICAgICAgIHdoaWxlIChjb3VudENvbHVtbiA8IHRoaXMubWF4TGVuZ3RoTWFwLmhvcml6b250YWwpIHtcbiAgICAgICAgICBjb2x1bW4ucHJlcGVuZChcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgICB0YWc6IFwic3BhblwiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic2VsbC1pbmZvIGVtcHR5XCIsXG4gICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgY291bnRDb2x1bW4gKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlL2hlYWRlci5zY3NzXCI7XG5pbXBvcnQgeyBjaGFuZ2VUaGVtZUJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvbnNcIjtcblxuY29uc3QgaGVhZGVyID0gbmV3IENvbXBvbmVudChcbiAge1xuICAgIHRhZzogXCJoZWFkZXJcIixcbiAgICBjbGFzc05hbWU6IFwiaGVhZGVyXCIsXG4gICAgdGV4dDogXCJOb25vZ3JhbXNcIixcbiAgfSxcbiAgY2hhbmdlVGhlbWVCdXR0b25cbik7XG5cbmV4cG9ydCB7IGhlYWRlciB9O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlL21lc3NhZ2UtZG93bi1ib3guc2Nzc1wiO1xuXG5jbGFzcyBtZXNzYWdlRG93bkJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgdGFnID0gXCJkaXZcIiwgY2xhc3NOYW1lID0gXCJcIiwgdGV4dCA9IFwiOlwiIH0pIHtcbiAgICBzdXBlcih7IHRhZywgY2xhc3NOYW1lOiBcIm1lc3NhZ2UtZG93bi1ib3ggXCIgKyBjbGFzc05hbWUsIHRleHQgfSk7XG4gIH1cblxuICBhZGRJbmZvKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB0aGlzLmFwcGVuZChcbiAgICAgIG5ldyBDb21wb25lbnQoe1xuICAgICAgICB0YWc6IFwic3BhblwiLFxuICAgICAgICBjbGFzc05hbWU6IFwiaW5mb1wiLFxuICAgICAgICB0ZXh0OiBgU0NPUkU6ICR7ZGF0YS5sZW5ndGggPT09IDAgPyBcIm5vdGhpbmcgZWxzZSB0byBzaG93XCIgOiBcIlwifWAsXG4gICAgICB9KVxuICAgICk7XG4gICAgLy8gaWYgKGRhdGEubGVuZ3RoID4gMCkge31cbiAgICBjb25zdCBuZXdJbmZvID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IG5ldyBDb21wb25lbnQoeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJpbmZvLXJvd1wiIH0pO1xuICAgICAgY29uc3QgaW5mbyA9IE9iamVjdC5lbnRyaWVzKGl0ZW0pLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBuZXcgQ29tcG9uZW50KHtcbiAgICAgICAgICB0YWc6IFwic3BhblwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGluZm8gJHtrZXl9YCxcbiAgICAgICAgICB0ZXh0OiBgJHtrZXl9IC0gJHt2YWx1ZX1gLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICB9KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZHJlbihpbmZvKTtcbiAgICAgIHJldHVybiBkaXY7XG4gICAgfSk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZHJlbihuZXdJbmZvKTtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5kZXN0cm95Q2hpbGRyZW4oKTtcbiAgICBjb25zdCB3aW5uZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbm5lclwiKTtcbiAgICBpZiAod2lubmVyKSB7XG4gICAgICB0aGlzLmFkZEluZm8oSlNPTi5wYXJzZSh3aW5uZXIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRJbmZvKFtdKTtcbiAgICB9XG4gICAgdGhpcy5zaG93KFwiZmxleFwiKTtcbiAgfVxufVxuXG5jb25zdCBtZXNzYWdlUGxhY2UgPSBuZXcgbWVzc2FnZURvd25Cb3goe1xuICB0YWc6IFwiZGl2XCIsXG4gIGNsYXNzTmFtZTogXCJtZXNzYWdlLXBsYWNlXCIsXG4gIHRleHQ6IFwiXCIsXG59KTtcbmV4cG9ydCB7IG1lc3NhZ2VQbGFjZSB9O1xuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAdHlwZSB7QXJyYXk8Q29tcG9uZW50Pn0gLSBBbiBhcnJheSB0byBzdG9yZSBjaGlsZCBjb21wb25lbnRzLlxuICAgKi9cbiAgI2NoaWxkcmVuID0gW107XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH0gLSBUaGUgSFRNTCBub2RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgI25vZGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IENvbXBvbmVudC5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoZSBjb21wb25lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0aW9ucy50YWcgLSBIVE1MIGVsZW1lbnQgdGFnIChkZWZhdWx0IGlzICdkaXYnKS5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRpb25zLmNsYXNzTmFtZSAtIENTUyBjbGFzcyBuYW1lIGZvciB0aGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRpb25zLnRleHQgLSBUZXh0IGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7Li4uQ29tcG9uZW50fSBjaGlsZHJlbiAtIENoaWxkIGNvbXBvbmVudHMgdG8gYmUgYXBwZW5kZWQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHRhZyA9IFwiZGl2XCIsIGNsYXNzTmFtZSA9IFwiXCIsIHRleHQgPSBcIlwiIH0sIC4uLmNoaWxkcmVuKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB0aGlzLiNub2RlID0gbm9kZTtcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZHJlbihjaGlsZHJlbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBjaGlsZCBjb21wb25lbnQgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY2hpbGQgLSBUaGUgY2hpbGQgY29tcG9uZW50IHRvIGJlIGFwcGVuZGVkLlxuICAgKi9cbiAgYXBwZW5kKGNoaWxkKSB7XG4gICAgdGhpcy4jY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgdGhpcy4jbm9kZS5hcHBlbmQoY2hpbGQuZ2V0Tm9kZSgpKTtcbiAgfVxuICAvKipcbiAgICogUHJlcGVuZCBhIGNoaWxkIGNvbXBvbmVudCB0byB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjaGlsZCAtIFRoZSBjaGlsZCBjb21wb25lbnQgdG8gYmUgcHJlcGVuZGVkLlxuICAgKi9cbiAgcHJlcGVuZChjaGlsZCkge1xuICAgIHRoaXMuI2NoaWxkcmVuLnVuc2hpZnQoY2hpbGQpO1xuICAgIHRoaXMuI25vZGUucHJlcGVuZChjaGlsZC5nZXROb2RlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYW4gYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyB0byB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gICAqIEBwYXJhbSB7QXJyYXk8Q29tcG9uZW50Pn0gY2hpbGRyZW4gLSBBcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIHRvIGJlIGFwcGVuZGVkLlxuICAgKi9cbiAgYXBwZW5kQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgdGhpcy5hcHBlbmQoZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEhUTUwgbm9kZSBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbXBvbmVudC5cbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIFRoZSBIVE1MIG5vZGUuXG4gICAqL1xuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLiNub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cy5cbiAgICogQHJldHVybnMge0FycmF5PENvbXBvbmVudD59IC0gQXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cy5cbiAgICovXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLiNjaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBUaGUgdGV4dCBjb250ZW50IHRvIGJlIHNldC5cbiAgICovXG4gIHNldFRleHRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLiNub2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIGF0dHJpYnV0ZSBvbiB0aGUgY29tcG9uZW50J3MgSFRNTCBub2RlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlIC0gVGhlIGF0dHJpYnV0ZSB0byBzZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzZXQgZm9yIHRoZSBhdHRyaWJ1dGUuXG4gICAqL1xuICBzZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIHRoaXMuI25vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gYXR0cmlidXRlIGZyb20gdGhlIGNvbXBvbmVudCdzIEhUTUwgbm9kZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBhdHRyaWJ1dGUgdG8gcmVtb3ZlLlxuICAgKi9cbiAgcmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSkge1xuICAgIHRoaXMuI25vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgcHJlc2VuY2Ugb2YgYSBDU1MgY2xhc3Mgb24gdGhlIGNvbXBvbmVudCdzIEhUTUwgbm9kZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyBuYW1lIHRvIHRvZ2dsZS5cbiAgICovXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuI25vZGUuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIEhUTUwgbm9kZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IHR5cGUgdG8gbGlzdGVuIGZvci5cbiAgICogQHBhcmFtIHtFdmVudExpc3RlbmVyfSBsaXN0ZW5lciAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSBldmVudCBvY2N1cnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbnxBZGRFdmVudExpc3RlbmVyT3B0aW9uc30gW29wdGlvbnM9ZmFsc2VdIC0gQW4gb3B0aW9ucyBvYmplY3Qgc3BlY2lmeWluZyBjaGFyYWN0ZXJpc3RpY3Mgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgKi9cbiAgYWRkTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zID0gZmFsc2UpIHtcbiAgICB0aGlzLiNub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIGNvbXBvbmVudCdzIEhUTUwgbm9kZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IHR5cGUgZm9yIHdoaWNoIHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYmUgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHtib29sZWFufEV2ZW50TGlzdGVuZXJPcHRpb25zfSBbb3B0aW9ucz1mYWxzZV0gLSBPcHRpb25zIHRoYXQgd2VyZSB1c2VkIHdoZW4gYWRkaW5nIHRoZSBsaXN0ZW5lci5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyA9IGZhbHNlKSB7XG4gICAgdGhpcy4jbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgYWxsIGNoaWxkIGNvbXBvbmVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IGNvbXBvbmVudC5cbiAgICovXG4gIGRlc3Ryb3lDaGlsZHJlbigpIHtcbiAgICB0aGlzLiNjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMuI2NoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGFuZCByZW1vdmVzIGl0cyBIVE1MIG5vZGUgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lDaGlsZHJlbigpO1xuICAgIHRoaXMuI25vZGUucmVtb3ZlKCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuI25vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgc2hvdyhwb3NpdGlvbiA9IFwiYmxvY2tcIikge1xuICAgIHRoaXMuI25vZGUuc3R5bGUuZGlzcGxheSA9IHBvc2l0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwbGF5ZXJNYXAgfSBmcm9tIFwiLi4vY29uc3RhbnRzL21hcC9wbGF5ZXJNYXBcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZS9zZWxlY3Quc2Nzc1wiO1xuaW1wb3J0IHsgc291bmRCdXR0b25DbGljaywgc291bmRQbGF5Rm9jdXMgfSBmcm9tIFwiLi9zb3VuZEZ1bmNcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KHsgdGFnLCBjbGFzc05hbWUsIHRleHQsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ29tcG9uZW50KHsgdGFnLCBjbGFzc05hbWUsIHRleHQgfSk7XG4gIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGVsZW1lbnQuZ2V0Tm9kZSgpLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jbGFzcyBDcmVhdGVTZWxlY3RUYWcge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zLCBhdHRyaWJ1dGUsIGxhYmVsVGV4dCA9IFwiU2VsZWN0IHNpemVcIikge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XG4gICAgdGhpcy5sYWJlbFRleHQgPSBsYWJlbFRleHQ7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgZGl2U2VsZWN0ID0gY3JlYXRlQ29tcG9uZW50KHtcbiAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgIGNsYXNzTmFtZTogXCJzZWxlY3QtcGxhY2VcIixcbiAgICB9KTtcbiAgICBjb25zdCBmaWVsZHNldCA9IGNyZWF0ZUNvbXBvbmVudCh7XG4gICAgICB0YWc6IFwiZmllbGRzZXRcIixcbiAgICAgIGNsYXNzTmFtZTogXCJmaWVsZHNldFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGxhYmVsRm9yU2VsZWN0ID0gY3JlYXRlQ29tcG9uZW50KHtcbiAgICAgIHRhZzogXCJsYWJlbFwiLFxuICAgICAgY2xhc3NOYW1lOiBcImxhYmVsIGxhYmVsLXNlbGVjdFwiLFxuICAgICAgdGV4dDogdGhpcy5sYWJlbFRleHQsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGZvcjogdGhpcy5hdHRyaWJ1dGUgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbGVjdCA9IGNyZWF0ZUNvbXBvbmVudCh7XG4gICAgICB0YWc6IFwic2VsZWN0XCIsXG4gICAgICBjbGFzc05hbWU6IFwic2VsZWN0XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGlkOiB0aGlzLmF0dHJpYnV0ZSB9LFxuICAgIH0pO1xuXG4gICAgc2VsZWN0LmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc291bmRCdXR0b25DbGljaygpO1xuICAgIH0pO1xuICAgIHNlbGVjdC5hZGRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgIHNvdW5kUGxheUZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZUNvbXBvbmVudCh7XG4gICAgICAgIHRhZzogXCJvcHRpb25cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIm9wdGlvblwiLFxuICAgICAgICB0ZXh0OiBlbCxcbiAgICAgICAgYXR0cmlidXRlczogeyB2YWx1ZTogZWwgfSxcbiAgICAgIH0pO1xuICAgICAgc2VsZWN0LmdldE5vZGUoKS5hcHBlbmRDaGlsZChvcHRpb24uZ2V0Tm9kZSgpKTtcbiAgICB9KTtcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkcmVuKFtsYWJlbEZvclNlbGVjdCwgc2VsZWN0XSk7XG4gICAgZGl2U2VsZWN0LmFwcGVuZENoaWxkcmVuKFtmaWVsZHNldF0pO1xuICAgIHJldHVybiBkaXZTZWxlY3Q7XG4gIH1cbn1cblxuY29uc3QgZGl2U2VsZWN0TGV2ZWwgPSBuZXcgQ3JlYXRlU2VsZWN0VGFnKFxuICBPYmplY3QudmFsdWVzKHBsYXllck1hcCkubWFwKChlbCkgPT4gZWwubmFtZSksXG4gIFwibGV2ZWxcIlxuKS5jcmVhdGUoKTtcbmNvbnN0IGRpdlNlbGVjdE1hcE5hbWUgPSBuZXcgQ3JlYXRlU2VsZWN0VGFnKFxuICBPYmplY3Qua2V5cyhwbGF5ZXJNYXAuZWFzeS5tYXBzKSxcbiAgXCJtYXBOYW1lXCJcbikuY3JlYXRlKCk7XG5cbmNvbnN0IGxldmVsU2VsZWN0b3IgPSBkaXZTZWxlY3RMZXZlbC5nZXROb2RlKCkucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcbmNvbnN0IG1hcHNTZWxlY3RvciA9IGRpdlNlbGVjdE1hcE5hbWUuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XG5sZXZlbFNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgd2hpbGUgKG1hcHNTZWxlY3Rvci5maXJzdENoaWxkKSB7XG4gICAgbWFwc1NlbGVjdG9yLnJlbW92ZUNoaWxkKG1hcHNTZWxlY3Rvci5maXJzdENoaWxkKTtcbiAgfVxuICBPYmplY3Qua2V5cyhwbGF5ZXJNYXBbZS50YXJnZXQudmFsdWVdLm1hcHMpXG4gICAgLm1hcCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZUNvbXBvbmVudCh7XG4gICAgICAgIHRhZzogXCJvcHRpb25cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIm9wdGlvblwiLFxuICAgICAgICB0ZXh0OiBlbCxcbiAgICAgICAgYXR0cmlidXRlczogeyB2YWx1ZTogZWwgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9wdGlvbi5nZXROb2RlKCk7XG4gICAgfSlcbiAgICAuZm9yRWFjaCgoZWwpID0+IG1hcHNTZWxlY3Rvci5hcHBlbmRDaGlsZChlbCkpO1xufSk7XG5cbmV4cG9ydCB7IGRpdlNlbGVjdExldmVsLCBkaXZTZWxlY3RNYXBOYW1lIH07XG4iLCJpbXBvcnQgY2xpY2tGb3JHYW1lIGZyb20gXCIuLi9hc3NldHMvc291bmRzL2NsaWNrX2Zvcl9nYW1lLm1wM1wiO1xuaW1wb3J0IGNsaWNrRm9yQnV0dG9uIGZyb20gXCIuLi9hc3NldHMvc291bmRzL2NsaWNrX2Zvcl9idXR0b24ubXAzXCI7XG5pbXBvcnQgd2luU291bmQgZnJvbSBcIi4uL2Fzc2V0cy9zb3VuZHMvd2luX3NvdW5kLm1wM1wiO1xuaW1wb3J0IGZvY3VzU291bmQgZnJvbSBcIi4uL2Fzc2V0cy9zb3VuZHMvc2xpZGUtY2xpY2stOTIxNTIubXAzXCI7XG5mdW5jdGlvbiBzb3VuZFBsYXlHYW1lKCkge1xuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhjbGlja0ZvckdhbWUpO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHNvdW5kUGxheUZvY3VzKCkge1xuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhmb2N1c1NvdW5kKTtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBzb3VuZFBsYXlXaW4oKSB7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGNsaWNrRm9yQnV0dG9uKTtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBzb3VuZEJ1dHRvbkNsaWNrKCkge1xuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh3aW5Tb3VuZCk7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZXhwb3J0IHsgc291bmRCdXR0b25DbGljaywgc291bmRQbGF5R2FtZSwgc291bmRQbGF5V2luLCBzb3VuZFBsYXlGb2N1cyB9O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlL3RpbWVyLnNjc3NcIjtcblxuY2xhc3MgVGltZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7IHRhZzogXCJkaXZcIiwgY2xhc3NOYW1lOiBcInRpbWVyXCIsIHRleHQ6IFwiMDA6MDBcIiB9KTtcbiAgICB0aGlzLmludGVydmFsID0gXCJcIjtcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICB9XG5cbiAgc3RhcnRUaW1lcihzZWMgPSAwKSB7XG4gICAgdGhpcy5zaG93KCk7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgdGhpcy5zdGF0dXMgPSB0cnVlO1xuICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWMgLyA2MCk7XG4gICAgbGV0IHNlY29uZHMgPSBzZWMgJSA2MDtcbiAgICB0aGlzLnNldFRleHRDb250ZW50KFxuICAgICAgYCR7bWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlc306JHtcbiAgICAgICAgc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kc1xuICAgICAgfWBcbiAgICApO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2Vjb25kcysrO1xuICAgICAgaWYgKHNlY29uZHMgPT09IDYwKSB7XG4gICAgICAgIHNlY29uZHMgPSAwO1xuICAgICAgICBtaW51dGVzKys7XG4gICAgICB9XG4gICAgICB0aGlzLmdldE5vZGUoKS50ZXh0Q29udGVudCA9IGAke21pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXN9OiR7XG4gICAgICAgIHNlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHNcbiAgICAgIH1gO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgfVxuXG4gIGdldER1cmF0aW9uKCkge1xuICAgIGNvbnN0IFttaW51dGVzLCBzZWNvbmRzXSA9IHRoaXMuZ2V0Tm9kZSgpXG4gICAgICAudGV4dENvbnRlbnQuc3BsaXQoXCI6XCIpXG4gICAgICAubWFwKE51bWJlcik7XG4gICAgcmV0dXJuIG1pbnV0ZXMgKiA2MCArIHNlY29uZHM7XG4gIH1cblxuICBzdG9wVGltZXIoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgICBjb25zdCBkdXJhdGlvbkluU2Vjb25kcyA9IHRoaXMuZ2V0RHVyYXRpb24oKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIHJldHVybiBkdXJhdGlvbkluU2Vjb25kcztcbiAgfVxuXG4gIHJlc2V0VGltZXIoKSB7XG4gICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICB0aGlzLmdldE5vZGUoKS50ZXh0Q29udGVudCA9IFwiMDA6MDBcIjtcbiAgfVxuXG4gIGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gIH1cbn1cblxuY29uc3QgdGltZXIgPSBuZXcgVGltZXIoKTtcbnRpbWVyLmhpZGUoKTtcbmV4cG9ydCB7IHRpbWVyIH07XG4iLCJmdW5jdGlvbiBtYXhMZW5ndGgoYXJyTnVtKSB7XG4gIGNvbnN0IG9iakxlbmd0aCA9IHtcbiAgICBob3Jpem9udGFsOiAwLFxuICAgIHZlcnRpY2FsOiAwLFxuICB9O1xuICBjb25zdCBob3Jpem9udGFsTGVuZ2h0ID0gKGFyck51bSkgPT4ge1xuICAgIGxldCBtYXhMZW5ndGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTnVtLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJOdW1baV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGFyck51bVtpXVtqXSA9PT0gMSkge1xuICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY291bnQpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgbWF4TGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1heExlbmd0aDtcbiAgfTtcbiAgY29uc3QgdmVydGljYWxMZW5naHQgPSAoYXJyTnVtKSA9PiB7XG4gICAgbGV0IG1heExlbmd0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJOdW1bMF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyck51bS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAoYXJyTnVtW2pdW2ldID09PSAxKSB7XG4gICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb3VudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICByZXN1bHQucHVzaChjb3VudCk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICBtYXhMZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4TGVuZ3RoO1xuICB9O1xuICBvYmpMZW5ndGguaG9yaXpvbnRhbCA9IGhvcml6b250YWxMZW5naHQoYXJyTnVtKTtcbiAgb2JqTGVuZ3RoLnZlcnRpY2FsID0gdmVydGljYWxMZW5naHQoYXJyTnVtKTtcbiAgcmV0dXJuIG9iakxlbmd0aDtcbn1cblxuZnVuY3Rpb24gY29tcGFyZTJEQXJyYXlzKGFycmF5MSwgYXJyYXkyKSB7XG4gIGlmIChhcnJheTEubGVuZ3RoICE9PSBhcnJheTIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheTEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXkxW2ldLmxlbmd0aCAhPT0gYXJyYXkyW2ldLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheTFbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChhcnJheTFbaV1bal0gIT09IGFycmF5MltpXVtqXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByYW5kb21JbnRGcm9tSW50ZXJ2YWwobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG5cbmV4cG9ydCB7IG1heExlbmd0aCwgY29tcGFyZTJEQXJyYXlzLCByYW5kb21JbnRGcm9tSW50ZXJ2YWwgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9ucy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbnMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2VsbC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NlbGwuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udHJvbHMtcGFuZWwuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250cm9scy1wYW5lbC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1wbGFjZS1pbmZvLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1wbGFjZS1pbmZvLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtcGxhY2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXBsYWNlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXNzYWdlLWRvd24tYm94LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVzc2FnZS1kb3duLWJveC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWxlY3Quc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWxlY3Quc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGltZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aW1lci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9