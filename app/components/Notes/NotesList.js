/**
 * Created by dhiraj.kumar on 16/02/2017.
 */
var React = require('react');

var NotesList = React.createClass({
    render:function(){
        "use strict";
        var notes = this.props.notes.map(function(note,index){
            return <li className="list-group-item" key={index}>{note['.value']}</li>
        })
        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
})

module.exports = NotesList;