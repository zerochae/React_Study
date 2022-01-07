import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const StyledDiv = styled.div`
  font-size: 26px;
  font-family: "font";
  height: 100%;
  position: relative;
  margin: auto;

  .projectContainer {
    height: 90%;
    width: 50vw;
    align-items: center;
    display: flex;
    margin: auto;
    position: relative;
  }

  .prev {
    top: 50%;
    left: 0;
  }

  .next {
    top: 50%;
    right: 0;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 6px 12px #cacaca, -6px -6px 12px #ffffff;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background: #edebf4;
    font-size: 20px;
    transition: box-shadow 3s;
    position: absolute;
  }

  .btn:hover {
    box-shadow: inset 6px 6px 12px #cacaca, inset -6px -6px 12px #ffffff;
  }

  .project {
    height: 90%;
    width: 100%;
    background: #edebf4;
    border-radius: 10px;
    box-shadow: 6px 6px 12px #cacaca, -6px -6px 8px #ffffff;
    transition: all 1s;
    padding: 25px;
    display: flex;
  }
  
  .show {
    position: absolute;
    top: 0;
    left:25%;
    width: 30vw;
    z-index: 1;
    transform: translateY(50px);
  }
`;

const project = [
  {
    idx: 0,
    name: "kanboo",
    url: "http://kanboo.site",
    description: "",
  },
  {
    idx: 1,
    name: "mood",
    url: "https://zerochae2.github.io/",
    description: "",
  },
  {
    idx: 2,
    name: "portfolio",
    url: "https://zerochae.github.io/portfolio",
    description: "",
  },
];

export default function Project() {

  let [step, setStep] = useState(0);

  const slide = useRef();


  return (
    <StyledDiv>
        <button
          className="prev btn"
          onClick={() => {
            --step >= 0 ? setStep(step) : setStep(project.length - 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="next btn"
          onClick={() => {
            ++step < project.length ? setStep(step) : setStep(0);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      <span className="tag"> &lt;project&gt; </span> <br />
      <div className="projectContainer" ref={slide}>
        {/* 반복문 ㄱㄱ */}
        {project.map((item, index) => {
          return (
            <div
            className={`project ${step === index ? "show" : ""}`}
            className={`project`}
            style={{
            }}
            key={index}
            >
              {index} {step}
            </div>
          );
        })}
        {/* 반복문 끝 */}
      </div>
      <span className="tag"> &lt;/project&gt; </span>
    </StyledDiv>
  );
}
