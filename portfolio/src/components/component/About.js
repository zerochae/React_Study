import styled from "styled-components";

const StyledUl = styled.ul`
list-style: none;
li{
  float:left;
}
`;

export default function About() {
  return (
    <div>
      <StyledUl>
        <li>깃</li>
        <li>블로그</li>
        <li>인스타</li>
      </StyledUl>

      <br/>

      <StyledUl>
        <li>카톡</li>
        <li>메일</li>
      </StyledUl>
    </div>
  );
}
