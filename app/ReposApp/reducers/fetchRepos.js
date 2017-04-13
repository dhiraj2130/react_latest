
import {
    FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE
} from '../actions';

const INITIAL_STATE = { reposList:
    { repos:[],
    error:null,
    loading:false
    }
};

export default function(state = INITIAL_STATE, action){
    "use strict";
    let error;
    switch(action.type){
        case FETCH_REPOS:
            return {...state, reposList: {repos:[], error: null, loading: true }};
        case FETCH_REPOS_SUCCESS:
            return {...state, reposList :{ repos: action.payload, error: null, loading: false }}
        case FETCH_REPOS_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, reposList:{ repos: [], error:null, loading:false}};
        default:
            return state
    }
}