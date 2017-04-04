
let nextToDoId =0;

export const addToDo =(text) => {
    "use strict";
    return {
        id:nextToDoId++,
        type:'ADD_TODO',
        text
    }
}
