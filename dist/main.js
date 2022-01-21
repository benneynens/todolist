/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/importedFunctions/uniqueIdGenerator.js":
/*!****************************************************!*\
  !*** ./src/importedFunctions/uniqueIdGenerator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeid)
/* harmony export */ });
function makeid(length) {  //src: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

/***/ }),

/***/ "./src/objectives.js":
/*!***************************!*\
  !*** ./src/objectives.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objective": () => (/* binding */ objective)
/* harmony export */ });
/* harmony import */ var _importedFunctions_uniqueIdGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importedFunctions/uniqueIdGenerator.js */ "./src/importedFunctions/uniqueIdGenerator.js");
/**
 * objectives
 *   - hold unlimited number of objectives
 *   - specify a parent, objective, or null
 *   
 */



const objective = (name) => {
    let uniqueID = (0,_importedFunctions_uniqueIdGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(20);
    let objectiveName,
        subobjectiveArray = [],
        categoryArray = [],
        dueDate;

    const getId = () => uniqueID;

    // const get = () => uniqueID;
    // const set = () => uniqueID;
    const getName = () => objectiveName;
    const setName = (name) => {
        objectiveName = name.length > 0 ? name: 'Unnamed';
    }
    setName(name); //set name on object creation


    const addSubObjective = (objectiveObject) => {
        //verify that the pushed objectiveObject exists on the database
        subobjectiveArray.push (objectiveObject);
    }

    const getSubObjectives = () => subobjectiveArray;

    const setDueDate = (date) => {}//TODO:

    const getDueDate = () => dueDate;

    return {    getId,
                getName,
                setName,
                addSubObjective,
                getSubObjectives,
                getDueDate
            }
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objectives_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectives.js */ "./src/objectives.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLDJCQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlFOztBQUV6RTtBQUNBLG1CQUFtQixtRkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7QUFHbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNBQW1DOztBQUVuQzs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDN0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbXBvcnRlZEZ1bmN0aW9ucy91bmlxdWVJZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9vYmplY3RpdmVzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZWlkKGxlbmd0aCkgeyAgLy9zcmM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEzNDk0MDQvZ2VuZXJhdGUtcmFuZG9tLXN0cmluZy1jaGFyYWN0ZXJzLWluLWphdmFzY3JpcHRcbiAgICB2YXIgcmVzdWx0ICAgICAgICAgICA9ICcnO1xuICAgIHZhciBjaGFyYWN0ZXJzICAgICAgID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgICB2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFxuIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgIH1cbiAgIHJldHVybiByZXN1bHQ7XG59IiwiLyoqXG4gKiBvYmplY3RpdmVzXG4gKiAgIC0gaG9sZCB1bmxpbWl0ZWQgbnVtYmVyIG9mIG9iamVjdGl2ZXNcbiAqICAgLSBzcGVjaWZ5IGEgcGFyZW50LCBvYmplY3RpdmUsIG9yIG51bGxcbiAqICAgXG4gKi9cblxuaW1wb3J0IHVuaXF1ZUlkR2VuZXJhdG9yIGZyb20gJy4vaW1wb3J0ZWRGdW5jdGlvbnMvdW5pcXVlSWRHZW5lcmF0b3IuanMnO1xuXG5jb25zdCBvYmplY3RpdmUgPSAobmFtZSkgPT4ge1xuICAgIGxldCB1bmlxdWVJRCA9IHVuaXF1ZUlkR2VuZXJhdG9yKDIwKTtcbiAgICBsZXQgb2JqZWN0aXZlTmFtZSxcbiAgICAgICAgc3Vib2JqZWN0aXZlQXJyYXkgPSBbXSxcbiAgICAgICAgY2F0ZWdvcnlBcnJheSA9IFtdLFxuICAgICAgICBkdWVEYXRlO1xuXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB1bmlxdWVJRDtcblxuICAgIC8vIGNvbnN0IGdldCA9ICgpID0+IHVuaXF1ZUlEO1xuICAgIC8vIGNvbnN0IHNldCA9ICgpID0+IHVuaXF1ZUlEO1xuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBvYmplY3RpdmVOYW1lO1xuICAgIGNvbnN0IHNldE5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBvYmplY3RpdmVOYW1lID0gbmFtZS5sZW5ndGggPiAwID8gbmFtZTogJ1VubmFtZWQnO1xuICAgIH1cbiAgICBzZXROYW1lKG5hbWUpOyAvL3NldCBuYW1lIG9uIG9iamVjdCBjcmVhdGlvblxuXG5cbiAgICBjb25zdCBhZGRTdWJPYmplY3RpdmUgPSAob2JqZWN0aXZlT2JqZWN0KSA9PiB7XG4gICAgICAgIC8vdmVyaWZ5IHRoYXQgdGhlIHB1c2hlZCBvYmplY3RpdmVPYmplY3QgZXhpc3RzIG9uIHRoZSBkYXRhYmFzZVxuICAgICAgICBzdWJvYmplY3RpdmVBcnJheS5wdXNoIChvYmplY3RpdmVPYmplY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFN1Yk9iamVjdGl2ZXMgPSAoKSA9PiBzdWJvYmplY3RpdmVBcnJheTtcblxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAoZGF0ZSkgPT4ge30vL1RPRE86XG5cbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcblxuICAgIHJldHVybiB7ICAgIGdldElkLFxuICAgICAgICAgICAgICAgIGdldE5hbWUsXG4gICAgICAgICAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgICAgICAgICBhZGRTdWJPYmplY3RpdmUsXG4gICAgICAgICAgICAgICAgZ2V0U3ViT2JqZWN0aXZlcyxcbiAgICAgICAgICAgICAgICBnZXREdWVEYXRlXG4gICAgICAgICAgICB9XG59XG5cbmV4cG9ydCB7b2JqZWN0aXZlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtvYmplY3RpdmV9IGZyb20gJy4vb2JqZWN0aXZlcy5qcydcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==