import React, { useReducer } from "react";
import { AdminContainer } from "./AdminElements";

const initialState = {
  admin1: false,
  admin2: false,
  admin3: false,
  admin4: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADMIN1__ACTIVE":
      return {
        ...state,
        admin1: true,
        admin2: false,
        admin3: false,
        admin4: false,
      };
    case "ADMIN2__ACTIVE":
      return {
        ...state,
        admin1: false,
        admin2: true,
        admin3: false,
        admin4: false,
      };
    case "ADMIN3__ACTIVE":
      return {
        ...state,
        admin1: false,
        admin2: false,
        admin3: true,
        admin4: false,
      };
    case "ADMIN4__ACTIVE":
      return {
        ...state,
        admin1: false,
        admin2: false,
        admin3: false,
        admin4: true,
      };
    default:
      return state;
  }
};

function Admin() {
  const [{ admin1, admin2, admin3, admin4 }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const entryData = [
    {
      name: "adminEntry1",
      state: admin1,
      actionType: "ADMIN1__ACTIVE",
    },
    {
      name: "adminEntry2",
      state: admin2,
      actionType: "ADMIN2__ACTIVE",
    },
    {
      name: "adminEntry3",
      state: admin3,
      actionType: "ADMIN3__ACTIVE",
    },
    {
      name: "adminEntry4",
      state: admin4,
      actionType: "ADMIN4__ACTIVE",
    },
  ];

  return (
    <>
      {entryData.map(({ name, state, actionType }) => (
        <AdminContainer
          active={state}
          onClick={() => dispatch({ type: actionType })}
        >
          <h3>{name}</h3>
        </AdminContainer>
      ))}
    </>
  );
}

export default Admin;
