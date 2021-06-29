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

  var product = _ref.product,
      products = _ref.products;
  console.log(products);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_6__.BackButton, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_Card_Thumbnails_Thumbnails__WEBPACK_IMPORTED_MODULE_7__.Thumbnails, {
        gallery: product.gallery
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
          children: [product.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 19
          }, _this), product.addition]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().statuses)),
          children: product.allStatus.map(function (status) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_12___default())[status.name]),
              children: [src_constants__WEBPACK_IMPORTED_MODULE_9__.allStatus[status.name].title, status.count && " ".concat(status.count, "  \u0448\u0442 "), status.date && "\u0434\u043E ".concat(status.date)]
            }, status.name, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 22
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().price)),
          children: [product.price, " \u0440\u0443\u0431."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().description)),
          children: product.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().with)),
          children: "\u0421 \u0447\u0435\u043C \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u044E\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tastes)),
          children: ((_product$tastes = product.tastes) === null || _product$tastes === void 0 ? void 0 : _product$tastes.length) && product.tastes.map(function (taste) {
            return src_constants__WEBPACK_IMPORTED_MODULE_9__.allTastes[taste];
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_Card_PurchaseControl_PurchaseControl__WEBPACK_IMPORTED_MODULE_8__.PurchaseControl, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().about)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Состав",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus delectus totam dolores inventore labore itaque. Eos id dolore a quam aliquid nesciunt vitae non explicabo dignissimos reprehenderit laboriosam earum consequuntur labore, fugit enim dolor voluptatibus quidem fuga at ipsam ab? Illum adipisci temporibus veniam cum sint"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 22
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Описание",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus delectus totam dolores inventore labore itaque. Eos id dolore a quam aliquid nesciunt vitae non explicabo dignissimos reprehenderit laboriosam earum consequuntur labore, fugit enim dolor voluptatibus quidem fuga at ipsam ab? Illum adipisci temporibus veniam cum sint"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 22
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 16
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_11___default().products)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Slider_Slider__WEBPACK_IMPORTED_MODULE_4__.Slider, {
        title: "Сырная продукция",
        slides: products,
        params: sliderParams,
        style: {
          border: '1px solid rgba(24, 66, 64, 0.3)'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Product_Product__WEBPACK_IMPORTED_MODULE_5__.Product, {
          additionClass: "card_slider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 10
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ2FyZC9EZXNjcmlwdGlvblNlY3Rpb24vRGVzY3JpcHRpb25TZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJzbGlkZXJQYXJhbXMiLCJzbGlkZXIiLCJzbGlkZXNQZXJWaWV3Iiwic2xpZGVzUGVyR3JvdXAiLCJzcGFjZUJldHdlZW4iLCJzbGlkZUNsYXNzIiwibmF2IiwiY291bnRlciIsIkRlc2NyaXB0aW9uU2VjdGlvbiIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJzIiwiZ2FsbGVyeSIsIm5hbWUiLCJhZGRpdGlvbiIsImNsc3giLCJhbGxTdGF0dXMiLCJtYXAiLCJzdGF0dXMiLCJnIiwidGl0bGUiLCJjb3VudCIsImRhdGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwidGFzdGVzIiwibGVuZ3RoIiwidGFzdGUiLCJhbGxUYXN0ZXMiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbEJDLFFBQU0sRUFBRTtBQUNMQyxpQkFBYSxFQUFFLENBRFY7QUFFTEMsa0JBQWMsRUFBRSxDQUZYO0FBR0xDLGdCQUFZLEVBQUUsQ0FIVDtBQUlMQyxjQUFVLEVBQUU7QUFKUCxHQURVO0FBT2xCQyxLQUFHLEVBQUU7QUFDRkMsV0FBTyxFQUFFO0FBRFA7QUFQYSxDQUFyQjtBQVlPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzFEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLHNCQUNHO0FBQUEsNEJBQ0csOERB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RUgsUUFGWDtBQUdHLGNBQU0sRUFBRVYsWUFIWDtBQUlHLGFBQUssRUFBRTtBQUFDK0IsZ0JBQU0sRUFBRTtBQUFULFNBSlY7QUFBQSwrQkFNRyw4REFBQyx1RUFBRDtBQUFTLHVCQUFhLEVBQUU7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURIO0FBa0VGLENBcEVNO0tBQU12QixrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9baWRdLjU4YzJjMGM2ZWU1MGFkZjk2ZDk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vQWNjb3JkaW9uL0FjY29yZGlvblwiO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL1NsaWRlci9TbGlkZXJcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vUHJvZHVjdC9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7IEJhY2tCdXR0b24gfSBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL0JhY2tCdXR0b24vQmFja0J1dHRvblwiO1xyXG5pbXBvcnQgeyBUaHVtYm5haWxzIH0gZnJvbSBcIkBjb21wb25lbnRzL1BhZ2VzL0NhcmQvVGh1bWJuYWlscy9UaHVtYm5haWxzXCI7XHJcbmltcG9ydCB7IFB1cmNoYXNlQ29udHJvbCB9IGZyb20gXCJAY29tcG9uZW50cy9QYWdlcy9DYXJkL1B1cmNoYXNlQ29udHJvbC9QdXJjaGFzZUNvbnRyb2xcIjtcclxuXHJcbmltcG9ydCB7IGFsbFN0YXR1cywgYWxsVGFzdGVzIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL0Rlc2NyaXB0aW9uU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IHNsaWRlclBhcmFtcyA9IHtcclxuICAgc2xpZGVyOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgIHNsaWRlQ2xhc3M6IFwicHJvZHVjdF9zbGlkZVwiLFxyXG4gICB9LFxyXG4gICBuYXY6IHtcclxuICAgICAgY291bnRlcjogZmFsc2UsXHJcbiAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25TZWN0aW9uID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMgfSkgPT4ge1xyXG4gICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICA8QmFja0J1dHRvbiAvPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGh1bWJuYWlscyBnYWxsZXJ5PXtwcm9kdWN0LmdhbGxlcnl9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmluZm99PlxyXG4gICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmFkZGl0aW9ufVxyXG4gICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLnN0YXR1c2VzKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmFsbFN0YXR1cy5tYXAoKHN0YXR1cykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goZ1tzdGF0dXMubmFtZV0pfSBrZXk9e3N0YXR1cy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FsbFN0YXR1c1tzdGF0dXMubmFtZV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMuY291bnQgJiYgYCAke3N0YXR1cy5jb3VudH0gINGI0YIgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cy5kYXRlICYmIGDQtNC+ICR7c3RhdHVzLmRhdGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLnByaWNlKX0+e3Byb2R1Y3QucHJpY2V9INGA0YPQsS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xzeChzLmRlc2NyaXB0aW9uKX0+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy53aXRoKX0+0KEg0YfQtdC8INGD0L/QvtGC0YDQtdCx0LvRj9GO0YI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMudGFzdGVzKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnRhc3Rlcz8ubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudGFzdGVzLm1hcCgodGFzdGUpID0+IGFsbFRhc3Rlc1t0YXN0ZV0pfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPFB1cmNoYXNlQ29udHJvbCAvPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmFib3V0KX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gdGl0bGU9e1wi0KHQvtGB0YLQsNCyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlnbmlzc2ltb3MgbWludXMgZGVsZWN0dXMgdG90YW0gZG9sb3JlcyBpbnZlbnRvcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFib3JlIGl0YXF1ZS4gRW9zIGlkIGRvbG9yZSBhIHF1YW0gYWxpcXVpZCBuZXNjaXVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXRhZSBub24gZXhwbGljYWJvIGRpZ25pc3NpbW9zIHJlcHJlaGVuZGVyaXQgbGFib3Jpb3NhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXJ1bSBjb25zZXF1dW50dXIgbGFib3JlLCBmdWdpdCBlbmltIGRvbG9yIHZvbHVwdGF0aWJ1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWlkZW0gZnVnYSBhdCBpcHNhbSBhYj8gSWxsdW0gYWRpcGlzY2kgdGVtcG9yaWJ1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZW5pYW0gY3VtIHNpbnRcclxuICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiB0aXRsZT17XCLQntC/0LjRgdCw0L3QuNC1XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlnbmlzc2ltb3MgbWludXMgZGVsZWN0dXMgdG90YW0gZG9sb3JlcyBpbnZlbnRvcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFib3JlIGl0YXF1ZS4gRW9zIGlkIGRvbG9yZSBhIHF1YW0gYWxpcXVpZCBuZXNjaXVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXRhZSBub24gZXhwbGljYWJvIGRpZ25pc3NpbW9zIHJlcHJlaGVuZGVyaXQgbGFib3Jpb3NhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXJ1bSBjb25zZXF1dW50dXIgbGFib3JlLCBmdWdpdCBlbmltIGRvbG9yIHZvbHVwdGF0aWJ1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWlkZW0gZnVnYSBhdCBpcHNhbSBhYj8gSWxsdW0gYWRpcGlzY2kgdGVtcG9yaWJ1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZW5pYW0gY3VtIHNpbnRcclxuICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5wcm9kdWN0cyl9PlxyXG4gICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgIHRpdGxlPXtcItCh0YvRgNC90LDRjyDQv9GA0L7QtNGD0LrRhtC40Y9cIn1cclxuICAgICAgICAgICAgICAgc2xpZGVzPXtwcm9kdWN0c31cclxuICAgICAgICAgICAgICAgcGFyYW1zPXtzbGlkZXJQYXJhbXN9XHJcbiAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMjQsIDY2LCA2NCwgMC4zKSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIDxQcm9kdWN0IGFkZGl0aW9uQ2xhc3M9e1wiY2FyZF9zbGlkZXJcIn0gLz5cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=