import React from "react";

function ifExam1() {
  if (true) {
    return <p>참</p>;
  } else {
    return null;
  }
}

function ifExam2() {
  if (true) {
    return <p>참</p>;
  }
  return null;
}

function ifExam3() {
  return <div>{1 === 1 ? <p> 참 </p> : null}</div>;
}

function ifExam4() {
  return (
    <div>{1 === 1 ? <p> 참 </p> : 2 === 2 ? <p> 참참 </p> : <p> 참참 </p>}</div>
  );
}

function ifExam5() {
  return <div>{1 === 1 ? <p> 참 </p> : null}</div>;
}

function ifExam6() {
  return <div>{1 === 1 && <p> 참 </p>}</div>;
}

function reducerIfExam1(state, action) {
  if (action.type === "foo") return state;
  else if (action.type === "bar") return state;
  else return state;
}

function reducerIfExam2(state, action) {
  switch (action.type) {
    case "foo":
      return state;
    case "bar":
      return state;
    default:
      state;
  }
}

function ifExamUseEnum1() {
  var state = "foo";
  return (
    <div>
      {
        {
          foo: <p> foo </p>,
          bar: <p> bar </p>,
        }[state]
      }
    </div>
  );
}

var foobar = {
  foo: <p>foo</p>,
  bar: <p>bar</p>,
};

function ifExamUseEnum2() {
  var state = "foo";
  return <div>{foobar[state]}</div>;
}
