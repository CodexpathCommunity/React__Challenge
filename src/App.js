import React from "react";
import { ComponentContainer, ComponentContent } from "./AppElements";
import Admin from "./Components/Admin/Index";
import Header from "./Components/Header/Index";
import User from "./Components/User/Index";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ adminMode }] = useStateValue();

  return (
    <>
      <Header />
      <ComponentContainer admin={adminMode}>
        <ComponentContent admin={adminMode}>
          {adminMode ? <Admin /> : <User />}
        </ComponentContent>
      </ComponentContainer>
    </>
  );
}

export default App;
