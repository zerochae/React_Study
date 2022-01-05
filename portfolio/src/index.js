import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { Provider } from "react-redux";
// import { createStore } from "redux";

// let state = [
//   {
//     step: 1
//   }
// ]

// function reducer(state = state, action) {
//   if(action.type === 'setStep'){
//     return 2
//   } else {
//     return state;
//   }
// }

// let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
