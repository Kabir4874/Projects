import ReactDOM from "react-dom/client";
import "./index.css";
import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";
import { Provider } from "react-redux";
import store from "./store";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
