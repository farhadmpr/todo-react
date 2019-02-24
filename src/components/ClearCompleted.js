import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from '../stores/TodoStore'

@observer
class ClearCompleted extends Component {
  clearAll() {
    todoStore.clearCompleted()
  }

  render() {
    return (      
      <span className="clear-completed" onClick={this.clearAll}>Clear completed</span>
    );
  }
}

export default ClearCompleted;
