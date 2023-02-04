import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      destinationData: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/destinations")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.destinations);
        this.setState({ destinationData: data.destinations });
      })
      .catch((error) => console.log("error", error));
  };

  showDestinationList = (allDestination) => {
    return this.state.destinationData.destinations.forEach((el) => {
      const addOption = document.createElement("option");
      addOption.value = el.destination;
      addOption.innerText = el.destination;
      // pom.destinationList.appendChild(addOption);
    });
  };

  render() {
    return (
      <div className="main-view">
        <div className="left-side">
          <h2>Where do I want to go??</h2>
        </div>

        <div className="right-side">
          <Form destinationData={this.destinationData} className="form"></Form>
        </div>
      </div>
    );
  }
}

export default App;
