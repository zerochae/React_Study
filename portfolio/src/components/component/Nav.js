import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faFile,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledDiv = styled.div`
  width: 90%;
  height: 70px;
  .btnContainer {
    display: flex;
    justify-content: space-between;
    .btn {
      box-shadow: 6px 6px 12px #cacaca, -6px -6px 12px #ffffff;
      border: none;
      width: 200px;
      height: 50px;
      border-radius: 10px;
      background: #edebf4;
      font-size: 20px;
      transition: box-shadow 3s;
    }
    .btn:hover {
      box-shadow: inset 6px 6px 12px #cacaca, inset -6px -6px 12px #ffffff;
    }
  }
  .btn.active {
    transition: box-shadow 3s;
    box-shadow: inset 6px 6px 12px #cacaca, inset -6px -6px 12px #ffffff;
  }
`;

const menuItems = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    name: "home",
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    name: "skills",
  },
  {
    icon: <FontAwesomeIcon icon={faFile} />,
    name: "project",
  },
  {
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    name: "about",
  },
];

export default function Nav(props) {

  const [tab, setTab] = useState(0);

  return (
    <StyledDiv className="nav">
      <div className="btnContainer">
        {menuItems.map((item, index) => {
          return (
            <button
              className={`btn ${tab === index ? "active" : ""}`}
              key={item.name}
              onClick={() => {
                props.setStep(index);
                setTab(index);
              }}
            >
              {item.icon}&nbsp;{item.name}
            </button>
          );
        })}
      </div>
    </StyledDiv>
  );
}
