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
  background-color: white;
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
  background-color: rgb(102, 97, 97);
}
.cell.cell-cross {
  background: linear-gradient(to top left, rgba(0, 0, 0, 0) -10%, rgba(0, 0, 0, 0) calc(50% - 0.8px), rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 110%), linear-gradient(to top right, rgba(0, 0, 0, 0) -10%, rgba(0, 0, 0, 0) calc(50% - 0.8px), rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 110%);
  background-repeat: no-repeat;
}`, "",{"version":3,"sources":["webpack://./src/assets/style/cell.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,kCAAA;EACA,WAAA;EACA,uBAAA;EACA,6CAAA;AACF;AAEE;EACE,wCAAA;AAAJ;AAGE;EACE,yCAAA;AADJ;AAIE;EACE,wCAAA;AAFJ;AAKE;EACE,yCAAA;AAHJ;AAOE;EACE,eAAA;AALJ;AAQE;EACE,kCAAA;AANJ;AASE;EACE,uVACE;EAYF,4BAAA;AAnBJ","sourcesContent":[".cell {\n  width: 20px;\n  height: 20px;\n  border: 1px solid var(--main-gray);\n  margin: 0px;\n  background-color: white;\n  transition: background-color 0.3s ease-in-out;\n\n\n  &:nth-child(5n + 1) {\n    border-left: solid 2px var(--main-black);\n  }\n\n  &:nth-child(5n) {\n    border-right: solid 2px var(--main-black);\n  }\n\n  &:first-child {\n    border-left: solid 3px var(--main-black);\n  }\n\n  &:last-child {\n    border-right: solid 3px var(--main-black);\n  }\n\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &.cell-black {\n    background-color: rgb(102, 97, 97);\n  }\n\n  &.cell-cross {\n    background:\n      linear-gradient(to top left,\n        rgba(0, 0, 0, 0) -10%,\n        rgba(0, 0, 0, 0) calc(50% - 0.8px),\n        rgb(0, 0, 0, 1) 50%,\n        rgba(0, 0, 0, 0) calc(50% + 0.8px),\n        rgba(0, 0, 0, 0) 110%),\n      linear-gradient(to top right,\n        rgba(0, 0, 0, 0) -10%,\n        rgba(0, 0, 0, 0) calc(50% - 0.8px),\n        rgba(0, 0, 0, 1) 50%,\n        rgba(0, 0, 0, 0) calc(50% + 0.8px),\n        rgba(0, 0, 0, 0) 110%);\n    background-repeat: no-repeat;\n  }\n\n}"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/assets/style/main.scss"],"names":[],"mappings":"AAAA;EACE,oBAAA;EACA,oBAAA;EACA,qBAAA;EACA,2BAAA;EACA,kBAAA;EACA,2BAAA;EACA,qBAAA;EACA,iBAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,SAAA;AACF;;AAEA;EACE,qBAAA;EACA,oBAAA;EACA,qBAAA;EACA,wBAAA;EACA,kBAAA;EACA,2BAAA;EACA,qBAAA;AACF;;AAEA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mCAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,yCAAA;EACA,yCAAA;AACF;AACE;EACE,kBAAA;EACA,eAAA;EACA,wBAAA;AACJ","sourcesContent":[":root {\n  --main-gray: #cfcfcf;\n  --dark-gray: #868686;\n  --main-black: #414141;\n  --main-light-black: #7a7272;\n  --main-white: #fff;\n  --main-light-white: #f0f0f0;\n  --main-olive: #9ba38c;\n  --cell-size: 20px;\n}\n\n* {\n  box-sizing: content-box;\n}\n\nbody {\n  margin: 0;\n}\n\n.dark-theme {\n  --main-gray: darkgray;\n  --dark-gray: #585858;\n  --main-black: #000000;\n  --main-light-black: #333;\n  --main-white: #fff;\n  --main-light-white: #f0f0f0;\n  --main-olive: #636959;\n}\n\n.wrapper {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--main-olive);\n}\n\n.message-place {\n  margin-top: -3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border: solid 3px var(--main-light-white);\n  background-color: var(--main-light-black);\n\n  .message-box {\n    padding: 10px 20px;\n    font-size: 24px;\n    color: var(--main-white);\n  }\n}"],"sourceRoot":""}]);
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
  grid-template-columns: repeat(3, 33%);
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

@media (max-width: 700px) {
  .message-down-box {
    font-size: 16px;
  }
  .message-down-box .info-row {
    grid-template-columns: repeat(3, 33%);
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/style/message-down-box.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,uBAAA;EACA,aAAA;EACA,yCAAA;EACA,wBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,qCAAA;EACA,8BAAA;AACF;AACE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,mCAAA;EACA,iBAAA;AACJ;;AAGA;EACE;IACE,eAAA;EAAF;EAEE;IACE,qCAAA;EAAJ;AACF","sourcesContent":[".message-down-box {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n  padding: 10px;\n  background-color: var(--main-light-black);\n  color: var(--main-white);\n  font-size: 24px;\n}\n\n.info-row {\n  display: grid;\n  grid-template-columns: repeat(3, 33%);\n  justify-content: space-between;\n\n  .info {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    border: solid 1px var(--main-white);\n    padding: 5px 10px;\n  }\n}\n\n@media (max-width: 700px) {\n  .message-down-box {\n    font-size: 16px;\n\n    .info-row {\n      grid-template-columns: repeat(3, 33%);\n    }\n  }\n}"],"sourceRoot":""}]);
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
        if (check) {
          const durationInSeconds = _timer__WEBPACK_IMPORTED_MODULE_11__.timer.stopTimer();
          messageBox.setTextContent(
            "You win! Time: " + durationInSeconds + " seconds"
          );
          const winner = localStorage.getItem("winner");
          const data = {
            time: durationInSeconds + " seconds",
            name: this.state.mapName,
            level: this.state.level,
          };
          if (!winner) {
            localStorage.setItem("winner", JSON.stringify([data]));
          } else {
            const saveWinners = JSON.parse(winner);
            if (saveWinners.length < 5) {
              saveWinners.push(data);
              localStorage.setItem("winner", JSON.stringify(saveWinners));
            } else {
              while (saveWinners.length > 4) {
                saveWinners.shift();
              }
              saveWinners.push(data);
              localStorage.setItem("winner", JSON.stringify(saveWinners));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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SCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF3SjtBQUN4SjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSWtHO0FBQzFILE9BQU8saUVBQWUsNEhBQU8sSUFBSSw0SEFBTyxVQUFVLDRIQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9idXR0b25zLnNjc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9jZWxsLnNjc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9jb250cm9scy1wYW5lbC5zY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9nYW1lLXBsYWNlLWluZm8uc2NzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL2dhbWUtcGxhY2Uuc2NzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL2hlYWRlci5zY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvbWFpbi5zY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvbWVzc2FnZS1kb3duLWJveC5zY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvc2VsZWN0LnNjc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS90aW1lci5zY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb25zdGFudHMvbWFwL21hcC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29uc3RhbnRzL21hcC9wbGF5ZXJNYXAuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9qcy9idXR0b25zLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9qcy9jZWxsLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9qcy9jb250cm9sc1BhbmVsLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9qcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2pzL2dhbWVQbGFjZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvZ2FtZVBsYWNlSW5mby5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvaGVhZGVyLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9qcy9tZXNzYWdlRG93bkJveC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvbm9kZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvanMvc2VsZWN0LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9qcy9zb3VuZEZ1bmMuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2pzL3RpbWVyLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL2J1dHRvbnMuc2Nzcz8yZjE5Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvY2VsbC5zY3NzPzU5MzgiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9jb250cm9scy1wYW5lbC5zY3NzPzI0YjMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9mb290ZXIuc2Nzcz80ZTUyIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvZ2FtZS1wbGFjZS1pbmZvLnNjc3M/MDFiYSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL2dhbWUtcGxhY2Uuc2Nzcz85NzU5Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvaGVhZGVyLnNjc3M/ZmExZiIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvYXNzZXRzL3N0eWxlL21haW4uc2Nzcz8wZTdkIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvbWVzc2FnZS1kb3duLWJveC5zY3NzPzc4NzciLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zdHlsZS9zZWxlY3Quc2Nzcz9kMmYxIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc3R5bGUvdGltZXIuc2Nzcz81NmM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWdyYXkpO1xufVxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsYWNrKTtcbiAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9idXR0b25zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNkNBQUE7QUFDRjtBQUNFO0VBQ0Usa0NBQUE7QUFDSjtBQUVFO0VBQ0UseUNBQUE7RUFDQSx3QkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiA1cHggMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZ3JheSk7XFxuICB9XFxuXFxuICAmOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmxhY2spO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNlbGwge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXkpO1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jZWxsOm50aC1jaGlsZCg1bisxKSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4uY2VsbDpudGgtY2hpbGQoNW4pIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4uY2VsbDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4uY2VsbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4uY2VsbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jZWxsLmNlbGwtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCA5NywgOTcpO1xufVxuLmNlbGwuY2VsbC1jcm9zcyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgcmdiYSgwLCAwLCAwLCAwKSAtMTAlLCByZ2JhKDAsIDAsIDAsIDApIGNhbGMoNTAlIC0gMC44cHgpLCByZ2IoMCwgMCwgMCkgNTAlLCByZ2JhKDAsIDAsIDAsIDApIGNhbGMoNTAlICsgMC44cHgpLCByZ2JhKDAsIDAsIDAsIDApIDExMCUpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDApIC0xMCUsIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAwLjhweCksIHJnYigwLCAwLCAwKSA1MCUsIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgKyAwLjhweCksIHJnYmEoMCwgMCwgMCwgMCkgMTEwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlL2NlbGwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtBQUNGO0FBRUU7RUFDRSx3Q0FBQTtBQUFKO0FBR0U7RUFDRSx5Q0FBQTtBQURKO0FBSUU7RUFDRSx3Q0FBQTtBQUZKO0FBS0U7RUFDRSx5Q0FBQTtBQUhKO0FBT0U7RUFDRSxlQUFBO0FBTEo7QUFRRTtFQUNFLGtDQUFBO0FBTko7QUFTRTtFQUNFLHVWQUNFO0VBWUYsNEJBQUE7QUFuQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNlbGwge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWdyYXkpO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG5cXG5cXG4gICY6bnRoLWNoaWxkKDVuICsgMSkge1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLW1haW4tYmxhY2spO1xcbiAgfVxcblxcbiAgJjpudGgtY2hpbGQoNW4pIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XFxuICB9XFxuXFxuICAmOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCB2YXIoLS1tYWluLWJsYWNrKTtcXG4gIH1cXG5cXG4gICY6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgM3B4IHZhcigtLW1haW4tYmxhY2spO1xcbiAgfVxcblxcblxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICYuY2VsbC1ibGFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDk3LCA5Nyk7XFxuICB9XFxuXFxuICAmLmNlbGwtY3Jvc3Mge1xcbiAgICBiYWNrZ3JvdW5kOlxcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgLTEwJSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAwLjhweCksXFxuICAgICAgICByZ2IoMCwgMCwgMCwgMSkgNTAlLFxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSArIDAuOHB4KSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgMTEwJSksXFxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgLTEwJSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAwLjhweCksXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDEpIDUwJSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgKyAwLjhweCksXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDExMCUpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250cm9scy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1saWdodC13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmxhY2spO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9jb250cm9scy1wYW5lbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250cm9scy1wYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLW1haW4tbGlnaHQtd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibGFjayk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmZvb3RlciAuZm9vdGVyLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcbn1cbi5mb290ZXIgLmZvb3Rlci1saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7QUFDTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG5cXG4gIC5mb290ZXItbGluayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZ2FtZS1wbGFjZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5nYW1lLXBsYWNlLWluZm8gLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZ2FtZS1wbGFjZS1pbmZvIC5jb2x1bW4uYWN0aXZlIC5zZWxsLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuLmdhbWUtcGxhY2UtaW5mbyAuY29sdW1uLmFjdGl2ZSAuc2VsbC1pbmZvLmVtcHR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cbi5nYW1lLXBsYWNlLWluZm8gLnNlbGwtaW5mbyB7XG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5nYW1lLXBsYWNlLWluZm8udXAge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCAuY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHZhcigtLW1haW4tZ3JheSk7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5nYW1lLXBsYWNlLWluZm8udXAgLmNvbHVtbjpudGgtY2hpbGQoNW4pIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLnVwIC5jb2x1bW46bnRoLWNoaWxkKDVuKzEpIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCB2YXIoLS1tYWluLWJsYWNrKTtcbn1cbi5nYW1lLXBsYWNlLWluZm8udXAgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCAuY29sdW1uOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLnVwIC5jb2x1bW4gLnNlbGwtaW5mbyB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xufVxuLmdhbWUtcGxhY2UtaW5mby51cCAuY29sdW1uIC5zZWxsLWluZm86Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby5sZWZ0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLmdhbWUtcGxhY2UtaW5mby5sZWZ0IC5jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1tYWluLWdyYXkpO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tbWFpbi1ncmF5KTtcbn1cbi5nYW1lLXBsYWNlLWluZm8ubGVmdCAuY29sdW1uOm50aC1jaGlsZCg1bikge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLmxlZnQgLmNvbHVtbjpudGgtY2hpbGQoNW4rMSkge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLmxlZnQgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLmxlZnQgLmNvbHVtbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5nYW1lLXBsYWNlLWluZm8ubGVmdCAuY29sdW1uIC5zZWxsLWluZm8ge1xuICBib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLW1haW4tZ3JheSk7XG59XG4uZ2FtZS1wbGFjZS1pbmZvLmxlZnQgLmNvbHVtbiAuc2VsbC1pbmZvOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5zZWxsLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xufVxuLnNlbGwtaW5mby5lbXB0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlL2dhbWUtcGxhY2UtaW5mby5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFJTTtFQUNFLHlCQUFBO0FBRlI7QUFJUTtFQUNFLHlCQUFBO0FBRlY7QUFRRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTko7QUFTRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUNBQUE7QUFQTjtBQVNNO0VBQ0UseUNBQUE7QUFQUjtBQVVNO0VBQ0Usd0NBQUE7QUFSUjtBQVdNO0VBQ0UsaUJBQUE7QUFUUjtBQVlNO0VBQ0Usa0JBQUE7QUFWUjtBQWFNO0VBQ0Usc0NBQUE7QUFYUjtBQWFRO0VBQ0UsZ0JBQUE7QUFYVjtBQWlCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFmSjtBQWlCSTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHNDQUFBO0FBZk47QUFpQk07RUFDRSwwQ0FBQTtBQWZSO0FBa0JNO0VBQ0UsdUNBQUE7QUFoQlI7QUFtQk07RUFDRSxnQkFBQTtBQWpCUjtBQW9CTTtFQUNFLG1CQUFBO0FBbEJSO0FBcUJNO0VBQ0UsdUNBQUE7QUFuQlI7QUFxQlE7RUFDRSxpQkFBQTtBQW5CVjs7QUEwQkE7RUFDRSx5QkFBQTtBQXZCRjtBQXlCRTtFQUNFLHlCQUFBO0FBdkJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lLXBsYWNlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLW1haW4tZ3JheSk7XFxuXFxuICAuY29sdW1uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXG5cXG4gICAgJi5hY3RpdmUge1xcblxcbiAgICAgIC5zZWxsLWluZm8ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG5cXG4gICAgICAgICYuZW1wdHkge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnNlbGwtaW5mbyB7XFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gICYudXAge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcblxcbiAgICAmIC5jb2x1bW4ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggdmFyKC0tbWFpbi1ncmF5KTtcXG4gICAgICBib3JkZXItbGVmdDogc29saWQgMXB4IHZhcigtLW1haW4tZ3JheSk7XFxuXFxuICAgICAgJjpudGgtY2hpbGQoNW4pIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMnB4IHZhcigtLW1haW4tYmxhY2spO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOm50aC1jaGlsZCg1bisxKSB7XFxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLW1haW4tYmxhY2spO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc2VsbC1pbmZvIHtcXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWdyYXkpO1xcblxcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmLmxlZnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFxuICAgICYgLmNvbHVtbiB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLW1haW4tZ3JheSk7XFxuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLW1haW4tZ3JheSk7XFxuXFxuICAgICAgJjpudGgtY2hpbGQoNW4pIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1tYWluLWJsYWNrKTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpudGgtY2hpbGQoNW4rMSkge1xcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMnB4IHZhcigtLW1haW4tYmxhY2spO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc2VsbC1pbmZvIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggdmFyKC0tbWFpbi1ncmF5KTtcXG5cXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNlbGwtaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xcblxcbiAgJi5lbXB0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdhbWUtcGxhY2Uge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyMHB4LCBhdXRvKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjBweCwgYXV0bykgbWlubWF4KDIwcHgsIGF1dG8pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcbn1cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnJvdzpudGgtY2hpbGQoNW4rMSkgLmNlbGwge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4ucm93Om50aC1jaGlsZCg1bikgLmNlbGwge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tbWFpbi1ibGFjayk7XG59XG4ucm93OmZpcnN0LWNoaWxkIC5jZWxsIHtcbiAgYm9yZGVyLXRvcDogc29saWQgM3B4IHZhcigtLW1haW4tYmxhY2spO1xufVxuLnJvdzpsYXN0LWNoaWxkIC5jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLW1haW4tYmxhY2spO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9nYW1lLXBsYWNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDREQUFBO0VBQ0EsbUNBQUE7QUFDRjtBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLRTtFQUNFLHVDQUFBO0FBSEo7QUFNRTtFQUNFLDBDQUFBO0FBSko7QUFPRTtFQUNFLHVDQUFBO0FBTEo7QUFRRTtFQUNFLDBDQUFBO0FBTkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWUtcGxhY2Uge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyMHB4LCBhdXRvKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwcHgsIGF1dG8pIG1pbm1heCgyMHB4LCBhdXRvKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcblxcblxcbiAgLmdhbWUtcGxhY2UtbWFpbiB7fVxcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgJjpudGgtY2hpbGQoNW4gKyAxKSAuY2VsbCB7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1tYWluLWJsYWNrKTtcXG4gIH1cXG5cXG4gICY6bnRoLWNoaWxkKDVuKSAuY2VsbCB7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1tYWluLWJsYWNrKTtcXG4gIH1cXG5cXG4gICY6Zmlyc3QtY2hpbGQgLmNlbGwge1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ibGFjayk7XFxuICB9XFxuXFxuICAmOmxhc3QtY2hpbGQgLmNlbGwge1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1ibGFjayk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmxhY2spO1xuICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUvaGVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLWdyYXk6ICNjZmNmY2Y7XG4gIC0tZGFyay1ncmF5OiAjODY4Njg2O1xuICAtLW1haW4tYmxhY2s6ICM0MTQxNDE7XG4gIC0tbWFpbi1saWdodC1ibGFjazogIzdhNzI3MjtcbiAgLS1tYWluLXdoaXRlOiAjZmZmO1xuICAtLW1haW4tbGlnaHQtd2hpdGU6ICNmMGYwZjA7XG4gIC0tbWFpbi1vbGl2ZTogIzliYTM4YztcbiAgLS1jZWxsLXNpemU6IDIwcHg7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmRhcmstdGhlbWUge1xuICAtLW1haW4tZ3JheTogZGFya2dyYXk7XG4gIC0tZGFyay1ncmF5OiAjNTg1ODU4O1xuICAtLW1haW4tYmxhY2s6ICMwMDAwMDA7XG4gIC0tbWFpbi1saWdodC1ibGFjazogIzMzMztcbiAgLS1tYWluLXdoaXRlOiAjZmZmO1xuICAtLW1haW4tbGlnaHQtd2hpdGU6ICNmMGYwZjA7XG4gIC0tbWFpbi1vbGl2ZTogIzYzNjk1OTtcbn1cblxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vbGl2ZSk7XG59XG5cbi5tZXNzYWdlLXBsYWNlIHtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1tYWluLWxpZ2h0LXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibGFjayk7XG59XG4ubWVzc2FnZS1wbGFjZSAubWVzc2FnZS1ib3gge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW1haW4tZ3JheTogI2NmY2ZjZjtcXG4gIC0tZGFyay1ncmF5OiAjODY4Njg2O1xcbiAgLS1tYWluLWJsYWNrOiAjNDE0MTQxO1xcbiAgLS1tYWluLWxpZ2h0LWJsYWNrOiAjN2E3MjcyO1xcbiAgLS1tYWluLXdoaXRlOiAjZmZmO1xcbiAgLS1tYWluLWxpZ2h0LXdoaXRlOiAjZjBmMGYwO1xcbiAgLS1tYWluLW9saXZlOiAjOWJhMzhjO1xcbiAgLS1jZWxsLXNpemU6IDIwcHg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGFyay10aGVtZSB7XFxuICAtLW1haW4tZ3JheTogZGFya2dyYXk7XFxuICAtLWRhcmstZ3JheTogIzU4NTg1ODtcXG4gIC0tbWFpbi1ibGFjazogIzAwMDAwMDtcXG4gIC0tbWFpbi1saWdodC1ibGFjazogIzMzMztcXG4gIC0tbWFpbi13aGl0ZTogI2ZmZjtcXG4gIC0tbWFpbi1saWdodC13aGl0ZTogI2YwZjBmMDtcXG4gIC0tbWFpbi1vbGl2ZTogIzYzNjk1OTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb2xpdmUpO1xcbn1cXG5cXG4ubWVzc2FnZS1wbGFjZSB7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tbWFpbi1saWdodC13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsYWNrKTtcXG5cXG4gIC5tZXNzYWdlLWJveCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1lc3NhZ2UtZG93bi1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmxhY2spO1xuICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmluZm8tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMlKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmluZm8tcm93IC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1tYWluLXdoaXRlKTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAubWVzc2FnZS1kb3duLWJveCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5tZXNzYWdlLWRvd24tYm94IC5pbmZvLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMlKTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9tZXNzYWdlLWRvd24tYm94LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0U7SUFDRSxlQUFBO0VBQUY7RUFFRTtJQUNFLHFDQUFBO0VBQUo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWVzc2FnZS1kb3duLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5pbmZvLXJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMlKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIC5pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1tYWluLXdoaXRlKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm1lc3NhZ2UtZG93bi1ib3gge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIC5pbmZvLXJvdyB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMlKTtcXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWxlY3QtcGxhY2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuLmZpZWxkc2V0IHtcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tbWFpbi1saWdodC13aGl0ZSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgY29sdW1uLWdhcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LXdoaXRlKTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlL3NlbGVjdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtBQUFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWxlY3QtcGxhY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbn1cXG5cXG4uZmllbGRzZXQge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tbWFpbi1saWdodC13aGl0ZSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtd2hpdGUpO1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWxlY3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAvLyBmb250LXdlaWdodDogYm9sZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRpbWVyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlL3RpbWVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGltZXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBESVJFQ1RJT04gPSB7XG4gIHVwOiBcInVwXCIsXG4gIGxlZnQ6IFwibGVmdFwiLFxufTtcbiIsImV4cG9ydCBjb25zdCBzcXVhcmUgPSBbXG4gIFswLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDEsIDEsIDEsIDBdLFxuICBbMCwgMSwgMSwgMSwgMF0sXG4gIFswLCAxLCAxLCAxLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDBdLFxuXTtcbmV4cG9ydCBjb25zdCBjcm9zcyA9IFtcbiAgWzEsIDAsIDAsIDAsIDFdLFxuICBbMCwgMSwgMCwgMSwgMF0sXG4gIFswLCAwLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDAsIDEsIDBdLFxuICBbMSwgMCwgMCwgMCwgMV0sXG5dO1xuZXhwb3J0IGNvbnN0IGZpZ3VyZV8xID0gW1xuICBbMCwgMCwgMCwgMCwgMF0sXG4gIFsxLCAxLCAxLCAxLCAwXSxcbiAgWzEsIDEsIDAsIDEsIDBdLFxuICBbMSwgMSwgMSwgMSwgMF0sXG4gIFswLCAwLCAwLCAwLCAwXSxcbl07XG5leHBvcnQgY29uc3QgZmlndXJlXzIgPSBbXG4gIFswLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDEsIDEsIDEsIDFdLFxuICBbMSwgMCwgMCwgMSwgMV0sXG4gIFsxLCAxLCAxLCAxLCAxXSxcbiAgWzAsIDAsIDAsIDAsIDFdLFxuXTtcbmV4cG9ydCBjb25zdCBmaWd1cmVfMyA9IFtcbiAgWzEsIDEsIDEsIDEsIDFdLFxuICBbMSwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDFdLFxuICBbMSwgMSwgMSwgMSwgMV0sXG5dO1xuZXhwb3J0IGNvbnN0IGdpcmFmZmUgPSBbXG4gIFsxLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDAsIDBdLFxuICBbMCwgMSwgMCwgMF0sXG4gIFswLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDEsIDFdLFxuICBbMCwgMSwgMCwgMV0sXG5dO1xuZXhwb3J0IGNvbnN0IGhlYXJ0ID0gW1xuICBbMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMF0sXG4gIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcbiAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxuICBbMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5dO1xuZXhwb3J0IGNvbnN0IHNtaWxlID0gW1xuICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXG4gIFswLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwXSxcbiAgWzEsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDFdLFxuICBbMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxuICBbMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMV0sXG4gIFswLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwXSxcbiAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5dO1xuZXhwb3J0IGNvbnN0IGhvdXNlID0gW1xuICBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMF0sXG4gIFswLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcbiAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG5dO1xuZXhwb3J0IGNvbnN0IGFycm93VXAgPSBbXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDBdLFxuICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXG4gIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICBbMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbl07XG5leHBvcnQgY29uc3QgYmlnQ3Jvc3MgPSBbXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMF0sXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbl07XG5leHBvcnQgY29uc3QgaW1nXzEgPSBbXG4gIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgWzEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDFdLFxuICBbMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMF0sXG4gIFswLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxXSxcbiAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXG4gIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcbl07XG5leHBvcnQgY29uc3QgZm94ID0gW1xuICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMF0sXG4gIFsxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwXSxcbiAgWzEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDBdLFxuICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMF0sXG4gIFsxLCAxLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAxLCAwLCAwLCAxXSxcbiAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDFdLFxuICBbMCwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gIFswLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAwLCAxLCAxXSxcbiAgWzAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxuICBbMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFswLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwXSxcbiAgWzEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDBdLFxuICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXG4gIFsxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuXTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0b3IgPSBbXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMV0sXG4gIFsxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxXSxcbiAgWzEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwLCAxXSxcbiAgWzEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMV0sXG4gIFsxLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbl07XG5cbmV4cG9ydCBjb25zdCBzbmFrZSA9IFtcbiAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMSwgMCwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFsxLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAxLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwXSxcbiAgWzAsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDBdLFxuICBbMCwgMCwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMF0sXG4gIFswLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwXSxcbiAgWzEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDBdLFxuICBbMSwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMF0sXG4gIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDBdLFxuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbl07XG5cbmV4cG9ydCBjb25zdCBnb2F0ID0gW1xuICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMF0sXG4gIFswLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzEsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDBdLFxuICBbMSwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMF0sXG4gIFsxLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDBdLFxuICBbMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMF0sXG4gIFsxLCAxLCAwLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwXSxcbiAgWzEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDEsIDAsIDBdLFxuICBbMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMF0sXG4gIFsxLCAxLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAwXSxcbiAgWzAsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDBdLFxuXTtcblxuZXhwb3J0IGNvbnN0IGhlZGdlaG9nID0gW1xuICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxuICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMF0sXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDBdLFxuICBbMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMF0sXG4gIFswLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcbiAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDBdLFxuICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMF0sXG4gIFswLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcbiAgWzAsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDBdLFxuICBbMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXG4gIFswLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAxLCAwLCAwXSxcbiAgWzAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxuXTtcbiIsImltcG9ydCB7XG4gIGFycm93VXAsXG4gIGJpZ0Nyb3NzLFxuICBjYWxjdWxhdG9yLFxuICBjcm9zcyxcbiAgZmlndXJlXzEsXG4gIGZpZ3VyZV8yLFxuICBmaWd1cmVfMyxcbiAgZm94LFxuICBnaXJhZmZlLFxuICBnb2F0LFxuICBoZWFydCxcbiAgaGVkZ2Vob2csXG4gIGhvdXNlLFxuICBpbWdfMSxcbiAgc21pbGUsXG4gIHNuYWtlLFxuICBzcXVhcmUsXG59IGZyb20gXCIuL21hcFwiO1xuXG5jb25zdCBwbGF5ZXJNYXAgPSB7XG4gIGVhc3k6IHtcbiAgICBuYW1lOiBcImVhc3lcIixcbiAgICBtYXBzOiB7IHNxdWFyZSwgY3Jvc3MsIGZpZ3VyZV8xLCBmaWd1cmVfMiwgZmlndXJlXzMsIGdpcmFmZmUgfSxcbiAgfSxcbiAgbWVkaXVtOiB7XG4gICAgbmFtZTogXCJtZWRpdW1cIixcbiAgICBtYXBzOiB7IGhlYXJ0LCBzbWlsZSwgaG91c2UsIGFycm93VXAsIGJpZ0Nyb3NzLCBpbWdfMSB9LFxuICB9LFxuICBoYXJkOiB7XG4gICAgbmFtZTogXCJoYXJkXCIsXG4gICAgbWFwczogeyBmb3gsIGNhbGN1bGF0b3IsIHNuYWtlLCBnb2F0LCBoZWRnZWhvZyB9LFxuICB9LFxufTtcblxuZXhwb3J0IHsgcGxheWVyTWFwIH07XG4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gcmVxdWlyZShcIi4vanMvbm9kZVwiKTtcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlL21haW4uc2Nzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUvZ2FtZS1wbGFjZS5zY3NzXCI7XG5pbXBvcnQgeyBnYW1lUGxhY2UsIG1lc3NhZ2VCb3gsIG1lc3NhZ2VJbmZvR2FtZSB9IGZyb20gXCIuL2pzL2dhbWVQbGFjZVwiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4vanMvaGVhZGVyXCI7XG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tIFwiLi9qcy9mb290ZXJcIjtcbmltcG9ydCB7IGNvbnRyb2xzUGFuZWwgfSBmcm9tIFwiLi9qcy9jb250cm9sc1BhbmVsXCI7XG5pbXBvcnQgeyBtZXNzYWdlUGxhY2UgfSBmcm9tIFwiLi9qcy9tZXNzYWdlRG93bkJveFwiO1xuXG5jb25zdCB3cmFwcGVyID0gbmV3IENvbXBvbmVudChcbiAgeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJ3cmFwcGVyXCIgfSxcbiAgaGVhZGVyLFxuICBjb250cm9sc1BhbmVsLFxuICBuZXcgQ29tcG9uZW50KFxuICAgIHsgdGFnOiBcImRpdlwiLCBjbGFzc05hbWU6IFwibWVzc2FnZS1wbGFjZVwiIH0sXG4gICAgbWVzc2FnZUJveCxcbiAgICBtZXNzYWdlSW5mb0dhbWVcbiAgKSxcbiAgZ2FtZVBsYWNlLFxuICBtZXNzYWdlUGxhY2UsXG4gIGZvb3RlclxuKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHdyYXBwZXIuZ2V0Tm9kZSgpKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yLXRoZW1lXCIpO1xuICBpZiAodGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZGFyay10aGVtZVwiKTtcbiAgfVxuXG4gIG1lc3NhZ2VQbGFjZS5sb2FkKCk7XG4gIC8vIGNvbnN0IHdpbm5lciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2lubmVyXCIpO1xuICAvLyBpZiAod2lubmVyKSB7XG4gIC8vICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uod2lubmVyKTtcbiAgLy8gICBtZXNzYWdlUGxhY2UuYWRkSW5mbyhkYXRhKTtcbiAgLy8gfVxufSk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUvYnV0dG9ucy5zY3NzXCI7XG5pbXBvcnQgeyBzb3VuZEJ1dHRvbkNsaWNrIH0gZnJvbSBcIi4vc291bmRGdW5jXCI7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgdGFnID0gXCJidXR0b25cIiwgY2xhc3NOYW1lID0gXCJcIiwgdGV4dCA9IFwiXCIgfSwgLi4uY2hpbGRyZW4pIHtcbiAgICBzdXBlcih7IHRhZywgY2xhc3NOYW1lOiBgYnV0dG9uICR7Y2xhc3NOYW1lfWAsIHRleHQgfSwgLi4uY2hpbGRyZW4pO1xuICAgIHRoaXMuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCBzb3VuZEJ1dHRvbkNsaWNrKTtcbiAgfVxuXG4gIGhpZGVCdXR0b24oKSB7XG4gICAgdGhpcy5nZXROb2RlKCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgc2hvd0J1dHRvbigpIHtcbiAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG59XG5cbmNvbnN0IHJlc2V0R2FtZUJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICB0YWc6IFwiYnV0dG9uXCIsXG4gIGNsYXNzTmFtZTogXCJyZXNldC1nYW1lLWJ1dHRvblwiLFxuICB0ZXh0OiBcIlJlc2V0IEdhbWVcIixcbn0pO1xuXG5jb25zdCByYW5kb21HYW1lQnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gIHRhZzogXCJidXR0b25cIixcbiAgY2xhc3NOYW1lOiBcInJhbmRvbS1nYW1lLWJ1dHRvblwiLFxuICB0ZXh0OiBcIlJhbmRvbSBHYW1lXCIsXG59KTtcblxuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICB0YWc6IFwiYnV0dG9uXCIsXG4gIGNsYXNzTmFtZTogXCJuZXctZ2FtZS1idXR0b25cIixcbiAgdGV4dDogXCJOZXcgR2FtZVwiLFxufSk7XG5cbmNvbnN0IHN0YXJ0TmV3R2FtZSA9IG5ldyBCdXR0b24oe1xuICB0YWc6IFwiYnV0dG9uXCIsXG4gIGNsYXNzTmFtZTogXCJzdGFydC1uZXctZ2FtZS1idXR0b25cIixcbiAgdGV4dDogXCJTdGFydCBOZXcgR2FtZVwiLFxufSk7XG5cbmNvbnN0IHNvbHV0aW9uQnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gIHRhZzogXCJidXR0b25cIixcbiAgY2xhc3NOYW1lOiBcInNvbHV0aW9uLWJ1dHRvblwiLFxuICB0ZXh0OiBcIlNvbHV0aW9uXCIsXG59KTtcblxuY29uc3QgY2hhbmdlVGhlbWVCdXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgdGFnOiBcImJ1dHRvblwiLFxuICBjbGFzc05hbWU6IFwiY2hhbmdlLXRoZW1lLWJ1dHRvblwiLFxuICB0ZXh0OiBcIkNoYW5nZSBUaGVtZSB0byBEYXJrXCIsXG59KTtcblxuY29uc3Qgc2F2ZUdhbWVCdXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgdGFnOiBcImJ1dHRvblwiLFxuICBjbGFzc05hbWU6IFwic2F2ZS1nYW1lLWJ1dHRvblwiLFxuICB0ZXh0OiBcIlNhdmUgR2FtZVwiLFxufSk7XG5cbmNvbnN0IGxvYWRHYW1lQnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gIHRhZzogXCJidXR0b25cIixcbiAgY2xhc3NOYW1lOiBcImxvYWQtZ2FtZS1idXR0b25cIixcbiAgdGV4dDogXCJMb2FkIEdhbWVcIixcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3ItdGhlbWVcIik7XG4gIGlmICh0aGVtZSA9PT0gXCJkYXJrXCIpIHtcbiAgICBjaGFuZ2VUaGVtZUJ1dHRvbi5zZXRUZXh0Q29udGVudChcIkNoYW5nZSBUaGVtZSB0byBMaWdodFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJkYXJrLXRoZW1lXCIpO1xuICB9XG4gIGNvbnN0IHNhdmVHYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdGF0ZVwiKTtcbiAgaWYgKHNhdmVHYW1lKSB7XG4gICAgbG9hZEdhbWVCdXR0b24uc2hvdygpO1xuICB9IGVsc2Uge1xuICAgIGxvYWRHYW1lQnV0dG9uLmhpZGUoKTtcbiAgfVxufSk7XG5cbnNvbHV0aW9uQnV0dG9uLmhpZGVCdXR0b24oKTtcbm5ld0dhbWVCdXR0b24uaGlkZUJ1dHRvbigpO1xucmVzZXRHYW1lQnV0dG9uLmhpZGVCdXR0b24oKTtcbnNhdmVHYW1lQnV0dG9uLmhpZGVCdXR0b24oKTtcblxubmV3R2FtZUJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnROZXdHYW1lLnNob3dCdXR0b24oKTtcbiAgcmVzZXRHYW1lQnV0dG9uLmhpZGVCdXR0b24oKTtcbiAgbmV3R2FtZUJ1dHRvbi5oaWRlQnV0dG9uKCk7XG4gIHNvbHV0aW9uQnV0dG9uLmhpZGVCdXR0b24oKTtcbiAgcmFuZG9tR2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIHNhdmVHYW1lQnV0dG9uLmhpZGVCdXR0b24oKTtcbn0pO1xuXG5zdGFydE5ld0dhbWUuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0TmV3R2FtZS5oaWRlQnV0dG9uKCk7XG4gIHJlc2V0R2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIG5ld0dhbWVCdXR0b24uc2hvd0J1dHRvbigpO1xuICBzb2x1dGlvbkJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIHJhbmRvbUdhbWVCdXR0b24uaGlkZUJ1dHRvbigpO1xuICBzYXZlR2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlXCIpKSB7XG4gICAgbG9hZEdhbWVCdXR0b24uc2hvd0J1dHRvbigpO1xuICB9XG59KTtcblxucmFuZG9tR2FtZUJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnROZXdHYW1lLmhpZGVCdXR0b24oKTtcbiAgcmVzZXRHYW1lQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgbmV3R2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIHNvbHV0aW9uQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgcmFuZG9tR2FtZUJ1dHRvbi5oaWRlQnV0dG9uKCk7XG4gIHNhdmVHYW1lQnV0dG9uLnNob3dCdXR0b24oKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdGVcIikpIHtcbiAgICBsb2FkR2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIH1cbn0pO1xuXG5jaGFuZ2VUaGVtZUJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGNoYW5nZVRoZW1lQnV0dG9uLmdldE5vZGUoKS50ZXh0Q29udGVudCA9PT0gXCJDaGFuZ2UgVGhlbWUgdG8gRGFya1wiKSB7XG4gICAgY2hhbmdlVGhlbWVCdXR0b24uc2V0VGV4dENvbnRlbnQoXCJDaGFuZ2UgVGhlbWUgdG8gTGlnaHRcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZGFyay10aGVtZVwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbG9yLXRoZW1lXCIsIFwiZGFya1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjaGFuZ2VUaGVtZUJ1dHRvbi5zZXRUZXh0Q29udGVudChcIkNoYW5nZSBUaGVtZSB0byBEYXJrXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstdGhlbWVcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvci10aGVtZVwiLCBcImxpZ2h0XCIpO1xuICB9XG59KTtcblxubG9hZEdhbWVCdXR0b24uYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0TmV3R2FtZS5oaWRlQnV0dG9uKCk7XG4gIHJlc2V0R2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIG5ld0dhbWVCdXR0b24uc2hvd0J1dHRvbigpO1xuICBzb2x1dGlvbkJ1dHRvbi5zaG93QnV0dG9uKCk7XG4gIHJhbmRvbUdhbWVCdXR0b24uaGlkZUJ1dHRvbigpO1xuICBzYXZlR2FtZUJ1dHRvbi5zaG93QnV0dG9uKCk7XG59KTtcblxuc2F2ZUdhbWVCdXR0b24uYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRHYW1lQnV0dG9uLnNob3dCdXR0b24oKTtcbn0pO1xuXG5zb2x1dGlvbkJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2F2ZUdhbWVCdXR0b24uaGlkZSgpO1xufSk7XG5cbmV4cG9ydCB7XG4gIHJlc2V0R2FtZUJ1dHRvbixcbiAgc3RhcnROZXdHYW1lLFxuICBuZXdHYW1lQnV0dG9uLFxuICBzb2x1dGlvbkJ1dHRvbixcbiAgY2hhbmdlVGhlbWVCdXR0b24sXG4gIHJhbmRvbUdhbWVCdXR0b24sXG4gIGxvYWRHYW1lQnV0dG9uLFxuICBzYXZlR2FtZUJ1dHRvbixcbn07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUvY2VsbC5zY3NzXCI7XG5pbXBvcnQgeyBzb3VuZFBsYXlHYW1lIH0gZnJvbSBcIi4vc291bmRGdW5jXCI7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gXCIuL3RpbWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY2hlY2tlZENsYXNzID0gXCJjZWxsLWJsYWNrXCI7XG4gIGNyb3NzQ2xhc3MgPSBcImNlbGwtY3Jvc3NcIjtcbiAgY29uc3RydWN0b3Ioc3RhdGUsIGRhdGFCbGFjaykge1xuICAgIHN1cGVyKHsgdGFnOiBcInNwYW5cIiwgY2xhc3NOYW1lOiBcImNlbGxcIiB9KTtcbiAgICB0aGlzLmRhdGFCbGFjayA9IGRhdGFCbGFjaztcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgY2FzZSBcImNsaWNrXCI6XG4gICAgICAgIHRoaXMudG9nZ2xlQ2hlY2tlZENsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0RGF0YUJsYWNrKCk7XG4gICAgICAgIHRoaXMuc291bmRQbGF5R2FtZSgpO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY29udGV4dG1lbnVcIjpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgdGhpcy50b2dnbGVDcm9zc0NsYXNzKCk7XG4gICAgICAgIHRoaXMuc2V0RGF0YUJsYWNrKCk7XG4gICAgICAgIHRoaXMuc291bmRQbGF5R2FtZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIGlmICghdGltZXIuZ2V0U3RhdHVzKCkpIHRpbWVyLnN0YXJ0VGltZXIoKTtcbiAgfVxuXG4gIHNvdW5kUGxheUdhbWUoKSB7XG4gICAgc291bmRQbGF5R2FtZSgpO1xuICB9XG4gIHRvZ2dsZUNoZWNrZWRDbGFzcygpIHtcbiAgICBpZiAodGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2hlY2tlZENsYXNzKSkge1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgICB0aGlzLmRhdGFCbGFjayA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jcm9zc0NsYXNzKTtcbiAgICAgIHRoaXMuZGF0YUJsYWNrID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXNldFN0YXRlKCkge1xuICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jaGVja2VkQ2xhc3MpO1xuICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jcm9zc0NsYXNzKTtcbiAgICB0aGlzLmRhdGFCbGFjayA9IGZhbHNlO1xuICAgIHRoaXMuc2V0RGF0YUJsYWNrKCk7XG4gIH1cblxuICBnZXRDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCByb3dBdHRyaWJ1dGUgPSB0aGlzLmdldE5vZGUoKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgICBjb25zdCBjb2xBdHRyaWJ1dGUgPSB0aGlzLmdldE5vZGUoKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiKTtcbiAgICByZXR1cm4gW3Jvd0F0dHJpYnV0ZSwgY29sQXR0cmlidXRlXTtcbiAgfVxuXG4gIHNldERhdGFCbGFjaygpIHtcbiAgICBjb25zdCBbcm93QXR0cmlidXRlLCBjb2xBdHRyaWJ1dGVdID0gdGhpcy5nZXRDb29yZGluYXRlcygpO1xuICAgIHRoaXMuc3RhdGUubWFwRGF0YVtyb3dBdHRyaWJ1dGVdW2NvbEF0dHJpYnV0ZV0gPSB0aGlzLmRhdGFCbGFjayA/IDEgOiAwO1xuICB9XG5cbiAgdmlld1NvbHV0aW9uKCkge1xuICAgIGNvbnN0IFtyb3dBdHRyaWJ1dGUsIGNvbEF0dHJpYnV0ZV0gPSB0aGlzLmdldENvb3JkaW5hdGVzKCk7XG4gICAgY29uc3QgaXNCbGFjayA9IHRoaXMuc3RhdGUucmlnaHRNYXBbcm93QXR0cmlidXRlXVtjb2xBdHRyaWJ1dGVdO1xuICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jaGVja2VkQ2xhc3MpO1xuICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jcm9zc0NsYXNzKTtcbiAgICBpZiAoaXNCbGFjaykge1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmFkZCh0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5hZGQodGhpcy5jcm9zc0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICB2aWV3U2F2ZWRTdGF0ZSgpIHtcbiAgICBjb25zdCBbcm93QXR0cmlidXRlLCBjb2xBdHRyaWJ1dGVdID0gdGhpcy5nZXRDb29yZGluYXRlcygpO1xuICAgIGNvbnN0IGlzQmxhY2sgPSB0aGlzLnN0YXRlLm1hcERhdGFbcm93QXR0cmlidXRlXVtjb2xBdHRyaWJ1dGVdO1xuICAgIGlmIChpc0JsYWNrKSB7XG4gICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY3Jvc3NDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ3Jvc3NDbGFzcygpIHtcbiAgICBpZiAodGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY3Jvc3NDbGFzcykpIHtcbiAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jcm9zc0NsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmFkZCh0aGlzLmNyb3NzQ2xhc3MpO1xuICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgICB0aGlzLmRhdGFCbGFjayA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tIFwiLi90aW1lclwiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlL2NvbnRyb2xzLXBhbmVsLnNjc3NcIjtcbmltcG9ydCB7XG4gIGxvYWRHYW1lQnV0dG9uLFxuICBuZXdHYW1lQnV0dG9uLFxuICByYW5kb21HYW1lQnV0dG9uLFxuICByZXNldEdhbWVCdXR0b24sXG4gIHNhdmVHYW1lQnV0dG9uLFxuICBzb2x1dGlvbkJ1dHRvbixcbiAgc3RhcnROZXdHYW1lLFxufSBmcm9tIFwiLi9idXR0b25zXCI7XG5pbXBvcnQgeyBkaXZTZWxlY3RMZXZlbCwgZGl2U2VsZWN0TWFwTmFtZSB9IGZyb20gXCIuL3NlbGVjdFwiO1xuXG5jbGFzcyBDb250cm9sc1BhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgY2xhc3NOYW1lOiBcImNvbnRyb2xzLXBhbmVsXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgY29udHJvbHNQYW5lbCA9IG5ldyBDb250cm9sc1BhbmVsKCk7XG5jb250cm9sc1BhbmVsLmFwcGVuZENoaWxkcmVuKFtcbiAgdGltZXIsXG4gIHN0YXJ0TmV3R2FtZSxcbiAgbmV3R2FtZUJ1dHRvbixcbiAgc29sdXRpb25CdXR0b24sXG4gIHJlc2V0R2FtZUJ1dHRvbixcbiAgZGl2U2VsZWN0TGV2ZWwsXG4gIGRpdlNlbGVjdE1hcE5hbWUsXG4gIHJhbmRvbUdhbWVCdXR0b24sXG4gIHNhdmVHYW1lQnV0dG9uLFxuICBsb2FkR2FtZUJ1dHRvbixcbl0pO1xuXG5leHBvcnQgeyBjb250cm9sc1BhbmVsIH07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUvZm9vdGVyLnNjc3NcIjtcblxuY29uc3QgbGluayA9IG5ldyBDb21wb25lbnQoe1xuICB0YWc6IFwiYVwiLFxuICBjbGFzc05hbWU6IFwiZm9vdGVyLWxpbmtcIixcbiAgdGV4dDogXCJDcmVhdGVkIGJ5IFpodWNoa292IEFsZWtzZWksIDIwMjVcIixcbiAgYXR0cmlidXRlczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aHVjaGtvdlwiIH0sXG59KTtcblxubGluay5nZXROb2RlKCkuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xubGluay5nZXROb2RlKCkuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS96aHVjaGtvdlwiKTtcblxuY29uc3QgZm9vdGVyID0gbmV3IENvbXBvbmVudChcbiAge1xuICAgIHRhZzogXCJmb290ZXJcIixcbiAgICBjbGFzc05hbWU6IFwiZm9vdGVyXCIsXG4gICAgdGV4dDogXCJcIixcbiAgfSxcbiAgbGlua1xuKTtcblxuZXhwb3J0IHsgZm9vdGVyIH07XG4iLCJpbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnN0YW50XCI7XG5pbXBvcnQgeyBjcm9zcyB9IGZyb20gXCIuLi9jb25zdGFudHMvbWFwL21hcFwiO1xuaW1wb3J0IHsgcGxheWVyTWFwIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9tYXAvcGxheWVyTWFwXCI7XG5pbXBvcnQgeyBjb21wYXJlMkRBcnJheXMsIHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvblwiO1xuaW1wb3J0IHtcbiAgbG9hZEdhbWVCdXR0b24sXG4gIG5ld0dhbWVCdXR0b24sXG4gIHJhbmRvbUdhbWVCdXR0b24sXG4gIHJlc2V0R2FtZUJ1dHRvbixcbiAgc2F2ZUdhbWVCdXR0b24sXG4gIHNvbHV0aW9uQnV0dG9uLFxuICBzdGFydE5ld0dhbWUsXG59IGZyb20gXCIuL2J1dHRvbnNcIjtcbmltcG9ydCB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgeyBHYW1lUGxhY2VJbmZvIH0gZnJvbSBcIi4vZ2FtZVBsYWNlSW5mb1wiO1xuaW1wb3J0IHsgbWVzc2FnZVBsYWNlIH0gZnJvbSBcIi4vbWVzc2FnZURvd25Cb3hcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCB7IGRpdlNlbGVjdExldmVsLCBkaXZTZWxlY3RNYXBOYW1lIH0gZnJvbSBcIi4vc2VsZWN0XCI7XG5pbXBvcnQgeyBzb3VuZFBsYXlXaW4gfSBmcm9tIFwiLi9zb3VuZEZ1bmNcIjtcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSBcIi4vdGltZXJcIjtcblxuY29uc3Qgc3RhdGUgPSB7IGNlbGxzOiB7fSwgbGV2ZWw6IG51bGwsIG1hcE5hbWU6IG51bGwsIHJpZ2h0TWFwOiBudWxsIH07XG5jb25zdCBtZXNzYWdlQm94ID0gbmV3IENvbXBvbmVudCh7XG4gIHRhZzogXCJzcGFuXCIsXG4gIGNsYXNzTmFtZTogXCJtZXNzYWdlLWJveFwiLFxuICB0ZXh0OiBcIlwiLFxufSk7XG5tZXNzYWdlQm94LmhpZGUoKTtcbmNvbnN0IG1lc3NhZ2VJbmZvR2FtZSA9IG5ldyBDb21wb25lbnQoe1xuICB0YWc6IFwic3BhblwiLFxuICBjbGFzc05hbWU6IFwibWVzc2FnZS1ib3hcIixcbiAgdGV4dDogXCJcIixcbn0pO1xubWVzc2FnZUluZm9HYW1lLmhpZGUoKTtcbm1lc3NhZ2VCb3guaGlkZSgpO1xuXG5leHBvcnQgY2xhc3MgR2FtZVBsYWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBzdGF0ZSwgbWFwIH0sIC4uLmNoaWxkcmVuKSB7XG4gICAgc3VwZXIoeyB0YWc6IFwiZGl2XCIsIGNsYXNzTmFtZTogXCJnYW1lLXBsYWNlXCIgfSwgLi4uY2hpbGRyZW4pO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICB0aGlzLndpbiA9IGZhbHNlO1xuICAgIHRoaXMuY3JlYXRlTWFwKCk7XG5cbiAgICB0aGlzLmFkZExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkTGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgICAgICAgY29uc3QgY29sID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbi5hY3RpdmVcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXWApPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2w9XCIke2NvbH1cIl1gKT8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgLy8gaWYgKCF0aW1lci5nZXRTdGF0dXMoKSkgdGltZXIuc3RhcnRUaW1lcigpO1xuICAgICAgICBsZXQgY2hlY2sgPSBjb21wYXJlMkRBcnJheXModGhpcy5tYXAsIHRoaXMuc3RhdGUubWFwRGF0YSk7XG4gICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgIGNvbnN0IGR1cmF0aW9uSW5TZWNvbmRzID0gdGltZXIuc3RvcFRpbWVyKCk7XG4gICAgICAgICAgbWVzc2FnZUJveC5zZXRUZXh0Q29udGVudChcbiAgICAgICAgICAgIFwiWW91IHdpbiEgVGltZTogXCIgKyBkdXJhdGlvbkluU2Vjb25kcyArIFwiIHNlY29uZHNcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3Qgd2lubmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5uZXJcIik7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHRpbWU6IGR1cmF0aW9uSW5TZWNvbmRzICsgXCIgc2Vjb25kc1wiLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5tYXBOYW1lLFxuICAgICAgICAgICAgbGV2ZWw6IHRoaXMuc3RhdGUubGV2ZWwsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoIXdpbm5lcikge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5uZXJcIiwgSlNPTi5zdHJpbmdpZnkoW2RhdGFdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNhdmVXaW5uZXJzID0gSlNPTi5wYXJzZSh3aW5uZXIpO1xuICAgICAgICAgICAgaWYgKHNhdmVXaW5uZXJzLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgc2F2ZVdpbm5lcnMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5uZXJcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZVdpbm5lcnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdoaWxlIChzYXZlV2lubmVycy5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICAgICAgc2F2ZVdpbm5lcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzYXZlV2lubmVycy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbm5lclwiLCBKU09OLnN0cmluZ2lmeShzYXZlV2lubmVycykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlUGxhY2UubG9hZCgpO1xuICAgICAgICAgIGlmICghdGhpcy53aW4pIHtcbiAgICAgICAgICAgIHNvdW5kUGxheVdpbigpO1xuICAgICAgICAgICAgbG9hZEdhbWVCdXR0b24uaGlkZSgpO1xuICAgICAgICAgICAgc2F2ZUdhbWVCdXR0b24uaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLndpbiA9IHRydWU7XG4gICAgICAgICAgc29sdXRpb25CdXR0b24uaGlkZSgpO1xuICAgICAgICAgIG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5jZWxscykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlLnJlbW92ZUxpc3RlbmVyKFwiY2xpY2tcIiwgdmFsdWUuaGFuZGxlQ2xpY2spO1xuICAgICAgICAgICAgdmFsdWUucmVtb3ZlTGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCB2YWx1ZS5oYW5kbGVDbGljayk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1hcCgpIHtcbiAgICB0aGlzLndpbiA9IGZhbHNlO1xuICAgIG1lc3NhZ2VJbmZvR2FtZS5zZXRUZXh0Q29udGVudChcbiAgICAgIGBOYW1lIG1hcDogXCIke3RoaXMuc3RhdGUubWFwTmFtZX1cIiwgbGV2ZWw6IFwiJHt0aGlzLnN0YXRlLmxldmVsfVwiLCBzaXplOiAke3RoaXMubWFwLmxlbmd0aH14JHt0aGlzLm1hcFswXS5sZW5ndGh9YFxuICAgICk7XG4gICAgbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgdGhpcy5zdGF0ZS5yaWdodE1hcCA9IHRoaXMubWFwO1xuICAgIHRoaXMuc3RhdGUubWFwRGF0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMubWFwLmxlbmd0aCB9LCAoKSA9PlxuICAgICAgQXJyYXkodGhpcy5tYXBbMF0ubGVuZ3RoKS5maWxsKDApXG4gICAgKTtcbiAgICBjb25zdCBnYW1lUGxhY2VNYWluID0gbmV3IENvbXBvbmVudCh7XG4gICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFwiZ2FtZS1wbGFjZS1tYWluXCIsXG4gICAgfSk7XG4gICAgY29uc3QgZ2FtZVBsYWNlQmxvY2sgPSBuZXcgQ29tcG9uZW50KHtcbiAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgIGNsYXNzTmFtZTogXCJnYW1lLXBsYWNlLWJsb2NrXCIsXG4gICAgfSk7XG4gICAgY29uc3QgZ2FtZVBsYWNlSGVhZGVySW5mbyA9IG5ldyBHYW1lUGxhY2VJbmZvKHtcbiAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIGRpcmVjdGlvbjogRElSRUNUSU9OLnVwLFxuICAgIH0pO1xuICAgIGNvbnN0IGdhbWVQbGFjZUxlZnRJbmZvID0gbmV3IEdhbWVQbGFjZUluZm8oe1xuICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04ubGVmdCxcbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLmNlbGxzID0ge307XG4gICAgdGhpcy5tYXAuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEluUm93ID0gW107XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgakluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjZWxsID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBjb25zdCBjZWxsTm9kZSA9IG5ldyBDZWxsKHRoaXMuc3RhdGUsIGRhdGEpO1xuICAgICAgICBjZWxsTm9kZS5nZXROb2RlKCkuc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgaW5kZXgpO1xuICAgICAgICBjZWxsTm9kZS5nZXROb2RlKCkuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIiwgakluZGV4KTtcbiAgICAgICAgZWxlbWVudEluUm93LnB1c2goY2VsbE5vZGUpO1xuICAgICAgICB0aGlzLnN0YXRlLmNlbGxzW2Ake2luZGV4fS0ke2pJbmRleH1gXSA9IGNlbGxOb2RlO1xuICAgICAgICBjZWxsTm9kZS5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIGNlbGxOb2RlLmhhbmRsZUNsaWNrKTtcbiAgICAgICAgY2VsbE5vZGUuYWRkTGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBjZWxsTm9kZS5oYW5kbGVDbGljayk7XG4gICAgICB9KTtcbiAgICAgIGdhbWVQbGFjZU1haW4uYXBwZW5kKFxuICAgICAgICBuZXcgQ29tcG9uZW50KHsgdGFnOiBcImRpdlwiLCBjbGFzc05hbWU6IFwicm93XCIgfSwgLi4uZWxlbWVudEluUm93KVxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLmFwcGVuZENoaWxkcmVuKFtcbiAgICAgIGdhbWVQbGFjZUJsb2NrLFxuICAgICAgZ2FtZVBsYWNlSGVhZGVySW5mbyxcbiAgICAgIGdhbWVQbGFjZUxlZnRJbmZvLFxuICAgICAgZ2FtZVBsYWNlTWFpbixcbiAgICBdKTtcbiAgfVxuXG4gIHJlc2V0TWFwKCkge1xuICAgIE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5jZWxscykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIHZhbHVlLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgdmFsdWUuaGFuZGxlQ2xpY2spO1xuICAgICAgdmFsdWUuYWRkTGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCB2YWx1ZS5oYW5kbGVDbGljayk7XG4gICAgICB2YWx1ZS5yZXNldFN0YXRlKCk7XG4gICAgfSk7XG4gICAgdGltZXIucmVzZXRUaW1lcigpO1xuICAgIG1lc3NhZ2VCb3guaGlkZSgpO1xuICB9XG5cbiAgdmlld1NhdmVkTWFwKHNlYykge1xuICAgIE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5jZWxscykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIHZhbHVlLnZpZXdTYXZlZFN0YXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICB2aWV3U29sdXRpb24oKSB7XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLmNlbGxzKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgdmFsdWUucmVtb3ZlTGlzdGVuZXIoXCJjbGlja1wiLCB2YWx1ZS5oYW5kbGVDbGljayk7XG4gICAgICB2YWx1ZS5yZW1vdmVMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHZhbHVlLmhhbmRsZUNsaWNrKTtcbiAgICAgIHZhbHVlLnZpZXdTb2x1dGlvbigpO1xuICAgIH0pO1xuICAgIHRpbWVyLnJlc2V0VGltZXIoKTtcbiAgfVxuXG4gIGhpZGVNYXAoKSB7XG4gICAgdGhpcy5nZXROb2RlKCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgdmlld01hcCgpIHtcbiAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gIH1cbn1cblxuY29uc3QgZ2FtZVBsYWNlID0gbmV3IEdhbWVQbGFjZSh7XG4gIHN0YXRlLFxuICBtYXA6IE9iamVjdC52YWx1ZXMoT2JqZWN0LnZhbHVlcyhwbGF5ZXJNYXApWzBdLm1hcHMpWzBdLFxufSk7XG5nYW1lUGxhY2UuaGlkZSgpO1xuXG4vLyBidXR0b25zIGxvZ2ljXG5cbnJlc2V0R2FtZUJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZ2FtZVBsYWNlLnJlc2V0TWFwKCk7XG4gIHNvbHV0aW9uQnV0dG9uLnNob3coKTtcbiAgbWVzc2FnZVBsYWNlLmhpZGUoKTtcbn0pO1xuXG5uZXdHYW1lQnV0dG9uLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtZXNzYWdlQm94LmhpZGUoKTtcbiAgbWVzc2FnZUluZm9HYW1lLmhpZGUoKTtcbiAgZ2FtZVBsYWNlLmhpZGVNYXAoKTtcbiAgZGl2U2VsZWN0TGV2ZWwuc2hvdygpO1xuICBkaXZTZWxlY3RNYXBOYW1lLnNob3coKTtcbiAgdGltZXIuaGlkZSgpO1xuICBtZXNzYWdlUGxhY2Uuc2hvdyhcImZsZXhcIik7XG4gIG1lc3NhZ2VQbGFjZS5sb2FkKCk7XG59KTtcblxuY29uc3QgYWxnb3JpdGhtVG9TdGFydEdhbWUgPSAobWFwKSA9PiB7XG4gIGdhbWVQbGFjZS52aWV3TWFwKCk7XG4gIGdhbWVQbGFjZS5kZXN0cm95Q2hpbGRyZW4oKTtcbiAgZGl2U2VsZWN0TGV2ZWwuaGlkZSgpO1xuICBkaXZTZWxlY3RNYXBOYW1lLmhpZGUoKTtcbiAgdGltZXIuc2hvdygpO1xuICB0aW1lci5yZXNldFRpbWVyKCk7XG4gIGdhbWVQbGFjZS5tYXAgPSBtYXA7XG4gIGdhbWVQbGFjZS5jcmVhdGVNYXAoKTtcbn07XG5cbnN0YXJ0TmV3R2FtZS5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgbGV2ZWwgPSBkaXZTZWxlY3RMZXZlbC5nZXROb2RlKCkucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS52YWx1ZTtcbiAgY29uc3QgbWFwTmFtZSA9IGRpdlNlbGVjdE1hcE5hbWUuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWU7XG4gIHN0YXRlLmxldmVsID0gbGV2ZWw7XG4gIHN0YXRlLm1hcE5hbWUgPSBtYXBOYW1lO1xuICBjb25zdCBtYXAgPSBwbGF5ZXJNYXBbbGV2ZWxdLm1hcHNbbWFwTmFtZV07XG4gIGFsZ29yaXRobVRvU3RhcnRHYW1lKG1hcCk7XG4gIG1lc3NhZ2VJbmZvR2FtZS5zaG93KCk7XG4gIG1lc3NhZ2VQbGFjZS5oaWRlKCk7XG59KTtcblxucmFuZG9tR2FtZUJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgbGV2ZWxJbmQgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMCwgT2JqZWN0LmtleXMocGxheWVyTWFwKS5sZW5ndGggLSAxKTtcbiAgY29uc3QgbGV2ZWwgPSBPYmplY3Qua2V5cyhwbGF5ZXJNYXApW2xldmVsSW5kXTtcbiAgY29uc3QgbWFwTmFtZUluZCA9IHJhbmRvbUludEZyb21JbnRlcnZhbChcbiAgICAwLFxuICAgIE9iamVjdC5rZXlzKHBsYXllck1hcFtsZXZlbF0ubWFwcykubGVuZ3RoIC0gMVxuICApO1xuICBjb25zdCBtYXBOYW1lID0gT2JqZWN0LmtleXMocGxheWVyTWFwW2xldmVsXS5tYXBzKVttYXBOYW1lSW5kXTtcbiAgc3RhdGUubGV2ZWwgPSBsZXZlbDtcbiAgc3RhdGUubWFwTmFtZSA9IG1hcE5hbWU7XG4gIGNvbnN0IG1hcCA9IHBsYXllck1hcFtsZXZlbF0ubWFwc1ttYXBOYW1lXTtcbiAgYWxnb3JpdGhtVG9TdGFydEdhbWUobWFwKTtcbiAgbWVzc2FnZUluZm9HYW1lLnNob3coKTtcbiAgbWVzc2FnZVBsYWNlLmhpZGUoKTtcbn0pO1xuXG5zb2x1dGlvbkJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc29sdXRpb25CdXR0b24uaGlkZSgpO1xuICBnYW1lUGxhY2Uudmlld1NvbHV0aW9uKCk7XG4gIHRpbWVyLmhpZGUoKTtcbn0pO1xuXG5zYXZlR2FtZUJ1dHRvbi5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgXCJzdGF0ZVwiLFxuICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1hcDogc3RhdGUubWFwRGF0YSxcbiAgICAgIG5hbWU6IHN0YXRlLm1hcE5hbWUsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwsXG4gICAgICB0aW1lOiB0aW1lci5nZXREdXJhdGlvbigpLFxuICAgIH0pXG4gICk7XG59KTtcblxubG9hZEdhbWVCdXR0b24uYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHsgbWFwLCBuYW1lLCBsZXZlbCwgdGltZSB9ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlXCIpKTtcbiAgc3RhdGUubGV2ZWwgPSBsZXZlbDtcbiAgc3RhdGUubWFwTmFtZSA9IG5hbWU7XG4gIGNvbnN0IG5ld01hcCA9IHBsYXllck1hcFtsZXZlbF0ubWFwc1tuYW1lXTtcblxuICBnYW1lUGxhY2Uudmlld01hcCgpO1xuICBnYW1lUGxhY2UuZGVzdHJveUNoaWxkcmVuKCk7XG4gIGRpdlNlbGVjdExldmVsLmhpZGUoKTtcbiAgZGl2U2VsZWN0TWFwTmFtZS5oaWRlKCk7XG4gIGdhbWVQbGFjZS5tYXAgPSBuZXdNYXA7XG4gIGdhbWVQbGFjZS5jcmVhdGVNYXAoKTtcbiAgc3RhdGUubWFwRGF0YSA9IG1hcDtcbiAgdGltZXIuc3RhcnRUaW1lcih0aW1lKTtcbiAgZ2FtZVBsYWNlLnZpZXdTYXZlZE1hcCh0aW1lKTtcbiAgbWVzc2FnZUluZm9HYW1lLnNob3coKTtcbiAgbWVzc2FnZVBsYWNlLmhpZGUoKTtcbn0pO1xuXG5leHBvcnQgeyBnYW1lUGxhY2UsIG1lc3NhZ2VCb3gsIG1lc3NhZ2VJbmZvR2FtZSB9O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlL2dhbWUtcGxhY2UtaW5mby5zY3NzXCI7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnN0YW50XCI7XG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVQbGFjZUluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IHN0YXRlLCBtYXAsIGRpcmVjdGlvbiB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgY2xhc3NOYW1lOiBcImdhbWUtcGxhY2UtaW5mbyBcIiArIGRpcmVjdGlvbixcbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgdGhpcy5tYXhMZW5ndGhNYXAgPSBtYXhMZW5ndGgobWFwKTtcblxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLnVwKSB7XG4gICAgICB0aGlzLmNyZWF0ZUluZm8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcmVhdGVJbmZvTGVmdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUluZm8oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcFswXS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gbmV3IENvbXBvbmVudCh7IHRhZzogXCJkaXZcIiwgY2xhc3NOYW1lOiBcImNvbHVtblwiIH0pO1xuICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGkpO1xuICAgICAgbGV0IGNvdW50Q29sdW1uID0gMDtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWFwLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcFtqXVtpXSA9PT0gMSkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXBbal1baV0gPT09IDAgJiYgY291bnQgPiAwKSB7XG4gICAgICAgICAgY29sdW1uLmFwcGVuZChcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoeyB0YWc6IFwic3BhblwiLCBjbGFzc05hbWU6IFwic2VsbC1pbmZvXCIsIHRleHQ6IGNvdW50IH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb3VudENvbHVtbiArPSAxO1xuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICBjb2x1bW4uYXBwZW5kKFxuICAgICAgICAgIG5ldyBDb21wb25lbnQoeyB0YWc6IFwic3BhblwiLCBjbGFzc05hbWU6IFwic2VsbC1pbmZvXCIsIHRleHQ6IGNvdW50IH0pXG4gICAgICAgICk7XG4gICAgICAgIGNvdW50Q29sdW1uICs9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLmFwcGVuZChjb2x1bW4pO1xuICAgICAgaWYgKGNvdW50Q29sdW1uIDwgdGhpcy5tYXhMZW5ndGhNYXAudmVydGljYWwpIHtcbiAgICAgICAgd2hpbGUgKGNvdW50Q29sdW1uIDwgdGhpcy5tYXhMZW5ndGhNYXAudmVydGljYWwpIHtcbiAgICAgICAgICBjb2x1bW4ucHJlcGVuZChcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgICB0YWc6IFwic3BhblwiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic2VsbC1pbmZvIGVtcHR5XCIsXG4gICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgY291bnRDb2x1bW4gKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUluZm9MZWZ0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzTmFtZTogYGNvbHVtbmAsXG4gICAgICB9KTtcbiAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBpKTtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBsZXQgY291bnRDb2x1bW4gPSAwO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1hcFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5tYXBbaV1bal0gPT09IDEpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFwW2ldW2pdID09PSAwICYmIGNvdW50ID4gMCkge1xuICAgICAgICAgIGNvbHVtbi5hcHBlbmQoXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KHsgdGFnOiBcInNwYW5cIiwgY2xhc3NOYW1lOiBcInNlbGwtaW5mb1wiLCB0ZXh0OiBjb3VudCB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgY291bnRDb2x1bW4gKz0gMTtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgY29sdW1uLmFwcGVuZChcbiAgICAgICAgICBuZXcgQ29tcG9uZW50KHsgdGFnOiBcInNwYW5cIiwgY2xhc3NOYW1lOiBcInNlbGwtaW5mb1wiLCB0ZXh0OiBjb3VudCB9KVxuICAgICAgICApO1xuICAgICAgICBjb3VudENvbHVtbiArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5hcHBlbmQoY29sdW1uKTtcbiAgICAgIGlmIChjb3VudENvbHVtbiA8IHRoaXMubWF4TGVuZ3RoTWFwLmhvcml6b250YWwpIHtcbiAgICAgICAgd2hpbGUgKGNvdW50Q29sdW1uIDwgdGhpcy5tYXhMZW5ndGhNYXAuaG9yaXpvbnRhbCkge1xuICAgICAgICAgIGNvbHVtbi5wcmVwZW5kKFxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCh7XG4gICAgICAgICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzZWxsLWluZm8gZW1wdHlcIixcbiAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb3VudENvbHVtbiArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUvaGVhZGVyLnNjc3NcIjtcbmltcG9ydCB7IGNoYW5nZVRoZW1lQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uc1wiO1xuXG5jb25zdCBoZWFkZXIgPSBuZXcgQ29tcG9uZW50KFxuICB7XG4gICAgdGFnOiBcImhlYWRlclwiLFxuICAgIGNsYXNzTmFtZTogXCJoZWFkZXJcIixcbiAgICB0ZXh0OiBcIk5vbm9ncmFtc1wiLFxuICB9LFxuICBjaGFuZ2VUaGVtZUJ1dHRvblxuKTtcblxuZXhwb3J0IHsgaGVhZGVyIH07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUvbWVzc2FnZS1kb3duLWJveC5zY3NzXCI7XG5cbmNsYXNzIG1lc3NhZ2VEb3duQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyB0YWcgPSBcImRpdlwiLCBjbGFzc05hbWUgPSBcIlwiLCB0ZXh0ID0gXCI6XCIgfSkge1xuICAgIHN1cGVyKHsgdGFnLCBjbGFzc05hbWU6IFwibWVzc2FnZS1kb3duLWJveCBcIiArIGNsYXNzTmFtZSwgdGV4dCB9KTtcbiAgfVxuXG4gIGFkZEluZm8oZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHRoaXMuYXBwZW5kKFxuICAgICAgbmV3IENvbXBvbmVudCh7XG4gICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJpbmZvXCIsXG4gICAgICAgIHRleHQ6IGBTQ09SRTogJHtkYXRhLmxlbmd0aCA9PT0gMCA/IFwibm90aGluZyBlbHNlIHRvIHNob3dcIiA6IFwiXCJ9YCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBpZiAoZGF0YS5sZW5ndGggPiAwKSB7fVxuICAgIGNvbnN0IG5ld0luZm8gPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gbmV3IENvbXBvbmVudCh7IHRhZzogXCJkaXZcIiwgY2xhc3NOYW1lOiBcImluZm8tcm93XCIgfSk7XG4gICAgICBjb25zdCBpbmZvID0gT2JqZWN0LmVudHJpZXMoaXRlbSkubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgaW5mbyA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgaW5mbyAke2tleX1gLFxuICAgICAgICAgIHRleHQ6IGAke2tleX0gLSAke3ZhbHVlfWAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgIH0pO1xuICAgICAgZGl2LmFwcGVuZENoaWxkcmVuKGluZm8pO1xuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9KTtcbiAgICB0aGlzLmFwcGVuZENoaWxkcmVuKG5ld0luZm8pO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmRlc3Ryb3lDaGlsZHJlbigpO1xuICAgIGNvbnN0IHdpbm5lciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2lubmVyXCIpO1xuICAgIGlmICh3aW5uZXIpIHtcbiAgICAgIHRoaXMuYWRkSW5mbyhKU09OLnBhcnNlKHdpbm5lcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZEluZm8oW10pO1xuICAgIH1cbiAgICB0aGlzLnNob3coXCJmbGV4XCIpO1xuICB9XG59XG5cbmNvbnN0IG1lc3NhZ2VQbGFjZSA9IG5ldyBtZXNzYWdlRG93bkJveCh7XG4gIHRhZzogXCJkaXZcIixcbiAgY2xhc3NOYW1lOiBcIm1lc3NhZ2UtcGxhY2VcIixcbiAgdGV4dDogXCJcIixcbn0pO1xuZXhwb3J0IHsgbWVzc2FnZVBsYWNlIH07XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEB0eXBlIHtBcnJheTxDb21wb25lbnQ+fSAtIEFuIGFycmF5IHRvIHN0b3JlIGNoaWxkIGNvbXBvbmVudHMuXG4gICAqL1xuICAjY2hpbGRyZW4gPSBbXTtcblxuICAvKipcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fSAtIFRoZSBIVE1MIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICAjbm9kZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgQ29tcG9uZW50LlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhlIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRpb25zLnRhZyAtIEhUTUwgZWxlbWVudCB0YWcgKGRlZmF1bHQgaXMgJ2RpdicpLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdGlvbnMuY2xhc3NOYW1lIC0gQ1NTIGNsYXNzIG5hbWUgZm9yIHRoZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdGlvbnMudGV4dCAtIFRleHQgY29udGVudCBvZiB0aGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHsuLi5Db21wb25lbnR9IGNoaWxkcmVuIC0gQ2hpbGQgY29tcG9uZW50cyB0byBiZSBhcHBlbmRlZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdGFnID0gXCJkaXZcIiwgY2xhc3NOYW1lID0gXCJcIiwgdGV4dCA9IFwiXCIgfSwgLi4uY2hpbGRyZW4pIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHRoaXMuI25vZGUgPSBub2RlO1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkcmVuKGNoaWxkcmVuKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGNoaWxkIGNvbXBvbmVudCB0byB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjaGlsZCAtIFRoZSBjaGlsZCBjb21wb25lbnQgdG8gYmUgYXBwZW5kZWQuXG4gICAqL1xuICBhcHBlbmQoY2hpbGQpIHtcbiAgICB0aGlzLiNjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB0aGlzLiNub2RlLmFwcGVuZChjaGlsZC5nZXROb2RlKCkpO1xuICB9XG4gIC8qKlxuICAgKiBQcmVwZW5kIGEgY2hpbGQgY29tcG9uZW50IHRvIHRoZSBjdXJyZW50IGNvbXBvbmVudC5cbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNoaWxkIC0gVGhlIGNoaWxkIGNvbXBvbmVudCB0byBiZSBwcmVwZW5kZWQuXG4gICAqL1xuICBwcmVwZW5kKGNoaWxkKSB7XG4gICAgdGhpcy4jY2hpbGRyZW4udW5zaGlmdChjaGlsZCk7XG4gICAgdGhpcy4jbm9kZS5wcmVwZW5kKGNoaWxkLmdldE5vZGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhbiBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIHRvIHRoZSBjdXJyZW50IGNvbXBvbmVudC5cbiAgICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjaGlsZHJlbiAtIEFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgdG8gYmUgYXBwZW5kZWQuXG4gICAqL1xuICBhcHBlbmRDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICB0aGlzLmFwcGVuZChlbCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSFRNTCBub2RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIEhUTUwgbm9kZS5cbiAgICovXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25vZGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzLlxuICAgKiBAcmV0dXJucyB7QXJyYXk8Q29tcG9uZW50Pn0gLSBBcnJheSBvZiBjaGlsZCBjb21wb25lbnRzLlxuICAgKi9cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAtIFRoZSB0ZXh0IGNvbnRlbnQgdG8gYmUgc2V0LlxuICAgKi9cbiAgc2V0VGV4dENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuI25vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gYXR0cmlidXRlIG9uIHRoZSBjb21wb25lbnQncyBIVE1MIG5vZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGUgLSBUaGUgYXR0cmlidXRlIHRvIHNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldCBmb3IgdGhlIGF0dHJpYnV0ZS5cbiAgICovXG4gIHNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgdGhpcy4jbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBhdHRyaWJ1dGUgZnJvbSB0aGUgY29tcG9uZW50J3MgSFRNTCBub2RlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlIC0gVGhlIGF0dHJpYnV0ZSB0byByZW1vdmUuXG4gICAqL1xuICByZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKSB7XG4gICAgdGhpcy4jbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBwcmVzZW5jZSBvZiBhIENTUyBjbGFzcyBvbiB0aGUgY29tcG9uZW50J3MgSFRNTCBub2RlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIG5hbWUgdG8gdG9nZ2xlLlxuICAgKi9cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy4jbm9kZS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3MgSFRNTCBub2RlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgdHlwZSB0byBsaXN0ZW4gZm9yLlxuICAgKiBAcGFyYW0ge0V2ZW50TGlzdGVuZXJ9IGxpc3RlbmVyIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGV2ZW50IG9jY3Vycy5cbiAgICogQHBhcmFtIHtib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zfSBbb3B0aW9ucz1mYWxzZV0gLSBBbiBvcHRpb25zIG9iamVjdCBzcGVjaWZ5aW5nIGNoYXJhY3RlcmlzdGljcyBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAqL1xuICBhZGRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIG9wdGlvbnMgPSBmYWxzZSkge1xuICAgIHRoaXMuI25vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgY29tcG9uZW50J3MgSFRNTCBub2RlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgdHlwZSBmb3Igd2hpY2ggdG8gcmVtb3ZlIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHtFdmVudExpc3RlbmVyfSBsaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbiB0byBiZSByZW1vdmVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW58RXZlbnRMaXN0ZW5lck9wdGlvbnN9IFtvcHRpb25zPWZhbHNlXSAtIE9wdGlvbnMgdGhhdCB3ZXJlIHVzZWQgd2hlbiBhZGRpbmcgdGhlIGxpc3RlbmVyLlxuICAgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zID0gZmFsc2UpIHtcbiAgICB0aGlzLiNub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBhbGwgY2hpbGQgY29tcG9uZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICAgKi9cbiAgZGVzdHJveUNoaWxkcmVuKCkge1xuICAgIHRoaXMuI2NoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy4jY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgY3VycmVudCBjb21wb25lbnQgYW5kIHJlbW92ZXMgaXRzIEhUTUwgbm9kZSBmcm9tIHRoZSBET00uXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveUNoaWxkcmVuKCk7XG4gICAgdGhpcy4jbm9kZS5yZW1vdmUoKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy4jbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBzaG93KHBvc2l0aW9uID0gXCJibG9ja1wiKSB7XG4gICAgdGhpcy4jbm9kZS5zdHlsZS5kaXNwbGF5ID0gcG9zaXRpb247XG4gIH1cbn1cbiIsImltcG9ydCB7IHBsYXllck1hcCB9IGZyb20gXCIuLi9jb25zdGFudHMvbWFwL3BsYXllck1hcFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlL3NlbGVjdC5zY3NzXCI7XG5pbXBvcnQgeyBzb3VuZEJ1dHRvbkNsaWNrLCBzb3VuZFBsYXlGb2N1cyB9IGZyb20gXCIuL3NvdW5kRnVuY1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoeyB0YWcsIGNsYXNzTmFtZSwgdGV4dCwgYXR0cmlidXRlcyA9IHt9IH0pIHtcbiAgY29uc3QgZWxlbWVudCA9IG5ldyBDb21wb25lbnQoeyB0YWcsIGNsYXNzTmFtZSwgdGV4dCB9KTtcbiAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgZWxlbWVudC5nZXROb2RlKCkuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNsYXNzIENyZWF0ZVNlbGVjdFRhZyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGF0dHJpYnV0ZSwgbGFiZWxUZXh0ID0gXCJTZWxlY3Qgc2l6ZVwiKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcbiAgICB0aGlzLmxhYmVsVGV4dCA9IGxhYmVsVGV4dDtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBkaXZTZWxlY3QgPSBjcmVhdGVDb21wb25lbnQoe1xuICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgY2xhc3NOYW1lOiBcInNlbGVjdC1wbGFjZVwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlQ29tcG9uZW50KHtcbiAgICAgIHRhZzogXCJmaWVsZHNldFwiLFxuICAgICAgY2xhc3NOYW1lOiBcImZpZWxkc2V0XCIsXG4gICAgfSk7XG4gICAgY29uc3QgbGFiZWxGb3JTZWxlY3QgPSBjcmVhdGVDb21wb25lbnQoe1xuICAgICAgdGFnOiBcImxhYmVsXCIsXG4gICAgICBjbGFzc05hbWU6IFwibGFiZWwgbGFiZWwtc2VsZWN0XCIsXG4gICAgICB0ZXh0OiB0aGlzLmxhYmVsVGV4dCxcbiAgICAgIGF0dHJpYnV0ZXM6IHsgZm9yOiB0aGlzLmF0dHJpYnV0ZSB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VsZWN0ID0gY3JlYXRlQ29tcG9uZW50KHtcbiAgICAgIHRhZzogXCJzZWxlY3RcIixcbiAgICAgIGNsYXNzTmFtZTogXCJzZWxlY3RcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHsgaWQ6IHRoaXMuYXR0cmlidXRlIH0sXG4gICAgfSk7XG5cbiAgICBzZWxlY3QuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzb3VuZEJ1dHRvbkNsaWNrKCk7XG4gICAgfSk7XG4gICAgc2VsZWN0LmFkZExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgc291bmRQbGF5Rm9jdXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlQ29tcG9uZW50KHtcbiAgICAgICAgdGFnOiBcIm9wdGlvblwiLFxuICAgICAgICBjbGFzc05hbWU6IFwib3B0aW9uXCIsXG4gICAgICAgIHRleHQ6IGVsLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7IHZhbHVlOiBlbCB9LFxuICAgICAgfSk7XG4gICAgICBzZWxlY3QuZ2V0Tm9kZSgpLmFwcGVuZENoaWxkKG9wdGlvbi5nZXROb2RlKCkpO1xuICAgIH0pO1xuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGRyZW4oW2xhYmVsRm9yU2VsZWN0LCBzZWxlY3RdKTtcbiAgICBkaXZTZWxlY3QuYXBwZW5kQ2hpbGRyZW4oW2ZpZWxkc2V0XSk7XG4gICAgcmV0dXJuIGRpdlNlbGVjdDtcbiAgfVxufVxuXG5jb25zdCBkaXZTZWxlY3RMZXZlbCA9IG5ldyBDcmVhdGVTZWxlY3RUYWcoXG4gIE9iamVjdC52YWx1ZXMocGxheWVyTWFwKS5tYXAoKGVsKSA9PiBlbC5uYW1lKSxcbiAgXCJsZXZlbFwiXG4pLmNyZWF0ZSgpO1xuY29uc3QgZGl2U2VsZWN0TWFwTmFtZSA9IG5ldyBDcmVhdGVTZWxlY3RUYWcoXG4gIE9iamVjdC5rZXlzKHBsYXllck1hcC5lYXN5Lm1hcHMpLFxuICBcIm1hcE5hbWVcIlxuKS5jcmVhdGUoKTtcblxuY29uc3QgbGV2ZWxTZWxlY3RvciA9IGRpdlNlbGVjdExldmVsLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO1xuY29uc3QgbWFwc1NlbGVjdG9yID0gZGl2U2VsZWN0TWFwTmFtZS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcbmxldmVsU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICB3aGlsZSAobWFwc1NlbGVjdG9yLmZpcnN0Q2hpbGQpIHtcbiAgICBtYXBzU2VsZWN0b3IucmVtb3ZlQ2hpbGQobWFwc1NlbGVjdG9yLmZpcnN0Q2hpbGQpO1xuICB9XG4gIE9iamVjdC5rZXlzKHBsYXllck1hcFtlLnRhcmdldC52YWx1ZV0ubWFwcylcbiAgICAubWFwKChlbCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlQ29tcG9uZW50KHtcbiAgICAgICAgdGFnOiBcIm9wdGlvblwiLFxuICAgICAgICBjbGFzc05hbWU6IFwib3B0aW9uXCIsXG4gICAgICAgIHRleHQ6IGVsLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7IHZhbHVlOiBlbCB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gb3B0aW9uLmdldE5vZGUoKTtcbiAgICB9KVxuICAgIC5mb3JFYWNoKChlbCkgPT4gbWFwc1NlbGVjdG9yLmFwcGVuZENoaWxkKGVsKSk7XG59KTtcblxuZXhwb3J0IHsgZGl2U2VsZWN0TGV2ZWwsIGRpdlNlbGVjdE1hcE5hbWUgfTtcbiIsImltcG9ydCBjbGlja0ZvckdhbWUgZnJvbSBcIi4uL2Fzc2V0cy9zb3VuZHMvY2xpY2tfZm9yX2dhbWUubXAzXCI7XG5pbXBvcnQgY2xpY2tGb3JCdXR0b24gZnJvbSBcIi4uL2Fzc2V0cy9zb3VuZHMvY2xpY2tfZm9yX2J1dHRvbi5tcDNcIjtcbmltcG9ydCB3aW5Tb3VuZCBmcm9tIFwiLi4vYXNzZXRzL3NvdW5kcy93aW5fc291bmQubXAzXCI7XG5pbXBvcnQgZm9jdXNTb3VuZCBmcm9tIFwiLi4vYXNzZXRzL3NvdW5kcy9zbGlkZS1jbGljay05MjE1Mi5tcDNcIjtcbmZ1bmN0aW9uIHNvdW5kUGxheUdhbWUoKSB7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGNsaWNrRm9yR2FtZSk7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gc291bmRQbGF5Rm9jdXMoKSB7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGZvY3VzU291bmQpO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHNvdW5kUGxheVdpbigpIHtcbiAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oY2xpY2tGb3JCdXR0b24pO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHNvdW5kQnV0dG9uQ2xpY2soKSB7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHdpblNvdW5kKTtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5leHBvcnQgeyBzb3VuZEJ1dHRvbkNsaWNrLCBzb3VuZFBsYXlHYW1lLCBzb3VuZFBsYXlXaW4sIHNvdW5kUGxheUZvY3VzIH07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUvdGltZXIuc2Nzc1wiO1xuXG5jbGFzcyBUaW1lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHsgdGFnOiBcImRpdlwiLCBjbGFzc05hbWU6IFwidGltZXJcIiwgdGV4dDogXCIwMDowMFwiIH0pO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBcIlwiO1xuICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gIH1cblxuICBzdGFydFRpbWVyKHNlYyA9IDApIHtcbiAgICB0aGlzLnNob3coKTtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB0aGlzLnN0YXR1cyA9IHRydWU7XG4gICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlYyAvIDYwKTtcbiAgICBsZXQgc2Vjb25kcyA9IHNlYyAlIDYwO1xuICAgIHRoaXMuc2V0VGV4dENvbnRlbnQoXG4gICAgICBgJHttaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzfToke1xuICAgICAgICBzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzXG4gICAgICB9YFxuICAgICk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZWNvbmRzKys7XG4gICAgICBpZiAoc2Vjb25kcyA9PT0gNjApIHtcbiAgICAgICAgc2Vjb25kcyA9IDA7XG4gICAgICAgIG1pbnV0ZXMrKztcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0Tm9kZSgpLnRleHRDb250ZW50ID0gYCR7bWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlc306JHtcbiAgICAgICAgc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kc1xuICAgICAgfWA7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICB9XG5cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgY29uc3QgW21pbnV0ZXMsIHNlY29uZHNdID0gdGhpcy5nZXROb2RlKClcbiAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIjpcIilcbiAgICAgIC5tYXAoTnVtYmVyKTtcbiAgICByZXR1cm4gbWludXRlcyAqIDYwICsgc2Vjb25kcztcbiAgfVxuXG4gIHN0b3BUaW1lcigpIHtcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICAgIGNvbnN0IGR1cmF0aW9uSW5TZWNvbmRzID0gdGhpcy5nZXREdXJhdGlvbigpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgcmV0dXJuIGR1cmF0aW9uSW5TZWNvbmRzO1xuICB9XG5cbiAgcmVzZXRUaW1lcigpIHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIHRoaXMuZ2V0Tm9kZSgpLnRleHRDb250ZW50ID0gXCIwMDowMFwiO1xuICB9XG5cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxufVxuXG5jb25zdCB0aW1lciA9IG5ldyBUaW1lcigpO1xudGltZXIuaGlkZSgpO1xuZXhwb3J0IHsgdGltZXIgfTtcbiIsImZ1bmN0aW9uIG1heExlbmd0aChhcnJOdW0pIHtcbiAgY29uc3Qgb2JqTGVuZ3RoID0ge1xuICAgIGhvcml6b250YWw6IDAsXG4gICAgdmVydGljYWw6IDAsXG4gIH07XG4gIGNvbnN0IGhvcml6b250YWxMZW5naHQgPSAoYXJyTnVtKSA9PiB7XG4gICAgbGV0IG1heExlbmd0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJOdW0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyck51bVtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAoYXJyTnVtW2ldW2pdID09PSAxKSB7XG4gICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb3VudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICByZXN1bHQucHVzaChjb3VudCk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICBtYXhMZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4TGVuZ3RoO1xuICB9O1xuICBjb25zdCB2ZXJ0aWNhbExlbmdodCA9IChhcnJOdW0pID0+IHtcbiAgICBsZXQgbWF4TGVuZ3RoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyck51bVswXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyTnVtLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChhcnJOdW1bal1baV0gPT09IDEpIHtcbiAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGNvdW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgIG1heExlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXhMZW5ndGg7XG4gIH07XG4gIG9iakxlbmd0aC5ob3Jpem9udGFsID0gaG9yaXpvbnRhbExlbmdodChhcnJOdW0pO1xuICBvYmpMZW5ndGgudmVydGljYWwgPSB2ZXJ0aWNhbExlbmdodChhcnJOdW0pO1xuICByZXR1cm4gb2JqTGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlMkRBcnJheXMoYXJyYXkxLCBhcnJheTIpIHtcbiAgaWYgKGFycmF5MS5sZW5ndGggIT09IGFycmF5Mi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5MS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheTFbaV0ubGVuZ3RoICE9PSBhcnJheTJbaV0ubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5MVtpXS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGFycmF5MVtpXVtqXSAhPT0gYXJyYXkyW2ldW2pdKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUludEZyb21JbnRlcnZhbChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn1cblxuZXhwb3J0IHsgbWF4TGVuZ3RoLCBjb21wYXJlMkRBcnJheXMsIHJhbmRvbUludEZyb21JbnRlcnZhbCB9O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b25zLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9ucy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jZWxsLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2VsbC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250cm9scy1wYW5lbC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRyb2xzLXBhbmVsLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXBsYWNlLWluZm8uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXBsYWNlLWluZm8uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1wbGFjZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtcGxhY2Uuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lc3NhZ2UtZG93bi1ib3guc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXNzYWdlLWRvd24tYm94LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlbGVjdC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlbGVjdC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aW1lci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RpbWVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=