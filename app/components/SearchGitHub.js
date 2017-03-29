/**
 * Created by dhiraj.kumar on 16/02/2017.
 */
var React = require('react');
var Router = require('react-router');

var SearchGitHub = React.createClass({
    mixins:[Router.History],
    getRef :function(ref){
    this.usernameRef = ref;
    },
    handleSubmit : function(){
        "use strict";
        var  username = this.usernameRef.value;
        this.usernameRef.value ='';
        this.history.pushState(null,'/profile/'+username);
        
    },
    render:function(){
        "use strict";
        return(
            <div >
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-sm-7">
                    <input type="text" className="form-control" ref={this.getRef} />
                    </div>
                <div className="form-group col-sm-5">
                <button type="submit" className="btn btn-block btn-primary">search github</button>
                </div>
                </form>

            </div>
        )
    }
})
module.exports = SearchGitHub;
