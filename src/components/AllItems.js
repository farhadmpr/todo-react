import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from '../stores/TodoStore'

@observer
class AllItems extends Component {
  showAll = () => {
    todoStore.whichItemsShow = "All"
  }

  render() {
    return (  
      <a 
        className={todoStore.whichItemsShow==="All" ? "selected" : ""} 
        onClick={this.showAll}>
        All
      </a>
    );
  }
}

export default AllItems;
