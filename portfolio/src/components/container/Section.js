import styled from "styled-components";
import Home from "./../component/Home";
import Skills from "./../component/Skills";
import Project from "./../component/Project";
import About from "./../component/About.";

const StyledDiv = styled.div`
  width: 90%;
  margin: 30px auto;
  border-radius: 16px;
  .section-container {
    padding: 25px;
    height: 100%;
  }
`;

export default function Section(props) {
  return (
    <StyledDiv className="section">
      <div className="section-container">
        <Home />
        <Skills />
        <Project />
        <About />
      </div>
    </StyledDiv>
  );
}