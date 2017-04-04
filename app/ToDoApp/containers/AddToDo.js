import AddToDoForm from '../components/AddToDoForm'

import { connect } from 'react-redux'
import { addToDo } from '../actions'

const mapDispatchToProps = (dispatch) => {
    "use strict";
    return {
        onSubmit : (text) =>{
            dispatch(addToDo(text))
        }
    }
}

let AddToDo = connect(null, mapDispatchToProps)(AddToDoForm)

export default AddToDo