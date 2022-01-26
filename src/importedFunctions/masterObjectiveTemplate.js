import objectivesArray from '../objectives.js';

const templateObjectivesArray = [
    {name: 'Master', parentID: null, id: 'master'},
    {name: 'To Do', parentID: 'master', id: 'todo'},
    {name: 'Doing', parentID: 'master', id: 'doing'},
    {name: 'Sample Task', parentID: 'todo'},
];

const addTemplateObjectivesToArray = () => {
    templateObjectivesArray.forEach( (x) => objectivesArray.addNew(x.name, x.parentID, x.id));
    
};

export default addTemplateObjectivesToArray;