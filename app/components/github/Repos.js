/**
 * Created by dhiraj.kumar on 16/02/2017.
 */
var React = require('react');

var Repos = React.createClass({
    render : function(){
        console.log("Repos"+this.props.repos);
        var repos = this.props.repos.map(function(repo, index){
            return (
                <li className="list-group-item" key={index}>
                    {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                    {repo.description && <p>{repo.description}</p>}
                </li>
            )
        })
        return (
            <div>
            <p> Repos : </p>
                <ui className="list-group">
                    {repos}
                    </ui>
            </div>
        )
    }
});

module.exports = Repos;