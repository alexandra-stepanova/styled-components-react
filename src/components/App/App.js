import styled from "styled-components";
import Flex from "../Flex/Flex";
import Title from "../Title/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
  color: #ffff;
`;

function App() {
  return (
    <AppWrapper>
      <Flex justify={"center"}>
        <Title color={"green"}>Console cmd 2022.</Title>
      </Flex>
    </AppWrapper>
  );
}

export default App;
