/* eslint-disable */

import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import "./Detail.scss";

let 박스 = styled.div`
  padding: 20px;
  color: #bdbdbd;
`;

function Detail(props) {
  useEffect(() => {
      let timer = setTimeout(() => { alert변경(false) }, 13000);
      return ()=>{clearTimeout(timer)}
  },[]);
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState("");
  let history = useHistory();
  let { id } = useParams();
  let num = parseInt(id) + 1;
  let findShoe = props.shoes.find(function (shoe) {
    return (shoe.id = id);
  });

  return (
    <div className="container">
      {alert === true ? (
        <div className="my-alert">
          <Info 재고={props.재고} id={id}/>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            alt=""
            src={`https://codingapple1.github.io/shop/shoes${
              parseInt(findShoe.id) + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findShoe.title}</h4>
          <p>{findShoe.content}</p>
          <p>{findShoe.price}</p>
          <button className="btn btn-danger" onClick={
            ()=>{ props.재고변경(

              ()=>{
                var tempArr = [...props.재고]
                tempArr[id] = tempArr[id]-1
                return tempArr;
              }

            ) }
          }>주문하기</button>
          <button
            onClick={() => {
              history.goBack();
            }}
            className="btn btn-danger"
          >
            뒤로가기
          </button>
        </div>
      </div>
      <p> {inputData} </p>
      <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      />
    </div>
  );
}

function Info(props){
  return( <p> {props.재고[props.id]} </p> )
}

export default Detail;
