import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  /* @font-face {
    font-family: "font";
    src: url("@/style/seoulhangangjungb.woff") format("truetype");
  } */
  font-family: "font";
  font-size: 26px;
  height: 100%;
  display: flex;
  justify-content: center;
  
  pre{
    align-self: center;
  }

`;

export default function Home() {
  return (
    <StyledDiv className="home">
      <pre>
        <span className="tag"> &lt;portfolio&gt; </span> <br /> <br />
        &nbsp;&nbsp;<span className="tag">&lt;home&gt;</span> <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;안녕하세요 꿈꾸는
        프론트엔드 개발자 권영채입니다. <br />
        &nbsp;&nbsp;<span className="tag">&lt;/home&gt;</span>
        <br />
      </pre>
    </StyledDiv>
  );
}
