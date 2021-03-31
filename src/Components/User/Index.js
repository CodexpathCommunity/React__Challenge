import React, { useReducer } from "react";
import { EntryContainer } from "./UserElements";

const initialState = {
  entry1: false,
  entry2: false,
  entry3: false,
  entry4: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ENTRY1__ACTIVE":
      return {
        ...state,
        entry1: true,
        entry2: false,
        entry3: false,
        entry4: false,
      };
    case "ENTRY2__ACTIVE":
      return {
        ...state,
        entry1: false,
        entry2: true,
        entry3: false,
        entry4: false,
      };
    case "ENTRY3__ACTIVE":
      return {
        ...state,
        entry1: false,
        entry2: false,
        entry3: true,
        entry4: false,
      };
    case "ENTRY4__ACTIVE":
      return {
        ...state,
        entry1: false,
        entry2: false,
        entry3: false,
        entry4: true,
      };
    default:
      return state;
  }
};

function User() {
  const [{ entry1, entry2, entry3, entry4 }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const entryData = [
    {
      name: "entry1",
      state: entry1,
      actionType: "ENTRY1__ACTIVE",
    },
    {
      name: "entry2",
      state: entry2,
      actionType: "ENTRY2__ACTIVE",
    },
    {
      name: "entry3",
      state: entry3,
      actionType: "ENTRY3__ACTIVE",
    },
    {
      name: "entry4",
      state: entry4,
      actionType: "ENTRY4__ACTIVE",
    },
  ];

  return (
    <>
      {entryData.map(({ name, state, actionType }) => (
        <EntryContainer
          active={state}
          onClick={() => dispatch({ type: actionType })}
        >
          <h3>{name}</h3>
        </EntryContainer>
      ))}
    </>
  );
}

export default User;
