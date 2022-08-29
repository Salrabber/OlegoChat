import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";
import { rootReducer } from "./redux/rootReducer";

const store = configureStore({
  reducer: {
    global: rootReducer,
  }
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


