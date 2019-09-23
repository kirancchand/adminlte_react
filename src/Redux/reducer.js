export default function reducer(
  state = {
    status_msg: "",
    login_status: "",
    linkvalue:"",
    register_status:"",
    status_msg:""

  },
  action
) {
  if (action.type === "LOGIN_STATUS") {
    return Object.assign({}, state, {
      status_msg: action.status_msg,
      login_status: action.login_status
    });
  }
  if (action.type === "LINK_VALUE") {
    return Object.assign({}, state, {
      linkvalue: action.linkvalue,
    });
  }
  if (action.type === "REGISTER_STATUS") {

    return Object.assign({}, state, {
      status_msg:action.status_msg,
      register_status: action.registerstatus
    });
  }
  return state;
}
// export default function reducer(state, action) {
//   if (action.type === "TRUE") {
//     return Object.assign({}, state, {
//       status: action.payload
//     });
//   }
//   if (action.type === "FALSE") {
//     return Object.assign({}, state, {
//       status: "wrong"
//     });
//   }
//   return state;
// }
