import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { SWRConfig } from "swr";
import axios from "axios";
import NotificationProvider from "./components/NotificationProvider";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <NotificationProvider>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          shouldRetryOnError: false,
          fetcher: (url) => axios(url).then((res) => res.data),
        }}
      >
        <App />
      </SWRConfig>
    </NotificationProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
