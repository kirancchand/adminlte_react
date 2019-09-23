import React, { Component } from "react";
//import { Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../App.css";
import { connect } from "react-redux";
import { loginaction } from "../Redux/action";
import { Redirect } from "react-router-dom";
class IndexPage extends Component {
  componentDidMount() {
    document.body.className = "hold-transition login-page";
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status_msg: "",
      login_status: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    let { email, password } = this.state;
    let { status_msg, login_status } = this.props;
    if (login_status === true) {
      localStorage.setItem("email", this.state.email);
      return <Redirect to="/home" />;
    } else {
      return (
        <div className="login-box">
          <div className="login-logo">
            <a href="fake">
              <b>Admin</b>LTE {status_msg}
            </a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form name="loginform" onSubmit={this.onSubmit}>
              <div className="form-group has-feedback">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={e => this.setState({ email: e.target.value })}
                  value={email}
                />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={e => this.setState({ password: e.target.value })}
                  value={password}
                />
                <span className="glyphicon glyphicon-lock form-control-feedback" />
              </div>
              <div className="row">
                <div className="col-xs-2"></div>
                <div className="col-xs-6">
                  <div className="checkbox icheck">
                    <label>
                      <input type="checkbox" /> Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-xs-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a
                href="fake"
                className="btn btn-block btn-social btn-facebook btn-flat"
              >
                <i className="fa fa-facebook" /> Sign in using Facebook
              </a>
              <a
                href="fake"
                className="btn btn-block btn-social btn-google btn-flat"
              >
                <i className="fa fa-google-plus" /> Sign in using Google+
              </a>
            </div>
            <a href="fake">I forgot my password</a>
            <br />
            <a href="/register" className="text-center">
              Register a new membership
            </a>
          </div>
        </div>
      );
    }
  }
  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    //    localStorage.setItem("email", email);
    this.props.login(email, password);
    this.setState({
      email: email,
      password: password
    });
  }
}

const mapStateToProps = state => {
  return {
    status_msg: state.status_msg,
    login_status: state.login_status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //login: (email, password) => dispatch({ type: "TRUE", payload: "Logged In" })
    login: (email, password) => dispatch(loginaction(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
