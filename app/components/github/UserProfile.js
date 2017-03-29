/**
 * Created by dhiraj.kumar on 16/02/2017.
 */
var React = require('react');

var UserProfile = React.createClass({
    render : function(){
        console.log(" bio "+ this.props.bio)
        "use strict";
        return (
            <div>
                {this.props.bio.avatar_url && <li className="list-group-item"><img src={this.props.bio.avatar_url} className="img-responsive"/></li>}
            </div>
        )
    }
});

module.exports = UserProfile;