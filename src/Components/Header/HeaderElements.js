import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 50px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;
export const HeaderContent = styled.div`
  display: flex;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  font-size: 25px;
  font-weight: 500;
`;
export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const SelectText = styled.h4`
  font-size: 16px;
  font-weight: 400;
  padding: 5px;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid black;
  }
`;
