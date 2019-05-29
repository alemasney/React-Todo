import React, { Component } from 'react'
import TodoList from './components/TodoComponents/TodoList';
import Header from './components/layout/Header';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

export class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle Complete

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  todoForm = title => {
    const newTodo = {
      id: title,
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <TodoForm todoForm={this.todoForm} />
          <TodoList todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}

export default App

