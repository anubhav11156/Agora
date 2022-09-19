import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import ScrollToTop from "react-scroll-to-top";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="black" />
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
