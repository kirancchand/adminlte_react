import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexPage from "./Cover/IndexPage";
import Register from "./Cover/Register";
import Login from "./Cover/Login";
import Home from "./Home/Home";
// import Data from "./Home/pages/Data";
import Datachart from "./Home/pages/Datachart";
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={IndexPage} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          {/* <Route path="/data" exact component={Data} /> */}
          {/* <Route path="/datachart" exact component={Datachart} /> */}
          {/* <Route path="/" component={Contents} /> */}
          {/* <Route path="/datas" component={Datas} /> */}
        </Router>
      </div>
    );
  }
}
