import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      place: "",
      thingsTodo: "",
      vibe: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <input
            className="place"
            type="text"
            placeholder="place to go"
            name="place"
            value={this.state.place}
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
        {/* <div
          className="radio-vibe"
          onChange={(event) => this.handleChange(event)}
        >
          <input className="quiet" type="radio" name="vibe" value="quiet">
            Quiet Vibe
          </input>
          <input className="vibrant" type="radio" name="vibe" value="quiet">
            Vibrant Vibe
          </input>
          <input
            className="adventure"
            type="radio"
            name="vibe"
            value="adventure"
          ></input>
        </div> */}
      </div>
    );
  }
}

export default Form;
