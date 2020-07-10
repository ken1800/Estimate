import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
  timeout: 5000,
  position: "bottom right",
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
      </AlertProvider>{" "}
    </BrowserRouter>{" "}
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
