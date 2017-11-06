import React, { Component } from 'react';
import './css/App.css';

import TodoItem from './ToDoItem.js';
import MainTitle from './MainTitle.js';
import ToDoInput from './ToDoInput.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "Do the laundry"},
        {id: 1, text: "Clean the house"},
        {id: 2, text: "Cook supper"}
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  render() {
    return (
      <div className="container">
        <div className="todo-wrapper">
          <MainTitle />
          <ToDoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
