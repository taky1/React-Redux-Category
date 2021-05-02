import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import  { Provider } from "react-redux";
import store from "../src/redux/store/store";



ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


