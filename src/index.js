import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store, { persistor } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
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
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
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
