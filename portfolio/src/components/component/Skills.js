import React from "react";
import ReactLogo from "@/img/react.png";
import VueLogo from "@/img/vue.png";
import JavaScriptLogo from "@/img/javaScript.png";
import JavaLogo from "@/img/java.png";
import SpringLogo from "@/img/Spring.png";
import MariaLogo from "@/img/Maria.png";
import OracleLogo from "@/img/Oracle.png";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 26px;
  font-family: "font";
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  max-height: 80%;
  transition: all 3s ease;

  ::-webkit-scrollbar {
    width: 0;
  }

  .skill {
    display: flex;
    padding: 25px;
  }

  .content {
    box-shadow: inset 6px 6px 12px #cacaca, inset -6px -6px 8px #ffffff;
    border-radius: 16px;
    width: 70%;
    padding: 25px;
  }
`;

const language = [
  {
    img: JavaLogo,
    name: "Java",
    description: "",
  },
  {
    img: JavaScriptLogo,
    name: "JavaScriptLogo",
    description: "",
  },
];

const framework = [
  {
    img: VueLogo,
    name: "Vue.js",
    description: "",
  },
  {
    img: ReactLogo,
    name: "React",
    description: "",
  },
  {
    img: SpringLogo,
    name: "Spring",
    description: "",
  },
];

const db = [
  {
    img: OracleLogo,
    name: "Oracle",
    description: "",
  },
  {
    img: MariaLogo,
    name: "maria",
    description: "",
  },
];

const skills = [
  {
    name: "language",
    data: language,
  },
  {
    name: "framework",
    data: framework,
  },
  {
    name: "db",
    data: db,
  },
];

export default function Skills() {
  //<span className="tag"> &lt;portfolio&gt; </span> <br />

  return (
    <StyledDiv className="skills">
        <pre>
          <span className="tag">
            &lt;skills&gt; <br />
          </span>
          {skills.map((item, index) => {
            return (
              <div className="skillBox" key={index}>
                &nbsp;&nbsp;
                <span className="tag">
                  &lt;{item.name}&gt; <br />
                </span>
                <div className="skill">
                  {item.data.map((item, index) => {
                    return (
                      <div className="logoContainer" key={index}>
                        <img src={item.img} alt="" className="logo" />
                      </div>
                    );
                  })}
                </div>
                &nbsp;&nbsp;
                <span className="tag">
                  &lt;/{item.name}&gt; <br />
                </span>
              </div>
            );
          })}
        </pre>
      <span className="tag">
        &lt;/skills&gt; <br />
      </span>
    </StyledDiv>
  );
}
