import React, { Component } from "react";
import ItemsLeft from "./ItemsLeft";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

import ClearCompleted from "./ClearCompleted";
import AllItems from "./AllItems";
import ActiveItems from "./ActiveItems";
import CompletedItems from "./CompletedItems";

@observer
class TodoMenu extends Component {
  renderMenuItems() {
    if (todoStore.todos.length)
      return (
        <section className="footer">
          <ItemsLeft />
          <ul className="filters">
            <li>
              <AllItems />
              <ActiveItems />
              <CompletedItems />
            </li>
          </ul> 
          {/* if any completed item exist */}
          { todoStore.todos.length - todoStore.itemsLeft > 0 ? <ClearCompleted /> : "" }
        </section>
      );
  }

  render() {
    return <div>{this.renderMenuItems()}</div>;
  }
}

export default TodoMenu;
