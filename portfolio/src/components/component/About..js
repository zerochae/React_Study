import React from "react";
import styled from "styled-components";
import Git from "@/img/Git.png";
import Blog from "@/img/Blog.png";
import Instagram from "@/img/Instagram.png";
import KaTalk from "@/img/KaTalk.png";
import Mail from "@/img/Mail.png";

const StyledDiv = styled.div`
  font-size: 26px;
  font-family: "font";
  overflow-y: scroll;
  max-height: 80%;

  ::-webkit-scrollbar {
    width: 0;
  }

  .about {
    display: flex;
    padding: 25px;
  }

  .textContainer {
    box-shadow: inset 6px 6px 12px #cacaca, inset -6px -6px 8px #ffffff;
    border-radius: 16px;
    width: 70%;
    padding: 25px;
  }
`;

const text = "어쩌고저쩌고 안녕하세요 감사합니다.";
const link = [
  {
    name: "git",
    url: "https://github.com/zerochae",
    category: "link",
    img: Git,
  },
  {
    name: "blog",
    url: "https://zerochae.github.io/",
    category: "link",
    img: Blog,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/zerochae/",
    category: "link",
    img: Instagram,
  },
];

const contact = [
  {
    name: "mail",
    url: "mailto:zerochae@kakao.com",
    category: "contact",
    img: Mail,
  },
  {
    name: "kaTalk",
    url: "https://open.kakao.com/o/sreMd9Dd",
    category: "contact",
    img: KaTalk,
  },
];

const about = [
  {
    name: "link",
    data: link,
  },
  {
    name: "contact",
    data: contact,
  },
];

export default function About() {
  return (
    <StyledDiv>
      <pre>
        &nbsp;&nbsp;<span className="tag"> &lt;about&gt; </span> <br />
        {about.map((item, index) => {
          return (
            <div className="aboutBox" key={index}>
              <div className="about">
              {index === 0 ? <> &nbsp;&nbsp;<div className="textContainer">{text}</div> </> : ""}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="tag">
                &lt;{item.name}&gt; <br />
              </span>
              <div className="about">
                {item.data.map((item, index) => {
                  return (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" key={index}>
                      <div className="logoContainer">
                        <img src={item.img} alt="" className="logo" />
                      </div>
                    </a>
                  );
                })}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="tag">
                &lt;/{item.name}&gt; <br />
              </span>
            </div>
          );
        })}
        <br/>
        &nbsp;&nbsp;<span className="tag"> &lt;/about&gt; </span> <br /> <br />
        <span className="tag"> &lt;/portfolio&gt; </span>
      </pre>
    </StyledDiv>
  );
}
