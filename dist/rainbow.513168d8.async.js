(window["webpackJsonprainbow"] = window["webpackJsonprainbow"] || []).push([[6],{

/***/ "./examples-webgl/vue/module/app/webgl/point/point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/webgl/point/point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_7211b50f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/webgl/point/point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_7211b50f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_7211b50f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_7211b50f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_7211b50f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_7211b50f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/webgl/point/point.scss?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/webgl/point/point.ts":
/*!************************************************************!*\
  !*** ./examples-webgl/vue/module/app/webgl/point/point.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony import */ var _webgl_initShaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/webgl/initShaders */ \"./examples-webgl/webgl/initShaders.ts\");\n/* harmony import */ var _utils_webgl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/webgl */ \"./examples-webgl/utils/webgl.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n\n// 顶点着色器程序\n// const VSHADER_SOURCE =\n//   'void main(){ \\n' +\n//   ' gl_Position = vec4(1.0,0.0,0.0,1);\\n' +\n//   ' gl_PointSize = 20;\\n' +\n//   '}\\n';\n// 顶点着色器程序\n// const VSHADER_SOURCE =\n//   'void main(){ ' +\n//   ' gl_Position = vec4(1.0,0.0,0.0,1);' +\n//   ' gl_PointSize = 20;' +\n//   '}';\n// 顶点着色器程序\nvar VSHADER_SOURCE = \"\\n        void main(){\\n         gl_Position = vec4(0.5,0.5,0.0,1);\\n          gl_PointSize = 10.0;\\n        }\";\n// 片元着色器程序\nvar FSHADER_SOURCE = \"\\n        void main(){\\n           gl_FragColor = vec4(1.0,0.0,0.0,1.0);\\n        }\";\nvar App = /** @class */ (function (_super) {\n    __extends(App, _super);\n    function App() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    // 声明周期钩子\n    App.prototype.mounted = function () {\n        this.canvas = Object(_utils_webgl__WEBPACK_IMPORTED_MODULE_3__[\"initCanvas\"])();\n        if (this.canvas) {\n            this.gl = this.canvas.getContext('webgl');\n            // 不支持WebGL的浏览器将打印一个错误，并结束代码运行\n            if (!this.gl) {\n                console.error('浏览器不支持WebGL');\n                return;\n            }\n            //   初始化着色器\n            if (!Object(_webgl_initShaders__WEBPACK_IMPORTED_MODULE_2__[\"initShaders\"])(this.gl, VSHADER_SOURCE, FSHADER_SOURCE)) {\n                console.error('初始化着色器失败');\n                return;\n            }\n            // 指定一个覆盖（清空）this.canvas的颜色\n            this.gl.clearColor(0.0, 0.0, 0.0, 1.0);\n            // 清除this.canvas\n            this.gl.clear(this.gl.COLOR_BUFFER_BIT);\n            // 将1个点绘制出来\n            this.gl.drawArrays(this.gl.POINTS, 0, 1);\n        }\n    };\n    App = __decorate([\n        vue_class_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ], App);\n    return App;\n}(vue__WEBPACK_IMPORTED_MODULE_0___default.a));\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/webgl/point/point.ts?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/webgl/point/point.vue":
/*!*************************************************************!*\
  !*** ./examples-webgl/vue/module/app/webgl/point/point.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _point_vue_vue_type_template_id_7211b50f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point.vue?vue&type=template&id=7211b50f&scoped=true& */ \"./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=template&id=7211b50f&scoped=true&\");\n/* harmony import */ var _point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point.vue?vue&type=script&lang=ts& */ \"./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _point_scss_vue_type_style_index_0_id_7211b50f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true& */ \"./examples-webgl/vue/module/app/webgl/point/point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _point_vue_vue_type_template_id_7211b50f_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _point_vue_vue_type_template_id_7211b50f_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7211b50f\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"examples-webgl/vue/module/app/webgl/point/point.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/webgl/point/point.vue?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader??ref--1!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./point.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/webgl/point/point.vue?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=template&id=7211b50f&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=template&id=7211b50f&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_7211b50f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./point.vue?vue&type=template&id=7211b50f&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=template&id=7211b50f&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_7211b50f_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_7211b50f_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/webgl/point/point.vue?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/webgl/point/point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/webgl/point/point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/webgl/point/point.scss?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/webgl/point/point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/webgl/point/point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/webgl/point/point.scss?vue&type=style&index=0&id=7211b50f&lang=scss&scoped=true&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/webgl/point/point.scss?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _point_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point.ts */ \"./examples-webgl/vue/module/app/webgl/point/point.ts\");\n// @ts-ignore\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_point_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/webgl/point/point.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=template&id=7211b50f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/webgl/point/point.vue?vue&type=template&id=7211b50f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"canvas\",\n    { attrs: { id: \"canvas\", height: \"400\", width: \"400\" } },\n    [_vm._v(\"\\n  你的浏览器不支持WebGL，请更换新的浏览器\\n\")]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/webgl/point/point.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

}]);