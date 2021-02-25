import React, { useState, useEffect } from 'react';
import './App.css';
import {
  useLocation,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Main from './components/Main/Main';
import SavedNews from './components/SavedNews/SavedNews';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PopupSuccessfuly from './components/PopupSuccessfuly/PopupSuccessfuly';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { register, authorize, getContent } from './components/Authentification/auth';
import newsApi from './utils/NewsApi';
import mainApi from './utils/MainApi';

function App() {
  const location = useLocation();
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isPopupSuccessfulyOpen, setPopupSuccessfulyOpen] = useState(false);

  function closeAllPopups() {
    setSignInOpen(false);
    setSignUpOpen(false);
    setPopupSuccessfulyOpen(false);
  }

  function handleSignInOpen() {
    setSignInOpen(true);
  }

  function handleSignUpOpen() {
    setSignUpOpen(true);
  }

  function handleSuccessfulyOpen() {
    closeAllPopups();
    setPopupSuccessfulyOpen(true);
  }

  function escForClosePopups(event) {
    if (event.keyCode === 27) {
      closeAllPopups();
    }
  }

  // const [result, setResult] = React.useState();
  const history = useHistory();
  const [loggedIn, setLogged] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((res) => {
        setUserData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getContent(jwt)
        .then((res) => {
          if (res) {
            setUserData({
              name: res.name,
              email: res.email,
            });
            setLogged(true);
            history.push('/');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLogin = (password, email) => {
    authorize(password, email)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setUserData({
            password: data.password,
            email: data.email,
          });
          setLogged(true);
          history.push('/');
          closeAllPopups();
        }
      })
      .catch((err) => {
        // handleInfoTooltip();
        // setResult(false);
        console.log(err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setUserData({
      email: '',
      password: '',
    });
    setLogged(false);
  };

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then((data) => {
        setUserData({
          name: data.name,
          email: data.email,
          password: data.password,
        });
        setLogged(true);
        history.push('/');
        handleSuccessfulyOpen();
        // setResult(true);
        // handleInfoTooltip();
      })
      .catch((err) => {
        // handleInfoTooltip();
        // setResult(false);
        console.log(err);
      });
  };

  React.useEffect(() => {
    tokenCheck();
  }, []);

  const [articlesData, setArticlesData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // const [inputValue, setInputValue] = useState('');

  function getArticles(keyword) {
    console.log('hey');
    setLoading(true);
    newsApi.getArticles(keyword)
      .then((res) => {
        console.log(res);
        setArticlesData(res);
        console.log('hey');
      })
      .finally(() => {
        console.log(articlesData);
        setLoading(false);
      });
  }

  function toLogin() {
    closeAllPopups();
    handleSignInOpen();
  }

  function toSignUp() {
    closeAllPopups();
    handleSignUpOpen();
  }

  const [savedArticles, setSavedArticles] = useState();

  function getSavedArticles() {
    mainApi
      .getSavedArticles()
      .then((res) => {
        setSavedArticles(res);
      })
      .catch();
  }
  // сделать файл утилиты, занести туда функцию счетчик сохраненных статей, функцию которая вытягивает из массива категории - если больше трех то те, которых больше всех + N-м другим
  // function currentArticles(articlesArray) {
  //   const arrLength = articlesArray.length();
  //   console.log(articlesArray);
  // }

  return (
    <div onKeyDown={escForClosePopups} className="App">
      <Register handleRegister={handleRegister} isOpen={isSignUpOpen} onClose={closeAllPopups} openSignIn={toLogin} />
      <Login handleLogin={handleLogin} tokenCheck={tokenCheck} isOpen={isSignInOpen} onClose={closeAllPopups} onSuccessfuly={handleSuccessfulyOpen} openSignUp={toSignUp} />
      <PopupSuccessfuly isOpen={isPopupSuccessfulyOpen} onClose={closeAllPopups} openSignIn={toLogin} />
      <Header userName={userData.name} isLogged={loggedIn} onSignIn={handleSignInOpen} location={location} logOut={handleLogout} />
      <Switch>
        <Route exact path='/'>
          <Main location={location} articles={articlesData} getArticles={getArticles} newsLoading={isLoading} ></Main>
        </Route>
        <Route path='/saved-news'>
          <SavedNews location={location} currentArticles={savedArticles} savedArticles={getSavedArticles}></SavedNews>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
