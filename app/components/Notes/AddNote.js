/**
 * Created by dhiraj.kumar on 16/02/2017.
 */
var React = require('react');

var AddNote= React.createClass ({
    setRef:function(ref){
        "use strict";
        this.note = ref;
    },
    handleSubmit:function(){
    var newNote = this.note.value;
        this.note.value ='';
        this.props.addNote(newNote);
    },
    render: function(){
        "use strict";
        return (
            <div className="input-group">
            <input type="text" className="form-control" placeholder="add new note" ref={this.setRef}/>
             <span className="input-group-btn">
                 <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
                 </span>
            </div>
        )
    }
})



module.exports = AddNote;