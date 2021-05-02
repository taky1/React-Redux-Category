import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import { Route , Switch } from "react-router-dom";
import Home from "./components/Home";
import Addbook from "./components/Addbook";

import Editbook from "./components/Editbook";

const App = () => {
  return (
    <div className='App'>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path='/' component={()=> <Home />}>
       
        </Route>
        <Route path='/add' component={()=> <Addbook />}>
          
        </Route>

        <Route path='/edit/:id'>
        <Editbook />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
