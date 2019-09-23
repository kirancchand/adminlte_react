import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducer";
const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
store.subscribe(() => {
  console.log("now in store", store.getState());
});
export default store;
