"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Products.jsx":
/*!*************************************!*\
  !*** ./src/components/Products.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"(app-pages-browser)/./src/components/Product.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nasync function getProducts() {\n// let header = {Authorization: \"Bearer fb45d2a54be5119725b528e96af34c69210061dc717974e4010b24df5ae31083cd2c8f0e34912bd9fcfe53c47c7634ee1f57ff8c0be95912857f5e97b1475976dcbe3bf23081c83e8ee64acb7e6cdd76431635c299363e98778a282c029b8471bf4f436a09d735bb88894e2f509b8e7614f5d6cff9cb588196ea479ab858018b\"}\n// try {\n//   let url = await fetch(\"http://localhost:1337/api/products?populate=*\",{headers:header})\n// const products = await url.json()\n// return products\n// } catch (error) {\n//   console.log(error);\n// }\n// console.log(products);\n}\nasync function Products() {\n    var _data_data;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProducts();\n    }, []);\n    const data = await getProducts();\n    // const imageUrl =\n    // \"http://localhost:1337\" + data.data.attributes.img.data.attributes.url;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"text-gray-600 body-font\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container px-5 py-24 mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap w-full mb-20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/2 w-full mb-6 lg:mb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900\",\n                                    children: \"All Products\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\PREVIOUS_WORKS\\\\Demo_Projects\\\\NextAndStrapi\\\\nextjs-blog\\\\src\\\\components\\\\Products.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-1 w-20 bg-indigo-500 rounded\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\PREVIOUS_WORKS\\\\Demo_Projects\\\\NextAndStrapi\\\\nextjs-blog\\\\src\\\\components\\\\Products.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\PREVIOUS_WORKS\\\\Demo_Projects\\\\NextAndStrapi\\\\nextjs-blog\\\\src\\\\components\\\\Products.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PREVIOUS_WORKS\\\\Demo_Projects\\\\NextAndStrapi\\\\nextjs-blog\\\\src\\\\components\\\\Products.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid md:grid-cols-3 sm:grid-cols-3 gap-[40px]\",\n                        children: data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                item: item\n                            }, item.id, false, {\n                                fileName: \"D:\\\\PREVIOUS_WORKS\\\\Demo_Projects\\\\NextAndStrapi\\\\nextjs-blog\\\\src\\\\components\\\\Products.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 16\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PREVIOUS_WORKS\\\\Demo_Projects\\\\NextAndStrapi\\\\nextjs-blog\\\\src\\\\components\\\\Products.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PREVIOUS_WORKS\\\\Demo_Projects\\\\NextAndStrapi\\\\nextjs-blog\\\\src\\\\components\\\\Products.jsx\",\n                lineNumber: 31,\n                columnNumber: 3\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\PREVIOUS_WORKS\\\\Demo_Projects\\\\NextAndStrapi\\\\nextjs-blog\\\\src\\\\components\\\\Products.jsx\",\n            lineNumber: 30,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n} // export async function getServerSideProps(){\n //     let header = {Authorization: \"Bearer 0a682261d6a7870735f72211b6c03b12bd7e7c33723abc66dc4cf07b64cb87bee1fa973c478df7a1b1feb3f056451afc33f8450c347e9ff5a7b133b0745aaab29cc8ef64be8949b692f8e7f366b96973a12acc2111103c6a8a501192e48d434a1191c037477fb32d1b5537b8007ec14b05f5ed150e80ffa08e9033f31a66409a\"}\n //     let url = await fetch(\"http://localhost:1337/api/product\",{headers:header})\n //     const products = await url.json()\n //     console.log(products);\n //     return {\n //         props:{products:products}\n //     }\n // }\n_s(Products, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ1I7QUFHaEMsZUFBZUc7QUFDWCwwU0FBMFM7QUFDMVMsUUFBUTtBQUNSLDRGQUE0RjtBQUM1RixvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIsSUFBSTtBQUNKLHlCQUF5QjtBQUM3QjtBQUllLGVBQWVDO1FBbUJ2QkM7O0lBbEJMSixnREFBU0EsQ0FBQztRQUNSRTtJQUNGLEdBQUUsRUFBRTtJQUVGLE1BQU1FLE9BQU8sTUFBTUY7SUFDbkIsbUJBQW1CO0lBQ25CLDBFQUEwRTtJQUM1RSxxQkFDRTtrQkFDQSw0RUFBQ0c7WUFBUUMsV0FBVTtzQkFDckIsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUdGLFdBQVU7OENBQWlFOzs7Ozs7OENBQy9FLDhEQUFDQztvQ0FBSUQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR25CLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWkYsaUJBQUFBLDRCQUFBQSxhQUFBQSxLQUFNQSxJQUFJLGNBQVZBLGlDQUFBQSxXQUFZSyxHQUFHLENBQUMsQ0FBQ0M7NEJBQ2hCLHFCQUFPLDhEQUFDVCxnREFBT0E7Z0NBQUNTLE1BQU1BOytCQUFXQSxLQUFLQyxFQUFFOzs7Ozt3QkFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1OLEVBSUEsOENBQThDO0NBQzlDLDhTQUE4UztDQUM5UyxrRkFBa0Y7Q0FDbEYsd0NBQXdDO0NBQ3hDLDZCQUE2QjtDQUM3QixlQUFlO0NBQ2Ysb0NBQW9DO0NBQ3BDLFFBQVE7Q0FDUixJQUFJO0dBdkMwQlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4P2FkYmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpe1xyXG4gICAgLy8gbGV0IGhlYWRlciA9IHtBdXRob3JpemF0aW9uOiBcIkJlYXJlciBmYjQ1ZDJhNTRiZTUxMTk3MjViNTI4ZTk2YWYzNGM2OTIxMDA2MWRjNzE3OTc0ZTQwMTBiMjRkZjVhZTMxMDgzY2QyYzhmMGUzNDkxMmJkOWZjZmU1M2M0N2M3NjM0ZWUxZjU3ZmY4YzBiZTk1OTEyODU3ZjVlOTdiMTQ3NTk3NmRjYmUzYmYyMzA4MWM4M2U4ZWU2NGFjYjdlNmNkZDc2NDMxNjM1YzI5OTM2M2U5ODc3OGEyODJjMDI5Yjg0NzFiZjRmNDM2YTA5ZDczNWJiODg4OTRlMmY1MDliOGU3NjE0ZjVkNmNmZjljYjU4ODE5NmVhNDc5YWI4NTgwMThiXCJ9XHJcbiAgICAvLyB0cnkge1xyXG4gICAgLy8gICBsZXQgdXJsID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL3Byb2R1Y3RzP3BvcHVsYXRlPSpcIix7aGVhZGVyczpoZWFkZXJ9KVxyXG4gICAgLy8gY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB1cmwuanNvbigpXHJcbiAgICAvLyByZXR1cm4gcHJvZHVjdHNcclxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGdldFByb2R1Y3RzKClcclxuICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQcm9kdWN0cygpXHJcbiAgICAvLyBjb25zdCBpbWFnZVVybCA9XHJcbiAgICAvLyBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiICsgZGF0YS5kYXRhLmF0dHJpYnV0ZXMuaW1nLmRhdGEuYXR0cmlidXRlcy51cmw7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0b1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgbWItMjBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMiB3LWZ1bGwgbWItNiBsZzptYi0wXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItMiB0ZXh0LWdyYXktOTAwXCI+QWxsIFByb2R1Y3RzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMSB3LTIwIGJnLWluZGlnby01MDAgcm91bmRlZFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIHNtOmdyaWQtY29scy0zIGdhcC1bNDBweF1cIj5cclxuICAgICAge2RhdGE/LmRhdGE/Lm1hcCgoaXRlbSk9PntcclxuICAgICAgICByZXR1cm4gPFByb2R1Y3QgaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfS8+XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XHJcbi8vICAgICBsZXQgaGVhZGVyID0ge0F1dGhvcml6YXRpb246IFwiQmVhcmVyIDBhNjgyMjYxZDZhNzg3MDczNWY3MjIxMWI2YzAzYjEyYmQ3ZTdjMzM3MjNhYmM2NmRjNGNmMDdiNjRjYjg3YmVlMWZhOTczYzQ3OGRmN2ExYjFmZWIzZjA1NjQ1MWFmYzMzZjg0NTBjMzQ3ZTlmZjVhN2IxMzNiMDc0NWFhYWIyOWNjOGVmNjRiZTg5NDliNjkyZjhlN2YzNjZiOTY5NzNhMTJhY2MyMTExMTAzYzZhOGE1MDExOTJlNDhkNDM0YTExOTFjMDM3NDc3ZmIzMmQxYjU1MzdiODAwN2VjMTRiMDVmNWVkMTUwZTgwZmZhMDhlOTAzM2YzMWE2NjQwOWFcIn1cclxuLy8gICAgIGxldCB1cmwgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvcHJvZHVjdFwiLHtoZWFkZXJzOmhlYWRlcn0pXHJcbi8vICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHVybC5qc29uKClcclxuLy8gICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6e3Byb2R1Y3RzOnByb2R1Y3RzfVxyXG4vLyAgICAgfVxyXG4vLyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiUHJvZHVjdCIsImdldFByb2R1Y3RzIiwiUHJvZHVjdHMiLCJkYXRhIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwibWFwIiwiaXRlbSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Products.jsx\n"));

/***/ })

});