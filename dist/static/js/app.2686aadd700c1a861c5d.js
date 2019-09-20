webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Hello__);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Hello___default.a
  }]
}));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(12)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(20),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uikit__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit_dist_js_uikit_icons__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit_dist_js_uikit_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uikit_dist_js_uikit_icons__);
//
//
//
//
//
//



__WEBPACK_IMPORTED_MODULE_0_uikit___default.a.use(__WEBPACK_IMPORTED_MODULE_1_uikit_dist_js_uikit_icons___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Modal__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_uikit_dist_js_uikit__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_uikit_dist_js_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_uikit_dist_js_uikit__);
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
  components: {
    modal: __WEBPACK_IMPORTED_MODULE_0__components_Modal___default.a
  },
  name: "hello",
  data() {
    return {
      paises: [],
      filtro: "",
      paisSelecionado: [],
      isLoading: true
    };
  },
  computed: {
    paisesComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.paises.filter(pais => exp.test(pais.name));
      } else {
        return this.paises;
      }
    }
  },
  created() {
    this.$http.get("https://restcountries.eu/rest/v2/all").then(res => res.json()).then(paises => {
      this.paises = paises;
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.isLoading = false;
    });
  },
  methods: {
    close: function () {
      this.filtro = "";
    },
    abrirModal(pais) {
      this.paisSelecionado = pais;
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  props: ['name', 'flag', 'capital', 'moeda', 'populacao', 'area']
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(7);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(13)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(21),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-09fbb1e3",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(14)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(22),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-43fc2e3e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-panel uk-margin-large uk-background-muted",
    staticStyle: {
      "min-height": "100vh"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "uk-container",
    attrs: {
      "uk-filter": "target: .js-filter"
    }
  }, [_c('ul', {
    staticClass: "uk-subnav uk-subnav-pill uk-text-center"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "uk-navbar-toggle",
    attrs: {
      "href": "#",
      "uk-search-icon": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-navbar-dropdown",
    attrs: {
      "uk-drop": "mode: click; cls-drop: uk-navbar-dropdown; boundary: !nav"
    }
  }, [_c('div', {
    staticClass: "uk-grid-small uk-flex-middle",
    attrs: {
      "uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-expand"
  }, [_c('div', {
    staticClass: "uk-search uk-search-navbar uk-width-1-1"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.filtro),
      expression: "filtro"
    }],
    staticClass: "uk-search-input",
    attrs: {
      "type": "search",
      "placeholder": "Search...",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.filtro)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.filtro = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-auto"
  }, [_c('a', {
    staticClass: "uk-navbar-dropdown-close",
    attrs: {
      "href": "#",
      "uk-close": ""
    },
    on: {
      "click": function($event) {
        return _vm.close()
      }
    }
  })])])])])]), _vm._v(" "), _c('ul', {
    staticClass: "js-filter uk-child-width-1-2@s uk-child-width-1-4@m uk-grid uk-text-center",
    attrs: {
      "uk-grid": ""
    }
  }, _vm._l((_vm.paisesComFiltro), function(pais) {
    return _c('li', {
      class: pais.region
    }, [_c('div', [_c('div', {
      staticClass: "uk-card uk-card-hover uk-card-default"
    }, [_c('div', {
      staticClass: "uk-card-media-top  uk-cover-container"
    }, [_c('img', {
      attrs: {
        "src": pais.flag,
        "alt": pais.name,
        "uk-cover": ""
      }
    }), _vm._v(" "), _c('canvas', {
      attrs: {
        "width": "500",
        "height": "300"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "uk-card-body uk-padding-small"
    }, [_c('div', {
      staticClass: "uk-clearfix uk-margin-small"
    }, [_c('div', {
      staticClass: "uk-float-left"
    }, [_c('span', {
      staticClass: "uk-label uk-float-right"
    }, [_vm._v(_vm._s(pais.region))])])]), _vm._v(" "), _c('h3', {
      staticClass: "uk-card-title uk-margin-remove"
    }, [_vm._v(_vm._s(pais.name))]), _vm._v(" "), (pais.capital) ? _c('small', [_vm._v("\n                      " + _vm._s(pais.capital) + "\n                    ")]) : _c('p', [_vm._v("Unknown capital or does not exist")])]), _vm._v(" "), _c('div', {
      staticClass: "uk-card-footer"
    }, [_c('a', {
      staticClass: "uk-button uk-button-text",
      attrs: {
        "uk-icon": "icon: info",
        "href": "#modal-full",
        "uk-toggle": ""
      },
      on: {
        "click": function($event) {
          return _vm.abrirModal(pais)
        }
      }
    }, [_vm._v("Details  ")])])])])])
  }), 0), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), (_vm.paisesComFiltro == '') ? _c('h2', {
    staticClass: "uk-text-center"
  }, [(_vm.isLoading == true) ? _c('div', {
    attrs: {
      "uk-spinner": "ratio: 3"
    }
  }) : _c('span', [_vm._v("No results found, try different keywords or remove search filters.")])]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "name": _vm.paisSelecionado.name,
      "flag": _vm.paisSelecionado.flag,
      "moeda": _vm.paisSelecionado.demonym,
      "capital": _vm.paisSelecionado.capital,
      "area": _vm.paisSelecionado.area,
      "populacao": _vm.paisSelecionado.population
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "uk-navbar-container uk-margin",
    attrs: {
      "uk-navbar": ""
    }
  }, [_c('div', {
    staticClass: "uk-navbar-center"
  }, [_c('a', {
    staticClass: "uk-navbar-item uk-logo",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n        AllCountry\n      ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "uk-active",
    attrs: {
      "uk-filter-control": ""
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("All")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    attrs: {
      "uk-filter-control": ".Africa"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Africa")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    attrs: {
      "uk-filter-control": ".Americas"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Americas")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    attrs: {
      "uk-filter-control": ".Asia"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Asia")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    attrs: {
      "uk-filter-control": ".Europe"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Europe")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    attrs: {
      "uk-filter-control": ".Oceania"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Oceania")])])
}]}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-modal-full",
    attrs: {
      "id": "modal-full",
      "uk-modal": ""
    }
  }, [_c('div', {
    staticClass: "uk-modal-dialog"
  }, [_c('button', {
    staticClass: "uk-modal-close-full uk-close-large",
    attrs: {
      "type": "button",
      "uk-close": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-grid-collapse uk-child-width-1-2@s uk-flex-middle",
    attrs: {
      "uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-background-cover",
    style: ({
      'background-image': 'url(' + _vm.flag + ')'
    }),
    attrs: {
      "uk-height-viewport": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-padding-large"
  }, [_c('h1', [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('p', [_c('b', [_vm._v("Capital:")]), _vm._v(" " + _vm._s(_vm.capital) + " ")]), _vm._v(" "), _c('p', [_c('b', [_vm._v("Nationality:")]), _vm._v(" " + _vm._s(_vm.moeda))]), _vm._v(" "), _c('p', [_c('b', [_vm._v("Population:")]), _vm._v(" " + _vm._s(_vm.populacao))]), _vm._v(" "), _c('p', [_c('b', [_vm._v("Territorial area:")]), _vm._v(" " + _vm._s(_vm.area) + " km²")])])])])])
},staticRenderFns: []}

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[11]);
//# sourceMappingURL=app.2686aadd700c1a861c5d.js.map