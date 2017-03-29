
var React = require('react');
var Router = require('react-router');

var ResponsiveTest = React.createClass({
    mixins:[Router.History],
    handleSubmit : function(){
        "use strict";
       
        this.history.pushState(null,'/responsive');
        
    },
    render:function(){
        "use strict";
        return(
            <div >
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-sm-12">
                <button type="submit" className="btn btn-block btn-primary">Responsive Page</button>
                </div>
                </form>

            </div>
        )
    }
})
module.exports = ResponsiveTest;
