/**
 * objectives
 *   - hold unlimited number of objectives
 *   - specify a parent, objective, or null
 *   
 */

import uniqueIdGenerator from './importedFunctions/uniqueIdGenerator.js';

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
    let uniqueID = uniqueIdGenerator(20);
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

export {newObjective, objectivesArray, getObjectivebyId}