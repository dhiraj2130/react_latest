/**
 * Created by dhiraj.kumar on 4/04/2017.
 */
import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({todos, onToDoClick}) => {
    return (
    <ul className="list-group" >
        {todos.map(todo =>
            <ToDo
                key={todo.id}
                {...todo}
                onClick ={() => onToDoClick(todo.id)}
             />
        )}
    </ul>
    )
}

export default ToDoList