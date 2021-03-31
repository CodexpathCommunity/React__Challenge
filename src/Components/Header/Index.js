import React from "react";
import { useStateValue } from "../../StateProvider";

import {
  HeaderContainer,
  HeaderContent,
  Logo,
  OptionsContainer,
  SelectContainer,
  SelectText,
} from "./HeaderElements";

function Header() {
  const [{ adminMode }, dispatch] = useStateValue();

  const setAdmin = () => {
    dispatch({
      type: "TOGGLE__ADMIN",
      adminState: true,
    });
  };
  const setApp = () => {
    dispatch({
      type: "TOGGLE__ADMIN",
      adminState: false,
    });
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo>LOGO</Logo>
          <OptionsContainer>
            <SelectContainer onClick={setApp}>
              <input type="checkbox" checked={!adminMode} />
              <SelectText>App Mode</SelectText>
            </SelectContainer>
            <SelectContainer onClick={setAdmin}>
              <input type="checkbox" checked={adminMode} />
              <SelectText>Admin Mode</SelectText>
            </SelectContainer>
          </OptionsContainer>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}

export default Header;
