/* eslint-disable */

import React from "react";
import styled from "styled-components"
import { useHistory , useParams} from "react-router-dom";
import './Detail.scss'

let 박스 = styled.div`
padding : 20px;
color: #bdbdbd
`;

function Detail(props) {

    let history = useHistory();
    let {id} = useParams();
    let num = parseInt(id) + 1; 
    let findShoe = props.shoes.find(function(shoe){
        return shoe.id = id;
    });

  return (
    <div className="container">
        <div className="my-alert">
            <p>재고 없숨</p>
        </div>
      <div className="row">
        <div className="col-md-6">
          <img
            alt="" 
            src={`https://codingapple1.github.io/shop/shoes${parseInt(findShoe.id) + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findShoe.title}</h4>
          <p>{findShoe.content}</p>
          <p>{findShoe.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button onClick={()=>{ history.goBack() } } className="btn btn-danger">뒤로가기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
