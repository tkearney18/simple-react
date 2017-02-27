import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class MyHeader extends React.Component {
render() {
    return(
        <div className="jumbotron">
            <h1>This is a sample React site.</h1>
            <p>The components on this page are coming from different files!</p>
        </div>
        );
    }
}

ReactDOM.render(<MyHeader/>, document.getElementById('header'));