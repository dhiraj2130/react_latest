import axios from 'axios'

export const FETCH_REPOS = 'FETCH_POSTS';
export const FETCH_REPOS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_POSTS_FAILURE';

const ROOT_URL = 'https://api.github.com/users/dhiraj2130';

export function fetchRepos(){
    "use strict";
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/repos`,
        headers: []
    });
    return {
        type:FETCH_REPOS,
        payload: request //.map(repos => repos.full_name)
    };
}

export function fetchReposSuccess(repos){
    "use strict";
    return{
        type:FETCH_REPOS_SUCCESS,
        payload: repos
    };
}

export function fetchReposFailure(error){
    "use strict";
    return {
        type: FETCH_REPOS_FAILURE,
        payload: error
    };
}