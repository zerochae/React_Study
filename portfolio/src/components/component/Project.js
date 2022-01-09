import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import kanboo from "@/img/kanboo.jpg";
import mood from "@/img/mood.jpg";

const StyledDiv = styled.div`
  font-size: 26px;
  font-family: "font";
  width: 100%;

  .prev {
    position: absolute;
    top: 50%;
    left: 12%;
  }

  .next {
    position: absolute;
    top: 50%;
    right: 12%;
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
    z-index: 1;
  }

  .btn:hover {
    box-shadow: inset 6px 6px 12px #cacaca, inset -6px -6px 12px #ffffff;
  }

  .projectContainer {
    display: flex;
    margin: auto 0;
    overflow: hidden;
    transition: all 1s;
    justify-content: center;
  }

  .innerContainer {
    transition: all 1s;
  }

  .project {
    background: #edebf4;
    box-shadow: 6px 6px 12px #cacaca, -6px -6px 8px #ffffff;
    border-radius: 10px;
    width: 50vw;
    display: flex;
    padding: 25px;
    flex-direction: column;
  }

  .content {
    height: 90%;
  }

  .menu {
    height: 10%;
    display: flex;
    justify-content: space-around;
  }

  .menuBtn {
    width: 150px;
    display: flex;
    justify-content: space-around;
  }

  a {
    text-decoration: none;
  }

  .projectImg {
    height: 100%;
    width: 100%;
    margin: 30px auto;
    border-radius: 10px;
    width: fit-content;
    display: block;
    padding: 8px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const project = [
  {
    idx: 3,
    name: "mood",
    url: "https://zerochae2.github.io/",
    git: "",
    img: "",
    skills: [],
    description: "",
  },
  {
    idx: 1,
    name: "kanboo",
    url: "http://kanboo.site",
    git: "https://github.com/zerochae/backupBeforeMerge",
    img: kanboo,
    skills: ["vue.js", "jpa", "java", "spring boot", "maria db"],
    description: "",
    myWork: "",
  },
  {
    idx: 2,
    name: "mood",
    url: "https://zerochae2.github.io/",
    git: "https://github.com/zerochae/Mood_V2",
    img: mood,
    skills: ["vue.js", "node.js", "mysql"],
    description: "",
    myWork: "",
  },
  {
    idx: 3,
    name: "portfolio",
    url: "https://zerochae.github.io/portfolio",
    git: "",
    img: "",
    skills: ["react"],
    description: "",
    myWork: "",
  },
  {
    idx: 1,
    name: "kanboo",
    url: "http://kanboo.site",
    git: "",
    img: "",
    skills: "",
    description: "",
  },
];

export default function Project() {
  let [step, setStep] = useState(1);

  const firstToLast = () => {
    setStep(step - 1);

    setTimeout(() => {
      Array.from(projectContainer.current.childNodes).map((item) => {
        return (item.style.transition = "none");
      });
      setStep(project.length - 2);
    }, 1000);

    setTimeout(() => {
      Array.from(projectContainer.current.childNodes).map((item) => {
        return (item.style.transition = "all 1s");
      });
    }, 1100);
  };

  const lastToFirst = () => {
    setStep(step + 1);

    setTimeout(() => {
      Array.from(projectContainer.current.childNodes).map((item) => {
        return (item.style.transition = "none");
      });
      setStep(1);
    }, 1000);

    setTimeout(() => {
      Array.from(projectContainer.current.childNodes).map((item) => {
        return (item.style.transition = "all 1s");
      });
    }, 1100);
  };

  useEffect(() => {});

  const projectContainer = useRef();

  return (
    <StyledDiv className="h1">
      <span className="tag h1">&lt;project&gt;</span>
      {/* <button
        className="prev btn"
        onClick={() => {
          step > 1 ? setStep(step - 1) : firstToLast();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        className="next btn"
        onClick={() => {
          step < project.length - 2 ? setStep(step + 1) : lastToFirst();
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button> */}
      <div className="projectContainer" ref={projectContainer}>
        {project.map((item, index) => {
          return (
            <div
              className="innerContainer"
              key={index}
              style={{ transform: `translateX(${step * 50 * -1}vw)` }}
            >
              {/* <div className="project">
                <div className="content">
                  <img src={item.img} alt="img" />
                </div>
                <div className="menu">
                  <button className="btn menuBtn">
                    <FontAwesomeIcon icon={faNewspaper} /> <span>WebPage</span>
                  </button>
                  <a href={item.url}>
                    <button className="btn menuBtn">
                      <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span>
                    </button>
                  </a>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
      <span className="tag h1">&lt;/project&gt;</span>
    </StyledDiv>
  );
}
