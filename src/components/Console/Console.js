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
  color: ${(props) => props.color || props.theme.colors.primary};
  &:focus {
    outline: none;
  }
  @media ${(props) => props.theme.media.phone} {
    border: 1px solid red;
  }
  @media ${(props) => props.theme.media.tablet} {
    border: 1px solid green;
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
