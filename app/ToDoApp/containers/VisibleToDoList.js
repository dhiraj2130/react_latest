/**
 * Created by dhiraj.kumar on 4/04/2017.
 */
import { connect } from 'react-redux'
import ToDoList from '../components/ToDoList'
import {ToggleToDo} from '../actions'

const mapStateToProps = (state) =>{
    "use strict";
    return {
        todos: state.todos
    }
}
const mapDispatchToProps =(dispatch) =>{
    "use strict";
    return {
        onToDoClick : (id) => {
            dispatch(ToggleToDo(id))
        }
    }
}

const VisibleToDoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)

export default VisibleToDoList
