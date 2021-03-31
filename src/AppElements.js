import styled from "styled-components";

export const ComponentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ admin }) =>
    admin ? "var(--adminTheme)" : " var(--userTheme)"};
  padding: 20px;
`;

export const ComponentContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 2px solid ${({ admin }) => (admin ? "#fff" : " black")};
  padding: 14px;
  margin: 0 auto;
`;
