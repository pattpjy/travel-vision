import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tripsArray: [],
    };
  }
  render() {
    return (
      <div className="main-view">
        <p>this is main view</p>
        <br></br>
        <Form className="form"></Form>
      </div>
    );
  }
}

export default App;
