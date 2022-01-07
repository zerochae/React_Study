import "./style/global.css";

import styled from "styled-components";
import MainContainer from "./components/container/MainContainer";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #edebf4;
  flex-direction: column;
`;

function App() {
  return (
    <StyledDiv className="app">
        <MainContainer />
    </StyledDiv>
  );
}

export default App;
