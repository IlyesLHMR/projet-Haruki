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

// Importe la bibliothèque Toastr pour afficher des messages d'alerte.


// Importe le fichier CSS de Toastr depuis le dossier node_modules.


// Cette fonction est exécutée lorsque le document est prêt (DOM est chargé).
$(function () {
  // Attache un gestionnaire d'événement "click" à tous les éléments ayant la classe "remove-from-list-trigger".
  $('.remove-from-list-trigger').on('click', function (e) {
    var _this = this;
    // Récupère les attributs "data-serieId" et "data-listeId" de l'élément cliqué.
    var idSerie = $(this).attr('data-serieId');
    var idListe = $(this).attr('data-listeId');

    // Cache ou affiche le spinner de chargement en fonction de son état actuel.
    $(this).next('.card-spinner').toggleClass('d-none');

    // Effectue une requête asynchrone de type GET vers l'URL spécifiée en utilisant les identifiants récupérés.
    $.ajax({
      method: "GET",
      url: "".concat(jsData.urls.removeFromList, "/").concat(idSerie, "/").concat(idListe),
      data: {},
      dataType: "json"
    }).done(function (resp) {
      // Succès de la requête asynchrone :
      if (resp.success) {
        // Cache le spinner de chargement.
        $(_this).next('.card-spinner').toggleClass('d-none');
        // Supprime l'élément parent avec la classe "bookCard" de l'élément cliqué.
        $(_this).parents('.bookCard').html('');
        // Affiche un message de succès à l'aide de Toastr.
        toastr__WEBPACK_IMPORTED_MODULE_1__.success('Série correctement supprimée de votre liste...');
      }

      // Si la requête n'a pas réussi :
      if (!resp.success) {
        // Cache le spinner de chargement.
        $(_this).next('.card-spinner').toggleClass('d-none');
        // Affiche un message d'avertissement à l'aide de Toastr.
        toastr__WEBPACK_IMPORTED_MODULE_1__.warning('Une erreur inattendue s\'est produite...');
      }
    }).fail(function (jqXHR, textStatus) {
      // Échec de la requête asynchrone :
      // Cache le spinner de chargement.
      $(this).next('.card-spinner').toggleClass('d-none');
      // Affiche un message d'erreur à l'aide de Toastr.
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

// Cette fonction est exécutée lorsque le document est prêt (DOM est chargé).
$(function () {
  // Sélectionne l'élément avec la classe "hamburger" (bouton de menu) et l'élément avec la classe "navlinks-container" (conteneur des liens de navigation).
  var toggler = document.querySelector(".hamburger");
  var navLinksContainer = document.querySelector(".navlinks-container");

  // Fonction qui permet de basculer l'état du menu de navigation (ouvert ou fermé) lors du clic sur le bouton.
  var toggleNav = function toggleNav(e) {
    // Animation du bouton : Ajoute ou supprime la classe "open" pour afficher ou masquer la transformation du bouton hamburger en croix.
    toggler.classList.toggle("open");

    // Récupère l'attribut "aria-expanded" du bouton hamburger et le modifie pour refléter l'état du menu de navigation.
    var ariaToggle = toggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    toggler.setAttribute("aria-expanded", ariaToggle);

    // Slide de la navigation : Ajoute ou supprime la classe "open" pour afficher ou masquer le conteneur des liens de navigation.
    navLinksContainer.classList.toggle("open");
  };

  // Ajoute un gestionnaire d'événement "click" au bouton hamburger pour déclencher la fonction toggleNav lorsqu'il est cliqué.
  toggler.addEventListener("click", toggleNav);

  // Utilise ResizeObserver pour détecter les changements de taille de la fenêtre et ajuster la transition du menu de navigation en fonction de la largeur.
  new ResizeObserver(function (entries) {
    // Vérifie si la largeur de la fenêtre est inférieure ou égale à 900 pixels.
    if (entries[0].contentRect.width <= 900) {
      // Si la condition est vraie, ajoute une transition au conteneur des liens de navigation pour une animation fluide.
      navLinksContainer.style.transition = "transform 0.4s ease-out";
    } else {
      // Sinon, supprime la transition pour une apparence instantanée sans animation.
      navLinksContainer.style.transition = "none";
    }
  }).observe(document.body); // Observe les changements de taille de la fenêtre en ciblant le corps du document.
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






// Cette fonction est exécutée lorsque le document est prêt (DOM est chargé).
$(function () {
  // Gère le clic sur l'élément avec la classe "flip-it-trigger" (icône pour retourner la carte).
  $('.flip-it-trigger').on('click', function (e) {
    // Empêche la propagation de l'événement pour éviter que le clic se propage aux éléments parents.
    e.stopPropagation();
    // Ajoute la classe "flip-it" à l'élément parent avec la classe "bookCard" pour retourner la carte.
    $(this).parents('.bookCard').addClass('flip-it');
  });

  // Gère le clic sur l'élément avec la classe "flip-back" (icône pour retourner la carte à l'état initial).
  $('.flip-back').on('click', function (e) {
    // Ajoute ou supprime la classe "flip-it" à l'élément parent avec la classe "bookCard" pour retourner ou afficher la face avant de la carte.
    $(this).parents('.bookCard').toggleClass('flip-it');
  });

  // Gère le clic sur le corps du document.
  $('body').on('click', function (e) {
    // Supprime la classe "flip-it" de tous les éléments avec la classe "bookCard", ce qui remet les cartes à l'état initial.
    $('.bookCard').removeClass('flip-it');
  });

  // Gère le clic sur l'élément avec la classe "add-to-list" (icône pour ajouter la série à une liste).
  $('.add-to-list').on('click', function (e) {
    var _this = this;
    // Récupère les attributs "data-idSerie" et "data-idListe" de l'élément cliqué.
    var idSerie = $(this).attr('data-idSerie');
    var idListe = $(this).attr('data-idListe');
    // Trouve l'élément parent avec la classe "bookCard" et recherche l'élément avec la classe "card-spinner" pour afficher/masquer le spinner de chargement.
    $(this).parents('.bookCard').find('.card-spinner').toggleClass('d-none');

    // Effectue une requête asynchrone de type GET vers l'URL spécifiée en utilisant les identifiants récupérés.
    $.ajax({
      method: "GET",
      url: "".concat(jsData.urls.addToList, "/").concat(idSerie, "/").concat(idListe),
      data: {},
      dataType: "json"
    }).done(function (resp) {
      // Si la requête a réussi :
      if (resp.success) {
        // Affiche un message de succès à l'aide de Toastr.
        toastr__WEBPACK_IMPORTED_MODULE_3__.success('Série correctement rajoutée à votre liste...');
        // Cache le spinner de chargement.
        $(_this).parents('.bookCard').find('.card-spinner').toggleClass('d-none');
        // Trouve l'élément parent avec la classe "bookCard" et recherche l'élément avec la classe "flip-it-trigger" et met à jour le texte de l'icône.
        $(_this).parents('.bookCard').find('.flip-it-trigger').find('span').text('more_horiz');
        // Génère le HTML pour afficher les détails de la liste à laquelle la série a été ajoutée.
        var html = '';
        html = '<h5 class="text-center mb-4 text-decoration-underline ">Cette série a déjà été ajoutée à :</h5>';
        html += "<p>- ";
        html += "<a class=\"text-decoration-none text-white lnk-undrline fs-4\"  ";
        html += "href=\"".concat(jsData.urls.editList, "/").concat(idListe, "\">");
        html += "".concat(resp.nomListe, "</a></p>");
        // Met à jour le contenu de l'élément avec la classe "added" avec le HTML généré.
        $(_this).parents('.bookCard').find('.added').html(html);
      }

      // Si la requête a échoué :
      if (!resp.success) {
        // Cache le spinner de chargement.
        $(_this).next('.card-spinner').toggleClass('d-none');
        // Affiche un message d'avertissement à l'aide de Toastr.
        toastr__WEBPACK_IMPORTED_MODULE_3__.warning('Une erreur inattendue s\'est produite...');
      }
    }).fail(function (jqXHR, textStatus) {
      // Si la requête a échoué en raison d'un problème de réseau :
      // Cache le spinner de chargement.
      $(this).next('.card-spinner').toggleClass('d-none');
      // Affiche un message d'erreur à l'aide de Toastr.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxDQUFDO1FBQ3JGO1FBQ0EsSUFBSTlCLElBQUksR0FBRyxFQUFFO1FBQ2JBLElBQUksR0FBRyxpR0FBaUc7UUFDeEdBLElBQUksV0FBVztRQUNmQSxJQUFJLHNFQUFvRTtRQUN4RUEsSUFBSSxjQUFBVixNQUFBLENBQWFDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDdUMsUUFBUSxPQUFBekMsTUFBQSxDQUFJTixPQUFPLFFBQUk7UUFDcERnQixJQUFJLE9BQUFWLE1BQUEsQ0FBT08sSUFBSSxDQUFDbUMsUUFBUSxhQUFVO1FBQ2xDO1FBQ0F0RCxDQUFDLENBQUNHLEtBQUksQ0FBQyxDQUFDa0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDNkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDNUIsSUFBSSxDQUFDQSxJQUFJLENBQUM7TUFDMUQ7O01BRUE7TUFDQSxJQUFJLENBQUNILElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ2Y7UUFDQXBCLENBQUMsQ0FBQ0csS0FBSSxDQUFDLENBQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNuRDtRQUNBVCwyQ0FBYyxDQUFDLDBDQUEwQyxDQUFDO01BQzlEO0lBQ0osQ0FBQyxDQUFDLENBQ0R5QixJQUFJLENBQUMsVUFBVUMsS0FBSyxFQUFFQyxVQUFVLEVBQUU7TUFDL0I7TUFDQTtNQUNBMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUNDLFdBQVcsQ0FBQyxRQUFRLENBQUM7TUFDbkQ7TUFDQVQseUNBQVksQ0FBQyx5Q0FBeUMsQ0FBQztJQUMzRCxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzdFRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGlzdGUtZGUtbGVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXJpZS1saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vSW1wb3J0IGRlIGZpY2hpZXIganMgcGVyc28uXHJcbmltcG9ydCAnLi9qcy9uYXZiYXIuanMnO1xyXG5pbXBvcnQgJy4vanMvc2VyaWUtbGlzdC5qcyc7XHJcbmltcG9ydCAnLi9qcy9saXN0ZS1kZS1sZWN0dXJlLmpzJztcclxuXHJcblxyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIi8vIEltcG9ydGUgbGEgYmlibGlvdGjDqHF1ZSBUb2FzdHIgcG91ciBhZmZpY2hlciBkZXMgbWVzc2FnZXMgZCdhbGVydGUuXHJcbmltcG9ydCAqIGFzIHRvYXN0ciBmcm9tICd0b2FzdHInO1xyXG5cclxuLy8gSW1wb3J0ZSBsZSBmaWNoaWVyIENTUyBkZSBUb2FzdHIgZGVwdWlzIGxlIGRvc3NpZXIgbm9kZV9tb2R1bGVzLlxyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy90b2FzdHIvYnVpbGQvdG9hc3RyLm1pbi5jc3MnOyBcclxuXHJcbi8vIENldHRlIGZvbmN0aW9uIGVzdCBleMOpY3V0w6llIGxvcnNxdWUgbGUgZG9jdW1lbnQgZXN0IHByw6p0IChET00gZXN0IGNoYXJnw6kpLlxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBBdHRhY2hlIHVuIGdlc3Rpb25uYWlyZSBkJ8OpdsOpbmVtZW50IFwiY2xpY2tcIiDDoCB0b3VzIGxlcyDDqWzDqW1lbnRzIGF5YW50IGxhIGNsYXNzZSBcInJlbW92ZS1mcm9tLWxpc3QtdHJpZ2dlclwiLlxyXG4gICAgJCgnLnJlbW92ZS1mcm9tLWxpc3QtdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIC8vIFLDqWN1cMOocmUgbGVzIGF0dHJpYnV0cyBcImRhdGEtc2VyaWVJZFwiIGV0IFwiZGF0YS1saXN0ZUlkXCIgZGUgbCfDqWzDqW1lbnQgY2xpcXXDqS5cclxuICAgICAgICBsZXQgaWRTZXJpZSA9ICQodGhpcykuYXR0cignZGF0YS1zZXJpZUlkJyk7XHJcbiAgICAgICAgbGV0IGlkTGlzdGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGlzdGVJZCcpO1xyXG5cclxuICAgICAgICAvLyBDYWNoZSBvdSBhZmZpY2hlIGxlIHNwaW5uZXIgZGUgY2hhcmdlbWVudCBlbiBmb25jdGlvbiBkZSBzb24gw6l0YXQgYWN0dWVsLlxyXG4gICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBFZmZlY3R1ZSB1bmUgcmVxdcOqdGUgYXN5bmNocm9uZSBkZSB0eXBlIEdFVCB2ZXJzIGwnVVJMIHNww6ljaWZpw6llIGVuIHV0aWxpc2FudCBsZXMgaWRlbnRpZmlhbnRzIHLDqWN1cMOpcsOpcy5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7anNEYXRhLnVybHMucmVtb3ZlRnJvbUxpc3R9LyR7aWRTZXJpZX0vJHtpZExpc3RlfWAsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBTdWNjw6hzIGRlIGxhIHJlcXXDqnRlIGFzeW5jaHJvbmUgOlxyXG4gICAgICAgICAgICBpZiAocmVzcC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYWNoZSBsZSBzcGlubmVyIGRlIGNoYXJnZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoJy5jYXJkLXNwaW5uZXInKS50b2dnbGVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwcmltZSBsJ8OpbMOpbWVudCBwYXJlbnQgYXZlYyBsYSBjbGFzc2UgXCJib29rQ2FyZFwiIGRlIGwnw6lsw6ltZW50IGNsaXF1w6kuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWZmaWNoZSB1biBtZXNzYWdlIGRlIHN1Y2PDqHMgw6AgbCdhaWRlIGRlIFRvYXN0ci5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdTw6lyaWUgY29ycmVjdGVtZW50IHN1cHByaW3DqWUgZGUgdm90cmUgbGlzdGUuLi4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGEgcmVxdcOqdGUgbidhIHBhcyByw6l1c3NpIDpcclxuICAgICAgICAgICAgaWYgKCFyZXNwLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhY2hlIGxlIHNwaW5uZXIgZGUgY2hhcmdlbWVudC5cclxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgIC8vIEFmZmljaGUgdW4gbWVzc2FnZSBkJ2F2ZXJ0aXNzZW1lbnQgw6AgbCdhaWRlIGRlIFRvYXN0ci5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKCdVbmUgZXJyZXVyIGluYXR0ZW5kdWUgc1xcJ2VzdCBwcm9kdWl0ZS4uLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMpIHtcclxuICAgICAgICAgICAgLy8gw4ljaGVjIGRlIGxhIHJlcXXDqnRlIGFzeW5jaHJvbmUgOlxyXG4gICAgICAgICAgICAvLyBDYWNoZSBsZSBzcGlubmVyIGRlIGNoYXJnZW1lbnQuXHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgLy8gQWZmaWNoZSB1biBtZXNzYWdlIGQnZXJyZXVyIMOgIGwnYWlkZSBkZSBUb2FzdHIuXHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcignVW5lIGVycmV1ciBkZSByw6lzZWF1IHNcXCdlc3QgcHJvZHVpdGUuLi4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLy8gQ2V0dGUgZm9uY3Rpb24gZXN0IGV4w6ljdXTDqWUgbG9yc3F1ZSBsZSBkb2N1bWVudCBlc3QgcHLDqnQgKERPTSBlc3QgY2hhcmfDqSkuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAvLyBTw6lsZWN0aW9ubmUgbCfDqWzDqW1lbnQgYXZlYyBsYSBjbGFzc2UgXCJoYW1idXJnZXJcIiAoYm91dG9uIGRlIG1lbnUpIGV0IGwnw6lsw6ltZW50IGF2ZWMgbGEgY2xhc3NlIFwibmF2bGlua3MtY29udGFpbmVyXCIgKGNvbnRlbmV1ciBkZXMgbGllbnMgZGUgbmF2aWdhdGlvbikuXHJcbiAgY29uc3QgdG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xyXG4gIGNvbnN0IG5hdkxpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZsaW5rcy1jb250YWluZXJcIik7XHJcbiAgXHJcbiAgLy8gRm9uY3Rpb24gcXVpIHBlcm1ldCBkZSBiYXNjdWxlciBsJ8OpdGF0IGR1IG1lbnUgZGUgbmF2aWdhdGlvbiAob3V2ZXJ0IG91IGZlcm3DqSkgbG9ycyBkdSBjbGljIHN1ciBsZSBib3V0b24uXHJcbiAgY29uc3QgdG9nZ2xlTmF2ID0gZSA9PiB7XHJcbiAgICAvLyBBbmltYXRpb24gZHUgYm91dG9uIDogQWpvdXRlIG91IHN1cHByaW1lIGxhIGNsYXNzZSBcIm9wZW5cIiBwb3VyIGFmZmljaGVyIG91IG1hc3F1ZXIgbGEgdHJhbnNmb3JtYXRpb24gZHUgYm91dG9uIGhhbWJ1cmdlciBlbiBjcm9peC5cclxuICAgIHRvZ2dsZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgXHJcbiAgICAvLyBSw6ljdXDDqHJlIGwnYXR0cmlidXQgXCJhcmlhLWV4cGFuZGVkXCIgZHUgYm91dG9uIGhhbWJ1cmdlciBldCBsZSBtb2RpZmllIHBvdXIgcmVmbMOpdGVyIGwnw6l0YXQgZHUgbWVudSBkZSBuYXZpZ2F0aW9uLlxyXG4gICAgY29uc3QgYXJpYVRvZ2dsZSA9XHJcbiAgICAgIHRvZ2dsZXIuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSA9PT0gXCJ0cnVlXCIgPyBcImZhbHNlXCIgOiBcInRydWVcIjtcclxuICAgIHRvZ2dsZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBhcmlhVG9nZ2xlKTtcclxuICBcclxuICAgIC8vIFNsaWRlIGRlIGxhIG5hdmlnYXRpb24gOiBBam91dGUgb3Ugc3VwcHJpbWUgbGEgY2xhc3NlIFwib3BlblwiIHBvdXIgYWZmaWNoZXIgb3UgbWFzcXVlciBsZSBjb250ZW5ldXIgZGVzIGxpZW5zIGRlIG5hdmlnYXRpb24uXHJcbiAgICBuYXZMaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICB9O1xyXG4gIFxyXG4gIC8vIEFqb3V0ZSB1biBnZXN0aW9ubmFpcmUgZCfDqXbDqW5lbWVudCBcImNsaWNrXCIgYXUgYm91dG9uIGhhbWJ1cmdlciBwb3VyIGTDqWNsZW5jaGVyIGxhIGZvbmN0aW9uIHRvZ2dsZU5hdiBsb3JzcXUnaWwgZXN0IGNsaXF1w6kuXHJcbiAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2KTtcclxuICBcclxuICAvLyBVdGlsaXNlIFJlc2l6ZU9ic2VydmVyIHBvdXIgZMOpdGVjdGVyIGxlcyBjaGFuZ2VtZW50cyBkZSB0YWlsbGUgZGUgbGEgZmVuw6p0cmUgZXQgYWp1c3RlciBsYSB0cmFuc2l0aW9uIGR1IG1lbnUgZGUgbmF2aWdhdGlvbiBlbiBmb25jdGlvbiBkZSBsYSBsYXJnZXVyLlxyXG4gIG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgIC8vIFbDqXJpZmllIHNpIGxhIGxhcmdldXIgZGUgbGEgZmVuw6p0cmUgZXN0IGluZsOpcmlldXJlIG91IMOpZ2FsZSDDoCA5MDAgcGl4ZWxzLlxyXG4gICAgaWYgKGVudHJpZXNbMF0uY29udGVudFJlY3Qud2lkdGggPD0gOTAwKXtcclxuICAgICAgLy8gU2kgbGEgY29uZGl0aW9uIGVzdCB2cmFpZSwgYWpvdXRlIHVuZSB0cmFuc2l0aW9uIGF1IGNvbnRlbmV1ciBkZXMgbGllbnMgZGUgbmF2aWdhdGlvbiBwb3VyIHVuZSBhbmltYXRpb24gZmx1aWRlLlxyXG4gICAgICBuYXZMaW5rc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC40cyBlYXNlLW91dFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU2lub24sIHN1cHByaW1lIGxhIHRyYW5zaXRpb24gcG91ciB1bmUgYXBwYXJlbmNlIGluc3RhbnRhbsOpZSBzYW5zIGFuaW1hdGlvbi5cclxuICAgICAgbmF2TGlua3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gIH0pLm9ic2VydmUoZG9jdW1lbnQuYm9keSk7IC8vIE9ic2VydmUgbGVzIGNoYW5nZW1lbnRzIGRlIHRhaWxsZSBkZSBsYSBmZW7DqnRyZSBlbiBjaWJsYW50IGxlIGNvcnBzIGR1IGRvY3VtZW50LlxyXG59KTtcclxuIiwiXHJcbmltcG9ydCAqIGFzIHRvYXN0ciBmcm9tICd0b2FzdHInO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy90b2FzdHIvYnVpbGQvdG9hc3RyLm1pbi5jc3MnOyBcclxuXHJcbi8vIENldHRlIGZvbmN0aW9uIGVzdCBleMOpY3V0w6llIGxvcnNxdWUgbGUgZG9jdW1lbnQgZXN0IHByw6p0IChET00gZXN0IGNoYXJnw6kpLlxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBHw6hyZSBsZSBjbGljIHN1ciBsJ8OpbMOpbWVudCBhdmVjIGxhIGNsYXNzZSBcImZsaXAtaXQtdHJpZ2dlclwiIChpY8O0bmUgcG91ciByZXRvdXJuZXIgbGEgY2FydGUpLlxyXG4gICAgJCgnLmZsaXAtaXQtdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIC8vIEVtcMOqY2hlIGxhIHByb3BhZ2F0aW9uIGRlIGwnw6l2w6luZW1lbnQgcG91ciDDqXZpdGVyIHF1ZSBsZSBjbGljIHNlIHByb3BhZ2UgYXV4IMOpbMOpbWVudHMgcGFyZW50cy5cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vIEFqb3V0ZSBsYSBjbGFzc2UgXCJmbGlwLWl0XCIgw6AgbCfDqWzDqW1lbnQgcGFyZW50IGF2ZWMgbGEgY2xhc3NlIFwiYm9va0NhcmRcIiBwb3VyIHJldG91cm5lciBsYSBjYXJ0ZS5cclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLmFkZENsYXNzKCdmbGlwLWl0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHw6hyZSBsZSBjbGljIHN1ciBsJ8OpbMOpbWVudCBhdmVjIGxhIGNsYXNzZSBcImZsaXAtYmFja1wiIChpY8O0bmUgcG91ciByZXRvdXJuZXIgbGEgY2FydGUgw6AgbCfDqXRhdCBpbml0aWFsKS5cclxuICAgICQoJy5mbGlwLWJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAvLyBBam91dGUgb3Ugc3VwcHJpbWUgbGEgY2xhc3NlIFwiZmxpcC1pdFwiIMOgIGwnw6lsw6ltZW50IHBhcmVudCBhdmVjIGxhIGNsYXNzZSBcImJvb2tDYXJkXCIgcG91ciByZXRvdXJuZXIgb3UgYWZmaWNoZXIgbGEgZmFjZSBhdmFudCBkZSBsYSBjYXJ0ZS5cclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLnRvZ2dsZUNsYXNzKCdmbGlwLWl0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHw6hyZSBsZSBjbGljIHN1ciBsZSBjb3JwcyBkdSBkb2N1bWVudC5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAvLyBTdXBwcmltZSBsYSBjbGFzc2UgXCJmbGlwLWl0XCIgZGUgdG91cyBsZXMgw6lsw6ltZW50cyBhdmVjIGxhIGNsYXNzZSBcImJvb2tDYXJkXCIsIGNlIHF1aSByZW1ldCBsZXMgY2FydGVzIMOgIGwnw6l0YXQgaW5pdGlhbC5cclxuICAgICAgICAkKCcuYm9va0NhcmQnKS5yZW1vdmVDbGFzcygnZmxpcC1pdCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gR8OocmUgbGUgY2xpYyBzdXIgbCfDqWzDqW1lbnQgYXZlYyBsYSBjbGFzc2UgXCJhZGQtdG8tbGlzdFwiIChpY8O0bmUgcG91ciBham91dGVyIGxhIHPDqXJpZSDDoCB1bmUgbGlzdGUpLlxyXG4gICAgJCgnLmFkZC10by1saXN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgLy8gUsOpY3Vww6hyZSBsZXMgYXR0cmlidXRzIFwiZGF0YS1pZFNlcmllXCIgZXQgXCJkYXRhLWlkTGlzdGVcIiBkZSBsJ8OpbMOpbWVudCBjbGlxdcOpLlxyXG4gICAgICAgIGxldCBpZFNlcmllID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkU2VyaWUnKTtcclxuICAgICAgICBsZXQgaWRMaXN0ZSA9ICQodGhpcykuYXR0cignZGF0YS1pZExpc3RlJyk7XHJcbiAgICAgICAgLy8gVHJvdXZlIGwnw6lsw6ltZW50IHBhcmVudCBhdmVjIGxhIGNsYXNzZSBcImJvb2tDYXJkXCIgZXQgcmVjaGVyY2hlIGwnw6lsw6ltZW50IGF2ZWMgbGEgY2xhc3NlIFwiY2FyZC1zcGlubmVyXCIgcG91ciBhZmZpY2hlci9tYXNxdWVyIGxlIHNwaW5uZXIgZGUgY2hhcmdlbWVudC5cclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLmZpbmQoJy5jYXJkLXNwaW5uZXInKS50b2dnbGVDbGFzcygnZC1ub25lJyk7XHJcblxyXG4gICAgICAgIC8vIEVmZmVjdHVlIHVuZSByZXF1w6p0ZSBhc3luY2hyb25lIGRlIHR5cGUgR0VUIHZlcnMgbCdVUkwgc3DDqWNpZmnDqWUgZW4gdXRpbGlzYW50IGxlcyBpZGVudGlmaWFudHMgcsOpY3Vww6lyw6lzLlxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtqc0RhdGEudXJscy5hZGRUb0xpc3R9LyR7aWRTZXJpZX0vJHtpZExpc3RlfWAsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBTaSBsYSByZXF1w6p0ZSBhIHLDqXVzc2kgOlxyXG4gICAgICAgICAgICBpZiAocmVzcC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBZmZpY2hlIHVuIG1lc3NhZ2UgZGUgc3VjY8OocyDDoCBsJ2FpZGUgZGUgVG9hc3RyLlxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ1PDqXJpZSBjb3JyZWN0ZW1lbnQgcmFqb3V0w6llIMOgIHZvdHJlIGxpc3RlLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBDYWNoZSBsZSBzcGlubmVyIGRlIGNoYXJnZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ib29rQ2FyZCcpLmZpbmQoJy5jYXJkLXNwaW5uZXInKS50b2dnbGVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBUcm91dmUgbCfDqWzDqW1lbnQgcGFyZW50IGF2ZWMgbGEgY2xhc3NlIFwiYm9va0NhcmRcIiBldCByZWNoZXJjaGUgbCfDqWzDqW1lbnQgYXZlYyBsYSBjbGFzc2UgXCJmbGlwLWl0LXRyaWdnZXJcIiBldCBtZXQgw6Agam91ciBsZSB0ZXh0ZSBkZSBsJ2ljw7RuZS5cclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmJvb2tDYXJkJykuZmluZCgnLmZsaXAtaXQtdHJpZ2dlcicpLmZpbmQoJ3NwYW4nKS50ZXh0KCdtb3JlX2hvcml6Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyBHw6luw6hyZSBsZSBIVE1MIHBvdXIgYWZmaWNoZXIgbGVzIGTDqXRhaWxzIGRlIGxhIGxpc3RlIMOgIGxhcXVlbGxlIGxhIHPDqXJpZSBhIMOpdMOpIGFqb3V0w6llLlxyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSAnJztcclxuICAgICAgICAgICAgICAgIGh0bWwgPSAnPGg1IGNsYXNzPVwidGV4dC1jZW50ZXIgbWItNCB0ZXh0LWRlY29yYXRpb24tdW5kZXJsaW5lIFwiPkNldHRlIHPDqXJpZSBhIGTDqWrDoCDDqXTDqSBham91dMOpZSDDoCA6PC9oNT4nO1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBgPHA+LSBgO1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBgPGEgY2xhc3M9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZSB0ZXh0LXdoaXRlIGxuay11bmRybGluZSBmcy00XCIgIGA7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGBocmVmPVwiJHtqc0RhdGEudXJscy5lZGl0TGlzdH0vJHtpZExpc3RlfVwiPmA7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGAke3Jlc3Aubm9tTGlzdGV9PC9hPjwvcD5gO1xyXG4gICAgICAgICAgICAgICAgLy8gTWV0IMOgIGpvdXIgbGUgY29udGVudSBkZSBsJ8OpbMOpbWVudCBhdmVjIGxhIGNsYXNzZSBcImFkZGVkXCIgYXZlYyBsZSBIVE1MIGfDqW7DqXLDqS5cclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmJvb2tDYXJkJykuZmluZCgnLmFkZGVkJykuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGEgcmVxdcOqdGUgYSDDqWNob3XDqSA6XHJcbiAgICAgICAgICAgIGlmICghcmVzcC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYWNoZSBsZSBzcGlubmVyIGRlIGNoYXJnZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoJy5jYXJkLXNwaW5uZXInKS50b2dnbGVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBBZmZpY2hlIHVuIG1lc3NhZ2UgZCdhdmVydGlzc2VtZW50IMOgIGwnYWlkZSBkZSBUb2FzdHIuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZygnVW5lIGVycmV1ciBpbmF0dGVuZHVlIHNcXCdlc3QgcHJvZHVpdGUuLi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzKSB7XHJcbiAgICAgICAgICAgIC8vIFNpIGxhIHJlcXXDqnRlIGEgw6ljaG91w6kgZW4gcmFpc29uIGQndW4gcHJvYmzDqG1lIGRlIHLDqXNlYXUgOlxyXG4gICAgICAgICAgICAvLyBDYWNoZSBsZSBzcGlubmVyIGRlIGNoYXJnZW1lbnQuXHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmNhcmQtc3Bpbm5lcicpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgLy8gQWZmaWNoZSB1biBtZXNzYWdlIGQnZXJyZXVyIMOgIGwnYWlkZSBkZSBUb2FzdHIuXHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcignVW5lIGVycmV1ciBkZSByw6lzZWF1IHNcXCdlc3QgcHJvZHVpdGUuLi4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwidG9hc3RyIiwiJCIsIm9uIiwiZSIsIl90aGlzIiwiaWRTZXJpZSIsImF0dHIiLCJpZExpc3RlIiwibmV4dCIsInRvZ2dsZUNsYXNzIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImNvbmNhdCIsImpzRGF0YSIsInVybHMiLCJyZW1vdmVGcm9tTGlzdCIsImRhdGEiLCJkYXRhVHlwZSIsImRvbmUiLCJyZXNwIiwic3VjY2VzcyIsInBhcmVudHMiLCJodG1sIiwid2FybmluZyIsImZhaWwiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvciIsInRvZ2dsZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZMaW5rc0NvbnRhaW5lciIsInRvZ2dsZU5hdiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFyaWFUb2dnbGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiY29udGVudFJlY3QiLCJ3aWR0aCIsInN0eWxlIiwidHJhbnNpdGlvbiIsIm9ic2VydmUiLCJib2R5Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImZpbmQiLCJhZGRUb0xpc3QiLCJ0ZXh0IiwiZWRpdExpc3QiLCJub21MaXN0ZSJdLCJzb3VyY2VSb290IjoiIn0=