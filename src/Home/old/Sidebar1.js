import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Datachart from "./pages/Datachart";
import Content from "./Content";
import { connect } from "react-redux";
import { linkaction } from "../Redux/action";
// function Contents() {
//   return (
//     <div>
//       <Content />
//     </div>
//   );
// }
// function About() {
//   return (
//     <div>
//       <Content />
//     </div>
//   );
// }
// function Datas() {
//   return (
//     <div>
//       <Datachart />
//     </div>
//   );
// }

class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state={
      data: 'Initial data...',
      linkvalue:"",
      trigger:false
    }
    this.updateState = this.updateState.bind(this);
  }
  updateState(id) {
    this.setState({data:id,trigger:true});
    this.props.login(id);
  };
  render() {
    let { data } = this.state;
    let { linkvalue } = this.props;

    return (
      <Router>
            {/* <Route path="/d" component={About} />
            <Route path="/" component={Contents} />
            <Route path="/data" component={Datas} /> */}
          {this.state.trigger ?
                        <Content id={this.state.linkvalue} updateState={this.updateState}/> :
                        null
                      }
    
      <div>
      
        <aside className="main-sidebar">
            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">
              {/* Sidebar user panel */}
              <div className="user-panel">
                <div className="pull-left image">
                  <img
                    src={"dist/img/user2-160x160.jpg"}
                    className="img-circle"
                    alt="User"
                  />
                </div>
                <div className="pull-left info">
                  <p>Alexander Pierce</p><h4>{this.state.data}</h4>
                  <a href="fake_url">
                    <i className="fa fa-circle text-success" /> Online
                  </a>
                </div>
              </div>
              {/* search form */}
              <form action="#" method="get" className="sidebar-form">
                <div className="input-group">
                  <input
                    type="text"
                    name="q"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      name="search"
                      id="search-btn"
                      className="btn btn-flat"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
              {/* /.search form */}
              {/* sidebar menu: : style can be found in sidebar.less */}
              <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                <li className="active treeview menu-open">
                  <a href="fake_url">
                    <i className="fa fa-dashboard" /> <span>Dashboard</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li className="active">
                      <a href="index2.html">
                        <i className="fa fa-circle-o" /> Dashboard v2
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="treeview">
                  <a href="fake_url">
                    <i className="fa fa-share" /> <span>Menu</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="#" onClick={() => this.updateState(1)}>
                      <i className="fa fa-circle-o" /> Level One
                    
                      {/* <Link to="/data">
                        <i className="fa fa-circle-o" /> Level One
                      </Link> */}
                      </a>
                    </li>
                    <li className="treeview">
                      <a href="fake_url">
                        <i className="fa fa-circle-o" /> Data Tables
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                        <a href="#" onClick={() => this.updateState(2)}>
                            <i className="fa fa-circle-o" /> Jquery Data Table
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => this.updateState(3)}>
                          <i className="fa fa-circle-o" /> React Data Table
                          </a>
                        </li>
                        <li className="treeview">
                          <a href="fake_url">
                            <i className="fa fa-circle-o" /> Level Two
                            <span className="pull-right-container">
                              <i className="fa fa-angle-left pull-right" />
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="fake_url">
                                <i className="fa fa-circle-o" /> Level Three
                              </a>
                            </li>
                            <li>
                              <a href="fake_url">
                                <i className="fa fa-circle-o" /> Level Three
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="fake_url">
                        <i className="fa fa-circle-o" /> Level One
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://adminlte.io/docs">
                    <i className="fa fa-book" /> <span>Documentation</span>
                  </a>
                </li>
                <li className="header">LABELS</li>
                <li>
                  <a href="fake_url">
                    <i className="fa fa-circle-o text-red" />{" "}
                    <span>Important</span>
                  </a>
                </li>
                <li>
                  <a href="fake_url">
                    <i className="fa fa-circle-o text-yellow" />{" "}
                    <span>Warning</span>
                  </a>
                </li>
                <li>
                  <a href="fake_url">
                    <i className="fa fa-circle-o text-aqua" />{" "}
                    <span>Information</span>
                  </a>
                </li>
              </ul>
            </section>
        

          {/* /.sidebar */}
        </aside>
      </div>

          </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    linkvalue:state.linkvalue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //login: (email, password) => dispatch({ type: "TRUE", payload: "Logged In" })
    login: (id) =>  dispatch(linkaction(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
