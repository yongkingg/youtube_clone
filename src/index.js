import { Provider } from "react-redux";
import App from "./App";
import ReactDOM from "react-dom/client";
import store from "Shared/reudx/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
