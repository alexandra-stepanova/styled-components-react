import React from "react";
import styled from "styled-components";
import Flex from "../Flex/Flex";
import Line from "../Line/Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 1.5em;
  border: none;
  resize: none;
  color: ${({ color }) => color || "white"};
  &:focus {
    outline: none;
  }
`;

export default function Console({ color, ...props }) {
  const [lines, setLines] = React.useState(["C/users/AlexChern"]);

  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      setLines([...lines, "C/users/AlexChern"]);
    }
  };
  return (
    <Flex>
      <Flex direction={"column"} margin={"0 10px"}>
        {lines.map((line) => (
          <Line color={color}>{line}</Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
    </Flex>
  );
}
