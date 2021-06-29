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




var PurchaseControl = function PurchaseControl() {
  _s();

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
    console.log('render');
  }, []);
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
              lineNumber: 31,
              columnNumber: 22
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().count)),
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
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
              lineNumber: 54,
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
              lineNumber: 63,
              columnNumber: 22
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 16
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().add)),
        children: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
            lineNumber: 85,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
          lineNumber: 100,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text)),
        children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_4___default().terms)),
        children: "15.05.2021 ~ 15:30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZXMvQ2FyZC9QdXJjaGFzZUNvbnRyb2wvUHVyY2hhc2VDb250cm9sLmpzeCJdLCJuYW1lcyI6WyJQdXJjaGFzZUNvbnRyb2wiLCJSZWFjdCIsImNvdW50Iiwic2V0Q291bnQiLCJjaGFuZ2VDb3VudCIsIm9wZXJhdGlvbiIsInByZXYiLCJjb25zb2xlIiwibG9nIiwicyIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLHdCQUNSQyxxREFBQSxDQUFlLENBQWYsQ0FEUTtBQUFBO0FBQUEsTUFDM0JDLEtBRDJCO0FBQUEsTUFDcEJDLFFBRG9COztBQUVsQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxTQUFELEVBQWU7QUFDaEMsUUFBSUgsS0FBSyxLQUFLLENBQVYsSUFBZUcsU0FBUyxLQUFLLEdBQWpDLEVBQXNDO0FBQ25DLGFBQU8sS0FBUDtBQUNGOztBQUNERixZQUFRLENBQUMsVUFBQ0csSUFBRDtBQUFBLGFBQVdELFNBQVMsS0FBSyxHQUFkLEdBQW9CQyxJQUFJLEdBQUcsQ0FBM0IsR0FBK0JBLElBQUksR0FBRyxDQUFqRDtBQUFBLEtBQUQsQ0FBUjtBQUNGLEdBTEQ7O0FBTUFMLHdEQUFBLENBQWdCLFlBQU07QUFDbkJNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDRixHQUZELEVBRUcsRUFGSDtBQUdBLHNCQUNHO0FBQUEsNEJBQ0c7QUFBSyxlQUFTLEVBQUVDLCtFQUFoQjtBQUFBLDhCQUNHO0FBQUssaUJBQVMsRUFBRUMsNkNBQUksQ0FBQ0QsNkVBQUQsQ0FBcEI7QUFBQSxnQ0FDRztBQUNHLG1CQUFTLEVBQUVDLDZDQUFJLENBQUNELDRFQUFELEVBQVdBLDJFQUFYLENBRGxCO0FBRUcsaUJBQU8sRUFB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O0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESCxlQWFHO0FBQU0saUJBQVMsRUFBRUMsNkNBQUksQ0FBQ0QsMEVBQUQsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSCxlQWNHO0FBQU0saUJBQVMsRUFBRUMsNkNBQUksQ0FBQ0QsMkVBQUQsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzRUg7QUFBQSxrQkFESDtBQThGRixDQXpHTTs7R0FBTVQsZTs7S0FBQUEsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9baWRdLmJlYzg1MjEzZGUxNGZlYzEyNTY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL1B1cmNoYXNlQ29udHJvbC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFB1cmNoYXNlQ29udHJvbCA9ICgpID0+IHtcclxuICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuICAgY29uc3QgY2hhbmdlQ291bnQgPSAob3BlcmF0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChjb3VudCA9PT0gMSAmJiBvcGVyYXRpb24gPT09IFwiLVwiKSB7XHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBzZXRDb3VudCgocHJldikgPT4gKG9wZXJhdGlvbiA9PT0gXCItXCIgPyBwcmV2IC0gMSA6IHByZXYgKyAxKSk7XHJcbiAgIH07XHJcbiAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXInKTtcclxuICAgfSwgW10pO1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmNvdW50ZXIpfT5cclxuICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3gocy5jaGFuZ2UsIHMubWludXMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDb3VudChcIi1cIil9XHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTEgMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjAuM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIwLjUwMDAxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOS44MzQ3OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjAuNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMC4zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzE4NDI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMC42XCJcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy5jb3VudCl9Pntjb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHMuY2hhbmdlLCBzLnBsdXMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDb3VudChcIitcIil9XHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyIDEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMC4zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjQuNDk5ODNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExLjI2NTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIwLjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByeD1cIjAuM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMxODQyNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9XCI2LjU1MTc4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjAuNTcwODA4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4Ljg1ODQxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMC43NDE1OTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByeD1cIjAuMzcwNzk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDkwIDYuNTUxNzggMC41NzA4MDgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzE4NDI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMC43NDE1OTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xzeChzLmFkZCl9PtCyINC60L7RgNC30LjQvdGDPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbHN4KHMuZmF2b3JpdGUpfT5cclxuICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE5XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE5IDE3XCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICBkPVwiTTkuMjk5MjggMi44ODQzTDkuNzE4NjEgMy41MzIwMkwxMC4xMzg1IDIuODg0NjZDMTEuNjMwMyAwLjU4NDU5NSAxMy43MDc4IDAuMTMzNjkyIDE1LjM4NzcgMC43NzkwMUMxNy4wOTkzIDEuNDM2NTEgMTguNSAzLjI2OTgyIDE4LjUgNS43NjA1OEMxOC41IDYuNjIwMzggMTguMDQyNSA3LjY3NDE3IDE3LjI1MDYgOC44MzE0N0MxNi40NjkgOS45NzM4MyAxNS40MDkzIDExLjE0OTEgMTQuMzEgMTIuMjM4M0MxMy4yMTI5IDEzLjMyNTMgMTIuMDg4NSAxNC4zMTQ2IDExLjE4NDcgMTUuMDg2M0MxMC44NjAxIDE1LjM2MzUgMTAuNTY1NSAxNS42MTExIDEwLjMxMDEgMTUuODI2QzEwLjIwOTQgMTUuOTEwNiAxMC4xMTQ5IDE1Ljk5MDIgMTAuMDI2OSAxNi4wNjQ0QzkuOTE0MDUgMTYuMTU5NiA5LjgwOTE5IDE2LjI0ODUgOS43MTU3OCAxNi4zMjlDOS42MTcwOSAxNi4yNDY0IDkuNTA2MDYgMTYuMTU1NiA5LjM4NjkgMTYuMDU4NkM5LjI1OTY4IDE1Ljk1NTIgOS4xMjA0MiAxNS44NDI3IDguOTY5NjUgMTUuNzIwOUM4LjczMzU4IDE1LjUzMDEgOC40NjkzIDE1LjMxNjYgOC4xNzg4NSAxNS4wNzkzQzcuMjMzNzQgMTQuMzA3MSA2LjA1NDQ1IDEzLjMxNzQgNC45MDIzNCAxMi4yMjk5QzMuNzQ3OSAxMS4xNDAxIDIuNjMzODQgOS45NjQ0MiAxLjgxMTgzIDguODIxODNDMC45NzgwMDYgNy42NjI4IDAuNSA2LjYxMjYzIDAuNSA1Ljc2MDU4QzAuNSAzLjI2ODY2IDEuOTkyODYgMS40Mjc3NCAzLjgyMzkxIDAuNzY3MjIyQzUuNjMxNjMgMC4xMTUxMjMgNy44MTc3NiAwLjU5NTg3NiA5LjI5OTI4IDIuODg0M1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjMTg0MjQwXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5kZWxpdmVyeSl9PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTcuOTU0MyAxMC4yODM1TDE2LjI0IDYuMTM3OTRDMTYuMTk2MyA2LjAzMDkgMTYuMTIzMSA1LjkzOTU3IDE2LjAyOTYgNS44NzUzMkMxNS45MzYxIDUuODExMDggMTUuODI2NSA1Ljc3Njc4IDE1LjcxNDMgNS43NzY2OEgxNFY0LjU5MjIzQzE0IDQuNDM1MTYgMTMuOTM5OCA0LjI4NDUyIDEzLjgzMjYgNC4xNzM0NkMxMy43MjU1IDQuMDYyNCAxMy41ODAxIDQgMTMuNDI4NiA0SDIuNTcxNDNDMi40MTk4OCA0IDIuMjc0NTMgNC4wNjI0IDIuMTY3MzcgNC4xNzM0NkMyLjA2MDIgNC4yODQ1MiAyIDQuNDM1MTYgMiA0LjU5MjIzVjE0LjY2MDFDMiAxNC44MTcyIDIuMDYwMiAxNC45Njc4IDIuMTY3MzcgMTUuMDc4OUMyLjI3NDUzIDE1LjE4OTkgMi40MTk4OCAxNS4yNTIzIDIuNTcxNDMgMTUuMjUyM0gzLjc5NDI5QzMuOTI1ODggMTUuNzU0MiA0LjIxMzE0IDE2LjE5NzIgNC42MTE3NyAxNi41MTNDNS4wMTA0IDE2LjgyODkgNS40OTgyMyAxNyA2IDE3QzYuNTAxNzcgMTcgNi45ODk2IDE2LjgyODkgNy4zODgyMyAxNi41MTNDNy43ODY4NiAxNi4xOTcyIDguMDc0MTIgMTUuNzU0MiA4LjIwNTcxIDE1LjI1MjNIMTEuNzk0M0MxMS45MjU5IDE1Ljc1NDIgMTIuMjEzMSAxNi4xOTcyIDEyLjYxMTggMTYuNTEzQzEzLjAxMDQgMTYuODI4OSAxMy40OTgyIDE3IDE0IDE3QzE0LjUwMTggMTcgMTQuOTg5NiAxNi44Mjg5IDE1LjM4ODIgMTYuNTEzQzE1Ljc4NjkgMTYuMTk3MiAxNi4wNzQxIDE1Ljc1NDIgMTYuMjA1NyAxNS4yNTIzSDE3LjQyODZDMTcuNTgwMSAxNS4yNTIzIDE3LjcyNTUgMTUuMTg5OSAxNy44MzI2IDE1LjA3ODlDMTcuOTM5OCAxNC45Njc4IDE4IDE0LjgxNzIgMTggMTQuNjYwMVYxMC41MTQ1QzE3Ljk5OTkgMTAuNDM1MSAxNy45ODQzIDEwLjM1NjYgMTcuOTU0MyAxMC4yODM1Wk0xNCA2Ljk2MTE0SDE1LjMzNzFMMTYuNTYgOS45MjIyOEgxNFY2Ljk2MTE0Wk02IDE1Ljg0NDZDNS43NzM5NiAxNS44NDQ2IDUuNTUzIDE1Ljc3NTEgNS4zNjUwNiAxNS42NDQ5QzUuMTc3MTIgMTUuNTE0OCA1LjAzMDY0IDE1LjMyOTggNC45NDQxNCAxNS4xMTM0QzQuODU3NjQgMTQuODk2OSA0LjgzNTAxIDE0LjY1ODggNC44NzkxIDE0LjQyOUM0LjkyMzIgMTQuMTk5MyA1LjAzMjA1IDEzLjk4ODIgNS4xOTE4OCAxMy44MjI2QzUuMzUxNzEgMTMuNjU2OSA1LjU1NTM1IDEzLjU0NDEgNS43NzcwNCAxMy40OTg0QzUuOTk4NzMgMTMuNDUyNyA2LjIyODUyIDEzLjQ3NjIgNi40MzczNSAxMy41NjU4QzYuNjQ2MTggMTMuNjU1NSA2LjgyNDY3IDEzLjgwNzMgNi45NTAyNSAxNC4wMDIxQzcuMDc1ODMgMTQuMTk2OCA3LjE0Mjg2IDE0LjQyNTggNy4xNDI4NiAxNC42NjAxQzcuMTQyODYgMTQuOTc0MiA3LjAyMjQ1IDE1LjI3NTUgNi44MDgxMiAxNS40OTc2QzYuNTkzNzkgMTUuNzE5OCA2LjMwMzEgMTUuODQ0NiA2IDE1Ljg0NDZaTTExLjc5NDMgMTQuMDY3OUg4LjIwNTcxQzguMDc0MTIgMTMuNTY2IDcuNzg2ODYgMTMuMTIzIDcuMzg4MjMgMTIuODA3MkM2Ljk4OTYgMTIuNDkxMyA2LjUwMTc3IDEyLjMyMDIgNiAxMi4zMjAyQzUuNDk4MjMgMTIuMzIwMiA1LjAxMDQgMTIuNDkxMyA0LjYxMTc3IDEyLjgwNzJDNC4yMTMxNCAxMy4xMjMgMy45MjU4OCAxMy41NjYgMy43OTQyOSAxNC4wNjc5SDMuMTQyODZWNS4xODQ0NkgxMi44NTcxVjEyLjYyMjhDMTIuNTk2OSAxMi43Nzk0IDEyLjM2OTEgMTIuOTg3NiAxMi4xODY3IDEzLjIzNTVDMTIuMDA0MyAxMy40ODM1IDExLjg3MSAxMy43NjY0IDExLjc5NDMgMTQuMDY3OVpNMTQgMTUuODQ0NkMxMy43NzQgMTUuODQ0NiAxMy41NTMgMTUuNzc1MSAxMy4zNjUxIDE1LjY0NDlDMTMuMTc3MSAxNS41MTQ4IDEzLjAzMDYgMTUuMzI5OCAxMi45NDQxIDE1LjExMzRDMTIuODU3NiAxNC44OTY5IDEyLjgzNSAxNC42NTg4IDEyLjg3OTEgMTQuNDI5QzEyLjkyMzIgMTQuMTk5MyAxMy4wMzIgMTMuOTg4MiAxMy4xOTE5IDEzLjgyMjZDMTMuMzUxNyAxMy42NTY5IDEzLjU1NTMgMTMuNTQ0MSAxMy43NzcgMTMuNDk4NEMxMy45OTg3IDEzLjQ1MjcgMTQuMjI4NSAxMy40NzYyIDE0LjQzNzQgMTMuNTY1OEMxNC42NDYyIDEzLjY1NTUgMTQuODI0NyAxMy44MDczIDE0Ljk1MDMgMTQuMDAyMUMxNS4wNzU4IDE0LjE5NjggMTUuMTQyOSAxNC40MjU4IDE1LjE0MjkgMTQuNjYwMUMxNS4xNDI5IDE0Ljk3NDIgMTUuMDIyNCAxNS4yNzU1IDE0LjgwODEgMTUuNDk3NkMxNC41OTM4IDE1LjcxOTggMTQuMzAzMSAxNS44NDQ2IDE0IDE1Ljg0NDZaTTE2Ljg1NzEgMTQuMDY3OUgxNi4yMDU3QzE2LjA3OTQgMTMuNTYwNiAxNS43OTQzIDEzLjExMTEgMTUuMzk1MiAxMi43ODk3QzE0Ljk5NjEgMTIuNDY4MiAxNC41MDU1IDEyLjI5MjkgMTQgMTIuMjkxMlYxMS4xMDY3SDE2Ljg1NzFWMTQuMDY3OVpcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzcyOEQ4Q1wiXHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy50ZXh0KX0+0JTQvtGB0YLQsNCy0LrQsDogPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy50ZXJtcyl9PjE1LjA1LjIwMjEgfiAxNTozMDwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9