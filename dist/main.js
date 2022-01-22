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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLDJCQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlFOztBQUV6RTtBQUNBLG1CQUFtQixtRkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7QUFHbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNBQW1DOztBQUVuQzs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDN0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW1wb3J0ZWRGdW5jdGlvbnMvdW5pcXVlSWRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvb2JqZWN0aXZlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VpZChsZW5ndGgpIHsgIC8vc3JjOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzQ5NDA0L2dlbmVyYXRlLXJhbmRvbS1zdHJpbmctY2hhcmFjdGVycy1pbi1qYXZhc2NyaXB0XG4gICAgdmFyIHJlc3VsdCAgICAgICAgICAgPSAnJztcbiAgICB2YXIgY2hhcmFjdGVycyAgICAgICA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBcbiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICB9XG4gICByZXR1cm4gcmVzdWx0O1xufSIsIi8qKlxuICogb2JqZWN0aXZlc1xuICogICAtIGhvbGQgdW5saW1pdGVkIG51bWJlciBvZiBvYmplY3RpdmVzXG4gKiAgIC0gc3BlY2lmeSBhIHBhcmVudCwgb2JqZWN0aXZlLCBvciBudWxsXG4gKiAgIFxuICovXG5cbmltcG9ydCB1bmlxdWVJZEdlbmVyYXRvciBmcm9tICcuL2ltcG9ydGVkRnVuY3Rpb25zL3VuaXF1ZUlkR2VuZXJhdG9yLmpzJztcblxuY29uc3Qgb2JqZWN0aXZlID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdW5pcXVlSUQgPSB1bmlxdWVJZEdlbmVyYXRvcigyMCk7XG4gICAgbGV0IG9iamVjdGl2ZU5hbWUsXG4gICAgICAgIHN1Ym9iamVjdGl2ZUFycmF5ID0gW10sXG4gICAgICAgIGNhdGVnb3J5QXJyYXkgPSBbXSxcbiAgICAgICAgZHVlRGF0ZTtcblxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gdW5pcXVlSUQ7XG5cbiAgICAvLyBjb25zdCBnZXQgPSAoKSA9PiB1bmlxdWVJRDtcbiAgICAvLyBjb25zdCBzZXQgPSAoKSA9PiB1bmlxdWVJRDtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gb2JqZWN0aXZlTmFtZTtcbiAgICBjb25zdCBzZXROYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgb2JqZWN0aXZlTmFtZSA9IG5hbWUubGVuZ3RoID4gMCA/IG5hbWU6ICdVbm5hbWVkJztcbiAgICB9XG4gICAgc2V0TmFtZShuYW1lKTsgLy9zZXQgbmFtZSBvbiBvYmplY3QgY3JlYXRpb25cblxuXG4gICAgY29uc3QgYWRkU3ViT2JqZWN0aXZlID0gKG9iamVjdGl2ZU9iamVjdCkgPT4ge1xuICAgICAgICAvL3ZlcmlmeSB0aGF0IHRoZSBwdXNoZWQgb2JqZWN0aXZlT2JqZWN0IGV4aXN0cyBvbiB0aGUgZGF0YWJhc2VcbiAgICAgICAgc3Vib2JqZWN0aXZlQXJyYXkucHVzaCAob2JqZWN0aXZlT2JqZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdWJPYmplY3RpdmVzID0gKCkgPT4gc3Vib2JqZWN0aXZlQXJyYXk7XG5cbiAgICBjb25zdCBzZXREdWVEYXRlID0gKGRhdGUpID0+IHt9Ly9UT0RPOlxuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG5cbiAgICByZXR1cm4geyAgICBnZXRJZCxcbiAgICAgICAgICAgICAgICBnZXROYW1lLFxuICAgICAgICAgICAgICAgIHNldE5hbWUsXG4gICAgICAgICAgICAgICAgYWRkU3ViT2JqZWN0aXZlLFxuICAgICAgICAgICAgICAgIGdldFN1Yk9iamVjdGl2ZXMsXG4gICAgICAgICAgICAgICAgZ2V0RHVlRGF0ZVxuICAgICAgICAgICAgfVxufVxuXG5leHBvcnQge29iamVjdGl2ZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7b2JqZWN0aXZlfSBmcm9tICcuL29iamVjdGl2ZXMuanMnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9