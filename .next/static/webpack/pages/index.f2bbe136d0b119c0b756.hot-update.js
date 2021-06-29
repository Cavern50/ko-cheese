self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allStatus": function() { return /* binding */ allStatus; },
/* harmony export */   "allTastes": function() { return /* binding */ allTastes; },
/* harmony export */   "products": function() { return /* binding */ products; },
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/SVG/TastesSVG/TastesSVG */ "./src/components/SVG/TastesSVG/TastesSVG.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\constants.js";

var allStatus = {
  avaliable: {
    title: "в наличии",
    "class": "avaliable"
  },
  preparing: {
    title: "созревает",
    "class": "preparing"
  },
  "not-avaliable": {
    title: "нет в наличии",
    "class": "not-avaliable"
  }
};
var allTastes = {
  "red-wine": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_1__.RedWine, {
    border: "accent"
  }, 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 16
  }, undefined),
  "white-wine": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_1__.WhiteWine, {
    border: "accent"
  }, 1, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 18
  }, undefined),
  vegetables: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_1__.Vegetables, {
    border: "accent"
  }, 2, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 16
  }, undefined),
  fruits: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_1__.Fruits, {
    border: "accent"
  }, 3, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 12
  }, undefined)
};
var products = [{
  status: "avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/camamberGoat.png",
  gallery: ["/static/img/content/camamberGoat.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Камамбер козий",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  addition: "с белой плесенью",
  weight: "200 гр",
  price: 320,
  tastes: ["red-wine", "fruits"],
  link: "/card",
  id: 23
}, {
  status: "preparing",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/camamberCow.png",
  gallery: ["/static/img/content/camamberCow.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Камамбер коровий",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  addition: "с белой плесенью",
  weight: "200 гр",
  price: 320,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 20
}, {
  status: "avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/goatBalance.png",
  gallery: ["/static/img/content/goatBalance.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Cыр Козий Валансе",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  addition: "с белой плесенью",
  weight: "200 гр",
  price: 650,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 2
}, {
  status: "avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/goatBalance2.png",
  gallery: ["/static/img/content/goatBalance2.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Cыр Козий Валансе",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  addition: "с белой плесенью",
  weight: "200 гр",
  price: 500,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 3
}, {
  status: "preparing",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/bushDeShevr.png",
  gallery: ["/static/img/content/bushDeShevr.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Бюш де шевр",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  weight: "200 гр",
  price: 500,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 4
}, {
  status: "avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/mozzarella.png",
  gallery: ["/static/img/content/mozzarella.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Моцарелла",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  weight: "200 гр",
  price: 500,
  link: "/card",
  id: 29
}, {
  status: "not-avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/buratta.png",
  gallery: ["/static/img/content/buratta.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Буратта",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  weight: "200 гр",
  price: 500,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 18
}, {
  status: "avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/strachella.png",
  gallery: ["/static/img/content/strachella.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Страчелла",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  weight: "200 гр",
  price: 500,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 7
}, {
  status: "preparing",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/bushDeShevr.png",
  gallery: ["/static/img/content/bushDeShevr.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Бюш де шевр",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  weight: "200 гр",
  price: 500,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 40
}];
var BASE_URL = 'http://localhost:3001/';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJhbGxTdGF0dXMiLCJhdmFsaWFibGUiLCJ0aXRsZSIsInByZXBhcmluZyIsImFsbFRhc3RlcyIsInZlZ2V0YWJsZXMiLCJmcnVpdHMiLCJwcm9kdWN0cyIsInN0YXR1cyIsIm5hbWUiLCJjb3VudCIsImRhdGUiLCJpbWFnZSIsImdhbGxlcnkiLCJkZXNjcmlwdGlvbiIsImFkZGl0aW9uIiwid2VpZ2h0IiwicHJpY2UiLCJ0YXN0ZXMiLCJsaW5rIiwiaWQiLCJCQVNFX1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT08sSUFBTUEsU0FBUyxHQUFHO0FBQ3RCQyxXQUFTLEVBQUU7QUFDUkMsU0FBSyxFQUFFLFdBREM7QUFFUixhQUFPO0FBRkMsR0FEVztBQUt0QkMsV0FBUyxFQUFFO0FBQ1JELFNBQUssRUFBRSxXQURDO0FBRVIsYUFBTztBQUZDLEdBTFc7QUFTdEIsbUJBQWlCO0FBQ2RBLFNBQUssRUFBRSxlQURPO0FBRWQsYUFBTztBQUZPO0FBVEssQ0FBbEI7QUFlQSxJQUFNRSxTQUFTLEdBQUc7QUFDdEIsMkJBQVksOERBQUMsd0VBQUQ7QUFBUyxVQUFNLEVBQUU7QUFBakIsS0FBZ0MsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBRXRCLDZCQUFjLDhEQUFDLDBFQUFEO0FBQVcsVUFBTSxFQUFFO0FBQW5CLEtBQWtDLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUTtBQUd0QkMsWUFBVSxlQUFFLDhEQUFDLDJFQUFEO0FBQVksVUFBTSxFQUFFO0FBQXBCLEtBQW1DLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIVTtBQUl0QkMsUUFBTSxlQUFFLDhEQUFDLHVFQUFEO0FBQVEsVUFBTSxFQUFFO0FBQWhCLEtBQStCLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKYyxDQUFsQjtBQU9BLElBQU1DLFFBQVEs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LENBekJYO0FBMEJHQyxNQUFJLEVBQUUsT0ExQlQ7QUEyQkdDLElBQUUsRUFBRTtBQTNCUCxDQS9NcUIsRUE0T3JCO0FBQ0daLFFBQU0sRUFBRSxXQURYO0FBRUdSLFdBQVMsRUFBRSxDQUNSO0FBQ0dTLFFBQUksRUFBRSxXQURUO0FBRUdDLFNBQUssRUFBRTtBQUZWLEdBRFEsRUFLUjtBQUNHRCxRQUFJLEVBQUUsV0FEVDtBQUVHQyxTQUFLLEVBQUUsRUFGVjtBQUdHQyxRQUFJLEVBQUU7QUFIVCxHQUxRLENBRmQ7QUFhR0MsT0FBSyxFQUFFLHFDQWJWO0FBY0dDLFNBQU8sRUFBRSxDQUNOLHFDQURNLEVBRU4saUNBRk0sRUFHTixrQ0FITSxFQUlOLGtDQUpNLENBZFo7QUFvQkdKLE1BQUksRUFBRSxhQXBCVDtBQXFCR0ssYUFBVyxFQUNSLGdMQXRCTjtBQXVCR0UsUUFBTSxFQUFFLFFBdkJYO0FBd0JHQyxPQUFLLEVBQUUsR0F4QlY7QUF5QkdDLFFBQU0sRUFBRSxDQUFDLFlBQUQsRUFBZSxZQUFmLENBekJYO0FBMEJHQyxNQUFJLEVBQUUsT0ExQlQ7QUEyQkdDLElBQUUsRUFBRTtBQTNCUCxDQTVPcUIsQ0FBakI7QUEyUUEsSUFBTUMsUUFBUSxHQUFHLHdCQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMmJiZTEzNmQwYjExOWMwYjc1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgUmVkV2luZSxcclxuICAgV2hpdGVXaW5lLFxyXG4gICBWZWdldGFibGVzLFxyXG4gICBGcnVpdHMsXHJcbn0gZnJvbSBcIkBjb21wb25lbnRzL1NWRy9UYXN0ZXNTVkcvVGFzdGVzU1ZHXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWxsU3RhdHVzID0ge1xyXG4gICBhdmFsaWFibGU6IHtcclxuICAgICAgdGl0bGU6IFwi0LIg0L3QsNC70LjRh9C40LhcIixcclxuICAgICAgY2xhc3M6IFwiYXZhbGlhYmxlXCIsXHJcbiAgIH0sXHJcbiAgIHByZXBhcmluZzoge1xyXG4gICAgICB0aXRsZTogXCLRgdC+0LfRgNC10LLQsNC10YJcIixcclxuICAgICAgY2xhc3M6IFwicHJlcGFyaW5nXCIsXHJcbiAgIH0sXHJcbiAgIFwibm90LWF2YWxpYWJsZVwiOiB7XHJcbiAgICAgIHRpdGxlOiBcItC90LXRgiDQsiDQvdCw0LvQuNGH0LjQuFwiLFxyXG4gICAgICBjbGFzczogXCJub3QtYXZhbGlhYmxlXCIsXHJcbiAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWxsVGFzdGVzID0ge1xyXG4gICBcInJlZC13aW5lXCI6IDxSZWRXaW5lIGJvcmRlcj17XCJhY2NlbnRcIn0ga2V5PXswfSAvPixcclxuICAgXCJ3aGl0ZS13aW5lXCI6IDxXaGl0ZVdpbmUgYm9yZGVyPXtcImFjY2VudFwifSBrZXk9ezF9IC8+LFxyXG4gICB2ZWdldGFibGVzOiA8VmVnZXRhYmxlcyBib3JkZXI9e1wiYWNjZW50XCJ9IGtleT17Mn0gLz4sXHJcbiAgIGZydWl0czogPEZydWl0cyBib3JkZXI9e1wiYWNjZW50XCJ9IGtleT17M30gLz4sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9jYW1hbWJlckdvYXQucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2NhbWFtYmVyR29hdC5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcItCa0LDQvNCw0LzQsdC10YAg0LrQvtC30LjQuVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiAzMjAsXHJcbiAgICAgIHRhc3RlczogW1wicmVkLXdpbmVcIiwgXCJmcnVpdHNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDIzLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJwcmVwYXJpbmdcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvY2FtYW1iZXJDb3cucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2NhbWFtYmVyQ293LnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0JrQsNC80LDQvNCx0LXRgCDQutC+0YDQvtCy0LjQuVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiAzMjAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDIwLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJhdmFsaWFibGVcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvZ29hdEJhbGFuY2UucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2dvYXRCYWxhbmNlLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwiQ9GL0YAg0JrQvtC30LjQuSDQktCw0LvQsNC90YHQtVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiA2NTAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDIsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9nb2F0QmFsYW5jZTIucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2dvYXRCYWxhbmNlMi5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcIkPRi9GAINCa0L7Qt9C40Lkg0JLQsNC70LDQvdGB0LVcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogNTAwLFxyXG4gICAgICB0YXN0ZXM6IFtcIndoaXRlLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCJdLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiAzLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJwcmVwYXJpbmdcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvYnVzaERlU2hldnIucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2J1c2hEZVNoZXZyLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0JHRjtGIINC00LUg0YjQtdCy0YBcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiA1MDAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDQsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9tb3p6YXJlbGxhLnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9tb3p6YXJlbGxhLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0JzQvtGG0LDRgNC10LvQu9CwXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogNTAwLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiAyOSxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwibm90LWF2YWxpYWJsZVwiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9idXJhdHRhLnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9idXJhdHRhLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0JHRg9GA0LDRgtGC0LBcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiA1MDAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDE4LFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJhdmFsaWFibGVcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc3RyYWNoZWxsYS5wbmdcIixcclxuICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc3RyYWNoZWxsYS5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcItCh0YLRgNCw0YfQtdC70LvQsFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiMjAwINCz0YBcIixcclxuICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgdGFzdGVzOiBbXCJ3aGl0ZS13aW5lXCIsIFwidmVnZXRhYmxlc1wiXSxcclxuICAgICAgbGluazogXCIvY2FyZFwiLFxyXG4gICAgICBpZDogNyxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgIGFsbFN0YXR1czogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMTUsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTUuMDguMjAyMVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpbWFnZTogXCIvc3RhdGljL2ltZy9jb250ZW50L2J1c2hEZVNoZXZyLnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9idXNoRGVTaGV2ci5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcItCR0Y7RiCDQtNC1INGI0LXQstGAXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogNTAwLFxyXG4gICAgICB0YXN0ZXM6IFtcIndoaXRlLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCJdLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiA0MCxcclxuICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvJzsiXSwic291cmNlUm9vdCI6IiJ9