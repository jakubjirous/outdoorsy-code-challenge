import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App/App";
import { store } from "./redux/store";
import { GlobalStyles } from "./theme/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
