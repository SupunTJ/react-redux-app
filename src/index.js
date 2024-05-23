import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./app/layout/Header";
import Counter from "./app/components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Counter />
    </Provider>
  </React.StrictMode>
);
