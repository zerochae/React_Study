import "./style/App.css";
import { useState } from "react";

import Welcome from "./components/Welcome";
import Section from "./components/container/Section";
import Nav from './components/Nav';

function App() {
  let [step, changeStep] = useState(1);

  return (
    <div className="mainContainer">
      <Nav/>
      <Section />
    </div>
  );
}

export default App;
