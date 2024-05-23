import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/components/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
    </Provider>
  </React.StrictMode>
);
