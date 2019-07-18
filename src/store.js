import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./Components/reducers/Reducers";
import logger from "redux-logger";

const reducer = combineReducers({
  reducers
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
