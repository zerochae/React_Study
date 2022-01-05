import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faFile,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const StyledNav = styled.div`
  width: 100%;
  height: 70px;
  z-index: 1;
  box-shadow: 0px 0px 15px #fff;

  .title {
    font-weight: bolder;
    font-size: 44px;
  }

  .btnContainer {
    border-radius: 25px;
    width: 100px;
    height: 100px;
    display: flex;
  }

  button {
    font-family: "Heebo", sans-serif;
    font-size: 50px;
    border: none;
    border-radius: 50%;
    background-color: #ebecf0;
    text-shadow: 1px 1px 0 #fff;
    box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
    transition: all 0.2s ease-in-out;
  }
  button:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
`;

export default function Nav(props) {
  const menuItems = [
    <FontAwesomeIcon icon={faHome} />,
    <FontAwesomeIcon icon={faCode} />,
    <FontAwesomeIcon icon={faFile} />,
    <FontAwesomeIcon icon={faAddressCard} />,
  ];
  return (
    <StyledNav className="nav">
      <span className="title">zerochae</span>
      <div className="btnContainer">
        {menuItems.map((item, index) => {
          return (
            <button
              key={item}
              onClick={() => {
                props.setStep(index);
              }}
            >
              {" "}
              {item}{" "}
            </button>
          );
        })}
      </div>
    </StyledNav>
  );
}
