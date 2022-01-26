/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: sans-serif;\n}\n\n.objective-group .column {\n    width: 200px;\n    border: 1px solid black;\n}\n\n.objective.board {\n    border: 1px solid black;\n    width: 800px;\n    margin: 0 auto;\n}\n\n.objective.board .name {\n    font-weight: bold;\n    text-transform: uppercase;\n}\n\n/* .objective .column {\n\n}\n\n.objective .kanban {\n\n}\n\n.objective .checklist-item {\n\n} */", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;;;;;;;;;;GAUG","sourcesContent":["body {\n    font-family: sans-serif;\n}\n\n.objective-group .column {\n    width: 200px;\n    border: 1px solid black;\n}\n\n.objective.board {\n    border: 1px solid black;\n    width: 800px;\n    margin: 0 auto;\n}\n\n.objective.board .name {\n    font-weight: bold;\n    text-transform: uppercase;\n}\n\n/* .objective .column {\n\n}\n\n.objective .kanban {\n\n}\n\n.objective .checklist-item {\n\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
/* harmony export */   "newObjective": () => (/* binding */ newObjective),
/* harmony export */   "objectivesArray": () => (/* binding */ objectivesArray),
/* harmony export */   "getObjectivebyId": () => (/* binding */ getObjectivebyId)
/* harmony export */ });
/* harmony import */ var _importedFunctions_uniqueIdGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importedFunctions/uniqueIdGenerator.js */ "./src/importedFunctions/uniqueIdGenerator.js");
/**
 * objectives
 *   - hold unlimited number of objectives
 *   - specify a parent, objective, or null
 *   
 */



//TEMP pre-database array
const objectivesInDOM = [];

const objectivesArray = ( () => {
    const array = [];  //array of objects with object and element properties
 
    const addNew = ( name, parentId ) => {
        array.push ( {  object: newObjective (name, parentId), 
                        pageElement: null,
        } );
    };

    const _getArrayIndexById = (targetId) => array.findIndex(arrayVal => arrayVal.object.getId() === targetId);

    const getObjectById = (targetId) => array[ _getArrayIndexById(targetId) ].object;  //TEMP

    const getIdByIndex = (index) => array[index].object.getId();

    const getDomElement = (objectiveId, displayMode, displayTier) => {
        let objectiveObject = getObjectById (objectiveId);
        let childrenDomElements = [];
        //if display tier is less than total tiers for this object, then get children
        if (displayTier < displayModes[displayMode].tiers) {
            let childrenIdsArray = objectiveObject.getChildObjectives();
            childrenDomElements = childrenIdsArray.map( (childId) => objectivesArray.getDomElement(childId, displayMode, displayTier + 1) );
        }
        return generateHtmlElement (objectiveObject, displayMode, displayTier, childrenDomElements);
    }

    const getFullArray = () => array; //TEMP
    const returnMasterID = () => array[0].object.getId(); //TEMP

    return {
        addNew,
        getFullArray, //TEMP
        getIdByIndex, //TEMP
        getObjectById,
        getDomElement,
        returnMasterID, //TEMP
    }
})();

const displayModes = {
    'board': {tiers: 3},
    'modal': {tiers: 2},
}

const generateHtmlElement = (objectiveObject, displayMode, objectiveTier, childrenDomElements) => {
    const newDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    const childrenHolderDiv = document.createElement('div');

    newDiv.classList.add('objective', displayMode);
    nameDiv.classList.add('name');
    nameDiv.innerHTML = objectiveObject.getName();
    newDiv.appendChild(nameDiv);
    childrenHolderDiv.classList.add('children');
    childrenDomElements.forEach(function(element){
        childrenHolderDiv.appendChild(element);
    });

    newDiv.appendChild(childrenHolderDiv);

    return newDiv;
}

const newObjective = (name, parentId) => {
    let uniqueID = (0,_importedFunctions_uniqueIdGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(20);
    let objectiveName,  //if name is blank, revised with setName, below
        childObjectiveArray = [],
        archivedSubobjectives = [],
        categoryArray = [],
        dueDate,
        childOf = parentId;

    const getId = () => uniqueID;

    const getName = () => objectiveName;
    const setName = (name) => objectiveName = name.length > 0 ? name: 'Unnamed';  //TODO: CHECK if name is set as unnamed if a new blank one is created
    setName(name); //set on object initialisation

    const addChildObjective = (childId) => {
        //verify that the pushed objectiveObject exists on the database
        childObjectiveArray.push (childId);
    }
    const removeChildObjective = (childObject) => {
        // childObjectiveArray.splice(childObjectiveArray.indexOf(subObjectiveId), 1);
    }
    const getChildObjectives = () => childObjectiveArray;

    const setDueDate = (date) => {}//TODO:
    const getDueDate = () => dueDate;

    const getParentId = () => childOf;
    const updateParentData = (parentId) => {
        if (parentId !== null) {
            //remove as a subobjective from the old parent
            // removeSubobjectiveFromObjectiveById (uniqueID, childOf);
            // objectivesArray.getObjectById(childOf).removeChildObjective(subObjectiveId); //TODO:
            //update parent ID for this objective
            // childOf = parentId;
        }
        //add as a subobjective for the new parent
        if (childOf !== null) { 
            objectivesArray.getObjectById(childOf).addChildObjective(uniqueID);
        };
    }
    updateParentData (childOf);  //need to update the parent ID when first created
    
    return {    getId,
                getName,
                setName,
                addChildObjective,
                removeChildObjective,
                getChildObjectives,
                setDueDate,
                getDueDate,
                getParentId,
            }
}

const getObjectivebyId = (objectiveId) => {
    for (let i = 0; i < objectivesInDOM.length; i++) {
        if (objectivesInDOM[i].getId() == objectiveId) return objectivesInDOM[i];
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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _objectives_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectives.js */ "./src/objectives.js");


// import {displayObjectives} from './displayObjectives.js';


//check if a specific objective is being loaded
//if no specific objective, create the master
    //master

    // const masterObjective = objective.newObjective('Master', null);
    _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.addNew('Master', null);


    let masterId = _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.returnMasterID(); //TEMP


    // console.log( masterId );

    _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.addNew('Sub1', masterId);
    _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.addNew('Sub2', masterId);


    let sub2id = _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.getIdByIndex(1);

    console.log(sub2id);

    _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.addNew('Sub3', sub2id);


    // objective.objectivesArray.addNew('Sub1', masterId);

    console.log( _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.getFullArray()[0].object.getChildObjectives() )

    console.log( _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.getDomElement(masterId, 'board', 1) )


    const contentElement = document.getElementById('content'); //FIXME: put this in a seperate file

    contentElement.appendChild ( _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.getDomElement(masterId, 'board', 1) );

    // console.log( objective.objectivesArray.getChildren(masterId) );

    console.log( _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.getFullArray()[0].object.getChildObjectives() )
    console.log( _objectives_js__WEBPACK_IMPORTED_MODULE_1__.objectivesArray.getFullArray()[0].object.getName() )


    // let masterObjective = objective.newObjective('Master', null);
    // objective.objectivesInDOM.push(masterObjective);  //TEMP - until database
    //     //TODO  - set master differently based on initial page load
    //     //      - master objective to be set using a module, not a public variable

    // //slaves (to do & doing)

    // //TEMP: create some fake todos (replace)
    // let subobjective_1 = objective.newObjective('Sub1', masterObjective.getId());
    // let subobjective_2 = objective.newObjective('Sub2', masterObjective.getId());
    // objective.objectivesInDOM.push (subobjective_1); //TEMP - until database
    // objective.objectivesInDOM.push (subobjective_2); //TEMP - until database
    // let subobjective_3 = objective.newObjective('Sub3', subobjective_2.getId());
    // objective.objectivesInDOM.push (subobjective_3); //TEMP - until database

//display breadcrumb


//display task listing


// objective.objectivesInDOM.forEach((x) => console.log( x.getChildObjectives() ))

// var testVar = objective.objectivesInDOM

//create master element
// displayObjectives (objective.objectivesInDOM[0], 'board');


// displayObjectives ('test'); 

// const displayMode = ( () => {
//     this.board = board;

//     return {board}
// } )();

// displayMode.board


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2ltcG9ydGVkRnVuY3Rpb25zL3VuaXF1ZUlkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL29iamVjdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLm9iamVjdGl2ZS1ncm91cCAuY29sdW1uIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm9iamVjdGl2ZS5ib2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ub2JqZWN0aXZlLmJvYXJkIC5uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi8qIC5vYmplY3RpdmUgLmNvbHVtbiB7XFxuXFxufVxcblxcbi5vYmplY3RpdmUgLmthbmJhbiB7XFxuXFxufVxcblxcbi5vYmplY3RpdmUgLmNoZWNrbGlzdC1pdGVtIHtcXG5cXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7Ozs7Ozs7OztHQVVHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLm9iamVjdGl2ZS1ncm91cCAuY29sdW1uIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm9iamVjdGl2ZS5ib2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ub2JqZWN0aXZlLmJvYXJkIC5uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi8qIC5vYmplY3RpdmUgLmNvbHVtbiB7XFxuXFxufVxcblxcbi5vYmplY3RpdmUgLmthbmJhbiB7XFxuXFxufVxcblxcbi5vYmplY3RpdmUgLmNoZWNrbGlzdC1pdGVtIHtcXG5cXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlaWQobGVuZ3RoKSB7ICAvL3NyYzogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTM0OTQwNC9nZW5lcmF0ZS1yYW5kb20tc3RyaW5nLWNoYXJhY3RlcnMtaW4tamF2YXNjcmlwdFxuICAgIHZhciByZXN1bHQgICAgICAgICAgID0gJyc7XG4gICAgdmFyIGNoYXJhY3RlcnMgICAgICAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG4gICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogXG4gY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgfVxuICAgcmV0dXJuIHJlc3VsdDtcbn0iLCIvKipcbiAqIG9iamVjdGl2ZXNcbiAqICAgLSBob2xkIHVubGltaXRlZCBudW1iZXIgb2Ygb2JqZWN0aXZlc1xuICogICAtIHNwZWNpZnkgYSBwYXJlbnQsIG9iamVjdGl2ZSwgb3IgbnVsbFxuICogICBcbiAqL1xuXG5pbXBvcnQgdW5pcXVlSWRHZW5lcmF0b3IgZnJvbSAnLi9pbXBvcnRlZEZ1bmN0aW9ucy91bmlxdWVJZEdlbmVyYXRvci5qcyc7XG5cbi8vVEVNUCBwcmUtZGF0YWJhc2UgYXJyYXlcbmNvbnN0IG9iamVjdGl2ZXNJbkRPTSA9IFtdO1xuXG5jb25zdCBvYmplY3RpdmVzQXJyYXkgPSAoICgpID0+IHtcbiAgICBjb25zdCBhcnJheSA9IFtdOyAgLy9hcnJheSBvZiBvYmplY3RzIHdpdGggb2JqZWN0IGFuZCBlbGVtZW50IHByb3BlcnRpZXNcbiBcbiAgICBjb25zdCBhZGROZXcgPSAoIG5hbWUsIHBhcmVudElkICkgPT4ge1xuICAgICAgICBhcnJheS5wdXNoICggeyAgb2JqZWN0OiBuZXdPYmplY3RpdmUgKG5hbWUsIHBhcmVudElkKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlRWxlbWVudDogbnVsbCxcbiAgICAgICAgfSApO1xuICAgIH07XG5cbiAgICBjb25zdCBfZ2V0QXJyYXlJbmRleEJ5SWQgPSAodGFyZ2V0SWQpID0+IGFycmF5LmZpbmRJbmRleChhcnJheVZhbCA9PiBhcnJheVZhbC5vYmplY3QuZ2V0SWQoKSA9PT0gdGFyZ2V0SWQpO1xuXG4gICAgY29uc3QgZ2V0T2JqZWN0QnlJZCA9ICh0YXJnZXRJZCkgPT4gYXJyYXlbIF9nZXRBcnJheUluZGV4QnlJZCh0YXJnZXRJZCkgXS5vYmplY3Q7ICAvL1RFTVBcblxuICAgIGNvbnN0IGdldElkQnlJbmRleCA9IChpbmRleCkgPT4gYXJyYXlbaW5kZXhdLm9iamVjdC5nZXRJZCgpO1xuXG4gICAgY29uc3QgZ2V0RG9tRWxlbWVudCA9IChvYmplY3RpdmVJZCwgZGlzcGxheU1vZGUsIGRpc3BsYXlUaWVyKSA9PiB7XG4gICAgICAgIGxldCBvYmplY3RpdmVPYmplY3QgPSBnZXRPYmplY3RCeUlkIChvYmplY3RpdmVJZCk7XG4gICAgICAgIGxldCBjaGlsZHJlbkRvbUVsZW1lbnRzID0gW107XG4gICAgICAgIC8vaWYgZGlzcGxheSB0aWVyIGlzIGxlc3MgdGhhbiB0b3RhbCB0aWVycyBmb3IgdGhpcyBvYmplY3QsIHRoZW4gZ2V0IGNoaWxkcmVuXG4gICAgICAgIGlmIChkaXNwbGF5VGllciA8IGRpc3BsYXlNb2Rlc1tkaXNwbGF5TW9kZV0udGllcnMpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbklkc0FycmF5ID0gb2JqZWN0aXZlT2JqZWN0LmdldENoaWxkT2JqZWN0aXZlcygpO1xuICAgICAgICAgICAgY2hpbGRyZW5Eb21FbGVtZW50cyA9IGNoaWxkcmVuSWRzQXJyYXkubWFwKCAoY2hpbGRJZCkgPT4gb2JqZWN0aXZlc0FycmF5LmdldERvbUVsZW1lbnQoY2hpbGRJZCwgZGlzcGxheU1vZGUsIGRpc3BsYXlUaWVyICsgMSkgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVIdG1sRWxlbWVudCAob2JqZWN0aXZlT2JqZWN0LCBkaXNwbGF5TW9kZSwgZGlzcGxheVRpZXIsIGNoaWxkcmVuRG9tRWxlbWVudHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEZ1bGxBcnJheSA9ICgpID0+IGFycmF5OyAvL1RFTVBcbiAgICBjb25zdCByZXR1cm5NYXN0ZXJJRCA9ICgpID0+IGFycmF5WzBdLm9iamVjdC5nZXRJZCgpOyAvL1RFTVBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZE5ldyxcbiAgICAgICAgZ2V0RnVsbEFycmF5LCAvL1RFTVBcbiAgICAgICAgZ2V0SWRCeUluZGV4LCAvL1RFTVBcbiAgICAgICAgZ2V0T2JqZWN0QnlJZCxcbiAgICAgICAgZ2V0RG9tRWxlbWVudCxcbiAgICAgICAgcmV0dXJuTWFzdGVySUQsIC8vVEVNUFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGRpc3BsYXlNb2RlcyA9IHtcbiAgICAnYm9hcmQnOiB7dGllcnM6IDN9LFxuICAgICdtb2RhbCc6IHt0aWVyczogMn0sXG59XG5cbmNvbnN0IGdlbmVyYXRlSHRtbEVsZW1lbnQgPSAob2JqZWN0aXZlT2JqZWN0LCBkaXNwbGF5TW9kZSwgb2JqZWN0aXZlVGllciwgY2hpbGRyZW5Eb21FbGVtZW50cykgPT4ge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZHJlbkhvbGRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ29iamVjdGl2ZScsIGRpc3BsYXlNb2RlKTtcbiAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBuYW1lRGl2LmlubmVySFRNTCA9IG9iamVjdGl2ZU9iamVjdC5nZXROYW1lKCk7XG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuICAgIGNoaWxkcmVuSG9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NoaWxkcmVuJyk7XG4gICAgY2hpbGRyZW5Eb21FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICBjaGlsZHJlbkhvbGRlckRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChjaGlsZHJlbkhvbGRlckRpdik7XG5cbiAgICByZXR1cm4gbmV3RGl2O1xufVxuXG5jb25zdCBuZXdPYmplY3RpdmUgPSAobmFtZSwgcGFyZW50SWQpID0+IHtcbiAgICBsZXQgdW5pcXVlSUQgPSB1bmlxdWVJZEdlbmVyYXRvcigyMCk7XG4gICAgbGV0IG9iamVjdGl2ZU5hbWUsICAvL2lmIG5hbWUgaXMgYmxhbmssIHJldmlzZWQgd2l0aCBzZXROYW1lLCBiZWxvd1xuICAgICAgICBjaGlsZE9iamVjdGl2ZUFycmF5ID0gW10sXG4gICAgICAgIGFyY2hpdmVkU3Vib2JqZWN0aXZlcyA9IFtdLFxuICAgICAgICBjYXRlZ29yeUFycmF5ID0gW10sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIGNoaWxkT2YgPSBwYXJlbnRJZDtcblxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gdW5pcXVlSUQ7XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gb2JqZWN0aXZlTmFtZTtcbiAgICBjb25zdCBzZXROYW1lID0gKG5hbWUpID0+IG9iamVjdGl2ZU5hbWUgPSBuYW1lLmxlbmd0aCA+IDAgPyBuYW1lOiAnVW5uYW1lZCc7ICAvL1RPRE86IENIRUNLIGlmIG5hbWUgaXMgc2V0IGFzIHVubmFtZWQgaWYgYSBuZXcgYmxhbmsgb25lIGlzIGNyZWF0ZWRcbiAgICBzZXROYW1lKG5hbWUpOyAvL3NldCBvbiBvYmplY3QgaW5pdGlhbGlzYXRpb25cblxuICAgIGNvbnN0IGFkZENoaWxkT2JqZWN0aXZlID0gKGNoaWxkSWQpID0+IHtcbiAgICAgICAgLy92ZXJpZnkgdGhhdCB0aGUgcHVzaGVkIG9iamVjdGl2ZU9iamVjdCBleGlzdHMgb24gdGhlIGRhdGFiYXNlXG4gICAgICAgIGNoaWxkT2JqZWN0aXZlQXJyYXkucHVzaCAoY2hpbGRJZCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZUNoaWxkT2JqZWN0aXZlID0gKGNoaWxkT2JqZWN0KSA9PiB7XG4gICAgICAgIC8vIGNoaWxkT2JqZWN0aXZlQXJyYXkuc3BsaWNlKGNoaWxkT2JqZWN0aXZlQXJyYXkuaW5kZXhPZihzdWJPYmplY3RpdmVJZCksIDEpO1xuICAgIH1cbiAgICBjb25zdCBnZXRDaGlsZE9iamVjdGl2ZXMgPSAoKSA9PiBjaGlsZE9iamVjdGl2ZUFycmF5O1xuXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChkYXRlKSA9PiB7fS8vVE9ETzpcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcblxuICAgIGNvbnN0IGdldFBhcmVudElkID0gKCkgPT4gY2hpbGRPZjtcbiAgICBjb25zdCB1cGRhdGVQYXJlbnREYXRhID0gKHBhcmVudElkKSA9PiB7XG4gICAgICAgIGlmIChwYXJlbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy9yZW1vdmUgYXMgYSBzdWJvYmplY3RpdmUgZnJvbSB0aGUgb2xkIHBhcmVudFxuICAgICAgICAgICAgLy8gcmVtb3ZlU3Vib2JqZWN0aXZlRnJvbU9iamVjdGl2ZUJ5SWQgKHVuaXF1ZUlELCBjaGlsZE9mKTtcbiAgICAgICAgICAgIC8vIG9iamVjdGl2ZXNBcnJheS5nZXRPYmplY3RCeUlkKGNoaWxkT2YpLnJlbW92ZUNoaWxkT2JqZWN0aXZlKHN1Yk9iamVjdGl2ZUlkKTsgLy9UT0RPOlxuICAgICAgICAgICAgLy91cGRhdGUgcGFyZW50IElEIGZvciB0aGlzIG9iamVjdGl2ZVxuICAgICAgICAgICAgLy8gY2hpbGRPZiA9IHBhcmVudElkO1xuICAgICAgICB9XG4gICAgICAgIC8vYWRkIGFzIGEgc3Vib2JqZWN0aXZlIGZvciB0aGUgbmV3IHBhcmVudFxuICAgICAgICBpZiAoY2hpbGRPZiAhPT0gbnVsbCkgeyBcbiAgICAgICAgICAgIG9iamVjdGl2ZXNBcnJheS5nZXRPYmplY3RCeUlkKGNoaWxkT2YpLmFkZENoaWxkT2JqZWN0aXZlKHVuaXF1ZUlEKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlUGFyZW50RGF0YSAoY2hpbGRPZik7ICAvL25lZWQgdG8gdXBkYXRlIHRoZSBwYXJlbnQgSUQgd2hlbiBmaXJzdCBjcmVhdGVkXG4gICAgXG4gICAgcmV0dXJuIHsgICAgZ2V0SWQsXG4gICAgICAgICAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgICAgICAgICBzZXROYW1lLFxuICAgICAgICAgICAgICAgIGFkZENoaWxkT2JqZWN0aXZlLFxuICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkT2JqZWN0aXZlLFxuICAgICAgICAgICAgICAgIGdldENoaWxkT2JqZWN0aXZlcyxcbiAgICAgICAgICAgICAgICBzZXREdWVEYXRlLFxuICAgICAgICAgICAgICAgIGdldER1ZURhdGUsXG4gICAgICAgICAgICAgICAgZ2V0UGFyZW50SWQsXG4gICAgICAgICAgICB9XG59XG5cbmNvbnN0IGdldE9iamVjdGl2ZWJ5SWQgPSAob2JqZWN0aXZlSWQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdGl2ZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAob2JqZWN0aXZlc0luRE9NW2ldLmdldElkKCkgPT0gb2JqZWN0aXZlSWQpIHJldHVybiBvYmplY3RpdmVzSW5ET01baV07XG4gICAgfVxufVxuXG5leHBvcnQge25ld09iamVjdGl2ZSwgb2JqZWN0aXZlc0FycmF5LCBnZXRPYmplY3RpdmVieUlkfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBvYmplY3RpdmUgZnJvbSAnLi9vYmplY3RpdmVzLmpzJztcbi8vIGltcG9ydCB7ZGlzcGxheU9iamVjdGl2ZXN9IGZyb20gJy4vZGlzcGxheU9iamVjdGl2ZXMuanMnO1xuXG5cbi8vY2hlY2sgaWYgYSBzcGVjaWZpYyBvYmplY3RpdmUgaXMgYmVpbmcgbG9hZGVkXG4vL2lmIG5vIHNwZWNpZmljIG9iamVjdGl2ZSwgY3JlYXRlIHRoZSBtYXN0ZXJcbiAgICAvL21hc3RlclxuXG4gICAgLy8gY29uc3QgbWFzdGVyT2JqZWN0aXZlID0gb2JqZWN0aXZlLm5ld09iamVjdGl2ZSgnTWFzdGVyJywgbnVsbCk7XG4gICAgb2JqZWN0aXZlLm9iamVjdGl2ZXNBcnJheS5hZGROZXcoJ01hc3RlcicsIG51bGwpO1xuXG5cbiAgICBsZXQgbWFzdGVySWQgPSBvYmplY3RpdmUub2JqZWN0aXZlc0FycmF5LnJldHVybk1hc3RlcklEKCk7IC8vVEVNUFxuXG5cbiAgICAvLyBjb25zb2xlLmxvZyggbWFzdGVySWQgKTtcblxuICAgIG9iamVjdGl2ZS5vYmplY3RpdmVzQXJyYXkuYWRkTmV3KCdTdWIxJywgbWFzdGVySWQpO1xuICAgIG9iamVjdGl2ZS5vYmplY3RpdmVzQXJyYXkuYWRkTmV3KCdTdWIyJywgbWFzdGVySWQpO1xuXG5cbiAgICBsZXQgc3ViMmlkID0gb2JqZWN0aXZlLm9iamVjdGl2ZXNBcnJheS5nZXRJZEJ5SW5kZXgoMSk7XG5cbiAgICBjb25zb2xlLmxvZyhzdWIyaWQpO1xuXG4gICAgb2JqZWN0aXZlLm9iamVjdGl2ZXNBcnJheS5hZGROZXcoJ1N1YjMnLCBzdWIyaWQpO1xuXG5cbiAgICAvLyBvYmplY3RpdmUub2JqZWN0aXZlc0FycmF5LmFkZE5ldygnU3ViMScsIG1hc3RlcklkKTtcblxuICAgIGNvbnNvbGUubG9nKCBvYmplY3RpdmUub2JqZWN0aXZlc0FycmF5LmdldEZ1bGxBcnJheSgpWzBdLm9iamVjdC5nZXRDaGlsZE9iamVjdGl2ZXMoKSApXG5cbiAgICBjb25zb2xlLmxvZyggb2JqZWN0aXZlLm9iamVjdGl2ZXNBcnJheS5nZXREb21FbGVtZW50KG1hc3RlcklkLCAnYm9hcmQnLCAxKSApXG5cblxuICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTsgLy9GSVhNRTogcHV0IHRoaXMgaW4gYSBzZXBlcmF0ZSBmaWxlXG5cbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZCAoIG9iamVjdGl2ZS5vYmplY3RpdmVzQXJyYXkuZ2V0RG9tRWxlbWVudChtYXN0ZXJJZCwgJ2JvYXJkJywgMSkgKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCBvYmplY3RpdmUub2JqZWN0aXZlc0FycmF5LmdldENoaWxkcmVuKG1hc3RlcklkKSApO1xuXG4gICAgY29uc29sZS5sb2coIG9iamVjdGl2ZS5vYmplY3RpdmVzQXJyYXkuZ2V0RnVsbEFycmF5KClbMF0ub2JqZWN0LmdldENoaWxkT2JqZWN0aXZlcygpIClcbiAgICBjb25zb2xlLmxvZyggb2JqZWN0aXZlLm9iamVjdGl2ZXNBcnJheS5nZXRGdWxsQXJyYXkoKVswXS5vYmplY3QuZ2V0TmFtZSgpIClcblxuXG4gICAgLy8gbGV0IG1hc3Rlck9iamVjdGl2ZSA9IG9iamVjdGl2ZS5uZXdPYmplY3RpdmUoJ01hc3RlcicsIG51bGwpO1xuICAgIC8vIG9iamVjdGl2ZS5vYmplY3RpdmVzSW5ET00ucHVzaChtYXN0ZXJPYmplY3RpdmUpOyAgLy9URU1QIC0gdW50aWwgZGF0YWJhc2VcbiAgICAvLyAgICAgLy9UT0RPICAtIHNldCBtYXN0ZXIgZGlmZmVyZW50bHkgYmFzZWQgb24gaW5pdGlhbCBwYWdlIGxvYWRcbiAgICAvLyAgICAgLy8gICAgICAtIG1hc3RlciBvYmplY3RpdmUgdG8gYmUgc2V0IHVzaW5nIGEgbW9kdWxlLCBub3QgYSBwdWJsaWMgdmFyaWFibGVcblxuICAgIC8vIC8vc2xhdmVzICh0byBkbyAmIGRvaW5nKVxuXG4gICAgLy8gLy9URU1QOiBjcmVhdGUgc29tZSBmYWtlIHRvZG9zIChyZXBsYWNlKVxuICAgIC8vIGxldCBzdWJvYmplY3RpdmVfMSA9IG9iamVjdGl2ZS5uZXdPYmplY3RpdmUoJ1N1YjEnLCBtYXN0ZXJPYmplY3RpdmUuZ2V0SWQoKSk7XG4gICAgLy8gbGV0IHN1Ym9iamVjdGl2ZV8yID0gb2JqZWN0aXZlLm5ld09iamVjdGl2ZSgnU3ViMicsIG1hc3Rlck9iamVjdGl2ZS5nZXRJZCgpKTtcbiAgICAvLyBvYmplY3RpdmUub2JqZWN0aXZlc0luRE9NLnB1c2ggKHN1Ym9iamVjdGl2ZV8xKTsgLy9URU1QIC0gdW50aWwgZGF0YWJhc2VcbiAgICAvLyBvYmplY3RpdmUub2JqZWN0aXZlc0luRE9NLnB1c2ggKHN1Ym9iamVjdGl2ZV8yKTsgLy9URU1QIC0gdW50aWwgZGF0YWJhc2VcbiAgICAvLyBsZXQgc3Vib2JqZWN0aXZlXzMgPSBvYmplY3RpdmUubmV3T2JqZWN0aXZlKCdTdWIzJywgc3Vib2JqZWN0aXZlXzIuZ2V0SWQoKSk7XG4gICAgLy8gb2JqZWN0aXZlLm9iamVjdGl2ZXNJbkRPTS5wdXNoIChzdWJvYmplY3RpdmVfMyk7IC8vVEVNUCAtIHVudGlsIGRhdGFiYXNlXG5cbi8vZGlzcGxheSBicmVhZGNydW1iXG5cblxuLy9kaXNwbGF5IHRhc2sgbGlzdGluZ1xuXG5cbi8vIG9iamVjdGl2ZS5vYmplY3RpdmVzSW5ET00uZm9yRWFjaCgoeCkgPT4gY29uc29sZS5sb2coIHguZ2V0Q2hpbGRPYmplY3RpdmVzKCkgKSlcblxuLy8gdmFyIHRlc3RWYXIgPSBvYmplY3RpdmUub2JqZWN0aXZlc0luRE9NXG5cbi8vY3JlYXRlIG1hc3RlciBlbGVtZW50XG4vLyBkaXNwbGF5T2JqZWN0aXZlcyAob2JqZWN0aXZlLm9iamVjdGl2ZXNJbkRPTVswXSwgJ2JvYXJkJyk7XG5cblxuLy8gZGlzcGxheU9iamVjdGl2ZXMgKCd0ZXN0Jyk7IFxuXG4vLyBjb25zdCBkaXNwbGF5TW9kZSA9ICggKCkgPT4ge1xuLy8gICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcblxuLy8gICAgIHJldHVybiB7Ym9hcmR9XG4vLyB9ICkoKTtcblxuLy8gZGlzcGxheU1vZGUuYm9hcmRcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9