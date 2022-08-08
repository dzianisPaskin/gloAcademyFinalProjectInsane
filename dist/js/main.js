/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_showHeaderPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showHeaderPhone */ \"./modules/showHeaderPhone.js\");\n/* harmony import */ var _modules_showMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showMenu */ \"./modules/showMenu.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n\n\n\n\n\n(0,_modules_showHeaderPhone__WEBPACK_IMPORTED_MODULE_0__.showHeaderPhone)()\n;(0,_modules_showMenu__WEBPACK_IMPORTED_MODULE_1__.showMenu)()\n;(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__.smoothScroll)()\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/showHeaderPhone.js":
/*!************************************!*\
  !*** ./modules/showHeaderPhone.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHeaderPhone\": () => (/* binding */ showHeaderPhone)\n/* harmony export */ });\nconst showHeaderPhone = () => {\n  const arrow = document.querySelector(\".header-contacts__arrow\");\n  const phone = document.querySelector(\n    \".header-contacts__phone-number-accord a\"\n  );\n  const phoneAccord = document.querySelector(\n    \".header-contacts__phone-number-accord\"\n  );\n  let isShow = false;\n\n  arrow.addEventListener(\"click\", () => {\n    if (isShow) {\n      phone.style.opacity = 0;\n      phoneAccord.style.top = 0 + 'px';\n      isShow = false;\n      arrow.style.transform = `rotate(0deg)`;\n    } else {\n      arrow.style.transform = `rotate(180deg)`;\n      phoneAccord.style.top = 25 + 'px';\n      phone.style.opacity = 1;\n      isShow = true;\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/showHeaderPhone.js?");

/***/ }),

/***/ "./modules/showMenu.js":
/*!*****************************!*\
  !*** ./modules/showMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu)\n/* harmony export */ });\n\n\nconst showMenu = () => {\n  const menuIcon = document.querySelector(\".menu__icon\");\n  const menu = document.querySelector(\".popup-dialog-menu\");\n  const closeMenu = document.querySelector(\".close-menu\");\n  let height = document.documentElement.clientWidth;\n\n  menuIcon.addEventListener(\"click\", () => {\n    menu.style.transform = `translate3d(0, 0, 0)`;\n  });\n\n  closeMenu.addEventListener(\"click\", () => {\n    if (height < 576) {\n      menu.style.transform = `translate3d(0, -100vh, 0)`;\n    } else {\n      menu.style.transform = `translate3d(555px, 0, 0)`;\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/showMenu.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = () => {\n  const menuItems = document.querySelectorAll(\".popup-menu-nav__item>a\");\n  const mainItem = document.querySelector(`a[href='#main']`);\n  const btnFooter = document.querySelector(\".button-footer\");\n\n  const scroll = (e) => {\n    e.preventDefault();\n    const blockID = mainItem.getAttribute(\"href\");\n    document.querySelector(blockID).scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\",\n    });\n  };\n\n  \n  mainItem.addEventListener(\"click\", scroll);\n  btnFooter.addEventListener(\"click\", scroll);\n\n  menuItems.forEach((anchor) => {\n    anchor.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      const blockID = anchor.getAttribute(\"href\");\n\n      document.querySelector(blockID).scrollIntoView({\n        behavior: \"smooth\",\n        block: \"start\",\n      });\n    });\n  });\n\n};\n\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;