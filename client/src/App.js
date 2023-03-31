import React from 'react'
import { BrowserRouter as Router, Route,BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PublicLayout from './router/PublicLayout.js';


function App() {

 return (
  <BrowserRouter>
    <Router>
      <Switch>
        <Route path="/*" component={PublicLayout} />
      </Switch>
   </Router>
  </BrowserRouter>
 );
}

export default App