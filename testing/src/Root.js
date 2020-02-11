import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducers from "reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default props => {
  return (
    <Provider store={createStore(reducers, composeEnhancers())}>
      {props.children}
    </Provider>
  );
};
