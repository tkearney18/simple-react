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
/**
 * TodoBanner provides a simple banner for the list.
 */
var TodoBanner = React.createClass({
	render: function(){
		return (
			<h3>TODO LIST</h3>
		);
	}
});
/**
 * TodoList renders out the TodoListItems
 * When called it returns a ul which uses the createItem function to call the TodoListItem for 
 */
var TodoList = React.createClass({
	render: function() {
        // in a list that uses the .map function, keys are needed
        // Math.random() is used to generate a key. this is also an example of a closure.
        var id = Math.random();
		var createItem = function(itemText, id) {
			return (
				<TodoListItem key={id}>{itemText}</TodoListItem>
			);
		};
		return <ul>{this.props.items.map(createItem, id)}</ul>;
	}
});

/**
 * TodoListItem renders out the input provided from the form. Only has access to this.props.
 */
var TodoListItem = React.createClass({
	render: function(){
		return (
			<li>{this.props.children.item} - {this.props.children.desc} </li>
		);
	}
});
 /**
  * TodoForm render the form, provides getInitialState, onChange
  */
var TodoForm = React.createClass({
	// getInitialState to set the default values
	getInitialState: function() {
		return {item: '', desc: ''};
	},
	//handleSubmit adds the properties on onFormSubmit and sets the state
	handleSubmit: function(e){
		e.preventDefault();
		// preserve the props to be used by TodoListItem
		this.props.onFormSubmit({item: this.state.item, desc: this.state.desc});
		//this.setState({item: this.state.item, desc: this.state.desc});
		// reset the state back to the default of blanks
		this.setState({item: '', desc: ''});
		return;
	},
	// onChange handler to change the state. only one is needed when using the form of e.target.name
	onChange: function(e){
		this.setState({
			[e.target.name]: e.target.value
		});
	},
    //rendering the actual form. using the name attribute allows us to use the single above
	render: function(){
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<label htmlFor="item">Todo item: </label>
					<input type='text' name='item' ref='item' id="item" onChange={this.onChange} value={this.state.item}/>
				</div>
				<div className="row">
                	<label htmlFor="desc">Description: </label>
					<input type='text' name='desc' ref='desc' onChange={this.onChange} value={this.state.desc}/>
				</div>
				<input type='submit' value='Add'/>
			</form>
		);
	}
});

ReactDOM.render(<TodoApp/>, document.getElementById('todo'));