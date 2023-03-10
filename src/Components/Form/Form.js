import "./Form.css";
import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { stateOptions } from "../tripIdeasData";

const animatedComponents = makeAnimated();
console.log(stateOptions[4]);
const Form = (props) => {
  const [placeTogo, setPlaceTogo] = useState("");
  const [thingsTodo, setThingsTodo] = useState("");
  const [incompleteForm, setIncompleteForm] = useState(true);

  const submitBtn = (event) => {
    event.preventDefault();
    //both input field need to be complete before hit submit
    if (placeTogo === "" || thingsTodo === "") {
      setIncompleteForm(true);
    } else {
      setIncompleteForm(false);
      const newTrip = {
        id: Date.now(),
        placeTogo,
        thingsTodo,
        incompleteForm,
      };
      props.addIdeas(newTrip);
      clearInput();
    }
  };

  //ClearInput
  const clearInput = () => {
    setPlaceTogo("");
    setThingsTodo("");
  };
  //FormCondition

  return (
    <div className="idea-form">
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={stateOptions[4]}
        isMulti
        options={stateOptions}
      />
      <form>
        <input
          className="place"
          type="text"
          placeholder="place I want to go"
          name="placeTogo"
          value={placeTogo} // this is a problem
          onChange={(event) => setPlaceTogo(event.target.value)}
        ></input>
        <input
          className="todo"
          type="text"
          placeholder="things I want to do"
          name="thingsTodo"
          value={thingsTodo}
          onChange={(event) => setThingsTodo(event.target.value)}
        ></input>
        <button className="submit" onClick={submitBtn}>
          Add
        </button>
        {incompleteForm && (
          <div className="incomplete-form">Please fill all the boxes</div>
        )}
      </form>
    </div>
  );
};

export default Form;
