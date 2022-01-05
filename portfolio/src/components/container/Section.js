// import { connect } from "react-redux";
import Welcome from "@/components/container/Welcome";
import Skills from "@/components/component/Skills";
import About from "@/components/component/About";
import Project from "@/components/component/Project";

import styled from "styled-components";

const StyledSection = styled.div`
  height: calc(100% - 70px);
`;

export default function Section(props) {
  return (
    <StyledSection className="section">
      {props.step === 0 && <Welcome />}
      {props.step === 1 && <Skills />}
      {props.step === 2 && <Project />}
      {props.step === 3 && <About />}
    </StyledSection>
  );
}

// function step(state) {
//   return {
//     state: state,
//   };
// }

// export default connect(step)(Section);
