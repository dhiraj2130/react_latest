/**
 * Created by dhiraj.kumar on 31/03/2017.
 */
export const addTodo = (text) => {
    return {
        type : 'ADD_TODO',
        id: nextTodoId++,
        text,
        completed: false
    }
}

export const setVisibilityFilter = (filter) => {
    "use strict";
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter,
    }
}

export const toggleTodo = (id) => {
    "use strict";
    return {
        type: 'TOGGLE_TODO',
        id
    }
}