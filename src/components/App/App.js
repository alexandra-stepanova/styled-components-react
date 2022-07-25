import styled from "styled-components";
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
      <Title>App new</Title>
    </AppWrapper>
  );
}

export default App;
