/**
 * Created by dhiraj.kumar on 4/04/2017.
 */
import React from 'react'
import AddToDo from './containers/AddToDo'
import VisibleToDoList from './containers/VisibleToDoList'

const App = () => {
    "use strict";
    return (
        <div className="col-md-4">
            <h2 className="text-center">
                Add To List Application
            </h2>
            <AddToDo/>
            <VisibleToDoList/>
        </div>
    )
}

export default App