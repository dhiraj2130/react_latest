/**
 * Created by dhiraj.kumar on 4/04/2017.
 */
import React from 'react'

const ToDo = ({ onClick, completed, text}) => {
    // "use strict";
    return (
        <li className="list-group-item"
        onClick={onClick}
        style={{
        textDecoration : completed ?'line-through' :'none'
        }}
        >
        {text}
        </li>
    )
}

export default ToDo