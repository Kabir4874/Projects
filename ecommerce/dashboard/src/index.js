import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="loading...">
        <App />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              backgroundColor: "#283046",
              color: "#fff",
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
