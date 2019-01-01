(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/book/create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_search_author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../mixin/search/author */ "./resources/js/components/mixin/search/author.js");
/* harmony import */ var _mixin_search_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixin/search/category */ "./resources/js/components/mixin/search/category.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixin_search_author__WEBPACK_IMPORTED_MODULE_0__["default"], _mixin_search_category__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      form: {
        isbn: '',
        title: '',
        date_of_publication: '',
        category_id: '',
        author_id: ''
      },
      errors: {},
      loading: false,
      disabled: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      axios.get("/api/books/".concat(to.params.id)).then(function (response) {
        next(function (vm) {
          return vm.setData(response.data);
        });
      }).catch(function (error) {
        if (error.response.statusText) {
          next(function (vm) {
            return vm.$message({
              type: 'error',
              message: error.response.statusText
            });
          });
        }
      });
    } else {
      next();
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var vm = this;

    if (to.params.id) {
      axios.get("/api/books/".concat(to.params.id)).then(function (response) {
        vm.setData(response.data);
        next();
      }).catch(function (error) {
        if (error.response.statusText) {
          vm.$message({
            type: 'error',
            message: error.response.statusText
          });
        }
      });
    } else {
      next();
    }
  },
  methods: {
    setData: function setData(response) {
      var vm = this;
      vm.authors = [];
      vm.categories = [];
      vm.authors = response.authors.map(function (item) {
        return {
          value: item.id,
          label: item.name
        };
      });
      vm.categories = response.categories.map(function (item) {
        return {
          value: item.id,
          label: item.name
        };
      });
      vm.form = response;
      vm.form.author_id = response.author.id;
      vm.form.category_id = response.category.id;
    },
    onCancel: function onCancel() {
      this.$router.push({
        name: 'view-book'
      });
    },
    onSubmit: function onSubmit() {
      var vm = this;
      this.$refs.form.validate(function (valid) {
        if (valid) {
          vm.disabled = true;
          vm.errors = {};
          var id = vm.$route.params.id;
          axios[id ? 'put' : 'post']("/api/books".concat(id ? "/".concat(id) : ''), vm.form).then(function () {
            vm.disabled = false;
            vm.$message({
              type: 'success',
              message: 'Book has been created'
            });
          }).catch(function (error) {
            vm.disabled = false;

            if (error.response.data.errors && error.response.data.message) {
              vm.errors = error.response.data.errors;
              vm.$message({
                message: error.response.data.message,
                type: 'error'
              });
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/create.vue?vue&type=template&id=764a3e32&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/book/create.vue?vue&type=template&id=764a3e32& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        [
          _c(
            "el-col",
            { attrs: { span: 24 } },
            [
              _c(
                "el-card",
                { attrs: { shadow: "never" } },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.$route.params.id ? "Edit" : "Create") +
                          " Book"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-form",
                    {
                      ref: "form",
                      attrs: { model: _vm.form, "label-width": "120px" },
                      nativeOn: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { prop: "category_id", label: "Category" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                filterable: "",
                                remote: "",
                                "reserve-keyword": "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.search_category,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.form.category_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "category_id", $$v)
                                },
                                expression: "form.category_id"
                              }
                            },
                            _vm._l(_vm.categories, function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.label, value: item.value }
                              })
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.category_id, function(error) {
                            return _vm.errors.category_id
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { prop: "author_id", label: "Author" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                filterable: "",
                                remote: "",
                                "reserve-keyword": "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.search_author,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.form.author_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "author_id", $$v)
                                },
                                expression: "form.author_id"
                              }
                            },
                            _vm._l(_vm.authors, function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.label, value: item.value }
                              })
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.author_id, function(error) {
                            return _vm.errors.author_id
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { prop: "isbn", label: "ISBN" } },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "Enter ISBN",
                              type: "text",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.form.isbn,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "isbn", $$v)
                              },
                              expression: "form.isbn"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.isbn, function(error) {
                            return _vm.errors.isbn
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { prop: "title", label: "Title" } },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "Enter Title",
                              type: "text",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.form.title,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "title", $$v)
                              },
                              expression: "form.title"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.title, function(error) {
                            return _vm.errors.title
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "date_of_publication",
                            rules: _vm.$root.validate.required,
                            label: "Date of Publication"
                          }
                        },
                        [
                          _c("el-date-picker", {
                            attrs: { type: "date", placeholder: "Pick a day" },
                            model: {
                              value: _vm.form.date_of_publication,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "date_of_publication", $$v)
                              },
                              expression: "form.date_of_publication"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.date_of_publication, function(
                            error
                          ) {
                            return _vm.errors.date_of_publication
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-button",
                            {
                              attrs: { loading: _vm.disabled, type: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.onSubmit("form")
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$route.params.id ? "Edit" : "Create"
                                ) + " Book\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("el-button", { on: { click: _vm.onCancel } }, [
                            _vm._v("Cancel")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/book/create.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/book/create.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=764a3e32& */ "./resources/js/components/book/create.vue?vue&type=template&id=764a3e32&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/book/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/book/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/book/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/book/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/book/create.vue?vue&type=template&id=764a3e32&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/book/create.vue?vue&type=template&id=764a3e32& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=764a3e32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/create.vue?vue&type=template&id=764a3e32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/mixin/search/author.js":
/*!********************************************************!*\
  !*** ./resources/js/components/mixin/search/author.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Edward Lance Lorilla on 12/31/2018.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      authors: []
    };
  },
  methods: {
    search_author: function search_author(query) {
      var vm = this;

      if (query !== '') {
        vm.onSearchAuthor(query, vm);
      } else {
        vm.loading = false;
        vm.authors = [];
      }
    },
    onSearchAuthor: _.debounce(function (query, vm) {
      vm.loading = true;
      axios.get('/api/authors/search?search=' + query).then(function (q) {
        vm.loading = false;
        vm.authors = q.data.data.map(function (item) {
          return {
            value: item.id,
            label: item.name
          };
        });
      }).catch(function () {
        vm.loading = false;
      });
    }, 350)
  }
});

/***/ }),

/***/ "./resources/js/components/mixin/search/category.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/mixin/search/category.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Edward Lance Lorilla on 12/31/2018.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categories: []
    };
  },
  methods: {
    search_category: function search_category(query) {
      var vm = this;

      if (query !== '') {
        vm.onSearchCategory(query, vm);
      } else {
        vm.loading = false;
        vm.categories = [];
      }
    },
    onSearchCategory: _.debounce(function (query, vm) {
      vm.loading = true;
      axios.get('/api/categories/search?search=' + query).then(function (q) {
        vm.loading = false;
        vm.categories = q.data.data.map(function (item) {
          return {
            value: item.id,
            label: item.name
          };
        });
      }).catch(function () {
        vm.loading = false;
      });
    }, 350)
  }
});

/***/ })

}]);