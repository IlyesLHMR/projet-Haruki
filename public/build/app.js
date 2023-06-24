(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/navbar.js */ "./assets/js/navbar.js");
/* harmony import */ var _js_navbar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_navbar_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_liste_de_lecture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/liste-de-lecture.js */ "./assets/js/liste-de-lecture.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


//Import de fichier js perso.



// start the Stimulus application


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/liste-de-lecture.js":
/*!***************************************!*\
  !*** ./assets/js/liste-de-lecture.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_toastr_build_toastr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/toastr/build/toastr.min.css */ "./node_modules/toastr/build/toastr.min.css");



$(function () {
  $('.remove-from-list-trigger').on('click', function (e) {
    var _this = this;
    var idSerie = $(this).attr('data-serieId');
    var idListe = $(this).attr('data-listeId');
    // console.log(`${jsData.urls.removeFromList}/${id}`);
    $(this).next('.card-spinner').toggleClass('d-none');
    $.ajax({
      method: "GET",
      url: "".concat(jsData.urls.removeFromList, "/").concat(idSerie, "/").concat(idListe),
      data: {},
      dataType: "json"
    }).done(function (resp) {
      // succès de la requête asynchrone:
      //  console.log( "ajax success" );
      // console.log(resp);

      if (resp.success) {
        $(_this).next('.card-spinner').toggleClass('d-none');
        $(_this).parents('.bookCard').html('');
        toastr__WEBPACK_IMPORTED_MODULE_1__.success('Série correctement supprimée de votre liste...');
      }
      if (!resp.success) {
        $(_this).next('.card-spinner').toggleClass('d-none');
        toastr__WEBPACK_IMPORTED_MODULE_1__.warning('Une erreur inattendue s\'est produite...');
      }
    }).fail(function (jqXHR, textStatus) {
      // échec de la requête asynchrone:
      // console.log( "Request failed: " + textStatus );
      // console.log(jqXHR);
      $(this).next('.card-spinner').toggleClass('d-none');
      toastr__WEBPACK_IMPORTED_MODULE_1__.error('Une erreur de réseau s\'est produite...');
    });
  });
});

/***/ }),

/***/ "./assets/js/navbar.js":
/*!*****************************!*\
  !*** ./assets/js/navbar.js ***!
  \*****************************/
/***/ (() => {

$(function () {
  var toggler = document.querySelector(".hamburger");
  var navLinksContainer = document.querySelector(".navlinks-container");
  var toggleNav = function toggleNav(e) {
    // Animation du bouton
    toggler.classList.toggle("open");
    var ariaToggle = toggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    toggler.setAttribute("aria-expanded", ariaToggle);

    // Slide de la navigation
    navLinksContainer.classList.toggle("open");
  };
  toggler.addEventListener("click", toggleNav);
  new ResizeObserver(function (entries) {
    if (entries[0].contentRect.width <= 900) {
      navLinksContainer.style.transition = "transform 0.4s ease-out";
    } else {
      navLinksContainer.style.transition = "none";
    }
  }).observe(document.body);
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-02e30a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLFVBQVUsR0FBRyx5QkFBeUI7SUFDaEUsQ0FBQyxNQUFNO01BQ0xiLGlCQUFpQixDQUFDWSxLQUFLLENBQUNDLFVBQVUsR0FBRyxNQUFNO0lBQzdDO0VBQ0YsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQ2hCLFFBQVEsQ0FBQ2lCLElBQUksQ0FBQztBQUN6QixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzNCSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGlzdGUtZGUtbGVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vSW1wb3J0IGRlIGZpY2hpZXIganMgcGVyc28uXHJcbmltcG9ydCAnLi9qcy9uYXZiYXIuanMnO1xyXG5pbXBvcnQgJy4vanMvbGlzdGUtZGUtbGVjdHVyZS5qcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiaW1wb3J0ICogYXMgdG9hc3RyIGZyb20gJ3RvYXN0cic7XHJcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL3RvYXN0ci9idWlsZC90b2FzdHIubWluLmNzcyc7IFxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICAgJCgnLnJlbW92ZS1mcm9tLWxpc3QtdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGxldCBpZFNlcmllID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNlcmllSWQnKTtcclxuICAgICAgICBsZXQgaWRMaXN0ZSA9ICQodGhpcykuYXR0cignZGF0YS1saXN0ZUlkJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7anNEYXRhLnVybHMucmVtb3ZlRnJvbUxpc3R9LyR7aWR9YCk7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCcuY2FyZC1zcGlubmVyJykudG9nZ2xlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtqc0RhdGEudXJscy5yZW1vdmVGcm9tTGlzdH0vJHtpZFNlcmllfS8ke2lkTGlzdGV9YCxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5kb25lKChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHN1Y2PDqHMgZGUgbGEgcmVxdcOqdGUgYXN5bmNocm9uZTpcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKCBcImFqYXggc3VjY2Vzc1wiICk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3ApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcuY2FyZC1zcGlubmVyJykudG9nZ2xlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuYm9va0NhcmQnKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdTw6lyaWUgY29ycmVjdGVtZW50IHN1cHByaW3DqWUgZGUgdm90cmUgbGlzdGUuLi4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXNwLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKCdVbmUgZXJyZXVyIGluYXR0ZW5kdWUgc1xcJ2VzdCBwcm9kdWl0ZS4uLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMpIHtcclxuICAgICAgICAgICAgLy8gw6ljaGVjIGRlIGxhIHJlcXXDqnRlIGFzeW5jaHJvbmU6XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcIlJlcXVlc3QgZmFpbGVkOiBcIiArIHRleHRTdGF0dXMgKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coanFYSFIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoJy5jYXJkLXNwaW5uZXInKS50b2dnbGVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcignVW5lIGVycmV1ciBkZSByw6lzZWF1IHNcXCdlc3QgcHJvZHVpdGUuLi4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KVxyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcbiAgXHJcbiAgY29uc3QgdG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xyXG4gIGNvbnN0IG5hdkxpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZsaW5rcy1jb250YWluZXJcIik7XHJcbiAgXHJcbiAgY29uc3QgdG9nZ2xlTmF2ID0gZSA9PiB7XHJcbiAgICAvLyBBbmltYXRpb24gZHUgYm91dG9uXHJcbiAgICB0b2dnbGVyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIFxyXG4gICAgY29uc3QgYXJpYVRvZ2dsZSA9XHJcbiAgICAgIHRvZ2dsZXIuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSA9PT0gXCJ0cnVlXCIgPyBcImZhbHNlXCIgOiBcInRydWVcIjtcclxuICAgIHRvZ2dsZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBhcmlhVG9nZ2xlKTtcclxuICBcclxuICAgIC8vIFNsaWRlIGRlIGxhIG5hdmlnYXRpb25cclxuICAgIG5hdkxpbmtzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIH07XHJcbiAgXHJcbiAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2KTtcclxuICBcclxuICBcclxuICBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICBpZiAoZW50cmllc1swXS5jb250ZW50UmVjdC53aWR0aCA8PSA5MDApe1xyXG4gICAgICBuYXZMaW5rc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC40cyBlYXNlLW91dFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2TGlua3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gIH0pLm9ic2VydmUoZG9jdW1lbnQuYm9keSlcclxuICB9KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsInRvYXN0ciIsIiQiLCJvbiIsImUiLCJfdGhpcyIsImlkU2VyaWUiLCJhdHRyIiwiaWRMaXN0ZSIsIm5leHQiLCJ0b2dnbGVDbGFzcyIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJjb25jYXQiLCJqc0RhdGEiLCJ1cmxzIiwicmVtb3ZlRnJvbUxpc3QiLCJkYXRhIiwiZGF0YVR5cGUiLCJkb25lIiwicmVzcCIsInN1Y2Nlc3MiLCJwYXJlbnRzIiwiaHRtbCIsIndhcm5pbmciLCJmYWlsIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3IiLCJ0b2dnbGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2TGlua3NDb250YWluZXIiLCJ0b2dnbGVOYXYiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhcmlhVG9nZ2xlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImNvbnRlbnRSZWN0Iiwid2lkdGgiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJvYnNlcnZlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=