import React, { useState } from 'react';
import './App.css';
import {
  useLocation,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './components/Main/Main';
import SavedNews from './components/SavedNews/SavedNews';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PopupSignIn from './components/PopupSignIn/PopupSignIn';
import PopupSignUp from './components/PopupSignUp/PopupSignUp';
import PopupSuccessfuly from './components/PopupSuccessfuly/PopupSuccessfuly';

function App() {
  const location = useLocation();
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isPopupSuccessfulyOpen, setPopupSuccessfulyOpen] = useState(false);

  function handleSignInOpen() {
    setSignInOpen(true);
  }

  function handleSignUpOpen() {
    setSignUpOpen(true);
  }

  function handleSuccessfulyOpen() {
    setPopupSuccessfulyOpen(true);
  }

  function colseAllPopups() {
    setSignInOpen(false);
    setSignUpOpen(false);
    setPopupSuccessfulyOpen(false);
  }

  return (
    <div className="App">
      <PopupSignIn isOpen={isSignInOpen} onClose={colseAllPopups} onSignUp={handleSignUpOpen} onSuccessfuly={handleSuccessfulyOpen}/>
      <PopupSignUp isOpen={isSignUpOpen} onClose={colseAllPopups} onSignIn={handleSignInOpen}/>
      <PopupSuccessfuly isOpen={isPopupSuccessfulyOpen} onClose={colseAllPopups} />
      <Header onSignIn={handleSignInOpen} location={location}/>
      <Switch>
        <Route exact path='/'>
          <Main location={location}></Main>
        </Route>
        <Route path='/saved-news'>
          <SavedNews location={location}></SavedNews>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
