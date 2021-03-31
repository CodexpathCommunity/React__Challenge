import styled from "styled-components";

export const EntryContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  border: 1px solid black;
  padding: 25px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  background: ${({ active }) => (active ? "rgb(204, 225, 243)" : "")};
`;
