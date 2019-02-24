import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from '../stores/TodoStore'

@observer
class CompletedItems extends Component {
  showCompleted = () => {
    todoStore.whichItemsShow = "Completed"
  }

  render() {
    return (      
      <a 
        className={todoStore.whichItemsShow==="Completed" ? "selected" : ""} 
        onClick={this.showCompleted}>
        Completed
      </a>
    );
  }
}

export default CompletedItems;
