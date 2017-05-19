import React from 'react';

const setVisibilityFilter = ({filterValue, filterCallback}) =>{
    return (
        <button onClick="filterCallback()">showall</button>

    )

}

export default setVisibilityFilter