import React from "react";
import "./TripDetails.css";
import Card from "../Card/Card";

const TripDetails = ({ allTripIdeas }) => {
  const tripCards = allTripIdeas.map((trip) => {
    return (
      <Card
        title={trip.placeTogo}
        description={trip.thingsTodo}
        id={trip.id}
        key={trip.id}
      />
    );
  });
  return <div>{tripCards}</div>;
};

export default TripDetails;
