import React, { Component } from "react";
import { connect } from "react-redux";
import { linkaction } from "../Redux/action";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Initial data...",
      linkvalue: "",
      trigger: false
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(id) {
    this.setState({ data: id, trigger: true });
    this.props.updateLink(id);
  }
  render() {
    let { data } = this.state;
    let { linkvalue } = this.props;

    return (
   

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
                  <p>Alexander Pierce</p>
                  <h4></h4>
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

                    {/* sijo */}
                    <li>
                      <a href="#" onClick={() => this.updateState(1)}>
                        <i className="fa fa-circle-o" /> Sijo
                      </a>
                    </li>


                    {/* kiran */}
                    <li className="treeview">
                      <a href="fake_url">
                        <i className="fa fa-circle-o" /> Kiran
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                        <a href="#" onClick={() => this.updateState("RSApp")}>
                                <i className="fa fa-circle-o" /> React Spring To Do App
                        </a>
                        </li>
                        <li className="treeview">
                          <a href="fake_url">
                            <i className="fa fa-circle-o" /> DataTables
                            <span className="pull-right-container">
                              <i className="fa fa-angle-left pull-right" />
                            </span>
                          </a>
                          <ul className="treeview-menu">
                          <li>
                          <a href="#" onClick={() => this.updateState("JTable")}>
                            <i className="fa fa-circle-o" /> Jquery Data Table
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => this.updateState("RTable")}>
                            <i className="fa fa-circle-o" /> React Data Table
                          </a>
                        </li>
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
    );
  }
}
const mapStateToProps = state => {
  return {
    linkvalue: state.linkvalue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //login: (email, password) => dispatch({ type: "TRUE", payload: "Logged In" })
    updateLink: id => dispatch(linkaction(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
