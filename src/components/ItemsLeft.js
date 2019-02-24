import React, { Component } from "react";
import todoStore from '../stores/TodoStore'
import { observer } from "mobx-react";

@observer
class ItemsLeft extends Component {
  render() {
    return (      
      <span className="todo-count">
        {todoStore.itemsLeft} items left
      </span>
    );
  }
}

export default ItemsLeft;
