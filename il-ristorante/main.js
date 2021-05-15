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

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeDiv = document.getElementById(\"home\");\nconst menuDiv = document.getElementById(\"menu\");\nconst aboutUsDiv = document.getElementById(\"about-us\");\nconst contactDiv = document.getElementById(\"contact\");\naboutUsDiv.addEventListener(\"click\", () => aboutUs());\n\nlet aboutUs = () => {\n    const content = document.getElementById(\"content\");\n\n    content.innerHTML = \"\";\n    content.innerHTML = `\n    <div id=\"content-container\" class=\"content-container\">\n    <p class=\"our-story\">Our Story<p><hr><p class=\"story\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    <br>\n    <p class=\"story\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, \n    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, \n    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. \n    Ut enim ad minima veniam, quis nostrum exercitat-<br>ionem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? \n    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, \n    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>\n    </div>`;\n\n    homeDiv.classList.remove(\"clicked\");\n    menuDiv.classList.remove(\"clicked\");\n    aboutUsDiv.classList.add(\"clicked\");\n    contactDiv.classList.remove(\"clicked\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutUs);\n\n//# sourceURL=webpack://il-ristorante/./src/about-us.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeDiv = document.getElementById(\"home\");\nconst menuDiv = document.getElementById(\"menu\");\nconst aboutUsDiv = document.getElementById(\"about-us\");\nconst contactDiv = document.getElementById(\"contact\");\ncontactDiv.addEventListener(\"click\", () => contact());\n\nlet contact = () => {\n    const content = document.getElementById(\"content\");\n\n    content.innerHTML = \"\";\n    content.innerHTML = `\n    <div id=\"content-container\" class=\"content-container\">\n    <p class=\"our-story\">Visit Il Ristorante<p><hr>\n    <br><p class=\"story\">\n    2021 Hudson Center Way<br>\n    New York, NY 10001\n    <br><br>\n    <p class=\"story\"><strong>Email:</strong> contact@ilristorante.com</p><br>\n    <p class=\"story\"><strong>Reservations:</strong> (555) 555-5555</p><br>\n    <p class=\"story\"><strong>Hours:</strong><br>\n    Sunday, 4PM - 9PM<br>\n    Monday, CLOSED<br>\n    Tuesday, 4PM - 9PM<br>\n    Wednesday, 4PM - 9PM<br>\n    Thursday, 4PM - 9PM<br>\n    Friday, 5PM - 11PM<br>\n    Saturday, 5PM - 10PM</p>\n    </div>`;\n\n    homeDiv.classList.remove(\"clicked\");\n    menuDiv.classList.remove(\"clicked\");\n    aboutUsDiv.classList.remove(\"clicked\");\n    contactDiv.classList.add(\"clicked\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://il-ristorante/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeDiv = document.getElementById(\"home\");\nconst menuDiv = document.getElementById(\"menu\");\nconst aboutUsDiv = document.getElementById(\"about-us\");\nconst contactDiv = document.getElementById(\"contact\");\nhomeDiv.addEventListener(\"click\", () => home());\n\nlet home = () => {\n    const content = document.getElementById(\"content\");\n    const title = document.createElement(\"div\");\n    const subTitle = document.createElement(\"div\");\n\n    content.innerHTML = \"\";\n\n    title.classList = \"title\";\n    subTitle.classList = \"sub-title\";\n\n    title.textContent = \"Il Ristorante\";\n    subTitle.textContent = \"Portandoti un assaggio di Toscana\";\n\n    content.appendChild(title);\n    content.appendChild(subTitle);\n\n    homeDiv.classList.add(\"clicked\");\n    menuDiv.classList.remove(\"clicked\");\n    aboutUsDiv.classList.remove(\"clicked\");\n    contactDiv.classList.remove(\"clicked\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://il-ristorante/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us */ \"./src/about-us.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n_home__WEBPACK_IMPORTED_MODULE_0__.default;\n_menu__WEBPACK_IMPORTED_MODULE_1__.default;\n_about_us__WEBPACK_IMPORTED_MODULE_2__.default;\n_contact__WEBPACK_IMPORTED_MODULE_3__.default;\n\n//# sourceURL=webpack://il-ristorante/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeDiv = document.getElementById(\"home\");\nconst menuDiv = document.getElementById(\"menu\");\nconst aboutUsDiv = document.getElementById(\"about-us\");\nconst contactDiv = document.getElementById(\"contact\");\nmenuDiv.addEventListener(\"click\", () => menu());\n\nlet menu = () => {\n    const content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n    content.innerHTML = `\n    <div id=\"content-container\" class=\"content-container\">\n    <p class=\"category\">Antipasti</p>\n    <hr>\n    <p class=\"dish\">Avvoltini di melanzane alla Parmigiana – $18.75</p>\n    <p class=\"description\">Grilled eggplant rolled with mozzarella and parmesan cheese spiced with oregano and baked in a light tomato basil sauce</p>\n    <p class=\"dish\">Molluschi al tegamino – $23.75</p>\n    <p class=\"description\">Fresh poached Manila clams and fresh black mussels in a lightly spiced tomato sauce</p>\n    <p class=\"dish\">Bruschetta al pomodoro fresco e basilico – $14.75</p>\n    <p class=\"description\">Grilled garlic bread with diced fresh roma tomatoes, basil, and extra virgin olive oil; add fresh goat cheese – $5.50</p>\n    <p class=\"dish\">Bruschetta ai funghi trifolati – $16.75</p>\n    <p class=\"description\">Grilled garlic bread with a mix of sautéed local and imported mushrooms</p>\n    <p class=\"dish\">Carpaccio del Tiziano – $19.75</p>\n    <p class=\"description\">Thin slices of seared black pepper beef fillet topped with arugula and shaved parmesan cheese in a horseradish dressing</p>\n    <p class=\"dish\">Insalata di gamberi e capesante – $22.75</p>\n    <p class=\"description\">Warm salad of sautéed sea scallops and grilled shrimp with roasted bell peppers, green onions, organic arugula, capers, and garlic in a lemon mustard dressing</p>\n    <p class=\"dish\">Carciofi ai petali di parmigiano – $18.75</p>\n    <p class=\"description\">Salad of fresh artichoke hearts and diced roma tomatoes with shaved parmesan cheese in a balsamic vinaigrette dressing</p>\n    <p class=\"dish\">Insalata del Dante – $18.75</p>\n    <p class=\"description\">Salad of fresh baby spinach, diced organic tomatoes, roasted pine nuts, and red onions in a gorgonzola cheese dressing</p>\n    <p class=\"dish\">Mozzarella con trittico di vegetali – $20.75</p>\n    <p class=\"description\">Fresh mozzarella served with sliced organic roma tomatoes, fresh basil, roasted bell peppers, and grilled vegetables marinated in aromatic olive oil\n      <br>(Caprese salad is available $15.25)</p>\n    <p class=\"dish\">Insalata di Parma – $19.75</p>\n    <p class=\"description\">A salad of fresh arugula, red apple, crushed walnut, diced roma tomato tossed with homemade balsamic dressing, petal of parmesan cheese served over imported parma prosciutto</p>\n    <p class=\"dish\">Insalata al cuore di Cesare – $15.75</p>\n    <p class=\"description\">Fresh hearts of romaine lettuce served with rosemary garlic croutons, and shaved parmesan cheese in a homemade caesar dressing</p>\n    <p class=\"dish\">Lattughette novelle di stagione – $14.75</p>\n    <p class=\"description\">Organic mixed baby lettuces, roma tomatoes, and shaved fennel with a balsamic vinaigrette dressing</p>\n    <p class=\"dish\">Insalata tricolore della Buona Tavola – $15.75</p>\n    <p class=\"description\">Salad of radicchio, arugula, mushrooms, and shaved parmesan cheese with rosemary garlic croutons in a homemade caesar dressing</p>\n    <p class=\"category\">Zuppe</p>\n    <hr>\n    <p class=\"dish\">Minestrone saporito – $11.75</p>\n    <p class=\"description\">A medley of fresh vegetables and tuscan beans in a savory chicken broth with a touch of basil pesto</p>\n    <p class=\"dish\">Zuppa del giorno – $13.75</p>\n    <p class=\"description\">Soup of the day (piccola zuppa $8.75)</p>\n    <p class=\"category\">Primi Piatti</p>\n    <hr>\n    <p class=\"dish\">Risotto del cusio – $26.75</p>\n    <p class=\"description\">Carnaroli rice with imported porcini mushrooms, fresh water shrimp, organic herbs and white wine cooked in a savory chicken broth</p>\n    <p class=\"dish\">Fettuccine al sugo di carni miste – $24.75</p>\n    <p class=\"description\">Fettuccine pasta with slowly braised chicken, duck, veal, and beef in an herbed meat sauce</p>\n    <p class=\"dish\">Pappardelle alla San Pietro – $27.75</p>\n    <p class=\"description\">Wide pasta ribbons with sautéed river shrimp, white wine, braised sweet onions and imported prosciutto finished with a light creamy tomato sauce</p>\n    <p class=\"dish\">Orecchiette con rapine e luganega – $20.75</p>\n    <p class=\"description\">Hat shaped pasta served with rapine broccoli, sun dried tomatoes, homemade Piemontese sytle pork sausage, garlic, and a splash of tomato sauce</p>\n    <p class=\"dish\">Tortiglioni Del Buon Gustaio – $20.75</p>\n    <p class=\"description\">Wide ridged pasta tubes with braised eggplant, roasted garlic, diced roma tomatoes and a splash of organic tomato sauce topped with ricotta cheese</p>\n    <p class=\"dish\">Penne all’arrabbiata – $18.95</p>\n    <p class=\"description\">Short tube pasta with garlic and Italian parsley in a spicy tomato sauce</p>\n    <p class=\"dish\">Capellini al filetto di pomodoro e basilico – $19.75</p>\n    <p class=\"description\">Angel hair pasta with organic tomato fillets, garlic, basil, and a hint of extra virgin olive oil</p>\n    <p class=\"dish\">Tortelloni bufalina – $22.75</p>\n    <p class=\"description\">Homemade tortelloni stuffed with fresh mozzarella and finished in a light tomato sauce</p>\n    <p class=\"dish\">Tortelloni alla Piemontese – $23.75</p>\n    <p class=\"description\">Homemade tortelloni stuffed with roasted veal, spinach, and prosciutto in a porcini mushroom tomato sauce</p>\n    <p class=\"dish\">Tortelloni di zucca alla salvia e mascarpone – $22.75</p>\n    <p class=\"description\">Homemade tortelloni stuffed with pumpkin and ricotta cheese in a sage and mascarpone cheese sauce topped with toasted walnuts</p>\n    <p class=\"dish\">Gnocchi Novaresi al pesto – $19.75</p>\n    <p class=\"description\">Homemade potato dumplings in a light creamy pesto sauce</p>\n    <p class=\"dish\">Agnolotti di scampi allo zafferano – $23.75</p>\n    <p class=\"description\">Homemade half moon shaped ravioli stuffed with scampi, imported prosciutto in a light saffron sauce</p>\n    <p class=\"dish\">Linguine ai muscoli di mare e porri – $29.95</p>\n    <p class=\"description\">Linguine pasta with farm-raised Manila clams, sea scallops, small black mussels, and shrimp in a white wine garlic and leek sauce</p>\n    <p class=\"category\">Secondi Piatti</p>\n    <hr>\n    <p class=\"dish\">Costata di manzo ai sapori delle alpi – $55.25</p>\n    <p class=\"description\">14-16 oz grilled rib-eye steak marinated with wild herbs and garlic in a gorgonzola Barolo wine reduction sauce</p>\n    <p class=\"dish\">Teneroni Portobello – $36.75</p>\n    <p class=\"description\">Veal scaloppine with braised Portobello mushroom and roasted garlic in a veal reduction and marsala wine sauce</p>\n    <p class=\"dish\">Petti di pollo Asiago – $30.75</p>\n    <p class=\"description\">Free-range chicken breast and wing stuffed with Asiago cheese and imported Prosciutto di Parma pan-seared and finished in the oven with a white wine reduction</p>\n    <p class=\"dish\">Pollo scamiciato alla Vinaggia – $32.75</p>\n    <p class=\"description\">Grilled boneless free-range chicken marinated with garlic and herbs served with a rosemary mustard sauce</p>\n    <p class=\"dish\">Timballo Valdostano – $23.75</p>\n    <p class=\"description\">Grilled fresh eggplant, red and yellow bell peppers, green and yellow zucchini, and sweet onions baked with imported Valle d’ Aosta fontina cheese and a light tomato sauce</p>\n  </div>\n    `;\n\n    homeDiv.classList.remove(\"clicked\");\n    menuDiv.classList.add(\"clicked\");\n    aboutUsDiv.classList.remove(\"clicked\");\n    contactDiv.classList.remove(\"clicked\");\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://il-ristorante/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;