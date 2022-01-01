import WelcomeBg from "./WelcomeBg";
import "../style/Welcome.css";

function Welcome() {
  return (
    <div className="WelcomeContainer">
      <WelcomeBg className="particle" 
      style={{position:"absolute" , top: 100, left: 0}}
      width="100vw"
      height="calc(100vh - 70px)"
      />
      <p className="welcomeText"> 대충 소개하는 말</p>
    </div>
  );
}

export default Welcome;
