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
/* harmony import */ var _js_serie_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/serie-list.js */ "./assets/js/serie-list.js");
/* harmony import */ var _js_liste_de_lecture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/liste-de-lecture.js */ "./assets/js/liste-de-lecture.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
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

/***/ "./assets/js/serie-list.js":
/*!*********************************!*\
  !*** ./assets/js/serie-list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_toastr_build_toastr_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/toastr/build/toastr.min.css */ "./node_modules/toastr/build/toastr.min.css");





$(function () {
  $('.flip-it-trigger').on('click', function (e) {
    e.stopPropagation();
    $(this).parents('.bookCard').addClass('flip-it');
  });
  $('.flip-back').on('click', function (e) {
    $(this).parents('.bookCard').toggleClass('flip-it');
  });
  $('body').on('click', function (e) {
    $('.bookCard').removeClass('flip-it');
  });
  $('.add-to-list').on('click', function (e) {
    var _this = this;
    var idSerie = $(this).attr('data-idSerie');
    var idListe = $(this).attr('data-idListe');
    $(this).parents('.bookCard').find('.card-spinner').toggleClass('d-none');
    $.ajax({
      method: "GET",
      url: "".concat(jsData.urls.addToList, "/").concat(idSerie, "/").concat(idListe),
      data: {},
      dataType: "json"
    }).done(function (resp) {
      // succès de la requête asynchrone:
      //  console.log( "ajax success" );
      // console.log(resp);

      if (resp.success) {
        toastr__WEBPACK_IMPORTED_MODULE_3__.success('Série correctement rajoutée à votre liste...');
        $(_this).parents('.bookCard').find('.card-spinner').toggleClass('d-none');
        $(_this).parents('.bookCard').find('.flip-it-trigger').find('span').text('more_horiz');
        var html = '';
        html = '<h5 class="text-center mb-4 text-decoration-underline ">Cette série a déjà été ajoutée à :</h5>';
        html += "<p>- ";
        html += "<a class=\"text-decoration-none text-white lnk-undrline fs-4\"  ";
        html += "href=\"".concat(jsData.urls.editList, "/").concat(idListe, "\">");
        html += "".concat(resp.nomListe, "</a></p>");
        $(_this).parents('.bookCard').find('.added').html(html);
      }
      if (!resp.success) {
        $(_this).next('.card-spinner').toggleClass('d-none');
        toastr__WEBPACK_IMPORTED_MODULE_3__.warning('Une erreur inattendue s\'est produite...');
      }
    }).fail(function (jqXHR, textStatus) {
      // échec de la requête asynchrone:
      // console.log( "Request failed: " + textStatus );
      // console.log(jqXHR);
      $(this).next('.card-spinner').toggleClass('d-none');
      toastr__WEBPACK_IMPORTED_MODULE_3__.error('Une erreur de réseau s\'est produite...');
    });
  });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-daad55"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BEZ0IsSUFBSSxPQUFBVixNQUFBLENBQU9PLElBQUksQ0FBQ21DLFFBQVEsYUFBVTtRQUNsQ3RELENBQUMsQ0FBQ0csS0FBSSxDQUFDLENBQUNrQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM2QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM1QixJQUFJLENBQUNBLElBQUksQ0FBQztNQUMxRDtNQUVBLElBQUksQ0FBQ0gsSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDZnBCLENBQUMsQ0FBQ0csS0FBSSxDQUFDLENBQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNuRFQsMkNBQWMsQ0FBQywwQ0FBMEMsQ0FBQztNQUM5RDtJQUNKLENBQUMsQ0FBQyxDQUNEeUIsSUFBSSxDQUFDLFVBQVVDLEtBQUssRUFBRUMsVUFBVSxFQUFFO01BQy9CO01BQ0E7TUFDQTtNQUNBMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUNDLFdBQVcsQ0FBQyxRQUFRLENBQUM7TUFDbkRULHlDQUFZLENBQUMseUNBQXlDLENBQUM7SUFDM0QsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUM1REYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xpc3RlLWRlLWxlY3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VyaWUtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG4vL0ltcG9ydCBkZSBmaWNoaWVyIGpzIHBlcnNvLlxyXG5pbXBvcnQgJy4vanMvbmF2YmFyLmpzJztcclxuaW1wb3J0ICcuL2pzL3NlcmllLWxpc3QuanMnO1xyXG5pbXBvcnQgJy4vanMvbGlzdGUtZGUtbGVjdHVyZS5qcyc7XHJcblxyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsImltcG9ydCAqIGFzIHRvYXN0ciBmcm9tICd0b2FzdHInO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy90b2FzdHIvYnVpbGQvdG9hc3RyLm1pbi5jc3MnOyBcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgICQoJy5yZW1vdmUtZnJvbS1saXN0LXRyaWdnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBsZXQgaWRTZXJpZSA9ICQodGhpcykuYXR0cignZGF0YS1zZXJpZUlkJyk7XHJcbiAgICAgICAgbGV0IGlkTGlzdGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGlzdGVJZCcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke2pzRGF0YS51cmxzLnJlbW92ZUZyb21MaXN0fS8ke2lkfWApO1xyXG4gICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7anNEYXRhLnVybHMucmVtb3ZlRnJvbUxpc3R9LyR7aWRTZXJpZX0vJHtpZExpc3RlfWAsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBzdWNjw6hzIGRlIGxhIHJlcXXDqnRlIGFzeW5jaHJvbmU6XHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyggXCJhamF4IHN1Y2Nlc3NcIiApO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmJvb2tDYXJkJykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcygnU8OpcmllIGNvcnJlY3RlbWVudCBzdXBwcmltw6llIGRlIHZvdHJlIGxpc3RlLi4uJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzcC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoJy5jYXJkLXNwaW5uZXInKS50b2dnbGVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZygnVW5lIGVycmV1ciBpbmF0dGVuZHVlIHNcXCdlc3QgcHJvZHVpdGUuLi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzKSB7XHJcbiAgICAgICAgICAgIC8vIMOpY2hlYyBkZSBsYSByZXF1w6p0ZSBhc3luY2hyb25lOlxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJSZXF1ZXN0IGZhaWxlZDogXCIgKyB0ZXh0U3RhdHVzICk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpxWEhSKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcuY2FyZC1zcGlubmVyJykudG9nZ2xlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ1VuZSBlcnJldXIgZGUgcsOpc2VhdSBzXFwnZXN0IHByb2R1aXRlLi4uJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSlcclxuIiwiJChmdW5jdGlvbigpe1xyXG4gIFxyXG4gIGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuICBjb25zdCBuYXZMaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2bGlua3MtY29udGFpbmVyXCIpO1xyXG4gIFxyXG4gIGNvbnN0IHRvZ2dsZU5hdiA9IGUgPT4ge1xyXG4gICAgLy8gQW5pbWF0aW9uIGR1IGJvdXRvblxyXG4gICAgdG9nZ2xlci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICBcclxuICAgIGNvbnN0IGFyaWFUb2dnbGUgPVxyXG4gICAgICB0b2dnbGVyLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwidHJ1ZVwiID8gXCJmYWxzZVwiIDogXCJ0cnVlXCI7XHJcbiAgICB0b2dnbGVyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgYXJpYVRvZ2dsZSk7XHJcbiAgXHJcbiAgICAvLyBTbGlkZSBkZSBsYSBuYXZpZ2F0aW9uXHJcbiAgICBuYXZMaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICB9O1xyXG4gIFxyXG4gIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5hdik7XHJcbiAgXHJcbiAgXHJcbiAgbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgaWYgKGVudHJpZXNbMF0uY29udGVudFJlY3Qud2lkdGggPD0gOTAwKXtcclxuICAgICAgbmF2TGlua3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuNHMgZWFzZS1vdXRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdkxpbmtzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9KS5vYnNlcnZlKGRvY3VtZW50LmJvZHkpXHJcbiAgfSkiLCJpbXBvcnQgKiBhcyB0b2FzdHIgZnJvbSAndG9hc3RyJztcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvdG9hc3RyL2J1aWxkL3RvYXN0ci5taW4uY3NzJzsgXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZmxpcC1pdC10cmlnZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLmFkZENsYXNzKCdmbGlwLWl0Jyk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJy5mbGlwLWJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLnRvZ2dsZUNsYXNzKCdmbGlwLWl0Jyk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAkKCcuYm9va0NhcmQnKS5yZW1vdmVDbGFzcygnZmxpcC1pdCcpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKCcuYWRkLXRvLWxpc3QnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBsZXQgaWRTZXJpZSA9ICQodGhpcykuYXR0cignZGF0YS1pZFNlcmllJyk7XHJcbiAgICAgICAgbGV0IGlkTGlzdGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWRMaXN0ZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygnLmJvb2tDYXJkJykuZmluZCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2pzRGF0YS51cmxzLmFkZFRvTGlzdH0vJHtpZFNlcmllfS8ke2lkTGlzdGV9YCxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5kb25lKChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHN1Y2PDqHMgZGUgbGEgcmVxdcOqdGUgYXN5bmNocm9uZTpcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKCBcImFqYXggc3VjY2Vzc1wiICk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3ApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ1PDqXJpZSBjb3JyZWN0ZW1lbnQgcmFqb3V0w6llIMOgIHZvdHJlIGxpc3RlLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLmZpbmQoJy5jYXJkLXNwaW5uZXInKS50b2dnbGVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLmZpbmQoJy5mbGlwLWl0LXRyaWdnZXInKS5maW5kKCdzcGFuJykudGV4dCgnbW9yZV9ob3JpeicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSAnJztcclxuICAgICAgICAgICAgICAgIGh0bWwgPSAnPGg1IGNsYXNzPVwidGV4dC1jZW50ZXIgbWItNCB0ZXh0LWRlY29yYXRpb24tdW5kZXJsaW5lIFwiPkNldHRlIHPDqXJpZSBhIGTDqWrDoCDDqXTDqSBham91dMOpZSDDoCA6PC9oNT4nO1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBgPHA+LSBgO1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBgPGEgY2xhc3M9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZSB0ZXh0LXdoaXRlIGxuay11bmRybGluZSBmcy00XCIgIGA7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGBocmVmPVwiJHtqc0RhdGEudXJscy5lZGl0TGlzdH0vJHtpZExpc3RlfVwiPmA7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGAke3Jlc3Aubm9tTGlzdGV9PC9hPjwvcD5gO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuYm9va0NhcmQnKS5maW5kKCcuYWRkZWQnKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3Auc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcuY2FyZC1zcGlubmVyJykudG9nZ2xlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ1VuZSBlcnJldXIgaW5hdHRlbmR1ZSBzXFwnZXN0IHByb2R1aXRlLi4uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cykge1xyXG4gICAgICAgICAgICAvLyDDqWNoZWMgZGUgbGEgcmVxdcOqdGUgYXN5bmNocm9uZTpcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIFwiUmVxdWVzdCBmYWlsZWQ6IFwiICsgdGV4dFN0YXR1cyApO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhqcVhIUik7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKCdVbmUgZXJyZXVyIGRlIHLDqXNlYXUgc1xcJ2VzdCBwcm9kdWl0ZS4uLicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJ0b2FzdHIiLCIkIiwib24iLCJlIiwiX3RoaXMiLCJpZFNlcmllIiwiYXR0ciIsImlkTGlzdGUiLCJuZXh0IiwidG9nZ2xlQ2xhc3MiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiY29uY2F0IiwianNEYXRhIiwidXJscyIsInJlbW92ZUZyb21MaXN0IiwiZGF0YSIsImRhdGFUeXBlIiwiZG9uZSIsInJlc3AiLCJzdWNjZXNzIiwicGFyZW50cyIsImh0bWwiLCJ3YXJuaW5nIiwiZmFpbCIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yIiwidG9nZ2xlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdkxpbmtzQ29udGFpbmVyIiwidG9nZ2xlTmF2IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYXJpYVRvZ2dsZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJjb250ZW50UmVjdCIsIndpZHRoIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwib2JzZXJ2ZSIsImJvZHkiLCJzdG9wUHJvcGFnYXRpb24iLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZmluZCIsImFkZFRvTGlzdCIsInRleHQiLCJlZGl0TGlzdCIsIm5vbUxpc3RlIl0sInNvdXJjZVJvb3QiOiIifQ==