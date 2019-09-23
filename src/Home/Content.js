import React, { Component } from "react";
import JTable from "./pages/JTable";
import RTable from "./pages/RTable";
import RSApp from "./pages/RSApp";
//import Test from "./pages/Test";
import Datachart from "./pages/Datachart";
import store from "../Redux/store";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkvalue: "home"
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ linkvalue: store.getState().linkvalue });
      console.log(store.getState().linkvalue);
    });
  }

  render() {
    return (
      <div>
        <div className="content-wrapper">
          {this.state.linkvalue}
          {this.state.linkvalue == "home" && <Datachart />}
          {/* sijo */}
          {this.state.linkvalue == "1" && <Datachart />}
          {/* kiran */}
          {this.state.linkvalue == "RSApp" && <RSApp />}
          {this.state.linkvalue == "JTable" && <JTable />}
          {this.state.linkvalue == "RTable" && <RTable />}
          {/* <Test /> */}
        </div>
      </div>
    );
  }
}
