import React from 'react';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import History from './components/History';
import Study from './pages/Study';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>  
          <Route exact path="/"><Home/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/history"><History/><Footer/></Route>
          <Route path="/study"><Study/><Footer/></Route>
        </Switch>
        
      </Router>
        
    </>
  );
}

export default App;
