import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
    render() { 
        return ( 
            <div> Howdy, {this.props.name} from greeting.js!</div>
        );
    }
};

ReactDOM.render(
    <Greeting name="troy"/>,
    document.getElementById('greeting')
);

export default Greeting;