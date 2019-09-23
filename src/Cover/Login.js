import React, { Component } from "react";
import { createStore } from "redux";
export default class Login extends Component {
  render() {
    //step 2:create reducer : state n action
    const reducer = function(state, action) {
      if (action.type === "TRUE") {
        return action.payload;
      }
      if (action.type === "FALSE") {
        return action.payload;
      }
      if (action.type === "LOGIN") {
        return action.payload;
      }
      return state;
    };

    //step 1: create store : reducer n state
    const store = createStore(reducer, "LOGIN");

    //step 3:Subscribe
    store.subscribe(() => {
      console.log("now in store", store.getState());
    });

    //step 4 :Dispatch action
    store.dispatch({ type: "TRUE", payload: "Logged In" });
    store.dispatch({ type: "FALSE", payload: "Logged Out" });
    store.dispatch({ type: "LOGIN", payload: "Not Ready" });
    return <div>test</div>;
  }
}
