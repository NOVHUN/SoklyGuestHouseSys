(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Attachments/Attachment */ "./resources/adminapp/js/components/Attachments/Attachment.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Attachment: _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('UsersSingle', ['entry', 'loading', 'lists'])),
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler: function handler() {
        this.resetState();
        this.fetchEditData(this.$route.params.id);
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('UsersSingle', ['fetchEditData', 'updateData', 'resetState', 'setName', 'setEmail', 'setPassword', 'setRoles', 'setPhone', 'insertNationalIdImageUrlFile', 'removeNationalIdImageUrlFile', 'insertProfileImageUrlFile', 'removeProfileImageUrlFile'])), {}, {
    updateName: function updateName(e) {
      this.setName(e.target.value);
    },
    updateEmail: function updateEmail(e) {
      this.setEmail(e.target.value);
    },
    updatePassword: function updatePassword(e) {
      this.setPassword(e.target.value);
    },
    updateRoles: function updateRoles(value) {
      this.setRoles(value);
    },
    updatePhone: function updatePhone(e) {
      this.setPhone(e.target.value);
    },
    getRoute: function getRoute(name) {
      return "".concat(axios.defaults.baseURL).concat(name, "/media");
    },
    submitForm: function submitForm() {
      var _this = this;
      this.updateData().then(function () {
        _this.$router.push({
          name: 'users.index'
        });
        _this.$eventHub.$emit('update-success');
      })["catch"](function (error) {
        _this.status = 'failed';
        _.delay(function () {
          _this.status = '';
        }, 3000);
      });
    },
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=template&id=83330428":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=template&id=83330428 ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container-fluid"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header card-header-primary card-header-icon"
  }, [_vm._m(0), _vm._v(" "), _c("h4", {
    staticClass: "card-title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("global.edit")) + "\n              "), _c("strong", [_vm._v(_vm._s(_vm.$t("cruds.user.title_singular")))])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("back-button")], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("bootstrap-alert"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.name,
      "is-focused": _vm.activeField == "name"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.user.fields.name")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: ""
    },
    domProps: {
      value: _vm.entry.name
    },
    on: {
      input: _vm.updateName,
      focus: function focus($event) {
        return _vm.focusField("name");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.email,
      "is-focused": _vm.activeField == "email"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.user.fields.email")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: ""
    },
    domProps: {
      value: _vm.entry.email
    },
    on: {
      input: _vm.updateEmail,
      focus: function focus($event) {
        return _vm.focusField("email");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.password,
      "is-focused": _vm.activeField == "password"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.user.fields.password")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.entry.password
    },
    on: {
      input: _vm.updatePassword,
      focus: function focus($event) {
        return _vm.focusField("password");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.roles.length !== 0,
      "is-focused": _vm.activeField == "roles"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.user.fields.roles")))]), _vm._v(" "), _c("v-select", {
    key: "roles-field",
    attrs: {
      name: "roles",
      label: "title",
      value: _vm.entry.roles,
      options: _vm.lists.roles,
      closeOnSelect: false,
      multiple: ""
    },
    on: {
      input: _vm.updateRoles,
      search: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "focus", undefined, $event.key, undefined)) return null;
        return _vm.focusField("roles");
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "blur", undefined, $event.key, undefined)) return null;
        return _vm.clearFocus.apply(null, arguments);
      }]
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.phone,
      "is-focused": _vm.activeField == "phone"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.user.fields.phone")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.entry.phone
    },
    on: {
      input: _vm.updatePhone,
      focus: function focus($event) {
        return _vm.focusField("phone");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("cruds.user.fields.national_id_image_url")))]), _vm._v(" "), _c("attachment", {
    attrs: {
      route: _vm.getRoute("users"),
      "collection-name": "user_national_id_image_url",
      media: _vm.entry.national_id_image_url,
      "model-id": _vm.$route.params.id,
      "max-file-size": 20
    },
    on: {
      "file-uploaded": _vm.insertNationalIdImageUrlFile,
      "file-removed": _vm.removeNationalIdImageUrlFile
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("cruds.user.fields.profile_image_url")))]), _vm._v(" "), _c("attachment", {
    attrs: {
      route: _vm.getRoute("users"),
      "collection-name": "user_profile_image_url",
      media: _vm.entry.profile_image_url,
      "model-id": _vm.$route.params.id,
      "max-file-size": 20,
      component: "pictures",
      accept: "image/*",
      "max-files": 1
    },
    on: {
      "file-uploaded": _vm.insertProfileImageUrlFile,
      "file-removed": _vm.removeProfileImageUrlFile
    }
  })], 1)])])], 1), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("vue-button-spinner", {
    staticClass: "btn-primary",
    attrs: {
      status: _vm.status,
      isLoading: _vm.loading,
      disabled: _vm.loading
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("global.save")) + "\n            ")])], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("edit")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/adminapp/js/cruds/Users/Edit.vue":
/*!****************************************************!*\
  !*** ./resources/adminapp/js/cruds/Users/Edit.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_83330428__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=83330428 */ "./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=template&id=83330428");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_83330428__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_83330428__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Users/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=template&id=83330428":
/*!**********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=template&id=83330428 ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_83330428__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=83330428 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Users/Edit.vue?vue&type=template&id=83330428");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_83330428__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_83330428__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);