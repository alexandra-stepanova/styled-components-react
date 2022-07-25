import React from "react";
import styled from "styled-components";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 1.3em;
  border: none;
  resize: none;
  color: ${({ color }) => color || "white"};
  &:focus {
    outline: none;
  }
`;

export default function Console(props) {
  return <StyledConsole {...props} />;
}
