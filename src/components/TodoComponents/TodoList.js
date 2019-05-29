
import React, { Component } from 'react'
import Todo from './Todo';
import PropTypes from 'prop-types';

export class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map( todo => (
                    <Todo key={todo.id} todoItem={todo} markComplete={this.props.markComplete} 
                        delTodo={this.props.delTodo}
                    />
                ))}
            </div>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList
