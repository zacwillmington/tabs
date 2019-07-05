import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import ContactsContainer from './containers/ContactsContainer';
import AccountContainer from './containers/AccountContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar></NavBar>
      <HomePage/>
      <AccountContainer />
      <ContactsContainer />
    </div>
  );
}

export default App;
