exports.ids = [1];
exports.modules = {

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=7677adf0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container fade-in\"><div class=\"row align-items-center\"><div class=\"col-12 col-lg-6\"><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" class=\"w-100\" style=\"margin-top: 60px;\"></div> <div class=\"col-12 col-lg-6\"><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" class=\"w-100\"></div></div></div> <div class=\"bg-white my-5 container fill-right index-shadow-lb slide-in-from-right\"><div class=\"row\"><div class=\"col-12 pb-3\"><h1 class=\"font-noto text-hi index-shadow-lb-sm\">\n          タマクラ / ヒナクラ とは？\n        </h1> <p>\n          ⚡大17代の卒業祝いアニクラとして2021/03/06に「ヒナクラ」を開催！<br>\n          またヒナクラ参加DJの練習としてDJの&quot;タマゴ&quot;向けオンラインアニクラ「タマクラ」も定期的に開催！\n        </p></div></div></div> <div class=\"container fade-in\"><div class=\"row align-items-center\"><div class=\"col-12 col-lg-6 mb-3 index-shadow-lb\"><img"+(_vm._ssrAttr("src",__webpack_require__(74)))+" class=\"w-100\"></div> <div class=\"col-12 col-lg-6 mb-3 index-shadow-lb\"><img"+(_vm._ssrAttr("src",__webpack_require__(75)))+" class=\"w-100\"></div> <div class=\"col-12 col-lg-6 mb-3 index-shadow-lb\"><img"+(_vm._ssrAttr("src",__webpack_require__(76)))+" class=\"w-100\"></div> <div class=\"col-12 col-lg-6 mb-3 index-shadow-lb\"><img"+(_vm._ssrAttr("src",__webpack_require__(77)))+" class=\"w-100\"></div></div></div> <div class=\"container my-5\"><div class=\"row\"><div class=\"col-12 col-lg-6 fill-left index-shadow-rb slide-in-from-left\"><h1 class=\"font-noto text-hi index-shadow-rb-sm\">\n          タマクラの特徴として視聴者さんも聞くだけじゃなく楽しめる企画を実施中！\n        </h1> <ol class=\"li-margin\"><li>\n            画面になうぷれツイート表示！\n          </li> <li>\n            なうぷれツイート間で「他の人のツイートがない」 場合ランプが一つ点灯！\n          </li> <li>\n            また、「この曲選公序良俗に反してない？？」って場合鹿さんが出現！曲間で3匹以上鹿さんが現れた場合ランプが一つ点灯！\n          </li> <li>\n            3つ以上ランプが点灯した場合「DJがうまくなる飲み物」を飲んでもらいます！\n          </li></ol></div> <div class=\"col-12 col-lg-6 d-flex flex-column align-items-center mt-5 mt-lg-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(78)))+" class=\"w-100 index-shadow-rb mb-3\"> <img"+(_vm._ssrAttr("src",__webpack_require__(79)))+" class=\"w-100 index-shadow-rb mb-3\"></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=7677adf0&

// EXTERNAL MODULE: ./components/samples/DummyImage.vue + 4 modules
var DummyImage = __webpack_require__(48);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=ts&














































































/* harmony default export */ var aboutvue_type_script_lang_ts_ = ({
  name: "about",
  components: {DummyImage: DummyImage["a" /* default */]},
  mounted() {
    this.setVisitIn(this.$route.name);
    this.setBackgroundColor('#FAFAFA');
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])({
      setBackgroundColor: 'setBackgroundColor',
      setVisitIn: 'setVisitIn'
    })
  },
  head() {
    return {
      title: 'タマクラ',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'about | ヒナクラ'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'タマクラ / ヒナクラ とは？⚡大17代の卒業祝いアニクラとして2021/03/06に「ヒナクラ」を開催！' +
              'またヒナクラ参加DJの練習としてDJの"タマゴ"向けオンラインアニクラ「タマクラ」も定期的に開催！',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL / this.$route.fullPath}`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'about | ヒナクラ',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/logos/hnkr.png`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'タマクラ / ヒナクラ とは？⚡大17代の卒業祝いアニクラとして2021/03/06に「ヒナクラ」を開催！' +
              'またヒナクラ参加DJの練習としてDJの"タマゴ"向けオンラインアニクラ「タマクラ」も定期的に開催！',
        }
      ]
    }
  }
});

// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_aboutvue_type_script_lang_ts_ = (aboutvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f9a6b40e"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("52be59f2", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DummyImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DummyImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DummyImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DummyImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DummyImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DummyImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dummy-image{background-color:#eee;border:4px solid #fff;display:flex;justify-content:center;align-items:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/samples/DummyImage.vue?vue&type=template&id=977c4c1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dummy-image",style:({width: _vm.width, height: _vm.height})},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/samples/DummyImage.vue?vue&type=template&id=977c4c1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/samples/DummyImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var DummyImagevue_type_script_lang_js_ = ({
  name: "DummyImage",
  props: {
    width: {
      type: String,
      default: '10em'
    },
    height: {
      type: String,
      default: '10em'
    }
  }
});
// CONCATENATED MODULE: ./components/samples/DummyImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var samples_DummyImagevue_type_script_lang_js_ = (DummyImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/samples/DummyImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  samples_DummyImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "045ba5c9"
  
)

/* harmony default export */ var DummyImage = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hmlr_logo_n.c0ffca5.png";

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tmkr1_logo.a2e6dbd.png";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3ff323c4", content, true, context)
};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/a1.12c60d1.png";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/a2.6d791a5.png";

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/a3.b3575ea.png";

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/a4.d04c3cc.png";

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/b1.d1a2945.png";

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/b2.54f49c5.png";

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".li-margin li{font-size:1.25rem;margin-bottom:1rem}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=about.js.map