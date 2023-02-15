import React, { Component } from "react";
import "./Main.css";
import Form from "../Form/Form";
import TripDetails from "../TripDetails/TripDetails";
import tripIdeas from "../tripIdeasData.js";

class Main extends Component {
  constructor() {
    super();
    this.allIdeas = tripIdeas.tripIdeasArray;
    this.state = {
      destinationData: [],
      tripIdeas: this.allIdeas,
    };
  }

  // componentDidMount = () => {
  //   fetch("http://localhost:3001/api/v1/destinations")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ destinationData: data.destinations });
  //     })
  //     .catch((error) => console.log("error", error));
  // };
  //destination need to connect to the input field in form
  // showDestinationList = (allDestination) => {
  //   return this.state.destinationData.destinations.forEach((el) => {
  //     const addOption = document.createElement("option");
  //     addOption.value = el.destination;
  //     addOption.innerText = el.destination;
  //     // pom.destinationList.appendChild(addOption);
  //   });
  // };
  addIdea = (newTrip) => {
    const addTrip = this.allIdeas.push(newTrip);
    this.setState({ tripIdea: addTrip });
  };

  render() {
    return (
      <div className="main-view">
        <div className="left-side">
          <h2>Where do I want to go??</h2>
        </div>
        <div className="right-side">
          <Form destinationData={this.state.destinationData} className="form" />
          <TripDetails allTripIdeas={this.state.tripIdeas} />
        </div>
      </div>
    );
  }
}

export default Main;
