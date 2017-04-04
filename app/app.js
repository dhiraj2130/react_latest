/**
 * Created by dhiraj.kumar on 15/02/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './ToDoApp/reducers'
let store = createStore(todoApp)

ReactDOM.render(
   // <Router>{routes}</Router>,
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)