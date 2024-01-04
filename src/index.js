import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import reducer from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
