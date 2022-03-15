import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";

import { store } from "./app/store";
import * as serviceWorker from "./serviceWorker";

const render = async (): Promise<void> => {
  const App = (await import("./app/components/App/App")).default;
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app/components/App/App", render);
}

serviceWorker.unregister();
