import "./App.css";
import React, { useState } from "react";

function App() {
  // let posts = "강남 고기 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "리액트 마스터",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState(" ");
  // var arr = [2,3,4];

  // var newArr = arr.map( x => x * 2); // (3) [4, 6, 8]
  // var newArr = arr.map( (x) => {x*2} ); // -> (3) [undefined, undefined, undefined]
  // var newArr = arr.map(function(x){
  //   return x * 2;
  // }); // (3) [4, 6, 8]

  // var newArr = arr.map( (x) => {
  //   return x *2;
  // }) // (3) [4, 6, 8]

  // console.log(newArr)

  function 저장하기(e){

    var newArray = [...글제목];
    // newArray.push(e);
    newArray.unshift(e);

    글제목변경(newArray);

  }

  function 제목바꾸기() {
    var newArray = [...글제목];

    newArray[0] = "여자 코트 추천";

    글제목변경(newArray);
  }

  function 모달변경(){

    let flag = modal

    if(flag === true){
      flag = false;
    } else {
      flag = true
    }

    modal변경(flag)

  }

  // 반복 1. 함수 만들기 시작! -> 함수 꼰대

  function 글제목반복(){

    var arr = [...글제목];
    var returnArr = [];

    for(var i = 0; i<arr.length; i++){
      returnArr.push( 
        <div className="list" key={i}>
        <h3>
          {arr[i]}
          <span onClick={() => { 따봉변경(따봉 + 1);}}>👍</span>
          {따봉}
        </h3>
        <p> 2월 17일 발행 </p>
        <hr />
      </div>
      )
    }

    return returnArr;

  }

  /*

    index.js:1 Warning: Each child in a list should have a unique "key" prop.

    Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
    at div
    at App (http://localhost:3000/static/js/main.chunk.js:169:76)

  */

   // 반복 1. 함수 만들기 끝


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog </div>
      </div>
      <button
        onClick={() => {
          제목바꾸기();
        }}
      >
        {" "}
        버튼{" "}
      </button>
      
      
        {
          // 반복 2 map함수 사용하기 시작
          글제목.map( function(v,i){
            return( 
            <div className="list" key={i}>
            <h3 onClick={ ()=> {누른제목변경(i)} }>
              {" "}
              {v}{" "}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                👍
              </span>{" "}
              {따봉}{" "}
            </h3>
            <p> 2월 17일 발행 </p>
            <hr />
          </div>)
          } )
          // 반복 2 끝
        }

        

        {글제목반복() /* -> 반복 함수 넣기*/} 
        
      <div className="list">
        <h3>
          {" "}
          {글제목[0]}{" "}
          <span onClick={() => { 따봉변경(따봉 + 1);}}> 👍 </span> {따봉}
        </h3>
        <p> 2월 17일 발행 </p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <span onClick={() => { 따봉변경(따봉 + 1);}}> 👍 </span> {따봉}
        <p> 2월 18일 발행 </p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <span onClick={() => { 따봉변경(따봉 + 1);}}> 👍 </span> {따봉}
        <p> 2월 19일 발행 </p>
        <hr />
      </div>

      {입력값}

      <Profile/>

      {/* <input onInput={ ()=>{} }/> */}
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } }/>

      <p>기타 내용 </p>
      <button onClick={() => {모달변경()}}> 열려라 참깨 </button>
      { modal  === true ? <Modal 글제목={글제목} 누른제목={누른제목}/> : null}

        <div className="publish">
          <input onChange={(e) => {입력값변경(e.target.value)}}/>
          <button onClick={ ()=> 저장하기(입력값) }>저장</button>
        </div>

    </div>


  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2>제목{props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

  class Profile extends React.Component{
    constructor(){
      super();
      this.state = {
        name : "kim",
        age: 31,
      }
    }

    render(){
      return(
        <div> 
          <h3> {this.state.name} 프로필입니다. {this.state.age} </h3> 
          <button onClick={()=>{this.setState({name : "kwon"})}}>변경</button>
          </div>
      )
    }

  }

export default App;
