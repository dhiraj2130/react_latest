/**
 * Created by dhiraj.kumar on 15/02/2017.
 */
var React = require('react');
var SearchGitHub = require('./SearchGitHub');
var ResponsiveTest = require('./ResponsiveTest');


var Main = React.createClass({
    render:function(){
        "use strict";
        return (
                <div className="main-container">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="col-sm-6 " style={{marginTop: 15}}>
                            <SearchGitHub/>
                        </div>
                        <div className="col-sm-2 " style={{marginTop: 15}}>
                            <ResponsiveTest/>
                        </div>
                    </nav>
                    <div className="container">
                       {this.props.children}
                    </div>
                </div>

        )
    }
});

module.exports = Main;