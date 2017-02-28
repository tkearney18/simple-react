import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import About from '../about.js';

class Nav extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <Route path="/about" component={About}/>
            </Router>
        );
    }
}

ReactDOM.render(<Nav />, document.getElementById('navbar'));