self["webpackHotUpdate_N_E"]("pages/products/[id]",{

/***/ "./src/components/Sections/Card/DescriptionSection/DescriptionSection.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/Sections/Card/DescriptionSection/DescriptionSection.jsx ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionSection": function() { return /* binding */ DescriptionSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_Common_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Common/Accordion/Accordion */ "./src/components/Common/Accordion/Accordion.jsx");
/* harmony import */ var _components_Common_Slider_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Common/Slider/Slider */ "./src/components/Common/Slider/Slider.jsx");
/* harmony import */ var _components_Common_Product_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Common/Product/Product */ "./src/components/Common/Product/Product.jsx");
/* harmony import */ var _components_Common_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Common/BackButton/BackButton */ "./src/components/Common/BackButton/BackButton.jsx");
/* harmony import */ var _components_Pages_Card_Thumbnails_Thumbnails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Pages/Card/Thumbnails/Thumbnails */ "./src/components/Pages/Card/Thumbnails/Thumbnails.jsx");
/* harmony import */ var _components_Pages_Card_PurchaseControl_PurchaseControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Pages/Card/PurchaseControl/PurchaseControl */ "./src/components/Pages/Card/PurchaseControl/PurchaseControl.jsx");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/constants */ "./src/constants.js");
/* harmony import */ var _DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DescriptionSection.module.scss */ "./src/components/Sections/Card/DescriptionSection/DescriptionSection.module.scss");
/* harmony import */ var _DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Card\\DescriptionSection\\DescriptionSection.jsx",
    _this = undefined;













var sliderParams = {
  slider: {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 0,
    slideClass: "product_slide"
  },
  nav: {
    counter: false
  }
};
var DescriptionSection = function DescriptionSection(_ref) {
  var _product$tastes;

  var id = _ref.id,
      product = _ref.product,
      products = _ref.products;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_6__.BackButton, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_Card_Thumbnails_Thumbnails__WEBPACK_IMPORTED_MODULE_7__.Thumbnails, {
        gallery: product.gallery
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
          children: [product.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 19
          }, _this), product.addition]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().statuses)),
          children: product.allStatus.map(function (status) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_12___default())[status.name]),
              children: [src_constants__WEBPACK_IMPORTED_MODULE_9__.allStatus[status.name].title, status.count && " ".concat(status.count, "  \u0448\u0442 "), status.date && "\u0434\u043E ".concat(status.date)]
            }, status.name, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 22
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().price)),
          children: [product.price, " \u0440\u0443\u0431."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().description)),
          children: product.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().with)),
          children: "\u0421 \u0447\u0435\u043C \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u044E\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tastes)),
          children: ((_product$tastes = product.tastes) === null || _product$tastes === void 0 ? void 0 : _product$tastes.length) && product.tastes.map(function (taste) {
            return src_constants__WEBPACK_IMPORTED_MODULE_9__.allTastes[taste];
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_Card_PurchaseControl_PurchaseControl__WEBPACK_IMPORTED_MODULE_8__.PurchaseControl, {
          id: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().about)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Состав",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus delectus totam dolores inventore labore itaque. Eos id dolore a quam aliquid nesciunt vitae non explicabo dignissimos reprehenderit laboriosam earum consequuntur labore, fugit enim dolor voluptatibus quidem fuga at ipsam ab? Illum adipisci temporibus veniam cum sint"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 22
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Описание",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus delectus totam dolores inventore labore itaque. Eos id dolore a quam aliquid nesciunt vitae non explicabo dignissimos reprehenderit laboriosam earum consequuntur labore, fugit enim dolor voluptatibus quidem fuga at ipsam ab? Illum adipisci temporibus veniam cum sint"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 22
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 16
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().products)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Slider_Slider__WEBPACK_IMPORTED_MODULE_4__.Slider, {
        title: "Сырная продукция",
        slides: products,
        params: sliderParams,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Product_Product__WEBPACK_IMPORTED_MODULE_5__.Product, {
          additionClass: "card_slider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 10
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }, _this);
};
_c = DescriptionSection;

var _c;

$RefreshReg$(_c, "DescriptionSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ2FyZC9EZXNjcmlwdGlvblNlY3Rpb24vRGVzY3JpcHRpb25TZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJzbGlkZXJQYXJhbXMiLCJzbGlkZXIiLCJzbGlkZXNQZXJWaWV3Iiwic2xpZGVzUGVyR3JvdXAiLCJzcGFjZUJldHdlZW4iLCJzbGlkZUNsYXNzIiwibmF2IiwiY291bnRlciIsIkRlc2NyaXB0aW9uU2VjdGlvbiIsImlkIiwicHJvZHVjdCIsInByb2R1Y3RzIiwicyIsImdhbGxlcnkiLCJuYW1lIiwiYWRkaXRpb24iLCJjbHN4IiwiYWxsU3RhdHVzIiwibWFwIiwic3RhdHVzIiwiZyIsInRpdGxlIiwiY291bnQiLCJkYXRlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInRhc3RlcyIsImxlbmd0aCIsInRhc3RlIiwiYWxsVGFzdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2xCQyxRQUFNLEVBQUU7QUFDTEMsaUJBQWEsRUFBRSxDQURWO0FBRUxDLGtCQUFjLEVBQUUsQ0FGWDtBQUdMQyxnQkFBWSxFQUFFLENBSFQ7QUFJTEMsY0FBVSxFQUFFO0FBSlAsR0FEVTtBQU9sQkMsS0FBRyxFQUFFO0FBQ0ZDLFdBQU8sRUFBRTtBQURQO0FBUGEsQ0FBckI7QUFZTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQThCO0FBQUE7O0FBQUEsTUFBNUJDLEVBQTRCLFFBQTVCQSxFQUE0QjtBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDN0Qsc0JBQ0c7QUFBQSw0QkFDRyw4REFBQyxnRkFBRDtBQUFBO0FBQUE7QUFB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RUQsUUFGWDtBQUdHLGNBQU0sRUFBRVgsWUFIWDtBQUFBLCtCQUtHLDhEQUFDLHVFQUFEO0FBQVMsdUJBQWEsRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREg7QUFpRUYsQ0FsRU07S0FBTVEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvW2lkXS42Y2YxZjkzNzhmYWZlNWI4Nzg3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL0FjY29yZGlvbi9BY2NvcmRpb25cIjtcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL0NvbW1vbi9TbGlkZXIvU2xpZGVyXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL1Byb2R1Y3QvUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBCYWNrQnV0dG9uIH0gZnJvbSBcIkBjb21wb25lbnRzL0NvbW1vbi9CYWNrQnV0dG9uL0JhY2tCdXR0b25cIjtcclxuaW1wb3J0IHsgVGh1bWJuYWlscyB9IGZyb20gXCJAY29tcG9uZW50cy9QYWdlcy9DYXJkL1RodW1ibmFpbHMvVGh1bWJuYWlsc1wiO1xyXG5pbXBvcnQgeyBQdXJjaGFzZUNvbnRyb2wgfSBmcm9tIFwiQGNvbXBvbmVudHMvUGFnZXMvQ2FyZC9QdXJjaGFzZUNvbnRyb2wvUHVyY2hhc2VDb250cm9sXCI7XHJcblxyXG5pbXBvcnQgeyBhbGxTdGF0dXMsIGFsbFRhc3RlcyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcblxyXG5pbXBvcnQgcyBmcm9tIFwiLi9EZXNjcmlwdGlvblNlY3Rpb24ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGcgZnJvbSBcInNyYy9zdHlsZXMvTWFpbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBzbGlkZXJQYXJhbXMgPSB7XHJcbiAgIHNsaWRlcjoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICBzbGlkZUNsYXNzOiBcInByb2R1Y3Rfc2xpZGVcIixcclxuICAgfSxcclxuICAgbmF2OiB7XHJcbiAgICAgIGNvdW50ZXI6IGZhbHNlLFxyXG4gICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uU2VjdGlvbiA9ICh7aWQsIHByb2R1Y3QsIHByb2R1Y3RzIH0pID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgIDxCYWNrQnV0dG9uIC8+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUaHVtYm5haWxzIGdhbGxlcnk9e3Byb2R1Y3QuZ2FsbGVyeX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaW5mb30+XHJcbiAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3MudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuYWRkaXRpb259XHJcbiAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuc3RhdHVzZXMpfT5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuYWxsU3RhdHVzLm1hcCgoc3RhdHVzKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChnW3N0YXR1cy5uYW1lXSl9IGtleT17c3RhdHVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWxsU3RhdHVzW3N0YXR1cy5uYW1lXS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cy5jb3VudCAmJiBgICR7c3RhdHVzLmNvdW50fSAg0YjRgiBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzLmRhdGUgJiYgYNC00L4gJHtzdGF0dXMuZGF0ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMucHJpY2UpfT57cHJvZHVjdC5wcmljZX0g0YDRg9CxLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbHN4KHMuZGVzY3JpcHRpb24pfT57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLndpdGgpfT7QoSDRh9C10Lwg0YPQv9C+0YLRgNC10LHQu9GP0Y7Rgjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy50YXN0ZXMpfT5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGFzdGVzPy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50YXN0ZXMubWFwKCh0YXN0ZSkgPT4gYWxsVGFzdGVzW3Rhc3RlXSl9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8UHVyY2hhc2VDb250cm9sIGlkPXtpZH0vPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmFib3V0KX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gdGl0bGU9e1wi0KHQvtGB0YLQsNCyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlnbmlzc2ltb3MgbWludXMgZGVsZWN0dXMgdG90YW0gZG9sb3JlcyBpbnZlbnRvcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFib3JlIGl0YXF1ZS4gRW9zIGlkIGRvbG9yZSBhIHF1YW0gYWxpcXVpZCBuZXNjaXVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXRhZSBub24gZXhwbGljYWJvIGRpZ25pc3NpbW9zIHJlcHJlaGVuZGVyaXQgbGFib3Jpb3NhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXJ1bSBjb25zZXF1dW50dXIgbGFib3JlLCBmdWdpdCBlbmltIGRvbG9yIHZvbHVwdGF0aWJ1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWlkZW0gZnVnYSBhdCBpcHNhbSBhYj8gSWxsdW0gYWRpcGlzY2kgdGVtcG9yaWJ1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZW5pYW0gY3VtIHNpbnRcclxuICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiB0aXRsZT17XCLQntC/0LjRgdCw0L3QuNC1XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlnbmlzc2ltb3MgbWludXMgZGVsZWN0dXMgdG90YW0gZG9sb3JlcyBpbnZlbnRvcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFib3JlIGl0YXF1ZS4gRW9zIGlkIGRvbG9yZSBhIHF1YW0gYWxpcXVpZCBuZXNjaXVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXRhZSBub24gZXhwbGljYWJvIGRpZ25pc3NpbW9zIHJlcHJlaGVuZGVyaXQgbGFib3Jpb3NhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXJ1bSBjb25zZXF1dW50dXIgbGFib3JlLCBmdWdpdCBlbmltIGRvbG9yIHZvbHVwdGF0aWJ1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWlkZW0gZnVnYSBhdCBpcHNhbSBhYj8gSWxsdW0gYWRpcGlzY2kgdGVtcG9yaWJ1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZW5pYW0gY3VtIHNpbnRcclxuICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5wcm9kdWN0cyl9PlxyXG4gICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgIHRpdGxlPXtcItCh0YvRgNC90LDRjyDQv9GA0L7QtNGD0LrRhtC40Y9cIn1cclxuICAgICAgICAgICAgICAgc2xpZGVzPXtwcm9kdWN0c31cclxuICAgICAgICAgICAgICAgcGFyYW1zPXtzbGlkZXJQYXJhbXN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgPFByb2R1Y3QgYWRkaXRpb25DbGFzcz17XCJjYXJkX3NsaWRlclwifSAvPlxyXG4gICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==