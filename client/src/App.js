import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import ContactsContainer from './containers/ContactsContainer';
import AccountContainer from './containers/AccountContainer';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tabs</h1>
        <NavBar/>
      </header>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/account' component={AccountContainer}/>
      <Route exact path='/contacts' component={ContactsContainer}/>
    </div>
  );
}

export default App;
