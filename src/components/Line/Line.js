import React from "react";
import styled from "styled-components";

const StyledLine = styled.div`
  font-size: 1.5em;
  color: ${(props) => props.color || "white"};
`;

export default function Line(props) {
  return <StyledLine {...props} />;
}
