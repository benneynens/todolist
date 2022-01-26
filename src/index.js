import './css/style.css';
import * as objective from './objectives.js';


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


