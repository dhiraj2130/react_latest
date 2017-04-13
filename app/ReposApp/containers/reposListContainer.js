import { connect } from 'react-redux'
import {fetchRepos, fetchReposSuccess, fetchReposFailure } from '../actions'
import ReposList from '../components/reposDisplayList'

const mapStateToProps = (state) =>{
    "use strict";
    return {
        reposList: state.reposList
    };
}

const mapDispatchToProps = (dispatch) => {
    "use strict";
    return {
        fetchRepos : () =>{
            dispatch()
        }
    }
}