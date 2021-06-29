self["webpackHotUpdate_N_E"]("pages/products/[id]",{

/***/ "./src/components/Pages/Card/PurchaseControl/PurchaseControl.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/Pages/Card/PurchaseControl/PurchaseControl.jsx ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseControl": function() { return /* binding */ PurchaseControl; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Desktop_ko_cheese_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PurchaseControl.module.scss */ "./src/components/Pages/Card/PurchaseControl/PurchaseControl.module.scss");
/* harmony import */ var _PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Pages\\Card\\PurchaseControl\\PurchaseControl.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var PurchaseControl = function PurchaseControl(_ref) {
  _s();

  var id = _ref.id;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(1),
      _React$useState2 = (0,C_Users_Desktop_ko_cheese_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  var changeCount = function changeCount(operation) {
    if (count === 1 && operation === "-") {
      return false;
    }

    setCount(function (prev) {
      return operation === "-" ? prev - 1 : prev + 1;
    });
  };

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    setCount(1);
  }, [id]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counter)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().change), (_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().minus)),
          onClick: function onClick() {
            return changeCount("-");
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            width: "11",
            height: "2",
            viewBox: "0 0 11 2",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              x: "0.3",
              y: "0.500012",
              width: "9.83479",
              height: "0.6",
              rx: "0.3",
              stroke: "#184240",
              strokeWidth: "0.6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 22
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().count)),
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().change), (_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().plus)),
          onClick: function onClick() {
            return changeCount("+");
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            width: "12",
            height: "10",
            viewBox: "0 0 12 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              x: "0.3",
              y: "4.49983",
              width: "11.2654",
              height: "0.6",
              rx: "0.3",
              stroke: "#184240",
              strokeWidth: "0.6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 22
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              x: "6.55178",
              y: "0.570808",
              width: "8.85841",
              height: "0.741591",
              rx: "0.370795",
              transform: "rotate(90 6.55178 0.570808)",
              stroke: "#184240",
              strokeWidth: "0.741591"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 22
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 16
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().add)),
        children: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().favorite)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          width: "19",
          height: "17",
          viewBox: "0 0 19 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M9.29928 2.8843L9.71861 3.53202L10.1385 2.88466C11.6303 0.584595 13.7078 0.133692 15.3877 0.77901C17.0993 1.43651 18.5 3.26982 18.5 5.76058C18.5 6.62038 18.0425 7.67417 17.2506 8.83147C16.469 9.97383 15.4093 11.1491 14.31 12.2383C13.2129 13.3253 12.0885 14.3146 11.1847 15.0863C10.8601 15.3635 10.5655 15.6111 10.3101 15.826C10.2094 15.9106 10.1149 15.9902 10.0269 16.0644C9.91405 16.1596 9.80919 16.2485 9.71578 16.329C9.61709 16.2464 9.50606 16.1556 9.3869 16.0586C9.25968 15.9552 9.12042 15.8427 8.96965 15.7209C8.73358 15.5301 8.4693 15.3166 8.17885 15.0793C7.23374 14.3071 6.05445 13.3174 4.90234 12.2299C3.7479 11.1401 2.63384 9.96442 1.81183 8.82183C0.978006 7.6628 0.5 6.61263 0.5 5.76058C0.5 3.26866 1.99286 1.42774 3.82391 0.767222C5.63163 0.115123 7.81776 0.595876 9.29928 2.8843Z",
            stroke: "#184240"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().delivery)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M17.9543 10.2835L16.24 6.13794C16.1963 6.0309 16.1231 5.93957 16.0296 5.87532C15.9361 5.81108 15.8265 5.77678 15.7143 5.77668H14V4.59223C14 4.43516 13.9398 4.28452 13.8326 4.17346C13.7255 4.0624 13.5801 4 13.4286 4H2.57143C2.41988 4 2.27453 4.0624 2.16737 4.17346C2.0602 4.28452 2 4.43516 2 4.59223V14.6601C2 14.8172 2.0602 14.9678 2.16737 15.0789C2.27453 15.1899 2.41988 15.2523 2.57143 15.2523H3.79429C3.92588 15.7542 4.21314 16.1972 4.61177 16.513C5.0104 16.8289 5.49823 17 6 17C6.50177 17 6.9896 16.8289 7.38823 16.513C7.78686 16.1972 8.07412 15.7542 8.20571 15.2523H11.7943C11.9259 15.7542 12.2131 16.1972 12.6118 16.513C13.0104 16.8289 13.4982 17 14 17C14.5018 17 14.9896 16.8289 15.3882 16.513C15.7869 16.1972 16.0741 15.7542 16.2057 15.2523H17.4286C17.5801 15.2523 17.7255 15.1899 17.8326 15.0789C17.9398 14.9678 18 14.8172 18 14.6601V10.5145C17.9999 10.4351 17.9843 10.3566 17.9543 10.2835ZM14 6.96114H15.3371L16.56 9.92228H14V6.96114ZM6 15.8446C5.77396 15.8446 5.553 15.7751 5.36506 15.6449C5.17712 15.5148 5.03064 15.3298 4.94414 15.1134C4.85764 14.8969 4.83501 14.6588 4.8791 14.429C4.9232 14.1993 5.03205 13.9882 5.19188 13.8226C5.35171 13.6569 5.55535 13.5441 5.77704 13.4984C5.99873 13.4527 6.22852 13.4762 6.43735 13.5658C6.64618 13.6555 6.82467 13.8073 6.95025 14.0021C7.07583 14.1968 7.14286 14.4258 7.14286 14.6601C7.14286 14.9742 7.02245 15.2755 6.80812 15.4976C6.59379 15.7198 6.3031 15.8446 6 15.8446ZM11.7943 14.0679H8.20571C8.07412 13.566 7.78686 13.123 7.38823 12.8072C6.9896 12.4913 6.50177 12.3202 6 12.3202C5.49823 12.3202 5.0104 12.4913 4.61177 12.8072C4.21314 13.123 3.92588 13.566 3.79429 14.0679H3.14286V5.18446H12.8571V12.6228C12.5969 12.7794 12.3691 12.9876 12.1867 13.2355C12.0043 13.4835 11.871 13.7664 11.7943 14.0679ZM14 15.8446C13.774 15.8446 13.553 15.7751 13.3651 15.6449C13.1771 15.5148 13.0306 15.3298 12.9441 15.1134C12.8576 14.8969 12.835 14.6588 12.8791 14.429C12.9232 14.1993 13.032 13.9882 13.1919 13.8226C13.3517 13.6569 13.5553 13.5441 13.777 13.4984C13.9987 13.4527 14.2285 13.4762 14.4374 13.5658C14.6462 13.6555 14.8247 13.8073 14.9503 14.0021C15.0758 14.1968 15.1429 14.4258 15.1429 14.6601C15.1429 14.9742 15.0224 15.2755 14.8081 15.4976C14.5938 15.7198 14.3031 15.8446 14 15.8446ZM16.8571 14.0679H16.2057C16.0794 13.5606 15.7943 13.1111 15.3952 12.7897C14.9961 12.4682 14.5055 12.2929 14 12.2912V11.1067H16.8571V14.0679Z",
          fill: "#728D8C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text)),
        children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().terms)),
        children: "15.05.2021 ~ 15:30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 10
    }, _this)]
  }, void 0, true);
};

_s(PurchaseControl, "1TKS5KxgEY7AZLcK9RXaoLbfBQg=");

_c = PurchaseControl;

var _c;

$RefreshReg$(_c, "PurchaseControl");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZXMvQ2FyZC9QdXJjaGFzZUNvbnRyb2wvUHVyY2hhc2VDb250cm9sLmpzeCJdLCJuYW1lcyI6WyJQdXJjaGFzZUNvbnRyb2wiLCJpZCIsIlJlYWN0IiwiY291bnQiLCJzZXRDb3VudCIsImNoYW5nZUNvdW50Iiwib3BlcmF0aW9uIiwicHJldiIsInMiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQVU7QUFBQTs7QUFBQSxNQUFSQyxFQUFRLFFBQVJBLEVBQVE7O0FBQUEsd0JBQ1pDLHFEQUFBLENBQWUsQ0FBZixDQURZO0FBQUE7QUFBQSxNQUMvQkMsS0FEK0I7QUFBQSxNQUN4QkMsUUFEd0I7O0FBRXRDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBZTtBQUNoQyxRQUFJSCxLQUFLLEtBQUssQ0FBVixJQUFlRyxTQUFTLEtBQUssR0FBakMsRUFBc0M7QUFDbkMsYUFBTyxLQUFQO0FBQ0Y7O0FBQ0RGLFlBQVEsQ0FBQyxVQUFDRyxJQUFEO0FBQUEsYUFBV0QsU0FBUyxLQUFLLEdBQWQsR0FBb0JDLElBQUksR0FBRyxDQUEzQixHQUErQkEsSUFBSSxHQUFHLENBQWpEO0FBQUEsS0FBRCxDQUFSO0FBQ0YsR0FMRDs7QUFNQUwsd0RBQUEsQ0FBZ0IsWUFBTTtBQUNuQkUsWUFBUSxDQUFDLENBQUQsQ0FBUjtBQUNGLEdBRkQsRUFFRyxDQUFDSCxFQUFELENBRkg7QUFJQSxzQkFDRztBQUFBLDRCQUNHO0FBQUssZUFBUyxFQUFFTywrRUFBaEI7QUFBQSw4QkFDRztBQUFLLGlCQUFTLEVBQUVDLDZDQUFJLENBQUNELDZFQUFELENBQXBCO0FBQUEsZ0NBQ0c7QUFDRyxtQkFBUyxFQUFFQyw2Q0FBSSxDQUFDRCw0RUFBRCxFQUFXQSwyRUFB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LDAwRUFETDtBQUVHLGNBQUksRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREgsZUFhRztBQUFNLGlCQUFTLEVBQUVDLDZDQUFJLENBQUNELDBFQUFELENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkgsZUFjRztBQUFNLGlCQUFTLEVBQUVDLDZDQUFJLENBQUNELDJFQUFELENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0VIO0FBQUEsa0JBREg7QUE4RkYsQ0ExR007O0dBQU1SLGU7O0tBQUFBLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvW2lkXS43ZmU0NDVjNDcwOTdhOTBjYjNjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9QdXJjaGFzZUNvbnRyb2wubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQdXJjaGFzZUNvbnRyb2wgPSAoe2lkfSkgPT4ge1xyXG4gICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gICBjb25zdCBjaGFuZ2VDb3VudCA9IChvcGVyYXRpb24pID0+IHtcclxuICAgICAgaWYgKGNvdW50ID09PSAxICYmIG9wZXJhdGlvbiA9PT0gXCItXCIpIHtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHNldENvdW50KChwcmV2KSA9PiAob3BlcmF0aW9uID09PSBcIi1cIiA/IHByZXYgLSAxIDogcHJldiArIDEpKTtcclxuICAgfTtcclxuICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0Q291bnQoMSk7XHJcbiAgIH0sIFtpZF0pO1xyXG5cclxuICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jb3VudGVyKX0+XHJcbiAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHMuY2hhbmdlLCBzLm1pbnVzKX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlQ291bnQoXCItXCIpfVxyXG4gICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDExIDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIwLjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5PVwiMC41MDAwMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkuODM0NzlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIwLjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByeD1cIjAuM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMxODQyNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMuY291bnQpfT57Y291bnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChzLmNoYW5nZSwgcy5wbHVzKX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlQ291bnQoXCIrXCIpfVxyXG4gICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMiAxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjAuM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCI0LjQ5OTgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMS4yNjU0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMC42XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIwLjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjMTg0MjQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIwLjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiNi41NTE3OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIwLjU3MDgwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOC44NTg0MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjAuNzQxNTkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIwLjM3MDc5NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCA2LjU1MTc4IDAuNTcwODA4KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMxODQyNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuNzQxNTkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nsc3gocy5hZGQpfT7QsiDQutC+0YDQt9C40L3RgzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xzeChzLmZhdm9yaXRlKX0+XHJcbiAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOVwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE3XCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxOSAxN1wiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgZD1cIk05LjI5OTI4IDIuODg0M0w5LjcxODYxIDMuNTMyMDJMMTAuMTM4NSAyLjg4NDY2QzExLjYzMDMgMC41ODQ1OTUgMTMuNzA3OCAwLjEzMzY5MiAxNS4zODc3IDAuNzc5MDFDMTcuMDk5MyAxLjQzNjUxIDE4LjUgMy4yNjk4MiAxOC41IDUuNzYwNThDMTguNSA2LjYyMDM4IDE4LjA0MjUgNy42NzQxNyAxNy4yNTA2IDguODMxNDdDMTYuNDY5IDkuOTczODMgMTUuNDA5MyAxMS4xNDkxIDE0LjMxIDEyLjIzODNDMTMuMjEyOSAxMy4zMjUzIDEyLjA4ODUgMTQuMzE0NiAxMS4xODQ3IDE1LjA4NjNDMTAuODYwMSAxNS4zNjM1IDEwLjU2NTUgMTUuNjExMSAxMC4zMTAxIDE1LjgyNkMxMC4yMDk0IDE1LjkxMDYgMTAuMTE0OSAxNS45OTAyIDEwLjAyNjkgMTYuMDY0NEM5LjkxNDA1IDE2LjE1OTYgOS44MDkxOSAxNi4yNDg1IDkuNzE1NzggMTYuMzI5QzkuNjE3MDkgMTYuMjQ2NCA5LjUwNjA2IDE2LjE1NTYgOS4zODY5IDE2LjA1ODZDOS4yNTk2OCAxNS45NTUyIDkuMTIwNDIgMTUuODQyNyA4Ljk2OTY1IDE1LjcyMDlDOC43MzM1OCAxNS41MzAxIDguNDY5MyAxNS4zMTY2IDguMTc4ODUgMTUuMDc5M0M3LjIzMzc0IDE0LjMwNzEgNi4wNTQ0NSAxMy4zMTc0IDQuOTAyMzQgMTIuMjI5OUMzLjc0NzkgMTEuMTQwMSAyLjYzMzg0IDkuOTY0NDIgMS44MTE4MyA4LjgyMTgzQzAuOTc4MDA2IDcuNjYyOCAwLjUgNi42MTI2MyAwLjUgNS43NjA1OEMwLjUgMy4yNjg2NiAxLjk5Mjg2IDEuNDI3NzQgMy44MjM5MSAwLjc2NzIyMkM1LjYzMTYzIDAuMTE1MTIzIDcuODE3NzYgMC41OTU4NzYgOS4yOTkyOCAyLjg4NDNaXCJcclxuICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzE4NDI0MFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuZGVsaXZlcnkpfT5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTE3Ljk1NDMgMTAuMjgzNUwxNi4yNCA2LjEzNzk0QzE2LjE5NjMgNi4wMzA5IDE2LjEyMzEgNS45Mzk1NyAxNi4wMjk2IDUuODc1MzJDMTUuOTM2MSA1LjgxMTA4IDE1LjgyNjUgNS43NzY3OCAxNS43MTQzIDUuNzc2NjhIMTRWNC41OTIyM0MxNCA0LjQzNTE2IDEzLjkzOTggNC4yODQ1MiAxMy44MzI2IDQuMTczNDZDMTMuNzI1NSA0LjA2MjQgMTMuNTgwMSA0IDEzLjQyODYgNEgyLjU3MTQzQzIuNDE5ODggNCAyLjI3NDUzIDQuMDYyNCAyLjE2NzM3IDQuMTczNDZDMi4wNjAyIDQuMjg0NTIgMiA0LjQzNTE2IDIgNC41OTIyM1YxNC42NjAxQzIgMTQuODE3MiAyLjA2MDIgMTQuOTY3OCAyLjE2NzM3IDE1LjA3ODlDMi4yNzQ1MyAxNS4xODk5IDIuNDE5ODggMTUuMjUyMyAyLjU3MTQzIDE1LjI1MjNIMy43OTQyOUMzLjkyNTg4IDE1Ljc1NDIgNC4yMTMxNCAxNi4xOTcyIDQuNjExNzcgMTYuNTEzQzUuMDEwNCAxNi44Mjg5IDUuNDk4MjMgMTcgNiAxN0M2LjUwMTc3IDE3IDYuOTg5NiAxNi44Mjg5IDcuMzg4MjMgMTYuNTEzQzcuNzg2ODYgMTYuMTk3MiA4LjA3NDEyIDE1Ljc1NDIgOC4yMDU3MSAxNS4yNTIzSDExLjc5NDNDMTEuOTI1OSAxNS43NTQyIDEyLjIxMzEgMTYuMTk3MiAxMi42MTE4IDE2LjUxM0MxMy4wMTA0IDE2LjgyODkgMTMuNDk4MiAxNyAxNCAxN0MxNC41MDE4IDE3IDE0Ljk4OTYgMTYuODI4OSAxNS4zODgyIDE2LjUxM0MxNS43ODY5IDE2LjE5NzIgMTYuMDc0MSAxNS43NTQyIDE2LjIwNTcgMTUuMjUyM0gxNy40Mjg2QzE3LjU4MDEgMTUuMjUyMyAxNy43MjU1IDE1LjE4OTkgMTcuODMyNiAxNS4wNzg5QzE3LjkzOTggMTQuOTY3OCAxOCAxNC44MTcyIDE4IDE0LjY2MDFWMTAuNTE0NUMxNy45OTk5IDEwLjQzNTEgMTcuOTg0MyAxMC4zNTY2IDE3Ljk1NDMgMTAuMjgzNVpNMTQgNi45NjExNEgxNS4zMzcxTDE2LjU2IDkuOTIyMjhIMTRWNi45NjExNFpNNiAxNS44NDQ2QzUuNzczOTYgMTUuODQ0NiA1LjU1MyAxNS43NzUxIDUuMzY1MDYgMTUuNjQ0OUM1LjE3NzEyIDE1LjUxNDggNS4wMzA2NCAxNS4zMjk4IDQuOTQ0MTQgMTUuMTEzNEM0Ljg1NzY0IDE0Ljg5NjkgNC44MzUwMSAxNC42NTg4IDQuODc5MSAxNC40MjlDNC45MjMyIDE0LjE5OTMgNS4wMzIwNSAxMy45ODgyIDUuMTkxODggMTMuODIyNkM1LjM1MTcxIDEzLjY1NjkgNS41NTUzNSAxMy41NDQxIDUuNzc3MDQgMTMuNDk4NEM1Ljk5ODczIDEzLjQ1MjcgNi4yMjg1MiAxMy40NzYyIDYuNDM3MzUgMTMuNTY1OEM2LjY0NjE4IDEzLjY1NTUgNi44MjQ2NyAxMy44MDczIDYuOTUwMjUgMTQuMDAyMUM3LjA3NTgzIDE0LjE5NjggNy4xNDI4NiAxNC40MjU4IDcuMTQyODYgMTQuNjYwMUM3LjE0Mjg2IDE0Ljk3NDIgNy4wMjI0NSAxNS4yNzU1IDYuODA4MTIgMTUuNDk3NkM2LjU5Mzc5IDE1LjcxOTggNi4zMDMxIDE1Ljg0NDYgNiAxNS44NDQ2Wk0xMS43OTQzIDE0LjA2NzlIOC4yMDU3MUM4LjA3NDEyIDEzLjU2NiA3Ljc4Njg2IDEzLjEyMyA3LjM4ODIzIDEyLjgwNzJDNi45ODk2IDEyLjQ5MTMgNi41MDE3NyAxMi4zMjAyIDYgMTIuMzIwMkM1LjQ5ODIzIDEyLjMyMDIgNS4wMTA0IDEyLjQ5MTMgNC42MTE3NyAxMi44MDcyQzQuMjEzMTQgMTMuMTIzIDMuOTI1ODggMTMuNTY2IDMuNzk0MjkgMTQuMDY3OUgzLjE0Mjg2VjUuMTg0NDZIMTIuODU3MVYxMi42MjI4QzEyLjU5NjkgMTIuNzc5NCAxMi4zNjkxIDEyLjk4NzYgMTIuMTg2NyAxMy4yMzU1QzEyLjAwNDMgMTMuNDgzNSAxMS44NzEgMTMuNzY2NCAxMS43OTQzIDE0LjA2NzlaTTE0IDE1Ljg0NDZDMTMuNzc0IDE1Ljg0NDYgMTMuNTUzIDE1Ljc3NTEgMTMuMzY1MSAxNS42NDQ5QzEzLjE3NzEgMTUuNTE0OCAxMy4wMzA2IDE1LjMyOTggMTIuOTQ0MSAxNS4xMTM0QzEyLjg1NzYgMTQuODk2OSAxMi44MzUgMTQuNjU4OCAxMi44NzkxIDE0LjQyOUMxMi45MjMyIDE0LjE5OTMgMTMuMDMyIDEzLjk4ODIgMTMuMTkxOSAxMy44MjI2QzEzLjM1MTcgMTMuNjU2OSAxMy41NTUzIDEzLjU0NDEgMTMuNzc3IDEzLjQ5ODRDMTMuOTk4NyAxMy40NTI3IDE0LjIyODUgMTMuNDc2MiAxNC40Mzc0IDEzLjU2NThDMTQuNjQ2MiAxMy42NTU1IDE0LjgyNDcgMTMuODA3MyAxNC45NTAzIDE0LjAwMjFDMTUuMDc1OCAxNC4xOTY4IDE1LjE0MjkgMTQuNDI1OCAxNS4xNDI5IDE0LjY2MDFDMTUuMTQyOSAxNC45NzQyIDE1LjAyMjQgMTUuMjc1NSAxNC44MDgxIDE1LjQ5NzZDMTQuNTkzOCAxNS43MTk4IDE0LjMwMzEgMTUuODQ0NiAxNCAxNS44NDQ2Wk0xNi44NTcxIDE0LjA2NzlIMTYuMjA1N0MxNi4wNzk0IDEzLjU2MDYgMTUuNzk0MyAxMy4xMTExIDE1LjM5NTIgMTIuNzg5N0MxNC45OTYxIDEyLjQ2ODIgMTQuNTA1NSAxMi4yOTI5IDE0IDEyLjI5MTJWMTEuMTA2N0gxNi44NTcxVjE0LjA2NzlaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiM3MjhEOENcIlxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMudGV4dCl9PtCU0L7RgdGC0LDQstC60LA6IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMudGVybXMpfT4xNS4wNS4yMDIxIH4gMTU6MzA8L3NwYW4+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==