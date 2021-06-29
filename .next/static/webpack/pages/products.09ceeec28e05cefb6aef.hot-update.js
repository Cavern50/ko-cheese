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
  console.log('render');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL1Byb2R1Y3RzU2VjdGlvbi9Qcm9kdWN0c1NlY3Rpb24uanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RzU2VjdGlvbiIsInByb2R1Y3RzIiwiUmVhY3QiLCJhY3RpdmVDYXRlZ29yeSIsInNldEFjdGl2ZUNhdGVnb3J5IiwiYWN0aXZlU3ViY2F0ZWdvcnkiLCJzZXRBY3RpdmVTdWJjYXRlZ29yeSIsInNldEFjdGl2ZUl0ZW0iLCJpIiwic2V0U3RhdGUiLCJjYXRlZ29yaWVzIiwidGl0bGUiLCJocmVmIiwic3ViQ2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJjbHN4IiwicyIsImciLCJtYXAiLCJjYXRlZ29yeSIsInN1YmNhdGVnb3J5IiwicHJvZHVjdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUM5QztBQUQ4Qyx3QkFFRkMscURBQUEsQ0FBZSxDQUFmLENBRkU7QUFBQTtBQUFBLE1BRXZDQyxjQUZ1QztBQUFBLE1BRXZCQyxpQkFGdUI7O0FBQUEseUJBR0lGLHFEQUFBLENBQWUsQ0FBZixDQUhKO0FBQUE7QUFBQSxNQUd2Q0csaUJBSHVDO0FBQUEsTUFHcEJDLG9CQUhvQjs7QUFLOUMsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQUlDLFFBQUosRUFBaUI7QUFDcENBLFlBQVEsQ0FBQ0QsQ0FBRCxDQUFSO0FBQ0YsR0FGRDs7QUFJQSxNQUFNRSxVQUFVLEdBQUcsQ0FDaEI7QUFDR0MsU0FBSyxFQUFFLE1BRFY7QUFFR0MsUUFBSSxFQUFFO0FBRlQsR0FEZ0IsRUFLaEI7QUFDR0QsU0FBSyxFQUFFLFFB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O0FBMkNGLENBbEdNOztHQUFNdkIsZTs7S0FBQUEsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy4wOWNlZWVjMjhlMDVjZWZiNmFlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkBjb21wb25lbnRzL0NvbW1vbi9Qcm9kdWN0L1Byb2R1Y3RcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL1Byb2R1Y3RzU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzU2VjdGlvbiA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuICAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpXHJcbiAgIGNvbnN0IFthY3RpdmVDYXRlZ29yeSwgc2V0QWN0aXZlQ2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgIGNvbnN0IFthY3RpdmVTdWJjYXRlZ29yeSwgc2V0QWN0aXZlU3ViY2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gICBjb25zdCBzZXRBY3RpdmVJdGVtID0gKGksIHNldFN0YXRlKSA9PiB7XHJcbiAgICAgIHNldFN0YXRlKGkpO1xyXG4gICB9O1xyXG5cclxuICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQodGL0YDRi1wiLFxyXG4gICAgICAgICBocmVmOiBcIi9cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQnNC+0LvQvtC60L5cIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JTQtdGB0LXRgNGC0YtcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgIF07XHJcblxyXG4gICBjb25zdCBzdWJDYXRlZ29yaWVzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItCh0LLQtdC20LjQtVwiLFxyXG4gICAgICAgICBocmVmOiBcIi9cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQnNGP0LPQutC40LVcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0KLQstC10YDQtNGL0LVcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0KEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItChINCz0L7Qu9GD0LHQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JrQvtGA0L7QstC40LlcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JrQvtC30LjQuVwiLFxyXG4gICAgICAgICBocmVmOiBcIi9cIixcclxuICAgICAgfSxcclxuICAgXTtcclxuICAgY29uc29sZS5sb2coJ3JlbmRlcicpO1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc3gocy5wcm9kdWN0cyl9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChnLndyYXBwZXIpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5oZWFkZXIpfT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jYXRlZ29yaWVzKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPT09IGkgPyBzLmFjdGl2ZSA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlSXRlbShpLCBzZXRBY3RpdmVDYXRlZ29yeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5zdWJjYXRlZ29yaWVzKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtzdWJDYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnksIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN1YmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdWJjYXRlZ29yeSA9PT0gaSA/IHMuYWN0aXZlIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJdGVtKGksIHNldEFjdGl2ZVN1YmNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yeS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuYm9keSl9PlxyXG4gICAgICAgICAgICAgICB7cHJvZHVjdHMgJiZcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gey4uLnByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgKTtcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=