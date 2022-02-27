"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/clientes/[codigo]";
exports.ids = ["pages/api/clientes/[codigo]"];
exports.modules = {

/***/ "(api)/./src/pages/api/clientes/[codigo].js":
/*!********************************************!*\
  !*** ./src/pages/api/clientes/[codigo].js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const codigo = req.query.codigo;\n    res.status(200).json({\n        id: codigo,\n        nome: `JLima ${codigo}`,\n        email: `limalimalima${codigo}@gmail.com`\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NsaWVudGVzL1tjb2RpZ29dLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxRQUFRLENBQUNBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUMsQ0FBQztJQUN0QyxLQUFLLENBQUNDLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNELE1BQU07SUFFL0JELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFDbEJDLEVBQUUsRUFBRUosTUFBTTtRQUNWSyxJQUFJLEdBQUcsTUFBTSxFQUFFTCxNQUFNO1FBQ3JCTSxLQUFLLEdBQUcsWUFBWSxFQUFFTixNQUFNLENBQUMsVUFBVTtJQUUzQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bmRhbWVudG9zLy4vc3JjL3BhZ2VzL2FwaS9jbGllbnRlcy9bY29kaWdvXS5qcz8yMTFiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xyXG4gICAgY29uc3QgY29kaWdvID0gcmVxLnF1ZXJ5LmNvZGlnb1xyXG4gICAgXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgaWQ6IGNvZGlnbyxcclxuICAgICAgICBub21lOiBgSkxpbWEgJHtjb2RpZ299YCxcclxuICAgICAgICBlbWFpbDogYGxpbWFsaW1hbGltYSR7Y29kaWdvfUBnbWFpbC5jb21gXHJcblxyXG4gICAgfSlcclxufSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29kaWdvIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwiaWQiLCJub21lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/clientes/[codigo].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/clientes/[codigo].js"));
module.exports = __webpack_exports__;

})();