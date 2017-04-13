
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, browserHistory } from 'react-router';
var routes = require('./config/routes');
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './ToDoApp/reducers'

let store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
)