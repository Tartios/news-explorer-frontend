import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import SavedNews from './components/SavedNews/SavedNews';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Main></Main>
        </Route>
        <Route path='/saved-news'>
          <SavedNews></SavedNews>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
