import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./app/layout/Header";
import Counter from "./app/components/Counter";
import DestinationList from "./app/components/DestinationList";
import Destinationfact from "./app/components/Destinationfact";
import ResetApp from "./app/components/ResetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <ResetApp />
      <Counter />
      <div className="p-4 border text-center">
        <h4 className="text-success pb-4"></h4>
        <DestinationList />
        <Destinationfact />
      </div>
    </Provider>
  </React.StrictMode>
);
