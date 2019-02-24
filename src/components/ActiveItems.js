import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from '../stores/TodoStore'

@observer
class ActiveItems extends Component {
  showActives = () => {
    todoStore.whichItemsShow = "Active"
  }

  render() {
    return (      
      <a 
        className={todoStore.whichItemsShow==="Active" ? "selected" : ""} 
        onClick={this.showActives}>
        Active
      </a>
    );
  }
}

export default ActiveItems;
