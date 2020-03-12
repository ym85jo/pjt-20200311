import React from 'react';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>  
          <Route exact path="/"></Route>
          <Route path="/about"><About/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
