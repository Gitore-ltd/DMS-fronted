import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./route/App"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Provider } from 'react-redux';
import * as serviceWorker from "./serviceWorker";
import configureStore from './store/configureStore';

toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
