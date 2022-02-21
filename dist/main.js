/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sidebar */ \"./src/modules/sidebar.js\");\n/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_sidebar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_slider__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n_modules_sidebar__WEBPACK_IMPORTED_MODULE_0___default()()\r\n_modules_slider__WEBPACK_IMPORTED_MODULE_1___default()()\n\n//# sourceURL=webpack://scripts/./src/index.js?");

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ (() => {

eval("const sidebar = function() {\r\n  const menuBtn = document.getElementById('menu')\r\n  const menuImg = document.querySelector('.header-menu-block__img')\r\n  const menuText = document.querySelector('.header-menu-block__text')\r\n  const sidebarBlock = document.querySelector('.sidebar')\r\n  const listLeft = document.querySelector('.list-left')\r\n  const listLeftItems = document.querySelectorAll('.list-left__item .list__link')\r\n  const listRighttItems = document.querySelectorAll('.list-right')\r\n\r\n\r\n  function getNewArr (arr) {\r\n    const newArr = []\r\n    for (let index in arr) { \r\n      if (Number(index) <= listLeftItems.length) {\r\n        if (listLeftItems[index].classList.contains('list__link')) {\r\n          newArr.push(listLeftItems[index])\r\n        }\r\n      }\r\n    }\r\n    return newArr\r\n  }\r\n\r\n  function showList () {\r\n    listLeft.addEventListener('click', function(e) {\r\n      if (e.target.classList.contains('list__link')) {\r\n        const tabBtn = e.target\r\n        for (let index in getNewArr(listLeftItems)) {\r\n          let tab = getNewArr(listLeftItems)[index]\r\n            if (tab === tabBtn) {\r\n              listRighttItems[index].classList.remove('list-right--hidden')\r\n            } else {\r\n              listRighttItems[index].classList.add('list-right--hidden')\r\n            }\r\n        }\r\n      }\r\n    })\r\n  }\r\n\r\n\r\n  menuBtn.addEventListener('click', function() {\r\n    if (!menuBtn.classList.contains('header-menu-block--active')) {\r\n      menuBtn.classList.add(('header-menu-block--active'))\r\n      sidebarBlock.classList.remove('sidebar--hidden')\r\n      menuImg.src = './img/close-black.svg'\r\n      menuText.textContent = 'Закрыть'\r\n      showList()\r\n      \r\n    } else {\r\n      menuBtn.classList.remove(('header-menu-block--active'))\r\n      sidebarBlock.classList.add('sidebar--hidden')\r\n      menuImg.src = './img/menu-black.svg'\r\n      menuText.textContent = 'Меню'\r\n    }\r\n  })\r\n}\r\nsidebar()\n\n//# sourceURL=webpack://scripts/./src/modules/sidebar.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ (() => {

eval("const slider = ({containerSlider, itemSlider, containerDot}) => {\r\n  const sliderBlock = document.querySelector(containerSlider)\r\n  const slides = document.querySelectorAll(itemSlider)\r\n  const dotsBlock = document.querySelector(containerDot)\r\n\r\n  const arrBlock = [sliderBlock, slides, dotsBlock]\r\n  for (let i = 0; i <= arrBlock.length; i++) {\r\n    if (arrBlock[i] === null || arrBlock[i] === 0) {\r\n    return\r\n    }\r\n  }\r\n\r\n  let dots = []\r\n\r\n  const timeInterval = 5000\r\n  let currentSlide = 0\r\n  let interval\r\n\r\n  const addBlock = () => {\r\n    let dot\r\n    for (let i = 1; i <= slides.length; i++) {\r\n      dot = document.createElement('li')\r\n      dot.classList.add('paggination__item')\r\n      dots.push(dot)\r\n      dotsBlock.append(dot)\r\n    }\r\n\r\n    dots[0].classList.add('paggination__item--active')\r\n    slides[0].classList.add('banner-container--active')\r\n\r\n  }\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass)\r\n  }\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n\r\n    elems[index].classList.add(strClass)\r\n  }\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'banner-container--active')\r\n    prevSlide(dots, currentSlide, 'paggination__item--active')\r\n\r\n    currentSlide++\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n    nextSlide(slides, currentSlide, 'banner-container--active')\r\n    nextSlide(dots, currentSlide, 'paggination__item--active')\r\n  }\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer)\r\n  }\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval)\r\n  }\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n\r\n    if (!e.target.matches('.paggination__item, .portfolio-btn')) {\r\n      return\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'banner-container--active')\r\n    prevSlide(dots, currentSlide, 'paggination__item--active')\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--\r\n    } else if (e.target.classList.contains('paggination__item')) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index\r\n        }\r\n      })\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length-1\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'banner-container--active')\r\n    nextSlide(dots, currentSlide, 'paggination__item--active')\r\n  })\r\n\r\n  sliderBlock.addEventListener('mouseenter', (e) => {\r\n    if (e.target.matches('.paggination__item, .portfolio-btn')) {\r\n      stopSlide()\r\n    }\r\n  }, true)\r\n\r\n  sliderBlock.addEventListener('mouseleave', (e) => {\r\n    if (e.target.matches('.paggination__item, .portfolio-btn')) {\r\n      startSlide(timeInterval)\r\n    }    \r\n  }, true)\r\n\r\n  startSlide(timeInterval)\r\n  addBlock()\r\n\r\n}\r\n\r\n\r\nslider({containerSlider: '.banner', itemSlider: '.banner-container', containerDot: '.paggination'})\n\n//# sourceURL=webpack://scripts/./src/modules/slider.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;