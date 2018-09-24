import React, { Component } from "react";

export default class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>;
  }
}
