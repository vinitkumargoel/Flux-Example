import React, { Component } from "react";
import "./App.css";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
    this._onChange = this._onChange.bind(this);
  }
  handleClick() {
    AppActions.addItem("New Item");
  }
  _onChange() {
    let items = AppStore.getAll();
    this.setState({ items: items });
  }
  componentWillMount() {
    AppStore.addChangeListener(this._onChange);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click this</button>
        {this.state.items.map(item => {
          return <div>{item}</div>;
        })}
      </div>
    );
  }
}

export default App;
