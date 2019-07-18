import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./Components/reducers/Reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = [logger, thunk];
const reducer = combineReducers({
  reducers
});

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
