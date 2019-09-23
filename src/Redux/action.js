const LOGIN_STATUS = "LOGIN_STATUS";
const LINK_VALUE = "LINK_VALUE";
const REGISTER_STATUS = "REGISTER_STATUS";

///function
export function loginaction(email, password) {
  return dispatch => {
    callLoginApi(email, password, status => {
      if (status === true) {
        dispatch(setLoginStatus("success", true));
      } else {
        dispatch(setLoginStatus("Invalid username or password", false));
      }
    });
  };
}

export function registeraction(user) {
  return dispatch => {
    callRegisterApi(user, status => {
      if (status === true) {
        dispatch(setRegisterStatus("success", true));
      } else {
        dispatch(setRegisterStatus("Invalid registration", false));
      }
    });
  };
}

export function linkaction(linkvalue) {
  return dispatch => {
    dispatch(setLinkValue(linkvalue));
  };
}

//set dispatch
function setLoginStatus(status_msg, login_status) {
  return {
    type: LOGIN_STATUS,
    status_msg,
    login_status
  };
}
function setRegisterStatus(status_msg, registerstatus) {
  return {
    type: REGISTER_STATUS,
    status_msg,
    registerstatus
  };
}
function setLinkValue(linkvalue) {
  return {
    type: LINK_VALUE,
    linkvalue
  };
}



//api links
function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === "a@a.com" && password === "aa") {
      return callback(true);
    } else {
      return callback(false);
    }
  }, 1000);
}

function callRegisterApi(user, callback) {
  setTimeout(() => {
    if (user.email === "a@a.com" && user.password === "aa") {
      return callback(true);
    } else {
      return callback(false);
    }
  }, 1000);
}




