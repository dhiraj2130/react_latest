import React from 'react';

const visibilityfilter = (state='SHOW_ALL',action) => {
    "use strict";
    switch(action.type){
        case SET_VISIBILITY_FILTER :
            return action.filter
        default:
            return state
    }
}

export default visibilityfilter