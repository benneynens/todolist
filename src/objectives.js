/**
 * objectives
 *   - hold unlimited number of objectives
 *   - specify a parent, objective, or null
 *   
 */

import uniqueIdGenerator from './importedFunctions/uniqueIdGenerator.js';

const objective = (name) => {
    let uniqueID = uniqueIdGenerator(20);
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

export {objective}