import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="black" />
      <Header />
      <Home />
    </div>
  );
}

export default App;
