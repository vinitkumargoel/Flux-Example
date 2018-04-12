import React, { Component } from "react";
import "./App.css";
import AppActions from "../actions/AppActions";
import AppStore from '../stores/AppStore';

class App extends Component {
  handleClick() {
    AppActions.addItem("this is the item");
  }
  render() {
    return (
      <div className="App">
        <h3 onClick={this.handleClick}>Click this Title, then check console</h3>
      </div>
    );
  }
}

export default App;
