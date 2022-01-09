import styled from "styled-components";
import Section from "@/components/container/Section";
import Nav from "@/components/component/Nav";
import { useState } from "react";

const StyledDiv = styled.div`
  width: 80vw;
  height: 100vh;
  border-radius: 16px;
  background: #edebf4;
  /* box-shadow: inset 6px 6px 12px #cacaca, inset -6px -6px 8px #ffffff; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MainContainer() {
  const [step, setStep] = useState(0);
  return (
    <StyledDiv className="mainContainer">
      <Nav setStep={setStep} />
      <Section step={step} />
    </StyledDiv>
  );
}