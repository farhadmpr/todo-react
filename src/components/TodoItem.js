import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  }

  onDeleteClick = () => {
    this.props.todo.delete();
  }

  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button onClick={this.onDeleteClick} className="destroy" />
        </div>
      </li>
    );
  }
}

export default TodoItem;
