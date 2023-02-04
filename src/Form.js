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
  // need to modify showDesList -> showCityList

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <Dropdown
            formLabel="Choose a service"
            buttonText="Send form"
            action="/"
          >
            <Option selected value="Click to see options" />
            <Option value="Option 1" />
            <Option value="Option 2" />
            <Option value="Option 3" />
          </Dropdown>
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
