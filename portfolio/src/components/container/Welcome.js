// import WelcomeBg from "@/components/component/WelcomeBg.js";
import styled from 'styled-components'

const StyledDiv = styled.div`
  .welcomeContainer{
    display: flex;
    height: calc(100vh - 70px);
    width: 100vw;
    margin: auto;
    position: relative;
  }

  .welcomeText{
    position:absolute;
    top:50%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 44px;
  }
`

function Welcome() {
  return (
    <StyledDiv className="WelcomeContainer">
      {/* <WelcomeBg
        className="particle"
        style={{ position: "absolute", top: 0, left: 0 }}
        width="100vw"
        height="calc(100vh - 70px)"
      /> */}
      <p className="welcomeText"> 대충 소개하는 말</p>
    </StyledDiv>
  );
}

export default Welcome;
