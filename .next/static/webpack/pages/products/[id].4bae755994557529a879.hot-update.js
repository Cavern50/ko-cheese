self["webpackHotUpdate_N_E"]("pages/products/[id]",{

/***/ "./src/components/Pages/Card/Thumbnails/Thumbnails.jsx":
/*!*************************************************************!*\
  !*** ./src/components/Pages/Card/Thumbnails/Thumbnails.jsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Thumbnails": function() { return /* binding */ Thumbnails; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Desktop_ko_cheese_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Thumbnails.module.scss */ "./src/components/Pages/Card/Thumbnails/Thumbnails.module.scss");
/* harmony import */ var _Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Pages\\Card\\Thumbnails\\Thumbnails.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var Thumbnails = function Thumbnails(_ref) {
  _s();

  var gallery = _ref.gallery;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(""),
      _React$useState2 = (0,C_Users_Desktop_ko_cheese_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      activeMain = _React$useState2[0],
      setActiveMain = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0),
      _React$useState4 = (0,C_Users_Desktop_ko_cheese_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      activeMini = _React$useState4[0],
      setActiveMini = _React$useState4[1];

  var switchImage = function switchImage(image, i) {
    setActiveMain(image);
    setActiveMini(i);
  };

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    setActiveMain('');
    setActiveMini(0);
  }, [gallery]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_4___default().preview),
      children: gallery.map(function (image, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)((_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mini), i === activeMini ? (_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : ""),
          src: image,
          alt: "",
          onClick: function onClick() {
            return switchImage(image, i);
          }
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 16
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),
      src: activeMain || gallery[0],
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }, _this);
};

_s(Thumbnails, "h9iUspv6DvV0LgmbwN3Fv8kCxSI=");

_c = Thumbnails;

var _c;

$RefreshReg$(_c, "Thumbnails");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZXMvQ2FyZC9UaHVtYm5haWxzL1RodW1ibmFpbHMuanN4Il0sIm5hbWVzIjpbIlRodW1ibmFpbHMiLCJnYWxsZXJ5IiwiUmVhY3QiLCJhY3RpdmVNYWluIiwic2V0QWN0aXZlTWFpbiIsImFjdGl2ZU1pbmkiLCJzZXRBY3RpdmVNaW5pIiwic3dpdGNoSW1hZ2UiLCJpbWFnZSIsImkiLCJzIiwibWFwIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSx3QkFDSkMscURBQUEsQ0FBZSxFQUFmLENBREk7QUFBQTtBQUFBLE1BQ2pDQyxVQURpQztBQUFBLE1BQ3JCQyxhQURxQjs7QUFBQSx5QkFFSkYscURBQUEsQ0FBZSxDQUFmLENBRkk7QUFBQTtBQUFBLE1BRWpDRyxVQUZpQztBQUFBLE1BRXJCQyxhQUZxQjs7QUFJeEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDL0JMLGlCQUFhLENBQUNJLEtBQUQsQ0FBYjtBQUNBRixpQkFBYSxDQUFDRyxDQUFELENBQWI7QUFDRixHQUhEOztBQUlBUCx3REFBQSxDQUFnQixZQUFNO0FBQ25CRSxpQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBRSxpQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNGLEdBSEQsRUFHRyxDQUFDTCxPQUFELENBSEg7QUFJQSxzQkFDRztBQUFLLGFBQVMsRUFBRVMsMEVBQWhCO0FBQUEsNEJBQ0c7QUFBSyxlQUFTLEVBQUVBLHdFQUFoQjtBQUFBLGdCQUNJVCxPQUFPLENBQUNVLEdBQVIsQ0FBWSxVQUFDSCxLQUFELEVBQVFDLENBQVI7QUFBQSw0QkFDVjtBQUNHLG1CQUFTLEVBQUVHLDZDQUFJLENBQUNGLHFFQUFELEVBQVNELENBQUMsS0FBS0osVUFBTixHQUFtQkssdUVBQW5CLEdBQThCLEVBQXZDLENBRGxCO0FBRUcsYUFBRyxFQUFFRixLQUZSO0FBR0csYUFBRyxFQUFDLEVBSFA7QUFLRyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ELFdBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxDQUFSLENBQWpCO0FBQUE7QUFMWixXQUlRQSxDQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFaO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILGVBWUc7QUFBSyxlQUFTLEVBQUVDLHFFQUFoQjtBQUF3QixTQUFHLEVBQUVQLFVBQVUsSUFBSUYsT0FBTyxDQUFDLENBQUQsQ0FBbEQ7QUFBdUQsU0FBRyxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESDtBQWdCRixDQTVCTTs7R0FBTUQsVTs7S0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9baWRdLjRiYWU3NTU5OTQ1NTc1MjlhODc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL1RodW1ibmFpbHMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaHVtYm5haWxzID0gKHsgZ2FsbGVyeSB9KSA9PiB7XHJcbiAgIGNvbnN0IFthY3RpdmVNYWluLCBzZXRBY3RpdmVNYWluXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICBjb25zdCBbYWN0aXZlTWluaSwgc2V0QWN0aXZlTWluaV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgIGNvbnN0IHN3aXRjaEltYWdlID0gKGltYWdlLCBpKSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZU1haW4oaW1hZ2UpO1xyXG4gICAgICBzZXRBY3RpdmVNaW5pKGkpO1xyXG4gICB9O1xyXG4gICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRBY3RpdmVNYWluKCcnKTtcclxuICAgICAgc2V0QWN0aXZlTWluaSgwKTtcclxuICAgfSwgW2dhbGxlcnldKTtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MucHJldmlld30+XHJcbiAgICAgICAgICAgIHtnYWxsZXJ5Lm1hcCgoaW1hZ2UsIGkpID0+IChcclxuICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3gocy5taW5pLCBpID09PSBhY3RpdmVNaW5pID8gcy5hY3RpdmUgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hJbWFnZShpbWFnZSwgaSl9XHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGltZyBjbGFzc05hbWU9e3MubWFpbn0gc3JjPXthY3RpdmVNYWluIHx8IGdhbGxlcnlbMF19IGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9