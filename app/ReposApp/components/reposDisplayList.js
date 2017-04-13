import React, { Component } from 'react';
import { Link } from 'react-router';

class ReposList extends Component {
    componentWillMount(){
        this.props.fetchRepos();
    }
    renderRepos(repos){
        return repos.map((repo) => {
            return (
                <li className="list-group-item" key={repo.id}>
                   // <Link style={{color:'black'}} to={"posts/"}>
                        <h3 className="list-group-item">repo.name</h3>
                   // </Link>
                </li>
            );
        });
    }

    render(){
        const { repos, loading, error } = this.props.reposList;

        if(loading){
            return <div className="container"><h1>repos</h1><h3>Loading...</h3></div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return(
            <div className="container">
                <h1>Posts</h1>
                <ul className="list-group">
                    {this.renderRepos(repos)}
                </ul>
            </div>
        );
    }
}

export default ReposList;