
let nextToDoId =0;

export const addToDo =(text) => ({
        id:nextToDoId++,
        type:'ADD_TODO',
        text
})

export const ToggleToDo = (id) => ({
        type: 'TOGGLE_TODO',
        id
})

export const SetVisibilityFilter = text => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

