import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar></NavBar>
      <HomePage/>
    </div>
  );
}

export default App;
