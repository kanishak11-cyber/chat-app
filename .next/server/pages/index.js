"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Context),
/* harmony export */   "H": () => (/* binding */ ContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const ContextProvider = props => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: secret,
    1: setSecret
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const value = {
    username,
    setUsername,
    secret,
    setSecret
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Context.Provider, {
    value: value,
    children: props.children
  });
};

/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Auth)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./context/index.js
var context = __webpack_require__(807);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/index.js






function Auth() {
  const {
    setUsername,
    setSecret
  } = (0,external_react_.useContext)(context/* Context */._);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "background",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "auth-container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: "auth-form",
        onSubmit: e => e.preventDefault(),
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "auth-title",
          children: "CHAT APP"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "input-container",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "Username",
            className: "text-input",
            onChange: e => setUsername(e.target.value)
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "input-container",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "password",
            placeholder: "Password",
            className: "text-input",
            onChange: e => setSecret(e.target.value)
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          className: "submit-button",
          children: "Login / Sign up"
        })]
      })
    })
  });
}

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(928));
module.exports = __webpack_exports__;

})();