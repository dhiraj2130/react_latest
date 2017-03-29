/**
 * Created by dhiraj.kumar on 16/02/2017.
 */
var React = require('react');
var Router = require('react-router');
var Repos = require('./github/Repos');
var UserProfile = require('./github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var Helper = require('../utils/helper');

var Profile = React.createClass({
    mixins:[ReactFireMixin],
    getInitialState: function(){
        "use strict";
      return{
          notes:[1,2,3],
          bio:{
              
          },
          repos:[]
      }
    },
    componentDidMount : function(){
        "use strict";
      this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
      this.init(this.props.params.username);
    },
    handleAddNote:function(newNote){
        "use strict";
        this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);

    },
    componentWillUnmount : function(){
        "use strict";
      this.unbind('notes');
    },
    componentWillReceiveProps :function(nextProps){
        "use strict";
        this.unbind('notes');
this.init(nextProps.params.username);

    },
    init:function(username){
        "use strict";
        var childRef = this.ref.child(username);
        this.bindAsArray(childRef, 'notes');

        Helper.getGitHubInfo(username)
            .then(function(data){
                this.setState({
                    bio:data.bio,
                    repos:data.repos
                })
            }.bind(this))
    },
    render:function(){
        // console.log(this.props);
     return (
         <div className="row" >
             <div className="col-md-4">
                 <UserProfile username={this.props.params.username} bio={this.state.bio}/>
            </div>
             <div className="col-md-4">
            <Repos username={this.props.params.username} repos={this.state.repos}/>
             </div>
             <div className="col-md-4">
                <Notes username={this.props.params.username}
                       notes={this.state.notes}
                       addNote={this.handleAddNote}/>
             </div>
         </div>
        )
    }
}
)

module.exports = Profile ;