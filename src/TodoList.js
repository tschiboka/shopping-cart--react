import React, { Component } from "react";
import TodoItems from "./TodoItems";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    const listHasTheItem = () =>
      this.state.items.filter(item => item.text === this._inputElement.value)
        .length > 0;
    console.log(listHasTheItem());

    if (this._inputElement.value && !listHasTheItem()) {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value = "";
    e.preventDefault(); // form submit automatically refreshes the page
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(i => i.key !== key);

    this.setState({ items: filteredItems });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}
