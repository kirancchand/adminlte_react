import React, { Component } from "react";
import Data from "./pages/Data";
import DataReact from "./pages/DataReact";
//import Test from "./pages/Test";
import Datachart from "./pages/Datachart";
export default class Content extends Component {
  constructor(props){
    super(props);
    this.state={
      linkvalue:""
    }
    
  }
  componentDidMount(){
    this.setState({linkvalue:this.props.linkvalue});
  }
  render() {
    return (
      <div>
        <div className="content-wrapper">
        {this.props.linkvalue}
        {this.props.linkvalue=="" && <Datachart />}
        {this.props.linkvalue=="2" && <Data />}
        {this.props.linkvalue=="3" &&  <DataReact />}
          {/* <Test /> */}
        </div>
      </div>
    );
  }
}
