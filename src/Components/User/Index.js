import React, { useState } from "react";
import { EntryContainer } from "./UserElements";

function User() {
  const [state, setState] = useState({
    firstEntry: false,
    secontEntry: false,
    thirdEntry: false,
    fourthEntry: false,
  });

  const handleClick = (event) => {
    const name = event.target.getAttribute("value");

    if (name === "firstEntry") {
      setState({
        ...state,
        firstEntry: true,
        secontEntry: false,
        thirdEntry: false,
        fourthEntry: false,
      });
    }
    if (name === "secontEntry") {
      setState({
        ...state,
        firstEntry: false,
        secontEntry: true,
        thirdEntry: false,
        fourthEntry: false,
      });
    }
    if (name === "thirdEntry") {
      setState({
        ...state,
        firstEntry: false,
        secontEntry: false,
        thirdEntry: true,
        fourthEntry: false,
      });
    }
    if (name === "fourthEntry") {
      setState({
        ...state,
        firstEntry: false,
        secontEntry: false,
        thirdEntry: false,
        fourthEntry: true,
      });
    }
  };

  const entryData = [
    {
      name: "firstEntry",
      state: state.firstEntry,
      value: "EntryOne",
    },
    {
      name: "secontEntry",
      state: state.secontEntry,
      value: "EntryTwo",
    },
    {
      name: "thirdEntry",
      state: state.thirdEntry,
      value: "EntryThree",
    },
    {
      name: "fourthEntry",
      state: state.fourthEntry,
      value: "EntryFour",
    },
  ];

  return (
    <>
      {entryData.map(({ name, state, value }) => (
        <EntryContainer active={state} value={name} onClick={handleClick}>
          <h3>{value}</h3>
        </EntryContainer>
      ))}
    </>
  );
}

export default User;
