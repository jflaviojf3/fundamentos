"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/estado",{

/***/ "./src/pages/estado.jsx":
/*!******************************!*\
  !*** ./src/pages/estado.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Estado; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.jsx\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Estado() {\n    var incrementar = function incrementar() {\n        setNumero(numero + 1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), numero = ref[0], setNumero = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        titulo: \"Componente com Estado\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: numero\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JF-Worklab\\\\Documents\\\\ProjetoPessoal\\\\NextCod3r\\\\aulao_nextjs\\\\fundamentos\\\\src\\\\pages\\\\estado.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: incrementar,\n                children: \"Incrementar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JF-Worklab\\\\Documents\\\\ProjetoPessoal\\\\NextCod3r\\\\aulao_nextjs\\\\fundamentos\\\\src\\\\pages\\\\estado.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\JF-Worklab\\\\Documents\\\\ProjetoPessoal\\\\NextCod3r\\\\aulao_nextjs\\\\fundamentos\\\\src\\\\pages\\\\estado.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this));\n};\n_s(Estado, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Estado;\nvar _c;\n$RefreshReg$(_c, \"Estado\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZXN0YWRvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBQ1M7O0FBRTFCLFFBQVEsQ0FBQ0UsTUFBTSxHQUFFLENBQUM7UUFHcEJDLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLEdBQUksQ0FBQztRQUNyQkMsU0FBUyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUN4QixDQUFDOztJQUpELEdBQUssQ0FBdUJMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQS9CSyxNQUFNLEdBQWVMLEdBQVcsS0FBeEJJLFNBQVMsR0FBSUosR0FBVztJQU12QyxNQUFNLDZFQUNEQywwREFBTTtRQUFDSyxNQUFNLEVBQUMsQ0FBdUI7O3dGQUNqQ0MsQ0FBRzswQkFBRUYsTUFBTTs7Ozs7O3dGQUNYRyxDQUFNO2dCQUFDQyxPQUFPLEVBQUVOLFdBQVc7MEJBQUUsQ0FBVzs7Ozs7Ozs7Ozs7O0FBR3JELENBQUM7R0FidUJELE1BQU07S0FBTkEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZXN0YWRvLmpzeD85NDA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFc3RhZG8oKXtcclxuICAgIGNvbnN0IFtudW1lcm8sIHNldE51bWVyb10gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGZ1bmN0aW9uIGluY3JlbWVudGFyICgpIHtcclxuICAgICAgICBzZXROdW1lcm8obnVtZXJvICsgMSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGl0dWxvPVwiQ29tcG9uZW50ZSBjb20gRXN0YWRvXCI+XHJcbiAgICAgICAgICAgIDxkaXY+e251bWVyb308L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZW1lbnRhcn0+SW5jcmVtZW50YXI8L2J1dHRvbj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxheW91dCIsIkVzdGFkbyIsImluY3JlbWVudGFyIiwic2V0TnVtZXJvIiwibnVtZXJvIiwidGl0dWxvIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/estado.jsx\n");

/***/ })

});