import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

function App () {
  return (
    //BEM Conventional in Styling
    (
      <div className="App">
        <Header />
        <Home />
      </div>
    )
  );
}

export default App;
