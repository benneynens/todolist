import { contentElement } from "./onPageElements.js";
import objectivesArray from '../objectives.js';
import addTemplateObjectivesToArray from './masterObjectiveTemplate.js';


addTemplateObjectivesToArray();

const rebuildDOM = (targetId, objectiveTier) => {
    console.log (objectiveTier)
    if (targetId === undefined) {
        contentElement.innerHTML = '';
        contentElement.appendChild ( objectivesArray.getDomElement('master', 'board', 1) );
        return;
    }
    const replacementDiv = objectivesArray.getDomElement(targetId, 'board', objectiveTier);
    const divToReplace = document.getElementById(targetId);
    divToReplace.parentNode.replaceChild(replacementDiv, divToReplace);
}

export default rebuildDOM;