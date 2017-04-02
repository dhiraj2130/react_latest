/**
 * Created by dhiraj.kumar on 31/03/2017.
 */
const todoReducer = (state, action) => {
    "use strict";
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {id:action.id, text: action.text, completed:false}]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if(todo.id !== action.id){
                    return todo
                }
                return Object.assign({}, todo, {completed: !todo.completed})
            })
        case 'SET_VISIBILITY_FILTER': {
            return action.filter
        }
        default:
            return state
    }
}