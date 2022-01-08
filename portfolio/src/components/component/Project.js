import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft , faNewspaper } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const StyledDiv = styled.div`
  font-size: 26px;
  font-family: "font";
  height: 100%;
  position: relative;
  width: 100%;

  .prev {
    position: absolute;
    top: 50%;
    left: 0;
  }

  .next {
    position: absolute;
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
  }

  .btn:hover {
    box-shadow: inset 6px 6px 12px #cacaca, inset -6px -6px 12px #ffffff;
  }

  .projectContainer {
    /* height: 90%;
    width: 50vw;
    align-items: center;
    display: flex;
    margin: auto;
    position: relative; */

    height: 90%;
    /* width:50vw; */
    display: flex;
    margin: 0 50px;
    overflow: hidden;
    transition: all 1s;
  }

  .innerContainer {
    transition: all 1s;
    width: 100%;
  }

  .project {
    background: #edebf4;
    box-shadow: 6px 6px 12px #cacaca, -6px -6px 8px #ffffff;
    border-radius: 10px;
    height: 100%;
    width: 50vw;
    transform: scale(0.8);
    display: flex;
    padding:25px;
    flex-direction: column;
  }

  .content { 
    height: 90%;
  }

  .menu{
    height: 10%;
    display: flex;
    justify-content: space-around;
  }

  .menuBtn {
    width: 150px;
    display: flex;
    justify-content: space-around;
  }


`;

const project = [
  {
    idx: 5,
    name: "mood",
    url: "https://zerochae2.github.io/",
    description: "",
  },
  {
    idx: 1,
    name: "kanboo",
    url: "http://kanboo.site",
    description: "",
  },
  {
    idx: 2,
    name: "mood",
    url: "https://zerochae2.github.io/",
    description: "",
  },
  {
    idx: 3,
    name: "portfolio",
    url: "https://zerochae.github.io/portfolio",
    description: "",
  },
  {
    idx: 4,
    name: "kanboo",
    url: "http://kanboo.site",
    description: "",
  },
  {
    idx: 5,
    name: "mood",
    url: "https://zerochae2.github.io/",
    description: "",
  },
  {
    idx: 1,
    name: "kanboo",
    url: "http://kanboo.site",
    description: "",
  },
  // {
  //   idx: 5,
  //   name: "portfolio",
  //   url: "https://zerochae.github.io/portfolio",
  //   description: "",
  // },
  // {
  //   idx: 6,
  //   name: "kanboo",
  //   url: "http://kanboo.site",
  //   description: "",
  // },
  // {
  //   idx: 7,
  //   name: "mood",
  //   url: "https://zerochae2.github.io/",
  //   description: "",
  // },
  // {
  //   idx: 8,
  //   name: "portfolio",
  //   url: "https://zerochae.github.io/portfolio",
  //   description: "",
  // },
];

export default function Project() {

  let [step, setStep] = useState(1);

  const firstToLast = () => {

    setStep(step - 1);
    
    setTimeout( () => {
      Array.from(projectContainer.current.childNodes).map((item) => {
        return (item.style.transition = "none");
      });
      setStep(project.length - 2);
    },1000)
    
    
    setTimeout( () => {
      Array.from(projectContainer.current.childNodes).map((item) => {
        return (item.style.transition = "all 1s");
      });
    },1000)

  };

  const lastToFirst = () => {

    setStep(step + 1);

    setTimeout( () => {
      Array.from(projectContainer.current.childNodes).map((item) => {
        return (item.style.transition = "none");
      });
      setStep(1);
    },1000)
    

    setTimeout( () => {
      Array.from(projectContainer.current.childNodes).map((item) => {
        return (item.style.transition = "all 1s");
      });
    },1100)

  };

  useEffect(() => {});

  const projectContainer = useRef();

  return (
    <StyledDiv>
      <button
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
      </button>
      <span className="tag"> &lt;project&gt; </span> <br />
      <div className="projectContainer" ref={projectContainer}>
        {/* 반복문 ㄱㄱ */}
        {project.map((item, index) => {
          return (
            <div
              className="innerContainer"
              key={index}
              style={{ transform: `translateX(${step * 50 * -1}vw)` }}
            >
              <div className="project">
                <div className="content">
                idx:{item.idx} step:{step}
                </div>
                <div className="menu">
                <button className="btn menuBtn">
                <FontAwesomeIcon icon={faNewspaper} />  <span>WebPage</span>
                </button>
                <button className="btn menuBtn">
                <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span> 
                
                </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* 반복문 끝 */}
      </div>
      <span className="tag"> &lt;/project&gt; </span>
    </StyledDiv>
  );
}
