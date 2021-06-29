self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/components/Sections/Common/ProductsSection/ProductsSection.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/Sections/Common/ProductsSection/ProductsSection.jsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsSection": function() { return /* binding */ ProductsSection; }
/* harmony export */ });
/* harmony import */ var C_Users_Desktop_ko_cheese_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Desktop_ko_cheese_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_Common_Product_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Common/Product/Product */ "./src/components/Common/Product/Product.jsx");
/* harmony import */ var _ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductsSection.module.scss */ "./src/components/Sections/Common/ProductsSection/ProductsSection.module.scss");
/* harmony import */ var _ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Common\\ProductsSection\\ProductsSection.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Desktop_ko_cheese_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var ProductsSection = function ProductsSection(_ref) {
  _s();

  var products = _ref.products;

  // console.log(products)
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0),
      _React$useState2 = (0,C_Users_Desktop_ko_cheese_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      activeCategory = _React$useState2[0],
      setActiveCategory = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0),
      _React$useState4 = (0,C_Users_Desktop_ko_cheese_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),
      activeSubcategory = _React$useState4[0],
      setActiveSubcategory = _React$useState4[1];

  var setActiveItem = function setActiveItem(i, setState) {
    setState(i);
  };

  var categories = [{
    title: "Сыры",
    href: "/"
  }, {
    title: "Молоко",
    href: "/"
  }, {
    title: "Десерты",
    href: "/"
  }];
  var subCategories = [{
    title: "Свежие",
    href: "/"
  }, {
    title: "Мягкие",
    href: "/"
  }, {
    title: "Твердые",
    href: "/"
  }, {
    title: "С белой плесенью",
    href: "/"
  }, {
    title: "С голубой плесенью",
    href: "/"
  }, {
    title: "Коровий",
    href: "/"
  }, {
    title: "Козий",
    href: "/"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6___default().products)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6___default().categories)),
          children: categories.map(function (category, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6___default().category), activeCategory === i ? (_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active) : ""),
              onClick: function onClick() {
                return setActiveItem(i, setActiveCategory);
              },
              children: category.title
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 22
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6___default().subcategories)),
          children: subCategories.map(function (subcategory, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
              type: "button",
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6___default().subcategory), activeSubcategory === i ? (_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active) : ""),
              onClick: function onClick() {
                return setActiveItem(i, setActiveSubcategory);
              },
              children: subcategory.title
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 22
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 16
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body)),
        children: products && products.map(function (product) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Common_Product_Product__WEBPACK_IMPORTED_MODULE_5__.Product, _objectSpread({}, product), product.id, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 22
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 10
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 7
  }, _this);
};

_s(ProductsSection, "04PiYbxx2A1zLuT8pRe+aHkoCz4=");

_c = ProductsSection;

var _c;

$RefreshReg$(_c, "ProductsSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL1Byb2R1Y3RzU2VjdGlvbi9Qcm9kdWN0c1NlY3Rpb24uanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RzU2VjdGlvbiIsInByb2R1Y3RzIiwiUmVhY3QiLCJhY3RpdmVDYXRlZ29yeSIsInNldEFjdGl2ZUNhdGVnb3J5IiwiYWN0aXZlU3ViY2F0ZWdvcnkiLCJzZXRBY3RpdmVTdWJjYXRlZ29yeSIsInNldEFjdGl2ZUl0ZW0iLCJpIiwic2V0U3RhdGUiLCJjYXRlZ29yaWVzIiwidGl0bGUiLCJocmVmIiwic3ViQ2F0ZWdvcmllcyIsImNsc3giLCJzIiwiZyIsIm1hcCIsImNhdGVnb3J5Iiwic3ViY2F0ZWdvcnkiLCJwcm9kdWN0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzlDO0FBRDhDLHdCQUVGQyxxREFBQSxDQUFlLENBQWYsQ0FGRTtBQUFBO0FBQUEsTUFFdkNDLGNBRnVDO0FBQUEsTUFFdkJDLGlCQUZ1Qjs7QUFBQSx5QkFHSUYscURBQUEsQ0FBZSxDQUFmLENBSEo7QUFBQTtBQUFBLE1BR3ZDRyxpQkFIdUM7QUFBQSxNQUdwQkMsb0JBSG9COztBQUs5QyxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBSUMsUUFBSixFQUFpQjtBQUNwQ0EsWUFBUSxDQUFDRCxDQUFELENBQVI7QUFDRixHQUZEOztBQUlBLE1BQU1FLFVBQVUsR0FBRyxDQUNoQjtBQUNHQyxTQUFLLEVBQUUsTUFEVjtBQUVHQyxRQUFJLEVBQUU7QUFGVCxHQURnQixFQUtoQjtBQUNHRCxTQUFLLEVBQUUsUUFEVjtBQUVHQyxRQUFJLEVB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YnBhY2svcGFnZXMvcHJvZHVjdHMuY2IzNWJjOGNiZmNmMzhmYjc3YmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vUHJvZHVjdC9Qcm9kdWN0XCI7XHJcblxyXG5pbXBvcnQgcyBmcm9tIFwiLi9Qcm9kdWN0c1NlY3Rpb24ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGcgZnJvbSBcInNyYy9zdHlsZXMvTWFpbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0c1NlY3Rpb24gPSAoeyBwcm9kdWN0cyB9KSA9PiB7XHJcbiAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxyXG4gICBjb25zdCBbYWN0aXZlQ2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICBjb25zdCBbYWN0aXZlU3ViY2F0ZWdvcnksIHNldEFjdGl2ZVN1YmNhdGVnb3J5XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgY29uc3Qgc2V0QWN0aXZlSXRlbSA9IChpLCBzZXRTdGF0ZSkgPT4ge1xyXG4gICAgICBzZXRTdGF0ZShpKTtcclxuICAgfTtcclxuXHJcbiAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0KHRi9GA0YtcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JzQvtC70L7QutC+XCIsXHJcbiAgICAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItCU0LXRgdC10YDRgtGLXCIsXHJcbiAgICAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICB9LFxyXG4gICBdO1xyXG5cclxuICAgY29uc3Qgc3ViQ2F0ZWdvcmllcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQodCy0LXQttC40LVcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JzRj9Cz0LrQuNC1XCIsXHJcbiAgICAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItCi0LLQtdGA0LTRi9C1XCIsXHJcbiAgICAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItChINCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRjlwiLFxyXG4gICAgICAgICBocmVmOiBcIi9cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQoSDQs9C+0LvRg9Cx0L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItCa0L7RgNC+0LLQuNC5XCIsXHJcbiAgICAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItCa0L7Qt9C40LlcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgIF07XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc3gocy5wcm9kdWN0cyl9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChnLndyYXBwZXIpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5oZWFkZXIpfT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jYXRlZ29yaWVzKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPT09IGkgPyBzLmFjdGl2ZSA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlSXRlbShpLCBzZXRBY3RpdmVDYXRlZ29yeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5zdWJjYXRlZ29yaWVzKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtzdWJDYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnksIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN1YmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdWJjYXRlZ29yeSA9PT0gaSA/IHMuYWN0aXZlIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJdGVtKGksIHNldEFjdGl2ZVN1YmNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yeS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuYm9keSl9PlxyXG4gICAgICAgICAgICAgICB7cHJvZHVjdHMgJiZcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gey4uLnByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgKTtcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=