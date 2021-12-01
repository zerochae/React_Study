import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

let 초기값 = [
  { id: 0, name: "신발1", qty: 2 },
  { id: 1, name: "신발2", qty: 3 },
  { id: 2, name: "신발3", qty: 5 },
  { id: 3, name: "신발4", qty: 3 },
];

function reducer(state = 초기값, 액션) {
  if (액션.type === "항목추가") {
    let copy = [...state];
    copy.push(액션.payload);
    return copy;
  } else if (액션.type === "수량증가") {
    let temp = [...state];
    temp[0].qty++;
    return temp;
  } else if (액션.type === "수량감소") {
    let temp = [...state];
    temp[0].qty--;
    return temp;
  } else {
    return state;
  }
}

let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if (액션.type === "alert닫을래") {
    return false;
  } else {
    return true;
  }
  //eslint-disable-next-line
  return state;
}

let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
