/**
 * Created by dhiraj.kumar on 4/04/2017.
 */
import { combineReducers } from 'redux'
import todos from './todos'

const todoApp = combineReducers({
    todos
})

export default todoApp