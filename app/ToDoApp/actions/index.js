
let nextToDoId =0;

export const addToDo =(text) => {
    "use strict";
    return {
        id:nextToDoId++,
        type:'ADD_TODO',
        text
    }
}

export const ToggleToDo = (id) => {
    "use strict";
    return{
        type: 'TOGGLE_TODO',
        id
    }
}

