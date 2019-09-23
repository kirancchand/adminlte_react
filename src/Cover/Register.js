import React, { Component } from "react";
import { connect } from "react-redux";
import { registeraction } from "../Redux/action";
class Register extends Component {
  componentDidMount() {
    document.body.className = "hold-transition register-page";
  }
  constructor(props) {
    super(props);
    this.state = {
      user:{
      fname:"",
      email: "",
      password: "",
      },
      submitted:false,
      status_msg:"",
      register_status:false
      
    };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    const {name,value}=event.target;
    const {user}=this.state;
    this.setState({
      user:{
        ...user,
        [name]:value
      }
    });
    console.log(user.fname)
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({submitted:true});
    const {user}=this.state;
    this.props.register(user)
  }

  render() {
    const{user,submitted}=this.state;
    const {register_status,status_msg}=this.props;
    return (
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        <div className="register-box-body">
          <p className="login-box-msg">Register a new membership</p>
          <form name="register_form" onSubmit={this.handleSubmit}>
            <div className="form-group has-feedback">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                name="fname"
                id="fname"
                value={user.fname}
                onChange={this.handleChange}
              />
              <span className="glyphicon glyphicon-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                id="email"
                value={user.email}
                onChange={this.handleChange}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                id="password"
                value={user.password}
                onChange={this.handleChange}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-2"></div>
              <div className="col-xs-6">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox" /> I agree to the{" "}
                    <a href="fake">terms</a>
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Register
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
              <i className="fa fa-facebook" /> Sign up using Facebook
            </a>
            <a
              href="fake"
              className="btn btn-block btn-social btn-google btn-flat"
            >
              <i className="fa fa-google-plus" /> Sign up using Google+
            </a>
          </div>
          <a href="/" className="text-center">
            I already have a membership
          </a>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    status_msg:state.status_msg,
    register_status: state.register_status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //login: (email, password) => dispatch({ type: "TRUE", payload: "Logged In" })
    register: (user) => dispatch(registeraction(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
