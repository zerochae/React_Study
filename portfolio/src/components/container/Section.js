import styled from "styled-components";
import Home from "./../component/Home";
import Skills from "./../component/Skills";
import Project from "./../component/Project";
import About from "./../component/About.";

const StyledDiv = styled.div`
  height: 100%;
  width: 90%;
  margin: 30px auto;
  /* box-shadow: 6px 6px 12px #cacaca, -6px -6px 12px #ffffff; */
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
        {props.step === 0 && <Home />}
        {props.step === 1 && <Skills />}
        {props.step === 2 && <Project />}
        {props.step === 3 && <About />}
      </div>
    </StyledDiv>
  );
}
