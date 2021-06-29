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
/* harmony import */ var _DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DescriptionSection.module.scss */ "./src/components/Sections/Card/DescriptionSection/DescriptionSection.module.scss");
/* harmony import */ var _DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11__);
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
      lineNumber: 31,
      columnNumber: 10
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_Card_Thumbnails_Thumbnails__WEBPACK_IMPORTED_MODULE_7__.Thumbnails, {
        gallery: product.gallery
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),
          children: [product.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 19
          }, _this), product.addition]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().statuses)),
          children: product.allStatus.map(function (status) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11___default())[status.name]),
              children: [src_constants__WEBPACK_IMPORTED_MODULE_9__.allStatus[status.name].title, status.count && " ".concat(status.count, "  \u0448\u0442 "), status.date && "\u0434\u043E ".concat(status.date)]
            }, status.name, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 22
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().price)),
          children: [product.price, " \u0440\u0443\u0431."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().description)),
          children: product.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 16
        }, _this), ((_product$tastes = product.tastes) === null || _product$tastes === void 0 ? void 0 : _product$tastes.length) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().with)),
            children: "\u0421 \u0447\u0435\u043C \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u044E\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 22
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().tastes)),
            children: product.tastes.map(function (taste) {
              return src_constants__WEBPACK_IMPORTED_MODULE_9__.allTastes[taste];
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 22
          }, _this)]
        }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_Card_PurchaseControl_PurchaseControl__WEBPACK_IMPORTED_MODULE_8__.PurchaseControl, {
          id: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().about)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Состав",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus delectus totam dolores inventore labore itaque. Eos id dolore a quam aliquid nesciunt vitae non explicabo dignissimos reprehenderit laboriosam earum consequuntur labore, fugit enim dolor voluptatibus quidem fuga at ipsam ab? Illum adipisci temporibus veniam cum sint"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 22
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Описание",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus delectus totam dolores inventore labore itaque. Eos id dolore a quam aliquid nesciunt vitae non explicabo dignissimos reprehenderit laboriosam earum consequuntur labore, fugit enim dolor voluptatibus quidem fuga at ipsam ab? Illum adipisci temporibus veniam cum sint"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 22
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 16
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().products)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Slider_Slider__WEBPACK_IMPORTED_MODULE_4__.Slider, {
        title: "Сырная продукция",
        slides: products,
        params: sliderParams,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Product_Product__WEBPACK_IMPORTED_MODULE_5__.Product, {
          additionClass: "card_slider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 10
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ2FyZC9EZXNjcmlwdGlvblNlY3Rpb24vRGVzY3JpcHRpb25TZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJzbGlkZXJQYXJhbXMiLCJzbGlkZXIiLCJzbGlkZXNQZXJWaWV3Iiwic2xpZGVzUGVyR3JvdXAiLCJzcGFjZUJldHdlZW4iLCJzbGlkZUNsYXNzIiwibmF2IiwiY291bnRlciIsIkRlc2NyaXB0aW9uU2VjdGlvbiIsImlkIiwicHJvZHVjdCIsInByb2R1Y3RzIiwicyIsImdhbGxlcnkiLCJuYW1lIiwiYWRkaXRpb24iLCJjbHN4IiwiYWxsU3RhdHVzIiwibWFwIiwic3RhdHVzIiwiZyIsInRpdGxlIiwiY291bnQiLCJkYXRlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInRhc3RlcyIsImxlbmd0aCIsInRhc3RlIiwiYWxsVGFzdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2xCQyxRQUFNLEVBQUU7QUFDTEMsaUJBQWEsRUFBRSxDQURWO0FBRUxDLGtCQUFjLEVBQUUsQ0FGWDtBQUdMQyxnQkFBWSxFQUFFLENBSFQ7QUFJTEMsY0FBVSxFQUFFO0FBSlAsR0FEVTtBQU9sQkMsS0FBRyxFQUFFO0FBQ0ZDLFdBQU8sRUFBRTtBQURQO0FBUGEsQ0FBckI7QUFZTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLEVBQTRCLFFBQTVCQSxFQUE0QjtBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDOUQsc0JBQ0c7QUFBQSw0QkFDRyw4REFBQyxnRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FBRUcsY0FBTSxFQUFFRCxRQUZYO0FBR0csY0FBTSxFQUFFWCxZQUhYO0FBQUEsK0JBS0csOERBQUMsdUVBQUQ7QUFBUyx1QkFBYSxFQUFFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESDtBQXFFRixDQXRFTTtLQUFNUSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9baWRdLjI3NWViZDRjZWQwOTFjZjBjZDhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vQWNjb3JkaW9uL0FjY29yZGlvblwiO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL1NsaWRlci9TbGlkZXJcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vUHJvZHVjdC9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7IEJhY2tCdXR0b24gfSBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL0JhY2tCdXR0b24vQmFja0J1dHRvblwiO1xyXG5pbXBvcnQgeyBUaHVtYm5haWxzIH0gZnJvbSBcIkBjb21wb25lbnRzL1BhZ2VzL0NhcmQvVGh1bWJuYWlscy9UaHVtYm5haWxzXCI7XHJcbmltcG9ydCB7IFB1cmNoYXNlQ29udHJvbCB9IGZyb20gXCJAY29tcG9uZW50cy9QYWdlcy9DYXJkL1B1cmNoYXNlQ29udHJvbC9QdXJjaGFzZUNvbnRyb2xcIjtcclxuXHJcbmltcG9ydCB7IGFsbFN0YXR1cywgYWxsVGFzdGVzIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL0Rlc2NyaXB0aW9uU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBzbGlkZXJQYXJhbXMgPSB7XHJcbiAgIHNsaWRlcjoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICBzbGlkZUNsYXNzOiBcInByb2R1Y3Rfc2xpZGVcIixcclxuICAgfSxcclxuICAgbmF2OiB7XHJcbiAgICAgIGNvdW50ZXI6IGZhbHNlLFxyXG4gICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uU2VjdGlvbiA9ICh7IGlkLCBwcm9kdWN0LCBwcm9kdWN0cyB9KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICA8QmFja0J1dHRvbiAvPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGh1bWJuYWlscyBnYWxsZXJ5PXtwcm9kdWN0LmdhbGxlcnl9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmluZm99PlxyXG4gICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmFkZGl0aW9ufVxyXG4gICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLnN0YXR1c2VzKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmFsbFN0YXR1cy5tYXAoKHN0YXR1cykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goZ1tzdGF0dXMubmFtZV0pfSBrZXk9e3N0YXR1cy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FsbFN0YXR1c1tzdGF0dXMubmFtZV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMuY291bnQgJiYgYCAke3N0YXR1cy5jb3VudH0gINGI0YIgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cy5kYXRlICYmIGDQtNC+ICR7c3RhdHVzLmRhdGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLnByaWNlKX0+e3Byb2R1Y3QucHJpY2V9INGA0YPQsS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xzeChzLmRlc2NyaXB0aW9uKX0+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICB7cHJvZHVjdC50YXN0ZXM/Lmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLndpdGgpfT7QoSDRh9C10Lwg0YPQv9C+0YLRgNC10LHQu9GP0Y7Rgjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy50YXN0ZXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGFzdGVzLm1hcCgodGFzdGUpID0+IGFsbFRhc3Rlc1t0YXN0ZV0pfVxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICA8UHVyY2hhc2VDb250cm9sIGlkPXtpZH0gLz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5hYm91dCl9PlxyXG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHRpdGxlPXtcItCh0L7RgdGC0LDQslwifT5cclxuICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpZ25pc3NpbW9zIG1pbnVzIGRlbGVjdHVzIHRvdGFtIGRvbG9yZXMgaW52ZW50b3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYm9yZSBpdGFxdWUuIEVvcyBpZCBkb2xvcmUgYSBxdWFtIGFsaXF1aWQgbmVzY2l1bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdml0YWUgbm9uIGV4cGxpY2FibyBkaWduaXNzaW1vcyByZXByZWhlbmRlcml0IGxhYm9yaW9zYW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFydW0gY29uc2VxdXVudHVyIGxhYm9yZSwgZnVnaXQgZW5pbSBkb2xvciB2b2x1cHRhdGlidXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVpZGVtIGZ1Z2EgYXQgaXBzYW0gYWI/IElsbHVtIGFkaXBpc2NpIHRlbXBvcmlidXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVuaWFtIGN1bSBzaW50XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gdGl0bGU9e1wi0J7Qv9C40YHQsNC90LjQtVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpZ25pc3NpbW9zIG1pbnVzIGRlbGVjdHVzIHRvdGFtIGRvbG9yZXMgaW52ZW50b3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYm9yZSBpdGFxdWUuIEVvcyBpZCBkb2xvcmUgYSBxdWFtIGFsaXF1aWQgbmVzY2l1bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdml0YWUgbm9uIGV4cGxpY2FibyBkaWduaXNzaW1vcyByZXByZWhlbmRlcml0IGxhYm9yaW9zYW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFydW0gY29uc2VxdXVudHVyIGxhYm9yZSwgZnVnaXQgZW5pbSBkb2xvciB2b2x1cHRhdGlidXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVpZGVtIGZ1Z2EgYXQgaXBzYW0gYWI/IElsbHVtIGFkaXBpc2NpIHRlbXBvcmlidXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVuaWFtIGN1bSBzaW50XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMucHJvZHVjdHMpfT5cclxuICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICB0aXRsZT17XCLQodGL0YDQvdCw0Y8g0L/RgNC+0LTRg9C60YbQuNGPXCJ9XHJcbiAgICAgICAgICAgICAgIHNsaWRlcz17cHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgIHBhcmFtcz17c2xpZGVyUGFyYW1zfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIDxQcm9kdWN0IGFkZGl0aW9uQ2xhc3M9e1wiY2FyZF9zbGlkZXJcIn0gLz5cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=