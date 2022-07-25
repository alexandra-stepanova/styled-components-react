import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: #ffff;
`;

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
