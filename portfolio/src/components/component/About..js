import React from "react";
import styled from "styled-components";
import Git from "@/img/Git.png";
import Blog from "@/img/Blog.png";
import Instagram from "@/img/Instagram.png";
import KaTalk from "@/img/KaTalk.png";
import Mail from "@/img/Mail.png";
import profile from "@/img/profile.jpg"

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
    width: fit-content;
    padding: 25px;
  }

  .text {
    flex-direction: column;
  }

  .gitChart {
    margin: 30px auto;
    border-radius: 10px;
    width: fit-content;
    padding: 10px;
    display: block;
  }

  .profile {
    width: 40vw;
    height: 70vh;
    margin: 30px auto;
    border-radius: 10px;
    width: fit-content;
    display: block;
    padding: 8px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 10px;
      
    }
  }
  

  .textContainer{

    font-size: 16px;

    div{
      margin-bottom: 30px;
    }
    .header{
      color:red
    }
  }
`;

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
        <div className="about">
          &nbsp;&nbsp;
          <div className="textContainer">
            <div>
            <div className="logoContainer profile">
              <img src={profile} alt="profile"/>
            </div>
              <div className="header">
                독창성의 장점은 참신이 아니라 성실이다. 믿는 사람은 독창적인
                인간이다. - Thomas Carlyle
              </div> 
              <div className="body">

                안녕하세요 프론트엔드 개발자 권영채입니다. 저의 포트폴리오를 방문해 주셔서 감사합니다.

                <br /> <br />

                개발자의 가장 중요한 역량은 독창성이며 그것은 곧, 성실함에서 나옵니다. <br/>
                저는 1일 1커밋을 하며 꾸준히 성장해 나가고 있습니다.

                <br /> <br />
                
                항상 사용자의 관점에서 생각하며, 이를 개발에 반영하려고 합니다.

                <br /> <br />

                결과 보다는 원인을 더 중요하게 생각하고, 작은 문제도 그냥 지나치지 않으려고 합니다.

                <br /> < br/>

                이런 저의 성장가능성을 이끌어줄 회사를 찾고 있습니다.

              </div>
            </div>
            <div className="logoContainer gitChart">
              <img src="https://ghchart.rshah.org/219138/zerochae" alt="gitChart"/>
            </div>
          </div>
        </div>
        {about.map((item, index) => {
          return (
            <div className="aboutBox" key={index}>
              <div className="about"></div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="tag">
                &lt;{item.name}&gt; <br />
              </span>
              <div className="about">
                {item.data.map((item, index) => {
                  return (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                    >
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
        <br />
        &nbsp;&nbsp;<span className="tag"> &lt;/about&gt; </span> <br /> <br />
        <span className="tag"> &lt;/portfolio&gt; </span>
      </pre>
    </StyledDiv>
  );
}
