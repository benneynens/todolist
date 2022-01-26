/**
 * objectives
 *   - hold unlimited number of objectives
 *   - specify a parent, objective, or null
 *   
 */

import rebuildDOM from './importedFunctions/rebuildDOM.js';
import uniqueIdGenerator from './importedFunctions/uniqueIdGenerator.js';

const objectivesArray = ( () => {
    const array = [];  //array of objects with object and element properties
 
    const addNew = ( name, parentId, id ) => {
        array.push ( newObjective (name, parentId, id));
    };

    const _getArrayIndexById = (targetId) => array.findIndex(arrayVal => arrayVal.getId() === targetId);

    const getObjectById = (targetId) => array[ _getArrayIndexById(targetId) ];  //TEMP

    const getIdByIndex = (index) => array[index].getId();

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

    const returnMasterID = () => array[0].getId(); //TEMP

    return {
        addNew,
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
    //variables
    const objectiveId = objectiveObject.getId();
    //parent div
    const newObjectiveDiv = document.createElement('div');
    newObjectiveDiv.id = objectiveId;
    newObjectiveDiv.classList.add('objective', displayMode);
    //name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.innerHTML = objectiveObject.getName();
    //children container
    const childrenContainerDiv = document.createElement('div');
    childrenContainerDiv.classList.add('children');
    //add new input
    const addNewChildInput = document.createElement('input');
    addNewChildInput.placeholder = 'New Task';
    //add new button
    const addNewChildButton = document.createElement('button');
    addNewChildButton.innerHTML = 'Add';
    addNewChildButton.classList.add('addNewChildObjective');
    addNewChildButton.objectiveId = objectiveId;
    addNewChildButton.objectiveTier = objectiveTier;
    addNewChildButton.input = addNewChildInput;
    addNewChildButton.addEventListener('click', addNewClicked);

    //structure the div
    newObjectiveDiv.appendChild(nameDiv);
    childrenDomElements.forEach(function(element){
        childrenContainerDiv.appendChild(element);
    });
    newObjectiveDiv.appendChild(childrenContainerDiv);
    newObjectiveDiv.appendChild(addNewChildInput);
    newObjectiveDiv.appendChild(addNewChildButton);

    return newObjectiveDiv;
}

function addNewClicked (evt) {
    const newTaskName = evt.currentTarget.input.value;
    const parentId = evt.currentTarget.objectiveId;
    const objectiveTier = evt.currentTarget.objectiveTier;
    objectivesArray.addNew(newTaskName, parentId);

    rebuildDOM(parentId, objectiveTier);
}

const newObjective = (name, parentId, uniqueID = uniqueIdGenerator(20) ) => {
    // let uniqueID = ;
    let objectiveName,  //if name is blank, revised with setName, below
        childObjectiveArray = [],
        archivedSubobjectives = [],
        categoryArray = [],
        dueDate,
        childOf = parentId;

        console.log(uniqueID);


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

    //update local storage
    localStorage.objectivesArray = objectivesArray;
    
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

export default objectivesArray