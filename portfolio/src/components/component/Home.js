import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: "font";
  font-size: 26px;
  
  pre{
    align-self: center;
  }

`;

export default function Home() {
  return (
    <StyledDiv className="home">
        <span className="tag portfolio"> &lt;portfolio&gt;</span> <br /> <br />
        <div className="h1">
        <span className="tag h1">&lt;home&gt;</span> <br />
        안녕하세요 꿈꾸는
        프론트엔드 개발자 권영채입니다. <br />
        <span className="tag h1">&lt;/home&gt;</span>
        </div>
        <br /> <br />
    </StyledDiv>
  );
}