/**
 * Created by dhiraj.kumar on 15/02/2017.
 */
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Router;
var IndexRoute = Router.IndexRoute;
var Profile = require('../components/profile');
var ResponsivePage = require('../components/responsive/ResponsivePage')

module.exports = (
    <Route path="/" component={Main}>
        <Route path="profile/:username" component ={Profile} />
        <Route path="responsive" component ={ResponsivePage} />
        <IndexRoute component ={Home}/>
    </Route>
);
