import './css/style.css';
import * as objective from './objectives.js';
// import {displayObjectives} from './displayObjectives.js';


//check if a specific objective is being loaded
//if no specific objective, create the master
    //master

    // const masterObjective = objective.newObjective('Master', null);
    objective.objectivesArray.addNew('Master', null);


    let masterId = objective.objectivesArray.returnMasterID(); //TEMP


    // console.log( masterId );

    objective.objectivesArray.addNew('Sub1', masterId);
    objective.objectivesArray.addNew('Sub2', masterId);


    let sub2id = objective.objectivesArray.getIdByIndex(1);

    console.log(sub2id);

    objective.objectivesArray.addNew('Sub3', sub2id);


    // objective.objectivesArray.addNew('Sub1', masterId);

    console.log( objective.objectivesArray.getFullArray()[0].object.getChildObjectives() )

    console.log( objective.objectivesArray.getDomElement(masterId, 'board', 1) )


    const contentElement = document.getElementById('content'); //FIXME: put this in a seperate file

    contentElement.appendChild ( objective.objectivesArray.getDomElement(masterId, 'board', 1) );

    // console.log( objective.objectivesArray.getChildren(masterId) );

    console.log( objective.objectivesArray.getFullArray()[0].object.getChildObjectives() )
    console.log( objective.objectivesArray.getFullArray()[0].object.getName() )


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

