import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Content from "./Content";
export default class Home extends Component {
  componentDidMount() {
    document.body.className = "skin-blue sidebar-mini";
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <Sidebar />
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
}
