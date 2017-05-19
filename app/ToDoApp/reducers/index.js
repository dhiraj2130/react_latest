/**
 * Created by dhiraj.kumar on 4/04/2017.
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityfilter from './setvisibilityfilter'

const todoApp = combineReducers({
    todos,
    visibilityfilter
})

export default todoApp