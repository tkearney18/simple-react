import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

class Nav extends Component {
    render() {
        return (
            <Router>
                <Route path="about" />
            </Router>
        );
    }
}

ReactDOM.render(<Nav />, 'navbar');