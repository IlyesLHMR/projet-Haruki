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
/* harmony import */ var _js_article_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/article.js */ "./assets/js/article.js");
/* harmony import */ var _js_article_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_article_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_carroussel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/carroussel.js */ "./assets/js/carroussel.js");
/* harmony import */ var _js_carroussel_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_carroussel_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
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

/***/ "./assets/js/article.js":
/*!******************************!*\
  !*** ./assets/js/article.js ***!
  \******************************/
/***/ (() => {

function confirmDelete(event) {
  var confirmed = confirm("Êtes-vous sûr de vouloir supprimer votre compte ?");
  if (!confirmed) {
    event.preventDefault();
    return false;
  }
  var confirmDeleteCheckbox = document.getElementById('confirmDeleteCheckbox');
  if (!confirmDeleteCheckbox.checked) {
    event.preventDefault();
    alert("Veuillez confirmer que cette action est irréversible en cochant la checkbox.");
    return false;
  }
}

/***/ }),

/***/ "./assets/js/carroussel.js":
/*!*********************************!*\
  !*** ./assets/js/carroussel.js ***!
  \*********************************/
/***/ (() => {

$('.owl-carousel').owlCarousel({
  center: true,
  loop: true,
  nav: true,
  items: 5,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    990: {
      items: 5
    }
  },
  onInitialized: coverFlowEfx,
  onTranslate: coverFlowEfx
});
function coverFlowEfx(e) {
  if ($('.owl-dots')) {
    $('.owl-dots').remove();
  }
  idx = e.item.index;
  $('.owl-item.big').removeClass('big');
  $('.owl-item.medium').removeClass('medium');
  $('.owl-item.mdright').removeClass('mdright');
  $('.owl-item.mdleft').removeClass('mdleft');
  $('.owl-item.smallRight').removeClass('smallRight');
  $('.owl-item.smallLeft').removeClass('smallLeft');
  $('.owl-item').eq(idx - 1).addClass('medium mdleft');
  $('.owl-item').eq(idx).addClass('big');
  $('.owl-item').eq(idx + 1).addClass('medium mdright');
  $('.owl-item').eq(idx + 2).addClass('smallRight');
  $('.owl-item').eq(idx - 2).addClass('smallLeft');
}
var click = false;
$('#play-carousel').click(function (evt) {
  click = !click;
  if (click) {
    $('.status').html('Autoplay: ON');
    $('.owl-carousel').trigger('play.owl.autoplay', [1000, 1000]);
    $(this).html("Stop");
  } else {
    $('.owl-carousel').trigger('stop.owl.autoplay');
    $(this).html("Play");
    $('.status').html('Autoplay: OFF');
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzZCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLFFBQVEsQ0FBQztNQUNuRFAseUNBQVksQ0FBQyx5Q0FBeUMsQ0FBQztJQUMzRCxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzVERiIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2Fycm91c3NlbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGlzdGUtZGUtbGVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXJpZS1saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vSW1wb3J0IGRlIGZpY2hpZXIganMgcGVyc28uXHJcbmltcG9ydCAnLi9qcy9uYXZiYXIuanMnO1xyXG5pbXBvcnQgJy4vanMvc2VyaWUtbGlzdC5qcyc7XHJcbmltcG9ydCAnLi9qcy9saXN0ZS1kZS1sZWN0dXJlLmpzJztcclxuaW1wb3J0ICcuL2pzL2FydGljbGUuanMnO1xyXG5pbXBvcnQgJy4vanMvY2Fycm91c3NlbC5qcyc7XHJcblxyXG5cclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJzsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCJmdW5jdGlvbiBjb25maXJtRGVsZXRlKGV2ZW50KSB7XHJcbiAgY29uc3QgY29uZmlybWVkID0gY29uZmlybShcIsOKdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIHN1cHByaW1lciB2b3RyZSBjb21wdGUgP1wiKTtcclxuXHJcbiAgaWYgKCFjb25maXJtZWQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29uZmlybURlbGV0ZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1EZWxldGVDaGVja2JveCcpO1xyXG5cclxuICBpZiAoIWNvbmZpcm1EZWxldGVDaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGFsZXJ0KFwiVmV1aWxsZXogY29uZmlybWVyIHF1ZSBjZXR0ZSBhY3Rpb24gZXN0IGlycsOpdmVyc2libGUgZW4gY29jaGFudCBsYSBjaGVja2JveC5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0iLCIkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgY2VudGVyOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdjogdHJ1ZSxcclxuICAgIGl0ZW1zOiA1LFxyXG4gICAgbmF2VGV4dDogWyc8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+JywnPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4nXSxcclxuICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAwOntcclxuICAgICAgICBpdGVtczogMixcclxuICAgICAgfSxcclxuICAgICAgNzY4OntcclxuICAgICAgICBpdGVtczogMyxcclxuICAgICAgfSxcclxuICAgICAgOTkwOntcclxuICAgICAgICBpdGVtczogNSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uSW5pdGlhbGl6ZWQ6IGNvdmVyRmxvd0VmeCxcclxuICAgIG9uVHJhbnNsYXRlOiBjb3ZlckZsb3dFZngsXHJcbiAgfSk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gY292ZXJGbG93RWZ4KGUpe1xyXG4gICAgaWYgKCQoJy5vd2wtZG90cycpKSB7XHJcbiAgICAgICQoJy5vd2wtZG90cycpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgaWR4ID0gZS5pdGVtLmluZGV4O1xyXG4gICAgJCgnLm93bC1pdGVtLmJpZycpLnJlbW92ZUNsYXNzKCdiaWcnKTtcclxuICAgICQoJy5vd2wtaXRlbS5tZWRpdW0nKS5yZW1vdmVDbGFzcygnbWVkaXVtJyk7XHJcbiAgICAkKCcub3dsLWl0ZW0ubWRyaWdodCcpLnJlbW92ZUNsYXNzKCdtZHJpZ2h0Jyk7XHJcbiAgICAkKCcub3dsLWl0ZW0ubWRsZWZ0JykucmVtb3ZlQ2xhc3MoJ21kbGVmdCcpO1xyXG4gICAgJCgnLm93bC1pdGVtLnNtYWxsUmlnaHQnKS5yZW1vdmVDbGFzcygnc21hbGxSaWdodCcpO1xyXG4gICAgJCgnLm93bC1pdGVtLnNtYWxsTGVmdCcpLnJlbW92ZUNsYXNzKCdzbWFsbExlZnQnKTtcclxuICAgICQoJy5vd2wtaXRlbScpLmVxKGlkeCAtMSkuYWRkQ2xhc3MoJ21lZGl1bSBtZGxlZnQnKTtcclxuICAgICQoJy5vd2wtaXRlbScpLmVxKGlkeCkuYWRkQ2xhc3MoJ2JpZycpO1xyXG4gICAgJCgnLm93bC1pdGVtJykuZXEoaWR4ICsgMSkuYWRkQ2xhc3MoJ21lZGl1bSBtZHJpZ2h0Jyk7XHJcbiAgICAkKCcub3dsLWl0ZW0nKS5lcShpZHggKyAyKS5hZGRDbGFzcygnc21hbGxSaWdodCcpO1xyXG4gICAgJCgnLm93bC1pdGVtJykuZXEoaWR4IC0gMikuYWRkQ2xhc3MoJ3NtYWxsTGVmdCcpO1xyXG4gIH1cclxuICBcclxuICB2YXIgY2xpY2sgPSBmYWxzZTtcclxuICBcclxuICAkKCcjcGxheS1jYXJvdXNlbCcpLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgY2xpY2sgPSAhY2xpY2s7XHJcbiAgICBpZihjbGljayl7XHJcbiAgICAgICQoJy5zdGF0dXMnKS5odG1sKCdBdXRvcGxheTogT04nKTtcclxuICAgICAgJCgnLm93bC1jYXJvdXNlbCcpLnRyaWdnZXIoJ3BsYXkub3dsLmF1dG9wbGF5JywgWzEwMDAsIDEwMDBdKTtcclxuICAgICAgJCh0aGlzKS5odG1sKFwiU3RvcFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5vd2wtY2Fyb3VzZWwnKS50cmlnZ2VyKCdzdG9wLm93bC5hdXRvcGxheScpO1xyXG4gICAgICAkKHRoaXMpLmh0bWwoXCJQbGF5XCIpO1xyXG4gICAgICAkKCcuc3RhdHVzJykuaHRtbCgnQXV0b3BsYXk6IE9GRicpO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0pOyIsImltcG9ydCAqIGFzIHRvYXN0ciBmcm9tICd0b2FzdHInO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy90b2FzdHIvYnVpbGQvdG9hc3RyLm1pbi5jc3MnOyBcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgICQoJy5yZW1vdmUtZnJvbS1saXN0LXRyaWdnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBsZXQgaWRTZXJpZSA9ICQodGhpcykuYXR0cignZGF0YS1zZXJpZUlkJyk7XHJcbiAgICAgICAgbGV0IGlkTGlzdGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGlzdGVJZCcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke2pzRGF0YS51cmxzLnJlbW92ZUZyb21MaXN0fS8ke2lkfWApO1xyXG4gICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7anNEYXRhLnVybHMucmVtb3ZlRnJvbUxpc3R9LyR7aWRTZXJpZX0vJHtpZExpc3RlfWAsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBzdWNjw6hzIGRlIGxhIHJlcXXDqnRlIGFzeW5jaHJvbmU6XHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyggXCJhamF4IHN1Y2Nlc3NcIiApO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmJvb2tDYXJkJykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcygnU8OpcmllIGNvcnJlY3RlbWVudCBzdXBwcmltw6llIGRlIHZvdHJlIGxpc3RlLi4uJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzcC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoJy5jYXJkLXNwaW5uZXInKS50b2dnbGVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZygnVW5lIGVycmV1ciBpbmF0dGVuZHVlIHNcXCdlc3QgcHJvZHVpdGUuLi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzKSB7XHJcbiAgICAgICAgICAgIC8vIMOpY2hlYyBkZSBsYSByZXF1w6p0ZSBhc3luY2hyb25lOlxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJSZXF1ZXN0IGZhaWxlZDogXCIgKyB0ZXh0U3RhdHVzICk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpxWEhSKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcuY2FyZC1zcGlubmVyJykudG9nZ2xlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ1VuZSBlcnJldXIgZGUgcsOpc2VhdSBzXFwnZXN0IHByb2R1aXRlLi4uJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSlcclxuIiwiJChmdW5jdGlvbigpe1xyXG4gIFxyXG4gIGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuICBjb25zdCBuYXZMaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2bGlua3MtY29udGFpbmVyXCIpO1xyXG4gIFxyXG4gIGNvbnN0IHRvZ2dsZU5hdiA9IGUgPT4ge1xyXG4gICAgLy8gQW5pbWF0aW9uIGR1IGJvdXRvblxyXG4gICAgdG9nZ2xlci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICBcclxuICAgIGNvbnN0IGFyaWFUb2dnbGUgPVxyXG4gICAgICB0b2dnbGVyLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwidHJ1ZVwiID8gXCJmYWxzZVwiIDogXCJ0cnVlXCI7XHJcbiAgICB0b2dnbGVyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgYXJpYVRvZ2dsZSk7XHJcbiAgXHJcbiAgICAvLyBTbGlkZSBkZSBsYSBuYXZpZ2F0aW9uXHJcbiAgICBuYXZMaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICB9O1xyXG4gIFxyXG4gIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5hdik7XHJcbiAgXHJcbiAgXHJcbiAgbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgaWYgKGVudHJpZXNbMF0uY29udGVudFJlY3Qud2lkdGggPD0gOTAwKXtcclxuICAgICAgbmF2TGlua3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuNHMgZWFzZS1vdXRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdkxpbmtzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9KS5vYnNlcnZlKGRvY3VtZW50LmJvZHkpXHJcbiAgfSkiLCJpbXBvcnQgKiBhcyB0b2FzdHIgZnJvbSAndG9hc3RyJztcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvdG9hc3RyL2J1aWxkL3RvYXN0ci5taW4uY3NzJzsgXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZmxpcC1pdC10cmlnZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLmFkZENsYXNzKCdmbGlwLWl0Jyk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJy5mbGlwLWJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLnRvZ2dsZUNsYXNzKCdmbGlwLWl0Jyk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAkKCcuYm9va0NhcmQnKS5yZW1vdmVDbGFzcygnZmxpcC1pdCcpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKCcuYWRkLXRvLWxpc3QnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBsZXQgaWRTZXJpZSA9ICQodGhpcykuYXR0cignZGF0YS1pZFNlcmllJyk7XHJcbiAgICAgICAgbGV0IGlkTGlzdGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWRMaXN0ZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygnLmJvb2tDYXJkJykuZmluZCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2pzRGF0YS51cmxzLmFkZFRvTGlzdH0vJHtpZFNlcmllfS8ke2lkTGlzdGV9YCxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5kb25lKChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHN1Y2PDqHMgZGUgbGEgcmVxdcOqdGUgYXN5bmNocm9uZTpcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKCBcImFqYXggc3VjY2Vzc1wiICk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3ApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ1PDqXJpZSBjb3JyZWN0ZW1lbnQgcmFqb3V0w6llIMOgIHZvdHJlIGxpc3RlLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLmZpbmQoJy5jYXJkLXNwaW5uZXInKS50b2dnbGVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLmZpbmQoJy5mbGlwLWl0LXRyaWdnZXInKS5maW5kKCdzcGFuJykudGV4dCgnbW9yZV9ob3JpeicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSAnJztcclxuICAgICAgICAgICAgICAgIGh0bWwgPSAnPGg1IGNsYXNzPVwidGV4dC1jZW50ZXIgbWItNCB0ZXh0LWRlY29yYXRpb24tdW5kZXJsaW5lIFwiPkNldHRlIHPDqXJpZSBhIGTDqWrDoCDDqXTDqSBham91dMOpZSDDoCA6PC9oNT4nO1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBgPHA+LSBgO1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBgPGEgY2xhc3M9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZSB0ZXh0LXdoaXRlIGxuay11bmRybGluZSBmcy00XCIgIGA7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGBocmVmPVwiJHtqc0RhdGEudXJscy5lZGl0TGlzdH0vJHtpZExpc3RlfVwiPmA7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGAke3Jlc3Aubm9tTGlzdGV9PC9hPjwvcD5gO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuYm9va0NhcmQnKS5maW5kKCcuYWRkZWQnKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3Auc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcuY2FyZC1zcGlubmVyJykudG9nZ2xlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ1VuZSBlcnJldXIgaW5hdHRlbmR1ZSBzXFwnZXN0IHByb2R1aXRlLi4uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cykge1xyXG4gICAgICAgICAgICAvLyDDqWNoZWMgZGUgbGEgcmVxdcOqdGUgYXN5bmNocm9uZTpcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIFwiUmVxdWVzdCBmYWlsZWQ6IFwiICsgdGV4dFN0YXR1cyApO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhqcVhIUik7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKCdVbmUgZXJyZXVyIGRlIHLDqXNlYXUgc1xcJ2VzdCBwcm9kdWl0ZS4uLicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJjb25maXJtRGVsZXRlIiwiZXZlbnQiLCJjb25maXJtZWQiLCJjb25maXJtIiwicHJldmVudERlZmF1bHQiLCJjb25maXJtRGVsZXRlQ2hlY2tib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsImFsZXJ0IiwiJCIsIm93bENhcm91c2VsIiwiY2VudGVyIiwibG9vcCIsIm5hdiIsIml0ZW1zIiwibmF2VGV4dCIsInJlc3BvbnNpdmUiLCJvbkluaXRpYWxpemVkIiwiY292ZXJGbG93RWZ4Iiwib25UcmFuc2xhdGUiLCJlIiwicmVtb3ZlIiwiaWR4IiwiaXRlbSIsImluZGV4IiwicmVtb3ZlQ2xhc3MiLCJlcSIsImFkZENsYXNzIiwiY2xpY2siLCJldnQiLCJodG1sIiwidHJpZ2dlciIsInRvYXN0ciIsIm9uIiwiX3RoaXMiLCJpZFNlcmllIiwiYXR0ciIsImlkTGlzdGUiLCJuZXh0IiwidG9nZ2xlQ2xhc3MiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiY29uY2F0IiwianNEYXRhIiwidXJscyIsInJlbW92ZUZyb21MaXN0IiwiZGF0YSIsImRhdGFUeXBlIiwiZG9uZSIsInJlc3AiLCJzdWNjZXNzIiwicGFyZW50cyIsIndhcm5pbmciLCJmYWlsIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3IiLCJ0b2dnbGVyIiwicXVlcnlTZWxlY3RvciIsIm5hdkxpbmtzQ29udGFpbmVyIiwidG9nZ2xlTmF2IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYXJpYVRvZ2dsZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJjb250ZW50UmVjdCIsIndpZHRoIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwib2JzZXJ2ZSIsImJvZHkiLCJzdG9wUHJvcGFnYXRpb24iLCJmaW5kIiwiYWRkVG9MaXN0IiwidGV4dCIsImVkaXRMaXN0Iiwibm9tTGlzdGUiXSwic291cmNlUm9vdCI6IiJ9