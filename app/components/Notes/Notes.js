/**
 * Created by dhiraj.kumar on 16/02/2017.
 */
var React = require('react');
var NotesList = require('./NotesList');
var AddNote= require('./AddNote');

var Notes = React.createClass({

    render : function(){
        console.log('Notes', this.props.notes)
        "use strict";

        return (
            <div>
                <AddNote username={this.props.username} addNote={this.props.addNote}/>
               <NotesList notes={this.props.notes}/>
            </div>
        )
    }
});

module.exports = Notes;