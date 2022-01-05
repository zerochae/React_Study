import "./style/global.css";
import { useState } from "react";

import Section from "@/components/container/Section";
import Nav from '@/components/component/Nav';
import styled from 'styled-components';

function App() {

  const StyledDiv = styled.div`
    background-color: #fff;
    padding:30px;
  `


  let [step,setStep] = useState(0);

  return (
    <StyledDiv className="mainContainer">
      <Section step={step} />
      <Nav step={step} setStep={setStep}/>
    </StyledDiv>
  );
}

export default App;
