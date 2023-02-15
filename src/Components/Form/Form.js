import React, { Component } from "react";
import "./Form.css";
// import Dropdown from "./Dropdown";
// change to functional component

class Form extends Component {
  constructor() {
    super();
    this.state = {
      placeTogo: "",
      thingsTodo: "",
      incompleteForm: true,

      //add vibe key pair
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // need to modify showDesList -> showCityList

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //submitBtn
  submitBtn = (event) => {
    event.preventDefault();
    //both input field need to be complete before hit submit
    if (this.state.placeTogo === "" || this.state.thingsTodo === "") {
      this.setState({ incompleteForm: true });
    } else {
      this.setState({ incompleteForm: false });
      const newTrip = {
        id: Date.now(),
        ...this.state,
      };
      this.props.addIdea(newTrip);
    }
  };

  //ClearInput
  clearInput = () => {
    this.setState({ placeTogo: "", thingsTodo: "" });
  };
  //FormCondition

  render() {
    return (
      <div className="idea-form">
        <form>
          <input
            className="place"
            type="text"
            placeholder="place I want to go"
            name="togo"
            value={this.state.placeTogo}
            onChange={(event) => this.handleChange(event)}
          ></input>
          <input
            className="todo"
            type="text"
            placeholder="things I want to do"
            name="todo"
            value={this.state.thingsTodo}
            onChange={(event) => this.handleChange(event)}
          ></input>
          <button className="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
