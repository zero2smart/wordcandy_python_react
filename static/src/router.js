import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Main from './views/main';
import Dashboard from './views/dashboard';
import Landing from './views/landing';

function run() {
    ReactDOM.render(( <
        Router history = { browserHistory } >
        <
        Route path = "/"
        component = { Main }
        /> <
        Route path = "/dashboard"
        component = { Dashboard }
        /> <
        Route path = "/landing"
        component = { Landing }
        /> <
        /Router>
    ), document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}