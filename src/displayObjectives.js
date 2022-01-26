import * as objective from './objectives.js';

// const displayModes = {
//     'board': {tiers: 3},
//     'modal': {tiers: 2},
// }

export const displayObjectives = (masterObjective, displayMode) => {
    //get the on-page content element
    const contentElement = document.getElementById('content'); //FIXME: put this in a seperate file

    //create an objects tree
    let objectsTree = [];
    //create master objective
    const masterObjectiveDiv = createObjectiveDiv (masterObjective, displayMode, 1);
    //get children of master
    const mastersChildrenDivArray = masterObjective.getChildObjectives();

    //if displaying 3 tiers of objectives, get children's children


    // add the masters children array to the masterObjectiveObject
    const mastersChildrenDiv = masterObjectiveDiv.getElementsByClassName('children')[0];
    mastersChildrenDivArray.forEach(child => {
        const mastersChildDiv = createObjectiveDiv(child, displayMode, 2);
        //iterate through the children, getting their children as necessary
        if (displayModes[displayMode].tiers === 3) {
            // get children of mastersChild
            let childsChildrenArray = child.getChildObjectives();
            const childsChildrenDiv = mastersChildDiv.getElementsByClassName('children')[0];
            childsChildrenArray.forEach(childsChild => {
                let mastersChildsChildrenDiv = createObjectiveDiv(childsChild, displayMode, 3);
                childsChildrenDiv.appendChild(mastersChildsChildrenDiv)
            });
        }


        //display on the page
        mastersChildrenDiv.appendChild( mastersChildDiv );
    });


    // console.log(mastersChildrenArray);
    contentElement.appendChild(masterObjectiveDiv);

}


// const createObjectiveDiv = (objective, displayMode, objectiveTier) => {
//     const newDiv = document.createElement('div');
//     const nameDiv = document.createElement('div');
//     const childrenHolderDiv = document.createElement('div');

//     newDiv.classList.add('objective', displayMode);
//     nameDiv.classList.add('name');
//     nameDiv.innerHTML = objective.getName();
//     newDiv.appendChild(nameDiv);
//     childrenHolderDiv.classList.add('children');
//     newDiv.appendChild(childrenHolderDiv);

//     return newDiv;
// }