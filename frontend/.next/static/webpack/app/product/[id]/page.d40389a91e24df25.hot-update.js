"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/[id]/page",{

/***/ "(app-pages-browser)/./src/app/product/[id]/page.jsx":
/*!***************************************!*\
  !*** ./src/app/product/[id]/page.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_cartSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/cartSlice */ \"(app-pages-browser)/./src/store/cartSlice.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_DetailsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/DetailsPage */ \"(app-pages-browser)/./src/components/DetailsPage.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// import { useRouter } from 'next/router'\n\n\n\n\n\n\nasync function getProduct(id) {\n// const router = useRouter()\n// const {id} = router\n// let header = {Authorization: \"Bearer fb45d2a54be5119725b528e96af34c69210061dc717974e4010b24df5ae31083cd2c8f0e34912bd9fcfe53c47c7634ee1f57ff8c0be95912857f5e97b1475976dcbe3bf23081c83e8ee64acb7e6cdd76431635c299363e98778a282c029b8471bf4f436a09d735bb88894e2f509b8e7614f5d6cff9cb588196ea479ab858018b\"}\n// try {\n//   let url = await fetch(`http://localhost:1337/api/products/${id}?populate=*`,{headers:header})\n// const products = await url.json()\n// return products\n// } catch (error) {\n//   console.log(error);\n// }\n// console.log(products);\n}\nasync function page(param) {\n    let { params } = param;\n    // const dispatch = useDispatch();\n    const blog = await getProduct(params.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DetailsPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            blog: blog\n        }, void 0, false, {\n            fileName: \"D:\\\\PREVIOUS_WORKS\\\\Demo_Projects\\\\NextAndStrapi\\\\nextjs-blog\\\\src\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdC9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMENBQTBDO0FBQ0k7QUFDZjtBQUNMO0FBQ2dCO0FBQ087QUFDRTtBQUNqRCxlQUFlTyxXQUFXQyxFQUFFO0FBQzFCLDZCQUE2QjtBQUM3QixzQkFBc0I7QUFDdEIsMFNBQTBTO0FBQzFTLFFBQVE7QUFDUixrR0FBa0c7QUFDbEcsb0NBQW9DO0FBQ3BDLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLElBQUk7QUFDSix5QkFBeUI7QUFDN0I7QUFJZSxlQUFlQyxLQUFLLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjtJQUVqQyxrQ0FBa0M7SUFDaEMsTUFBTUMsT0FBTyxNQUFNSixXQUFXRyxPQUFPRixFQUFFO0lBRXpDLHFCQUNFO2tCQUNBLDRFQUFDRiwrREFBV0E7WUFBQ0ssTUFBTUE7Ozs7Ozs7QUFHdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0L1tpZF0vcGFnZS5qc3g/MGU2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSBcIkAvc3RvcmUvY2FydFNsaWNlXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgRGV0YWlsc1BhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9EZXRhaWxzUGFnZVwiO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3QoaWQpe1xyXG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXJcclxuICAgIC8vIGxldCBoZWFkZXIgPSB7QXV0aG9yaXphdGlvbjogXCJCZWFyZXIgZmI0NWQyYTU0YmU1MTE5NzI1YjUyOGU5NmFmMzRjNjkyMTAwNjFkYzcxNzk3NGU0MDEwYjI0ZGY1YWUzMTA4M2NkMmM4ZjBlMzQ5MTJiZDlmY2ZlNTNjNDdjNzYzNGVlMWY1N2ZmOGMwYmU5NTkxMjg1N2Y1ZTk3YjE0NzU5NzZkY2JlM2JmMjMwODFjODNlOGVlNjRhY2I3ZTZjZGQ3NjQzMTYzNWMyOTkzNjNlOTg3NzhhMjgyYzAyOWI4NDcxYmY0ZjQzNmEwOWQ3MzViYjg4ODk0ZTJmNTA5YjhlNzYxNGY1ZDZjZmY5Y2I1ODgxOTZlYTQ3OWFiODU4MDE4YlwifVxyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgbGV0IHVybCA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL3Byb2R1Y3RzLyR7aWR9P3BvcHVsYXRlPSpgLHtoZWFkZXJzOmhlYWRlcn0pXHJcbiAgICAvLyBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHVybC5qc29uKClcclxuICAgIC8vIHJldHVybiBwcm9kdWN0c1xyXG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHBhZ2Uoe3BhcmFtc30pIHtcclxuXHJcbiAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgYmxvZyA9IGF3YWl0IGdldFByb2R1Y3QocGFyYW1zLmlkKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxEZXRhaWxzUGFnZSBibG9nPXtibG9nfS8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJhZGRUb0NhcnQiLCJJbWFnZSIsIlJlYWN0IiwidXNlRGlzcGF0Y2giLCJ0b2FzdCIsIlRvYXN0ZXIiLCJEZXRhaWxzUGFnZSIsImdldFByb2R1Y3QiLCJpZCIsInBhZ2UiLCJwYXJhbXMiLCJibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/product/[id]/page.jsx\n"));

/***/ })

});