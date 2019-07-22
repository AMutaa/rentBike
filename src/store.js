import { createStore, combineReducers, applyMiddleware } from "redux";
import cities from "./Components/reducers/BikeReducers";
import thunk from "redux-thunk";

const logger = store => next => action => {
  let previousState = store.getState();
  next(action);
  let nextState = store.getState();
  console.info(action.type, {
    action,
    previousState,
    nextState
  });
};

const reducer = combineReducers({
  cities
});

const middleware = [logger, thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
