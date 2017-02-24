import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
// ES5 sample todo list

/*
* This is the main app for the todo list. Calls all the other components to be rendered
*/
var TodoApp = React.createClass({
	getInitialState: function(){
		return {items: []};
	},
	updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function(){
		return (
			<div>
				<TodoBanner/>
				<TodoList items={this.state.items}/>
				<TodoForm onFormSubmit={this.updateItems}/>
			</div>
		);
	}
});

var TodoBanner = React.createClass({
	render: function(){
		return (
			<h3>TODO LIST</h3>
		);
	}
});

var TodoList = React.createClass({
	render: function() {
        // in a list that uses the .map function, keys are needed
        // Math.random() is used to generate a key.
        var id = Math.random();
		var createItem = function(itemText, id) {
			return (
				<TodoListItem key={id}>{itemText}</TodoListItem>
			);
		};
		return <ul>{this.props.items.map(createItem, id)}</ul>;
	}
});

var TodoListItem = React.createClass({
	render: function(){
		return (
			<li>{this.state.item} - {this.state.desc}</li>
		);
	}
});

var TodoForm = React.createClass({
	getInitialState: function() {
		return {item: '', desc: ''};
	},
	handleSubmit: function(e){
		e.preventDefault();
		this.props.onFormSubmit(this.state.item, this.state.desc);
		this.setState({item: '', desc: ''});
		ReactDOM.findDOMNode(this.refs.item).focus();
		return;
	},
	onChange: function(e){
		this.setState({
			[e.target.name]: e.target.value
		});
	},
    
	render: function(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' name='item' ref='item' onChange={this.onChange} value={this.state.item}/>
                <input type='text' name='desc' ref='desc' onChange={this.onChange} value={this.state.desc}/>
				<input type='submit' value='Add'/>
			</form>
		);
	}
});

ReactDOM.render(<TodoApp/>, document.getElementById('todo'));