import React from 'react';
import './css/ToDoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <p className="todoText">{this.props.todo.text}</p>
        <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }></button>
      </div>
    );
  }
}
